---
id: hardware-storage-ibm-fs900-snmp
title: IBM FlashSystem 900
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Ibm-Fs900-Snmp
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
| Host Multiple Templates | HW-Storage-IBM-FS900-SNMP-custom |

Click on the *Save* button.
