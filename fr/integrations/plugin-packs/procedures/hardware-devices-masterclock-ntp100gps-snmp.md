---
id: hardware-devices-masterclock-ntp100gps-snmp
title: Masterclock NTP100GP
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.0 | `STABLE` | Oct 29 2018 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Devices-Masterclock-Ntp100gps-Snmp
```

### SNMP

It's necessary to enable SNMP on your equipment

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                       |
| :---------------------- | :------------------------------------------ |
| Host name               | *Name of the host*                          |
| Alias                   | *Host description*                          |
| IP                      | *Host IP Address*                           |
| Monitored from          | *Monitoring Poller to use*                  |
| Host Multiple Templates | HW-Device-Masterclock-Ntp100gps-SNMP-custom |

Click on the *Save* button.

