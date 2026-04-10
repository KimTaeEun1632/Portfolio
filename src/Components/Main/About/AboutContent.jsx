import React, { Fragment, useEffect, useMemo, useRef } from "react";
import "./AboutContent.css";
import Animation from "../../../utils/animation";

const AboutContent = ({ data }) => {
  const refContainer = useRef(null);
  const refCard = useRef(null);

  const refs = useMemo(
    () => ({
      container: refContainer,
      card: refCard,
    }),
    []
  );

  useEffect(() => {
    Animation.section1(refs);
  }, [refs]);
  return (
    <div id="about" ref={refContainer} className="aboutContent-wrapper">
      <div className="aboutContent-top">
        <img className="about-img" src="/images/내사진.png" alt="김태은사진" loading="lazy" />
      </div>
      <div className="aboutContent-foot">
        <div ref={refCard} className="aboutContent-foot-title">
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
                <div ref={refCard}>
                  <strong className="aboutContent-desc-title">
                    {item.title}
                  </strong>
                </div>
                <div ref={refCard}>
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
