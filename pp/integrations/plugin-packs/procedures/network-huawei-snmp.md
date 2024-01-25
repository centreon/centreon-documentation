---
id: network-huawei-snmp
title: Huawei
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **Huawei** brings a host template:

* Net-Huawei-SNMP-custom

It brings the following service templates:

| Service Alias | Service Template           | Service Description                         | Default | Discovery |
|:--------------|:---------------------------|:--------------------------------------------|:--------|:----------|
| Cpu           | Net-Huawei-Cpu-SNMP        | Check the rate of the utilization of CPU    | X       |           |
| Interfaces    | Net-Huawei-Interfaces-SNMP | Check interfaces                            |         | X         |
| Memory        | Net-Huawei-Memory-SNMP     | Check the rate of the utilization of memory | X       |           |
| Uptime        | Net-Huawei-Uptime-SNMP     | Check uptime                                | X       |           |

### Discovery rules

| Rule Name                          | Description                                                           |
|:-----------------------------------|:----------------------------------------------------------------------|
| Net-Huawei-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |
| Net-Huawei-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization         |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric Name | Unit  |
|:------------|:------|
| *cpu*#usage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                               | Description                                             | Unit |
|:--------------------------------------------------------- |:------------------------------------------------------- |:---- |
| status                                                    | Status of the interface                                 |      |
| *interface_name*#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface            | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface            | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | Incoming errored packets going through the interface    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface  | %    |
| *interface_name*#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface    | %    |
| *interface_name*#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface  | %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name    | Unit  |
|:---------------|:------|
| *memory*#usage |   B   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric Name | Unit  |
|:------------|:------|
| uptime      |  s    |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Huawei**
server. Please refer to the official documentation from Huawei:
* [Configuring a switch to communicate with an NMS](https://support.huawei.com/enterprise/en/doc/EDOC1000141939/4dc2df25/example-for-configuring-a-switch-to-communicate-with-an-nms-using-snmpv2c)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the package on every Centreon poller expected to monitor **Huawei** resources:

```bash
yum install centreon-plugin-Network-Huawei-Snmp
```

2. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Huawei** Centreon Monitoring Connector.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the package on every Centreon poller expected to monitor **Huawei** resources:

```bash
yum install centreon-plugin-Network-Huawei-Snmp
```

2. Install the **Huawei** Centreon Monitoring Connector RPM on the Centreon central server:

```bash
yum install centreon-pack-network-huawei-snmp
```

3. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Huawei** Centreon Monitoring Connector.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Huawei** server settings.
* Apply the **Net-Huawei-SNMP-custom** template to the host.

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters 
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory   | Macro            | Description         |
|:------------|:-----------------|:--------------------|
|             | SNMPEXTRAOPTIONS | --maxrepetitions=20 |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_huawei_snmp.pl \
    --plugin=network::huawei::snmp::plugin \
    --mode=uptime \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --maxrepetitions=20 \
    --warning-uptime='' \
    --critical-uptime='' \
    --check-overload\
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: System uptime is: 137d 20h 37m 57s | 'uptime'=11911077s;;;0;
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_huawei_snmp.pl \
    --plugin=network::huawei::snmp::plugin \
    --mode=uptime \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_huawei_snmp.pl \
    --plugin=network::huawei::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.