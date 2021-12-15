---
id: hardware-storage-dell-me4-restapi
title: Dell ME4 Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack Dell ME4 collects metrics for:
* Controllers
* Hardware
* Interfaces
* Volumes

### Discovery rules

<Tabs groupId="operating-systems">
<TabItem value="Services" label="Services">

| Rule name                                              | Description                                 |
| :----------------------------------------------------- | :------------------------------------------ |
| HW-Storage-Dell-Me4-Restapi-Controller-Statistics-Name | Discover controllers and monitor statistics |
| HW-Storage-Dell-Me4-Restapi-Volume-Statistics-Name     | Discover volumes and monitor statistics     |

</TabItem>
</Tabs>

### Collected Metrics

<Tabs groupId="operating-systems">
<TabItem value="Controllerstatistics" label="Controllerstatistics">

| Metric name                                               | Description                                                                                                                   | Unit |
| :-------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------- | :--- |
| *controller\_id*\#controller.data.read.bytespersecond     | Amount of data read                                                                                                           | B/s  |
| *controller\_id*\#controller.data.written.bytespersecond  | Amount of data written                                                                                                        | B/s  |
| *controller\_id*\#controller.reads.persecond              | For the controller whose host ports had I/O activity, the number of read operations                                           |      |
| *controller\_id*\#controller.writes.persecond             | For the controller whose host ports had I/O activity, the number of write operations                                          |      |
| *controller\_id*\#controller.data.transfer.bytespersecond | The data transfer rate                                                                                                        | B/s  |
| *controller\_id*\#controller.iops.count                   | Input/output operations per second                                                                                            |      |
| *controller\_id*\#controller.commands.forwarded.count     | The current count of commands that are being forwarded or are queued to be forwarded to the partner controller for processing |      |
| *controller\_id*\#controller.cache.write.usage.percentage | Percentage of write cache in use                                                                                              | %    |
| *controller\_id*\#controller.cache.write.hits.persecond   | For the controller that owns the volume, the number of times the block written to is found in cache                           |      |
| *controller\_id*\#controller.cache.write.misses.persecond | For the controller that owns the volume, the number of times the block written to is not found in cache                       |      |
| *controller\_id*\#controller.cache.read.hits.persecond    | For the controller that owns the volume, the number of times the block to be read is found in cache                           |      |
| *controller\_id*\#controller.cache.read.misses.persecond  | For the controller that owns the volume, the number of times the block to be read is not found in cache                       |      |
| *controller\_id*\#controller.cpu.utilization.percentage   | Percentage of time the CPU is busy                                                                                            | %    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                                             | Description                                | Unit |
| :------------------------------------------------------ | :----------------------------------------- | :--- |
| controller status                                       | Status/health/redundancy of the controller |      |
| disk status                                             | Status/health/state of the disk            |      |
| *disk\_instance*\#hardware.disk.temperature.celsius     | Temperature of the disk                    | C    |
| fan status                                              | Status/health of the fan                   |      |
| *fan\_instance*\#hardware.fan.speed.rpm                 | Speed of the fan                           | rpm  |
| fru status                                              | Status of the FRU                          |      |
| psu status                                              | Status/health of the power supply          |      |
| sensor status                                           | Status of the sensor                       |      |
| *sensor\_instance*\#hardware.sensor.voltage.volt        | Voltage of the sensor                      | V    |
| *sensor\_instance*\#hardware.sensor.current.ampere      | Current of the sensor                      | A    |
| *sensor\_instance*\#hardware.sensor.temperature.celsius | temperature of the sensor                  | C    |
| *sensor\_instance*\#hardware.sensor.capacity.percentage | Charge capacity of the sensor              | %    |
| volume status                                           | Status of the volume                       |      |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                                           | Description                                                                                                                                                | Unit |
| :-------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------- | :--- |
| port status                                                           | port health status                                                                                                                                         |      |
| *port\_name*\#port.io.read.usage.iops                                 | Number of read operations                                                                                                                                  |      |
| *port\_name*\#port.io.write.usage.iops                                | Number of write operations                                                                                                                                 |      |
| *port\_name*\#port.traffic.read.usage.bitspersecond                   | Amount of data read                                                                                                                                        | b/s  |
| *port\_name*\#port.traffic.write.usage.bitspersecond                  | Amount of data written                                                                                                                                     | b/s  |
| *port\_name*~*interface\_name*\#port.interface.disparity.errors.count | The number of doublewords containing running disparity errors that have been received by the PHY, not including those received during Link Reset sequences |      |
| *port\_name*~*interface\_name*\#port.interface.lost.dwords.count      | The number of times the PHY has lost doubleword synchronization and restarted the Link Reset sequence                                                      |      |
| *port\_name*~*interface\_name*\#port.interface.invalid.dwords.count   | The number of invalid doublewords that have been received by the PHY, not including those received during Link Reset sequences                             |      |

</TabItem>
<TabItem value="Volumestatistics" label="Volumestatistics">

| Metric name                                         | Description                                                                                             | Unit |
| :-------------------------------------------------- | :------------------------------------------------------------------------------------------------------ | :--- |
| *volume\_name*\#volume.data.read.bytespersecond     | Amount of data read                                                                                     | B/s  |
| *volume\_name*\#volume.data.written.bytespersecond  | Amount of data written                                                                                  | B/s  |
| *volume\_name*\#volume.reads.persecond              | The number of read operations                                                                           |      |
| *volume\_name*\#volume.writes.persecond             | The number of write operations                                                                          |      |
| *volume\_name*\#volume.data.transfer.bytespersecond | The data transfer rate                                                                                  | B/s  |
| *volume\_name*\#volume.iops.ops                     | Input/output operations per second                                                                      |      |
| *volume\_name*\#volume.cache.write.usage.percentage | The percentage of cache used on behalf of this volume                                                   | %    |
| *volume\_name*\#volume.cache.write.hits.persecond   | For the controller that owns the volume, the number of times the block written to is found in cache     |      |
| *volume\_name*\#volume.cache.write.misses.persecond | For the controller that owns the volume, the number of times the block written to is not found in cache |      |
| *volume\_name*\#volume.cache.read.hits.persecond    | For the controller that owns the volume, the number of times the block to be read is found in cache     |      |
| *volume\_name*\#volume.cache.read.misses.persecond  | For the controller that owns the volume, the number of times the block to be read is not found in cache |      |

</TabItem>
</Tabs>

## Prerequisites

To control your Dell ME4, the Rest API must be configured.

E.g: https://www.dell.com/support/manuals/fr-fr/powervault-me4024/me4_series_cli_pub/using-a-script-to-access-the-cli

## Setup

<Tabs groupId="licence-systems">
<TabItem value="online" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Me4-Restapi
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Dell Me4 Rest API* Pack

</TabItem>
<TabItem value="offline" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Me4-Restapi
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-hardware-storage-dell-me4-restapi
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Dell Me4 Rest API* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *HW-Storage-Dell-Me4-Restapi-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 443)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIUSERNAME     | Api username                                                               |
| X         | APIPASSWORD     | Api password                                                               |
|           | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command (Parameters such as ```api-username``` or ```api-password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_dell_me4_restapi.pl \
--plugin=storage::dell::me4::restapi::plugin \
--mode=interfaces \
--hostname='10.30.2.79' \
--port='443' \
--proto='https' \
--api-username='myapiusername' \
--api-password='myapipassword' \
--filter-port-name='A0' \
--verbose
```

Expected command output is shown below:

```bash
OK: port 'A0' status: up [health: ok], read iops: 94.52, write iops: 161.11, read traffic: 1.29 Mb/s - All interfaces are ok | 'A0#port.io.read.usage.iops'=94.52iops;;;0; 'A0#port.io.write.usage.iops'=161.11iops;;;0; 'A0#port.traffic.read.usage.bitspersecond'=1287234b/s;;;0; 'A0~0#port.interface.disparity.errors.count'=0;;;0; 'A0~0#port.interface.lost.dwords.count'=0;;;0; 'A0~0#port.interface.invalid.dwords.count'=0;;;0; 'A0~1#port.interface.disparity.errors.count'=0;;;0; 'A0~1#port.interface.lost.dwords.count'=0;;;0; 'A0~1#port.interface.invalid.dwords.count'=0;;;0; 'A0~2#port.interface.disparity.errors.count'=0;;;0; 'A0~2#port.interface.lost.dwords.count'=0;;;0; 'A0~2#port.interface.invalid.dwords.count'=0;;;0; 'A0~3#port.interface.disparity.errors.count'=0;;;0; 'A0~3#port.interface.lost.dwords.count'=0;;;0; 'A0~3#port.interface.invalid.dwords.count'=0;;;0;
checking port 'A0'
status: up [health: ok], read iops: 94.52, write iops: 161.11, read traffic: 1.29 Mb/s
interface '0' disparity errors: 0, lost dwords: 0, invalid dwords: 0
interface '1' disparity errors: 0, lost dwords: 0, invalid dwords: 0
interface '2' disparity errors: 0, lost dwords: 0, invalid dwords: 0
interface '3' disparity errors: 0, lost dwords: 0, invalid dwords: 0
```

The command above monitors interfaces statistics  (```--mode=interfaces```).

It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```)
on the port 443 (```--port='443'```) using https (```--proto='https'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_dell_me4_restapi.pl \
--plugin=storage::dell::me4::restapi::plugin \
--mode=interfaces \
--help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins)

