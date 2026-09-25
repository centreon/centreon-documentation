import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import SearchBar from '@theme/SearchBar';
import { useActivePlugin, useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import Icon from '@site/src/components/Icon';
import styles from './styles.module.css';

/**
 * Links starting with "~/" are resolved against the version being viewed
 * (for versioned docs such as Infra Monitoring OnPrem), other links are kept.
 */
function useResolveHref() {
  const plugin = useActivePlugin();
  const version = useActiveVersion(plugin?.pluginId);
  return (href) => (href.startsWith('~/') ? `${version?.path ?? ''}/${href.slice(2)}` : href);
}

/**
 * The real search input, scoped to the product being viewed (see
 * `searchContextByPaths` in docusaurus.config.js). The navbar search is hidden
 * on pages that have one (see custom.css).
 */
function HeroSearch({ placeholder }) {
  const ref = useRef(null);
  // The search plugin does not expose its placeholder as a prop.
  useEffect(() => {
    const input = ref.current?.querySelector('input');
    if (input && placeholder) {
      input.placeholder = placeholder;
    }
  }, [placeholder]);
  return (
    <div ref={ref} className={styles.search} data-hero-search>
      <SearchBar placement="hero" />
    </div>
  );
}

export default function ProductLanding({
  eyebrow,
  title,
  tagline,
  searchLabel,
  stats = [],
  summaryLabel,
  intents = [],
  crossLink,
  quickStartTitle,
  quickStartSubtitle,
  quickStart = [],
  resourcesTitle,
  resourcesSubtitle,
  resources = [],
}) {
  const resolve = useResolveHref();
  const plugin = useActivePlugin();
  const version = useActiveVersion(plugin?.pluginId);

  return (
    <div className={styles.landing} data-product-landing>
      <section className={styles.hero}>
        <div className={styles.heroMain}>
          {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
          <h1 className={styles.title}>{title}</h1>
          {tagline && <p className={styles.tagline}>{tagline}</p>}
          {searchLabel && <HeroSearch placeholder={searchLabel} />}
          {stats.length > 0 && (
            <dl className={styles.stats}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  {/* "version" is replaced with the version being viewed */}
                  <dt className={clsx(stat.accent && styles.statAccent)}>
                    {stat.value === 'version' ? version?.name : stat.value}
                  </dt>
                  <dd>{stat.label}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>

        <nav className={styles.summary} aria-label={summaryLabel}>
          {summaryLabel && <p className={styles.eyebrow}>{summaryLabel}</p>}
          <ul className={styles.intents}>
            {intents.map((intent) => (
              <li key={intent.href}>
                <Link to={resolve(intent.href)} className={styles.intent}>
                  <span className={styles.icon}>
                    <Icon name={intent.icon} />
                  </span>
                  <span>
                    <span className={styles.intentTitle}>{intent.title}</span>
                    <span className={styles.intentText}>{intent.description}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          {crossLink && (
            <Link to={resolve(crossLink.href)} className={styles.crossLink}>
              <Icon name="link" />
              <span>{crossLink.label}</span>
              <Icon name="arrow" className={styles.pushRight} />
            </Link>
          )}
        </nav>
      </section>

      {quickStart.length > 0 && (
        <section className={styles.band}>
          <h2 className={styles.bandTitle}>
            {quickStartTitle}
            {quickStartSubtitle && <span>{quickStartSubtitle}</span>}
          </h2>
          <ul className={styles.tasks}>
            {quickStart.map((task) => (
              <li key={task.href}>
                <Link to={resolve(task.href)} className={styles.task}>
                  <span className={styles.icon}>
                    <Icon name={task.icon} />
                  </span>
                  <span>
                    <span className={styles.intentTitle}>{task.title}</span>
                    <span className={styles.intentText}>{task.kind}</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {resources.length > 0 && (
        <section className={styles.resourcesBlock}>
          <h2 className={styles.bandTitle}>
            {resourcesTitle}
            {resourcesSubtitle && <span>{resourcesSubtitle}</span>}
          </h2>
          <ul className={styles.resources}>
            {resources.map((resource) => (
              <li key={resource.href}>
                <Link to={resolve(resource.href)} className={styles.resource}>
                  <Icon name={resource.icon} className={styles.resourceIcon} />
                  <span>{resource.title}</span>
                  <Icon name="arrow" className={styles.pushRight} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
