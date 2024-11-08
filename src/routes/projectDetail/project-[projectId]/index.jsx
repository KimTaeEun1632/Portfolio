import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import items from "../../../mock.json";
import "./ProjectDetail.css";
import Badge from "../../../Components/Badge/Badge";

const ProjectDetail = () => {
  const { projectId } = useParams();
  const location = useLocation();

  // 스크롤 위치에 따라 버튼 표시 여부를 제어하기 위한 state
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        const offset = 56;
        const elementPosition =
          element.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const project = items.find((item) => item.id === parseInt(projectId));

  if (!project) {
    return <div>프로젝트를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="projects-detail-page">
      {items.map((item) => (
        <div
          key={item.id}
          id={`project-${item.id}`}
          className="project-detail-section"
        >
          <div className="project-summation-section">
            <img src={item.imgUrl} alt={item.title} className="project-image" />
            <div className="project-text-section">
              <div>
                <div className="project-titleBox">
                  <h2>{item.title}</h2>
                  <Badge item={item} />
                </div>
                <p>{item.subtitle}</p>
              </div>
              <div className="project-date">
                <p>{item.date}</p>
              </div>
              <div>
                <p>{item.description}</p>
              </div>
            </div>
          </div>
          <div>
            <ul className="project-links">
              <li>
                <a
                  href={item.links.github}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={item.links.website}
                  className="project-link"
                  target="_blank"
                  rel="noreferrer"
                >
                  Demo
                </a>
              </li>
            </ul>

            <h3>사용 기술</h3>
            <ul className="reasonForTechChoice">
              {item.reasonForTechChoice.map((techChoice, id) => (
                <li key={id}>{techChoice}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
      {/* showScrollToTop이 true일 때만 버튼 표시 */}
      {showScrollToTop && (
        <div className="fixBtnWrap">
          <a href="#topNav">
            <img
              className="fixBtn"
              src="/images/위쪽화살표.png"
              alt="위쪽 화살표"
            ></img>
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
