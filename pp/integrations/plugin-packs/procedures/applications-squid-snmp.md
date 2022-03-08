---
id: applications-squid-snmp
title: Squid SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack assets

### Monitored objects

* Cache Usage
* Protocol statistics

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Caches-Usage" label="Caches-Usage">

| Metric name                      | Description                | Unit  |
|:---------------------------------|:---------------------------|:------|
| cache.cpu.utilization.percentage | Cpu usage                  | %     |
| cache.memory.usage.bytes         | Memory usage               | B     |
| cache.filedescriptors.count      | Number of file descriptors | count |
| cache.objects.count              | Number of object stored    | count |

</TabItem>
<TabItem value="Protocol-Stats" label="Protocol-Stats">

* HTTP statistics

| Metric name                    | Description           | Unit  |
|:-------------------------------|:----------------------|:------|
| http.hits.percentage           | HTTP hits rate        | %     |
| http.errors.count              | Number of HTTP errors | count |
| http.traffic.in.bitspersecond  | HTTP traffic in       | b/s   |
| http.traffic.out.bitspersecond | HTTP traffic out      | b/s   |

* ICP statistics

| Metric name                   | Description     | Unit |
|:------------------------------|:----------------|:-----|
| icp.traffic.in.bitspersecond  | ICP traffic in  | b/s  |
| icp.traffic.out.bitspersecond | ICP traffic out | b/s  |

* Cache statistics

| Metric name                            | Description                   | Unit  |
|:---------------------------------------|:------------------------------|:------|
| cache.server.traffic.in.bitspersecond  | Cache server traffic in       | b/s   |
| cache.server.traffic.out.bitspersecond | Cache server traffic out      | b/s   |
| cache.clients.count                    | Current number of clients: %s | count |

</TabItem>
</Tabs>

## Prerequisites

To use this pack, the SNMP service must be properly configured on your Squid 
proxy. Squid provides an official documentation to achieve this: 
https://wiki.squid-cache.org/Features/Snmp

### Network flow

The Squid proxy must be reachable from the Centreon Poller on the 
UDP/161 SNMP port.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor your *Squid proxy* ressources:

```bash
yum install centreon-plugin-Applications-Squid-Snmp
```

2. On the Centreon Web interface, install the *Squid SNMP* Centreon Plugin Pack on the **Configuration > Plugin Packs** page

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor your *Squid proxy* ressources:

```bash
yum install centreon-plugin-Applications-Squid-Snmp
```

2. Install the *Squid SNMP* Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-squid-snmp
```

3. On the Centreon Web interface, install the *Squid SNMP* Centreon Plugin Pack on the **Configuration > Plugin Packs** page

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the "Name", "Alias" & "IP Address / DNS" fields according to your *Squid proxy* settings
* Select the *Applications-Squid-Snmp-custom* template to apply to the Host

If you are using SNMP Version 3, use the SNMPEXTRAOPTIONS Macro to configure
    your own SNMPv3 credentials combo.

| Mandatory | Name             | Description                                 |
|:----------|:-----------------|:--------------------------------------------|
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo |

## How to check in the CLI that the configuration is OK and what are the main options for ? 

Once the plugin installed, log into your Centreon Poller CLI using the 
*centreon-engine* user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_squid_snmp.pl \
    --plugin=apps::squid::snmp::plugin \
    --mode=cache-usage \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --filter-counters='' \
    --warning-cpu='80' \
    --critical-cpu='90' \
    --use-new-perfdata
```

Expected command output is shown below:

```bash
OK : Cpu usage: 30 % Memory usage: 265289728 B Number of file descriptors: 45 Number of object stored: 23 | 'cache.cpu.utilization.percentage'=30%;;;0;100 
'cache.memory.usage.bytes'=265289728B;;;0; 'cache.filedescriptors.count'=45;;;0; 'cache.objects.count'=23;;;0; 
```

This command would trigger a WARNING alarm if the *cpu* utilization is reported 
as over 80% (`--warning-cpu='80'`) and a CRITICAL alarm if over 90% 
(`--critical-cpu='90'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_squid_snmp.pl  \
    --plugin=apps::squid::snmp::plugin  \
    --mode=cache-usage  \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
 /usr/lib/centreon/plugins//centreon_squid_snmp.pl  \
    --plugin=apps::squid::snmp::plugin  \
    --list-mode
```

### Troubleshooting

#### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:

* Your SNMP server isn't started or misconfigured
* An external device is blocking your request (firewall, ...)

#### UNKNOWN: SNMP GET Request : Cant get a single value

This message generally means that SNMP privileges are not wide enough for
the mode/Plugin to work properly.
