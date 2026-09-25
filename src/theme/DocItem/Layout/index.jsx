import React from 'react';
import Head from '@docusaurus/Head';
import Layout from '@theme-original/DocItem/Layout';
import { useDoc } from '@docusaurus/plugin-content-docs/client';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FloatingHelpButton from '@site/src/components/FloatingHelpButton';

/**
 * Structured data (schema.org TechArticle) describing the current page, so
 * that search engines and AI assistants can identify its title, summary,
 * language and freshness. Breadcrumbs are already exposed as microdata by
 * the DocBreadcrumbs component.
 */
function DocStructuredData({ metadata }) {
  const { siteConfig, i18n } = useDocusaurusContext();
  // Match the canonical URL, which follows the `trailingSlash` setting.
  const path =
    siteConfig.trailingSlash && !metadata.permalink.endsWith('/')
      ? `${metadata.permalink}/`
      : metadata.permalink;
  const url = new URL(path, siteConfig.url).href;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: metadata.title,
    description: metadata.description || undefined,
    url,
    mainEntityOfPage: url,
    inLanguage: i18n.currentLocale,
    dateModified: metadata.lastUpdatedAt
      ? new Date(metadata.lastUpdatedAt).toISOString()
      : undefined,
    publisher: {
      '@type': 'Organization',
      name: 'Centreon',
      url: 'https://www.centreon.com/',
    },
  };

  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  );
}

/**
 * Wraps the default doc layout to display the floating help button on every
 * documentation page, including the ones without a table of contents.
 */
export default function LayoutWrapper(props) {
  const { metadata } = useDoc();

  return (
    <>
      <DocStructuredData metadata={metadata} />
      <Layout {...props} />
      <FloatingHelpButton editUrl={metadata?.editUrl} />
    </>
  );
}
