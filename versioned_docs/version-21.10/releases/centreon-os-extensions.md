---
id: centreon-os-extensions
title: Open Source Extensions
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Open Source extensions**.

> It is very important when you update your system to refer to this section in order to learn about behavior changes or
> major changes that have been made on this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please go to our
[Github](https://github.com/centreon/centreon/issues/new/choose)

## Centreon High-Availability

### 21.10.0

- Compatibility with other 21.10 components.

## Centreon DSM

### 21.10.0

- Compatibility with other 21.10 components.

## Centreon Open Tickets

### 21.10.2

Release date: `March of the Penguins, 2023`

#### Bug fixes

- [Provider] Fixed a fatal PHP error on iTop rule form when group is not an array.
- [Provider] Fixed default iTop url.

### 21.10.1

Release date: `July 21, 2022`

#### Enhancements

- [Core] Added PHP 8.0 compatibility
- [Core] Added the ability to use the user.name variable in Smarty configuration for providers
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
