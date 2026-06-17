import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from '@rspress/core';
import { RsdoctorRspackPlugin } from '@rsdoctor/rspack-plugin';
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
  },
  search: {
    versioned: true,
  },
  // Opt-in Rsdoctor analysis: run `RSDOCTOR=true pnpm build` to instrument the
  // build and open the interactive report at the end. Off by default because it
  // adds ~10-20% build time overhead.
  builderConfig: {
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
