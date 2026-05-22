import { defineConfig } from 'rspress/config';
import { sidebar } from './src/sidebar';

export default defineConfig({
  root: 'docs',
  lang: 'en',
  title: 'Centreon Documentation',
  description: 'Centreon IT Monitoring Platform Documentation',
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
  search: {
    versioned: true,
  },
  themeConfig: {
    sidebar,
    enableScrollToTop: true,
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
