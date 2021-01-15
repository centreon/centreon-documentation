---
id: network-firewalls-pfsense-snmp
title: pfSense
---

## Overview

pfSense is an open source firewall based on FreeBSD

The Centreon Plugin-Pack *pfSense* aims to collect the status of the interfaces 
and the several number of packets per second using with the SNMP protocol.

## Plugin-Pack assets

### Monitored objects

* pfSense firewall

### Monitored metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Blocked-Packets-Per-Interface-->

| Metric name                                 | Description       | Unit    |
|:--------------------------------------------|:------------------|:--------|
| pfinterface.pass.traffic.in.bitspersecond   | Traffic in Pass   | b/s     |
| pfinterface.pass.traffic.out.bitspersecond  | Traffic out Pass  | b/s     |
| pfinterface.block.traffic.in.bitspersecond  | Traffic in Block  | b/s     |
| pfinterface.block.traffic.out.bitspersecond | Traffic out Block | b/s     |

<!--Short-Packets-->

| Metric name             | Description                            |
|:------------------------|:---------------------------------------|
| packets.short.persecond | The number of short packets per second |

<!--Normalize-Packets-->

| Metric name                  | Description                                  |
|:-----------------------------|:---------------------------------------------|
| packets.normalized.persecond | The number of normalized  packets per second |

<!--Memory-Dropped-Packets-->

| Metric name                     | Description                                            |
|:--------------------------------|:-------------------------------------------------------|
| packets.memorydropped.persecond | The number of dropped packets due to memory per second |

<!--Match-Packets-->

| Metric name               | Description                              |
|:--------------------------|:-----------------------------------------|
| packets.matched.persecond | The number of matched packets per second |

<!--Fragment-Packets-->

| Metric name                  | Description                                 |
|:-----------------------------|:--------------------------------------------|
| packets.fragmented.persecond | The number of fragmented packets per second |

<!--Bad-Offset-Packets-->

| Metric name                 | Description                                 |
|:----------------------------|:--------------------------------------------|
| packets.badoffset.persecond | The number of bad offset packets per second |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### pfSense firewall configuration

To use this pack, the SNMP service must be properly configured on your 
pfSense firewall. Netgate provides an official documentation
to achieve this: https://docs.netgate.com/pfsense/en/latest/services/snmp.html

### Network flow

The target server must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *TO CHANGE* ressources:

```bash
yum install centreon-plugin-Network-Firewalls-Pfsense-Snmp
```

2. On the Centreon Web interface, install the *pfSense* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *TO CHANGE* ressources:

```bash
yum install centreon-plugin-Network-Firewalls-Pfsense-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-network-firewalls-pfsense-snmp
```

3. On the Centreon Web interface, install the *pfSense* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your *TO CHANGE* Server settings
* Apply the *Network-Firewalls-Pfsense-Snmp-custom* template and configure all the mandatory Macros :

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
    --critical-traffic-out-block='90'
```

Expected command output is shown below:

```bash
OK : All pfInterfaes are ok |
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

### UNKNOWN: SNMP GET Request : Cant get a single value.

This message generally means that SNMP privileges are not wide enough for the
mode/plugin to work properly.