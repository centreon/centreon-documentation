---
id: welcome
title: Centreon Infra Monitoring Cloud
description: "Premiers pas avec Centreon Infra Monitoring Cloud : déployer un collecteur, superviser vos premières ressources et trouver la documentation de référence de la plateforme hébergée."
landing: true
landing_breadcrumb: [Infra Monitoring, Cloud]
hide_title: true
hide_table_of_contents: true
pagination_prev: null
pagination_next: null
---

import ProductLanding from '@site/src/components/ProductLanding';

<ProductLanding
  title="Centreon Infra Monitoring Cloud"
  tagline="Supervision hébergée et gérée par Centreon : aucune plateforme à maintenir, les mises à jour sont assurées pour vous."
  searchLabel="Rechercher dans IM Cloud"
  stats={[
    {value: 'SaaS', label: 'entièrement géré'},
    {value: '99 %', label: 'SLA de disponibilité'},
    {value: '700+', label: 'connecteurs'},
  ]}
  alternative={{
    eyebrow: 'Vous préférez héberger la plateforme vous-même ?',
    title: 'Centreon Infra Monitoring OnPrem',
    text: 'Vos données restent dans votre SI.',
    label: 'Voir OnPrem',
    href: '/docs/getting-started/welcome/',
  }}
  quickStartTitle="Démarrer rapidement"
  quickStartSubtitle="les tâches les plus fréquentes"
  quickStart={[
    {icon: 'install', title: 'Déployer un collecteur', minutes: 3, href: '/cloud/installation/deploy-poller/'},
    {icon: 'server', title: 'Ajouter un hôte', minutes: 1, href: '/cloud/monitoring/basic-objects/hosts-create/'},
    {icon: 'alert', title: 'Configurer les notifications', minutes: 4, href: '/cloud/alerts-notifications/notif-configuration/'},
  ]}
  resourcesTitle="Ressources"
  resourcesSubtitle="références & mises à jour"
  resources={[
    {icon: 'reference', title: 'Notes de version', href: '/cloud/releases/cloud-release-notes/'},
    {icon: 'extend', title: 'API REST', href: 'https://docs-api.centreon.com/api/centreon-web-cloud/'},
    {icon: 'administer', title: 'Prérequis', href: '/cloud/installation/prerequisites/'},
    {icon: 'book', title: 'Glossaire', href: '/cloud/resources/glossary/'},
  ]}
/>
