---
id: os-linux-snmp
title: Linux Snmp
---

## Overview

Linux is a family of open source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. Linux is typically packaged in a Linux distribution. 

## Plugin-pack assets

### Monitored objects

This Plugin-Pack provides assets to monitor all types of Linux based systems with a SNMP server enabled:

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
| OS-Linux-SNMP-Disk-Name                    | Discover the disk partitions and monitor space occupation                   |
| OS-Linux-SNMP-Inodes-Name                  | Discover the disk partitions and monitor inodes usage                       |
| OS-Linux-SNMP-Packet-Errors-Name           | Discover network interfaces and monitor errored and discarded packets       |
| OS-Linux-SNMP-Traffic-Name                 | Discover network interfaces and monitor bandwidth utilization               |

<!--END_DOCUSAURUS_CODE_TABS-->

## Collected Metrics

In addition to modes and metrics described here, it is also possible to monitor the following indicators: 

    *  CPU detailed: Advanced monitoring of the CPU (User, Nice, Idle, ...)
    *  Process state: State of one or several processes running on the server. It's also possible to check CPU and Memory utilization of a specific process. 
    *  TCP connection: Check number of TCP connections. [State:listen, closeWait, ...] [type: ipv4, dns, ...] [service]
    *  Uptime: Elapsed time since the last reboot

<!--DOCUSAURUS_CODE_TABS-->

<!--cpu-->

| Metric name                        | Description                                   |
| :--------------------------------- | :-------------------------------------------- |
| cpu.utilization.percentage         | CPU utilization. Unit : %                     |
| core.cpu.utilization.percentage    | Per Core CPU utilization. Unit : %            |

<!--Memory-->

| Metric name             | Description                                              |
| :---------------------  | :------------------------------------------------------- |
| memory.usage.bytes      | Memory usage on the device. Unit : Bytes                 |
| memory.free.bytes       | Free memory on the device. Unit : Bytes                  |
| memory.usage.percentage | Percentage of Memory usage on the device. Unit : %       |
| memory.buffer.bytes     | Buffered Memory allocation. Unit : Bytes                 |
| memory.cached.bytes     | Cached Memory allocation. Unit : Bytes                   |
| memory.shared.bytes     | Shared Memory allocation. Unit : Bytes                   |

<!--Traffic-->

| Metric name                         | Description                                                      |
| :---------------------------------- | :--------------------------------------------------------------- |
| status                              | Status of the interface                                          |
| interface.traffic.in.bitspersecond  | Incoming traffic going through the interface. Units: B/s & %     |
| interface.traffic.out.bitspersecond | Outgoing traffic going through the interface. Units: B/s & %     |

A regexp filter is available to target a specific interface identifier - ifName [```--interface='^ens160$' --name```]

<!--Swap-->

| Metric name                 | Description                                       |
| :-------------------------- | :------------------------------------------------ |
| swap.usage.bytes            | Used swap. Unit: Bytes                            |
| swap.free.bytes             | Free swap. Unit: Bytes                            |
| swap.usage.percentage       | Percentage of used swap. Unit: %                  |

<!--Load-->

| Metric name                 | Description                                        |
| :-------------------------- | :------------------------------------------------- |
| load1                       | System load 1 minute-sample                        |
| load5                       | System load 5 minutes-sample                       |
| load15                      | System load 15 minutes-sample                      |

<!--Disk-IO-->

| Metric name                 | Description                                           |
| :-------------------------- | :---------------------------------------------------- |
| disk#sum_read_write         | I/O READ volume on all devices. Unit: B/s             |
| disk#sum_read_write_iops    | I/O WRITE volume on all devices. Unit: B/s            |
| disk#read                   | I/O READ volume on a specific device. Unit: B/s       |
| disk#write                  | I/O WRITE volume on a specific device. Unit: B/s      |
| disk#read_iops              | Number of read operations on a device. Unit: iops     | 
| disk#write_iops             | Number of read operations on a device. Unit: iops     | 

<!--Storage-->

| Metric name                             | Description                                  |
| :-------------------------------------- | :------------------------------------------- |
| partition#storage.space.usage.bytes     | Used space on a disk partition. Unit: Bytes  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To monitor a Linux based device, the SNMP service must be installed and configured. Most of Linux distributions rely on net-snmp. 

## net-snmp server configuration

:note: A detailed documentation on how-to configure SNMP is available in the documentation of each Linux distribution.

Find below a minimalist snmpd.conf / net-snmp config file (replace **my-snmp-community** by the relevant value).

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

The SNMP server must be restarted each time the configuration is modified. Also make sure that the SNMP server is configured to automatically start on boot. 

### Network flow

The target server must be reachable from the Centreon Poller on the UDP/161 SNMP port.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Linux SNMP Centreon Plugin on every poller expected to monitor the devices: 

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Install the 'OS-Linux-SNMP' Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page 

<!--Offline IMP License-->

1. Install the Linux SNMP Centreon Plugin on every poller expected to monitor the devices:

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Install the Centreon Plugin-Pack RPM: 

```bash
yum install centreon-pack-operatingsystems-linux-snmp
```

3. Install the 'OS-Linux-SNMP' Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page 

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

When adding a new Linux host into Centreon, make sure to fill the Snmp Version and Snmp Community fields. 

  :warning: When using snmp v3, set extra SNMP parameters in the SNMPEXTRAOPTIONS macro. 

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### How do I run my plugin through the CLI and what do the main parameters stand for ?

Once you've installed the plugin, you can test it logging with centreon-engine user:

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl
    --plugin=os::linux::snmp::plugin
    --mode=cpu
    --hostname=10.30.2.114
    --snmp-version='2c'
    --snmp-community='linux_ro'
    --verbose
```

This check monitors CPU utilization (```--mode=cpu```) of a Linux server. The server's IP address is 10.30.2.114 (```--hostname=10.30.2.114```). SNMP version 2 is used and the community is linux_ro (```--snmp-community='linux_ro'```).

All available modes with the plugin can be displayed with: 

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --list-mode
```

The available options for a mode can be displayed using the ```--help``` parameter: 

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

This message generally means that SNMP privileges are not wide enough for the mode/plugin to work properly. 

If it only happens on the Inodes mode, make sure the following directive is set in the SNMP server configuration file: 

includeAllDisks 10%
