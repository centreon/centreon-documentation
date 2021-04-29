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
[dedicated documentation](../graph-views/install.html#centreon-map-ng)

## Centreon BAM

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

### 20.10.3

`March 17, 2021`

#### Security fixes

- [Service Discovery] Update jQuery calls to match latest version (fixes
vulnerabilities)

#### Bug fixes

- [Core] Creation forms generate 400 errors due to bad query

#### Enhancements

- [Host Discovery] Limit provider definition version that is imported to 2.0

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

> Refer to the [Gorgone module configuration](../monitoring/discovery/administration.html#gorgone-module-configuration)
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
[Dynamically update your configuration](../monitoring/discovery/hosts-discovery.html#dynamically-update-your-configuration)

#### Service Discovery

Service Discovery is now using Gorgone to execute the discovery plugins,
and therefore it uses Gorgone's communication system and not anymore
standalone SSH connections.

#### Bugfixes

- Contains all fixes up to version 20.04.6

## Centreon Plugin Packs Manager

### 20.10.1

`February 26, 2021`

#### Security fixes

- [Core] Vulnerable handlebars.js library

### 20.10.0

`October 21, 2020`

- Compatibility with Centreon 20.10

## Centreon License Manager

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

### 20.10.0

`October 21, 2020`

- Compatibility with Centreon 20.10
