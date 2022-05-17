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
[Github](https://github.com/centreon/centreon/issues/new/choose).

## Centreon Web

### 22.04.0

#### Enhancements

- [Administration] Display the name of the object that has been modified in the detail form of the administration logs
- [Authentication] Added a Password Security Policy for local accounts
  - Define password complexity
  - Define password length
  - Password expiration policy
  - Possibility to exclude users from password expiration policy
  - Brute force detection and account blocking
- [Authentication] Moved Web SSO and OpenID Connect configuration to a dedicated authentication menu
- [Authentication] Autologin key and password can’t be the same
- [Configuration] Export hosts and services categories and severities in Centreon Engine configuration files
- [Configuration] Added new unified SQL Centreon Broker output parameters in the configuration menu
- [Core] Improved SQL queries by escaping '_'
- [Install] Creation of a dedicated account for the Centreon Gorgone process
- [Install] Improvement and simplification of Centreon Apache configuration
- [Install] Improved installation with a remote DBMS
- [Install] Set broker retry interval to 15s instead of 60
- [Upgrade] Excluded the dedicated account for the Centreon Gorgone / MAP / MBI processes from the password expiration policy
- [UX] Added Dark Theme and a switch to easily move from light to dark theme
- [UX] Harmonization of the classic theme
- [UX] Redesign of the authentication page
- [UX] Remove footer to save space
- [UX] Remove "Animation effects" option for users
- [Resources Status] New tab in right panel showing notification policy for a resource
- [Resources Status] New filter in resources status on type of status (Hard or Soft)
- [Resources Status] Filter popin improvement:
  - Remove search box when selection options are limited
  - **Resource** has been replaced by **Type** to be consistent with search bar
- [Resources Status] Make service graph tiles size constant in Resources Status host graph panel

#### Breaking changes

> Since the rewrite of the OpenID Connect authentication, it is necessary to reconfigure the redirect URL to Centreon in
> the identity provider.

For example replace:
```shell
{protocol}://{server}:{port}/centreon/index.php
```

By:
```shell
{protocol}://{server}:{port}/centreon/authentication/providers/configurations/openid
```

> Moreover, for Web SSO authentication, you need also to change Apache configuration.

For example replace:
```shell
{protocol}://{server}:{port}/centreon/index.php
```

By:
```shell
{protocol}://{server}:{port}/centreon/websso
```

## Centreon Collect

### 22.04.0

#### Centreon Engine

##### Enhancements

- New logger, more readable, more configurable. The former logger is still available for the moment.
- Flapping was not detected for volatile services until now. This is a new behavior that can be disabled. Following [a suggestion on TheWatch](https://thewatch.centreon.com/data-collection-6/volatile-and-flapping-212).
- Flapping used to be detected on SOFT states for hosts and on HARD states for services. This seemed illogical so it will now be based on SOFT states for both. Based on [PR #522](https://github.com/centreon/centreon-engine/pull/522).
- Set default values in anticipation of removing the following parameters:
  - `translate_passive_host_checks` to `1`
  - `passive_host_checks_are_soft` to `1`
  - `max_check_result_reaper_time` to `30`
- New configuration files:
  - `tags.cfg` for host groups, host categories, service groups and service categories.
  - `severities.cfg` for host and service severities

#### Centreon Broker

##### Enhancements

- A new output type has been created, `unified_sql`, to replace both `sql` and `storage` in one unique output.
- New BBDO protocol version: 3.0.0. Some broker events are now sent using Protobuf arrays. This has benefits such as smaller bandwidth consumption and smaller database updates. The broker event types that have been converted are: host, host status, service, service status and RRD rebuild messages. The protocol version (`bbdo_version`) must be identical in all parts of the broker configuration.
- Broker feeds new tables for real time monitoring information.
- A lot of new runtime statistics are available with the gRPC API.

## Centreon Gorgone

### 22.04.0

#### Enhancements

- Added ability to set cipher and key rotation time for encrypted communication
- Added new httpsserverng module
- Added the possibility for the poller to communicate using the socket web client instead of using the ZMQ protocol
- Extended configuration to add multiple directories at the same time
