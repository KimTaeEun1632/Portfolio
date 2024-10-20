import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"; // useParams 추가
import items from "../../../mock.json";
import "./ProjectDetail.css";

const ProjectDetail = () => {
  const { projectId } = useParams(); // URL의 projectId 파라미터 가져오기
  const location = useLocation();

  // 페이지 렌더링 시 해당 앵커로 스크롤
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
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
          <h2>{item.title}</h2>
          <img src={item.imgUrl} alt={item.title} className="project-image" />
          <p>{item.description}</p>
          <h3>사용 기술</h3>
          <ul className="technologies">
            {item.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ProjectDetail;
