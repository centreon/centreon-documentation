import React, { useEffect, useRef } from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import SearchBar from '@theme/SearchBar';
import { useActivePlugin, useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import Icon from '@site/src/components/Icon';
import styles from './styles.module.css';

/**
 * Links starting with "~/" are resolved against the version being viewed
 * (for versioned docs such as Infra Monitoring OnPrem), other links are kept.
 * "{version}" in a text is replaced with the version being viewed.
 */
function useVersioning() {
  const plugin = useActivePlugin();
  const version = useActiveVersion(plugin?.pluginId);
  return {
    href: (href) => (href.startsWith('~/') ? `${version?.path ?? ''}/${href.slice(2)}` : href),
    text: (text) => (typeof text === 'string' ? text.replace('{version}', version?.name ?? '').trim() : text),
  };
}

/**
 * The real search input, scoped to the product being viewed (see
 * `searchContextByPaths` in docusaurus.config.js).
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

function SectionTitle({ title, subtitle }) {
  return (
    <h2 className={styles.sectionTitle}>
      {title}
      {subtitle && <span>{subtitle}</span>}
    </h2>
  );
}

/**
 * Landing page of a product: a hero (title, tagline, search, key figures and
 * a card pointing to the other deployment), the most frequent tasks, and the
 * reference resources.
 */
export default function ProductLanding({
  title,
  tagline,
  searchLabel,
  stats = [],
  alternative,
  quickStartTitle,
  quickStartSubtitle,
  quickStart = [],
  resourcesTitle,
  resourcesSubtitle,
  resources = [],
}) {
  const v = useVersioning();
  const guide = translate({ id: 'landing.task.guide', message: 'Guide' });

  return (
    <div className={styles.landing} data-product-landing>
      <section className={styles.hero}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.heroBody}>
          <div className={styles.heroMain}>
            {tagline && <p className={styles.tagline}>{tagline}</p>}
            {searchLabel && <HeroSearch placeholder={searchLabel} />}
            {stats.length > 0 && (
              <dl className={styles.stats}>
                {stats.map((stat) => (
                  <div key={stat.label}>
                    {/* "version" is replaced with the version being viewed */}
                    <dt>{stat.value === 'version' ? v.text('{version}') : stat.value}</dt>
                    <dd>{stat.label}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
          {alternative && (
            <aside className={styles.alternative}>
              <p className={styles.alternativeEyebrow}>{alternative.eyebrow}</p>
              <p className={styles.alternativeTitle}>{alternative.title}</p>
              <p className={styles.alternativeText}>{alternative.text}</p>
              <Link to={v.href(alternative.href)} className={styles.alternativeButton}>
                {alternative.label}
                <Icon name="arrow" size={16} />
              </Link>
            </aside>
          )}
        </div>
      </section>

      {quickStart.length > 0 && (
        <section className={styles.band}>
          <SectionTitle title={quickStartTitle} subtitle={quickStartSubtitle} />
          <ul className={styles.tasks}>
            {quickStart.map((task) => (
              <li key={task.href}>
                <Link to={v.href(task.href)} className={styles.task}>
                  <span className={styles.icon}>
                    <Icon name={task.icon} size={18} />
                  </span>
                  <span>
                    <span className={styles.taskTitle}>{task.title}</span>
                    <span className={styles.taskMeta}>
                      {task.kind ?? guide}
                      {task.minutes && ` · ${task.minutes} min`}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      {resources.length > 0 && (
        <section className={styles.resourcesBlock}>
          <SectionTitle title={resourcesTitle} subtitle={resourcesSubtitle} />
          <ul className={styles.resources}>
            {resources.map((resource) => (
              <li key={resource.href}>
                <Link to={v.href(resource.href)} className={styles.resource}>
                  <span className={styles.icon}>
                    <Icon name={resource.icon} size={18} />
                  </span>
                  <span className={styles.resourceTitle}>{v.text(resource.title)}</span>
                  <Icon name="arrow" size={16} className={styles.pushRight} />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
