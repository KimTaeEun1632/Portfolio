import ProjectListBox from "../ProjectListBox/ProjectListBox";
import "./ProjectList.css";

function ProjectList({ items }) {
  return (
    <div className="project-list-box">
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
