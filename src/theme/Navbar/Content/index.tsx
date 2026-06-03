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

import DocsDropdownNavbarItem from '../../NavbarItem/DocsDropdownNavbarItem';

import styles from './styles.module.css';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({items, allItems, position}: {items: NavbarItemConfig[], allItems: NavbarItemConfig[], position: string}): ReactNode {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
      {position === 'right' && (
        <>
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          <DocsDropdownNavbarItem items={allItems} />
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
  const filteredLeftItems = leftItems.filter(item => {
    if (['default', 'pp', 'cloud'].includes(pluginId)) {
      return (
        (item.type === 'doc')
        || ('to' in item && item.to && (item.to.includes('pp') || item.to.includes('cloud')))
      );
    }
    if (pluginId === 'experience-monitoring') {
      return 'to' in item && item.to && item.to.includes('experience-monitoring');
    }
    if (pluginId === 'logmanagement') {
      return 'to' in item && item.to && item.to.includes('log');
    }
    return false;
  });

  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={filteredLeftItems} allItems={items} position="left" />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} allItems={items} position="right" />
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
