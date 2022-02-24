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
          id: 'users/users',
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
        {
          type: "doc",
          id: "alerts-notifications/notif-configuration"
        },
        {
          type: 'doc',
          id: 'monitoring/pluginpacks',
        },
        {
          type: 'doc',
          id: 'monitoring/monitoring-servers/deploying-a-configuration',
        },
      ],
    },
  ],
};