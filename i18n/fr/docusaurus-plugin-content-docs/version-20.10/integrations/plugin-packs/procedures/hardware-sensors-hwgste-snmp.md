---
id: hardware-sensors-hwgste-snmp
title: HWg-STE Sensor
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Sensors-Hwgste-Snmp
```

### SNMP

Configure SNMP on HWg-STE Hardware

Be sure to have with you the following information:

  - Read-Only SNMP community
  - IP Address of the monitoring server

## Centreon Configuration

### Create a new PDU Raritan host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | HW-Sensor-HWgSTE-SNMP      |

Click on the *Save* button.
