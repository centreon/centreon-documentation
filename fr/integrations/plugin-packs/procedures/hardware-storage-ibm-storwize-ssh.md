---
id: hardware-storage-ibm-storwize-ssh
title: IBM Storwize
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.3 | `STABLE` | Nov 21 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Ibm-Storwize-Ssh
```

### SSH

You need to generate a public ssh-key for centreon-engine user on the poller
which monitor this device. Then follow the IBM documentation to push this key on
the storewize

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                              |
| :---------------------- | :--------------------------------- |
| Host name               | *Name of the host*                 |
| Alias                   | *Host description*                 |
| IP                      | *Host IP Address*                  |
| Monitored from          | *Monitoring Poller to use*         |
| Host Multiple Templates | HW-Storage-IBM-Storwize-SSH-custom |

Click on the *Save* button.

