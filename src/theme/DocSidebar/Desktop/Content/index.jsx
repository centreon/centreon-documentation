import React from 'react';
import Link from '@docusaurus/Link';
import { translate } from '@docusaurus/Translate';
import Content from '@theme-original/DocSidebar/Desktop/Content';
import { useActivePlugin, useActiveVersion } from '@docusaurus/plugin-content-docs/client';
import Icon from '@site/src/components/Icon';
import styles from './styles.module.css';

// The product documented by each docs plugin, shown at the top of the sidebar.
const PRODUCTS = {
  default: { code: 'CIM', name: 'Infra Monitoring OnPrem', home: 'getting-started/welcome/' },
  cloud: { code: 'CIM', name: 'Infra Monitoring Cloud', home: '/cloud/getting-started/welcome/' },
  pp: {
    code: 'CIM',
    name: 'Monitoring connectors',
    home: '/pp/integrations/plugin-packs/getting-started/introduction/',
  },
  'experience-monitoring': {
    code: 'CXM',
    name: 'Experience Monitoring',
    home: '/experience-monitoring/getting-started/welcome/',
  },
  logmanagement: { code: 'CLM', name: 'Log Management', home: '/logmanagement/getting-started/welcome/' },
};

// Top of the sidebar, as in the UX/UI mockup: a link back to the homepage,
// then the product being read, which links to its landing page.
function SidebarHeader() {
  const plugin = useActivePlugin();
  const version = useActiveVersion(plugin?.pluginId);
  const product = PRODUCTS[plugin?.pluginId];

  // OnPrem is versioned: its landing page is the one of the version being read.
  const productHome = product?.home.startsWith('/') ? product.home : `${version?.path ?? '/docs'}/${product?.home}`;

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.home}>
        <Icon name="home" size={16} />
        {translate({ id: 'sidebar.home', message: 'Home' })}
      </Link>
      {product && (
        <Link to={productHome} className={styles.product}>
          <span className={styles.code}>{product.code}</span>
          <span>{product.name}</span>
        </Link>
      )}
    </div>
  );
}

export default function ContentWrapper(props) {
  return (
    <>
      <SidebarHeader />
      <Content {...props} />
    </>
  );
}
