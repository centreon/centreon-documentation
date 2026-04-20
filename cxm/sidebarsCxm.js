module.exports = {
  cxm: [
    {
      type: 'category',
      label: 'What can I do with Centreon Experience Monitoring?',
      link: {
        type: "doc",
        id: "getting-started/welcome"
      },
      items: [
        { type: 'doc', id: 'getting-started/cxm-solution' },
        { type: 'doc', id: 'getting-started/synthetic-monitoring' },
        { type: 'doc', id: 'getting-started/real-user-monitoring' },
        { type: 'doc', id: 'getting-started/system-view' },
        { type: 'doc', id: 'getting-started/business-view' },
        { type: 'doc', id: 'getting-started/load-tests' },
      ],
    },
    {
      type: 'category',
      label: 'Setting up Experience Monitoring',
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'installation/installation-checklist' },

      ],
    },
    {
      type: 'category',
      label: 'Getting to know Experience Monitoring',
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'configuration/configuration-checklist' },

      ],
    },
    {
      type: 'category',
      label: 'Simulate user journeys: Synthetic Monitoring (STM)',
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'performance-analysis/network-tab-indicators' },

      ],
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Real User Monitoring (RUM)',
      link: {
        type: "doc",
        id: "rum/rum"
      },
      items: [
        { type: 'doc', id: 'rum/rum-intro' },
        { type: 'doc', id: 'installation/real-user-monitoring-installation' },
        { type: 'doc', id: 'rum/rum-results' },
        { type: 'doc', id: 'rum/rum-improve' },
        { type: 'doc', id: 'how-to-articles/rum-blocked-by-csp' },
      ],
    },
    {
      collapsed: true,
      type: 'category',
      label: "Evaluate a site's digital sobriety",
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'digital-sobriety/carbon-footprint-evaluation-and-digital-sobriety' },
        { type: 'doc', id: 'digital-sobriety/digital-sobriety-score' },
        { type: 'doc', id: 'digital-sobriety/differences-with-eco-index' },
      ],
    },
    {
      collapsed: true,
      type: 'category',
      label: "Analyze a site's business data (Google Analytics/Matomo)",
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'configuration/configure-google-analytics' },
        { type: 'doc', id: 'business-data/business-data-results' },
        { type: 'doc', id: 'business-data/business-alerts' },
      ],
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Monitor the health of my host server',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'category',
          label: 'Installation',
          collapsed: true,
          items: [
            { type: 'doc', id: 'installation/servers/install-system-agents' },
            { type: 'doc', id: 'installation/servers/cloud-configuration-of-agents' },
            { type: 'doc', id: 'installation/servers/add-advanced-metrics' },
            { type: 'doc', id: 'installation/servers/install-php-magento-orocommerce-profiler' },
            { type: 'doc', id: 'how-to-articles/faq' },
          ],
        },
        { type: 'doc', id: 'performance-analysis/system-tab-indicators' },
      ],

    },
    {
      collapsed: true,
      type: 'category',
      label: "Check a site’s network performance",
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'digital-sobriety/carbon-footprint-evaluation-and-digital-sobriety' },

      ],
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Run a load test',
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'digital-sobriety/carbon-footprint-evaluation-and-digital-sobriety' },

      ],
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Dashboards and exports',
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'digital-sobriety/carbon-footprint-evaluation-and-digital-sobriety' },

      ],
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Troubleshooting',
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'digital-sobriety/carbon-footprint-evaluation-and-digital-sobriety' },

      ],
    },
    {
      type: 'doc', id: 'release-notes'
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Resources',
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'digital-sobriety/carbon-footprint-evaluation-and-digital-sobriety' },

      ],
    },
  ],
};
