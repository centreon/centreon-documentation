#!/usr/bin/env node
/**
 * Updates the OpenAPI specs of the API reference (openapi/) from the product
 * repositories, as declared in openapi/sources.yaml: `pnpm api:sync`.
 *
 * For each spec of each documentation:
 * 1. takes the spec at the reference of the documentation (a sparse, shallow
 *    clone of the repository at the tag or branch), or downloads it (url);
 * 2. bundles it and its $ref files into one spec (@redocly/openapi-core, as
 *    the product does for docs-api.centreon.com);
 * 3. applies the fixes of fixes.mjs (servers, security schemes…);
 * 4. writes openapi/centreon-<api>-<version>.json, with its origin in
 *    info.x-source (repository, path, reference and commit, or URL and hash).
 * It then lists the endpoints added and removed since the previous spec.
 *
 * Usage:
 *   pnpm api:sync                 every documentation
 *   pnpm api:sync 26.10 cloud     these documentations only
 *   pnpm api:sync --check         fails if a spec is not up to date (writes nothing)
 *
 * Private repositories (centreon-modules) need a GitHub token that can read
 * them: GH_TOKEN or GITHUB_TOKEN, or the token of the GitHub CLI (gh). Set
 * GIT to the git binary to use if it is not `git`.
 */
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { BaseResolver, bundle, createConfig, parseYaml } from '@redocly/openapi-core';
import yaml4 from 'js-yaml';
import { fixSpec } from './fixes.mjs';

const SOURCES_FILE = path.join('openapi', 'sources.yaml');
const GIT = process.env.GIT || 'git';

const args = process.argv.slice(2);
const check = args.includes('--check');
const only = args.filter((arg) => !arg.startsWith('--'));

const sources = parseYaml(fs.readFileSync(SOURCES_FILE, 'utf8'));
const unknown = only.filter((version) => !sources.versions[version]);
if (unknown.length > 0) {
  console.error(`[api-sync] unknown version: ${unknown.join(', ')} (see ${SOURCES_FILE})`);
  process.exit(1);
}

const specFileOf = (api, version) => `centreon-${api}-${version}.json`;

// GitHub token, never written to the logs: given to git as a header.
function githubToken() {
  if (process.env.GH_TOKEN || process.env.GITHUB_TOKEN) {
    return process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
  }
  try {
    return execFileSync('gh', ['auth', 'token'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim();
  } catch {
    return '';
  }
}

const token = githubToken();
const git = (cwd, ...gitArgs) =>
  execFileSync(
    GIT,
    [
      ...(token
        ? ['-c', `http.https://github.com/.extraheader=Authorization: Basic ${Buffer.from(`x-access-token:${token}`).toString('base64')}`]
        : []),
      ...gitArgs,
    ],
    { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] },
  ).trim();

// One sparse, shallow clone per repository and reference, with the
// directories of the specs it holds (their $ref files are next to them).
const workDir = fs.mkdtempSync(path.join(os.tmpdir(), 'api-sync-'));
const checkouts = new Map();

function checkout(repo, ref, dirs) {
  const key = `${repo}@${ref}`;
  if (!checkouts.has(key)) {
    const dir = path.join(workDir, key.replace(/[^\w.-]+/g, '_'));
    try {
      git(workDir, 'clone', '--quiet', '--depth', '1', '--branch', ref, '--filter=blob:none', '--sparse', `https://github.com/${repo}.git`, dir);
    } catch (error) {
      throw new Error(`cannot clone ${repo} at ${ref}: ${error.stderr?.trim() || error.message}`);
    }
    git(dir, 'sparse-checkout', 'set', ...dirs);
    checkouts.set(key, { dir, commit: git(dir, 'rev-parse', 'HEAD') });
  }
  return checkouts.get(key);
}

// Directories to check out per repository and reference.
function sparseDirs(repo, ref) {
  const dirs = new Set();
  for (const { ref: versionRef, apis } of Object.values(sources.versions)) {
    if (versionRef !== ref) continue;
    for (const api of apis) {
      const source = sources.apis[api];
      if (source.repo !== repo) continue;
      for (const file of [source.path, source.cloudPath].filter(Boolean)) {
        dirs.add(path.posix.dirname(file));
      }
    }
  }
  return [...dirs];
}

const config = await createConfig({});

/**
 * Resolver of the bundler that accepts two errors of the product specs, and
 * reports them (issues), so that they get fixed in the product:
 * - YAML that js-yaml 5 (used by Redocly) rejects but js-yaml 4 reads: a flow
 *   collection less indented than its key, a duplicated key (the last one
 *   wins);
 * - a $ref written from the root of the repository instead of its file;
 * - YAML that no parser reads: left empty, as Redoc does (not the root file).
 * $ref to a missing component are also left empty, see bundleFile.
 */
class ProductResolver extends BaseResolver {
  constructor(root, issues) {
    super(config.resolve);
    this.root = root;
    this.issues = issues;
  }

  resolveExternalRef(base, ref) {
    const resolved = super.resolveExternalRef(base, ref);
    if (base && !path.isAbsolute(ref) && !/^[a-z]+:/i.test(ref) && !fs.existsSync(resolved.split('#')[0])) {
      const fromRoot = path.join(this.root, ref);
      if (fs.existsSync(fromRoot.split('#')[0])) {
        this.issues.add(`$ref "${ref}" in ${path.relative(this.root, base)} is relative to the repository, not to its file`);
        return fromRoot;
      }
    }
    return resolved;
  }

  parseDocument(source, isRoot = false) {
    try {
      return super.parseDocument(source, isRoot);
    } catch (error) {
      if (!/\.ya?ml$/i.test(source.absoluteRef)) throw error;
      const file = path.relative(this.root, source.absoluteRef);
      const reason = (error.originalError?.message ?? error.message).split('\n')[0].replace(/ in ".*?"/, '');
      try {
        const parsed = yaml4.load(source.body, { schema: yaml4.CORE_SCHEMA, json: true });
        this.issues.add(`invalid YAML in ${file}: ${reason}`);
        return { source, parsed };
      } catch {
        if (isRoot) throw error;
        // As Redoc does: the part of the spec in this file is left empty.
        this.issues.add(`unreadable YAML in ${file} (${reason}): replaced with an empty schema`);
        return { source, parsed: {} };
      }
    }
  }
}

async function bundleFile(file, root, issues, cloud) {
  const externalRefResolver = new ProductResolver(root, issues);
  const { bundle: result, problems } = await bundle({ ref: file, config, dereference: false, externalRefResolver });
  // A $ref to a missing component of the spec: Redoc shows an empty schema,
  // so does the reference (dropDanglingRefs).
  const dangling = (problem) => problem.message === "Can't resolve $ref";
  const errors = problems.filter((problem) => problem.severity === 'error' && !dangling(problem));
  if (errors.length > 0) {
    const where = (error) => {
      const location = error.location?.[0];
      return location ? ` (${path.relative(root, location.source.absoluteRef)}#${location.pointer})` : '';
    };
    throw new Error(
      `cannot bundle ${path.relative(root, file)}:\n${errors.map((error) => `  - ${error.message}${where(error)}`).join('\n')}`,
    );
  }
  inlineLeftoverRefs(result.parsed, file, root, cloud, issues);
  dropDanglingRefs(result.parsed, issues);
  return result.parsed;
}

/**
 * $ref to files that the bundler leaves as they are: it only follows them
 * where the spec is valid, and the product specs have some in invalid places
 * (a schema written as a list, allOf in a response…). Their base file is
 * lost: each one is looked up by its path in the directory of the spec, in
 * the variant of the documentation (onPremise/ or Cloud/) when there are
 * both, and inlined. Not found, or still ambiguous: an empty schema.
 */
function inlineLeftoverRefs(spec, specFile, root, cloud, issues) {
  const specDir = path.dirname(specFile);
  const files = fs.readdirSync(specDir, { recursive: true }).filter((file) => /\.ya?ml$/.test(file)).map((file) => path.join(specDir, file));
  const find = (ref, base) => {
    const direct = base && path.resolve(path.dirname(base), ref);
    if (direct && fs.existsSync(direct)) return [direct];
    const suffix = `${path.sep}${ref.replace(/^(\.\.?\/)+/, '')}`;
    const candidates = files.filter((file) => file.endsWith(suffix));
    const variant = candidates.filter((file) => file.includes(cloud ? `${path.sep}Cloud${path.sep}` : `${path.sep}onPremise${path.sep}`));
    return variant.length > 0 ? variant : candidates;
  };
  const visit = (node, base, depth) => {
    if (!node || typeof node !== 'object' || depth > 20) return node;
    if (typeof node.$ref === 'string' && !node.$ref.startsWith('#')) {
      const [ref] = node.$ref.split('#');
      const found = find(ref, base);
      if (found.length !== 1) {
        issues.add(`$ref "${node.$ref}" not found${found.length > 1 ? ' (ambiguous)' : ''}: replaced with an empty schema`);
        return {};
      }
      issues.add(`$ref "${node.$ref}" left by the bundler (invalid place in the spec): inlined from ${path.relative(root, found[0])}`);
      const content = yaml4.load(fs.readFileSync(found[0], 'utf8'), { schema: yaml4.CORE_SCHEMA, json: true });
      return visit(content, found[0], depth + 1);
    }
    for (const [key, value] of Object.entries(node)) {
      node[key] = visit(value, base, depth + 1);
    }
    return node;
  };
  visit(spec, null, 0);
}

// Replaces each $ref to a missing component (#/components/…) with an empty
// schema.
function dropDanglingRefs(spec, issues) {
  const resolves = (ref) =>
    ref
      .slice(2)
      .split('/')
      .map((part) => decodeURIComponent(part).replace(/~1/g, '/').replace(/~0/g, '~'))
      .reduce((node, key) => (node && typeof node === 'object' ? node[key] : undefined), spec) !== undefined;
  const visit = (node) => {
    if (!node || typeof node !== 'object') return;
    for (const [key, value] of Object.entries(node)) {
      if (value && typeof value === 'object' && typeof value.$ref === 'string' && value.$ref.startsWith('#/') && !resolves(value.$ref)) {
        issues.add(`$ref to a missing component: ${value.$ref}, replaced with an empty schema`);
        node[key] = {};
      } else {
        visit(value);
      }
    }
  };
  visit(spec);
}

// The spec of an API for a documentation, and where it comes from.
async function fetchSpec(api, version, ref) {
  const source = sources.apis[api];
  if (source.url) {
    const response = await fetch(source.url);
    if (!response.ok) {
      throw new Error(`cannot download ${source.url}: HTTP ${response.status}`);
    }
    const text = await response.text();
    return {
      spec: JSON.parse(text),
      origin: { url: source.url, sha256: crypto.createHash('sha256').update(text).digest('hex') },
      issues: [],
    };
  }
  if (!ref) {
    throw new Error(`no ref for ${version} in ${SOURCES_FILE}, needed by ${api} (${source.repo})`);
  }
  const file = version === 'cloud' && source.cloudPath ? source.cloudPath : source.path;
  const { dir, commit } = checkout(source.repo, ref, sparseDirs(source.repo, ref));
  const absolute = path.join(dir, file);
  if (!fs.existsSync(absolute)) {
    throw new Error(`no ${file} in ${source.repo} at ${ref}`);
  }
  const issues = new Set();
  const spec = await bundleFile(absolute, dir, issues, version === 'cloud');
  return { spec, origin: { repo: source.repo, path: file, ref, commit }, issues: [...issues] };
}

const operationsOf = (spec) =>
  new Set(
    Object.entries(spec?.paths ?? {}).flatMap(([route, item]) =>
      Object.keys(item)
        .filter((method) => ['get', 'put', 'post', 'delete', 'patch', 'head', 'options'].includes(method))
        .map((method) => `${method.toUpperCase()} ${route}`),
    ),
  );

let failed = false;
let outdated = 0;
try {
  for (const [version, { ref, apis }] of Object.entries(sources.versions)) {
    if (only.length > 0 && !only.includes(version)) continue;
    for (const api of apis) {
      const output = path.join('openapi', specFileOf(api, version));
      try {
        const { spec, origin, issues } = await fetchSpec(api, version, ref);
        for (const issue of issues) {
          console.warn(`[api-sync] ${output}: product spec to fix: ${issue}`);
        }
        const report = (message) => console.warn(`[api-sync] ${output}: fix to add: ${message}`);
        const fixed = fixSpec(api, spec, { version, cloud: version === 'cloud', report });
        fixed.info = { ...fixed.info, 'x-source': origin };
        const content = `${JSON.stringify(fixed, null, 2)}\n`;

        const previous = fs.existsSync(output) ? fs.readFileSync(output, 'utf8') : null;
        const before = operationsOf(previous && JSON.parse(previous));
        const after = operationsOf(fixed);
        const added = [...after].filter((operation) => !before.has(operation));
        const removed = [...before].filter((operation) => !after.has(operation));
        const from = origin.repo ? `${origin.repo}@${origin.ref} (${origin.commit.slice(0, 9)})` : origin.url;

        if (previous === content) {
          console.log(`[api-sync] ${output}: up to date (${from})`);
          continue;
        }
        outdated += 1;
        console.log(
          `[api-sync] ${output}: ${check ? 'outdated' : 'updated'} from ${from}, ${after.size} endpoints` +
            (previous ? `, ${added.length} added, ${removed.length} removed` : ' (new)'),
        );
        for (const operation of added) console.log(`  + ${operation}`);
        for (const operation of removed) console.log(`  - ${operation}`);
        if (!check) {
          fs.writeFileSync(output, content);
        }
      } catch (error) {
        failed = true;
        console.error(`[api-sync] ${output}: ${error.message}`);
      }
    }
  }
} finally {
  fs.rmSync(workDir, { recursive: true, force: true });
}

if (failed || (check && outdated > 0)) {
  process.exit(1);
}
