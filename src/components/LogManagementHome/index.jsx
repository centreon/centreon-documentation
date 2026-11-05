import React from 'react';
import SectionHome from '@site/src/components/SectionHome';

const content = {
  en: {
    kicker: 'Documentation',
    title: 'Centreon Log Management',
    tagline: 'Simple, smart and controlled log monitoring.',
    search: 'Search Log Management',
    stats: [
      {value: 'OTel', label: 'OpenTelemetry'},
      {value: 'real-time', label: 'ingestion'},
    ],
    quickStartTitle: 'Quick start',
    quickStartHint: 'most common tasks',
    guide: 'Guide',
    quickStart: [
      {icon: 'upload', title: 'Send your first logs', minutes: 7, to: '/logmanagement/collector/collector-generator'},
      {icon: 'search', title: 'Open the Log explorer', minutes: 4, to: '/logmanagement/log-explorer'},
      {icon: 'bell', title: 'Create a log alert', minutes: 6, to: '/logmanagement/alert-events'},
    ],
    resourcesTitle: 'Resources',
    resourcesHint: 'references & updates',
    resources: [
      // TODO: no release notes page exists yet in logmanagement/.
      {icon: 'file', title: 'Release notes', to: null},
      {icon: 'code', title: 'REST API', to: '/logmanagement/api'},
      // TODO: no compatibility/prerequisites page exists yet in logmanagement/.
      {icon: 'gear', title: 'Compatibility & prerequisites', to: null},
      {icon: 'book', title: 'Glossary', to: '/logmanagement/resources/glossary'},
    ],
  },
  fr: {
    kicker: 'Documentation',
    title: 'Centreon Log Management',
    tagline: 'Une supervision des logs simple, intelligente et maîtrisée.',
    search: 'Rechercher dans Log Management',
    stats: [
      {value: 'OTel', label: 'OpenTelemetry'},
      {value: 'temps réel', label: 'ingestion'},
    ],
    quickStartTitle: 'Démarrer rapidement',
    quickStartHint: 'les tâches les plus fréquentes',
    guide: 'Guide',
    quickStart: [
      {icon: 'upload', title: 'Envoyer vos premiers logs', minutes: 7, to: '/logmanagement/collector/collector-generator'},
      {icon: 'search', title: 'Ouvrir le Log explorer', minutes: 4, to: '/logmanagement/log-explorer'},
      {icon: 'bell', title: 'Créer une alerte sur logs', minutes: 6, to: '/logmanagement/alert-events'},
    ],
    resourcesTitle: 'Ressources',
    resourcesHint: 'références & mises à jour',
    resources: [
      {icon: 'file', title: 'Notes de version', to: null},
      {icon: 'code', title: 'API REST', to: '/logmanagement/api'},
      {icon: 'gear', title: 'Compatibilité & prérequis', to: null},
      {icon: 'book', title: 'Glossaire', to: '/logmanagement/resources/glossary'},
    ],
  },
};

export default function LogManagementHome() {
  return <SectionHome content={content} />;
}
