import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  runTransaction,
} from "firebase/firestore";
import React, { useEffect, useMemo, useState } from "react";
import { auth, db } from "../../../firebase";
import { useParams } from "react-router-dom";
import "./boardContent.css";

const BoardContent = () => {
  const [content, setContent] = useState(null);
  const [reply, setReply] = useState("");
  const [replies, setReplies] = useState([]);

  const { id } = useParams();
  const boardId = id;
  const docRef = useMemo(() => doc(db, "contents", boardId), [boardId]);
  const user = auth.currentUser;

  const handleSubmit = async (event) => {
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
              <a className="board-content-detail-header-link" href="/board">
                자유게시판
              </a>
              <p>{content.rating}</p>
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
              <div>드롭다운</div>
            </div>
          </div>
          <div className="board-content-detail-body">
            <p style={{ whiteSpace: "pre-wrap" }}>{content.content}</p>
          </div>

          <div className="board-content-detail-footer">
            <div className="board-content-detail-footer-header">
              <strong>댓글 {replies.length}</strong>
            </div>
            <div className="board-content-detail-footer-body">
              <form onSubmit={handleSubmit}>
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
                  replies.map((r) => (
                    <div key={r.id} className="board-reply-item">
                      <p className="board-reply-nickname">{r.nickname}</p>
                      <p className="board-reply-date">
                        {new Date(r.createdAt).toLocaleString()}
                      </p>
                      <p style={{ whiteSpace: "pre-wrap" }}>{r.reply}</p>
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
