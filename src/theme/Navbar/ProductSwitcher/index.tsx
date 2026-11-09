import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import styles from './styles.module.css';

type Product = {
  code: string;
  label: string;
  to: string;
  pluginIds: string[];
};

/**
 * Product switcher shown in the navbar (CIM / CXM / CLM). Products are derived
 * from the navbar items configured in docusaurus.config.js, so a product whose
 * documentation is not part of the build is not displayed.
 */
function getProducts(items: NavbarItemConfig[]): Product[] {
  const products: Product[] = [];
  for (const item of items) {
    if (item.type === 'doc' && 'docId' in item) {
      products.push({
        code: 'CIM',
        label: 'Infra Monitoring',
        to: `/docs/${item.docId}`,
        pluginIds: ['default', 'cloud', 'pp'],
      });
    } else if ('to' in item && item.to?.includes('experience-monitoring')) {
      products.push({
        code: 'CXM',
        label: 'Experience Monitoring',
        to: item.to,
        pluginIds: ['experience-monitoring'],
      });
    } else if ('to' in item && item.to?.includes('logmanagement')) {
      products.push({
        code: 'CLM',
        label: 'Log Management',
        to: item.to,
        pluginIds: ['logmanagement'],
      });
    }
  }
  return products;
}

export default function ProductSwitcher({
  items,
  activePluginId,
}: {
  items: NavbarItemConfig[];
  activePluginId: string;
}): ReactNode {
  const products = getProducts(items);
  if (products.length === 0) {
    return null;
  }
  return (
    <ul className={styles.switcher} aria-label="Products">
      {products.map((product) => {
        const isActive = product.pluginIds.includes(activePluginId);
        return (
          <li key={product.code}>
            <Link
              to={product.to}
              title={product.label}
              aria-current={isActive ? 'page' : undefined}
              className={clsx(styles.pill, isActive && styles.pillActive)}>
              <span className={styles.dot} aria-hidden="true" />
              {product.code}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
