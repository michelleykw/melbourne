export default function HotelBlock({ icon = '🏡', title, description, href }) {
  return (
    <div className="hotel-block">
      <div className="hotel-icon">{icon}</div>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        {href ? (
          <a href={href} target="_blank" rel="noreferrer noopener">
            View on map ↗
          </a>
        ) : null}
      </div>
    </div>
  );
}
