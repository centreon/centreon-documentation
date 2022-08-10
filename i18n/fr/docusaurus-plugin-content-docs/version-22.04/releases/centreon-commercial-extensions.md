---
id: centreon-commercial-extensions
title: Extensions Commerciales
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les **extensions commerciales** de Centreon.

> Il est important de mettre à jour en utilisant la documentation adéquate de mise à jour et de lire attentivement les
> notes de mise à jour afin d'être au courant des changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez fait.

Pour faire des demandes d'évolutions ou reporter des bugs sur les extensions commerciales, veuillez contacter le support.

## Centreon MAP

### 22.04.1

Release date: `July 13, 2022`

#### Bug fixes

- Updated the notification number field to match the central database schema.

#### Enhancements

- The diagnostic.sh script is now compatible with Debian.
- Updated the connected server label to 'Configured server' for more clarity.
- BBDOv3 is now enabled by default at installation and after the MAP server upgrade, to match the central Broker's new 22.04 configuration.

### 22.04.0

> If you have just installed Centreon 22.04 or upgraded your platform to this version, be aware that the platform now uses the new BBDO v3 protocol. [Configure MAP](../graph-views/install.md#configuration) to use it.

- Compatibility with other 22.04 components.

## Centreon BAM

### 22.04.1

Release date: `May 25, 2022`

- Fixed the blank page when opening BAM configuration menu

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon MBI

### 22.04.1

Release date: `July 5, 2022`

#### Bug fixes

- Fixed an issue related to the new password policy that would prevent reports from being generated.

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon Auto Discovery

### 22.04.1

Release date: `null`

#### Improvements

- [Configuration] Fixed empty host template from mappers (Host Discovery) by using default template form Plugin Packs discovery rule

#### Bug fixes

- For some host discovery providers where no credentials were actually required, the job creation wizard no longer demands to enter credentials
- Fixed a front-end issue that caused existing Host Discovery jobs to lose all their parameters when clicking on **Schedule**


### 22.04.0

#### Enhancements

- The Centreon Host Discovery engine can now perform changes on existing hosts when using the automatic policy. This means that existing hosts may now gain templates, groups, categories and macros, and get monitored by a different server.
- Centreon Host Discovery can now deploy the new monitoring configuration as soon as the job is run in the background.

## Centreon Plugin Packs Manager

### 22.04.0

#### Enhancements

- The Plugin Packs now provide the package name and version of the required plugins, and Gorgone will automatically install the required plugins on your pollers. This means you don't need to install the Centreon Plugins manually on each poller anymore.

## Centreon License Manager

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon Anomaly Detection

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon Data Source For Grafana

- [Grafana] Centreon data source
