// Tests of the fixes applied to the product specs by `pnpm api:sync`
// (tools/api-reference/fixes.mjs). Run with: pnpm test

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { fixSpec } from '../../../tools/api-reference/fixes.mjs';

const fix = (api, spec, { version = '26.10', cloud = false } = {}) => {
  const reports = [];
  const fixed = fixSpec(api, structuredClone(spec), { version, cloud, report: (message) => reports.push(message) });
  return { spec: fixed, reports };
};

const centreonServer = (rest = '') => ({
  url: `{protocol}://{server}:{port}/centreon${rest}`,
  variables: { protocol: { default: 'http' }, server: { default: 'localhost' }, port: { default: '80' } },
});

describe('security schemes', () => {
  const spec = {
    components: {
      securitySchemes: {
        Token: { type: 'apiKey', in: 'header', name: 'X-AUTH-TOKEN' },
        Cookie: { type: 'apiKey', in: 'cookie', name: 'PHPSESSID' },
      },
    },
    security: [{ Token: [] }, { Cookie: [] }],
    paths: { '/hosts': { get: { summary: 'List hosts', security: [{ Cookie: [] }, {}] } } },
  };

  it('removes the Cookie scheme and its requirements', () => {
    const { spec: fixed } = fix('web', spec);
    assert.deepEqual(Object.keys(fixed.components.securitySchemes), ['Token']);
    assert.deepEqual(fixed.security, [{ Token: [] }]);
    // An empty requirement (no authentication) is kept.
    assert.deepEqual(fixed.paths['/hosts'].get.security, [{}]);
  });
});

describe('Centreon servers', () => {
  it('points OnPrem to https on port 443, with the API version of the documentation', () => {
    const { spec } = fix('autodiscovery', { servers: [centreonServer('/api/{version}/auto-discovery')], paths: {} }, { version: '26.10' });
    const [server] = spec.servers;
    assert.equal(server.url, '{protocol}://{server}:{port}/centreon/api/{version}/auto-discovery');
    assert.equal(server.variables.protocol.default, 'https');
    assert.equal(server.variables.server.default, 'your-centreon-server');
    assert.equal(server.variables.port.default, '443');
    assert.deepEqual(server.variables.version.enum, ['latest', 'v26.10']);
  });

  it('has no version variable when the URL has none', () => {
    const { spec } = fix('web', { servers: [centreonServer()], paths: {} });
    assert.equal(spec.servers[0].variables.version, undefined);
  });

  it('points Cloud to the instance URL, with the latest API', () => {
    const { spec } = fix('autodiscovery', { servers: [centreonServer('/api/{version}/auto-discovery')], paths: {} }, { version: 'cloud', cloud: true });
    assert.equal(spec.servers[0].url, 'https://{organization}.{region}.centreon.cloud/{instance}/api/latest/auto-discovery');
    assert.deepEqual(Object.keys(spec.servers[0].variables), ['organization', 'region', 'instance']);
  });
});

describe('pages of the endpoints', () => {
  it('gives an operationId to the endpoints whose summary gives the same page', () => {
    const shared = { summary: 'enable/disable multiple host groups' };
    const { spec } = fix('web', {
      paths: {
        '/hosts/groups/_enable': { post: shared },
        '/hosts/groups/_disable': { post: shared },
        '/hosts': { get: { summary: 'List hosts' } },
      },
    });
    assert.equal(spec.paths['/hosts/groups/_enable'].post.operationId, 'post-hosts-groups-enable');
    assert.equal(spec.paths['/hosts/groups/_disable'].post.operationId, 'post-hosts-groups-disable');
    // Endpoints with a page of their own keep it.
    assert.equal(spec.paths['/hosts'].get.operationId, undefined);
  });
});

describe('HTML notices', () => {
  it('become an admonition with Markdown links', () => {
    const { spec } = fix('web', {
      info: { description: '<blockquote style="color: red">\n  <p>See the <a href="https://example.com/">OnPrem API</a>.</p>\n</blockquote>' },
      paths: {},
    });
    assert.equal(spec.info.description, '\n:::info\n\nSee the [OnPrem API](https://example.com/).\n\n:::\n');
  });
});

describe('MAP', () => {
  const spec = {
    servers: [{ url: 'http://localhost:8081/centreon-map/api' }],
    security: [{ bearerAuth: [] }, { CentreonHeaderAuth: [] }],
    paths: {
      '/maps': { get: { operationId: 'getAllMaps', tags: ['map-rest-controller'] } },
      '/new': { get: { operationId: 'getSomethingNew', tags: ['new-rest-controller'] } },
    },
  };

  it('uses readable tags and summaries, and the API token first', () => {
    const { spec: fixed } = fix('map', spec);
    assert.deepEqual(fixed.paths['/maps'].get.tags, ['Maps']);
    assert.equal(fixed.paths['/maps'].get.summary, 'List maps');
    assert.deepEqual(fixed.security, [{ CentreonHeaderAuth: [] }, { bearerAuth: [] }]);
    assert.equal(fixed.servers[0].url, '{protocol}://{server}:{port}/centreon-map/api/latest');
  });

  it('reports a tag or an endpoint it does not know, with a readable fallback', () => {
    const { spec: fixed, reports } = fix('map', spec);
    assert.equal(fixed.paths['/new'].get.summary, 'Get something new');
    assert.equal(reports.length, 2);
  });
});

describe('Log Management', () => {
  const spec = {
    info: { title: 'Centreon Log Management API, Environment: production' },
    paths: {
      '/v1/orgs/{org}/tokens/{token}': {
        delete: {
          summary: "[Admin]: Revoke a token.\nIf called with a short token the cache won't be invalidated.",
          description: 'Minimum role level required to perform this operation: **Admin**.',
          security: [{ apiKey: [], jwt: [] }],
        },
      },
    },
  };

  it('cleans the title and the summaries, and accepts either scheme', () => {
    const { spec: fixed } = fix('log-management', spec, { version: 'saas' });
    const operation = fixed.paths['/v1/orgs/{org}/tokens/{token}'].delete;
    assert.equal(fixed.info.title, 'Centreon Log Management API');
    assert.equal(operation.summary, 'Revoke a token');
    assert.equal(
      operation.description,
      "If called with a short token the cache won't be invalidated.\n\nMinimum role level required to perform this operation: **Admin**.",
    );
    assert.deepEqual(operation.security, [{ apiKey: [] }, { jwt: [] }]);
  });
});
