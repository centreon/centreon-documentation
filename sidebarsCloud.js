/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  cloud: [
    {
      type: 'category',
      label: 'Getting started',
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
          type: 'doc',
          id: 'getting-started/concepts',
        },
        {
          type: 'doc',
          id: 'monitoring/pluginpacks',
        },
        {
          type: 'doc',
          id: 'monitoring/monitoring-servers/deploying-a-configuration',
        },
        {
          type: 'doc',
          id: 'getting-started/monitoring',
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            {
              type: 'doc',
              id: 'getting-started/tutorials/monitor-linux-server-with-snmp',
            },
            {
              type: 'doc',
              id: 'getting-started/tutorials/monitor-windows-server-with-snmp',
            },
            {
              type: 'doc',
              id: 'getting-started/tutorials/monitor-cisco-router-with-snmp',
            },
            {
              type: 'doc',
              id: 'getting-started/tutorials/monitor-mysql-server',
            },
            {
              type: 'doc',
              id: 'getting-started/tutorials/autodisco-aws',
            },
            {
              type: 'doc',
              id: 'getting-started/create-custom-view',
            },
          ],
        },
      ],
    },


    {
      type: 'category',
      label: 'Monitoring resources',
      items: [
        {
          type: 'category',
          label: 'Monitoring hosts',
          items: [
            {
              type: 'doc',
              id: 'monitoring/basic-objects/hosts-create'
            },
            {
              type: 'doc',
              id: 'monitoring/basic-objects/hosts'
            },
            {
              type: 'doc',
              id: 'monitoring/basic-objects/hosts-create-disco'
            },
            {
              type: 'doc',
              id: 'monitoring/basic-objects/hosts-templates'
            }
          ]
        },
        {
          type: 'category',
          label: 'Monitoring services',
          items: [
            {
              type: 'doc',
              id: 'monitoring/basic-objects/services-create'
            },
            {
              type: 'doc',
              id: 'monitoring/basic-objects/services'
            },
            {
              type: 'doc',
              id: 'monitoring/basic-objects/services-create-disco'
            },
            {
              type: 'doc',
              id: 'monitoring/basic-objects/services-templates'
            },
            {
              type: 'doc',
              id: 'monitoring/basic-objects/meta-services'
            }
          ]
        },
        {
          type: 'category',
          label: 'Discovering hosts and services automatically',
          items: [
            {
              type: 'doc',
              id: 'monitoring/discovery/introduction'
            },
            {
              type: 'doc',
              id: 'monitoring/discovery/installation'
            },
            {
              type: 'doc',
              id: 'monitoring/discovery/hosts-discovery'
            },
            {
              type: 'doc',
              id: 'monitoring/discovery/services-discovery'
            },
          ]
        },
        {
          type: 'category',
          label: 'Organizing hosts, services and contacts',
          items: [
            {
              type: 'doc',
              id: 'monitoring/groups'
            },
            {
              type: 'doc',
              id: 'monitoring/categories'
            }
          ]
        },
        {
          type: 'category',
          label: 'Basic objects and actions',
          items: [
            {
              type: 'doc',
              id: 'monitoring/basic-objects/timeperiods'
            },
            {
              type: 'doc',
              id: 'monitoring/basic-objects/macros'
            },
            {
              type: 'doc',
              id: 'monitoring/basic-objects/commands'
            },
            {
              type: 'doc',
              id: 'monitoring/generic-actions'
            }
          ]
        },
        {
          type: 'category',
          label: 'Passive Monitoring',
          items: [
            {
              type: 'doc',
              id: 'monitoring/passive-monitoring/enable-snmp-traps'
            },
            {
              type: 'doc',
              id: 'monitoring/passive-monitoring/create-snmp-traps-definitions'
            },
            {
              type: 'doc',
              id: 'monitoring/passive-monitoring/monitoring-with-snmp-traps'
            },
            {
              type: 'doc',
              id: 'monitoring/passive-monitoring/debug-snmp-traps-management'
            },
          ]
        },
      ]
    },




    {
      type: 'category',
      label: 'Managing events and alerts',
      items: [
        
                {
                  type: "category",
                  label: "Viewing events",
                  items: [
                        {
                          type: 'doc',
                          id: 'alerts-notifications/concepts'
                        },
                        {
                          type: 'doc',
                          id: 'alerts-notifications/resources-status'
                        },
                        {
                          type: "doc",
                          id: "alerts-notifications/custom-views"
                        }
                      ],
                    },
                    {
                      type: "category",
                      label: "Managing alerts",
                      items: [
                        {
                          type: "doc",
                          id: "alerts-notifications/acknowledge"
                        },
                        {
                          type: "doc",
                          id: "alerts-notifications/downtimes"
                        },
                        {
                          type: "doc",
                          id: "alerts-notifications/submit"
                        },
                        {
                          type: "doc",
                          id: "alerts-notifications/other"
                        }
                      ]
                    },
                    {
                      type: "category",
                      label: "Managing notifications",
                      items: [
                        {
                          type: "doc",
                          id: "alerts-notifications/notif-concept"
                        },
                        {
                          type: "doc",
                          id: "alerts-notifications/notif-configuration"
                        },
                        {
                          type: "doc",
                          id: "alerts-notifications/notif-dependencies"
                        },
                        {
                          type: "doc",
                          id: "alerts-notifications/notif-escalation"
                        },
                      ]
                    },
      ],
    },
    {
      type: 'category',
      label: 'Managing users',
      items: [
        {
          type: 'doc',
          id: 'users/users',
        },
        {
          type:'doc',
          id: 'users/contacts-create',
        },
      ],
    },



  ],
};