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

## Centreon Web

### 20.04.0

*Released April, 22 2020*

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

## Centreon Engine

### 20.04.0	

* Add Anomaly Detection support
* [gRPC] Add gRPC interface
* [gRPC] Add statistics
* [Config] Add POLLERID & POLLERNAME macro
* Fix macros replacement
* Fix perfdata truncated when retention read

## Centreon Broker

### 20.04.0

* Change configuration file format to JSON
* Remove QT library
* [gRPC] Add gRPC interface
* [gRPC] Add statistics
* [gRPC] Add dynamic conf update
* [logs] Add a core logger
* [logs] Add logs for bbdo
* [logs] Add logs for tcp
* [logs] Add logs for tls
* [Performance] Move to a totaly asynchronous read
* [Performance] Add SQL multi-thread for connection
* Fix influxdb retention (PR #399)
* Fix TLS
