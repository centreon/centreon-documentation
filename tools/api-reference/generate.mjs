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

// Description of the introduction page of each API (the specs start their
// description with a title or a notice, which makes a poor summary).
const INTRO_DESCRIPTIONS = {
  'api/centreon-web': 'Reference of the Centreon Web REST API 26.10: authentication, configuration, monitoring and administration endpoints, with schemas and code samples.',
  'api/centreon-web/25.10': 'Reference of the Centreon Web REST API 25.10: authentication, configuration, monitoring and administration endpoints, with schemas and code samples.',
  'api/centreon-cloud': 'Reference of the Centreon Cloud REST API: authentication, hosts, services, templates, notifications and access rules, with schemas and code samples.',
  'api/centreon-map': 'Reference of the Centreon MAP REST API 26.10: authentication, maps, views and their content, with request and response schemas and code samples.',
};

if (process.env.ARCHIVED_VERSION || process.env.API === '0') {
  console.log('[api-reference] not built: nothing to generate');
  process.exit(0);
}

const docusaurus = (...args) =>
  execFileSync('docusaurus', args, { stdio: ['ignore', 'ignore', 'inherit'] });

// Remove the pages of a previous run, so that removed endpoints disappear.
try {
  docusaurus('clean-api-docs', 'all', '--all-versions');
} catch {
  // Nothing to clean on a first run.
}
docusaurus('gen-api-docs', 'all');
docusaurus('gen-api-docs:version', 'centreonWeb:all');

for (const [dir, description] of Object.entries(INTRO_DESCRIPTIONS)) {
  for (const file of fs.readdirSync(dir).filter((name) => name.endsWith('.info.mdx'))) {
    const target = path.join(dir, file);
    const content = fs.readFileSync(target, 'utf8');
    fs.writeFileSync(target, content.replace(/^description: .*$/m, `description: ${JSON.stringify(description)}`));
  }
}
console.log('[api-reference] API pages generated in api/');
