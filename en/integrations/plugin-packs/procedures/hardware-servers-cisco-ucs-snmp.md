---
id: hardware-servers-cisco-ucs-snmp
title: Cisco UCS
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.7 | `STABLE` | Feb  6 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

## SNMP

SNMP must be configured on the monitored UCS server.

## Centreon Configuration

### Create a new Host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | HW-Cisco-UCS-custom        |

Click on the *Save* button.

