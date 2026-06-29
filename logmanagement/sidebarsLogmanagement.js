module.exports = {
  logmanagement: [
    {
      type: 'category',
      label: 'Getting started with Centreon Log Management',
      link: {
        type: 'doc',
        id: 'getting-started/welcome'
      },
       items: [
        {
          type: 'doc',
          id: 'getting-started/observability'
        },
        {
          type: 'doc',
          id: 'getting-started/concepts'
        },
        {
          type: 'doc',
          id: 'getting-started/use-cases'
        }
       ]
    },
        {
          "collapsed": true,
          "type": "category",
          "label": "Managing users",
          "link": {
            "type": "generated-index",
          },
          items: [
        {
          type: 'doc',
          id: 'centreon-hub'
        }
       ]
    },
    {
          "collapsed": true,
          "type": "category",
          "label": "Sending logs to Centreon Log Management",
          "link": {
            "type": "generated-index",
          },
          items: [
        {
          type: 'doc',
          id: 'collector/opentelemetry-collector'
        },
        {
          type: 'doc',
          id: 'collector/collector-simple'
        },
        {
          type: 'doc',
          id: 'collector/collector-generator'
        },
        {
          type: 'doc',
          id: 'collector/collector'
        },
        {
          type: 'doc',
          id: 'collector/collector-troubleshooting'
        }
       ]
    },
    {
          "collapsed": true,
          "type": "category",
          "label": "Exploring and analyzing logs",
          "link": {
            "type": "doc",
            "id": "explore-analyze"
          },
          items: [
        {
          type: 'doc',
          id: 'log-explorer'
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
          "collapsed": true,
          "type": "category",
          "label": "Managing alerts and notifications",
          "link": {
            "type": "generated-index",
          },
          items: [
        {
          type: 'doc',
          id: 'alert-events'
        },
        {
          type: 'doc',
          id: 'notifications'
        }
       ]
    },
        {
          "collapsed": true,
          "type": "category",
          "label": "Administration",
          "link": {
            "type": "generated-index",
          },
          items: [
        {
          type: 'doc',
          id: 'administration/storage-usage'
        },
        {
          type: 'doc',
          id: 'administration/tokens'
        }
       ]
    },
    {
          type: 'doc',
          id: 'api',
          label: 'API'
    },
    {
          "collapsed": true,
          "type": "category",
          "label": "Resources",
          "link": {
            "type": "generated-index",
          },
          items: [
        {
          type: 'doc',
          id: 'resources/glossary'
        }
      ]
    }
  ]
}
