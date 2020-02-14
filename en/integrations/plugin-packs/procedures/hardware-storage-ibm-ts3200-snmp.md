---
id: hardware-storage-ibm-ts3200-snmp
title: IBM TS3200
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.23 | `STABLE` | Feb 21 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Ibm-Ts3200-Snmp
```

## SNMP

SNMP must be configured on the monitored host

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                             |
| :---------------------- | :-------------------------------- |
| Host name               | *Name of the host*                |
| Alias                   | *Host description*                |
| IP                      | *Host IP Address*                 |
| Monitored from          | *Monitoring Poller to use*        |
| Host Multiple Templates | HW-Storage-IBM-TS3200-SNMP-custom |

Click on the *Save* button.

