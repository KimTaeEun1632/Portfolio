import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"; // useParams 추가
import items from "../../../mock.json";
import "./ProjectDetail.css";
import Badge from "../../../Components/Badge/Badge";

const ProjectDetail = () => {
  const { projectId } = useParams(); // URL의 projectId 파라미터 가져오기
  const location = useLocation();

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

  // projectId로 해당 프로젝트 데이터 찾기
  const project = items.find((item) => item.id === parseInt(projectId));

  // 프로젝트가 없을 때 예외 처리
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
            <ul className="technologies">
              {item.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;
