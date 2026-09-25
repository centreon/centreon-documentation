---
id: welcome
title: Centreon Infra Monitoring
description: "Centreon Infra Monitoring documentation: install the platform, monitor servers, network and cloud resources, and manage alerts and dashboards."
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
  tagline="Monitor your entire infrastructure (servers, network, cloud), from your first host to business service management."
  searchLabel="Search Infra Monitoring"
  stats={[
    {value: '700+', label: 'connectors'},
    {value: 'API', label: 'REST & tokens', accent: true},
    {value: 'version', label: 'documented version', accent: true},
  ]}
  summaryLabel="Contents"
  intents={[
    {icon: 'discover', title: 'Discover', description: 'Overview, concepts, architecture', href: '~/getting-started/concepts/'},
    {icon: 'sparkle', title: 'Get started', description: 'From zero to your first result', href: '~/getting-started/first-supervision/'},
    {icon: 'install', title: 'Install & deploy', description: 'Architectures, HA, agents', href: '~/installation/introduction/'},
    {icon: 'dashboard', title: 'Monitor & operate', description: 'Resources, alerts, dashboards', href: '~/alerts-notifications/resources-status/'},
    {icon: 'administer', title: 'Administer', description: 'Settings, users, security', href: '~/administration/access-control-lists/'},
    {icon: 'extend', title: 'Extend & automate', description: 'API, integrations, IaC', href: '~/api/introduction/'},
    {icon: 'reference', title: 'Reference', description: 'Compatibility, release notes, glossary', href: '~/releases/introduction/'},
  ]}
  crossLink={{label: 'Using Infra Monitoring Cloud? Go to the Cloud documentation.', href: '/cloud/getting-started/welcome/'}}
  quickStartTitle="Get started quickly"
  quickStartSubtitle="the most common tasks"
  quickStart={[
    {icon: 'install', title: 'Install a poller', kind: 'Guide', href: '~/installation/installation-of-a-poller/using-packages/'},
    {icon: 'server', title: 'Add a host', kind: 'Guide', href: '~/monitoring/basic-objects/hosts-create/'},
    {icon: 'alert', title: 'Set up notifications', kind: 'Guide', href: '~/alerts-notifications/notif-configuration/'},
  ]}
  resourcesTitle="Resources"
  resourcesSubtitle="reference and updates"
  resources={[
    {icon: 'reference', title: 'Release notes', href: '~/releases/introduction/'},
    {icon: 'extend', title: 'REST API', href: '~/api/rest-api-v2/'},
    {icon: 'administer', title: 'Compatibility & prerequisites', href: '~/installation/compatibility/'},
    {icon: 'book', title: 'Glossary', href: '~/resources/glossary/'},
  ]}
/>
