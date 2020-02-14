---
id: hardware-sensors-serverscheck-sensorgateway-snmp
title: SensorGateway
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Sensors-Serverscheck-Sensorgateway-Snmp
```

Be sure to have with you the following information:

  - Read-Only SNMP community
  - IP Address of the equipment

### Configure SNMP on your server

Follow constructor procedure for your equipment.

### SNMP Permissions

Read-Only access.

### Troubleshooting

Read [Troubleshooting SNMP](http://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp).

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                                            |
| :----------------------------------- | :----------------------------------------------- |
| Host name                            | *Name of the host*                               |
| Alias                                | *Host description*                               |
| IP                                   | *Host IP Address*                                |
| Monitored from                       | *Monitoring Poller to use*                       |
| Host Multiple Templates              | HW-Sensor-Serverscheck-Sensorgateway-SNMP-custom |

Click on the *Save* button.

