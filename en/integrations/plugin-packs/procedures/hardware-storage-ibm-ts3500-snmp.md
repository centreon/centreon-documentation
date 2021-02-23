---
id: hardware-storage-ibm-ts3500-snmp
title: IBM TS3500
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Ibm-Ts3500-Snmp
```

## SNMP

SNMP must be configured on the monitored host

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                             |
| :----------------------------------- | :-------------------------------- |
| Host name                            | *Name of the host*                |
| Alias                                | *Host description*                |
| IP                                   | *Host IP Address*                 |
| Monitored from                       | *Monitoring Poller to use*        |
| Host Multiple Templates              | HW-Storage-IBM-Ts3500-SNMP-custom |

Click on the *Save* button.
