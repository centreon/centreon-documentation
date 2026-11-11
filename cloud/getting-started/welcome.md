---
id: welcome
title: Centreon Infra Monitoring Cloud
description: "Get started with Centreon Infra Monitoring Cloud: deploy a poller, monitor your first resources and find the reference documentation of the hosted platform."
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
  tagline="Monitoring hosted and managed by Centreon: no platform to maintain, updates handled for you."
  searchLabel="Search IM Cloud"
  stats={[
    {value: 'SaaS', label: 'fully managed'},
    {value: '99%', label: 'availability SLA'},
    {value: '700+', label: 'connectors'},
  ]}
  alternative={{
    eyebrow: 'Prefer to host the platform yourself?',
    title: 'Centreon Infra Monitoring OnPrem',
    text: 'Your data stays in your information system.',
    label: 'See OnPrem',
    href: '/docs/getting-started/welcome/',
  }}
  quickStartTitle="Quick start"
  quickStartSubtitle="the most frequent tasks"
  quickStart={[
    {icon: 'install', title: 'Deploy a poller', minutes: 3, href: '/cloud/installation/deploy-poller/'},
    {icon: 'server', title: 'Add a host', minutes: 1, href: '/cloud/monitoring/basic-objects/hosts-create/'},
    {icon: 'alert', title: 'Set up notifications', minutes: 4, href: '/cloud/alerts-notifications/notif-configuration/'},
  ]}
  resourcesTitle="Resources"
  resourcesSubtitle="reference & updates"
  resources={[
    {icon: 'reference', title: 'Release notes', href: '/cloud/releases/cloud-release-notes/'},
    {icon: 'extend', title: 'REST API', href: 'https://docs-api.centreon.com/api/centreon-web-cloud/'},
    {icon: 'administer', title: 'Prerequisites', href: '/cloud/installation/prerequisites/'},
    {icon: 'book', title: 'Glossary', href: '/cloud/resources/glossary/'},
  ]}
/>
