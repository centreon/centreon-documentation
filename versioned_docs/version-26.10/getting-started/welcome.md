---
id: welcome
title: Centreon Infra Monitoring OnPrem
description: "Get started with Centreon Infra Monitoring OnPrem: find guides to understand the platform, install it, set up your first monitoring and use the interface."
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
  tagline="Self-hosted monitoring: full control over your platform, your data and your deployment."
  searchLabel="Search IM OnPrem"
  stats={[
    {value: '700+', label: 'connectors'},
    {value: 'API', label: 'REST & tokens'},
    {value: 'version', label: 'LTS version'},
  ]}
  alternative={{
    eyebrow: 'Prefer a fully managed platform?',
    title: 'Centreon Infra Monitoring Cloud',
    text: 'Centreon hosts the platform and keeps it up to date.',
    label: 'See Cloud',
    href: '/cloud/getting-started/welcome/',
  }}
  quickStartTitle="Quick start"
  quickStartSubtitle="the most frequent tasks"
  quickStart={[
    {icon: 'install', title: 'Install the central server', minutes: 8, href: '~/installation/installation-of-a-central-server/using-packages/'},
    {icon: 'server', title: 'Add a host', minutes: 1, href: '~/monitoring/basic-objects/hosts-create/'},
    {icon: 'alert', title: 'Set up notifications', minutes: 10, href: '~/alerts-notifications/notif-configuration/'},
  ]}
  resourcesTitle="Resources"
  resourcesSubtitle="reference & updates"
  resources={[
    {icon: 'reference', title: 'Release notes {version}', href: '~/releases/introduction/'},
    {icon: 'extend', title: 'REST API', href: '~/api/rest-api-v2/'},
    {icon: 'administer', title: 'Compatibility & prerequisites', href: '~/installation/compatibility/'},
    {icon: 'book', title: 'Glossary', href: '~/resources/glossary/'},
  ]}
/>
