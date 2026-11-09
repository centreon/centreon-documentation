import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useThemeConfig } from '@docusaurus/theme-common';
import styles from './styles.module.css';

/**
 * Site footer, following the UX/UI mockup: brand block on the left, link
 * columns defined in docusaurus.config.js (labels are translated through
 * i18n/<locale>/docusaurus-theme-classic/footer.json), and a bottom bar.
 */
export default function Footer() {
  const { footer } = useThemeConfig();
  const logoUrl = useBaseUrl('/img/logo_centreon.png');

  if (!footer) {
    return null;
  }

  return (
    <footer className={`theme-layout-footer ${styles.footer}`}>
      <div className={`site-footer__inner ${styles.inner}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>
              <img src={logoUrl} alt="Centreon" width="130" height="31" />
            </Link>
            <p>
              {translate({
                id: 'footer.description',
                message: 'Documentation for the Centreon observability platform.',
              })}
            </p>
          </div>
          {footer.links.map((column) => (
            <nav key={column.title ?? 'links'} className={styles.column} aria-label={column.title}>
              {column.title && <p className={styles.title}>{column.title}</p>}
              <ul>
                {column.items.map((item) => (
                  <li key={item.label}>
                    <Link to={item.to} href={item.href}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        {footer.copyright && (
          <div className={styles.bottom}>
            <span>{footer.copyright}</span>
          </div>
        )}
      </div>
    </footer>
  );
}
