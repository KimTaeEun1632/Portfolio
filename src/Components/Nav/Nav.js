import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navBox">
      <div>
        <a href="/" className="logoText">
          Kim TaeEun
        </a>
      </div>
      <nav className="navButton">
        <a href="#about">About</a>
        <a href="#skill">Skills</a>
        <a href="#project">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Nav;
