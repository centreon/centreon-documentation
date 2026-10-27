import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from '@rspress/core';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';
import { pluginLastUpdatedFromSource } from './src/plugins/lastUpdatedFromSource';
import { rehypeLazyImages } from './src/plugins/rehypeLazyImages';
import { pluginSlimPageData } from './src/plugins/slimPageData';
import { sidebar } from './src/sidebar';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Keep in sync with DOWNLOAD_EXTENSIONS in migrate.py.
const DOWNLOAD_LINK = /\.(sql|pdf|cnf)$/;

// Each locale only ships its own sections: rspress copies the sidebar into
// every locale and keeps themeConfig.sidebar too, all in the main bundle.
const localeSidebar = (lang: 'en' | 'fr') =>
  Object.fromEntries(Object.entries(sidebar).filter(([path]) => path.startsWith('/fr/') === (lang === 'fr')));

// Links already broken in the Docusaurus sources (or Docusaurus-only features).
// Fix them there, re-run migrate.py, then drop them from this list.
const KNOWN_DEAD_LINKS = [
  // Page does not exist.
  '/pp/integrations/plugin-packs/getting-started/how-to-guides/additional-connector-configuration',
  // Docusaurus generated category index pages, no source file.
  '/docs/cma',
  '/cloud/cma',
  // English-only page, Docusaurus falls back to it from French.
  '/docs/releases/centreon-os',
];

export default defineConfig({
  root: 'docs',
  lang: 'en',
  title: 'Centreon Documentation',
  description: 'Centreon IT Monitoring Platform Documentation',
  // Centreon branding: logo (light/dark) + favicon, matching docs.centreon.com.
  // `light` is shown on a light background (dark-colored logo), `dark` on a dark
  // background (light-colored logo) — same mapping as the Docusaurus navbar.
  logo: {
    light: '/img/logo_centreon_dark.png',
    dark: '/img/logo_centreon.png',
  },
  logoText: '',
  icon: '/img/favicon.ico',
  // Global Centreon stylesheet (brand colors, fonts, component tweaks).
  globalStyles: join(__dirname, 'styles/index.css'),
  locales: [
    {
      lang: 'en',
      label: 'English',
      title: 'Centreon Documentation',
      description: 'Centreon IT Monitoring Platform Documentation',
    },
    {
      lang: 'fr',
      label: 'Français',
      title: 'Documentation Centreon',
      description: "Documentation de la plateforme de supervision Centreon",
    },
  ],
  multiVersion: {
    default: '26.10',
    versions: ['26.10', '25.10'],
  },
  siteOrigin: 'https://docs.centreon.com',
  // Built-in image zoom; its overlay uses --rp-c-bg (white / Centreon navy), like Docusaurus.
  mediumZoom: { options: { margin: 24 } },
  plugins: [
    pluginLastUpdatedFromSource(join(__dirname, 'docs'), join(__dirname, '..')),
    pluginSlimPageData(),
  ],
  // Pre-render ~6,000 pages (en/fr x 2 versions) in worker threads (one per
  // CPU, ~15 GB peak with 2 CPUs). PR previews stay client-rendered: SSG does
  // not fit in the 16 GB GitHub-hosted runner.
  ssg: process.env.PREVIEW_BUILD === 'true' ? false : { experimentalWorker: true },
  route: {
    // Extension-less URLs, like docs.centreon.com.
    cleanUrls: true,
  },
  markdown: {
    link: {
      // Downloadable files are served from docs/public/ (see migrate.py), not as routes.
      checkDeadLinks: {
        excludes: (url) => DOWNLOAD_LINK.test(url) || KNOWN_DEAD_LINKS.includes(url),
      },
      // No anchor check: rspress misses headings nested in JSX (Tabs), which
      // would report false positives across the docs.
    },
    image: {
      // Skip dead-image verification on preview builds for speed; keep it on for
      // staging/production to catch broken image references before deploy.
      checkDeadImages: process.env.PREVIEW_BUILD !== 'true',
    },
    rehypePlugins: [rehypeLazyImages],
    // The docs are English/French only (no CJK), so skip CJK emphasis handling.
    cjkFriendlyEmphasis: false,
    // Code highlighting themes matching the Docusaurus site (Prism github / dracula).
    shiki: {
      themes: {
        light: 'github-light',
        dark: 'dracula',
      },
    },
  },
  search: {
    versioned: true,
    // Filters results to the version being read (see theme/searchHooks.ts).
    searchHooks: join(__dirname, 'theme/searchHooks.ts'),
    // Full-text search (including code blocks) for staging/production. On PR
    // preview builds we drop code blocks so each per-language search index stays
    // under Cloudflare Pages' 25 MiB per-file limit; the preview workflow sets
    // PREVIEW_BUILD=true.
    codeBlocks: process.env.PREVIEW_BUILD !== 'true',
  },
  // Opt-in Rsdoctor analysis: run `RSDOCTOR=true pnpm build` to instrument the
  // build and open the interactive report at the end. Off by default because it
  // adds ~10-20% build time overhead.
  builderConfig: {
    // Compress raster images (PNG/JPEG/ICO) at build time. Images are served
    // as-is (gzip can't shrink them), so this directly reduces the deployed
    // bundle and per-page image transfer. GIF/SVG are left untouched.
    plugins: [pluginImageCompress(['jpeg', 'png', 'ico'])],
    output: {
      // No separate *.LICENSE.txt files in the docs output.
      legalComments: 'none',
      // Minify with a single compress pass (rspack's default is 2 since #8853).
      // Recovers a chunk of minification time — the dominant build cost — for a
      // negligible size increase (the gzipped transfer is already near-optimal).
      minify: {
        jsOptions: {
          minimizerOptions: {
            compress: { passes: 1 },
          },
        },
      },
    },
    // Split long-lived vendor code into stable chunks so the browser keeps them
    // cached across deployments (index.js changes on every docs update, vendors
    // rarely do). Merges with rspress's own `styles` cacheGroup (deep-merged).
    splitChunks: {
      cacheGroups: {
        react: {
          name: 'lib-react',
          test: /[\\/]node_modules[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/,
          chunks: 'all',
          priority: 50,
        },
        vendor: {
          name: 'lib-vendor',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: 10,
        },
      },
    },
    performance: {
      // Skip the per-asset gzip-size computation at the end of the build
      // (costly across thousands of files, no functional impact).
      printFileSize: {
        compressed: false,
      },
    },
    tools: {
      rspack: (_config, { appendPlugins }) => {
        if (process.env.RSDOCTOR) {
          appendPlugins([new RsdoctorRspackPlugin({})]);
        }
      },
    },
  },
  themeConfig: {
    enableScrollToTop: true,
    lastUpdated: true,
    locales: [
      {
        lang: 'en',
        label: 'English',
        sidebar: localeSidebar('en'),
        // Nav items are rendered by the custom VersionAwareNav component in theme/index.tsx
        // so that "Infra Monitoring OnPrem" adapts to the current version.
        nav: [],
        outlineTitle: 'On this page',
        prevPageText: 'Previous',
        nextPageText: 'Next',
        editLink: {
          docRepoBaseUrl: 'https://github.com/centreon/centreon-documentation/edit/main/rspress/docs',
          text: 'Edit this page on GitHub',
        },
      },
      {
        lang: 'fr',
        label: 'Français',
        sidebar: localeSidebar('fr'),
        nav: [],
        outlineTitle: 'Sur cette page',
        prevPageText: 'Précédent',
        nextPageText: 'Suivant',
        editLink: {
          docRepoBaseUrl: 'https://github.com/centreon/centreon-documentation/edit/main/rspress/docs',
          text: 'Modifier cette page sur GitHub',
        },
      },
    ],
  },
});
