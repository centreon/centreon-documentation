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

#### Bugfixes

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

#### Bugfixes

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

#### Security fixe

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

#### Bugfixes

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

#### Bugfixes

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

### 21.04.4

Release date: `null`

#### Bug fixes

- Badly designed mutex could cause deadlocks in centreon-clib
- [Anomaly_Detection] Units were not provided in the perfdata for lower_thresholds and upper_thresholds of Anomaly Detection services
- Fixed an issue that could cause deadlocks in the logs production
- Sending values of date_start, date_end and duration of downtimes higher than 2^31 (`Tue Jan 19 04:14:08 CET 2038`) could block broker's inserts into the database. They are now limited to `2037-12-31 23:59:59`.
- No recovery notification were sent if service goes from CRITICAL to WARNING to OK state and user deactivated WARNING notification

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

### 21.04.2

`July 20, 2021`

- Provide compatibility with centreon-clib 21.04.2

### 21.04.1

`June 4, 2021`

- Engine/broker build migrated from Bintray to ConanCenter.

### 21.04.0

- Compatibility with other 21.04 components.

## Centreon Connector SSH

### 21.04.2

`July 20, 2021`

- Provide compatibility with centreon-clib 21.04.2

### 21.04.1

`June 4, 2021`

- Engine/broker build migrated from Bintray to ConanCenter.

### 21.04.0

- Compatibility with other 21.04 components.

## Centreon Gorgone

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

#### Bugfixes

- Fixed incorrect error handling when a poller in pull mode is never connected
- Fixed only returns no_log when asking associated logs of a token through API

### 21.04.1

`June 10, 2021`

#### Bugfixes

- [Anomaly] Host ID was null in detection filters

### 21.04.0

- [Core] Better congestion management for communication
