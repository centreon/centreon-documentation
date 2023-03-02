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

### 22.10.7

Release date: `March AA, 2023`

#### Bug fixes

- [CLAPI] Fixed an issue not to consider password expiration policy for excluded users.
- [Configuration] Fixed an issue in the recurrent downtimes form that caused service relations to be lost.
- [Configuration] Fixed global configuration export button in banner with OIDC authentication.
- [Configuration] Fixed escalation update.
- [Configuration] Fixed service group update.
- [Core] Fixed blank page after login.
- [UI] Fixed an issue where a popup does not appear in legacy page graphs.
- [UI] Fixed the issue where 99+ was displayed instead of the exact value on the top counter for values under 1000.

#### Vulnerabilities

- [Security] Fixed SQLi in Monitoring Servicegroups widget.
- [Security] Fixed SQLi in legacy monitoring pages.
- [Security] Fixed XSS vulnerability in a legacy monitoring page.

### 22.10.6

Release date: `February 22, 2023`

#### Bug fixes

- [Authentication] Added an LDAP connection timeout to avoid infinite connection.
- [Authentication] Added possibility to use token endpoint to get list of roles and groups for mapping.
- [Authentication] Fixed an LDAP authentication issue that made LDAP users unable to authenticate in certain conditions.
- [Authentication] Fixed an issue in the mixed mode to improve Web SSO feature.
- [Authentication] Fixed a PHP error in IDP response with a string instead of an array for roles list.
- [AnomalyDetection] Fixed an envelope computation error. 
- [CLAPI] Removed mandatory password for LDAP users creation.
- [Configuration] Fixed an issue that occurred when a massive change was performed on services right after one of them was disabled, causing all services to get the same host and template.
- [Configuration] Fixed an installation error when the chrony package is already installed.
- [Configuration] Fixed export of configuration when Anomaly Detection feature is configured.
- [Core] Removed deprecated DBMS option in default configuration provided by Centreon.
- [Core] Replaced an SQL statement to fix a database compatibility limitation in an update script.
- [Install] Fixed an error indicating that the timezone was not initialized during Debian package installation.
- [Install] Fixed an SQL error with MySQL 8.
- [Install] Fixed an app_key error during upgrade.
- [Install] Fixed a PHP error when using API to perform an upgrade.
- [Install] Fixed an error which prevented access to the update wizard after packages update.
- [LDAP] Fixed auto-import of users.
- [ResourceStatus] Fixed an issue where the date picker displayed duplicated dates, resulting in day shifts.
- [UI] Fixed an aesthetic issue in Resource Status table header.
- [UI] Fixed buttons and radio buttons in administration pages.
- [UI] Fixed an issue with "display last comment" option that caused high loads and caused the interface to become unresponsive.
- [UX] Fixed an issue that affected the "Pending" status in the top counter filter: when it was selected, the filter was not applied to deprecated pages.

#### Enhancements

- [Administration] Added a display of remaining disk free space where images are stored.
- Optimized queries used to display the services monitoring page.
- Optimized queries used to display the hosts monitoring page.
- Optimized queries used to display the services grid monitoring page.

### 22.10.5

Release date: `February 9, 2023`

#### Bug fixes

- Fixed a PHP quote escaping issue that occurred after upgrading to PHP 8.1

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
