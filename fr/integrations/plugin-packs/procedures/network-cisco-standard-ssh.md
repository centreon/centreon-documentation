---
id: network-cisco-standard-ssh
title: Cisco Standard SSH
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jul 15 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Cisco-Standard-Ssh
```

### SSH

SSH key exchange mut be done between poller and monitored server.

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                         |
| :---------------------- | :---------------------------- |
| Host name               | *Name of the host*            |
| Alias                   | *Host description*            |
| IP                      | *Host IP Address*             |
| Monitored from          | *Monitoring Poller to use*    |
| Host Multiple Templates | Net-Cisco-Standard-SSH-custom |

Click on the *Save* button.

