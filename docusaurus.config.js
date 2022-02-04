// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  title: 'Centreon Documentation',
  tagline: '',
  url: 'https://docs-prod.centreon.com',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/logo-centreon.png',
  organizationName: 'Centreon',
  projectName: 'Centreon Documentation',

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
          admonitions: {},
          editUrl: 'https://github.com/centreon/centreon-documentation/edit/staging/',
          editLocalizedFiles: true,
          showLastUpdateTime: true,
          includeCurrentVersion: false,
          onlyIncludeVersions: ['21.10','21.04', '20.10', '20.04'],
          versions: {
            '21.10': {
              label: '⭐ 21.10',
            },
            21.04: {
              label: ' 21.04',
            },
            '20.10': {
              label: '20.10',
            },
            20.04: {
              label: '20.04',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleAnalytics: {
          trackingID: 'UA-8418698-13',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  scripts: [
    {
      src: '/js/fix-location.js',
      async: false,
      defer: false,
    },
  ],
  
  themes: [],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
        redirects: [
          {
            from: ['/current/fr/', '/current/en/'],
            to: '/',
          },
        ],
        createRedirects(existingPath) {
          if (existingPath.includes('/docs')) {
            return [
              existingPath.replace('/docs', '/current/en'),
              existingPath.replace('/docs', '/21.10/en'),
              existingPath.replace('/docs/21.04', '/21.04/en'),
              existingPath.replace('/docs/20.10', '/20.10/en'),
              existingPath.replace('/docs/20.04', '/20.04/en'),
            ];
          }
          return undefined;
        },
      },
    ],
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
    'plugin-image-zoom',
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: 'BH4D9OD16A',
        apiKey: '2c8912e81dc56e382c3964f26634e056',
        indexName: 'centreon',
        contextualSearch: true,
      },

      announcementBar: {
        id: 'announcementBar-1',
        content:
          'The search feature is not available at the moment. Thank you for your patience and understanding.',
        backgroundColor: '#ebedf0',
        textColor: '#091E42',
        isCloseable: false,
      },

      zoomSelector: '.markdown :not(.authority-availability) > img',

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'shell',
        additionalLanguages: [
          'java',
          'json',
          'cpp',
          'php',
          'python',
          'ruby',
          'bash',
          'perl',
          'powershell',
        ],
      },

      hideableSidebar: true,
      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      navbar: {
        hideOnScroll: true,
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
    }),
};

module.exports = config;
