import React, { useState } from "react";
import BoardModal from "../../Components/Modal/BoardModal";
import "./board.css";
import BoardList from "../../Components/Board/BoardList";
import Login from "../../Components/Login";

const Board = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="board-page">
      <div className="board-wrapper">
        <Login />
        <div className="board-title-wrapper">
          <h1 className="board-title">자유게시판</h1>
          <button
            className="board-write-button"
            onClick={() => {
              setIsOpenModal(true);
            }}
          >
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
