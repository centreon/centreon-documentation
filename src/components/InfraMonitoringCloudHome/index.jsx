import React from 'react';
import SectionHome from '@site/src/components/SectionHome';

const content = {
  en: {
    kicker: 'Documentation',
    title: 'Centreon Infra Monitoring Cloud',
    tagline:
      'Cloud-hosted monitoring: no infrastructure to maintain, automatic updates, elastic scaling.',
    search: 'Search IM Cloud',
    stats: [
      {value: 'SaaS', label: 'fully managed'},
      {value: '99.9%', label: 'availability SLA'},
    ],
    callout: {
      icon: 'server',
      text: 'Prefer to host the platform yourself?',
      linkLabel: 'See OnPrem',
      to: '/docs/infra-monitoring-onprem',
    },
    quickStartTitle: 'Quick start',
    quickStartHint: 'most common tasks',
    guide: 'Guide',
    quickStart: [
      {icon: 'upload', title: 'Connect a cloud agent', minutes: 6, to: '/cloud/cma/cma-setup'},
      {icon: 'server', title: 'Add a host', minutes: 5, to: '/cloud/monitoring/basic-objects/hosts-create'},
      {icon: 'bell', title: 'Create an alert', minutes: 6, to: '/cloud/alerts-notifications/notif-configuration'},
    ],
    resourcesTitle: 'Resources',
    resourcesHint: 'references & updates',
    resources: [
      {icon: 'file', title: 'Release notes', to: '/cloud/releases/cloud-release-notes'},
      {icon: 'code', title: 'REST API', to: '/cloud/administration/api-tokens'},
      {icon: 'gear', title: 'Compatibility & prerequisites', to: '/cloud/installation/prerequisites'},
      {icon: 'book', title: 'Glossary', to: '/cloud/resources/glossary'},
    ],
  },
  fr: {
    kicker: 'Documentation',
    title: 'Centreon Infra Monitoring Cloud',
    tagline:
      'Supervision hébergée dans le cloud : aucune infrastructure à maintenir, mises à jour automatiques, montée en charge élastique.',
    search: 'Rechercher dans IM Cloud',
    stats: [
      {value: 'SaaS', label: 'entièrement géré'},
      {value: '99,9 %', label: 'SLA disponibilité'},
    ],
    callout: {
      icon: 'server',
      text: 'Vous préférez héberger la plateforme vous-même ?',
      linkLabel: 'Voir OnPrem',
      to: '/docs/infra-monitoring-onprem',
    },
    quickStartTitle: 'Démarrer rapidement',
    quickStartHint: 'les tâches les plus fréquentes',
    guide: 'Guide',
    quickStart: [
      {icon: 'upload', title: 'Connecter un agent cloud', minutes: 6, to: '/cloud/cma/cma-setup'},
      {icon: 'server', title: 'Ajouter un hôte', minutes: 5, to: '/cloud/monitoring/basic-objects/hosts-create'},
      {icon: 'bell', title: 'Créer une alerte', minutes: 6, to: '/cloud/alerts-notifications/notif-configuration'},
    ],
    resourcesTitle: 'Ressources',
    resourcesHint: 'références & mises à jour',
    resources: [
      {icon: 'file', title: 'Notes de version', to: '/cloud/releases/cloud-release-notes'},
      {icon: 'code', title: 'API REST', to: '/cloud/administration/api-tokens'},
      {icon: 'gear', title: 'Compatibilité & prérequis', to: '/cloud/installation/prerequisites'},
      {icon: 'book', title: 'Glossaire', to: '/cloud/resources/glossary'},
    ],
  },
};

export default function InfraMonitoringCloudHome() {
  return <SectionHome content={content} />;
}
