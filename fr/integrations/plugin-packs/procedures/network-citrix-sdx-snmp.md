---
id: network-citrix-sdx-snmp
title: Citrix SDX
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.2 | `STABLE` | Oct 24 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Citrix-Sdx-Snmp
```

## SNMP

SNMP must be configured on the monitored system.

## Centreon Configuration

### Create a new Host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | Net-Citrix-Sdx-SNMP-custom |

Click on the *Save* button.

