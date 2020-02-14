---
id: hardware-storage-hitachi-hnas-snmp
title: Hitachi NAS
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.1 | `STABLE` | May  2 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Hitachi-Hnas-Snmp
```

## SNMP

Connect to your Hitachi NAS and configure SNMP.

## Centreon Configuration

### Create a new NetApp server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                               |
| :---------------------- | :---------------------------------- |
| Host name               | *Name of the host*                  |
| Alias                   | *Host description*                  |
| IP                      | *Host IP Address*                   |
| Monitored from          | *Monitoring Poller to use*          |
| Host Multiple Templates | HW-Storage-Hitachi-Hnas-SNMP-custom |

Click on the *Save* button.

