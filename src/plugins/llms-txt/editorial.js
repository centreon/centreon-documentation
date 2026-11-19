/**
 * Renders the hand-written template of the root llms.txt (editorial/root.<locale>.md).
 *
 * The template is copied as is, except:
 * - HTML comments (<!-- ... -->), which are notes for the editors, are removed;
 * - {name} is replaced with the value of that name;
 * - a {{page <path>}} or {{page <path> | <label>}} line becomes the link line
 *   of that page;
 * - the {{indexes}} line, required once, becomes the generated list of the
 *   llms.txt indexes.
 *
 * Unknown names and directives, unclosed comments, and directives not alone
 * on their line throw: a typo must fail the build rather than reach the
 * published file. Values and pages of a docs instance disabled in this build
 * (PP=0, CLOUD=0...) only warn: such partial builds are never published.
 */

const DIRECTIVE = /^\{\{\s*(\w+)(?:\s+([^|}]*?))?\s*(?:\|\s*([^}]*?)\s*)?\}\}$/;
const VALUE = /\{(\w+)\}/g;
// A comment, which cannot run past its own end marker.
const COMMENT = String.raw`<!--(?:(?!-->)[\s\S])*-->`;
// A comment on lines of its own goes with its lines, so that a comment
// between two list items does not split the list.
const COMMENT_LINES = new RegExp(String.raw`^[ \t]*${COMMENT}[ \t]*(?:\n|$)`, 'gm');
// An inline comment goes with the spaces before it.
const INLINE_COMMENT = new RegExp(String.raw`[ \t]*${COMMENT}`, 'g');

/**
 * @param {string} template
 * @param {object} context
 * @param {Record<string, string | null>} context.values  values of the {name}
 *   placeholders; null when unavailable in this build (the placeholder is kept, with a warning)
 * @param {(path: string, label?: string) => string | null} context.pageLine  link line of a page,
 *   null to drop the line; throws when the page is unknown
 * @param {string} context.indexes  generated list of the indexes
 * @param {string} [context.source]  template name, for messages
 * @param {(message: string) => void} [context.warn]
 * @returns {string}
 */
function renderTemplate(template, { values, pageLine, indexes, source = 'template', warn = console.warn }) {
  const fail = (message) => {
    throw new Error(`[llms-txt] ${source}: ${message}`);
  };

  const text = template.replace(/\r\n?/g, '\n').replace(COMMENT_LINES, '').replace(INLINE_COMMENT, '');
  if (text.includes('<!--') || text.includes('-->')) {
    fail('unclosed or stray HTML comment marker');
  }

  let indexesCount = 0;
  const lines = text.split('\n').flatMap((line) => {
    const trimmed = line.trim();
    if (!trimmed.includes('{{')) {
      return [
        line.replace(VALUE, (match, name) => {
          if (!Object.hasOwn(values, name)) {
            return fail(`unknown placeholder ${match}`);
          }
          if (values[name] === null) {
            warn(`[llms-txt] ${source}: ${match} is unavailable in this build, kept as is.`);
            return match;
          }
          return values[name];
        }),
      ];
    }
    const directive = trimmed.match(DIRECTIVE);
    if (!directive) {
      return fail(`a {{...}} directive must be alone on its line: "${trimmed}"`);
    }
    const [, name, argument, label] = directive;
    if (name === 'page') {
      if (!argument) {
        return fail(`{{page}} needs a path: "${trimmed}"`);
      }
      const pageLink = pageLine(argument, label || undefined);
      return pageLink === null ? [] : [pageLink];
    }
    if (name === 'indexes') {
      if (argument || label) {
        return fail(`{{indexes}} takes no argument: "${trimmed}"`);
      }
      indexesCount += 1;
      return [indexes];
    }
    return fail(`unknown directive "${trimmed}"`);
  });
  if (indexesCount !== 1) {
    fail(`{{indexes}} must appear exactly once, found ${indexesCount}`);
  }

  // Removed comments and dropped lines leave blank lines behind: keep at most one in a row.
  return `${lines.join('\n').replace(/\n{3,}/g, '\n\n').trim()}\n`;
}

/**
 * Returns a function that finds a listed doc from its URL path below the
 * locale root ("docs/api/"), for the {{page}} directive. It returns null, with
 * a warning, when the path belongs to no docs instance loaded in this build,
 * and throws when a loaded instance has no such page.
 *
 * @param {Record<string, { loadedVersions: Array<{ path: string, docs: Array<{ permalink: string, unlisted?: boolean }> }> }>} docsInstances
 * @param {string} baseUrl  localized base URL, "/" or "/fr/"
 * @param {(message: string) => void} [warn]
 */
function createPageFinder(docsInstances, baseUrl, warn = console.warn) {
  const trim = (url) => url.replace(/\/+$/, '');
  const docsByPermalink = new Map();
  // First URL segment of each loaded instance ("docs", "cloud"...).
  const roots = new Set();
  for (const content of Object.values(docsInstances)) {
    for (const version of content.loadedVersions) {
      if (version.path.startsWith(baseUrl)) {
        roots.add(version.path.slice(baseUrl.length).split('/')[0]);
      }
      for (const doc of version.docs) {
        if (!doc.unlisted) {
          docsByPermalink.set(trim(doc.permalink), doc);
        }
      }
    }
  }
  return (pagePath) => {
    const relative = pagePath.replace(/^\/+/, '');
    const doc = docsByPermalink.get(trim(`${baseUrl}${relative}`));
    if (doc) {
      return doc;
    }
    if (!roots.has(relative.split('/')[0])) {
      warn(`[llms-txt] {{page ${pagePath}}}: not in this build (docs instance disabled?), line dropped.`);
      return null;
    }
    throw new Error(`[llms-txt] {{page ${pagePath}}}: no listed page at ${trim(`${baseUrl}${relative}`)}.`);
  };
}

module.exports = { createPageFinder, renderTemplate };
