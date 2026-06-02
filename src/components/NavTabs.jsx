export default function NavTabs({ tabs }) {
  return (
    <nav className="nav-wrap">
      <div className="nav-inner">
        {tabs.map((tab) => (
          <a key={tab.href} className="nav-tab" href={tab.href}>
            {tab.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
