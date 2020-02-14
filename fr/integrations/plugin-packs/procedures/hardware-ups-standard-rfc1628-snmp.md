---
id: hardware-ups-standard-rfc1628-snmp
title: UPS Standard
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.22 | `STABLE` | Oct 29 2018 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Ups-Standard-Rfc1628-Snmp
```

## SNMP

SNMP must be configured on the monitored host

## Centreon Configuration

### Create a new UPS host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                               |
| :----------------------------------- | :---------------------------------- |
| Host name                            | *Name of the host*                  |
| Alias                                | *Host description*                  |
| IP                                   | *Host IP Address*                   |
| Monitored from                       | *Monitoring Poller to use*          |
| Host Multiple Templates              | HW-UPS-Standard-Rfc1628-SNMP-custom |

Click on the *Save* button.

