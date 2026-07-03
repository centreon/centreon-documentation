module.exports = {
  'experience-monitoring': [
    {
      type: 'category',
      label: 'Getting started with Centreon Experience Monitoring',
      link: {
        type: "doc",
        id: "getting-started/welcome",
      },
      items: [
        {
          type: 'category',
          label: 'What can I do with Experience Monitoring?',
          link: {
            type: 'doc',
            id: 'getting-started/experience-monitoring-solution',
          },
          items: [
            { type: 'doc', id: 'getting-started/synthetic-monitoring' },
            { type: 'doc', id: 'getting-started/real-user-monitoring' },
            { type: 'doc', id: 'getting-started/system-view' },
            { type: 'doc', id: 'getting-started/network-data' },
            { type: 'doc', id: 'getting-started/business-view' },
            { type: 'doc', id: 'getting-started/load-tests' },
            { type: 'doc', id: 'getting-started/digital-sobriety' },
          ],
        },
        { type: 'doc', id: 'performance-analysis/basic-actions/navigate-in-experience-monitoring' },
        {
          collapsed: true,
          type: 'category',
          label: 'Understanding metrics',
          link: {
            type: 'doc',
            id: 'performance-analysis/metrics/overview-of-metrics',
          },
          items: [
            { type: 'doc', id: 'performance-analysis/metrics/hero-time' },
            { type: 'doc', id: 'performance-analysis/metrics/time-to-first-byte' },
            { type: 'doc', id: 'performance-analysis/metrics/speed-index' },
            { type: 'doc', id: 'performance-analysis/metrics/on-load' },
            { type: 'doc', id: 'performance-analysis/metrics/largest-contentful-paint' },
            { type: 'doc', id: 'performance-analysis/metrics/total-blocking-time' },
            { type: 'doc', id: 'performance-analysis/metrics/cumulative-layout-shift' },
          ],
        },
        {
          collapsed: true,
          type: 'category',
          label: 'Working with charts',
          link: {
            type: 'generated-index',
          },
          items: [
            { type: 'doc', id: 'how-to-articles/using-charts' },
            { type: 'doc', id: 'installation/monitor-production-events' },
          ],
        },
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
        { type: 'doc', id: 'configuration/manage-users-and-rights' },
      ],
    },
    {
      collapsed: true,
      type: 'category',
      label: 'User journeys (STM)',
      link: {
        type: "generated-index",
      },
      items: [
        { type: 'doc', id: 'configuration/user-journey/user-journey-intro' },
        { type: 'doc', id: 'configuration/user-journey/create-a-scenario' },
        { type: 'doc', id: 'configuration/user-journey/user-journey-best-practices' },
        { type: 'doc', id: 'how-to-articles/user-journey-screen' },
        { type: 'doc', id: 'configuration/user-journey/user-journey-notifications' },
        { type: 'doc', id: 'configuration/user-journey/stm-zones' },
        { type: 'doc', id: 'configuration/user-journey/user-journey-improve' },
        { type: 'doc', id: 'performance-analysis/errors-and-unavailability-front-end' },
        { type: 'doc', id: 'configuration/advanced-configuration/enable-disable-scenario-or-alert-via-api' },
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
      label: "Digital sobriety",
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'digital-sobriety/digital-sobriety-concepts' },
        { type: 'doc', id: 'digital-sobriety/digital-sobriety-score' },
        { type: 'doc', id: 'digital-sobriety/improve-dss' },
      ],
    },
    {
      collapsed: true,
      type: 'category',
      label: "Business data (Google Analytics/Matomo)",
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
      label: 'System data (host server health)',
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
    { type: 'doc', id: 'performance-analysis/network-tab-indicators' },
    { type: 'doc', id: 'how-to-articles/performing-load-tests' },
    { type: 'doc', id: 'performance-analysis/dashboards' },

    { type: 'doc', id: 'release-notes' },
    {
      collapsed: true,
      type: 'category',
      label: 'Resources',
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'experience-monitoring-glossary' },
        { type: 'doc', id: 'troubleshooting' },
      ],
    },
  ],
};