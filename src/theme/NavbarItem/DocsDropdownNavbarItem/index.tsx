import React, {type ReactNode} from 'react';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';
import IconMenu from '@theme/Icon/Menu';

import styles from './styles.module.css';

export default function DocsDropDownNavbarItems({items, ...props}: {items: NavbarItemConfig[]}): ReactNode {
    return (
      <DropdownNavbarItem
        className={styles.docsDropdown}
        label={
          <IconMenu className={styles.iconMenu} />
        }
        items={items}
        position="right"
        {...props}
      />
    );
}
