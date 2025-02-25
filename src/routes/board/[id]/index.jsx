import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  runTransaction,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { auth, db } from "../../../firebase";
import { Link, useParams } from "react-router-dom";
import "./boardContent.css";
import Star from "../../../Components/Star";
import BoardEdit from "../../../Components/Board/BoardEdit";
import BoardReplyEdit from "../../../Components/Board/BoardReplyEdit";
import Badge from "../../../Components/Badge/Badge";
import BoardSubReply from "../../../Components/Board/BoardSubReply";
import SubReplySubmit from "../../../Components/Board/SubReplySubmit";

const BoardContent = () => {
  const [content, setContent] = useState(null);
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");
  const [editedReply, setEditedReply] = useState("");
  const [editingReplyId, setEditingReplyId] = useState(null);
  const [openReplyId, setOpenReplyId] = useState(null);

  const { id } = useParams();
  const boardId = id;
  const docRef = useMemo(() => doc(db, "contents", boardId), [boardId]);
  const user = auth.currentUser;

  // 댓글 쓰기
  const handleReplySubmit = async (event, parent = null) => {
    event.preventDefault();
    if (!reply || !user || reply.length > 500) return;

    try {
      const repliesCollectionRef = collection(
        db,
        "contents",
        boardId,
        "replies"
      );

      await addDoc(repliesCollectionRef, {
        reply,
        nickname: user.displayName,
        userId: user.uid,
        createdAt: Date.now(),
        depth: parent ? parent.depth + 1 : 0,
        parentId: parent ? parent.id : null,
        path: parent ? [...parent.path, parent.id] : ["root"],
      });

      const boardDocRef = doc(db, "contents", boardId);
      await runTransaction(db, async (transaction) => {
        const boardDocSnap = await transaction.get(boardDocRef);

        if (!boardDocSnap.exists()) {
          throw new Error("게시글을 찾을 수 없습니다.");
        }

        const newReplyCount = (boardDocSnap.data().replyCount || 0) + 1;

        transaction.update(boardDocRef, { replyCount: newReplyCount });
      });

      setReply("");
    } catch (e) {
      console.error("댓글 등록 오류:", e);
      alert("댓글 등록에 실패했습니다.");
    }
  };

  // 게시물 수정정
  const handleEditClick = () => {
    if (content) {
      setEditedContent(content.content);
      setIsEditing(true);
    }
  };

  const handleEdit = async () => {
    if (!editedContent.trim()) {
      alert("내용을 입력해주세요.");
      return;
    }

    try {
      await updateDoc(docRef, {
        content: editedContent,
      });

      setContent((prev) => ({
        ...prev,
        content: editedContent,
      }));
      setIsEditing(false);
      alert("게시글이 수정되었습니다.");
    } catch (error) {
      console.error("게시글 수정 오류:", error);
      alert("게시글 수정에 실패했습니다.");
    }
  };

  // 댓글 수정
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

      setReplies((prevReplies) =>
        prevReplies.map((r) =>
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

  // 게시물 가져오기
  useEffect(() => {
    const fetchDocument = async () => {
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("문서 데이터:", docSnap.data());
          setContent(docSnap.data());
        } else {
          console.log("문서가 존재하지 않습니다.");
        }
      } catch (error) {
        console.error("문서 가져오기 오류:", error);
      }
    };

    fetchDocument();
  }, [docRef]);

  // 댓글 가져오기
  useEffect(() => {
    const repliesCollectionRef = collection(db, "contents", boardId, "replies");

    const unsubscribe = onSnapshot(repliesCollectionRef, (snapshot) => {
      const replyList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      replyList.sort((a, b) => b.createdAt - a.createdAt);
      setReplies(replyList);
    });

    return () => unsubscribe();
  }, [boardId]);

  return (
    <div className="board-content-page">
      {content ? (
        <div className="board-content-wrapper">
          <div className="board-content-detail-header">
            <div className="board-content-detail-header-top">
              <Link className="board-content-detail-header-link" to="/board">
                자유게시판
              </Link>
              <Star star={content.rating} />
              <h2 className="board-content-detail-header-title">
                {content.title}
              </h2>
            </div>
            <div className="board-content-detail-header-bottom">
              <div>
                <p className="board-content-detail-header-nickname">
                  {content.nickname}
                </p>
                <p className="board-content-detail-header-date">
                  {new Date(content.createdAt).toLocaleString()}
                </p>
              </div>
              {user && user.uid === content.userId && (
                <BoardEdit docRef={docRef} onEdit={handleEditClick} />
              )}
            </div>
          </div>
          <div className="board-content-detail-body">
            {isEditing ? (
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                className="edit-content-input"
              />
            ) : (
              <p style={{ whiteSpace: "pre-wrap" }}>{content.content}</p>
            )}
          </div>
          {isEditing && (
            <div className="edit-buttons">
              <button onClick={handleEdit}>수정 완료</button>
              <button onClick={() => setIsEditing(false)}>취소</button>
            </div>
          )}

          <div className="board-content-detail-footer">
            <div className="board-content-detail-footer-header">
              <strong>댓글 {replies.length}</strong>
            </div>
            <div className="board-content-detail-footer-body">
              <form onSubmit={handleReplySubmit}>
                <div>
                  <textarea
                    className="board-content-reply"
                    placeholder="댓글을 입력해 주세요."
                    value={reply}
                    maxLength={500}
                    onChange={(e) => setReply(e.target.value)}
                  />
                </div>
                <div className="board-content-reply-button-wrapper">
                  <button className="board-content-reply-button" type="submit">
                    등록
                  </button>
                </div>
              </form>

              <div className="board-content-replies">
                {replies.length > 0 ? (
                  replies
                    .filter((r) => r.depth === 0) // 🔽 상위 댓글(depth 0)만 필터링
                    .map((r) => (
                      <div key={r.id} className="board-reply-item">
                        <div className="board-reply-top">
                          <div>
                            <div className="board-reply-nickname-wrapper">
                              <p className="board-reply-nickname">
                                {r.nickname}
                              </p>
                              {content.userId === r.userId && (
                                <Badge item={r} />
                              )}
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
                              <p style={{ whiteSpace: "pre-wrap" }}>
                                {r.reply}
                              </p>
                              <button
                                className="subReply-button"
                                onClick={() =>
                                  setOpenReplyId(
                                    openReplyId === r.id ? null : r.id
                                  )
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
                    ))
                ) : (
                  <p>댓글이 없습니다.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p>로딩 중...</p>
      )}
    </div>
  );
};

export default BoardContent;
