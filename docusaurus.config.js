// @ts-nocheck
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer');
const lightCodeTheme = themes.github;
const darkCodeTheme = themes.dracula;

const availableVersions = require('./versions.json');
const archivedVersions = require('./archivedVersions.json');

const archivedVersion = process.env.ARCHIVED_VERSION ?? null;

const versions = (() => {
  if (archivedVersion) {
    return [archivedVersion];
  }
  if (process.env.VERSIONS !== undefined) {
    const splittedVersions = process.env.VERSIONS.split(',');
    if (process.env.VERSIONS.trim() === '' || splittedVersions.length === 0) {
      return availableVersions.slice(0,1);
    }
    return splittedVersions;
  }
  return availableVersions;
})();

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

  future: {
    experimental_faster: true,
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
          breadcrumbs: true,
          admonitions: {},
          editUrl: 'https://github.com/centreon/centreon-documentation/edit/staging/',
          editLocalizedFiles: true,
          showLastUpdateTime: true,
          includeCurrentVersion: false,
          onlyIncludeVersions: versions,
          versions: (() => {
            if (archivedVersion) {
              return {
                [archivedVersion]: {
                  label: archivedVersion,
                  banner:'unmaintained',
                }
              }
            }

            return versions.reduce(
              (accumulator, currentValue) => {
                accumulator[currentValue] = {
                  label: Object.keys(accumulator).length === 0 ? `⭐ ${currentValue}` : currentValue,
                  banner: currentValue === '22.10' ? 'unmaintained' : 'none',
                }

                return accumulator;
              },
              {}
            );
          })(),
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
      'docusaurus-plugin-image-zoom',
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
            breadcrumbs: true,
            editUrl: 'https://github.com/centreon/centreon-documentation/edit/staging/',
            editLocalizedFiles: true,
            showLastUpdateTime: true,
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
            breadcrumbs: true,
            editUrl: 'https://github.com/centreon/centreon-documentation/edit/staging/',
            editLocalizedFiles: true,
            showLastUpdateTime: true,
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

      zoom: {
        selector: '.markdown > img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(50, 50, 50)'
        },
        config: {}
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        defaultLanguage: 'shell',
        additionalLanguages: [
          'diff',
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

          const defaultPageId = versions.sort().reverse()[0].match(/(21\.10|22\.04)/)
            ? 'getting-started/installation-first-steps'
            : 'getting-started/welcome';

          items = [
            ...items,
            {
              type: 'doc',
              docId: defaultPageId,
              position: 'left',
              label: 'Centreon OnPrem',
            },
          ];

          if (cloud) {
            items = [
              ...items,
              {
                to: '/cloud/getting-started/welcome',
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
        copyright: `Copyright © 2005 - 2024 Centreon`,
      },
    }),
};

module.exports = config;
