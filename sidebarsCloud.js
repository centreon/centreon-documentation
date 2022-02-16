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
          id: 'getting-started/cloud-architecture',
        },
        {
          type: 'doc',
          id: 'getting-started/cloud-interface',
        },
        {
          type: 'category',
          label: 'Installing a poller',
          items: [
            {
              type: 'doc',
              id: 'cloud-prerequisites',
            },
            {
              type: 'doc',
              id: 'installation/cloud-deploy-poller',
            },
          ],
        },
        {
          type: 'doc',
          id: 'getting-started/cloud-concepts',
        },
        {
          type: 'doc',
          id: 'getting-started/cloud-pp',
        },
        {
          type: 'doc',
          id: 'getting-started/cloud-monitoring',
        },
        {
          type: 'doc',
          id: 'getting-started/cloud-create-custom-view',
        },
      ],
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
                          type: 'doc',
                          id: "alerts-notifications/event-console"
                        },
                        {
                          type: "doc",
                          id: "alerts-notifications/event-log"
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
                        {
                          type: "doc",
                          id: "alerts-notifications/notif-flapping"
                        },
                        {
                          type: "doc",
                          id: "alerts-notifications/notif-advanced"
                        }
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
          id: 'users/cloud-users',
        },
        {
          type:'doc',
          id: 'users/cloud-contacts-create',
        },
      ],
    },
    {
      type: 'link',
      label: 'En savoir plus',
      href: 'https://example.com',
    },
  ],
};