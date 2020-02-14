---
id: hardware-storage-adic-tape-snmp
title: Adic Tape SNMP
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Aug  8 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Adic-Tape-Snmp
```

## SNMP

SNMP must be configured on the monitored host

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                            |
| :---------------------- | :------------------------------- |
| Host name               | *Name of the host*               |
| Alias                   | *Host description*               |
| IP                      | *Host IP Address*                |
| Monitored from          | *Monitoring Poller to use*       |
| Host Multiple Templates | HW-Storage-Adic-Tape-SNMP-custom |

Click on the *Save* button.

