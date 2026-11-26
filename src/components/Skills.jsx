const Skills = ({ content, skills }) => {
  const categories = [
    { type: "Frontend", label: "Frontend & Interface Systems", tag: "UI / UX" },
    { type: "Backend", label: "Backend, APIs & Business Logic", tag: "Backend" },
    { type: "Databases", label: "Relational Schemas & Queries", tag: "DB" },
    { type: "Core CS", label: "Computer Science Fundamentals", tag: "Core CS Fundamental" },
    { type: "Tools", label: "Tooling, Versioning & DevOps", tag: "Tools" },
  ];

  const grouped = categories.map((cat) => ({
    ...cat,
    items: skills.filter((s) => s.type === cat.type),
  }));

  return (
    <section id="skills" className="sketch-section sketch-skills">
      <div className="sketch-container">
        {/* Section Heading */}
        <div className="sketch-heading">
          <h2 className="sketch-heading__title">{content.title || "Skills & Technologies"}</h2>
          <p className="sketch-heading__subtitle">{content.subtitle}</p>
        </div>

        {/* Index Table / Catalog Grid */}
        <div className="sketch-skills__grid">
          {grouped.map((group, idx) => (
            <div key={group.type} className="sketch-skill-card">
              <div className="sketch-skill-card__header">
                <span className="sketch-skill-card__index">No. 0{idx + 1}</span>
                <span className="sketch-skill-card__badge">{group.tag}</span>
              </div>
              <h3 className="sketch-skill-card__title">{group.label}</h3>
              <div className="sketch-skill-card__chips">
                {group.items.map((skill) => (
                  <span key={skill.name} className="sketch-tag">
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
