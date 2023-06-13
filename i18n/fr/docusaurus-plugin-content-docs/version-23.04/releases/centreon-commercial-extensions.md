---
id: centreon-commercial-extensions
title: Extensions Commerciales
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les **extensions commerciales** de Centreon.

> Il est important de mettre à jour en utilisant la documentation adéquate de mise à jour et de lire attentivement les
> notes de mise à jour afin d'être au courant des changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez fait.

Pour faire des demandes d'évolutions ou signaler des bugs sur les extensions commerciales, veuillez contacter le support.

Retrouvez plus de détails sur la version 23.04 dans notre [post de blog](https://www.centreon.com/fr/centreon-23-04-decouvrez-les-nouveautes-a-venir-ce-printemps/).

## Centreon MAP

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon BAM

### 23.04.1

Release date: `June 13, 2023`

### Bug fixes

- Fixed an issue that caused KPIs to be unavailable for selection when configuring a Business Activity as a non-admin user.
- Fixed an issue that caused resources to be displayed for a single ACL group when multiple ACL groups were selected during BA creation by a non-admin user.

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.
- [Configuration] Removed deprecated "Import SSV" feature from Business Activities configuration.
- [Configuration] Improved Business Activities configuration panel display:
   - Display listing pagination icons while displaying the configuration panel
   - Allow more space to display indicators' names.

## Centreon MBI

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon Auto Discovery

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.
- Plugins automatic installation: plugins are now installed automatically on the poller where a Host Discovery Job is scheduled. So, you won't need to install them prior to scheduling discovery jobs.
- Job duplication: Host Discovery jobs can now be duplicated to avoid repetitive work.
- Mapper duplication: Host Discovery Mappers can now be duplicated inside a job.

## Centreon Monitoring Connectors Manager (formerly Plugin Packs Manager)

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon License Manager

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon Anomaly Detection

### 23.04.1

Release date: `June 13, 2023`

### Bug fixes

- Fixed an issue that caused KPIs to be unavailable for selection when configuring a Business Activity as a non-admin user.
- Fixed an issue that caused resources to be displayed for a single ACL group when multiple ACL groups were selected during BA creation by a non-admin user.

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.
- [Core] It is now possible to exclude unrepresentative data from prediction computation.
- [Core] Anomaly Detection services can now be used in Business Activities.

## Centreon IT & Business Extensions

### 23.04.0

Release date: `April 26, 2023`

- Added the possibility to customize the login page and the banner. You can now:
  - Change the background of the login page.
  - Change the logo on the login page.
  - Display custom text on the login page.
  - Give a name to the platform, that will be visible on the login page and in the banner.
