import React, { useEffect, useMemo, useRef } from "react";
import "./BoardSection.css";
import BoardSectionContent from "./BoardSectionContent";
import Animation from "../../../utils/animation";

const BoardSection = () => {
  const refContainer = useRef(null);

  const refs = useMemo(
    () => ({
      container: refContainer,
    }),
    []
  );

  useEffect(() => {
    Animation.section3(refs);
  }, [refs]);

  return (
    <div id="board" refs={refContainer} className="m-board-section">
      <div className="m-board-section-content">
        <div className="m-board-section-wrapper">
          <div className="m-board-section-top">
            <p className="m-board-section-title">게시판</p>
            <p className="m-board-section-subTitle">
              무한히 성장하는 여러분들의 <br />
              이야기를 남겨주세요
            </p>
            <a className="m-board-section-link" href="/board">
              게시판 바로가기
            </a>
          </div>
          <div refs={refContainer} className="m-board-section-content-box">
            <BoardSectionContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardSection;
