import { addDoc, collection, doc, runTransaction } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase";
import "./SubReplySubmit.css";

const SubReplySubmit = ({
  user,
  boardId,
  parentId,
  parent,
  setOpenReplyId,
}) => {
  const [subReply, setSubReply] = useState("");

  const handleSubReplySubmit = async (event) => {
    if (!subReply || !user || subReply.length > 500) return;
    event.preventDefault();

    try {
      const repliesCollectionRef = collection(
        db,
        "contents",
        boardId,
        "replies"
      );

      await addDoc(repliesCollectionRef, {
        reply: subReply,
        nickname: user.displayName,
        userId: user.uid,
        createdAt: Date.now(),
        depth: parent ? parent.depth + 1 : 0,
        parentId: parentId,
        path: parent ? `${parent.path}/${parent.id}` : "",
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

      setSubReply("");
    } catch (error) {
      console.error("대댓글 등록 오류:", error);
      alert("대댓글 등록에 실패했습니다.");
    } finally {
      setOpenReplyId(null);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubReplySubmit}>
        <textarea
          className="subReply-textarea"
          placeholder="대댓글을 입력하세요."
          value={subReply}
          onChange={(e) => setSubReply(e.target.value)}
          maxLength={500}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default SubReplySubmit;
