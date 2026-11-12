---
id: welcome
title: Centreon Infra Monitoring OnPrem
description: "Premiers pas avec Centreon Infra Monitoring OnPrem : comprendre la plateforme, l'installer, configurer une première supervision et utiliser l'interface."
landing: true
landing_breadcrumb: [Infra Monitoring, OnPrem]
hide_title: true
hide_table_of_contents: true
pagination_prev: null
pagination_next: null
---

import ProductLanding from '@site/src/components/ProductLanding';

<ProductLanding
  title="Centreon Infra Monitoring OnPrem"
  tagline="Supervision auto-hébergée : maîtrise totale de votre plateforme, de vos données et de votre déploiement."
  searchLabel="Rechercher dans IM OnPrem"
  stats={[
    {value: '700+', label: 'connecteurs'},
    {value: 'API', label: 'REST & tokens'},
    {value: 'version', label: 'version LTS'},
  ]}
  alternative={{
    eyebrow: 'Vous préférez une plateforme entièrement gérée ?',
    title: 'Centreon Infra Monitoring Cloud',
    text: 'Centreon héberge la plateforme et la met à jour.',
    label: 'Voir Cloud',
    href: '/cloud/getting-started/welcome/',
  }}
  quickStartTitle="Démarrer rapidement"
  quickStartSubtitle="les tâches les plus fréquentes"
  quickStart={[
    {icon: 'install', title: 'Installer le serveur central', minutes: 8, href: '~/installation/installation-of-a-central-server/using-packages/'},
    {icon: 'server', title: 'Ajouter un hôte', minutes: 1, href: '~/monitoring/basic-objects/hosts-create/'},
    {icon: 'alert', title: 'Configurer les notifications', minutes: 10, href: '~/alerts-notifications/notif-configuration/'},
  ]}
  resourcesTitle="Ressources"
  resourcesSubtitle="références & mises à jour"
  resources={[
    {icon: 'reference', title: 'Notes de version {version}', href: '~/releases/introduction/'},
    {icon: 'extend', title: 'API REST', href: '~/api/rest-api-v2/'},
    {icon: 'administer', title: 'Compatibilité & prérequis', href: '~/installation/compatibility/'},
    {icon: 'book', title: 'Glossaire', href: '~/resources/glossary/'},
  ]}
/>
