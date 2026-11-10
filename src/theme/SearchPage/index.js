import React from 'react';
import Head from '@docusaurus/Head';
import SearchPage from '@theme-original/SearchPage';

/**
 * The search page must not be indexed. The search plugin declares it with
 * <meta property="robots">, which search engines ignore: the robots meta tag
 * uses the name attribute.
 */
export default function SearchPageWrapper(props) {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, follow" />
      </Head>
      <SearchPage {...props} />
    </>
  );
}
