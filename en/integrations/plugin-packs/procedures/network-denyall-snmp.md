---
id: network-denyall-snmp
title: DenyAll SNMP
---

## Plugin-Pack Assets

### Monitored Objects

The Plugin-Pack DenyAll SNMP collects metrics for:
* Cpu
* Interfaces
* Load
* Memory
* Reverse-Proxy
* Storage
* Swap

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                              | Description              | Unit |
| :--------------------------------------- | :----------------------- | :--- |
| cpu.utilization.percentage               | CPU utilization          | %    |
| *cpuid*\#core.cpu.utilization.percentage | Per Core CPU utilization | %    |

<!--Interfaces-->

| Metric name                                            | Description                                         | Unit |
| :----------------------------------------------------- | :-------------------------------------------------- | :--- |
| status                                                 | Status of the interface                             |      |
| *interface\_name*\#interface.traffic.in.bitspersecond  | Incoming traffic going through the interface.       | b/s  |
| *interface\_name*\#interface.traffic.in.percentage     | Percentage of the interface's *in* bandwidth usage  | %    |
| *interface\_name*\#interface.traffic.out.bitspersecond | Outgoing traffic going through the interface.       | b/s  |
| *interface\_name*\#interface.traffic.out.percentage    | Percentage of the interface's *out* bandwidth usage | %    |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^eth0$' --name```]

<!--Load-->

| Metric name                 | Description                       | Unit |
| :-------------------------- | :-------------------------------- | :--- |
| load1                       | System load 1 minute-sample       |      |
| load5                       | System load 5 minutes-sample      |      |
| load15                      | System load 15 minutes-sample     |      |

<!--Memory-->

| Metric name             | Description                               | Unit  |
| :---------------------  | :---------------------------------------- | :---- |
| memory.usage.bytes      | Memory usage                              | B     |
| memory.free.bytes       | Free memory                               | B     |
| memory.usage.percentage | Memory usage in percentage                | %     |
| memory.buffer.bytes     | Buffered Memory allocation                | B     |
| memory.cached.bytes     | Cached Memory allocation                  | B     |
| memory.shared.bytes     | Shared Memory allocation                  | B     |

<!--Reverse-Proxy-->

| Metric name                                                   | Description                    | Unit |
| :------------------------------------------------------------ | :----------------------------- |:-----|
| status                                                        | Status of the reverse proxy    |      |
| *reverseproxy\_uid*\#reverse_proxy.cpu.utilization.percentage | CPU utilization                | %    |
| *reverseproxy\_uid*\#reverse_proxy.memory.usage.bytes         | Memory usage                   | B    |
| *reverseproxy\_uid*\#reverse_proxy.requests.persecond         | Number of requests per second  |      |

<!--Storage-->

| Metric name                                 | Description                     | Unit  |
| :------------------------------------------ | :------------------------------ | :---- |
| storage.partitions.count                    | Number of disk partition        |       |
| *partition_path*\#storage.space.usage.bytes | Used space on a disk partition  | B     |

<!--Swap-->

| Metric name                 | Description                          | Unit  |
| :-------------------------- | :----------------------------------- | :---- |
| swap.usage.bytes            | Used swap                            | B     |
| swap.free.bytes             | Free swap                            | B     |
| swap.usage.percentage       | Percentage of used swap              | %     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your DenyAll, the SNMP must be configured.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Denyall-Snmp
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *DenyAll SNMP* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Network-Denyall-Snmp
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-network-denyall-snmp
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *DenyAll SNMP* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and fill the *IP Address/FQDN*, *SNMP Version* and *SNMP Community* fields according to the device's configuration
* Apply the *Net-Denyall-SNMP-Custom* Host Template

> When using SNMP v3, use the SNMPEXTRAOPTIONS Macro to add specific authentication parameters

| Mandatory | Name             | Description                                    |
| :-------- | :--------------- | :--------------------------------------------- |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_denyall_snmp.pl \
    --plugin=network::denyall::snmp::plugin \
    --mode=reverse-proxy \
    --hostname=10.30.2.114 \
    --snmp-version='2c' \
    --snmp-community='denyall_ro' \
    --warning-cpu-utilization='90' \
    --critical-cpu-utilization='95' \
    --verbose
```

Expected command output is shown below:

```bash
OK: All reverse proxies are ok | 'c0e7cb1b2b6f7f20a19fdbaf3296c552#reverse_proxy.cpu.utilization.percentage'=0.00%;0:90;0:95;0;100 'c0e7cb1b2b6f7f20a19fdbaf3296c552#reverse_proxy.memory.usage.bytes'=11534336B;;;0; 'c0e7cb1b2b6f7f20a19fdbaf3296c552#reverse_proxy.requests.persecond'=0.00;;;0; 'c4b59d91060c39140fcafc114e7d96e4#reverse_proxy.cpu.utilization.percentage'=0.00%;0:90;0:95;0;100 'c4b59d91060c39140fcafc114e7d96e4#reverse_proxy.memory.usage.bytes'=25165824B;;;0; 'c4b59d91060c39140fcafc114e7d96e4#reverse_proxy.requests.persecond'=0.00;;;0;
checking reverse proxy 'c0e7cb1b2b6f7f20a19fdbaf3296c552'
    status: ok
    cpu usage: 0.00 %
    memory used: 11.00 MB
    requests: 0.00/s
checking reverse proxy 'c4b59d91060c39140fcafc114e7d96e4'
    status: ok
    cpu usage: 0.00 %
    memory used: 24.00 MB
    requests: 0.00/s
```

The command above monitors DenyAll (```--plugin=network::denyall::snmp::plugin --mode=memory```) identified
by the IP address *10.30.2.114* (```--hostname=10.30.2.114```). As the Plugin is using the SNMP protocol to request the device, the related
*community* and *version* are specified (```--snmp-version='2c' --snmp-community='denyall_ro'```).

This command would trigger a WARNING alarm if cpu utilization over 90% 
(```--warning-cpu-utilization='90'```) and a CRITICAL alarm over 95% (```--critical-cpu-utilization='95'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_denyall_snmp.pl \
    --plugin=network::denyall::snmp::plugin \
    --mode=reverse-proxy \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:
* The SNMP agent of the device isn't started or is misconfigured
* An external device is blocking the request (firewall, ...)

#### UNKNOWN: SNMP GET Request : Cant get a single value.

This error message often refers to the following issues: 
  - The agent doesn't support the MIB used by the plugin
  - The targeted SNMP OID cannot be fetched because of insufficient privileges on the device. 
    SNMP Agent must be capable of accessing to the enterprise branch: .1.3.6.1.4.1.18433.10
