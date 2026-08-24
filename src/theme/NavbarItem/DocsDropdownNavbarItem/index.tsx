import React, {type ReactNode} from 'react';
import {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';

import styles from './styles.module.css';

export default function DocsDropdownNavbarItem({items, ...props}: {items: NavbarItemConfig[]}): ReactNode {
  const sections = [];
  for (const item of items) {
    if (item.type === 'doc') {
      sections.push({
        ...item,
        label: 'Infrastructure Monitoring',
        initials: 'CIM',
        color: '#0c00ff',
        activeBaseRegex: 'cloud|pp|docs/',
        type: undefined,
        to: `/docs/${item.docId}`,
      });
    } else if ('to' in item && item.to && item.to.includes('log')) {
      sections.push({
        ...item,
        label: 'Log Management',
        initials: 'CLM',
        color:  '#611485ff'
      });
    } else if ('to' in item && item.to && item.to.includes('experience-monitoring')) {
      sections.push({
        ...item,
        label: 'Experience Monitoring',
        initials: 'CXM',
        color:  '#259788ff'
      });
    }
  }

  const itemsWithIcons = sections.map(({ initials, color, ...item}) => {
    return {
      ...item,
      label: (
        <div className={styles.itemContainer}>
          <div
            className={styles.itemIcon}
            style={{ backgroundColor: color }}
          >
            {initials}
          </div>
          <span>{item.label}</span>
        </div>
      ),
    };
  });

  return (
    <DropdownNavbarItem
      className={styles.docsDropdown}
      label={
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ margin: '0 auto', display: 'block' }}
        >
          <circle cx="5" cy="5" r="2" />
          <circle cx="12" cy="5" r="2" />
          <circle cx="19" cy="5" r="2" />
          <circle cx="5" cy="12" r="2" />
          <circle cx="12" cy="12" r="2" />
          <circle cx="19" cy="12" r="2" />
          <circle cx="5" cy="19" r="2" />
          <circle cx="12" cy="19" r="2" />
          <circle cx="19" cy="19" r="2" />
        </svg>
      }
      items={itemsWithIcons}
      position="right"
      {...props}
    />
  );
}
