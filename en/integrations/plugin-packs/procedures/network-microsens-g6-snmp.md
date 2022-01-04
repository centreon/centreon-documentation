---
id: network-microsens-g6-snmp
title: Microsens G6 SNMP
---

## Pack Assets

### Templates

The Centreon Pack Microsens G6 SNMP brings 1 host template:
* Net-Microsens-G6-SNMP-custom

It brings the following Service Templates:

| Service Alias | Service Template                   | Default | Discovery |
|:--------------|:-----------------------------------|:--------|:----------|
| Cpu-Detailed  | Net-Microsens-G6-Cpu-Detailed-SNMP | X       |           |
| Hardware      | Net-Microsens-G6-Hardware-SNMP     | X       |           |
| Interfaces    | Net-Microsens-G6-Interfaces-SNMP   |         | X         |
| Load          | Net-Microsens-G6-Load-SNMP         | X       |           |
| Memory        | Net-Microsens-G6-Memory-SNMP       | X       |           |
| Sfp           | Net-Microsens-G6-Sfp-SNMP          |         | X         |
| Uptime        | Net-Microsens-G6-Uptime-SNMP       | X       |           |

### Discovery rules

| Rule name                            | Description                                         |
|:-------------------------------------|:----------------------------------------------------|
| Net-Microsens-G6-SNMP-Interface-Name | Discover network interfaces and monitor utilization |
| Net-Microsens-G6-SNMP-Sfp-Port       | Discover sfp ports and monitor utilization          |

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-Detailed-->

| Metric name                           | Description                 | Unit  |
| :------------------------------------ | :-------------------------- | :---- |
| cpu.user.utilization.percentage       | CPU User utilization        | %     |
| cpu.nice.utilization.percentage       | CPU Nice utilization        | %     |
| cpu.system.utilization.percentage     | CPU System utilization      | %     |
| cpu.idle.utilization.percentage       | CPU Idle utilization        | %     |
| cpu.wait.utilization.percentage       | CPU Wait utilization        | %     |
| cpu.kernel.utilization.percentage     | CPU Kernel utilization      | %     |
| cpu.interrupt.utilization.percentage  | CPU Interrupt utilization   | %     |
| cpu.softirq.utilization.percentage    | CPU SoftIrq utilization     | %     |
| cpu.steal.utilization.percentage      | CPU Steal utilization       | %     |
| cpu.guest.utilization.percentage      | CPU Guest utilization       | %     |
| cpu.guestnice.utilization.percentage  | CPU Guest Nice utilization  | %     |

<!--Hardware-->

| Metric name                         | Description                        | Unit  |
| :---------------------------------- | :--------------------------------- | :---- |
| fan status                          | Status of the fan                  |       |
| psu status                          | Status of the power supply         |       |
| sd card status                      | Status/health/state of the SD card |       |
| system#hardware.temperature.celsius | Temperature of the system          | C     |

<!--Interfaces-->

| Metric name                                               | Description                                             | Unit |
|:--------------------------------------------------------- |:------------------------------------------------------- |:---- |
| status                                                    | Status of the interface                                 |      |
| *interface_name*#interface.traffic.in.bitspersecond       | Incoming traffic going through the interface            | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | Outgoing traffic going through the interface            | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | Incoming errored packets going through the interface    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | Incoming discarded packets going through the interface  | %    |
| *interface_name*#interface.packets.out.error.percentage   | Outgoing errored packets going through the interface    | %    |
| *interface_name*#interface.packets.out.discard.percentage | Outgoing discarded packets going through the interface  | %    |

<!--Load-->

| Metric name            | Description                   | Unit |
| :--------------------- | :---------------------------- | :--- |
| load.1m.count          | System load 1 minute-sample   |      |
| load.5m.count          | System load 5 minutes-sample  |      |
| load.15m.count         | System load 15 minutes-sample |      |

<!--Memory-->

| Metric name             | Description                              | Unit  |
| :---------------------  | :--------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage on the device               | B     |
| memory.free.bytes       | Free memory on the device                | B     |
| memory.usage.percentage | Percentage of memory usage on the device | %     |
| memory.buffer.bytes     | Buffered memory allocation               | B     |
| memory.cached.bytes     | Cached memory allocation                 | B     |
| memory.shared.bytes     | Shared memory allocation                 | B     |

<!--Sfp-->

| Metric name                           | Description                     | Unit |
|:------------------------------------- |:------------------------------- |:---- |
| status                                | Status of the SFP port          |      |
| *port_index*#port.input.power.dbm     | Optical input of the SFP port   | dBm  |
| *port_index*#port.output.power.dbm    | Optical output of the SFP port  | dBm  |
| *port_index*#port.temperature.celsius | Temperature inside the SFP port | C    |

<!--Uptime-->

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your Microsens device:
* https://www.microsens.com/fileadmin/files/downloads/Application_notes/AN-16010_Basic_Config_of_G6_Devices_v1.0.1.pdf

### Network flow

The target server must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Microsens G6 SNMP** resources:

```bash
yum install centreon-plugin-Network-Microsens-G6-Snmp
```

2. On the Centreon Web interface, install the **Microsens G6 SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

<!--Offline License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Microsens G6 SNMP** resources:

```bash
yum install centreon-plugin-Network-Microsens-G6-Snmp
```

2. Install the **Microsens G6 SNMP** Centreon Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-network-microsens-g6-snmp
```

3. On the Centreon Web interface, install the **Microsens G6 SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Microsens G6 SNMP** server settings
* Select the **network-microsens-g6-snmp-custom** template to apply to the Host

If you are using SNMP Version 3, use the SNMPEXTRAOPTIONS Macro to configure
your own SNMPv3 credentials combo.

| Mandatory | Name             | Description                                              |
|:----------|:-----------------|:---------------------------------------------------------|
|           | SNMPEXTRAOPTIONS | (Default: 'Configure your own SNMPv3 credentials combo') |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins/centreon_microsens_g6_snmp.pl \
    --plugin=network::microsens::g6::snmp::plugin \
    --mode=sfp \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --filter-port='^(2|4)$' \
    --warning-status='' \
    --critical-status='' \
    --warning-temperature='' \
    --critical-temperature='' \
    --warning-input-power='' \
    --critical-input-power='' \
    --warning-output-power='' \
    --critical-output-power='' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All sfp ports are ok | '2#port.input.power.dbm'=1.3dBm;;;; '2#port.output.power.dbm'=0.3dBm;;;; '2#port.temperature.celsius'=65.9C;;;; '4#port.input.power.dbm'=1.4dBm;;;; '4#port.output.power.dbm'=0.7dBm;;;; '4#port.temperature.celsius'=66.3C;;;;
checking sfp port '2'
    status: laserDisabled
    input power: 1.3 dBm, output power: 0.3 dBm
    temperature: 65.90 C
checking sfp port '4'
    status: laserDisabled
    input power: 1.4 dBm, output power: 0.7 dBm
    temperature: 66.30 C
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_microsens_g6_snmp.pl \
    --plugin=network::microsens::g6::snmp::plugin \
    --mode=sfp \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_microsens_g6_snmp.pl \
    --plugin=network::microsens::g6::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.html#snmp-checks)
