import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import {useActivePlugin} from '@docusaurus/plugin-content-docs/client';
import NavbarItem, {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import {getProducts} from '../../ProductSwitcher';
import styles from './styles.module.css';

/**
 * Main menu of the mobile navbar, organized as the product switcher of the
 * desktop navbar: Infra Monitoring with its three documentation spaces (OnPrem,
 * Cloud, Monitoring Connectors), then the other products, then the other
 * navbar items (languages, versions).
 */
export default function NavbarMobilePrimaryMenu(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const items = useThemeConfig().navbar.items as NavbarItemConfig[];
  const activePluginId = useActivePlugin()?.pluginId ?? '';
  const products = getProducts(items);
  const productItems = new Set(products.flatMap((product) => [product.to, ...product.sections.map((section) => section.to)]));
  const otherItems = items.filter(
    (item) => !(item.type === 'doc' && 'docId' in item) && !('to' in item && productItems.has(item.to as string)),
  );
  const close = () => mobileSidebar.toggle();

  const link = (label: string, to: string, isActive: boolean) => (
    <li className="menu__list-item">
      <Link
        to={to}
        className={clsx('menu__link', isActive && 'menu__link--active')}
        aria-current={isActive ? 'page' : undefined}
        onClick={close}>
        {label}
      </Link>
    </li>
  );

  return (
    <>
      <ul className="menu__list">
        {products.map((product) =>
          product.sections.length > 1 ? (
            <li key={product.code} className="menu__list-item">
              <span className={styles.group}>{product.label}</span>
              <ul className={clsx('menu__list', styles.sections)}>
                {product.sections.map((section) => (
                  <React.Fragment key={section.pluginId}>
                    {link(section.label, section.to, section.pluginId === activePluginId)}
                  </React.Fragment>
                ))}
              </ul>
            </li>
          ) : (
            <React.Fragment key={product.code}>
              {link(product.label, product.to, product.pluginIds.includes(activePluginId))}
            </React.Fragment>
          ),
        )}
      </ul>
      <ul className={clsx('menu__list', styles.others)}>
        {otherItems.map((item, i) => (
          <NavbarItem mobile {...item} onClick={close} key={i} />
        ))}
      </ul>
    </>
  );
}
