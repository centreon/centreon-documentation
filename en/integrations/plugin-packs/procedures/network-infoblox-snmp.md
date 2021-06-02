---
id: network-infoblox-snmp
title: Infoblox SNMP
---

## Plugin Pack Assets

### Monitored Objects

The Plugin Pack Infoblox SNMP collects metrics for:
* Dhcp
* Dns
* Interfaces
* Services
* System

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                        | Description                                                           |
| :------------------------------- | :-------------------------------------------------------------------- |
| Net-Infoblox-SNMP-Interface-Name | Discover network interfaces and monitor bandwidth utilization         |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Dhcp-->

| Metric name                                         | Description                                              | Unit |
| :-------------------------------------------------- | :------------------------------------------------------- | :--- |
| dhcp.discovers.count                                | Number of discovery messages received                    |      |
| dhcp.requests.count                                 | Number of requests received                              |      |
| dhcp.releases.count                                 | Number of releases received                              |      |
| dhcp.offers.count                                   | Number of offers sent                                    |      |
| dhcp.acks.count                                     | Number of acks sent                                      |      |
| dhcp.nacks.count                                    | Number of nacks sent                                     |      |
| dhcp.declines.count                                 | Number of declines received                              |      |
| dhcp.informs.count                                  | Number of informs received                               |      |
| dhcp.others.count                                   | Number of other messages received                        |      |
| *subnet\_ipaddr*\#subnet.addresses.usage.percentage | Percentage of dynamic DHCP address for subnet leased out | %    |

<!--Dns-->

| Metric name                                            | Description                                                                                                | Unit |
| :----------------------------------------------------- | :--------------------------------------------------------------------------------------------------------- | :--- |
| dns.queries.persecond                                  | Number of dns queries                                                                                      |      |
| dns.hits.percentage                                    | Dns hit ratio                                                                                              | %    |
| dns.queries.authoritative.latency.1m.microseconds      | Average latencies for incoming DNS queries during the last 1 minute where the reply was authoritative      |      |
| dns.queries.authoritative.latency.5m.microseconds      | Average latencies for incoming DNS queries during the last 5 minute where the reply was authoritative      |      |
| dns.queries.authoritative.latency.15m.microseconds     | Average latencies for incoming DNS queries during the last 15 minute where the reply was authoritative     |      |
| dns.queries.non_authoritative.latency.1m.microseconds  | Average latencies for incoming DNS queries during the last 1 minute where the reply was non authoritative  |      |
| dns.queries.non_authoritative.latency.5m.microseconds  | Average latencies for incoming DNS queries during the last 5 minute where the reply was non authoritative  |      |
| dns.queries.non_authoritative.latency.15m.microseconds | Average latencies for incoming DNS queries during the last 15 minute where the reply was non authoritative |      |
| *zone\_name*\#zone.responses.succeeded.count           | Number of successful responses                                                                             |      |
| *zone\_name*\#zone.referrals.count                     | Number of DNS referrals                                                                                    |      |
| *zone\_name*\#zone.queries.nxrrset.count               | Number of DNS query received for non-existent record                                                       |      |
| *zone\_name*\#zone.queries.failed.count                | Number of Failed queries                                                                                   |      |

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface        | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--Services-->

| Metric name                                        | Description                      | Unit |
| :------------------------------------------------- | :------------------------------- | :--- |
| service status                                     | Status of the service            |      |

<!--System-->

| Metric name                     | Description                 | Unit |
| :------------------------------ | :-------------------------- | :--- |
| cpu.utilization.percentage      | CPU utilization             | %    |
| memory.usage.percentage         | Memory usage                | %    |
| swap.usage.percentage           | Swap usage                  | %    |
| system.cpu1.temperature.celsius | CPU1 temperature            | C    |
| system.cpu2.temperature.celsius | CPU2 temperature            | C    |
| ha status                       | Status of high-availability |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your Infoblox, the SNMP must be configured.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Infoblox-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Infoblox SNMP* Plugin Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Infoblox-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin Pack from the RPM:

```bash
yum install centreon-pack-network-infoblox-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Infoblox SNMP* Plugin Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *Net-Infoblox-SNMP-custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_infoblox_snmp.pl \
    --plugin=network::infoblox::snmp::plugin \
    --mode=system \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='infoblox_ro' \
    --warning-cpu-load='90' \
    --critical-cpu-load='95' \
    --verbose
```

Expected command output is shown below:

```bash
OK: System 'IB-825' is ok | 'cpu.utilization.percentage'=3.00%;0:90;0:95;0;100 'memory.usage.percentage'=2.00%;;;0;100 'swap.usage.percentage'=0.00%;;;0;100 'system.cpu1.temperature.celsius'=20.00C;;;;
checking system 'IB-825'
    cpu load: 3.00 %
    memory used: 2.00 %
    swap used: 0.00 %
    cpu1 temperature: 20.00 C
    high-availablity status is 'Not Configured'
```

The command above monitors Infoblox (```--plugin=network::infoblox::snmp::plugin --mode=system```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='infoblox_ro'```).

This command would trigger a WARNING alarm if cpu utilization over 90% 
(```--warning-cpu-load='90'```) and a CRITICAL alarm over 95% (```--critical-cpu-load='95'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_infoblox_snmp.pl \
    --plugin=network::infoblox::snmp::plugin \
    --mode=system \
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
    SNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.7779
