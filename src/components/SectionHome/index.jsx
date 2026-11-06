import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SearchBox from '@site/src/components/SearchBox';
import styles from './styles.module.css';

// Landing page layout shared by the documentation sections
// (Log Management, Monitoring Connectors...). Each section passes its own
// texts and links as `content`, keyed by locale.

const icons = {
  upload: (
    <path d="M7 18a4.5 4.5 0 0 1-.6-8.96A6 6 0 0 1 18 8.5a4 4 0 0 1-.5 7.97M12 12v8m-3-5 3-3 3 3" />
  ),
  cloud: <path d="M7 19a5 5 0 0 1-.6-9.96A6.5 6.5 0 0 1 18.8 9.5 4.75 4.75 0 0 1 17.5 19H7Z" />,
  grid: <path d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 0h6v6h-6z" />,
  server: (
    <path d="M4 4h16v6H4zm0 10h16v6H4zm3-7h.01M7 17h.01" />
  ),
  search: <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm9 16-4.35-4.35" />,
  bell: (
    <path d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0" />
  ),
  file: (
    <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Zm0 0v5h5M9 13h6m-6 4h6" />
  ),
  code: <path d="m16 18 6-6-6-6M8 6l-6 6 6 6m6-10-4 12" />,
  gear: (
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm7.4-3a7.4 7.4 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7.5 7.5 0 0 0-2-1.2L14.5 3h-4l-.4 2.6a7.5 7.5 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6a7.4 7.4 0 0 0 0 2.4l-2 1.6 2 3.4 2.4-1a7.5 7.5 0 0 0 2 1.2l.4 2.6h4l.4-2.6a7.5 7.5 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.07-.4.1-.8.1-1.2Z" />
  ),
  book: (
    <path d="M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Zm9.5 3-4.9-4.9M8 10.5h5M10.5 8v5" />
  ),
  activity: <path d="M3 12h4l3-8 4 16 3-8h4" />,
  route: (
    <path d="M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm12-12a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM9 18h6.5a3.5 3.5 0 0 0 0-7h-7a3.5 3.5 0 0 1 0-7H15" />
  ),
  lock: <path d="M5 11h14v10H5zm3 0V7a4 4 0 0 1 8 0v4" />,
  check: <path d="M9 11l3 3 8-8M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9" />,
  arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
};

function Icon({name, className}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true">
      {icons[name]}
    </svg>
  );
}


function ResourceRow({item}) {
  const inner = (
    <>
      <Icon name={item.icon} className={styles.resourceIcon} />
      <span className={styles.resourceTitle}>{item.title}</span>
      <Icon name="arrow" className={styles.resourceArrow} />
    </>
  );
  return item.to ? (
    <Link to={item.to} className={styles.resource}>
      {inner}
    </Link>
  ) : (
    <span className={styles.resource}>{inner}</span>
  );
}

export default function SectionHome({content, searchContext}) {
  const {i18n} = useDocusaurusContext();
  const t = content[i18n.currentLocale] ?? content.en;

  return (
    <div className={styles.home}>
      <header className={styles.hero}>
        <p className={styles.kicker}>{t.kicker}</p>
        <h1 className={styles.title}>{t.title}</h1>
        <p className={styles.tagline}>{t.tagline}</p>

        <SearchBox
          placeholder={t.search}
          context={searchContext}
          className={styles.search}
          inputClassName={styles.searchInput}
          iconClassName={styles.searchIcon}
          kbdClassName={styles.kbd}
        />

        <div className={styles.heroFooter}>
          {t.stats?.length > 0 && (
            <ul className={styles.stats}>
              {t.stats.map((s) => (
                <li key={s.value}>
                  <span className={styles.statValue}>{s.value}</span>
                  <span className={styles.statLabel}>{s.label}</span>
                </li>
              ))}
            </ul>
          )}

          {t.callout && (
            <Link to={t.callout.to} className={styles.callout}>
              <Icon name={t.callout.icon} className={styles.calloutIcon} />
              <span className={styles.calloutText}>{t.callout.text}</span>
              <span className={styles.calloutLink}>
                {t.callout.linkLabel}
                <Icon name="arrow" />
              </span>
            </Link>
          )}
        </div>
      </header>

      <section className={styles.band}>
        <h2 className={styles.sectionTitle}>
          {t.quickStartTitle}
          <small>{t.quickStartHint}</small>
        </h2>
        <div className={styles.cards}>
          {t.quickStart.map((c) => (
            <Link key={c.to} to={c.to} className={styles.card}>
              <span className={styles.cardIcon}>
                <Icon name={c.icon} />
              </span>
              <span className={styles.cardBody}>
                <span className={styles.cardTitle}>{c.title}</span>
                <span className={styles.cardMeta}>
                  {c.meta ?? `${t.guide} · ${c.minutes} min`}
                </span>
              </span>
              <Icon name="arrow" className={styles.cardArrow} />
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.resourcesSection}>
        <h2 className={styles.sectionTitle}>
          {t.resourcesTitle}
          <small>{t.resourcesHint}</small>
        </h2>
        <div className={styles.resources}>
          {t.resources.map((r) => (
            <ResourceRow key={r.title} item={r} />
          ))}
        </div>
      </section>
    </div>
  );
}
