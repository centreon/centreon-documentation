---
id: hardware-devices-abb-cms700-snmp
title: ABB CMS-700
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Oct  3 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Devices-Abb-Cms700-Snmp
```

# Centreon Configuration

## Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                            |
| :---------------------- | :------------------------------- |
| Host name               | *Name of the host*               |
| Alias                   | *Host description*               |
| IP                      | *Host IP Address*                |
| Monitored from          | *Monitoring Poller to use*       |
| Host Multiple Templates | HW-Device-Abb-Cms700-SNMP-custom |

Click on the *Save* button.

