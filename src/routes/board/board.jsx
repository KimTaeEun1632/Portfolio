import React, { useRef, useState } from "react";
import BoardModal from "../../Components/Modal/BoardModal";
import "./board.css";

const Board = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const modalBackground = useRef();
  return (
    <div className="board-wrapper">
      <div>
        <h1>자유게시판</h1>
        <button
          onClick={() => {
            setIsOpenModal(true);
          }}
        >
          글쓰기
        </button>
      </div>
      {isOpenModal && (
        <div
          className="modal-background"
          ref={modalBackground}
          onClick={(e) => {
            if (e.target === modalBackground.current) {
              setIsOpenModal(false);
            }
          }}
        >
          <BoardModal setIsOpenModal={setIsOpenModal} />
        </div>
      )}
    </div>
  );
};

export default Board;
