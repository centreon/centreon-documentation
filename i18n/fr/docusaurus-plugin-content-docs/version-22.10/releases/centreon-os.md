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

Retrouvez plus de détails sur la version 22.10 dans notre [post de blog](https://www.centreon.com/blog/centreon-22-10-les-nouveautes).

## Centreon Web

### 22.10.4

Release date: `January 10, 2023`

#### Bug fixes

- [Core] Fixed update scripts that could cause an error during poller configuration export after update from 22.10.2 to 22.10.3

### 22.10.3

Release date: `January 9, 2023`

#### Enhancements

- [APIv2] Added vault configuration endpoint

#### Bug fixes

- Fixed a bug that blocked exporting multiple pollers' configuration at the same time with a shared severity
- [Authentication] Fixed authentication with complete URL for token endpoint
- Fixed bug where it's impossible to filter on hosts and/or services in Centreon 22.10.
- Fixed an ACL bug allowing users to modify users even when they had read-only permissions
- Acknowledgement/downtimes failed without returning an error when the character case for the resource was wrong
- Fixed a bug linked to forbidden characters in Engine object names that could strip the '0', '3' and '9' digits from host names
- Allow users to configure Broker's global maximum retention
- Fixed an issue that caused months to be missing from the calendar selection
- Fixed bug with pagination on event log page
- Fixed recurrent downtime editing issues with disabled objects
- [Resources Status] Fixed an issue causing ACL action "Display executed command by monitoring engine" to not be applied on the Resources Status page
- Fixed "view contact notifications" window
- [API] Fixed API access when user doesn't have access to UI
- Fixed an issue where the pagination was not displayed in all legacy pages
- [Install] Fixed app_key error during upgrade

#### Security fixes

- [Core] Fixed vulnerabilities in functions.js file
- [Configuration] Sanitized queries in the list of services by host group
- [Configuration] Sanitized queries in the list of host categories
- [Configuration] Sanitized queries in the list of commands
- [Core] Fixed vulnerabilities in ajaxLdapSearch.js file
- [Configuration] Sanitized queries in the list of Broker configurations
- [Core] Fixed vulnerabilities in color_picker.php
- [Core] Fixed vulnerabilities in pathway.php
- [Core] Fixed vulnerabilities in color_picker_mb.php
- [Core] Fixed vulnerabilities in rename.php
- [Configuration] Fixed vulnerabilities in services listing
- [Configuration] Fixed vulnerabilities in host form
- Fixed an issue with how users' roles were retrieved.

### 22.10.2

Release date: `December 7, 2022`

#### Bug fixes

- Fixed an issue with large SQL queries that caused the Centreon interface to become unavailable
- [Install] Added missing update scripts

### 22.10.1

Release date: `November 4, 2022`

#### Bug fixes

- Fixed an issue with Resource Status that could cause some resources to be displayed twice.

### 22.10.0

Release date: `October 26, 2022`

#### Enhancements

- [ACL] ACLs on actions are now updated in real time for connected users
- [ACL] "Read/Write" menu access ACL regarding Poller configuration has been split into two available actions:
  "Create and edit" and "Delete"
- [API] Added an endpoint to perform all web updates
- [Authentication] Improved authentication via OpenID Connect by adding conditions
- [Authentication] Improved contact groups management via OpenID Connect:
  - Manual management of relationships between a user and contact groups
  - Automatic management of relationships between a user and contact groups based on values retrieved from the
    identity provider
- [Authentication] Improved roles management via OpenID Connect:
  - Manual management of relationships between a user and ACL groups
  - Automatic management of relationships between a user and ACL groups based on identity provider values
- [Configuration] Improved the default Engine logger options for newly installed central servers and new pollers created
  with the wizard
- [Configuration] New Broker input/output stream types available, designed to support the new gRPC stream capability of
  Broker, but that can also be used for the legacy BBDO over TCP protocol:
  - BBDO Server: configures a server input or output, displaying only relevant fields for this purpose
  - BBDO Client: configures a client input or output, displaying only relevant fields for this purpose
- [Configuration] Some obsolete parameters have been removed from the Engine configuration menu
- [Install] Added dependency management between modules during installation, update and deletion
- [Install] Improved error handling during installation
- [Install] Removed "Centreon Web Directory" parameter and use Apache configuration instead
- [UI] Improved Centreon light and dark themes
- [UI] Relabeled and improved tooltips for some fields in the Hosts, Host Templates, Host Groups, Services and Service
  Templates configuration forms
- [UI] Reworked the banner to be more responsive
- [UI] Reworked the way custom views tabs are managed
- [UX] Changing themes is now possible by clicking on the profile icon
- [UX] The quick export button is now available by default for all users that have the admin privilege or the required
  ACL action access. Deploying a configuration is now simpler for all users.
- [Resources Status] Added hosts and services categories management (Detail tiles, Listing filter)
- [Resources Status] Added hosts and services severities management (Logos, level, Detail tiles, Listing filter)
- [Event logs] Reworked CSV exporter in event logs to manage high volumetry
- [Resources Status] Introduced CSV export in Timeline and Graphs
- [Resources Status] Added new Parent Alias column and filter in listing for services
- [Resources Status] Added cosmetic enhancements to the Timeline UI in Resources Status


#### Performance

- Move to PHP 8.1
- The "conf changed" flag in the Poller configuration menu now relies on a faster database query, improving the time to display the page

#### Breaking changes

> The configuration of authorizations via the OpenID Connect protocol has evolved. Automatic addition to a contact
> group and role management have been improved. It is necessary to review your OpenID Connect configuration.

> In the /monitoring/resources API, the ‘severity_level’ api return key has been replaced by a json object called ‘severity’, containing the id, level, name and icon of the severity.

## Centreon Collect

### 22.10.0

Release date: `October 26, 2022`

#### Centreon Engine

##### Enhancements

- [Settings] Changed the log level of some notification log messages
- [Settings] Optimized the delay time by setting the default maximum number of queries per transaction to 2000 (following obervations on platforms in the field)


- [Code] Improved the management of `timed_events` objects
- [Code] Improved the memory management of downtimes
- [Code] Calls to the `atoi()` C function have been replaced by more secure functions

#### Centreon Broker

##### Enhancements


- [Communication] Added two new Broker streams to provide simpler configuration and support the gRPC protocol
- [Communication] Added the ability to limit the maximum total size of Broker retention files using the event_queues_total_size global parameter
- [Communication] Changed the default retry_interval from 60 to 15, in the configuration WUI as well as in the source code for a shorter time to reconnect


- [gRPC API] The log levels can be accessed and changed without reloading thanks to the `GetLogInfo {}` and `SetLogLevel {"logger": "<logger>", "level": "<log level>"}` gRPC commands
- [gRPC API] All traces of a deleted poller can be removed permanently thanks to the `RemovePoller {}` gRPC command


- [Code] Calls to the `atoi()` C function have been replaced by more secure functions

## Centreon Gorgone

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon High-Availability

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon DSM

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon Open Tickets

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.
