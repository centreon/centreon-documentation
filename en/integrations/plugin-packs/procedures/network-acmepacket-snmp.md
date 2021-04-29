---
id: network-acmepacket-snmp
title: Acme Packet SNMP
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack Acme Packet SNMP collects metrics for:
* Hardware
* Interfaces
* Realm
* Sip
* System

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Hardware-->

| Metric name                                        | Description                      | Unit |
| :------------------------------------------------- | :------------------------------- | :--- |
| fan status                                         | Status of the fan                |      |
| *fan\_description*#hardware.fan.speed.percentage   | Speed of the fan                 | %    |
| psu status                                         | Status of the power supply       |      |
| temperature status                                 | Status of the temperature sensor |      |
| *sensor\_description*#hardware.temperature.celsius | Temperature of the sensor        | C    |
| voltage status                                     | Status of the voltage sensor     |      |
| *sensor\_description*#hardware.voltage.volt        | Voltage of the sensor            | V    |

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--Realm-usage-->

| Metric name                                       | Description                              | Unit |
| :------------------------------------------------ | :--------------------------------------- | :--- |
| *realm\_name*\#realm.sessions.in.current.count    | Current number of inbound sessions       |      |
| *realm\_name*\#realm.sessions.in.rate.count       | Current number of inbound sessions rate  |      |
| *realm\_name*\#realm.sessions.in.total.count      | Total number of inbound sessions         |      |
| *realm\_name*\#realm.sessions.out.current.count   | Current number of outbound sessions      |      |
| *realm\_name*\#realm.sessions.out.rate.count      | Current number of outbound sessions rate |      |
| *realm\_name*\#realm.sessions.out.total.count     | Total number of outbound sessions        |      |
| *realm\_name*\#realm.rfactor.qos.average.count    | Average number of QoS RFactor            |      |
| *realm\_name*\#realm.rfactor.execeded.total.count | Total number of RFactor exceeded         |      |

<!--Sip-usage-->

| Metric name                                 | Description                         | Unit |
| :------------------------------------------ | :---------------------------------- | :--- |
| status                                      | Status of the SIP                   |      |
| *sip\_name*\#sip.sessions.in.rate           | current number of inbound sessions  |      |
| *sip\_name*\#sip.sessions.out.rate          | current number of outbound sessions |      |
| *sip\_name*\#sip.stats.latency.milliseconds | Average Latency                     |      |
| *sip\_name*\#sip.stats.asr.percentage       | Answer-to-seizure ratio             |      |

<!--System-usage-->

| Metric name                | Description                 | Unit |
| :------------------------- | :-------------------------- | :--- |
| health.score.percentage    | Current health score        | %    |
| cpu.utilization.percentage | CPU utilization             | %    |
| memory.usage.percentage    | Memory usage                | %    |
| licence.usage.percentage   | Number of license used      | %    |
| sessions.current.count     | Current number of sessions  |      |
| calls.current.count        | Current number of calls     |      |
| replication status         | Status of the replication   |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Acme Packet, the SNMP must be configured.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Acmepacket-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Acme Packet* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Acmepacket-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-network-acmepacket-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Acme Packet* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *Net-Acmepacket-SNMP-Custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_acmepacket_snmp.pl \
    --plugin=network::acmepacket::snmp::plugin \
    --mode=system-usage \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='acme_ro' \
    --warning-cpu-load='90' \
    --critical-cpu-load='95' \
    --verbose
```

Expected command output is shown below:

```bash
OK: System usage is ok | 'health.score.percentage'=100.00%;;;0;100 'cpu.utilization.percentage'=2.00%;0:90;0:95;0;100 'memory.usage.percentage'=9.00%;;;0;100 'licence.usage.percentage'=0.00%;;;0;100 'sessions.current.count'=0;;;0; 'calls.current.count'=0/s;;;0;
checking system
    health score: 100.00 %
    cpu load: 2.00 %
    memory used: 9.00 %
    license used: 0.00 %
    current sessions: 0
    current calls: 0/s
    replication state: active
```

The command above monitors Acme Packet (```--plugin=network::acmepacket::snmp::plugin --mode=system-usage```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='acme_ro'```).

This command would trigger a WARNING alarm if cpu utilization over 90% 
(```--warning-cpu-load='90'```) and a CRITICAL alarm over 95% (```--critical-cpu-load='95'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_acmepacket_snmp.pl \
    --plugin=network::acmepacket::snmp::plugin \
    --mode=system-usage \
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
    SNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.9148
