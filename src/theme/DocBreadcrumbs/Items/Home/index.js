import React from 'react';
import Link from '@docusaurus/Link';
import { useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {translate} from '@docusaurus/Translate';
import {useLocation} from '@docusaurus/router';
import IconHome from '@theme/Icon/Home';
import styles from './styles.module.css';

export default function HomeBreadcrumbItem(props) {
  const { activeDoc } = useActiveDocContext(props.docsPluginId);
  const location = useLocation();
  const docSection = location.pathname.split("/")[1];
  console.log(activeDoc);
  console.log(location);

  // Hack: Swizzle component to use baseUrl until https://github.com/facebook/docusaurus/issues/6953
  let homePath = '/docs/getting-started/welcome';
  if (docSection === 'pp') {
    homePath = '/pp/integrations/plugin-packs/getting-started/introduction';
  } else if (docSection === 'cloud') {
    homePath = '/cloud/getting-started/welcome';
  }

  const homeHref = useBaseUrl(homePath);

  return (
    <li className="breadcrumbs__item">
      <Link
        aria-label={translate({
          id: 'theme.docs.breadcrumbs.home',
          message: 'Home page',
          description: 'The ARIA label for the home page in the breadcrumbs',
        })}
        className="breadcrumbs__link"
        href={homeHref}>
        <IconHome className={styles.breadcrumbHomeIcon} />
      </Link>
    </li>
  );
}
