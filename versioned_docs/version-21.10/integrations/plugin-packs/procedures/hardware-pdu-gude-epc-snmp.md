---
id: hardware-pdu-gude-epc-snmp
title: Gude EPC PDU SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack Gude Export Power Control collects metrics for:
* Power-channels
* Sp-power-channels

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Rule name                                  | Description                                          |
| :----------------------------------------- | :--------------------------------------------------- |
| HW-Pdu-Gude-Epc-SNMP-Sp-Power-Channel-Name | Discover single power channel port and monitor usage |

</TabItem>
</Tabs>

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Power-channels" label="Power-channels">

| Metric name                                                                    | Description                                    | Unit  |
| :----------------------------------------------------------------------------- | :--------------------------------------------- | :---- |
| pdu.power\_channels.active.count                                               | Number of power channels                       |       |
| status                                                                         | Status of the channel                          |       |
| ovp status                                                                     | Status of the built-in overvoltage protection  |       |
| ps status                                                                      | Status of the power supply                     |       |
| *power\_channel\_name*\#pdu.interface.power_channel.current.ampere             | Actual Current                                 | A     |
| *power\_channel\_name*\#pdu.interface.power_channel.energy.active.kilowatthour | Absolute active energy                         | kWh   |
| *power\_channel\_name*\#pdu.interface.power_channel.frequency.hertz            | Frequency                                      | Hz    |
| *power\_channel\_name*\#pdu.interface.power_channel.phase.angle.degree         | Phase angle between voltage and L line current |       |
| *power\_channel\_name*\#pdu.interface.power_channel.active.watt                | Active power                                   | W     |
| *power\_channel\_name*\#pdu.interface.power_channel.power.apparent.voltampere  | L line mean apparent power                     | VA    |
| *power\_channel\_name*\#pdu.interface.power_channel.power.factor.count         | Power factor of channel                        |       |
| *power\_channel\_name*\#pdu.interface.power_channel.power.reactive.voltampere  | L line mean reactive power                     | Var   |
| *power\_channel\_name*\#pdu.interface.power_channel.voltage.volt               | Actual voltage                                 | V     |

</TabItem>
<TabItem value="Sp-power-channels" label="Sp-power-channels">

| Metric name                                                                        | Description                                    | Unit  |
| :--------------------------------------------------------------------------------- | :--------------------------------------------- | :---- |
| pdu.singleport\_power\_channels.total.count                                        | Number of single power channel ports           |       |
| state                                                                              | Current state (on/off)                         |       |
| status                                                                             | Status of the channel                          |       |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.current.ampere             | Actual Current                                 | A     |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.energy.active.kilowatthour | Absolute active energy                         | kWh   |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.frequency.hertz            | Frequency                                      | Hz    |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.phase.angle.degree         | Phase angle between voltage and L line current |       |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.active.watt                | Active power                                   | W     |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.power.apparent.voltampere  | L line mean apparent power                     | VA    |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.power.factor.count         | Power factor of channel                        |       |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.power.reactive.voltampere  | L line mean reactive power                     | Var   |
| *sp\_power\_channel\_name*\#pdu.interface.power_channel.voltage.volt               | Actual voltage                                 | V     |

</TabItem>
</Tabs>

## Prerequisites

To monitor your Gude Export Power Control, the SNMP must be configured.
The Poller should be able to perform SNMP requests toward the Lenovo device over SNMP UDP/161 port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Pdu-Gude-Epc-Snmp
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Gude EPC SNMP* Pack

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Pdu-Gude-Epc-Snmp
```

2. On the Centreon Central server, install the Pack from the RPM:

```bash
yum install centreon-pack-hardware-pdu-gude-epc-snmp
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Gude EPC SNMP* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the application's configuration
* Apply the *HW-Pdu-Gude-Epc-SNMP-custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_pdu_gude_epc_snmp.pl \
    --plugin=hardware::pdu::gude::epc::snmp::plugin \
    --mode=power-channels \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='gude_ro' \
    --verbose
```

Expected command output is shown below:

```bash
OK: 2 active power channel(s) - All power channel interfaces are ok | 'pdu.power_channels.active.count'=2;;;0; 'Meter-A#pdu.interface.power_channel.current.ampere'=2.45A;;;0; 'Meter-A#pdu.interface.power_channel.energy.active.kilowatthour'=16784.21kWh;;;0; 'Meter-A#pdu.interface.power_channel.frequency.hertz'=50.00Hz;;;0; 'Meter-A#pdu.interface.power_channel.phase.angle.degree'=-189.00;;;0; 'Meter-A#pdu.interface.power_channel.active.watt'=523.00W;;;; 'Meter-A#pdu.interface.power_channel.power.apparent.voltampere'=558.00VA;;;; 'Meter-A#pdu.interface.power_channel.power.factor.count'=0.94;;;0; 'Meter-A#pdu.interface.power_channel.power.reactive.voltampere'=-193.00Var;;;; 'Meter-A#pdu.interface.power_channel.voltage.volt'=228.00V;;;0; 'Meter-B#pdu.interface.power_channel.current.ampere'=0.78A;;;0; 'Meter-B#pdu.interface.power_channel.energy.active.kilowatthour'=7993.61kWh;;;0; 'Meter-B#pdu.interface.power_channel.frequency.hertz'=50.00Hz;;;0; 'Meter-B#pdu.interface.power_channel.phase.angle.degree'=-254.00;;;0; 'Meter-B#pdu.interface.power_channel.active.watt'=151.00W;;;; 'Meter-B#pdu.interface.power_channel.power.apparent.voltampere'=178.00VA;;;; 'Meter-B#pdu.interface.power_channel.power.factor.count'=0.85;;;0; 'Meter-B#pdu.interface.power_channel.power.reactive.voltampere'=-91.00Var;;;; 'Meter-B#pdu.interface.power_channel.voltage.volt'=228.00V;;;0;
Power channel interface 'Meter-A' status: valid, ovp status: ok, power supply status: up, current: 2.45 A, absolute energy active: 16784.21 kWh, frequency: 50.00 Hz, phase angle: -189.00°, active power: 523.00 W, apparent power: 558.00 VA, power factor: 0.94, reactive power: -193.00 Var, voltage: 228.00 V
Power channel interface 'Meter-B' status: valid, ovp status: ok, power supply status: up, current: 0.78 A, absolute energy active: 7993.61 kWh, frequency: 50.00 Hz, phase angle: -254.00°, active power: 151.00 W, apparent power: 178.00 VA, power factor: 0.85, reactive power: -91.00 Var, voltage: 228.00 V
```

The command above monitors Gude power channels (```--plugin=hardware::pdu::gude::epc::snmp::plugin --mode=power-channels```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='power-channels'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_pdu_gude_epc_snmp.pl \
    --plugin=hardware::pdu::gude::epc::snmp::plugin \
    --mode=power-channels \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins#snmp-checks)

