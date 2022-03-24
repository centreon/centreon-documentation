---
id: centreon-commercial-extensions
title: Extensions Commerciales
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les **extensions commerciales** de Centreon.

> Il est important de mettre à jour en utilisant la documentation adéquate de mise à jour et de lire attentivement les
> notes de mise à jour afin d'être au courant des changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez fait.

Pour faire des demandes d'évolutions ou reporter des bugs sur les extensions commerciales, veuillez contacter le support.

## Centreon MAP

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

### 21.10.2

Release date: `February 18, 2022`

- Fixed: Unable to retrieve Business Activities info through API

### 21.10.1

Release date: `December 7, 2021`

- Fixed: Symfony cache generation fails because of BAM test files

### 21.10.0

- [Configuration] Warn the user for unsaved changes on BA/BV

## Centreon MBI

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

### 21.10.3

Release date: `null`

#### Improvements

- In the Host Discovery job result listing, the red "warning" sign that used to point out that a discovered host already existed has been replaced with a yellow one because it suggested that a severe problem occurred. The "info" sign that lead to the raw discovery data has been replaced with a "text file" icon.

#### Bug fixes

- Fixed a front-end issue when editing a hostgroup or a hostcategory mapper in Host Discovery led to a blank page.
- Host discovery did not support `NULL` values for job parameters.
- Changed the size of a column to allow storing host discovery provider coming from Plugin Packs with names > 50 characters.
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
