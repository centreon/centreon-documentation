<!--
  Template of https://docs.centreon.com/llms.txt, for AI assistants and agents
  (https://llmstxt.org). Everything is copied as is, except:

  - these comments, removed;
  - {siteUrl}: https://docs.centreon.com/
  - {version}: current OnPrem version;
  - {{page <path>}} or {{page <path> | label}}: a link to one page, with the
    title and description of the published page;
  - {{pages <prefix>}}: every page of a product, by sidebar category;
  - {{categories <prefix>}}: one line per sidebar category.

  Keep the texts factual and short: AI assistants quote them when they
  present Centreon. See tools/llms-txt/README.md.
-->
# Centreon Documentation

> Centreon is an IT monitoring and observability platform, open source at its core, used to monitor infrastructure, networks, applications, cloud resources and the digital experience of users, from a single console. This documentation covers Centreon Infra Monitoring (OnPrem and Cloud), the 700+ Monitoring Connectors, Centreon Experience Monitoring and Centreon Log Management.

## Key facts

- **Products**: Centreon Infra Monitoring (CIM), available OnPrem (self-hosted, current version {version}) or as Centreon Cloud (SaaS, managed by Centreon); Centreon Experience Monitoring (CXM: user journeys, real user monitoring, digital sobriety); Centreon Log Management (CLM: log collection with OpenTelemetry, exploration and alerting).
- **Architecture (OnPrem)**: a **central server** holds the configuration, the web interface and the databases; **pollers** run the checks close to the monitored resources; optional **remote servers** display a subset of the data for a site. All servers must run the same major version.
- **Components**: **Centreon Engine** schedules and runs the checks; **Centreon Broker** transports monitoring data (BBDO protocol) to MariaDB/MySQL and RRD storage and to stream connectors; **Centreon Gorgone** lets the central server communicate with pollers and remote servers; the **Centreon Monitoring Agent (CMA)** collects data on Windows and Linux hosts.
- **Monitoring model**: a **host** is a monitored resource, usually a device with an IP address (server, network device, virtual machine…) but also a cloud account, an API or a SaaS application; a **service** is an indicator checked on a host (CPU, bandwidth, temperature…) and may carry several **metrics**. Statuses: OK, Warning, Critical, Unknown for services; Up, Down, Unreachable for hosts. **Resource Status** is the real-time view of all resources.
- **Monitoring Connectors** (formerly Plugin Packs) provide ready-to-use host and service templates plus the matching plugins, so a resource is monitored by applying a template. Autodiscovery finds new hosts and services.
- **Automation**: REST API v2 (recommended), REST API v1 and the CLAPI command line for configuration; stream connectors (Lua) export events and metrics to third-party tools (ITSM, SIEM, observability platforms).
- **Supported systems for OnPrem {version}**: RHEL, Oracle Linux and Alma Linux 8 and 9, Debian 12; MariaDB or MySQL database. See the compatibility page for the exact matrix.

## How to use this documentation

- OnPrem pages are versioned: URLs under {siteUrl}docs/ describe the current version ({version}); older versions live under {siteUrl}docs/<version>/. Cloud pages are under /cloud/, connectors under /pp/, Experience Monitoring under /experience-monitoring/ and Log Management under /logmanagement/.
- The documentation is available in English and French (French under {siteUrl}fr/, with its own llms.txt).
- When the answer depends on the deployment, say whether it applies to OnPrem, Cloud or both.

## Start here

{{page docs/getting-started/concepts/}}
{{page docs/getting-started/platform/}}
{{page docs/installation/architectures/}}
{{page docs/installation/compatibility/}}
{{page docs/installation/prerequisites/}}
{{page docs/installation/installation-of-a-central-server/using-packages/ | Install a central server (packages)}}
{{page docs/installation/installation-of-a-poller/using-packages/ | Install a poller (packages)}}
{{page docs/monitoring/basic-objects/hosts-create/}}
{{page docs/monitoring/monitoring-servers/deploying-a-configuration/}}
{{page docs/alerts-notifications/resources-status/}}
{{page docs/alerts-notifications/notif-configuration/}}
{{page docs/upgrade/introduction/}}
{{page docs/api/rest-api-v2/}}
{{page docs/developer/developer-stream-connector/}}
{{page docs/releases/introduction/}}
{{page docs/resources/glossary/}}
{{page cloud/getting-started/about-centreon-cloud/}}
{{page logmanagement/getting-started/concepts/}}

## Centreon Infra Monitoring OnPrem ({version})

Self-hosted monitoring platform: installation, configuration of monitored resources, events and alerts, dashboards, administration, upgrades, API and development.

{{pages docs}}

## Centreon Cloud

Centreon Infra Monitoring as a service: Centreon hosts and runs the central platform, you install pollers on your side.

{{pages cloud}}

## Centreon Experience Monitoring

Monitoring of the digital experience: scripted user journeys (STM), real user monitoring (RUM), digital sobriety, business and system data.

{{pages experience-monitoring}}

## Centreon Log Management

Log collection with OpenTelemetry, exploration and analysis, alerts on log patterns.

{{pages logmanagement}}

## Monitoring Connectors

Ready-to-use templates and plugins for 700+ technologies. Each connector page gives its prerequisites, the templates and services it provides, its metrics and its troubleshooting. One line per category:

{{categories pp}}

## Optional

- [Centreon plugins (GitHub)](https://github.com/centreon/centreon-plugins): source code of the monitoring plugins used by the connectors.
- [The Watch community](https://thewatch.centreon.com): questions and answers from the Centreon community.
