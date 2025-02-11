import React from "react";
import "./BoardSection.css";
import BoardSectionContent from "./BoardSectionContent";

const BoardSection = () => {
  return (
    <div className="m-board-section">
      <div className="m-board-section-content">
        <div className="m-board-section-wrapper">
          <div className="m-board-section-top">
            <p className="m-board-section-title">게시판</p>
            <p className="m-board-section-subTitle">
              무한히 성장하는 개발자들의 <br />
              이야기를 들어보세요
            </p>
            <a className="m-board-section-link" href="/board">
              게시판 바로가기
            </a>
          </div>
          <div>
            <BoardSectionContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardSection;
