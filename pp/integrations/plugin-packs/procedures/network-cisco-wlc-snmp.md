---
id: network-cisco-wlc-snmp
title: Cisco WLC
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Cisco WLC** brings a host template:

* Net-Cisco-Wlc-SNMP-custom

It brings the following service templates:

| Service Alias                  | Service Template                                  | Service Description                              | Default | Discovery |
|:-------------------------------|:--------------------------------------------------|:-------------------------------------------------|:--------|:----------|
| Ap-Channel-Interference-Global | Net-Cisco-Wlc-Ap-Channel-Interference-Global-SNMP | Check channel interferences of all access points |         |           |
| Ap-Channel-Noise-Global        | Net-Cisco-Wlc-Ap-Channel-Noise-Global-SNMP        | Check channel noises of all access points        |         |           |
| Ap-Status-Global               | Net-Cisco-Wlc-Ap-Status-Global-SNMP               | Check status of all access points                | X       |           |
| Ap-Users                       | Net-Cisco-Wlc-Ap-Users-SNMP                       | Check total users of all access points           |         |           |
| Cpu                            | Net-Cisco-Wlc-Cpu-SNMP                            | Check CPU usage                                  | X       |           |
| Hardware-Global                | Net-Cisco-Wlc-Hardware-Global-SNMP                | Check all hardware                               | X       |           |
| Memory                         | Net-Cisco-Wlc-Memory-SNMP                         | Check the rate of the utilization of memory      | X       |           |
| Traffic-Generic-Id             | Net-Cisco-Wlc-Traffic-Generic-Id-SNMP             | Check traffic of an network interface            |         |           |
| Traffic-Generic-Name           | Net-Cisco-Wlc-Traffic-Generic-Name-SNMP           | Check traffic of an network interface            |         |           |
| Traffic-Global                 | Net-Cisco-Wlc-Traffic-Global-SNMP                 | Check traffic of multiple network interfaces     |         | X         |

### Discovery rules

| Rule Name                       | Description                                                   |
|:--------------------------------|:--------------------------------------------------------------|
| Net-Cisco-Wlc-SNMP-Traffic-Name | Discover network interfaces and monitor bandwidth utilization |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Ap-Channel-Interference-Global" label="Ap-Channel-Interference-Global">

| Metric Name                                                | Unit  |
|:-----------------------------------------------------------|:------|
| *channels*#accesspoint.interference.power.count            | count |
| *channels*#accesspoint.interference.utilization.percentage | %     |

</TabItem>
<TabItem value="Ap-Channel-Noise-Global" label="Ap-Channel-Noise-Global">

| Metric Name                            | Unit  |
|:---------------------------------------|:------|
| *channels*#accesspoint.noise.power.dbm | dBm   |

</TabItem>
<TabItem value="Ap-Status-Global" label="Ap-Status-Global">

| Metric Name                                                              | Unit  |
|:-------------------------------------------------------------------------|:------|
| accesspoints.total.count                                                 | count |
| accesspoints.associated.count                                            | count |
| accesspoints.disabled.count                                              | count |
| accesspoints.disassociating.count                                        | count |
| accesspoints.downloading.count                                           | count |
| accesspoints.enabled.count                                               | count |
| status                                                                   |       |
| *interfaces*#accesspoint.radio.interface.channels.utilization.percentage | %     |
| *interfaces*#radio-status                                                |       |

</TabItem>
<TabItem value="Ap-Users" label="Ap-Users">

| Metric Name                        | Unit  |
|:-----------------------------------|:------|
| users.total.count                  | users |
| users.aaapending.count             | users |
| users.associated.count             | users |
| users.authenticated.count          | users |
| users.blacklisted.count            | users |
| users.disassociated.count          | users |
| users.idle.count                   | users |
| users.powersave.count              | users |
| users.probing.count                | users |
| users.tobedeleted.count            | users |
| *ssid*#ssid.users.total.count      | users |
| *ap*#accesspoint.users.total.count | users |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric Name                | Unit  |
|:---------------------------|:------|
| cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

Could not retrive metrics

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name             | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Traffic-Generic-Id" label="Traffic-Generic-Id">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Generic-Name" label="Traffic-Generic-Name">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Traffic-Global" label="Traffic-Global">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| *int*#interface.traffic.in.bitspersecond  | b/s   |
| *int*#interface.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Cisco WLC**
server. Please refer to the official documentation from CISCO:
* [CISCO WLC](https://www.cisco.com/c/en/us/td/docs/wireless/controller/8-5/config-guide/b_cg85/snmp.html)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **Cisco WLC** resources:

```bash
yum install centreon-plugin-Network-Cisco-Wlc-Snmp
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Cisco WLC** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **Cisco WLC** resources:

```bash
yum install centreon-plugin-Network-Cisco-Wlc-Snmp
```

2. Install the **Cisco WLC** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-network-cisco-wlc-snmp
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Cisco WLC** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Cisco WLC** server settings.
* Apply the **Net-Cisco-Wlc-SNMP-custom** template to the host.

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
/usr/lib/centreon/plugins//centreon_cisco_wlc.pl \
    --plugin=network::cisco::wlc::snmp::plugin \
    --mode=ap-status \
    --hostname=10.0.0.1 \
    --snmp-community='my-snmp-community' \
    --snmp-version=2c \
    --filter-name='' \
    --filter-group='' \
    --warning-radio-status='' \
    --critical-radio-status='' \
    --warning-radio-interface-channels-utilization='' \
    --critical-radio-interface-channels-utilization='' \
    --warning-total='' \
    --critical-total='' \
    --warning-total-associated='' \
    --critical-total-associated='' \
    --warning-total-disassociating='' \
    --critical-total-disassociating='' \
    --warning-total-enabled='' \
    --critical-total-enabled='' \
    --warning-total-disabled='' \
    --critical-total-disabled='' \
    --warning-status='' \
    --critical-status='' \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: total: %s associated: %s disassociating: %s downloading: %s enabled: %s disabled: %s   channels utilization: %s %% | 'accesspoints.total.count'=9000;;;0; 'accesspoints.associated.count'=9000;;;0; 'accesspoints.disassociating.count'=9000;;;0; 'accesspoints.downloading.count'=9000;;;0; 'accesspoints.enabled.count'=9000;;;0; 'accesspoints.disabled.count'=9000;;;0; 'accesspoint.radio.interface.channels.utilization.percentage'=9000%;;;0;100 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_cisco_wlc.pl \
    --plugin=network::cisco::wlc::snmp::plugin \
    --mode=ap-status \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_cisco_wlc.pl \
    --plugin=network::cisco::wlc::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.