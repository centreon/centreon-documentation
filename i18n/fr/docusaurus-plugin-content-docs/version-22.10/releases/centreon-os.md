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

### 22.10.16

Release date: `December 15, 2023`

#### Bug fixes

- [Discovery] Fixed duplication of host groups in discovery job mappers.

#### Security fixes

- [Security] Updated symfony/http-kernel dependency.
- [Security] Prevented a command injection.

### 22.10.15

Release date: `November 17, 2023`

#### Enhancements

- [API] Added the possibility to search for a service in hostGroups/serviceGroups endpoints.

#### Bug fixes

- [UX] Fixed an issue where an incorrect day was displayed in the calendar component.	
- [UI] Renamed "massive change" to "mass change" in the "More actions" selection box.
- [Recurrent Downtimes] Fixed an issue that occurred when a downtime period contained a service group and this service group was linked to a service template.
- [Ressources Status] Fixed an issue that occurred when using an h.alias filter on the list of resources.
- [Packaging] Fixed an issue where centreontrapd was configured for a poller rather than for a central on Debian.

#### Security fixes

- [Security] Fixed SQLi in a method.
- Fixed potential vulnerability in the list of discovered hosts.

### 22.10.14

Release date: `October 4, 2023`

#### Bug fixes

-	[Authentication] Fixed an LDAP connection issue due to DN case.
-	[Configuration] Fixed the visibility of services when a user with ACLs duplicates a host.
-	[Monitoring] Fixed CSV export when metric name is a SQL keyword.

### 22.10.13

Release date: `September 22, 2023`

#### Bug fixes

-	[CLAPI] Fixed the addhosttemplate function that was removing other relationships.
-	[CLAPI] Fixed a PHP warning that was displayed when using getparam on a service.
-	[Configuration] Fixed custom macro inheritance for hosts.
-	[Core] Updated svg-sanitize dependency.
-	[Resources Status] Fixed filters on hostgroups and categories that weren't returning hosts.
-	[Security] Fixed SLQi in centreonLogAction.class.php.

### 22.10.12

Release date: `August 29, 2023`

#### Enhancements

- [Core] Updated the database schema for resources table.
- [Tools] Added a script to delete duplicate entries in the host_service_relations table.

#### Bug fixes

- [API] Removed the author_id parameter from downtime endpoint to use authenticated user as author.
- [Graphs] Fixed the display of graphs layout when there is no data.
- [Packaging] Added missing PHP files to Debian packaging.
- [Packaging] Fixed an issue with incorrect rrdtool.log ownership that prevented graphs from being displayed on Debian.	

### 22.10.11

Release date: `July 28, 2023`

#### Enhancements

- [UX] Improved tooltip description in Centreon Engine configuration form for Service Check Timeout option.

#### Bug fixes

- [Administration] Fixed pagination in **Data** menu.
- [Install] Updated size of metric_name column to 1021.
- [Monitoring] Fixed data insertion where metric names were too long.
- [ResourcesStatus] Fixed CSV export when metric name contained SQL keyword.

### 22.10.10

Release date: `July 11, 2023`

#### Enhancements

- [CEIP] Improved the retrieval of Operating System name and version.
- [Configuration] Improved the icon size to adapt to resources.

#### Bug fixes

- [ACL] Fixed an issue when a recurrent downtime is edited by a user under ACL.
- [Authentication] Fixed an issue in the groups mapping management with OpenID Connect.
- [Authentication] Fixed the user's logout when the refresh token has expired for OIDC sessions.
- [Backup] Fixed partial backup that was not working in AlmaLinux 8 and Debian 11.
- [Configuration] Fixed the deletion of images when importing a configuration on a Remote Server with MAP installed.
- [Configuration] Fixed deletion/activation/deactivation/duplication of a contact when made with a French profile.
- [ResourcesStatus] Fixed CSV export when metric name contains SQL keyword.
- [ResourcesStatus] Fixed the search in filter that was not working.
- [ResourcesStatus] Fixed an issue on filter combination in Resources Status.
- [UI] Fixed the column name display in the acknowledgment description pop-up.
- [UX] Fixed a space issue between buttons.

### 22.10.9

Release date: `June 19, 2023`

#### Security fix

- [Security] Fixed the base URI change detection mechanism.

### 22.10.8

Release date: `June 5, 2023`

#### Enhancements

- [Administration] Added a button to unblock users through the user interface (for local authentication).
- [Authentication] Added the possibility to define a redirect URI for OpenID Connect authentication.
- [Packaging] Improved the default configuration for Debian packages.
- [UX] Removed UI slowdown when browser has no internet access with CEIP enabled.

#### Bug fixes

- [API] Fixed code errors and messages to improve the endpoint of password renewal.
- [API] Fixed PHP error messages on APIs authentication.
- [Authentication] Fixed a broken URL issue by removing extra spaces in endpoint definition.
- [Authentication] Fixed an LDAP authentication issue that made LDAP users in Organisational Unit with special characters unable to authenticate.
- [Authentication] Made error messages generic to improve security.
- [Authentication] Removed extra spaces in endpoint definition.
- [Backup] Fixed errors with distant DBMS in logs.
- [Configuration] Fixed a bug in trap relations with services by host groups.
- [Core] Fixed an issue when accessing the installation wizard for a new installation.
- [Install] Added missing update scripts.
- [Install] Fixed an SQL error when installing a new platform using MySQL 8 as DBMS.
- [Install] Removed a displayed error during an update.
- [LDAP] Fixed LDAP groups listing in contact groups form.
- [ResourceStatus] Fixed a filtering issue for hosts in pending state.
- [ResourceStatus] Fixed an error when opening the detail panel of a resource in downtime.
- [ResourceStatus] Fixed the h.name filter that was not returning hosts.
- [Server] Fixed a monitoring issue by updating the user running cron tasks on Debian.
- [UI] Added CSS in global style files to fix Mbi widget visibility.
- [UI] Fixed a bug blocking the "Export Configuration" process from the top banner's button when a self-signed certificate was used.
- [UI] Fixed a bug that prevented non-admin users from selecting Host Groups in some areas of Centreon (e.g. Host Discovery mappers).
- [UI] Fixed an issue preventing from saving a new filter on Resources Status with the Anomaly-detection type.
- [UI] Fixed the alignment of the top counter's export button.
- [UI] Fixed the highlight color of acknowledgement and downtime lines and changed the font color in Resources Status in dark mode.
- [UI] Fixed the issue when its not possible to save a new filter on resources status with Anomaly-detection type.
- [UI] Fixed the MBI widget visibility by adding CSS in global style files.
- [UI] Fixed the refresh icon positioning in **Administration > ACL > Reload ACL** menu.
- [UI] Removed the option to change them from User profile.
- [UI] Unifomized buttons size on legacy pages.

### 22.10.7

Release date: `March 2, 2023`

#### Bug fixes

- [CLAPI] Fixed an issue not to consider password expiration policy for excluded users.
- [Configuration] Fixed an issue in the recurrent downtimes form that caused service relations to be lost.
- [Configuration] Fixed global configuration export button in banner with OIDC authentication.
- [Configuration] Fixed an issue preventing an escalation from being updated.
- [Configuration] Fixed an issue preventing a service group from being updated.
- [Core] Fixed a blank page issue after login.
- [UI] Fixed an issue where a popup was not displayed in a legacy page with graphs.
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

### 22.10.6

Release date: `November 20, 2023`

#### Centreon Broker

##### Bug fixes

- Fixed a stability issue that could make Broker crash when BAM was enabled and the database was too slow.
- Events propagation in BAM has been improved and should be faster.

### 22.10.5

Release date: `September 26, 2023`

#### Centreon Broker

##### Bug fixes

- Fixed a bug that caused RRD graphs to not display properly when the check interval was longer than 15 minutes.
- Fixed an issue that could cause a crash when many pollers were sending check results to Broker.

### 22.10.4

Release date: `July 26, 2023`

#### Centreon Broker

##### Bug fixes

- Boolean rules optimized to work faster.

### 22.10.3

Release date: `July 3, 2023`

#### Centreon Broker

##### Enhancements

- Improved the evaluation process of BAM KPIs based on boolean expressions: if an OK result is part of an OR operation, or a CRITICAL result is part of an AND operation, Broker will return the results without waiting for the other members of the operation.
BAM trace/debug logs have also been added to boolean rules computations.

##### Bug fixes

- Fixed an exception-catching issue that caused Broker to fail inserting resources when the check_attempt was too high for the database column type.

#### Centreon Engine

##### Bug fixes

- Restored the $ADMINEMAIL$ and $ADMINPAGER$ global macros.

### 22.10.2

Release date: `June 9, 2023`

#### Centreon Broker

##### Enhancements

- On MariaDB, metrics are now inserted with a bulk prepared statement in data_bin table to improve performance.
- New performance counters have been added to the gRPC API in order to track the longest queries and statements.

##### Bug fixes

- Fixed a bug that mainly occurred at backup time: a crash could occur when MariaDB was restarted.
- Fixed a memory corruption in MySQL connection.
- Fixed a typo in the "DELETE FROM services" query.
- Fixed an incorrect query used to send perfdata with BBDO v2.
- Fixed an issue in the initial evaluation of BAs with a "ratio" type.
- Fixed concurrent access on bulk bind in unified_sql outputs.
- Fixed deadlock on TCP async use.
- Fixed inconsistency between Broker and Engine v2 loggers to fix a logger issue.
- Fixed RTDOWNTIMES external commands handling. The duration is not required anymore for fixed downtimes.
- Fixed the date displayed for last_check and other columns in Resources Status for pending resources.
- Fixed the monitoring stream acknowledgement and its type tracing.
- Fixed the rebuilding of RRD databases that could result in incomplete graphs when duplicate values were present in `data_bin`. The duplicates are now skipped to avoid this.
- Fixed uncatched exceptions in thread that broke I/O context.

#### Centreon Engine

##### Bug fixes

- Fixed the date displayed for last_check and other columns in Resources Status for pending resources.

### 22.10.1

Release date: `March 16, 2023`

#### Centreon Broker

##### Bug fix
- Fixed an issue in the Stream Connector mechanism that would not handle the BBDO v3 RRD rebuild events.

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

### 22.10.2

Release date: `July 28, 2023`

#### Bug fixes

- [Compatibility] Fixed -d option to manage database entries in centreonBIETL script.
- [Core] Fixed recurring unexpected disconnections between pollers.

### 22.10.1

Release date: `June 5, 2023`

#### Bug fixes

- [Compatibility] Fixed the compatibility between Gorgone and MBI by adding the missing no-purge option in eventStatisticsBuilder and perfdataStatisticsBuilder scripts.
- [Compatibility] Fixed an issue preventing the rebuild of MBI partial data.

#### Enhancements

- [Packaging] Improved the default configuration for Debian packages.

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon High-Availability

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon DSM

### 22.10.1

Release date: `June 5, 2023`

#### Bug fixes

- [Packaging] Fixed dsmd configuration files on Debian.

#### Enhancements

- [Packaging] Improved the default configuration for Debian packages.

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon Open Tickets

### 22.10.2

Release date: `July 28, 2023`

### Bug fixes

- Fixed a Broker query.

### 22.10.1

Release date: `June 5, 2023`

#### Bug fixes

- [API] Fixed an auto close issue in the API endpoint.
- [Server] Fixed an issue on automatic ticket creation.

### 22.10.0

Release date: `October 26, 2022`

- Compatibility with other 22.10 components.

## Centreon HA

### 22.10.1

Release date: `July 28, 2023`

#### Bug fixes

- [Packaging] Fixed packaging that had missing files from centreon-common installation.
