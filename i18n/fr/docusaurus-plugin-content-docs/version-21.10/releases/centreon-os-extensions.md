---
id: centreon-os-extensions
title: Open Source Extensions
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les **extensions Open Source** de Centreon.

> Il est important de mettre à jour en utilisant la documentation adéquate de mise à jour et de lire attentivement les
> notes de mise à jour afin d'être au courant des changements qui pourraient impacter votre usage ou votre plateforme
> ou des développements spécifiques que vous auriez fait.

Pour faire des demandes d'évolutions ou reporter des bugs sur les extensions commerciales, vous pouvez vous rendre sur
notre [Github](https://github.com/centreon/centreon/issues/new/choose).

## Centreon High-Availability

### 21.10.0

- Compatibility with other 21.10 components.

## Centreon DSM

### 21.10.0

- Compatibility with other 21.10 components.

## Centreon Open Tickets

### 21.10.1

#### Enhancements

- [Core] Added PHP 8.0 compatibility
- [Core] Added the ability to use the use user.name variable in Smarty configuration for providers
- [Install] Added the ability to use a non default database name
- [Widget] Added an alarm duration filter in the widget configuration
- [Widget] Added an option to schedule a check when you open a ticket or acknowledge a resource
- [Widget] Added a preselect option in the select box if only one choice is available

#### Bug fixes

- [Core] Now use the default acknowledgement options defined in administration menu that were not applied
- [Provider] Fixed the error 400 issue when opening a ticket using Jira provider
- [Provider] Fixed a regression with the Mail provider
- [Widget] Fixed the state type column that was displayed the service value instead of the host value

### 21.10.0

- Compatibility with other 21.10 components.
