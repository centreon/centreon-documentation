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

### 20.10.10

Release date: `April 20, 2022`

#### Bugfixes

- Link to MAP documentation on Monitoring > Centreon MAP Home Page now redirects to the correct documentation page.

### 20.10.9

Release date: `March 1, 2022`

Due to the bug fix on the metric labels, Outputs, Gauges and Metric Links that have been created in 
Centreon Map 20.10.6, 20.10.7 and 20.10.8
may have to be recreated after updating Map to version 20.10.9.

#### Bugfixes 

- Fixed links not coloring according to status and output not functional when metric name contains special character

#### Security fixes 

- Log4J version updated to 2.17.1

### 20.10.8

Release date: `December 20, 2021`

#### Security fixes 

- Log4J version updated to 2.17.0

### 20.10.7

Release date: `December 16, 2021`

#### Bugfixes 

- A simple link can now be created between a container and a view through API

#### Enhancements

- All images are now stored on the Centreon Central server
- All images uploaded to Centreon Map Desktop are now stored on the Centreon Central server

#### Security fixes

- Log4J version updated to 2.16.0

### 20.10.6

`November 25, 2021`

#### Bugfixes

 - Disabled Business Activities are now displayed as disabled even after restarting centreon-map service
 - HeapDumpPath is now pointing to the proper folder (/var/log/centreon-map folder)
 - Metrics labels with specific characters and white spaces are now supported
 - Service elements in a view are not clickable anymore
 - Metrics not following the naming specification do not cause map server to crash anymore

#### Enhancements

 - Links to monitoring pages now redirects properly to resource status or older deprecated pages
 - Perfdata values separated by multiple white spaces are now properly handled by map server

### 20.10.5

`September 21, 2021`

#### Bugfixes

 - [Web-Client] Fixed Graph scale in web interface
 - [Web-Client] Fixed "Home" icon in geoviews
 - [Web-Client] Fixed Infrastructure View link (BA)
 - [Web-Client] Fixed Sorting of maps by alphabetic order
 - [Web-Client] Fixed Links to hosts/services

### 20.10.4

`May 3, 2021`

#### Bugfixes

- [Desktop] The search filter of resources panel is too slow
- [Server] Add customized properties hint to log configuration
- [Server] RestTemplate as http client should validate with truststore or ignore CA validation of auto-signed certificat
- [Server] Server rpm now pulls mysql client
- [Server] Stub real time status message with legacy server
- [Web-Client] Don't display a clickable mouse over a Shape and Text with no clickable
- [Web-Client] Timestamp is not properly displayed in the DT tooltip

### 20.10.3

`February 11, 2021`

#### Bugfixes

- Missing hostname in metric labels of service graph
- Graph created from a service in host element was not refreshed correctly
- Opening map from map listing or widget could could take too much time

### 20.10.2

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
- WhatsUp events were unnecessarily raised in web sessions potentially
  causing performance issues
- [API] Requesting token from Swagger-ui could result in an error

### 20.10.1

`November 19, 2020`

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

### 20.10.0

`October 21, 2020`

#### Enhancements

- The license is now entirely managed on the Centreon Central server.

#### Faster server for complex maps

This version lays the foundations for the evolution of the experience
in creating and visualizing maps.

The first step being the birth of a new Centreon MAP server (code name
**"NG"** for "New Generation"), which has been designed to be more
powerful, faster and lighter.

The server is in **experimental phase** and is subject to evolution.

It is currently only used for visualizing maps. Maps creation and edition
still use the server as we know it.

As for the Centreon interface, everything has been done to be able to
use these two servers. It is then possible to switch the consultation of
maps from one server to the other easily.

To use it, it is necessary to install and activate it. Refer to the
[dedicated documentation](../graph-views/install.md#centreon-map-ng)

## Centreon BAM

### 20.10.6

Release date: `July 19, 2022`

#### Bug fixes

- Fixed an "out of memory" error in the configuration export process, that could happen when many Business Activities were bound to 
a Remote Server that had many pollers. As a result, the BAs were not actually exported to the Remote Server.

### 20.10.5

Release date: `December 29, 2021`

#### Bugfixes

- Escalation rules for Business Activities are now only exported to Remote server 
if the Business Activities tied to these rules are set to be displayed on the Remote server
- Escalation rules for a Business Activity now does not prevent poller configuration to be exported
if the Business Activity is disabled.
- Fixed a case where Business Activities would be successfully created but not listed afterwards
- Fixed Business Activities tree view display case where a user restricted by ACLs would see Invalid Business Activitiy nodes

#### Enhancements

- BAM links to Monitoring pages now redirect to either Resources status or Legacy pages based on the user profile configuration
- User is now warned about incomplete Business Activities notification configuration before saving the configuration

### 20.10.4

`May 04, 2021`

#### Bugfixes
- [Monitoring] Fixed missing French translation for "warning" and "critical" status 

#### Security fixes

- [Lib] Updated vulnerable npm packages

### 20.10.3

`April 29, 2021`

#### Bugfixes

- [Configuration] Improved behavior of BA selector when adding KPI
- [Monitoring] BA listing order by level doesn't work
- [Widget] Filter downtime was not working in widget

#### Security fixes

- [Core] Handle end of life for Flash
- [Lib] Vulnerable jQuery version

### 20.10.2

`February 24, 2021`

#### Bugfixes

- Added missing required file for update that made BAM configuration
  pages unusable

### 20.10.1

`February 16, 2021`

#### Bugfixes

- In BAM monitoring listing, the graph tooltip is now displayed correctly.

### 20.10.0

`October 21, 2020`

- [Configuration] Update style of pages *Business Activities* and
  *Business Views*

## Centreon MBI

### 20.10.5

Release date: `March 3, 2022`

#### Security fixes

- Log4J MBI upgrade to 2.17.1
- Sanitize parameters in task generation form

#### Improvements

- Compatibility with PHP 7.4 (20.10 / 21.04) for MBI

#### Bug fixes

- Fixed: New line character missing from last line in MBI back up script preventing the script to execute
- Fixed: Issue in Test SMTP Rule

### 20.10.4

`July 21, 2021`

#### Improvements

- Optimized widget requests

#### Bugfixes

- Immediate execution in job parameters did not work
- BA names were missing in the BV-BA-Availabilities-1 report
- Division by zero caused an error within the widget

### 20.10.3

`June 3, 2021`

#### Bugfixes

- Fixed JQuery issues with MBI web client
- Fixed immediate job execution ("immediate" jobs were delayed)

#### Enhancements

- Added LIKE option in MBI widget preferences for Hostgroups, Metric perfomances TOP X

### 20.10.2

`May 6, 2021`

#### Bugfixes

- Fix script backup reporting
- Notification for administrators not working on success
- Publication rule doesn't work with custom paths
- Since version 20.04, reports are no longer downloadable

#### Security fixes

- Remove MBI deprecated TLS cyphers
- Vulnerable jQuery version

### 20.10.1

`April 29, 2021`

#### Bugfixes

- Update column length for BAM reporting
- Inconsistency between Centreon & Centreon MBI column size for metric_unit
- Publication rule doesn't save backslash into CIFS publication


### 20.10.0

`October 21, 2020`

- Compatibility with Centreon 20.10

## Centreon Auto Discovery

### 20.10.5

Release date: `April 1, 2022`

#### Bug fixes

- Fixed an issue that caused Service Discovery scans to fail because the wrong message was caught
- Fixed an issue that made it impossible to save credentials with more than 512 characters

#### Security fixes

- Fixed an SQL injection issue in Service Discovery rules management


### 20.10.4

`July 13, 2021`

#### Security fixes

- Inputs sent to unserialize() are not sanitized
- Prevent usage of `discovery.credentials` attributes in host discovery mappers (except Macro)
- Update vulnerable npm packages in centreon-autodiscovery

#### Bug fixes

- Cannot update service discovery rules with too many macros
- Discovered service can't be saved if service discovery rule includes a macro value containing single quotes (')
- Remove association/property mappers with "host.macros" as destination since they should not be used and actually never worked (use macro mappers instead)

### 20.10.3

`March 17, 2021`

#### Security fixes

- [Service Discovery] Update jQuery calls to match latest version (fixes
vulnerabilities)

#### Bug fixes

- [Core] Creation forms generate 400 errors due to bad query
- [Host Discovery] Incompatible host discovery providers could be imported

> Warning: if Plugin Packs of version >=5.0.0 have been installed before this fix, an error will be displayed in the host discovery job creation wizard.
> To fix this issue, go to **Configuration > Plugin Packs**  and reinstall the Plugin Packs that have a version number >= 5.0.0.

### 20.10.2

`December 7, 2020`

#### Bugfixes

- [Host Discovery] Long values in *host.ip* field cause "Error when sorting
  and filtering host modification results" issue
- [Host Discovery] Save script now runs on CentOS 8

#### Enhancements

- [Host Discovery] Add a confirmation dialog when deleting a job
- [Host Discovery] Change wording "Additional parameters" to "Discovery
  parameters"

### 20.10.1

`October 27, 2020`

#### Bugfixes

- Double upgrade scripts in previous build lead to sql error in log

### 20.10.0

`October 21, 2020`

> Refer to the [Gorgone module configuration](../monitoring/discovery/administration.md#gorgone-module-configuration)
> to make sure the configuration matches minimal prerequisites.

> If a discovery is performed on a Remote Server or a Poller, make sure
> the server is using the latest 20.10 components.

> On a Remote Server, the Autodiscovery module can be uninstalled through
> the `Administration > Extensions > Manager` menu so it will not raise
> useless errors in Gorgone's log.

#### Host Discovery

Host Discovery wizard now allows to schedule your discoveries using several
fashion: yearly, monthly, daily, hourly and even every x minutes.

Scheduled discovery jobs can be paused and resumed at any time.

Discovery result can also be automatically processed to add, disable and
when necessary re-enable the hosts in the configuration.

If you decide to manually add the hosts from the job's result page, the
mapping rule can now be edited and saved from this page to match
your needs by applying the rule directly on the result.

The new *exclusion* and *inclusion* mappers will help you decide which hosts
are meant to be added in the configuration, and the ones that should be
disabled or enabled.

Take a look at this example to fully understand their impacts:
[Dynamically update your configuration](../monitoring/discovery/hosts-discovery.md#dynamically-update-your-configuration)

#### Service Discovery

Service Discovery is now using Gorgone to execute the discovery plugins,
and therefore it uses Gorgone's communication system and not anymore
standalone SSH connections.

#### Bugfixes

- Contains all fixes up to version 20.04.6

## Centreon Plugin Packs Manager

### 20.10.2

`Release date: December 8, 2021`

#### Bug fixes

- Fixed a bug that prevented the description of the Plugin Packs from being displayed when the user's UI language was set to something other than EN or FR
- Fixed installation of Plugin Packs with similar names

#### Security fixes

- [Packaging] Remove .gitignore files

### 20.10.1

`February 26, 2021`

#### Security fixes

- [Core] Vulnerable handlebars.js library

### 20.10.0

`October 21, 2020`

- Compatibility with Centreon 20.10

## Centreon License Manager

### 20.10.4

Release date: `January 5, 2022`

#### Bug fixes

- Fixed getting fingerprint on Safari

#### Security fixes

- Packaging, remove .gitignore files

### 20.10.3

`May 6, 2021`

- Add a retry mechanism to get list of subscription
- Improve message if all licenses have been linked
- No 'Add token' button and duplication of the 'Get fingerprint' or 'Upload license' button
- Update vulnerable npm packages

### 20.10.2

`March 24, 2021`

#### Bugfixes

- The Add Token button is not visible when the online license is over

### 20.10.1

`December 2, 2020`

#### Bugfixes

- After adding a license or a token the user must access to associated functionalities
- Rights issues with the gnupg library with multiple users (only with Docker)
- Disable 'Add' button when input is empty

### 20.10.0

`October 21, 2020`

- Compatibility with Centreon 20.10

## Centreon Anomaly Detection

### 20.10.1

Release date: `December 23, 2021`

#### Enhancements

- Detect metrics with seasonality or stability

#### Bugfixes

- Fixed access to suggestion page with non admin account
- Fixed an issue that caused the Anomaly Detection services to lose their graphs when they were renamed
- Fixed anomaly detection's stream connector crashes with no apparent error in broker logs
- Fixed configuration export failure
- Fixed errors in cron Perl script
- Fixed generation of configuration for services based on meta-services
- Fixed generation of contacts/groups for notification
- Fixed sending of data to SAAS if the service does not exist
- Fixed the use of the fixed metric anomaly thresholds themselves used to suggest it
- Fixed wrong gorgone cron.d definition

### 20.10.0

`October 21, 2020`

- Compatibility with Centreon 20.10
