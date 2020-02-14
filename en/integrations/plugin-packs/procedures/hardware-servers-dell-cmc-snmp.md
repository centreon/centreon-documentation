---
id: hardware-servers-dell-cmc-snmp
title: Dell CMC
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.10 | `STABLE` | Jul 10 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Servers-Dell-Cmc-Snmp
```

## SNMP

SNMP must be configured on the monitored host

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                          |
| :----------------------------------- | :----------------------------- |
| Host name                            | *Name of the host*             |
| Alias                                | *Host description*             |
| IP                                   | *Host IP Address*              |
| Monitored from                       | *Monitoring Poller to use*     |
| Host Multiple Templates              | HW-Server-Dell-CMC-SNMP-custom |

Click on the *Save* button.

