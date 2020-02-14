---
id: hardware-servers-lenovo-xcc-snmp
title: Lenovo XCC SNMP
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jun  7 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Servers-Lenovo-Xcc-Snmp
```

## SNMP

SNMP must be configured on the monitored host

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                            |
| :----------------------------------- | :------------------------------- |
| Host name                            | *Name of the host*               |
| Alias                                | *Host description*               |
| IP                                   | *Host IP Address*                |
| Monitored from                       | *Monitoring Poller to use*       |
| Host Multiple Templates              | HW-Server-Lenovo-Xcc-SNMP-custom |
| *Relations \> Parent Hostgroups* tab |                                  |

Click on the *Save* button.


