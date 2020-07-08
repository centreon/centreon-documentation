---
id: centreon-os-extensions
title: Open Source Extensions
---

## Introduction

You can find in this chapter all changelogs concerning **Centreon Open Source
extensions**.

> It is very important when you update your system to refer to this section in
> order to learn about behavior changes or major changes that have been made on
> this version. This will let you know the impact of the installation of these
> versions on the features you use or the specific developments that you have
> built on your platform (modules, widgets, plugins).

If you have feature requests or want to report a bug, please go to our
[Github](https://github.com/centreon/centreon/issues/new/choose)

## Centreon High-Availability release notes

### 20.04.1

#### Bug fixes

* [Cron] gorgoned manages all scheduled tasks
* [Sync] centreon_central_sync bugfixes (realtime sync)
* [Sync] fix(centreon_central_sync)fix-HUP-signal-and-bugs
* [Documentation] Revoke SUPER right from Centreon user. Add SELECT right to Replication user
* [Documentation] Add specific chmod associated to /var/log/centreon-engine/ and /tmp/centreon-autodisco/ shared directories
* [Documentation] Missing cache regeneration in update procedure

### 20.04.0

* [Release] First release of [centreon-ha](https://github.com/centreon/centreon-ha)

## Centreon DSM release notes

### 20.04.0

* Manage compatibility with Centreon 20.04
* Manage hosts disabled: host change instance or instance is not running (commit a99b068)
* Applied patch for mariadb 10.2.x (commit a567991)

## Centreon Open Ticket release notes

### 20.04.0

* Manage compatibility with Centreon 20.04
* [API] Better exception handling (PR #111)
* [Provider] Add a revamped version of the glpi provider (PR #113)
* [Provider] Add request tracker api v2 provider (commit 3d88c9)
* [Provider] Add iTop provider (PR #115)
* [Core] Fix test button (PR #114)
* [Install] Limit index size (InnoDB limit) (PR #125)
* [Security] Remove session id parameter (PR #118)
