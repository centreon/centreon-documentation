/**
 * llms-full.txt helpers of the llms-txt plugin: the order of the pages and
 * the rendering of a file that holds the Markdown of many pages.
 */

/**
 * Sorts pages in sidebar order: the doc ids given first, in that order, then
 * the docs in no sidebar, by permalink. Does not change the given array.
 *
 * @param {Array<{ doc: { id: string, permalink: string } }>} pages
 * @param {string[]} orderedIds  doc ids in sidebar order
 */
function sortPages(pages, orderedIds) {
  const rank = new Map();
  orderedIds.forEach((id, index) => {
    if (!rank.has(id)) {
      rank.set(id, index);
    }
  });
  return [...pages].sort((a, b) => {
    const rankA = rank.get(a.doc.id) ?? Infinity;
    const rankB = rank.get(b.doc.id) ?? Infinity;
    if (rankA !== rankB) {
      return rankA < rankB ? -1 : 1;
    }
    return a.doc.permalink.localeCompare(b.doc.permalink);
  });
}

/**
 * Renders an llms-full.txt file: a title, a summary, then the Markdown of
 * each page (front matter included), separated by blank lines.
 *
 * @param {{ title: string, summary: string, pages: Array<{ markdown: string }> }} file
 */
function renderFullFile({ title, summary, pages }) {
  const parts = [`# ${title}`, `> ${summary.replace(/\s+/g, ' ').trim()}`, ...pages.map((page) => page.markdown.trim())];
  return `${parts.join('\n\n')}\n`;
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

module.exports = { formatSize, renderFullFile, sortPages };
