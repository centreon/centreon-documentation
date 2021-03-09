---
id: network-ubiquiti-airfiber-snmp
title: Ubiquiti AirFiber SNMP
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack Ubiquiti AirFiber SNMP collects metrics for:
* Interfaces
* Load
* Memory
* Radios

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

<!--Load-->

| Metric name                  | Description                       | Unit |
| :--------------------------- | :-------------------------------- | :--- |
| system.loadaverage.1m.count  | System load 1 minute-sample       |      |
| system.loadaverage.5m.count  | System load 5 minutes-sample      |      |
| system.loadaverage.15m.count | System load 15 minutes-sample     |      |

<!--Memory-->

| Metric name             | Description                               | Unit  |
| :---------------------  | :---------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage                              | B     |
| memory.free.bytes       | Free memory                               | B     |
| memory.usage.percentage | Memory usage in percentage                | %     |

<!--Radios-->

| Metric name                                                      | Description                                  | Unit   |
| :--------------------------------------------------------------- | :------------------------------------------- | :----- |
| status                                                           | Status of the radio interface                |        |
| *interfacename*\#radio.interface.chain0.signal.receive.power.dbm | Radio chain 0 RX power level                 | dBm    |
| *interfacename*\#radio.interface.chain1.signal.receive.power.dbm | Radio chain 1 RX power level                 | dBm    |
| *interfacename*\#radio.interface.traffic.in.bitspersecond        | Incoming traffic going through the interface | b/s    |
| *interfacename*\#radio.interface.traffic.out.bitspersecond       | utgoing traffic going through the interface  | b/s    |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Ubiquiti AirFiber, the SNMP must be configured.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Ubiquiti-Airfiber-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Ubiquiti AirFiber SNMP* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Ubiquiti-Airfiber-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-network-ubiquiti-airfiber-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Ubiquiti AirFiber SNMP* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *Net-Ubiquiti-Airfiber-SNMP-Custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_ubiquiti_airfiber_snmp.pl \
    --plugin=network::ubiquiti::airfiber::snmp::plugin \
    --mode=load \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='ubiquiti_ro' \
    --warning-load15='3' \
    --critical-load15='7' \
    --verbose
```

Expected command output is shown below:

```bash
OK: Load average 0.00 (1m), 0.00 (5m), 0.00 (15m) | 'system.loadaverage.1m.count'=0.00;;;0; 'system.loadaverage.5m.count'=0.00;;;0; 'system.loadaverage.15m.count'=0.00;0:3;0:7;0;
```

The command above monitors Ubiquiti AirFiber (```--plugin=network::ubiquiti::airfiber::snmp::plugin --mode=load```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='ubiquiti_ro'```).

This command would trigger a WARNING alarm if system load average is over 3
(```--warning-load15='3'```) and a CRITICAL alarm over 7 (```--critical-load15='7'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ubiquiti_airfiber_snmp.pl \
    --plugin=network::ubiquiti::airfiber::snmp::plugin \
    --mode=load \
    --help
```

## Troubleshooting

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:
* The SNMP agent of the device isn't started or is misconfigured
* An external device is blocking the request (firewall, ...)

#### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - The agent doesn't support the MIB used by the plugin
  - The targeted SNMP OID cannot be fetched because of insufficient privileges on the device. 
    SNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.41112
