import React from 'react';
import SectionHome from '@site/src/components/SectionHome';

const content = {
  en: {
    kicker: 'Documentation',
    title: 'Centreon Experience Monitoring',
    tagline:
      'Measure the digital experience of your users end to end: real user monitoring, synthetic user journeys and business data.',
    search: 'Search Experience Monitoring',
    stats: [
      {value: 'RUM', label: 'real users'},
      {value: 'STM', label: 'synthetic journeys'},
      {value: 'Web Vitals', label: 'LCP · CLS · TBT'},
    ],
    quickStartTitle: 'Quick start',
    quickStartHint: 'most common tasks',
    guide: 'Guide',
    quickStart: [
      {icon: 'activity', title: 'Set up RUM', meta: 'Guide', to: '/experience-monitoring/installation/real-user-monitoring-installation'},
      {icon: 'route', title: 'Create a user journey', meta: 'Guide', to: '/experience-monitoring/configuration/user-journey/create-a-scenario'},
      {icon: 'lock', title: 'Monitor non-public journeys', meta: 'STM zones', to: '/experience-monitoring/configuration/user-journey/stm-zones'},
    ],
    resourcesTitle: 'Resources',
    resourcesHint: 'references & updates',
    resources: [
      {icon: 'file', title: 'Release notes', to: '/experience-monitoring/release-notes'},
      {icon: 'check', title: 'Installation checklist', to: '/experience-monitoring/installation/installation-checklist'},
      {icon: 'gear', title: 'Troubleshooting', to: '/experience-monitoring/troubleshooting'},
      {icon: 'book', title: 'Glossary', to: '/experience-monitoring/experience-monitoring-glossary'},
    ],
  },
  fr: {
    kicker: 'Documentation',
    title: 'Centreon Experience Monitoring',
    tagline:
      'Mesurez de bout en bout l’expérience numérique de vos utilisateurs : utilisateurs réels, parcours synthétiques et données métier.',
    search: 'Rechercher dans Experience Monitoring',
    stats: [
      {value: 'RUM', label: 'utilisateurs réels'},
      {value: 'STM', label: 'parcours synthétiques'},
      {value: 'Web Vitals', label: 'LCP · CLS · TBT'},
    ],
    quickStartTitle: 'Démarrer rapidement',
    quickStartHint: 'les tâches les plus fréquentes',
    guide: 'Guide',
    quickStart: [
      {icon: 'activity', title: 'Mettre en place le RUM', meta: 'Guide', to: '/experience-monitoring/installation/real-user-monitoring-installation'},
      {icon: 'route', title: 'Créer un parcours utilisateur', meta: 'Guide', to: '/experience-monitoring/configuration/user-journey/create-a-scenario'},
      {icon: 'lock', title: 'Superviser des parcours non publics', meta: 'Zones STM', to: '/experience-monitoring/configuration/user-journey/stm-zones'},
    ],
    resourcesTitle: 'Ressources',
    resourcesHint: 'références & mises à jour',
    resources: [
      {icon: 'file', title: 'Notes de version', to: '/experience-monitoring/release-notes'},
      {icon: 'check', title: 'Checklist d’installation', to: '/experience-monitoring/installation/installation-checklist'},
      {icon: 'gear', title: 'Dépannage', to: '/experience-monitoring/troubleshooting'},
      {icon: 'book', title: 'Glossaire', to: '/experience-monitoring/experience-monitoring-glossary'},
    ],
  },
};

export default function ExperienceMonitoringHome() {
  return <SectionHome content={content} searchContext="experience-monitoring" />;
}
