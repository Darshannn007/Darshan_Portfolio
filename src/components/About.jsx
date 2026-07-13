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
              <span>Live Build</span>
              <span className="code-card__status">OPEN TO OPPORTUNITIES</span>
            </div>
            <pre className="code-card__body">
              <code>{`const currentlyBuilding = "AI Powered Experiences";
const backend = "SpringBoot -> REST-APIs";
const frontend = "React + GSAP";
const obsession = "Smooth Interactions";`}</code>
            </pre>
          </div>
          <div className="terminal-card">
            <div className="terminal-card__top">
              <span className="terminal-card__dot" />
              <span className="terminal-card__dot" />
              <span className="terminal-card__dot" />
            </div>
            <p className="terminal__line">$ npm run dev</p>
            <p className="terminal__line terminal__line--delay">
              Launching Immersive Experience...
            </p>
          </div>
          <div className="stack-orbit">
            <span className="stack-orbit__item" style={{ "--angle": "0deg" }}>
              React
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "60deg" }}>
              Spring
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "120deg" }}>
              JS
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "180deg" }}>
              MySQL
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "240deg" }}>
              Docker
            </span>
            <span className="stack-orbit__item" style={{ "--angle": "300deg" }}>
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
