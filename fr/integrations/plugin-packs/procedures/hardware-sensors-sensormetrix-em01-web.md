---
id: hardware-sensors-sensormetrix-em01-web
title: Sensormetrix
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Sensors-Sensormetrix-Em01-Web
```

### Configuration

The following plugin-pack monitors Sensormetrix Em01 Series. By default, the
host template checks: humidity, temperature and Illumination. You can also check
(it depends your Em01 model) :

  - flood: the host macro 'SENSORMETRIXURLPATHFLOOD' must be set. Read the
    constructor documentation to know the good URL ;
  - contact ;
  - voltage ;
  - thermistor temperature.

## Centreon Configuration

### Create a Sensormetrix Em01

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                                    |
| :----------------------------------- | :--------------------------------------- |
| Host name                            | *Name of the host*                       |
| Alias                                | *Host description*                       |
| IP                                   | *Host IP Address*                        |
| Monitored from                       | *Monitoring Poller to use*               |
| Host Multiple Templates              | *HW-Sensor-Sensormetrix-Em01-Web-custom* |

Click on the *Save* button.

