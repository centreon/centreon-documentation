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

### 21.04.5

Release date: `March 21, 2022`

Due to the bug fix on the metric labels, Outputs, Gauges and Metric Links that have been created in 
Centreon Map 21.04.2, 21.04.3 and 21.04.4
may have to be recreated after updating Map to version 21.04.5.

#### Security fixes

- Log4J version updated to 2.17.1

#### Bug fixes

- Fixed links not coloring according to status and output not functional when metric name contains special characters

### 21.04.4

Release date: `December 20, 2021`

#### Security fixes 

- Log4J version updated to 2.17.0

### 21.04.3

Release date: `December 16, 2021`

#### Bug fixes

- Path to map server backup log file in cron is now correct
- A simple link can now be created between a container and a view through API

#### Security fixes

- Log4J version updated to 2.16.0

### 21.04.2

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

### 21.04.1

`August 2, 2021`

#### Enhancements

- [Web-Client] Display only markers with geocoord setup for geoview usage

#### Bugfixes

- [Server] RestTemplate as an http client should validate with the truststore or ignore CA validation of auto-signed certificates
- [Web-Client] Graph scale is wrong in web interface
- [Web-Client] Infrastructure View link (BA) doesn't work
- [Web-Client] Links to hosts/services not completely working on MAP
- [Web-Client] Sort maps by alphabetic order

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon BAM

### 21.04.1

`January 21, 2022`

#### Improvements

- Add Feature Flipping for Resources Status vs Legacy Pages
- ACL: Authorize visualisation on child Business Activities even if not part of the same Business View
- Add warning when enabling notifications for a BA, for the user to know about the necessity of setting notification commands

#### Bugfixes

- Fixed the message that appeared in a popup when deleting "Activités Métiers" (Fr language)
- Fixed an error when generating poller configuration with a disabled BA linked to an escalation task
- Fixed the relations between BA and escalations exported in RS engine conf regardless of whether the BA is linked to the RS or not
- Fixed the alignment of "required" input text on panel in Add Business Activity
- Fixed MBI menu entry that was not visible after upgrade from 19.10 to 21.10.0-beta.2 due to BAM module

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon MBI

### 21.04.3

`February 18 2022`

#### Security fixes

- Log4J MBI upgrade to 2.17.1

#### Improvements

- Add new column “reported duration” in report event list
- Replace 'switch' with 'if' to accommodate RHEL 8 deployment
- Compatibility with PHP 7.4 (20.10 / 21.04) for MBI

#### Bugfixes

- Fixed: New line character missing from last line in MBI back up script preventing the script to execute
- Fixed: Can't find init MySQL script if MariaDB only configured for systemd
- Fixed: Report job failed due to incompatibility with the Jsch library
- Fixed: A service associated with several categories of services will be present several times on the reports (ex Hostgroups-Service-Current-Events)
- Fixed: Notification for administrators not working on fail
- Fixed: Hostgroups-Incidents-1 English translation issue (”Maintainability”)
- Fixed: Availability on host or hostgroup, rounding issue
- Fixed: Report BA-Availability-1 - When services are in downtime, events should not be listed
- Fixed: Inconsistency in Top 50 in EventHostgroup-service-incident-resolution-2
- Fixed: Issue in Test SMTP Rule

### 21.04.2

`July 15, 2021`

#### Improvements

- Optimized widget requests

#### Bugfixes

- Immediate execution in job parameters did not work
- BA names were missing in the BV-BA-Availabilities-1 report
- Division by zero caused an error within the widget

### 21.04.1

`June 24, 2021`

#### Bugfixes

- Fixed JQuery issues with MBI web client

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon Auto Discovery

### 21.04.3

Release date: `November 24, 2021`

#### Improvements

- Improved the way search requests are sent to the backend. The old way caused errors of type 500 when all search filters were removed.

#### Bug fixes

- An invalid path in upgrade.php caused PHP errors in the update process

### 21.04.2

Release date: `November 9, 2021`

#### Improvements

- Improve the way host discovery providers are identified as compatible with the current version of autodiscovery

### 21.04.1

`July 19, 2021`

#### Host discovery

- Disable the refresh button when listings are loading
- Autosave custom string when clicking away from input in mapper fields supporting text entry 
- Suggest reinstalling the PP if in 21.04 or higher when the installed provider is not compatible
- Warn the user that unsaved changes will be lost by leaving job edition
- Prevent usage of discovery.credentials attributes in host discovery mappers (except Macro)
- Add translation to mappers' conditions to display conjugated operators

### 21.04.0

#### Host discovery

- *Association* mappers are now named *property*.
- Ability to link the discovered hosts to host groups, either already existing ones or new ones created on-the-fly.
- Ability to link the discovered hosts to host categories, either already existing ones or new ones created on-the-fly.
- Ability to link the discovered hosts to host existing host severities.
- Property, macro, hostgroup and hostcategory mappers now support concatenation of either custom strings or discovered information.
- UX alignment with Resource Status
    - Clicking anywhere on a job's row now opens the side panel, not the job's result.
    - Clicking on the contextual arrow leads to the job's result (*ie.* the discovered hosts).

## Centreon Plugin Packs Manager

### 21.04.1

`Release date: December 10, 2021`

#### Bug fixes

- Fixed a bug that prevented the description of the Plugin Packs from being displayed when the user's UI language was set to something other than EN or FR
- Fixed installation of Plugin Packs with similar names

#### Security fixes

- [Packaging] Remove .gitignore files

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon License Manager

### 21.04.1

Release date: `December 30, 2021`

#### Bug fixes

- Fixed getting fingerprint on Safari

#### Security fixes

- Packaging, remove .gitignore files

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon Anomaly Detection

### 21.04.2

Release date: `December 22, 2021`

#### Bugfixes

- Fixed an issue that caused the Anomaly Detection services to lose their graphs when they were renamed

### 21.04.1

`September 30, 2021`

#### Bugfixes

- Do not suggest anomaly thresholds metrics
- Fixed Gorgone cron.d definition
- Fixed access to suggestion page with non admin account
- Fixed anomaly detection's stream connector crashes with no apparent error in broker logs
- Fixed error in cron perl script
- Fixed generation of services based on metric from a Meta Service
- Script: Do not try to send data to SAAS if the service does not exist

### 21.04.0

- Compatibility with Centreon 21.04
