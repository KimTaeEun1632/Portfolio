import React, { Fragment } from "react";
import "./AboutContent.css";

const AboutContent = ({ data }) => {
  return (
    <div className="aboutContent-wrapper">
      <div className="aboutContent-top">
        <img className="about-img" src="/images/내사진.png" alt="김태은사진" />
      </div>
      <div className="aboutContent-foot">
        <div className="aboutContent-foot-title">
          <strong>
            "안녕하세요.😃
            <br />
            탐구하는 개발자 김태은입니다."
          </strong>
        </div>
        <div className="aboutContent-desc">
          {data.map((item, index) => (
            <Fragment key={index}>
              <div className="aboutContent-desc-wrapper">
                <div>
                  <strong className="aboutContent-desc-title">
                    {item.title}
                  </strong>
                </div>
                <div>
                  <p>{item.desc}</p>
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
