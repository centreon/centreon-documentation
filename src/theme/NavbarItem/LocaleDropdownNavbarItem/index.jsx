import React from 'react';
import clsx from 'clsx';
import LocaleDropdownNavbarItem from '@theme-original/NavbarItem/LocaleDropdownNavbarItem';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import { useAlternatePageUtils } from '@docusaurus/theme-common/internal';
import { useHistorySelector } from '@docusaurus/theme-common';
import { translate } from '@docusaurus/Translate';
import styles from './styles.module.css';

/**
 * Language switch shown as a two-letter toggle (FR / EN) in the desktop
 * navbar, as in the UX/UI mockup. The mobile menu keeps the original list.
 */
export default function LocaleToggle(props) {
  const {
    i18n: { currentLocale, locales },
  } = useDocusaurusContext();
  const alternatePageUtils = useAlternatePageUtils();
  const search = useHistorySelector((history) => history.location.search);
  const hash = useHistorySelector((history) => history.location.hash);

  if (props.mobile) {
    return <LocaleDropdownNavbarItem {...props} />;
  }

  // French first, as in the mockup.
  const ordered = [...locales].sort((a, b) => (a === 'fr' ? -1 : b === 'fr' ? 1 : 0));

  return (
    <div
      className={styles.toggle}
      role="group"
      aria-label={translate({ id: 'navbar.locale.label', message: 'Language' })}>
      {ordered.map((locale) => {
        const isActive = locale === currentLocale;
        const href = `${alternatePageUtils.createUrl({ locale, fullyQualified: false })}${search}${hash}`;
        return (
          <a
            key={locale}
            href={href}
            lang={locale}
            target="_self"
            aria-current={isActive ? 'true' : undefined}
            className={clsx(styles.locale, isActive && styles.active)}>
            {locale.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
