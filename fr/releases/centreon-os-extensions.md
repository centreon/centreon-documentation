---
id: centreon-os-extensions
title: Open Source Extensions
---

## Introduction

Vous trouverez dans ce chapitre tout ce qui concerne les **extensions
Open Source** de Centreon.

> Il est important de mettre à jour en utilisant la documentation
> adéquate de mise à jour et de lire attentivement les notes de mise à
> jour afin d'être au courant des changements qui pourraient impacter
> votre usage ou votre plateforme ou des développements spécifiques que
> vous auriez fait.

Pour faire des demandes d'évolutions ou reporter des bugs sur les extensions
commerciales, vous pouvez vous rendre sur notre
[Github](https://github.com/centreon/centreon/issues/new/choose).

## Centreon High-Availability

### 20.04.3

*30 novembre 2020*

#### Correctifs

- [Sync] An error in the script prevented the files to be synchronized
  correctly

#### Améliorations

- [RPM] All the configuration files (except for logrotate.d and sudoers.d)
  are now preserved by the update process

### 20.04.2

*3 novembre 2020*

#### Correctifs

- [Sync] Removing `-a` option to rsync

#### Améliorations

- [Sync] Protect paths with quotes to manage directories with spaces

### 20.04.1

*8 juillet 2020*

#### Correctifs

- [Cron] gorgoned manages all scheduled tasks
- [Sync] centreon_central_sync bugfixes (realtime sync)
- [Sync] fix(centreon_central_sync)fix-HUP-signal-and-bugs
- [Documentation] Revoke SUPER right from Centreon user. Add SELECT right
  to Replication user
- [Documentation] Add specific chmod associated to /var/log/centreon-engine/
  and /tmp/centreon-autodisco/ shared directories
- [Documentation] Missing cache regeneration in update procedure

### 20.04.0

*22 avril 2020*

- [Release] First release of [centreon-ha](https://github.com/centreon/centreon-ha)

## Centreon DSM

### 20.04.0

*22 avril 2020*

- Manage compatibility with Centreon 20.04

#### Correctifs

- Manage hosts disabled: host change instance or instance is not
  running (commit a99b068)
- Applied patch for MariaDB 10.2.x (commit a567991)

## Centreon Open Ticket

### 20.04.0

*22 avril 2020*

- Manage compatibility with Centreon 20.04

#### Correctifs

- [API] Better exception handling (PR #111)
- [Core] Fix test button (PR #114)
- [Install] Limit index size (InnoDB limit) (PR #125)

#### Correctifs de sécurité

- [Security] Remove session id parameter (PR #118)

#### Nouvelles fonctionnalités

- [Provider] Add a revamped version of the glpi provider (PR #113)
- [Provider] Add request tracker api v2 provider (commit 3d88c9)
- [Provider] Add iTop provider (PR #115)
