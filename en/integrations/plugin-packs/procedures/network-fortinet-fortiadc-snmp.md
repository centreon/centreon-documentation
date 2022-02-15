---
id: network-fortinet-fortiadc-snmp
title: Fortinet FortiADC SNMP
---

## Pack Assets

### Templates

The Centreon Pack Fortinet FortiADC SNMP brings 1 host template:
* Net-Fortinet-Fortiadc-SNMP-custom

It brings the following Service Templates:

| Service Alias   | Service Template                           | Default | Discovery |
|:----------------|:-------------------------------------------|:--------|:----------|
| Cpu             | Net-Fortinet-Fortiadc-Cpu-SNMP             | X       |           |
| Hardware        | Net-Fortinet-Fortiadc-Hardware-SNMP        | X       |           |
| Interfaces      | Net-Fortinet-Fortiadc-Interfaces-SNMP      |         | X         |
| Memory          | Net-Fortinet-Fortiadc-Memory-SNMP          | X       |           |
| Security        | Net-Fortinet-Fortiadc-Security-SNMP        | X       |           |
| Uptime          | Net-Fortinet-Fortiadc-Uptime-SNMP          | X       |           |
| Virtual-Servers | Net-Fortinet-Fortiadc-Virtual-Servers-SNMP | X       | X         |

### Discovery rules

| Rule name                                      | Description                                              |
|:-----------------------------------------------|:---------------------------------------------------------|
| Net-Fortinet-Fortiadc-SNMP-Interface-Name      | Discover network interfaces and monitor utilization      |
| Net-Fortinet-Fortiadc-SNMP-Virtual-Server-Name | Discover network virtual servers and monitor utilization |

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                                    | Description                                 | Unit |
| :--------------------------------------------- | :------------------------------------------ | :--- |
| cpu.utilization.2s.percentage                  | CPU utilization for the last 2 seconds      | %    |
| cpu.utilization.1m.percentage                  | CPU utilization for the last minute         | %    |
| cpu.utilization.5m.percentage                  | CPU utilization for the last 5 minutes      | %    |
| *core_name*#core.cpu.utilization.2s.percentage | CPU Core utilization for the last 2 seconds | %    |
| *core_name*#core.cpu.utilization.1m.percentage | CPU Core utilization for the last minute    | %    |
| *core_name*#core.cpu.utilization.5m.percentage | CPU Core utilization for the last 5 minutes | %    |

<!--Hardware-->

| Metric name                               | Description                                   | Unit |
|:----------------------------------------- |:--------------------------------------------- | :--- |
| fan status                                | Status of the fan                             |      |
| *fan_name*hardware.fan.speed.rpm          | Current fan speed                             | rpm  |
| temperature status                        | Status of temperature probes (cpu and device) |      |
| *probe_name*#hardware.temperature.celsius | Current temperature                           | C    |

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

<!--Memory-->

| Metric name             | Description                | Unit  |
| :---------------------- | :------------------------- | :---- |
| memory.usage.percentage | Memory usage in percentage | %     |

<!--Security-->

| Metric name           | Description                | Unit  |
| :-------------------- | :------------------------- | :---- |
| ddos status           | Current DDoS attack status |       |

<!--Uptime-->

| Metric name           | Description        | Unit  |
| :-------------------- | :----------------- | :---- |
| system.uptime.seconds | System uptime      | s     |

<!--Virtual-servers-->

| Metric name                                                 | Description                                       | Unit  |
| :---------------------------------------------------------- | :------------------------------------------------ | :---- |
| virtual_servers.detected.count                              | Number of virtual servers detected                |       |
| virtual_servers.healthy.count                               | Number of virtual servers with status healthy     |       |
| status                                                      | Status for the virtual server                     |       |
| *vdom_name~vs_name*#virtual_server.connections.count        | Concurrent connection rate for the virtual server |       |
| *vdom_name~vs_name*#virtual_server.throughput.bitspersecond | Throughput rate for the virtual server            | bps   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### SNMP Configuration

To use this Pack, the SNMP service must be properly configured on your device:
* https://docs.fortinet.com/product/fortiac/

### Network flow

The target equipment must be reachable from the Centreon Poller on the UDP/161 SNMP
port.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Fortinet FortiADC SNMP** resources:

```bash
yum install centreon-plugin-Network-Fortinet-Fortiadc-Snmp
```

2. On the Centreon Web interface, install the **Fortinet FortiADC SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

<!--Offline License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Fortinet FortiADC SNMP** resources:

```bash
yum install centreon-plugin-Network-Fortinet-Fortiadc-Snmp
```

2. Install the **Fortinet FortiADC SNMP** Centreon Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-network-fortinet-fortiadc-snmp
```

3. On the Centreon Web interface, install the **Fortinet FortiADC SNMP** Centreon Pack on the **Configuration > Plugin Packs** page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Fortinet FortiADC SNMP** server settings
* Select the **Net-Fortinet-Fortiadc-SNMP-custom** template to apply to the Host

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
/usr/lib/centreon/plugins/centreon_fotinet_fortiadc_snmp.pl \
    --plugin=network::fortinet::fortiadc::snmp::plugin \
    --mode=cpu \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-average-5m='' \
    --critical-average-5m='' \
    --verbose
```

The expected command output is shown below:

```bash
OK: 16 CPU(s) average usage is 0.81 % (2s) 0.00 % (1m) 0.12 % (5m) - All core cpu are ok | 'cpu.utilization.2s.percentage'=0.81%;;;0;100 'cpu.utilization.1m.percentage'=0.00%;;;0;100 'cpu.utilization.5m.percentage'=0.12%;;;0;100 'Core 0#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 0#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 0#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 1#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 1#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 1#core.cpu.utilization.5m.percentage'=2.00%;;;0;100 'Core 10#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 10#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 10#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 11#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 11#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 11#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 12#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 12#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 12#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 13#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 13#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 13#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 14#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 14#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 14#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 15#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 15#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 15#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 2#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 2#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 2#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 3#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 3#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 3#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 4#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 4#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 4#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 5#core.cpu.utilization.2s.percentage'=0.00%;;;0;100 'Core 5#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 5#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 6#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 6#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 6#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 7#core.cpu.utilization.2s.percentage'=0.00%;;;0;100 'Core 7#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 7#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 8#core.cpu.utilization.2s.percentage'=1.00%;;;0;100 'Core 8#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 8#core.cpu.utilization.5m.percentage'=0.00%;;;0;100 'Core 9#core.cpu.utilization.2s.percentage'=0.00%;;;0;100 'Core 9#core.cpu.utilization.1m.percentage'=0.00%;;;0;100 'Core 9#core.cpu.utilization.5m.percentage'=0.00%;;;0;100
CPU '1' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '2' usage 1.00 % (2s) 0.00 % (1m) 2.00 % (5m)
CPU '11' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '12' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '13' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '14' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '15' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '16' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '3' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '4' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '5' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '6' usage 0.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '7' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '8' usage 0.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '9' usage 1.00 % (2s) 0.00 % (1m) 0.00 % (5m)
CPU '10' usage 0.00 % (2s) 0.00 % (1m) 0.00 % (5m)
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_fotinet_fortiadc_snmp.pl \
    --plugin=network::fortinet::fortiadc::snmp::plugin \
    --mode=cpu \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_fotinet_fortiadc_snmp.pl \
    --plugin=network::fortinet::fortiadc::snmp::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.html#snmp-checks)
