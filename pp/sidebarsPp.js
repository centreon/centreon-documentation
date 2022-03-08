/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  pp: [
    {
      type: 'doc',
      id: 'integrations/plugin-packs/introduction'
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: [
        {
          type: 'doc',
          id: 'integrations/plugin-packs/tutorials/centreon-nsclient-tutorial'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/tutorials/collect-openmetrics'
        },
        {
          type: 'doc',
          id: 'integrations/plugin-packs/tutorials/troubleshooting-plugins'
        }
      ]
    },
    {
      type: 'category',
      label: 'Applications',
      items: [
        {
          type: 'doc',
          id: 'integrations/plugin-packs/procedures/applications-activemq-jmx',
        },
       
      ],
    },
  ],
};