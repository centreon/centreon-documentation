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
