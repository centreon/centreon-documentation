---
id: hardware-pdu-eaton-snmp
title: Eaton PDU SNMP
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.2 | `STABLE` | Oct 16 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Pdu-Eaton-Snmp
```

## SNMP

Connect to your PDU Eaton and configure SNMP.

## Centreon Configuration

### Create a new PDU Eaton host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | HW-Pdu-Eaton-SNMP-custom   |

Click on the *Save* button.

