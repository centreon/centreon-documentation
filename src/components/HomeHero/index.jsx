import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SearchBox from '@site/src/components/SearchBox';
import styles from './styles.module.css';

// Hero and product picker of the site home page.

const content = {
  en: {
    kicker: 'Centreon Documentation',
    title: 'Search. Find. Act.',
    search: 'What are you looking for?',
    productsTitle: 'Choose a product',
    productsHint: 'go to your product documentation',
    seeDocs: 'See the documentation',
    badges: {available: 'Available', new: 'New'},
    products: [
      {
        code: 'CIM',
        accent: 'navy',
        badge: 'available',
        title: 'Infra Monitoring',
        description: 'Monitor your entire infrastructure, OnPrem or Cloud.',
        links: [
          {label: 'OnPrem', to: '/docs/infra-monitoring-onprem'},
          {label: 'Cloud', to: '/cloud/infra-monitoring-cloud'},
          {label: 'Monitoring connectors', to: '/pp/monitoring-connectors'},
        ],
      },
      {
        code: 'CXM',
        accent: 'blue',
        badge: 'available',
        title: 'Experience Monitoring',
        description: 'Measure real user experience and web performance.',
        to: '/experience-monitoring/experience-monitoring',
      },
      {
        code: 'CLM',
        accent: 'green',
        badge: 'new',
        title: 'Log Management',
        description: 'Centralize and analyze your logs in real time.',
        to: '/logmanagement/log-management',
      },
    ],
  },
  fr: {
    kicker: 'Documentation Centreon',
    title: 'Cherchez. Trouvez. Agissez.',
    search: 'Que cherchez-vous ?',
    productsTitle: 'Choisir un produit',
    productsHint: 'accédez à la documentation de votre produit',
    seeDocs: 'Voir la documentation',
    badges: {available: 'Disponible', new: 'Nouveau'},
    products: [
      {
        code: 'CIM',
        accent: 'navy',
        badge: 'available',
        title: 'Infra Monitoring',
        description: 'Supervisez toute votre infrastructure, OnPrem ou Cloud.',
        links: [
          {label: 'OnPrem', to: '/docs/infra-monitoring-onprem'},
          {label: 'Cloud', to: '/cloud/infra-monitoring-cloud'},
          {label: 'Monitoring connectors', to: '/pp/monitoring-connectors'},
        ],
      },
      {
        code: 'CXM',
        accent: 'blue',
        badge: 'available',
        title: 'Experience Monitoring',
        description: 'Mesurez l’expérience réelle et la performance web.',
        to: '/experience-monitoring/experience-monitoring',
      },
      {
        code: 'CLM',
        accent: 'green',
        badge: 'new',
        title: 'Log Management',
        description: 'Centralisez et analysez vos logs en temps réel.',
        to: '/logmanagement/log-management',
      },
    ],
  },
};

function Arrow() {
  return (
    <svg className={styles.arrow} viewBox="0 0 24 24" width="16" height="16" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14m-5-5 5 5-5 5" />
    </svg>
  );
}


function ProductCard({product, t}) {
  return (
    <article className={`${styles.card} ${styles[product.accent]}`}>
      <div className={styles.cardHead}>
        <span className={styles.code}>{product.code}</span>
        <span className={`${styles.badge} ${styles[`badge_${product.badge}`]}`}>
          {t.badges[product.badge]}
        </span>
      </div>
      <h3 className={styles.cardTitle}>
        {product.to ? <Link to={product.to}>{product.title}</Link> : product.title}
      </h3>
      <p className={styles.cardText}>{product.description}</p>

      <ul className={styles.links}>
        {product.links ? (
          product.links.map((l) => (
            <li key={l.label}>
              <Link to={l.to} className={styles.link}>
                <span className={styles.linkLabel}>{l.label}</span>
                <span className={styles.linkHint}>{l.hint}</span>
                <Arrow />
              </Link>
            </li>
          ))
        ) : (
          <li>
            <Link to={product.to} className={`${styles.link} ${styles.linkPrimary}`}>
              <span className={styles.linkLabel}>{t.seeDocs}</span>
              <Arrow />
            </Link>
          </li>
        )}
      </ul>
    </article>
  );
}

export default function HomeHero() {
  const {i18n} = useDocusaurusContext();
  const t = content[i18n.currentLocale] ?? content.en;

  return (
    <>
      <header className={styles.hero}>
        <div className={styles.container}>
          <p className={styles.kicker}>
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Zm0 0v5h5" />
            </svg>
            {t.kicker}
          </p>
          <h1 className={styles.title}>{t.title}</h1>
          <SearchBox
            placeholder={t.search}
            className={styles.search}
            inputClassName={styles.searchInput}
            kbdClassName={styles.kbd}
          />
        </div>
      </header>

      <section className={styles.products}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>
            {t.productsTitle}
            <small>{t.productsHint}</small>
          </h2>
          <div className={styles.cards}>
            {t.products.map((p) => (
              <ProductCard key={p.code} product={p} t={t} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
