const Projects = ({ content, projects }) => {
  return (
    <section id="projects" className="sketch-section sketch-projects">
      <div className="sketch-container">
        {/* Section Header */}
        <div className="sketch-heading">
          <h2 className="sketch-heading__title">{content.title || "Selected Architectural Builds"}</h2>
          <p className="sketch-heading__subtitle">{content.subtitle}</p>
        </div>

        {/* Plates List */}
        <div className="sketch-plates-list">
          {projects.map((project, index) => (
            <article key={project.title} className="sketch-project-plate">
              {/* Plate Header Strip */}
              <div className="sketch-project-plate__header">
                <div className="sketch-project-plate__meta">
                  <span className="sketch-project-plate__num">PLATE 0{index + 1}</span>
                  <span className="sketch-project-plate__sep">&mdash;</span>
                  <span className="sketch-project-plate__category">FULL STACK WEB APPLICATION</span>
                </div>

                <div className="sketch-project-plate__links">
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="sketch-plate-btn sketch-plate-btn--live"
                    >
                      <span>Live Demonstration</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="sketch-plate-btn sketch-plate-btn--code"
                    >
                      <span>View Source Code</span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="sketch-project-plate__title">{project.title}</h3>
              <p className="sketch-project-plate__desc">{project.description}</p>

              {/* Features as Notebook Checklist */}
              {project.features && (
                <div className="sketch-project-plate__features">
                  <h4 className="sketch-project-plate__features-title">Architectural Characteristics &amp; Modules:</h4>
                  <ul className="sketch-features-list">
                    {project.features.map((feature) => (
                      <li key={feature} className="sketch-features-item">
                        <span className="sketch-features-bullet">&#10003;</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="sketch-project-plate__tags">
                <span className="sketch-tags-label">Technologies:</span>
                {project.tags.map((tag) => (
                  <span key={tag} className="sketch-tag sketch-tag--alt">
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
