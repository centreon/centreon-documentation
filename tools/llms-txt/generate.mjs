#!/usr/bin/env node
/**
 * Generates llms.txt (https://llmstxt.org) for each locale of a built site.
 *
 * Runs after `pnpm build` (see "postbuild" in package.json), or by hand:
 *
 *   node tools/llms-txt/generate.mjs [build directory, default "build"]
 *
 * The file is written from a Markdown template per language,
 * tools/llms-txt/llms.<lang>.md, that holds the introduction and the order of
 * the sections. The template is copied as is, except for HTML comments
 * (<!-- … -->, notes for the editors, removed) and:
 *
 *   {siteUrl}                URL of the site for the locale, with a trailing
 *                            slash (https://docs.centreon.com/ or …/fr/)
 *   {version}                current OnPrem version (for example 26.10)
 *   {{page <path>}}          one link to a page: title and description are
 *   {{page <path> | label}}  read from the built page
 *   {{pages <prefix>}}       every page under <prefix> (for example "docs"),
 *                            grouped by sidebar category, in sidebar order
 *   {{categories <prefix>}}  one line per sidebar category under <prefix>,
 *                            with its number of pages and their first titles
 *
 * Paths are relative to the site URL of the locale ("docs/api/rest-api-v2/").
 * Lists follow the sidebar: pages that are not in the sidebar are left out
 * (cite one with {{page}} if needed), and so are older versions, under
 * <prefix>/<x.y>/ or <prefix>/next/. Everything comes from the HTML of the build, so
 * titles and descriptions are those of the published pages, in the right
 * language.
 *
 * Archived versions (ARCHIVED_VERSION set) get no llms.txt.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const TEMPLATES_DIR = path.dirname(fileURLToPath(import.meta.url));
const DEFAULT_LANG = 'en';
// Category lines list the first titles of the category, not all of them
const CATEGORY_SAMPLE = 12;

// ---------------------------------------------------------------------------
// Reading the built HTML (minified by Docusaurus: attributes may be unquoted)
// ---------------------------------------------------------------------------

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ' };

function decode(text) {
  return text
    .replace(/&#x([0-9a-f]+);/gi, (_, hex) => String.fromCodePoint(parseInt(hex, 16)))
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&([a-z]+);/gi, (match, name) => ENTITIES[name.toLowerCase()] ?? match);
}

function stripTags(html) {
  return decode(html.replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim();
}

// Value of an attribute in an opening tag, quoted or not
function attr(tag, name) {
  const match = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, 'i'));
  if (!match) return null;
  return decode(match[1] ?? match[2] ?? match[3]);
}

function findTag(html, regex) {
  return html.match(regex)?.[0] ?? null;
}

function parsePage(html) {
  const htmlTag = findTag(html, /<html\b[^>]*>/i) ?? '';
  const classes = (attr(htmlTag, 'class') ?? '').split(/\s+/);

  const rawTitle = html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? '';
  // "Page title | Centreon Documentation" -> "Page title"
  const title = stripTags(rawTitle).replace(/\s+\|\s+[^|]+$/, '');

  const descriptionTag = findTag(html, /<meta\b[^>]*\sname=["']?description["']?[\s/>][^>]*>/i);
  const description = descriptionTag ? (attr(descriptionTag, 'content') ?? '').replace(/\s+/g, ' ').trim() : '';

  // Breadcrumbs (schema.org microdata, whatever the language of the page):
  // ancestors only, the current page is the last, unlinked item
  const crumbs = [];
  const nav = html.match(/itemtype=["']?https?:\/\/schema\.org\/BreadcrumbList["']?[^>]*>([\s\S]*?)<\/ul>/i)?.[1] ?? '';
  for (const item of nav.split(/<li\b/i).slice(1)) {
    if (!/itemListElement/.test(item)) continue;
    const link = findTag(item, /<a\b[^>]*>/i);
    const name = item.match(/itemprop=["']?name["']?[^>]*>([\s\S]*?)<\/span>/i)?.[1];
    if (link && name !== undefined) {
      crumbs.push({ name: stripTags(name), href: attr(link, 'href') });
    }
  }

  return {
    lang: (attr(htmlTag, 'lang') ?? '').split('-')[0],
    // A page written in Markdown; generated category indexes have no doc id
    isDoc: classes.some((c) => c.startsWith('docs-doc-id-')),
    version: classes.find((c) => c.startsWith('docs-version-'))?.slice('docs-version-'.length) ?? null,
    title,
    description,
    crumbs,
    position: sidebarPosition(html),
  };
}

// Position of the page in the sidebar: its index among its siblings at each
// level, for example [2, 5] for the 5th item of the 2nd top-level category.
// The minified HTML does not close the <li> tags, but every item carries its
// level, and the current page and its categories are marked active. Empty
// when the page is not in the sidebar.
function sidebarPosition(html) {
  const menu = html.match(/<ul\b[^>]*theme-doc-sidebar-menu[\s\S]*?<\/nav>/i)?.[0] ?? '';
  const counters = [];
  const position = [];
  for (const item of menu.split(/<li\b/i).slice(1)) {
    const level = Number(item.match(/theme-doc-sidebar-item-(?:category|link)-level-(\d+)/)?.[1]);
    if (!level) continue;
    counters.length = level;
    counters[level - 1] = (counters[level - 1] ?? 0) + 1;
    const link = findTag(item, /<a\b[^>]*>/i) ?? '';
    if (/\bmenu__link--active\b/.test(attr(link, 'class') ?? '')) {
      position.length = level - 1;
      position[level - 1] = counters[level - 1];
    }
  }
  return position;
}

function comparePositions(a, b) {
  if (!a.length || !b.length) return (a.length ? 0 : 1) - (b.length ? 0 : 1);
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] !== b[i]) return a[i] - b[i];
  }
  return a.length - b.length;
}

// ---------------------------------------------------------------------------
// Site of one locale
// ---------------------------------------------------------------------------

async function exists(file) {
  return fs.access(file).then(() => true, () => false);
}

async function htmlFile(dir, relPath) {
  const candidates = relPath === '' || relPath.endsWith('/')
    ? [path.join(dir, relPath, 'index.html')]
    : [path.join(dir, relPath, 'index.html'), path.join(dir, `${relPath}.html`)];
  for (const file of candidates) {
    if (await exists(file)) return file;
  }
  return null;
}

async function loadSite(dir) {
  const sitemap = await fs.readFile(path.join(dir, 'sitemap.xml'), 'utf8');
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => decode(m[1].trim()));
  if (!urls.length) throw new Error(`no URL in ${path.join(dir, 'sitemap.xml')}`);

  // The site URL is the shortest URL of the sitemap: the home page
  const siteUrl = urls.reduce((a, b) => (b.length < a.length ? b : a)).replace(/\/?$/, '/');

  const pages = [];
  for (const url of urls) {
    if (!url.startsWith(siteUrl)) continue;
    const rel = url.slice(siteUrl.length);
    const file = await htmlFile(dir, rel);
    if (!file) continue;
    const page = parsePage(await fs.readFile(file, 'utf8'));
    pages.push({ ...page, url, path: rel.replace(/\/?$/, '/').replace(/^\/$/, '') });
  }

  const home = await htmlFile(dir, '');
  const lang = home ? parsePage(await fs.readFile(home, 'utf8')).lang : '';

  const byPath = new Map(pages.map((p) => [p.path, p]));

  return { dir, siteUrl, lang, pages, byPath };
}

// Pages of the current version under a prefix ("docs" -> docs/…, but not
// docs/25.10/… nor docs/next/…), in sidebar order. Pages that are not in the
// sidebar are left out, as they are from the navigation of the site.
function currentPages(site, prefix) {
  const base = prefix.replace(/^\/|\/$/g, '') + '/';
  const archived = new RegExp(`^${base.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\\d+\\.\\d+|next)/`);
  return site.pages
    .filter((p) => p.isDoc && p.position.length && p.path.startsWith(base) && !archived.test(p.path))
    .sort((a, b) => comparePositions(a.position, b.position));
}

// Splits the pages, in sidebar order, into top-level pages and categories.
// A category is the first breadcrumb that is not shared by every page (a
// sidebar wrapped in a single top category still gets useful groups); the own
// page of a category opens it.
function sidebarEntries(pages, siteUrl) {
  const withCrumbs = pages.filter((p) => p.crumbs.length);
  let common = 0;
  while (
    withCrumbs.length &&
    withCrumbs.every((p) => p.crumbs.length > common && p.crumbs[common].name === withCrumbs[0].crumbs[common].name)
  ) {
    common++;
  }
  const categories = new Map();
  for (const page of pages) {
    const crumb = page.crumbs[common];
    if (crumb && !categories.has(crumb.name)) {
      const url = crumb.href ? new URL(crumb.href, siteUrl).href : null;
      categories.set(crumb.name, { name: crumb.name, url, pages: [] });
    }
  }
  const entries = [];
  const seen = new Set();
  for (const page of pages) {
    const crumb = page.crumbs[common];
    const category = crumb
      ? categories.get(crumb.name)
      : [...categories.values()].find((c) => c.url === page.url);
    if (!category) {
      entries.push({ page });
      continue;
    }
    category.pages.push(page);
    if (!seen.has(category)) {
      seen.add(category);
      entries.push({ category });
    }
  }
  return entries;
}

// ---------------------------------------------------------------------------
// Template
// ---------------------------------------------------------------------------

function pageLine(page, label) {
  const description = page.description && page.description !== page.title ? `: ${page.description}` : '';
  return `- [${label || page.title}](${page.url})${description}`;
}

function render(template, site, warn) {
  const version = currentPages(site, 'docs')[0]?.version ?? '';

  const directives = {
    page(arg) {
      const [target, label] = arg.split('|').map((s) => s.trim());
      const page = site.byPath.get(target.replace(/^\//, '').replace(/\/?$/, '/'));
      if (!page) {
        warn(`{{page ${target}}}: no such page in the build, line skipped`);
        return null;
      }
      return pageLine(page, label);
    },

    pages(prefix) {
      const pages = currentPages(site, prefix);
      if (!pages.length) {
        warn(`{{pages ${prefix}}}: no page under ${prefix}/`);
        return null;
      }
      // A top-level page after a category gets its own heading, so that it
      // is not read as part of the category above it
      const out = [];
      let inCategory = false;
      for (const { page, category } of sidebarEntries(pages, site.siteUrl)) {
        if (category) {
          out.push('', `### ${category.name}`, '', ...category.pages.map((p) => pageLine(p)));
          inCategory = true;
        } else if (inCategory) {
          out.push('', `### ${page.title}`, '', pageLine(page));
        } else {
          out.push(pageLine(page));
        }
      }
      return out.join('\n');
    },

    categories(prefix) {
      const pages = currentPages(site, prefix);
      if (!pages.length) {
        warn(`{{categories ${prefix}}}: no page under ${prefix}/`);
        return null;
      }
      const out = [];
      for (const { page, category } of sidebarEntries(pages, site.siteUrl)) {
        if (page) {
          out.push(pageLine(page));
          continue;
        }
        const titles = category.pages.map((p) => p.title);
        const sample = titles.slice(0, CATEGORY_SAMPLE).join(', ') + (titles.length > CATEGORY_SAMPLE ? ', …' : '');
        out.push(`- [${category.name}](${category.url ?? category.pages[0].url}) (${titles.length}): ${sample}`);
      }
      return out.join('\n');
    },
  };

  // HTML comments are notes for the editors of the template
  const source = template.replace(/<!--[\s\S]*?-->/g, '');

  const lines = [];
  for (const line of source.split('\n')) {
    const match = line.trim().match(/^\{\{\s*(page|pages|categories)\s+(.+?)\s*\}\}$/);
    if (!match) {
      lines.push(line.replaceAll('{siteUrl}', site.siteUrl).replaceAll('{version}', version));
      continue;
    }
    const result = directives[match[1]](match[2]);
    if (result !== null) lines.push(result);
  }

  // Links written by hand in the template must point to published pages
  const text = lines.join('\n');
  for (const [, url] of text.matchAll(/\]\((https?:\/\/[^)\s]+)\)/g)) {
    if (url.startsWith(site.siteUrl)) {
      const rel = url.slice(site.siteUrl.length).split('#')[0].replace(/\/?$/, '/');
      if (rel !== '/' && !site.byPath.has(rel)) warn(`link to a page that is not in the build: ${url}`);
    }
  }

  return text.replace(/\n{3,}/g, '\n\n').trim() + '\n';
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function localeDirs(buildDir) {
  const dirs = [];
  if (await exists(path.join(buildDir, 'sitemap.xml'))) dirs.push(buildDir);
  for (const entry of await fs.readdir(buildDir, { withFileTypes: true })) {
    const dir = path.join(buildDir, entry.name);
    if (entry.isDirectory() && (await exists(path.join(dir, 'sitemap.xml')))) dirs.push(dir);
  }
  return dirs;
}

async function main() {
  if (process.env.ARCHIVED_VERSION) {
    console.log('[llms.txt] archived version: skipped');
    return;
  }
  const buildDir = path.resolve(process.argv[2] ?? 'build');
  const dirs = await localeDirs(buildDir).catch(() => []);
  if (!dirs.length) {
    console.error(`[llms.txt] no built site (sitemap.xml) in ${buildDir}`);
    process.exitCode = 1;
    return;
  }

  for (const dir of dirs) {
    const site = await loadSite(dir);
    const lang = site.lang || path.basename(dir);
    let templateFile = path.join(TEMPLATES_DIR, `llms.${lang}.md`);
    if (!(await exists(templateFile))) {
      console.warn(`[llms.txt] no template for "${lang}", using llms.${DEFAULT_LANG}.md`);
      templateFile = path.join(TEMPLATES_DIR, `llms.${DEFAULT_LANG}.md`);
    }
    const warnings = [];
    const text = render(await fs.readFile(templateFile, 'utf8'), site, (message) => warnings.push(message));
    const out = path.join(dir, 'llms.txt');
    await fs.writeFile(out, text);
    const links = text.match(/^- \[/gm)?.length ?? 0;
    console.log(`[llms.txt] ${path.relative(process.cwd(), out)} (${lang}): ${links} links, ${Math.round(text.length / 1024)} KB`);
    for (const message of warnings) console.warn(`[llms.txt]   warning: ${message}`);
  }
}

main().catch((error) => {
  console.error(`[llms.txt] ${error.stack ?? error}`);
  process.exitCode = 1;
});
