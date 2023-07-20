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

### 23.04.1

Release date: `July 20, 2023`

#### Enhancements

- [Licensing] Improved automatic license renewal.
- [UI] Make metric link modal labels more explicit by replacing "metric 1" and "metric 2" by "metric in" and "metric out".
- [UI] You can now hide the label of a resource.
- [UX] You can now duplicate maps.
- [Viewer] You can now define a label for a URL shape.
- [Widget] Fixed incorrect behavior when saving the MAP widget.

#### Bug fixes

- [Editor] Fixed a bug where empty metric names were blocking edition.
- [Editor] Fixed metric links when no metric name is filled in.
- [Server] Enable to parse metric from Broker NEB packets.
- [Server] Fixed a critical error when editing a Geo view.
- [Server] Fixed an issue causing MAP server to crash at start up due to service group loading.
- [Server] Fixed an issue preventing to save a map with "not a diagram" error message.
- [Server] Fixed an issue which made diagnostic to raise an error if a custom URI is used.
- [UI] Fixed cosmetic issues on breadcrumb chips.
- [UI] Fixed the selection of layers in Geo views.
- [UI] Fixed view freezes beyond 500 elements.
- [Viewer] Fixed a regression causing output not to be displayed in widget output.
- [Viewer] Fixed an issue making links not to be reactivated when the associated resource goes back on line.
- [Viewer] Fixed an issue preventing hosts from being displayed on Geo views.
- [Viewer] Fixed an issue preventing the font color from being applied at the first edition.
- [Viewer] Fixed an issue that prevented graphs from being displayed for non admin users.
- [Widget] Fixed incorrect behavior when saving the MAP widget.

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon BAM

### 23.04.2

Release date: `July 20, 2023`

#### Enhancements

- [Rules] Fixed boolean rules when resource contains boolean operator in its name.

#### Bug fixes

- [Rules] Fixed boolean rules when resource contains boolean operator in its name.
- [UI] Fixed the column name display in the acknowledgment description pop-up.
- Fixed retrieving list of BAs for users with ACL.

### 23.04.1

Release date: `June 13, 2023`

#### Bug fixes

- Fixed an issue that caused KPIs to be unavailable for selection when configuring a Business Activity as a non-admin user.
- Fixed an issue that caused resources to be displayed for a single ACL group when multiple ACL groups were selected during the BA creation by a non-admin user.

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

### 23.04.1

Release date: `July 20, April 2023`

#### Enhancements

- [Licensing] Improved automatic license renewal.

#### Bug fixes

- [Install] Fixed missing API routes after an update of Centreon.

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

### 23.04.1

Release date: `July 20, 2023`

#### Enhancements

- [Licensing] Improved automatic license renewal.
- [UI] Improved license upload modal.

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon Anomaly Detection

### 23.04.1

Release date: `June 13, 2023`

#### Bug fixes

- Fixed an issue that caused KPIs to be unavailable for selection when configuring a Business Activity as a non-admin user.
- Fixed an issue that caused resources to be displayed for a single ACL group when multiple ACL groups were selected during the BA creation by a non-admin user.

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
