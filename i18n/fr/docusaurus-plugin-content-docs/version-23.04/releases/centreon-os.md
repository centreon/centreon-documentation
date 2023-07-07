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

Retrouvez plus de détails sur la version 23.04 dans notre [post de blog](https://www.centreon.com/fr/centreon-23-04-decouvrez-les-nouveautes-a-venir-ce-printemps/).

## Centreon Web

### 23.04.5

Release date: `soon`

#### Enhancements

- [Authentication] User attributes received from the Identity Provider are now added to the Centreon login file when debug is enabled.
- [CEIP] Improved the retrieval of Operating System name and version.
- [Configuration] Improved the icon size to adapt to resources.
- [UX] Improved the Service Check Timeout tooltip in **Configuration > Pollers > Engine configuration > Log options**.

#### Bug fixes

- [ACL] Fixed an issue when recurrent downtime is edited by a user under ACL.
- [API] Fixed an API issue for the Centreon modules management.
- [Authentication] Fixed an issue in the groups mapping management with OpenID Connect.
- [Authentication] Fixed an issue in groups mapping relations with SAML.
- [Authentication] Fixed an issue with JWT decoding when encoded in base64url.
- [Authentication] Fixed a "URL not found" error message when logging out.
- [Authentication] Fixed the user's logout when the refresh token has expired for OIDC sessions.
- [Backup] Fixed partial backup that was not working in AlmaLinux 8 and Debian 11.
- [Configuration] Fixed deletion/activation/deactivation/duplication of a contact when made with a French profile.
- [Install] Fixed missing central ID in Centreon Gorgone configuration file.
- [Install] Fixed permissions on Symfony cache.
- [Install] Fixed rights on centreon_traps directory for Debian.
- [Install] Fixed rights on logs directory for Debian.
- [ResourcesStatus] Fixed CSV export when metric name contains SQL keyword.
- [ResourcesStatus] Fixed the search in filter that was not working.
- [ResourcesStatus] Fixed filters definition to display all services including Anomaly Detection and Meta Services from top counter links.
- [ResourcesStatus] Fixed a bug in the disacknowledgment process that made the user interface display the wrong acknowledgement comment.
- [ResourcesStatus] Fixed an issue on filter combination in Resources Status.
- [UI] Fixed the column name display in the acknowledgment description pop-up.
- [UX] Fixed a space issue between buttons.
- [Web] Fixed the About page display.

### 23.04.4

Release date: `June 20, 2023`

#### Bug fix

- [Update] Fixed a topology_url_substitute error caused by a missing request in update scripts that resulted in a blank screen after an update from 23.04.1.

### 23.04.3

Release date: `June 19, 2023`

#### Security fix

- [Security] Fixed the base URI change detection mechanism.

### 23.04.2

Release date: `June 7, 2023`

#### Enhancements

- [Administration] Added a button to unblock users through the user interface (for local authentication).
- [Authentication] Fixed the custom endpoint definition for OpenID Connect.
- [Install] Removed PHP warning during the installation wizard.
- [Packaging] Improved the default configuration for Debian packages.
- [UX] Removed UI slowdown when browser has no internet access with CEIP enabled.

#### Bug fixes

- [API] Fixed code errors and messages to improve the password renewal endpoint.
- [Authentication] Fixed the custom endpoint call with OpenID Connect.
- [Authentication] Fixed the HTTP method for custom endpoints for OpenID.
- [Authentication] Removed the password expiration policy for LDAP authentication.
- [Configuration] Fixed a bug in trap relations with services by host groups.
- [Core] Fixed the display of error messages regarding the connection to DBMS.
- [Install] Fixed the snmptrapd configuration for Debian.
- [LDAP] Fixed the LDAP groups listing in the contactgroups form.
- [ResourceStatus] Fixed a filtering issue for hosts in pending state.
- [ResourceStatus] Fixed the h.name filter that was not returning hosts.
- [UI] Fixed a bug that prevented non-admin users from selecting Host Groups in some areas of Centreon (e.g. Host Discovery mappers).
- [UI] Fixed the refresh icon positioning in **Administration > ACL > Reload ACL** menu.
- [UI] Uniformized the buttons size on legacy pages.

### 23.04.1

Release date: `May 26, 2023`

#### Bug fixes

- [Administration] Removed deprecated "Image Directory" option which deleted warning messages when generating configuration.
- [Authentication] Fixed retrieval of information for applying conditions, roles and groups with OpenID Connect.

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

### 23.04.1

Release date: `July 5, 2023`

#### Centreon Broker

##### Bug fixes

- Changed the default value of `deletion_time` for acknowledgements to `null` to avoid displaying abnormal dates in the interface.
- Fixed a bug that mainly occurred at backup time: a crash could occur when MariaDB was restarted.
- Fixed an exception-catching issue that caused Broker to fail inserting resources when the check_attempt was too high for the database column type.
- Fixed the date displayed for last_check and other columns in Resources Status for pending resources.
- Fixed the rebuilding of RRD databases that could result in incomplete graphs when duplicate values were present in `data_bin`. The duplicates are now skipped to avoid this.

##### Enhancements

- In MariaDB, data in the data_bin table are now inserted with a bulk prepared statement.
- The check_command field had been removed from Broker (host|service)_status events, making it temporarily unavailable for LUA stream connectors. It is now available in [Broker's cache](../developer/developer-broker-stream-connector.md#the-broker_cache-object).
- Improved the evaluation process of BAM KPIs based on boolean expressions: if an OK result is part of an OR operation, or a CRITICAL result is part of an AND operation, Broker will return the results without waiting for the other members of the operation.
- New performance counters have been added to the gRPC API in order to track the longest queries and statements.

#### Centreon Engine

##### Bug fixes

- [Packaging] Added the `/var/log/centreon-engine/archives` directory that was missing on Debian installations.
- Fixed the handling of RTDOWNTIMES external commands. The duration is not required anymore for fixed downtimes.
- Restored the $ADMINEMAIL$ and $ADMINPAGER$ global macros.

### 23.04.0

Release date: `April 26, 2023`

#### Centreon Engine

Compatibility with other 23.04 components.

#### Centreon Broker

- Converted all BBDO messages to Protobuf: the BBDO v2 protocol was entirely based on buffers with a static structure. We converted all the event message types into Protobuf classes, in order to easily add new fields or new message types in the future.

## Centreon Gorgone

### 23.04.3

Release date: `June 22, 2023`

#### Bug fix

- [Core] Fixed a recurring unexpected disconnection between pollers caused by an internal key rotation.

### 23.04.2

Release date: `June 7, 2023`

#### Enhancement

- [Packaging] Improved the default configuration for Debian packages.

#### Bug fix

- Fixed a recurring unexpected disconnection between pollers.

### 23.04.1

Release date: `May 26, 2023`

#### Bug fixes

- [Server] Fixed an SQL query that prevented the process from starting.

### 23.04.0

Release date: `April 26, 2023`

Compatibility with other 23.04 components.

## Centreon High Availability

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon DSM

### 23.04.2

Release date: `soon`

#### Bug fixes

- Fixed an unreplaced variable in cron definition.

### 23.04.1

Release date: `June 7, 2023`

#### Enhancement

- [Packaging] Improved the default configuration for Debian packages.

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon Open Tickets

### 23.04.1

Release date: `June 7, 2023`

#### New feature

- [Widget] Added the possibility to filter by poller.

#### Bug fix

- [API] Fixed an auto close issue in the API endpoint.

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.
- Added Schedule Check option & auto close popup capability
