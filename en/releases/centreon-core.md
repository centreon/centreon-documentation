---
id: centreon-core
title: Centreon Core
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Core**.

> It is very important when you update your system to refer to this
> section in order to learn about behavior changes or major changes that
> have been made on this version. This will let you know the impact of
> the installation of these versions on the features you use or the
> specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please go to our
[Github](https://github.com/centreon/centreon/issues/new/choose)

## Centreon Web

### 21.04.0

#### Enhancements

- [Configuration] Define new logging options for Centreon Broker
- [Resources Status] Added Meta-Services to types of resources handled
- [Resources Status] Added many filtering options (including Monitoring Server)
- [Resources Status] Added possibility to select and re-order displayed columns
- [Resources Status] All page parameters are now saved within local storage and URL
- [Resources Status] Optimized overall listing to display ~50% more alerts
- [Resources Status] Revamped the Graph panel overall, mainly:
    - Added Datetime pickers for start and end of period
    - Added zoom feature via in-graph selection
    - Added time translation to move forward and backward (by half the displayed period)
    - Added option to display events (downtimes, acknowledgements, etc.) within graph
    - Removed metrics values within tootips
    - Added metrics values display in legend on graph hover
    - Added metrics mean, max and average display in legend otherwise


#### Documentation

- Added a chapter to enable firewalld and rules example to improve security
- Added a chapter to enable Fail2ban to improve security
- Added a chapter to move a collector from one server to another

#### Security

- Add SELinux packages

#### Performances

- Move to PHP 7.3
- Move to MariaDB 10.5

## Centreon Engine

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon Broker

### 21.04.0

- Compatibility with Centreon 21.04

## Centreon Gorgone

### 21.04.0

- [Core] Better congestion management for communication
