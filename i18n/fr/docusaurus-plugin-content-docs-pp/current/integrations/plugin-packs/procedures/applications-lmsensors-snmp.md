---
id: applications-lmsensors-snmp
title: LM Sensors
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Lmsensors-Snmp
```

## SNMP

SNMP must be configured on the monitored system.

### LM Sensors

LM Sensors must be installed and configured on the monitored system.

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
| Host Multiple Templates              | App-Lmsensors-SNMP-custom  |

Click on the *Save* button.
