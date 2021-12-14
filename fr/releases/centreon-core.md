---
id: centreon-core
title: Centreon Core
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les **Centreon Core**.

> Il est important de mettre à jour en utilisant la documentation adéquate de mise à jour et de lire attentivement les
> notes de mise à jour afin d'être au courant des changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez fait.

Pour faire des demandes d'évolutions ou reporter des bugs sur les extensions commerciales, vous pouvez vous rendre sur
notre [Github](https://github.com/centreon/centreon/issues/new/choose).

## Centreon Web

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

### 21.10.1

#### Bugfixes

- Make Gorgone’s private key readable by centreon-gorgone only
- Gorgone was too long to restart, which could cause the service to reach the systemctl timeout. The time to stop has been thoroughly decreased.


### 21.10.0

- Compatibility with other 21.10 components.
