---
id: centreon-core
title: Centreon Core
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Core**.

> It is very important when you update your system to refer to this section in
> order to learn about behavior changes or major changes that have been made on
> this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have
> built on your platform (modules, widgets, plugins).

If you have feature requests or want to report a bug, please go to our
[Github](https://github.com/centreon/centreon/issues/new/choose)

## Centreon Web release notes

### 20.04.7

#### Enhancements

- [Event View] Add filters in timeline for hosts details page
- [Event View] Add filters in timeline for services details page
- [Event View] Add shortcuts for hosts details page
- [Event View] Add shortcuts for services details page
- [Event View] Display info in timeline for hosts details page
- [Remote Server] Add the possibility to configure mail for users
- [Remote Server] Hide the "Configure host / service" buttons from monitoring legacy pages

#### Bug fixes

- [API] Service groups search not working
- [Administration] 'options' table for centreon database is sometimes empty
- [Administration] Script centreon-backup errors
- [CLAPI] Export clapi duplicates contacts
- [Configuration] Check for illegal characters when creating hosts
- [Configuration] Radio buttons for "InfluxDB - Storage - InfluxDB" output not working properly for Centreon Broker form
- [Core/Partitioning] Partitioning starts at epoch
- [Core] Perl lib db query bad looping parameters
- [Core] Too much rows in extended_service_informations tables
- [Custom Views] Select2 popin error on custom view sharing
- [Event View] Bad date in x-axis (Invalid date) for graph
- [Event View] Cannot search with regex using "+" character
- [Event View] Internal Server Error when using wildcard in search field
- [Event View] Missing severity icon/number in Events view when severity is defined for a service
- [Event View] Severity on host is not visible
- [Event View] Tries column is not filled when service state is SOFT
- [Event View] When you click on "My Filter" in the list, you get a white page
- [Event logs] Inoperative filters when exporting
- [Install] Do not modify the APP_SECRET key on update
- [Install] Infinite loading page after login - New installation on CentOS 7 using unattended.sh
- [Monitoring/Legacy pages] Severity on host is not visible
- [Reporting] Dashboard won't build when having service by hostgroup

#### Security fixes

- [Administration] Password in plain text in "Administration > Logs"
- [Core] Update moment.js library
- [Install] Directory Listing
- [Media] Broken authentication of uploaded files
- [Monitoring] Blind SQL Injection in "Monitoring > Downtimes > Downtimes"
- [custom Views] List of user accounts in custom view

### 20.04.6

> Newly shared views do not break widget preferences.
> But, if you have already broken widget preferences for users who add a shared
> view, you'll need to:
>
> * Login centreon web with the user who shares the custom view
> * Switch to the custom view with broken preferences for other users
> * Click on "Share view", and then click on "Share"
>
> This will restore preferences for other users

#### Enhancements

* [Event View] Be able to create and save filters
* [Event View] Be able to filter on status output
* [Event View] Be able to re order manage saved filters
* [Event View] Be able to re-order filter name
* [Event View] Be able to rename and delete saved filters
* [Event View] Be able to use custom filters
* [Event View] Host details - Display info in the timeline
* [Event View] Service details - Display info in the timeline

#### Bug fixes

* [ACL] Incorrect inheritance of categories/severities for services
* [API] Acknowledgement : inconsistency between doc & payload
* [CLAPI] Add getparams
* [CLAPI] Carriage return and line feed breaks comments
* [Configuration] Dependencies not deleted when last parent deleted
* [Configuration] Improve message to use Remote Server as proxy
* [Configuration] Issue with anomaly detection json output and proxy
* [Configuration] Unable to import MIB
* [Dashboard] Time is shown in epoch format on the dashboard timeline
* [Event View] Fail in pagination
* [Event View] Graph: "invalide date" displayed when switching the period + French wrong translation
* [Event View] Refresh the panel when the user clicks on the refresh button in details pages
* [Event View] When you empty the ack windows, it starts an infinite load
* [Event View] Information on screen not updated after checks
* [Eventlog] Acknowledged alerts status show "OK" but it's wrong
* [Graphs][legacy pages] 1000/1024 graph template ignored
* [Internal/API/Chart] Centreon db configuration name hard coded
* [Monitoring] Status output not correctly displayed with chinese characters
* [Remote-Server] incorrect url to contact Centreon Central Server
* [UI] Incoherent paging information display
* [Widgets] Can't change position of widgets
* [Widgets] Parameters are deleted when importing/deleting/importing a custom view

#### Security fixes

* [API] Information Disclosure in centreon_wiki internal API
* [API] Cross-site Scripting (XSS) Reflected in centreon_wiki internal API
* [Administration] Horizontal privilege escalation / session takeover
* [Configuration] Cross Site Scripting in widget rename
* [Configuration] RCE in SNMP trap import
* [Configuration] SQL Injection in "Configuration > Host categories"
* [Configuration] SQL Injection in "Configuration > Service Groups"
* [Configuration] SQL Injection in "Configuration > Service categories"
* [Knowledge-Base] Password in plain text in "Configuration > Knowledge base" menu
* [Platform Status] Fix vulnerability for file loading

### 20.04.5

#### Bug fixes

- [Reporting] Reporting is broken when a host is renamed
- [Monitoring] Service limit when sending an external command
- [Monitoring] Fix API v1 host filters
- [Events view] Services attached to host are not all acknowledged in some cases
- [Events view] Inconsistent french display
- [CLAPI] APPLYCFG rises errors for hosts with disabled host templates
- [Configuration] Notifications are sent to wrong contacts when using services
  by host groups
- [LDAP] Legacy errors in logs
- [CEIP] centreon-send-stats.php script failed when one script fails
- [Host Discovery] Better handle not submitted values for proxy
- [Host Discovery] Cannot find local monitoring server when having 10+ Pollers
- [Anomaly Detection] Wrong generated Broker configuration for LUA

#### Security

- [Cron] Privilege Escalation from backup crontab
- [Custom views] SQL injection in loadServiceFromHost
- [Custom views] Missing access control mechanism in widget action
- [Custom views] Missing access control mechanism in widget preferences
- [Monitoring] XSS in setHistory.php and commonJS.php
- [Monitoring] Missing access control mechanism in hostSendCommand/
  serviceSendCommand
- [Configuration] Post Restart Command must be runned by Gorgone
- [Configuration] SQL injection in Knowledge Base pages
- [Configuration] SQL injection in centreonTraps.class.php
- [Administration] SQL injection in "Administration > Parameters > Data"

#### Enhancements

- [Web] Add HTTP2 compatibility (see https://docs.centreon.com/current/en/administration/secure-platform.html#enabling-http2)

### 20.04.4

#### Bug fixes

- [Reporting] Host availability is wrong due to Broker changes
- [Reporting] Planned downtime are wrongly managed when cancelled
- [Eventlog] Host logs are not displayed when using filter
- [Configuration] Sanitize geocord value in the form
- [Configuration] Wrong command line avoid notification for meta-services
- [PPM] Missing icons on hosts created using Plugin Packs
- [Events view] Manage ACL on planned downtime actions (frontend)
- [Events view] Graph: Manage "micro" units (like second) and make them readable
- [Events view] When a curve is always at 0, the tooltip & data are not displayed
- [Web] No top counter for hosts and services
- [Trap] Fix saved value in the form
- [Backup] Unable to mount EXT4 partitions

#### Security

- [Eventlog] SQL injection in "include/eventLogs/xml/data.php"
- [Configuration] SQL injection in "Configuration > Servicegroups"
- [EventLog] SQL injection in EventLog
- [Monitoring] SQL injection in graphTemplates.php
- [Monitoring] SQL injection in Graph (export CSV)
- [Monitoring] SQL injection in Graph (export XML)
- [Configuration] Missing access control mechanism in Gorgone configuration generation
- [API] CORS issue on "/monitoring/resources"

### 20.04.3

#### Enhancements

- [CLAPI] Add possibility to get childs of a host using CLAPI

#### Bug fixes

- [Configuration] Wrongly linked service template in service group
- [Configuration] Add Gorgone configuration export for Central
- [Front] Centreon is now correctly rendered in Apple Safari
- [CLAPI] Import CLAPI doesn't fail anymore when your import file contains thousands of lines
- [API] Fix RTDOWNTIME issues [#8254](https://github.com/centreon/centreon/pull/8275):
     - it returns all RTDOWNTIMEs satisfying the given filters, instead of only the first one (a host or service can have several downtimes in place)
     - it allows to set a RTDOWNTIME on host only (without associated services) (currently the 8th parameter of the RTDOWNTIME -a add command is not correctly proceeded).
- [Authentication] Authentication now correctly switches from LDAP to local when appropriated
- [PluginPacks] No more error when installing a plugin pack due to media
- [Events view] You're not automatically redirected to the events view when it's not your default page
- [Events view] Translation is now correctly handled
- [Events view] ACL are now handled on aknwoledgement actions
- [Events view] Graphs: you can now hide/show curves
- [Events view] Graph: roboto correctly set everywhere
- [Events view] Correctly hide password in the commands you see in the detail panel
- [Events view] Access the full acknowledgement/downtime comment in the detail panel

#### Security

- [Web] RCE using command line path's argument (CVE-2020-12688)
- [Web] DoS issue in include/eventLogs/xml/data.php

### 20.04.2

> Due to a generation problem, 20.04.1 and 20.04.2 versions are both included in 20.04.2 version.

#### Enhancements

- [APIv2] Translate all text messages returned from API v2
- [Doc] Explain in FAQ chapter how to use HTTPS and correct Apache configuration
- [EventView] Help : Add tips to help users using regexp
- [UI] : Add "Asia/Yangon" timezone

#### Bug fixes

- [Backend] host-graph-v2 do not display all graph > graph endpoint issue ?
- [EventView] Header gets fully selected when searching
- [EventView] Icon for Downtime button is missing in Events View
- [EventView] Manage timezone in Graphs
- [EventView] Manage timezone in details panel
- [EventView] Wrong latency with forced check
- [Install] Harden Gorgone config generation at upgrade
- [KB] Each execution of cron synchronization generate temporary CURLCOOKIE
- [Monitoring] Correctly compute downtime duration

#### Security

- Fix SQL Injection in makeXMLForAck.php

### 20.04.0

*Released April, 22 2020*

> Known issues:
>
> - When upgrading to 20.04.0 (in both cases, restart `gorgoned` service after
>   any configuration changes):
>   - Some users can encounter connectivity issues between Gorgone and databases
>     on Central or Remote server due to wrong password in configuration. To
>     manage that, edit the `/etc/centreon/config.d/10-database.yaml` file and
>     validate that the database password is correct and surrounded by double
>     quotes,
>   - Some users can encounter problems when submitting monitoring actions from
>     web interface without any effect for Central poller. This might be due
>     to a wrongly set `command_file` directive of the `engine` module defined
>     in the `/etc/centreon-gorgone/config.d/40-gorgoned.yaml` configuration
>     file. To manage that, edit the file and change the path to match Engine
>     command file.

#### Features

* Add a new [Events view (beta)](../alerts-notifications/events-view.html)
* Add [Mobility](../mobile/introduction.html)

#### Enhancements

* [Administration] Add a new log file entry for PPM in debug form (PR/#8616)
* [APIv1] Add some new parameters on host getter (PR/#8085)
* [AIPv1] Add new method to list only metrics name from a selected svc
* [APIv2] Manage downtimes for host and service (PR/#8110)
* [APIv2] Added API to find the configuration of pollers (PR/#8186)
* [APIv2] Added Rest API to display and update the default configuration of the Centreon proxy (PR/#8195)
* [APIv2] Add endpoints to check host or service (PR/#8333)
* [APIv2] Allow to order hosts and services by last state change (PR/#8349)
* [APIv2] Add endpoint to get metrics and status data from a service (PR/#8345)
* [APIv2] Add hostgroup listing endpoint (PR/#8352)
* [APIv2] Add new endpoint for servicegroup listing (PR/#8347)
* [APIv2] Make acknowledgement endpoints consistent with downtimes (PR/#8318)
* [APIv2] Add extra fields to host read endpoint (PR/#8392)
* [APIv2] Update service graph endpoints (PR/#8413)
* [APIv2] Shorter syntax for search request on resources (PR/#8442)
* [APIv2] Add option to mass disacknowledge resources (PR/#8430)
* [APIv2] Extend Downtime and Acknowledgement APIs related with monitoring with the property author_name
* [APIv2] Add API to retrieve all modules and widgets version (PR/#8469)
* [APIv2] Add methods for host configuration (PR/#8558)
* [Broker] Add connections_count parameter in form (PR/#8140)
* [Broker] Add Anomaly detection lua parameters from options table during configuration generation (PR/#8439)
* [Charts] Add new methods in graph backend (PR/#8170)
* [Configuration] Add countConnections for storage output (PR/#8512)
* [Install] Add dependency mechanism to fresh installation (PR/#8416)
* [Install] Externalize release note documentation during upgrade (PR/#8610)
* [Mobile] Add third level menu in mobile (PR/#8320)
* [UI] Migrate centreon web to use centreon-ui's components (PR/#8207)
* [UI] Hide empty graphs from service details (PR/#8329)

#### Architecture & performances

* Replace Centcore process by Centreon Gorgone (PR/#8414). [Please check the upgrade procedure](../upgrade/introduction.html)
* [Broker] Definitely remove correlation (PR/#8128)
* [Configuration] Export broker configuration in json format (PR/#8089)
* [Extensions] handle .pre.php install and uninstall module scripts.
* [Install] Check mariaDB version before using ALTER USER (PR/#8068)
* [LDAP] Set LDAP contactgroup synchronization every hour (PR/#8070)
* [SQL] Add missing index on ods_view_details.index_id (PR/#8445)
* [UI] use session cache to store top counter hosts/services results (PR/#8189)

#### Bug fixes

* [ACL] Remove ACL notice on lvl3 calculation (PR/#8120)
* [ACL] Return all services linked to a servicegroup (PR/#8406)
* [AIP] Add missing fields for hosts (PR/#8312)
* [AIP] Adjust the wrong check in Resource model (PR/#8418)
* [AIP] Extend ResourceRepositoryRDB::hasServiceSearch to check if host filters are used too (PR/#8427)
* [AIP] Fix missing parameter in repository (PR/#8567)
* [AIP] Fix the API dowtime after the Broker modifications (PR/#8145)
* [AIP] Fix the search parameter 'IN' (PR/#8380)
* [AIP] Improve Remote list endpoint to return ID as integer and improve the context of NagiosServer to be consistent with the endpoint
* [AIP] Improve getparam for host  (PR/#8201)
* [AIP] In Resource list will show the services that are related to host with status down (PR/#8428)
* [AIP] Remove PHP warning in centreon_configuration_service class (PR/#8214)
* [AIP] Update the POST proxy request by PUT (PR/#8243)
* [AIP] Use downtime_id to show and cancel rtdowntimes (PR/#8211)
* [API] Add macro password option for service template for clapi (PR/#8012)
* [API] Adding a notification method in case of configuration change (PR/#8623)
* [API] Fix overlapping in clapi export (PR/#8191)
* [API] Prevent adding new host with an empty name (PR/#8626)
* [API] Retrieve service state in service listing (PR/#8365)
* [API] Return curve metric name (PR/#8055)
* [API] Unable to set host notification to None through the API (PR/#8077)
* [Broker] Update comments and downtimes after the Brokers modifications (PR/#8132)
* [Chart] Curves in graph not synchronized on display (PR/#8039)
* [Charts] Manage timezone on zoom (PR/#8286)
* [Charts] Re allow to use wildcard in curve definition (PR/#8194)
* [Configuration] Fix PHP notice and warning on edit poller configuration form (PR/#8483)
* [Configuration] Fix host duplication when strict mode is enabled (PR/#8630)
* [Configuration] Fix performance regression from 19.10.x notification system (PR/#8143)
* [Configuration] Poller and Remote server wizard render looks broken (PR/#8459)
* [Configuration] Remove deprecated engine fields (PR/#8233)
* [Configuration] tpl condition in host form (PR/#8613)
* [Core] Better manage exceptions and upgrade failure (PR/#8234)
* [Core] Clean switch case service monitoring (PR/#8285)
* [Event-Logs] Allow to filter on disabled objects (PR/#8238)
* [Install] Add missing files in sources - #8222 (PR/#8226)
* [Install] Fix 19.10.1 update
* [Install] Fix PHP warning on step4 (PR/#8619)
* [Install] Issue when only modules or widgets selected (PR/#8555)
* [Install] Make SQL upgrade compatible with MariaDB 10.3
* [Install] Make all supported upgrade scripts compatible with strict mode.
* [Install] Modify the libinstall/functions file for APIv2 (PR/#8188)
* [Install] Remove harcoded version in source install (PR/#8332)
* [Install] Remove notice in the logs (PR/#8166)
* [Install] Replace macro in cron files (PR/#8359)
* [Install] Source installation script fixes (PR/#8341)
* [Install] Update libinstall scripts for Centreon (PR/#8180)
* [Install] Wrong value used for checkboxes refresh (PR/#8457)
* [Install] emove nagiosPerfTrace (PR/#8514)
* [LDAP] Correct double slashes in the saved DN (PR/#8122)
* [LDAP] Ldap users using the auto-import cannot login (PR/#8111)
* [LDAP] Undefined variable in ldap form (PR/#8431)
* [LDAP] Use define user member_attribute var (PR/#8287)
* [Login] Improve the way of redirection in login workflow for predefined default page (PR/#8581)
* [Login] keep uri parameters for auto-login (PR/#8262)
* [Monitoring] Correct assertion in downtime popup (PR/#8491)
* [Monitoring] Correct delete comments (PR/#8367)
* [Monitoring] Fix recurrent downtimes filter (PR/#7989 #7987)
* [Monitoring] Fix service grid display filter (PR/#8260)
* [Monitoring] Fix the End date format according to contact language (PR/#7951)
* [Monitoring] Servicegroup details displayed status (PR/#8253)
* [Notification] Link properly contact with contact template on file generation (PR/#8080)
* [RRD] Fix rrd command line with v1.5 (PR/#7804)
* [Remote-Server] Add broker stat to remote conf (PR/#8505)
* [Remote-Server] Add missing fields of engine conf in remote export (PR/#8559)
* [Remote-Server] Broker stats working on remote server (PR/#8591)
* [Remote-Server] Configuration export includes deprecated engine fields (PR/#8327)
* [Remote-Server] Export "NULL" values correctly to remote server (PR/#8281)
* [Remote-Server] Export hosts geo_coords to remote server (PR/#8390)
* [Remote-Server] Fix import with strict mode (PR/#7944)
* [Remote-Server] Host and service templates not properly imported (PR/#8147)
* [Remote-Server] Hostgroup and servicegroup not exported (PR/#8135)
* [Remote-server] Export properly trap matching and hostgroups (PR/#8054)
* [SQL] Fix default contact_autologin_key value
* [SQL] Prepare query before bind params (PR/#8105)
* [SQL] repare update traps query (PR/#8169)
* [Topology] Correct URL options for service pages (PR/#8162)
* [Translate] Fix translations (PR/#8338)
* [Translate] Update messages.po (FR/ES) (PR/#8502)
* [Traps]  Fix traps regression with same oid (PR/#8118)
* [Traps] Accept null value for description (PR/#8109)
* [Traps] Can't save a trap configuration (PR/#8165)
* [UI/API] Manage every kind of centreon base URI (PR/#8554 PR/#8572)
* [UI] Add missing translations for hosts and services (PR/#8590)
* [UI] Apply second filter whatever the first on Status Details (PR/#8200)
* [UI] Check format of top counter's endpoints return data (PR/#8187)
* [UI] Correct hostgoup detail problems filter (PR/#8265)
* [UI] Correctly compute localized downtime's datepickers (PR/#8486)
* [UI] Correctly toggle edit load and header of widgets (PR/#8114)
* [UI] Define new custom view error file template (PR/#8141)
* [UI] Display top counter even if monitoring is off (PR/#8193)
* [UI] Fix breacrumb url for parent's levels (PR/#8108)
* [UI] Fix host name filter history (PR/#8134)
* [UI] Fix image search parameters (PR/#8203)
* [UI] Fix notice produced by top counter (PR/#8599)
* [UI] Fix path of the check command (PR/#8255)
* [UI] Fix select2 Services by Hostgroup filter (PR/#8257)
* [UI] Pending mapping code incorrect for host object (PR/#8532)
* [UI] Restore pending blue light for host and service (PR/#8597)
* [UI] Use timezone in downtime popin (PR/#8557)
* [UI] fix check type of broker connections count (PR/#8185)
* [Widgets] Fix display for user with no widget preferences (PR/#8159)
* [Widgets] Fix double quote in widget title (PR/#8161)

#### Security

* Add an encryption system for external modules (PR/#8261)
* Avoid SQL injections in multiple monitoring pages - CVE-2019-17647 (PR/#8063, PR/#8094)
* Bump terser-webpack-plugin to 1.4.2 (PR/#8182)
* Check poller ip address validity (PR/#8404)
* Check session id in popup - CVE-2020-10945 (PR/#8326)
* Cross-site scripting (reflected) - Dont’ return js (PR/#8095)
* Do not allow to unhide password macros (PR/#8071)
* Exploit on graphs (PR/#8435)
* Fix call of host macros list without authentication - CVE-2019-17644 (PR/#8037)
* Fix call of service macros list without authentication - CVE-2019-17645 (PR/#8035)
* Improve authentication messages in login.log (PR/#7943)
* RCE on mib import from manufacturer input - CVE-2019-15298 (PR/#8023)
* Remove session id parameter - CVE-2020-10945 (PR/#8291)
* Sanitize params in CentreonHomeCustomview::getPreferences method (PR/#8448)
* Sanitize uri params in dashboard (PR/#8419)
* Set reea-only for default configuration menu ACL access (PR/#8317)
* Update composer dependencies (PR/#8515)
* Upgrade handlebars dependencies (PR/#8224)

## Centreon Engine release notes

### 20.04.8

#### Bugfixes

*Stalking option*

The stalking option works again, it has been fixed.

*Macros filters*

Macros can be filtered. This was possible before and there was a
regression breaking this functionality. So now, we can activate the
macros filtering and then we can specify which macros to send to broker.

*Notifications*

Host/service status field 'Last Notification' was filled when
state was HARD even if no notification is configured nor sent.

#### Bug fixes

### 20.04.7

#### Bug fixes

- Recovery notification with multiple users and different notification filters

### 20.04.6

#### Bug fixes

- Macros HOSTPROBLEMID, LASTHOSTPROBLEMID, SERVICEPROBLEMID and
LASTSERVICEPROBLEMID were buggy

### 20.04.5

#### Bug fixes

- Unicode check was buggy

### 20.04.4

#### Bug fixes

- Segfault when using on-demand macros

### 20.04.3

#### Bug fixes

- Add a control each time a check is done to verify its output is in UTF-8
format. If it is not the case, it is converted. Supported input encodings are
ISO-8859-15, CP-1252 and UTF-8.

### 20.04.2

#### Bug fixes

- Services not set to enabled 0 when linked host deleted or disabled

### 20.04.1

#### Bug fixes

- Fix won't start if log level is set to "Log everything" (debug_level=-1)

### 20.04.0

#### Bug fixes

- Fix macros replacement
- Fix perfdata truncated when retention read

#### Enhancements

- Add Anomaly Detection support
- [gRPC] Add gRPC interface
- [gRPC] Add statistics
- [Config] Add POLLERID & POLLERNAME macro

## Centreon Broker release notes

### 20.04.10

#### Bugfixes

*Build*

Build on Centos8 fixed.

*Retention files*

The splitter class is now thread safe and does not need external locks
anymore. It is also far less strict and allows some reading and some
writing at the same time.

*TCP*

Writing on a tcp stream could slow down in case of many retention files. The
issue was essentially in the flush internal function.

#### Enhancements

*TCP connections*

TCP streams are really faster, especially when Broker has retention
files and there are a lot of traffic.

*SQL and storage streams*

Those streams have several improvements:

    -   Events exchanges are really faster, especially when Broker has
        retention files.
    -   Several queries have been changed to insert data in bulk, it is
        the case for custom variables and metrics.
    -   There are cases where those streams could crash that have been
        also fixed.

*Statistics*

The thread pool has now its own statistics. For now, we have two
informations that are the number of threads it contains and its latency
in milliseconds that is the duration we have to wait to see a task
executed. We post a task to the thread pool at time T1, it is executed
by the thread pool at time T2, the latency is T2 - T1.

*Command line argument*

It is now possible to set the cbd pool size directly on the command line
with the –pool\_size X argument or -s X.

### 20.04.9

> Comportements connus:
>
>   - Si Broker sur un Poller ou un Remote Server n'est pas mis à jour
>     en 20.04.9, la communication entre ces Pollers ou Remote Servers
>     et un Central à jour peut ne pas fonctionner.
>
>     Comme toujours, nous **recommandons fortement** de mettre à jour
>     tous les composants en adéquation avec la version du Central.
>
>     Cependant, le temps de la mise à jour, la communication peut être
>     maintenue en s'assurant que les configurations des Brokers respectent
>     les conditions suivantes :
>
>       - le *chiffrement TLS* et la *compression* sont paramétrés à *Auto*
>         ou *No* sur l'entrée du Central,
>       - le *chiffrement TLS* et la *compression* sont paramétrés à *Auto*
>         ou *No* sur la sortie du Poller ou Remote Server.
>
>     Si le mode de connexion inversé (*one peer retention*) est utilisé,
>     la mise à jour de Broker est obligatoire.

#### Bug fixes

*One peer retention*

A known regression in the 20.04 Broker release was that the one peer
retention did not work correctly. It is fixed with this version.

*Columns contents too large*

In case of strings too large to be inserted in database, strings are
now truncated as if the database was configured in non strict mode.

*Negotiations*

Compression and TLS could fail between Engine and Broker, because of
issues in the negotiation between them. This is now fixed. If you
mix previous 20.04.x cbmod/cbd with this new one, you may continue to
have issues on this subject. We recommend you to do the upgrade of cbmod/cbd
on all of your pollers.

*Database deadlock*

When the database connectors are configured with several connections,
a host downtime could make a deadlock on the database. This is fixed now.

*Map server connection*

When the Map server is restarted, there is no more duplicated connections
from centreon-broker.

*BAM reporting*

BAM availability reporting could miss BAs during its availabilities
computations. This is fixed.

*TCP acceptors*

Sometimes TCP acceptor could badly close sockets. This could lead to
difficulties to reopen connections.

*INITIAL HOST STATE*

If you use BAM, there was an issue on the reporting that could fail
because of a missing initial host state. This is fixed now.

#### Enhancements

*TCP connector*

The TCP connector should also be largely improved. It is multithreaded
now and this should improve its performances. A new field in the Broker
configuration file allows to set how many threads run in the pool.

*TCP connections*

TCP connections are managed by a thread pool. When not configured, this
thread pool contains at least 2 threads and can increase up to half the
number of server CPUs. Otherwise, it is possible to configure it in the
TCP endpoint with the 'pool_size' label.

### 20.04.8

#### Bug fixes

- The UTF-8 chek/encoding is moved from engine to cbmod. This is easier to update for Centreon users.
  Also, the check algorithm is fixed. Some strings could be considered as UTF-8 strings whereas they were not.

### 20.04.7

#### Enhancements

- Contention in conflict manager when restarting Engine with lot of
  configuration: this version settles bases for future improvements

### 20.04.6

#### Bug fixes

- Crash with segfault possible during a database server restart
- BAM module could never recover after a database server restart

### 20.04.5

> Known issues:
>
> - When updating to 20.04.5, some badly encoded characters might block SQL
>   Broker events processing on the Central server. We strongly recommand to
>   update all the Engines to 20.04.3 version while updating to this Broker
>   version.
>
>   If you experience this behaviour, we recommand to downgrade Broker on the
>   Central server using this command:
>
>   ```shell
>   yum downgrade centreon-broker-20.04.4 centreon-broker-cbd-20.04.4 centreon-broker-storage-20.04.4 centreon-broker-cbmod-20.04.4 centreon-broker-core-20.04.4
>   ```
>
>   When the events queue is fully processed, you can update both Broker and
>   Engines.

#### Bug fixes

- Non ASCII characters badly encoded in database

### 20.04.4

#### Bug fixes

- [core] Service Check not updated

### 20.04.3

#### Bug fixes

- [core] Crash with many data in conflict_manager
- [core] Contention in events engine

### 20.04.2

#### Enhancements

- [streamconnector] Implement severity in the lua cache.

#### Bug fixes

- [core] Connections broken due to CRC errors
- [streamconnector] Several little bugs

### 20.04.1

- When output/perfdata of service_status are very long, we lost parts of messages
- Segfault on database errors
- Add a new stat() function on streamconnector
- '\r' not parsed correctly in perfdata
- perfdata parser too strict

### 20.04.0

- Change configuration file format to JSON
- Remove QT library
- [gRPC] Add gRPC interface
- [gRPC] Add statistics
- [gRPC] Add dynamic conf update
- [logs] Add a core logger
- [logs] Add logs for bbdo
- [logs] Add logs for tcp
- [logs] Add logs for tls
- [Performance] Move to a totaly asynchronous read
- [Performance] Add SQL multi-thread for connection
- Fix influxdb retention (PR #399)
- Fix TLS

## Centreon Gorgone release notes

### 20.04.7

#### Enhancements

- The configurations in config.d directory are not erased anymore at update
- [zmqclient] ID is not necessary anymore in end targets configuration
  (ie Pollers)

### 20.04.6

#### Bug fixes

- [zmqclient] Fix no PONG response in some cases
- [zmqclient] ZMQ_LINGER option was not correctly set by modules
- [legacycmd] Get only activated Engine configuration
- [action] Bad message parsing might lead to uncatched errors

#### Enhancements

- [sshclient] Allow to use 'SshDir', 'Identity' and 'KnownHosts' libssh options
  for SSH session
- Update dependencies to perl-Libssh-Session >= 0.8 and libssh => 0.9.4

### 20.04.5

#### Bug fixes

- [sshclient] SSH connection hangs indefinitely and never timeout

### 20.04.4

#### Bug fixes

- [core] Identity problem may appear when having Remote Server
- [core] File descriptor leak on HTTP backend
- [core] Reuse of handler on HTTP backend
- [proxy] Module unloaded because of slow MariaDB stop/start sequence
- [statistics] Module wrongly requests for Pollers configuration

#### Enhancements

- [core] Make connection possible in pull mode
- [core] Allow configuration overload

### 20.04.3

#### Bug fixes

- [autodiscovery] Escape correctly results to be inserted in database
- [config] Add error message for unreadable files
- [core] Better handle cURL calls
- [legacycmd] Continue to manage commands even if we cannot get CLAPI user (Remote Server)
- [legacycmd] Harden cache_dir directive test
- [proxy] Fix several SSH server connection issues (FD leak, pong reset)

### 20.04.2

#### Bug fixes

- [autodiscovery] Better management of utf8
- [autodiscovery] Fix returns in results process
- [contrib] Adapt to new statistics module
- [core] Avoid to get to many entries in gorgone_identity - update only last id
- [core] Better management of utf8
- [core] Unable to uncrypt RSA keys
- [dbcleaner] Purge was never done
- [install] Modifiy install for mode silent
- [legacycmd] Get good clapi admin user/password
- [nodes] Avoid error on new perl version
- [packaging] Add cron.d subdirectory
- [proxy] Avoid a text in ctime entry - sqlite can store text in int
- [proxy] Pong response for ssh client was rejected
- [yaml] Manage version even version 0.81

### 20.04.1

#### Bug fixes

- [nodes] Change resync time when you have a SQL issue

### 20.04.0

- Add Gorgone in replacement of Centcore
