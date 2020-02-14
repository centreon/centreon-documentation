---
id: hardware-sensors-comet-p8000-snmp
title: Geist p8000 sensor SNMP
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jan 29 2020 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Sensors-Comet-P8000-Snmp
```

### SNMP

Be sure to have with you the following information:

  - Read-Only SNMP community
  - IP Address of the monitoring server

### Troubleshooting

Read [Troubleshooting
SNMP](http://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp)

## Centreon Configuration

### Create a new Geist Sensor host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                             |
| :---------------------- | :-------------------------------- |
| Host name               | *Name of the host*                |
| Alias                   | *Host description*                |
| IP                      | *Host IP Address*                 |
| Monitored from          | *Monitoring Poller to use*        |
| Host Multiple Templates | HW-Sensor-Comet-P8000-SNMP-custom |

Click on the *Save* button.

