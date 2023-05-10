// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const versions = require('./versions.json');
const version = process.env.VERSION ? process.env.VERSION : null;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  customFields: {
    version: version ?? null,
  },

  title: 'Centreon Documentation',
  tagline: '',
  url: 'https://docs.centreon.com',
  baseUrl: version ? `${version}/` : '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Centreon',
  projectName: 'Centreon Documentation',
  trailingSlash: true,

  noIndex: false,

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
          breadcrumbs: false,
          admonitions: {},
          editUrl: 'https://github.com/centreon/centreon-documentation/edit/staging/',
          editLocalizedFiles: true,
          showLastUpdateTime: true,
          includeCurrentVersion: false,
          onlyIncludeVersions: (() => {
            if (version) {
              return [version];
            }
            return versions;
          })(),
          versions: {
            23.04: {
              label: '⭐ 23.04',
              banner:'none',
            },
            '22.10': {
              label: '22.10',
              banner:'none',
            },
            22.04: {
              label: '22.04',
              banner:'none',
            },
            '21.10': {
              label: '21.10',
              banner:'none',
            },
            21.04: {
              label: '21.04',
              banner:'unmaintained',
            },
            '20.10': {
              label: '20.10',
              banner:'unmaintained',
            },
            20.04: {
              label: '20.04',
              banner:'unmaintained',
            },
          },
        },
        blog: false,
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

  themes: [],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
        // Use false to debug, but it incurs huge perf costs
        disableInDev: true,
      },
    ],
    'plugin-image-zoom',
	  [
      '@docusaurus/plugin-content-docs',
      {
        id: 'cloud',
        path: 'cloud',
        routeBasePath: 'cloud',
        sidebarPath: require.resolve('./cloud/sidebarsCloud.js'),
        breadcrumbs: false,
        editUrl: 'https://github.com/centreon/centreon-documentation/edit/staging/',
        editLocalizedFiles: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'pp',
        path: 'pp',
        routeBasePath: 'pp',
        sidebarPath: require.resolve('./pp/sidebarsPp.js'),
        breadcrumbs: false,
        editUrl: 'https://github.com/centreon/centreon-documentation/edit/staging/',
        editLocalizedFiles: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '3WEC6XPLDB',
        apiKey: 'be499306058f3e54012bab278e6e6d86',
        indexName: 'centreon',
        contextualSearch: true,
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

      colorMode: {
        defaultMode: 'light',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },

      docs: {
        sidebar: {
          hideable: true,
        },
      },

      navbar: {
        hideOnScroll: false,
        title: '',
        logo: {
          alt: 'Logo Centreon Docs',
          src: 'img/logo_centreon_dark.png',
          srcDark: 'img/logo_centreon.png',
          href: '/',
        },
        items: (() => {
          if (version) {
            return [
              {
                type: 'localeDropdown',
                position: 'right',
              },
            ];
          }
          return [
            {
              type: 'doc',
              docId: 'getting-started/welcome',
              position: 'left',
              label: 'Centreon OnPrem',
            },
            {
              to: '/cloud/getting-started/architecture',
              label: 'Centreon Cloud',
              position: 'left',
              activeBaseRegex: '/cloud/',
            },
            {
              to: '/pp/integrations/plugin-packs/getting-started/introduction',
              label: 'Monitoring Connectors',
              position: 'left',
              activeBaseRegex: '/pp/',
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
                  to: 'https://docs-older.centreon.com',
                  label: 'Older',
                },
              ],
            },
            {
              type: 'localeDropdown',
              position: 'right',
            },
          ];
        })(),
      },

      footer: {
        links: [
          {
            items: [
              {
                label: 'Corporate Website',
                href: 'https://www.centreon.com/en/',
              },
            ],
          },
          {
            items: [
              {
                label: 'Blog',
                href: 'https://www.centreon.com/en/blog/',
              },
            ],
          },
          {
            items: [
              {
                label: 'Download',
                href: 'https://download.centreon.com/',
              },
            ],
          },
        ],
        logo: {
          alt: 'Centreon Open Source Logo',
          src: 'img/logo_centreon.png',
        },
        copyright: `Copyright © 2005 - 2023 Centreon`,
      },
    }),
  webpack: {
    jsLoader: (isServer) => ({
      loader: require.resolve('swc-loader'),
      options: {
        jsc: {
          "parser": {
            "syntax": "typescript",
            "tsx": true
          },
          target: 'es2017',
        },
        module: {
          type: isServer ? 'commonjs' : 'es6',
        }
      },
    }),
  },
};

module.exports = config;
