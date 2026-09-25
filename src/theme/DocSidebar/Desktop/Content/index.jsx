import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import Content from '@theme-original/DocSidebar/Desktop/Content';
import { useActivePlugin } from '@docusaurus/plugin-content-docs/client';
import { useAllPluginInstancesData } from '@docusaurus/useGlobalData';
import styles from './styles.module.css';

// Infra Monitoring is documented in three spaces: a switch at the top of the
// sidebar replaces the OnPrem / Cloud / Connectors links of the navbar.
function getSpaces() {
  return [
    { pluginId: 'default', label: 'OnPrem', to: '/docs/getting-started/welcome/' },
    { pluginId: 'cloud', label: 'Cloud', to: '/cloud/getting-started/welcome/' },
    {
      pluginId: 'pp',
      label: translate({ id: 'sidebar.spaces.connectors', message: 'Connectors' }),
      to: '/pp/integrations/plugin-packs/getting-started/introduction/',
    },
  ];
}

function SpaceSwitch() {
  const activePlugin = useActivePlugin();
  const plugins = useAllPluginInstancesData('docusaurus-plugin-content-docs');
  const spaces = getSpaces().filter((space) => plugins[space.pluginId]);
  const activeId = activePlugin?.pluginId;

  if (!spaces.some((space) => space.pluginId === activeId) || spaces.length < 2) {
    return null;
  }

  return (
    <nav
      className={styles.switch}
      aria-label={translate({ id: 'sidebar.spaces.label', message: 'Infra Monitoring spaces' })}>
      {spaces.map((space) => (
        <Link
          key={space.pluginId}
          to={space.to}
          aria-current={space.pluginId === activeId ? 'page' : undefined}
          className={clsx(styles.space, space.pluginId === activeId && styles.active)}>
          {space.label}
        </Link>
      ))}
    </nav>
  );
}

// Bottom bar of the sidebar ("Go anywhere ⌘K", as in the UX/UI mockup): it
// opens the navbar search and gives the scrollable menu a clean bottom edge.
function GoAnywhere() {
  const focusSearch = () => {
    const input = document.querySelector('.navbar .navbar__search-input');
    if (input) {
      input.focus();
    }
  };
  return (
    <div className={styles.bottomBar}>
      <button type="button" className={styles.goAnywhere} onClick={focusSearch}>
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
          strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <circle cx="11" cy="11" r="6.5" />
          <path d="m20 20-4.2-4.2" />
        </svg>
        <span>{translate({ id: 'sidebar.goAnywhere', message: 'Go anywhere' })}</span>
        <kbd>⌘K</kbd>
      </button>
    </div>
  );
}

export default function ContentWrapper(props) {
  return (
    <>
      <SpaceSwitch />
      <Content {...props} />
      <GoAnywhere />
    </>
  );
}
