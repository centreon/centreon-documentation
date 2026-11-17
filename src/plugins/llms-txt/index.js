/**
 * Local Docusaurus plugin that writes llms.txt files (https://llmstxt.org).
 *
 * For each locale build (build/ and build/fr/), it writes:
 * - a root llms.txt, from the hand-written template editorial/root.<locale>.md
 *   (rendered by editorial.js), into which it inserts the links to each index
 *   below, one section per product family, and to the root llms.txt of the
 *   other locales,
 * - one index per on-prem version: the latest one only (/docs/llms.txt) by
 *   default, every built version (/docs/<version>/llms.txt for the others)
 *   with the onPremVersions: 'all' option,
 * - one index per other product (/cloud/llms.txt, /pp/llms.txt...).
 *
 * Titles, descriptions and URLs come from the docs plugins' loaded content
 * (allContentLoaded), not from source files; files are written in postBuild.
 * Pages are grouped by top-level sidebar category, in sidebar order (top-level
 * docs first under "General", docs in no sidebar last, by permalink).
 * Unlisted docs and connector procedure pages are left out: the connectors
 * index lists one line per connector category instead (connectors.js).
 */

const fs = require('fs/promises');
const path = require('path');

const { CATEGORY_SAMPLE, connectorCategories, isProcedure } = require('./connectors');
const { createPageFinder, renderTemplate } = require('./editorial');

const DOCS_PLUGIN_NAME = 'docusaurus-plugin-content-docs';

// The on-prem instance: versioned, one index per indexed version.
const ONPREM_ID = 'default';
const ONPREM_VERSIONS = ['latest', 'all'];

// The connectors instance.
const CONNECTORS_ID = 'pp';
// The connectors landing page links to every connector procedure.
const CONNECTORS_LANDING_ID = 'integrations/plugin-packs/getting-started/introduction';

// Product families: each gets a section of the root llms.txt, in this order.
// Product names stay in English in every locale.
const GROUPS = [
  { id: 'infra', title: 'Infra Monitoring' },
  { id: 'experience', title: 'Experience Monitoring' },
  { id: 'logs', title: 'Log Management' },
];

// Docs instances in output order, with their product family; any other
// instance goes to an "Other products" section. Texts fall back to English.
const SECTIONS = [
  {
    id: ONPREM_ID,
    group: 'infra',
    title: { en: 'Infra Monitoring OnPrem' },
    description: {
      en: 'Self-hosted monitoring platform: installation, configuration of monitored resources, events and alerts, dashboards, administration, upgrades, API and development.',
      fr: 'Plateforme de supervision auto-hébergée : installation, configuration des ressources supervisées, événements et alertes, tableaux de bord, administration, mises à jour, API et développement.',
    },
  },
  {
    id: 'cloud',
    group: 'infra',
    title: { en: 'Infra Monitoring Cloud' },
    description: {
      en: 'Infra Monitoring as a service: Centreon hosts and runs the central platform, you install pollers on your side. Not versioned; its procedures differ from the OnPrem ones.',
      fr: "Infra Monitoring en service : Centreon héberge et exploite la plateforme centrale, vous installez les collecteurs chez vous. Sans versions ; ses procédures diffèrent de celles d'OnPrem.",
    },
  },
  {
    id: CONNECTORS_ID,
    group: 'infra',
    title: { en: 'Monitoring Connectors', fr: 'Connecteurs de supervision' },
    description: {
      en: 'Ready-to-use templates and plugins, shared by OnPrem and Cloud. Each connector page gives its prerequisites, the templates and services it provides, its metrics and its troubleshooting. The index lists the general pages and one line per connector category.',
      fr: "Modèles et plugins prêts à l'emploi, communs à OnPrem et Cloud. Chaque page de connecteur donne ses prérequis, les modèles et services fournis, ses métriques et son dépannage. L'index liste les pages générales et une ligne par catégorie de connecteurs.",
    },
  },
  {
    id: 'experience-monitoring',
    group: 'experience',
    title: { en: 'Experience Monitoring' },
    description: {
      en: 'Monitoring of the digital experience: scripted user journeys (STM), real user monitoring (RUM), digital sobriety, business and system data.',
      fr: "Supervision de l'expérience numérique : parcours utilisateurs scriptés (STM), real user monitoring (RUM), sobriété numérique, données métier et système.",
    },
  },
  {
    id: 'logmanagement',
    group: 'logs',
    title: { en: 'Log Management' },
    description: {
      en: 'Log collection with OpenTelemetry, exploration and analysis, alerts on log patterns.',
      fr: 'Collecte de logs avec OpenTelemetry, exploration et analyse, alertes sur les motifs de logs.',
    },
  },
];

// Texts of the generated parts, per locale (falls back to English). The rest
// of the root llms.txt is in the editorial templates.
const TEXTS = {
  en: {
    latest: 'latest',
    onpremVersion: (version, latest, urlPath) =>
      latest
        ? `Pages of version ${version}, the current one, served under ${urlPath}.`
        : `Pages of version ${version}, served under ${urlPath}.`,
    olderVersions: (urlPath) => `Older versions are served under ${urlPath}<version>/, without an index.`,
    otherProducts: 'Other products',
    otherLanguages: 'Other languages',
    pageCount: (count) => `${count} pages`,
    connectorCount: (count) => `${count} connectors`,
    indexSummary: (name) =>
      `Index of the pages of the Centreon ${name} documentation, grouped by topic.`,
    indexBackLink: (url) => `Other products and languages are listed in the root llms.txt: ${url}`,
    otherPages: 'Other pages',
    general: 'General',
    connectorsIndex: 'This page indexes all Monitoring Connectors and links to the procedure of each connector.',
    connectorsByCategory: 'Connectors by category',
    category: (count, sample) =>
      count > CATEGORY_SAMPLE
        ? `${count} connectors, including ${sample}.`
        : `${count} ${count === 1 ? 'connector' : 'connectors'}: ${sample}.`,
  },
  fr: {
    latest: 'dernière version',
    onpremVersion: (version, latest, urlPath) =>
      latest
        ? `Pages de la version ${version}, la version actuelle, servies sous ${urlPath}.`
        : `Pages de la version ${version}, servies sous ${urlPath}.`,
    olderVersions: (urlPath) => `Les versions précédentes sont servies sous ${urlPath}<version>/, sans index.`,
    otherProducts: 'Autres produits',
    otherLanguages: 'Autres langues',
    pageCount: (count) => `${count} pages`,
    connectorCount: (count) => `${count} connecteurs`,
    indexSummary: (name) =>
      `Index des pages de la documentation Centreon ${name}, regroupées par thème.`,
    indexBackLink: (url) => `Les autres produits et langues sont listés dans le llms.txt racine : ${url}`,
    otherPages: 'Autres pages',
    general: 'Général',
    connectorsIndex:
      'Cette page indexe tous les connecteurs de supervision et renvoie vers la procédure de chaque connecteur.',
    connectorsByCategory: 'Connecteurs par catégorie',
    category: (count, sample) =>
      count > CATEGORY_SAMPLE
        ? `${count} connecteurs, dont ${sample}.`
        : `${count} ${count === 1 ? 'connecteur' : 'connecteurs'} : ${sample}.`,
  },
};

// Language names used in the "Other languages" section.
const LANGUAGE_NAMES = { en: 'English', fr: 'Français' };

/** Doc permalinks ignore trailingSlash (Docusaurus applies it to routes only): apply it to match served URLs. */
function applyTrailingSlash(permalink, trailingSlash) {
  if (trailingSlash === undefined) {
    return permalink;
  }
  const trimmed = permalink.replace(/\/+$/, '');
  return trailingSlash ? `${trimmed}/` : trimmed || '/';
}

/** Formats a "- [title](url): description" line; escapes brackets in the title, collapses whitespace in the description. */
function linkLine(title, url, description) {
  const label = title.replace(/[[\]]/g, '\\$&');
  const text = (description ?? '').replace(/\s+/g, ' ').trim();
  return text ? `- [${label}](${url}): ${text}` : `- [${label}](${url})`;
}

/** Returns the doc ids of sidebar items, depth first; generated-index links are skipped. */
function sidebarDocIds(items) {
  const ids = [];
  for (const item of items) {
    if (item.type === 'doc' || item.type === 'ref') {
      ids.push(item.id);
    } else if (item.type === 'category') {
      if (item.link?.type === 'doc') {
        ids.push(item.link.id);
      }
      ids.push(...sidebarDocIds(item.items));
    }
  }
  return ids;
}

/**
 * Groups the listed docs of a version under the top-level sidebar categories.
 * Returns [{ label, docs }], empty groups removed.
 */
function groupDocs(version, sectionId, texts) {
  // Drafts are already split out into version.drafts.
  const remaining = new Map(
    version.docs
      .filter((doc) => !doc.unlisted)
      .filter((doc) => !(sectionId === CONNECTORS_ID && isProcedure(doc)))
      .map((doc) => [doc.id, doc]),
  );
  const take = (ids) =>
    ids.flatMap((id) => {
      const doc = remaining.get(id);
      remaining.delete(id);
      return doc ? [doc] : [];
    });

  const general = { label: texts.general, docs: [] };
  const groups = [general];
  for (const items of Object.values(version.sidebars)) {
    for (const item of items) {
      if (item.type === 'category') {
        groups.push({ label: item.label, docs: take(sidebarDocIds([item])) });
      } else {
        general.docs.push(...take(sidebarDocIds([item])));
      }
    }
  }
  const rest = [...remaining.values()].sort((a, b) => a.permalink.localeCompare(b.permalink));
  groups.push({ label: texts.otherPages, docs: rest });
  return groups.filter((group) => group.docs.length > 0);
}

/** Counts the listed connector procedures of the connectors instance. */
function countConnectors(version) {
  return version.docs.filter((doc) => !doc.unlisted && isProcedure(doc)).length;
}

/** Reads the root template of a locale, the English one when the locale has none. */
async function readTemplate(locale) {
  const file = (name) => path.join(__dirname, 'editorial', `root.${name}.md`);
  try {
    return { source: `editorial/root.${locale}.md`, template: await fs.readFile(file(locale), 'utf8') };
  } catch (error) {
    if (error.code !== 'ENOENT' || locale === 'en') {
      throw error;
    }
    return { source: 'editorial/root.en.md', template: await fs.readFile(file('en'), 'utf8') };
  }
}

module.exports = function llmsTxtPlugin(context, options = {}) {
  const { siteConfig, i18n, baseUrl } = context;
  const onPremVersions = options.onPremVersions ?? 'latest';
  if (!ONPREM_VERSIONS.includes(onPremVersions)) {
    throw new Error(
      `[llms-txt] Invalid onPremVersions option "${onPremVersions}": expected "latest" or "all".`,
    );
  }

  // Non-indexed builds (archived versions) get no llms.txt.
  if (siteConfig.noIndex) {
    return { name: 'llms-txt' };
  }

  const locale = i18n.currentLocale;
  const texts = TEXTS[locale] ?? TEXTS.en;
  const trimUrl = (url) => url.replace(/\/+$/, '');
  const siteUrl = trimUrl(siteConfig.url);
  const toUrl = (permalink) => siteUrl + applyTrailingSlash(permalink, siteConfig.trailingSlash);
  // baseUrl is the localized one ("/fr/" for French).
  const rootIndexUrl = `${siteUrl}${baseUrl}llms.txt`;

  let docsInstances = {};

  /** Renders the "Connectors by category" section of the connectors index. */
  function categoryLines(version) {
    const categories = connectorCategories(version);
    if (categories.length === 0) {
      return [];
    }
    return [
      '',
      `## ${texts.connectorsByCategory}`,
      '',
      ...categories.map(({ label, permalink, titles }) =>
        linkLine(label, toUrl(permalink), texts.category(titles.length, titles.slice(0, CATEGORY_SAMPLE).join(', '))),
      ),
    ];
  }

  /** Renders the llms.txt index of one version of a docs instance. */
  function renderIndex(name, version, sectionId) {
    const lines = [`# ${name}`, '', `> ${texts.indexSummary(name)}`, '', texts.indexBackLink(rootIndexUrl)];
    let count = 0;
    for (const group of groupDocs(version, sectionId, texts)) {
      lines.push('', `## ${group.label}`, '');
      for (const doc of group.docs) {
        let description = doc.description;
        if (sectionId === CONNECTORS_ID && doc.id === CONNECTORS_LANDING_ID) {
          description = `${texts.connectorsIndex} ${description ?? ''}`;
        }
        lines.push(linkLine(doc.title, toUrl(doc.permalink), description));
        count += 1;
      }
    }
    if (sectionId === CONNECTORS_ID) {
      lines.push(...categoryLines(version));
    }
    return { content: `${lines.join('\n')}\n`, count };
  }

  /** Writes the index of one version and returns its table of contents entry. */
  async function writeIndex({ outDir, name, version, sectionId }) {
    // version.path is the localized URL path of the version, e.g. "/fr/docs/25.10".
    const relativeDir = version.path.startsWith(baseUrl) ? version.path.slice(baseUrl.length) : '';
    if (relativeDir === '') {
      // Writing here would land outside the version or overwrite the root file.
      throw new Error(
        `[llms-txt] Cannot place the index of "${sectionId}" ${version.versionName}: ` +
          `path "${version.path}" is not below baseUrl "${baseUrl}".`,
      );
    }
    const { content, count } = renderIndex(name, version, sectionId);
    await fs.mkdir(path.join(outDir, relativeDir), { recursive: true });
    await fs.writeFile(path.join(outDir, relativeDir, 'llms.txt'), content, 'utf8');
    return { url: `${siteUrl}${version.path}/llms.txt`, urlPath: `${version.path}/`, count };
  }

  /** Returns the {{page}} link line function: null drops the line of a page not in this build. */
  function createPageLine() {
    const findPage = createPageFinder(docsInstances, baseUrl);
    return (pagePath, label) => {
      const doc = findPage(pagePath);
      return doc && linkLine(label ?? doc.title, toUrl(doc.permalink), doc.description);
    };
  }

  /** Returns the values of the template placeholders; null when the instance is disabled in this build. */
  function templateValues() {
    const latest = docsInstances[ONPREM_ID]?.loadedVersions.find((version) => version.isLast);
    const connectors = docsInstances[CONNECTORS_ID]?.loadedVersions[0];
    return {
      siteUrl: `${siteUrl}${baseUrl}`,
      version: latest ? latest.versionName : null,
      // Rounded down to the hundred, for a "700+" that stays true for a while.
      connectorCount: connectors ? String(Math.floor(countConnectors(connectors) / 100) * 100) : null,
    };
  }

  return {
    name: 'llms-txt',

    async allContentLoaded({ allContent }) {
      docsInstances = allContent[DOCS_PLUGIN_NAME] ?? {};
    },

    async postBuild({ outDir }) {
      // The config always enables at least one docs instance: no content means
      // the Docusaurus data shape changed, so fail rather than publish an empty file.
      if (Object.keys(docsInstances).length === 0) {
        throw new Error(
          `[llms-txt] No ${DOCS_PLUGIN_NAME} content was captured in allContentLoaded(); ` +
            'refusing to write an empty llms.txt.',
        );
      }

      // Known sections in configured order, then any other docs instance.
      const known = new Set(SECTIONS.map((section) => section.id));
      const sections = [
        ...SECTIONS,
        ...Object.keys(docsInstances)
          .filter((id) => !known.has(id))
          .map((id) => ({ id, title: { en: id } })),
      ];

      // Index lines per product family, in GROUPS order, "other" last.
      const groupLines = new Map([...GROUPS.map((group) => [group.id, []]), ['other', []]]);
      for (const section of sections) {
        const lines = groupLines.get(section.group ?? 'other');
        const content = docsInstances[section.id];
        if (!content) {
          continue; // Instance disabled for this build.
        }
        const title = section.title[locale] ?? section.title.en;
        const description = section.description?.[locale] ?? section.description?.en ?? '';
        if (section.id === ONPREM_ID) {
          const versions = content.loadedVersions.filter((version) => onPremVersions === 'all' || version.isLast);
          for (const version of versions) {
            const label = version.isLast
              ? `${version.versionName} (${texts.latest})`
              : version.versionName;
            const entry = await writeIndex({
              outDir,
              name: `${title} ${label}`,
              version,
              sectionId: section.id,
            });
            const parts = [description, texts.onpremVersion(version.versionName, version.isLast, entry.urlPath)];
            // Single-version builds (previews of the next version) have no older one.
            if (onPremVersions === 'latest' && content.loadedVersions.length > 1) {
              parts.push(texts.olderVersions(entry.urlPath));
            }
            parts.push(`${texts.pageCount(entry.count)}.`);
            lines.push(linkLine(`${title} ${label}`, entry.url, parts.join(' ')));
          }
        } else {
          // Non-versioned instances have a single loaded version.
          for (const version of content.loadedVersions) {
            const entry = await writeIndex({ outDir, name: title, version, sectionId: section.id });
            let count = texts.pageCount(entry.count);
            if (section.id === CONNECTORS_ID) {
              count += `, ${texts.connectorCount(countConnectors(version))}`;
            }
            lines.push(linkLine(title, entry.url, `${description} ${count}.`));
          }
        }
      }

      const languageLines = i18n.locales
        .filter((other) => other !== locale)
        .map((other) => {
          const { url, baseUrl: otherBaseUrl } = i18n.localeConfigs[other];
          return linkLine(LANGUAGE_NAMES[other] ?? other, `${trimUrl(url)}${otherBaseUrl}llms.txt`);
        });

      // The generated sections, inserted at the {{indexes}} line of the template.
      const indexes = [];
      for (const [groupId, lines] of groupLines) {
        if (lines.length > 0) {
          const title = GROUPS.find((group) => group.id === groupId)?.title ?? texts.otherProducts;
          indexes.push('', `## ${title}`, '', ...lines);
        }
      }
      if (languageLines.length > 0) {
        indexes.push('', `## ${texts.otherLanguages}`, '', ...languageLines);
      }

      const { source, template } = await readTemplate(locale);
      const root = renderTemplate(template, {
        values: templateValues(),
        pageLine: createPageLine(),
        indexes: indexes.join('\n').trim(),
        source,
      });
      await fs.writeFile(path.join(outDir, 'llms.txt'), root, 'utf8');
    },
  };
};
