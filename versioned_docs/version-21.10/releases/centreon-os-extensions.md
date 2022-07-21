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

### 21.10.1

#### Enhancements

- [Core] Added PHP 8.0 compatibility
- [Core] Added ability to use user name in smarty configuration for providers
- [Core] Use options defined in administration menu for acknowledgement
- [Install] Added ability to use a non default database name
- [Widget] Added an alarm duration filter in the widget configuration
- [Widget] Added an option to schedule a check when you open a ticket or acknowledge a resource
- [Widget] Added a preselect option in the select box if only one choice is available

#### Bug fixes

- [Provider] Fixed error 400 issue when opening a ticket using Jira provider
- [Provider] Fixed regression with Mail provider
- [Widget] Display of the state type of the host instead of the service

### 21.10.0

- Compatibility with other 21.10 components.
