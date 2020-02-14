---
id: applications-monitoring-centreon-poller
title: Centreon Poller
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.3.2 | `STABLE` | Feb  7 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Monitoring-Centreon-Poller centreon-plugin-Operatingsystems-Linux-Snmp
```

## SNMP

Connect to your Central and configure SNMP.

## SSH key copy

Pollers are supposed to be monitored by the Central server.

To do so, we will use centreon user SSH key \# cp /var/spool/centreon/.ssh/id\_rsa /var/lib/centreon-engine/.ssh/ \#
chown centreon-engine. /var/lib/centreon-engine/.ssh/id\_rsa

## Centreon Configuration

### Create a new Centreon-Central server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                                 |
| :---------------------- | :------------------------------------ |
| Host name               | *Name of the host*                    |
| Alias                   | *Host description*                    |
| IP                      | *Host IP Address*                     |
| Monitored from          | *Monitoring Poller to use*            |
| Host Multiple Templates | App-Monitoring-Centreon-Poller-custom |

Click on the *Save* button.


