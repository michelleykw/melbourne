export default function HeroStats({ stats }) {
  return (
    <div className="hero-stats">
      {stats.map((stat) => (
        <div key={stat.label} className="hero-stat">
          <span>{stat.label}</span>
          <strong>{stat.value}</strong>
        </div>
      ))}
    </div>
  );
}
