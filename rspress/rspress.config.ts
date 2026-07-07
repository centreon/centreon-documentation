import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from '@rspress/core';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
import { pluginImageCompress } from '@rsbuild/plugin-image-compress';
import { sidebar } from './src/sidebar';

const __dirname = dirname(fileURLToPath(import.meta.url));

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
  // SSG disabled: rspress v2 beta SSG doesn't support relative image paths (../assets/...)
  // from MDX files. Dev mode works fine. To re-enable, images must be moved to public/
  // or served via absolute URLs.
  ssg: false,
  markdown: {
    link: {
      checkDeadLinks: false,
    },
    image: {
      // Skip dead-image verification on preview builds for speed; keep it on for
      // staging/production to catch broken image references before deploy.
      checkDeadImages: process.env.PREVIEW_BUILD !== 'true',
    },
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
    sidebar,
    enableScrollToTop: true,
    footer: {
      message:
        '<a href="https://www.centreon.com/en/" target="_blank" rel="noreferrer">Corporate Website</a> · <a href="https://www.centreon.com/en/blog/" target="_blank" rel="noreferrer">Blog</a> · <a href="https://download.centreon.com/" target="_blank" rel="noreferrer">Download</a><br/>Copyright © 2005 - 2026 Centreon',
    },
    locales: [
      {
        lang: 'en',
        label: 'English',
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
