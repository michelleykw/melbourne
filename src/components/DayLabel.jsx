export default function DayLabel({ number, title, date }) {
  return (
    <div className="day-label">
      <span className="day-num">{number}</span>
      <span className="day-title-text">{title}</span>
      <div className="day-line" />
      {date ? (
        <span style={{ fontFamily: "'DM Mono',monospace", fontSize: '10px', color: 'var(--light)' }}>
          {date}
        </span>
      ) : null}
    </div>
  );
}
