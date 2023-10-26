---
id: centreon-commercial-extensions
title: Commercial Extensions
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Commercial Extension**.

> It is very important when you update your system to refer to this section in order to learn about behavior changes or
> major changes that have been made on this version. This will inform you about the impact of installing these
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
- [Configuration] Removed deprecated "Import SSV" feature from the Business Activities configuration.
- [Configuration] Improved the Business Activities configuration panel display.
   - Display listing pagination icons while displaying the configuration panel.
   - Allow more space to display the names of indicators.

## Centreon MBI

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.

## Centreon Auto Discovery

### 23.04.0

Release date: `April 26, 2023`

- Compatibility with other 23.04 components.
- Automatic plugin installation: plugins are now installed automatically on the poller where a Host Discovery job is scheduled. So, you won't need to install them prior to scheduling discovery jobs.
- Job duplication: Host Discovery jobs can now be duplicated to avoid repetitive work.
- Mapper duplication: Host Discovery Mappers can now be duplicated inside a job.

## Centreon Monitoring Connector Manager (formerly Plugin Packs Manager)

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
- [Core] It is now possible to exclude unrepresentative data from prediction computation.
- [Core] Anomaly Detection services can now be used in Business Activities.

## Centreon IT & Business Extensions

### 23.04.0

Release date: `April 26, 2023`

- Added the possibility to customize the login page and the banner. You can now:
  - Change the background of the login page.
  - Change the logo on the login page.
  - Display custom text on the login page.
  - Give the platform a name that will be visible on the login page and in the banner.
