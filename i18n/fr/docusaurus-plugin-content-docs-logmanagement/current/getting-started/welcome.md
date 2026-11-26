---
id: welcome
title: Centreon Log Management
description: "Premiers pas avec Centreon Log Management : envoyer vos premiers logs avec un collecteur OpenTelemetry, les explorer dans le Log explorer et créer des règles d'alerte."
landing: true
landing_breadcrumb: [Log Management]
hide_title: true
hide_table_of_contents: true
pagination_prev: null
pagination_next: null
---

import ProductLanding from '@site/src/components/ProductLanding';

<ProductLanding
  title="Centreon Log Management"
  tagline="Une supervision des logs simple, intelligente et maîtrisée."
  searchLabel="Rechercher dans Log Management"
  stats={[
    {value: 'OTel', label: 'OpenTelemetry'},
    {value: 'Temps réel', label: 'analyse des logs'},
    {value: 'MCP', label: 'assistants IA (bêta)'},
  ]}
  alternative={{
    eyebrow: 'Logs et supervision',
    title: 'Centreon Infra Monitoring',
    text: "Repérez un incident dans Infra Monitoring, trouvez sa cause dans les logs.",
    label: 'Voir Infra Monitoring',
    href: '/',
  }}
  quickStartTitle="Démarrer rapidement"
  quickStartSubtitle="les tâches les plus fréquentes"
  quickStart={[
    {icon: 'send', title: 'Envoyer vos premiers logs', minutes: 2, href: '/logmanagement/collector/collector-generator/'},
    {icon: 'explore', title: 'Ouvrir le Log explorer', minutes: 6, href: '/logmanagement/log-explorer/'},
    {icon: 'alert', title: 'Créer une alerte sur logs', minutes: 3, href: '/logmanagement/alert-events/'},
  ]}
  resourcesTitle="Ressources"
  resourcesSubtitle="références & mises à jour"
  resources={[
    {icon: 'extend', title: 'API REST', href: '/logmanagement/api/'},
    {icon: 'reference', title: 'Syntaxe des requêtes', href: '/logmanagement/query-syntax/'},
    {icon: 'troubleshoot', title: 'Dépanner le collecteur', href: '/logmanagement/collector/collector-troubleshooting/'},
    {icon: 'book', title: 'Glossaire', href: '/logmanagement/resources/glossary/'},
  ]}
/>
