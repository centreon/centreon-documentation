#!/usr/bin/env node
/**
 * Generates the pages of the API reference (api/<name>/) from the OpenAPI
 * specs in openapi/, with docusaurus-plugin-openapi-docs. Runs before
 * `pnpm start` and `pnpm build`, or by hand: `pnpm gen-api`.
 *
 * Skipped when the API reference is not built (ARCHIVED_VERSION, or API=0),
 * since the plugin, and so its commands, are not loaded then.
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

// Introduction page of each API: its description, and the Markdown written
// by hand in intros/ that replaces the description of the spec (which starts
// with a title, a logo and raw authentication tables).
const INTROS = {
  'api/centreon-web': {
    title: 'Centreon Web REST API',
    template: 'centreon-web.mdx',
    values: { version: '26.10', otherVersion: 'the reference of [version 25.10](/api/centreon-web/25.10/centreon-web-restapi) is also available.' },
    description: 'Centreon Web REST API 26.10: get a token, make your first request, and browse every endpoint with its parameters, schemas and code samples.',
  },
  'api/centreon-web/25.10': {
    title: 'Centreon Web REST API',
    template: 'centreon-web.mdx',
    values: { version: '25.10', otherVersion: 'see the reference of the [latest version (26.10)](/api/centreon-web/centreon-web-restapi).' },
    description: 'Centreon Web REST API 25.10: get a token, make your first request, and browse every endpoint with its parameters, schemas and code samples.',
  },
  'api/centreon-cloud': {
    title: 'Centreon Cloud REST API',
    template: 'centreon-cloud.mdx',
    values: {},
    description: 'Centreon Cloud REST API: get an API token, make your first request, and browse the configuration endpoints with their schemas and code samples.',
  },
  'api/centreon-map': {
    title: 'Centreon MAP REST API',
    template: 'centreon-map.mdx',
    values: {},
    description: 'Centreon MAP REST API: sign in, make your first request, and browse the endpoints for maps, views and access rights, with code samples.',
  },
};

const INTROS_DIR = path.join(path.dirname(new URL(import.meta.url).pathname), 'intros');

if (process.env.ARCHIVED_VERSION || process.env.API === '0') {
  console.log('[api-reference] not built: nothing to generate');
  process.exit(0);
}

const docusaurus = (...args) =>
  execFileSync('docusaurus', args, { stdio: ['ignore', 'ignore', 'inherit'] });

// Remove the pages of a previous run (every sub-directory of api/ is
// generated): the generator does not overwrite existing pages, and removed
// endpoints must disappear.
for (const entry of fs.readdirSync('api', { withFileTypes: true })) {
  if (entry.isDirectory()) {
    fs.rmSync(path.join('api', entry.name), { recursive: true, force: true });
  }
}

docusaurus('gen-api-docs', 'all');
docusaurus('gen-api-docs:version', 'centreonWeb:all');

// Introduction pages

for (const [dir, intro] of Object.entries(INTROS)) {
  const body = fs
    .readFileSync(path.join(INTROS_DIR, intro.template), 'utf8')
    .replace(/\{\{(\w+)\}\}/g, (match, name) => intro.values[name] ?? match);
  for (const file of fs.readdirSync(dir).filter((name) => name.endsWith('.info.mdx'))) {
    const target = path.join(dir, file);
    let content = fs.readFileSync(target, 'utf8');
    content = content
      .replace(/^title: .*$/m, `title: ${JSON.stringify(intro.title)}`)
      .replace(/^description: .*$/m, `description: ${JSON.stringify(intro.description)}`)
      .replace(/^sidebar_label: .*$/m, 'sidebar_label: Get started')
      .replace(/(className=\{"openapi__heading"\}\s*children=\{)"[^"]*"/, `$1${JSON.stringify(intro.title)}`);
    // Keep the front matter, the version badge, the export button and the
    // title; replace the rest (logo, spec description, security schemes,
    // contact and license) with the introduction.
    const titleEnd = content.indexOf('</Heading>');
    content = `${content.slice(0, titleEnd + '</Heading>'.length)}\n\n${body}`;
    fs.writeFileSync(target, content);
  }
}
console.log('[api-reference] API pages generated in api/');
