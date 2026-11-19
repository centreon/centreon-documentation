---
id: welcome
title: Centreon Log Management
description: "Get started with Centreon Log Management: send your first logs with an OpenTelemetry collector, explore them in the log explorer and create alert rules."
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
  tagline="Simple, smart log monitoring that stays under your control."
  searchLabel="Search Log Management"
  stats={[
    {value: 'OTel', label: 'OpenTelemetry'},
    {value: 'Real time', label: 'log analysis'},
    {value: 'MCP', label: 'AI assistants (beta)'},
  ]}
  alternative={{
    eyebrow: 'Logs and monitoring',
    title: 'Centreon Infra Monitoring',
    text: 'Spot an incident in Infra Monitoring, find its cause in the logs.',
    label: 'See Infra Monitoring',
    href: '/',
  }}
  quickStartTitle="Quick start"
  quickStartSubtitle="the most frequent tasks"
  quickStart={[
    {icon: 'send', title: 'Send your first logs', minutes: 2, href: '/logmanagement/collector/collector-generator/'},
    {icon: 'explore', title: 'Open the log explorer', minutes: 6, href: '/logmanagement/log-explorer/'},
    {icon: 'alert', title: 'Create a log alert', minutes: 3, href: '/logmanagement/alert-events/'},
  ]}
  resourcesTitle="Resources"
  resourcesSubtitle="reference & updates"
  resources={[
    {icon: 'extend', title: 'REST API', href: '/logmanagement/api/'},
    {icon: 'reference', title: 'Query syntax', href: '/logmanagement/query-syntax/'},
    {icon: 'troubleshoot', title: 'Collector troubleshooting', href: '/logmanagement/collector/collector-troubleshooting/'},
    {icon: 'book', title: 'Glossary', href: '/logmanagement/resources/glossary/'},
  ]}
/>
