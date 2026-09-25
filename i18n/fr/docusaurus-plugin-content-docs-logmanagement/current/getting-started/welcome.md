---
id: welcome
title: Centreon Log Management
description: "Documentation de Centreon Log Management : collectez vos logs avec OpenTelemetry, explorez-les, analysez-les et transformez-les en alertes."
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
  title="Centreon Log Management"
  tagline="Collectez, explorez et analysez vos logs avec OpenTelemetry, et transformez-les en alertes."
  searchLabel="Rechercher dans Log Management"
  stats={[
    {value: 'OTel', label: 'logs OpenTelemetry', accent: true},
    {value: 'API', label: 'REST & jetons', accent: true},
  ]}
  summaryLabel="Sommaire"
  intents={[
    {icon: 'discover', title: 'Je découvre', description: 'Concepts, observabilité, cas d\'utilisation', href: '/logmanagement/getting-started/concepts/'},
    {icon: 'send', title: 'J\'envoie mes logs', description: 'Collecteur OpenTelemetry', href: '/logmanagement/collector/opentelemetry-collector/'},
    {icon: 'explore', title: 'J\'explore et j\'analyse', description: 'Explorateur de logs, requêtes, tableaux de bord', href: '/logmanagement/explore-analyze/'},
    {icon: 'alert', title: 'Je crée des alertes', description: 'Règles d\'alerte et notifications', href: '/logmanagement/alert-events/'},
    {icon: 'administer', title: 'J\'administre', description: 'Utilisateurs, droits, jetons, stockage', href: '/logmanagement/centreon-hub/'},
    {icon: 'extend', title: 'J\'étends et j\'automatise', description: 'API REST', href: '/logmanagement/api/'},
    {icon: 'reference', title: 'Je consulte la référence', description: 'Syntaxe des requêtes, glossaire', href: '/logmanagement/resources/glossary/'},
  ]}
  crossLink={{label: 'Vous utilisez Infra Monitoring ? Passez d\'un incident à sa cause dans les logs.', href: '/logmanagement/getting-started/observability/'}}
  quickStartTitle="Démarrer rapidement"
  quickStartSubtitle="les tâches les plus fréquentes"
  quickStart={[
    {icon: 'send', title: 'Envoyer vos premiers logs', kind: 'Guide', href: '/logmanagement/collector/collector-generator/'},
    {icon: 'explore', title: 'Rechercher dans vos logs', kind: 'Guide', href: '/logmanagement/log-explorer/'},
    {icon: 'alert', title: 'Créer une alerte sur les logs', kind: 'Guide', href: '/logmanagement/alert-events/'},
  ]}
  resourcesTitle="Ressources"
  resourcesSubtitle="référence et dépannage"
  resources={[
    {icon: 'reference', title: 'Syntaxe des requêtes', href: '/logmanagement/query-syntax/'},
    {icon: 'extend', title: 'API REST', href: '/logmanagement/api/'},
    {icon: 'troubleshoot', title: 'Dépanner le collecteur', href: '/logmanagement/collector/collector-troubleshooting/'},
    {icon: 'book', title: 'Glossaire', href: '/logmanagement/resources/glossary/'},
  ]}
/>
