#!/usr/bin/env node
/**
 * Generates the pages of the API reference (api/<name>/) from the OpenAPI
 * specs in openapi/, with docusaurus-plugin-openapi-docs. Runs before
 * `pnpm start` and `pnpm build`, or by hand: `pnpm gen-api`.
 *
 * Also generates, in static/api/ (not committed):
 * - specs/: the specs, to download and import into Postman, Bruno…
 * - a redirect to /api/ for each former tag page (/api/centreon-web/host/…).
 *
 * Skipped when the API reference is not built (ARCHIVED_VERSION, or API=0),
 * since the plugin, and so its commands, are not loaded then.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const INTROS_DIR = path.join(HERE, 'intros');
const STATIC_DIR = path.join('static', 'api');
const BASE_URL = process.env.BASE_URL ?? '/';

if (process.env.ARCHIVED_VERSION || process.env.API === '0') {
  console.log('[api-reference] not built: nothing to generate');
  process.exit(0);
}

// Same tag ids as the plugin.
const kebabCase = createRequire(createRequire(import.meta.url).resolve('docusaurus-plugin-openapi-docs'))(
  'lodash/kebabCase',
);

// Versions of the Web API, latest first.
const webVersions = JSON.parse(fs.readFileSync(path.join(HERE, 'web-versions.json'), 'utf8'));
const webDir = (version) => (version === webVersions[0] ? 'api/centreon-web' : `api/centreon-web/${version}`);

const versionLinks = (current) =>
  webVersions
    .filter((version) => version !== current)
    .map((version) => `[${version}${version === webVersions[0] ? ' (latest)' : ''}](/${webDir(version)}/centreon-web-restapi)`)
    .join(', ');

// One entry per API (and version): the directory of its pages, its spec, the
// security scheme of its API token, and the introduction written by hand in
// intros/, which replaces the description of the spec (a title, a logo and
// raw authentication tables).
const APIS = [
  ...webVersions.map((version) => ({
    dir: webDir(version),
    spec: `centreon-web-${version}.json`,
    auth: 'Token',
    title: 'Centreon Web REST API',
    template: 'centreon-web.mdx',
    values: { version, otherVersions: versionLinks(version) },
    description: `Centreon Web REST API ${version}: get a token, make your first request, and browse every endpoint with its parameters, schemas and code samples.`,
  })),
  {
    dir: 'api/centreon-cloud',
    spec: 'centreon-web-cloud.json',
    auth: 'Token',
    title: 'Centreon Cloud REST API',
    template: 'centreon-cloud.mdx',
    values: {},
    description: 'Centreon Cloud REST API: get an API token, make your first request, and browse the configuration endpoints with their schemas and code samples.',
  },
  {
    dir: 'api/centreon-map',
    spec: 'centreon-map-26.10.json',
    auth: 'CentreonHeaderAuth',
    title: 'Centreon MAP REST API',
    template: 'centreon-map.mdx',
    values: {},
    description: 'Centreon MAP REST API: sign in, make your first request, and browse the endpoints for maps, views and access rights, with code samples.',
  },
];

const docusaurus = (...args) =>
  execFileSync('docusaurus', args, { stdio: ['ignore', 'ignore', 'inherit'] });

// Remove the output of a previous run (every sub-directory of api/ is
// generated): the generator does not overwrite existing pages, and removed
// endpoints must disappear.
for (const entry of fs.readdirSync('api', { withFileTypes: true })) {
  if (entry.isDirectory()) {
    fs.rmSync(path.join('api', entry.name), { recursive: true, force: true });
  }
}
fs.rmSync(STATIC_DIR, { recursive: true, force: true });

docusaurus('gen-api-docs', 'all');
if (webVersions.length > 1) {
  docusaurus('gen-api-docs:version', 'centreonWeb:all');
}

for (const api of APIS) {
  const spec = JSON.parse(fs.readFileSync(path.join('openapi', api.spec), 'utf8'));

  // Introduction page
  const values = {
    ...api.values,
    spec: api.spec,
    auth: api.auth,
    server: JSON.stringify(spec.servers?.[0] ?? null),
  };
  const body = fs
    .readFileSync(path.join(INTROS_DIR, api.template), 'utf8')
    .replace(/\{\{(\w+)\}\}/g, (match, name) => values[name] ?? match);
  for (const file of fs.readdirSync(api.dir).filter((name) => name.endsWith('.info.mdx'))) {
    const target = path.join(api.dir, file);
    let content = fs.readFileSync(target, 'utf8');
    content = content
      .replace(/^title: .*$/m, `title: ${JSON.stringify(api.title)}`)
      .replace(/^description: .*$/m, `description: ${JSON.stringify(api.description)}`)
      .replace(/^sidebar_label: .*$/m, 'sidebar_label: Get started')
      .replace(/(className=\{"openapi__heading"\}\s*children=\{)"[^"]*"/, `$1${JSON.stringify(api.title)}`);
    // Keep the front matter, the version badge and the title; replace the
    // rest (logo, spec description, security schemes, contact and license)
    // with the introduction.
    const titleEnd = content.indexOf('</Heading>');
    content = `${content.slice(0, titleEnd + '</Heading>'.length)}\n\n${body}`;
    fs.writeFileSync(target, content);
  }

  // Endpoint pages: links to the request and the responses under the
  // endpoint, since the responses can be far below a long request body.
  for (const file of fs.readdirSync(api.dir).filter((name) => name.endsWith('.api.mdx'))) {
    const target = path.join(api.dir, file);
    const content = fs.readFileSync(target, 'utf8');
    const links = [
      content.includes('id={"request"}') && '<a href="#request">Request</a>',
      content.includes('<StatusCodes') && '<a href="#responses">Responses</a>',
    ].filter(Boolean);
    if (links.length > 0) {
      fs.writeFileSync(
        target,
        content.replace(
          '</MethodEndpoint>',
          `</MethodEndpoint>\n\n<nav className="api-page-nav" aria-label="On this page">\n  ${links.join('\n  ')}\n</nav>`,
        ),
      );
    }
  }

  // Spec to download
  fs.mkdirSync(path.join(STATIC_DIR, 'specs'), { recursive: true });
  fs.copyFileSync(path.join('openapi', api.spec), path.join(STATIC_DIR, 'specs', api.spec));

  // Former tag pages (/api/centreon-web/host/…) redirect to /api/. Skipped
  // when a page of the API has the same path.
  const operationTags = new Set(
    Object.values(spec.paths ?? {}).flatMap((item) =>
      Object.values(item).flatMap((operation) => operation?.tags ?? []),
    ),
  );
  for (const tag of operationTags) {
    const id = kebabCase(tag);
    if (fs.existsSync(path.join(api.dir, `${id}.api.mdx`)) || fs.existsSync(path.join(api.dir, `${id}.info.mdx`))) {
      continue;
    }
    const target = `${BASE_URL}api/`;
    const redirectDir = path.join('static', api.dir, id);
    fs.mkdirSync(redirectDir, { recursive: true });
    fs.writeFileSync(
      path.join(redirectDir, 'index.html'),
      `<!doctype html><meta charset="utf-8"><title>Centreon API reference</title><meta name="robots" content="noindex"><link rel="canonical" href="${target}"><meta http-equiv="refresh" content="0; url=${target}"><script>location.replace(${JSON.stringify(target)})</script><a href="${target}">Centreon API reference</a>\n`,
    );
  }
}
console.log('[api-reference] API pages generated in api/, specs and redirects in static/api/');
