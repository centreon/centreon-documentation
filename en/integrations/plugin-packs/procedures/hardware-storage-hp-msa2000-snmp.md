---
id: hardware-storage-hp-msa2000-snmp
title: HP MSA2000
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.2 | `STABLE` | May  3 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Hp-Msa2000-Snmp
```

## SNMP

SNMP must be configured on the monitored equipment.

## Centreon Configuration

### Create a new Host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                             |
| :----------------------------------- | :-------------------------------- |
| Host name                            | *Name of the host*                |
| Alias                                | *Host description*                |
| IP                                   | *Host IP Address*                 |
| Monitored from                       | *Monitoring Poller to use*        |
| Host Multiple Templates              | HW-Storage-Hp-Msa2000-SNMP-custom |
| *Relations \> Parent Hostgroups* tab |                                   |

Click on the *Save* button.


