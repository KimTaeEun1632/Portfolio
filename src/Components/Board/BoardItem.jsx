import React from "react";
import { Link } from "react-router-dom";
import getRelativeTime from "../getRelativeTime";

const BoardItem = ({ content }) => {
  return (
    <section className="board-list-body">
      <div>
        <Link className="board-list-link" to={`/board/${content.id}`}>
          {content.title}{" "}
          {content.replyCount > 0 && (
            <span className="board-list-replyCount">
              [{content.replyCount}]
            </span>
          )}
        </Link>
      </div>
      <div className="board-footer">
        <img src="/images/starOnIcon.svg" alt="별점" />
        <div>({content.rating})</div>
        <div className="board-nickname">{content.nickname}</div>
        <div className="board-info">
          {getRelativeTime(content.createdAt)}
        </div>
      </div>
    </section>
  );
};

export default BoardItem;
