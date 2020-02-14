---
id: release-notes
title: Release notes
---

## Introduction

You can find in this chapter all changelogs that give you knowledges about the
changes integrated into each releases of Centreon Web.

> It is very important when you update your system to refer to this section in
> order to learn about behavior changes or major changes that have been made on
> this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have
> built on your platform (modules, widgets, plugins).

If you have any questions relating to the content of the notes, you can ask your
questions on our [github](https://github.com/centreon/centreon).

## Releases

### Centreon Web 20.04.0-beta.1

#### Enhancements

#### Bug Fixes


### Centreon Web 19.10.7

#### Bug Fixes

  - \[Charts\] Problem using zoom in when having timezone (PR \#8286)
  - \[Source install\] Several files are not copied in centreon directory
  - \[Status Details\] "Display details" strange behaviour when "Summary"
    selected in by Hostgroup page (PR \#8265)
  - \[UI\] Add nowrap style to badge class to avoid wrap in dense typeface
    environments like chinese (PR \#8314)

#### Security

  - Do not expose session ID identifier in URL (PR \#8291)

#### Technical

  - Remove all unused front-end code

### Centreon Web 19.10.6

#### Bug Fixes

  - \[Status Details\] Services shown as CRITICAL while OK (PR \#8253)
  - \[Status Details\] Cannot empty "Hostgroup" drop-down list in "Services by
    Hostgroup" (PR \#8257)
  - \[Autologin\] Access to URI with arguments (PR \#8262)
  - \[Configuration\] Check command --help display won't work (PR \#8255 and
    \#8268)
  - \[Event Logs\] Filter on disabled objects (PR \#8238)
  - \[Services Grid\] Filters not used correctly (PR \#8260)

### Centreon Web 19.10.5

#### Bug Fixes

  - \[Install\] Check MariaDB version before using ALTER USER (PR/\#8068)
  - \[Install\] Update libinstall scripts (PR/\#8180, PR/\#8188)
  - \[Status Details\] "Display details" not working when "Summary" selected
    (PR/\#8200)
  - \[Traps\] Cannot save trap configuration (PR/\#8165, PR/\#8169)
  - \[Clapi\] Fix overlapping in clapi export (PR/\#8191 fixes \#7562)
  - \[Clapi\] Add parameters for HOST object (PR/\#8085)
  - \[API\] Improve consistency of getparam (PR/\#8201)
  - \[Custom View\] fix display for user with no widget preferences (PR \#8159
    fixes \#7875)
  - \[Web\] Issue with random blank pages (PR/\#8187,\#8193)
  - \[Web\] Search in media page does not work (PR/\#8203)
  - \[Web\] Improve authentication messages in login.log (PR/\#7943)

#### Security

  - \[Web\] Bump terser-webpack-plugin to 1.4.2 (PR/\#8182)
  - \[Web\] Upgrade handlebars dependencies (PR/\#8224)

### Centreon Web 19.10.4

#### Documentation

  - Clearly indicate that dependencies between pollers are not possible

#### Improvements

  - \[Downtimes\] Manage downtimes for host and service (PR/\#8110)

#### Bug Fixes

  - \[Custom Views\] Define new custom view error file template (PR/\#8141)
  - \[Custom Views\] Fix double quote in widget title (PR/\#8161)
  - \[ACL\] Remove ACL notice on lvl3 calculation (PR/\#8120)
  - \[Configuration\] Fix performance regression in notification system
    (PR/\#8143)
  - \[Remote\] Host and service templates are not properly imported (PR/\#8147)
  - \[Topology\] Correct URL options for service pages (PR/\#8164)

### Centreon Web 19.10.3

#### Bug Fixes

  - \[LDAP\] Correct double slashes in the saved DN (PR/\#8121)

#### Security Fixes

  - Fix call of service macros list without authentication - CVE-2019-17645
    (PR/\#8035)
  - Fix call of host macros list without authentication - CVE-2019-17644
    (PR/\#8037)

### Centreon Web 19.10.2

#### Bug Fixes

  - LDAP users using DN with special chars cannot login
  - LDAP connection issue
  - Select all elements in select2 freeze the screen
  - Non synchronized curves when using rrdcached
  - Missing selection of Okta template for LDAP
  - Trap matches and hostgroups break export in Remote Server
  - Trap export on Remote Server fails
  - Recurrent downtimes search bug
  - Unable to hide service template macro with Clapi
  - Macro passwords can be visible
  - Calculation of contact groups too frequent
  - Additional Remote Server config fails
  - Unable to set host notification to None through API
  - Remove unused radio button in meta-service configuration
  - Contact template notification parameters are not inherited
  - Filter "Name" is emptied out when searching in host configuration
  - Incorrect CSV export in Event Logs
  - Add/List/Cancel downtimes on resources
  - Correctly toggle edit when widgets load
  - Using rrdcached provides non synchronized curves
  - Add curve label in API
  - Poller statistics charts are missing
  - Several trap definitions with same OID will not work

#### Security

  - No check for authentication
  - SQL injections
  - RCE flaws
  - XSS
  - Authentication flaw

#### Documentation

  - Display release notes per section in upgrade process
  - Update performance FAQ for rrdcached

### Centreon Web 19.10.1

#### Bug Fixes

  - \[Install/update\] correct loop issue on installation/update (PR/\#7997)

### Centreon Web 19.10.0

#### Features

  - \[Authentication\] Add Keycloak SSO authentication in Centreon (PR/\#7700)
  - \[API v2\] New real time monitoring JSON REST API v2 for services and hosts
    - currently in beta version (PR/\#7821)
  - \[API v2\] Manage acknowledgements (PR/\#7907)
  - \[Notification\] Add new options for Contacts & Contact groups method
    calculation (PR/\#7917, PR/\#7960, PR/\#7963, PR/\#7965, PR/\#7971):
      - *Vertical Inheritance Only*: get contacts and contactgroups of resources
        and linked templates, using additive inheritance enabled option (Legacy
        method, keep for upgrade)
      - *Closest Value*: get most closed contacts and contactgroups of resources
        including templates
      - *Cumulative inheritance*: Cumulate all contacts and contactgroups of
        resources and linked templates (method used for new installation)

#### Enhancements

  - \[Administration\] \[Audit logs\] Add purge function for audit logs
    (PR/\#7710)
  - \[Authentication\] Add Okta LDAP template (PR/\#7825)
  - \[Charts\] Centreon-Web Graph Display and png export is coherent (PR/\#7676)
  - \[Charts\] Better management of virtual metrics: you can display or not a
    virtual metric (PR/\#7676)
  - \[Charts\] Only one color by curve: users see the same color curve
    (PR/\#7676)
  - \[Configuration\] Add display locked checkbox for objects listing (\#7444)
  - \[Configuration\] Add contactgroups filter in list of contacts (PR/\#7744)
  - \[Configuration\] Add status and vendor filters in list of SNMP traps
    (PR/\#7758)
  - \[Configuration\] Move global rrdcached option to Centreon Broker form for
    each broker (PR/\#7791)
  - \[Configuration\] Allow to redifine action command for Centeron Engine &
    Centreon Broker (PR/\#7810)
  - \[Install\] Allow people to use another user that has root privileges when
    installing centreon (PR/\#7445)
  - \[Install\] Add possibility to install widget during last step (PR/\#7890)
  - \[Install\] New script that aims at automating all manual steps that are
    required when installing Centreon from packages (PR/\#7853)
  - \[Remote Server\] Poller attached to multiple remote servers (PR/\#7849)
  - \[Remote-Server\] Allow to use direct ssh connection to poller from central
    (PR/\#7680)
  - \[Remote-Server\] Optimize execution time of export/import (PR/\#7749)
  - \[Remote-Server\] Improve centreonworker logging (PR/\#7712)
  - \[UI\] Do not display round values in detailed top counter (PR/\#7547)
  - \[UI\] Style default select to be as much like select2 as possible
    (PR/\#7819)
  - \[UI\] Update style of checkbox, radio, tabs (PR/\#7845)
  - \[UI\] Adding cursor pointer to icons (PR/\#7613)
  - \[Widgets\] Add multiselect on severity preference (PR/\#7752)
  - \[Widgets\] Upgrade poller preference of engine-status widget (PR/\#7820)
  - \[Widgets\] Add connectors for servicegroups and severities (PR/\#7753)

#### Performance

  - \[ACL\] centAcl optimize memory and time execution (PR/\#7751)
  - \[API\] Improve performance of clapi call through REST API (PR/\#7842)
  - \[Chart\] Increase performance on server side when we get data from rrd
    files to display charts: between 70% and 90% (PR/\#7676)

#### Documentation

  - Doc correct migration using Nagios reader (PR/\#7781)
  - Update MySQL prerequisites for master (PR/\#7904)
  - Improve documentation for MySQL/MariaB strict mode (PR/\#7806)
  - Improve migration procedure (commit 47be1c3)
  - Improve prerequisites (commit 7200461)
  - Fix typo Centreon word (and one variable) (PR/\#7796, PR/\#7806)
  - Add link to Centreon API JSON REST v2 (commit bfac416)
  - Add OS update (commit 04e9942)

#### Bug Fixes

  - \[ACL\] Redirect to login page when user is unauthorized (PR/\#7687)
  - \[ACL\] Add ACL to select meta-services for list of services in performance
    menu (PR/\#7736)
  - \[ACL\] Fix cron renaming bound variable name (PR/\#7984)
  - \[API\] Delete services when host template is detached from host (PR/\#7784)
  - \[API\] Fix import of contactgroup when linked to ldap (PR/\#7797)
  - \[API v2\] Fix bad verification when an admin has access group (PR/\#7972)
  - \[Charts\] Fix export png for splited graph (PR/\#7676)
  - \[Charts\] Graph is smoothed to much (PR/\#7676, \#4898)
  - \[Charts\] Unit curves not displayed when only 1 metric (PR/\#7676, \#5533)
  - \[Charts\] strange char & missing dates in exports (PR/\#7676, \#7310)
  - \[Charts\] HTML code instead of accented characters in graphs (PR/\#7676,
    \#6318)
  - \[Charts\] Graphs Period Showing Different Times (PR/\#7676, \#5939)
  - \[Charts\] Match metric name with metric value in export (\#5959, \#7477,
    PR/\#7764)
  - \[Centcore\] Correct typo in scp command (\#7849, PR/\#7946)
  - \[Centcore\] Create centcore file by action (PR/\#6985)
  - \[Configuration\] Correct issue in wizard with PR \#7849 (commit 2b8a728478)
  - \[Configuration\] Fix style of broker modules options checkboxes (PR/\#7899)
  - \[Configuration\] Select also pollers attached to additional RS for
    generation (PR/\#7922)
  - \[Configuration\] Fix the manual activation/disactivation of a contact
    (PR/\#7930)
  - \[Configuration\] List contact using escapeSecure method (PR/\#7947)
  - \[Configuration\] Fix SNMP traps generation by poller (PR/\#6416)
  - \[Configuration\] Fix stream connector configuration update in Centreon
    Broker form (PR/\#7813)
  - \[Custom-Views\] Correction on custom view using spanish (PR/\#7778)
  - \[Dashboard\] Remove useless columns which break sql strict mode (PR/\#7937)
  - \[i18n\] Fix issue with translation when several modules are installed
    (PR/\#7916)
  - \[Install\] Change the bash interpreter for the native sh (commit
    (PR/\#7911))
  - \[Install\] Update wording about cache in install/upgrade process
    (PR/\#7895)
  - \[Install\] Fix syntax error in step5 of upgrade process (PR/\#7900)
  - \[Install\] Disable button when installing modules last step (PR/\#7873)
  - \[Menu\] Retrieve menu entries as link (PR/\#7826)
  - \[Monitoring\] Apply downtimes on resources linked to a poller (PR/\#7955)
  - \[Monitoring\] Save properly monitoring service status filter (PR/\#7908)
  - \[Monitoring\] Fix pagination display in service monitoring by servicegroups
    (PR/\#7755)
  - \[Monitoring\] Fix labels in graph alignment for service details page
    (PR/\#7805)
  - \[Monitoring\] Fix double host name display in host details page (PR/\#7737)
  - \[Remote-Server\] Allow remote server config to be loaded with mysql strict
    mode enabled (PR/\#7887)
  - \[Remote Server\] Change grant option for remote server database centreon
    user (PR/\#7888)
  - \[Remote Server\] set remote\_id/remote\_server\_centcore\_ssh\_proxy to
    NULL/0 (PR/\#7878)
  - \[Remote Server\] Fix simple remote server creation (PR/\#7936)
  - \[Remote Server\] Add missing host poller relation in export (PR/\#7928)
  - \[Remote-Server\] Adapt nagios\_server export columns (PR/\#7871)
  - \[UI\] Do not display autologin shortcut when disabled (PR/\#7340)
  - \[UI\] Avoid host icon to be flattened (PR/\#7870)
  - \[UI\] Retrieve space before alias in user menu (PR/\#7869)
  - \[UI\] Fix compatibility with IE11 (external modules) (PR/\#7923)
  - \[UI\] Rename contact template titles properly (PR/\#7929)
  - \[UI\] Fix style of frozen checkboxes (PR/\#7882)
  - \[Widgets\] Undefined pagination variable when editing custom view
    (PR/\#7935)
  - \[Widgets\] set GMT to default if null (PR/\#7766)

#### Security fixes

  - Add rule for max session duration (PR/\#7918)
  - Hide password in command line for status details page (\#7414, PR/\#7859)
  - Escape script and input tags by default (PR/\#7811)
  - Add php mandatory params info in source installation (PR/\#7897)
  - Escape persistent and reflected XSS in my account (PR/\#7877)
  - Remove xss injection of service output in host form (PR/\#7865)
  - Sanitize host\_id and service\_id in makeXMLForOneService.php (PR/\#7862)
  - Session fixation using regenerate\_session\_id (PR/\#7892)
  - Remove command test execution - CVE 2019-16405 (PR/\#7864)
  - the ini\_set session duration param has been moved in php.ini (PR/7896)

#### Technical

  - \[API\] Update type of returned activate property (PR/\#7851)
  - \[CEIP\] Telemetry ceip improvements (PR/\#7931)
  - \[Component\] Compatibility with RRDtool \>= 1.7.x (PR/\#7676)
  - \[Component\] Update to rh-php72 (PR/\#7542)
  - \[Composer\] Reduce size of centreon package on packagist (PR/\#7818)
  - \[Composer\] Add missing translation dependency in composer.json (PR/\#7879)
  - \[Configuration\] Move filesGeneration directory to /var/cache/centreon
    (PR/\#7735)
  - \[Core\] Improve the centreon user service definition in ServiceProvider
    (PR/\#7891)
  - \[CSS\] Clean cache at each new centreon version (PR/\#7959)
  - \[Database\] Start compatibility with MariaDB/MySQL STRICT mode - in
    progress (PR/\#7544)
  - \[Database\] Remove useless primary keys on multiple tables (PR/\#7542)
  - \[Database\] Change type of column widget\_models.description to TEXT
    (PR/\#7542)
  - \[Database\] Add default value to acl\_groups.acl\_group\_changed table
    (PR/\#7542)
  - \[Database\] Update column types of downtimes table (PR/\#793)
  - \[Database\] Compatibility with MySQL v8.x version (PR/\#7801)
  - \[Install\] Do not require conf.php files to exist in module upgrade
    directories (PR/\#7914)
  - \[Lib\] Upgrade front libraries & improve dynamic import (PR/\#7724)
  - \[Select2\] Fix default select2 getter on severity (PR/\#7814)
  - \[Select2\] Allow to display disabled status in select2 options (PR/\#7531)
  - \[Test\] Fix acceptance test of locked elements (PR/\#7910)
  - \[Update\] Move alter table statement in a php script for MySQL
    compatibility (PR/\#7838)
  - \[Upgrade\] Take into account the removal of older conf.php (PR/\#7952)
  - \[Update\] Remove upgrade of bigint columns (PR/\#7953)
  - \[UI\] Remove wizard graph tour in performance view (PR/\#7676)
  - \[Update\] Finish module update with upgrade to last version (PR/\#7956)

#### Known issue

  - \[logs\] Fix the limitation of max value for the primary key of the
    centreon\_storage.logs table (`update_centreon_storage_logs`)

### Centreon Web 19.10.0-rc.1

#### Enhancements

  - \[authentication\] Add okta LDAP template (PR/\#7825)
  - \[Configuration\] Add display locked checkbox for objects listing (\#7444)
  - \[Install\] Add possibility to install widget during last step (PR/\#7890)
  - \[Remote Server\] Poller attached to multiple remote servers (PR/\#7849)
  - \[UI\] Do not display round values in detailed top counter (PR/\#7547)

#### Documentation

  - Doc correct migration using nagios reader (PR/\#7781)
  - Update mysql prerequisites for master (PR/\#7904)

#### Bug Fixes

  - \[Centcore\] Create centcore file by action (PR/\#6985)
  - \[Configuration\] Correct issue in wizard with PR \#7849 (commit 2b8a728478)
  - \[Configuration\] Fix style of broker modules options checkboxes (PR/\#7899)
  - \[Install\] Change the bash interpreter for the native sh (commit
    (PR/\#7911))
  - \[Install\] Update wording about cache in install/upgrade process
    (PR/\#7895)
  - \[Install\] Fix syntax error in step5 of upgrade process (PR/\#7900)
  - \[Monitoring\] Save properly monitoring service status filter (PR/\#7908)
  - \[Remote-Server\] Allow remote server config to be loaded with mysql strict
    mode enabled (PR/\#7887)
  - \[Remote Server\] Change grant option for remote server database centreon
    user (PR/\#7888)
  - \[Remote Server\] set remote\_id/remote\_server\_centcore\_ssh\_proxy to
    NULL/0 (PR/\#7878)
  - \[UI\] Fix style of frozen checkboxes (PR/\#7882)

#### Security fixes

  - Hide password in command line for status details page (\#7414, PR/\#7859)
  - Escape script and input tags by default (PR/\#7811)
  - Add php mandatory params info in source installation (PR/\#7897)
  - Escape persistent and reflected XSS in my account (PR/\#7877)
  - Remove xss injection of service output in host form (PR/\#7865)
  - Sanitize host\_id and service\_id in makeXMLForOneService.php (PR/\#7862)
  - Session fixation using regenerate\_session\_id (PR/\#7892)
  - Remove command test execution - CVE 2019-16405 (PR/\#7864)
  - the ini\_set session duration param has been moved in php.ini (PR/7896)

#### Technical

  - \[Core\] Improve the centreon user service definition in ServiceProvider
    (PR/\#7891)
  - \[Test\] Fix acceptance test of locked elements (PR/\#7910)

#### Known issue

  - \[logs\] Fix the limitation of max value for the primary key of the
    centreon\_storage.logs table (`update_centreon_storage_logs`)

### Centreon Web 19.10.0-beta.3

#### New features

  - \[Authentication\] Add Keycloak SSO authentication in Centreon (PR/\#7700)
  - \[API\] New real time monitoring API for services and hosts (PR/\#7821)

#### Enhancements

  - \[Configuration\] Move global rrdcached option to Centreon Broker form for
    each broker (PR/\#7791)
  - \[Configuration\] Allow to redifine action command for Centeron Engine &
    Centreon Broker (PR/\#7810)
  - \[Install\] New script that aims at automating all manual steps that are
    required when installing Centreon from packages (PR/\#7853)
  - \[Remote-Server\] Allow to use direct ssh connection to poller from central
    (PR/\#7680)
  - \[Remote-Server\] Optimize execution time of export/import (PR/\#7749)
  - \[Remote-Server\] Improve centreonworker logging (PR/\#7712)
  - \[UI\] Style default select to be as much like select2 as possible
    (PR/\#7819)
  - \[UI\] Update style of checkbox, radio, tabs (PR/\#7845)
  - \[UI\] Adding cursor pointer to icons (PR/\#7613)
  - \[Widgets\] Add multiselect on severity preference (PR/\#7752)
  - \[Widgets\] Upgrade poller preference of engine-status widget (PR/\#7820)
  - \[Widgets\] Add connectors for servicegroups and severities (PR/\#7753)

#### Documentation

  - Improve documentation for MySQL/MariaB stric mode (PR/\#7806)
  - Improve migration procedure (commit 47be1c3)
  - Improve prerequisites (commit 7200461)
  - Fix typo Centreon word (and one variable) (PR/\#7796, PR/\#7806)

#### Performance

  - \[ACL\] centAcl optimize memory and time execution (PR/\#7751)
  - \[API\] Improve performance of clapi call through REST API (PR/\#7842)

#### Bug fixes

  - \[ACL\] Redirect to login page when user is unauthorized (PR/\#7687)
  - \[API\] Delete services when host template is detached from host (PR/\#7784)
  - \[API\] Fix import of contactgroup when linked to ldap (PR/\#7797)
  - \[Charts\] Match metric name with metric value in export (\#5959, \#7477,
    PR/\#7764)
  - \[Configuration\] Fix stream connector configuration update in Centreon
    Broker form (PR/\#7813)
  - \[Custom-Views\] Correction on custom view using spanish (PR/\#7778)
  - \[Install\] Disable button when installing modules last step (PR/\#7873)
  - \[Menu\] Retrieve menu entries as link (PR/\#7826)
  - \[Monitoring\] Fix labels in graph alignment for service details page
    (PR/\#7805)
  - \[Monitoring\] Fix double host name display in host details page (PR/\#7737)
  - \[Remote-Server\] Adapt nagios\_server export columns (PR/\#7871)
  - \[UI\] Do not display autologin shortcut when disabled (PR/\#7340)
  - \[UI\] Avoid host icon to be flattened (PR/\#7870)
  - \[UI\] Retrieve space before alias in user menu (PR/\#7869)

#### Technical

  - Compatibility with MySQL v8.x version (PR/\#7801)
  - \[API\] Update type of returned activate property (PR/\#7851)
  - \[Composer\] Reduce size of centreon package on packagist (PR/\#7818)
  - \[Composer\] Add missing translation dependency in composer.json (PR/\#7879)
  - \[Configuration\] Move filesGeneration directory to /var/cache/centreon
    (PR/\#7735)
  - \[Select2\] Fix default select2 getter on severity (PR/\#7814)
  - \[Select2\] Allow to display disabled status in select2 options (PR/\#7531)
  - \[Update\] Move alter table statement in a php script for MySQL
    compatibility (PR/\#7838)

### Centreon Web 19.10.0-beta.2

#### Enhancements

  - \[Configuration\] Add contactgroups filter in list of contacts (PR/\#7744)
  - \[Configuration\] Add status and vendor filters in list of SNMP traps
    (PR/\#7758)
  - \[Configuration\] Fix SNMP traps generation by poller (PR/\#6416)

#### Bug fixes

  - \[ACL\] add ACL to select meta-services for list of services in performance
    menu (PR/\#7736)
  - \[Monitoring\] Fix pagination display in service monitoring by servicegroups
    (PR/\#7755)
  - \[Widget\] set GMT to default if null (PR/\#7766)

#### Technical

  - \[Lib\] Upgrade front libraries & improve dynamic import (PR/\#7724)

### Centreon Web 19.10.0-beta.1

#### Enhancements

  - \[Charts\] Centreon-Web Graph Display and png export is coherent (PR/\#7676)
  - \[Charts\] Better management of virtual metrics: you can display or not a
    virtual metric (PR/\#7676)
  - \[Charts\] Only one color by curve: users see the same color curve
    (PR/\#7676)
  - \[Install\] Allow people to use another user that has root privileges when
    installing centreon (PR/\#7445)
  - \[Administration\] \[Audit logs\] Add purge function for audit logs
    (PR/\#7710)

#### Performance

  - Increase performance on server side when we get data from rrd files to
    display charts: between 70% and 90% (PR/\#7676)

#### Bug fixes

  - \[Charts\] Fix export png for splitted graph (PR/\#7676)
  - \[Charts\] Graph is smoothed to much (PR/\#7676, \#4898)
  - \[Charts\] Unit curves not displayed when only 1 metric (PR/\#7676, \#5533)
  - \[Charts\] strange char & missing dates in exports (PR/\#7676, \#7310)
  - \[Charts\] HTML code instead of accented characters in graphs (PR/\#7676,
    \#6318)
  - \[Charts\] Graphs Period Showing Different Times (PR/\#7676, \#5939)

#### Technical

  - Compatibility with rrdtool \>= 1.7.x (PR/\#7676)
  - Start compatibility with MariaDB/MySQL STRICT mode - in progress (PR/\#7544)
  - \[Database\] Remove useless primary keys on multiple tables (PR/\#7542)
  - \[Database\] Change type of column widget\_models.description to TEXT
    (PR/\#7542)
  - \[Database\] Add default value to acl\_groups.acl\_group\_changed table
    (PR/\#7542)
  - Remove wizard graph tour in performance view (PR/\#7676)
  - Update to rh-php72 (PR/\#7542)


### Centreon Web 19.04.10

#### Bugfix

  - \[Status Details\] "Display details" strange behaviour when "Summary"
    selected in by Hostgroup page (PR \#8265)
  - \[Charts\] Problem using zoom in when having timezone (PR \#8286)

#### Security

  - Do not expose session ID identifier in URL (PR \#8291)

### Centreon Web 19.04.9

#### Bugfix

  - \[Status Details\] Services shown as CRITICAL while OK (PR \#8253)
  - \[Status Details\] Cannot empty "Hostgroup" drop-down list in "Services by
    Hostgroup" (PR \#8257)
  - \[Autologin\] Access to URI with arguments (PR \#8262)
  - \[Configuration\] Check command --help display won't work (PR \#8255 and
    \#8268)
  - \[Event Logs\] Filter on disabled objects (PR \#8238)
  - \[Services Grid\] Filters not used correctly (PR \#8260)
  - \[Monitoring\] Service status filter is not saved (PR \#8256)

### Centreon Web 19.04.8

#### Bugfix

  - \[Clapi\] fix overlapping in clapi export (PR/\#8191 fixes \#7562)
  - \[Custom View\] fix display for user with no widget preferences (PR \#8158
    fixes \#7875)
  - \[Web\] Issue with random blank pages (PR/\#8187,\#8193)

#### Security

  - \[Service Discovery\] cron should be run by centreon user (PR \#8062 fixes
    \#7921)
  - \[Web\] bump terser-webpack-plugin to 1.4.2

### Centreon Web 19.04.7

#### Documentation

  - Clearly indicate that dependencies between pollers are not possible

#### Bug Fixes

  - Define new custom view error file template (PR/\#8141)
  - Fix double quote in widget title (PR/\#8161)
  - Remove ACL notice on lvl3 calculation (PR/\#8120)

### Centreon Web 19.04.6

#### Bug Fixes

  - \[ACL\] Fix calculation of acls on services (PR/\#8146)
  - \[LDAP\] Correct double slashes in the saved DN (PR/\#8121)
  - \[LDAP\] Move LDAP fix upgrade script to next minor (PR/\#8153)

#### Security Fixes

  - Fix call of service macros list without authentication - CVE-2019-17645
    (PR/\#8035)
  - Fix call of host macros list without authentication - CVE-2019-17644
    (PR/\#8037)

### Centreon Web 19.04.5

#### Bug fixes

  - LDAP users using DN with special chars cannot login
  - LDAP connection issue
  - Log pagination does not work
  - Unable to add downtime to service group
  - The option to hide auto login has no effect
  - Macro passwords are not hidden
  - Broker form might be lost when saving configuration
  - Be able to open menu entry in a new tab
  - Better error handling when PNG generation fails
  - Fail to upgrade after reloading the process
  - Double host name display in host detail
  - Improve centreonworker logging in Remote server
  - Metric name are not properly ordered on CSV export
  - Incorrect CSV export of Event Logs
  - Disable the install button when installing modules (last install step)
  - Select all elements in select2 freeze the screen
  - Recurrent downtimes search bug
  - Unable to hide service template macro with Clapi
  - Calculation of contact group too frequent
  - Unable to set host notification to none
  - Purge old user actions
  - Remove unused radio button in meta-service configuration
  - Correctly toggle edit when widgets load
  - Add curve label in API
  - Display scrollbar behind popin

#### Security

  - No check for authentication
  - SQL injections
  - Cross-site request forgery
  - Session fixation
  - RCE flaws
  - Authentication flaw
  - XSS

#### Documentation

  - Update performance FAQ for rrdcached

### Centreon Web 19.04.4

#### Enhancements

  - \[Administration\] Add the possibility to define the refresh frequency for
    LDAP settings for users (PR/\#7627)
  - \[API\] Update output of getparam command on host object (PR/\#7678)
  - \[Configuration\] Close tooltip when user clicks somewhere else (PR/\#7729)

#### Bug fixes

  - \[ACL\] Add ACL to select meta-services for service performance (\#6534,
    PR/\#7736)
  - \[Backup\] Change backup path of httpd24-httpd (PR/\#7577)
  - \[Configuration/Administration\] Fix filters save with pagination
    (PR/\#7732)
  - \[Configuration\] Fix meta service generation with special char (\#7608,
    PR/\#7705)
  - \[Configuration\] Trap generation reindexing pollers id (\#6205, PR/\#6416)
  - \[Clapi\] Delete services when host template is detached from host (\#4371,
    PR/\#7784)
  - \[Clapi\] Fix import of contactgroup when linked to ldap (PR/\#7797)
  - \[Centcore\] Use correct ssh port (PR/\#7677)
  - \[Graphs\] Issue with export of splitted graphs fixed (PR/\#7822)
  - \[Menu\] translate properly menu entries
  - \[Monitoring\] Fix pagination display in service monitoring (PR/\#7755)
  - \[Remote-Server\] Check bam installation on remote server is http only
    (\#7626, PR/\#7640)
  - \[Remote-Server\] Fix enableremote parameters parsing and setting
    (PR/\#7711)
  - \[System\] Compatibility with MySQL v8
  - \[UI\] Remove chrome password autocomplete in several form (\#6283,
    PR/\#7697)
  - \[UI\] Custom view page is no longer broken with spanish language
    (PR/\#7778)

#### Documentation

  - Correct CLAPI Host parameters (PR/\#7658)
  - Correct SSH exchange notice (\#7620, PR/\#7639)

#### Technical

  - \[Lib\] update composer

### Centreon Web 19.04.3

#### Enhancements

  - \[Traps\] Increase trap special command database field (\#7610)
  - \[Traps\] Make @HOSTID@ macro available for trap configuration (\#7592)
  - \[Traps\] You can create a trap with matching mode regexp (\#7679)
  - \[UI\] Enhance helper (tooltip) for mail configuration (\#7584)
  - \[UI\] Translate notification delay parameters (\#7696)

#### Bug fixes

  - \[Centcore\] Issue fixed with commands that were overwritten (\#7650)
  - \[Configuration\] Correctly save service\_interleave\_factor value in Engine
    configuration form (\#7591)
  - \[Configuration\] Correctly search services by "disabled" state (\#7612)
  - \[Downtime\] Correctly compute downtime duration & end date (\#7601)
  - \[Event Logs\] Several issues fixed on CSV export (group arrows, host
    filter)
  - \[Installation\] Missing template directory in tar.gz package
  - \[Monitoring\] Correctly display services with special character "+"
    (\#7624)
  - \[Remote Server\] Update only properties of selected poller (\#7633)
  - \[Remote Server\] Do not compare bugfix version on task import (\#7638)
  - \[Remote Server\] Increase size of database field to store large FQDN
    (\#7637 closes \#7615)
  - \[Remote Server\] Set task in failed if an error appears during
    import/export (\#7634)
  - \[Remote Server\] Filter output to master on NEB category only (\#7695)
  - \[Reporting\] Correctly apply ACL on reporting dashboard (\#7604)
  - \[UI\] Add scrollbar to remote server configuration wizard (\#7600)
  - \[UI\] Change icon cursor when exporting graphs to PNG (\#7613)
  - \[Upgrade\] Issue with upgrade from 18.10.x to 19.04.x (\#7602 closes
    \#7596)

#### Documentation

  - \[Onboarding\] Improve actual content for Quick Start and add more (\#7609)

#### Security fixes

  - \[UI\] add escapeshellarg to nagios\_bin binary passed to shell\_exec
    (\#7694 closes CVE-2019-13024)

### Centreon Web 19.04.2

#### Bug fixes

  - \[LDAP\] optimizing the data sent when importing contact (PR/\#7559)
  - \[Web\] expose properly react router dom (PR/\#7582)
  - \[Web\] retrieve loading animation (PR/\#7587)
  - \[Web\] retrieve scrollbar on internal react pages

### Centreon Web 19.04.1

#### Enhancements

  - \[Graphs\] Add more curves template for fresh installations (\#5819, \#7530)
  - \[Remote Server\] Add possibility to use HTTPS or HTTP for communication and
    to define TCP port (PR/\#7536)
  - \[Remote Server\] Add possibility to verify or not peer SSL certificate
    (PR/\#7536)
  - \[Remote Server\] Add possibility to use or not configured proxy (PR/\#7536)

#### Bug fixes

  - \[ACL\] Fix issue with monitoring pages (PR/\#7554)
  - \[Administration\] Correct the redirection after submitting the monitoring
    form (PR/\#7545)
  - \[Packaging\] Install systemd .service files with 644 permissions
  - \[Web\] Fix date format for CSV export (PR/\#7533)
  - \[Web\] Correct the displayed saved researched value in the select2
    components (PR/\#7525)
  - \[Packaging\] fix installation of conf.pm and centreontrapd.pm
  - \[Monitoring\] Fix hard\_state\_duration column (\#7506)
  - \[Graphs\] No-unit series now trigger a second axis (Closes \#7330 with
    \#7341)
  - \[Graphs\] "Split chart" mode do not show thresholds (Closes \#7342,\#7235
    with \#7343)
  - \[Monitoring\] Macros not displayed in WUI for new services when you select
    your template (Fixes \#7121 with \#7515, \#7535)
  - \[Monitoring\] Filter issues on host monitoring page fixed (\#7511)

#### Security fixes

  - \[ACL\] Fix ACL calculation when interfering with the GET request
    (PR/\#7517)

### Centreon Web 19.04.0

#### New features

  - The extension management page has been unified. The installation, update and
    removal of modules and widgets are available via the "Administration\>
    Extensions\> Manager" menu. It is now possible to install all extensions at
    one time or to update all extensions in one click. Moreover a detail page
    provides access to the description of the extensions.
  - Improved navigation within the menu. It can be used both open (by clicking
    on Centreon logo) and closed to navigate within the Centreon web interface.
    Closed, only one click is required to access the desired page. Open, it is
    possible to navigate a menu by opening and closing the submenus or to access
    another menu in a click.

#### Enhancements

  - \[CEIP\] Add additional statistics including modules if present (PR/\#7328)
  - \[Configuration\] improve filters and pagination in the configuration menus
    (PR/\#7348)
  - \[Debug\] centreon\_health script to gather various data (PR/\#7418)
  - \[Install\] New upgrade process that can start only from *2.4.0* and later
  - \[LDAP\] Optimize ldap sync at config generation (\#6949 PR/\#7130)
  - \[Menu\] Remove unnecessary menu level
  - \[Menu\] Color the open level 2 and 3 menus (PR/\#7295)
  - \[Remote-server\] allow usage of domain names (PR/\#7250)
  - \[UI\] Fix wording of messages related to recurring downtimes (PR/\#7261)
  - Standardize how to display menus access
  - Reduce reduce number of title levels displayed in index
  - Create dedicated UI access administration chapter
  - Improve custom uri chapter
  - Move SSO chapter to administration/ldap

#### Bug fixes

  - \[API\] Use the web service or initialize it (PR/\#7265)
  - \[API\] Fix init parameters (PR/\#7277)
  - \[Backup\] partial backup didn't backup the right partitions
  - \[Broker\] change default value for centreonbroker\_logs\_path
  - \[Broker\] Broker configuration doesn't generate rrdcached external
    information in a new install
  - \[CEIP\] Improve ceip install update (PR/\#7374)
  - \[Centcore\] Don't generate blank line in centcore.cmd
  - \[Centcore\] Enhance centcore log
  - \[Centcore\] Fix getinfos information
  - \[Configuration\] change size (6 =\> 30) of input geo coordinates on host
    form (PR/\#7405)
  - \[Install\] Remove non-existing topology\_JS entries
  - \[Install\] Remove obsolete rrdtool configuration and sources (PR/\#7195)
  - \[Install\] use /etc/sysconfig/cent\* files to get options for Centcore and
    Centreontrapd process (PR/\#7380)
  - \[LDAP\] Fix sql errors in the log on authentication (PR/\#7278)
  - \[LDAP\] Optimize ldap sync at config generation (Fix \#6949 PR/\#7130)
  - \[Logs\] removing warning in the logs (PR/\#7395)
  - \[Menu\] Fixing an issue with the menu when loaded by mobile browsers
    (PR/\#7256)
  - \[Monitoring\] Fix hide password in command line (PR/\#7079)
  - \[Translation\] fix translation for broker logs path
  - \[Translation\] missing French translations in the graph page (PR/\#7429)
  - \[logAnalyser\] Code refactor
  - \[perl scripts\] enhance logger lib to handle utf8

#### Documentation

  - Restart php-fpm instead of Apache for changes in php.ini (PR/\#7332)
  - Add EN & FR chapters for data retention (PR/\#7269)
  - Describe how to enable user audit log in doc (PR/\#7276)
  - Improve partitioning chapter (PR/\#7274)
  - Correct installation chapters - enable systemctl for centreon (PR/\#7284)
  - Add FAQ for known issues about Remote Server (PR/\#7266)

#### Security fixes

  - Authenticated RCE in minPlayCommand.php (PR/\#7232)
  - SQL injections in the service by hostgroups and servicegroups pages
    (PR/\#7267)
  - Allow to set illegal characters for centcore (PR/\#7206 PR/\#7287)
  - Token generation uses predictable generator
  - Authenticated SQL injection in makeXML\_ListServices.php
  - SQL Injection in serviceGridByHGXML.php

#### Technical

  - Add mechanism to manage external pages (PR/\#7382)
  - Add mechanism to manage notification mechanism of modules (PR/\#7378)

#### Known issue

Depending on the size of your screen and which level 3 menu is opened, you may
have difficulty to access to another menu. Just close the opened level 3 menu
before navigating to another menu.


### Centreon Web 18.10.11

#### Security

  - Do not expose session ID identifier in URL (PR \#8291)

### Centreon Web 18.10.10

#### Bugfix

  - \[Clapi\] fix overlapping in clapi export (PR/\#8191 fixes \#7562)
  - \[Custom View\] fix display for user with no widget preferences (PR \#8158
    fixes \#7875)
  - \[Web\] Issue with random blank pages (PR/\#8187,\#8193)

#### Security

  - \[Service Discovery\] cron should be run by centreon user (PR \#8062 fixes
    \#7921)
  - \[Web\] bump terser-webpack-plugin to 1.4.2

### Centreon Web 18.10.9

#### Documentation

  - Clearly indicate that dependencies between pollers are not possible

#### Bugfix

  - Define new custom view error file template (PR/\#8141)
  - Fix double quote in widget title (PR/\#8161)

#### Security

  - Host macro list without authentication - CVE-2019-17644 (PR/\#8037)
  - Service macro list without authentication - CVE-2019-17645 (PR/\#8035)

### Centreon Web 18.10.8

#### Bug fixes

  - Missing Centengine configuration options
  - Unable to add downtime to service groups
  - The option to hide auto login has no effect
  - Macro passwords are not hidden
  - Broker form might be lost when saving configuration
  - LDAP contact groups are not exported properly
  - Better error handling when PNG generation fails
  - Double host name display in host detail
  - Metric name are not properly ordered on CSV export
  - Incorrect CSV export of Event Logs
  - Recurrent downtimes search bug
  - Unable to hide service template macro with Clapi
  - Purge old user actions
  - Remove unused radio button in meta-service configuration

#### Security

  - No check for authentication
  - SQL injection
  - Cross-site request forgery
  - Session fixation
  - RCE flaws
  - Authentication flaws
  - XSS
  - SQL injections

#### Documentation

  - Update performance FAQ for rrdcached

### Centreon Web 18.10.7

#### Enhancements

  - \[Configuration\] Close tooltip when user clicks somewhere else (PR/\#7729)

#### Bug fixes

  - \[ACL\] Add ACL to select meta-services for service performance (\#6534,
    PR/\#7736)
  - \[Configuration/Administration\] Fix filters save with pagination
    (PR/\#7732)
  - \[Configuration\] Fix meta service generation with special char (\#7608,
    PR/\#7705)
  - \[Configuration\] Trap generation reindexing pollers id (\#6205, PR/\#6416)
  - \[Centcore\] Use correct ssh port (PR/\#7677)
  - \[Clapi\] Delete services when host template is detached from host (\#4371,
    PR/\#7784)
  - \[Graphs\] Issue with export of splitted graphs fixed (PR/\#7822)
  - \[Monitoring\] Fix pagination display in service monitoring (PR/\#7755)
  - \[Remote-Server\] Check bam installation on remote server is http only
    (\#7626, PR/\#7640)
  - \[Remote-Server\] Fix enableremote parameters parsing and setting
    (PR/\#7711)
  - \[System\] Compatibility with MySQL v8
  - \[UI\] Remove chrome password autocomplete in several form (\#6283,
    PR/\#7697)
  - \[UI\] Custom view page is no longer broken with spanish language
    (PR/\#7778)

#### Documentation

  - Correct CLAPI Host parameters (PR/\#7658)
  - Correct SSH exchange notice (\#7620, PR/\#7639)

#### Technical

  - \[Lib\] update composer

### Centreon Web 18.10.6

#### Enhancements

  - \[LDAP\] Optimizing data sent when importing contact (\#7559)
  - \[Traps\] Increase trap special command database field (\#7610)
  - \[Traps\] Make @HOSTID@ macro available for trap configuration (\#7592)
  - \[UI\] Enhance helper (tooltip) for mail configuration (\#7584)
  - \[UI\] Translate notification delay parameters (\#7696)
  - \[Traps\] You can create a trap with matching mode regexp (\#7679)

#### Bug fixes

  - \[Installation\] Missing template directory in tar.gz package
  - \[Centcore\] Issue fixed with commands that were overwritten (\#7650)
  - \[Remote Server\] Do not compare bugfix version on task import (\#7638)
  - \[Remote Server\] Set task in failed if an error appears during
    import/export (\#7634)
  - \[Remote Server\] Increase size of database field to store large FQDN
    (\#7637 closes \#7615)
  - \[Remote Server\] Update only properties of selected poller (\#7633)
  - \[Remote Server\] Filter output to master on NEB category only (\#7695)
  - \[Monitoring\] Correctly display services with special character "+"
    (\#7624)
  - \[Configuration\] Correctly search services by "disabled" state (\#7612)
  - \[Downtime\] Correctly compute downtime duration & end date (\#7601)
  - \[Event Logs\] Several issues fixed on CSV export (group arrows, host
    filter)
  - \[Configuration\] Correctly save service\_interleave\_factor value in Engine
    configuration form (\#7591)
  - \[Reporting\] Correctly apply ACL on reporting dashboard (\#7604)
  - \[UI\] Add scrollbar to remote server configuration wizard (\#7600)
  - \[UI\] Change icon cursor when exporting graphs to PNG (\#7613)
  - \[Upgrade\] Execute again missing PHP update from 2.8.27 (\#7434)
  - \[Upgrade\] add missing upgrade script for 2.8.28

#### Documentation

  - \[Onboarding\] Improve actual content for Quick Start and add more (\#7609)

#### Security fixes

  - \[UI\] add escapeshellarg to nagios\_bin binary passed to shell\_exec
    (\#7694 closes CVE-2019-13024)

### Centreon Web 18.10.5

#### Enhancements

  - \[Centcore\] Enhance centcore process logs (PR/\#7243)
  - \[Core\] Enhance logger lib to handle utf8 (PR/\#7404)
  - \[Graphs\] Add more curves template for fresh installations (\#5819, \#7530)
  - \[Remote Server\] Add possibility to use HTTPS or HTTP for communication and
    to define TCP port (PR/\#7536)
  - \[Remote Server\] Add possibility to verify or not peer SSL certificate
    (PR/\#7536)
  - \[Remote Server\] Add possibility to use or not configured proxy (PR/\#7536)
  - \[LDAP\] default contactgroup ldap import (PR/\#7220)
  - \[UI\] Better menu delimitation (PR/\#7257)
  - \[UI\] Color menu level 2&3 (PR/\#7295)

#### Bug fixes

  - \[Backup\] partial backup didn't backup the right partition for data\_bin
    and logs (PR/\#7242)
  - \[Broker\] broker config generate external values (PR/\#7401)
  - \[Broker\] Default log path in configuration form (PR/\#7367)
  - \[Export\] Fix date format for CSV export (PR/\#7533)
  - \[Graphs\] No-unit series now trigger a second axis (Closes \#7330 with
    \#7341)
  - \[Graphs\] "Split chart" mode do not show thresholds (Closes \#7342,\#7235
    with \#7343)
  - \[Install\] Get the ip address of an existing connection to set the
    permission correctly (PR/\#7347)
  - \[LDAP\] Fix SQL error on LDAP authentication (Closes \#7134 with PR/\#7278)
  - \[LDAP\] Optimize ldap sync at config generation (Closes \#6949 with \#7130)
  - \[LDAP\] LDAP Groups ACLs are not working (Closes \#7189 with \#7308)
  - \[Monitoring\] Macros not displayed in WUI for new services when you select
    your template (Closes \#7121 with \#7515, \#7535)
  - \[Packaging\] Install systemd .service files with 644 permissions
  - \[Packaging\] fix installation of conf.pm and centreontrapd.pm
  - \[Systemd\] use /etc/sysconfig/cent\* files to get options (PR/\#7380)
  - \[UI\] Correct the displayed saved researched value in the select2
    components (PR/\#7525)
  - \[UI\] Correct the redirection after submitting the monitoring form
    (PR/\#7545)
  - \[UI\] Filters persistence on monitoring and configuration
    (PR/\#7327,\#7355,\#7348,\#7369,\#7345
  - \[UI\] Filters and pagination MediaWiki (PR/\#7397)
  - \[Widget\] Widget parameters displayed in public views (PR/\#7408)

#### Documentation

#### Security fixes

  - Fix ACL calculation when interfering with the GET request (PR/\#7517)
  - Fix vulnerability on file loading \#7227
  - Remove obsolete rrdtool configuration and sources (PR/\#7195)
  - Fix SQL injection on Service grid by hostgroup page (PR/\#7275)

### Centreon Web 18.10.4

#### Enhancements

  - \[API\] API for commands arguments descriptions (PR/\#7196)
  - \[API\] Add showinstance CLAPI command to Host (PR/\#7199)
  - \[API\] Acknowledge resources using the API (Issue/\#6068 - PR/\#7187)
  - \[Centcore\] Allow to set illegal characters for centcore (PR/\#7206)
  - \[Installation\] Update source installer regarding 18.10 version (PR/\#7160)
  - \[UI\] Improve host template selection by remplacing simple select with
    multi-select (PR/\#7208)
  - \[UI\] Indent third level menu (PR/\#7251)

#### Bug Fixes

  - \[UI\] Fix issue with comments date in host and service detail pages
    (Issue/\#7180 - PR/\#7194)
  - \[UI\] Fix issue with session expiration and avoid login "inception"
    (PR/\#7202)
  - \[UI\] Fix issue with event logs export CSV/XML (Issue/\#6929 - PR/\#7167)
  - \[UI\] Fix search filter for recurrent downtimes (PR/\#7201)

#### Documentation

  - Improve prerequisities (PR/\#7244)
  - Improve poller configuration (PR/\#7116)
  - Enable services after remote server installation (PR/\#7027)
  - Update upgrade to Centreon 18.10 documentation section (PR/\#6934)
  - Describe directory of XML files for partitioning (PR/\#7203)
  - Correct documentation link (Issue/\#6997 - PR/\#7016)
  - Add daemon-reload command added when installing DB on dedicated server
    (Issue/\#7137 - PR/\#7139)

#### Security

  - Fix security issue by removing dead code related to escalation (PR/\#7200)
  - Fix rce vulnerability when using command's testing feature (PR/\#7245)
  - Fix SQL injection for GET parameter (PR/\#7229)
  - Fix unauthorized file upload (PR/\#7171)

### Centreon Web 18.10.3

#### Enhancements

  - \[Configuration\] Avoid huge memory consumption when generating
    configuration (PR/\#7072)
  - \[Remote Server\] Add one-peer retention (Issues/\#6910,\#6978,\#6987 -
    PR/\#6959)
  - \[UI\] Menus of banner can be opened/closed by clicking on icon (PR/\#7127)
  - \[UI\] Improve tooltip positionning in monitoring listing (PR/\#7140)

#### Bug fixes

  - \[Backup\] Configuration backup correctly done using scp (PR/\#7112)
  - \[Configuration\] Unset service/contact relations if SETCONTACT clapi method
    used (PR/\#7115)
  - \[Configuration\] Include check\_centreon\_dummy during installation process
    (Issue/\#7019)
  - \[UI\] Date picker failed when no language selected (PR/\#7046)
  - \[UI\] Manage pagination in all custom select components (PR/\#7102)
  - \[UI\] Avoid duplicated en\_US language selection in user settings
    (PR/\#7094)
  - \[UI\] Fix issue with shared views and multi widgets (PR/\#7126)
  - \[UI\] Display configuration has changed for all pollers (PR/\#7107)
  - \[Remote Server\] Replace special characters when setting up a remote server
    (Issue/\#6979 - PR/\#7133)
  - \[Remote Server\] Prevent access to ressources configuration not defined on
    remote (PR/\#7136)
  - \[Widget/host-monitoring\] Issue with sorting options fixed (PR/\#59)

### Centreon Web 18.10.2

#### Enhancements

  - \[Configuration\] Prevent time period to call itself via templates - PR
    \#7024
  - \[Configuration\] Re-add the PID column in the poller list page - PR \#6993
  - \[Documentation\] Add clean yum cache command for 18.10 upgrade - PR \#7030
  - \[Documentation\] Correct typo in RS architecture FR chapter - PR \#6965
  - \[Downtimes\] Apply ACL on resources to configure recurring downtimes - PR
    \#6962
  - \[Translate\] Add all date picker libraries for new translation - PR \#7040
  - \[UX\] Improve full screen mode - PR \#6976

#### Bug fixes

  - \[Chart\] Fix graph export when a curve is only displayed in legend - PR
    \#7009
  - \[Documentation\] Describe DBMS minimal version to prevent partitioning
    tables issue - PR \#6974
  - \[Monitoring\] Use all selected filter on refresh with "play" button - PR
    \#6984
  - \[Extensions\] Fix module upgrades using php scripts - PR \#7073
  - \[Remote Server\] Update default path of broker watchdog logs

#### Technical

  - Update select2 component - PR \#7034

### Centreon Web 18.10.1

#### Enhancements

  - \[Install\] Optimize db partitioning during fresh install - PR \#6937
  - \[Documentation\] Improve FAQ chapter - PR \#6900
  - \[Documentation\] Improve prerequisites chapter - PR \#6922
  - \[Documentation\] Improve installation chapter - PR \#6942 \#6973
  - \[Documentation\] Improve architecture chapter - PR \#6966
  - \[Documentation\] Add chapter to manage custom centreon uri - PR \#6903
  - \[Documentation\] Improve upgrade chapter - PR \#6905 \#6907 \#6908
  - \[Documentation\] Global documentation improvement - PR \#6896 \#6906 \#6931
    \#6933

#### Bug fixes

  - \[API\] Fix PHP warning - PR \#6917
  - \[API\] Fix export of hostgroup services - PR \#6948
  - \[Configuration\] Fix host categories creation and update form - PR \#6901
  - \[Configuration\] Remove old wizard button - PR \#6902
  - \[Configuration\] Fix export of cbd watchdog logs path - PR \#6919
  - \[Configuration/Widget\] Fix widget upgrade if directory has changed - PR
    \#6975
  - \[Remote Server\] Fix incorrect variable name - PR \#6915\]
  - \[Translation\] Update strings - PR \#6899
  - \[Global\] Remove duplicate() method in children classes - PR \#6918
  - \[Global\] Update topology extract where clause from db - PR \#6898

### Centreon Web 18.10.0

#### New features

Centreon Remote Server is a new building-block in the Centreon distributed
monitoring architecture. It comes in addition to the existing Centreon Central
Server and Centreon Pollers.

Centreon Remote Server allows remote IT operations team to benefit from the full
Centreon user experience, albeit on a subset of Centreon Pollers. Monitoring
configuration takes place on the Central Server and is automatically
synchronized with all Remote Servers. Monitoring Operations (Acknowledge,
Downtime...) may take place both on a Remote Server or the Central Server.

In case of network link failure between a Remote Server and the Central Server,
data retention takes place and the two Servers are synchronized as soon as the
connection is up again.

Centreon Remote Server is integrated in Centreon Core. It fully replaces the
Poller Display module.

#### UI & UX Design

  - Add new banner system and UX
  - Add new menus system and UX
  - Unique format of dates displayed according to user language settings
  - Thanks to the community, Centreon is now available in Spanish and Portuguese
    (Portugal & Brazil)

Notice: The "Home \> Poller Statistics" menu moved to "Administration \> Server
Status". Moreover, this one is now named "Platform Status".

#### Enhancements

  - \[Stats\] Add a Centreon Experience Improvement Program
  - \[API\] Possibility to cancel flexible RTDOWNTIME - \#6062
  - \[Install\] Add possibility to install/update all modules in one time
  - \[Configuration\] Add a new wizard to configure in one time a complete
    poller or Remote Server
  - \[Configuration\] Add possibility to install/update all modules in one time
  - \[Configuration\] Add possibility to install/update all widgets in one time
  - \[LDAP\] Manage multiple LDAP group with same dn - PR \#6714
  - \[LDAP\] If user account is disabled in AD, user will be still able to
    connect in Centreon - \#6240
  - \[LDAP\] Update LDAP Attributes on authentication - \#3402
  - \[LDAP\] Problem with LDAP contact groups with name members with accent -
    \#5368
  - \[LDAP\] Improve group synchronization - \#6203 \#6239 \#6241
  - \[Packages\] New centreon-database package, helpful for standalone Centreon
    databases;

#### Bug fixes

  - \[Install\] Fix several PHP notices
  - \[Backup\] Fix PHP paths in backup script - PR \#6787
  - \[Chart\] Fix graph search with ACL in performances page - PR \#6798
  - \[Configuration\] Meta Service using quotes in output format string - PR
    \#6216
  - \[Configuration\] Fix duplicate advanced matching SNMP traps rules - PR
    \#6738
  - \[Configuration\] Avoid duplicate entry in ACL table after host creation -
    PR \#6810
  - \[Configuration\] Fix host categories form - PR \#6785
  - \[Configuration\] fix regexp for trap argument ending by backslash - PR
    \#6699
  - \[Downtime\] Add a downtime for user linked to ACL - PR \#5988
  - \[Downtime\] Fix recurrent downtime form (period loading) - PR \#6645
  - \[Monitoring\] Display cancel button in comments page using ACL rights - PR
    \#6857
  - \[Monitoring\] Display cancel button in downtimes page using ACL rights - PR
    \#6856
  - \[Monitoring\] Persist search filters - \#5109 \#6161
  - \[Monitoring\] Persist selected results limit & pagination - \#6325 \#6161
    \#6367
  - \[Monitoring\] Invalid accentuated chars transcription in timeperiod
    exception models - \#6359
  - \[Monitoring\] Add missing style for button in service acknowledge form - PR
    \#6805
  - \[Monitoring\] Host number calculation with ACL is not correct in HG summary
    - PR \#6855
  - \[Monitoring\] Fix service by servicegroup page when using ACL \#6863
  - \[Notification\] Exclude services started by BA from BAM UI notification
    style - PR \#6782

#### Security fixes

  - \[ACL\] Fix XSS issue on the ACL list page - PR \#6634
  - \[Administration\] Fix XSS issue - PR \#6635
  - \[Administration\] Fix XSS security - PR \#6633
  - \[Configuration: Adding security filters on the host list page - PR \#6625
  - \[Configuration\] Fix XSS security issue on adding poller macros - PR \#6626
  - \[Downtime/comments\] Fix XSS issue for host, service & downtime comments -
    PR \#6637
  - \[General\] Create new escape method to fix XSS issue (commit 5820a04)
  - \[General\] Fix XSS issue - PR \#6636
  - \[Monitoring\] Fix XSS security issue - PR \#6632
  - \[SNNP trap\] Fix SQL injection on editing trap SNMP - PR \#6627
  - \[Virtual metric\] Fix SQL injection - PR \#6628
  - \[ACL access groups\] Fix XSS vulnerability - PR \#6710

#### Technical architecture changes

  - Upgrade from PHP 5.x to PHP 7.x compatibility (7.1/7.2)
  - Upgrade jQuery libraries
  - Add ReactJS technology for new interfaces
  - Prevent memory leaks - \#4764
  - Upgrade from DB.php connector to PDO

#### Known bugs or issues

  - Meta-services management with ACL (add/duplicate)
  - Centreon AWIE issues when trying to export large configuration
  - Got bogus version XX in httpd error logs \#6851


### Centreon Web 2.8.32

#### Security

  - Do not expose session ID identifier in URL (PR \#8291)

### Centreon Web 2.8.31

#### Documentation

  - Clearly indicate that dependencies between pollers are not possible

#### Bugfix

  - Define new custom view error file template (PR/\#8141)

#### Security

  - Host macro list without authentication - CVE-2019-17644 (PR/\#8032)
  - Service macro list without authentication - CVE-2019-17645 (PR/\#80

### Centreon Web 2.8.30

##### Bug Fixes

  - Macro passwords are not hidden

##### Security

  - No check for authentication
  - Cross-site request forgery
  - Session fixation
  - SQL injections
  - RCE flaws
  - Authentication flaw
  - XSS
  - SQL injection vulnerability in multiple pages
  - Discovery of directories

### Centreon Web 2.8.29

#### Bug Fixes

  - \[ACL\] Add ACL to select meta-services for service performance (\#6534,
    PR/\#7736)
  - \[Configuration\] Add possibility to save service\_interleave\_factor in
    Centreon Engine form (PR/\#7591)
  - \[Widget\] Fix preferences \#7641 (\#6988, PR/\#7641)

#### Security

  - \[UI\] Add escapeshellarg to nagios\_bin binary passed to shell\_exec
    (PR/\#7694 closes CVE-2019-13024)

#### Others

  - \[SQL\] Use pearDb (PR/\#7668)
  - \[Generation\] Fix requirement (PR/\#7703)

### Centreon Web 2.8.28

#### Enhancements

#### Bug Fixes

  - \[Actions\] Downtime and acknowledgement not working (PR/\#7233)

#### Security

  - Adding security filters on the host list page (PR/\#6625)
  - Fix ACL calculation when interfering with the GET request (PR/\#7518)
  - Fix vulnerability for file loading (PR/\#7226)
  - Type juggling can lead to authentication bypass (PR/\#7084)
  - Fix SQL injection on Service grid by hostgroup page (PR/\#7275)

### Centreon Web 2.8.27

#### Enhancements

  - \[ACL\] Improve ACL access on downtime and hostgroup form - PR \#6962
  - \[API\] API for commands arguments descriptions - PR \#7196
  - \[API\] Add showinstance CLAPI command to Host \#7199
  - \[LDAP\] manage multiple ldap group with same dn - PR \#6714

#### Bug Fixes

  - \[ACL\] Host calculation with ACL is not correct - PR \#6436
  - \[API\] Broker configuration accept accept id 0
  - \[API\] Unset service/contact relations if set option - PR \#7115
  - \[API\] Use "Reach API" to validate access to API - PR \#7117
  - \[Authentication\] add sync with ldap groups upon login - PR \#7057
  - \[Backup\] Fix scp export of configuration files backup - PR \#7112
  - \[Chart\] fix graph export when a curve is only displayed in legend - PR
    \#7009
  - \[Centcore\] Allow to set illegal characters for centcore (\#7206)
  - \[Configuration\] fix export of cbd watchdog logs path - \#6794, PR \#6919
  - \[Configuration\] fix broken hostgroup form and massive change on host - PR
    \#7105
  - \[Downtimes\] Pagination & filters corrections in recurrent Downtimes form -
    \#6501, \#6504, \#6506, PR \#6509
  - \[Global\] fix pagination when new header is enabled - PR \#6687
  - \[LDAP\] fix ldap import due to var typo
  - \[LDAP\] Fix LDAP search when the 'user group attribute' field of ldap
    configuration is empty - PR \#7057
  - \[Monitoring\] Fix columns on the list page - PR \#6984
  - \[UI\] Fix a Javascript bug when the new header is selected - PR \#6590
  - \[UI\] backport memory leak - PR \#7003
  - \[Visual notification\] exclude services started by BA from BAM UI
    notification style - PR \#6782

#### Documentation

  - Correct menu access to add/edit recurrent downtime - \#6698
  - Correct the upgrape chapter - \#6916
  - Improve prerequisite MySQL version to correct bug on partitioned tables - PR
    \#6974
  - Quick Start improvements

#### Security

  - Add SQL and XSS protection of Administration Logs page - PR \#7038
  - Avoid password macro to appear in cleartext - PR \#7020
  - Clean dead code about escalation - PR \#7200
  - Fix XSS vulnerability on hosts and services comments - PR \#6953
  - Fix SQL injection and duplicate action on the host list page - PR \#6961
  - Fix the XSS vulnerability on poller resource - PR \#6982
  - Fix XSS vulnerability in the ACL group search field - PR \#7032
  - Fix SQL injection for virtual metrics - PR \#7061
  - Fix SQL injection and duplicate feature - PR \#7069
  - Fix XSS vulnerability in media - PR 7089
  - Protect hostname resolver from XSS - PR \#7043
  - Rce vulnerability fixed when using command's testing feature (\#7245)

#### Others

  - Change copyright calculation code and replace mailto link by a direct link
    to our website
  - Fix compatibility with PHP 5.3

### Centreon Web 2.8.26

#### Enhancements

  - \[Authentication\] Set LDAP version 3 as default in LDAP configuration form
    - PR \#6452
  - \[Notification\] Standardize mail notifications PR \#6570 (ex PR \#6530)

#### Bug Fixes

  - \[ACL\] Do not get severity of parents if present on actual object - PR
    \#6484
  - \[ACL\] ACLs calculation is too slow with lot of acl resources - \#6461, PR
    \#6495
  - \[Chart\] Fix metrics error message - PR \#6474
  - \[Configuration\] Trap generation reindexing pollers id - \#6205 PR \#6416
  - \[Configuration\] Fix disable option in Centreon Engine configuration -
    \#6518, PR 6520
  - \[Monitoring\] In Status Details pages, display true contacts/contactgroups
    inheritance relation - \#6177, \#6176, \#6467, PR \#6513
  - \[Monitoring\] Add topology url option when loading default page \# 6528, PR
    \#6551
  - \[Monitoring\] Sort hosts by name ASC in serviceGridByHGXML - \#6529, PR
    \#6547

#### Documentation

  - Fix doc architecture - PR \#6430
  - Fix images for db replication - PR \#6432
  - Correction of typography - \#6447, PR \#6453
  - Improve Centreon IMP chapter - PR \#6485
  - Correct link references in IMP chapter - PR \#6541
  - Increase Centreon web version number for PDF generation - PR \#6540
  - Correct build errors - PR \#6567
  - Global review documentation content - \#6560, PR \#6510

#### Others

  - Remove dead code from escalation page - PR \#6393
  - Remove old and unused file in order to avoid problems with ACL - PR \#6210

#### Notice

The Standardize mail notifications enhancement is only available for new
instalaltion (PR \#6570)

### Centreon Web 2.8.25

Introduction to a new banner to prepare the next releases. This feature must be
enabled for each user. After the update, users will be asked to activate or not
this feature. New banner will appear after refresh of the page. A rollback is
still possible through the "My account" menu.

#### Enhancements

  - \[UX\] New banner in feature flipping mode - PR \#6294
  - \[API\] Submit result for passif resources - PR \#6209
  - \[API\] Export is too long when lot of parentship - PR \#6372

#### Bug Fixes

  - \[API\] Correct real time service filters - \#6080 PR \#6363
  - \[API\] Restore broker configuration with clapi generate too much output and
    input - \#5011 PR \#6220
  - \[API\] Partial / Filtered export does not work as expected for HC, SC, CG -
    \#5294 PR \#6355
  - \[API\] Export uses resource macro name instead of id for setparam - \#6221
    PR \#6222
  - \[API\] HTML Entities cause REST API Serialization Errors - \#6110 PR \#6234
  - \[API\] Fix acl group setcontact export - PR \#6224
  - \[API\] Avoid to order parentship several times - PR \#6373
  - \[Configuration\] View contact notification service missing - \#6073 PR
    \#6340
  - \[Downtimes\] Prevent permission denied centcore cmd for downtimemanager -
    PR \#6289
  - \[LDAP\] Remove contact password if ldap password storage is disabled -
    \#5627 PR \#6347
  - \[Monitoring\] Sort by service name after status in service grid - PR \#6290
  - \[Reporting\] Avoid bug on partitioned tables - PR \#6382

#### Security

  - Fix SQL injection from metrics RPN's field - PR \#6356

#### Others

  - Avoid PHP notice Undefined index: centreon in notifications.php - PR \#6266
  - Delete "Ping" and "Tracert" entries (no more used) - PR \#6277
  - Fix typo in FR documentation - PR \#6375
  - Fix "how to write a stream connector" chapter - PR \#6296 \#6295
  - Add some missing developers in Centreon About - PR \#6410 \#6253
  - Several fixes and improvements in documentation

### Centreon Web 2.8.24

#### Bug Fixes

  - Remove duplicate entries in centreon\_acl table - PR \#6366

#### Security

  - Fix execution command by rrdtool command line - PR \#6263
  - Fix XSS on command form - PR \#6260
  - Fix XSS security on menu username - PR \#6259
  - Fix SQL injection on graphs - PR \#6251
  - Fix SQL Injection in administration logs - PR \#6255
  - Fix SQL injection in dashboard - PR \#6250
  - Fix SQL injection in Curve template - PR \#6256
  - Fix SQL Injection in Virtual Metrics - PR \#6257

### Centreon Web 2.8.23

#### Enhancements

  - \[Documentation\] Correct typo - PR \#6202
  - \[Documentation\] Update icon to add metrics to a meta service - PR \#6167
  - \[Documentation\] Correct typo in documentation about stream connector howto
    \#6261

#### Bug Fixes

  - \[ACL\] fix select all checkbox in acl actions form - PR \#6193
  - \[Administration\] fix purge on pmax partition - PR \#6232
  - \[Downtimes\] fix recurrent downtimes on HG when no SG exist - PR \#6201

#### Security

  - Update jquery ui libs +fix compat - PR \#6181

#### Others

  - fix(centAcl.php): Dead code removed - PR \#6262
  - fix(lib): allow chaining on jquery pagination plugin - PR \#6219
  - fix(jQuery): fix broken input in reporting\_dashboard - PR \#6254
  - fix(style): fix style in widget preferences popin - PR \#6197
  - fix(style): fix padding of buttons in custom views page - PR \#6198
  - fix(front): retrieve jquery toggle function (renamed to toggleClick) - PR
    \#6217
  - fix(front): fix acl actions checkboxes (check all / uncheck all) - PR \#6309

### Centreon Web 2.8.22

#### Enhancements

#### Bug Fixes

  - \[CLAPI\] Fix host services deployment - PR \#6212

### Centreon Web 2.8.21

#### Enhancements

  - \[Documentation\] Add chapter about how to write a stream connector - PR
    \#6189
  - \[API\] Separate REST API configuration and REST API realtime access - PR
    \#6188

#### Bug Fixes

  - \[ACL\] Manage filters (poller, host, service) on servicegroup - PR \#6163
  - \[Configuration\] Fix output stream connector name for fresh install - PR
    \#6159 \#6182
  - \[Configuration\] No "Conf changed" flag set to "yes" when deploying
    services to selected hosts - \#6160 PR \#6191

#### Other

  - Fix php warning in realtime host API - PR \#6174

### Centreon Web 2.8.20

#### Enhancements

  - \[API\] Add default poller - PR \#6098
  - \[API\] Link host with default poller if unknown poller - PR \#6099
  - \[ACL\] Improve performance - \#6056 PR \#6107
  - \[Documentation\] Improve Centreon CLAPI usage - PR \#6090 \#6091
  - \[Documentation\] Improve documentation to add a new poller - \#6075 PR
    \#6086
  - \[Documentation\] Add notice for 64 bits support only - PR \#6101
  - \[Monitoring\] Display links in output and comments - \#5943 PR \#6113

#### Bug Fixes

  - \[ACL\] Allow nested groups filter in ldap configuration - \#6127 PR \#6128
  - \[API\] Export specific service, add host before service in CLAPI - PR
    \#6100
  - \[API\] CLAPI add resource export filter - PR \#6125
  - \[API\] CLAPI Export contact with contact group - PR \#6131
  - \[API\] CLAPI Export service categories - PR \#6134
  - \[Configuration\] SNMP trap poller generation uses ACL - \#6043 PR \#6069
  - \[Custom Views\] Fix share custom view - PR \#6109
  - \[Poller Stats\] Poller Statistics Graphs are displayed in first column only
    - \#6003 PR \#6122

#### Others

  - Update copyright date on the login page - PR \#6076
  - Remove multiple debug in Centreon - PR \#6138

### Centreon Web 2.8.19

#### Enhancements

  - \[API\] Return error when filtered object does not exist - PR \#6074
  - \[API\] Add clapi set option - PR \#6065
  - \[UX\] Add new loading css - PR \#6066 \#6072

#### Bug Fixes

  - \[API\] Fix clapi export with hosts parent relations - \#6061
  - \[API\] Uninitialized array causing php warning - PR \#6046 \#6097
  - \[Monitoring\] Top counter very slow since upgrade from 2.8.17 to 2.8.18 -
    \#6085 PR \#6093

### Centreon Web 2.8.18

#### Enhancements

  - \[Administration\] Add more actions and logging for ACL management - PR
    \#5841
  - \[API\] Validate input parameters - PR \#5958
  - \[API\] Check illegal char in add function for CLAPI - PR \#5948
  - \[API\] Improve error message - PR \#5972
  - \[API\] Get multiple parameters for host - PR \#5946
  - \[Configuration\] Add form to configure Centreon Broker generic stream
    connectors - PR \#6024 \#6053 \#6052 \#6042 (beta)
  - \[Documentation\] Add new chapter for Centreon ISO el7 installation - PR
    \#6019
  - \[Documentation\] Describe get parameters for hosts \#5783 - PR \#5924
  - \[Knowledge-Base\] Add option to disable SSL certificate - PR \#6027

#### Bug Fixes

  - \[Administration\] Define default value for Broker - \#6029 PR \#6033
  - \[Configuration\] Change low limit of EventMaxQueueSize for Centreon Broker
    configuration - PR \#6013
  - \[Configuration\] Avoid php notice when poller has no timezone - PR \#6031
  - \[Install\] Compatibility with PHP version 5.3 - PR \#5976
  - \[Meta-service\] Do not duplicate them on update - PR \#5982
  - \[Meta-service\] Possibility for user with ACL to display chart - PR \#5952
  - \[Monitoring\] Top Counter with ACL really slow - \#5974 PR \#5992
  - \[Monitoring\] Centreon UI freezes when access to "View contact
    Notification" - \#5760 PR \#5954
  - \[Monitoring\] Replace dot character in command line for better display - PR
    \#5945
  - \[Monitoring\] Fix add downtime on hostgroup or poller with ACL - PR \#6023

### Centreon Web 2.8.17

#### Enhancements

  - \[API\] Add Host getparam PR \#5783
  - \[API\] Delete/Cancel Real Time Downtime \#5879 PR \#5894
  - \[API\] Display future downtime PR \#5903
  - \[Documentation\] Update lifecycle in documentation PR \#5901
  - \[Documentation\] Remove obsolete paragraph PR \#5898

#### Bug Fixes

  - \[ACL\] Undefined variable host id PR \#5891
  - \[ACL\] Use correct id for acl host relation PR \#5896
  - \[Chart\] Graphs in IE stretched \#5081
  - \[Configuration\] Fix macro password visibility PR \#5873
  - \[Configuration\] Host search not saved when activate/deactivate a host
    \#5711 PR \#5827
  - \[Documentation\] Correct API documentation for host/service relation \#5854
  - \[Documentation\] Improve documentation install using ISO \#5772 PR \#5851
  - \[Install\] Script install.sh - Could not create user \#5785 PR \#5890
  - \[Knowledge Base\] Correct typo of error message PR \#5917
  - \[Monitoring\] fix macro password with arguments in object details page PR
    \#5928 \#5881

#### Security

  - Prepare query and execute it \#5904
  - Improve list of objects for Select2 \#5918
  - Update SQL query to prevent SQL injection in setRotate form \#5915

### Centreon Web 2.8.16

#### Enhancements

  - \[Administration\] Improve 'Server Status' page PR \#5820
  - \[API\] Add exceptions for realtime PR \#5735 \#5795
  - \[Configuration\] Broker remove non existing protocol \#5830 PR \#5832
  - \[Configuration\] Check illegal characters one time only PR \#5831
  - \[Documentation\] Wrong translation in documentation \#5858 PR \#5862
  - \[Documentation\] Improve installation documentation \#5825 PR \#5844
  - \[Documentation\] Improve Time Period documentation \#5828 \#5637 PR \#5845
    \#5843
  - \[Documentation\] Improve API realtime downtimes examples

#### Bugfix

  - \[Install\] Properly place update to 2.8 from 2.7. \#5809
  - \[ACL\] centAcl cron LDAP sync removes all ContactGroups on unexpected error
    \#5547
  - \[API\] Parent/Child relation are not exported with CLAPI \#5605 PR \#5857
  - \[API\] Authorize id 0 for object PR \#5812
  - \[Chart\] Add legend name when defined PR \#5817
  - \[Configuration\] Improve host/service macro visibility
  - \[Configuration\] add massive change contact/cg update mode for host form
    \#5878
  - \[Knowledge Base\] Search function non functional for templates of services
    \#5762 PR \#5829
  - \[Knowledge Base\] Increase page limit for mediawiki migration PR \#5798
  - \[Monitoring\] Custom MACRO not interpreted in URL \#5846 PR \#5850
  - \[Monitoring\] Display 0 in top counter if SQL result is empty \#5758 PR
    \#5826
  - \[Security\] Some field was not encoded PR \#5847

### Centreon Web 2.8.15

#### Important notice

This version include a fix for the calculation of downtimes with daylight saving
time (DST). The downtime end will be calculate with the new hour.

For example, if you put a downtime from 1 AM to 5 AM, the duration of the
downtime will be 5 hours if during the DST you get 1 hour more (3 AM come back
to 2 AM).

#### Enhancements

  - \[Documentation\] Improve api documentation (url) \#5792
  - \[Downtimes\] Manage downtimes with dst (recurrent and realtime) \#5780

#### Bugfix

  - \[Install\] Fix foreign key upgrade of traps\_group table PR \#5752
  - \[CLAPI\] Fix duplicate ldap serverPR \#5769
  - \[CLAPI\] Fix duplicate htpl in stpl \#5774
  - \[CLAPI\] Fix duplicate on stpl \#5775
  - \[Chart\] Add unit on y axis
  - \[Chart\] Fix extra legend on period change
  - \[Chart\] Fix export with empty metric
  - \[Configuration\] Add obsess\_over\_hosts parameter in main centengine
    configuration PR \#5746
  - \[Monitoring\] Ranking of ascending / descending guests NOK \#5695 PR \#5744
  - \[Monitoring\] fix variable name in centreontrapd.pm

### Centreon Web 2.8.14

#### Enhancements

  - \[API\] Update CLAPI commands to show resources of a downtime PR \#5705
  - \[API\] Add possibility to grant access to children menu (or not) PR \#5694
  - \[API\] Add possibility to add and get list of on-demand downtime \#5192
    \#5682 PR \#5623 - beta
  - \[API\] Add possibility to get realtime hosts status \#5682 - beta
  - \[API\] Add possibility to get realtime services status \#5682 - beta
  - \[Documentation\] Activate services at system startup PR \#5698
  - \[Administration\] Add possibility to test proxy configuration \#5561 PR
    \#5722

#### Bugfix

  - \[API\] Fix list of hosts with gethosts method of Instance object \#5300 PR
    \#5603
  - \[Install\] Add unique key on comments table PR \#5665
  - \[Custom Views\] Sharing View problem to select multiple users \#5029
  - \[Configuration\] Multiple 'update mode' fields in massive changes \#5266 PR
    \#5636
  - \[configuration\] Massive Change on Hosts activate Stalking Option Up \#4946
  - \[Reporting\] Reporting Dashboard messed up \#5491 \#5520
  - \[Monitoring\] No inheritance in query of notified contacts \#4981
  - \[Monitoring\] Top counter display too much resources with ACL \#5713 PR
    \#5703

### Centreon Web 2.8.13

#### Enhancements

  - \[Doc\] Improve centreon documentation \#5611 PR \#5612
  - \[Doc\] clarify documentation of centreon clapi authentication \#5625 PR
    \#5628
  - \[Performance\] Correct svc top counter with meta and merge SQL requests PR
    \#5616

#### Bugfix

  - \[Top Counter\] Metaservices not counted properly in statuses filter \#5458
    PR \#5616
  - \[Configuration\] Properly export interval length in storage endpoints
    \#5461
  - \[Documentation\] Time Range exceptions invalid format \#5578
  - \[Chart\] No graphics with backslash \#5554 \#5342 PR \#5565
  - \[LDAP\] Problem with LDAP autoimport and groupmapping with comma in CN
    \#4867
  - \[Monitoring\] No inheritance in query of notified contacts (Monitoring
    view) \#4981

### Centreon Web 2.8.12

#### Enhancements

  - \[API\] Update documentation to remove non available functions
  - \[API\] Export/Import LDAP configuration
  - \[API\] Export/Import ACL Groups
  - \[API\] Export/Import ACL Menus
  - \[API\] Export/Import ACL Actions
  - \[API\] Export/Import ACL Resources
  - \[API\] Replacing contact\_name by contact\_alias PR \#5546
  - \[Configuration\] Input text not aligned in Curves page \#5534 PR \#5553
  - \[Monitoring\] Monitoring Services by Hostgroup : improvement order
    suggestion \#5402 PR \#5552
  - \[Monitoring\] Increase perfs on EventLogs for non admin user PR \#5480
  - \[Knowledge Base\] Display API errors \#5502
  - \[Knowledge Base\] Refresh page after deletion \#5503
  - \[Backup\] Get correct datadir with CentOS7/MariaDB PR \#5484

#### Bugfix

  - \[ACL\] Bug on Access Groups \#5189
  - \[ACL\] The ACL of a contact and of a contact group is deleted during
    duplication \#5497
  - \[API\] CLAPI Import not working \#5541
  - \[API\] CLAPI export with select filter give PHP Warning and non result
    \#5548
  - \[API\] Missing functions setseverity and unsetseverity for services by
    hostgroup \#5262
  - \[API\] Problem with icon\_image and map\_icon\_image of Hostgroup \#5292
  - \[API\] Missing function setservice for Service categories \#5304
  - \[API\] Problem with setting gmt in API \#5291
  - \[API\] Contact group additive inheritance isn't implemented \#5311
  - \[API\] Contact additive inheritance isn't implemented \#5310
  - \[API\] Problem with delmacro for services by hostgroup \#5309
  - \[API\] Several bugs on HG / CG when export is filtered \#5297 PR \#5297
  - \[Monitoring\] Sorting by duration and Maximum page size change \#5287
    \#5410 PR \#5517
  - \[Configuration\] Dependent host deleted during a service dependency
    duplication \#5531
  - \[Configuration\] All pollers had "config changed" \#5549
  - \[Configuration\] Unable to change the severity of an host template \#5472
  - \[Configuration\] Unable to change the severity of a service template \#5559
  - \[Configuration\] Meta service - unable to change the geo\_coordinates
    \#5493 PR \#5505
  - \[Configuration\] Meta service - unable to add more than one contact \#5506
    PR \#5507
  - \[Configuration\] Meta service - Implied contact is deleted during
    duplication \#5495 PR \#5508
  - \[Configuration\] Problem with escalation's name during a duplication \#5512
    PR \#5513
  - \[Configuration\] Duplicate severity should remove link to objects \#5478 PR
    \#5509
  - \[Configuration\] Fix search in trap select2
  - \[Configuration\] Fix search in service template select2

### Centreon Web 2.8.11

#### Enhancements

  - Fix typos in Enabled/Disabled filters PR \#5251
  - Do not list meta services in list of service to add to a SNMP trap \#5418 PR
    \#5419

#### Bugfix

  - Knowledgebase - Delete wiki page not functional \#5059
  - Massive Change don't modify the Recovery notification delay of a host \#5451
  - Impossible to acknowledge several object from custom views \#5420
  - Load custom views - fixed database entry duplication PR \#5260
  - Adding SNMP traps definition : values set to fields in Relations tab are not
    saved \#5406 PR \#5415 PR \#5417
  - SNMP Trap, not all parameters are saved on creation \#5361 PR \#5415 PR
    \#5417
  - Page "Services by Servicegroup \> Display \> Summary" not working \#5399 PR
    \#5416
  - \[CLAPI\] Duplicate CMD in export \#5455
  - \[CLAPI\] Fatal error with PDOException \#5453 PR \#5462

### Centreon Web 2.8.10

#### Enhancements

  - Proposal break Ajax \#5256
  - Do not export empty Centreon Broker parameters with API \#5284
  - Remove duplicate $\_GET\["autologin"\] in test \#5344
  - Documentation improvement \#5063
  - Update engine reserved macros ($HOSTID$, $SERVICEID$, $HOSTTIMEZONE$) \#5246
  - Config generation is too long \#5388
  - Rename Centreon Broker Daemon option \#5276

#### Bugfix

  - Failure with special character in password for mysqldump \#5173
  - Unable to select all services in escalation form \#5326 \#PR5325
  - Contacts/contactgroups inheritance \#5396 PR \#5400
  - Check if wiki is configured and extend error message \#5278 PR \#5269
  - Select All don't work on service categories PR \#5389
  - Autologin + fullscreen options \#5338 PR \#5338
  - Directory "/var/spool/centreon" not created by Centreon-common.rpm \#5405
  - "Fill in" option in graph doesn't work with "VDEF" DEF type \#5354
  - Delete SNMP Traps \#5282
  - Can't duplicate trap definition \#5272 PR \#5280
  - Virtual Metric problems with French language package \#5355
  - Impossible to set manually a service to a meta service for non admin users
    \#5358 PR \#5391
  - Graph period displayed does not match selected zoom period \#5334
  - Host configuration can not be saved or modified \#5348

### Centreon Web 2.8.9

#### Bug Fixes

  - Fix Incorrect style for "Scheduled downtime" in dashboard - \#5240
  - Apply new Centreon graphical charter to add and modify pages for metaservice
    indicator - \#5255
  - \[2.8.6\] : Double quote are converted in html entities in fields Args -
    \#5205
  - Duplicate host template doesn't work - \#5252
  - \[BUG\] "Home \> Poller Statistics \> Graphs" only works for Central -
    \#4954
  - "Recovery notification delay" is not written to centreon-engine's
    configuration - \#5249 - PR \#5268
  - Severity of 'host category' - \#5245
  - \[2.8.8\] Deploy Service action won't work - \#5215
  - \[2.8.8\] Issue when adding new connector - \#5233
  - \[2.8.8\] Data pagination - \#5259
  - Cannot modify metaservice indicator - \#5254 - PR \#5267
  - \[2.7.11\] Migration 2.7.11 to 2.8.x does not work \#5265
  - 2.7 to 2.8 upgrade error - \#5220
  - Cannot insert numbers in service description field - \#5275
  - \[2.8.7\] - Timezone / Location BUG \!\! - \#5218
  - 2.8.8 Service Trap Relation empty - \#5223
  - \[2.7.x/2.8.X\] Old school style in popup - \#5232
  - \[BUG\] ACL - Servicegroup - \#5101 - PR \#5222
  - \[2.8.7\] Missing argument 1 for PEAR::isError() - \#5214 - PR \#5225
  - \[Reporting \> Dashboard \> Services\] Unable to export CSV - \#5170 - PR
    \#5172

#### Graphs

  - Graph are not correctly scaled - \#5248
  - \[Chart\] scale in charts using CPU template is wrong Kind/Bug
    Status/Implemented - \#5130
  - Graph scale values not working - \#4815
  - \[2.8.5\] Charts upper limit different from template - \#5123
  - Remove chart padding - \#5288
  - Base Graph 1000/1024 Kind/Bug Status/Implemented - \#5069
  - \[2.8.6\] non-admin user split chart permission - \#5177
  - After using split chart, curves are not displayed anymore (period filter not
    applied) - \#5198 - PR \#5171
  - \[GRAPH\] Problem with external graph usage (Widgets, Centreon BAM) - \#5270
  - Incorrect scale and position for rta curve (performance ping graph) - \#5202
  - Wrong tool tip display on chart with two units when one of the curves is
    disabled - \#5203
  - Splited chart png export misnamed doesn't work with HTTPS - \#5121 - PR
    \#5171
  - \[2.8.5\] Splited chart png export misnamed - \#5120
  - \[Chart\] curves units are displayed on incorrect side - \#5113
  - Assign good unit and curves to y axis when 2 axis - \#5150
  - remove curves artifacts - \#5153
  - Beta 2.8 Curve with an weird shape. - \#4644
  - The round of the curves - \#5143
  - The extra legend is option in chart. - \#5156
  - Add option for display or not the toggle all curves in views charts - \#5159
  - Use the base from graph template for humanreable ticks - \#5149

### Centreon Web 2.8.8

#### Bug Fixes

  - Fix Centreon Engine configuration form
  - Fix custom view sharing
  - Fix Knowledge Base script compatibility with PHP \< 5.4

### Centreon Web 2.8.7

#### Bug Fixes

  - Fix various security issues
  - Fix ldap configuration form
  - Fix downtime popup in listing pages
  - Fix object listing pages which are empty after some actions

### Centreon Web 2.8.6

#### Bug Fixes

  - Downtimes - Display real BA name instead of \_[Module]() - \#5014, PR \#5094
  - InfluxDB broker output config: metric columns not stored properly - \#5058,
    PR \#5089
  - Poller status still working when the poller is disabled - \#5126
  - Filter on the status host/service on the motiroring isn't working \#5131,
    \#5140
  - Fix acl on host categories for inheritance
  - Avoid infinite loop in acl category
  - Fix error message in install process
  - Fix path to centengine and cbd init scripts
  - Fix topcounter must count all meta services - \#5071, PR \#5100
  - Fix access downtime page for users with ACL - \#4952, \#5025, PR \#5093
  - Centreon \> Services - Services listed twice - \#5158, PR \#5010
  - Custom views - problem with multiselect users when sharing View - \#5029, PR
    \#5074
  - Massive change - impossible to add service group - \#5132
  - Fix URL decode problem with character '+' in object's name - \#5128, PR
    \#4883
  - Fix CLAPI import
  - Poller status still working when the poller is disabled - \#5126, PR \#5133

#### Enhancements

  - Display inherited categories in host details page
  - Do not check modification of configuration on disabled poller for better
    performance - PR \#4928
  - Improve access to services configuration page - PR \#5077, PR \#5076
  - Improve global performance - PR \#4900
  - Improve Knowledge Base configuration
  - Fix wiki links of objects with spaces in their name - \#4306
  - Improve documentation
  - Set geo\_coords parameter with clapi

If you already used a knowledge base, please execute following script : :

    php /usr/share/centreon/bin/migrateWikiPages.php

#### Known bugs or issues

  - There's an issue in the ldap configuration form. A fix is available and will
    be package with the next bugfix version. Until then you can apply the patch
    available
    [here](https://github.com/centreon/centreon/commit/8aef6dfa4e3af27f16277b4211655889cf91fb71)
  - There's an issue on all listing pages. A fix is available and will be
    package with the next bugfix version. Until then you can apply the
    [available
    patch](https://github.com/centreon/centreon/commit/d9b58f203f1af377575328d6f955ac1e9c8fb804)

### Centreon Web 2.8.5

Released March 29th, 2017.

The 2.8.5 release for Centreon Web is now available for download. Here are its
release notes.

#### Features

###### API

  - Possibility to create an account to reach API without web access - \#4980,
    PR \#4992

###### Monitoring

  - Better display in service detail with long output or long command - \#4974,
    \#4975, PR \#5002
  - Recurrent downtimes, extend specific period settings to select 2nd, 2td or
    5th o month - \#4207, \#4908

###### Charts

  - Add split function in chart - \#4803, \#4990
  - Add button to display curve legend (min/max/average) - \#4595
  - Add button to display multiple periods view - \#4884
  - Extend chart legend and add more information on helps - PR \#5006
  - Extend help for stacking and transparency - \#4884

###### Ergonomics

  - Add new Centreon style for some buttons - PR \#5060, PR \#5061, PR \#5062,
    PR \#5067, PR \#5068
  - Add possibility to copy-paste executed command ligne from service details
    page - PR \#5065

#### Bug Fixes

###### ACL

  - Incorrect redirection to error page with ACL - \#4932
  - Dashboard not works when using filter \#4886, PR \#5023
  - Blank page on "Monitoring \> Status Details \> Hosts" with acl - \#4960

###### Authentication

  - Only logout are logged - \#4924, PR \#5004
  - Autologin with any token - \#4668
  - generateImage.php problem with akey (auto-login) - \#\#4920, PR \#4865

###### Monitoring

  - "Executed Check Command Line" is wrong for services associated to hostgroups
    - \#4955, PR \#5037
  - Poller delete stay on Poller list in Monitoring Tab - \#5026, PR \#5027
  - Acknowledge - duplicate comments with external command on host monitoring
    page - \#4862, PR \#5015
  - Do not display services downtimes (remove filter "h") - \#4918, \#4947,
    \#5000, PR \#5001
  - Column 'sg\_id' in field list is ambiguous - \#4938
  - Remove 's' in service popin for duration - PR 5051
  - Select servicegroup does not work - \#4907, \#4885
  - Escaping problem in executed command - \#4976, PR \#4985, PR \#4999
  - Fix problem on graph when user ask to display graphs of a hosts - PR \#4991
  - Cannot Export Event Log to CSV - \#4943
  - View logs for service does not work - \#4958
  - Centreontrapd and exec code - PR \#5054

###### Graphs

  - Curves color on New graph is not equal to old graph - \#5033
  - Wrong host title in Graph - \#4964 \#4984

###### Dashboard

  - Incorrect CSS for reporting of a service - \#4934, PR \#5009

###### Configuration

  - Exploit correlation with Centreon BAM - PR \#5049
  - Disable notification sounds not working - \#4988, PR \#4973
  - Add user name in the generated configuration files - \#4822
  - Duplicate Poller and illegal characters - \#4931, PR \#4986, \#4987
  - Can view first help icon in Centreon Broker configuration - \#4944, PR
    \#5003
  - Describe arguments does not work with % character in command line - \#4930
  - Generate and export SNMP traps - \#4972, \#4978
  - Host macro did not save on host edit - \#4951
  - Do not check modification on disabled pollers - \#4945

###### Custom view

  - Rewrite system to share public views - PR \#4823
  - Rewrite system to share locked views to contacts or contactgroups
  - Rewrite system to share non-locked views to contacts or contactgroups
  - When user access to custom views menu, edition mode is disabled - \#5008, PR
    \#4811
  - Listing of widget with infinite scroll displays at least 3 times each widget
    - \#4892
  - "Set Default" button not working - \#5079

###### Documentation

  - Improve installation chapters - \#4970, PR \#4967
  - open\_files\_limit error during installation - \#5017, \#5038
  - Menu "Legend" doesn't exist in Centreon 2.8.x - PR \#4968, PR \#4969
  - Update product lifecycle - PR 5044
  - Correct contact creation example - PR \#5035, - PR \#5036

###### API

  - Rename TIMEPERIOD object to TP - PR \#4913, PR \#4914
  - CLAPI doesn't work when Centreon BAM is installed - \#4921, PR \#5049, PR
    5005
  - DowntimeManager - do not remove downtimes not linked to objects to allows
    configuration with API - \#5057

###### Backup

  - Backup export does not work - \#4726, PR \#5019
  - Backup won't work without old deprecated variables - \#4965, \#PR \#5007

###### Installation

  - SQL script error for upgrade from 2.6.6 to 2.7.0RC1 - \#5064, PR \#5066
  - Using sources, error with CentPlugins Trap on install - PR \#4963

#### Known bugs or issues

  - Centreon Engine performance chart still in RRDTools PNG format;
  - Zoom out on chart change period on filters;
  - User with ACL can't see it own previously created meta service;
  - Problem with recurrent downtimes and DST;
  - Issue with international keyboard and chrome when use accented characters;

### Centreon Web 2.8.4

Released February 8th, 2017.

The 2.8.4 release for Centreon Web is now available for download. Here are its
release notes.

#### Features

No feature.

#### Bug Fixes

  - Fix problem with the upgrade process - all Centreon systems coming from
    2.7.x have a database problem - column timezone was missing in the table
    $STORAGE$.hosts ; --\> this problem prevents centreon-broker from starting

#### Known bugs or issues

  - Centreon Engine performance chart still in RRDTools PNG format ;
  - Zoom out on chart change period on filters ;
  - User with ACL can't see it own previously created meta service ;
  - Problem with recurrent downtimes and DST ;

### Centreon Web 2.8.3

Released January 11th, 2017.

The 2.8.3 release for Centreon Web is now available for download. Here are its
release notes.

#### Features

  - \#4807: clean generation page ;

#### Bug Fixes

  - \#4843: SQL error in meta-service output ;
  - \#4775: disabled service are displayed in graph page ;
  - \#4729: command arguments are not displayed ;
  - \#4690: make timeperiod exceptions work ;
  - \#4572: poller duplication does not duplicate all fields ;
  - \#4838: geo coord help menu not working on hostgroup page ;
  - \#4827: remove old centreon-partitioning script ;
  - \#4826: use correct configuration file when reloading centreontrapd ;
  - \#4809: error during link between contact and LDAP contact group ;
  - \#4746: fix login when SSO header is empty ;

#### Known bugs or issues

  - Centreon Engine performance chart still in RRDTools PNG format ;
  - Zoom out on chart change period on filters ;
  - User with ACL can't see it own previously created meta service ;
  - Problem with recurrent downtimes and DST ;

### Centreon Web 2.8.2

Released December 8th, 2016.

The 2.8.2 release for Centreon Web is now available for download. Here are its
release notes.

#### Features

  - \#4779 : Centreon Web supports proxy configuration for use with its modules
    requiring external web access. This notably concerns Centreon Plugin Pack
    Manager (component of the Centreon IMP offer).

#### Bug Fixes

  - \#4791: Can't delete host command on host/host template form ;
  - \#4773: Centreon Clapi call and empty line at beginning ;
  - \#4752: Options missing in notification tab ;
  - \#4728: Avoid http warnings on first connection with ldap auto import ;

#### Known bugs or issues

  - Centreon Engine performance chart still in RRDTools PNG format ;
  - Zoom out on chart change period on filters ;
  - User with ACL can't see it own previously created meta service ;
  - Problem with recurrent downtimes and DST ;

### Centreon Web 2.8.1

Released November 14th, 2016

The 2.8.1 release for Centreon Web is now available for download. Here are its
release notes.

#### Changes

  - New theme for Centreon web installation and update;
  - Add REST exposure for Centreon API, Centreon CLAPI still available;
  - Integration of Centreon Backup module in Centreon;
  - Integration of Centreon Knowledge Base module in Centreon;
  - Integration of Centreon Partitioning module in Centreon;
  - New design to display charts using C3JS.
  - New filters available to select display charts
  - Possibility to display charts on 1, 2 or 3 columns;
  - Apply zoom on one chart apply zoom for all displayed charts;
  - Merge of meta-services and services real-time monitoring display;
  - Strict inheritance of contacts and contacts groups from hosts on services
    notification parameters. Contacts and groups of contacts from services
    definition will be erased during generation of configuration by settings
    from host;

#### Features

  - New servicegroups filters in real-time monitoring;
  - New display of chart in pop-up of services in real-time monitoring and
    status details
  - Add poller name in pop-up of hosts in real-time monitoring;
  - Add monitoring command line with macros type password hidden (via ACL) in
    service status details;
  - Integration of poller’s name in “Monitoring \> System Logs” page;
  - Integration of ACL action on poller for generation and export of
    configuration;
  - Add new notification settings to not send recovery notification if status of
    host or service came back quickly to non-ok (issue for SNMP traps for
    example);
  - Add geo-coordinates settings on hosts, services and groups. Used by Centreon
    Map product;
  - Possibility to define a command on multi-lines;
  - Add Centreon Broker graphite and InfluxDB export;
  - Add possibility for all Centreon web users to select their home page after
    connection;
  - Add possibility to define downtimes on hostgroups, servicegroups and
    multi-hosts;
  - Add an acknowledge expiration time on host and service;
  - Better ergonomics on selectbox for Mac OS and MS Windows users;
  - Add possibility to set downtimes on Centreon Poller display module;
  - Add possibility to reduce Centreon Broker input/output configuration;
  - Optimization of SQL table for logs access;
  - Add timezone on host’s template definition;

#### Security Fixes

  - \#4668: Autologin with invalid token for imported users with null password ;
  - \#4458: User can create admin account

#### Bug Fixes

  - \#4703: Macros are always listed on command line descriptions;
  - \#4694: Don’t display notification in pop-up for acknowledged or downtimes
    objects;
  - \#4585, \#4584, \#4590: Correction of CSV export in “Monitoring \> Event
    Logs”, “Dashboard \> Hostgroups” and “Dashboard \> Servicegroups” pages.
    Correction of XML error in “Dashboard \> Hostgroups” and “Dashboard \>
    Servicegroups” pages;
  - \#4617, \#4609: Complete contextual help in hosts and services forms;
  - \#4147: Fix ACL to add widget

#### Removed Features

  - No possibility to split charts;
  - No possibility to display multi-period on one chart (Day, Week, Month,
    Year);

#### Known bugs or issues

  - This release is not yet compatible with other commercial products from
    Centreon, like Centreon MBI, Centreon BAM or Centreon Map. If your are using
    any of these products, you are strongly advised **NOT** to update Centreon
    Web until new releases of the fore mentioned products are available and
    specifically mention Centreon Web 2.8 compatibility ;
  - Centreon Engine performance chart still in RRDTools PNG format ;
  - Zoom out on chart change period on filters ;
  - User with ACL can't see it own previously created meta service ;
  - Problem with recurrent downtimes and DST ;
  - Issues on SSO Authentication


### Centreon 2.7.12

The 2.7.12 release for Centreon Web is now available for
[download](https://download.centreon.com). The full release notes for 2.7.12
follow.

#### Notice

If you are upgrading from a version prior to 2.7.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Bug Fixes

  - \[CLAPI\] Several bugs on HG / CG when export is filtered \#5297 PR \#5320
  - \[CLAPI\] fix clapi ldap contact import
  - Unable to load public custom view - No Layout... \#5449
  - Impossible to acknowledge several object from custom views \#5420
  - Security: avoid external command shell injection in comment

### Centreon 2.7.11

The 2.7.11 release for Centreon Web is now available for
[download](https://download.centreon.com). The full release notes for 2.7.11
follow.

#### Notice

If you are upgrading from a version prior to 2.7.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Bug Fixes

  - Fix ldap authentication \#5216
  - Fix CLAPI export using filters \#5084
  - Fix CLAPI poller generate (generate, test, move, restart/reload/ applycfg)
    \#5224 \#5221
  - Fix Incorrect style for "Scheduled downtime" in dashboard \#5240
  - Fix Contact - import LDAP apply new CSS style \#5235
  - Fix HTML export with filters \#4868
  - Fix brokercfg export with filter
  - Fix get command list query \#5229
  - Apply sso fixes from 2.8.x
  - Improve performances \#5157
  - Convert string in UTF-8 \#5118 \#5244

### Centreon 2.7.10

The 2.7.10 release for Centreon Web is now available for
[download](https://download.centreon.com). The full release notes for 2.7.10
follow.

#### Notice

If you are upgrading from a version prior to 2.7.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Bug Fixes

  - Fix various security issues
  - Fix ldap configuration form
  - Fix downtime popup in listing pages
  - Fix object listing pages which are empty after some actions

### Centreon 2.7.9

Released March, 21th 2017.

The 2.7.9 release for Centreon Web is now available for
[download](https://download.centreon.com). The full release notes for 2.7.9
follow.

#### Notice

If you are upgrading from a version prior to 2.7.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Features and Bug Fixes

  - Fix: allow full configuration export for Centreon Poller Display
  - All graphs linked to a host aren't displayed in performance page - \#4731
  - Documentation - correct example to use TP instead of TIMEPERIOD - PR \#4915,
    Pr \#4916
  - Force CENGINE key in centreon database options to use Centreon Engine -
    \#4922

### Centreon 2.7.8

Released November 09,2016

The 2.7.8 release for Centreon Web is now available for
[download](https://download.centreon.com). The full release notes for 2.7.8
follow.

#### Notice

If you are upgrading from a version prior to 2.7.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Features and Bug Fixes

  - Fix: Improve graph rest API
  - Fix: Two "update mode" lines for service groups in Massive change causing
    annoying behavior

### Centreon 2.7.7

Released September 13,2016

The 2.7.7 release for Centreon Web is now available for
[download](https://download.centreon.com). The full release notes for 2.7.7
follow.

#### Notice

If you are upgrading from a version prior to 2.7.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Features and Bug Fixes

  - Fix: Non initialized value in Centreon ACL page
  - Fix : Security issue with autologin when user has no password
  - Enh: \[Centreon Clapi\] Add export filters

### Centreon 2.7.6

Released July 21,2016

The 2.7.6 release for Centreon Web is now available for
[download](https://download.centreon.com). The full release notes for 2.7.6
follow.

#### Notice

If you are upgrading from a version prior to 2.7.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Features and Bug Fixes

  - Fix: Hard PATHs in some folders
  - Fix: Correction of some typos
  - Fix: contact\_location default value incorrect
  - Fix: Security fix linked to the configuration export
  - Fix: Problem with custom view style when user was not able to edit the view
    then old style was used
  - Fix: Centreontrapd issue if number of downtimes is greater than 1
  - Fix: Service comments wrong request
  - Enh: SQL Optimisation in handling service templates

### Centreon 2.7.5

Released July 06,2016

The 2.7.5 release for Centreon Web is now available for
[download](https://download.centreon.com). The full release notes for 2.7.5
follow.

#### Notice

If you are upgrading from a version prior to 2.7.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Features and Bug Fixes

  - Fix: Flapping configuration was not exported to Centreon Engine
    configuration files
  - Fix: Option "test the plugin" didn't working with special characters
  - Fix: It was possible to select Meta Service or BA in performance page
    filters
  - Fix: With non admin users, it was impossible to select services in
    Performances page
  - Fix: Non admin users could not seen services in Reporting page
  - Fix: Number of hosts in Hostgroups was not good for non admin users
  - Fix: Max and Min was not correct for inverted curves
  - Fix: It was impossible to create Virtual metrics with web UI in french
    language
  - Fix: Exclude Deactivate poller in configuration generation page filter
  - Enh: Add an error message when no pollers are selected in configuration
    generation page

### Centreon 2.7.4

Released April 14,2016

The 2.7.4 release for Centreon Web is now available for
[download](https://download.centreon.com). The full release notes for 2.7.4
follow.

#### Notice

If you are upgrading from a version prior to 2.7.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

##### Fix of an encoding problem

Following a change of encoding tables in centreon database which occurred in the
2.7.0 version, bad encoded characters appear in the Centreon web interface.
Indeed, the change charset "latin1" to "utf8" was not followed by an update of
the content of tables in the database.

To restore a valid encoding of special and accented characters, it is necessary
to manually run the script provided by Centreon.

##### Warning

This script should be run once and only once.

If an operator has modified/corrected special characters or accented since the
2.7.0 update, processing performed by the script will truncate the string to
turn on the first special or accented character. It will then be necessary to
change the impacted objects to manually update them. (The script can
unfortunately provide the list of impacted objects.

All contents of table type "varchar", "char" or "text" will be updated

##### Prerequisites

Don't forget to backup your database before doing any operations.

##### Installation

Download and install the script in "/usr/share/centreon/bin/" with the command:

wget <http://resources.centreon.com/upgrade-2.6-to-2.7/migrate_utf8.php> -O
/usr/share/centreon/bin/migrate\_utf8.php

##### Execution

From a shell terminal, perform the script:

php /usr/share/centreon/bin/migrate\_utf8.php

##### Validation

Connect to your web interface and check that there are no more bad encoded
characters on it.

#### Features and Bug Fixes

  - Fix: Contacts in contactgroups were exported with a wrong ID
  - Fix: Error when saving "Administration \> Parameters \> Monitoring" page
  - Fix: Zoom in Performance graph
  - Fix: Select contactgroups / contacts in services & hosts configuration was
    not working
  - Fix: Display only categories and not severities on form
  - Fix: Scroll bar in "Configuration - Hosts - Host Groups"
  - Fix: Category Relation on host and host template form
  - Fix: Order in More Actions Menu
  - Fix: generateSqlLite not install with source
  - Fix: SSO connection with LDAP user
  - Enh: Add possibility to set local to "browser" when adding a contact by
    CLAPI

### Centreon 2.7.3

Released March 15,2016

The 2.7.3 release for Centreon Web is now available for
[download](https://download.centreon.com). The full release notes for 2.7.3
follow.

#### Notice

If you are upgrading from a version prior to 2.7.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Features and Bug Fixes

  - Fix Recurrent downtimes starting at 00:00
  - Fix search in Poller configuration page
  - Fix problems when sharing custom views
  - Fix description problem with custom macros containing dash
  - Fix time Interval change isn't being reflected in the polling Engine config
  - Fix Missing GMT and UTC timezone
  - Fix No performance graph for host group service
  - Fix ACL were showing too much objects
  - Fix Impossibility to delete custom macros on service
  - Fix Split on multi graph
  - Fix Design on Monitoring Performances page
  - Fix CLAPI handled all broker parameters
  - Fix Custom macros can contain dash
  - Fix Time Interval change isn't being reflected in the polling Engine config
  - Fix UI doesn't display the good limit of pagination
  - Fix Some French translations were missing
  - Enh Improve listing possibilities in Widget configuration (Pollers and
    categories)
  - Enh Usability of select2
  - Enh Possibility to reload several pollers in one time
  - Enh Add an API to send External Commands

### Centreon 2.7.2

Released February 24, 2016

The 2.7.2 release for Centreon Web is now available for
[download](https://download.centreon.com). The full release notes for 2.7.2
follow:

#### Notice

If you are upgrading from a version prior to 2.7.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Features and Bug Fixes

  - Fix eventlogs pages for performances and right for non admin users
  - Fix Recurent Downtimes behavior with timezones
  - Fix some broken relations in web interface
  - Fix Reporting pages for non admin users
  - Fix some elements with the generation of the configuration
  - Fix encoding problems
  - Fix filters in configuration pages
  - Fix Poller duplication
  - Fix various ACL problems
  - Fix some SQL queries
  - Fix export of Meta Services
  - Improve ACL on Custom Views

#### Known Bugs

  - Recurrent downtimes during for more than a day are not working
  - It's impossible to remove relations between usergroup and custom views
  - With the update some widgets have to be deleted and recreated

### Centreon 2.7.1

Released January 07, 2016

The 2.7.1 release for Centreon Web is now available for
[download](https://download.centreon.com). The full release notes for 2.7.1
follow:

#### Notice

If you are upgrading from a version prior to 2.7.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Features and Bug Fixes

  - Improved ergonomics of the select2 component
  - Improved performances of monitoring pages
  - Improved performances of the event logs page
  - Improved performances of downtimes configuration on host page
  - Improved documentation
  - Fixed problem when sharing views in Custom views page
  - Fixed a right problem in CLAPI generation of the configuration
  - Fixed problem in services per hostgroups pages
  - Fixed problems in configuration generation when mysql is not using 3306 port

### Centreon 2.7.0

Released December 17, 2015

The 2.7.0 release for Centreon Web is now available for
[download](https://download.centreon.com). The full release notes for 2.7.0
follow:

#### Features and Bug Fixes

  - Changing the graphic charter to be consistent with the new logo Centreon
  - Flat design (CSS and icons)
  - Custom view improvement

    - Adding an editing or visualization mode
    - Graphic widgets relief to be able to put more on a page

  - Adding a fullscreen mode
  - Menu Review for improved navigation and simplified user actions
  - Review og pages dedicated hosts and services pages in monitoring to include
    more informations.
  - Redesign of the reporting page
  - Recasting bar searches and filters in each page of Centreon
  - Redesign Event Logs page (removing treeview + Added search system + Improved
    performances)
  - Redesign view page (removing treeview + Added search system + Improved
    performances)
  - Merging downtimes pages for hosts and services
  - Merging comments pages for hosts and services
  - Integration of a graphics module to replace a non-performing component
    QuickForm (Improved forms on multi element selection)
  - Simplifying the configuration of Centreon Broker (Temporary and Failover are
    automatically configured + enhanced best practices)
  - Ergonomic improvement of the configurations objects:

    - Improved hosts form
    - Improved services form
    - Improved management macros: dynamic form system that provides the
      necessary inherited macros templates for proper operation of the
      configuration
    - Added ability to set a description of each macro used in commands
    - Review of the pathway for the generation of the configuration
    - Automatic creation of a configuration file for the poller when it is
      created

  - Deleting configuration options in the Administration section, now
    automatically configured. This simplifies the handling of Centreon
  - Improved ACL system (Improved performances)
  - Native integration of Centreon CLAPI
  - Improved documentation

    - Redesign Configuration part
    - Redesign Exploitation part
    - Integration of the API part

#### Changes

  - Important web design changes can make interface not compatible with older
    modules. A re-factoring work will be needed to ensure optimal operation.
  - Changing the timezone system : DST management (may need to check the
    timezones of each host and contact after the update)
  - Changing databases schemes for hostgroups and servicegroups in the real
    state database (centreon\_storage) : added id and deletion of alias, url,
    url note, icon.
  - Changing the path for generating the configuration of Centreon Engine
    instances : no more specific page to generate the configuration. The action
    is now available from the pollers list.
  - Switching to InnoDB all Centreon tables (except logs and data\_bin too big
    for an automatic update).
  - PHP 5.1 no longer supported
  - Browser compatibility : IE 11, FF 5 et Chrome 39 at least
  - Shared views in custom views are not automatically loaded in views of others
    users. Now views are able to be public and user can load them during the
    creation step.

#### Security fixes

  - Removing PHP session ID in the URL of the Ajax flow of certain pages.
  - Integration of a CSRF token in all forms to prevent "Man in the middle"
    effect.

#### Removed Features

  - Nagios and NDOutils are no longer compatible with Centreon web. Only
    Centreon Engine and Centreon Broker are compatible from version 2.7.0
  - Removing centstorage and logAnalyser executables.
  - Removing the Nagios configurations load module.
  - Removing the ability to configure the colors of graphics templates
  - Removing color choices for menus
  - Removing choosing colors for monitoring status
  - Removing the ability to configure Nagios CGI
  - Transformation of the tactical overview in widget
  - Transformation of the Monitoring Engine statistics Page in widget
  - Deleting the Server Status page (phpsysinfo) become incompatible with the
    PHP version recommended for Centreon
  - Remove timeperiod exclusions in the UI. This function don't work very fine
    whether with Centreon Engine 1.x or Nagios. We prefer removing the function
    in order to avoid problems.

#### Known Bugs

  - ACL of pages is not fully updated during the upgrade process. So please
    check all your ACL pages after the migration. You may have problems with the
    followings pages:

    - Monitoring \> Hosts
    - Monitoring \> Services
    - Monitoring \> Performances (new page)
    - Monitoring \> Downtimes
    - Monitoring \> Comments
    - Monitoring \> Eventlogs \> System logs

  - Graph slip not working

  - Pagination is broker when you go on the last page, change the number of line
    to the Max. Page become empty.

  - If you have timeperiods used in exception or inclusion of timeperiod and now
    deleted, their ids stays in the database in relation table. During the sql
    update process, this blocks an addition of constraint on this relation
    table. To fix it, you have to remove old timeperiod id.:
    
        mysql> DELETE FROM timeperiod_exclude_relations WHERE timeperiod_id NOT IN (SELECT tp_id FROM timeperiod) OR timeperiod_exclude_id NOT IN (SELECT tp_id FROM timeperiod);
        mysql> DELETE FROM timeperiod_include_relations WHERE timeperiod_id NOT IN (SELECT tp_id FROM timeperiod) OR timeperiod_exclude_id NOT IN (SELECT tp_id FROM timeperiod);

#### How to Install ?

Now that you are aware about all specificities of this version, you can install
it. If you install from zero your system, please follow the `installation guide
<install>`. Else you can refer to the `upgrade guide <upgrade>`. Take care about
prerequisites and all upgrade steps in order to avoid data loss.


### Centreon 2.6.6

Released October 29, 2015

#### Notice

If you are upgrading from a version prior to 2.6.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Bug fixes

  - \#3812: \[2.6.3\] Strange display of service group details page
  - \#3824: PHP Warning: array\_map(): Argument \#2 should be an array
  - \#3840: \[2.6.4\] Wrong reporting graph data with default user language
    fr\_FR.UTF-8
  - \#3846: \[2.6.5\] CRSF Token critical: Impossible to upgrade a plugin
  - \#3847: \[2.6.5\] split component switch
  - \#3852: \[2.6.5\] CSRF error appears in user massive change form
  - \#3854: Cannot add new macro after deleting all macros already created
  - \#3855: Cannot add new host template to host after deleting all templates
  - \#3861: Comments shows only "A"
  - \#3864: \[2.6.5\] CSRF when trying to upload a SNMP MiB

### Centreon 2.6.5

Released October 21, 2015

#### Notice

If you are upgrading from a version prior to 2.6.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Security fixes

  - \#3831: XSS injection in object lists (ZSL-2015-5266)
  - \#3835: CSRF Issues on Centreon (ZSL-2015-5263)

#### Bug fixes

  - \#3821: Upgrade from 2.6.1 to 2.6.3 kill Centreon Frontend
  - \#3826: Split Component and zoom doesn't work
  - \#3827: Service Group Details page isn't displayed for non admin in Centreon
    2.6.3
  - \#3837: Relation of passive service with SNMP traps problem with multihost
    link
  - \#3842: Full logs display on event logs page for a non admin user

### Centreon 2.6.4

#### Notice

If you are upgrading from a version prior to 2.6.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Bug fixes

  - \#3793: Problem when creating an empty hostgroup with non admin user
  - \#3795: Update Centreon Administration About page (forge -\> GitHub)
  - \#3796: Problem when connect two time with same user in API
  - \#3797: Password in macro
  - \#3800: Current State Duration isn't displayed
  - \#3803: ACL : Manage multiple Resources group on the same ACL user group
  - \#3807: Unable to enable status option on main.cfg

### Centreon 2.6.3

#### Notice

If you are upgrading from a version prior to 2.6.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Bug fixes

  - \#564: Filter field does not work in service groups monitoring screen
  - \#1000: Services of service groups are dispatched on many pages
  - \#3782: SQL Keyswords
  - \#3783: index\_data switch in option form
  - \#3788: Problem with static keywords

### Centreon 2.6.2

#### Notice

If you are upgrading from a version prior to 2.6.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Features

  - Modules can extend actions after restart/reload pollers

#### Security fixes

  - \#2979 : Secure the type of media which file can be uploaded (ZSL-2015-5264)
  - Fix some SQL injections (ZSL-2015-5265)

#### Bug fixes

  - \#3559 : Fix query with MariaDB / MySQL configure in STRICT\_TRANS\_TABLES
  - \#3554 : Can send acknowledgment with multiline from monitoring page
  - \#3397 : Fix display graph with unicode characters in metric name
  - \#2362 : Correct value when use index\_data inserted by Centreon Broker in
    configuration
  - \#1195 : Display correct number of pollers in status bar
  - \#196 : Display all columns when filter is applied on Monitoring services
    unhandled view

### Centreon 2.6.1

#### Notice

If you are upgrading from a version prior to 2.6.0, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Bug fixes

  - \#5655: Changing Host Templates doesn't delete services
  - \#5925: Popup Dialogs (Acknowledge, Downtimes etc.) not working with
    Internet Explorer
  - \#6224: Special characters in LDAP are replaced by underscore
  - \#6358: It's possible to bypass ACLs on Event Logs page
  - \#6375: servicegroups empty into servicegroups.cfg but ok in DB
  - \#6377: PHP logs are too much verbose with PHP 5.4
  - \#6378: PHP logs are too much verbose with PHP 5.3
  - \#6383: Random severity on services
  - \#6390: Escalations with contact groups containing space
  - \#6391: Some traps are skipped
  - \#6396: Warning and critical threshold display in centreon graph
  - \#6399: Wrong condition in centreonLDAP.class.php
  - \#6410: Do not limit to 20 the number of trap rules or macro in host and
    services config pages

#### Features

  - \#6035: Removing Centreon Broker local module
  - \#6366: New option for Centreon Engine log
  - \#6392: Block choice of Nagios and NDO in installation process

### Centreon 2.6.0

#### Notice

If you are upgrading from a version prior to 2.5.4, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### What's new?

##### Compatibility with PHP 5.4.x

Centreon is now compatible with PHP in version 5.4.x. So, you do not need to
downgrade to PHP 5.3.x version when you install it on Debian 6, Ubuntu 13.04,
RedHat 7 and CentOS 7.

Centreon proprietary module (Centreon BAM, Centreon BI, Centreon MAP, Centreon
KB) is not compatible as yet with this PHP version.

##### New options for Centreontrapd

It's now possible with Centreontrapd to :

  - Filter services on same host ;
  - Transform output (to remove pipe for example) ;
  - Skip trap for hosts in downtime ;
  - Add custom code execution ;
  - Put unknown trap in another file.

##### ACL and configuration modification with admin users

ACL management has been improved to allow for a greater number of simultaneous
sysadmin users to work on the same monitoring platform.

The synchronization is more efficient in configuration page between admin and
normal users.

##### Partial rebuild of events information

It's now possible to partially rebuild events information with eventsRebuild
script. You can now use option '-s' when rebuilding and the rebuild will start
from this date.

Before, you had to rebuild from the beginning of the related data.

##### Criticality inheritance

Centreon 2.6 introduces a capability for the dependent services of a host to
automatically inherit its configured criticality. It’s also possible to define
the levels of global critically of a particular host and dependent services
cluster thanks to the use of templates.

##### Integration of Centreon new logo

The new Centreon logo has been integrated into this new version.

#### Bug fixes

  - \#5655: Changing Host Templates doesn't delete services
  - \#5782: Warning daemon\_dumps\_core variable ignored
  - \#5795: ACL and configuration modification with admin users
  - \#5868: Generation of services groups isn't correct for poller
  - \#6052: Month\_cycle option in recurring downtime is not properly set
  - \#6119: Filter doesn't work on many pages in Administration -\> Log
  - \#6163: A template should not be able to inherit from itself
  - \#6336: Problem with schedule downtime when using different timezones

#### Features

  - \#3239: PHP-5.4 Compatibility
  - \#5238: Criticality inheritance
  - \#5334, \#6114, \#6120 : Optimization and customization on Centreontrapd
  - \#5952: Add possibility to rebuild partially Events information
  - \#6160: New Centreon logo


### Centreon 2.5.4

#### Notice

If you are upgrading from a version prior to 2.5.3, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### Bug fixes

  - \#5458: Display problem with host groups
  - \#5924: Generation of service configuration files does not work when
    "service\_inherit\_contacts\_from\_host" is not enabled
  - \#5926: Centreon-Broker-2.7.x compatibility
  - \#5929: Fix problem in import service groups by cfg file
  - \#5942: Fix compatibility with IE
  - \#5946: Problem in reporting due to acknowledgment
  - \#5986: Session's Id does not change after logout

#### Features

  - \#5433: Argument column larger in service configuration
  - \#5944: Services inherit criticality from hosts

### Centreon 2.5.3

#### Warning

This version include a couple of security fixes. Please proceed to the update of
your platform if your centreon is not in version 2.5.3 at least. If you're using
Debian or Suse before doing the update, you need to install php5-sqlite package.

The update can take some times due to the update to UTF-8 format (\#5609)

#### Notice

If you are upgrading from a version prior to 2.5.2, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### CHANGELOG

  - \#5895: Security Issues : CVE-2014-3828 & CVE-2014-3829
  - \#5888: Differences between update and fresh install for "Insert in index
    data" field
  - \#5829: Add config file in parameters for all crons of Centreon in order to
    install centreon on different directories
  - \#5852: Fix problem with massive change for "Inherit contacts from host" in
    service form
  - \#5841: Empty dependencies are now remove automatically
  - \#5840: Fix problem with host duplication when this host has a "'" in the
    alias
  - \#5790 & \#5813 & \#5750: Fix problems on Tactical Overview
  - \#5786: Fix problem when generating correlation config file.
  - \#5756: Fix problem with centstorage =\> Table log is growing to much
  - \#5609: Push Centreon Broker table to UTF-8
  - \#5589: Fix problem with Contact inheritance between service and its
    template who doesn't work
  - \#4865: Fix problem with search in Eventlog

### Centreon 2.5.2

#### Notice

If you are upgrading from a version prior to 2.5.1, make sure to go through all
the release notes available
[here](http://documentation.centreon.com/docs/centreon/en/latest/release_notes/index.html).

#### CHANGELOG

  - \#5593: Fixes a bug where trap advanced matching rules were not working
  - \#5600: Fixes a bug where it was impossible to add or modify a poller
  - \#5533: Fixes a bug where it was impossible to update the severity level of
    a service
  - \#5307: Tooltips messages were not translated in the Broker configuration
    form
  - \#5664: Enhances loading time of the service detail page
  - \#5439: Enhances loading time of the meta service page

### Centreon 2.5.1

#### WARNING

If you are upgrading from Centreon 2.5.0 make sure to read the following.

<div class="warning">

<div class="title">

Warning

</div>

If you are upgrading from a version prior to 2.5.0, just skip this notice and
follow this procedure instead:
<https://blog.centreon.com/centreon-2-5-0-release/>.

</div>

As usual, database backups are to be made before going any further.

It does not matter whether you run the commands below before or after the web
upgrade; do note that those scripts may take some execution time depending on
the size of your log tables.

##### You are using NDOUtils

If you are using NDOUtils, chances are that you have plenty of duplicate entries
in your log table. Follow the procedure in order to re insert the logs:

Copy all the log files from the remote pollers to the local poller in
/var/lib/centreon/log/POLLERID/. To know the POLLERID of each of your pollers,
execute the following request against the MySQL server (centreon database):

    mysql> SELECT id, name FROM nagios_server;

Then, execute the following script:

    /path/to/centreon/cron/logAnalyser -a

##### You are upgrading from Centreon 2.5.0

There was a bug in Centreon 2.5.0 that probably messed up your reporting data,
you will have to recover by running these commands:

    /path/to/centreon/cron/eventReportBuilder -r
    
    /path/to/centreon/cron/dashboardBuilder -r -s <start_date> -e <end_date>

`start_date` and `end_date` must be formatted like this `yyyy-mm-dd`; they refer
to the time period you wish to rebuild your dashboard on.

### Centreon 2.5

#### WARNING

If you are upgrading from Centreon 2.4.x make sure to read the following. As
usual, database backups are to be made before going any further. Then, follow
these procedures in order to ensure the integrity of the RRD graphs. Not
following this may cause your graphs to malfunction\!

##### If you are using Centreon Broker

  - Check right of conf.pm file. Apache must have the right to modify conf.pm
    file
  - Stop all the centreon-engine services
  - Stop the centreon-broker daemon
  - Upgrade Centreon-Broker on all the pollers
  - Restart all the engines
  - Upgrade Centreon (web install)
  - Execute /path/to/centreon/bin/changeRrdDsName.pl
  - Check that your graphs are showing properly on the web interface
  - Start the centreon-broker daemon

##### If you are using NDO

  - Stop centstorage
  - Upgrade Centreon (web install)
  - Execute /path/to/centreon/bin/changeRrdDsName.pl
  - Start centstorage

#### What's new?

##### ACL on configuration objects

ACL rules are now applied to configuration objects. For more information
regarding this feature, be sure to checkout our blog post:
<http://blog.centreon.com/configuration-acl-with-centreon-2-5-2/>

##### UI and sound notifications

It is now possible to get UI and sound notifications on Centreon, you can set
your preferences in your profile page. A quick overview there:
<http://blog.centreon.com/centreon-ui-notification-system/>

Only available if you use Centreon Broker.

##### New system with SNMP traps

Centreon has evolved with an easiest way to handle SNMP traps. Some advantages
of the new system:

  - No more ‘snmptt’
  - More advanced configuration in SQL Database
  - Local database (SQLite) on Pollers

You have to look on the centreon documentation in order to configure Centreon
using this new system. Go in section: User guide \> Advanced \> SNMP TRAPS

#### Important notes

##### Centcore is now mandatory

External commands are now sent to centcore regardless of whether the poller is
local or not. So be sure to have it running all the time from now on.


### Centreon 2.4.5

#### Important notes

##### Connector

You can now linked a command to a connector from the connector form in
<span class="title-ref">Configuration</span> \>
<span class="title-ref">Commands</span> \>
<span class="title-ref">Connectors</span>.

##### Centreon Broker

Centreon 2.4.x branch is now compatible with Centreon Broker 2.5.x branch. Also
several options have been added in Centreon Broker configuration form accessible
in <span class="title-ref">Configuration</span> \>
<span class="title-ref">Centreon</span> \>
<span class="title-ref">Configuration</span> (Below Centreon-Broker label in the
left panel). Here the new options:

    - "Write timestamp" in <span class="title-ref">General</span> tab: To enable
      or disable timestamp logging in each log line (disable this option is
      useful with when Centreon-Broker is used with Nagios)
    - "Write thread id" in <span class="title-ref">General</span> tab: To enable
      or disable thread id logging in each log line
    - "Write metrics" in <span class="title-ref">Output</span> tab with \`RRD -
      RRD file generator\`: To enable or disable the update of the performance
      graph
    - "Write status" in <span class="title-ref">Output</span> tab with \`RRD -
      RRD file generator\`: To enable or disable the update of the status graph
    - "Store performance data in data\_bin" in
      <span class="title-ref">Output</span> tab with \`Storage - Perfdata
      Generator (Centreon Storage)\`: To enable or disable insertion of
      performance data in data\_bin table
    - "Insert in index data" in <span class="title-ref">Output</span> tab with
      \`Storage - Perfdata Generator (Centreon Storage)\`: Allow Centreon-Broker
      to create entries in index\_data table (use with caution)

### Centreon 2.4.4

#### Important notes

##### Graphs

It is now possible to set RRD graphs' to "DERIVE" and "ABSOLUTE" type. In order
to do so go to <span class="title-ref">Administration</span> \>
<span class="title-ref">Options</span> \>
<span class="title-ref">CentStorage</span> \>
<span class="title-ref">Manage</span>, then click on the metric you would like
to update. In the "More actions" toolbar, you will now see the new data source
types.

##### Monitoring consoles

A new option is available, allowing you to choose the display order of the
monitored resources. The new option is available in
<span class="title-ref">Administration</span> \>
<span class="title-ref">Options</span>, in the <span class="title-ref">Problem
display properties</span> section.

### Centreon 2.4.1

#### Important notes

##### Connectors

If you are already using the *Centreon Connectors*, please note that the
connector path is no longer called with user variable *$USER3$*. It is instead
in the `Configuration` \> `Centreon` \> `Pollers` \> `Centreon Connector path`.
In that regard, be sure to fill this field and update the connector command line
in `Configuration` \> `Commands` \> `Connectors` by removing the *$USER3$*
prefix.

i.e:

    $USER3$/centreon_connector_perl

should become:

    centreon_connector_perl

Once you're done with updating those configurations, you may delete the former
*$USER3$* as it will be no longer used.

### Centreon 2.4

#### What's new?

##### Better integration with Centreon Engine and Centreon Broker

The `installation <centreon_install>` process has been reviewed: it is now
possible to specify the monitoring engine (Centreon Engine or Nagios) and the
event broker module (Centreon Broker or NDOUtils). All you need to do right
after a fresh installation is export your configuration files, then reload your
monitoring engine and the monitoring system should be up and running\!

This version offers the possibility to define the `connectors
<centreon-engine:obj_def_connector>` for Centreon Engine. Obviously, you do not
need to configure these connectors if you are still using Nagios.

It's been said that Centreon Broker can be cumbersome to configure, especially
if you are not familiar with its functioning. Centreon 2.4 offers a
configuration wizard now\!

##### Custom views

This new page enables users to make their own views with various widgets and
they are able to share their custom views with their colleagues\!

See the `user guide <widgets_user_guide>` to learn more about this feature.

##### Support for multiple LDAP servers

The LDAP authentication system is much more robust than before. Indeed, it is
now possible to have `multiple LDAP configurations <ldapconfiguration>` on top
of the failover system. The LDAP import form will let you choose the LDAP server
to import from.

Make sure that all your LDAP parameters are correctly imported after an upgrade.

##### New *autologin* mechanism

A better `autologin <autologin>` mechanism has been introduced in this version.
Now using randomly generated keys, it allows you to access specific pages
without being prompted for a username and a password.

##### Database indexes verification tool

If you upgrade from an old version of Centreon, now you can `check the
existence of all database indexes <synchronizing-indexes>` to ensure maximum
performance

#### Important notes

##### Administration

##### Communication with pollers

The default system user used by *Centcore* to communicate with pollers has
changed from `nagios` to `centreon`.

##### Plugins

For better performances, we advise you to use `check_icmp` instead of
`check_ping` if you are in an IPv4 network, that is (check\_icmp is not yet
compatible with IPv6). Switching from `check_ping` to `check_icmp` should be
quite simple as the plugins take the same parameters. All you have to do is
change the check commands: `check_centreon_ping`, `check_host_alive` and all the
commands that call `check_ping`.

#### Web interface

##### Autologin

A `new autologin mechanism <autologin>` has been added in Centreon 2.4. More
secured than the previous one, it will soon replace it. If you currently use
this feature, we recommend upgrading to the new one as soon as you can.

##### Centreon Broker init script

If you are using *Centreon Broker*, make sure to fill the *Start script for
broker daemon* parameter in `Administration` \> `Options` \> `Monitoring`. RRD
graphs cannot be rebuilt if this parameter is omitted\!

##### Centcore options

Two parameters have been added into the `Administration` \> `Options` \>
`Monitoring` page:

  - Enable Perfdata Synchronization (Centcore)
  - Enable Logs Synchronization (Centcore)

For performance issues, these options must be disabled if your monitoring system
is running with Centreon Broker.

##### Resource.cfg and CGI.cfg

The resource and CGI configuration objects are now specific to each monitoring
poller. The values of $USERx$ macros can be different from one poller to
another.

##### Interval length

The `interval_length` is now a global parameter that you have to set in
`Administration` \> `Options` \> `Monitoring`, although it should be left at `60
seconds` in most cases.

#### Centstorage

##### Supported data source types

*Centreon Broker* now supports all of the RRDtool data source types (COUNTER,
GAUGE, DERIVE and ABSOLUTE). This support will not be added to *Centstorage* as
it will soon be replaced by *Centreon Broker*.

See the `Centreon Broker documentation <centreon-broker:graphic_types>` to learn
how you can convert your existing plugins.


