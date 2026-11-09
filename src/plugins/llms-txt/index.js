/**
 * Local Docusaurus plugin that writes llms.txt files (https://llmstxt.org).
 *
 * For each locale build (build/ and build/fr/), it writes:
 * - a root llms.txt (table of contents) linking to each index below and to
 *   the root llms.txt of the other locales,
 * - one index per on-prem version (/docs/llms.txt for the latest version,
 *   /docs/<version>/llms.txt for the others),
 * - one index per other product (/cloud/llms.txt, /pp/llms.txt...).
 *
 * Titles, descriptions and URLs come from the docs plugins' loaded content
 * (allContentLoaded), not from source files; files are written in postBuild.
 * Pages are grouped by top-level sidebar category, in sidebar order (top-level
 * docs first under "General", docs in no sidebar last, by permalink).
 * Unlisted docs and connector procedure pages are left out.
 */

const fs = require('fs/promises');
const path = require('path');

const DOCS_PLUGIN_NAME = 'docusaurus-plugin-content-docs';

// The on-prem instance: versioned, one index per built version.
const ONPREM_ID = 'default';

// Docs instances in output order. Texts fall back to English.
const SECTIONS = [
  {
    id: ONPREM_ID,
    title: { en: 'Infra Monitoring OnPrem' },
  },
  {
    id: 'cloud',
    title: { en: 'Infra Monitoring Cloud' },
    description: {
      en: 'SaaS edition of Infra Monitoring, not versioned. Its procedures differ from the OnPrem ones.',
      fr: "Édition SaaS d'Infra Monitoring, sans versions. Ses procédures diffèrent de celles d'OnPrem.",
    },
  },
  {
    id: 'pp',
    title: { en: 'Monitoring Connectors', fr: 'Connecteurs de supervision' },
    description: {
      en: 'Connectors that collect monitoring data, shared by OnPrem and Cloud. Lists the general pages and the landing page that indexes every connector.',
      fr: 'Connecteurs qui collectent les données de supervision, communs à OnPrem et Cloud. Liste les pages générales et la page d\'accueil qui indexe tous les connecteurs.',
    },
  },
  {
    id: 'experience-monitoring',
    title: { en: 'Experience Monitoring' },
    description: {
      en: 'Synthetic user journeys and real user monitoring of websites and applications.',
      fr: 'Parcours utilisateurs synthétiques et supervision de l\'expérience réelle des utilisateurs de sites et applications.',
    },
  },
  {
    id: 'logmanagement',
    title: { en: 'Log Management' },
    description: {
      en: 'Collection, exploration and alerting on logs.',
      fr: 'Collecte, exploration et alertes sur les logs.',
    },
  },
];

// Connector procedure pages (one per connector) are left out; the connectors
// landing page, which links to all of them, is listed instead.
const CONNECTOR_PROCEDURES_PREFIX = 'integrations/plugin-packs/procedures/';
const CONNECTORS_LANDING_ID = 'integrations/plugin-packs/getting-started/introduction';

// Texts of the generated files, per locale (falls back to English).
const TEXTS = {
  en: {
    title: 'Centreon Documentation',
    summary:
      'Official documentation of Centreon, a monitoring platform with an open source core. ' +
      'It covers Infra Monitoring (IT infrastructure, network, application and cloud monitoring, ' +
      'available on-premises or as a Cloud service), the Monitoring Connectors used to collect data, ' +
      'Experience Monitoring (synthetic user journeys and real user monitoring) and Log Management.',
    usage:
      'This file is a table of contents. Each link below points to the llms.txt index of one ' +
      'product, or of one version of Infra Monitoring OnPrem: pick the product, and for OnPrem the ' +
      'version that is installed (the latest one when unknown), then read only that index.',
    latest: 'latest',
    onpremVersion: (version, latest, urlPath) =>
      latest
        ? `Pages of Infra Monitoring OnPrem ${version}, the current version, served under ${urlPath}.`
        : `Pages of Infra Monitoring OnPrem ${version}, served under ${urlPath}.`,
    otherProducts: 'Other products',
    otherLanguages: 'Other languages',
    pageCount: (count) => `${count} pages`,
    indexSummary: (name) =>
      `Index of the pages of the Centreon ${name} documentation, grouped by topic.`,
    indexBackLink: (url) => `Other products and versions are listed in the table of contents: ${url}`,
    otherPages: 'Other pages',
    general: 'General',
    connectorsIndex: 'This page indexes all Monitoring Connectors and links to the procedure of each connector.',
  },
  fr: {
    title: 'Documentation Centreon',
    summary:
      'Documentation officielle de Centreon, une plateforme de supervision au cœur open source. ' +
      "Elle couvre Infra Monitoring (supervision des infrastructures IT, du réseau, des applications et du cloud, " +
      'disponible on-premise ou en tant que service Cloud), les connecteurs de supervision qui collectent les données, ' +
      "Experience Monitoring (parcours utilisateurs synthétiques et supervision de l'expérience réelle des utilisateurs) " +
      'et Log Management.',
    usage:
      "Ce fichier est une table des matières. Chaque lien ci-dessous pointe vers l'index llms.txt d'un " +
      "produit, ou d'une version d'Infra Monitoring OnPrem : choisissez le produit, et pour OnPrem la " +
      'version installée (la dernière si elle est inconnue), puis lisez uniquement cet index.',
    latest: 'dernière version',
    onpremVersion: (version, latest, urlPath) =>
      latest
        ? `Pages d'Infra Monitoring OnPrem ${version}, la version actuelle, servies sous ${urlPath}.`
        : `Pages d'Infra Monitoring OnPrem ${version}, servies sous ${urlPath}.`,
    otherProducts: 'Autres produits',
    otherLanguages: 'Autres langues',
    pageCount: (count) => `${count} pages`,
    indexSummary: (name) =>
      `Index des pages de la documentation Centreon ${name}, regroupées par thème.`,
    indexBackLink: (url) => `Les autres produits et versions sont listés dans la table des matières : ${url}`,
    otherPages: 'Autres pages',
    general: 'Général',
    connectorsIndex:
      'Cette page indexe tous les connecteurs de supervision et renvoie vers la procédure de chaque connecteur.',
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
      .filter((doc) => !(sectionId === 'pp' && doc.id.startsWith(CONNECTOR_PROCEDURES_PREFIX)))
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

module.exports = function llmsTxtPlugin(context) {
  const { siteConfig, i18n, baseUrl } = context;

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

  /** Renders the llms.txt index of one version of a docs instance. */
  function renderIndex(name, version, sectionId) {
    const lines = [`# ${name}`, '', `> ${texts.indexSummary(name)}`, '', texts.indexBackLink(rootIndexUrl)];
    let count = 0;
    for (const group of groupDocs(version, sectionId, texts)) {
      lines.push('', `## ${group.label}`, '');
      for (const doc of group.docs) {
        let description = doc.description;
        if (sectionId === 'pp' && doc.id === CONNECTORS_LANDING_ID) {
          description = `${texts.connectorsIndex} ${description ?? ''}`;
        }
        lines.push(linkLine(doc.title, toUrl(doc.permalink), description));
        count += 1;
      }
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

      const onpremLines = [];
      const productLines = [];
      for (const section of sections) {
        const content = docsInstances[section.id];
        if (!content) {
          continue; // Instance disabled for this build.
        }
        const title = section.title[locale] ?? section.title.en;
        if (section.id === ONPREM_ID) {
          for (const version of content.loadedVersions) {
            const label = version.isLast
              ? `${version.versionName} (${texts.latest})`
              : version.versionName;
            const entry = await writeIndex({
              outDir,
              name: `${title} ${label}`,
              version,
              sectionId: section.id,
            });
            const description = `${texts.onpremVersion(version.versionName, version.isLast, entry.urlPath)} ${texts.pageCount(entry.count)}.`;
            onpremLines.push(linkLine(label, entry.url, description));
          }
        } else {
          // Non-versioned instances have a single loaded version.
          for (const version of content.loadedVersions) {
            const entry = await writeIndex({ outDir, name: title, version, sectionId: section.id });
            const description = section.description?.[locale] ?? section.description?.en ?? '';
            productLines.push(
              linkLine(title, entry.url, `${description} ${texts.pageCount(entry.count)}.`),
            );
          }
        }
      }

      const languageLines = i18n.locales
        .filter((other) => other !== locale)
        .map((other) => {
          const { url, baseUrl: otherBaseUrl } = i18n.localeConfigs[other];
          return linkLine(LANGUAGE_NAMES[other] ?? other, `${trimUrl(url)}${otherBaseUrl}llms.txt`);
        });

      const root = [`# ${texts.title}`, '', `> ${texts.summary}`, '', texts.usage];
      if (onpremLines.length > 0) {
        const onprem = SECTIONS.find((section) => section.id === ONPREM_ID);
        root.push('', `## ${onprem.title[locale] ?? onprem.title.en}`, '', ...onpremLines);
      }
      if (productLines.length > 0) {
        root.push('', `## ${texts.otherProducts}`, '', ...productLines);
      }
      if (languageLines.length > 0) {
        root.push('', `## ${texts.otherLanguages}`, '', ...languageLines);
      }
      await fs.writeFile(path.join(outDir, 'llms.txt'), `${root.join('\n')}\n`, 'utf8');
    },
  };
};
