import type { PageIndexInfo, RspressPlugin } from '@rspress/core';

const SECTIONS = ['pp', 'cloud', 'experience-monitoring', 'logmanagement'];

/**
 * One search index per documentation section, like docs.centreon.com: a page
 * only loads and searches its own section (its version for the core docs).
 * rspress groups the search index by page version and picks the current page's
 * one, so each page gets its section as version. Without it, every page loaded
 * a 25 MB index, 80% of it Monitoring Connectors procedures.
 */
export function pluginSearchSections(versions: readonly string[]): RspressPlugin {
  return {
    name: 'centreon:search-sections',
    modifySearchIndexData(pages: PageIndexInfo[]) {
      for (const page of pages) {
        const segment = page.routePath.replace(/^\/fr(?=\/)/, '').split('/')[1];
        if (versions.includes(segment) || SECTIONS.includes(segment)) page.version = segment;
      }
    },
  };
}
