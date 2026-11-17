/**
 * llms-full.txt helpers of the llms-txt plugin: the rendering of a file that
 * holds the Markdown of many pages, and the size shown in the links to it.
 *
 * A file is a header (title and summary), then each page: a separator line
 * that names the page URL, then the page Markdown, front matter included. The
 * separator makes the pages easy to split apart again: a "---" line cannot,
 * since code blocks such as YAML examples also hold some.
 */

/** Renders the header of an llms-full.txt file: its title and its summary, on one line. */
function renderFullHeader({ title, summary }) {
  return `# ${title}\n\n> ${summary.replace(/\s+/g, ' ').trim()}\n`;
}

/** Returns the separator line that opens a page in an llms-full.txt file. */
function pageSeparator(url) {
  return `<!-- page: ${url} -->`;
}

/**
 * Renders pages for an llms-full.txt file, each one after a blank line and its
 * separator. Appending the result to a header, or to the pages already
 * rendered, gives a complete file.
 *
 * @param {Array<{ url: string, markdown: string }>} pages
 */
function renderFullPages(pages) {
  return pages.map(({ url, markdown }) => `\n${pageSeparator(url)}\n${markdown.trim()}\n`).join('');
}

/** Formats a size in bytes for a reader: "850 kB", "2.7 MB"; "850 ko", "2,7 Mo" in French. */
function formatSize(bytes, locale = 'en') {
  const french = locale === 'fr';
  const kilobytes = Math.max(1, Math.round(bytes / 1000));
  if (kilobytes < 1000) {
    return `${kilobytes} ${french ? 'ko' : 'kB'}`;
  }
  const megabytes = (bytes / (1000 * 1000)).toFixed(1);
  return french ? `${megabytes.replace('.', ',')} Mo` : `${megabytes} MB`;
}

module.exports = { formatSize, pageSeparator, renderFullHeader, renderFullPages };
