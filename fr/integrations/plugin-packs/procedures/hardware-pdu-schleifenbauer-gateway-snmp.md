---
id: hardware-pdu-schleifenbauer-gateway-snmp
title: Schleifenbauer Gateway SNMP
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jul  8 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Pdu-Schleifenbauwer-Gateway-Snmp
```

## SNMP

Connect to your Schleifenbauwer gateway and configure SNMP.

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                                      |
| :---------------------- | :----------------------------------------- |
| Host name               | *Name of the host*                         |
| Alias                   | *Host description*                         |
| IP                      | *Host IP Address*                          |
| Monitored from          | *Monitoring Poller to use*                 |
| Host Multiple Templates | HW-Pdu-Schleifenbauwer-Gateway-SNMP-custom |

Click on the *Save* button.


