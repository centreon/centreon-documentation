---
id: hardware-storage-hp-storeonce-ssh
title: HP StoreOnce SSH
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.3 | `STABLE` | Feb  6 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Hp-Storeonce-Ssh
```

### SSH

SSH key exchange mut be done between poller and monitored server.

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                              |
| :---------------------- | :--------------------------------- |
| Host name               | *Name of the host*                 |
| Alias                   | *Host description*                 |
| IP                      | *Host IP Address*                  |
| Monitored from          | *Monitoring Poller to use*         |
| Host Multiple Templates | HW-Storage-HP-Storeonce-SSH-custom |

Click on the *Save* button.


