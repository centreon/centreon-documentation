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

### 22.04.4

Release date : `January 20, 2023`

#### Bug fixes

- Fixed an issue preventing users to create a map with the API.
- Fixed an issue that caused server to fail to start when trying to load empty output.
- Fixed links where empty bendpoints caused maps to become not editable.
- Resource name properties are now used for links when saving maps.
- Fixed an issue that caused metric links in the same views to display the same value after the first refresh.
- Fixed server startup error due to duplicate key.
- Fixed an issue that could cause layers to not be applied properly.
- Fixed an issue that caused centreon-map-engine to require java-17-openjdk-devel rpm and prevented successful installation.
- Fixed an issue that cause modifications to resource names in editor to not be properly updated after re opening editor.

### 22.04.3

Release date: `December 28, 2022`

- Fixed "COPY FROM URL" feature from viewer.

### 22.04.2

- First release: `December 16, 2022`

The new MAP extension is now available in a full web version with a new server, under the name of MAP. The former version, including desktop client and associated server, becomes MAP Legacy.

- Web editor: Create and edit your views directly from your web browser.
- New server: Brand new server and data model providing better performance.
- Migration process: Integrated migration process of your legacy views.

## Centreon MAP Legacy

### 22.04.4

Release date : `January 20, 2023`

- No change.

### 22.04.3

- No change.

### 22.04.2

Release date: `December 16, 2022`

### Bug fixes

- Fixed a connection problem between MAP desktop client and MAP server that could lead to timeouts on large maps.
- Fixed an issue with Java 17 that caused MAP server to fail to start.
- Fixed an issue with the API preventing an authenticated user from creating a resource with an image.
- Fixed an issue with the display of line charts if the period and precision values of the chart were too large.

### Security fixes

- Actuator endpoints are now disabled by default, except for health and metrics.
- Fixed the security issue CVE-2022-42889 (Text4shell vulnerability).

### Enhancements

- Updated the diagnostic.sh script to handle Java 17 installation instead of returning an error.
- MAP extension configuration now requires only one MAP server address to be configured.

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

### 22.04.2

Release date: `September 14, 2022`
 
- [Install] Fixed installation of module if 24x7 timeperiod is missing
- [Banner] Fixed display of empty skeleton
- [UI] Fixed header and skeleton UI instability
- [UI] Change BAM widget background font color to white when dark mode is active
- [Configuration] Refresh the BAM configuration page when adding a new BA

### 22.04.1

Release date: `May 25, 2022`

- Fixed the blank page when opening BAM configuration menu

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon MBI

### 22.04.3

Release date: `October 25, 2022`

#### Bug fixes

- Fixed an issue with report publication that could cause LDAP users or local users without passwords to not receive the email

### 22.04.2

Release date: `October 12, 2022`

#### Security fixes

- Fixed multiple vulnerabilities in report generation

### 22.04.1

Release date: `July 5, 2022`

#### Bug fixes

- Fixed an issue related to the new password policy that would prevent reports from being generated.

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon Auto Discovery

### 22.04.1

Release date: `August 10, 2022`

#### Improvements

- [Configuration] When a host receives no host template from the mappers, the default template that is hard-coded in the Plugin Pack will be applied to this host

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
