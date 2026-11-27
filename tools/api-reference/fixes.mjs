/**
 * Fixes applied to the product specs by sync.mjs, before they are written in
 * openapi/. Each fix is a function with what it fixes and why. They should
 * move to the product repositories over time: then remove them here.
 *
 * fixSpec(api, spec, { version, cloud, report }) changes the spec in place and
 * returns it; report(message) lists what needs a new fix (shown by sync.mjs).
 */

export function fixSpec(api, spec, context) {
  uniquePages(spec);
  removeCookieAuth(spec);
  removeLogo(spec);
  htmlToAdmonition(spec);
  if (api === 'map') {
    mapServer(spec);
    mapAuth(spec);
    mapTags(spec, context);
    mapSummaries(spec, context);
  } else if (api !== 'log-management') {
    centreonServer(spec, context);
  }
  if (api === 'autodiscovery') {
    apiTokenDescription(spec);
  }
  if (api === 'log-management') {
    logManagementTitle(spec);
    logManagementRoles(spec);
    eitherScheme(spec);
  }
  return spec;
}

/**
 * The generator names the page of an endpoint after its operationId, or its
 * summary when it has none (most Web endpoints): two endpoints with the same
 * summary and no operationId ("List all host groups", in configuration and
 * in monitoring) give the same page, and one of them is lost. These get an
 * operationId from their method and path; the other pages keep their name.
 */
function uniquePages(spec) {
  const slug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const entries = Object.entries(spec.paths ?? {}).flatMap(([route, item]) =>
    Object.entries(item)
      .filter(([method]) => METHODS.includes(method))
      .map(([method, operation]) => ({ route, method, operation })),
  );
  const pageOf = ({ operation }) => slug(operation.operationId ?? operation.summary ?? '');
  const count = new Map();
  for (const entry of entries) count.set(pageOf(entry), (count.get(pageOf(entry)) ?? 0) + 1);
  for (const entry of entries) {
    if (!entry.operation.operationId && count.get(pageOf(entry)) > 1) {
      // Copies: several paths can share the same operation (one $ref file,
      // as /_enable and /_disable).
      spec.paths[entry.route] = {
        ...spec.paths[entry.route],
        [entry.method]: { ...entry.operation, operationId: slug(`${entry.method} ${entry.route.replace(/[{}]/g, '')}`) },
      };
    }
  }
}

/**
 * The Cookie security scheme (PHPSESSID) is removed: a browser does not send
 * the session cookie of Centreon from another site, so it cannot work from
 * this reference, and it adds a confusing "Security Scheme" choice.
 */
function removeCookieAuth(spec) {
  const schemes = spec.components?.securitySchemes ?? {};
  const cookies = Object.keys(schemes).filter((name) => schemes[name].type === 'apiKey' && schemes[name].in === 'cookie');
  if (cookies.length === 0) return;
  for (const name of cookies) delete schemes[name];
  const keep = (requirements) =>
    requirements.filter((requirement) => Object.keys(requirement).length === 0 || Object.keys(requirement).some((name) => !cookies.includes(name)))
      .map((requirement) => Object.fromEntries(Object.entries(requirement).filter(([name]) => !cookies.includes(name))));
  if (spec.security) spec.security = keep(spec.security);
  for (const operation of operationsOf(spec)) {
    if (operation.security) operation.security = keep(operation.security);
  }
}

/** x-logo points to an image of the product repository, not published. */
function removeLogo(spec) {
  delete spec.info?.['x-logo'];
}

/**
 * HTML notices (<blockquote>, as in the Cloud spec) break the MDX build of
 * the pages: an admonition with Markdown links instead.
 */
function htmlToAdmonition(spec) {
  const convert = (text) =>
    text.replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/g, (match, inner) => {
      const body = inner
        .replace(/<a\s+href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/g, '[$2]($1)')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
      return `\n:::info\n\n${body}\n\n:::\n`;
    });
  if (spec.info?.description) spec.info.description = convert(spec.info.description);
  for (const operation of operationsOf(spec)) {
    if (operation.description) operation.description = convert(operation.description);
  }
}

/**
 * Server of the Centreon APIs (Web, BAM, Autodiscovery): the product specs
 * have a development server (http://localhost:80) and sometimes a wrong
 * version (v25.10 in the 26.10 Autodiscovery spec).
 * - OnPrem: https on port 443 of the reader's central server, and the API
 *   version: latest or this version (v26.10), when the URL has one.
 * - Cloud: the URL of the reader's Cloud instance, always the latest API.
 */
function centreonServer(spec, { version, cloud }) {
  const server = spec.servers?.[0];
  if (!server?.url?.startsWith('{protocol}://{server}:{port}/centreon')) return;
  const rest = server.url.slice('{protocol}://{server}:{port}/centreon'.length);
  if (cloud) {
    spec.servers = [
      {
        url: `https://{organization}.{region}.centreon.cloud/{instance}${rest.replace('{version}', 'latest')}`,
        variables: {
          organization: { default: 'your-organization', description: 'Name of your organization' },
          region: { default: 'your-region', description: 'Region of your Centreon Cloud platform' },
          instance: { default: 'your-instance', description: 'Name of your Centreon Cloud instance' },
        },
      },
    ];
    return;
  }
  spec.servers = [
    {
      url: server.url,
      variables: {
        protocol: { enum: ['https', 'http'], default: 'https', description: 'HTTP scheme' },
        server: { default: 'your-centreon-server', description: 'IP address or hostname of your Centreon central server' },
        port: { default: '443', description: 'Port of the web server' },
        ...(rest.includes('{version}')
          ? {
              version: {
                enum: ['latest', `v${version}`],
                default: 'latest',
                description: `API version: latest (the most recent version of your platform), or v${version} to pin it`,
              },
            }
          : {}),
      },
    },
  ];
}

/** MAP: the MAP server of the reader (http://localhost:8081 in the product). */
function mapServer(spec) {
  spec.servers = [
    {
      url: '{protocol}://{server}:{port}/centreon-map/api/latest',
      variables: {
        protocol: { enum: ['https', 'http'], default: 'https', description: 'HTTP scheme' },
        server: { default: 'your-map-server', description: 'IP address or hostname of your Centreon MAP server' },
        port: { default: '9443', description: 'Port of the MAP server (9443 with TLS, 8081 without)' },
      },
    },
  ];
}

/** MAP: the Centreon API token first, as for the other APIs. */
function mapAuth(spec) {
  if (!spec.security) return;
  const first = (requirement) => (Object.keys(requirement).includes('CentreonHeaderAuth') ? 0 : 1);
  spec.security = [...spec.security].sort((a, b) => first(a) - first(b));
}

/** MAP: readable tags (the menu items) instead of Java controller names. */
const MAP_TAGS = {
  'map-rest-controller': 'Maps',
  'map-rest': 'Maps',
  'view-rest-controller': 'Views',
  'mx-view-controller': 'Views',
  'map-resource-rest-controller': 'Map resources',
  'resource-element-rest-controller': 'Map resources',
  'geo-view-rest-end-point': 'Geographic views',
  'geo-view-resource-rest-controller': 'Geographic views',
  'acl-group-rest-end-controller': 'Access rights',
  'studio-admin-rest-controller': 'MAP administrators',
  'resource-reloader-rest-end-controller': 'Resource synchronization',
};

function mapTags(spec, { report }) {
  for (const operation of operationsOf(spec)) {
    operation.tags = [
      ...new Set(
        (operation.tags ?? []).map((tag) => {
          if (MAP_TAGS[tag]) return MAP_TAGS[tag];
          report(`MAP tag without a readable name: ${tag} (MAP_TAGS in fixes.mjs)`);
          return tag;
        }),
      ),
    ];
  }
  // Order of the menu.
  const order = [...new Set(Object.values(MAP_TAGS))];
  spec.tags = order.map((name) => ({ name }));
}

/** MAP: a summary (the title of the page) for each endpoint, which has none. */
const MAP_SUMMARIES = {
  createGeoView: 'Create a geographic view',
  createGeoView_1: 'Import a geographic view',
  createMap: 'Create a map',
  createStudioAdmin: 'Add a MAP administrator',
  deleteGeoView: 'Delete a geographic view',
  deleteMap: 'Delete a map',
  deleteStudioAdmin: 'Remove a MAP administrator',
  duplicateMap: 'Duplicate a map',
  executeCommand: 'Run an action on a service of a map',
  exportMap: 'Export a map',
  getAclGroupsAndPrivileges: 'List the privileges on a map',
  getAclGroupsAndPrivilegesGeo: 'List the privileges on a geographic view',
  getAclGroupsAndRoles: 'List access groups and their roles',
  getAllMaps: 'List maps',
  getAllStudioAdmins: 'List MAP administrators',
  getBreadcrumb: 'Get the breadcrumb of a view',
  getChildrenAsView: 'Get a resource of a map as a view',
  getGeoViewBusinessActivities: 'List the business activities of a geographic view',
  getGeoViewHostGroup: 'Get a host group of a geographic view',
  getGeoViewHostGroupHosts: 'List the hosts of a host group in a geographic view',
  getGeoViewMaps: 'List the maps of a geographic view',
  getMapBusinessActivity: 'Get a business activity of a map',
  getMapHost: 'Get a host of a map',
  getMapHostGroupStatistics: 'Get the statistics of a host group',
  getMapHostServices: 'List the services of a host of a map',
  getMapKpis: 'List the KPIs of a business activity',
  getMapMetaService: 'Get a meta-service of a map',
  getMapServiceById: 'Get a service of a map',
  getMapServiceGroupStatistics: 'Get the statistics of a service group',
  getMetaServiceGraph: 'Get the graph of a meta-service',
  getMxView: 'Get a view (MX format)',
  getServiceGraph: 'Get the graph of a service',
  getViewById: 'Get a view',
  importMap: 'Import a map',
  readMap: 'Get a map',
  reloadResources: 'Synchronize resources with Centreon',
  retrieveGeoView: 'Get a geographic view',
  retrieveGeoViews: 'List geographic views',
  updateAclGroupsAndPrivileges: 'Update the privileges on a map',
  updateAclGroupsAndPrivilegesGeo: 'Update the privileges on a geographic view',
  updateAclGroupsAndRoles: 'Update the roles of access groups',
  updateGeoView: 'Update a geographic view',
  updateMap: 'Update a map',
  updateMxView: 'Update a view (MX format)',
  updateView: 'Update the views of a map',
  updateViewPerspective: 'Update the perspective of a view',
};

function mapSummaries(spec, { report }) {
  for (const operation of operationsOf(spec)) {
    if (operation.summary) continue;
    const summary = MAP_SUMMARIES[operation.operationId];
    if (summary) {
      operation.summary = summary;
    } else {
      // Readable enough until it gets a summary: getMapHost → Get map host.
      operation.summary = operation.operationId
        .replace(/_\d+$/, '')
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .toLowerCase()
        .replace(/^./, (letter) => letter.toUpperCase());
      report(`MAP endpoint without a summary: ${operation.operationId} (MAP_SUMMARIES in fixes.mjs)`);
    }
  }
}

/**
 * Autodiscovery: its Token description is about the session token of the
 * login endpoint, which this API does not have: the API token instead.
 */
function apiTokenDescription(spec) {
  const token = spec.components?.securitySchemes?.Token;
  if (token) {
    token.description = 'API token, sent in the X-AUTH-TOKEN header. Create it in Administration > Authentication tokens.';
  }
}

/** Log Management: "Centreon Log Management API, Environment: production". */
function logManagementTitle(spec) {
  if (spec.info?.title) spec.info.title = spec.info.title.replace(/,\s*Environment:.*$/, '');
}

/**
 * Log Management: each summary starts with the role it needs
 * ("[Editor]: Create a new dashboard"), and some hold the whole description:
 * the summary is the title of the page and the menu item. It keeps its first
 * line, without the role (the description gives it); the rest of it moves to
 * the description.
 */
function logManagementRoles(spec) {
  for (const operation of operationsOf(spec)) {
    const match = operation.summary?.match(/^\s*\[(\w+)\]\s*:\s*([\s\S]*)$/);
    if (!match) continue;
    const [, , text] = match;
    const [first, ...rest] = text.trim().split('\n');
    const title = first.trim().replace(/\.$/, '');
    const more = rest.join('\n').trim();
    operation.summary = title;
    // The description already gives the role ("Minimum role level required…").
    operation.description = [more, operation.description?.trim()].filter(Boolean).join('\n\n');
  }
}

/**
 * Log Management: the endpoints accept an API key (M2M token) or a CCIAM
 * login (jwt), but their spec lists both schemes in one requirement, which
 * means both at once in OpenAPI: one requirement per scheme instead.
 */
function eitherScheme(spec) {
  const split = (requirements) =>
    requirements.flatMap((requirement) =>
      Object.keys(requirement).length > 1
        ? Object.entries(requirement).map(([name, scopes]) => ({ [name]: scopes }))
        : [requirement],
    );
  if (spec.security) spec.security = split(spec.security);
  for (const operation of operationsOf(spec)) {
    if (operation.security) operation.security = split(operation.security);
  }
}

const METHODS = ['get', 'put', 'post', 'delete', 'patch', 'head', 'options', 'trace'];

function operationsOf(spec) {
  return Object.values(spec.paths ?? {}).flatMap((item) =>
    Object.entries(item)
      .filter(([method]) => METHODS.includes(method))
      .map(([, operation]) => operation),
  );
}
