#!/usr/bin/env node
/**
 * Generates the pages of the API reference from the OpenAPI specs in
 * openapi/, with docusaurus-plugin-openapi-docs, in the OnPrem and Cloud docs
 * (<docs>/api/reference/<api>/, see apis.mjs). Runs before `pnpm start` and
 * `pnpm build`, or by hand: `pnpm gen-api`.
 *
 * For each API, next to its pages:
 * - sidebar.json: its sidebar items, read by apiSidebarItemsGenerator
 *   (apis.mjs) for the API category of the docs sidebar.
 * Also static/api/specs/: the specs, to download and import into Postman,
 * Bruno… None of them is committed.
 *
 * Skipped when the API reference is not built (ARCHIVED_VERSION, or API=0),
 * since the plugin, and so its commands, are not loaded then.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { APIS, REFERENCE_DIR, TARGETS } from './apis.mjs';

const HERE = path.dirname(new URL(import.meta.url).pathname);
const INTROS_DIR = path.join(HERE, 'intros');
const SPECS_DIR = path.join('static', 'api', 'specs');

if (process.env.ARCHIVED_VERSION || process.env.API === '0') {
  console.log('[api-reference] not built: nothing to generate');
  process.exit(0);
}

// OnPrem versions of the build, as in docusaurus.config.js. The first one, in
// the order of versions.json, is served at /docs/, the others at
// /docs/<version>/.
const allVersions = JSON.parse(fs.readFileSync('versions.json', 'utf8'));
const builtVersions =
  process.env.VERSIONS === undefined
    ? allVersions
    : process.env.VERSIONS.trim() === ''
      ? allVersions.slice(0, 1)
      : process.env.VERSIONS.split(',');
const lastVersion = allVersions.find((version) => builtVersions.includes(version));

// Route of a page of the API reference, from the root of the site.
function routeOf(target, docId) {
  if (target.docs === 'cloud') {
    return `cloud/${docId}`;
  }
  return target.version === lastVersion ? `docs/${docId}` : `docs/${target.version}/${docId}`;
}

// Sidebar items of sidebar.ts, with the ids of the docs plugin. The generator
// computes them from the path of the docs plugin ("docs"), so they are wrong
// for versioned_docs/; and an endpoint with several tags is listed under each
// of them, and a tag can have the name of a category of the docs sidebar: a
// unique key per entry keeps the translation keys of the sidebar unique.
function readSidebar(dir, apiDir) {
  const source = fs
    .readFileSync(path.join(dir, 'sidebar.ts'), 'utf8')
    .replace(/^import type .*$/m, '')
    .replace(': SidebarsConfig', '')
    .replace(/export default (.*);/, 'return $1;');
  const items = new Function(source)();
  const docId = (id) => `${REFERENCE_DIR}/${apiDir}/${path.posix.basename(id)}`;
  const rewrite = (list, parent) =>
    list.map((item, index) => {
      if (item.type === 'category') {
        return {
          ...item,
          key: `api-${apiDir}-${parent}${item.label}`,
          ...(item.link?.type === 'doc' ? { link: { ...item.link, id: docId(item.link.id) } } : {}),
          items: rewrite(item.items, `${parent}${item.label}/`),
        };
      }
      if (item.type === 'doc') {
        return { ...item, id: docId(item.id), key: `api-${apiDir}-${parent}${index}:${path.posix.basename(item.id)}` };
      }
      return item;
    });
  return rewrite(Array.isArray(items) ? items : (items.apisidebar ?? []), '');
}

// URL of a server of the spec, with the default value of its variables
// (https://your-centreon-server:443/centreon/api/latest), and its path
// (/centreon/api/latest), shown before the path of each endpoint.
function resolveServer(server) {
  if (!server?.url) {
    return { url: '', path: '' };
  }
  let url = server.url.replace(/\/$/, '');
  for (const [name, variable] of Object.entries(server.variables ?? {})) {
    url = url.replaceAll(`{${name}}`, variable.default ?? '');
  }
  const match = url.match(/^[a-z]+:\/\/[^/]+(\/.*)?$/i);
  return { url, path: match?.[1] ?? '' };
}

// How to authenticate, from the security schemes of the spec, in their order:
// [{ scheme: 'Token', header: 'X-AUTH-TOKEN' }, …].
function authOf(spec) {
  const schemes = spec.components?.securitySchemes ?? {};
  return (spec.security ?? [])
    .flatMap((requirement) => Object.keys(requirement))
    .filter((name, index, names) => names.indexOf(name) === index && schemes[name])
    .map((name) => {
      const scheme = schemes[name];
      if (scheme.type === 'apiKey') {
        return { scheme: name, header: scheme.name, in: scheme.in };
      }
      if (scheme.type === 'http' && scheme.scheme === 'bearer') {
        return { scheme: name, header: 'Authorization', value: 'Bearer' };
      }
      return { scheme: name };
    });
}

// Endpoint page, as in the design of the API reference:
//   badges (API, version), title, description (lead), method and path,
//   Cloud notice, authentication and base URL, then the request and the
//   responses.
// The generator puts the description after the method and path; the
// sentence that points to the Cloud API becomes a notice with a link.
const CLOUD_SENTENCE =
  /\n?\*This endpoint has a specific behaviou?r on Cloud environments\.\*\s*\n?\*Please check the dedicated Cloud API documentation\.\*/;

function layoutEndpointPage(content, { api, version, baseUrl, auth, prefix, cloudNotice }) {
  const props = (values) =>
    Object.entries(values)
      .filter(([, value]) => value !== null && value !== undefined)
      .map(([key, value]) => `${key}={${JSON.stringify(value)}}`)
      .join(' ');

  // Imports, after the last import of the page.
  const lastImport = content.lastIndexOf('\nimport ');
  const importEnd = content.indexOf('\n', lastImport + 1);
  content = `${content.slice(0, importEnd + 1)}import { ApiAccess, ApiBadges, ApiCloudNotice } from "@site/src/components/ApiPage";\n${content.slice(importEnd + 1)}`;

  // Badges, before the title.
  content = content.replace(/<Heading\s+as=\{"h1"\}/, (heading) => `<ApiBadges ${props({ api, version })} />\n\n${heading}`);

  // Description: from after the method and path to the first section.
  const endpointStart = content.indexOf('<MethodEndpoint');
  const endpointEnd = content.indexOf('</MethodEndpoint>') + '</MethodEndpoint>'.length;
  const sections = ['<Heading\n  id={"request"}', '<ParamsDetails', '<RequestSchema', '<StatusCodes']
    .map((marker) => content.indexOf(marker, endpointEnd))
    .filter((index) => index !== -1);
  const sectionStart = sections.length > 0 ? Math.min(...sections) : content.length;
  let description = content.slice(endpointEnd, sectionStart).trim();
  const hasCloudSentence = CLOUD_SENTENCE.test(description);
  description = description.replace(CLOUD_SENTENCE, '').trim();

  const endpoint = content
    .slice(endpointStart, endpointEnd)
    .replace('<MethodEndpoint', `<MethodEndpoint\n  prefix={${JSON.stringify(prefix)}}`);
  const blocks = [
    description && `<div className="api-lead">\n\n${description}\n\n</div>`,
    endpoint,
    hasCloudSentence && cloudNotice && `<ApiCloudNotice ${props({ to: cloudNotice })} />`,
    `<ApiAccess ${props({ auth, baseUrl })} />`,
  ].filter(Boolean);
  return `${content.slice(0, endpointStart)}${blocks.join('\n\n')}\n\n${content.slice(sectionStart)}`;
}

const docusaurus = (...args) =>
  execFileSync('docusaurus', args, { stdio: ['ignore', 'ignore', 'inherit'] });

// Remove the output of a previous run: the generator does not overwrite
// existing pages, and removed endpoints must disappear.
for (const target of TARGETS) {
  fs.rmSync(path.join(target.docs, REFERENCE_DIR), { recursive: true, force: true });
}
fs.rmSync(SPECS_DIR, { recursive: true, force: true });

// Every API of the documentations of the build (see openapiConfig).
docusaurus('gen-api-docs', 'all');

let count = 0;
for (const target of TARGETS) {
  for (const { api: name, dir: apiDir, spec: specFile } of target.apis) {
    const dir = path.join(target.docs, REFERENCE_DIR, apiDir);
    if (!fs.existsSync(dir)) {
      continue; // not part of this build
    }
    count += 1;
    const api = APIS[name];
    const spec = JSON.parse(fs.readFileSync(path.join('openapi', specFile), 'utf8'));
    const infoFile = fs.readdirSync(dir).find((file) => file.endsWith('.info.mdx'));
    const infoId = infoFile.replace(/\.info\.mdx$/, '');

    // Sidebar
    fs.writeFileSync(path.join(dir, 'sidebar.json'), `${JSON.stringify(readSidebar(dir, apiDir), null, 2)}\n`);
    fs.rmSync(path.join(dir, 'sidebar.ts'));

    // Introduction page
    const values = {
      ...target.values,
      version: target.version,
      spec: specFile,
      auth: api.auth,
      server: JSON.stringify(spec.servers?.[0] ?? null),
      mapScenario: target.values.mapDoc
        ? `- [Centreon MAP API](${target.values.mapDoc}): a complete scenario, from sign-in to adding a shape on a map.\n`
        : '',
    };
    const body = fs
      .readFileSync(path.join(INTROS_DIR, api.template), 'utf8')
      .replace(/\{\{(\w+)\}\}/g, (match, key) => values[key] ?? match);
    const title = api.title;
    let intro = fs.readFileSync(path.join(dir, infoFile), 'utf8');
    intro = intro
      .replace(/^title: .*$/m, `title: ${JSON.stringify(title)}`)
      .replace(/^description: .*$/m, `description: ${JSON.stringify(api.description(target))}`)
      .replace(/^sidebar_label: .*$/m, 'sidebar_label: Get started')
      .replace(/(className=\{"openapi__heading"\}\s*children=\{)"[^"]*"/, `$1${JSON.stringify(title)}`);
    // Keep the front matter, the version badge and the title; replace the
    // rest (logo, spec description, security schemes, contact and license)
    // with the introduction.
    const titleEnd = intro.indexOf('</Heading>');
    fs.writeFileSync(path.join(dir, infoFile), `${intro.slice(0, titleEnd + '</Heading>'.length)}\n\n${body}`);

    // Endpoint pages
    const infoPath = routeOf(target, `${REFERENCE_DIR}/${apiDir}/${infoId}`);
    const server = resolveServer(spec.servers?.[0]);
    const pageProps = {
      api: api.badge,
      version: target.docs === 'cloud' ? null : `v${target.version}`,
      baseUrl: server.url,
      auth: authOf(spec),
    };
    const cloudReference = '/cloud/api/reference/web/centreon-web-restapi-for-cloud';
    for (const file of fs.readdirSync(dir).filter((name) => name.endsWith('.api.mdx'))) {
      const page = path.join(dir, file);
      let content = fs.readFileSync(page, 'utf8');
      // Route of the introduction page (link of the security scheme in the
      // request panel), wrong for versioned_docs/ too.
      content = content.replace(/^info_path: .*$/m, `info_path: ${infoPath}`);
      content = layoutEndpointPage(content, {
        ...pageProps,
        prefix: server.path,
        cloudNotice: target.docs === 'cloud' ? null : cloudReference,
      });
      fs.writeFileSync(page, content);
    }

    // Spec to download
    fs.mkdirSync(SPECS_DIR, { recursive: true });
    fs.copyFileSync(path.join('openapi', specFile), path.join(SPECS_DIR, specFile));
  }
}
console.log(`[api-reference] ${count} API references generated in <docs>/${REFERENCE_DIR}/, specs in ${SPECS_DIR}/`);
