/**
 * Monitoring Connectors helpers of the llms-txt plugin: the connector
 * procedure pages (one per connector) and their sidebar categories.
 */

// Connector procedure pages, one per connector.
const PROCEDURES_PREFIX = 'integrations/plugin-packs/procedures/';

// Number of connectors named on a category line: the first ones only, since a
// category can hold hundreds of them.
const CATEGORY_SAMPLE = 12;

/** Tells whether a doc of the connectors instance is a connector procedure. */
function isProcedure(doc) {
  return doc.id.startsWith(PROCEDURES_PREFIX);
}

/** Returns the procedure doc ids of sidebar items, depth first. */
function procedureIds(items) {
  return items.flatMap((item) => {
    if (item.type === 'doc' || item.type === 'ref') {
      return item.id.startsWith(PROCEDURES_PREFIX) ? [item.id] : [];
    }
    return item.type === 'category' ? procedureIds(item.items) : [];
  });
}

/**
 * Returns one entry per top-level sidebar category that has a generated index
 * page and holds connector procedures, in sidebar order:
 * [{ label, permalink, titles }], titles being those of its listed procedures.
 */
function connectorCategories(version) {
  const docsById = new Map(version.docs.filter((doc) => !doc.unlisted).map((doc) => [doc.id, doc]));
  return Object.values(version.sidebars)
    .flat()
    .filter((item) => item.type === 'category' && item.link?.type === 'generated-index')
    .map((item) => ({
      label: item.label,
      permalink: item.link.permalink,
      titles: procedureIds(item.items).flatMap((id) => (docsById.has(id) ? [docsById.get(id).title] : [])),
    }))
    .filter((category) => category.titles.length > 0);
}

module.exports = { CATEGORY_SAMPLE, connectorCategories, isProcedure };
