---
id: introduction
title: Introduction
description: "Automate Centreon with its REST APIs: Centreon Web (v2), Autodiscovery, MAP and BAM, with a first request in three steps, Postman, API v1 and CLAPI."
landing: true
landing_breadcrumb: [Infra Monitoring, OnPrem, API]
hide_title: true
hide_table_of_contents: true
pagination_prev: null
pagination_next: null
---

import ApiLanding from '@site/src/components/ApiLanding';

<ApiLanding
  eyebrow="Centreon APIs"
  title="Automate Centreon with its APIs"
  tagline="Create your configuration from your CMDB, read the real-time status of your resources, run discoveries and build maps. Every API is documented endpoint by endpoint, and you can try each request from this documentation."
  actions={[
    {label: 'Get started with API v2', href: '~/api/reference/web/centreon-web-restapi'},
    {label: 'Create an API token', href: '~/api/authentication-tokens'},
  ]}
  facts={[
    {value: '4', label: 'REST APIs'},
    {value: '320+', label: 'documented endpoints'},
    {value: 'OpenAPI', label: 'definitions to download'},
  ]}
  sample={{
    title: 'Your first request',
    code: 'curl "https://<your-centreon-server>/centreon/api/latest/monitoring/hosts?limit=20" \\\n  -H "X-AUTH-TOKEN: <token>"',
    caption: 'Lists 20 hosts with their real-time status.',
  }}
  apisTitle="Choose your API"
  apisSubtitle="each one has a Get started page and a page per endpoint"
  apis={[
    {
      icon: 'extend',
      name: 'Centreon Web REST API',
      badge: 'API v2',
      text: 'The main API: the configuration of your platform, real-time monitoring and administration.',
      uses: ['Hosts & services', 'Acknowledgements & downtimes', 'Users & access rights'],
      cta: 'Get started',
      href: '~/api/reference/web/centreon-web-restapi',
    },
    {
      icon: 'discover',
      name: 'Autodiscovery API',
      text: 'Discover hosts with the providers of your connectors, and add them to your configuration.',
      uses: ['Providers & credentials', 'Discovery jobs', 'Discovered hosts'],
      cta: 'Get started',
      href: '~/api/reference/autodiscovery/centreon-auto-discovery-api',
    },
    {
      icon: 'image',
      name: 'MAP API',
      text: 'Create and update maps and views, and manage who can see them.',
      uses: ['Maps', 'Views', 'Access rights'],
      cta: 'Get started',
      href: '~/api/reference/map/centreon-map-api',
    },
    {
      icon: 'dashboard',
      name: 'BAM API',
      text: 'Read your business views, business activities and their indicators, with their real-time status.',
      uses: ['Business views', 'Business activities', 'Indicators'],
      cta: 'Get started',
      href: '~/api/reference/bam/centreon-bam-api',
    },
  ]}
  stepsTitle="Your first request"
  stepsSubtitle="in three steps"
  steps={[
    {
      title: 'Find your API URL',
      text: 'Every request goes to your central server:',
      code: 'https://<your-centreon-server>/centreon/api/latest',
    },
    {
      title: 'Get a token',
      text: 'Create an API token in Administration > Authentication tokens. It works with every API.',
      link: {label: 'Authentication tokens', href: '~/api/authentication-tokens'},
    },
    {
      title: 'Send your request',
      text: 'Send the token in the X-AUTH-TOKEN header, or try the request from any endpoint page, with Send API Request.',
      code: 'X-AUTH-TOKEN: <token>',
    },
  ]}
  moreTitle="Other ways to automate"
  moreSubtitle="guides and earlier APIs"
  more={[
    {icon: 'send', title: 'Using the v2 API with Postman', text: 'Import the API into Postman and send your first requests.', href: '~/api/rest-api-v2'},
    {icon: 'book', title: 'Automating MAP via API', text: 'A complete scenario, from sign-in to adding a shape on a map.', href: '~/api/map-api'},
    {icon: 'reference', title: 'Rest API (v1)', badge: 'v1', text: 'The first version of the REST API, for the configuration.', href: '~/api/rest-api-v1'},
    {icon: 'administer', title: 'Command Line API (v1) - CLAPI', badge: 'v1', text: 'Manage the configuration from the command line of the central server, and export or import it.', href: '~/api/clapi'},
  ]}
/>
