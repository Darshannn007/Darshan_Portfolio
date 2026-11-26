import { useState } from "react";

const About = ({ about, facts, reviewsSection, reviews }) => {
  const [activeReview, setActiveReview] = useState(0);
  const [studioTab, setStudioTab] = useState("architecture");

  const currentReview = reviews && reviews.length > 0 ? reviews[activeReview] : null;

  const nextReview = () => {
    setActiveReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="about" className="sketch-section sketch-about">
      <div className="sketch-container">
        {/* Main Two-Column Journal Spread */}
        <div className="sketch-about__grid">
          {/* Left Column: Narrative & Taxonomy */}
          <div className="sketch-about__left">
            <div className="sketch-about__intro">
              <div className="sketch-about__header">
                <span className="sketch-heading__num">PERSPECTIVE &amp; PHILOSOPHY</span>
                <h2 className="sketch-about__title">
                  Full Stack Developer Crafting Immersive Web Experiences with REACT & Spring-Boot
                </h2>
              </div>

              <p className="sketch-about__body">
                {about.card?.description ||
                  "I combine strong visual systems with scalable architecture so every pixel feels intentional and every request is reliable."}
              </p>

              {/* Badges / Stamps + Inline CTA */}
              <div className="sketch-about__badges">
                {about.badges?.map((badge) => (
                  <span key={badge} className="sketch-stamp">
                    {badge}
                  </span>
                ))}
                <a href={about.cta?.href || "#contact"} className="sketch-link-btn sketch-link-btn--inline">
                  <span>{about.cta?.label || "More About Me"}</span>
                  <span className="sketch-link-btn__arr">&rarr;</span>
                </a>
              </div>
            </div>

            {/* Quick Facts Grid (2x2) */}
            <div className="sketch-facts-grid">
              {facts.map((fact) => (
                <div key={fact.title} className="sketch-fact">
                  <h4 className="sketch-fact__title">{fact.title}</h4>
                  <p className="sketch-fact__desc">{fact.detail}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Studio Blueprint Deck & Field Notes */}
          <div className="sketch-about__right">
            {/* Visual Interactive Studio Deck (Wider, Highly Aesthetic Blueprint Hub) */}
            <div className="sketch-deck">
              <div className="sketch-deck__tape" />

              {/* Deck Window Bar with Interactive Tabs */}
              <div className="sketch-deck__nav">
                <div className="sketch-deck__dots">
                  <span className="sketch-dot sketch-dot--terra" />
                  <span className="sketch-dot sketch-dot--amber" />
                  <span className="sketch-dot sketch-dot--sage" />
                </div>

                <div className="sketch-deck__tabs">
                  <button
                    onClick={() => setStudioTab("architecture")}
                    className={`sketch-deck__tab ${studioTab === "architecture" ? "active" : ""}`}
                  >
                    <span>⚡ Architecture</span>
                  </button>
                  <button
                    onClick={() => setStudioTab("stack")}
                    className={`sketch-deck__tab ${studioTab === "stack" ? "active" : ""}`}
                  >
                    <span>🛠️ Tech Pillars</span>
                  </button>
                  <button
                    onClick={() => setStudioTab("telemetry")}
                    className={`sketch-deck__tab ${studioTab === "telemetry" ? "active" : ""}`}
                  >
                    <span>📊 Telemetry</span>
                  </button>
                </div>

                <div className="sketch-deck__live">
                  <span className="sketch-deck__pulse" />
                  <span>200 OK</span>
                </div>
              </div>

              {/* Dynamic Tab Views */}
              <div className="sketch-deck__body">
                {/* View 1: Connected 3-Tier Architecture Diagram */}
                {studioTab === "architecture" && (
                  <div className="sketch-arch-flow">
                    {/* Tier 1: Client UI */}
                    <div className="sketch-arch-node">
                      <div className="sketch-arch-node__icon sketch-arch-node__icon--react">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="node-svg">
                          <circle cx="12" cy="12" r="3" />
                          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(30 12 12)" />
                          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(90 12 12)" />
                          <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(150 12 12)" />
                        </svg>
                      </div>
                      <div className="sketch-arch-node__info">
                        <div className="sketch-arch-node__header">
                          <strong className="sketch-arch-node__title">Client Experience Layer</strong>
                          <span className="sketch-arch-node__tag">React 19 &bull; UI Engine</span>
                        </div>
                        <p className="sketch-arch-node__desc">
                          Framer Motion ergonomics, responsive viewports, modular component systems.
                        </p>
                      </div>
                    </div>

                    {/* Conduit 1 */}
                    <div className="sketch-arch-conduit">
                      <div className="conduit-line">
                        <span className="conduit-dot" />
                      </div>
                      <span className="conduit-label">RESTful HTTPS / Secure JWT Bearer</span>
                    </div>

                    {/* Tier 2: Backend API */}
                    <div className="sketch-arch-node">
                      <div className="sketch-arch-node__icon sketch-arch-node__icon--spring">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="node-svg">
                          <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
                          <path d="M8 12s2-4 4-4 4 4 4 4-2 4-4 4-4-4-4-4z" />
                        </svg>
                      </div>
                      <div className="sketch-arch-node__info">
                        <div className="sketch-arch-node__header">
                          <strong className="sketch-arch-node__title">Spring Boot Microservices</strong>
                          <span className="sketch-arch-node__tag">Java &bull; Business Core</span>
                        </div>
                        <p className="sketch-arch-node__desc">
                          Spring Security, role-based controllers, transaction management, rate limiting.
                        </p>
                      </div>
                    </div>

                    {/* Conduit 2 */}
                    <div className="sketch-arch-conduit">
                      <div className="conduit-line">
                        <span className="conduit-dot" />
                      </div>
                      <span className="conduit-label">Hibernate JPA &bull; Hikari Connection Pool</span>
                    </div>

                    {/* Tier 3: Database */}
                    <div className="sketch-arch-node">
                      <div className="sketch-arch-node__icon sketch-arch-node__icon--db">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="node-svg">
                          <ellipse cx="12" cy="5" rx="9" ry="3" />
                          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                        </svg>
                      </div>
                      <div className="sketch-arch-node__info">
                        <div className="sketch-arch-node__header">
                          <strong className="sketch-arch-node__title">MySQL Relational Engine</strong>
                          <span className="sketch-arch-node__tag">Data &bull; ACID Model</span>
                        </div>
                        <p className="sketch-arch-node__desc">
                          Normalized schema design, indexed query execution, transaction integrity.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* View 2: Tech Stack Pillars */}
                {studioTab === "stack" && (
                  <div className="sketch-pillars-grid">
                    <div className="sketch-pillar-card">
                      <div className="pillar-header">
                        <span className="pillar-badge">Frontend</span>
                        <strong className="pillar-title">React.js &amp; Modern Web</strong>
                      </div>
                      <p className="pillar-desc">
                        Component state machines, Framer Motion choreography, Tailwind styling systems.
                      </p>
                      <div className="pillar-tags">
                        <span>React 19</span>
                        <span>JavaScript</span>
                        <span>CSS Architecture</span>
                      </div>
                    </div>

                    <div className="sketch-pillar-card">
                      <div className="pillar-header">
                        <span className="pillar-badge">Backend</span>
                        <strong className="pillar-title">Spring Boot &amp; Java</strong>
                      </div>
                      <p className="pillar-desc">
                        Scalable RESTful microservices, Spring Security JWT, clean MVC architecture.
                      </p>
                      <div className="pillar-tags">
                        <span>Spring Boot</span>
                        <span>Java</span>
                        <span>REST APIs</span>
                      </div>
                    </div>

                    <div className="sketch-pillar-card">
                      <div className="pillar-header">
                        <span className="pillar-badge">Database</span>
                        <strong className="pillar-title">MySQL &amp; Relational</strong>
                      </div>
                      <p className="pillar-desc">
                        Entity-relationship modeling, optimized complex queries, schema normalization.
                      </p>
                      <div className="pillar-tags">
                        <span>MySQL</span>
                        <span>Hibernate</span>
                        <span>JPA</span>
                      </div>
                    </div>

                    <div className="sketch-pillar-card">
                      <div className="pillar-header">
                        <span className="pillar-badge">Tooling</span>
                        <strong className="pillar-title">Workflow &amp; CI/CD</strong>
                      </div>
                      <p className="pillar-desc">
                        Git versioning, Docker containerization, Postman API testing, Vite packaging.
                      </p>
                      <div className="pillar-tags">
                        <span>Docker</span>
                        <span>Git / GitHub</span>
                        <span>Vite</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* View 3: Live Engineering Telemetry */}
                {studioTab === "telemetry" && (
                  <div className="sketch-telemetry-grid">
                    <div className="sketch-telemetry-stat">
                      <span className="telemetry-lbl">API Response Latency</span>
                      <strong className="telemetry-val">&lt; 35ms</strong>
                      <span className="telemetry-sub">Spring Boot REST endpoints</span>
                    </div>

                    <div className="sketch-telemetry-stat">
                      <span className="telemetry-lbl">Animation Frame Rate</span>
                      <strong className="telemetry-val">60 FPS</strong>
                      <span className="telemetry-sub">Framer Motion hardware accelerated</span>
                    </div>

                    <div className="sketch-telemetry-stat">
                      <span className="telemetry-lbl">Authentication Model</span>
                      <strong className="telemetry-val">JWT State</strong>
                      <span className="telemetry-sub">Stateless role-based security</span>
                    </div>

                    <div className="sketch-telemetry-stat">
                      <span className="telemetry-lbl">Database Schema</span>
                      <strong className="telemetry-val">3NF Clean</strong>
                      <span className="telemetry-sub">Fully normalized relational tables</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Deck Footer Console */}
              <div className="sketch-deck__footer">
                <span className="deck-footer-item">
                  <span className="deck-dot-indicator" />
                  <span>Build: <strong>Production Ready</strong></span>
                </span>
                <span className="deck-footer-item">
                  <span>Architecture: <strong>Full-Stack Decoupled</strong></span>
                </span>
              </div>
            </div>

            {/* Interactive Field Notes / Testimonials Card */}
            {currentReview && (
              <div className="sketch-field-note">
                <div className="sketch-field-note__top">
                  <span className="sketch-field-note__tag">
                    FIELD NOTES ({activeReview + 1}/{reviews.length})
                  </span>
                  <div className="sketch-field-note__controls">
                    <button 
                      onClick={prevReview} 
                      className="sketch-field-note__btn"
                      aria-label="Previous note"
                    >
                      &larr;
                    </button>
                    <button 
                      onClick={nextReview} 
                      className="sketch-field-note__btn"
                      aria-label="Next note"
                    >
                      &rarr;
                    </button>
                  </div>
                </div>

                <p className="sketch-field-note__quote">
                  &ldquo;{currentReview.quote}&rdquo;
                </p>

                <div className="sketch-field-note__author">
                  <strong className="sketch-field-note__name">{currentReview.name}</strong>
                  <span className="sketch-field-note__role">&mdash; {currentReview.role}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
