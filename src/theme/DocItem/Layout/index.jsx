import React from 'react';
import Layout from '@theme-original/DocItem/Layout';
import FloatingHelpButton from '@site/src/components/FloatingHelpButton';

/**
 * Wraps the default doc layout to display the floating help button on every
 * documentation page, including the ones without a table of contents.
 */
export default function LayoutWrapper(props) {
  return (
    <>
      <Layout {...props} />
      <FloatingHelpButton />
    </>
  );
}
