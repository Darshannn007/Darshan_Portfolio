const Experience = ({ content, timeline }) => {
  return (
    <section id="experience" className="section timeline">
      <div className="section__header reveal" style={{ "--delay": "0.1s" }}>
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 className="section__title">{content.title}</h2>
          {content.subtitle && <p className="section__subtitle">{content.subtitle}</p>}
        </div>
        {content.highlight && (
          <div className="experience__badge">{content.highlight}</div>
        )}
      </div>
      <div className="timeline__list">
        {timeline.map((item) => (
          <div
            key={`${item.role}-${item.company}`}
            className="timeline__item reveal"
            style={{ "--delay": "0.2s" }}
          >
            <span className="timeline__year">{item.year}</span>
            <div className="timeline__content">
              <h3>{item.role}</h3>
              <h4>{item.company}</h4>
              <p>{item.details}</p>
              {item.link && (
                <a className="timeline__link" href={item.link} target="_blank" rel="noreferrer">
                  {item.linkLabel || "View Certificate"}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
