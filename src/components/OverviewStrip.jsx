export default function OverviewStrip({ items }) {
  return (
    <div className="overview-strip">
      <div className="overview-inner">
        {items.map((item) => (
          <div key={item.label} className="ov-item">
            <label>{item.label}</label>
            <strong>{item.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}
