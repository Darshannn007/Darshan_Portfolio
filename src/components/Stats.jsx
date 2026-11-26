const Stats = ({ stats }) => {
  return (
    <div className="sketch-stats">
      {stats.map((stat, idx) => (
        <div key={stat.label || idx} className="sketch-stat">
          <span className="sketch-stat__val">{stat.value}</span>
          <span className="sketch-stat__lbl">{stat.label}</span>
        </div>
      ))}
    </div>
  );
};

export default Stats;
