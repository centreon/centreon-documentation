---
id: centreon-core
title: Centreon Core
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Core**.

> It is very important when you update your system to refer to this section in order to learn about behavior changes or
> major changes that have been made on this version. This will let you know the impact of the installation of these
> versions on the features you use or on the specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please go to our
[Github](https://github.com/centreon/centreon/issues/new/choose).

## Centreon Web

### 22.04.2

Release date: `August 3, 2022`

#### Bug fixes

- [Upgrade] Fixed Symfony cache rebuild during upgrade

### 22.04.1

Release date: `July 28, 2022`

#### Enhancements

- [Administration] Added consistency in ACLs with the new structure of the poller creation wizard
- [Authentication] Added the permission to import automatically new users using the OpenId Connect protocol
- [Authentication] Applied an ACL Group(s) definition on login for OpenID Connect users
- [Configuration] Extended the size of the URL, Notes and Action URL fields to avoid truncating long URLs
- [Core] Properly managed the switch between Resource Status repositories
- [Install] Improved error handling during installation
- [UX] Improved the OpenId Connect form

#### Bug fixes

- [API] Fixed MBI APIs with the latest version of Centreon
- [Administration] Fixed the display of the end date of the licenses
- [Administration] Fixed the scrolling when reducing the screen size to access all items
- [Configuration] Fixed contact/contactgroup additive inheritance configuration using massive change
- [Configuration] Fixed empty host template from mappers (Host Discovery) by using default template form Plugin Packs discovery rule
- [Configuration] Fixed the export when the host group is disabled
- [Configuration] Fixed the export when the service group is disabled
- [Configuration] Fixed the export when the service template is disabled
- [Core] Fixed href on links that were broken in menus
- [Core] Fixed SQL queries when databases names contained a dash
- [Core] Fixed the database partitioning for MySQL 8
- [Install] Fixed an SQL issue during update
- [Install] Fixed rights on the /usr/share/centreon/.env.local.php file for Debian package
- [Install] Fixed the waterfall visual effect in the extension's details tile
- [Monitoring] Fixed the "Last_update" column in legacy pages
- [Monitoring] Fixed the notifications number in legacy pages
- [Resources Status] Fixed the timeperiod group button and custom period selectors heights
- [UI] Fixed header and skeleton UI instability
- [UI] Fixed the display of CSS code with Firefox browser
- [UI] Now close the menu when a navigation item is clicked
- [UX] Reduced the timeout to prevent the menu from closing unexpectedly
- [Widget] Now use ACL to get list of pollers in widget configuration to filter display of services

#### Security fixes

- [Administration] Sanitized and bound ACL Group queries
- [Administration] Sanitized and bound ACL resources queries
- [Configuration] Fixed SQLi vulnerability in escalation form
- [Configuration] Fixed XXS vulnerability in escalation form
- [Configuration] Sanitized and bound "User" class queries
- [Configuration] Sanitized and bound "downtime" queries
- [Configuration] Sanitized and bound "hostgroups" queries
- [Configuration] Sanitized and bound "hosts" queries
- [Configuration] Sanitized and bound "meta_service" related queries
- [Configuration] Sanitized and bound "pollers" queries
- [Configuration] Sanitized and bound contact form queries
- [Configuration] Sanitized and bound escalation form queries
- [Configuration] Sanitized and bound queries in virtual metrics configuration
- [Configuration] Sanitized and bound timeperiod form queries
- [Core] Removed deprecated switch in encodePass() method
- [Core] Updated PHP libraries for security issues
- [Install] Sanitized and bound update queries

### 22.04.0

#### Enhancements

- [Administration] Display the name of the object that has been modified in the detail form of the administration logs
- [Authentication] Added a Password Security Policy for local accounts
  - Define password complexity
  - Define password length
  - Password expiration policy
  - Possibility to exclude users from password expiration policy
  - Brute force detection and account blocking
  - Define minimum delay between each password change (disabled by default on platform update)
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

#### New feature

- [Widget] A new widget is now available to display listings from **ntopng** and provide quick access to detail pages in the **ntopng** WUI

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

##### Breaking changes

As stated above, all broker instances (central, RRD, modules) must use the same BBDO protocol version to be able to communicate. This means that pollers using 21.10 or older releases won't be able to send data to a 22.04 central server using BBDO 3.0.0. Please read carefully our upgrade procedure.

## Centreon Gorgone

### 22.04.0

#### Enhancements

- Added ability to set cipher and key rotation time for encrypted communication
- Added new httpsserverng module
- Added the possibility for the poller to communicate using the socket web client instead of using the ZMQ protocol
- Extended configuration to add multiple directories at the same time
