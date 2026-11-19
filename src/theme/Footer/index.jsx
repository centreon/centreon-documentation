import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { useThemeConfig } from '@docusaurus/theme-common';
import Icon from '@site/src/components/Icon';
import styles from './styles.module.css';

// Legal pages of the corporate website, in the reader's language.
function getLegalLinks() {
  return [
    {
      label: translate({ id: 'footer.legal.notice', message: 'Legal notice' }),
      href: translate({ id: 'footer.legal.notice.url', message: 'https://www.centreon.com/legal-notice/' }),
    },
    {
      label: translate({ id: 'footer.legal.privacy', message: 'Privacy' }),
      href: translate({ id: 'footer.legal.privacy.url', message: 'https://www.centreon.com/privacy-policy/' }),
    },
  ];
}

/**
 * Site footer, following the UX/UI mockup: brand block on the left, link
 * columns defined in docusaurus.config.js (labels are translated through
 * i18n/<locale>/docusaurus-theme-classic/footer.json), and a bottom bar with
 * the copyright and the legal links.
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
                    <Link to={item.to} href={item.href} className={styles.link}>
                      {item.href?.includes('thewatch.centreon.com') && <Icon name="community" size={16} />}
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className={styles.bottom}>
          {footer.copyright && <span>{footer.copyright}</span>}
          <ul className={styles.legal}>
            {getLegalLinks().map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
