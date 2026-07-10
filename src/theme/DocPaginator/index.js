import React from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client';

// Docusaurus computes prev/next links before sidebar translations are applied,
// so a link pointing to a category generated-index page keeps the untranslated
// category label. Resolve those titles against the current (translated) sidebar.
function collectCategoryLabels(items, map) {
  items.forEach((item) => {
    if (item.type === 'category') {
      if (item.href) {
        map.set(item.href, item.label);
      }
      collectCategoryLabels(item.items, map);
    }
  });
}

function fixNavigationLink(link, labelsByHref) {
  if (!link) {
    return link;
  }
  const label = labelsByHref.get(link.permalink);
  return label && label !== link.title ? { ...link, title: label } : link;
}

export default function DocPaginatorWrapper(props) {
  const sidebar = useDocsSidebar();
  const labelsByHref = new Map();
  if (sidebar?.items) {
    collectCategoryLabels(sidebar.items, labelsByHref);
  }
  return (
    <DocPaginator
      {...props}
      previous={fixNavigationLink(props.previous, labelsByHref)}
      next={fixNavigationLink(props.next, labelsByHref)}
    />
  );
}
