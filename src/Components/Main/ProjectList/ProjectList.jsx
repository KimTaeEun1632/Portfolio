import { useEffect, useMemo, useRef } from "react";
import ProjectListBox from "../ProjectListBox/ProjectListBox";
import "./ProjectList.css";
import Animation from "../../../utils/animation";

function ProjectList({ items }) {
  const refContainer = useRef(null);

  const refs = useMemo(
    () => ({
      container: refContainer,
    }),
    []
  );

  useEffect(() => {
    Animation.section2(refs);
  }, [refs]);

  return (
    <div id="project" refs={refContainer} className="project-list-box">
      <div className="project-list-content">
        <h1 className="project-list-title">Projects</h1>
        <div className="project-list-wrapper">
          <div className="project-list-container">
            <ProjectListBox items={items} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
