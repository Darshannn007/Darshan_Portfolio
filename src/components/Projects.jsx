const Projects = ({ content, projects }) => {
  return (
    <section id="projects" className="section projects">
      <div className="section__header reveal" style={{ "--delay": "0.1s" }}>
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section__title">{content.title}</h2>
          <p className="section__subtitle">{content.subtitle}</p>
        </div>

        <a className="btn btn--ghost" href={content.cta.href}>
          {content.cta.label}
        </a>
      </div>

      <div className="projects__grid">
        {projects.map((project) => (
          <article
            key={project.title}
            className="project-card reveal"
            style={{
              "--accent": project.accentColor,
              "--delay": "0.2s",
            }}
          >
            <div className="project-card__glow" />

            {/* Top */}
            <div className="project-card__top">
              <h3>{project.title}</h3>

              <div className="project-card__links">

  {project.liveLink && (
    <a
      href={project.liveLink}
      target="_blank"
      rel="noreferrer"
      className="project-btn project-btn--live"
    >
      <span>Live Demo</span>
    </a>
  )}

  {project.githubLink && (
    <a
      href={project.githubLink}
      target="_blank"
      rel="noreferrer"
      className="project-btn project-btn--github"
    >
      <span>Source Code</span>
    </a>
  )}

</div>
            </div>

            {/* Description */}
            <p className="project-card__description">
              {project.description}
            </p>

            {/* Features */}
            {project.features && (
              <div className="project-card__features">
                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack
            {project.techStack && (
              <div className="project-card__stack">
                <h4>Tech Stack</h4>

                <div className="project-card__stack-tags">
                  {Object.values(project.techStack)
                    .flat()
                    .slice(0, 8)
                    .map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                </div>
              </div>
            )}
            */}

            {/* Tags */}
            <div className="project-card__tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;