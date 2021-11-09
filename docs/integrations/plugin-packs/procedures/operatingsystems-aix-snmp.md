---
id: operatingsystems-aix-snmp
title: AIX SNMP
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Operatingsystems-Aix-Snmp
```

## SNMP

SNMP must be configured on the monitored host.

### Troubleshooting

Read [Troubleshooting
SNMP](http://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp)

## Centreon Configuration

### Create a new AIX host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | OS-AIX-SNMP-custom         |

Click on the *Save* button.
