---
id: hardware-servers-supermicro-bmc-snmp
title: Supermicro BMC SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack Supermicro collects metrics for:
* Sensors

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Sensors" label="Sensors">

| Metric name                                   | Description          | Unit  |
| :-------------------------------------------- | :------------------- | :---- |
| sensor status                                 | Status of the sensor |       |
| *sensor\_name*\#hardware.sensor.reading.count | Sensor reading value |       |

</TabItem>
</Tabs>

## Prerequisites

To monitor your Supermicro, the Baseboard Management Controller must be configured (eg: https://www.supermicro.com/en/solutions/management-software/bmc-resources)
The Poller should be able to perform SNMP requests toward the Lenovo device over SNMP UDP/161 port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Servers-Supermicro-Bmc-Snmp
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Supermicro BMC SNMP* Pack

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Servers-Supermicro-Bmc-Snmp
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-hardware-servers-supermicro-bmc-snmp
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Supermicro BMC SNMP* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *HW-Server-Supermicro-Bmc-SNMP-custom* Host Template

> When using SNMP v3, set extra SNMP parameters in the SNMPEXTRAOPTIONS macro. <br/>
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_supermicro_bmc_snmp.pl
    --plugin=hardware::server::supermicro::bmc::snmp::plugin
    --mode=sensors
    --hostname=10.30.2.114
    --snmp-version='2c'
    --snmp-community='supermicro_ro'
    --verbose
```

Expected command output is shown below:

```bash
OK: All 60 components are ok [60/60 sensors]. | 'CPU1 Temp#hardware.sensor.reading.count'=61;10:96;5:101;; 'CPU2 Temp#hardware.sensor.reading.count'=44;10:96;5:101;; 'PCH Temp#hardware.sensor.reading.count'=43;10:85;5:90;; 'System Temp#hardware.sensor.reading.count'=29;10:80;5:85;; 'Peripheral Temp#hardware.sensor.reading.count'=33;10:80;5:85;; 'VRMCpu1 Temp#hardware.sensor.reading.count'=39;10:95;5:100;; 'VRMCpu2 Temp#hardware.sensor.reading.count'=34;10:95;5:100;; 'VRMP1ABC Temp#hardware.sensor.reading.count'=36;10:95;5:100;; 'VRMP1DEF Temp#hardware.sensor.reading.count'=37;10:95;5:100;; 'VRMP2ABC Temp#hardware.sensor.reading.count'=37;10:95;5:100;; 'VRMP2DEF Temp#hardware.sensor.reading.count'=36;10:95;5:100;; 'FAN1#hardware.sensor.reading.count'=4700;700:25300;500:25400;; 'FAN2#hardware.sensor.reading.count'=4600;700:25300;500:25400;; 'FAN7#hardware.sensor.reading.count'=4700;700:25300;500:25400;; 'FAN8#hardware.sensor.reading.count'=4700;700:25300;500:25400;; 'P1-DIMMA1 Temp#hardware.sensor.reading.count'=52;10:80;5:85;; 'P1-DIMMA2 Temp#hardware.sensor.reading.count'=45;10:80;5:85;; 'P1-DIMMB1 Temp#hardware.sensor.reading.count'=58;10:80;5:85;; 'P1-DIMMB2 Temp#hardware.sensor.reading.count'=55;10:80;5:85;; 'P1-DIMMC1 Temp#hardware.sensor.reading.count'=51;10:80;5:85;; 'P1-DIMMC2 Temp#hardware.sensor.reading.count'=59;10:80;5:85;; 'P1-DIMMD1 Temp#hardware.sensor.reading.count'=49;10:80;5:85;; 'P1-DIMMD2 Temp#hardware.sensor.reading.count'=46;10:80;5:85;; 'P1-DIMME1 Temp#hardware.sensor.reading.count'=40;10:80;5:85;; 'P1-DIMME2 Temp#hardware.sensor.reading.count'=44;10:80;5:85;; 'P1-DIMMF1 Temp#hardware.sensor.reading.count'=40;10:80;5:85;; 'P1-DIMMF2 Temp#hardware.sensor.reading.count'=39;10:80;5:85;; 'P2-DIMMA1 Temp#hardware.sensor.reading.count'=45;10:80;5:85;; 'P2-DIMMA2 Temp#hardware.sensor.reading.count'=41;10:80;5:85;; 'P2-DIMMB1 Temp#hardware.sensor.reading.count'=44;10:80;5:85;; 'P2-DIMMB2 Temp#hardware.sensor.reading.count'=45;10:80;5:85;; 'P2-DIMMC1 Temp#hardware.sensor.reading.count'=43;10:80;5:85;; 'P2-DIMMC2 Temp#hardware.sensor.reading.count'=43;10:80;5:85;; 'P2-DIMMD1 Temp#hardware.sensor.reading.count'=48;10:80;5:85;; 'P2-DIMMD2 Temp#hardware.sensor.reading.count'=42;10:80;5:85;; 'P2-DIMME1 Temp#hardware.sensor.reading.count'=49;10:80;5:85;; 'P2-DIMME2 Temp#hardware.sensor.reading.count'=51;10:80;5:85;; 'P2-DIMMF1 Temp#hardware.sensor.reading.count'=38;10:80;5:85;; 'P2-DIMMF2 Temp#hardware.sensor.reading.count'=44;10:80;5:85;; '12V#hardware.sensor.reading.count'=12.366;10.780:12.915;10.536:13.281;; '5VCC#hardware.sensor.reading.count'=5.030;4.520:5.600;4.280:5.720;; '3.3VCC#hardware.sensor.reading.count'=3.401;2.976:3.707;2.823:3.775;; 'VBAT#hardware.sensor.reading.count'=4;;;; 'Vcpu1#hardware.sensor.reading.count'=1.800;1.395:2.097;1.260:2.304;; 'Vcpu2#hardware.sensor.reading.count'=1.800;1.395:2.097;1.260:2.304;; 'VDimmP1ABC#hardware.sensor.reading.count'=1.200;1.086:1.350;1.026:1.374;; 'VDimmP1DEF#hardware.sensor.reading.count'=1.194;1.086:1.350;1.026:1.374;; 'VDimmP2ABC#hardware.sensor.reading.count'=1.200;1.086:1.350;1.026:1.374;; 'VDimmP2DEF#hardware.sensor.reading.count'=1.200;1.086:1.350;1.026:1.374;; '12VSB#hardware.sensor.reading.count'=12.325;10.765:12.910;10.505:13.300;; '3.3VSB#hardware.sensor.reading.count'=3.443;2.979:3.699;2.819:3.763;; 'P1V8_PCH#hardware.sensor.reading.count'=1.737;1.629:2.025;1.539:2.061;; 'PVNN_PCH#hardware.sensor.reading.count'=1.006;0.904:1.120;0.856:1.144;; 'P1V05_PCH#hardware.sensor.reading.count'=1.050;0.948:1.176;0.900:1.200;; 'PS1 Status#hardware.sensor.reading.count'=1;;;; 'PS2 Status#hardware.sensor.reading.count'=1;;;; 'NVMe_SSD Temp#hardware.sensor.reading.count'=33;10:65;5:70;; 'AOC_SAS Temp#hardware.sensor.reading.count'=68;10:100;5:105;; 'HDD Temp#hardware.sensor.reading.count'=31;10:50;5:55;; 'HDD Status#hardware.sensor.reading.count'=1;;;; 'hardware.sensor.count'=60;;;;
Checking sensors
sensor 'CPU1 Temp' reading is '61' [instance: 1#CPU1 Temp]
sensor 'CPU2 Temp' reading is '44' [instance: 2#CPU2 Temp]
sensor 'PCH Temp' reading is '43' [instance: 3#PCH Temp]
sensor 'System Temp' reading is '29' [instance: 4#System Temp]
sensor 'Peripheral Temp' reading is '33' [instance: 5#Peripheral Temp]
sensor 'VRMCpu1 Temp' reading is '39' [instance: 8#VRMCpu1 Temp]
sensor 'VRMCpu2 Temp' reading is '34' [instance: 9#VRMCpu2 Temp]
sensor 'VRMP1ABC Temp' reading is '36' [instance: 10#VRMP1ABC Temp]
sensor 'VRMP1DEF Temp' reading is '37' [instance: 11#VRMP1DEF Temp]
sensor 'VRMP2ABC Temp' reading is '37' [instance: 12#VRMP2ABC Temp]
sensor 'VRMP2DEF Temp' reading is '36' [instance: 13#VRMP2DEF Temp]
sensor 'FAN1' reading is '4700' [instance: 14#FAN1]
sensor 'FAN2' reading is '4600' [instance: 15#FAN2]
sensor 'FAN7' reading is '4700' [instance: 20#FAN7]
sensor 'FAN8' reading is '4700' [instance: 21#FAN8]
sensor 'P1-DIMMA1 Temp' reading is '52' [instance: 23#P1-DIMMA1 Temp]
sensor 'P1-DIMMA2 Temp' reading is '45' [instance: 24#P1-DIMMA2 Temp]
sensor 'P1-DIMMB1 Temp' reading is '58' [instance: 25#P1-DIMMB1 Temp]
sensor 'P1-DIMMB2 Temp' reading is '55' [instance: 26#P1-DIMMB2 Temp]
sensor 'P1-DIMMC1 Temp' reading is '51' [instance: 27#P1-DIMMC1 Temp]
sensor 'P1-DIMMC2 Temp' reading is '59' [instance: 28#P1-DIMMC2 Temp]
sensor 'P1-DIMMD1 Temp' reading is '49' [instance: 29#P1-DIMMD1 Temp]
sensor 'P1-DIMMD2 Temp' reading is '46' [instance: 30#P1-DIMMD2 Temp]
sensor 'P1-DIMME1 Temp' reading is '40' [instance: 31#P1-DIMME1 Temp]
sensor 'P1-DIMME2 Temp' reading is '44' [instance: 32#P1-DIMME2 Temp]
sensor 'P1-DIMMF1 Temp' reading is '40' [instance: 33#P1-DIMMF1 Temp]
sensor 'P1-DIMMF2 Temp' reading is '39' [instance: 34#P1-DIMMF2 Temp]
sensor 'P2-DIMMA1 Temp' reading is '45' [instance: 35#P2-DIMMA1 Temp]
sensor 'P2-DIMMA2 Temp' reading is '41' [instance: 36#P2-DIMMA2 Temp]
sensor 'P2-DIMMB1 Temp' reading is '44' [instance: 37#P2-DIMMB1 Temp]
sensor 'P2-DIMMB2 Temp' reading is '45' [instance: 38#P2-DIMMB2 Temp]
sensor 'P2-DIMMC1 Temp' reading is '43' [instance: 39#P2-DIMMC1 Temp]
sensor 'P2-DIMMC2 Temp' reading is '43' [instance: 40#P2-DIMMC2 Temp]
sensor 'P2-DIMMD1 Temp' reading is '48' [instance: 41#P2-DIMMD1 Temp]
sensor 'P2-DIMMD2 Temp' reading is '42' [instance: 42#P2-DIMMD2 Temp]
sensor 'P2-DIMME1 Temp' reading is '49' [instance: 43#P2-DIMME1 Temp]
sensor 'P2-DIMME2 Temp' reading is '51' [instance: 44#P2-DIMME2 Temp]
sensor 'P2-DIMMF1 Temp' reading is '38' [instance: 45#P2-DIMMF1 Temp]
sensor 'P2-DIMMF2 Temp' reading is '44' [instance: 46#P2-DIMMF2 Temp]
sensor '12V' reading is '12.366' [instance: 47#12V]
sensor '5VCC' reading is '5.030' [instance: 48#5VCC]
sensor '3.3VCC' reading is '3.401' [instance: 49#3.3VCC]
sensor 'VBAT' reading is '4' [instance: 50#VBAT]
sensor 'Vcpu1' reading is '1.800' [instance: 51#Vcpu1]
sensor 'Vcpu2' reading is '1.800' [instance: 52#Vcpu2]
sensor 'VDimmP1ABC' reading is '1.200' [instance: 53#VDimmP1ABC]
sensor 'VDimmP1DEF' reading is '1.194' [instance: 54#VDimmP1DEF]
sensor 'VDimmP2ABC' reading is '1.200' [instance: 55#VDimmP2ABC]
sensor 'VDimmP2DEF' reading is '1.200' [instance: 56#VDimmP2DEF]
sensor '12VSB' reading is '12.325' [instance: 57#12VSB]
sensor '3.3VSB' reading is '3.443' [instance: 58#3.3VSB]
sensor 'P1V8_PCH' reading is '1.737' [instance: 59#P1V8_PCH]
sensor 'PVNN_PCH' reading is '1.006' [instance: 60#PVNN_PCH]
sensor 'P1V05_PCH' reading is '1.050' [instance: 61#P1V05_PCH]
sensor 'PS1 Status' reading is '1' [instance: 63#PS1 Status]
sensor 'PS2 Status' reading is '1' [instance: 64#PS2 Status]
sensor 'NVMe_SSD Temp' reading is '33' [instance: 65#NVMe_SSD Temp]
sensor 'AOC_SAS Temp' reading is '68' [instance: 66#AOC_SAS Temp]
sensor 'HDD Temp' reading is '31' [instance: 67#HDD Temp]
sensor 'HDD Status' reading is '1' [instance: 68#HDD Status]
```

The command above monitors Supermicro hardware (```--plugin=hardware::server::supermicro::bmc::snmp::plugin --mode=sensors```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='supermicro_ro'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_supermicro_bmc_snmp.pl
    --plugin=hardware::server::supermicro::bmc::snmp::plugin
    --mode=sensors
    --help
```

## Troubleshooting

[Troubleshooting plugins](../getting-started/how-to-guides/troubleshooting-plugins.md)

