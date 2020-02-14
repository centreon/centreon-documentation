---
id: hardware-storage-quantum-dxi-ssh
title: Quantum DXi Series
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Jan 10 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Quantum-Dxi-Ssh
```

### SSH

SSH key exchange mut be done between poller and monitored server.

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                             |
| :---------------------- | :-------------------------------- |
| Host name               | *Name of the host*                |
| Alias                   | *Host description*                |
| IP                      | *Host IP Address*                 |
| Monitored from          | *Monitoring Poller to use*        |
| Host Multiple Templates | HW-Storage-Quantum-Dxi-SSH-custom |

Click on the *Save* button.

