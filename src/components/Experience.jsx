const Experience = ({ content, timeline }) => {
  return (
    <section id="experience" className="sketch-section sketch-timeline">
      <div className="sketch-container">
        {/* Section Heading */}
        <div className="sketch-heading">
          <h2 className="sketch-heading__title">{content.title || "Certification Highlights"}</h2>
          {content.subtitle && <p className="sketch-heading__subtitle">{content.subtitle}</p>}
        </div>

        {/* Ledger Timeline List */}
        <div className="sketch-ledger">
          {timeline.map((item, index) => (
            <div key={`${item.role}-${item.company}`} className="sketch-ledger__row">
              <div className="sketch-ledger__date-col">
                <span className="sketch-ledger__badge">Record 0{index + 1}</span>
                <span className="sketch-ledger__date">{item.year}</span>
              </div>

              <div className="sketch-ledger__content-col">
                <h3 className="sketch-ledger__role">{item.role}</h3>
                <h4 className="sketch-ledger__company">&mdash; {item.company}</h4>
                <p className="sketch-ledger__details">{item.details}</p>

                {item.link && (
                  <a
                    className="sketch-ledger__link"
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>{item.linkLabel || "Examine Verified Credential (PDF)"}</span>
                    <span className="sketch-ledger__link-arr">&rarr;</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
