// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const isDev = process.env.NODE_ENV === 'development';
const baseUrl = process.env.BASE_URL || '/';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Centreon',
  tagline: 'Documentation',
  url: 'https://docs-dev.centreon.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  // organizationName: 'Centreon Documentation', // Usually your GitHub org/user name.
  projectName: 'Centreon Documentation', // Usually your repo name.

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
  },

  favicon: 'img/logo-centreon.png',

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/centreon/centreon-documentation/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        // Si Algolia ne vous a pas fourni d'appId, utilisez 'BH4D9OD16A'.
        //appId: 'BH4D9OD16A',
        apiKey: '1d458ferf5524803d788544azs86d',
        indexName: 'devcentreon',
      },
      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },
      navbar: {
        hideOnScroll: false,
        title: 'Centreon Docs',
        logo: {
          alt: 'Logo Centreon Docs',
          src: 'img/logo-centreon.png',
          href: '/',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting-started/first-steps',
            position: 'right',
            label: 'Documentation',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
            dropdownItemsAfter: [
              {
                to: 'https://docs.centreon.com/older/',
                label: 'Older',
              },
            ],
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          /*{to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/facebook/docusaurus',
            label: 'GitHub',
            position: 'right',
          },*/
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/first-steps',
              },
              {
                label: 'API References',
                to: '/docs/api/introduction',
              },
              {
                label: 'Releases',
                to: '/docs/releases/introduction',
              },
            ],
          },
          {
            title: 'Ressources',
            items: [
              {
                label: 'Corporate Website',
                href: 'https://www.centreon.com/en/',
              },
              {
                label: 'Blog',
                href: 'https://www.centreon.com/en/blog/',
              },
              {
                label: 'Download',
                href: 'https://download.centreon.com/',
              },
            ],
          },
          {
            title: 'Follow us',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/centreon/centreon',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Centreon',
              },
            ],
          },
        ],
        logo: {
          alt: 'Centreon Open Source Logo',
          src: 'https://docs.centreon.com/current/en/img/logo-centreon.png',
          href: 'https://centreon.com',
        },
        copyright: `Copyright © ${new Date().getFullYear()} Centreon`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;