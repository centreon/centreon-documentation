import React, { useEffect, useId, useRef, useState } from 'react';
import clsx from 'clsx';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import { translate } from '@docusaurus/Translate';
import { useWindowSize } from '@docusaurus/theme-common';
import {
  useActiveDocContext,
  useDocsPreferredVersion,
  useVersions,
} from '@docusaurus/plugin-content-docs/client';
import styles from './DocsVersionDropdownNavbarItem.module.css';

// Version labels can start with an emoji (the latest version is "⭐ 27.10",
// see i18n/*/docusaurus-plugin-content-docs/version-*.json): not on phones.
const plainLabel = (label) => label.replace(/^[\p{Extended_Pictographic}️\s]+/u, '');

/**
 * Phones and tablets: the version in the navbar, as a pill that opens the
 * list of versions (the dropdown of the desktop navbar is hidden there, and
 * its entry in the menu was hard to find). Each version opens the same page
 * in that version, or its main page, as the desktop dropdown does; the
 * archived versions follow.
 */
function MobileVersionMenu({ docsPluginId, dropdownItemsAfter = [] }) {
  const versions = useVersions(docsPluginId);
  const { activeVersion, alternateDocVersions } = useActiveDocContext(docsPluginId);
  const { savePreferredVersionName } = useDocsPreferredVersion(docsPluginId);
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const menuId = useId();

  const archived = dropdownItemsAfter.filter((item) => item.href && item.label);
  const latest = versions.find((version) => version.isLast);

  // Close after a navigation, on a tap outside, or with Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  const target = (version) =>
    (alternateDocVersions[version.name] ?? version.docs.find((doc) => doc.id === version.mainDocId))?.path;

  return (
    <div ref={rootRef} className={styles.root}>
      <button
        ref={buttonRef}
        type="button"
        className={clsx(styles.pill, open && styles.pillOpen)}
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={translate(
          { id: 'navbar.version.current', message: 'Version {version}, change' },
          { version: plainLabel(activeVersion?.label ?? '') },
        )}
        onClick={() => setOpen(!open)}>
        {plainLabel(activeVersion?.label ?? '')}
        <svg className={styles.chevron} viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div id={menuId} className={styles.menu} hidden={!open}>
        <p className={styles.heading}>{translate({ id: 'navbar.version.label', message: 'Version' })}</p>
        <ul className={styles.list}>
          {versions.map((version) => {
            const isCurrent = version.name === activeVersion?.name;
            return (
              <li key={version.name}>
                <Link
                  to={target(version)}
                  className={clsx(styles.item, isCurrent && styles.itemActive)}
                  aria-current={isCurrent ? 'page' : undefined}
                  onClick={() => {
                    savePreferredVersionName(version.name);
                    setOpen(false);
                  }}>
                  <span>{plainLabel(version.label)}</span>
                  {version === latest && (
                    <span className={styles.tag}>{translate({ id: 'navbar.version.latest', message: 'Latest' })}</span>
                  )}
                  {isCurrent && (
                    <svg className={styles.check} viewBox="0 0 24 24" aria-hidden="true">
                      <path d="m5 12.5 4.5 4.5L19 7.5" />
                    </svg>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
        {archived.length > 0 && (
          <>
            <p className={styles.heading}>
              {translate({ id: 'navbar.version.archived', message: 'Archived versions' })}
            </p>
            <ul className={clsx(styles.list, styles.archived)}>
              {archived.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={styles.item}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}

export default function DocsVersionDropdownNavbarItemWrapper(props) {
  const { activeDoc } = useActiveDocContext(props.docsPluginId);
  const windowSize = useWindowSize();

  // do not display version dropdown if current page is not the versioned doc
  if (!activeDoc) {
    return null;
  }

  // In the mobile menu: no entry, the version is in the navbar (below).
  if (props.mobile) {
    return null;
  }

  if (windowSize === 'mobile') {
    return <MobileVersionMenu docsPluginId={props.docsPluginId} dropdownItemsAfter={props.dropdownItemsAfter} />;
  }

  return <DocsVersionDropdownNavbarItem {...props} />;
}
