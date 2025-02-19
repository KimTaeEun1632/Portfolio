import React, { useState } from "react";
import BoardModal from "../../Components/Modal/BoardModal";
import "./board.css";
import BoardList from "../../Components/Board/BoardList";
import { useAuth } from "../../contexts/AuthContext";

const Board = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { isLoggedIn, isLoading } = useAuth();

  const handleOpenModal = (event) => {
    event.preventDefault();
    if (isLoading) return;
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      return;
    }
    setIsOpenModal(true);
  };

  if (isLoading) {
    return <p>로딩 중...</p>;
  }

  return (
    <div className="board-page">
      <div className="board-wrapper">
        <div className="board-title-wrapper">
          <h1 className="board-title">자유게시판</h1>
          <button className="board-write-button" onClick={handleOpenModal}>
            글쓰기
          </button>
        </div>
        <div>
          <BoardList />
        </div>
      </div>
      {isOpenModal && (
        <div className="modal-background">
          <BoardModal setIsOpenModal={setIsOpenModal} />
        </div>
      )}
    </div>
  );
};

export default Board;
