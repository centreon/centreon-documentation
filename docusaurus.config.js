// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

const availableVersions = require('./versions.json');
const archivedVersions = require('./archivedVersions.json');

const archivedVersion = process.env.ARCHIVED_VERSION ?? null;

const versions = (() => {
  if (process.env.VERSIONS !== undefined) {
    return process.env.VERSIONS.split(',');
  }
  if (archivedVersion) {
    return [archivedVersion];
  }
  return availableVersions;
})();

if (archivedVersion && versions) {
  throw new Error('ARCHIVED_VERSION and VERSIONS environment variables cannot be used together');
}

const pp = (() => {
  if (archivedVersion) {
    return false;
  }
  if (process.env.PP !== undefined && process.env.PP === '0') {
    return false;
  }
  return true;
})();

const cloud = (() => {
  if (archivedVersion) {
    return false;
  }
  if (process.env.CLOUD !== undefined && process.env.CLOUD === '0') {
    return false;
  }
  return true;
})();

const baseUrl = process.env.BASE_URL ? process.env.BASE_URL : (archivedVersion ? `${archivedVersion}/` : '/');

if (versions.length == 0 && !pp && !cloud) {
  throw new Error('Nothing is selected for build');
}

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  customFields: {
    version: archivedVersion ?? null,
  },

  title: 'Centreon Documentation',
  tagline: '',
  url: 'https://docs.centreon.com',
  baseUrl,
  onBrokenLinks: archivedVersion || !cloud || !pp ? 'log' : 'throw',
  onBrokenMarkdownLinks: archivedVersion || !cloud || !pp  ? 'log' : 'throw',
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
          onlyIncludeVersions: versions,
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
          },
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-BGL69N5GPJ',
          anonymizeIP: true,
        },
        googleAnalytics: {
          trackingID: 'UA-8418698-13',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  themes: [],

  plugins: (() => {
    let plugins = [
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
    ];

    if (archivedVersion) {
      plugins = [
        ...plugins,
        [
          require.resolve("@cmfcmf/docusaurus-search-local"),
          {
            indexBlog: false,
            language: ["en", "fr"],
          },
        ],
      ];
    }

    if (cloud) {
      plugins = [
        ...plugins,
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
      ];
    }

    if (pp) {
      plugins = [
        ...plugins,
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
      ];
    }

    return plugins;
  })(),

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: archivedVersion
        ? undefined
        : {
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
          if (archivedVersion) {
            return [
              {
                type: 'html',
                position: 'left',
                value: `<h2 style="margin:0">Centreon OnPrem ${archivedVersion}</h2>`,
              },
              {
                type: 'localeDropdown',
                position: 'right',
              },
            ];
          }

          let items = [];

          if (versions) {
            items = [
              ...items,
              {
                type: 'doc',
                docId: 'getting-started/welcome',
                position: 'left',
                label: 'Centreon OnPrem',
              },
            ];
          }

          if (cloud) {
            items = [
              ...items,
              {
                to: '/cloud/getting-started/architecture',
                label: 'Centreon Cloud',
                position: 'left',
                activeBaseRegex: '/cloud/',
              },
            ];
          }

          if (pp) {
            items = [
              ...items,
              {
                to: '/pp/integrations/plugin-packs/getting-started/introduction',
                label: 'Monitoring Connectors',
                position: 'left',
                activeBaseRegex: '/pp/',
              },
            ];
          }

          return [
            ...items,
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
                  type: 'html',
                  value: '<hr class="dropdown-separator">',
                },
                {
                  type: 'html',
                  className: 'dropdown-archived-versions',
                  value: (() => {
                    switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
                      case "fr": return "<b>Versions archivées</b>";
                      default: return "<b>Archived versions</b>";
                    }
                  })(),
                },
                ...Object.entries(archivedVersions).map(
                  ([versionName, versionUrl]) => ({
                    label: versionName,
                    href: versionUrl,
                  }),
                ),
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
  }
};

module.exports = config;
