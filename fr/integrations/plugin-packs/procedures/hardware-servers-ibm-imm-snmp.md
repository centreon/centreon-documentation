---
id: hardware-servers-ibm-imm-snmp
title: IBM IMM
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.24 | `STABLE` | Oct 29 2018 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-servers-ibm-imm-snmp
```

### SNMP

SNMP must be configured on the monitored host

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                         |
| :----------------------------------- | :---------------------------- |
| Host name                            | *Name of the host*            |
| Alias                                | *Host description*            |
| IP                                   | *Host IP Address*             |
| Monitored from                       | *Monitoring Poller to use*    |
| Host Multiple Templates              | HW-Server-IBM-IMM-SNMP-custom |
| *Relations \> Parent Hostgroups* tab |                               |

Click on the *Save* button.


