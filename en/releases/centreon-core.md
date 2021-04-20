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
- [Resources Status] Added new columns (active/passive, notifications on/off) and possibility to select and re-order displayed columns
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

- Ability to submit external commands via gRPC

## Centreon Broker

### 21.04.0

> **Known issues**
> * Broker streams: the same parameter, if used in several outputs of the same broker stream, can only have one value (the last prevails).
> * BAM: the impacts of KPIs of type Meta-service are not evaluated correctly. A fix will be release very soon.
> * BAM: the impacts of KPIs of type BA in are not evaluated correctly. A fix will be release very soon.

#### New broker logs

- New logs, with new format, no more epoch timestamps.

```log
[2021-04-16 13:49:06.781] [core] [info] Clearing old connections
[2021-04-16 13:56:10.985] [core] [info] main: configuration update requested
```

- New log config options, with a different log level for `core`, `config`, `sql`, `processing`, `perfdata`, `bbdo`, `tcp`, `tls`, `lua`, `bam`.
- Old logs are still supported, but you are encouraged to abandon them.

#### Other enhancements

- Support of UInt64 for `id` column of `index_data` table: fixes issues on platforms having a large amount of metrics.

> **Warning:** this change needs cbd service(s) to be stopped during the upgrade to 21.04.0 and all "queue" and "unprocessed" files must be removed.

- Improvement of the acknowledgement of events when broker is shutting down.

## Centreon Gorgone

### 21.04.0

- [Core] Better congestion management for communication
