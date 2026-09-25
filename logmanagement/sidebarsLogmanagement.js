// Sidebar organized by user intent, following the common navigation frame
// shared by the three products (Discover, then product-specific tasks, then
// Administer, Extend & automate, and Reference).
module.exports = {
  logmanagement: [
    {
      type: 'doc',
      id: 'getting-started/welcome',
      label: 'Overview',
      className: 'sidebar-icon sidebar-icon--overview',
    },
    {
      type: 'category',
      label: 'Discover',
      className: 'sidebar-icon sidebar-icon--discover',
      collapsed: false,
      items: [
        'getting-started/concepts',
        'getting-started/observability',
        'getting-started/use-cases',
      ],
    },
    {
      type: 'category',
      label: 'Send logs',
      className: 'sidebar-icon sidebar-icon--send',
      collapsed: true,
      items: [
        'collector/opentelemetry-collector',
        'collector/collector-generator',
        'collector/collector',
        'collector/collector-troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Explore & analyze',
      className: 'sidebar-icon sidebar-icon--explore',
      collapsed: true,
      link: {
        type: 'doc',
        id: 'explore-analyze',
      },
      items: [
        'log-explorer',
        'query-syntax',
        'dashboards',
      ],
    },
    {
      type: 'category',
      label: 'Create alerts',
      className: 'sidebar-icon sidebar-icon--alert',
      collapsed: true,
      items: [
        'alert-events',
        'notifications',
      ],
    },
    {
      type: 'category',
      label: 'Administer',
      className: 'sidebar-icon sidebar-icon--administer',
      collapsed: true,
      items: [
        'centreon-hub',
        'user-rights',
        'administration/tokens',
        'administration/storage-usage',
      ],
    },
    {
      type: 'category',
      label: 'Extend & automate',
      className: 'sidebar-icon sidebar-icon--extend',
      collapsed: true,
      items: [
        'api',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      className: 'sidebar-icon sidebar-icon--reference',
      collapsed: true,
      items: [
        'resources/glossary',
      ],
    },
  ],
};
