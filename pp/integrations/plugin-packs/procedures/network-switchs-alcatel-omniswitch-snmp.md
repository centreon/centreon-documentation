---
id: network-switchs-alcatel-omniswitch-snmp
title: Alcatel Omniswitch
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack **Alcatel Omniswitch** brings a host template:

* Net-Alcatel-OmniSwitch-SNMP-custom

It brings the following service templates:

| Service Alias   | Service Template                            | Service Description                     | Default |
|:----------------|:--------------------------------------------|:----------------------------------------|:--------|
| Cpu             | Net-Alcatel-Omniswitch-Cpu-SNMP             | Check CPU usage                         | X       |
| Flash-Memory    | Net-Alcatel-Omniswitch-Flash-Memory-SNMP    | Check Flash memory usage                | X       |
| Hardware        | Net-Alcatel-Omniswitch-Hardware-SNMP        | Check hardware state                    | X       |
| Interfaces      | Net-Alcatel-Omniswitch-Interfaces-SNMP      | Check interfaces                        |         |
| Memory          | Net-Alcatel-Omniswitch-Memory-SNMP          | Check memory usage                      | X       |
| Spanning-Tree   | Net-Alcatel-Omniswitch-SpanningTree-SNMP    | Check Spanning Tree state on interfaces |         |
| Virtual-Chassis | Net-Alcatel-Omniswitch-Virtual-Chassis-SNMP | Check virtual chassis                   |         |

### Discovery rules

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Rule Name                                  | Description                                                   |
|:-------------------------------------------|:--------------------------------------------------------------|
| Net-Alcatel-Omniswitch-SNMP-Interface-Name | Discover network interfaces and monitor bandwidth utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery#discovery-rules).

</TabItem>
</Tabs>

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

Could not retrieve metrics

</TabItem>
<TabItem value="Flash-Memory" label="Flash-Memory">

| Metric Name                | Unit  |
|:---------------------------|:------|
| *memory*#flash.usage.bytes | B     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

Could not retrieve metrics

</TabItem>
<TabItem value="Memory" label="Memory">

Could not retrieve metrics

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric Name                                               | Unit  |
|:--------------------------------------------------------- |:----- |
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |

</TabItem>
<TabItem value="Spanning-Tree" label="Spanning-Tree">

| Metric Name            | Unit  |
|:-----------------------|:------|
| *spanningtrees*#status |       |

</TabItem>
<TabItem value="Virtual-Chassis" label="Virtual-Chassis">

| Metric Name            | Unit  |
|:-----------------------|:------|
| chassis.detected.count |       |
| virtual chassis status |       |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Alcatel Omniswitch**
server. Please refer to the official documentation from Alcatel:
* [OmniSwitch](https://www.al-enterprise.com/en/search#q=omniswitch&t=all&sort=relevancy)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the package on every Centreon poller expected to monitor **Alcatel Omniswitch** resources:

```bash
yum install centreon-plugin-Network-Switchs-Alcatel-Omniswitch-Snmp
```

2. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Alcatel Omniswitch** Centreon Monitoring Connector.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the package on every Centreon poller expected to monitor **Alcatel Omniswitch** resources:

```bash
yum install centreon-plugin-Network-Switchs-Alcatel-Omniswitch-Snmp
```

2. Install the **Alcatel Omniswitch** Centreon Monitoring Connector RPM on the Centreon central server:

```bash
yum install centreon-pack-network-switchs-alcatel-omniswitch-snmp
```

3. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **Alcatel Omniswitch** Centreon Monitoring Connector.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address / DNS** fields according to your **Alcatel Omniswitch** equipment settings.
* Apply the **Net-Alcatel-OmniSwitch-SNMP-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters 
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Mandatory | Name             | Description                                              |
| :-------- | :--------------- | :------------------------------------------------------- |
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_alcatel_omniswitch_snmp.pl \
    --plugin=network::alcatel::omniswitch::snmp::plugin \
    --mode=interfaces \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --interface='' \
    --name \
    --warning-in-traffic='' \
    --critical-in-traffic='' \
    --warning-out-traffic='' \
    --critical-out-traffic='' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Traffic In : 321.02b/s (-) Traffic Out : 382.02b/s (-) | 'interface.traffic.in.bitspersecond'=9000b/s;;;0; 'interface.traffic.out.bitspersecond'=9000b/s;;;0; 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_alcatel_omniswitch_snmp.pl \
    --plugin=network::alcatel::omniswitch::snmp::plugin \
    --mode=interfaces \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_alcatel_omniswitch_snmp.pl \
    --plugin=network::alcatel::omniswitch::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.
