import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css"; // CSS 파일 불러오기

const snsSection = [
  {
    name: "Github",
    imgSrc: "/images/github.png",
    link: "https://github.com/KimTaeEun1632",
  },
  {
    name: "Notion",
    imgSrc: "/images/notion.svg",
    link: "https://www.notion.so/162429a3f7728077a9f5dd2bc72f7cf1",
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <p>REACT, GSAP로 만들어진 사이트 입니다.</p>
          <p>© 2024 KIM TAE EUN. All Rights Reserved.</p>
        </div>
        <div className="footer-bottom">
          {snsSection.map((sns) => (
            <Link to={sns.link} target="__blank" key={sns.name}>
              <img src={sns.imgSrc} alt={sns.name} className="sns-icon" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
