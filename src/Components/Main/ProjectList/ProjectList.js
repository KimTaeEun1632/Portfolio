import "./ProjectList.css";

const PROJECTDETAIL = {
  openMind: {
    name: "OpenMind",
    description: "React, Vite, pnpm, Prettier, EsLint airbnb, Style Components",
  },
  theJulge: {
    name: "The Julge",
    description:
      "Next, TypeScript, Style Components, SCSS, Jira, axios, react query, EsLint, Prettier",
  },
  globalMind: {
    name: "GlobalMind",
    description: "next, TypeScript, TailWind CSS, axios, react query",
  },
};

function ProjectList() {
  return (
    <div className="projectListBox">
      <div className="projectListContent">
        <h1 className="projectListTitle">Projects</h1>
        <div className="projectList-wapper">
          <div className="projectListContainer">
            <div className="image-wrapper">
              <img src="/images/common.jpg" alt="이미지1" />
              <div className="project-detail-button">
                <button className="detail-button-hover">상세보기</button>
              </div>
              <p className="project-summation">{PROJECTDETAIL.openMind.name}</p>
              <p className="project-technology">
                {PROJECTDETAIL.openMind.description}
              </p>
            </div>
            <div className="image-wrapper">
              <img src="/images/콰이어트 플레이스.jpg" alt="이미지2" />
              <div className="project-detail-button">
                <button className="detail-button-hover">상세보기</button>
              </div>
              <p className="project-summation">{PROJECTDETAIL.theJulge.name}</p>
              <p className="project-technology">
                {PROJECTDETAIL.theJulge.description}
              </p>
            </div>
            <div className="image-wrapper">
              <img src="/images/탈주.jpg" alt="이미지3" />
              <div className="project-detail-button">
                <button className="detail-button-hover">상세보기</button>
              </div>
              <p className="project-summation">
                {PROJECTDETAIL.globalMind.name}
              </p>
              <p className="project-technology">
                {PROJECTDETAIL.globalMind.description}
              </p>
            </div>
            <div className="image-wrapper">
              <img src="/images/하이재킹.jpg" alt="이미지4" />
              <div className="project-detail-button">
                <button className="detail-button-hover">상세보기</button>
              </div>
              <p className="project-summation">{PROJECTDETAIL.openMind.name}</p>
              <p className="project-technology">
                {PROJECTDETAIL.openMind.description}
              </p>
            </div>
            <div className="image-wrapper">
              <img src="/images/핸섬가이즈.jpg" alt="이미지5" />
              <div className="project-detail-button">
                <button className="detail-button-hover">상세보기</button>
              </div>
              <p className="project-summation">{PROJECTDETAIL.openMind.name}</p>
              <p className="project-technology">
                {PROJECTDETAIL.openMind.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
