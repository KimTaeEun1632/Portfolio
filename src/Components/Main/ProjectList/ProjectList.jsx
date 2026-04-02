import { useEffect, useMemo, useRef } from "react";
import { Link } from "react-router-dom";
import "./ProjectList.css";
import Animation from "../../../utils/animation";

function ProjectList({ items }) {
  const refContainer = useRef(null);

  const refs = useMemo(
    () => ({
      container: refContainer,
    }),
    [],
  );

  useEffect(() => {
    Animation.section2(refs);
  }, [refs]);

  const slots = [
    "slot-main",
    "slot-secondary",
    "slot-tertiary",
    "slot-tertiary",
    "slot-tertiary",
  ];

  return (
    <section id="project" ref={refContainer} className="projects-section">
      <div className="projects-container">
        <div className="projects-header">
          <div className="projects-header-left">
            <p className="projects-tag">Selected Works</p>
            <h2 className="projects-title">The Project List</h2>
          </div>
        </div>

        <div className="bento-grid">
          {items.slice(0, 5).map((item, index) => (
            <Link
              key={item.id}
              to={`/projectDetail/${item.id}#${item.subtitle}`}
              className={`project-card ${slots[index]}`}
              style={{ textDecoration: "none" }}
            >
              <img src={item.imgUrl} alt={item.title} />
              <div className="project-card-overlay">
                <div className="project-card-tags">
                  {item.technologies[0]
                    .split(",")
                    .slice(0, 2)
                    .map((tech, i) => (
                      <span key={i} className="project-tag-pill">
                        {tech.trim()}
                      </span>
                    ))}
                </div>
                <h3 className="project-card-title">{item.title}</h3>
                <p className="project-card-desc">{item.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
