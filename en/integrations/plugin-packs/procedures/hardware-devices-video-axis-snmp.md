---
id: hardware-devices-video-axis-snmp
title: Axis Video
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.5 | `STABLE` | Jan  7 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Devices-Video-Axis-Snmp
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                        |
| :---------------------- | :--------------------------- |
| Host name               | *Name of the host*           |
| Alias                   | *Host description*           |
| IP                      | *Host IP Address*            |
| Monitored from          | *Monitoring Poller to use*   |
| Host Multiple Templates | HW-Devices-Video-Axis-custom |

Click on the *Save* button.

