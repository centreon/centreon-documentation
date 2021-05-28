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

### 20.04.14

#### Bugfixes

- [Administration] Broker statistics for pollers are not shown
- [Core] Avoid 404 redirection

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
- [Graph] SQL Injection on Graph component templates
- [Graph] SQL Injection on Graph generate image
- [Reporting] SQL Injection on reporting export

#### Performance

- [ACL] ACL are computed every time for BV
- [Generation] Bulk insert in index_data during config generation

### 20.04.13

`May 10, 2021`

#### Bugfixes

- [Administration] Cannot list Pollers in Centreon Engine statistics
- [Configuration] Configuration output can lead to an empty broker configuration
- [Configuration] Hosts/services templates become simple hosts/services
- [Configuration] Wrong number of services/pages to display
- [Monitoring] Cancelled BA downtime from Downtime menu
- [Purge] Script can't drop several partitions

#### Security fixes

- [Administration] User can install or delete modules with no ACL rights
- [Configuration] Cross-site Scripting (XSS) Stored/Persistent in Dependency/Notification form
- [Configuration] SQL injection in user additional information
- [Configuration] Stored XSS in host Alias for host form
- [Core] Predictable anti-CSRF token
- [Graph] SQL Injection on graph periods
- [Graph] SQL Injection on graph split
- [Lib] Update centreon vulnerable packages
- [Resources Status / Service Details] Passwords are displayed in command line
- [Resources Status / Service Details] Passwords field for EXTRAOPTIONS is not hidden in command line

### 20.04.12

`April 1, 2021`

#### Bugfixes

- [Lib] Update moment-timezone to manage new timezones
- [Resources Status] Error when getting the command line for Meta Service detail

#### Security fixes

- [APIv2] API realtime rights give API configuration rights

### 20.04.11

`March 23, 2021`

#### Bugfixes

- [CLAPI] CFGMOVE & APPLYCFG don't work
- [Core] Update centreon copyright dates
- [Install] Complete the Last step upgrade redirection
- [Administration/About] Update about page with current team

#### Security fixes

- [Core] Cross-site Scripting (XSS) in index.php
- [Lib] Update jQuery to version >= 3.5.1

### 20.04.10

`February 24, 2021`

#### Enhancements

- [Configuration] Add the 'instance_heartbeat_interval' parameter in Engine configuration
- [Configuration] Improve access to the list of pollers
- [Core] Performance improvements for partitioning
- [Core] Update PHP 7.3 compatibility
- [Core] Use Gorgone to dispatch downtimes locally
- [Status Details] Display of comments in the host details page
- [Top counters] Displayed values for services don't consider host acknowledgements

#### Bugfixes

- [CLAPI] No control on dependencies relations
- [Configuration] Non-admin users can't create host/service

#### Security fixes

- [Administration] Cross-site Scripting (XSS) Stored/Persistent in "ACL > Resources Access" - CVE-2020-22425
- [Administration] XSS stored in the LDAP form
- [Apache] Remove deprecated TLS ciphers
- [Authentication] Session is active longer than expected
- [Authentication] User enumeration in login page
- [Configuration] Cross-site Scripting (XSS) Reflected in "Configuration > Hosts"
- [Core] Vulnerable handlebars.js library
- [Reporting] Cross-site Scripting (XSS) Reflected in "Dashboard > Hosts"

### 20.04.9

`January 28, 2021`

#### Bugfixes

- [CLAPI] APPLYCFG on a Poller behind a Remote Server doesn't trigger sync task for the RS itself
- [CLAPI] Cancel RTACKNOWLEDGEMENT doesn't work for services
- [CLAPI] Create user with language
- [CLAPI] Import fails on password type macros
- [CLAPI] Show RTACKNOWLEDGEMENT for a service only shows first one to have been defined
- [UX] Remplace "Test Proxy Configuration" with "Test Internet Connection"

#### Security fixes

- [ACL/Access Groups] Cross-site Scripting (XSS) Stored/Persistent for search
- [ACL/Actions Access] Cross-site Scripting (XSS) Stored/Persistent for search
- [ACL/Resources Access] Cross-site Scripting (XSS) Stored/Persistent for search
- [API] Missing access control mechanism in rest API v1
- [Configuration > Servicegroups] Leak of technical information
- [Configuration/H/HTPL/S/STPL] Password in plain text
- [Core] Centreon token is vulnerable against replay attack
- [Core] Token usage is not mandatory
- [Media] PHP warning about missing tmp dir used during media upload

### 20.04.8

`January 12, 2021`

#### Enhancements

- [Configuration] Add a special variable for trap OID
- [Performance] Disable UI notification mechanism if not needed by user

#### Bugfixes

- [Authentication] Invalid credentials after edit profile change with special characters
- [Authentication] New LDAP configurations are broken
- [Authentication] Reach Centreon Front-end parameter ineffective
- [CLAPI] Export does not export default contactgroup linked to a LDAP configuration
- [Configuration] Massive change on contact uses replacement instead of incremental method
- [Configuration] PHP Warning while creating a Centreon Engine configuration
- [Configuration] Unable to save log level in Centreon Engine form
- [Graphs] Performance graph legend does not update dynamically
- [Knowledge Base] Access to mediawiki is very slow

#### Security fixes

- [Apache] Lack of click diversion protection (Clickjacking)
- [Apache] Support for the HTTP TRACE method
- [Apache] Uncorrect HTTPS declaration of SSLCipherSuite in Centreon example file
- [Configuration] Cross-site Scripting (XSS) Stored/Persistent in Connectors & commands form
- [Configuration] Cross-site Scripting (XSS) Stored/Persistent in Contact Groups form
- [Configuration] XSS in updateContactParam.php & commonJS.php
- [Media] Unrestricted file upload
- [Monitoring/Legacy pages] Too much "Unable to hide passwords in command"

### 20.04.7

`Novembre 19, 2020`

#### Enhancements

- [Event View] Add filters in timeline for hosts details page
- [Event View] Add filters in timeline for services details page
- [Event View] Add shortcuts for hosts details page
- [Event View] Add shortcuts for services details page
- [Event View] Display info in timeline for hosts details page
- [Remote Server] Add the possibility to configure mail for users
- [Remote Server] Hide the "Configure host / service" buttons from monitoring legacy pages

#### Bugfixes

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

`October 28, 2020`

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

- [Event View] Be able to create and save filters
- [Event View] Be able to filter on status output
- [Event View] Be able to re order manage saved filters
- [Event View] Be able to re-order filter name
- [Event View] Be able to rename and delete saved filters
- [Event View] Be able to use custom filters
- [Event View] Host details - Display info in the timeline
- [Event View] Service details - Display info in the timeline

#### Bugfixes

- [ACL] Incorrect inheritance of categories/severities for services
- [API] Acknowledgement : inconsistency between doc & payload
- [CLAPI] Add getparams
- [CLAPI] Carriage return and line feed breaks comments
- [Configuration] Dependencies not deleted when last parent deleted
- [Configuration] Improve message to use Remote Server as proxy
- [Configuration] Issue with anomaly detection json output and proxy
- [Configuration] Unable to import MIB
- [Dashboard] Time is shown in epoch format on the dashboard timeline
- [Event View] Fail in pagination
- [Event View] Graph: "invalide date" displayed when switching the period + French wrong translation
- [Event View] Refresh the panel when the user clicks on the refresh button in details pages
- [Event View] When you empty the ack windows, it starts an infinite load
- [Event View] Information on screen not updated after checks
- [Eventlog] Acknowledged alerts status show "OK" but it's wrong
- [Graphs][legacy pages] 1000/1024 graph template ignored
- [Internal/API/Chart] Centreon db configuration name hard coded
- [Monitoring] Status output not correctly displayed with chinese characters
- [Remote-Server] incorrect url to contact Centreon Central Server
- [UI] Incoherent paging information display
- [Widgets] Can't change position of widgets
- [Widgets] Parameters are deleted when importing/deleting/importing a custom view

#### Security fixes

- [API] Information Disclosure in centreon_wiki internal API
- [API] Cross-site Scripting (XSS) Reflected in centreon_wiki internal API
- [Administration] Horizontal privilege escalation / session takeover
- [Configuration] Cross Site Scripting in widget rename
- [Configuration] RCE in SNMP trap import
- [Configuration] SQL Injection in "Configuration > Host categories"
- [Configuration] SQL Injection in "Configuration > Service Groups"
- [Configuration] SQL Injection in "Configuration > Service categories"
- [Knowledge-Base] Password in plain text in "Configuration > Knowledge base" menu
- [Platform Status] Fix vulnerability for file loading

### 20.04.5

`August 10, 2020`

#### Bugfixes

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

#### Security fixes

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

`July 6, 2020`

#### Bugfixes

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

#### Security fixes

- [Eventlog] SQL injection in "include/eventLogs/xml/data.php"
- [Configuration] SQL injection in "Configuration > Servicegroups"
- [EventLog] SQL injection in EventLog
- [Monitoring] SQL injection in graphTemplates.php
- [Monitoring] SQL injection in Graph (export CSV)
- [Monitoring] SQL injection in Graph (export XML)
- [Configuration] Missing access control mechanism in Gorgone configuration generation
- [API] CORS issue on "/monitoring/resources"

### 20.04.3

`June 10, 2020`

#### Enhancements

- [CLAPI] Add possibility to get childs of a host using CLAPI

#### Bugfixes

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

#### Security fixes

- [Web] RCE using command line path's argument (CVE-2020-12688)
- [Web] DoS issue in include/eventLogs/xml/data.php

### 20.04.2

`May 18, 2020`

> Due to a generation problem, 20.04.1 and 20.04.2 versions are both
> included in 20.04.2 version.

#### Enhancements

- [APIv2] Translate all text messages returned from API v2
- [Doc] Explain in FAQ chapter how to use HTTPS and correct Apache configuration
- [EventView] Help : Add tips to help users using regexp
- [UI] : Add "Asia/Yangon" timezone

#### Bugfixes

- [Backend] host-graph-v2 do not display all graph > graph endpoint issue ?
- [EventView] Header gets fully selected when searching
- [EventView] Icon for Downtime button is missing in Events View
- [EventView] Manage timezone in Graphs
- [EventView] Manage timezone in details panel
- [EventView] Wrong latency with forced check
- [Install] Harden Gorgone config generation at upgrade
- [KB] Each execution of cron synchronization generate temporary CURLCOOKIE
- [Monitoring] Correctly compute downtime duration

#### Security fixes

- Fix SQL Injection in makeXMLForAck.php

### 20.04.0

`April, 22 2020`

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

#### New features

- Add a new [Events view (beta)](../alerts-notifications/events-view.html)
- Add [Mobility](../mobile/introduction.html)

#### Enhancements

- [Administration] Add a new log file entry for PPM in debug form (PR/#8616)
- [APIv1] Add some new parameters on host getter (PR/#8085)
- [AIPv1] Add new method to list only metrics name from a selected svc
- [APIv2] Manage downtimes for host and service (PR/#8110)
- [APIv2] Added API to find the configuration of pollers (PR/#8186)
- [APIv2] Added Rest API to display and update the default configuration of the Centreon proxy (PR/#8195)
- [APIv2] Add endpoints to check host or service (PR/#8333)
- [APIv2] Allow to order hosts and services by last state change (PR/#8349)
- [APIv2] Add endpoint to get metrics and status data from a service (PR/#8345)
- [APIv2] Add hostgroup listing endpoint (PR/#8352)
- [APIv2] Add new endpoint for servicegroup listing (PR/#8347)
- [APIv2] Make acknowledgement endpoints consistent with downtimes (PR/#8318)
- [APIv2] Add extra fields to host read endpoint (PR/#8392)
- [APIv2] Update service graph endpoints (PR/#8413)
- [APIv2] Shorter syntax for search request on resources (PR/#8442)
- [APIv2] Add option to mass disacknowledge resources (PR/#8430)
- [APIv2] Extend Downtime and Acknowledgement APIs related with monitoring with the property author_name
- [APIv2] Add API to retrieve all modules and widgets version (PR/#8469)
- [APIv2] Add methods for host configuration (PR/#8558)
- [Broker] Add connections_count parameter in form (PR/#8140)
- [Broker] Add Anomaly detection lua parameters from options table during configuration generation (PR/#8439)
- [Charts] Add new methods in graph backend (PR/#8170)
- [Configuration] Add countConnections for storage output (PR/#8512)
- [Install] Add dependency mechanism to fresh installation (PR/#8416)
- [Install] Externalize release note documentation during upgrade (PR/#8610)
- [Mobile] Add third level menu in mobile (PR/#8320)
- [UI] Migrate centreon web to use centreon-ui's components (PR/#8207)
- [UI] Hide empty graphs from service details (PR/#8329)

#### Architecture & performances

- Replace Centcore process by Centreon Gorgone (PR/#8414). [Please check the upgrade procedure](../upgrade/introduction.html)
- [Broker] Definitely remove correlation (PR/#8128)
- [Configuration] Export broker configuration in json format (PR/#8089)
- [Extensions] handle .pre.php install and uninstall module scripts.
- [Install] Check mariaDB version before using ALTER USER (PR/#8068)
- [LDAP] Set LDAP contactgroup synchronization every hour (PR/#8070)
- [SQL] Add missing index on ods_view_details.index_id (PR/#8445)
- [UI] use session cache to store top counter hosts/services results (PR/#8189)

#### Bugfixes

- [ACL] Remove ACL notice on lvl3 calculation (PR/#8120)
- [ACL] Return all services linked to a servicegroup (PR/#8406)
- [AIP] Add missing fields for hosts (PR/#8312)
- [AIP] Adjust the wrong check in Resource model (PR/#8418)
- [AIP] Extend ResourceRepositoryRDB::hasServiceSearch to check if host filters are used too (PR/#8427)
- [AIP] Fix missing parameter in repository (PR/#8567)
- [AIP] Fix the API dowtime after the Broker modifications (PR/#8145)
- [AIP] Fix the search parameter 'IN' (PR/#8380)
- [AIP] Improve Remote list endpoint to return ID as integer and improve the context of NagiosServer to be consistent with the endpoint
- [AIP] Improve getparam for host  (PR/#8201)
- [AIP] In Resource list will show the services that are related to host with status down (PR/#8428)
- [AIP] Remove PHP warning in centreon_configuration_service class (PR/#8214)
- [AIP] Update the POST proxy request by PUT (PR/#8243)
- [AIP] Use downtime_id to show and cancel rtdowntimes (PR/#8211)
- [API] Add macro password option for service template for clapi (PR/#8012)
- [API] Adding a notification method in case of configuration change (PR/#8623)
- [API] Fix overlapping in clapi export (PR/#8191)
- [API] Prevent adding new host with an empty name (PR/#8626)
- [API] Retrieve service state in service listing (PR/#8365)
- [API] Return curve metric name (PR/#8055)
- [API] Unable to set host notification to None through the API (PR/#8077)
- [Broker] Update comments and downtimes after the Brokers modifications (PR/#8132)
- [Chart] Curves in graph not synchronized on display (PR/#8039)
- [Charts] Manage timezone on zoom (PR/#8286)
- [Charts] Re allow to use wildcard in curve definition (PR/#8194)
- [Configuration] Fix PHP notice and warning on edit poller configuration form (PR/#8483)
- [Configuration] Fix host duplication when strict mode is enabled (PR/#8630)
- [Configuration] Fix performance regression from 19.10.x notification system (PR/#8143)
- [Configuration] Poller and Remote server wizard render looks broken (PR/#8459)
- [Configuration] Remove deprecated engine fields (PR/#8233)
- [Configuration] tpl condition in host form (PR/#8613)
- [Core] Better manage exceptions and upgrade failure (PR/#8234)
- [Core] Clean switch case service monitoring (PR/#8285)
- [Event-Logs] Allow to filter on disabled objects (PR/#8238)
- [Install] Add missing files in sources - #8222 (PR/#8226)
- [Install] Fix 19.10.1 update
- [Install] Fix PHP warning on step4 (PR/#8619)
- [Install] Issue when only modules or widgets selected (PR/#8555)
- [Install] Make SQL upgrade compatible with MariaDB 10.3
- [Install] Make all supported upgrade scripts compatible with strict mode.
- [Install] Modify the libinstall/functions file for APIv2 (PR/#8188)
- [Install] Remove harcoded version in source install (PR/#8332)
- [Install] Remove notice in the logs (PR/#8166)
- [Install] Replace macro in cron files (PR/#8359)
- [Install] Source installation script fixes (PR/#8341)
- [Install] Update libinstall scripts for Centreon (PR/#8180)
- [Install] Wrong value used for checkboxes refresh (PR/#8457)
- [Install] emove nagiosPerfTrace (PR/#8514)
- [LDAP] Correct double slashes in the saved DN (PR/#8122)
- [LDAP] Ldap users using the auto-import cannot login (PR/#8111)
- [LDAP] Undefined variable in ldap form (PR/#8431)
- [LDAP] Use define user member_attribute var (PR/#8287)
- [Login] Improve the way of redirection in login workflow for predefined default page (PR/#8581)
- [Login] keep uri parameters for auto-login (PR/#8262)
- [Monitoring] Correct assertion in downtime popup (PR/#8491)
- [Monitoring] Correct delete comments (PR/#8367)
- [Monitoring] Fix recurrent downtimes filter (PR/#7989 #7987)
- [Monitoring] Fix service grid display filter (PR/#8260)
- [Monitoring] Fix the End date format according to contact language (PR/#7951)
- [Monitoring] Servicegroup details displayed status (PR/#8253)
- [Notification] Link properly contact with contact template on file generation (PR/#8080)
- [RRD] Fix rrd command line with v1.5 (PR/#7804)
- [Remote-Server] Add broker stat to remote conf (PR/#8505)
- [Remote-Server] Add missing fields of engine conf in remote export (PR/#8559)
- [Remote-Server] Broker stats working on remote server (PR/#8591)
- [Remote-Server] Configuration export includes deprecated engine fields (PR/#8327)
- [Remote-Server] Export "NULL" values correctly to remote server (PR/#8281)
- [Remote-Server] Export hosts geo_coords to remote server (PR/#8390)
- [Remote-Server] Fix import with strict mode (PR/#7944)
- [Remote-Server] Host and service templates not properly imported (PR/#8147)
- [Remote-Server] Hostgroup and servicegroup not exported (PR/#8135)
- [Remote-server] Export properly trap matching and hostgroups (PR/#8054)
- [SQL] Fix default contact_autologin_key value
- [SQL] Prepare query before bind params (PR/#8105)
- [SQL] repare update traps query (PR/#8169)
- [Topology] Correct URL options for service pages (PR/#8162)
- [Translate] Fix translations (PR/#8338)
- [Translate] Update messages.po (FR/ES) (PR/#8502)
- [Traps]  Fix traps regression with same oid (PR/#8118)
- [Traps] Accept null value for description (PR/#8109)
- [Traps] Can't save a trap configuration (PR/#8165)
- [UI/API] Manage every kind of centreon base URI (PR/#8554 PR/#8572)
- [UI] Add missing translations for hosts and services (PR/#8590)
- [UI] Apply second filter whatever the first on Status Details (PR/#8200)
- [UI] Check format of top counter's endpoints return data (PR/#8187)
- [UI] Correct hostgoup detail problems filter (PR/#8265)
- [UI] Correctly compute localized downtime's datepickers (PR/#8486)
- [UI] Correctly toggle edit load and header of widgets (PR/#8114)
- [UI] Define new custom view error file template (PR/#8141)
- [UI] Display top counter even if monitoring is off (PR/#8193)
- [UI] Fix breacrumb url for parent's levels (PR/#8108)
- [UI] Fix host name filter history (PR/#8134)
- [UI] Fix image search parameters (PR/#8203)
- [UI] Fix notice produced by top counter (PR/#8599)
- [UI] Fix path of the check command (PR/#8255)
- [UI] Fix select2 Services by Hostgroup filter (PR/#8257)
- [UI] Pending mapping code incorrect for host object (PR/#8532)
- [UI] Restore pending blue light for host and service (PR/#8597)
- [UI] Use timezone in downtime popin (PR/#8557)
- [UI] fix check type of broker connections count (PR/#8185)
- [Widgets] Fix display for user with no widget preferences (PR/#8159)
- [Widgets] Fix double quote in widget title (PR/#8161)

#### Security fixes

- Add an encryption system for external modules (PR/#8261)
- Avoid SQL injections in multiple monitoring pages - CVE-2019-17647 (PR/#8063, PR/#8094)
- Bump terser-webpack-plugin to 1.4.2 (PR/#8182)
- Check poller ip address validity (PR/#8404)
- Check session id in popup - CVE-2020-10945 (PR/#8326)
- Cross-site scripting (reflected) - Dont’ return js (PR/#8095)
- Do not allow to unhide password macros (PR/#8071)
- Exploit on graphs (PR/#8435)
- Fix call of host macros list without authentication - CVE-2019-17644 (PR/#8037)
- Fix call of service macros list without authentication - CVE-2019-17645 (PR/#8035)
- Improve authentication messages in login.log (PR/#7943)
- RCE on mib import from manufacturer input - CVE-2019-15298 (PR/#8023)
- Remove session id parameter - CVE-2020-10945 (PR/#8291)
- Sanitize params in CentreonHomeCustomview::getPreferences method (PR/#8448)
- Sanitize uri params in dashboard (PR/#8419)
- Set reea-only for default configuration menu ACL access (PR/#8317)
- Update composer dependencies (PR/#8515)
- Upgrade handlebars dependencies (PR/#8224)

## Centreon Engine


### 20.04.11

`April 28, 2021`

#### Bugfixes

- Bad memory access on hostgroupname/servicegroupname macros
- SERVICEGROUPNAME macro doesn't appear in notifications

### 20.04.10

`April 28, 2021`

> This version requires Centreon Broker version to be 20.04.13 or higher.

#### Bugfixes

- Recovery notifications were not sent when exiting from downtime
- Recovery notifications are not sent when entering in notification timeperiod
- Hosts and services actively checked had their statuses returned to Broker twice
- $TIMET$ macro displayed time instead of epoch
- Flapping was not detected
- SERVICENOTESURL macro value was encoded in notifications
- Engine did not respect user's defined notification periods 
- Engine stopped working without logging an error


### 20.04.9

`January 20, 2021`

> This version requires Centreon Broker version to be 20.04.12 or higher.

#### Bugfixes

*Notification macros*

The macros in which notification information can be found have been fixed
(ie $NOTIFICATION*$, $HOSTNOTIFICATION*$, $SERVICENOTIFICATION*$)

#### Enhancements

*Instance updates*

There is a minimal delay specified in seconds between two instance updates.
By default, its value is 30s. It can be set with the variable
instance_heartbeat_interval in the centengine.cfg file.

### 20.04.8

`December 16, 2020`

#### Bugfixes

*Stalking option*

The stalking option works again, it has been fixed. Make sure you are not
enabling volatile option at the same time to really get an output
stalking.

*Macros filters*

Macros can be filtered. This was possible before and there was a
regression breaking this functionality. So now, we can activate the
macros filtering and then we can specify which macros to send to broker.

*Notifications*

Host/service status field 'Last Notification' was filled when
state was HARD even if no notification is configured nor sent.

### 20.04.7

`Octobre 12, 2020`

#### Bugfixes

*Recovery notifications*

Users were receiving recovery notifications even though they weren't notified
for a problem. This is now fixed.

### 20.04.6

`September 3, 2020`

#### Bugfixes

*PROBLEMID macros*

It was buggy on hosts and on services (ie HOSTPROBLEMID, LASTHOSTPROBLEMID,
SERVICEPROBLEMID and LASTSERVICEPROBLEMID). This new version fixes this point.

### 20.04.5

`August 18, 2020`

#### Bugfixes

*Unicode check was buggy*

The code that validates the UTF-8 strings was buggy and could keep as is some
characters that were not UTF-8. It is fixed and moved to the cbmod module.

### 20.04.4

`July 6, 2020`

#### Bugfixes

*On-demand macros on services do not work*

On-demand on service did not work, and most of the time crashed.
This is fixed with this new version.

### 20.04.3

`June 23, 2020`

#### Bugfixes

*Windows checks can be CP1252 encoded*

To write into the database such strings is impossible unless we convert the
string to utf-8. This is what is done in this new Engine version. Each time
a check is done, we verify its output is in UTF-8 format, if it is not the
case, it is converted. Supported input encodings are ISO-8859-15, CP-1252 and
UTF-8.

### 20.04.2

`June 16, 2020`

#### Bugfixes

*If a host is disabled, it should also be the case for its services*

If a host with several services is disabled, its services are removed from
the monitoring. But a query in centreon_storage shows that those services
are still there. With this new version, it is fixed.

### 20.04.1

`May 12, 2020`

#### Bugfixes

*debug_lvl=-1*

Engine was stuck when we put -1 as debug_lvl in centengine.cfg.

### 20.04.0

`April 22, 2020`

#### Bugfixes

*Perfdata truncated when read from retention*

Values containing a ';' character were truncated when read from the retention
file. This new release fixes this issue.

*Notifications between two fixed contiguous downtimes*

It was possible to have notifications sent between the two downtimes even if
the space duration is 0.

*Macros replacements*

Host macros and several global macros containing numbers were badly replaced.

#### Enhancements

*Support for POLLERNAME macro*

You can now use $POLLERNAME$ macro to retrieve the name of your poller in
a check_command. It will use the poller_name field of your config.

*Support for POLLERID macro*

You can now use $POLLERID$ macro to retrieve the name of your poller in
a check_command. It will use the poller_id field of your config.

## Centreon Broker

### 20.04.13

`April 28, 2021`

*Broker*

- Add TLS handshake in broker debug logs
- Allow point as a valid character for ouput's name
- Broker hangs when stopped alone (without watchdog)
- Connection interruption not detected by Central (one peer retention mode)
- Harden SIGTERM handling when shutting down
- Insert NULL instead of Nan or Inf for metrics data
- Provide host_id and service_id in logs when metrics fail to be inserted in database
- Rebuild of RRD not working	David Boucher
- TLS common name check impossible if it is too long

*Engine*

- Engine stops working without error
- Limit downtime start date, end date and duration
- Stopping Engine using systemctl can lead to a segfault

*Security*

- Strengthen TLS / SSL exchanges

### 20.04.12

`January 20, 2021`

#### Bugfixes

*Conflict manager and comments*

It is possible to lock the database during comments insertion. This new
version fixes that.

*BAM reporting dimensions computation*

If there are retention files, dimensions computation could fail because of
conflicts between new block computation and old ones (the ones in the
retention). There was also an issue of concurrent access to tables during
dimensions computation.

*BAM availabilities rebuild*

When availabilities are rebuilt, durations can be doubled. This new version
fixes this issue.

#### Enhancements

*Logs*

Logs are sent to the database in bulk as we already do for customvariables.

*Lua*

There is a new API available for the Lua connector. To use it, scripts
must declare a global variable `broker_api_version=2`. From the user's
point of view, Stream Connectors should work almost the same. In isolate
cases, we could see scripts that do not work with this new API, then you
can always work with Broker API version 1, by setting the variable to 1
or by removing this variable declaration in the script. Why should we
use the v2 version? Because it is faster, really faster.

*TCP connections*

If the connection between two peers is flapping, it may be difficult for one
to reconnect to the other and this could lead to many CLOSE_WAIT on the
acceptor side. This new version fixes this issue.

### 20.04.11

`December 16, 2020`

> Known behaviours:
>
>   - If TLS encryption is configured to use private key/certificate couple
>     for IPv4/6 input/output endpoints, **both ends must be updated**
>     to ensure communication.
>
>   - If you use Centreon MAP with TLS encryption, make sure to **update MAP
>     server** to version >= 20.04.5.

#### Bugfixes

*TLS*

Credentials were not loaded by the TLS connector anymore. This is fixed with this
new version.

*Custom variables*

They were updated several times in the database. It is fixed now.

*Build*

GnuTLS requirement now matches compilation version.

*BAM*

Reporting events were not stored into database because of truncated
Business Activities names causing *duplicate entry* errors.

### 20.04.10

`November 25, 2020`

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

-   Events exchanges are much faster, especially when Broker has
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

`October 26, 2020`

> Known behaviours:
>
>   - If Broker on a Poller or Remote Server is not upgraded to 20.04.9
>     the communication between said Poller or Remote Server and an
>     upgraded Central may not work.
>
>     As always, we **strongly recommend** to upgrade all components to match
>     the Central server's version.
>
>     However, during an upgrade process, communication can be maintained
>     by making sure Broker's configurations match the following conditions:
>
>     - *TLS encryption* and *compression* are either set to
>       *Auto* or *No* on Central input,
>     - *TLS encryption* and *compression* are either set to
>       *Auto* or *No* on Poller or Remote Server output.
>
>     If the reversed connection mode (*one peer retention*) is used,
>     the Broker upgrade is mandatory.

#### Bugfixes

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

`August 18 2020`

#### Bugfixes

*UTF-8 encoding*

The UTF-8 chek/encoding is moved from engine to cbmod. This is easier to
update for Centreon users. Also, the check algorithm is fixed. Some
strings could be considered as UTF-8 strings whereas they were not.

### 20.04.7

`August 4 2020`

#### Enhancements

*Contention*

Conflict manager configuration is easier and more flexible.

### 20.04.6

`July 6, 2020`

#### Bugfixes

*Segfault possible during a Mariadb server restart*

Centreon Broker could crash when the database server was restarted.
This version fixes this bug.

*BAM module could never recovery after a Mariadb server restart*

BAM module is better managed on database server reload/restart.

### 20.04.5

`June 11, 2020`

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

#### Bugfixes

*Not ASCII characters badly encoded in database*

If a check output contains not ASCII characters, they are badly transformed
and the string looses its sense. This is fixed.

### 20.04.4

`May 27, 2020`

#### Bugfixes

*NEB service status check were badly handled*

Service status check were badly handled. For example the field
command_line was not updated in service. This bug was introduced
in 20.04.3.

### 20.04.3

`May 26, 2020`

#### Bugfixes

*Events were badly acknowledged after being sent to the database*

SQL/storage did not acknowledge all the events. This produced retention files.

*Long events could be corrupted*

There was a bug in the long events management.

*Filter on events entering in storage*

A bug on this filter is now fixed.

*Retention files*

A regression was introduced. All the retention files could not be read.

*MariaDB strict mode*

The strict mode implies that strings too long for a column break queries. To
avoid this, we truncate too long strings and set a warning log for users.

### 20.04.2

`May 13, 2020`

#### Bugfixes

*BBDO is sending corrupted data*

Data could be badly sent, leading to CRC errors. Now it is fixed.

#### Enhancements

*Stream connector*

The Stream connector cache has three new functions that are get_notes(),
get_notes_url() and get_action_url(). They can be used on hosts or on
services.

To use them on hosts, you just have to give the host id as parameter. To use
them on services, you just have to give the host id and the service id as
parameters. All this is detailed in the Broker documentation.

It is also possible to get the severity of a host or a service. We provide now
the function broker_cache:get_severity(host_id, service_id). If you just give
the host_id, we suppose you want a host severity.

### 20.04.1

`May 12, 2020`

#### Bugfixes

*Strict mode of the database*

Too long strings to insert in database are cut so that cbd continues to work.
This will be improved in a future Broker version. A warning is logged so that
the user can change his configuration to avoid that.

*Perfdata parsing*

Special characters like '\\r' were not parsed correctly.

*Conflict manager*

In case of bad configurations concerning the database, cbd can crash. This is
fixed with with new version.

#### Enhancements

*Perfdata parser*

The parser is less strict. It tries to keep good metrics among bad ones.

*New Lua function in the Stream Connector*

There is a new function broker.stat(filename) to get informations about the
filename.

### 20.04.0

`April 22, 2020`

#### Enhancements

*Removal of Qt*

Broker does not need Qt anymore.

*Steam connector*

New function to decode a JSON string into a Lua table.

The stream connector is now asynchronous. If it has to execute a script that
is too slow, it won't slow down Broker. Broker will just return messages
complaining about the slowness of the script.

Another change, now when a stream connector crashes, Broker does not terminate
but just returns an error message containing the Lua interpreter error.

*Configuration files*

Switch from XML to JSON. We used json11 toolkit, and remove
all ref for yajl from sources.

*Network*

Switch from QtNetwork to Asio. We start an effort to avoir copy in network
buffers.

*Optimization*

Migration of the code to C++11.

*Better tests coverage*

We now have 370+ tests (+280%). It allow us to have a better code coverage
of the code base.

#### Bugfixes

*Influxdb connector and retention*

If a retention is configured on the Influxdb server and Centreon Broker sends
too old data compared to this retention, the connector ends with an error and
Broker pushes data in retention instead of throwing them away.
This patch fixes that.

## Centreon Gorgone

### 20.04.10

`March 4, 2021`

#### Enhancements

- [core] Bulk external commands sent to Engine

### 20.04.9

`January 29, 2021`

#### Bugfixes

- [zmqclient] Harden communication to avoid "Protocol not good" errors
- [zmqclient] Increment ZMQ_LINGER period for some modules
- [zmqclient] Lot of ESTABLISHED connections on server side when network
  is flapping
- [sshclient] Command actions badly encoded lead to badly encoded messages
  in web UI (downtimes, acknowledgements)

#### Enhancements

- [anomalydetection] Reduce time interval between prediction downloads

### 20.04.8

`December 17, 2020`

#### Bugfixes

- [proxy] gorgone-proxy processes stucked when stopping gorgoned
- [core] Rare case of database handler wrongly instantiated due to race
  condition issue

#### Enhancements

- [proxy] Force TCP reconnection after 3 ping timeout

### 20.04.7

`November 23, 2020`

#### Enhancements

- The configurations in config.d directory are not erased anymore at update
- [zmqclient] ID is not necessary anymore in end targets configuration
  (ie Pollers)

### 20.04.6

`October 19, 2020`

#### Bugfixes

- [zmqclient] Fix no PONG response in some cases
- [zmqclient] ZMQ_LINGER option was not correctly set by modules
- [legacycmd] Get only activated Engine configuration
- [action] Bad message parsing might lead to uncatched errors

#### Enhancements

- [sshclient] Allow to use 'SshDir', 'Identity' and 'KnownHosts' libssh options
  for SSH session
- Update dependencies to perl-Libssh-Session >= 0.8 and libssh => 0.9.4

### 20.04.5

`September 16, 2020`

#### Bugfixes

- [sshclient] SSH connection hangs indefinitely and never timeout

### 20.04.4

`August 13, 2020`

#### Bugfixes

- [core] Identity problem may appear when having Remote Server
- [core] File descriptor leak on HTTP backend
- [core] Reuse of handler on HTTP backend
- [proxy] Module unloaded because of slow MariaDB stop/start sequence
- [statistics] Module wrongly requests for Pollers configuration

#### Enhancements

- [core] Make connection possible in pull mode
- [core] Allow configuration overload

### 20.04.3

`June 22, 2020`

#### Bugfixes

- [autodiscovery] Escape correctly results to be inserted in database
- [config] Add error message for unreadable files
- [core] Better handle cURL calls
- [legacycmd] Continue to manage commands even if we cannot get CLAPI user (Remote Server)
- [legacycmd] Harden cache_dir directive test
- [proxy] Fix several SSH server connection issues (FD leak, pong reset)

### 20.04.2

`May 12, 2020`

#### Bugfixes

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

`April 23, 2020`

#### Bugfixes

- [nodes] Change resync time when you have a SQL issue

### 20.04.0

`April 22, 2020`

- Add Gorgone in replacement of Centcore
