---
id: hardware-ats-apc
title: APC ATS
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Ats-Apc-Snmp
```

## SNMP

Connect to your PDU Emerson and configure SNMP.

## Centreon Configuration

### Create a new PDU Raritan host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | HW-ATS-Apc-SNMP-custom     |

Click on the *Save* button.
