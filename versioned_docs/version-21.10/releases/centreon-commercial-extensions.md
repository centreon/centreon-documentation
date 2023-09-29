---
id: centreon-commercial-extensions
title: Commercial Extensions
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Commercial Extension**.

> It is very important when you update your system to refer to this section in order to learn about behavior changes or
> major changes that have been made on this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please contact support.

## Centreon MAP

### 21.10.11

Release date: `September 29, 2023`

#### Bug fixes

- [Desktop] Updated dependencies.

### 21.10.10

Release date: `September 28, 2023`

#### Security fixes

- [Server] Fixed a vulnerable property.
-	[Server] Updated dependencies.

### 21.10.9

Release date: `June 1, 2023`

No changes.

### 21.10.8

Release date: `December 28, 2022`

#### Security fixes

- Actuator endpoints are now disabled by default, except for health and metrics.
- Fixed the security issue CVE-2022-42889 (Text4shell).

#### Bug fixes

- Fixed issue that prevented images from being created when using `/media` api endpoint.
- Fixed issues and improved the map display (visibility, background and breadcrumb color).
- Fixed issue when user clicking on a parent resource link would cause the iframe to be loaded into itself.
- Fixed issue that caused the status displayed on a container to be different from the correct host status.
- Fixed an issue where icons for service groups, host groups and containers were not displayed.
- Fixed an issue preventing a user from saving MAP extension options if one map server address field is left empty.
- Fixed an issue where resources tooltips in MAP Legacy widget could not be displayed properly.
- Fixed an issue that caused MAP names to overlap in MAP listing page.
- Fixed an issue that could prevent the correct application of layers.
- Fixed an issue where white shape color is not saved.
- Fixed the bug where acknowledgements were not displayed on the resource.
- Fixed issue when the call to update the breadcrumb is not launched.
- Fixed the bug when MAP search bar does not return good results
- Fixed bug where url shape has unwanted concatenation inside the url.
- Fixed an issue where images were not displayed in viewer.
- Fixed an issue where Sort on was on labels rather than names when requesting the list of maps from MAP web client.
- Fixed the bug of the small size of the MAP viewer.

#### Enhancements

- Spring boot version upgraded to 2.6.6 version.
- Improved Centreon MAP Extension options so that only one MAP server is required to validate the form, when MAP Engine server is checked.
- Allow map owner to share a MAP with other ACL groups.
- Add choice to display percentage or absolute value on links and gauges to the user.
- Add "copy URL to clipboard" in viewer.

### 21.10.7

Release date : `October 26, 2022`

#### Bug fixes

- Map widget contents could not be loaded, resulting in a 500 error.

### 21.10.6

Release date: `October 6, 2022`

#### Bug fixes

- Fixed issues with MAP Desktop connection timeout with very large map infastructures

### 21.10.5

Release date: `May 30, 2022`

- Fixed regressions on API endpoints due to Spring Boot version
- Fixed weather styled elements that were not showing any image
- Changed label in MAP home page about server IP address

### 21.10.4

Release date: `April 22, 2022`

#### Enhancements

- Link to MAP documentation on Monitoring > Centreon MAP Home Page now redirects to the correct documentation page.
- Removed Centreon Map Desktop multi language installation on Windows installer

#### Bug fixes

- Fixed missing newline at the end of Centreon Map cron file

### 21.10.3

Release date: `March 1, 2022`

Due to the bug fix on the metric labels, Outputs, Gauges and Metric Links that have been created in
Centreon Map 21.10.0 , 21.10.1 or 21.10.2
may have to be recreated after updating Map to version 21.10.3.

#### Security fixes

- Log4J version updated to 2.17.1

#### Bug fixes

- Fixed links not coloring according to status and output not functional when metric name contains special character

### 21.10.2

Release date: `December 20, 2021`

#### Security fixes 

- Log4J version updated to 2.17.0

### 21.10.1

Release date: `December 16, 2021`

#### Bug fixes

- Path to map server backup log file in cron is now correct
- A simple link can now be created between a container and a view through API
- Map server now supports metrics label with '=' and white spaces
- Non-conventional metric labels do not cause map server to crash anymore
- Configuration file for Centreon map server is not replaced during upgrade anymore

#### Enhancements

- Logs are now using a new format to make them easier to read
- Map server now handles perfdata with multiple white spaces

#### Security fixes

- Log4J version updated to 2.16.0

### 21.10.0

- Compatibility with other 21.10 components.

## Centreon BAM

### 21.10.3

Release date: `June 1, 2023`

#### Bug fixes

- [Banner] Fixed the display of empty skeleton.
- [Install] Fixed an issue preventing the module installation when the 24x7 timeperiod parameter was not set.
- [Monitoring] Fixed an issue in the BA monitoring redirection.
- [Server] Fixed an issue in the KPI configuration export process to Remote Servers that caused the KPIs' states to be reset at each export of the configuration.
- [Rules] Fixed an error message in boolean rules when a host name was longer than 15 characters.
- [Server] Fixed an issue that prevented the children Business Activities from being displayed on Remote Servers.
- [Widget] Fixed an issue that made links to Business Activities broken on **BAM - Live Business Activity Tree**.

### 21.10.2

Release date: `February 18, 2022`

- Fixed: Unable to retrieve Business Activities info through API

### 21.10.1

Release date: `December 7, 2021`

- Fixed: Symfony cache generation fails because of BAM test files

### 21.10.0

- [Configuration] Warn the user for unsaved changes on BA/BV

## Centreon MBI

### 21.10.3

Release date: `June 1, 2023`

#### Bug fixes

- [Install] Replaced 'switch' with 'if' to better fit RHEL 8 deployment.

### 21.10.2

Release date: `October 12, 2022`

#### Security fixes

- Fixed multiple vulnerabilities in report generation

### 21.10.1

Release date: `February 18, 2022`

#### Security fixes

- Log4J MBI upgrade to 2.17.1

#### Enhancements

- Add new column “reported duration” in report event list
- Replace 'switch' with 'if' to accommodate RHEL 8 deployment
- MBI diagnostic script: added check for chrony service

#### Bug fixes

- Fixed: New line character missing from last line in MBI back up script preventing the script to execute
- Fixed: Can't find init MySQL script if MariaDB only configured for systemd
- Fixed: Report job failed due to incompatibility with the Jsch library
- Fixed: A service associated with several categories of services will be present several times on the reports (ex Hostgroups-Service-Current-Events)
- Fixed: Hostgroups-Incidents-1 English translation issue (”Maintainability”)
- Fixed: Availability on host or hostgroup, rounding issue
- Fixed: Report BA-Availability-1 - When services are in downtime, events should not be listed
- Fixed: Inconsistency in Top 50 in EventHostgroup-service-incident-resolution-2
- Fixed: Issue in Test SMTP Rule


### 21.10.0

- Compatibility with other 21.10 components.

## Centreon Auto Discovery

### 21.10.4

Release date: `June 1, 2023`

#### Bug fixes

- [Configuration] For some host discovery providers where no credentials were actually required, the job creation wizard no longer demands to enter credentials.

### 21.10.3

Release date: `March 31, 2022`

#### Improvements

- In the Host Discovery job result listing, the red "warning" sign that used to point out that a discovered host already existed has been replaced with a yellow one because the colour red suggested that a severe problem had occurred. The "info" sign that led to the raw discovery data has been replaced with a "text file" icon.

#### Bug fixes

- Fixed a front-end issue where editing a hostgroup or a hostcategory mapper in Host Discovery led to a blank page
- Host discovery did not support `NULL` values for job parameters
- Changed the size of a column to allow storing host discovery providers coming from Plugin Packs with names exceeding 50 characters
- ACLs were not updated for items discovered by Host Discovery or Service Discovery
- Fixed an issue that caused Service Discovery scans to fail because the wrong message was caught


### 21.10.2

Release date: `March 16, 2022`

#### Security fixes

- Fixed SQL injection on discovery rules configuration page.

### 21.10.1

Release date: `November 19, 2021`

#### Bug fixes

- An invalid path in upgrade.php caused PHP errors in the update process


### 21.10.0

- Host discovery now handles arrays of objects (Advanced Attributes) in the discovery results
  - Can be used in conditions for every kind of mappers
  - Can be used to name hostgoups, hostcategories
  - Use cases: Cloud tags (Azure, AWS), network services discovered by Nmap, VMware IP addresses
- A warning sign appears with a tooltip in front of the discovered hosts that could not be added by the discovery job because they already existed

## Centreon Plugin Packs Manager

### 21.10.0

- An "Update all" button has been added to update all the installed Plugin Packs in one click

## Centreon License Manager

### 21.10.0

- Compatibility with other 21.10 components.

## Centreon Anomaly Detection

### 21.10.1

Release date: `December 24, 2021`

#### Bugfixes

- Fixed an issue that caused the Anomaly Detection services to lose their graphs when they were renamed

### 21.10.0

- Compatibility with other 21.10 components.
