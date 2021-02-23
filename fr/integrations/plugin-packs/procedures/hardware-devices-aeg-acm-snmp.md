---
id: hardware-devices-aeg-acm-snmp
title: AEG ACM
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Devices-Aeg-Acm-Snmp
```

# Centreon Configuration

## Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                         |
| :---------------------- | :---------------------------- |
| Host name               | *Name of the host*            |
| Alias                   | *Host description*            |
| IP                      | *Host IP Address*             |
| Monitored from          | *Monitoring Poller to use*    |
| Host Multiple Templates | HW-Device-Aeg-Acm-SNMP-custom |

Click on the *Save* button.
