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

#### Documentation

#### Security

#### Performances

- Move to PHP 8.0

## Centreon Engine

### 21.10.0

- Compatibility with other 21.10 components.

## Centreon Broker

### 21.10.0

- Compatibility with other 21.10 components.

## Centreon Gorgone

### 21.10.0

- Compatibility with other 21.10 components.
