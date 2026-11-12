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

// Top of each sidebar: back to the list of APIs, the version switch, and the
// form of the Get started page that sets the server and the token.
const allApis = { type: 'link', label: 'All APIs', href: '/api/', className: 'api-sidebar-back' };

const setup = (introPath) => ({
  type: 'link',
  label: 'Set up your server',
  href: `${introPath}#configure`,
  className: 'api-sidebar-setup',
});

// Versions of the Web API, latest first.
const webVersions = require('../tools/api-reference/web-versions.json');

const webVersionPath = (version) =>
  version === webVersions[0] ? '/api/centreon-web/' : `/api/centreon-web/${version}/`;

function versions(current) {
  return {
    type: 'category',
    label: `Version ${current}`,
    className: 'api-sidebar-version',
    collapsed: true,
    items: webVersions.map((version, index) => ({
      type: 'link',
      label: index === 0 ? `${version} (latest)` : version,
      href: `${webVersionPath(version)}centreon-web-restapi/`,
      className: version === current ? 'api-sidebar-version--current' : undefined,
    })),
  };
}

// One sidebar per version of the Web API: centreonWeb for the latest one,
// centreonWeb<version without dot> for the others (centreonWeb2510).
const webSidebars = Object.fromEntries(
  webVersions.map((version, index) => [
    index === 0 ? 'centreonWeb' : `centreonWeb${version.replace('.', '')}`,
    [
      allApis,
      versions(version),
      setup(`${webVersionPath(version)}centreon-web-restapi/`),
      ...generated(index === 0 ? './centreon-web/sidebar.ts' : `./centreon-web/${version}/sidebar.ts`),
    ],
  ]),
);

module.exports = {
  ...webSidebars,
  centreonCloud: [allApis, setup('/api/centreon-cloud/centreon-web-restapi-for-cloud/'), ...generated('./centreon-cloud/sidebar.ts')],
  centreonMap: [allApis, setup('/api/centreon-map/centreon-map-api/'), ...generated('./centreon-map/sidebar.ts')],
};
