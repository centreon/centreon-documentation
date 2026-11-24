---
id: welcome
title: Connecteurs de supervision
description: "Plus de 700 connecteurs de supervision prêts à l'emploi pour Centreon Infra Monitoring Cloud et OnPrem : parcourez le catalogue, installez un connecteur et configurez la collecte."
displayed_sidebar: pp
landing: true
landing_breadcrumb: [Infra Monitoring, Connecteurs de supervision]
hide_title: true
hide_table_of_contents: true
pagination_prev: null
pagination_next: null
---

import ProductLanding from '@site/src/components/ProductLanding';

<ProductLanding
  title="Connecteurs de supervision"
  tagline="Plus de 700 connecteurs prêts à l'emploi pour superviser toute technologie : réseau, cloud, bases de données, applications."
  searchLabel="Rechercher un connecteur"
  stats={[
    {value: '700+', label: 'connecteurs'},
    {value: '15', label: 'catégories'},
    {value: 'Chaque mois', label: 'nouvelles versions'},
  ]}
  alternative={{
    eyebrow: 'Compatible Cloud et OnPrem',
    title: 'Centreon Infra Monitoring',
    text: "Les connecteurs s'utilisent avec Cloud comme avec OnPrem.",
    links: [
      {label: 'Cloud', href: '/cloud/getting-started/welcome/'},
      {label: 'OnPrem', href: '/docs/getting-started/welcome/'},
    ],
  }}
  quickStartTitle="Démarrer rapidement"
  quickStartSubtitle="les tâches les plus fréquentes"
  quickStart={[
    {icon: 'explore', title: 'Parcourir le catalogue', kind: 'Référence', href: '/pp/integrations/plugin-packs/getting-started/introduction/'},
    {icon: 'install', title: 'Installer un connecteur', minutes: 9, href: '/docs/monitoring/pluginpacks/'},
    {icon: 'cloud', title: 'Connecteurs Cloud', minutes: 3, href: '/cloud/monitoring/pluginpacks/'},
  ]}
  resourcesTitle="Ressources"
  resourcesSubtitle="références & mises à jour"
  resources={[
    {icon: 'reference', title: 'Notes de version', href: '/pp/integrations/plugin-packs/releases/release-notes/'},
    {icon: 'extend', title: 'Développer un plugin', href: '/pp/integrations/plugin-packs/getting-started/develop-plugin/'},
    {icon: 'troubleshoot', title: 'Dépanner les plugins', href: '/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins/'},
    {icon: 'book', title: 'Glossaire', href: '/docs/resources/glossary/'},
  ]}
/>
