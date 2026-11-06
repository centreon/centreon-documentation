import React, {useEffect, useRef, useState, type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useActivePlugin} from '@docusaurus/plugin-content-docs/client';
import {type Props as NavbarItemConfig} from '@theme/NavbarItem';

import styles from './styles.module.css';

// Product pills shown next to the logo. They are built from the navbar items
// declared in docusaurus.config.js, so a section disabled at build time
// (cloud, pp, experience-monitoring, logmanagement) disappears here too.

type Entry = {label: string; to: string};

const shortLabels: Record<string, {onprem: string; cloud: string}> = {
  en: {onprem: 'OnPrem', cloud: 'Cloud'},
  fr: {onprem: 'OnPrem', cloud: 'Cloud'},
};

function itemTo(item: NavbarItemConfig): string | undefined {
  if (item.type === 'doc' && 'docId' in item) return `/docs/${item.docId}`;
  return 'to' in item && typeof item.to === 'string' ? item.to : undefined;
}

function InfraDropdown({
  active,
  entries,
}: {
  active: boolean;
  entries: Entry[];
}): ReactNode {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return undefined;
    const close = (e: MouseEvent | KeyboardEvent) => {
      if (e instanceof KeyboardEvent ? e.key === 'Escape' : !ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', close);
    document.addEventListener('keydown', close);
    return () => {
      document.removeEventListener('mousedown', close);
      document.removeEventListener('keydown', close);
    };
  }, [open]);

  return (
    <div
      ref={ref}
      className={clsx(styles.dropdown, open && styles.dropdownOpen)}
      onMouseLeave={() => setOpen(false)}>
      <button
        type="button"
        className={clsx(styles.pill, active && styles.pillActive)}
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}>
        <span className={styles.dot} />
        Infra Monitoring
        <svg className={styles.caret} viewBox="0 0 24 24" width="12" height="12" fill="none"
          stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <ul className={styles.menu}>
        {entries.map((e) => (
          <li key={e.to}>
            <Link to={e.to} className={styles.menuLink} onClick={() => setOpen(false)}>
              {e.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ProductSwitcher({items}: {items: NavbarItemConfig[]}): ReactNode {
  const {i18n} = useDocusaurusContext();
  const labels = shortLabels[i18n.currentLocale] ?? shortLabels.en;
  const pluginId = useActivePlugin()?.pluginId ?? '';

  const infra: Entry[] = [];
  let experience: Entry | undefined;
  let logs: Entry | undefined;

  for (const item of items) {
    const to = itemTo(item);
    if (!to) continue;
    if (item.type === 'doc') infra.push({label: labels.onprem, to});
    else if (to.startsWith('/cloud/')) infra.push({label: labels.cloud, to});
    else if (to.startsWith('/pp/')) infra.push({label: String(item.label ?? 'Monitoring Connectors'), to});
    else if (to.startsWith('/experience-monitoring/')) experience = {label: 'Experience Monitoring', to};
    else if (to.startsWith('/logmanagement/')) logs = {label: 'Log Management', to};
  }

  const isInfra = ['default', 'cloud', 'pp'].includes(pluginId);

  return (
    <div className={styles.switcher} role="navigation" aria-label="Products">
      {infra.length > 0 && <InfraDropdown active={isInfra} entries={infra} />}
      {experience && (
        <Link
          to={experience.to}
          className={clsx(styles.pill, pluginId === 'experience-monitoring' && styles.pillActive)}>
          <span className={styles.dot} />
          {experience.label}
        </Link>
      )}
      {logs && (
        <Link
          to={logs.to}
          className={clsx(styles.pill, pluginId === 'logmanagement' && styles.pillActive)}>
          <span className={styles.dot} />
          {logs.label}
        </Link>
      )}
    </div>
  );
}
