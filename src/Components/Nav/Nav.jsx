import React, { useState, useEffect } from "react";
import "./Nav.css";
import Login from "../Login/Login";
import { useAuth } from "../../contexts/AuthContext";
import ProjectListDropdown from "./ProjectListDropdown";
import { Link } from "react-router-dom";

const Nav = () => {
  const [showNavBar2, setShowNavBar2] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenProjectList, setIsOpenProjectList] = useState(false);

  const { isLoggedIn } = useAuth();

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
          <Link to="/" className="logoText">
            Kim TaeEun
          </Link>
        </div>

        <nav className="navButton">
          <Link to="#aboutSection">About</Link>

          <div className="projects-links-box">
            <p onClick={() => setIsOpenProjectList(!isOpenProjectList)}>
              Projects
            </p>
            {isOpenProjectList && <ProjectListDropdown />}
          </div>

          <Link to="/board">board</Link>

          <div className="login-box">
            <div onClick={() => setIsOpenLogin(!isOpenLogin)}>
              {isLoggedIn ? <p>Logout</p> : <p>Login</p>}
            </div>
            {isOpenLogin && (
              <div className="login-dropdown">
                <Login />
              </div>
            )}
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
          <Link to="#aboutSection">About</Link>

          <div className="projects-links-box">
            <p onClick={() => setIsOpenProjectList(!isOpenProjectList)}>
              Projects
            </p>
            {isOpenProjectList && <ProjectListDropdown />}
          </div>

          <Link to="/board">board</Link>

          <div className="login-box">
            <div onClick={() => setIsOpenLogin(!isOpenLogin)}>
              {isLoggedIn ? <p>Logout</p> : <p>Login</p>}
            </div>
            {isOpenLogin && (
              <div className="login-dropdown">
                <Login />
              </div>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
