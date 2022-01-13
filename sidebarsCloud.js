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
          id: 'cloud-supervision',
        },
      ],
    },
    {
      type: 'category',
      label: 'Installation',
      items: [
        {
          type: 'doc',
          id: 'cloud-prerequisites',
        },
        {
          type: 'doc',
          id: 'cloud-deploy-poller',
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