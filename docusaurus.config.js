// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Documentation Centreon',
  tagline: '',
  url: 'https://docs-dev.centreon.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-centreon.png',
  // organizationName: 'Centreon Documentation', // Usually your GitHub org/user name.
  projectName: 'Centreon Documentation', // Usually your repo name.

  noIndex: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: '🇬🇧 English'
      },
      fr: {
        label: '🇫🇷 Français'
      },
    }
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          admonitions: {},
          // Please change this to your repo.
          editUrl: 'https://github.com/centreon/centreon-documentation/edit/v2-docusaurus/',
          showLastUpdateTime: true,
          onlyIncludeVersions: ['21.04', '20.10', '20.04'],
          versions: {
            '21.04': {
              label: '⭐️ 21.04',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
    'plugin-image-zoom'
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        //appId: 'BH4D9OD16A',
        apiKey: '2c8912e81dc56e382c3964f26634e056',
        indexName: 'centreon',
        contextualSearch: true,
        algoliaOptions: {
          'facetFilters': ["tags:dev"]
        },
      },

      googleAnalytics: {
        trackingID: 'UA-8418698-13',
        anonymizeIP: true,
      },

      liveCodeBlock: {
        playgroundPosition: 'bottom',
      },

      zoomSelector: '.markdown img',
      hideableSidebar: true,
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
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
            docId: 'getting-started/installation-first-steps',
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
          {href: '', label: 'GitHub', position: 'right'},*/
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
                to: '/docs/getting-started/installation-first-steps',
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
            title: 'Resources',
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
          src: 'img/logo-centreon.png',
        },
        copyright: `Copyright © 2005 - ${new Date().getFullYear()} Centreon`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;