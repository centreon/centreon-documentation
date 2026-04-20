import { themes as prismThemes } from 'prism-react-renderer';

import availableVersions from './versions.json';
import archivedVersions from './archivedVersions.json';

const archivedVersion = process.env.ARCHIVED_VERSION ?? null;

const versions = (() => {
  if (archivedVersion) {
    return [archivedVersion];
  }
  if (process.env.VERSIONS !== undefined) {
    const splittedVersions = process.env.VERSIONS.split(',').filter(v => v.trim());
    if (!splittedVersions.length) {
      return availableVersions.slice(0, 1);
    }
    return splittedVersions;
  }
  return availableVersions;
})();

const isFeatureEnabled = (envVar) => {
  if (archivedVersion) return false;
  return process.env[envVar] !== '0';
};

const pp = isFeatureEnabled('PP');
const cloud = isFeatureEnabled('CLOUD');
const cxm = isFeatureEnabled('CXM');
const logmanagement = isFeatureEnabled('LOGMANAGEMENT');

const baseUrl = process.env.BASE_URL ? process.env.BASE_URL : (archivedVersion ? `${archivedVersion}/` : '/');

if (versions.length == 0 && !pp && !cloud && !cxm && !logmanagement) {
  throw new Error('Nothing is selected for build');
}

const buildDocPlugin = (id, sidebarFile) => [
  '@docusaurus/plugin-content-docs',
  {
    id,
    path: id,
    routeBasePath: id,
    sidebarPath: `./${id}/${sidebarFile}`,
    breadcrumbs: true,
    editUrl: 'https://github.com/centreon/centreon-documentation/edit/staging/',
    editLocalizedFiles: true,
    showLastUpdateTime: true,
  },
];

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
      rspackPersistentCache: true,
      ssgWorkerThreads: false,
      mdxCrossCompilerCache: false,
      gitEagerVcs: true,
    },
    experimental_vcs: 'git-eager',
  },

  title: 'Centreon Documentation',
  url: 'https://docs.centreon.com',
  baseUrl,
  onBrokenLinks: archivedVersion || !cloud || !pp || !cxm ? 'log' : 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: archivedVersion || !cloud || !pp || !cxm ? 'log' : 'throw',
    }
  },
  onBrokenAnchors: archivedVersion || !cloud || !pp || !cxm ? 'log' : 'throw',
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
                  banner: currentValue === '23.10' ? 'unmaintained' : 'none'
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
        docsRouteBasePath: ["docs", "cloud", "pp", "cxm", "logmanagement"],
        docsDir: ["i18n", "versioned_docs", "cloud", "pp", "cxm", "logmanagement"],
        explicitSearchResultPath: true,
        useAllContextsWithNoSearchContext: true,
        language: ["en", "fr"],
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: true,
      },
    ],
    'docusaurus-plugin-image-zoom',
    ...(cloud ? [buildDocPlugin('cloud', 'sidebarsCloud.js')] : []),
    ...(pp ? [buildDocPlugin('pp', 'sidebarsPp.js')] : []),
    ...(cxm ? [buildDocPlugin('cxm', 'sidebarsCxm.js')] : []),
    ...(logmanagement ? [buildDocPlugin('logmanagement', 'sidebarsLogmanagement.js')] : []),
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      zoom: {
        selector: '.markdown img',
        background: {
          light: 'rgb(255, 255, 255)',
          dark: 'rgb(0, 0, 61)'
        },
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

          const defaultPageId = [...versions].sort().reverse()[0].match(/(21\.10|22\.04)/)
            ? 'getting-started/installation-first-steps'
            : 'getting-started/welcome';

          const leftItems = [
            {
              type: 'doc',
              docId: defaultPageId,
              position: 'left',
              label: 'Infra Monitoring OnPrem'
            },
            ...(cloud ? [{
              to: '/cloud/getting-started/welcome',
              label: 'Infra Monitoring Cloud',
              position: 'left',
              activeBaseRegex: '/cloud/',
            }] : []),
            ...(pp ? [{
              to: '/pp/integrations/plugin-packs/getting-started/introduction',
              label: 'Monitoring Connectors',
              position: 'left',
              activeBaseRegex: '/pp/',
            }] : []),
            ...(cxm ? [{
              to: '/cxm/getting-started/welcome',
              label: 'Centreon Experience Monitoring',
              position: 'left',
              activeBaseRegex: '/cxm/',
            }] : []),
            ...(logmanagement ? [{
              to: '/logmanagement/getting-started/welcome',
              label: 'Centreon Log Management BETA',
              position: 'left',
              activeBaseRegex: '/logmanagement/',
            }] : []),
          ];

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
            ...leftItems,
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
