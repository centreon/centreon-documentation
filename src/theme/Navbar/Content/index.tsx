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

import ProductSwitcher from '../ProductSwitcher';
import ReaderSettings from '../ReaderSettings';

import styles from './styles.module.css';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

// Items of the right of the navbar (search, version, languages), then the
// reading settings, which only matter on documentation pages, and the color
// mode toggle.
function NavbarRightItems({items, isDocPage}: {items: NavbarItemConfig[]; isDocPage: boolean}): ReactNode {
  return (
    <>
      {items.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
      {isDocPage && <ReaderSettings />}
      <NavbarColorModeToggle className={styles.colorModeToggle} />
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
  const [, rightItems] = splitNavbarItems(items);
  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <NavbarContentLayout
      left={
        // The left items of the config (OnPrem, Cloud, Connectors, the
        // products) are shown by the product switcher.
        <>
          <NavbarLogo />
          <ProductSwitcher items={items} activePluginId={pluginId} />
        </>
      }
      right={
        <>
          <NavbarRightItems items={rightItems} isDocPage={!!pluginId} />
          {!searchBarItem && (
            <NavbarSearch>
              <SearchBar />
            </NavbarSearch>
          )}
          {/* Mobile menu button at the right, next to the search, as on
              www.centreon.com: the menu opens from the right */}
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
        </>
      }
    />
  );
}
