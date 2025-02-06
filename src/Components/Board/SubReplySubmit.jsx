import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase";
import "./SubReplySubmit.css";

const SubReplySubmit = ({ user, boardId, parentId, parent }) => {
  const [subReply, setSubReply] = useState("");

  const handleSubReplySubmit = async (event) => {
    event.preventDefault();
    if (!subReply.trim() || !user) return;

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

      setSubReply("");
    } catch (error) {
      console.error("대댓글 등록 오류:", error);
      alert("대댓글 등록에 실패했습니다.");
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
