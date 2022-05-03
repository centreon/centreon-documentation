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
- [Authentication] Added a Password Security Policy for local account
  - Define password complexity
  - Define password length
  - Password expiration policy
  - Possibility to exclude users from password expiration policy
  - Brute force detection and account blocking
- [Authentication] Moved Web SSO and OpenID Connect configuration to a dedicated authentication menu
- [Authentication] Do not allow same autologin key and password
- [Configuration] Export hosts and services categories and severities in Centreon Engine configuration files
- [Configuration] Added a new unified sql Centreon Broker output parameters in the configuration menu
- [Core] Improved SQL queries by escaping '_'
- [Install] Creation of a dedicated account for the Centreon Gorgone process
- [Install] Improvement and simplification of Centreon Apache configuration
- [Install] Improved installation with a remote DBMS
- [Install] Set broker retry interval to 15s instead of 60
- [Upgrade] Excluded dedicated account for the Centreon Gorgone / MAP / MBI processes to expiration password policy
- [Resources Status] Added new Filter in resources status on type of status (Hard or Soft)
- [Resources Status] Changed "resource" by "type" in filter menu
- [UX] Added Dark Theme and a switch to easily move from light to dark theme
- [UX] Harmonization of the classic theme
- [UX] Redesign of the authentication page
- [UX] Remove footer to save space
- [UX] Remove "Animation effects" option for users

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

- Compatibility with other 22.04 components.

#### Centreon Broker

- Compatibility with other 22.04 components.

## Centreon Gorgone

### 22.04.0

- Compatibility with other 22.04 components.
