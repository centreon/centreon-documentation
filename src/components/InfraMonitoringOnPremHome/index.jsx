import React from 'react';
import {useActiveVersion} from '@docusaurus/plugin-content-docs/client';
import SectionHome from '@site/src/components/SectionHome';

// Links are relative to the OnPrem version being viewed (e.g. /docs/26.10/...),
// so this component can be reused on the home page of every version.
const content = {
  en: {
    kicker: 'Documentation',
    title: 'Centreon Infra Monitoring OnPrem',
    tagline:
      'Self-hosted monitoring: full control over your platform, your data and your deployment.',
    search: 'Search IM OnPrem',
    stats: [
      {value: '700+', label: 'connectors'},
      {value: 'API', label: 'REST & tokens'},
    ],
    callout: {
      icon: 'cloud',
      text: 'Prefer a fully managed platform?',
      linkLabel: 'See Cloud',
      to: '/cloud/infra-monitoring-cloud',
    },
    quickStartTitle: 'Quick start',
    quickStartHint: 'most common tasks',
    guide: 'Guide',
    quickStart: [
      {icon: 'upload', title: 'Install the central server', minutes: 12, path: 'installation/installation-of-a-central-server/using-packages'},
      {icon: 'server', title: 'Add a host', minutes: 5, path: 'monitoring/basic-objects/hosts-create'},
      {icon: 'bell', title: 'Create an alert', minutes: 6, path: 'alerts-notifications/notif-configuration'},
    ],
    resourcesTitle: 'Resources',
    resourcesHint: 'references & updates',
    resources: [
      {icon: 'file', title: 'Release notes', path: 'releases/introduction'},
      {icon: 'code', title: 'REST API', path: 'api/introduction'},
      {icon: 'gear', title: 'Compatibility & prerequisites', path: 'installation/compatibility'},
      {icon: 'book', title: 'Glossary', path: 'resources/glossary'},
    ],
  },
  fr: {
    kicker: 'Documentation',
    title: 'Centreon Infra Monitoring OnPrem',
    tagline:
      'Supervision auto-hébergée : maîtrise totale de votre plateforme, de vos données et de votre déploiement.',
    search: 'Rechercher dans IM OnPrem',
    stats: [
      {value: '700+', label: 'connecteurs'},
      {value: 'API', label: 'REST & tokens'},
    ],
    callout: {
      icon: 'cloud',
      text: 'Vous préférez une plateforme entièrement gérée ?',
      linkLabel: 'Voir Cloud',
      to: '/cloud/infra-monitoring-cloud',
    },
    quickStartTitle: 'Démarrer rapidement',
    quickStartHint: 'les tâches les plus fréquentes',
    guide: 'Guide',
    quickStart: [
      {icon: 'upload', title: 'Installer le serveur central', minutes: 12, path: 'installation/installation-of-a-central-server/using-packages'},
      {icon: 'server', title: 'Ajouter un hôte', minutes: 5, path: 'monitoring/basic-objects/hosts-create'},
      {icon: 'bell', title: 'Créer une alerte', minutes: 6, path: 'alerts-notifications/notif-configuration'},
    ],
    resourcesTitle: 'Ressources',
    resourcesHint: 'références & mises à jour',
    resources: [
      {icon: 'file', title: 'Notes de version', path: 'releases/introduction'},
      {icon: 'code', title: 'API REST', path: 'api/introduction'},
      {icon: 'gear', title: 'Compatibilité & prérequis', path: 'installation/compatibility'},
      {icon: 'book', title: 'Glossaire', path: 'resources/glossary'},
    ],
  },
};

function withVersion(t, version) {
  const base = version?.path ?? '/docs';
  const resolve = (item) => (item.path ? {...item, to: `${base}/${item.path}`} : item);
  return {
    ...t,
    title: version ? `${t.title} ${version.name}` : t.title,
    quickStart: t.quickStart.map(resolve),
    resources: t.resources.map(resolve),
  };
}

export default function InfraMonitoringOnPremHome() {
  const version = useActiveVersion();
  const versioned = Object.fromEntries(
    Object.entries(content).map(([locale, t]) => [locale, withVersion(t, version)]),
  );
  return <SectionHome content={versioned} />;
}
