import { defineConfig } from 'rspress/config';
import type { SidebarGroup } from '@rspress/shared';

const GETTING_STARTED_EN: SidebarGroup['items'] = [
  { text: 'Welcome',                        link: 'getting-started/welcome' },
  { text: 'Which installation?',            link: 'getting-started/which-install' },
  { text: 'Platform overview',              link: 'getting-started/platform' },
  { text: 'Key concepts',                   link: 'getting-started/concepts' },
  { text: 'Discovering the interface',      link: 'getting-started/interface' },
  { text: 'First supervision',              link: 'getting-started/first-supervision' },
  { text: 'Actions on resources',           link: 'getting-started/actions' },
  { text: 'Analyze availability',           link: 'getting-started/analyze-resources-availability' },
  { text: 'Tutorials',                      link: 'getting-started/introduction-tutorials' },
  { text: 'IT-100 free license',            link: 'getting-started/it100' },
  { text: 'Autodiscovery AWS',              link: 'getting-started/autodisco-aws' },
  { text: 'Monitor Linux (SNMP)',           link: 'getting-started/monitor-linux-server-with-snmp' },
  { text: 'Monitor Windows (SNMP)',         link: 'getting-started/monitor-windows-server-with-snmp' },
  { text: 'Monitor Cisco (SNMP)',           link: 'getting-started/monitor-cisco-router-with-snmp' },
  { text: 'Monitor Printer (SNMP)',         link: 'getting-started/monitor-printer-with-snmp' },
  { text: 'Monitor UPS (SNMP)',             link: 'getting-started/monitor-ups-with-snmp' },
  { text: 'Monitor MySQL',                  link: 'getting-started/mysql_tuto' },
  { text: 'Model IT services',              link: 'getting-started/model-it-services' },
  { text: 'Create a dashboard',             link: 'getting-started/create-dashboard' },
  { text: 'Create a custom view',           link: 'getting-started/create-custom-view' },
  { text: 'Create a graphical view',        link: 'getting-started/create-graphical-view' },
];

const GETTING_STARTED_FR: SidebarGroup['items'] = [
  { text: 'Bienvenue',                        link: 'getting-started/welcome' },
  { text: 'Quelle installation ?',            link: 'getting-started/which-install' },
  { text: 'Présentation de la plateforme',    link: 'getting-started/platform' },
  { text: 'Concepts clés',                    link: 'getting-started/concepts' },
  { text: "Découvrir l'interface",            link: 'getting-started/interface' },
  { text: 'Première supervision',             link: 'getting-started/first-supervision' },
  { text: 'Actions sur les ressources',       link: 'getting-started/actions' },
  { text: 'Analyser la disponibilité',        link: 'getting-started/analyze-resources-availability' },
  { text: 'Tutoriels',                        link: 'getting-started/introduction-tutorials' },
  { text: 'Licence gratuite IT-100',          link: 'getting-started/it100' },
  { text: 'Autodécouverte AWS',              link: 'getting-started/autodisco-aws' },
  { text: 'Superviser Linux (SNMP)',          link: 'getting-started/monitor-linux-server-with-snmp' },
  { text: 'Superviser Windows (SNMP)',        link: 'getting-started/monitor-windows-server-with-snmp' },
  { text: 'Superviser Cisco (SNMP)',          link: 'getting-started/monitor-cisco-router-with-snmp' },
  { text: 'Superviser une imprimante (SNMP)', link: 'getting-started/monitor-printer-with-snmp' },
  { text: 'Superviser un onduleur (SNMP)',    link: 'getting-started/monitor-ups-with-snmp' },
  { text: 'Superviser MySQL',                 link: 'getting-started/mysql_tuto' },
  { text: 'Modéliser les services IT',       link: 'getting-started/model-it-services' },
  { text: 'Créer un tableau de bord',        link: 'getting-started/create-dashboard' },
  { text: 'Créer une vue personnalisée',     link: 'getting-started/create-custom-view' },
  { text: 'Créer une vue graphique',         link: 'getting-started/create-graphical-view' },
];

function prefixLinks(items: SidebarGroup['items'], prefix: string): SidebarGroup['items'] {
  return items.map(item => ({
    ...item,
    link: `${prefix}/${(item as { link: string }).link}`,
  }));
}

function gettingStartedGroup(label: string, items: SidebarGroup['items'], prefix: string): SidebarGroup {
  return {
    text: label,
    collapsible: true,
    collapsed: false,
    items: prefixLinks(items, prefix),
  };
}

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
    sidebar: {
      '/26.10/':    [gettingStartedGroup('Getting Started', GETTING_STARTED_EN, '/26.10')],
      '/25.10/':    [gettingStartedGroup('Getting Started', GETTING_STARTED_EN, '/25.10')],
      '/fr/26.10/': [gettingStartedGroup('Démarrer',        GETTING_STARTED_FR, '/fr/26.10')],
      '/fr/25.10/': [gettingStartedGroup('Démarrer',        GETTING_STARTED_FR, '/fr/25.10')],
    },
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
