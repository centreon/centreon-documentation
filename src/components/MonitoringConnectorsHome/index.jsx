import React from 'react';
import SectionHome from '@site/src/components/SectionHome';

const content = {
  en: {
    kicker: 'Documentation',
    title: 'Monitoring Connectors',
    tagline:
      'More than 700 ready-to-use connectors to monitor any technology: network, cloud, database, application.',
    search: 'Search for a connector',
    stats: [
      {value: '700+', label: 'connectors'},
      {value: '50+', label: 'categories'},
      {value: '25.10', label: 'latest version'},
    ],
    quickStartTitle: 'Quick start',
    quickStartHint: 'most common tasks',
    guide: 'Guide',
    quickStart: [
      {icon: 'grid', title: 'Browse the catalog', meta: 'Reference', to: '/pp/integrations/plugin-packs/getting-started/introduction'},
      {icon: 'server', title: 'Install a connector', minutes: 5, to: '/docs/monitoring/pluginpacks'},
      {icon: 'cloud', title: 'Cloud connectors', minutes: 7, to: '/pp/category/cloud'},
    ],
    resourcesTitle: 'Resources',
    resourcesHint: 'references & updates',
    resources: [
      {icon: 'file', title: 'Release notes', to: '/pp/integrations/plugin-packs/releases/release-notes'},
      // TODO: no REST API page for Monitoring Connectors in pp/.
      {icon: 'code', title: 'REST API', to: null},
      // TODO: no compatibility/prerequisites page in pp/.
      {icon: 'gear', title: 'Compatibility & prerequisites', to: null},
      // TODO: no glossary page in pp/.
      {icon: 'book', title: 'Glossary', to: null},
    ],
  },
  fr: {
    kicker: 'Documentation',
    title: 'Monitoring Connectors',
    tagline:
      'Plus de 700 connecteurs prêts à l’emploi pour superviser toute technologie : réseau, cloud, base de données, application.',
    search: 'Rechercher un connecteur',
    stats: [
      {value: '700+', label: 'connecteurs'},
      {value: '50+', label: 'catégories'},
      {value: '25.10', label: 'dernière version'},
    ],
    quickStartTitle: 'Démarrer rapidement',
    quickStartHint: 'les tâches les plus fréquentes',
    guide: 'Guide',
    quickStart: [
      {icon: 'grid', title: 'Parcourir le catalogue', meta: 'Référence', to: '/pp/integrations/plugin-packs/getting-started/introduction'},
      {icon: 'server', title: 'Installer un connecteur', minutes: 5, to: '/docs/monitoring/pluginpacks'},
      {icon: 'cloud', title: 'Connecteurs Cloud', minutes: 7, to: '/pp/category/cloud'},
    ],
    resourcesTitle: 'Ressources',
    resourcesHint: 'références & mises à jour',
    resources: [
      {icon: 'file', title: 'Notes de version', to: '/pp/integrations/plugin-packs/releases/release-notes'},
      {icon: 'code', title: 'API REST', to: null},
      {icon: 'gear', title: 'Compatibilité & prérequis', to: null},
      {icon: 'book', title: 'Glossaire', to: null},
    ],
  },
};

export default function MonitoringConnectorsHome() {
  return <SectionHome content={content} />;
}
