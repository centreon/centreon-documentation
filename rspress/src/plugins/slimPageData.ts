import type { PageIndexInfo, RspressPlugin } from '@rspress/core';

// The page list shipped in the main bundle describes every page (6.6 MB here).
// The current page reads its toc, title and frontmatter from its route module
// and only takes routePath, lang, version, _relativePath and lastUpdatedTime
// from this list; the Overview component, unused here, reads the rest.
// The search index is built before extendPageData and keeps everything.
export function pluginSlimPageData(): RspressPlugin {
  return {
    name: 'centreon:slim-page-data',
    extendPageData(pageData: PageIndexInfo) {
      const page = pageData as Partial<PageIndexInfo>;
      page.toc = [];
      delete page.title;
      delete page.frontmatter;
      delete page.description;
    },
  };
}
