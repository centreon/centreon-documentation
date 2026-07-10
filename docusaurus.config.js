import { themes as prismThemes } from 'prism-react-renderer';

import availableVersions from './versions.json';
import archivedVersions from './archivedVersions.json';

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

const experienceMonitoring = (() => {
  if (archivedVersion) {
    return false;
  }
  if (process.env.EXPERIENCEMONITORING !== undefined && process.env.EXPERIENCEMONITORING === '0') {
    return false;
  }
  return true;
})();

const logmanagement = (() => {
  if (archivedVersion) {
    return false;
  }
  if (process.env.LOGMANAGEMENT !== undefined && process.env.LOGMANAGEMENT === '0') {
    return false;
  }
  return true;
})();

const baseUrl = process.env.BASE_URL ? process.env.BASE_URL : (archivedVersion ? `${archivedVersion}/` : '/');

if (versions.length == 0 && !pp && !cloud && !experienceMonitoring && !logmanagement) {
  throw new Error('Nothing is selected for build');
}

/** @type {import('@docusaurus/types').DocusaurusConfig} */
const config = {
  customFields: {
    version: archivedVersion ?? null,
  },

  future: {
    v4: {
      removeLegacyPostBuildHeadAttribute: true,
      useCssCascadeLayers: true,
    },
    faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      rspackPersistentCache: false,
      ssgWorkerThreads: false,
      mdxCrossCompilerCache: false,
    },
  },

  title: 'Centreon Documentation',
  tagline: '',
  url: 'https://docs.centreon.com',
  baseUrl,
  onBrokenLinks: archivedVersion || !cloud || !pp || !experienceMonitoring ? 'log' : 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: archivedVersion || !cloud || !pp || !experienceMonitoring ? 'log' : 'throw',
    }
  },
  onBrokenAnchors: archivedVersion || !cloud || !pp || !experienceMonitoring ? 'log' : 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'Centreon',
  projectName: 'Centreon Documentation',
  trailingSlash: true,

  headTags: [
  {
    tagName: 'script',
    attributes: { type: 'text/javascript' },
    innerHTML:
      `!function(){if(!window.QTABMR||!window.QTABMR.version&&!window.QTABMR.snippetExecuted){window.QTABMR=window.QTABMR||{};window.QTABMR.snippetStart=(new Date).getTime();window.QTABMR.snippetExecuted=!0;window.QTABMR.snippetVersion=12;QTABMR_URL="https://appstatic.quanta.io/rum/10876/quanta-rum-v2.0.0.min.js";window.QTABMR_BEACON_URL="https://rum-metrics.quanta.io/33aa5a76a5d0b04ecc3606fa62b00d1d765f3fcec233401911/beacon.gif";window.QTABMR.jserr=0;window.addEventListener("error",function(){window.QTABMR.jserr++},!1);var s=document.currentScript||document.getElementsByTagName("script")[0],c=!1,e=document.createElement("link");if(e.relList&&"function"==typeof e.relList.supports&&e.relList.supports("preload")&&"as"in e){window.QTABMR.snippetMethod="p";e.href=QTABMR_URL;e.rel="preload";e.as="script";e.addEventListener("load",function o(){if(!c){var e=document.createElement("script");e.id="boomr-scr-as";e.src=QTABMR_URL;e.async=!0;s.parentNode.appendChild(e);c=!0}});e.addEventListener("error",function(){t(!0)});setTimeout(function(){c||t(!0)},3e3);QTABMR_lstart=(new Date).getTime();s.parentNode.appendChild(e)}else t(!1);window.addEventListener?window.addEventListener("load",n,!1):window.attachEvent&&window.attachEvent("onload",n)}function t(e){c=!0;var t,n,o,i,d=document,a=window;window.QTABMR.snippetMethod=e?"if":"i";n=function(e,t){var n=d.createElement("script");n.id=t||"boomr-if-as";n.src=QTABMR_URL;QTABMR_lstart=(new Date).getTime();(e=e||d.body).appendChild(n)};if(!window.addEventListener&&window.attachEvent&&navigator.userAgent.match(/MSIE [67]\./)){window.QTABMR.snippetMethod="s";n(s.parentNode,"boomr-async")}else{(o=document.createElement("IFRAME")).src="about:blank";o.title="";o.role="presentation";o.loading="eager";(i=(o.frameElement||o).style).width=0;i.height=0;i.border=0;i.display="none";s.parentNode.appendChild(o);try{a=o.contentWindow;d=a.document.open()}catch(r){t=document.domain;o.src="javascript:var d=document.open();d.domain='"+t+"';void 0;";a=o.contentWindow;d=a.document.open()}if(t){d._boomrl=function(){this.domain=t;n()};d.write("")}else{a._boomrl=function(){n()};a.addEventListener?a.addEventListener("load",a._boomrl,!1):a.attachEvent&&a.attachEvent("onload",a._boomrl)}d.close()}}function n(e){window.QTABMR_onload=e&&e.timeStamp||(new Date).getTime()}}();`
  },
],

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
                  banner: currentValue === '24.04' ? 'unmaintained' : 'none'
                }

                return accumulator;
              },
              {}
            );
          })(),
        },
        blog: false,
        theme: {
          customCss: ['./src/css/custom.css'],
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

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        hashed: true,
        indexBlog: false,
        docsRouteBasePath: ["docs", "cloud", "pp", "experience-monitoring", "logmanagement"],
        docsDir: ["i18n", "versioned_docs", "cloud", "pp", "experience-monitoring", "logmanagement"],
        explicitSearchResultPath: true,
        useAllContextsWithNoSearchContext: true,
        // searchContextByPaths: [
        //   {
        //     label: {
        //       en: "monitoring connectors",
        //       fr: "connecteurs de supervision",
        //     },
        //     path: "pp"
        //   },
        //   {
        //     label: "cloud",
        //     path: "cloud",
        //   },
        //   // {
        //   //   label: "onPrem",
        //   //   path: "i18n",
        //   // },
        //   // {
        //   //   label: "onPrem",
        //   //   path: "versioned_docs",
        //   // },
        // ],
        language: ["en", "fr"],
      }),
    ],
  ],

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

    if (cloud) {
      plugins = [
        ...plugins,
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'cloud',
            path: 'cloud',
            routeBasePath: 'cloud',
            sidebarPath: './cloud/sidebarsCloud.js',
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
            sidebarPath: './pp/sidebarsPp.js',
            breadcrumbs: true,
            editUrl: 'https://github.com/centreon/centreon-documentation/edit/staging/',
            editLocalizedFiles: true,
            showLastUpdateTime: true,
          },
        ],
      ];
    }

    if (experienceMonitoring) {
      plugins = [
        ...plugins,
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'experience-monitoring',
            path: 'experience-monitoring',
            routeBasePath: 'experience-monitoring',
            sidebarPath: './experience-monitoring/sidebarsExperienceMonitoring.js',
            breadcrumbs: true,
            editUrl: 'https://github.com/centreon/centreon-documentation/edit/staging/',
            editLocalizedFiles: true,
            showLastUpdateTime: true,
          },
        ],
      ];
    }

    if (logmanagement) {
      plugins = [
        ...plugins,
        [
          '@docusaurus/plugin-content-docs',
          {
            id: 'logmanagement',
            path: 'logmanagement',
            routeBasePath: 'logmanagement',
            sidebarPath: './logmanagement/sidebarsLogmanagement.js',
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
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(0, 0, 61)'
        },
        config: {}
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
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
              label: 'Infra Monitoring OnPrem'
            },
          ];

          if (cloud) {
            items = [
              ...items,
              {
                to: '/cloud/getting-started/welcome',
                label: 'Infra Monitoring Cloud',
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

          if (experienceMonitoring) {
            items = [
              ...items,
              {
                to: '/experience-monitoring/getting-started/welcome',
                label: 'Centreon Experience Monitoring',
                position: 'left',
                activeBaseRegex: '/experience-monitoring/',
              },
            ];
          }

          if (logmanagement) {
            items = [
              ...items,
              {
                to: '/logmanagement/getting-started/welcome',
                label: 'Centreon Log Management',
                position: 'left',
                activeBaseRegex: '/logmanagement/',
              },
            ];
          }


          return [
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
            ...items,
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
        copyright: `Copyright © 2005 - 2026 Centreon`,
      },
    }),
};

export default config;

