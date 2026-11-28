import { useState } from "react";

const About = ({ about, facts, reviewsSection, reviews }) => {
  const [activeReview, setActiveReview] = useState(0);

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
            {/* Minimal Architectural Blueprint Spec Sheet (Desktop/PC View) */}
            <div className="sketch-deck">
              {/* Deck Header */}
              <div className="sketch-deck__header">
                <div className="sketch-deck__header-left">
                  <span className="sketch-deck__dot-live" aria-hidden="true" />
                  <span className="sketch-deck__header-tag">SYSTEM BLUEPRINT &bull; ARCHITECTURE SPEC</span>
                </div>
                <span className="sketch-deck__badge">DECOUPLED CORE</span>
              </div>

              {/* Minimal Clean Tiers */}
              <div className="sketch-deck__body">
                {/* Tier 1 */}
                <div className="sketch-deck__tier">
                  <div className="sketch-deck__tier-head">
                    <span className="sketch-deck__tier-index">01</span>
                    <h4 className="sketch-deck__tier-name">Client Experience Layer</h4>
                    <span className="sketch-deck__tier-tech">React 19</span>
                  </div>
                  <div className="sketch-deck__tier-chips">
                    <span>Framer Motion</span>
                    <span>Tailwind CSS</span>
                    <span>Responsive UI</span>
                  </div>
                </div>

                {/* Minimal Connector */}
                <div className="sketch-deck__conduit">
                  <span className="sketch-deck__conduit-line" />
                  <span className="sketch-deck__conduit-tag">RESTful HTTPS &bull; JWT Bearer</span>
                  <span className="sketch-deck__conduit-line" />
                </div>

                {/* Tier 2 */}
                <div className="sketch-deck__tier">
                  <div className="sketch-deck__tier-head">
                    <span className="sketch-deck__tier-index">02</span>
                    <h4 className="sketch-deck__tier-name">Spring Boot Microservices</h4>
                    <span className="sketch-deck__tier-tech">Java 21</span>
                  </div>
                  <div className="sketch-deck__tier-chips">
                    <span>Spring Security</span>
                    <span>REST Controllers</span>
                    <span>Hikari Connection Pool</span>
                  </div>
                </div>

                {/* Minimal Connector */}
                <div className="sketch-deck__conduit">
                  <span className="sketch-deck__conduit-line" />
                  <span className="sketch-deck__conduit-tag">Hibernate JPA &bull; ACID Transactions</span>
                  <span className="sketch-deck__conduit-line" />
                </div>

                {/* Tier 3 */}
                <div className="sketch-deck__tier">
                  <div className="sketch-deck__tier-head">
                    <span className="sketch-deck__tier-index">03</span>
                    <h4 className="sketch-deck__tier-name">MySQL Relational Engine</h4>
                    <span className="sketch-deck__tier-tech">Data Layer</span>
                  </div>
                  <div className="sketch-deck__tier-chips">
                    <span>Indexed Queries</span>
                    <span>Normalized Schema (3NF)</span>
                    <span>Relational Integrity</span>
                  </div>
                </div>
              </div>

              {/* Minimal Telemetry Strip */}
              <div className="sketch-deck__footer">
                <div className="sketch-deck__metric">
                  <span className="sketch-deck__metric-val">&lt;35ms</span>
                  <span className="sketch-deck__metric-lbl">API Latency</span>
                </div>
                <div className="sketch-deck__metric">
                  <span className="sketch-deck__metric-val">60 FPS</span>
                  <span className="sketch-deck__metric-lbl">UI Motion</span>
                </div>
                <div className="sketch-deck__metric">
                  <span className="sketch-deck__metric-val">Stateless</span>
                  <span className="sketch-deck__metric-lbl">JWT Auth</span>
                </div>
                <div className="sketch-deck__metric">
                  <span className="sketch-deck__metric-val">ACID</span>
                  <span className="sketch-deck__metric-lbl">Data Engine</span>
                </div>
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
