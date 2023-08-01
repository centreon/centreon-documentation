module.exports = {
  cloud: [    
      {
        "collapsed": true,
        "type": "category",
        "label": "Getting started with Centreon Cloud",
        "link": {
          "type": "generated-index",
        },
      items: [        
        {
          type: 'doc',
          id: 'getting-started/cc-trial',
        },
        {
          "collapsed": true,
        "type": "category",
        "label": "Step 1: Discover Centreon Cloud",
        "link": {
          "type": "generated-index",
                          },
          items: [
        {
          type: 'doc',
          id: 'getting-started/interface',
        },
        {
          type: 'doc',
          id: 'getting-started/architecture',
        },
        {
          type: 'doc',
          id: 'getting-started/concepts',
        },
      ],
      },
      {
        "collapsed": true,
      "type": "category",
      "label": "Step 2: Set up your platform",
      "link": {
        "type": "generated-index",
                                },
      items: [
    {
      type: 'doc',
      id: 'getting-started/start-with-pollers',
    },
    {
      type: 'doc',
      id: 'getting-started/start-with-connectors',
    },
  ],   
},
{
  "collapsed": true,
"type": "category",
"label": "Step 3: Prepare the monitoring",
"link": {
  "type": "generated-index",
   },
items: [
{
  type: 'doc',
  id: 'getting-started/first-host',
},
{
  type: 'category',
  label: 'Monitoring examples',
  items: [
  {
    type: 'doc',
    id: 'getting-started/monitor-linux-server-with-snmp',
  },
  {
    type: 'doc',
    id: 'getting-started/monitor-windows-server-with-snmp',
  },
  {
    type: 'doc',
    id: 'getting-started/monitor-cisco-router-with-snmp',
  },
  {
    type: 'doc',
    id: 'getting-started/monitor-mysql-server',
  },
  {
    type: 'doc',
    id: 'getting-started/autodisco-aws',
  },
],
},
],
},
{
  "collapsed": true,
"type": "category",
"label": "Step 4: Monitor and visualize",
"link": {
  "type": "generated-index",
   },
items: [
{
  type: 'doc',
  id: 'getting-started/monitor-in-real-time',
},
{
  type: 'doc',
  id: 'getting-started/first-dashboard',
},
], 
},
{
  type: 'doc',
  id: 'getting-started/cloud-beyond-basics',
},
  ],
},
{
      type: 'category',
      label: 'Managing Centreon Cloud users',
      items: [
        {
          type: 'doc',
          id: 'ciam/ciam',
        },
        {
          type: 'doc',
          id: 'users/users',
        },
      ],
    },
    {
      type: 'category',
      label: 'Installing a poller',
      items: [
        {
          type: 'doc',
          id: 'installation/prerequisites',
        },
        {
          type: 'doc',
          id: 'installation/deploy-poller',
        },
      ],
    },
    {
        "type": "category",
        "label": "Monitoring resources",
        "items": [
          {
            "type": "category",
            "label": "Monitoring basics",
            "items": [
              {
                "type": "doc",
                "id": "monitoring/pluginpacks"
              },
              {
                "type": "doc",
                "id": "monitoring/monitoring-servers/deploying-a-configuration"
              }
            ]
          },
          {
            "type": "category",
            "label": "Monitoring hosts",
            "items": [
              {
                "type": "doc",
                "id": "monitoring/basic-objects/hosts-create"
              },
              {
                "type": "doc",
                "id": "monitoring/basic-objects/hosts"
              },
              {
                "type": "doc",
                "id": "monitoring/basic-objects/hosts-create-disco"
              },
              {
                "type": "doc",
                "id": "monitoring/basic-objects/hosts-templates"
              }
            ]
          },
          {
            "type": "category",
            "label": "Monitoring services",
            "items": [
              {
                "type": "doc",
                "id": "monitoring/basic-objects/services-create"
              },
              {
                "type": "doc",
                "id": "monitoring/basic-objects/services"
              },
              {
                "type": "doc",
                "id": "monitoring/basic-objects/services-create-disco"
              },
              {
                "type": "doc",
                "id": "monitoring/basic-objects/services-templates"
              }
            ]
          },
          {
            "type": "category",
            "label": "Discovering hosts and services automatically",
            "items": [
              {
                "type": "doc",
                "id": "monitoring/discovery/introduction"
              },
              {
                "type": "doc",
                "id": "monitoring/discovery/hosts-discovery"
              },
              {
                "type": "doc",
                "id": "monitoring/discovery/services-discovery"
              },
            ]
          },
          {
            "type": "category",
            "label": "Organizing hosts and services",
            "items": [
              {
                "type": "doc",
                "id": "monitoring/groups"
              },
              {
                "type": "doc",
                "id": "monitoring/categories"
              }
            ]
          },
          {
            "type": "category",
            "label": "Basic objects and actions",
            "items": [
              {
                "type": "doc",
                "id": "monitoring/basic-objects/macros"
              },
              {
                "type": "doc",
                "id": "monitoring/generic-actions"
              }
            ]
          },
        ]
      },
      {
        "type": "category",
        "label": "Managing events and alerts",
        "items": [
          {
            "type": "category",
            "label": "Viewing events",
            "items": [
              {
                "type": "doc",
                "id": "alerts-notifications/concepts"
              },
              {
                "type": "doc",
                "id": "alerts-notifications/resources-status"
              },
              {
                "type": "doc",
                "id": "alerts-notifications/event-log"
              },
              {
                "type": "doc",
                "id": "alerts-notifications/custom-views"
              }
            ]
          },
          {
            "type": "category",
            "label": "Managing alerts",
            "items": [
              {
                "type": "doc",
                "id": "alerts-notifications/acknowledge"
              },
              {
                "type": "doc",
                "id": "alerts-notifications/downtimes"
              },
              {
                "type": "doc",
                "id": "alerts-notifications/submit"
              },
              {
                "type": "doc",
                "id": "alerts-notifications/other"
              }
            ]
          },
          {
            "type": "doc",
            "id": "alerts-notifications/notif-configuration"
          },
        ]
      },
      {
        "type": "category",
        "label": "Performance graphs",
        "items": [
          {
            "type": "doc",
            "id": "metrology/chart-management"
          },
          {
            "type": "doc",
            "id": "metrology/chart-template"
          },
          {
            "type": "doc",
            "id": "metrology/chart-curves"
          },
          {
            "type": "doc",
            "id": "metrology/chart-virtual-metrics"
          },
        ]
      },
      {
        "type": "category",
        "label": "Service Mapping",
        "items": [
          {
            "type": "doc",
            "id": "service-mapping/introduction"
          },
          {
            "type": "category",
            "label": "Guide",
            "items": [
              {
                "type": "doc",
                "id": "service-mapping/ba-management"
              },
              {
                "type": "doc",
                "id": "service-mapping/ba-monitoring"
              },
              {
                "type": "doc",
                "id": "service-mapping/ba-reporting"
              },
              {
                "type": "doc",
                "id": "service-mapping/ba-settings"
              },
              {
                "type": "doc",
                "id": "service-mapping/widgets"
              }
            ]
          }
        ]
      },
      {
        "type": "category",
        "label": "Graphical views",
        "items": [
        {
          "type": "doc",
          "id": "graph-views/introduction-map"
        }, 
        {                    
            "type": "category",
          "label": "Guide",
          "items": [
              {
              "type": "doc",
              "id": "graph-views/map-web-access"
              },
                              {
                    "type": "doc",
                    "id": "graph-views/map-web-manage"
                  },
                  {
                  "type": "doc",
                  "id": "graph-views/map-web-create-standard-map"
                },
                {
                  "type": "doc",
                  "id": "graph-views/map-web-create-geoview"
                },
                {
                  "type": "doc",
                  "id": "graph-views/map-web-known-issues"
                  }            
                ]
              }
            ]
                            },
      {
        "type": "link",
        "href": "/pp/integrations/plugin-packs/getting-started/introduction",
        "label": "Monitoring Connectors"
      },

      {
        "type": "category",
        "label": "Integrations",
        "items": [
          {
            "type": "doc",
            "id": "integrations/introduction-integrations"
          },
          {
            "type": "category",
            "label": "ITSM",
            "items": [
              {
                "type": "doc",
                "id": "integrations/itsm/itsm-overview"
              },
              {
                "type": "doc",
                "id": "integrations/itsm/ot-bmc-footprints"
              },
              {
                "type": "doc",
                "id": "integrations/itsm/ot-bmc-remedy"
              },
              {
                "type": "doc",
                "id": "integrations/itsm/ot-easyvista"
              },
              {
                "type": "doc",
                "id": "integrations/itsm/ot-glpi"
              },
              {
                "type": "doc",
                "id": "integrations/itsm/ot-glpi-restapi"
              },
              {
                "type": "doc",
                "id": "integrations/itsm/ot-itop"
              },
              {
                "type": "doc",
                "id": "integrations/itsm/ot-iws-isilog"
              },
              {
                "type": "doc",
                "id": "integrations/itsm/ot-jira"
              },
              {
                "type": "doc",
                "id": "integrations/itsm/ot-mail"
              },
              {
                "type": "doc",
                "id": "integrations/itsm/ot-otrs-restapi"
              },
              {
                "type": "doc",
                "id": "integrations/itsm/ot-request-tracker-restapi"
              },
              {
                "type": "doc",
                "id": "integrations/itsm/ot-serena"
              },
              {
                "type": "doc",
                "id": "integrations/itsm/ot-servicenow"
              }
            ]
          },
        ]
      },
      {
        "type": "category",
        "label": "Security",
        "items": [
          {
            "type": "doc",
            "id": "security/security"
          }
        ]
      },
      {
        "type": "category",
        "label": "Resources",
        "items": [
          {
            "type": "doc",
            "id": "resources/glossary"
          }
        ]
      }
    ]
  }
