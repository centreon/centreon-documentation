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
  themeConfig: {
    sidebar,
    locales: [
      {
        lang: 'en',
        label: 'English',
        nav: [
          { text: 'Getting Started', link: '/26.10/getting-started/welcome' },
        ],
        outlineTitle: 'On this page',
        prevPageText: 'Previous',
        nextPageText: 'Next',
      },
      {
        lang: 'fr',
        label: 'Français',
        nav: [
          { text: 'Démarrer', link: '/fr/26.10/getting-started/welcome' },
        ],
        outlineTitle: 'Sur cette page',
        prevPageText: 'Précédent',
        nextPageText: 'Suivant',
      },
    ],
  },
});
