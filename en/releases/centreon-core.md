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

### 21.10.0

#### Enhancements

- Preparing Debian 11 support
- Product Adoption component integration
- Improve OIDC support (OpenId Connect)
  - Add Okta support
  - Add MS Azure AD / ADFS
  - Add possibility to define with claim is used for Centreon login
  - Add possibility to define complete url for endpoints
  - Add possibility to use client_secret_basic as authentication
  - Allow to do not defined redirect URL
  - Add errors log in /var/log/centreon/login.log
  - Add possibility to display debug log in /var/log/centreon/login.log
  - Use proxy if defined
- API versioning is now consistent with Centreon's major release number
- Downtimes can now be scheduled until 2100
- The poller management actions are now only available via buttons:
  - "Add" now leads to the wizard.
  - "Add (advanced)" leads to the former "Add" action (for experts only).
  - "Delete" and "Duplicate" are converted into buttons.
  - "Delete" should normally not be confused with another action.
- The poller management action buttons are now hidden on Remote Servers
- [BETA] Administrators can toggle a new button in the Pollers top-counter menu that allows them to export and reload the configuration of all pollers from any page
- The deprecated "Logger" tab of the "Broker configuration" menu has been removed

#### Documentation

#### Security

#### Performances

- Move to PHP 8.0

## Centreon Engine

### 21.10.0

- Compatibility with other 21.10 components.
- Flapping now starts only on non-OK states. Based on PR [#523](https://github.com/centreon/centreon-engine/pull/523)
- Flapping now starts only for services of UP hosts or for hosts with UP parent. Based on PR [#524](https://github.com/centreon/centreon-engine/pull/524). Fixes Issue [#192](https://github.com/centreon/centreon-engine/issues/192)

## Centreon Broker

### 21.10.0

- Compatibility with other 21.10 components.
- Queue (in memory and retention files) are now cleared when the connection is reset. This is a change of behavior back to what it should have always been. It will prevent endless retention files for Centreon-Studio (Centreon-Map).
- [BETA] Centreon-broker is now able to use OpenSSL instead of GNUTLS and allows forcing TLS/SSL version and cipher suite
- Broker now only loads the modules that are necessary for its inputs and outputs
- Old broker log format has been removed

## Centreon Gorgone

### 21.10.0

- Compatibility with other 21.10 components.
