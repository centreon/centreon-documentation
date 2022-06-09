---
id: network-cambium-epmp-snmp
title: Cambium ePMP SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Cambium ePMP SNMP** brings a host template:

* Net-Cambium-Epmp-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template                 | Service Description                                  | Default | Discovery |
|:--------------|:---------------------------------|:-----------------------------------------------------|:--------|:----------|
| Antenna       | Net-Cambium-Epmp-Antenna-SNMP    | Check antenna gain in dBi                            | X       |           |
| Cpu           | Net-Cambium-Epmp-Cpu-SNMP        | Check cpu hardware                                   | X       |           |
| Interfaces    | Net-Cambium-Epmp-Interfaces-SNMP | Check network interfaces                             | X       | X         |
| License       | Net-Cambium-Epmp-License-SNMP    | Check license state                                  | X       |           |
| Uptime        | Net-Cambium-Epmp-Uptime-SNMP     | Time since the device has been working and available | X       |           |

### Discovery rules

| Rule Name                          | Description                                                   |
|:-----------------------------------|:--------------------------------------------------------------|
| Net-Cambium-Epmp-SNMP-Traffic-Name | Discover and dynamically monitor network interfaces           |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Antenna" label="Antenna">

| Metric Name      | Unit  |
|:-----------------|:------|
| antenna.gain.dBi | dBi   |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric Name                       | Unit  |
|:----------------------------------|:------|
| system.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric Name                              | Unit                                                                         |
| :--------------------------------------- | :--------------------------------------------------------------------------- |
| status                                   |                                                                              |
| interface.traffic.in.bitspersecond       | bps                                                                          |
| interface.traffic.out.bitspersecond      | bps                                                                          |
| interface.packets.in.error.percentage    | %                                                                            |
| interface.packets.in.discard.percentage  | %                                                                            |
| interface.packets.out.error.percentage   | %                                                                            |
| interface.packets.out.discard.percentage | %                                                                            |


</TabItem>
<TabItem value="License" label="License">

| Metric Name | Unit  |
|:------------|:------|
| status      |       |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name                 | Unit   |
| :-------------------------- | :----- |
| system.uptime               | s      |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Cambium ePMP SNMP**
server: 
* https://community.cambiumnetworks.com/t/epmp-configuring-ap-system-simple-network-management-protocol-snmp/59028

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Cambium ePMP SNMP** resources:

```bash
yum install centreon-plugin-Network-Cambium-Epmp-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Cambium ePMP SNMP** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Cambium ePMP SNMP** resources:

```bash
yum install centreon-plugin-Network-Cambium-Epmp-Snmp
```

2. Install the **Cambium ePMP SNMP** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-network-cambium-epmp-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Cambium ePMP SNMP** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Cambium ePMP SNMP** server settings.
* Apply the **Net-Cambium-Epmp-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins//centreon_cambium_epmp.pl \
    --plugin=network::cambium::epmp::snmp::plugin \
    --mode=cpu \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-cpu='' \
    --critical-cpu='' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: CPU usage: 9%  | 'system.cpu.utilization.percentage'=9%;;;0;100 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_cambium_epmp.pl \
    --plugin=network::cambium::epmp::snmp::plugin \
    --mode=cpu \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_cambium_epmp.pl \
    --plugin=network::cambium::epmp::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.