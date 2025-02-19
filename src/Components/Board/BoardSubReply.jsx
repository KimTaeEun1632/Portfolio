import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import "./BoardSubReply.css";
import Badge from "../Badge/Badge";
import SubReplySubmit from "./SubReplySubmit";
import BoardReplyEdit from "./BoardReplyEdit";

const BoardSubReply = ({ boardId, parentId, content, depth, user }) => {
  const [subReplies, setSubReplies] = useState([]);
  const [editedReply, setEditedReply] = useState("");
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [openReplyId, setOpenReplyId] = useState(null);

  const handleReplyEditClick = (replyId, reply) => {
    setEditingReplyId(replyId);
    setEditedReply(reply);
  };

  const handleEditReply = async (replyId) => {
    if (!editedReply.trim()) {
      alert("댓글을 입력해주세요.");
      return;
    }

    try {
      const replyDocRef = doc(db, "contents", boardId, "replies", replyId);
      await updateDoc(replyDocRef, { reply: editedReply });

      setSubReplies((prevSubReplies) =>
        prevSubReplies.map((r) =>
          r.id === replyId ? { ...r, reply: editedReply } : r
        )
      );
      setEditingReplyId(null);
      alert("댓글이 수정되었습니다.");
    } catch (error) {
      console.error("댓글 수정 오류:", error);
      alert("댓글 수정에 실패했습니다.");
    }
  };

  useEffect(() => {
    const subRepliesRef = collection(db, "contents", boardId, "replies");
    const q = query(
      subRepliesRef,
      where("parentId", "==", parentId),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const subReplyList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setSubReplies(subReplyList);
    });

    return () => unsubscribe();
  }, [boardId, parentId]);

  return (
    <div className="subReplies-wrapper">
      {subReplies.length > 0 &&
        subReplies.map((r) => (
          <div key={r.id} className="subReply-item">
            <div
              className="subReply-item-wrapper"
              style={{
                marginLeft: `${depth * 20}px`,
                paddingLeft: `${depth * 18}px`,
              }}
            >
              <div className="board-reply-top ">
                <div>
                  <div className="board-reply-nickname-wrapper">
                    <p className="board-reply-nickname">{r.nickname}</p>
                    {content.userId === r.userId && <Badge item={r} />}
                  </div>
                  <p className="board-reply-date">
                    {new Date(r.createdAt).toLocaleString()}
                  </p>
                </div>
                {user && user.uid === r.userId && (
                  <BoardReplyEdit
                    onEdit={() => handleReplyEditClick(r.id, r.reply)}
                    boardId={boardId}
                    replyId={r.id}
                  />
                )}
              </div>
              {editingReplyId === r.id ? (
                <div>
                  <textarea
                    value={editedReply}
                    onChange={(e) => setEditedReply(e.target.value)}
                    className="edit-reply-input"
                  />
                  <div className="edit-reply-buttons">
                    <button onClick={() => handleEditReply(r.id)}>
                      수정 완료
                    </button>
                    <button onClick={() => setEditingReplyId(null)}>
                      취소
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <div className="board-reply-body">
                    <p style={{ whiteSpace: "pre-wrap" }}>{r.reply}</p>
                    <button
                      className="subReply-button"
                      onClick={() =>
                        setOpenReplyId(openReplyId === r.id ? null : r.id)
                      }
                    >
                      {openReplyId === r.id ? "취소" : "답글달기"}
                    </button>
                  </div>
                  {openReplyId === r.id && (
                    <SubReplySubmit
                      user={user}
                      boardId={boardId}
                      parentId={r.id}
                      parent={r}
                      setOpenReplyId={setOpenReplyId}
                    />
                  )}
                  {/* 🔽 대댓글 컴포넌트 추가 */}
                  <BoardSubReply
                    user={user}
                    content={content}
                    boardId={boardId}
                    parentId={r.id}
                    depth={1}
                  />
                </>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};

export default BoardSubReply;
