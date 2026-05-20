const Stats = ({ stats }) => {
  return (
    <section className="stats reveal" style={{ "--delay": "0.1s" }}>
      {stats.map((stat) => (
        <div key={stat.label} className="stat-card">
          <h3>{stat.value}</h3>
          <p>{stat.label}</p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
