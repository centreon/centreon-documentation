---
id: centreon-commercial-extensions
title: Commercial Extensions
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Commercial Extension**.

> It is very important when you update your system to refer to this section in order to learn about behavior changes or
> major changes that have been made on this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have built on your platform (modules,
> widgets, plugins).

If you have feature requests or want to report a bug, please contact support.

## Centreon MAP

### 22.04.0

> If you have just installed Centreon 22.04 or upgraded your platform to this version, be aware that the platform now uses the new BBDO v3 protocol. [Configure MAP](../graph-views/install.md#configuration) to use it.

- Compatibility with other 22.04 components.

## Centreon BAM

### 22.04.1

Release date: `May 25, 2022`

- Fixed the blank page when opening BAM configuration menu

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon MBI

### 22.04.1

Release date: `July 6, 2022`

- Fixed an issue related to the new password policy that would prevent reports from being generated.

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon Auto Discovery

### 22.04.0

#### Enhancements

- The Centreon Host Discovery engine can now perform changes on existing hosts when using the automatic policy. This means that existing hosts may now gain templates, groups, categories and macros, and get monitored by a different server.
- Centreon Host Discovery can now deploy the new monitoring configuration as soon as the job is run in the background.

## Centreon Plugin Packs Manager

### 22.04.0

#### Enhancements

- The Plugin Packs now provide the package name and version of the required plugins, and Gorgone will automatically install the required plugins on your pollers. This means you don't need to install the Centreon Plugins manually on each poller anymore.

## Centreon License Manager

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon Anomaly Detection

### 22.04.0

- Compatibility with other 22.04 components.

## Centreon Data Source For Grafana

- [Grafana] Centreon data source
