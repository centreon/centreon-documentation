/**
 * Sidebars of the API reference. The API pages and their sidebar slices
 * (sidebar.ts) are generated from the OpenAPI specs in openapi/ by
 * `pnpm gen-api`: one sidebar per API and version.
 */
// An endpoint with several tags is listed under each of them: a unique key
// per entry keeps the translation keys of the sidebar unique.
function withKeys(items, parent = '') {
  return items.map((item, index) => {
    if (item.type === 'category') {
      return { ...item, items: withKeys(item.items, `${parent}${item.label}/`) };
    }
    return item.type === 'doc' ? { ...item, key: `${parent}${index}:${item.id}` } : item;
  });
}

function generated(path) {
  try {
    // sidebar.ts exports the items of its "apisidebar" sidebar.
    const items = require(path).default;
    return Array.isArray(items) ? withKeys(items) : [];
  } catch {
    return [];
  }
}

// Top of each sidebar: back to the list of APIs, and the version switch.
const allApis = { type: 'link', label: 'All APIs', href: '/api/', className: 'api-sidebar-back' };

function versions(current) {
  const list = [
    { version: '26.10', href: '/api/centreon-web/centreon-web-restapi/' },
    { version: '25.10', href: '/api/centreon-web/25.10/centreon-web-restapi/' },
  ];
  return {
    type: 'category',
    label: `Version ${current}`,
    className: 'api-sidebar-version',
    collapsed: true,
    items: list.map(({ version, href }) => ({
      type: 'link',
      label: version === '26.10' ? `${version} (latest)` : version,
      href,
      className: version === current ? 'api-sidebar-version--current' : undefined,
    })),
  };
}

module.exports = {
  centreonWeb: [allApis, versions('26.10'), ...generated('./centreon-web/sidebar.ts')],
  centreonWeb2510: [allApis, versions('25.10'), ...generated('./centreon-web/25.10/sidebar.ts')],
  centreonCloud: [allApis, ...generated('./centreon-cloud/sidebar.ts')],
  centreonMap: [allApis, ...generated('./centreon-map/sidebar.ts')],
};
