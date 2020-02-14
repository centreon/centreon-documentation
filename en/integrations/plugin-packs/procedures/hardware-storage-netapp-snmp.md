---
id: hardware-storage-netapp-snmp
title: NetApp
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.14 | `STABLE` | Feb 25 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Netapp-Snmp
```

## SNMP

Connect to your NetApp server and configure SNMP.

## Centreon Configuration

### Create a new NetApp server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                         |
| :----------------------------------- | :---------------------------- |
| Host name                            | *Name of the host*            |
| Alias                                | *Host description*            |
| IP                                   | *Host IP Address*             |
| Monitored from                       | *Monitoring Poller to use*    |
| Host Multiple Templates              | HW-Storage-NetApp-SNMP-custom |

Click on the *Save* button.

### Notes

If your netapp storage is in 'c-mode', following services won't work:

  - Global-Status
  - Share-Calls
  - Cache-Age
  - Ndmpsessions

