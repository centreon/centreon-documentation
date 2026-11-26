---
id: welcome
title: Monitoring connectors
description: "More than 700 ready-to-use Monitoring Connectors for Centreon Infra Monitoring Cloud and OnPrem: browse the catalog, install a connector and configure data collection."
displayed_sidebar: pp
landing: true
landing_breadcrumb: [Infra Monitoring, Monitoring connectors]
hide_title: true
hide_table_of_contents: true
pagination_prev: null
pagination_next: null
---

import ProductLanding from '@site/src/components/ProductLanding';

<ProductLanding
  title="Monitoring connectors"
  tagline="More than 700 ready-to-use connectors to monitor any technology: network, cloud, databases, applications."
  searchLabel="Search for a connector"
  stats={[
    {value: '700+', label: 'connectors'},
    {value: '15', label: 'categories'},
    {value: 'Monthly', label: 'releases'},
  ]}
  alternative={{
    eyebrow: 'Compatible with Cloud and OnPrem',
    title: 'Centreon Infra Monitoring',
    text: 'Connectors work with Cloud as well as with OnPrem.',
    links: [
      {label: 'Cloud', href: '/cloud/getting-started/welcome/'},
      {label: 'OnPrem', href: '/docs/getting-started/welcome/'},
    ],
  }}
  quickStartTitle="Quick start"
  quickStartSubtitle="the most frequent tasks"
  quickStart={[
    {icon: 'explore', title: 'Browse the catalog', kind: 'Reference', href: '/pp/integrations/plugin-packs/getting-started/introduction/'},
    {icon: 'install', title: 'Install a connector', minutes: 9, href: '/docs/monitoring/pluginpacks/'},
    {icon: 'cloud', title: 'Cloud connectors', minutes: 3, href: '/cloud/monitoring/pluginpacks/'},
  ]}
  resourcesTitle="Resources"
  resourcesSubtitle="reference & updates"
  resources={[
    {icon: 'reference', title: 'Release notes', href: '/pp/integrations/plugin-packs/releases/release-notes/'},
    {icon: 'extend', title: 'Develop a plugin', href: '/pp/integrations/plugin-packs/getting-started/develop-plugin/'},
    {icon: 'troubleshoot', title: 'Troubleshoot plugins', href: '/pp/integrations/plugin-packs/getting-started/how-to-guides/troubleshooting-plugins/'},
    {icon: 'book', title: 'Glossary', href: '/docs/resources/glossary/'},
  ]}
/>
