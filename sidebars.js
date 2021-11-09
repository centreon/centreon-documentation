/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

 module.exports = {
  docs: [
    {
      "collapsed": true,
      "type": "category",
      "label": "Getting Started",
      "items": items: [
        'installation-first-steps',
        'which-install',
        'IT100',
        'interface',
        'first-supervision',
        'autodisco-aws',
        'create-custom-view',
        'create-graphical-view',
        'model-it-services',
        'analyze-resources-availability'
      ],
    },
    {
      "type": "category",
      "label": "Installation",
      "items": [
        'introduction',
        'prerequisites',
        'architectures',
        'download',
        {
          "type": "category",
          "label": "Installation of a Central server",
          "items": [
            'using-centreon-iso',
            'using-packages',
            'using-virtual-machines',
            'using-sources'
          ]
        }
      ]
    }
  ],
};
