import React, { useState, useRef, useEffect } from "react";
import "./BoardEdit.css";
import { deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const BoardEdit = ({ docRef, onEdit }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const handleDelete = async () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      try {
        await deleteDoc(docRef);
        alert("게시글이 삭제되었습니다.");
        navigate("/board");
      } catch (error) {
        console.error("게시글 삭제 오류:", error);
        alert("게시글 삭제에 실패했습니다.");
      }
    }
  };

  const handleEditClick = () => {
    onEdit();
    setDropdownOpen(false);
  };

  return (
    <div className="content-edit-dropdown" ref={dropdownRef}>
      <button
        className="content-edit-button"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <svg
          className="content-edit-icon"
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
        <div className="content-edit-menu">
          <button onClick={handleEditClick}>수정</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
      )}
    </div>
  );
};

export default BoardEdit;
