---
id: centreon-os
title: Centreon Open Source
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne **Centreon Open Source**.

> Il est important de mettre à jour en utilisant la documentation adéquate de mise à jour et de lire attentivement les
> notes de mise à jour afin d'être au courant des changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez fait.

Pour faire des demandes d'évolutions ou reporter des bugs sur les extensions commerciales, vous pouvez vous rendre sur
notre [Github](https://github.com/centreon/centreon/issues/new/choose).

## Centreon Web

### 23.04.0

Release date: `April 26, 2023`

- [API]Configuration REST API: we have started extending Centreon's REST API. The first endpoints available in this release allow managing:
   - Time periods
   - Host groups
   - Host categories
   - Host severities
   - Service groups
   - Service categories
   - Service severities
- [Authentication] Added SAML authentication
  - Possibility to use conditions to access to Centreon
  - Possibility to import automatically users
  - Possibility to manage manually or automatically groups
  - Possibility to manage manually or automatically roles
- [Install] Removed Enterprise Linux version 7 and added version 9.
- [Resources Status] Add extended mode for Resources Status listing dispaly. 
- [Resources Status] Switch between extended and compact mode in Resources Status page.
- [Resources Status] Provide both simple and forced check options in Resources Status.
- [Resources Status] Various user interface improvements in Resources Status :
   - Align columns content with labels.
   - Display reordering column icon only on mouse hover.
   - Change columns displayed by default.
   - Display listing pagination icons while displaying resource details panel.
- [Terminology] Rename “problems” to “alerts” in Resources Status.
- [Terminology] Rename “Plugin Pack” to “Monitoring Connectors” in user interface.
- [UI] Improve Top Counter responsiveness.
- [UX] Added German translation.
- [UI] Added new Centreon branding.
- [Widgets] Added the possibility to select a Meta-Service in the graph monitoring widget.

## Centreon Collect

### 23.04.0

Release date: `April 26, 2023`

#### Centreon Engine

#### Centreon Broker

- Convert all BBDO messages to Protobuf: BBDO v2 protocol was entirely based on buffers with a static structure. We converted all the event message types into Protobuf classes, in order to easily add new fields or new message types in the future.

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
