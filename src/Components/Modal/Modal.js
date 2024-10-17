import React from "react";
import "./Modal.css";

const Modal = ({ setModalOpen, item }) => {
  return (
    <div className="modal-container">
      <div className="modal-img-wrap">
        <img src={item.imgUrl} alt="프로젝트 이미지" className="modal-img" />
      </div>
      <h1>{item.title}</h1>
      <button
        onClick={() => {
          setModalOpen(false);
        }}
      >
        닫기
      </button>
    </div>
  );
};

export default Modal;
