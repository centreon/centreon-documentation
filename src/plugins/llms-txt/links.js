/**
 * URL helpers of the Markdown pages: where a page's Markdown version lives,
 * and how links to pages are pointed to it.
 */

/** Markdown URL path of a page: "/docs/foo/" gives "/docs/foo.md". */
function markdownPath(permalink) {
  return `${permalink.replace(/\/+$/, '')}.md`;
}

/**
 * Returns a function mapping an absolute page URL, with or without anchor, to
 * its Markdown URL from markdownUrlByPageUrl; other URLs are returned as is.
 */
function createUrlRewriter(markdownUrlByPageUrl) {
  return (url) => {
    const [pageUrl, hash] = url.split('#');
    // Links written as full URLs may lack the trailing slash of page URLs.
    const target = markdownUrlByPageUrl.get(pageUrl) ?? markdownUrlByPageUrl.get(`${pageUrl}/`);
    if (!target) {
      return url;
    }
    return hash === undefined ? target : `${target}#${hash}`;
  };
}

module.exports = { markdownPath, createUrlRewriter };
