import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./ProjectDetail.css";

const ProjectDetail = ({ items }) => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  const projectIndex = items.findIndex((item) => item.id === parseInt(projectId));
  const project = items[projectIndex];

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="max-w-7xl px-8 py-24 text-center">
          <h2 className="text-3xl font-bold">프로젝트를 찾을 수 없습니다.</h2>
          <Link to="/" className="text-primary mt-4 inline-block">홈으로 돌아가기</Link>
        </div>
      </div>
    );
  }

  const nextProject = items[(projectIndex + 1) % items.length];

  return (
    <div className="project-detail-page">
      <main>
        {/* Hero Section */}
        <section className="hero-section max-w-7xl">
          <div className="hero-image-container">
            <img className="hero-image" src={project.imgUrl} alt={project.title} />
            <div className="hero-overlay"></div>
            <div className="hero-content">
              <label className="hero-tag">Project Case Study</label>
              <h1 className="hero-title">{project.title}</h1>
              <p className="hero-subtitle">{project.subtitle}</p>
            </div>
          </div>
          <div className="hero-actions">
            {project.links.website && (
              <a 
                href={project.links.website} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-primary"
              >
                Live Demo <span className="material-symbols-outlined">arrow_outward</span>
              </a>
            )}
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-outline"
              >
                View Source
              </a>
            )}
            {project.links.notion && (
              <a 
                href={project.links.notion} 
                target="_blank" 
                rel="noreferrer" 
                className="btn-outline"
              >
                Notion
              </a>
            )}
          </div>
        </section>

        {/* Project Overview */}
        <section className="overview-section">
          <div className="max-w-7xl overview-grid">
            <div className="overview-main">
              <label className="section-label">The Brief</label>
              <h2 className="overview-title">Architecting a minimalist narrative through code.</h2>
              <div className="overview-text">
                <p>{project.description}</p>
                {project.retrospect && project.retrospect.map((text, i) => (
                  <p key={i}>{text}</p>
                ))}
              </div>
            </div>
            <div className="overview-sidebar">
              <div className="meta-grid">
                <div className="meta-card">
                  <span className="material-symbols-outlined meta-icon">person</span>
                  <p className="meta-label">Role</p>
                  <p className="meta-value">{project.projectType === "personal" ? "Lead Architect & Designer" : "Frontend Developer"}</p>
                </div>
                <div className="meta-card">
                  <span className="material-symbols-outlined meta-icon">schedule</span>
                  <p className="meta-label">Timeline</p>
                  <p className="meta-value">{project.date}</p>
                </div>
                <div className="meta-card full-width">
                  <span className="material-symbols-outlined meta-icon">terminal</span>
                  <p className="meta-label">Tech Stack</p>
                  <div className="tech-tag-container">
                    {project.technologies[0].split(",").map((tech, i) => (
                      <span key={i} className="tech-tag">{tech.trim()}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Engineering Excellence (Tech Choices) */}
        <section className="engineering-section max-w-7xl">
          <h2 className="engineering-title">Engineering Excellence</h2>
          <div className="features-grid">
            {project.reasonForTechChoice.slice(0, 3).map((techChoice, i) => {
              const [title, desc] = techChoice.split(":");
              const icons = ["palette", "layers", "search_check"];
              return (
                <div key={i} className="feature-card">
                  <div className="feature-icon-wrapper">
                    <span className="material-symbols-outlined feature-icon">{icons[i % icons.length]}</span>
                  </div>
                  <h3 className="feature-title">{title.trim()}</h3>
                  <p className="feature-desc">{desc.trim()}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Visual Showcase (Slides) */}
        {project.slides && project.slides.length > 0 && (
          <section className="showcase-section">
            <div className="max-w-7xl">
              <div className="showcase-grid">
                <div className="showcase-col">
                  {project.slides.slice(0, 2).map((slide, i) => (
                    <img 
                      key={i} 
                      className={`showcase-image ${i === 0 ? 'h-500' : 'h-400'}`} 
                      src={slide.src} 
                      alt={slide.alt} 
                    />
                  ))}
                </div>
                <div className="showcase-col offset">
                  {project.slides.length > 2 && (
                    <img 
                      className="showcase-image h-600" 
                      src={project.slides[2].src} 
                      alt={project.slides[2].alt} 
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Next Project Navigation */}
        <section className="next-project-section max-w-7xl">
          <div className="next-project-container">
            <div className="next-project-info">
              <label className="meta-label">Up Next</label>
              <h4 
                className="next-project-title"
                onClick={() => navigate(`/projectDetail/${nextProject.id}#${nextProject.subtitle}`)}
              >
                {nextProject.title}
              </h4>
            </div>
            <Link 
              to={`/projectDetail/${nextProject.id}#${nextProject.subtitle}`} 
              className="next-project-link"
            >
              View Next Project <span className="material-symbols-outlined lg">arrow_forward</span>
            </Link>
          </div>
        </section>
      </main>

      {/* showScrollToTop이 true일 때만 버튼 표시 */}
      {showScrollToTop && (
        <div className="fixBtnWrap">
          <button 
            className="fixBtn" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img
              src="/images/위쪽화살표.png"
              alt="위쪽 화살표"
              style={{ width: '100%', height: '100%' }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
