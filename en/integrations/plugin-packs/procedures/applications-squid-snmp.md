---
id: applications-squid-snmp
title: Squid SNMP
---

## Pack assets

### Monitored objects

* Cache Usage
* Protocol statistics

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Caches-Usage-->

| Metric name                      | Description                    | Unit  |
|:---------------------------------|:-------------------------------|:------|
| cache.cpu.utilization.percentage | Cpu usage: %s %%               | %     |
| cache.memory.usage.bytes         | Memory usage: %s %s            | B     |
| cache.filedescriptors.count      | Number of file descriptors: %s | count |
| cache.objects.count              | Number of object stored: %s    | count |

<!--Protocol-Stats-->

* HTTP statistics

| Metric name                    | Description          | Unit  |
|:-------------------------------|:---------------------|:------|
| http.hits.percentage           |                      | %     |
| http.errors.count              | errors: %s           | count |
| http.traffic.in.bitspersecond  | traffic in: %s %s/s  | b/s   |
| http.traffic.out.bitspersecond | traffic out: %s %s/s | b/s   |

* ICP statistics

| Metric name                   | Description          |
|:------------------------------|:---------------------|
| icp.traffic.in.bitspersecond  | traffic in: %s %s/s  |
| icp.traffic.out.bitspersecond | traffic out: %s %s/s |

* Cache statistics

| Metric name                            | Description                   | Unit  |
|:---------------------------------------|:------------------------------|:------|
| cache.server.traffic.in.bitspersecond  | traffic in: %s %s/s           | b/s   |
| cache.server.traffic.out.bitspersecond | traffic out: %s %s/s          | b/s   |
| cache.clients.count                    | current number of clients: %s | count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To use this pack, the SNMP service must be properly configured on your Squid 
proxy. Squid provides an official documentation to achieve this: 
https://wiki.squid-cache.org/Features/Snmp

### Network flow

The Squid proxy must be reachable from the Centreon Poller on the 
UDP/161 SNMP port.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor your *Squid proxy* ressources:

```bash
yum install centreon-plugin-Applications-Squid-Snmp
```

2. On the Centreon Web interface, install the *Squid SNMP* Centreon Plugin Pack on the `Configuration > Plugin Packs` page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor your *Squid proxy* ressources:

```bash
yum install centreon-plugin-Applications-Squid-Snmp
```

2. Install the *Squid SNMP* Centreon Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-applications-squid-snmp
```

3. On the Centreon Web interface, install the *Squid SNMP* Centreon Plugin Pack on the `Configuration > Plugin Packs` page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through `Configuration > Hosts`.
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
`--list-mode` parameter to thecommand:

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
the mode/plugin to work properly.
