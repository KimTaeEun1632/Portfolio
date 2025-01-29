import React from "react";
import { Outlet } from "react-router-dom";
import "./BoardLayout.css";

const BoardLayout = () => {
  return (
    <>
      <div className="board-logo-wrapper">
        <a className="board-logoText" href="/">
          Kim TaeEun
        </a>
        <div className="board-details">
          <p>커뮤니티 ·</p>
          <p>junior ·</p> <p>FrontEnd ·</p>
          <p>Portfolio</p>
        </div>
        <div>
          <p className="board-caution">
            반갑습니다. 서로 소통하고 자유롭게 의견을 남기는 공간입니다.
          </p>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default BoardLayout;
