import React, { useState, useEffect, useRef } from "react";
import "./Nav.css";
import Login from "../Login/Login";
import { useAuth } from "../../contexts/AuthContext";
import ProjectListDropdown from "./ProjectListDropdown";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenProjectList, setIsOpenProjectList] = useState(false);
  
  const projectDropdownRef = useRef(null);
  const loginDropdownRef = useRef(null);
  const { isLoggedIn } = useAuth();
  const location = useLocation();

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click outside handler
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (projectDropdownRef.current && !projectDropdownRef.current.contains(event.target)) {
        setIsOpenProjectList(false);
      }
      if (loginDropdownRef.current && !loginDropdownRef.current.contains(event.target)) {
        setIsOpenLogin(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns on route change
  useEffect(() => {
    setIsOpenProjectList(false);
    setIsOpenLogin(false);
  }, [location]);

  return (
    <header className={`nav-container ${isScrolled ? "scrolled" : ""}`} id="topNav">
      <div className="nav-content max-w-7xl">
        <div className="nav-left">
          <Link to="/" className="logo-text">
            Kim Tae Eun
          </Link>
        </div>

        <nav className="nav-right">
          <div className="nav-item-wrapper" ref={projectDropdownRef}>
            <button 
              className={`nav-link-btn ${isOpenProjectList ? "active" : ""}`}
              onClick={() => setIsOpenProjectList(!isOpenProjectList)}
            >
              Projects
            </button>
            {isOpenProjectList && <ProjectListDropdown />}
          </div>

          <Link to="/board" className="nav-link">
            Board
          </Link>

          <div className="nav-item-wrapper" ref={loginDropdownRef}>
            <button 
              className={`nav-link-btn ${isOpenLogin ? "active" : ""}`}
              onClick={() => setIsOpenLogin(!isOpenLogin)}
            >
              {isLoggedIn ? "Account" : "Login"}
            </button>
            {isOpenLogin && (
              <div className="login-dropdown-wrapper">
                <Login />
              </div>
            )}
          </div>
          
          <button className="contact-btn">
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Nav;
