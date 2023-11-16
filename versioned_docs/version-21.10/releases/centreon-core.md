---
id: centreon-core
title: Centreon Core
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Core**.

> It is very important when you update your system to refer to this section in order to learn about behavior changes or
> major changes that have been made on this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please go to our
[Github](https://github.com/centreon/centreon/issues/new/choose)

## Centreon Web

### 21.10.17

Release date: `November 17, 2023`

#### Security fix

- [Security] Fixed SQLi in getHostServicesName method

### 21.10.16

Release date: `September 26, 2023`

#### Bug fixes

- [Core] Updated svg-sanitize dependency.
- [Core] Updated symfony/http-kernel dependency.
- [Security] Fixed SLQi in centreonLogAction.class.php

### 21.10.15

Release date: `June 19, 2023`

#### Security fix

- [Security] Fixed the base URI change detection mechanism.

### 21.10.14

Release date: `March 15, 2023`

#### Bug fixes

- [API] Fixed API access when user doesn't have access to UI.
- [Authentication] Fixed LDAP authentication issue that made LDAP users unable to authenticate in certain conditions.
- [Configuration] Fixed an ACL issue with user modification permissions.
- [Configuration] Fixed an issue that occurred when a massive change was performed on services right after one of them was disabled, causing all services to get the same host and template.
- [Configuration] Fixed possibility to disable Contact/Contactgroup additive inheritance if not yet configured.
- [Core] Fixed blank page after login.
- [ResourceStatus] Fixed the display of commands in the service details panel.
- [UI] Fixed date picker causing duplicated dates.
- [UI] Fixed an issue where the service icons on the widgets were not visible. 
- [UI] Fixed an issue that caused months to be missing from the calendar selection.
- [Widget] Fixed an issue with "display last comment" option that caused high loads and caused the interface to become unresponsive.

#### Security fixes

- [Configuration] Fixed vulnerabilities in host form.
- [Configuration] Fixed vulnerabilities in services listing.
- [Configuration] Sanitized queries when displaying logos.
- [Configuration] Sanitized queries in service categories.
- [Configuration] Sanitized queries in the list of service groups.
- [Configuration] Sanitized queries in the list of host categories.
- [Configuration] Sanitized queries in the list of meta services.
- [Configuration] Sanitized queries in the list of broker configurations.
- [Configuration] Sanitized queries in the list of commands.
- [Configuration] Sanitized queries in the list of trap groups.
- [Core] Fixed vulnerabilities in ajaxLdapSearch.js file.
- [Core] Fixed vulnerabilities in rename.php.
- [Core] Fixed vulnerabilities in functions.js file.
- [Core] Fixed vulnerabilities in pathway.php.
- [Core] Fixed vulnerabilities in color_picker.php.
- [Core] Fixed vulnerabilities in color_picker_mb.php.
- [Core] Fixed vulnerabilities in centreonAPI.class.php.
- [Security] Fixed SQLi in Monitoring Servicegroups widget.
- [Security] Fixed SQLi in legacy monitoring pages.
- [Security] Fixed XSS vulnerabilities in legacy monitoring pages.
- [Security] Fixed XSS vulnerability in service monitoring widget.

#### Others

- [Monitoring] Removed obsolete code for exporting a graph in CSV.

### 21.10.13

Release date: `October 12, 2022`

#### Security fixes

- [Authentication] Improved autologin access

### 21.10.12

Release date:  `October 6, 2022`

#### Bug fixes

- [Install] Fixed SQL update on Centreon realtime database

### 21.10.11

Release date: `September 30, 2022`

#### Bug fixes

- [Configuration] Fixed export of RRDcached path in Centreon Broker configuration
- [Core] Improved database storage to avoid blocking Broker when maximum values are reached

#### Security fixes

- [Administration] Sanitized and bound media import queries
- [CLAPI] Sanitized and bound Centreon hostgroup class queries
- [CLAPI] Sanitized and bound Centreon service class queries
- [CLAPI] Sanitized and bound LDAP listing queries
- [Configuration] Fixed SQLi in contact groups form
- [Configuration] Fixed SQLis in Centreon Broker configuration menu
- [Configuration] Sanitized and bound Centreon Service class queries
- [Configuration] Sanitized and bound Centreon hostgroups class queries
- [Configuration] Sanitized and bound Centreon notification class queries
- [Configuration] Sanitized and bound Knowledge Base host listing queries
- [Configuration] Sanitized and bound SNMP traps groups configuration queries
- [Configuration] Sanitized and bound SNMP traps listing queries
- [Configuration] Sanitized and bound host categories listing queries
- [Configuration] Sanitized and bound service by hostgroups listing queries
- [Configuration] Sanitized and bound services listing queries
- [Core] Sanitized and bound menu topology listing queries
- [Install] Sanitized and bound default configuration queries

#### Others

- [Core] Removed obsolete code in ACL configuration listing
- [Core] Removed obsolete code in Criticality class
- [Core] Removed obsolete code in database partitioning functions
- [Core] Removed obsolete code in legacy service detail page
- [Core] Removed obsolete code in monitoring common functions
- [Core] Removed unused mechanism for modules to add restart/reload actions after restart of pollers

### 21.10.10

Release date: `September 20, 2022`

#### Bug fixes

- [Administration] Fixed selection of options in second select box in ACL Group configuration page
- [Configuration] Fixed an error in the Configuration > Services > Templates menu causing HTML code to be displayed
- [Configuration] Fixed error that occurred when duplicating a Remote Server
- [Core] Cleaned code in forMyAccount
- [Core] Corrected escapeSecure usage
- [Widgets] Restored possibility to not select a poller in preferences

#### Security fixes

- [Administration] Sanitized and bound Centreon ACL class queries
- [CLAPI] Added a check to verify that the user has the admin role
- [CLAPI] Sanitized and bound CLAPI poller configuration queries
- [Configuration] Fixed SQLi in poller's resource creation
- [Configuration] Sanitized and bound Meta Service configuration queries
- [Configuration] Sanitized and bound command configuration queries
- [Configuration] Sanitized and bound graph configuration queries
- [Configuration] Sanitized and bound queries in centreonConnector file
- [Configuration] Sanitized and bound queries in contactgroup file
- [Configuration] Sanitized and bound queries in listServiceCategories file
- [Configuration] Sanitized and bound queries in listVirtualMetrics file
- [Configuration] Sanitized and bound queries in service argumentsXml file
- [Configuration] Sanitized and bound queries in service host categories file
- [Configuration] Sanitized and bound queries in servicegroup_dependency file
- [Configuration] Sanitized and bound templates of service listing queries
- [Monitoring] Fixed XSS vulnerability in deprecated services status details page

### 21.10.9

Release date: `August 26, 2022`

#### Enhancements

- [Install] Improved error handling during installation

#### Bug fixes

- [CLAPI] Column names were displayed several times when listing recurrent downtimes
- [Configuration] Extended the size of the URL, Notes and Action URL fields to avoid truncating long URLs
- [Configuration] Fixed a regression: multiple trap definitions can use the same OID again
- [Configuration] Fixed contact/contactgroup additive inheritance configuration using massive change
- [Core] Fixed SQL queries when databases names contained a dash
- [Core] Fixed the database partitioning for MySQL 8
- [Monitoring] Fixed deletion of comments
- [Monitoring] Fixed the "Last_update" column in legacy pages
- [Widget] Fixed hostgroup multiple selection

#### Security fixes

- [Administration] Sanitized SQLi in media synchronization
- [Administration] Sanitized and bound ACL group queries
- [Administration] Sanitized and bound ACL menus definitions queries
- [Administration] Sanitized and bound Auth class queries
- [Administration] Sanitized and bound queries in ACL actions definition
- [Configuration] Fixed an XSS vulnerability in the Broker configuration page
- [Configuration] Fixed an XSS vulnerability in the service template form
- [Configuration] Sanitized and bound "poller" queries
- [Configuration] Sanitized and bound contact form queries
- [Configuration] Sanitized and bound downtime queries
- [Configuration] Sanitized and bound escalation form queries
- [Configuration] Sanitized and bound hosts dependencies configuration queries
- [Configuration] Sanitized and bound hosts queries
- [Configuration] Sanitized and bound queries in Centreon Broker configuration listing
- [Configuration] Sanitized and bound queries in CentreonXMLBGRequest class
- [Configuration] Sanitized and bound queries in Meta Services dependency configuration
- [Configuration] Sanitized and bound queries in generateImage file
- [Configuration] Sanitized and bound queries in hostgroups dependency configuration
- [Configuration] Sanitized and bound queries in virtual metrics configuration
- [Configuration] Sanitized and bound service configuration queries
- [Configuration] Sanitized and bound service dependency queries
- [Configuration] Sanitized and bound timeperiod form queries
- [Core] Cleaned code in centreonUser.class.php
- [Core] Updated PHP libraries for security issues
- [Cron] Fixed SQL queries when databases names contain dash
- [Install] Sanitized and bound update queries
- [Monitoring] Sanitized SQLi in Centreon centreonGraph class

### 21.10.8

Release date: `August 3, 2022`

#### Security

- [Configuration] Fixed SQLi vulnerability in escalations configuration
- [Configuration] Fixed XSS vulnerability in escalations configuration

### 21.10.7

Release date: `June 10, 2022`

#### Bug Fixes

- [API] Fixed /monitoring/host endpoint to return service state
- [API] Fixed SQL syntax when retrieving service_id field
- [Business Activity] Fixed synchronization of configuration with Remote Server
- [Configuration] Fixed export when host group is disabled
- [Configuration] Fixed export when service group is disabled
- [Configuration] Fixed export when service template is disabled
- [Core] Fixed database partitioning issue with MySQL 8
- [Dashboard] Fixed displaying of first service in host reporting dashboard
- [Discovery] Fixed critical error when searching host templates with notification option in mappers configuration
- [Install] Fixed error when installing Centreon with remote DBMS
- [Monitoring] Fixed notification number in legacy pages
- [Remote Server] Fixed synchronization of configuration
- [Resource Status] Fixed color when resources are selected in downtime or acknowledged
- [UX] Fixed timezone when adding a downtime or an acknowledgement
- [UX] Follow user configuration for Date/Time display
- [Widget] The list of pollers is now filtered according to the user's ACLs

#### Security

- [Security] Fixed RCE in command
- [Security] Fixed SQLi in virtual metrics
- [Security] Sanitize and bind "hostgroups" queries
- [Security] Sanitize and bind "meta_service" related queries
- [Security] Sanitize and bind "poller" queries
- [Security] Sanitize and bind ACL resources queries

### 21.10.6

Release date: `May 2, 2022`

#### Bug Fixes

- [API] Fixed an issue in the `icons` API endpoint that always returned 0 for total number of results
- [Banner] Fixed display of empty skeleton
- [Charts] Fixed slowdown in graphics display
- [Configuration] Fixed an issue that caused the export of the poller configuration files to fail when a disabled host template was used
- [Configuration] Fixed checkbox selection after enabling/disabling a contact via icons
- [Core] Fixed an issue where proxy settings were saved with empty parameters
- [Install] Fixed an issue in database user creation with remote DBMS
- [Monitoring] Fixed display of acknowledgement information in legacy Resources Status pages
- [Monitoring] Fixed relation issue for recurrent downtimes
- [Reporting] Fixed an issue where MBI graphs reports were not using graph templates
- [Resources Status] Fixed default settings for acknowledgments and downtimes
- [Resources Status] Fixed display of acknowledgements comments
- [Resources Status] Fixed Hard/Soft translation
- [Resources Status] Fixed monitoring command that was not displayed in Resources Status Details panel
- [UX] Fixed display of date with UTC timezone in datepickers
- [UX] Improved interface response time if CEIP is enabled but the browser does not have internet access

#### Security Fixes

- [Apache] Fixed cookies with missing or contradictory properties
- [Apache] HTTPS Apache configuration now includes HSTS
- [Configuration] Fixed an SQL injection issue in Configuration > Poller > Resources
- [Core] Passwords are now obfuscated in the page's HTML source
- [Core] Replace Math.random by Crypto JS API
- [PHP] Disabled allow_url_fopen in PHP

### 21.10.5

Release date: `March 21, 2022`

#### Security Fixes

- [Administration] SQL Injections on ACL group listing
- [Administration] SQL Injection on Knowledge Base configuration form
- [Administration] SQL Injections on LDAP listing
- [Configuration] Command path traversal resulting in RCE on command edition form
- [Configuration] SQL Injection on export configuration
- [Configuration] SQL Injections on SNMP traps edition form
- [Core] RCE in legacy PHP's class autoload
- [Monitoring] SQL Injection on performance curve edition form

### 21.10.4

Release date: `March 3, 2022`

#### Enhancements

- [Authentication] Autologin Validation reinforcement
- [Install] Set broker retry interval to 15s instead of 60s
- [Performance] Improve SQL queries to use index
- [Reporting] Add select2 to hostgroup and servicegroup reporting dashboards
- [Resource Status] Added custom variables definition in URL/Action URL
- [Resource Status] Create new filter on type of status (Hard or Soft)
- [Stats] Manage exception for statistics
- [UX] Add TheWatch url to Centreon footer

#### Bug Fixes

- [APIv2] Fixed criticality null return for monitoring endpoint
- [Apache] Fixed SNMP MIB import mib with new mod_security rule definition
- [Authentication] Improve LDAP authentication and authorization
- [Authentication] Remove deadlocks on token deletion
- [Configuration] A regression in the host/host template configuration form caused the inherited macros to be saved as owned by the host/host template instead of being inherited. This can be seen as the loss of orange coloration. To undo this unwanted change, remove the macros from the list and they will be inherited again.
- [Configuration] Contact template properties not exported with the contact
- [Configuration] Fixed an infinite loop in export of configuration
- [Configuration] Fixed an issue in the contact form. When a non-admin user modified another non-admin user, only access groups that were common to both users were kept, other access groups were lost for the second user.
- [Configuration] Fixed an issue in the contact form: when a non-admin user modified a duplicated contact, it resulted in a blank screen
- [Configuration] Wizard doesn't insert anymore old logger configuration
- [Monitoring] Fixed deletion of comments
- [Reporting] Fixed timeperiod selection in dashboards when changing resource
- [Resources Status] Change "resource" by "type" in Resource status filter menu
- [Resources Status] Contents cropped in many tiles in French
- [Resources Status] Fixed display of old downtimes
- [Resources Status] Removed the tooltips on hover for urls
- [Resources Status] Rework Detail panel chip: hostgroup/servicegroup

#### Security Fixes

- XSS reflected from plugin's metric output
- XSS in reporting dashboard

### 21.10.3

Release date: `January 26, 2022`

#### Bug Fixes

- [Graph] Fixed display of additional graph if it came from Resources Status
- [Install] Fixed SQL request syntax error for cron with MySQL 8
- [Resources Status] Fixed display of meta-services
- [Resources Status] Fixed graph unit displayed twice
- [Resources Status] Fixed saving a filter on an existing name
- [Resources Status] Take the default downtime options to set downtime
- [UX] Fixed random disconnection since update to Centreon 21.10

### 21.10.2

Release note: `December 24, 2021`

#### Enhancements

- [Administration] Display the name of the object that has been modified in the detail form of logs
- [Authentication] Removed token display in login debug file
- [UI] The top-counter menu for pollers is now refreshed immediately after enabling the "Export button" in the user's profile

#### Bug Fixes

- [API] Fixed the access to API is account doesn't have access to GUI
- [Authentication] Fixed LDAP OU quote connection breaking
- [CLAPI] Fixed an issue preventing ACLs from applying on services created with CLAPI
- [CLAPI] Fixed error with LDAP configuration ID
- [Configuration] Fixed SNMP Trap matching with service linked to multiple hosts
- [Configuration] Fixed an issue that caused the Anomaly Detection services to lose their graphs when they were renamed
- [Configuration] Fixed an issue that caused the loss of broker output configuration
- [Configuration] Fixed an issue that prevented from removing the SNMP community (and other fields) from the host form
- [Configuration] Fixed the wizard for adding a new server that did not add it
- [Configuration] Fixed unwanted writes into unexisting file when exporting Traps config at the same time as a trap arrives. Based on PR [#9973](https://github.com/centreon/centreon/pull/9973). Fixes issue [#4236](https://github.com/centreon/centreon/issues/4236).
- [MBI] Fixed CBIS process trying to get contact_js_effects column that no longer exists
- [Resource Status] Fixed graph tooltip

### 21.10.1

Release date: `November 29, 2021`

#### Bug Fixes

- [Authentication] Fixed PHP error when debug is enabled with OIDC authentication
- [Configuration] Fixed the list of host template that was not available if the database name was different from the default
- [UX] Non admin user do not have the same submenu subsections
- [UX] Remove "Animation effects" option

### 21.10.0

#### Enhancements

- [Authentication] Improve OIDC support (OpenId Connect)
  - Add Okta support
  - Add MS Azure AD / ADFS
  - Add possibility to define which claim is used for Centreon login
  - Add possibility to define complete URL for endpoints
  - Add possibility to use client_secret_basic as authentication. Based on PR
    [#9878](https://github.com/centreon/centreon/pull/9878)
  - Allow to define no redirect URL. Based on PR
    [#9877](https://github.com/centreon/centreon/pull/9877)
  - Add errors log in /var/log/centreon/login.log
  - Add possibility to display debug log in /var/log/centreon/login.log
  - Use proxy if defined
- [API] API versioning is now consistent with Centreon's major release number
- [CEIP] Product Adoption component integration
- [Configuration] The poller management actions are now only available via buttons:
  - "Add" now leads to the wizard.
  - "Add (advanced)" leads to the former "Add" action (for experts only).
  - "Delete" and "Duplicate" are converted into buttons.
  - "Delete" should normally not be confused with another action.
- [Configuration] The deprecated "Logger" tab of the "Broker configuration" menu has been removed
- [Resources Status] Revamp Search experience
- [Resources Status] Revamp Timeline
- [Resources Status] Add Sticky and Persistent options to ACK in Resource Status
- [Resources Status] Allow detail tiles to be re-ordered for each user
- [Resources Status] Add multi-select to Resources Status listing
- [Resources Status] Add "Last OK" tile within Details panel
- [Resources Status] Persist user selected number of rows displayed
- [Resources Status] Make "duration" as the default second sorting criteria
- [Resources Status] Add link to performance page in detail panel. Based on PR [#9822](https://github.com/centreon/centreon/issues/9822)
- [Resources Status] Add Graphs panel for Hosts
- [Resources Status] Add tooltip to explain grayed options
- [Resources Status] Improve Custom Columns Name Display
- [Resources Status] Move Shortcuts from dedicated panel to option within Header
- [Resources Status] Make configure resource icon always visible
- [Resources Status] Improve readability of command line displayed
- [UX] Add Feature Flipping for Resources Status vs Legacy Pages
- [UX] Downtimes can now be scheduled until 2100
- [UX] The poller management action buttons are now hidden on Remote Servers

#### Beta enhancements

- [Configuration] Administrators can toggle a new button in the Pollers top-counter menu that allows them to export and
  reload the configuration of all pollers from any page

#### Breaking changes

> Access to API v2 has been changed. All of the beta endpoints have been migrated to version 21.10. This must be
> modified by "latest" or by the version of your Centreon platform (v21.10 for example).

For example replace:
```shell
{protocol}://{server}:{port}/centreon/api/beta/login
```

By:
```shell
{protocol}://{server}:{port}/centreon/api/latest/login
```

or:
By:
```shell
{protocol}://{server}:{port}/centreon/api/v21.10/login
```

#### Performances

- Move to PHP 8.0
- Preparing Debian 11 support

## Centreon Collect

### 21.10.5

Release date: `February 20, 2023`

#### Centreon Broker

##### Bug fixes

- Fixed a calculation error on BAM boolean rules impact.

### 21.10.4

Release date: `January 17, 2023`

#### Centreon Broker

##### Bug fixes

- Fixed an issue where deleted host groups and service groups weren’t available in the filter menu
- Fixed a deadlock issue due to new Broker stats engine
- Fixed an issue due to a data type mismatch that could block Broker
- Fixed an issue where Broker displays the expected warning message “Deprecated endpoint found in the output configuration: 'file' endpoint is deprecated and should not be used anymore” instead of an error.

### 21.10.3

Release date: `September 27, 2022`

#### Centreon Engine

##### Improvements

- Improved security of the gRPC API by listening on 127.0.0.1 by default

#### Centreon Broker

##### Improvements

- Improved security of the gRPC API by listening on 127.0.0.1 by default
- Empty strings are now accepted for parameter values in stream connectors

##### Bug fixes

- Fixed an issue causing pollers to be displayed as running, and resources to be displayed in Resources Status after stopping centengine
- Fixed an issue that caused the RRD rebuild mechanism to fail
- Fixed an issue that caused BAM Business activities with “Ignore the indicator in the calculation” as planned downtime calculation method to stop ignoring downtimed KPIs when they had overlapping downtimes
- Fixed a bug causing Broker to ignore additional arguments
- [Configuration] Extended the size of the URL, Notes and Action URL fields to avoid truncating long URLs


### 21.10.2

Release date: `June 15, 2022`

#### Centreon Broker

##### Improvements

- Improved the way TCP connections are stored by keeping them in an ordered structure. This should avoid rare connection issues experienced by some users

##### Bug fixes

- Fixed an issue that caused broker to crash when a BAM output was configured and the BAM tables did not exist
- Added a `bbdo_version` function to the LUA libraries for Stream Connectors developers
- Scheduled downtimes used to be inserted one at a time, which caused performance issues on platforms with a lot of recurrent scheduled downtimes. They are now injected in bulk inserts to reduce demands on the database and avoid performance issues.
- Broker crashed when a logger was disabled/off
- Fixed an issue that could prevent broker from connecting again after the database was stopped to make a LVM snapshot
- Broker crashed when its configuration included a filter that referred to a module that wasn't loaded

#### Centreon Engine

##### Improvements

- Removed unnecessary informational log messages regarding Anomaly Detection in the Poller configuration export page

##### Bug fixes

- Fixed an issue that caused centengine to send duplicate service status messages to broker. This change will reduce network bandwidth consumption, database activity and disk I/O.
- Fixed an issue with the way escaped special characters were managed (eg. `\\n`)
- Fixed an issue that caused loss of recovery notifications when a downtime end notification was sent before recovery
- Reviewed the way time period exceptions are handled to fix some issues with the way notifications are managed

#### Centreon Perl & SSH Connectors

##### Bug fixes

- Fixed an issue that could cause the SSH connector to crash 
- Fixed a memory leak issue in the Perl connector


> As of version 21.10.0, the components of Centreon Collect (Centreon Broker, Centreon Clib, Centreon Engine and Centreon Connectors)
> are released simultaneously. They are now grouped under this section.

### 21.10.1

Release date: `February 23, 2022`

#### Centreon Broker

##### Improvements
- Improved the multiplexing of events, which was a performance bottleneck. The processing speed of queued events should be significantly increased.
- Some TLS trace logs were logged as errors, flooding the log file.
- The SQL connections stats have been added to the broker stats available via gRPC.
- Added the SQL Manager statistics in gRPC and stabilized the stats provider.
- Added to LUA Stream Connectors' perfdata label parser the compatibility with centreon-plugins new metrics naming convention.

##### Bug fixes

- Fixed a regression due to the central broker's cache generation optimization, which was too thorough and prevented BAM from computing KPIs based on boolean rules
- The central broker's cache generation loaded too much data and took too much time when BAM was activated.
- Fixed an issue that could cause segmentation faults in centreon-engine when scheduling external commands
- Fixed a design issue to avoid trying to access variables of broker's new logger when the logger was stopped. This issue could cause segmentation faults.
- When a single metric is deleted, the corresponding RRD file is now actually removed.
- If the SQL stream took too long to initialize its connection, then the Perfdata stream timed out and the whole connection failed. To fix this, the timeout has been increased.
- In some circumstances, the `mysql_ping` function, which is used to test if the session is still active, could freeze. To fix this, the calls to `mysql_ping` have been spaced out, a timeout has been added, and the commit management has been consolidated.
- Fixed an issue causing BAM Business Activities (best status) to remain in an OK state when the OK KPIs were removed
- Refactored the BAM Business activities downtimes inheritance mechanism so that they are properly inherited and not duplicated anymore.

> After having updated centreon-broker to this version, you may still have unwanted remaining downtimes on your Business Activities. It can happen if a downtime that was inherited from a KPI has been duplicated and if the original downtime ended before the bugfix was installed. In that case, you will have to apply the following procedure.

```bash
systemctl stop centengine
sed -i -zE 's/(servicecomment|servicedowntime) \{\nhost_name=_Module_BAM_1\n[^}]*\}\n//g' /var/log/centreon-engine/retention.dat
systemctl start centengine
```

All the downtimes applied on Business Activities have now been removed.

You must then restart the `centengine` service on all the other pollers to restore the legitimate inherited downtimes.

### 21.10.0

#### Centreon Engine

- Flapping now starts only on non-OK states. Based on PR [#523](https://github.com/centreon/centreon-engine/pull/523)
- Flapping now starts only for services of UP hosts or for hosts with UP parent. Based on PR [#524](https://github.com/centreon/centreon-engine/pull/524). Fixes Issue [#192](https://github.com/centreon/centreon-engine/issues/192)
- Provide feedback on gRPC client execution success/failure

#### Centreon Broker

- Queues (in memory and retention files) are now cleared for reversed broker flows without `peer retention` when the connection is reset. This is a change of behavior back to what it should have always been. It will prevent endless retention files for Centreon-Studio (Centreon-Map).
- [BETA] Centreon-broker is now able to use OpenSSL instead of GNUTLS and allows forcing TLS/SSL version and cipher suite
- Broker now only loads the modules that are necessary for its inputs and outputs
- Old broker log format has been removed

## Centreon Gorgone

### 21.10.3

Release date: `September 23, 2022`

#### Enhancements

- Added INSECURE_EXTRACT_MODE option to untar the archive
- Added API to manage Centreon MBI ETL
- Added API to get status of Centreon MBI ETL
- Added API to kill working process of Centreon MBI ETL

##### Bug fixes

- Fixed machine learning configuration label values using string
- Fixed reload of cbd on Remote Server to apply BA changes (ok)

### 21.10.2

Release date: `February 17, 2022`

#### Enhancements

- Added an "audit" module to Gorgone to provide an overview of the system status, package versions, + some Centreon metrics.
- Added a new "httpserverng" module to allow asynchronous API calls.

#### Bugfixes

- Fixed an issue that caused Service Discovery scans to fail because the wrong message was caught.
- Fixed an issue that could make Gorgone crash in pull mode.
- Fixed uninitialized values in Gorgone that could cause error log messages.
- Fixed an issue that prevented Gorgone from handling advanced [Service Discovery features](../monitoring/discovery/services-discovery.md#advanced-options) correctly.
- Fixed an issue in the module management that could cause crashes.

### 21.10.1

Release date: `December 14, 2021`

#### Bugfixes

- Make Gorgone’s private key readable by centreon-gorgone only
- Gorgone was too long to restart, which could cause the service to reach the systemctl timeout. The time to stop has been thoroughly decreased.

### 21.10.0

- Add IPv6 support
