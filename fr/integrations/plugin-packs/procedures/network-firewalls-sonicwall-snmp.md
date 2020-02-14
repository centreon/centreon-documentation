---
id: network-firewalls-sonicwall-snmp
title: Sonicwall
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | May  2 2018 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Firewalls-Sonicwall-Snmp
```

### SNMP

It's necessary to enable SNMP on Sonicwall firewall

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                        |
| :----------------------------------- | :--------------------------- |
| Host name                            | *Name of the host*           |
| Alias                                | *Host description*           |
| IP                                   | *Host IP Address*            |
| Monitored from                       | *Monitoring Poller to use*   |
| Host Multiple Templates              | Net-FW-Sonicwall-SNMP-custom |
| *Relations \> Parent Hostgroups* tab |                              |

Click on the *Save* button.


