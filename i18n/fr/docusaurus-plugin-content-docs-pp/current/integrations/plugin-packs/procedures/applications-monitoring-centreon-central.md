---
id: applications-monitoring-centreon-central
title: Centreon Central
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Monitoring-Centreon-Central centreon-plugin-Operatingsystems-Linux-Snmp
```

## SNMP

Connect to your Central and configure SNMP.

## Centreon Configuration

### Create a new Centreon-Central server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                  |
| :---------------------- | :------------------------------------- |
| Host name               | *Name of the host*                     |
| Alias                   | *Host description*                     |
| IP                      | *Host IP Address*                      |
| Monitored from          | *Monitoring Poller to use*             |
| Host Multiple Templates | App-Monitoring-Centreon-Central-custom |

Click on the *Save* button.
