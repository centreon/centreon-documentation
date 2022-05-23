---
id: hardware-servers-hp-snmp
title: HP Proliant
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Plugin Pack **HP Proliant** brings a host template:

* HW-Server-Hp-Server-SNMP-custom

It brings the following service templates:

| Service Alias        | Service Template                       | Service Description            | Default |
|:---------------------|:---------------------------------------|:-------------------------------|:--------|
| Hardware-Cpu         | HW-Hp-Server-Hardware-Cpu-SNMP         | Check cpu hardware             |         |
| Hardware-Fan         | HW-Hp-Server-Hardware-Fan-SNMP         | Check fan hardware             |         |
| Hardware-Global      | HW-Hp-Server-Hardware-Global-SNMP      | Check all hardware             | X       |
| Hardware-Network     | HW-Hp-Server-Hardware-Network-SNMP     | Check network hardware         |         |
| Hardware-Pc          | HW-Hp-Server-Hardware-Pc-SNMP          | Check power converter hardware |         |
| Hardware-Psu         | HW-Hp-Server-Hardware-Psu-SNMP         | Check power supply hardware    |         |
| Hardware-Storage     | HW-Hp-Server-Hardware-Storage-SNMP     | Check storage hardware         |         |
| Hardware-Temperature | HW-Hp-Server-Hardware-Temperature-SNMP | Check hardware temperatures    |         |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Hardware-Cpu" label="Hardware-Cpu">

| Metric name           | Description            | Unit  |
| :-------------------- | :--------------------- | :---- |
| status                | CPU status             |       |

</TabItem>
<TabItem value="Hardware-Fan" label="Hardware-Fan">

| Metric name            | Description            | Unit  |
| :--------------------- | :--------------------- | :---- |
| status                 | Fan status             |       |
| hardware.fan.speed.rpm | Fan speed              | Rpm   |


</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Metric name           | Description               | Unit  |
| :-------------------- | :------------------------ | :---- |
| status                | Components global status  |       |

</TabItem>
<TabItem value="Hardware-Network" label="Hardware-Network">

| Metric name           | Description            | Unit  |
| :-------------------- | :--------------------- | :---- |
| status                | NIC status             |       |

</TabItem>
<TabItem value="Hardware-Pc" label="Hardware-Pc">

| Metric name           | Description            | Unit  |
| :-------------------- | :--------------------- | :---- |
| status                | Power Converter status |       |


</TabItem>
<TabItem value="Hardware-Psu" label="Hardware-Psu">

| Metric name                       | Description                     | Unit  |
| :-------------------------------- | :------------------------------ | :---- |
| status                            | Power supply status             |       |
| hardware.powersupply.power.watt   | Power supply watt capacity used | W     |
| hardware.powersupply.voltage.volt | Power supply voltage            | V     |

</TabItem>
<TabItem value="Hardware-Storage" label="Hardware-Storage">

| Metric name           | Description            | Unit  |
| :-------------------- | :--------------------- | :---- |
| status                | Storage status         |       |

</TabItem>
<TabItem value="Hardware-Temperature" label="Hardware-Temperature">

| Metric name                  | Description             | Unit  |
| :--------------------------- | :---------------------- | :---- |
| status                       | Temperature status      |       |
| hardware.temperature.celsius | Temperature  in celsius | C     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **HP Proliant**
server. 

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## HP snmp agent install on Centreon poller

> Warning: The following procedure is valid only for Centos 7, required HP packages health and snmp-agents are in version 10.50 and only available for Centos 7.

> Note that the poller should be running on HP Proliant hardware for the plugin to be working.

<Tabs groupId="sync">
<TabItem value="Centos 7" label="Centos 7">

Install on Centreon poller HP health and snmp-agents packages:

```bash
yum install https://downloads.linux.hpe.com/SDR/repo/mcp/centos/7.0/x86_64/10.50/hp-health-10.50-1826.40.rhel7.x86_64.rpm
yum install https://downloads.linux.hpe.com/SDR/repo/mcp/centos/7.0/x86_64/10.50/hp-snmp-agents-10.50-2926.49.rhel7.x86_64.rpm
```

Add the following line in */etc/snmp/snmpd.conf*:

```bash
dlmod cmaX /usr/lib64/libcmaX64.so
```

Restart the following services: 

```bash
systemctl restart hp-snmp-agents
systemctl restart snmpd
```

</TabItem>
</Tabs>


## Plugin Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **HP Proliant** resources:

```bash
yum install centreon-plugin-Hardware-Servers-Hp-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **HP Proliant** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **HP Proliant** resources:

```bash
yum install centreon-plugin-Hardware-Servers-Hp-Snmp
```

2. Install the **HP Proliant** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-hardware-servers-hp-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **HP Proliant** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **HP Proliant** server settings.
* Apply the **HW-Server-Hp-Server-SNMP-custom** template to the host.

If you are using SNMP Version 3, use the **SNMPEXTRAOPTIONS** macro to configure
your own SNMPv3 credentials combo.

| Mandatory   | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo  |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_hp_proliant.pl \
    --plugin=hardware::server::hp::proliant::snmp::plugin \
    --mode=hardware \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --component='.*' \
    --verbose \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: All 18 components are ok [1/1 cpus, 1/1 da accelerator boards, 1/1 da controllers, 3/3 da logical drives, 12/12 da physical drives]. | 'hardware.cpu.count'=1;;;; 'hardware.daacc.count'=1;;;; 'hardware.dactl.count'=1;;;; 'hardware.daldrive.count'=3;;;; 'hardware.dapdrive.count'=12;;;;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_hp_proliant.pl \
    --plugin=hardware::server::hp::proliant::snmp::plugin \
    --mode=hardware \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_hp_proliant.pl \
    --plugin=hardware::server::hp::proliant::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.