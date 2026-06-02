export default function EssentialsSection({ budgetItems, categories }) {
  return (
    <section id="essentials" className="fade">
      <div className="essentials">
        <h2>Trip Essentials</h2>
        <p className="essentials-sub">Melbourne August — winter road trip through Victoria</p>

        <div className="budget-strip">
          {budgetItems.map((item) => (
            <div key={item.label} className="budget-item">
              <label>{item.label}</label>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>

        <div className="ess-grid" style={{ marginTop: 36 }}>
          {categories.map((category) => (
            <div key={category.title} className="ess-cat">
              <h4>{category.title}</h4>
              <ul>
                {category.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
