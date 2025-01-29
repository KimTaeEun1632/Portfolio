import React from "react";
import { Outlet } from "react-router-dom";
import "./BoardLayout.css";
import Login from "../Login/Login";

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
        <Login />
      </div>
      <Outlet />
    </>
  );
};

export default BoardLayout;
