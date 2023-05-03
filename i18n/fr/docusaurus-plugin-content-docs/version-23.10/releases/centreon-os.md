---
id: centreon-os
title: Centreon Open Source
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne **Centreon Open Source**.

> Il est important de mettre à jour en utilisant la documentation adéquate de mise à jour et de lire attentivement les
> notes de mise à jour afin d'être au courant des changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez fait.

Pour faire des demandes d'évolutions ou signaler des bugs sur les extensions commerciales, vous pouvez vous rendre sur
notre [Github](https://github.com/centreon/centreon/issues/new/choose).

## Centreon Web

### 23.04.0

Release date: `April 26, 2023`

- [API] We have started extending Centreon's Configuration REST API. The first endpoints available in this release allow you to manage:
   - Time periods.
   - Host groups.
   - Host categories.
   - Host severities.
   - Service groups.
   - Service categories.
   - Service severities.
- [Authentication] Added SAML authentication. With SAML, you can:
  - Use conditions to access Centreon.
  - Import users automatically.
  - Manage groups manually or automatically.
  - Manage roles manually or automatically.
- [Installation] Removed Enterprise Linux version 7 and added version 9.
- [Resources Status] Added extended mode for Resources Status listing display.
- [Resources Status] You can now switch between extended and compact mode in the Resources Status page.
- [Resources Status] Both simple and forced check options are provided in Resources Status.
- [Resources Status] Various user interface improvements in Resources Status :
   - Aligned column contents with labels.
   - The icon that allows you to reorder columns is now displayed only on mouseover.
   - The columns displayed by default have been changed.
   - Listing pagination icons are now displayed at the same time as the resource details panel.
- [Terminology] Renamed “problems” to “alerts” in Resources Status.
- [Terminology] Renamed “Plugin Pack” to “Monitoring Connectors” in the user interface.
- [UI] Improved Top Counter responsiveness.
- [UI] Applied new Centreon branding.
- [UX] Added German translation.
- [Widgets] Added the possibility to select a Meta-Service in the graph monitoring widget.

## Centreon Collect

### 23.04.0

Release date: `April 26, 2023`

#### Centreon Engine

Compatibility with other 23.04 components.

#### Centreon Broker

- Converted all BBDO messages to Protobuf: the BBDO v2 protocol was entirely based on buffers with a static structure. We converted all the event message types into Protobuf classes, in order to easily add new fields or new message types in the future.

## Centreon Gorgone

### 23.04.0

Release date: `April 26, 2023`

Compatibility with other 23.04 components.

## Centreon High Availability

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon DSM

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon Open Tickets

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.
- Added Schedule Check option & auto close popup capability
