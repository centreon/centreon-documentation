---
id: hardware-pdu-raritan-snmp
title: Raritan PDU
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.10 | `STABLE` | Feb  6 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Pdu-Raritan-Snmp
```

## SNMP

Connect to your PDU raritan and configure SNMP.

## Centreon Configuration

### Create a new PDU Raritan host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | HW-Pdu-Raritan-SNMP-custom |

Click on the *Save* button.

