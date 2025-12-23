import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import {
  useThemeConfig,
  ErrorCauseBoundary,
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

import DocsDropdownNavbarItem from '../../NavbarItem/DocsDropdownNavbarItem';

import styles from './styles.module.css';

function useNavbarItems() {
  // TODO temporary casting until ThemeConfig type is improved
  return useThemeConfig().navbar.items as NavbarItemConfig[];
}

function NavbarItems({items}: {items: NavbarItemConfig[]}): ReactNode {
  const docs = [];
  const others = [];
  let position = 'left';
  for (const item of items) {
    if (item.position) {
      position = item.position;
    }
    if (item.type === 'doc') {
      docs.push(item);
    } else {
      others.push(item);
    }
  }

  return (
    <>
      {others.map((item, i) => (
        <NavbarItem {...item} key={i} />
      ))}
      {position === 'right' && (
        <>
          <NavbarColorModeToggle className={styles.colorModeToggle} />
          <DocsDropdownNavbarItem items={docs} />
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

  const items = useNavbarItems();
  const [leftItems, rightItems] = splitNavbarItems(items);

  const searchBarItem = items.find((item) => item.type === 'search');

  return (
    <NavbarContentLayout
      left={
        // TODO stop hardcoding items?
        <>
          {!mobileSidebar.disabled && <NavbarMobileSidebarToggle />}
          <NavbarLogo />
          <NavbarItems items={leftItems} />
        </>
      }
      right={
        // TODO stop hardcoding items?
        // Ask the user to add the respective navbar items => more flexible
        <>
          <NavbarItems items={rightItems} />
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
