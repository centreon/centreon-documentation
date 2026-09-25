---
id: welcome
title: Centreon Log Management
description: "Centreon Log Management documentation: collect logs with OpenTelemetry, explore and analyze them, and turn log patterns into alerts."
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
  tagline="Collect, explore and analyze your logs with OpenTelemetry, and turn them into alerts."
  searchLabel="Search Log Management"
  stats={[
    {value: 'OTel', label: 'OpenTelemetry logs', accent: true},
    {value: 'API', label: 'REST & tokens', accent: true},
  ]}
  summaryLabel="Contents"
  intents={[
    {icon: 'discover', title: 'Discover', description: 'Concepts, observability, use cases', href: '/logmanagement/getting-started/concepts/'},
    {icon: 'send', title: 'Send logs', description: 'OpenTelemetry collector', href: '/logmanagement/collector/opentelemetry-collector/'},
    {icon: 'explore', title: 'Explore & analyze', description: 'Log explorer, queries, dashboards', href: '/logmanagement/explore-analyze/'},
    {icon: 'alert', title: 'Create alerts', description: 'Alert rules and notifications', href: '/logmanagement/alert-events/'},
    {icon: 'administer', title: 'Administer', description: 'Users, rights, tokens, storage', href: '/logmanagement/centreon-hub/'},
    {icon: 'extend', title: 'Extend & automate', description: 'REST API', href: '/logmanagement/api/'},
    {icon: 'reference', title: 'Reference', description: 'Query syntax, glossary', href: '/logmanagement/resources/glossary/'},
  ]}
  crossLink={{label: 'Using Infra Monitoring? Go from an incident to its root cause in the logs.', href: '/logmanagement/getting-started/observability/'}}
  quickStartTitle="Get started quickly"
  quickStartSubtitle="the most common tasks"
  quickStart={[
    {icon: 'send', title: 'Send your first logs', kind: 'Guide', href: '/logmanagement/collector/collector-generator/'},
    {icon: 'explore', title: 'Search your logs', kind: 'Guide', href: '/logmanagement/log-explorer/'},
    {icon: 'alert', title: 'Create a log alert', kind: 'Guide', href: '/logmanagement/alert-events/'},
  ]}
  resourcesTitle="Resources"
  resourcesSubtitle="reference and troubleshooting"
  resources={[
    {icon: 'reference', title: 'Query syntax', href: '/logmanagement/query-syntax/'},
    {icon: 'extend', title: 'REST API', href: '/logmanagement/api/'},
    {icon: 'troubleshoot', title: 'Troubleshooting the collector', href: '/logmanagement/collector/collector-troubleshooting/'},
    {icon: 'book', title: 'Glossary', href: '/logmanagement/resources/glossary/'},
  ]}
/>
