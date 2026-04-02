import React, { useEffect, useMemo, useRef } from "react";
import "./About.css";
import Animation from "../../../utils/animation";

const About = ({ data }) => {
  const refContainer = useRef(null);

  const refs = useMemo(
    () => ({
      container: refContainer,
    }),
    [],
  );

  useEffect(() => {
    if (Animation.section1) {
      Animation.section1(refs);
    }
  }, [refs]);

  return (
    <section id="about" ref={refContainer} className="about-section">
      <div className="about-container">
        <div className="about-grid">
          {/* Left Column: Title + Photo (Sticky) */}
          <div className="about-left">
            <div className="about-sticky-wrapper">
              <h2 className="about-sticky-title">
                Beyond the <br />
                <span className="about-accent">Pixels.</span>
              </h2>
              <div className="about-photo-wrapper">
                <img
                  src="/images/내사진.png"
                  alt="김태은"
                  className="about-photo"
                />
                <div className="about-photo-badge">
                  <p className="badge-tag">Current Focus</p>
                  <p className="badge-text">
                    AI 기반 인터랙티브 경험 및 최적화된 추론 아키텍처
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Content Sections */}
          <div className="about-right">
            {data.map((item, index) => (
              <div key={index} className="about-item aboutContent-desc-wrapper">
                <h3 className="about-item-header">
                  <span className="about-number">0{index + 1}</span>{" "}
                  {item.title}
                </h3>
                <p className="about-item-desc">{item.desc}</p>

                {index === 2 && (
                  <div className="about-cards-grid">
                    <div className="about-card">
                      <strong className="about-card-title">
                        The Deep Dive
                      </strong>
                      <p className="about-card-text">
                        복잡한 문제를 개별 단위로 나누어 분석하고 해결책을
                        찾아냅니다.
                      </p>
                    </div>
                    <div className="about-card">
                      <strong className="about-card-title">
                        Iterative Refinement
                      </strong>
                      <p className="about-card-text">
                        빠른 프로토타이핑 후 끊임없는 피드백을 통해 완성도를
                        높입니다.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
