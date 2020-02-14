---
id: network-firewalls-fortinet-fortigate-snmp
title: Fortinet Fortigate
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.2.9 | `STABLE` | Feb 10 2020 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Firewalls-Fortinet-Fortigate-Snmp
```

### SNMP

It's necessary to enable SNMP on your equipment

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                              |
| :---------------------- | :--------------------------------- |
| Host name               | *Name of the host*                 |
| Alias                   | *Host description*                 |
| IP                      | *Host IP Address*                  |
| Monitored from          | *Monitoring Poller to use*         |
| Host Multiple Templates | Net-Fortinet-Fortigate-SNMP-custom |

Click on the *Save* button.

