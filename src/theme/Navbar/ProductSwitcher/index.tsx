import React, {type ReactNode, useEffect, useId, useRef, useState} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';
import {type Props as NavbarItemConfig} from '@theme/NavbarItem';
import styles from './styles.module.css';

type Section = {
  label: string;
  to: string;
  pluginId: string;
};

type Product = {
  code: string;
  label: string;
  to: string;
  pluginIds: string[];
  // Documentation spaces of the product, listed in its dropdown menu.
  sections: Section[];
};

const linkTo = (item: NavbarItemConfig): string | undefined =>
  'to' in item && typeof item.to === 'string' ? item.to : undefined;

/**
 * Product switcher shown in the navbar (Infra, Experience and Log monitoring). Products are derived
 * from the navbar items configured in docusaurus.config.js, so a product whose
 * documentation is not part of the build is not displayed.
 *
 * Infra Monitoring has three documentation spaces (OnPrem, Cloud and the
 * monitoring connectors): its pill opens a menu to switch between them.
 */
function getProducts(items: NavbarItemConfig[]): Product[] {
  const sections: Section[] = [];
  for (const item of items) {
    const to = linkTo(item);
    if (item.type === 'doc' && 'docId' in item) {
      sections.push({
        label: translate({id: 'navbar.product.cim.onprem', message: 'OnPrem'}),
        to: `/docs/${item.docId}`,
        pluginId: 'default',
      });
    } else if (to?.startsWith('/cloud/')) {
      sections.push({
        label: translate({id: 'navbar.product.cim.cloud', message: 'Cloud'}),
        to,
        pluginId: 'cloud',
      });
    } else if (to?.startsWith('/pp/')) {
      sections.push({
        label: translate({id: 'navbar.product.cim.connectors', message: 'Monitoring Connectors'}),
        to,
        pluginId: 'pp',
      });
    }
  }

  const products: Product[] = [];
  if (sections.length > 0) {
    products.push({
      code: 'CIM',
      label: translate({id: 'navbar.product.cim', message: 'Infra Monitoring'}),
      to: sections[0].to,
      pluginIds: sections.map((section) => section.pluginId),
      sections,
    });
  }
  for (const item of items) {
    const to = linkTo(item);
    if (to?.includes('experience-monitoring')) {
      products.push({
        code: 'CXM',
        label: translate({id: 'navbar.product.cxm', message: 'Experience Monitoring'}),
        to,
        pluginIds: ['experience-monitoring'],
        sections: [],
      });
    } else if (to?.includes('logmanagement')) {
      products.push({
        code: 'CLM',
        label: translate({id: 'navbar.product.clm', message: 'Log Management'}),
        to,
        pluginIds: ['logmanagement'],
        sections: [],
      });
    }
  }
  return products;
}

function ProductMenu({
  product,
  isActive,
  activePluginId,
}: {
  product: Product;
  isActive: boolean;
  activePluginId: string;
}): ReactNode {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const {pathname} = useLocation();

  // Close the menu after a navigation.
  useEffect(() => setOpen(false), [pathname]);

  // Close it on a click outside, or with Escape (focus back on the pill).
  useEffect(() => {
    if (!open) {
      return undefined;
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  return (
    <li ref={rootRef} className={styles.item}>
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen(!open)}
        className={clsx(styles.pill, (isActive || open) && styles.pillActive)}>
        <span className={styles.dot} aria-hidden="true" />
        {product.label}
        <svg className={clsx(styles.chevron, open && styles.chevronOpen)} viewBox="0 0 24 24" aria-hidden="true">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <ul id={menuId} className={styles.menu} hidden={!open}>
        {product.sections.map((section) => {
          const isCurrent = section.pluginId === activePluginId;
          return (
            <li key={section.pluginId}>
              <Link
                to={section.to}
                aria-current={isCurrent ? 'page' : undefined}
                className={clsx(styles.menuLink, isCurrent && styles.menuLinkActive)}
                onClick={() => setOpen(false)}>
                {section.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </li>
  );
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
        if (product.sections.length > 1) {
          return (
            <ProductMenu key={product.code} product={product} isActive={isActive} activePluginId={activePluginId} />
          );
        }
        return (
          <li key={product.code} className={styles.item}>
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
