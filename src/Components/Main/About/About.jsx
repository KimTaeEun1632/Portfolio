import React from "react";
import "./About.css";
import AboutContent from "./AboutContent";

const About = ({ data }) => {
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-wrapper">
          <div className="about-top">
            <p className="about-why">
              왜 <span className="about-why-span">프론트엔드 개발자</span>일까?
            </p>
            <p className="about-reason">
              창의성의 활용 <br /> 사용자 경험에 직결되니까
            </p>
            <p className="about-reason2">무엇보다, 즐거우니까</p>
          </div>
          <div className="about-foot">
            <AboutContent data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
