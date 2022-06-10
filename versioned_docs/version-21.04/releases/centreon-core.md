---
id: centreon-core
title: Centreon Core
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Core**.

> It is very important when you update your system to refer to this
> section in order to learn about behavior changes or major changes that
> have been made on this version. This will let you know the impact of
> the installation of these versions on the features you use or the
> specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please go to our
[Github](https://github.com/centreon/centreon/issues/new/choose)

## Centreon Web

### 21.04.15

Release date: `June 10, 2022`

#### Bug Fixes

- [API] Fixed /monitoring/host endpoint to return service state
- [API] Fixed SQL syntax when retrieving service_id field
- [Business Activity] Fixed synchronization of configuration with Remote Server
- [Install] Fixed error when installing Centreon with remote DBMS
- [Remote Server] Fixed synchronization of configuration
- [Widget] The list of pollers is now filtered according to the user's ACLs

#### Security

- [Security] Fixed RCE in command
- [Security] Fixed SQLi in virtual metrics
- [Security] Sanitize and bind "User" class query
- [Security] Sanitize and bind "hostgroups" queries
- [Security] Sanitize and bind "meta_service" related queries
- [Security] Sanitize and bind "poller" queries
- [Security] Sanitize and bind ACL resources queries

### 21.04.14

Release date: `May 2, 2022`

#### Bug Fixes

- [API] Fixed an issue in the `icons` API endpoint that always returned 0 for total number of results
- [Configuration] Fixed checkbox selection after enabling/disabling a contact via icons
- [Core] Fixed an issue where proxy settings were saved with empty parameters
- [Install] Fixed an issue in database user creation with remote DBMS
- [Reporting] Fixed an issue where MBI graphs reports were not using graph templates
- [Resources Status] Fixed default settings for acknowledgments and downtimes
- [Resources Status] Fixed display of acknowledgements comments
- [Resources Status] Fixed monitoring command that was not displayed in Resources Status Details panel
- [UX] Improved interface response time if CEIP is enabled but the browser does not have internet access

#### Security Fixes

- [Apache] Fixed cookies with missing or contradictory properties
- [Apache] HTTPS Apache configuration now includes HSTS
- [Core] Passwords are now obfuscated in the page's HTML source
- [Core] Replace Math.random by Crypto JS API

### 21.04.13

Release date: `April 1, 2022`

#### Bug Fixes

- [Chart] Fixed a PHP warning and removed a debug text appearing at the bottom of the page when modifying a curve template in "Monitoring > Performances > Curves"
- [UX] When users did not have the "Action access" rights for the top counter, the top counter was displayed "skeleton style". This has been fixed.

#### Security Fixes

- [Administration] SQL injections on ACL group listing
- [Administration] SQL injection on Knowledge Base configuration form
- [Administration] SQL injections on LDAP listing
- [Configuration] Command path traversal resulting in RCE on command edition form
- [Configuration] SQL injection on export configuration
- [Configuration] SQL injections on SNMP traps edition form
- [Configuration] SQL injection on Resources form
- [Core] RCE in legacy PHP's class autoload
- [Monitoring] SQL injection on performance curve edition form

### 21.04.12

Release date: `March 16, 2022`

#### Enhancements

- [Statistics] Manage exception for statistics
- [Resource Status] Added custom variables definition in URL/Action URL

#### Bug Fixes

- [Authentication] Improve LDAP authentication and authorization
- [Configuration] Fixed an issue in the contact form. When a non-admin user modified another non-admin user, only access groups that were common to both users were kept, other access groups were lost for the second user.
- [Configuration] Fixed an issue in the contact form: when a non-admin user modified a duplicated contact, it resulted in a blank screen.
- [Knowledge Base] Fixed links to knowledge base
- [Resource Status] Fixed display of old downtimes

#### Security Fixes

- Disabling allow_url_fopen in PHP
- XSS reflected from plugin's metric output
- XSS in reporting dashboard
- SQL Injections on ACL group listing

### 21.04.11

Release date: `February 10, 2022`

#### Enhancements

- [Authentication] Autologin Validation reinforcement
- [UX] Add The Watch url to Centreon footer

#### Bug Fixes

- [APIv2] Fixed criticality null return for monitoring endpoint
- [Configuration] Contact templates with "Enable notifications" set to "no" were not exported, even if used by contacts having it set to "yes", which caused export errors. Fixes issue [#10409](https://github.com/centreon/centreon/issues/10409).
- [Configuration] Fixed loop in export of configuration
- [Configuration] Wizard doesn't insert old logger configuration anymore
- [Install] Fixed SQL request syntax error for cron with MySQL 8
- [Monitoring] Fixed deletion of comments
- [Resources Status] Fixed saving a filter on an existing name
- [Resources Status] Removed the tooltips on hover for urls

#### Security fixes

- [Apache] Fixed SNMP MIB import mib with new mod_security rule definition

### 21.04.10

Release date: `December 23, 2021`

#### Enhancements

- [Authentication] Removed token display in login debug file

#### Bug Fixes

- [API] Fixed the value of acknowledgement's stickiness set by the API. A value of 1 was set instead of 2. Based on PR [#10028](https://github.com/centreon/centreon/pull/10028).
- [Authentication] Fixed LDAP OU quote connection breaking
– [CLAPI] Fixed an issue preventing ACLs from applying on services created with CLAPI
- [Configuration] Fixed SNMP Trap matching with service linked to multiple hosts
- [Configuration] Fixed an issue that caused the Anomaly Detection services to lose their graphs when they were renamed
- [Configuration] Fixed an issue that prevented from removing the SNMP community (and other fields) from the host form
- [Configuration] Fixed the wizard for adding a new server that did not add it
- [Configuration] Fixed unwanted writes into unexisting file when exporting Traps config at the same time as a trap arrives. Based on PR [#9973](https://github.com/centreon/centreon/pull/9973). Fixes issue [#4236](https://github.com/centreon/centreon/issues/4236).
- [Resources Status] Fixed filter by hostgroup
- [Resources Status] Fixed filtering on monitoring server name for users with ACL
- [Resources Status] Fixed performance chart not displayed reliably on firefox

### 21.04.9

Release date: `November 29, 2021`

#### Bug Fixes

- [Authentication] Fixed PHP error when debug is enabled with OIDC authentication
- [CLAPI] Fixed LDAP configuration ID for export and import
- [Configuration] Fixed Centreon Broker configuration that could be empty or deleted
- [Configuration] Fixed the list of host template that was not available if the database name was different from the default
- [Core] Remove PHP warning in logs
- [UX] Fixed display of tooltips in configuration forms
- [UX] Non admin user do not have the same submenu subsections

### 21.04.8

Release date: `November 15, 2021`

#### Enhancements

- [Authentication] Add possibility to define complete URL for endpoints
- [Authentication] Allow to define no redirect URL. Based on [PR #9877](https://github.com/centreon/centreon/pull/9877)
- [Authentication] Implement client_secret_basic as token_endpoint_auth_method. Based on [PR #9878](https://github.com/centreon/centreon/pull/9878)
- [CEIP] Product Adoption component integration
- [Configuration] Add the ability to set the expected TLS common name in broker configuration
- [Core] Add Feature Flipping for Resources Status vs Legacy Pages
- [Core] Compatibility PHP 7.4

#### Bug fixes

- [Authentication] Fixed user information retrieval method for OpenId
- [Backup] Fixed backup using LVM snapshot
- [CLAPI] Fixed recurrent downtimes exported with CLAPI that could not be imported with CLAPI
- [Configuration] Avoid blocking configuration generation when users don't have notifications enabled
- [Configuration] Fixed empty string parameter for LUA output in Broker configuration
- [Configuration] Fixed reset untouched values using massive changes on hosts
- [Configuration] Fixed the hiding of custom macros containing many options in the display of the command
- [Custom Views] Fixed sharing of views with LDAP groups
- [Downtime] Fixed PHP fatal error when saving a downtime on a hostgroup
- [Downtime] Fixed display of planned downtimes when one downtime is started
- [Downtime] Fixed the adding of a downtime on a resource from the French GUI
- [Graph] Fixed wrong scale and metric value with negative values
- [Knowledge Base] Get correct link from template. Based on [PR #10066](https://github.com/centreon/centreon/pull/10066)
- [Resources Status] Fixed display of performance chart with Firefox
- [Resources Status] Fixed weird behaviors of the ressources status page when applying filters and ordering by a specific column.
- [UX] Fixed menus by no longer displaying orphaned items

#### Security fixes

- CSRF - delete any command
- CSRF - delete any poller
- CSRF - delete any host
- CSRF - delete any SNMP trap
- CSRF - delete any service
- CSRF - delete any contactGroup
- CSRF vulnerability allowing to delete any user	
- CSRF vulnerability allowing to delete many kinds of objects

#### Performance

- Improve realtime API with ACL
- SQL optimisations for Resource Status page

### 21.04.7

`October 8, 2021`

#### Bugfixes

- Fixed an error when filing credentials in the Host Discovery job with the side effect of a change regarding downtime

### 21.04.6

`October 5, 2021`

#### Security fixes

- Fixed session on account deletion

### 21.04.5

`September 14, 2021`

#### Enhancements

- [Resources Status] Add link to performance page in detail panel

#### Bug fixes

- [ACL] Fixed missing ACL actions on CLAPI import
- [Configuration] Fixed ineffective massive change on 'Reach API configuration' option on remote server
- [Platform Topology] Fixed an error that occurred when an FQDN was used as parent address
- [UX] Fixed typo in UI

#### Security fixes

- [Install] Rights applied to "centreon.conf.php" and "conf.pm"
- [OpenId] Secret tokens obfuscation
- [Resource status] Fixed error based SQLi on resources GET's endpoint

### 21.04.4

`July 30, 2021`

#### Enhancements

- [Authentication] Improve centreonAuth.SSO.class for OpenId connection

#### Bug fixes

- [Administration] LDAP search fails
- [Configuration] Changing a Remote Server's IP address converts it into a simple Poller
- [Configuration] Editing service template removes relations with servicegroups
- [Configuration] Only first servicegroup linked to a service template is exported
- [Core] Unserialize in CentreonUtils is blocked by QualityGate
- [Core] Update copyright date
- [Downtimes] Prevent the user from creating downtimes with start date, end date and duration after 2037
- [Graph] Can't get a graph with autologin key
- [LDAP] Fixed LDAP auto-sync is always skipped
- [LDAP] LDAP's My account issue
- [Platform Topology] CLAPI's add Instance doesn't add a poller into the platform_topology table
- [Platform Topology] JSON Schema isn't validated in the POST endpoint
- [Platform Topology] Removed unused variable in registerServerTopology.sh
- [Resources Status] Criteria drop down lists do not fully display the available items
- [Resources Status] Make groups chips clickable
- [i18n] Fix typo in error message

### 21.04.3

`June 28, 2021`

#### Enhancements

- [Core] Implement API log mechanism
- [Graph] Diverse export size options

#### Bugfixes

- [APIv2] Use poller's page ACL rights on Topology API endpoints
- [Downtime] Can not remove/delete periods when configuring recurrent downtime
- [Graph] Anchor point does not follow line path for stacked graphs
- [Platform Topology] Update Exception handling

#### Security fixes

- [Configuration] Input sent to unserialize() are not sanitized
- [Configuration] SQL Injection on commands
- [Configuration] SQL Injection on host dependency
- [Configuration] SQL Injection on hostgroup dependency
- [Configuration] SQL Injection on metaservice
- [Configuration] SQL Injection on metaservice dependency
- [Configuration] SQL Injection on service categories
- [Configuration] SQL Injection on service dependency
- [Configuration] SQL Injection on servicegroup
- [Configuration] SQL Injection on servicegroup dependency
- [Configuration] SQL Injection on timeperiod
- [Configuration] XSS Stored on checks command
- [Core] Manage security acknowledgement

### 21.04.2

`June 7, 2021`

#### Bug fixes

- [APIv1] Cannot send external commands anymore
- [APIv2] Can not authenticate using API when database name and database username are different from default
- [APIv2] DELETE downtime on host not functionnal
- [APIv2] Unable to use v2 api (internal server error)
- [Administration] Broker statistics for pollers are not shown
- [Anomaly] host_id is null is stream connector flow
- [Configuration] Change default values for Centreon Engine
- [Configuration] New Logger conf is not exported to distant pollers well
- [Configuration] Unable to replace 127.0.0.1 by real IP in poller form when already saved in platform_topology
- [Configuration] InfluxDB configuration columns are deleted in Broker form
- [Configuration] Wrong broker configuration generated when Anomaly Detection module is installed
- [Core] Avoid 404 redirection
- [Install] Cannot update when you have no metaservices
- [LDAP] Adding new user from LDAP results in Request Entity Too Large error
- [Purge] Script can't drop several partitions
- [Reporting] Dashboard can't display reporting for service (query too long)
- [Resources Status] "Filter by Host" filter is not emptied between searches
- [Resources Status] Action ACL not working
- [Resources Status] Apply ACL in command line block
- [Resources Status]  Increase font size of Timestamp in graph

#### Security fixes

- [Administration] Import of JS in image files
- [Administration] Insecure media file upload
- [Administration] SQL Injection on ACL actions
- [Administration] SQL Injection on ACL resources
- [Administration] SQL Injection on reload ACL
- [Configuration] SQL Injection on MediaWiki
- [Configuration] SQL Injection on SNMP trap manufacturer
- [Configuration] SQL Injection on poller form
- [Configuration] Unserialize() are not sanitized in Centreon Broker wizard
- [Configuration] Unserialize() are not sanitized in poller wizard
- [Configuration] XSS reflected on Graph performance curves
- [Configuration] XSS reflected on SNMP trap
- [Configuration] XSS reflected on internal API broker configuration
- [Graphs] SQL Injection on Graph component templates
- [Graphs] SQL Injection on Graph generate image
- [Graphs] SQL Injection on Graph periods
- [Graphs] SQL Injection on Graph split
- [Reporting] SQL Injection on reporting export
- [Install] Packaging, remove . gitignore files

#### Performance

- [ACL] ACL are computed every time for BV
- [Generation] Bulk insert in index_data during config generation
- [Purge] Purge of index_data is taking too long because of suboptimal SQL query

### 21.04.1

`May 11, 2021`

#### Bug fixes

- [Configuration] Default Centreon Engine value is different from the tooltip, and affects performance
- [Platform Topology] Register a remote / poller to central with proxy
- [Resources Status] Click anywhere in the metric tile within the legend to select metrics to display in graphs
- [Resources Status] Custom filters cannot be listed from the drop down menu after upgrade to 21.04
- [Resources Status] Graph export does not work correctly on Safari and Firefox
- [Resources Status] Graph units are not properly displayed when graphs have a 2 way scale
- [Resources Status] Jagged disposition when multiple graphs displayed in extended host panel
- [Resources Status] Listing refresh gets slower as the number of items per page increases

#### Performances

- Replace "WITH RECURSIVE" MySQL calls with PHP-based recursion loops

#### Security

- [Configuration] SQL injection in additional user information

### 21.04.0

#### Enhancements

- [Configuration] Define new logging options for Centreon Broker
- [Resources Status] Optimized overall listing to display ~50% more alerts
- [Resources Status] Added new columns (active/passive, notifications on/off and others) and possibility to select and re-order displayed columns
- [Resources Status] Added many filtering options (including Monitoring Server)
- [Resources Status] Added Meta-Services to types of resources included
- [Resources Status] All page parameters are now saved within local storage and URL
- [Resources Status] The detail panel is now resizable
- [Resources Status] Revamped the Graph panel overall, mainly:
    - Added Datetime pickers for start and end of period
    - Added zoom feature via in-graph selection
    - Added time translation to move forward and backward (by half the displayed period)
    - Added option to display events (downtimes, acknowledgements, etc.) within graph
    - Removed metrics values within tootips
    - Added metrics values display in legend on graph hover
    - Added metrics mean, max and average display in legend otherwise

#### Documentation

- Added a chapter to enable firewalld and rules example to improve security
- Added a chapter to enable Fail2ban to improve security
- Added a chapter to move a poller from one server to another

#### Security

- Add SELinux packages

#### Performances

- Move to PHP 7.3
- Move to MariaDB 10.5

## Centreon Engine

### 21.04.5

Release date: `June 10, 2022`

#### Bug fixes

- Reviewed the way time period exceptions are handled to fix some issues with the way notifications are managed


### 21.04.4

`October 20, 2021`

#### Bug fixes

- Badly designed mutex could cause deadlocks in centreon-clib
- [Anomaly_Detection] Units were not provided in the perfdata for lower_thresholds and upper_thresholds of Anomaly Detection services
- Fixed an issue that could cause deadlocks in the logs production
- Sending values of date_start, date_end and duration of downtimes higher than 2^31 (`Tue Jan 19 04:14:08 CET 2038`) could block broker's inserts into the database. They are now limited to `2037-12-31 23:59:59`.
- No recovery notification was sent if service went from CRITICAL to WARNING to OK state and user deactivated WARNING notification

#### From Community

- Notifications were sent for services of a soft down host despite "Soft Service Dependencies" option being set to "yes" (fixes issue [#286](https://github.com/centreon/centreon-engine/issues/286))


### 21.04.3

`July 20, 2021`

#### Bugfixes

- Recovery notifications forgotten when engine is stopped during incident
- Engine sends service status twice when a check is forced
- Compilation issues on Raspberry Pi

### 21.04.2

`June 4, 2021`

> This version requires Centreon Broker, Centreon Clib and Centreon-Connector versions to be 21.04.1 or higher.

#### Bugfixes

- Engine cpu usage increased to 100% when `check_period` is set to `none`
- Engine/broker build migrated from Bintray to ConanCenter
- Centengine can hang when we stop it

### 21.04.1

`April 28, 2021`

#### Bugfixes

-  Bad memory access on hostgroupname/servicegroupname macros

### 21.04.0

- When used with centreon-connectors, Engine could crash when we stop it. This should be fixed now.
- Ability to submit external commands via gRPC.

> **Warning:** External commands via gRPC are proposed in beta version. The API may change in a near
future.

## Centreon Broker

### 21.04.8

Release date: `June 10, 2022`

#### Improvements

- Improved the way TCP connections are stored by keeping them in an ordered structure. This should avoid rare connection issues experienced by some users

#### Bug fixes

- Broker crashed when a logger was disabled/off
- Fixed an issue that could prevent broker from connecting again after the database was stopped to make a LVM snapshot


### 21.04.7

Release date: `March 3, 2022`

#### Bug fixes

- Refactored the BAM Business activities downtimes inheritance mechanism so that they are properly inherited and not duplicated anymore.

> After having updated centreon-broker to this version, you may still have unwanted remaining downtimes on your Business Activities. It can happen if a downtime that was inherited from a KPI has been duplicated and if the original downtime ended before the bugfix was installed. In that case, you will have to apply the following procedure.

```bash
systemctl stop centengine
sed -i -zE 's/(servicecomment|servicedowntime) \{\nhost_name=_Module_BAM_1\n[^}]*\}\n//g' /var/log/centreon-engine/retention.dat
systemctl start centengine
```

All the downtimes applied on Business Activities have now been removed.

You must then restart the `centengine` service on all the other pollers to restore the legitimate inherited downtimes.


### 21.04.6

Release date: `February 1, 2022`

#### Improvements

- Improved the multiplexing of events, which was a performance bottleneck. The processing speed of queued events should be significantly increased.

#### Bug fixes

- Fixed a regression due to the central broker's cache generation optimization, which was too thorough and prevented BAM from computing KPIs based on boolean rules
- The central broker's cache generation loaded too much data and took too much time when BAM was activated.
- Fixed an issue that could cause segmentation faults in centreon-engine when scheduling external commands
- Fixed a design issue to avoid trying to access variables of broker's new logger when the logger is stopped. This issue could cause segmentation faults.
- When a single metric is deleted, the corresponding RRD file is now actually removed.
- If the SQL stream took too long to initialize its connection, then the Perfdata stream timed out and the whole connection failed. To fix this, the timeout has been increased.
- In some circumstances, the `mysql_ping` function, which is used to test if the session is still active, could freeze. To fix this, the calls to `mysql_ping` have been spaced out, a timeout has been added, and the commit management has been consolidated.
- Fixed an issue causing BAM Business Activities (best status) to remain in an OK state when the OK KPIs are removed

### 21.04.5

`October 27, 2021`

#### Bug fixes

- Fixed a deadlock issue that blocked engine when all debug options were enabled


### 21.04.4

`October 20, 2021`

#### Improvements

- A TCP keepalive check has been added to the acceptor side of broker connections to avoid keeping dead connections

#### Bug fixes

- Fixed an issue that occasionally caused the LUA cache to disappear when reloading cbd
- In case of retention on one side of a tcp connection, the connection could get interrupted because of an issue in the flush() function
- Broker could be blocked if it received BBDO objects it couldn't read (e.g., if the module is missing)
- Database connection error flag was not reset in conflict manager once an error occurred (even after successful connection) and could block the insertion into the database
- The index_id column of table metrics was cast in int32 instead of int64
- Resolved conflicts that could appear between hostgroups when connections_count > 1
- Deleting graph from the WUI did not actually delete RRD files


### 21.04.3

`August 30, 2021`

#### Bugfixes

- Fixed a deadlock in broker with a reversed TCP output when cbd receives SIGTERM
- Fixed "MySQL server has gone away" error causing failure in BAM events computation, and data loss in BAM availability statistics

### 21.04.2

`July 20, 2021`

#### Bugfixes

- A deadlock occasionally appears when broker is stopped right after it started
- A core dump occasionally appears when Engine is stopped
- Sometimes Engine cannot reconnect to the central broker when cbd is restarted
- When many pollers attempt to connect to the central broker, the last ones may fail to connect
- Timeranges of timeperiods can't be parsed if they end with `\r` or `\n`
- Compilation issues on Raspberry Pi
- TLS query not understood by GNUTLS on Redhat 8
- Broker stream factory could not create streams with different configurations
- Error in Broker logs when exporting new BAM Business Activities
- `cb_mod` crashes when loggers section is empty/null in config file

#### Enhancements
- Move `BBDO serialized events` logs from debug to trace
- A new parameter has been added to Broker allowing MySQL UNIX socket selection by name

### 21.04.1

`June 4, 2021`

#### Security

- Avoid SQL injections with custom variables

#### Bugfixes

- Engine/broker build migrated from Bintray to ConanCenter
- Metaservices used as KPIs did not impact BAs (Centreon BAM)
- CRITICAL impact was applied instead of UNKNOWN for BAs used as KPIs (Centreon BAM)
- Broker's restart was slowed by suboptimal queries processing downtimes and comments

### 21.04.0

> **Known issues**
> * Broker streams: the same parameter, if used in several outputs of the same broker stream, can only have one value (the last prevails).
> * BAM: the impacts of KPIs of type Meta-service are not evaluated correctly. A fix will be release very soon.
> * BAM: the impacts of KPIs of type BA in are not evaluated correctly. A fix will be release very soon.

#### New broker logs

- New logs, with new format, epoch timestamps are replaced by real dates.

> **Warning:** you may still see timestamps in your logs until you disable the
old logs system.

```log
[2021-04-16 13:49:06.781] [core] [info] Clearing old connections
[2021-04-16 13:56:10.985] [core] [info] main: configuration update requested
```

- New log config options, with a different log level for `core`, `config`, `sql`, `processing`, `perfdata`, `bbdo`, `tcp`, `tls`, `lua`, `bam`.
- Old logs are still supported, but you are encouraged to abandon them.

#### Other enhancements

- Support of UInt64 for `id` column of `index_data` table: fixes issues on platforms having a large amount of metrics.

> **Warning:** this change needs cbd service(s) to be stopped during the upgrade to 21.04.0 and all "queue" and "unprocessed" files must be removed.

- Improvement of the acknowledgement of events when broker is shutting down.

## Centreon CLib

### 21.04.4

`October 27, 2021`

#### Bug fixes

- Fixed a deadlock issue that blocked engine when all debug options were enabled


### 21.04.3

`October 20, 2021`

#### Bug fixes

- Fixed an issue in centreon-clib that caused deadlocks when a process was killed
- Badly designed mutex could cause deadlocks in centreon-clib
- Fixed an issue that could cause deadlocks in the logs production


### 21.04.2

`July 20, 2021`

#### Bug fixes

- Libraries are loaded lazily now. This allows not having to check all link issues during loading.

### 21.04.1

`June 4, 2021`

#### Enhancements

- Compilation in C++14 with conan-center: bintray has stopped. We had to switch to conan-center. And then our conan dependencies had to be upgraded and then we had to switch to C++14. So here is the corresponding compilation.

### 21.04.0

New release.

## Centreon Connector Perl

### 21.04.3

`October 20, 2021`

#### Bug fixes

- Badly designed mutex could cause deadlocks in centreon-clib
- Fixed an issue that could cause deadlocks in the logs production


### 21.04.2

`July 20, 2021`

- Provide compatibility with centreon-clib 21.04.2

### 21.04.1

`June 4, 2021`

- Engine/broker build migrated from Bintray to ConanCenter.

### 21.04.0

- Compatibility with other 21.04 components.

## Centreon Connector SSH

### 21.04.3

`October 20, 2021`

#### Bug fixes

- Badly designed mutex could cause deadlocks in centreon-clib
- Fixed an issue that could cause deadlocks in the logs production


### 21.04.2

`July 20, 2021`

- Provide compatibility with centreon-clib 21.04.2

### 21.04.1

`June 4, 2021`

- Engine/broker build migrated from Bintray to ConanCenter.

### 21.04.0

- Compatibility with other 21.04 components.

## Centreon Gorgone

### 21.04.5

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

### 21.04.4

Release date: `December 14, 2021`

#### Bugfixes

- Make Gorgone’s private key readable by centreon-gorgone only
- Gorgone was too long to restart, which could cause the service to reach the systemctl timeout. The time to stop has been thoroughly decreased.
- Fixed export of configuration files on a poller with Debian 11
- Fixed error in log for autodiscovery module
- Fixed SSH reconnection

### 21.04.3

`September 30, 2021`

#### Bugfixes

- Merge YAML libraries to use only one
- Fixed uninitialized value using pull mode

### 21.04.2

`September 7, 2021`

#### Enhancements

- Add endpoint to ask gorgoned to resync pollers configuration
- Add Centreon platform audit module
- Allow to define the list of the commands that can be run through the Action module
- Add IPv6 support

#### Bugfixes

- Fixed incorrect error handling when a poller in pull mode is never connected
- Fixed only returns no_log when asking associated logs of a token through API

### 21.04.1

`June 10, 2021`

#### Bugfixes

- [Anomaly] Host ID was null in detection filters

### 21.04.0

- [Core] Better congestion management for communication
