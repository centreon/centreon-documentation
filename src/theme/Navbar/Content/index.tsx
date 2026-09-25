import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import {
  splitNavbarItems,
  useNavbarMobileSidebar,
} from '@docusaurus/theme-common/internal';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import SearchBar from '@theme/SearchBar';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import NavbarLogo from '@theme/Navbar/Logo';
import NavbarSearch from '@theme/Navbar/Search';
import {useActivePlugin} from '@docusaurus/plugin-content-docs/client';

import Link from '@docusaurus/Link';
import {translate} from '@docusaurus/Translate';
import ProductSwitcher from '../ProductSwitcher';
import ReaderSettings from '../ReaderSettings';

import styles from './styles.module.css';

// Same navbar links on every page (the community is linked from the footer).
// "Docs" leads to the landing page of the product being viewed, "API" to its
// API reference.
function getProductLinks(pluginId: string): {docsTo: string; apiTo: string} {
  switch (pluginId) {
    case 'cloud':
      return {docsTo: '/cloud/getting-started/welcome/', apiTo: '/docs/api/introduction/'};
    case 'pp':
      return {docsTo: '/pp/integrations/plugin-packs/getting-started/introduction/', apiTo: '/docs/api/introduction/'};
    case 'experience-monitoring':
      return {docsTo: '/experience-monitoring/getting-started/welcome/', apiTo: '/docs/api/introduction/'};
    case 'logmanagement':
      return {docsTo: '/logmanagement/getting-started/welcome/', apiTo: '/logmanagement/api/'};
    default:
      return {docsTo: '/docs/getting-started/welcome/', apiTo: '/docs/api/introduction/'};
  }
}

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({items, allItems, position, isDocPage = false}: {items: NavbarItemConfig[], allItems: NavbarItemConfig[], position: string, isDocPage?: boolean}): ReactNode {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
      {position === 'right' && (
        <>
          {/* Reading settings only matter on documentation pages */}
          {isDocPage && <ReaderSettings />}
          <NavbarColorModeToggle className={styles.colorModeToggle} />
        </>
      )}
    </>
  );
}

function NavbarContentLayout({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return (
    <div className="navbar__inner">
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerLeft,
          'navbar__items',
        )}>
        {left}
      </div>
      <div
        className={clsx(
          ThemeClassNames.layout.navbar.containerRight,
          'navbar__items navbar__items--right',
        )}>
        {right}
      </div>
    </div>
  );
}

export default function NavbarContent(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const activePlugin = useActivePlugin();
  const pluginId = activePlugin?.pluginId || '';

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);
  const {docsTo, apiTo} = getProductLinks(pluginId);
  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <span className={styles.platform}>
            {translate({id: 'navbar.platform', message: 'Observability Platform'})}
          </span>
          <ProductSwitcher items={items} activePluginId={pluginId} />
          <div className={styles.links}>
            <Link
              className={clsx('navbar__item navbar__link', pluginId && 'navbar__link--active')}
              to={docsTo}>
              {translate({id: 'navbar.docs', message: 'Docs'})}
            </Link>
            <Link className="navbar__item navbar__link" to={apiTo}>
              {translate({id: 'navbar.api', message: 'API'})}
            </Link>
          </div>
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} allItems={items} position="right" isDocPage={!!pluginId} />
          {/* <NavbarColorModeToggle className={styles.colorModeToggle} /> */}
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
        </>
      }
    />
  );
}
