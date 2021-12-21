---
id: network-switchs-symbol-wing-snmp
title: Symbol WiNG switch SNMP
---

## Pack Assets

### Templates

The Centreon Plugin Pack Symbol WiNG switch SNMP brings 1 host template:
* Net-Symbol-Wing-SNMP-custom

It brings the following Service Templates:

| Service Alias        | Service Template                          | Default | Discovery |
|:---------------------|:------------------------------------------|:--------|:----------|
| Systems              | Net-Symbol-Wing-Systems-SNMP              | X       |           |
| Traffic-Generic-Id   | Net-Symbol-Wing-Traffic-Generic-Id-SNMP   |         |           |
| Traffic-Generic-Name | Net-Symbol-Wing-Traffic-Generic-Name-SNMP |         | X         |
| Traffic-Global       | Net-Symbol-Wing-Traffic-Global-SNMP       |         |           |
| Packet-Errors        | Net-Symbol-wing-Packet-Errors-Global-SNMP |         | X         |

### Discovery rules

| Rule name                               | Description |
|:----------------------------------------|:------------|
| Net-Symbol-Wing-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization |
| Net-Symbol-Wing-SNMP-Packet-Errors-Name | Discover network interfaces and monitor errored and discarded packets |

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Systems-->

* Global

| Metric name         | Description       | Unit  |
|:--------------------|:------------------|:------|
| devices.total.count | Number of total devices | count |

* Per *cpu*

| Metric name                    | Description   | Unit |
|:-------------------------------|:--------------|:-----|
| cpu.utilization.1m.percentage  | %.2f %% (1m)  | %    |
| cpu.utilization.5m.percentage  | %.2f %% (5m)  | %    |
| cpu.utilization.15m.percentage | %.2f %% (15m) | %    |

* Per *memory*

| Metric name                    | Description | Unit |
|:-------------------------------|:------------|:-----|
| device.memory.usage.bytes      |             | B    |
| device.memory.free.bytes       |             | B    |
| device.memory.usage.percentage |             | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

No specific prerequisites

### Network flow

The target server must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Symbol WiNG** ressources:

```bash
yum install centreon-plugin-Network-Symbol-Wing-Snmp
```

2. On the Centreon Web interface, install the *Symbol WiNG switch SNMP* Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

<!--Offline License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Symbol WiNG** ressources:

```bash
yum install centreon-plugin-Network-Symbol-Wing-Snmp
```

2. Install the **Symbol WiNG switch SNMP** Centreon Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-network-switchs-symbol-wing-snmp
```

3. On the Centreon Web interface, install the **Symbol WiNG switch SNMP** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your *Symbol WiNG* server settings
* Select the **network-switchs-symbol-wing-snmp-custom** template to apply to the Host.

If you are using SNMP Version 3, use the SNMPEXTRAOPTIONS Macro to configure
your own SNMPv3 credentials combo.

| Mandatory | Name             | Description                                              |
|:----------|:-----------------|:---------------------------------------------------------|
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## How to check in the CLI that the configuration is OK and what are the main options for ? 

Once the plugin installed, log into your Centreon Poller CLI using the 
*centreon-engine* user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_symbol_wing.pl \
    --plugin=network::symbol::wing::snmp::plugin \
    --mode=systems \
    --hostname='10.0.0.1' \
    --snmp-community='my-snmp-community' \
    --snmp-version='2c' \
    --filter-name='' \
    --warning-cpu-utilization-1m='' \
    --critical-cpu-utilization-1m='' \
    --warning-cpu-utilization-5m='80' \
    --critical-cpu-utilization-5m='90' \
    --warning-cpu-utilization-15m='' \
    --critical-cpu-utilization-15m='' \
    --warning-memory-usage='' \
    --critical-memory-usage='' \
    --warning-memory-usage-free='' \
    --critical-memory-usage-free='' \
    --warning-memory-usage-prct='' \
    --critical-memory-usage-prct='' \
    --warning-devices-total='' \
    --critical-devices-total='' \
```

Expected command output is shown below:

```bash
OK: total devices: %s %.2f %% (1m) %.2f %% (5m) %.2f %% (15m)    | 'devices.total.count'=9000;;;0; 'cpu.utilization.1m.percentage'=9000%;;;0;100 'cpu.utilization.5m.percentage'=9000%;80;90;0;100 'cpu.utilization.15m.percentage'=9000%;;;0;100 'device.memory.usage.bytes'=9000B;;;0; 'device.memory.free.bytes'=9000B;;;0; 'device.memory.usage.percentage'=9000%;;;0;100 
```

This command would trigger a WARNING alarm if cpu is reported as over 80% during last 5 minutes
(`--warning-cpu-utilization-5m='80'`) and a CRITICAL alarm if over
than 90% during last 5 minutes (`--critical-cpu-utilization-5m='90'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_symbol_wing.pl \
    --plugin=network::symbol::wing::snmp::plugin \
    --mode=systems \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_symbol_wing.pl \
    --plugin=network::symbol::wing::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.html)
