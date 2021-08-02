---
id: hardware-devices-barco-cs-restapi
title: Barco ClickShare Rest API
---

## Plugin Pack Assets

### Monitored Objects

The Plugin Pack Barco ClickShare collects metrics for:
* Device

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Device-->

| Metric name                       | Description                               | Unit |
| :-------------------------------- | :---------------------------------------- | :--- |
| device status                     | Status of the device                      |      |
| cpu#hardware.temperature.celsius  | cpu sensor temperature                    | C    |
| pcie#hardware.temperature.celsius | pcie sensor temperature                   | C    |
| sio#hardware.temperature.celsius  | sio sensor temperature                    | C    |
| cpu#hardware.fan.speed.rpm        | cpu fan speed (supported since api v1.11) | rpm  |
| process status                    | Status of processes                       |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Barco ClickShare, the Rest API must be configured.

E.g: https://www.barco.com/en/support/knowledge-base/kb11350

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Devices-Barco-Cs-Restapi
```

2. On the Centreon Web interface in "Configuration > Plugin Packs > Manager", install the *Barco ClickShare Rest API* Plugin Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Devices-Barco-Cs-Restapi
```

2. On the Centreon Central server, install the Centreon Plugin Pack from the RPM:

```bash
yum install centreon-pack-hardware-devices-barco-cs-restapi
```

3. On the Centreon Web interface in "Configuration > Plugin Packs > Manager", install the *Barco ClickShare Rest API* Plugin Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *HW-Device-Barco-Cs-Restapi-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name                   | Description                                                                |
| :-------- | :--------------------- | :------------------------------------------------------------------------- |
| X         | BARCOCSAPIPORT         | Port used (Default: 4001)                                                  |
| X         | BARCOCSAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | BARCOCSAPIUSERNAME     | Api username                                                               |
| X         | BARCOCSAPIPASSWORD     | Api password                                                               |
|           | BARCOCSAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to test the Plugin and what are the main options for?

Once the Plugin installed, log into your Poller using the *centreon-engine* user account and test by running the following command
(Parameters such as ```api-username``` or ```api-password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_barco_cs_restapi.pl \
    --plugin=hardware::devices::barco::cs::restapi::plugin \
    --mode=device \
    --hostname='10.30.2.79' \
    --port='4001' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --warning-cpu-temperature='55' \
    --critical-cpu-temperature='60' \
    --verbose
```

Output example:
```
OK: device is ok | 'cpu#hardware.temperature.celsius'=52C;0:55;0:60;; 'pcie#hardware.temperature.celsius'=50C;0:55;0:60;;
checking device
    status: ok
    temperature cpu 52 C, pcie 50 C
    process 'Button Agent' status is running
    process 'ClickShare Server' status is running
    process 'Config Manager' status is running
    process 'DBus Daemon' status is running
    process 'DHCP Server' status is running
    process 'Device Daemon' status is running
    process 'Graphics Server' status is running
    process 'Job Scheduler' status is running
    process 'LED Control' status is running
    process 'Miracast Server' status is running
    process 'Process Monitor' status is running
    process 'System Logging' status is running
    process 'WebUI Server' status is running
    process 'Wifi Access Point Daemon' status is running
```

The command above monitors device (```--mode=device```).

It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```)
on the port 4001 (```--port='4001'```) using https (```--proto='https'```).

All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins/centreon_barco_cs_restapi.pl \
    --plugin=hardware::devices::barco::cs::restapi::plugin \
    --mode=device \
    --help
```

## Troubleshooting

### ```UNKNOWN: 500 Can't connect to 10.30.2.79:4001```

This error message means that the Centreon Plugin couldn't successfully connect to the Barco ClickShare API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. This can be done by using the ```--proxyurl='http://proxy.mycompany:8080'``` option in the command.

### ```UNKNOWN: 501 Protocol scheme 'connect' is not supported```

When using a proxy to connect to the Barco ClickShare API, this error message means that the Centreon Plugin library does not support
the proxy connection protocol.

In order to prevent this issue, use the *curl* HTTP backend by adding the following option to the command: ```--http-backend='curl'```.
