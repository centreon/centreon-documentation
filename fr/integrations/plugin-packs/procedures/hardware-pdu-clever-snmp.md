---
id: hardware-pdu-clever-snmp
title: Clever PDU
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.3 | `STABLE` | Jul 10 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Pdu-Clever-Snmp
```

## SNMP

Connect to your PDU Emerson and configure SNMP.

## Centreon Configuration

### Create a new PDU Raritan host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | HW-Pdu-Clever-SNMP-custom  |

Click on the *Save* button.

