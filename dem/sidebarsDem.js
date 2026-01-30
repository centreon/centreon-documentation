module.exports = {
  dem: [
    {
      type: 'category',
      label: 'Getting started with Centreon DEM',
      link: {
        type: "doc",
        id: "getting-started/welcome"
      },
      items: [
       { type: 'doc', id: 'getting-started/dem-solution' },
        { type: 'doc', id: 'getting-started/contact-support' },
        { type: 'doc', id: 'getting-started/synthetic-monitoring' },
        { type: 'doc', id: 'getting-started/real-user-monitoring' },
        { type: 'doc', id: 'getting-started/system-view' },
        { type: 'doc', id: 'getting-started/business-view' },
        { type: 'doc', id: 'getting-started/load-tests' },
        { type: 'doc', id: 'getting-started/dashboards' },
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'installation/installation-checklist' },
        { type: 'doc', id: 'installation/dem-ip-addresses' },
        { type: 'doc', id: 'installation/real-user-monitoring-installation' },
        { type: 'doc', id: 'installation/monitor-production-events' },
        {
          collapsed: true,
          type: 'category',
          label: 'Servers and middleware',
          link: {
            type: 'generated-index',
          },
          items: [
            { type: 'doc', id: 'installation/servers/install-system-agents' },
            { type: 'doc', id: 'installation/servers/cloud-configuration-of-agents' },
            { type: 'doc', id: 'installation/servers/add-advanced-metrics' },
            { type: 'doc', id: 'installation/servers/install-php-magento-orocommerce-profiler' },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Configuration',
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'configuration/configuration-checklist' },
        { type: 'doc', id: 'configuration/manage-users-and-rights' },
        { type: 'doc', id: 'configuration/configure-digital-sobriety' },
        { type: 'doc', id: 'configuration/configure-google-analytics' },
        { type: 'doc', id: 'configuration/receive-and-configure-alerts' },
        {
          collapsed: true,
          type: 'category',
          label: 'User journey',
          link: {
            type: 'generated-index',
          },
          items: [
            { type: 'doc', id: 'configuration/user-journey/create-a-scenario' },
            { type: 'doc', id: 'configuration/user-journey/user-journey-best-practices' },
          ],
        },
        {
          collapsed: true,
          type: 'category',
          label: 'Advanced configuration',
          link: {
            type: 'generated-index',
          },
          items: [
            {
              type: 'doc',
              id: 'configuration/advanced-configuration/enable-disable-scenario-or-alert-via-api',
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Performance analysis',
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'performance-analysis/network-tab-indicators' },
        { type: 'doc', id: 'performance-analysis/system-tab-indicators' },
        { type: 'doc', id: 'performance-analysis/speed-up-website-with-applications-or-server-configuration' },
        { type: 'doc', id: 'performance-analysis/errors-and-unavailability-front-end' },
        {
          collapsed: true,
          type: 'category',
          label: 'Metric overview',
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
          label: 'Basic actions',
          link: {
            type: 'generated-index',
          },
          items: [
            { type: 'doc', id: 'performance-analysis/basic-actions/navigate-in-dem' },
            { type: 'doc', id: 'performance-analysis/basic-actions/how-alerts-work' },
            { type: 'doc', id: 'performance-analysis/basic-actions/gray-areas-on-charts' },
            { type: 'doc', id: 'performance-analysis/basic-actions/event-tracking' },
          ],
        },
      ],
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Digital sobriety',
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
      label: 'How-to articles',
      link: {
        type: 'generated-index',
      },
      items: [
        { type: 'doc', id: 'how-to-articles/unable-to-connect' },
        { type: 'doc', id: 'how-to-articles/meaning-of-colors-in-graphs' },
        { type: 'doc', id: 'how-to-articles/seo-module' },
        { type: 'doc', id: 'how-to-articles/measurement-interval' },
        { type: 'doc', id: 'how-to-articles/dem-probes-in-google-analytics' },
        { type: 'doc', id: 'how-to-articles/faq' },
        { type: 'doc', id: 'how-to-articles/password-reset' },
        { type: 'doc', id: 'how-to-articles/using-charts' },
        { type: 'doc', id: 'how-to-articles/user-journey-screen' },
        { type: 'doc', id: 'how-to-articles/rum-blocked-by-csp' },
      ],
    },
  ],
};
