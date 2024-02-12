---
id: centreon-core
title: Centreon Core
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les éléments **Centreon Core**.

> Il est important de mettre à jour en utilisant la documentation adéquate de mise à jour et de lire attentivement les
> notes de mise à jour afin d'être au courant des changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez faits.

Pour faire des demandes d'évolutions ou signaler des bugs sur les extensions commerciales, vous pouvez vous rendre sur
notre [Github](https://github.com/centreon/centreon/issues/new/choose).

## Centreon Web

### 22.04.21

Release date: `February 12, 2024`

#### Security fix

- [API] Fixed a visibility issue on configuration/users endpoint.
- [Security] Fixed XSS vulnerability

### 22.04.20

Release date: `January 11, 2024`

No changes for this module in this version.

### 22.04.19

Release date: `January 2, 2024`

#### Security fix

- [Security] Fixed an SQLi vulnerability.

### 22.04.18

Release date: `December 15, 2023`

#### Security fix

- [Security] Prevented a command injection.

### 22.04.17

Release date: `November 20, 2023`

#### Bug fixes

- [Ressources Status] Fixed an issue that occurred when using an h.alias filter on the list of resources.
- [Install] Fixed SQL permissions to allow the "centreon" database user to use MBI.

#### Security fix

- [Security] Fixed SQLi in a method.

### 22.04.16

Release date: `September 25, 2023`

#### Bug fixes

-	[Core] Updated svg-sanitize dependency.
-	[Core] Updated symfony/http-kernel dependency.
-	[Security] Fixed SLQi in centreonLogAction.class.php.

### 22.04.15

Release date: `August 28, 2023`

#### Enhancements

- [Core] Updated the database schema for resources table.

#### Bug fixes

- [API] Removed the author_id parameter from downtime endpoint to use authenticated user as author.

### 22.04.14

Release date: `June 19, 2023`

#### Security fix

- [Security] Fixed the base URI change detection mechanism.

### 22.04.13

Release date: `June 8, 2023`

#### Enhancements

- [Authentication] Added the possibility to define a redirect URI for OpenID Connect authentication.
- [Packaging] Improved the default configuration for Debian packages.
- [UX] Removed UI slowdown when browser has no internet access with CEIP enabled.

#### Bug fixes

- [API] Fixed PHP error messages on authentication APIs.
- [API] Fixed code errors and messages to improve the password renewal endpoint.
- [Authentication] Fixed an LDAP authentication issue that made LDAP users in Organisational Units with special characters unable to authenticate.
- [Authentication] Made error messages generic to improve security.
- [Authentication] Fixed a broken URL issue by removing extra spaces in endpoint the definition.
- [Backup] Fixed errors with distant DBMS in logs.
- [Configuration] Fixed a bug in trap relations with services by host groups.
- [Configuration] Fixed the deletion of images when importing a configuration on a Remote Server with MAP installed.
- [Core] Fixed an issue when accessing the installation wizard for a new installation.
- [Install] Fixed an SQL error when installing a new platform using MySQL 8 as DBMS.
- [Install] Removed a displayed error during an update.
- [Install] Fixed rights on the centreon_traps directory for Debian.
- [Install] Fixed the snmptrapd configuration for Debian.
- [LDAP] Fixed LDAP groups listing in contact groups form.
- [Packaging] Fixed an unreplaced variable in the cron definition.
- [Packaging] Fixed the packaging of the PHP configuration file for Debian.
- [ResourceStatus] Fixed an error when opening the detail panel of a resource in downtime.
- [Server] Fixed a bug that prevented non-admin users from selecting Host Groups in some areas of Centreon (e.g. Host Discovery mappers).

### 22.04.12

Release date: `March 2, 2023`

#### Bug fixes

- [CLAPI] Fixed an issue not to consider password expiration policy for excluded users.
- [Configuration] Fixed an issue in the recurrent downtimes form that caused service relations to be lost.
- [Configuration] Fixed global configuration export button in banner with OIDC authentication.
- [Core] Fixed a blank page issue after login.
- [UI] Fixed an issue where a popup was not displayed in a legacy page with graphs.

#### Vulnerabilities

- [Security] Fixed SQLi in Monitoring Servicegroups widget.
- [Security] Fixed SQLi in legacy monitoring pages.
- [Security] Fixed XSS vulnerability in a legacy monitoring page.

### 22.04.11

Release date: `February 20, 2023`

#### Bug fixes

- [Authentication] Added LDAP connection timeout to avoid infinite connection.
- [Authentication] Fixed LDAP authentication issue that made LDAP users unable to authenticate in certain conditions.
- [Authentication] Fixed an issue in the mixed mode to improve Web SSO feature.
- [CLAPI] Removed mandatory password for LDAP users creation.
- [Configuration] Fixed an issue that occurred when a massive change was performed on services right after one of them was disabled, causing all services to get the same host and template.
- [Configuration] Fixed an installation error when the chrony package is already installed.
- [Configuration] Fixed export of configuration when Anomaly Detection feature is configured.
- [Core] Fixed SQL queries when databases names contain dash.
- [Core] Removed deprecated DBMS option in default configuration provided by Centreon.
- [Core] Replaced an SQL statement to fix a database compatibility limitation in an update script.
- [Install] Added missing gettext dependency for Debian.
- [Install] Fixed an SQL error with MySQL 8.
- [Install] Removed app_key field from configuration database.
- [LDAP] Fixed auto-import of users.
- [Provider] Fixed a fatal PHP error on iTop rule form when group is not an array.
- [ResourceStatus] Fixed date picker causing duplicated dates.
- [ResourceStatus] Fixed an issue that made the acknowledgement still active in Resource Status after a disacknowledgement or when service/host returned to OK/UP status.
- [UI] Fixed an issue with "display last comment" option that caused high loads and caused the interface to become unresponsive.
- [UX] Fixed an issue that affected the "Pending" status in the top counter filter: when it was selected, the filter was not applied to deprecated pages.
- [UX] Fixed visual inconsistencies in some menus.

#### Enhancements

- Optimized queries used to display the services monitoring page.
- Optimized queries used to display the hosts monitoring page.
- Optimized queries used to display the services grid monitoring page.

#### Security

- [CLAPI] Fixed encoding issue.
- Fixed XSS vulnerability reflected in service-monitoring widget.

### 22.04.10

Release date: `February 6, 2023`

#### Bug fixes

- Fixed a PHP quote escaping issue that occurred after upgrading to PHP 8.1

### 22.04.9

Release date: `January 31, 2023`

#### Bug fixes

- [Install] Fixed app_key error during upgrade

### 22.04.8

Release date: `January 16, 2023`

#### Enhancements

- A new API endpoint is now available to update a Centreon platform. This allows updates to take place without having to go through the Centreon Update Web Wizard.
- [CEIP] Improved telemetry to know configured authentication options

#### Bug fixes

- [Administration] Access group fields can now be empty for OpenID Connect configuration
- Fixed a bug that blocked exporting multiple poller configurations at the same time with a shared severity
- [ResourceStatus] Fixed an issue that made users unable to disacknowledge services
- [Authentication] Fixed authentication with complete URL for token endpoint
- Fixed an ACL issue with user modification permissions
- Fixed an issue causing acknowledgement/downtimes to fail without returning an error when the character case for the resource was wrong
- Fixed a bug linked to forbidden characters in Engine object names that could strip the '0', '3' and '9' digits from host names
- [Authentication] Fixed user theme retrieval via OpenID Connect login
- [Core] The v2 API now handles React pages.
- Fixed an issue that caused months to be missing from the calendar selection
- Fixed an issue where trying to log in to push the web upgrade/update does not return the expected error message anymore.
- Fixed issue where graphs could not be exported on the performance page.
- [Configuration] Fixed possibility to disable contact/contact group additive inheritance if not yet configured
- Fixed an issue causing the service icons on the widgets to not be visible
- [ResourceStatus] Fixed the display of commands in the service details panel
- Fixed an issue preventing a user to edit a recurrent downtime if the linked host group is disabled
- [Monitoring] Removed obsolete code to export graphs in CSV
- [ResourcesStatus] Fixed an issue causing ACL action "Display executed command by monitoring engine" to not be applied on the Resources Status page
- Fixed an issue with "view contact notifications" window
- [Administration] Fixed access to provider configuration endpoint using ACL
- [API] Fixed API access when user doesn't have access to UI
- [Install] Fixed app_key error during upgrade

#### Security fixes

- [Core] Fixed vulnerabilities in functions.js file
- [Configuration] Sanitized queries when displaying logos
- [Configuration] Sanitized queries in the list of services by host group
- [Configuration] Sanitized queries in service categories
- [Configuration] Sanitized queries in the list of meta services
- [Configuration] Sanitized queries in the list of host categories
- [Configuration] Sanitized queries in the list of commands
- [Configuration] Sanitized queries in the list of trap groups
- [Core] Fixed vulnerabilities in ajaxLdapSearch.js file
- [Configuration] Sanitized queries in the list of Broker configurations
- [Configuration] Sanitized queries in the list of service groups
- [Core] Fixed vulnerabilities in color_picker.php
- [Core] Fixed vulnerabilities in pathway.php
- [Core] Fixed vulnerabilities in color_picker_mb.php
- [Core] Fixed vulnerabilities in rename.php
- [Configuration] Fixed vulnerabilities in services listing
- [Configuration] Fixed vulnerabilities in host form

### 22.04.7

Release date: `October 12, 2022`

#### Bug fixes

- [Install] Fixed incorrect deletion of Centreon Broker output resulting in the loss of graph updates
- [Install] Fixed SQL update on Centreon real time database

#### Security fixes

- [Authentication] Improved autologin access

### 22.04.6

Release date: ` September 30, 2022`

#### Bug fixes

- [Administration] Fixed not mandatory access group for OpenId Connect configuration
- [Authentication] Fixed user theme retrieval via OpenID Connect login
- [Configuration] Fixed a bug that caused the reactivation of disabled hosts, ignoring the value set by the user in the autodiscovery wizard
- [Configuration] Fixed export of RRDcached path in Centreon Broker configuration
- [Core] Improved database storage to avoid blocking Broker when maximum values are reached
- [Core] Removed obsolete code in ACL configuration listing
- [Core] Removed obsolete code in Criticality class
- [Core] Removed obsolete code in legacy service detail page
- [Core] Removed obsolete code in monitoring common functions
- [Core] Removed unused mechanism for modules to add restart/reload actions after restart of pollers

#### Security fixes

- [Administration] Sanitized and bound media import queries
- [CLAPI] Sanitized and bound Centreon hostgroup class queries
- [CLAPI] Sanitized and bound Centreon Service class queries
- [CLAPI] Sanitized and bound LDAP listing queries
- [Configuration] Fixed SQLi in Centreon Broker configuration menu
- [Configuration] Fixed SQLi in contact groups form
- [Configuration] Sanitized and bound Centreon hostgroups class queries
- [Configuration] Sanitized and bound Centreon Notification class queries
- [Configuration] Sanitized and bound Knowledge Base host listing queries
- [Configuration] Sanitized and bound SNMP Traps groups configuration queries
- [Configuration] Sanitized and bound SNMP Traps listing queries
- [Configuration] Sanitized and bound service by hostgroups listing queries
- [Configuration] Sanitized and bound Host categories listing queries
- [Configuration] Sanitized and bound services listing queries
- [Core] Sanitized and bound menu topology listing queries
- [Install] Sanitized and bound default configuration queries

### 22.04.5

Release date: `September 20, 2022`

#### Enhancements

- [UX] Improved usability when accessing logs and reports button in details panel

#### Bug fixes

- [Administration] Fixed selection of options in second select box in ACL Group configuration page
- [Authentication] Fixed contact_location when creating a session from OpenId Connect which made it impossible to access MBI jobs
- [Configuration] Fixed an error in the Configuration > Services > Templates menu causing HTML code to be displayed
- [Configuration] Fixed error that occurred when duplicating a Remote Server
- [Core] Cleaned code in forMyAccount
- [Core] Corrected escapeSecure usage
- [Core] Fixed database partitioning for Aurora DBMS
- [Install] Fixed Centreon Web installation using sources and silent mode
- [Install] Fixed default PHP-FPM configuration on Debian
- [Resources Status] Fixed the "Alias" tile that was not displayed in the details panel
- [Resources Status] Fixed broken link to host right panel
- [UI] Fixed HTML code appearing instead of SVG icon with Firefox
- [UI] Fixed french typo in OpenID Connect configuration form
- [UI] Fixed untranslated label in Resources Status
- [Widgets] Restored possibility to not select a poller in preferences

#### Security fixes

- [Administration] Sanitized and bound Centreon ACL class queries
- [CLAPI] Added a check to verify that the user has the admin role
- [CLAPI] Sanitized and bound CLAPI poller configuration queries
- [Configuration] Fixed SQLi in poller's resource creation
- [Configuration] Sanitized and bound Meta Service configuration queries
- [Configuration] Sanitized and bound command configuration queries
- [Configuration] Sanitized and bound graph configuration queries
- [Configuration] Sanitized and bound queries in contactgroup file
- [Configuration] Sanitized and bound queries in listServiceCategories file
- [Configuration] Sanitized and bound queries in listVirtualMetrics file
- [Configuration] Sanitized and bound queries in service argumentsXml file
- [Configuration] Sanitized and bound queries in service host categories file
- [Configuration] Sanitized and bound queries in servicegroup_dependency file
- [Configuration] Sanitized and bound templates of service listing queries
- [Monitoring] Fixed XSS vulnerability in deprecated services status details page
- [Upgrade] Sanitized and bound queries in update-22.04.0-beta.1 file

### 22.04.4

Release date: `September 2, 2022`

#### Bug fixes

- [Core] Fixed potential empty values in `index_data`.`special` that could block Centreon Broker
- [Install] Fixed update process that threw an "unable to execute SQL query" error

### 22.04.3

Release date: `August 25, 2022`

#### Enhancements

- [API] Added endpoint to perform all web updates
- [Authentication] Added a log message when an unregistered user tries logging in
- [Configuration] Use API to select metrics in virtual metrics configuration form
- [UI] Reduce spacing and align access buttons in user menu

#### Bug fixes

- [APIv1] Using the CLAPI import function no longer results in a PHP fatal error for the mentioned versions
- [Administration] Fixed consistency of ACLs with new poller creation wizard structure
- [Configuration] Fixed a regression: multiple trap definitions can use the same OID again
- [Cron] Fixed SQL queries when database names contain a dash
- [Install] Make it possible to connect as user centreon-engine for Debian packaging
- [Install] Fixed Debian packages build when npm is not installed
- [Install] Fixed dependency name for Debian packaging
- [Monitoring] Fixed deletion of comments
- [Monitoring] Fixed the bug that canceled the display of text in graphics after an export in png
- [UI] Fixed OpenID configuration form with Safari
- [UI] Fixed dark mode theme switch
- [Widget] Fixed hostgroup multiple selection

#### Security fixes

- [Administration] Sanitized SQLi in media synchronization
- [Administration] Sanitized and bound ACL menus definitions queries
- [Administration] Sanitized and bound Auth class queries
- [Administration] Sanitized and bound queries in ACL actions definition
- [Configuration] Fixed an XSS vulnerability in the Broker configuration page
- [Configuration] Fixed an XSS vulnerability in the service template form
- [Configuration] Sanitized and bound hosts dependencies configuration queries
- [Configuration] Sanitized and bound queries in Centreon Broker configuration listing
- [Configuration] Sanitized and bound queries in CentreonXMLBGRequest class
- [Configuration] Sanitized and bound queries in Meta Services dependency configuration
- [Configuration] Sanitized and bound queries in generateImage file
- [Configuration] Sanitized and bound queries in hostgroups dependency configuration
- [Configuration] Sanitized and bound service configuration queries
- [Configuration] Sanitized and bound service dependency queries
- [Core] Clean code in centreonUser.class.php
- [Core] Remove unused appKey feature
- [Monitoring] Sanitized SQLi in Centreon centreonGraph class

### 22.04.2

Release date: `August 3, 2022`

#### Bug fixes

- [Upgrade] Fixed Symfony cache rebuild during upgrade

### 22.04.1

Release date: `July 28, 2022`

#### Enhancements

- [Administration] Added consistency in ACLs with the new structure of the poller creation wizard
- [Authentication] Added the permission to import automatically new users using the OpenId Connect protocol
- [Authentication] Applied an ACL Group(s) definition on login for OpenID Connect users
- [Configuration] Extended the size of the URL, Notes and Action URL fields to avoid truncating long URLs
- [Core] Properly managed the switch between Resource Status repositories
- [Install] Improved error handling during installation
- [UX] Improved the OpenId Connect form

#### Bug fixes

- [API] Fixed MBI APIs with the latest version of Centreon
- [Administration] Fixed the display of the end date of the licenses
- [Administration] Fixed the scrolling when reducing the screen size to access all items
- [Configuration] Fixed contact/contactgroup additive inheritance configuration using massive change
- [Configuration] Fixed empty host template from mappers (Host Discovery) by using default template form Plugin Packs discovery rule
- [Configuration] Fixed the export when the host group is disabled
- [Configuration] Fixed the export when the service group is disabled
- [Configuration] Fixed the export when the service template is disabled
- [Core] Fixed href on links that were broken in menus
- [Core] Fixed SQL queries when databases names contained a dash
- [Core] Fixed the database partitioning for MySQL 8
- [Install] Fixed an SQL issue during update
- [Install] Fixed rights on the /usr/share/centreon/.env.local.php file for Debian package
- [Install] Fixed the waterfall visual effect in the extension's details tile
- [Monitoring] Fixed the "Last_update" column in legacy pages
- [Monitoring] Fixed the notifications number in legacy pages
- [Resources Status] Fixed the timeperiod group button and custom period selectors heights
- [UI] Fixed header and skeleton UI instability
- [UI] Fixed the display of CSS code with Firefox browser
- [UI] Now close the menu when a navigation item is clicked
- [UX] Reduced the timeout to prevent the menu from closing unexpectedly
- [Widget] Now use ACL to get list of pollers in widget configuration to filter display of services

#### Security fixes

- [Administration] Sanitized and bound ACL Group queries
- [Administration] Sanitized and bound ACL resources queries
- [Configuration] Fixed SQLi vulnerability in escalation form
- [Configuration] Fixed XXS vulnerability in escalation form
- [Configuration] Sanitized and bound "User" class queries
- [Configuration] Sanitized and bound "downtime" queries
- [Configuration] Sanitized and bound "hostgroups" queries
- [Configuration] Sanitized and bound "hosts" queries
- [Configuration] Sanitized and bound "meta_service" related queries
- [Configuration] Sanitized and bound "pollers" queries
- [Configuration] Sanitized and bound contact form queries
- [Configuration] Sanitized and bound escalation form queries
- [Configuration] Sanitized and bound queries in virtual metrics configuration
- [Configuration] Sanitized and bound timeperiod form queries
- [Core] Removed deprecated switch in encodePass() method
- [Core] Updated PHP libraries for security issues
- [Install] Sanitized and bound update queries

### 22.04.0

#### Enhancements

- [Administration] Display the name of the object that has been modified in the detail form of the administration logs
- [Authentication] Added a Password Security Policy for local accounts
  - Define password complexity
  - Define password length
  - Password expiration policy
  - Possibility to exclude users from password expiration policy
  - Brute force detection and account blocking
  - Define minimum delay between each password change (disabled by default on platform update)
- [Authentication] Moved Web SSO and OpenID Connect configuration to a dedicated authentication menu
- [Authentication] Autologin key and password can’t be the same
- [Configuration] Export hosts and services categories and severities in Centreon Engine configuration files
- [Configuration] Added new unified SQL Centreon Broker output parameters in the configuration menu
- [Core] Improved SQL queries by escaping '_'
- [Install] Creation of a dedicated account for the Centreon Gorgone process
- [Install] Improvement and simplification of Centreon Apache configuration
- [Install] Improved installation with a remote DBMS
- [Install] Set broker retry interval to 15s instead of 60
- [Upgrade] Excluded the dedicated account for the Centreon Gorgone / MAP / MBI processes from the password expiration policy
- [UX] Added Dark Theme and a switch to easily move from light to dark theme
- [UX] Harmonization of the classic theme
- [UX] Redesign of the authentication page
- [UX] Remove footer to save space
- [UX] Remove "Animation effects" option for users
- [Resources Status] New tab in right panel showing notification policy for a resource
- [Resources Status] New filter in resources status on type of status (Hard or Soft)
- [Resources Status] Filter popin improvement:
  - Remove search box when selection options are limited
  - **Resource** has been replaced by **Type** to be consistent with search bar
- [Resources Status] Make service graph tiles size constant in Resources Status host graph panel

#### Breaking changes

> Since the rewrite of the OpenID Connect authentication, it is necessary to reconfigure the redirect URL to Centreon in
> the identity provider.

For example replace:
```shell
{protocol}://{server}:{port}/centreon/index.php
```

By:
```shell
{protocol}://{server}:{port}/centreon/authentication/providers/configurations/openid
```

> Moreover, for Web SSO authentication, you need also to change Apache configuration.

For example replace:
```shell
{protocol}://{server}:{port}/centreon/index.php
```

By:
```shell
{protocol}://{server}:{port}/centreon/websso
```

#### New feature

- [Widget] A new widget is now available to display listings from **ntopng** and provide quick access to detail pages in the **ntopng** WUI

## Centreon Collect

### 22.04.5

Release date: `November 20, 2023`

#### Centreon Broker

##### Bug fixes

- Fixed a stability issue that could make Broker crash when BAM was enabled and the database was too slow.

### 22.04.4

Release date: `June 12, 2023`

#### Centreon Broker

##### Enhancements

- Added a new gRPC API endpoint to modify the flush period of Engine's and Broker's loggers without reloading or restarting the services.
- New performance counters have been added to the gRPC API in order to track the longest queries and statements.
- On MariaDB, metrics are now inserted with a bulk prepared statement in the data_bin table to improve performance.

##### Bug fixes

- Fixed a bug that mainly occurred at backup time: a crash could occur when MariaDB was restarted.
- Fixed an exception-catching issue that caused broker to fail inserting resources when the check_attempt was too high for the database column type.
- Fixed the date displayed for last_check and other columns in Resources Status for pending resources.
- Fixed the rebuilding of RRD databases that could result in incomplete graphs when duplicate values were present in `data_bin`. The duplicates are now skipped to avoid this.

#### Centreon Engine

##### Enhancements

- Added a new gRPC API endpoint to modify the flush period of Engine's and Broker's loggers without reloading or restarting the services.

##### Bug fixes

- Fixed an issue when an Anomaly Detection service based on a metaservice was rechecked.

### 22.04.3

Release date: `April 3, 2023`

#### Centreon Engine

##### Bug fixes

- [Configuration] Fixed an issue with configuration objects for tags and severities. 

#### Centreon Broker

##### Bug fixes

- [Performance] Fixed a stability issue related to metric cache.
- [Performance] Fixed memory allocation issues.

### 22.04.2

Release date: `February 7, 2023`

#### Centreon Engine

##### Bug fixes

- Fixed a bug that made deleted acknowledgements come back after restarting Centengine.
- Fixed log flushing issues in Engine and Broker by improving the reliability and configurability of the flush period.

#### Centreon Broker

##### Improvements

- Improved Broker's behaviour when trying to insert negative values in unsigned columns of the storage database.
- Improved network connection stability by sending a tcpkeepalive packet every 30s on TCP stream.
- Improved how bulk data is sent by Broker to MariaDB databases.
- It is now possible to use empty strings for parameter values in stream connectors.

##### Bug fixes

- Fixed an issue causing pollers to be displayed as running, and resources to be displayed in Resources Status after stopping centengine.
- Fixed a bug where deleted host groups and service groups weren’t available in the filter menu.
- Fixed a deadlock issue due to new Broker stats engine.
- Fixed a deadlock issue when a query failed while inserting a value that was out of range for the column type.
- Fixed an issue due to a data type mismatch that could block Broker.
- Fixed the way Broker handled numbers with an out of range value for the column type.
- Fixed a bug that made deleted acknowledgements come back after restarting Centengine.
- Fixed an issue with RRD rebuild that recreated the RRD files for every 24 hours of data, resulting in keeping only the last day's data.
- Fixed the compatibility issue between RRD rebuild and rrdcached.
- Fixed a stability issue that could cause Broker to crash when a host was deleted.
- Fixed log flushing issues in Engine and Broker by improving the reliability and configurability of the flush period.
- Fixed an issue where Broker displayed the warning message “Deprecated endpoint found in the output configuration: 'file' endpoint is deprecated and should not be used anymore” instead of an error.
- Fixed a defect in the Stream Connector mechanism that would not handle the BBDO v3 RRD rebuild events.

### 22.04.1

Release date: `August 30, 2022`

#### Centreon Engine

##### Features

- Enable recheck for Anomaly Detection services

##### Improvements

- Improve security of the gRPC API by listening on 127.0.0.1 by default

##### Bug fixes

- Fixed an issue that made the name of the resources disappear from Resources Status when linked to a severity or a category (it came back once centengine was restarted)
- Fixed an issue with the way escaped special characters were managed (eg. `\n`)

#### Centreon Broker

##### Improvements

- Improve security of the gRPC API by listening on 127.0.0.1 by default

##### Bug fixes

- Fixed Broker compression 
- Fixed an issue that caused the RRD rebuild mechanism to fail
- Fixed an issue with BAM Business Activities with “Ignore the indicator in the calculation” as planned downtime calculation method. They stopped ignoring downtimed KPIs when they had overlapping downtimes
- Fixed an issue that made the name of the resources disappear from Resources Status when linked to a severity or a category (it came back once centengine was restarted)
- Broker handles multiple options
- Broker with gRPC configured crashed on start
- Deleting a tag does not remove the link with resources in resources_tags table
- Fixed an issue that caused Broker to crash when a BAM output was configured and the BAM tables did not exist
- Fixed an issue with the way escaped special characters were managed (eg. `\n`)
- Scheduled downtimes used to be inserted one at a time, which caused performance issues on platforms with a lot of recurrent scheduled downtimes. They are now injected in bulk inserts to reduce database solicitation and avoid performance issues.
- [Configuration] Extended the size of the URL, Notes and Action URL fields to avoid truncating long URLs


### 22.04.0

#### Centreon Engine

##### Enhancements

- New logger, more readable, more configurable. The former logger is still available for the moment.
- Flapping was not detected for volatile services until now. This is a new behavior that can be disabled. Following [a suggestion on TheWatch](https://thewatch.centreon.com/data-collection-6/volatile-and-flapping-212).
- Flapping used to be detected on SOFT states for hosts and on HARD states for services. This seemed illogical so it will now be based on SOFT states for both. Based on [PR #522](https://github.com/centreon/centreon-engine/pull/522).
- Set default values in anticipation of removing the following parameters:
  - `translate_passive_host_checks` to `1`
  - `passive_host_checks_are_soft` to `1`
  - `max_check_result_reaper_time` to `30`
- New configuration files:
  - `tags.cfg` for host groups, host categories, service groups and service categories.
  - `severities.cfg` for host and service severities

#### Centreon Broker

##### Enhancements

- A new output type has been created, `unified_sql`, to replace both `sql` and `storage` in one unique output.
- New BBDO protocol version: 3.0.0. Some broker events are now sent using Protobuf arrays. This has benefits such as smaller bandwidth consumption and smaller database updates. The broker event types that have been converted are: host, host status, service, service status and RRD rebuild messages. The protocol version (`bbdo_version`) must be identical in all parts of the broker configuration.
- Broker feeds new tables for real time monitoring information.
- A lot of new runtime statistics are available with the gRPC API.

##### Breaking changes

As stated above, all broker instances (central, RRD, modules) must use the same BBDO protocol version to be able to communicate. This means that pollers using 21.10 or older releases won't be able to send data to a 22.04 central server using BBDO 3.0.0. Please read carefully our upgrade procedure.

## Centreon Gorgone

### 22.04.5

Release date: `February 28, 2024`

#### Security fix

- [Security] Activation by default of the commands whitelist in Centreon Gorgone to manage Centreon Engine and Broker processes.

### 22.04.4

Release date: `November 20, 2023`

No Changes for this module in this version.

### 22.04.3

Release date: `July 28, 2023`

#### Bug fixes

- [Core] Fixed recurring unexpected disconnections between pollers.

### 22.04.2

Release date: `June 8, 2023`

#### Enhancements

- [Packaging] Improved default configuration for Debian packages.

### 22.04.1

Release date: `September 23, 2022`

#### Enhancements

- Added an optional parameter to strictly control that the required plugins are installed before reloading/restarting centengine
- Added INSECURE_EXTRACT_MODE option to untar the archive
- Added API to manage Centreon MBI ETL
- Added API to get status of Centreon MBI ETL
- Added API to kill working process of Centreon MBI ETL
- Added Rocky Linux support for the plugin auto installation
- Improved debug for the plugin auto installation

##### Bug fixes

- Fixed wrong header in pullws mode
- Fixed encoding issue on RHEL8 in Services Discovery with Windows SNMP
- Fixed an issue with the authentication process to the web socket server
- Fixed the missing service category name in debug message

### 22.04.0

#### Enhancements

- Added ability to set cipher and key rotation time for encrypted communication
- Added new httpsserverng module
- Added the possibility for the poller to communicate using the socket web client instead of using the ZMQ protocol
- Extended configuration to add multiple directories at the same time

## Centreon DSM

### 22.04.1

Release date: `June 8, 2023`

#### Enhancements

- [Packaging] Improved default configuration for Debian packages.
