---
id: network-firewalls-pfsense-snmp
title: pfSense
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

pfSense is an open source router and firewall software based on FreeBSD and
entirely configurable throught a user-friendly web interface.

The Centreon Plugin-Pack *pfSense* aims to collect the status of the interfaces 
and the several number of packets per second using with the SNMP protocol.

## Plugin-Pack assets

### Monitored objects

* pfSense firewall

### Monitored metrics

<Tabs groupId="sync">
<TabItem value="BlockedPacketsPerInterface" label="BlockedPacketsPerInterface">

| Metric name                                 | Description       | Unit    |
|:--------------------------------------------|:------------------|:--------|
| pfinterface.pass.traffic.in.bitspersecond   | Traffic in Pass   | b/s     |
| pfinterface.pass.traffic.out.bitspersecond  | Traffic out Pass  | b/s     |
| pfinterface.block.traffic.in.bitspersecond  | Traffic in Block  | b/s     |
| pfinterface.block.traffic.out.bitspersecond | Traffic out Block | b/s     |

</TabItem>
<TabItem value="ShortPackets" label="ShortPackets">

| Metric name             | Description                            |
|:------------------------|:---------------------------------------|
| packets.short.persecond | The number of short packets per second |

</TabItem>
<TabItem value="NormalizePackets" label="NormalizePackets">

| Metric name                  | Description                                  |
|:-----------------------------|:---------------------------------------------|
| packets.normalized.persecond | The number of normalized  packets per second |

</TabItem>
<TabItem value="MemoryDroppedPackets" label="MemoryDroppedPackets">

| Metric name                     | Description                                            |
|:--------------------------------|:-------------------------------------------------------|
| packets.memorydropped.persecond | The number of dropped packets due to memory per second |

</TabItem>
<TabItem value="MatchPackets" label="MatchPackets">

| Metric name               | Description                              |
|:--------------------------|:-----------------------------------------|
| packets.matched.persecond | The number of matched packets per second |

</TabItem>
<TabItem value="FragmentPackets" label="FragmentPackets">

| Metric name                  | Description                                 |
|:-----------------------------|:--------------------------------------------|
| packets.fragmented.persecond | The number of fragmented packets per second |

</TabItem>
<TabItem value="BadOffsetPackets" label="BadOffsetPackets">

| Metric name                 | Description                                 |
|:----------------------------|:--------------------------------------------|
| packets.badoffset.persecond | The number of bad offset packets per second |

</TabItem>
</Tabs>

## Prerequisites

### pfSense firewall configuration

To use this pack, the SNMP service must be properly configured on your 
pfSense firewall. Netgate provides an official documentation
to achieve this: https://docs.netgate.com/pfsense/en/latest/services/snmp

### Network flow

The target server must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT100 Editions" label="Online IMP Licence & IT100 Editions">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor a pfSense firewall:

```bash
yum install centreon-plugin-Network-Firewalls-Pfsense-Snmp
```

2. On the Centreon Web interface, install the *pfSense* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor a pfSense firewall:

```bash
yum install centreon-plugin-Network-Firewalls-Pfsense-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-network-firewalls-pfsense-snmp
```

3. On the Centreon Web interface, install the *pfSense* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".

* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your pfSense firewall settings

* Apply the *Network-Firewalls-Pfsense-Snmp-custom* template and configure all the mandatory Macros:

If you are using SNMP Version 3, use the *SNMPEXTRAOPTIONS* Macro to configure
your own SNMPv3 credentials combo.

| Mandatory | Name             | Description                                 |
|:----------|:-----------------|:--------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the 
*centreon-engine* user account and test the
Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_pfsense.pl \
    --plugin=apps::pfsense::snmp::plugin \
    --mode=pfinterfaces \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --filter-name='em.*' \
    --warning-traffic-in-block='80' \
    --warning-traffic-out-block='90' \
    --critical-traffic-in-block='80' \
    --critical-traffic-out-block='90' \
    --use-new-perfdata
```

Expected command output is shown below:

```bash
OK : All pfInterfaes are ok | 'pfinterface.pass.traffic.in.bitspersecond'=43978.08b/s;0:8000000000;0:9000000000;0;10000000000
'pfinterface.pass.traffic.out.bitspersecond'=77012.32b/s;0:8000000000;0:9000000000;0;10000000000
'pfinterface.block.traffic.in.bitspersecond'=33878.08b/s;0:8000000000;0:9000000000;0;10000000000
'pfinterface.block.traffic.out.bitspersecond'=25014.32b/s;0:8000000000;0:9000000000;0;10000000000
```

This command triggers a WARNING alarm in the following cases:

* The traffic in Pass is greater than 80% (--warning-traffic-in-block='80')

* The traffic in Block is greater than 80% (--warning-traffic-out-block='80')

A CRITICAL alarm is however triggered in the following cases:

* The traffic in Pass is greater than 90% (--critical-traffic-in-block='90')

* The traffic in Block is greater than 90% (--critical-traffic-out-block='90')

All available options for a given mode can be displayed by adding the 
```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_pfsense.pl \
    --plugin=apps::pfsense::snmp::plugin \
    --mode=pfinterfaces \
    --help
```

All plugin modes can be listed with the following command:

```bash
/usr/lib/centreon/plugins/centreon_pfsense.pl \
    --plugin=apps::pfsense::snmp::plugin \
    --list-mode \
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:

* Your SNMP server isn't started or misconfigured
* An external device is blocking your request (firewall, ...)