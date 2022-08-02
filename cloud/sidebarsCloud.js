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
    {
      "type": "category",
      "label": "Security",
      "items": [
        {
          "type": "doc",
          "id": "security/security"
        },
      ]
    },
  ],
};