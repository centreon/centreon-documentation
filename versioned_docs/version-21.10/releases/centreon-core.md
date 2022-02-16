---
id: centreon-core
title: Centreon Core
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Core**.

> It is very important when you update your system to refer to this section in order to learn about behavior changes or
> major changes that have been made on this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please go to our
[Github](https://github.com/centreon/centreon/issues/new/choose)

## Centreon Web

### 21.10.3

Release date: `January 26, 2022`

#### Bug Fixes

- [Graph] Fixed display of additional graph if it came from Resources Status
- [Install] Fixed SQL request syntax error for cron with MySQL 8
- [Resources Status] Fixed display of meta-services
- [Resources Status] Fixed graph unit displayed twice
- [Resources Status] Fixed saving a filter on an existing name
- [Resources Status] Take the default downtime options to set downtime
- [UX] Fixed random disconnection since update to Centreon 21.10

### 21.10.2

Release note: `December 24, 2021`

#### Enhancements

- [Administration] Display the name of the object that has been modified in the detail form of logs
- [Authentication] Removed token display in login debug file
- [UI] The top-counter menu for pollers is now refreshed immediately after enabling the "Export button" in the user's profile

#### Bug Fixes

- [API] Fixed the access to API is account doesn't have access to GUI
- [Authentication] Fixed LDAP OU quote connection breaking
- [CLAPI] Fixed an issue preventing ACLs from applying on services created with CLAPI
- [CLAPI] Fixed error with LDAP configuration ID
- [Configuration] Fixed SNMP Trap matching with service linked to multiple hosts
- [Configuration] Fixed an issue that caused the Anomaly Detection services to lose their graphs when they were renamed
- [Configuration] Fixed an issue that caused the loss of broker output configuration
- [Configuration] Fixed an issue that prevented from removing the SNMP community (and other fields) from the host form
- [Configuration] Fixed the wizard for adding a new server that did not add it
- [Configuration] Fixed unwanted writes into unexisting file when exporting Traps config at the same time as a trap arrives. Based on PR [#9973](https://github.com/centreon/centreon/pull/9973). Fixes issue [#4236](https://github.com/centreon/centreon/issues/4236).
- [MBI] Fixed CBIS process trying to get contact_js_effects column that no longer exists
- [Resource Status] Fixed graph tooltip

### 21.10.1

Release date: `November 29, 2021`

#### Bug Fixes

- [Authentication] Fixed PHP error when debug is enabled with OIDC authentication
- [Configuration] Fixed the list of host template that was not available if the database name was different from the default
- [UX] Non admin user do not have the same submenu subsections
- [UX] Remove "Animation effects" option

### 21.10.0

#### Enhancements

- [Authentication] Improve OIDC support (OpenId Connect)
  - Add Okta support
  - Add MS Azure AD / ADFS
  - Add possibility to define which claim is used for Centreon login
  - Add possibility to define complete URL for endpoints
  - Add possibility to use client_secret_basic as authentication. Based on PR
    [#9878](https://github.com/centreon/centreon/pull/9878)
  - Allow to define no redirect URL. Based on PR
    [#9877](https://github.com/centreon/centreon/pull/9877)
  - Add errors log in /var/log/centreon/login.log
  - Add possibility to display debug log in /var/log/centreon/login.log
  - Use proxy if defined
- [API] API versioning is now consistent with Centreon's major release number
- [CEIP] Product Adoption component integration
- [Configuration] The poller management actions are now only available via buttons:
  - "Add" now leads to the wizard.
  - "Add (advanced)" leads to the former "Add" action (for experts only).
  - "Delete" and "Duplicate" are converted into buttons.
  - "Delete" should normally not be confused with another action.
- [Configuration] The deprecated "Logger" tab of the "Broker configuration" menu has been removed
- [Resources Status] Revamp Search experience
- [Resources Status] Revamp Timeline
- [Resources Status] Add Sticky and Persistent options to ACK in Resource Status
- [Resources Status] Allow detail tiles to be re-ordered for each user
- [Resources Status] Add multi-select to Resources Status listing
- [Resources Status] Add "Last OK" tile within Details panel
- [Resources Status] Persist user selected number of rows displayed
- [Resources Status] Make "duration" as the default second sorting criteria
- [Resources Status] Add link to performance page in detail panel. Based on PR [#9822](https://github.com/centreon/centreon/issues/9822)
- [Resources Status] Add Graphs panel for Hosts
- [Resources Status] Add tooltip to explain grayed options
- [Resources Status] Improve Custom Columns Name Display
- [Resources Status] Move Shortcuts from dedicated panel to option within Header
- [Resources Status] Make configure resource icon always visible
- [Resources Status] Improve readability of command line displayed
- [UX] Add Feature Flipping for Resources Status vs Legacy Pages
- [UX] Downtimes can now be scheduled until 2100
- [UX] The poller management action buttons are now hidden on Remote Servers

#### Beta enhancements

- [Configuration] Administrators can toggle a new button in the Pollers top-counter menu that allows them to export and
  reload the configuration of all pollers from any page

#### Breaking changes

> Access to API v2 has been changed. All of the beta endpoints have been migrated to version 21.10. This must be
> modified by "latest" or by the version of your Centreon platform (v21.10 for example).

For example replace:
```shell
{protocol}://{server}:{port}/centreon/api/beta/login
```

By:
```shell
{protocol}://{server}:{port}/centreon/api/latest/login
```

or:
By:
```shell
{protocol}://{server}:{port}/centreon/api/v21.10/login
```

#### Performances

- Move to PHP 8.0
- Preparing Debian 11 support

## Centreon Engine

### 21.10.0

- Flapping now starts only on non-OK states. Based on PR [#523](https://github.com/centreon/centreon-engine/pull/523)
- Flapping now starts only for services of UP hosts or for hosts with UP parent. Based on PR [#524](https://github.com/centreon/centreon-engine/pull/524). Fixes Issue [#192](https://github.com/centreon/centreon-engine/issues/192)
- Provide feedback on gRPC client execution success/failure

## Centreon Broker

### 21.10.0

- Queues (in memory and retention files) are now cleared for reversed broker flows without `peer retention` when the connection is reset. This is a change of behavior back to what it should have always been. It will prevent endless retention files for Centreon-Studio (Centreon-Map).
- [BETA] Centreon-broker is now able to use OpenSSL instead of GNUTLS and allows forcing TLS/SSL version and cipher suite
- Broker now only loads the modules that are necessary for its inputs and outputs
- Old broker log format has been removed

## Centreon Gorgone

### 21.10.2

#### Enhancements

- Added an "audit" module to Gorgone to provide an overview of the system status, package versions, + some Centreon metrics.
- Added a new "httpserverng" module to allow asynchronous API calls.

#### Bugfixes

- Fixed an issue that caused Service Discovery scans to fail because the wrong message was caught.
- Fixed an issue that could make Gorgone crash in pull mode.
- Fixed uninitialized values in Gorgone that could cause error log messages.
- Fixed an issue that prevented Gorgone from handling advanced [Service Discovery features](../monitoring/discovery/services-discovery#advanced-options) correctly.
- Fixed an issue in the module management that could cause crashes.

### 21.10.1

Release date: `December 14, 2021`

#### Bugfixes

- Make Gorgone’s private key readable by centreon-gorgone only
- Gorgone was too long to restart, which could cause the service to reach the systemctl timeout. The time to stop has been thoroughly decreased.

### 21.10.0

- Add IPv6 support
