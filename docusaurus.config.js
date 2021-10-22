// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Centreon',
  tagline: 'Documentation',
  url: 'https://docs-dev.centreon.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  trailingSlash: false,
  favicon: 'img/logo-centreon.png',
  // organizationName: 'Centreon Documentation', // Usually your GitHub org/user name.
  projectName: 'Centreon Documentation', // Usually your repo name.

  noIndex: true,

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    localeConfigs: {
      en: {
        label: '🇬🇧 English',
      },
      fr: {
        label: '🇫🇷 Français',
      },
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  plugins: [
    'plugin-image-zoom',
    [
      '@docusaurus/plugin-client-redirects',
      {
        toExtensions: ['html'],
      },
    ],
  ],
  

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
      zoomSelector: '.markdown img',
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
            items: [
              {
                html: `
                <a href="https://centreon.com/en/" target="_blank" rel="noreferrer noopener" title="Go to Centreon Corporate Website">
                  <img src="/img/logo-centreon.png" alt="Centreon Open Source Logo" />
                </a>
              `,
              },
            ],
          },
          {
            title: 'Documentation',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started/first-steps',
              },
              {
                label: 'API References',
                to: '#',
              },
              {
                label: 'Releases',
                to: '#',
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
        /*logo: {
          alt: 'Centreon Open Source Logo',
          src: 'img/logo-centreon.png',
          href: 'https://centreon.com/en/',
        },*/
        copyright: `Copyright © ${new Date().getFullYear()} Centreon`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;