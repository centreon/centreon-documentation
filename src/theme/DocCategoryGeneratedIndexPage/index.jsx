import React from 'react';
import DocCategoryGeneratedIndexPage from '@theme-original/DocCategoryGeneratedIndexPage';
import FloatingHelpButton from '@site/src/components/FloatingHelpButton';

/**
 * Generated category index pages (sidebar entries of type "generated-index",
 * such as /docs/category/installation) are not rendered by DocItem, so they
 * need their own mount point for the floating help button (MON-201729).
 *
 * No edit URL is passed: these pages have no source file to edit.
 */
export default function DocCategoryGeneratedIndexPageWrapper(props) {
  return (
    <>
      <DocCategoryGeneratedIndexPage {...props} />
      <FloatingHelpButton />
    </>
  );
}
