/**
 * Converts a built Docusaurus doc page (HTML) to Markdown.
 *
 * Only the doc body (.theme-doc-markdown) is kept. Docusaurus-specific markup
 * is rewritten before conversion so that its content survives it: every tab
 * panel comes out under its tab label, code blocks keep their language,
 * admonitions and <details> keep their title, doc card lists become link
 * lists and table cells keep their lists and code on their row, joined with
 * <br>.
 *
 * Docusaurus markup is only found through markers meant to survive upgrades:
 * the stable theme class names (ThemeClassNames of @docusaurus/theme-common,
 * also set on the swizzled src/theme/DocCard), ARIA roles and Prism's
 * token-line class. Hashed CSS module class names (admonitionHeading_x...)
 * and element nesting are never relied on.
 *
 * Site URLs are not hardcoded: callers pass pageUrl and rewriteUrl to
 * convert(), see createMarkdownConverter().
 */

import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeRemark from 'rehype-remark';
import remarkGfm from 'remark-gfm';
import remarkStringify from 'remark-stringify';

// Stable theme class names (ThemeClassNames of @docusaurus/theme-common).
const DOC_BODY_CLASS = 'theme-doc-markdown';
const TABS_CLASS = 'theme-tabs-container';
const CODE_BLOCK_CLASS = 'theme-code-block';
// Set by src/theme/Mermaid: the diagram is drawn in the browser only, its
// source is kept in a hidden code block.
const MERMAID_CLASS = 'theme-mermaid';
const MERMAID_SOURCE_CLASS = 'theme-mermaid-source';
const ADMONITION_CLASS = 'theme-admonition';
const ADMONITION_TYPE_PREFIX = 'theme-admonition-';
const DOC_CARD_CLASS = 'theme-doc-card-container';
const DOC_CARD_TITLE_CLASS = 'theme-doc-card-title';
const DOC_CARD_DESCRIPTION_CLASS = 'theme-doc-card-description';
const DROPPED_TAGS = new Set(['svg', 'button', 'script', 'style', 'noscript']);
// Form controls are page widgets (a search field, a selector), not content:
// rehype-remark would write their placeholder or options as text. Checkboxes
// are kept, since they mark the items of a task list.
const FORM_CONTROL_TAGS = new Set(['input', 'select', 'textarea']);
const isFormControl = (node) =>
  FORM_CONTROL_TAGS.has(node.tagName) && !(node.tagName === 'input' && node.properties?.type === 'checkbox');
const BLOCK_TAGS = new Set([
  'article', 'blockquote', 'dd', 'details', 'div', 'dl', 'dt', 'figure', 'h1', 'h2', 'h3', 'h4', 'h5',
  'h6', 'header', 'hr', 'li', 'ol', 'p', 'pre', 'section', 'summary', 'ul',
]);

const element = (tagName, children = [], properties = {}) => ({
  type: 'element',
  tagName,
  properties,
  children,
});
const text = (value) => ({ type: 'text', value });
const isElement = (node, tagName) =>
  node.type === 'element' && (tagName === undefined || node.tagName === tagName);
const classesOf = (node) => node.properties?.className ?? [];
const hasClass = (node, name) => classesOf(node).includes(name);
const hasRole = (node, role) => isElement(node) && node.properties.role === role;

function textOf(node, lineBreak = '') {
  if (node.type === 'text') {
    return node.value;
  }
  if (isElement(node, 'br')) {
    return lineBreak;
  }
  return (node.children ?? []).map((child) => textOf(child, lineBreak)).join('');
}

/** Returns the first descendant (or the node itself) matching the predicate. */
function findFirst(node, predicate) {
  if (predicate(node)) {
    return node;
  }
  for (const child of node.children ?? []) {
    const found = findFirst(child, predicate);
    if (found) {
      return found;
    }
  }
  return undefined;
}

/** Returns the descendants matching the predicate, without looking inside matches. */
function findAll(node, predicate, found = []) {
  for (const child of node.children ?? []) {
    if (predicate(child)) {
      found.push(child);
    } else {
      findAll(child, predicate, found);
    }
  }
  return found;
}

/** Resolves a URL against the page URL; returns it unchanged when it is not a valid URL. */
function absoluteUrl(url, pageUrl) {
  try {
    return new URL(url, pageUrl).href;
  } catch {
    return url;
  }
}

const capitalize = (value) => value.charAt(0).toUpperCase() + value.slice(1);
const titleParagraph = (title) => element('p', [element('strong', [text(title)])]);

/** Rewrites the children of a node; each child may become zero or several nodes. */
function rewriteChildren(node, context) {
  node.children = (node.children ?? []).flatMap((child) => rewriteNode(child, context));
  return node;
}

/**
 * Tabs: each panel, in order, under a bold paragraph holding its tab label.
 * The first tab list of the container is its own: nested tabs sit in panels.
 */
function rewriteTabs(container, context) {
  const tabList = findFirst(container, (node) => hasRole(node, 'tablist'));
  const labels = tabList ? findAll(tabList, (node) => hasRole(node, 'tab')).map((tab) => textOf(tab).trim()) : [];
  const panels = findAll(container, (node) => hasRole(node, 'tabpanel'));
  return panels.flatMap((panel, index) => [
    titleParagraph(labels[index] ?? `Tab ${index + 1}`),
    ...rewriteChildren(panel, context).children,
  ]);
}

/** Code block: plain text code with its language, one line per Prism token line. */
function rewriteCodeBlock(container) {
  const pre = findFirst(container, (node) => isElement(node, 'pre')) ?? container;
  // The <pre> holds the lowercased language; the container keeps the author's case.
  const language = [...classesOf(pre), ...classesOf(container)]
    .map(String)
    .find((name) => name.startsWith('language-'));
  const lines = findAll(pre, (node) => isElement(node) && hasClass(node, 'token-line'));
  const code = lines.length > 0 ? lines.map((line) => textOf(line)).join('\n') : textOf(pre, '\n');
  return element('pre', [element('code', [text(code.replace(/\n+$/, ''))], { className: language ? [language] : [] })]);
}

/**
 * Admonition: a blockquote starting with its title in bold. The heading is
 * the first child element, the content the others; an empty heading (or a
 * lone child) gives the title of the admonition type (theme-admonition-warning).
 */
function rewriteAdmonition(node, context) {
  const [heading, ...content] = node.children.filter((child) => isElement(child));
  const type = classesOf(node)
    .map(String)
    .find((name) => name.startsWith(ADMONITION_TYPE_PREFIX))
    ?.slice(ADMONITION_TYPE_PREFIX.length);
  const headingText = content.length > 0 ? textOf(heading).trim() : '';
  const title = capitalize(headingText || type || 'note');
  const body = content.length > 0 ? element('div', content) : element('div', heading ? [heading] : []);
  return element('blockquote', [titleParagraph(`${title}:`), ...rewriteChildren(body, context).children]);
}

const cellBreak = () => element('br', [], { dataCellBreak: true });
const isBlank = (node) => node.type === 'text' && !node.value.trim();

/**
 * Table cell: Markdown cells only hold inline content, so paragraphs, list
 * items and code lines are flattened and separated by <br>.
 */
function inlineContent(nodes) {
  const inline = [];
  const lineBreak = () => {
    while (inline.length > 0 && isBlank(inline.at(-1))) {
      inline.pop();
    }
    if (inline.length > 0 && !isElement(inline.at(-1), 'br')) {
      inline.push(cellBreak());
    }
  };
  for (const node of nodes) {
    if (isElement(node, 'br')) {
      lineBreak();
    } else if (isBlank(node) && (inline.length === 0 || isElement(inline.at(-1), 'br'))) {
      // Skip whitespace at the cell start or after a line break.
    } else if (!isElement(node) || !BLOCK_TAGS.has(node.tagName)) {
      inline.push(node);
    } else if (node.tagName === 'pre') {
      for (const line of textOf(node).split('\n').filter((value) => value.trim())) {
        lineBreak();
        inline.push(element('code', [text(line)]));
      }
      lineBreak();
    } else if (node.tagName === 'ul' || node.tagName === 'ol') {
      node.children
        .filter((child) => isElement(child, 'li'))
        .forEach((item, index) => {
          lineBreak();
          inline.push(text(node.tagName === 'ol' ? `${index + 1}. ` : '- '), ...inlineContent(item.children));
        });
      lineBreak();
    } else {
      lineBreak();
      inline.push(...inlineContent(node.children ?? []));
      lineBreak();
    }
  }
  while (inline.length > 0 && (isElement(inline[0], 'br') || isBlank(inline[0]))) {
    inline.shift();
  }
  while (inline.length > 0 && (isElement(inline.at(-1), 'br') || isBlank(inline.at(-1)))) {
    inline.pop();
  }
  return inline;
}

/**
 * Marks the line breaks written inside a cell (in bold text, links...) as cell
 * breaks. Inline code cannot hold one: its breaks become spaces.
 */
function markCellBreaks(node) {
  for (const child of node.children ?? []) {
    if (isElement(child, 'code') || isElement(child, 'kbd')) {
      child.children = [text(textOf(child, ' '))];
    } else if (isElement(child, 'br')) {
      child.properties.dataCellBreak = true;
    } else {
      markCellBreaks(child);
    }
  }
}

const isDocCard = (node) => isElement(node) && hasClass(node, DOC_CARD_CLASS);

/** Doc card: its title as a link, followed by its description. */
function cardContent(card, context) {
  const title = findFirst(card, (node) => isElement(node) && hasClass(node, DOC_CARD_TITLE_CLASS));
  const description = findFirst(card, (node) => isElement(node) && hasClass(node, DOC_CARD_DESCRIPTION_CLASS));
  const link = rewriteNode(element('a', [text(textOf(title ?? card).trim())], { href: card.properties.href }), context);
  return [...link, ...(description ? [text(`: ${textOf(description).trim()}`)] : [])];
}

/** Doc card list (a <section> of doc cards): a list of card links. */
function rewriteCardList(section, context) {
  return element(
    'ul',
    findAll(section, isDocCard).map((card) => element('li', cardContent(card, context))),
  );
}

/** Rewrites one node into the nodes that replace it. */
function rewriteNode(node, context) {
  if (node.type === 'comment') {
    return [];
  }
  if (!isElement(node)) {
    return [node];
  }
  if (DROPPED_TAGS.has(node.tagName) || isFormControl(node) || hasClass(node, 'hash-link')) {
    return [];
  }

  if (hasClass(node, TABS_CLASS)) {
    return rewriteTabs(node, context);
  }
  if (hasClass(node, CODE_BLOCK_CLASS)) {
    return [rewriteCodeBlock(node)];
  }
  if (hasClass(node, MERMAID_CLASS)) {
    // A diagram comes out as its Mermaid source, readable as is.
    const source = findFirst(node, (child) => isElement(child) && hasClass(child, MERMAID_SOURCE_CLASS));
    return source ? [rewriteCodeBlock(source)] : [];
  }
  if (hasClass(node, ADMONITION_CLASS)) {
    return [rewriteAdmonition(node, context)];
  }
  if (node.tagName === 'section' && findFirst(node, isDocCard)) {
    return [rewriteCardList(node, context)];
  }
  if (isDocCard(node)) {
    // A card outside a card list.
    return [element('p', cardContent(node, context))];
  }
  if (node.tagName === 'details') {
    const summary = node.children.find((child) => isElement(child, 'summary'));
    const body = node.children.filter((child) => child !== summary);
    return [
      ...(summary ? [titleParagraph(textOf(summary).trim())] : []),
      ...rewriteChildren(element('div', body), context).children,
    ];
  }
  if (node.tagName === 'td' || node.tagName === 'th') {
    rewriteChildren(node, context);
    node.children = inlineContent(node.children);
    markCellBreaks(node);
    return [node];
  }
  if (node.tagName === 'img') {
    const { src = '', alt = '' } = node.properties;
    if (String(src).startsWith('data:')) {
      // Images inlined by the bundler have no URL: leave a placeholder with their alt text.
      return [text(`[${alt || 'image'}]`)];
    }
    return [element('img', [], { src: absoluteUrl(src, context.pageUrl), alt })];
  }
  if (node.tagName === 'iframe' || node.tagName === 'video') {
    // Embedded content (demos, videos) has no Markdown equivalent: link to it.
    const source = node.properties.src || findFirst(node, (child) => isElement(child, 'source'))?.properties.src;
    if (!source) {
      return [];
    }
    const label = node.properties.title || (node.tagName === 'video' ? 'Video' : 'Embedded content');
    // A bare link: it may sit inside a paragraph, and gets one of its own otherwise.
    return [text(' '), element('a', [text(label)], { href: absoluteUrl(source, context.pageUrl) }), text(' ')];
  }
  if (node.tagName === 'a' && typeof node.properties.href === 'string') {
    const { href } = node.properties;
    if (!href.startsWith('#')) {
      const absolute = absoluteUrl(href, context.pageUrl);
      node.properties.href = context.rewriteUrl ? context.rewriteUrl(absolute) : absolute;
    }
  }
  return [rewriteChildren(node, context)];
}

/** Extracts the doc body element from a full page. */
function docBody(html) {
  // Parse from the doc body to the end of <main> only: the page head, navbar
  // and footer are large and not needed. Doc cards are <article> elements, so
  // the doc's own </article> cannot be used as the end marker.
  const start = html.lastIndexOf('<div', html.indexOf(DOC_BODY_CLASS));
  if (start < 0) {
    return undefined;
  }
  const mainEnd = html.indexOf('</main>', start);
  const fragment = unified()
    .use(rehypeParse, { fragment: true })
    .parse(html.slice(start, mainEnd < 0 ? html.length : mainEnd));
  return findFirst(fragment, (node) => isElement(node) && hasClass(node, DOC_BODY_CLASS));
}

/**
 * Returns a converter whose convert(html, { pageUrl, rewriteUrl }) resolves to
 * the Markdown of the page body, and rejects when the page has no doc body.
 * Link, image and embedded content URLs are made absolute against pageUrl;
 * link targets then go through rewriteUrl(absoluteUrl) when given (for example
 * to point to their Markdown version). In-page anchors are kept as is.
 */
export function createMarkdownConverter() {
  const processor = unified()
    .use(rehypeRemark, {
      handlers: {
        // Keep cell breaks as HTML: in a table cell, a Markdown break is written as a space.
        br: (state, node) => (node.properties?.dataCellBreak ? { type: 'html', value: '<br>' } : { type: 'break' }),
      },
    })
    // No cell padding to the column width: it bloats table-heavy pages.
    .use(remarkGfm, { tablePipeAlign: false })
    .use(remarkStringify, { bullet: '-', fences: true, rule: '-' });

  return {
    async convert(html, { pageUrl, rewriteUrl } = {}) {
      const body = docBody(html);
      if (!body) {
        throw new Error(`No doc body (.${DOC_BODY_CLASS}) found in ${pageUrl}`);
      }
      const root = { type: 'root', children: rewriteChildren(body, { pageUrl, rewriteUrl }).children };
      return processor.stringify(await processor.run(root));
    },
  };
}

/** Renders YAML front matter, skipping empty values; values are JSON-encoded (JSON is valid YAML). */
export function frontMatter(fields) {
  const lines = Object.entries(fields)
    .filter(([, value]) => value !== undefined && value !== null && value !== '')
    .map(([key, value]) => `${key}: ${JSON.stringify(value)}`);
  return `---\n${lines.join('\n')}\n---\n`;
}
