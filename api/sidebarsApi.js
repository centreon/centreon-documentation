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

module.exports = {
  centreonWeb: generated('./centreon-web/sidebar.ts'),
  centreonWeb2510: generated('./centreon-web/25.10/sidebar.ts'),
  centreonCloud: generated('./centreon-cloud/sidebar.ts'),
  centreonMap: generated('./centreon-map/sidebar.ts'),
};
