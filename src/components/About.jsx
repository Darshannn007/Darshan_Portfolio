const About = ({ about, facts, reviewsSection, reviews }) => {
  return (
    <section id="about" className="section about">
      <div className="about__content reveal" style={{ "--delay": "0.1s" }}>
        <p className="eyebrow">{about.eyebrow}</p>
        <h2 className="section__title">{about.title}</h2>
        <p className="section__subtitle">{about.subtitle}</p>
        <a className="btn btn--outline" href={about.cta.href}>
          {about.cta.label}
        </a>
      </div>
      <div className="about__panel reveal" style={{ "--delay": "0.2s" }}>
        <div className="about__visuals">
          <div className="about__blob" />
          <div className="code-card">
            <div className="code-card__header">
              <div className="code-card__header-left">
                <div style={{ display: "flex", gap: "5px", flexShrink: 0 }}>
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#ff6bcb" }} />
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#f89f1b" }} />
                  <span style={{ width: "7px", height: "7px", borderRadius: "50%", background: "#26c6da" }} />
                </div>
                <span className="code-card__header-title">LiveBuild.js</span>
              </div>
              <span className="code-card__header-response">
                ⚡ Avg. Response: 2 hrs
              </span>
              <span className="code-card__header-status">
                ● Available • 1 Slot Open
              </span>
            </div>
            <pre className="code-card__body" style={{ fontFamily: "monospace", marginTop: "12px" }}>
              <code>{`const developer = {
  status: "Available for Hire",
  experience: "2+ Years Dev Experience",
  projectsCompleted: "5+ Finished Projects",
  valueProposed: "complex designs into pixel-perfect code",
  guarantee: "Clean, performant & on-time delivery"
};`}</code>
            </pre>
          </div>
          <div style={{ height: "1px", background: "rgba(255, 255, 255, 0.08)", margin: "4px 0", gridColumn: "1" }} />
          <div className="terminal-card">
            <p className="terminal__line">$ npm run dev</p>
            <p className="terminal__line terminal__line--delay">
              Launching Immersive Experience...
            </p>
            <p className="terminal__line" style={{ animationDelay: "3.5s" }}>
              $ npx invite-darshan --freelance
            </p>
            <p className="terminal__line" style={{ animationDelay: "5.5s", color: "#26c6da" }}>
              &gt;&gt; Ready to build your next product! Let's talk.
            </p>
          </div>
          <div className="stack-orbit">
            <span className="stack-orbit__item" style={{ "--angle": "0deg" }} data-tooltip="React: Component design, GSAP & responsive UI/UX">
              React
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "60deg" }} data-tooltip="Spring Boot: Secure REST APIs & transaction logic">
              Spring
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "120deg" }} data-tooltip="JavaScript: Clean ES6+, Async patterns & DOM performance">
              JS
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "180deg" }} data-tooltip="MySQL: Optimized queries, indexes & relational design">
              MySQL
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "240deg" }} data-tooltip="Docker: Multi-stage builds & containerized hosting">
              Docker
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "300deg" }} data-tooltip="Git: VCS workflows, branches & history management">
              Git
            </span>
          </div>
        </div>
        {/* <div className="facts">
          {facts.map((fact) => (
            <div key={fact.title} className="fact-card">
              <h4>{fact.title}</h4>
              <p>{fact.detail}</p>
            </div>
          ))}
        </div> */}
      </div>
      <div className="about__reviews reveal" style={{ "--delay": "0.3s" }}>
        <h3 className="reviews__title">{reviewsSection.title}</h3>
        <p className="reviews__subtitle">{reviewsSection.subtitle}</p>
        <div className="reviews__grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <p className="review-card__quote">"{review.quote}"</p>
              <div className="review-card__author">
                <div className="review-card__avatar" />
                <div className="review-card__info">
                  <span className="review-card__name">{review.name}</span>
                  <span className="review-card__role">{review.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
