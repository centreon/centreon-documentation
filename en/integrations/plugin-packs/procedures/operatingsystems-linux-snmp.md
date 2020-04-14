---
id: os-linux-snmp
title: Linux Snmp
---

## Overview

Linux is a family of open source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution. 

## Plugin-pack assets

### Monitored objects

This plugin-pack provides monitoring of every Linux based systems with a SNMP server enabled

    * Centos 
    * Redhat
    * Debian
    * Ubuntu
    * ...

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Host-->

| Rule name                                  | Description                                                                 |
| :----------------------------------------- | :-------------------------------------------------------------------------- |
| App-Protocol-SNMP-HostDiscovery            | Discover Linux box based upon Sysdesc value by scanning a subnet            |

<!--Services-->

| Rule name                                  | Description                                                                 |
| :----------------------------------------- | :-------------------------------------------------------------------------- |
| OS-Linux-SNMP-Disk-Name                    | Discover your disk partition and monitor space occupation                   |
| OS-Linux-SNMP-Inodes-Name                  | Discover your disk partition and Inodes usage                               |
| OS-Linux-SNMP-Packet-Errors-Name           | Discover network interfaces and monitor errored and discarded packets       |
| OS-Linux-SNMP-Traffic-Name                 | Discover network interfaces and monitor bandwidth utilization               |

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques collectées

In addition to modes and metrics described here, it is also possible to deploy the followin monitoring on your Linux box: 

    *  CPU detailed: Advanced monitoring of the CPU (User, Nice, Idle, ...)
    *  Process state: State of one or several processes running on the server. It's possible to check CPU and Memory utilization of a specific process. 
    *  TCP connection: Check number of TCP connections. [State:listen, closeWait, ...] [type: ipv4, dns, ...] [service]
    *  Uptime: Elapsed time since the last reboot

<!--DOCUSAURUS_CODE_TABS-->

<!--cpu-->

| Metric name                        | Description                                                          |
| :--------------------------------- | :-------------------------------------------- |
| cpu.utilization.percentage         | CPU utilization. Units : %                    |
| core.cpu.utilization.percentage    | CPU Core utilization. Units : %               |

<!--Memory-->

| Metric name             | Description                                              |
| :---------------------  | :------------------------------------------------------- |
| memory.usage.bytes      | Memory usage on the device. Units : Bytes                |
| memory.free.bytes       | Memory free on the device. Units : Bytes                 |
| memory.usage.percentage | Memory usage on the device. Units : %                    |
| memory.buffer.bytes     | Buffered Memory allocation. Units : Bytes                |
| memory.cached.bytes     | Cached Memory allocation. Units : Bytes                  |
| memory.shared.bytes     | Shared Memory allocation. Units : Bytes                  |

<!--Traffic-->

| Metric name                         | Description                                                      |
| :---------------------------------- | :--------------------------------------------------------------- |
| status                              | Status of the interface                                          |
| interface.traffic.in.bitspersecond  | Incoming traffic going through the interface. Units: B/s & %     |
| interface.traffic.out.bitspersecond | Outgoing traffic going through the interface. Units: B/s & %     |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^ens160$' --name]

<!--Swap-->

| Metric name                 | Description                                        |
| :-------------------------- | :------------------------------------------------- |
| swap.usage.bytes            | Swap usage Units: Bytes                           |
| swap.free.bytes             | Swap free Units: Bytes                            |
| swap.usage.percentage       | Swap usage Units: %                               |

<!--Load-->

| Metric name                 | Description                                        |
| :-------------------------- | :------------------------------------------------- |
| load1                       | System load 1 minute-sample                        |
| load5                       | System load 5 minute-sample                        |
| load15                      | System load 15 minute-sample                       |

<!--Disk-IO-->

| Metric name                 | Description                                          |
| :-------------------------- | :--------------------------------------------------- |
| disk#sum_read_write         | I/O READ volume on all devices. Units: B/s           |
| disk#sum_read_write_iops    | I/O WRITE volume on all devices. Units: B/s          |
| disk#read                   | I/O READ volume on a specific device. Units: B/s     |
| disk#write                  | I/O WRITE volume on a specific device. Units: B/s    |
| disk#read_iops              | Number or read operation on a device. Unis: iops     | 
| disk#write_iops             | Number or read operation on a device. Unis: iops     | 

<!--Storage-->

| Metric name                            | Description                                   |
| :------------------------------------- | :-------------------------------------------- |
| parition#storage.space.usage.bytes     | Used space on a disk partition. Units: Bytes  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To monitor your Linux box, your SNMP has to be installed and configured. Most of the distrib relies on net-snmp. 

## net-snmp server configuration

:note: A detailed documentation on how-to configure SNMP is available in the documentation of all Linux distribution.

Find below a minimalist snmpd.conf / net-snmp config file (replace **my-snmp-community** by the value you want).

```
com2sec notConfigUser  default       my-snmp-community
group   notConfigGroup v1           notConfigUser
group   notConfigGroup v2c           notConfigUser
view centreon included .1.3.6.1
view    systemview    included   .1.3.6.1.2.1.1
view    systemview    included   .1.3.6.1.2.1.25.1.1
access notConfigGroup "" any noauth exact centreon none none
access  notConfigGroup ""      any       noauth    exact  systemview none none
includeAllDisks 10%
```

You must restart your SNMP server after modifying its configuration. Also make sure that your SNMP server is configured to start automatically during boot. 

### Network flow

Monitoring server should have the capability to reach the target server through TCP/161 SNMP port

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install plugin code on every pollers monitoring Linux box 

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Install the 'OS-Linux-SNMP' pack from "Configuration > Plugin packs > Manager" page 

<!--Offline IMP License-->

1. Install plugin code on every pollers monitoring Linux box

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Install the pack RPM to get plugin-pack assets locally 

```bash
yum install centreon-pack-operatingsystems-linux-snmp
```

3. Install the 'OS-Linux-SNMP' pack from "Configuration > Plugin packs > Manager" page 

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

When adding a new Linux host, make sure to fill Snmp Version and Snmp Community fields. 

  :warning: When using snmp v3, set extra SNMP parameters in the SNMPEXTRAOPTIONS macro. 

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How do I run my plugin through CLI and what does main parameters stand for ?

Once you've installed the plugin, you can test it under the centreon-engine system user

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl
    --plugin=os::linux::snmp::plugin
    --mode=cpu
    --hostname=10.30.2.114
    --snmp-version='2c'
    --snmp-community='linux_ro'
    --verbose
```

This check monitors CPU utilization (```--mode=cpu```) of a Linux server correspondint to 10.30.2.114 IP addr (```--hostname=10.30.2.114```). SNMP version 2 is used and the community is linux_ro (```--snmp-community='linux_ro'```).

All avalable modes with the plugin can be displayed with: 

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --list-mode
```

For each mode, you can display all the options available with something like that: 

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues: 
* Your SNMP server isn't started or misconfigured 
* An external device is blocking your request (firewall, ...)

### UNKNOWN: SNMP GET Request : Cant get a single value.

This message generally means that SNMP privileges are not wide enough for the mode/plugin to work correctly. 

If it only happens on the Inodes mode, make sur you have the following directive in your SNMP server configuration: 

includeAllDisks 10%