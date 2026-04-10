import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
// import "./ProjectDetail.css"; // Tailwind를 사용하므로 CSS는 점진적으로 제거 가능

import arrowUpRight from "../../../assets/icons/arrow_up_right.svg";
import arrowRight from "../../../assets/icons/arrow_right.svg";
import personIcon from "../../../assets/icons/person.svg";
import clockIcon from "../../../assets/icons/clock.svg";
import terminalIcon from "../../../assets/icons/terminal.svg";
import paletteIcon from "../../../assets/icons/palette.svg";
import layersIcon from "../../../assets/icons/layers.svg";
import searchCheckIcon from "../../../assets/icons/search_check.svg";

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

  const projectIndex = items.findIndex(
    (item) => item.id === parseInt(projectId),
  );
  const project = items[projectIndex];

  if (!project) {
    return (
      <div className="bg-surface text-on-surface min-h-screen flex items-center justify-center">
        <div className="max-w-7xl px-8 py-24 text-center">
          <h2 className="text-3xl font-headline font-bold">
            프로젝트를 찾을 수 없습니다.
          </h2>
          <Link to="/" className="text-primary mt-4 inline-block font-bold">
            홈으로 돌아가기
          </Link>
        </div>
      </div>
    );
  }

  const nextProject = items[(projectIndex + 1) % items.length];

  return (
    <div className="bg-surface text-on-surface selection:bg-secondary-container selection:text-on-secondary-container font-body">
      <main className="pt-24">
        {/* Hero Section */}
        <section className="px-8 max-w-7xl mx-auto mt-12 mb-24">
          <div className="relative overflow-hidden rounded-lg mb-12 aspect-[21/9]">
            <img
              className="w-full h-full object-cover"
              src={project.imgUrl}
              alt={project.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
            <div className="absolute bottom-12 left-12 text-white">
              <label className="font-label text-xs uppercase tracking-widest text-indigo-200 mb-4 block">
                Project Case Study
              </label>
              <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-4">
                {project.title}
              </h1>
              <p className="font-body text-xl md:text-2xl text-slate-100 max-w-2xl font-light">
                {project.subtitle}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            {project.links.website && (
              <a
                href={project.links.website}
                target="_blank"
                rel="noreferrer"
                className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-DEFAULT font-bold flex items-center gap-2 transition-all hover:opacity-90 active:scale-95"
              >
                Live Demo
                <img
                  src={arrowUpRight}
                  alt="arrow"
                  className="w-5 h-5 invert"
                />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="border-2 border-outline-variant/30 text-on-surface px-10 py-4 rounded-DEFAULT font-bold transition-all hover:bg-surface-container-low active:scale-95"
              >
                Github
              </a>
            )}
          </div>
        </section>

        {/* Project Overview */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-20">
            <div className="md:col-span-7">
              <label className="font-label text-xs uppercase tracking-widest text-primary font-bold mb-6 block">
                The Brief
              </label>
              <h2 className="font-headline text-4xl font-extrabold tracking-tight mb-8">
                {project.description}
              </h2>
              {project.detailedDescription && (
                <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-12 whitespace-pre-wrap">
                  {project.detailedDescription}
                </p>
              )}
            </div>
            <div className="md:col-span-5 space-y-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm">
                  <img
                    src={personIcon}
                    alt="role"
                    className="w-6 h-6 mb-4 block text-primary"
                  />
                  <p className="font-label text-[10px] uppercase tracking-widest text-slate-500 mb-1">
                    Role
                  </p>
                  <p className="font-bold text-on-surface">
                    {project.projectType === "personal"
                      ? "Lead Architect & Designer"
                      : "Frontend Developer"}
                  </p>
                </div>
                <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm">
                  <img
                    src={clockIcon}
                    alt="timeline"
                    className="w-6 h-6 mb-4 block text-primary"
                  />
                  <p className="font-label text-[10px] uppercase tracking-widest text-slate-500 mb-1">
                    Timeline
                  </p>
                  <p className="font-bold text-on-surface">{project.date}</p>
                </div>
              </div>

              {/* Tech Stack & Rationale */}
              <div className="bg-surface-container-lowest p-8 rounded-lg shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src={terminalIcon}
                    alt="tech stack"
                    className="w-6 h-6 text-primary"
                  />
                  <p className="font-label text-[10px] uppercase tracking-widest text-slate-500">
                    Tech Stack & Rationale
                  </p>
                </div>
                <div className="grid gap-6">
                  {project.reasonForTechChoice.map((choice, i) => {
                    const [title, desc] = choice.split(":");
                    return (
                      <div key={i} className="flex gap-4 group">
                        <div className="flex-shrink-0 w-10 h-10 bg-surface-container-high rounded-full flex items-center justify-center font-bold text-xs text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
                          {title.trim().charAt(0)}
                        </div>
                        <div className="space-y-1">
                          <h4 className="font-bold text-sm text-on-surface">
                            {title.trim()}
                          </h4>
                          <p className="text-xs text-on-surface-variant leading-tight">
                            {desc.trim()}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features & Engineering Excellence */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-16 text-center">
            Engineering Excellence
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {(
              project.keyFeatures || project.reasonForTechChoice.slice(0, 3)
            ).map((choice, i) => {
              const [title, desc] = choice.split(":");
              const icons = [paletteIcon, layersIcon, searchCheckIcon];
              return (
                <div key={i} className="group">
                  <div className="bg-surface-container-low p-10 rounded-lg h-full transition-all group-hover:bg-surface-container-high border-b-4 border-transparent hover:border-primary">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-8">
                      <img
                        src={icons[i % icons.length]}
                        alt="icon"
                        className="w-6 h-6"
                      />
                    </div>
                    <h3 className="font-headline text-xl font-bold mb-4">
                      {title.trim()}
                    </h3>
                    <p className="font-body text-on-surface-variant leading-relaxed">
                      {desc.trim()}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Feedback & Iteration */}
        {project.retrospect && project.retrospect.length > 0 && (
          <section className="bg-surface py-32 px-8">
            <div className="max-w-7xl mx-auto">
              <h2 className="font-headline text-3xl font-extrabold tracking-tight mb-16 text-center text-on-surface">
                Feedback & Iteration
              </h2>
              <div className="grid md:grid-cols-2 gap-12">
                {project.retrospect.map((item, i) => {
                  const isObject = typeof item === "object" && item !== null;
                  const title = isObject
                    ? item.title
                    : `Process & Refinement ${i + 1}`;
                  const feedback = isObject ? item.feedback : item;
                  const iteration = isObject
                    ? item.iteration
                    : project.retrospect[i + 1];

                  // 문자열 배열인 경우 짝수 인덱스만 시작점으로 사용
                  if (!isObject && i % 2 !== 0) return null;

                  return (
                    <div
                      key={i}
                      className="bg-surface-container-low p-10 rounded-lg border-l-4 border-primary shadow-sm"
                    >
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <span className="material-symbols-outlined text-primary">
                            comment
                          </span>
                        </div>
                        <h3 className="font-headline text-xl font-bold">
                          {title}
                        </h3>
                      </div>
                      <div className="space-y-6">
                        <div>
                          <p className="font-label text-[10px] uppercase tracking-widest text-slate-500 mb-2">
                            Observation / Feedback
                          </p>
                          <p className="font-body text-on-surface-variant leading-relaxed">
                            {feedback}
                          </p>
                        </div>
                        {iteration && (
                          <div className="pt-4 border-t border-outline-variant/20">
                            <p className="font-label text-[10px] uppercase tracking-widest text-primary mb-2">
                              Action / Iteration
                            </p>
                            <p className="font-body text-on-surface font-medium leading-relaxed">
                              {iteration}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* Visual Showcase */}
        {project.slides && project.slides.length > 0 && (
          <section className="py-24 px-8 bg-surface-container-lowest">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16">
                {/* Left Column */}
                <div className="space-y-16">
                  {project.slides
                    .filter((_, i) => i % 2 === 0)
                    .map((slide, i) => (
                      <div
                        key={i}
                        className="group bg-white p-4 rounded-2xl shadow-xl border border-outline-variant/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20"
                      >
                        <img
                          className={`w-full ${i % 2 === 0 ? "h-[500px]" : "h-[400px]"} object-cover rounded-lg`}
                          src={slide.src}
                          alt={slide.alt}
                        />
                      </div>
                    ))}
                </div>
                {/* Right Column (Offset) */}
                <div className="space-y-16 pt-24 md:pt-48">
                  {project.slides
                    .filter((_, i) => i % 2 !== 0)
                    .map((slide, i) => (
                      <div
                        key={i}
                        className="group bg-white p-4 rounded-2xl shadow-xl border border-outline-variant/10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/20"
                      >
                        <img
                          className={`w-full ${i % 2 === 0 ? "h-[600px]" : "h-[450px]"} object-cover rounded-lg`}
                          src={slide.src}
                          alt={slide.alt}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Next Project Navigation */}
        <section className="py-40 px-8">
          <div className="max-w-7xl mx-auto border-t-2 border-outline-variant/10 pt-20 flex flex-col md:flex-row justify-between items-center group">
            <div>
              <label className="font-label text-xs uppercase tracking-widest text-slate-500 mb-2 block">
                Up Next
              </label>
              <h4
                className="font-headline text-6xl font-black tracking-tighter text-on-surface hover:text-primary transition-colors cursor-pointer"
                onClick={() => navigate(`/projectDetail/${nextProject.id}`)}
              >
                {nextProject.title}
              </h4>
            </div>
            <div className="mt-12 md:mt-0">
              <Link
                to={`/projectDetail/${nextProject.id}`}
                className="flex items-center gap-4 text-primary font-bold text-xl group-hover:translate-x-4 transition-transform"
              >
                View Next Project
                <img src={arrowRight} alt="next" className="w-10 h-10" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Floating Scroll To Top Button */}
      {showScrollToTop && (
        <div className="fixed bottom-12 right-12 z-50">
          <button
            className="w-14 h-14 bg-primary text-on-primary rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 active:scale-95"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/images/위쪽화살표.png"
              alt="Scroll to top"
              className="w-6 h-6 invert"
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
