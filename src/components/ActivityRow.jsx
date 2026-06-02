export default function ActivityRow({ time, title, href, badges = [], priceTag, desc, imgSrc, imgAlt, duration, driveDuration }) {
  return (
    <div className="activity-row">
      <div className="act-time">{time}</div>
      <div className={`act-card ${imgSrc ? 'has-img' : ''}`}>
        {imgSrc ? (
          <div className="act-img-wrap">
            <img
              className="act-img"
              src={imgSrc}
              alt={imgAlt}
              loading="lazy"
              onError={(event) => event.currentTarget.parentElement?.remove()}
            />
          </div>
        ) : null}

        <div className={imgSrc ? 'act-body' : undefined}>
          <div className="act-name">
            {href ? (
              <a href={href} target="_blank" rel="noreferrer noopener">
                {title}
              </a>
            ) : (
              <span>{title}</span>
            )}
            {/* {duration ? <span className="act-meta"> · <strong>{duration}</strong></span> : null}
            {driveDuration ? <span className="act-meta"> · <em>{driveDuration}</em></span> : null} */}
            {badges.map((badge) => (
              <span key={badge.label} className={`badge ${badge.className}`}>
                {badge.label}
              </span>
            ))}
            {priceTag ? <span className="price-tag">{priceTag}</span> : null}
          </div>
          <div className="act-desc">{desc}</div>
        </div>
      </div>
    </div>
  );
}
