---
id: centreon-os
title: Centreon Open Source
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Open Source**.

> It is very important when you update your system to refer to this section in order to learn about behavior changes or
> major changes that have been made on this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please go to our
[Github](https://github.com/centreon/centreon/issues/new/choose).

## Centreon Web

### 22.10.0

#### Enhancements

- [ACL] Updated ACL actions in real time for connected users
- [API] Added an endpoint to perform all web updates
- [Authentication] Improved authentication via OpenID Connect by adding conditions
- [Authentication] Improved contact groups management via OpenID Connect:
  - Manual management of relationships between a user and contact groups
  - Automatic management of relationships between a user and groups of contacts based on values from the identity provider
- [Authentication] Improved roles management via OpenID Connect:
  - Manual management of relationships between a user and ACL groups
  - Automatic management of relationships between a user and ACL groups based on identity provider values
- [Install] Addition of dependency management between modules during installation, update and deletion
- [Install] Improved error handling during installation
- [Install] Removed "Centreon Web Directory" parameter to use Apache configuration
- [UI] Improved Centreon light and dark themes
- [UI] Reworked the banner to be more responsive
- [UX] Changing themes is now available by clicking on the profile icon.

#### Breaking changes

> The configuration of authorizations via the OpenId Connect protocol has evolved. Automatic addition to a contact
> group and role management have been improved. It is necessary to review your OpenId Connect configuration.

## Centreon Collect

### 22.10.0

#### Centreon Engine

##### Enhancements

#### Centreon Broker

##### Enhancements

## Centreon Gorgone

### 22.10.0

#### Enhancements

## Centreon High Availability

### 22.10.0

- Compatibility with other 22.10 components.

## Centreon DSM

### 22.10.0

- Compatibility with other 22.10 components.

## Centreon Open Tickets

### 22.10.0

- Compatibility with other 22.10 components.
