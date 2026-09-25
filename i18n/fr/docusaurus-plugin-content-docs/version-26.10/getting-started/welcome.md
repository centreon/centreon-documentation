---
id: welcome
title: Centreon Infra Monitoring
description: "Documentation de Centreon Infra Monitoring : installez la plateforme, supervisez serveurs, réseau et cloud, gérez alertes et tableaux de bord."
landing: true
hide_title: true
hide_table_of_contents: true
displayed_sidebar: null
pagination_prev: null
pagination_next: null
---

import ProductLanding from '@site/src/components/ProductLanding';

<ProductLanding
  eyebrow="Documentation"
  title="Centreon Infra Monitoring"
  tagline="Supervisez toute votre infrastructure (serveurs, réseau, cloud), du premier hôte au pilotage métier."
  searchLabel="Rechercher dans Infra Monitoring"
  stats={[
    {value: '700+', label: 'connecteurs'},
    {value: 'API', label: 'REST & jetons', accent: true},
    {value: 'version', label: 'version documentée', accent: true},
  ]}
  summaryLabel="Sommaire"
  intents={[
    {icon: 'discover', title: 'Je découvre', description: 'Panorama, concepts, architecture', href: '~/getting-started/concepts/'},
    {icon: 'sparkle', title: 'Je démarre', description: 'Du zéro au premier résultat', href: '~/getting-started/first-supervision/'},
    {icon: 'install', title: 'J\'installe et je déploie', description: 'Architectures, HA, agents', href: '~/installation/introduction/'},
    {icon: 'dashboard', title: 'Je supervise et j\'exploite', description: 'Ressources, alertes, tableaux de bord', href: '~/alerts-notifications/resources-status/'},
    {icon: 'administer', title: 'J\'administre', description: 'Paramètres, utilisateurs, sécurité', href: '~/administration/access-control-lists/'},
    {icon: 'extend', title: 'J\'étends et j\'automatise', description: 'API, intégrations, IaC', href: '~/api/introduction/'},
    {icon: 'reference', title: 'Je consulte la référence', description: 'Compatibilité, notes de version, glossaire', href: '~/releases/introduction/'},
  ]}
  crossLink={{label: 'Vous utilisez Infra Monitoring Cloud ? Consultez la documentation Cloud.', href: '/cloud/getting-started/welcome/'}}
  quickStartTitle="Démarrer rapidement"
  quickStartSubtitle="les tâches les plus fréquentes"
  quickStart={[
    {icon: 'install', title: 'Installer un collecteur', kind: 'Guide', href: '~/installation/installation-of-a-poller/using-packages/'},
    {icon: 'server', title: 'Ajouter un hôte', kind: 'Guide', href: '~/monitoring/basic-objects/hosts-create/'},
    {icon: 'alert', title: 'Configurer les notifications', kind: 'Guide', href: '~/alerts-notifications/notif-configuration/'},
  ]}
  resourcesTitle="Ressources"
  resourcesSubtitle="référence et mises à jour"
  resources={[
    {icon: 'reference', title: 'Notes de version', href: '~/releases/introduction/'},
    {icon: 'extend', title: 'API REST', href: '~/api/rest-api-v2/'},
    {icon: 'administer', title: 'Compatibilité et prérequis', href: '~/installation/compatibility/'},
    {icon: 'book', title: 'Glossaire', href: '~/resources/glossary/'},
  ]}
/>
