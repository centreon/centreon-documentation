import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';
import {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import styles from './styles.module.css';

type Product = {
  code: string;
  label: string;
  to: string;
  pluginIds: string[];
};

/**
 * Product switcher shown in the navbar (Infra, Experience and Log monitoring). Products are derived
 * from the navbar items configured in docusaurus.config.js, so a product whose
 * documentation is not part of the build is not displayed.
 */
function getProducts(items: NavbarItemConfig[]): Product[] {
  const products: Product[] = [];
  for (const item of items) {
    if (item.type === 'doc' && 'docId' in item) {
      products.push({
        code: 'CIM',
        label: translate({id: 'navbar.product.cim', message: 'Infra monitoring'}),
        to: `/docs/${item.docId}`,
        pluginIds: ['default', 'cloud', 'pp'],
      });
    } else if ('to' in item && item.to?.includes('experience-monitoring')) {
      products.push({
        code: 'CXM',
        label: translate({id: 'navbar.product.cxm', message: 'Experience monitoring'}),
        to: item.to,
        pluginIds: ['experience-monitoring'],
      });
    } else if ('to' in item && item.to?.includes('logmanagement')) {
      products.push({
        code: 'CLM',
        label: translate({id: 'navbar.product.clm', message: 'Log management'}),
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
  const {pathname} = useLocation();
  const isHome = pathname === useBaseUrl('/');
  if (products.length === 0) {
    return null;
  }
  return (
    <ul className={styles.switcher} aria-label="Products">
      {products.map((product) => {
        // On the homepage, Infra Monitoring is the product selected by default.
        const isActive = product.pluginIds.includes(activePluginId) || (isHome && product.code === 'CIM');
        return (
          <li key={product.code}>
            <Link
              to={product.to}
              aria-current={isActive ? 'page' : undefined}
              className={clsx(styles.pill, isActive && styles.pillActive)}>
              <span className={styles.dot} aria-hidden="true" />
              {product.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
