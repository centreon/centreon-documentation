// Search hooks (search.searchHooks in rspress.config.ts).
// Both core versions share one search index because they are plain sections
// (docs/<lang>/<version>/), not rspress versions: keep only the results of the
// version being read, the latest one elsewhere, like docs.centreon.com.
const VERSIONS = ['26.10', '25.10'];

function versionOf(path: string): string | undefined {
  const segment = path.replace(/^\/fr(?=\/)/, '').split('/')[1];
  return VERSIONS.includes(segment) ? segment : undefined;
}

interface SearchResultGroup {
  result: unknown;
}

export function afterSearch(_query: string, groups: SearchResultGroup[]): void {
  const current = versionOf(window.location.pathname) ?? VERSIONS[0];
  for (const group of groups) {
    if (!Array.isArray(group.result)) continue;
    group.result = group.result.filter((item: { link?: string }) => {
      const version = item.link ? versionOf(item.link) : undefined;
      return version === undefined || version === current;
    });
  }
}
