import React from 'react';
import DocVersionBadge from '@theme-original/DocVersionBadge';
import { useDoc, useSidebarBreadcrumbs } from '@docusaurus/plugin-content-docs/client';

function useOptionalDoc() {
  try {
    return useDoc();
  } catch {
    return null;
  }
}

/**
 * On doc pages, the version badge is shown at the right end of the line
 * above the title (DocItem/Meta passes `inMeta`), not on a line of its own.
 * Elsewhere (generated category index pages, landing pages, pages outside a
 * sidebar, which have no breadcrumbs and so no meta line), it stays where
 * Docusaurus puts it.
 */
export default function DocVersionBadgeWrapper({ inMeta, ...props }) {
  const doc = useOptionalDoc();
  const breadcrumbs = useSidebarBreadcrumbs();
  if (!inMeta && doc && breadcrumbs && !doc.frontMatter.landing) {
    return null;
  }
  return <DocVersionBadge {...props} />;
}
