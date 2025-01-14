import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import items from "../../../mock.json";
import "./ProjectDetail.css";
import Badge from "../../../Components/Badge/Badge";
import Carousel from "../../../Components/Carousel/Carousel";

const ProjectDetail = () => {
  const { projectId } = useParams();

  // 스크롤 위치에 따라 버튼 표시 여부를 제어하기 위한 state
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // 스크롤을 맨 위로 이동
  }, [projectId]);

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
      <div
        key={project.id}
        id={`project-${project.id}`}
        className="project-detail-section"
      >
        <div className="project-summation-section">
          <div className="project-image-wrapper">
            <img
              src={project.imgUrl}
              alt={project.title}
              className="project-image"
            />
          </div>
          <div className="project-text-section">
            <div>
              <div className="project-titleBox">
                <h2>{project.title}</h2>
                <Badge item={project} />
              </div>
              <p>{project.subtitle}</p>
            </div>
            <div className="project-date">
              <p>{project.date}</p>
            </div>
            <div>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
        <div>
          <ul className="project-links">
            <li>
              <a
                href={project.links.github}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href={project.links.website}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </li>
            <li>
              <a
                href={project.links.notion}
                className="project-link"
                target="_blank"
                rel="noreferrer"
              >
                Notion
              </a>
            </li>
          </ul>
          <div className="reasonTC-Wrap">
            <h1 className="reasonTC-title">사용 기술</h1>
            <ul className="reasonForTechChoice">
              {project.reasonForTechChoice.map((techChoice, id) => {
                // 콜론(:) 앞과 뒤를 나누기 위해 split 사용
                const [boldText, normalText] = techChoice.split(":");
                return (
                  <li key={id}>
                    <strong>{boldText}:</strong> {normalText}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="sliderWrapper">
            <h1 className="Carousel-title">이미지</h1>
            <Carousel item={project} />
          </div>
          <div>
            <h1 className="Carousel-title">회고</h1>
            <div className="retrospect-Wrapper">
              {project.retrospect.map((review, index) => (
                <p key={index}>{review}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
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
