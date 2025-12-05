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
          id: 'getting-started/beta'
        },
        {
          type: 'doc',
          id: 'observability'
        },
        {
          type: 'doc',
          id: 'getting-started/concepts'
        },
        {
          type: 'doc',
          id: 'getting-started/use_cases'
        }
       ]
    },
    {
          "collapsed": true,
          "type": "category",
          "label": "Sending logs to CLM",
          "link": {
            "type": "generated-index",
          },
          items: [
        {
          type: 'doc',
          id: 'collector/collector'
        }
       ]
    },
    {
          "collapsed": true,
          "type": "category",
          "label": "Exploring and analyzing logs",
          "link": {
            "type": "generated-index",
          },
          items: [
        {
          type: 'doc',
          id: 'explore-analyze'
        },
        {
          type: 'doc',
          id: 'lucene-queries'
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
          "label": "Managing alerts",
          "link": {
            "type": "generated-index",
          },
          items: [
        {
          type: 'doc',
          id: 'alert-events'
        }
       ]
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