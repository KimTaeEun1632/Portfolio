import React from "react";
import { Link } from "react-router-dom";
import Star from "../Star";
import BoardEdit from "./BoardEdit";

const BoardPostHeader = ({ content, user, docRef, onEditClick }) => {
  return (
    <div className="board-content-detail-header">
      <div className="board-content-detail-header-top">
        <Link className="board-content-detail-header-link" to="/board">자유게시판</Link>
        <Star star={content.rating} />
        <h2 className="board-content-detail-header-title">{content.title}</h2>
      </div>
      <div className="board-content-detail-header-bottom">
        <div>
          <p className="board-content-detail-header-nickname">{content.nickname}</p>
          <p className="board-content-detail-header-date">{new Date(content.createdAt).toLocaleString()}</p>
        </div>
        {user && user.uid === content.userId && (
          <BoardEdit docRef={docRef} onEdit={onEditClick} />
        )}
      </div>
    </div>
  );
};

export default BoardPostHeader;
