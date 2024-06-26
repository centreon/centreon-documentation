module.exports = {
  cloud: [
    {
      type: 'category',
      label: 'Getting started with Centreon Cloud',
      link: {
        type: "doc",
        id: "getting-started/welcome"
      },
      items: [

        {
          "collapsed": true,
          "type": "category",
          "label": "Discover Centreon Cloud",
          "link": {
            "type": "generated-index",
          },
          items: [
            {
              type: 'doc',
              id: 'getting-started/architecture',
            },
            {
              type: 'doc',
              id: 'getting-started/interface',
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
          "label": "Set up your platform",
          "link": {
            "type": "generated-index",
          },
          items: [
            {
              type: 'doc',
              id: 'getting-started/platform',
            },
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
          "label": "Prepare the monitoring",
          "link": {
            "type": "generated-index",
          },
          items: [
            {
              type: 'doc',
              id: 'getting-started/monitoring',
            },
            {
              type: 'category',
              label: 'Tutorials',
              link: {
                type: 'doc',
                id: "getting-started/tutorials",
              },

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
          "label": "Monitor and visualize",
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
              id: 'getting-started/create-custom-view',
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
      "type": 'category',
      "label": 'Managing Centreon Cloud users',
      "link": {
        "type": "generated-index",
      },
      items: [
        {
          type: 'doc',
          id: 'ciam/ciam',
        },
        {
          type: 'doc',
          id: 'users/users',
        },
        {
          type: 'doc',
          id: 'administration/ram',
        },
      ],
    },
    {
      type: 'category',
      label: 'Managing pollers',
      "link": {
        "type": "generated-index",
      },
      items: [
        {
          type: 'doc',
          id: 'installation/prerequisites',
        },
        {
          type: 'doc',
          id: 'installation/deploy-poller',
        },
        {
          type: 'doc',
          id: 'installation/poller-update-upgrade',
        },
        {
          type: 'doc',
          id: 'installation/poller-secure',
        },
      ],
    },
    {
      "type": "category",
      "label": "Monitoring resources",
      "link": {
        "type": "generated-index",
      },
      "items": [
        {
          "type": "category",
          "label": "Monitoring basics",
          "link": {
            "type": "generated-index",
          },
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
          "link": {
            "type": "generated-index",
          },
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
          "link": {
            "type": "generated-index",
          },
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
          "link": {
            "type": "generated-index",
          },
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
          "link": {
            "type": "generated-index",
          },
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
          "link": {
            "type": "generated-index",
          },
          "items": [
            {
              "type": "doc",
              "id": "monitoring/basic-objects/commands"
            },
            {
              "type": "doc",
              "id": "monitoring/basic-objects/timeperiods"
            },
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
        {
          "type": "category",
          "label": "Detecting anomalies",
          "link": {
            "type": "generated-index",
          },
          "items": [
            {
              "type": "doc",
              "id": "monitoring/anomaly-detection"
            }
          ]
        },
      ]
    },
    {
      "type": "category",
      "label": "Managing events and alerts",
      "link": {
        "type": "generated-index",
      },
      "items": [
        {
          "type": "category",
          "label": "Viewing events",
          "link": {
            "type": "generated-index",
          },
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
            },
            {
              "type": "doc",
              "id": "alerts-notifications/dashboards"
            }
          ]
        },
        {
          "type": "category",
          "label": "Managing alerts",
          "link": {
            "type": "generated-index",
          },
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
      "link": {
        "type": "generated-index",
      },
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
      "link": {
        "type": "generated-index",
      },
      "items": [
        {
          "type": "doc",
          "id": "service-mapping/introduction"
        },
        {
          "type": "category",
          "label": "Guide",
          "link": {
            "type": "generated-index",
          },
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
      "link": {
        "type": "generated-index",
      },
      "items": [
        {
          "type": "doc",
          "id": "graph-views/introduction-map"
        },
        {
          "type": "category",
          "label": "Guide",
          "link": {
            "type": "generated-index",
          },
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
      "type": "category",
      "label": "Administration",
      "link": {
        "type": "generated-index",
      },
      "items": [
        {
          "type": "doc",
          "id": "administration/media"
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
      "link": {
        "type": "generated-index",
      },
      "items": [
        {
          "type": "doc",
          "id": "integrations/stream-connectors-cloud"
        }
      ]
    },
    {
      "type": "category",
      "label": "Security",
      "link": {
        "type": "generated-index",
      },
      "items": [
        {
          "type": "doc",
          "id": "security/security"
        }
      ]
    },
    {
      "type": "category",
      "label": "Release notes",
      "link": {
        "type": "generated-index",
      },
      "items": [
        {
          "type": "doc",
          "id": "releases/cloud-release-notes"
        }
      ]
    },
    {
      "type": "category",
      "label": "Resources",
      "link": {
        "type": "generated-index",
      },
      "items": [
        {
          "type": "doc",
          "id": "resources/known-issues"
        },
        {
          "type": "doc",
          "id": "resources/glossary"
        }
      ]
    }
  ]
}
