module.exports = {
  logmanagement: [
    {
      type: 'category',
      label: 'Getting started',
      link: {
        type: 'doc',
        id: 'getting-started/welcome'
      },
      items: [
        {
          type: 'doc',
          id: 'getting-started/concepts'
        },
        {
          type: 'doc',
          id: 'getting-started/quickstart'
        },
        {
          type: 'doc',
          id: 'getting-started/use-cases'
        }
      ]
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Collect & forward logs',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          id: 'collector/collector'
        }
      ]
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Explore & analyze',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          id: 'explore-analyze'
        },
        {
          type: 'doc',
          id: 'query-syntax'
        },
        {
          type: 'doc',
          id: 'dashboards'
        }
      ]
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Alert on your logs',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          id: 'alert-events'
        }
      ]
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Administration',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          id: 'administration/user-portal'
        },
        {
          type: 'doc',
          id: 'administration/tokens'
        },
        {
          type: 'doc',
          id: 'administration/storage-usage'
        }
      ]
    },
    {
      type: 'doc',
      id: 'api',
      label: 'API'
    },
    {
      collapsed: true,
      type: 'category',
      label: 'Resources',
      link: {
        type: 'generated-index',
      },
      items: [
        {
          type: 'doc',
          id: 'resources/glossary'
        },
        {
          type: 'doc',
          id: 'resources/faq'
        }
      ]
    }
  ]
}
