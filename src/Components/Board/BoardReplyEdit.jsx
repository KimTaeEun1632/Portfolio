import React, { useState } from "react";
import "./BoardReplyEdit.css";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase";

const BoardReplyEdit = ({ onEdit, boardId, replyId }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDeleteReply = async () => {
    if (!window.confirm("정말 이 댓글을 삭제하시겠습니까?")) return;

    try {
      const replyDocRef = doc(db, "contents", boardId, "replies", replyId);
      await deleteDoc(replyDocRef);

      alert("댓글이 삭제되었습니다.");
    } catch (error) {
      console.error("댓글 삭제 오류:", error);
      alert("댓글 삭제에 실패했습니다.");
    } finally {
      setDropdownOpen(false);
    }
  };

  const handleEditClick = () => {
    onEdit();
    setDropdownOpen(false);
  };

  return (
    <div className="reply-edit-dropdown">
      <button
        className="reply-edit-button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <svg
          className="reply-edit-icon"
          data-slot="icon"
          fill="none"
          strokeWidth="1.5"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
          ></path>
        </svg>
      </button>
      {dropdownOpen && (
        <div className="reply-edit-menu">
          <button onClick={handleEditClick}>수정</button>
          <button onClick={handleDeleteReply}>삭제</button>
        </div>
      )}
    </div>
  );
};

export default BoardReplyEdit;
