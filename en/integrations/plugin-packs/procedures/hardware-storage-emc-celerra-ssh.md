---
id: hardware-storage-emc-celerra-ssh
title: EMC Celerra
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Aug 10 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Emc-Celerra-Ssh
```

### SSH

SSH key exchange must be done between poller and monitored server (can also login and password with plink command).

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                             |
| :---------------------- | :-------------------------------- |
| Host name               | *Name of the host*                |
| Alias                   | *Host description*                |
| IP                      | *Host IP Address*                 |
| Monitored from          | *Monitoring Poller to use*        |
| Host Multiple Templates | HW-Storage-Emc-Celerra-SSH-custom |

Click on the *Save* button.

