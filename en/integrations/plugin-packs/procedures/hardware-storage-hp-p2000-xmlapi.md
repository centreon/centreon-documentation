---
id: hardware-storage-hp-p2000-xmlapi
title: HP P2000
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.23 | `STABLE` | Sep 24 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Hp-P2000-Xmlapi
```

## XML API

An account must be created on the monitored P2000.

## Centreon Configuration

### Create a new Host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                             |
| :----------------------------------- | :-------------------------------- |
| Host name                            | *Name of the host*                |
| Alias                                | *Host description*                |
| IP                                   | *Host IP Address*                 |
| Monitored from                       | *Monitoring Poller to use*        |
| Host Multiple Templates              | HW-Storage-Hp-P2000-Xmlapi-custom |

Click on the *Save* button.

