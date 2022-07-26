---
id: centreon-core
title: Centreon Core
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les éléments **Centreon Core**.

> Il est important de mettre à jour en utilisant la documentation adéquate de mise à jour et de lire attentivement les
> notes de mise à jour afin d'être au courant des changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez faits.

Pour faire des demandes d'évolutions ou signaler des bugs sur les extensions commerciales, vous pouvez vous rendre sur
notre [Github](https://github.com/centreon/centreon/issues/new/choose).

## Centreon Web

### 22.04.1

#### Enhancements

- [Authentication] Added the permission to import automatically new users using the OpenId Connect protocol
- [Authentication] Applied an ACL Group(s) definition on login for OpenID Connect users
- [Configuration] Extended the size of the URL, Notes and Action URL fields to avoid truncating long URLs
- [Core] Properly managed the switch between Resource Status repositories
- [Install] Improved error handling during installation
- [UX] Improved the OpenId Connect form

#### Bug fixes

- [API] Fixed MBI APIs with the latest version of Centreon
- [Administration] Fixed display of the end date of the licenses
- [Administration] Fixed scroll when reduce screen size to access to all items
- [Configuration] Fixed export when host group disabled
- [Configuration] Fixed export when service group disabled
- [Configuration] Fixed export when service template disabled
- [Configuration] Massive change failed to set contact/contactgroup additive inheritance
- [Configuration] When a host receives no host template from the mappers, the default template that is hard-coded in the Plugin Pack will be applied to this host
- [Core] Database partitioning fixed for MySQL 8
- [Core] Fixed SQL queries when databases names contain dash
- [Core] Re-added href in menus
- [Install] Fixed SQL issue during update
- [Install] Fixed rights on /usr/share/centreon/.env.local.php file for Debian package
- [Install] Fixed waterfall visual effect in extension details tile
- [Monitoring] Fixed notification number in legacy pages
- [Monitoring] Fixed the "Last_update" column in legacy pages
- [Resources Status] Fixed timeperiod group button and custom period selectors heights
- [UI] Close the menu when a navigation item is clicked
- [UI] Fixed display of CSS code with Firefox browser
- [UI] Fixed header and skeleton UI instability
- [UX] Reduce the timeout preventing from closing the menu unexpectedly
- [Widget] Use ACL to get list of poller to filter display of services

#### Security fixes

- [Administration] Sanitize and bind ACL Group queries
- [Administration] Sanitize and bind ACL resources queries
- [Administration] Sanitize and bind escalation form queries
- [Configuration] Fixed SQLi vulnerability in escalation form
- [Configuration] Fixed XXS vulnerability in escalation form
- [Configuration] Sanitize and bind "User" class queries
- [Configuration] Sanitize and bind "downtime" queries
- [Configuration] Sanitize and bind "hostgroups" queries
- [Configuration] Sanitize and bind "hosts" queries
- [Configuration] Sanitize and bind "meta_service" related queries
- [Configuration] Sanitize and bind "poller" queries
- [Configuration] Sanitized and bound "pollers" queries
- [Configuration] Sanitized and bound contact form queries
- [Configuration] Sanitized and bound timeperiod form queries
- [Configuration] Sanitized and bound queries in virtual metrics configuration
- [Core] Remove deprecated switch in encodePass() method
- [Core] Updated PHP libraries for security issue

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
