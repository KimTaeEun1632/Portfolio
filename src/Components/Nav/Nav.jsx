import React, { useState, useEffect } from "react";
import "./Nav.css";
import Login from "../Login/Login";
import { useAuth } from "../../contexts/AuthContext";

const Nav = () => {
  const [showNavBar2, setShowNavBar2] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const { isLoggedIn } = useAuth();

  const handleOpenLogin = () => {
    if (isOpenLogin === false) {
      setIsOpenLogin(true);
    } else setIsOpenLogin(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 72) {
        setShowNavBar2(true);
      } else {
        setShowNavBar2(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navBox" id="topNav">
      {/* navBar1: 기본 네비게이션 바 */}
      <div className={`navBar ${showNavBar2 ? "hidden" : ""}`}>
        <div>
          <a href="/" className="logoText">
            Kim TaeEun
          </a>
        </div>
        <nav className="navButton">
          <a href="#aboutSection">About</a>
          <a href="#project">Projects</a>
          <a href="/board">board</a>
          <div className="login-box">
            <div onClick={handleOpenLogin}>
              {isLoggedIn ? <p>Logout</p> : <p>Login</p>}
            </div>
            {isOpenLogin && <Login />}
          </div>
        </nav>
      </div>

      {/* navBar2: 스크롤 후 나타나는 네비게이션 바 */}
      <div className={`navBarFixed ${showNavBar2 ? "visible" : "hidden"}`}>
        <div>
          <a href="/" className="logoText">
            Kim TaeEun
          </a>
        </div>
        <nav className="navButton">
          <a href="#aboutSection">About</a>
          <a href="#project">Projects</a>
          <a href="/board">board</a>
          <div className="login-box">
            <div onClick={handleOpenLogin}>
              {isLoggedIn ? <p>Logout</p> : <p>Login</p>}
            </div>
            {isOpenLogin && <Login />}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
