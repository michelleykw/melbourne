import { useEffect } from 'react';
import './styles.css';
import ActivityRow from './components/ActivityRow.jsx';
import Tip from './components/Tip.jsx';
import OverviewStrip from './components/OverviewStrip.jsx';
import NavTabs from './components/NavTabs.jsx';
import HeroStats from './components/HeroStats.jsx';
import DayLabel from './components/DayLabel.jsx';
import EssentialsSection from './components/EssentialsSection.jsx';
import { overview, heroStats, overviewItems, navTabs, budgetItems, essentialsCategories, sections } from './data/itinerary.jsx';

export default function MelbourneItinerary() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05 }
    );

    const scrollObs = new IntersectionObserver(
      (entries) => {
        const tabs = document.querySelectorAll('.nav-tab');
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tabs.forEach((tab) => tab.classList.remove('active'));
            const activeTab = document.querySelector(`.nav-tab[href="#${entry.target.id}"]`);
            if (activeTab) activeTab.classList.add('active');
          }
        });
      },
      { rootMargin: '-30% 0px -65% 0px' }
    );

    const fadeElements = document.querySelectorAll('.fade');
    fadeElements.forEach((el) => obs.observe(el));

    const sectionsToObserve = document.querySelectorAll('section[id], div[id]');
    sectionsToObserve.forEach((s) => scrollObs.observe(s));

    return () => {
      obs.disconnect();
      scrollObs.disconnect();
    };
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-texture" />
        <div className="hero-deco" />
        
        <div className="hero-inner">
          <p className="hero-label">{overview.subtitle}</p>
          <h1>
            Mel<em>bourne</em>
            <br/>& Beyond
          </h1>
          <p className="hero-sub">{overview.areas1.join(' · ')}<br />{overview.areas2.join(' · ')}</p>
          <HeroStats stats={heroStats} />
        </div>
        
        <span className="scroll-hint">Scroll</span>
      </section>

      <OverviewStrip items={overviewItems} />

      <nav className="nav-wrap">
        <NavTabs tabs={navTabs} />
      </nav>

      <main>
        {sections.map((section) => (
          <section key={section.id} id={section.id} className="region fade">
            <p className="region-tag">{section.tag}</p>
            <h2 className="region-title">{section.title}</h2>
            {section.date && <div className="region-date">{section.date}</div>}
            <div className="region-divider" />

            {section.days && section.days.map((day) => (
              <div className="day-block" key={`${section.id}-day-${day.number}`}>
                <DayLabel number={day.number} title={day.title} date={day.date} />

                {day.activities && day.activities.map((act, idx) => {
                  if (act.type === 'activity') {
                    return (
                      <ActivityRow
                        key={idx}
                        time={act.time}
                        title={act.title}
                        href={act.href}
                        badges={act.badges}
                        priceTag={act.priceTag}
                        desc={act.desc}
                        imgSrc={act.imgSrc}
                        imgAlt={act.imgAlt}
                      />
                    );
                  }

                  if (act.type === 'tip') return <Tip key={idx}>{act.text}</Tip>;

                  if (act.type === 'hotel') {
                    return (
                      <div className="hotel-block" key={idx}>
                        <div className="hotel-icon">🏡</div>
                        <div>
                          <h4>{act.title}</h4>
                          {act.description && <p dangerouslySetInnerHTML={{ __html: act.description }} />}
                          {act.href && (
                            <a href={act.href} target="_blank" rel="noreferrer noopener">View on map ↗</a>
                          )}
                        </div>
                      </div>
                    );
                  }

                  return null;
                })}
              </div>
            ))}
          </section>
        ))}

        <EssentialsSection budgetItems={budgetItems} categories={essentialsCategories} />
      </main>

      <footer className="site-footer">Built with ♥ — {overview.title} by Michelle</footer>
    </>
  );
}
