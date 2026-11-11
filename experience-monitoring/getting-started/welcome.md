---
id: welcome
title: Centreon Experience Monitoring
description: "Get started with Centreon Experience Monitoring: set up Real User Monitoring, create user journeys and monitor the digital experience of your users."
landing: true
landing_breadcrumb: [Experience Monitoring]
hide_title: true
hide_table_of_contents: true
pagination_prev: null
pagination_next: null
---

import ProductLanding from '@site/src/components/ProductLanding';

<ProductLanding
  title="Centreon Experience Monitoring"
  tagline="Measure the digital experience of your users end to end: real users, synthetic journeys and business data."
  searchLabel="Search Experience Monitoring"
  stats={[
    {value: 'RUM', label: 'real users'},
    {value: 'STM', label: 'synthetic journeys'},
    {value: 'Web Vitals', label: 'LCP · CLS · TBT'},
  ]}
  alternative={{
    eyebrow: 'Native integration',
    title: 'Centreon Infra Monitoring',
    text: 'Monitor your user journeys from Infra Monitoring with the dedicated connector.',
    label: 'See the connector',
    href: '/pp/integrations/plugin-packs/procedures/applications-monitoring-centreon-experience-monitoring-restapi/',
  }}
  quickStartTitle="Quick start"
  quickStartSubtitle="the most frequent tasks"
  quickStart={[
    {icon: 'user', title: 'Set up RUM', href: '/experience-monitoring/installation/real-user-monitoring-installation/'},
    {icon: 'journey', title: 'Create a user journey', href: '/experience-monitoring/configuration/user-journey/create-a-scenario/'},
    {icon: 'server', title: 'Monitor non-public journeys', kind: 'STM zones', href: '/experience-monitoring/configuration/user-journey/stm-zones/'},
  ]}
  resourcesTitle="Resources"
  resourcesSubtitle="reference & updates"
  resources={[
    {icon: 'reference', title: 'Release notes', href: '/experience-monitoring/release-notes/'},
    {icon: 'administer', title: 'Installation checklist', href: '/experience-monitoring/installation/installation-checklist/'},
    {icon: 'troubleshoot', title: 'Troubleshooting', href: '/experience-monitoring/troubleshooting/'},
    {icon: 'book', title: 'Glossary', href: '/experience-monitoring/experience-monitoring-glossary/'},
  ]}
/>
