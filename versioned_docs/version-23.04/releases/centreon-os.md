---
id: centreon-os
title: Centreon Open Source
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Open Source**.

> It is very important when you update your system to refer to this section in order to learn about behavior changes or
> major changes that have been made on this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please go to our
[Github](https://github.com/centreon/centreon/issues/new/choose).

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
