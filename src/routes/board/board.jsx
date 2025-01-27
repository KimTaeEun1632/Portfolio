import React, { useState, useEffect } from "react";
import BoardModal from "../../Components/Modal/BoardModal";
import "./board.css";
import BoardList from "../../Components/Board/BoardList";
import Login from "../../Components/Login";
import { auth } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";

const Board = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState(undefined);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(user);
        setUsername(user.displayName);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleOpenModal = (event) => {
    event.preventDefault();
    if (!isLoggedIn) {
      alert("로그인이 필요합니다.");
      return;
    }
    setIsOpenModal(true);
  };

  return (
    <div className="board-page">
      <div className="board-wrapper">
        <Login />
        {username}
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
