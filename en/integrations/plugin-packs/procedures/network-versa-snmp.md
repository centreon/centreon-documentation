---
id: network-versa-snmp
title: Versa SNMP
---

## Overview

Versa Networks provides secure cloud IP architecture. 
In particular, SD-WAN that aims to phase out conventional WAN infrastructures

The Centreon Plugin Pack relies on the SNMP protocol to query and collect status and metrics of the Versa equipements.

## Plugin-Pack assets

### Monitored objects

* CPE
* Branch
* Gateway

### Discovery Rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule Name                         | Description                                                   |
|:--------------------------------- |:------------------------------------------------------------- |
| Net-Versa-SNMP-Ipsec-Name         | Discover IPSec tunnels and monitor traffic and packets        |
| Net-Versa-SNMP-Sdwan-Name         | Discover SDWAN rules and monitor traffic/hits                 |
| Net-Versa-SNMP-Traffic-Name       | Discover network interfaces and monitor bandwidth utilization |
| Net-Versa-SNMP-Packet-Errors-Name | Discover network interfaces and monitor packet errors/discard |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Bgp-Peers-->

| Metric name              | Description         | Unit |
|:------------------------ |:------------------- |:---- |
| status                   | Status of the peers |      |
| peer.update.last.seconds | Last update by peer | s    |

<!--Devices-->

| Metric name                       | Description                                 | Unit  |
|:--------------------------------- | :------------------------------------------ |:----- |
| device.cpu.utilization.percentage | Device CPU utilization                      | %     |
| device.memory.usage.percentage    | Device Memory usage                         | %     |
| device.sessions.active.count      | Number of actives sessions on the device    | Count |
| device.sessions.active.percentage | Percentage of active sessions on the device | %     |
| device.sessions.failed.count      | Number of failed sessions on the device     | Count |
| device.sessions.failed.percentage | Percentage of failed sessions on the device | %     |

<!--Interfaces-->

| Metric name                               | Description                                            | Unit |
|:----------------------------------------- |:------------------------------------------------------ |:---- |
| status                                    | Status of the interface                                |      |
| interface.traffic.in.bitspersecond        | Incoming traffic going through the interface           | B/s  |
| interface.traffic.out.bitspersecond       | Outgoing traffic going through the interface           | B/s  |
| interface.packets.in.errors.percentage    | Incoming errored packets going through the interface   | %    |
| interface.packets.out.errors.percentage   | Outgoing errored packets going through the interface   | %    |
| interface.packets.in.discards.percentage  | Incoming discarded packets going through the interface | %    |
| interface.packets.out.discards.percentage | Outgoing discarded packets going through the interface | %    |

<!--Ipsec-->

| Metric name                      | Description                                        | Unit  |
|:-------------------------------- |:-------------------------------------------------- |:----- |
| ipsec.packets.in.count           | Number of incoming packets trough the IPsec tunnel | Count |
| ipsec.traffic.in.bytespersecond  | Incoming traffic going through the IPsec tunnel    | B/s   |
| ipsec.packets.out.count          | Number of outgoing packets trough the IPsec tunnel | Count |
| ipsec.traffic.out.bytespersecond | Outcoming taffic going through the IPsec tunnel    | Count |
| ipsec.packets.invalid.count      | Number of invalid packets through the IPsec tunnel | Count |
| ipsec.ike.disconnected.count     | number of IKE disconnect by IPsec tunnel           | Count |


<!--Qos-Policy-->

* by QoS policy

| Metric name                                 | Description                               | Unit  |
|:------------------------------------------- |:----------------------------------------- |:----  |
| qos.policy.hit.count                        | Number of hits by QoS policy              | Count |
| qos.policy.sessions.deny.count              | Number of sessions denied by QoS Policy   | Count |
| qos.policy.packets.dropped.count            | Number of packets dropped by Qos Policy   | Count |
| qos.policy.traffic.dropped.bytespersecond   | Traffic dropped by Qos Policy             | B/s   |
| qos.policy.packets.forwarded.count          | Number of packets forwarded by Qos Policy | Count |
| qos.policy.traffic.forwarded.bytespersecond | Traffic forwarded by QoS Policy           | B/s   |

* by Application Qos Policy

| Metric name                                    | Description                                           | Unit  |
|:---------------------------------------------- |:----------------------------------------------------- |:----- |
| appqos.policy.hit.count                        | Number of hits by Application Qos Policy              | Count |
| appqos.policy.packets.dropped.count            | Number of packets dropped by Application Qos Policy   | Count |
| appqos.policy.traffic.dropped.bytespersecond   | Traffic dropped by Application Qos Policy             | B/s   |
| appqos.policy.packets.forwarded.count          | Number of packets forwarded by Application Qos Policy | Count |
| appqos.policy.traffic.forwarded.bytespersecond | Traffic forwarded by QoS Policy                       | B/s   |

<!--Sdwan-->

| Metric name                             | Description                                     | Unit  |
|:--------------------------------------- |:----------------------------------------------- |:----- |
| sdwan.policy.hit.count                  | Number of hists by SDWAN policy                 | Count |
| sdwan.policy.packets.in.count           | Number of incoming packets by SDWAN policy      | Count |
| sdwan.policy.traffic.in.bytespersecond  | Incoming traffic going through by SDWAN policy  | B/s   |
| sdwan.policy.packets.out.count          | Number of outgoing packets by SDWAN policy      | Count |
| sdwan.policy.traffic.out.bytespersecond | Outcoming traffic going through by SDWAN Policy | B/s   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### Device Configuration

Configure the proper SNMP settings on your Versa Networks device according to the Versa Networks official documentation: 

### Network flows

The Centreon Poller must be able to reach the UDP/161 SNMP port of the Versa Networks device.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor 
Versa Networks devices:


```bash
yum install centreon-plugin-Network-Versa-Snmp
```

2. On the Centreon Web interface, install the *Versa SNMP* Plugin-Pack 
through "Configuration > Plugin packs > Manager" page.


<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor
Versa Networks devices:

```bash
yum install centreon-plugin-Network-Versa-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:


```bash
yum install centreon-pack-network-versa-snmp
```

3. On the Centreon Web interface, install the *Versa SNMP* Plugin-Pack 
through "Configuration > Plugin packs > Manager" page.


<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration 

* Add a new Host and apply the *Net-Versa-SNMP-Custom* Host Template
* Fill the SNMP Version and Community fields according to the device's configuration


> When using SNMP v3, use the SNMPEXTRAOPTIONS Host Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for ?

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account 
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_versa_snmp.pl \
  --plugin network::versa::snmp::plugin \
  --mode devices \
  --hostname=10.0.0.1 \
  --snmp-version='2c' \
  --snmp-community='mysnmpcommunity' \
  --warning-sessions-active-prct='80' \
  --critical-sessions-active-prct='90' \
  --verbose
```

Expected command output is shown below: 

```bash
OK: Device '0' cpu load: 8.00 %, memory used: 10.00%, sessions active: 0 (1000000), sessions failed: 0 (1000000) |
'0#device.cpu.utilization.percentage'=8.00%;;;0;100 '0#device.memory.usage.percentage'=10.00%;;;0;100 
'0#device.sessions.active.count'=0;;;0;1000000 '0#device.sessions.active.percentage'=0.00%;0:80;0:90;0;100
'0#device.sessions.failed.count'=0;;;0;1000000 '0#device.sessions.active.percentage'=0.00%;;;0;100
Device '0' cpu load: 8.00 %, memory used: 10.00%, sessions active: 0 (1000000), sessions failed: 0 (1000000)
```

The command above monitors a Versa Networks device usage (```--plugin network::versa::snmp::plugin --mode devices```) identified
by the IP address *10.0.0.1* (```--hostname=10.0.0.1```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='mysnmpcommunity'```).

This command would trigger a WARNING alarm if the active sessions used raise over 80% of the device session capacity 
(```--warning-sessions-active-prct='80'```) and a CRITICAL alarm over 90% (```--critical-sessions-active-prct='90'```).

For each Plugin mode, all the options as well as all the available thresholds can be displayed by adding the ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_versa_snmp.pl --plugin network::versa::snmp::plugin --mode devices --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues: 
* The SNMP agent of the device isn't started or is misconfigured 
* An external device is blocking the request (firewall, ...)
