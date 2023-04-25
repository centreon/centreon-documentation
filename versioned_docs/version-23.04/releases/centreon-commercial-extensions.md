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

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon BAM

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.
- [Configuration] Remove deprecated "Import SSV" feature from Business Activities configuration
- [Configuration] Improve Business Activities configuration panel display
   - Dispaly listing pagination icons while displaying configuration panel
   - Allow more space to indicators names

## Centreon MBI

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon Auto Discovery

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

- Plugins automatic installation

Plugins are now installed automatically on the poller where a Host Discovery Job is scheduled. So, you won't need to install them prior to scheduling discovery jobs.

- Job duplication

Host Discovery jobs can now be duplicated to avoid repetitive work.

- Mapper duplication

Host Discovery Mappers can now be duplicated inside a job.

## Centreon Monitoring Connectors Manager

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon License Manager

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon Anomaly Detection

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.
- [Core] Allow user to exclude un representative data from prediction computation.
- [Core] Enable usage of Anomaly Detection services in Business Activities

## Centreon IT & Business Extension

Release date: `April 26, 2023`

- Added the possibility to customize the login page and the banner
  - Possibility to change login page background
  - Possibility to change login page logo
  - Possibility to display custom text
  - Possibility to name the platform, visible on the login page and the banner
