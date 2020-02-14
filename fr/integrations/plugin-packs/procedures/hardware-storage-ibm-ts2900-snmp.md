---
id: hardware-storage-ibm-ts2900-snmp
title: IBM TS2900
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Aug  9 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Ibm-Ts2900-Snmp
```

## SNMP

SNMP must be configured on the monitored host

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                             |
| :----------------------------------- | :-------------------------------- |
| Host name                            | *Name of the host*                |
| Alias                                | *Host description*                |
| IP                                   | *Host IP Address*                 |
| Monitored from                       | *Monitoring Poller to use*        |
| Host Multiple Templates              | HW-Storage-IBM-TS2900-SNMP-custom |
| *Relations \> Parent Hostgroups* tab |                                   |

Click on the *Save* button.


