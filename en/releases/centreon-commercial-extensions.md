---
id: centreon-commercial-extensions
title: Commercial Extensions
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Commercial
Extension**.

> It is very important when you update your system to refer to this
> section in order to learn about behavior changes or major changes that
> have been made on this version. This will let you know the impact of
> the installation of these versions on the features you use or the
> specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please contact support.

## Centreon MAP

### 20.04.7

`March 12, 2021`

#### Enhancements

- Added customizable log configuration settings for logs rotation on 
  centreon-map-server.

#### Bugfixes

- Fixed search bar in Desktop client Resources panel which could take a 
  very long time to return a result.
- Added missing mysql client that was not provided if centreon-map-server
  was installed using a dedicated database.

### 20.04.6

`February 11, 2021`

#### Bugfixes

- Missing hostname in metric labels of service graph
- Graph created from a service in host element was not refreshed correctly
- Opening map from map listing or widget could could take too much time
- Hostgroup element tooltip did not display resources in critical status in
  the error list for this hostgroup

### 20.04.5

`December 16, 2020`

#### Enhancements

- Full TLS compliance has been added for communication with Broker component

#### Bugfixes

- Upgrading from previous versions could cause a failed restart of
  centreon-map service
- Fresh install or upgrade could result in wrong permissions for
  centreon-map media folder
- Adding or deleting a Downtime from the Web-UI could result in loss of
  connection with Broker
- Creating a map with empty name could cause a failure to load the
  'Monitoring > Map' menu
- Adding an Output in Studio could sometimes result in mis formatted metric
- [API] Requesting token from Swagger-ui could result in an error

### 20.04.4

`November 17, 2020`

#### Bugfixes

- Saving Geo Views on a Custom View Map widget was impossible due to
  missing "Save" button
- Sharing usage statistics metrics between MAP server and Central through
  HTTPS failed
- Creating Links through REST API can now make use of 'bendpoints',
  'displayValue' and 'displayPercent' properties
- Adding Centreon resources when creating an Output widget through REST
  API is now possible
- Installing a fresh MAP Studio resulted in automated back-up failure

### 20.04.3

`October 9, 2020`

#### Bugfixes

- Filter on the full name of the maps and geoviews on the homepage
- Fix on media access from centreon map server

### 20.04.2

`Septembre 22, 2020`

#### Bugfixes

- You can now define how to round values displayed on metric links in
  standard views
- Upgrade leaflet version to
  [1.6.0](https://leafletjs.com/2019/11/17/leaflet-1.6.0.html)
- Update Geoview to be compatible with the latest Mapbox version. See
  [their documentation](https://docs.mapbox.com/help/troubleshooting/migrate-legacy-static-tiles-api/)
  to understand
- You've now directly access to `Monitoring > Map` or Map widgets without
  being forced to refresh multiple times your browser after upgrading to
  20.04.0 or >=
- Fix a bug affecting the business activities tooltip on a view when the BA
  is calculated using the new calculation methods
- (widget) Fix a bug affecting the save mechanism
- Metric color overloading of a graph in the thick client is now supported
  in the web
- When using status metrics for services whose host is in a status other
  than OK, links are now the same color as the desktop client

### 20.04.1

`July 6, 2020`

#### Bugfixes

- Update to SpringBoot 2.3.0 (Tomcat 9.0.35)
  ([CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2020-9484))

### 20.04.0

`April 22, 2020`

#### Enhancements

- Simplify packaging: The packaging has been simplified so we don't require
  Tomcat. Logs are now accessible in `/var/log/centreon-map/` and the service
  is now `centreon-map` (*systemctl restart centreon-map*). [Follow the
  upgrade procedure](../graph-views/upgrade.html)
- Silent installation: It's now possible to install Centreon Map using a
  silent mode instead of the only interactive mode.
- License on Central server: The licensing system has been simplified.
  The MAP license resides now on the Centreon **central** server, as any
  other commercial extension. No worry, the compatibility with the previous
  licensing mecanism (license on the map server) is maintained.
- [API] Add metaservice endpoint
- [API] Simplify authentication
- [API] Use the reeal resource ID instead of internal resource ID
- It's now possible to manage how value are rounded on links

## Centreon BAM

### 20.04.9

`January 07, 2022`

#### Bugfixes

- [Configuration] Fixed an error when generating poller configuration with a disabled BA linked to an escalation task
- [Configuration] BA escalation configuration is not exported to Remote Server anymore if the BA is not linked to this Remote Server
- [Monitoring] Business Activities widget now scales to the number of BAs


### 20.04.8

`May 06, 2021`

#### Bugfixes

- [Monitoring] Downtimes were properly displayed within widgets but not within monitoring pages

### 20.04.7

`April 29, 2021`

#### Bugfixes

- [Configuration] Improved behavior of BA selector when adding KPI 
- [Widget] Filter downtime was not working in widget

#### Security fixes

- [Lib] Vulnerable jQuery version

### 20.04.6

`February 16, 2021`

#### Bugfixes

- In BAM monitoring listing, the graph tooltip is now displayed correctly

### 20.04.5

`November 16, 2020`

#### Bugfixes

- Selecting "Not Available" or "Not Available and Degraded" filters in BAM
  Widget preferences returned no results
- Linking a Business Activity to a Remote Server failed with a 500 error code
- Linking a Business Activity to a Remote Server caused a duplicate to be
  displayed within Central
- BAM forced english version for status labels "Unreachable" and "Unknown"
  within "Resources Status" page for all other localizations
- Adding Indicators to Business Activites using SSV import failed

### 20.04.4

`Octobre 30, 2020`

#### Bugfixes

- Filters were not kept when refreshing monitoring page
- BA couldn't be linked to a Remote Server
- Fix pagination when changing number of lines per page or using search
- Some parameters where not saved in BA form

#### Security fixes

- Update Moment.js library to fix vulnerability to ReDOS attack

### 20.04.3

`July 29, 2020`

#### Bugfixes

- Fix a problem affecting the "Display top BA" parameter in the widget

#### Enhancements

- Add HTTP2 compatibility
- Add help when selecting how planned downtimes should be handled by the
  business activities

### 20.04.2

`July 6, 2020`

#### Bugfixes

- "0" thresholds values are now correctly displayed in the configuration
  & real time pages
- Breacrumb now leads you to the correct main configuration page
- SQL errors while saving Centreon BAM preferences have been removed
- Fix pagination problems on indicators' page
- Fix the tooltip displaying boolean status & rules
- You can now correctly link business activities to a remote server when
  indicators are monitored by the remote server
- Fix the help button content on the critical threshold in BA configuration
- Fix some french translation

#### Enhancements

- Improve wording on planned downtimne inheritance
- Improve license management

### 20.04.1

`June 2, 2020`

#### Bugfixes

- The default calculation method is now "Worst" when you create a business
  activity
- Business activities configuration: You're now able to save only warning
  thresholds
- Reporting: manage timeperiods different from 24x7 in charts & tables
- Improve "null" threshold displays
- Widget: manage worst/best/ratio status calculation methods

### 20.04.0

`April 22, 2020`

#### New features

- New calculation methods available: Worst, Best & Ratio
- New planned downtime inheritance management: you can now ignore the
  indicator in the calculation
- Update all real time & configuration page to manage new calculation methods

## Centreon MBI

### 20.04.7

`July 21, 2021`

#### Improvements

- Optimized widget requests

#### Bugfixes

- Immediate execution in job parameters did not work

### 20.04.6

`June 11, 2021`

#### Bugfixes

- Fixed JQuery issues with MBI web client
- Fixed immediate job execution ("immediate" jobs were delayed)

### 20.04.5

`May 6, 2021`

#### Bugfixes

- Since version 20.04, reports are no longer downloadable
- Fix script backup reporting

#### Security fixes

- Vulnerable jQuery version
- Remove MBI deprecated TLS cyphers

### 20.04.4

`April 29, 2021`

#### Bugfixes

- Update column length for BAM reporting
- Inconsistency between Centreon & Centreon MBI column size for metric_unit
- Publication rule doesn't save backslash into CIFS publication

### 20.04.3

`Octobre 28, 2020`

#### Bugfixes

- Problem with accented characters fixed
- Diagnostic fail at TOP 10 tables due to MySQL strict mode
- Bad character management when importing data
- [Report] Improve BA name readability on bv-ba-availabilities-1

### 20.04.2

`September 22, 2020`

#### Enhancements

- Add HTTP2 compatibility
- [reports] Improve the Poller-Performance report performance by removing
  a useless "Current Load" section for each poller

### 20.04.1

`May 12, 2020`

#### Bugfixes

- Logo preview has been fixed
- Immediate rescheduling a job was setting the execution date in the future
- fix some translations in reports

### 20.04.0

`April 22, 2020`

- Manage compatibility with Centreon 20.04

## Centreon Auto Discovery

### 20.04.9

`July 21, 2021`

#### Security fixes

- Inputs sent to unserialize() are not sanitized
- Update vulnerable npm packages in centreon-autodiscovery

#### Bug fixes

- Cannot update service discovery rules with too many macros
- Discovered service can't be saved if service discovery rule includes a macro value containing single quotes (')
- Remove association/property mappers with "host.macros" as destination since they should not be used and actually never worked (use macro mappers instead)


### 20.04.8

`March 17, 2021`

#### Security fixes

- [Service Discovery] Update jQuery calls to match latest version (fixes
vulnerabilities)

#### Enhancements

- [Host Discovery] Limit provider definition version that is imported to 2.0

### 20.04.7

`December 9, 2020`

#### Bugfixes

- [Host Discovery] Long values in *host.ip* field cause "Error when sorting
  and filtering host modification results" issue
- [Service Discovery] Service discovery email sending not working properly
  when having services with space in their name

#### Enhancements

- [Host Discovery] Add a confirmation dialog when deleting a job

### 20.04.6

`November 19, 2020`

#### Bugfixes

- [Service Discovery] Cannot recreate deleted rules when reinstalling Pack
- [Host Discovery] Possible to add host with missing properties
- [Host Discovery] Check for illegal characters when creating hosts
- [Host Discovery] Incoherent paging when using search
- [Host Discovery] Proxy password input field value is visible

#### Enhancements

- [Host Discovery] Create services when adding hosts

### 20.04.5

`September 16, 2020`

#### Bugfixes

- [Host Discovery] Fields are not mandatory when editing credentials
- [Host Discovery] Monitoring mapper does not use infinity scroll to list all
  monitoring servers
- [Host Discovery] Job edition retrieves default proxy when none was set
- [Host Discovery] Error when editing a job and monitoring server doens't exist
  anymore
- [Host Discovery] Incoherent paging information in listings
- [Host Discovery] Next button not available at wizard's step 2 when changing
  provider
- [Host Discovery] Disable next button when mappers are not yet loaded in wizard

#### Enhancements

- [Host Discovery] Do bulk insert in temporary table when listing job's result

### 20.04.4

`July 29, 2020`

#### Bugfixes

- [Host Discovery] Impossible to list all monitoring servers in job
  creation/edition
- [Host Discovery] Cannot find local monitoring server when having 10+ Pollers
- [Host Discovery] Broken display when reaching job result page
- [Host Discovery] Wizard "Next" actions broken when using "Enter" key
- [Host Discovery] Failed to insert data in temporary table due to null/undef
  values
- [Host Discovery] Impossible to save job when provider doesn't need credentials
- [Host Discovery] Fix some wordings and cases
- [Service Discovery] Error when duplicating a rule

#### Enhancements

- [Host Discovery] Make filters more efficient in jobs listing
- [Host Discovery] Invert default sorting on "Creation Date" column

### 20.04.3

`July 6, 2020`

#### Enhancements

- [Host Discovery] Save of job not possible if no modification

### 20.04.2

`June 3, 2020`

> Known issues:
>
> - You might encounter route definition issue when accessing to Host Discovery
>   jobs listing. This is due to Symfony cache not beeing refreshed with the
>   right routes at update.
>
>   To solve this, execute the following commands on the Central server:
>
>   ```shell
>   cp /usr/share/centreon/www/modules/centreon-autodiscovery-server/routes/CentreonAutoDiscovery.yaml.wait /usr/share/centreon/www/modules/centreon-autodiscovery-server/routes/CentreonAutoDiscovery.yaml
>   sudo -u apache /usr/share/centreon/bin/console cache:clear
>   ```

#### Enhancements

- [Host Discovery] Better handle forms testing in Host Discovery wizard
- [Host Discovery] Enhance error render for jobs

#### Bugfixes

- [Service Discovery] Unable to run Service Discovery since 20.04.1
- [Host Discovery] Some words are not translated in french
- [Host Discovery] Use $rg API directive to search in providers listing
- [Host Discovery] Remove bad characters in the JSON result in Host Discovery
- [Host Discovery] Mapper Monitoring - "From job" setting does not take job
  monitoring server

### 20.04.1

`May 12, 2020`

#### Enhancements

- [Host Discovery] Job with 0 discovered items redirects to empty job details

#### Bugfixes

- [Host Discovery] Overlapping text when configuring job with default proxy
- [Service Discovery] Use direct connection to Poller when having Remote Server
  is ignored

### 20.04.0

`April 22, 2020`

Redesign hosts discovery with a new wizard to add discovery job:

- Better credentials management
- Possibility to define from where the discovery will be made
- New *mappers* system and preview of result

The *mappers* system is a feature to map discovered items value with a
configuration value:

- **association**: allows you to map the value of an attribute of a discovered
  resource with a property in the Centreon configuration (on a condition or
  not)
- **macro**: allows you to map the value of an attribute of a discovered
  resource with a custom macro (on a condition or not)
- **template**: allows to selected the template to apply (on a condition or
  not)
- **monitoring**: allows to select the monitoring server which will monitor
  the discovered resource (on a condition or not)

## Centreon Plugin Packs Manager

### 20.04.2

`February 26, 2021`

#### Security fixes

- [Core] Vulnerable handlebars.js library

### 20.04.1

`April 23, 2020`

#### Bugfixes

- Drop legacy table not used since PPM version 2.1.0 (PR #100)

### 20.04.0

`April 22, 2020`

#### Enhancements

- Improve management of errors during Plugin Packs installation process

#### New features

- The procedures for installing Plugin Packs are now hosted on the official
  Centreon documentation

## Centreon License Manager

### 20.04.5

- Add a retry mechanism to get list of subscription
- Improve message if all licenses have been linked
- Update vulnerable npm packages

### 20.04.4

`March 24, 2021`

- The Add Token button is not visible when the online license is over

### 20.04.3

`December 2, 2020`

- After adding a license or a token the user must access to associated
  functionalities
- Disable 'Add' button when input is empty

### 20.04.2

`May 25, 2020`

- The centreon_map user needs to be admin to have the license working
  on Central server

### 20.04.1

`April 24, 2020`

- Manage unlink platform from previous IMP trial to access to IT-100
  free edition.

### 20.04.0

`April 22, 2020`

Remove `Administration > Extensions > Subscription` menu to manage IT Edition
subscription from `Administration > Extensions > Manager` menu:

- Add a button to add a Centreon IT Edition subscription
- Add a button to view a Centreon IT Edition subscription

Licenses for products linked to Centreon IT and Business Editions online
subscriptions are now automatically downloaded.

## Centreon Anomaly Detection

### 20.04.4

`November 26, 2020`

#### Bugfixes

- [ACL] Issue with service anomaly is part of ALL acl and specific ACL

### 20.04.3

`October 28, 2020`

#### Enhancements

- [ceip] Add statistics for anomaly

#### Bugfixes

- [configuration] Centreon db configuration name hard coded
- [configuration] No notification_period generated
- [lua] Avoid using forbidden label

### 20.04.2

`July 28, 2020`

#### Bugfixes

- [configuration] Can't change "Enable change of status" when editing form
- [configuration] Remove mandatory fields which are not mandatory

### 20.04.1

`July 1, 2020`

#### Enhancements

- [configuration] Manage ACL
- [lua] Automatically reloads filter files if changed

#### Bugfixes

- [core] Remove version in uri to connect to saas
- [history] Select correct metric to forward
- [history] Avoid useless newline character
- [lua] Typo fixed
- [lua] New error case on service_id checked

### 20.04.0

`April 22, 2020`

First version allowing to monitor the detection of anomalies using
floating thresholds.
