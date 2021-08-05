---
id: network-fortinet-fortiweb-snmp
title: Fortinet FortiWeb SNMP
---

## Plugin Pack Assets

### Monitored Objects

The Plugin Pack Fortinet FortiWeb SNMP collects metrics for:
* Interfaces
* Proxy
* System

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                                 | Description                                                           |
| :---------------------------------------- | :-------------------------------------------------------------------- |
| Net-Fortinet-Fortiweb-SNMP-Interface-Name | Discover network interfaces and monitor bandwidth utilization         |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--Proxy-->

| Metric name                 | Description                   | Unit |
| :-------------------------- | :---------------------------- | :--- |
| proxy.connections.count     | Current number of connections |      |
| proxy.connections.persecond | Average number of connections |      |
| proxy.services.count        | Number of services            |      |

<!--System-->

| Metric name                     | Description              | Unit |
| :------------------------------ | :----------------------- | :--- |
| ha status                       | High-availability status |      |
| cpu.utilization.percentage      | CPU utilization          | %    |
| memory.usage.percentage         | Memory usage             | %    |
| disk.log.space.usage.percentage | Log disk usage           | %    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To monitor your Fortinet FortiWeb, the SNMP must be configured.
The Poller should be able to perform SNMP requests toward the Fortinet device over SNMP UDP/161 port.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Fortinet-Fortiweb-Snmp
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Fortinet FortiWeb SNMP* Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Fortinet-Fortiweb-Snmp
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-network-fortinet-fortiweb-snmp
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *Fortinet FortiWeb SNMP* Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *Net-Fortinet-Fortiweb-SNMP-custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortiweb_snmp.pl \
    --plugin=network::fortinet::fortiweb::snmp::plugin \
    --mode=system \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='fortinet_ro' \
    --warning-cpu-load='90' \
    --critical-cpu-load='95' \
    --verbose
```

Expected command output is shown below:

```bash
OK: system usage is ok | 'cpu.utilization.percentage'=12.00%;0:90;0:95;0;100 'memory.usage.percentage'=79.00%;;;0;100 'disk.log.space.usage.percentage'=74.00%;;;0;100
checking system
    high-availability mode: standalone
    cpu load: 12.00 %
    memory used: 79.00 %
    disk log space used: 74.00 %
```

The command above monitors Fortinet FortiWeb (```--plugin=network::fortinet::fortiweb::snmp::plugin --mode=system```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='fortinet_ro'```).

This command would trigger a WARNING alarm if cpu utilization over 90% 
(```--warning-cpu-utilization='90'```) and a CRITICAL alarm over 95% (```--critical-cpu-utilization='95'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_fortinet_fortiweb_snmp.pl \
    --plugin=network::fortinet::fortiweb::snmp::plugin \
    --mode=system \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins.html)
