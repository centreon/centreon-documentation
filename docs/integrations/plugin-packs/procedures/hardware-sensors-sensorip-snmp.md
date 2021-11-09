---
id: hardware-sensors-sensorip-snmp
title: Sensor IP
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Sensors-Sensorip-Snmp
```

### SNMP

Be sure to have with you the following information:

  - Read-Only SNMP community
  - IP Address of the monitoring server

### Troubleshooting

Read [Troubleshooting
SNMP](http://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp)

## Centreon Configuration

### Create a new PDU Raritan host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                          |
| :----------------------------------- | :----------------------------- |
| Host name                            | *Name of the host*             |
| Alias                                | *Host description*             |
| IP                                   | *Host IP Address*              |
| Monitored from                       | *Monitoring Poller to use*     |
| Host Multiple Templates              | HW-Sensor-Sensorip-SNMP-custom |

Click on the *Save* button.
