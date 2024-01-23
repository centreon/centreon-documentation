import React from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import {useLocation} from '@docusaurus/router';
import {translate} from '@docusaurus/Translate';
import IconHome from '@theme/Icon/Home';
import styles from './styles.module.css';
export default function HomeBreadcrumbItem() {
  const location = useLocation();
  // Hack: Swizzle component to use baseUrl until https://github.com/facebook/docusaurus/issues/6953
  const homeHref = useBaseUrl((location.pathname.split("/")[1] === "docs" ? "/docs/getting-started/welcome" : "/pp/integrations/plugin-packs/getting-started/introduction"));
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