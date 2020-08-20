---
id: applications-monitoring-centreon-mbi
title: Centreon MBI
---

## Overview

Centreon Monitoring Business Intelligence (MBI) is a software tool designed to 
help business users make critical decisions and to facilitate management of an 
IT environment. Centreon MBI analyzes data from monitored events, performance 
counters and capacity accessed from the Centreon Enterprise Monitoring Solution 
(EMS), providing you with full visibility of your infrastructures and 
application activities through ITIL compliant reporting.

## Plugin-Pack assests

### Monitored objects

* Centreon MBI reporting server

### Collected metrics

In addition to modes and metrics described here, it is also possible to monitor 
the following indicators:

* DWH-db-content: Check if the database is up-to-date
* DWH-partitions: Check if all MySQL partitions are up-to-date
* failed-jobs: Check if any job failed
* Ntp: Check time offset of server with ntp server.
* proc-cbis: State of the cbis process on the Centreon MBI reporting
server
* proc-mysql: State of the MySQL process on the Centreon MBI reporting
server

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

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To monitor a Centreon MBI reporting server, the NRPE3 and SNMP services must be
installed and configured.

### NRPE3

The default TCP port for NRPE is 5666.

| Source      | Destination                    | Protocol   | Port    |
| :---------- | :----------------------------- | :--------- | :------ |
| Poller      | Centreon MBI reporting server  | TCP        | 5666    |

The monitored Centreon MBI reporting server will need two components to be 
monitored:

* the centreon_linux_local.pl plugin
* the NRPE3 daemon

To install them, run the commands below:

```shell
yum install http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
yum install centreon-nrpe3-daemon.x86_64 centreon-plugin-Operatingsystems-Linux-Local.noarch
```

The value of the allowed_hosts parameter in /etc/nrpe/centreon-nrpe3.cfg must be
changed to include the pollers IP addresses:

```ini
[...]
# ALLOWED HOST ADDRESSES
# This is an optional comma-delimited list of IP address or hostnames
# that are allowed to talk to the NRPE daemon. Network addresses with a bit mask
# (i.e. 192.168.1.0/24) are also supported. Hostname wildcards are not currently
# supported.
allowed_hosts=127.0.0.1,::1
[...]
```

Futhermore, add the following lines at the end of the file:

```ini
command[check_partitions]=/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --partitions
command[check_db]=/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --db-content
command[check_jobs]=/usr/share/centreon-bi/etl/centreonbiMonitoring.pl --jobs
```

And the service must be restarted:

```shell
systemctl restart centreon-nrpe3.service
```

Install the plugin on each needed poller:

```shell
yum install centreon-nrpe3-plugin
```

If everything is fine, this command:

```shell
/usr/lib64/nagios/plugins/check_centreon_nrpe3 -H monitored_host_ip -p 5666
```

should produce this output:

```
NRPE v3.2.1
```

Otherwise please refer to the [troubleshooting](#troubleshooting) section.

### SNMP

The target server must be reachable from the Centreon Poller on the UDP/161 
SNMP port.

| Source      | Destination                    | Protocol   | Port    |
| :---------- | :----------------------------- | :--------- | :------ |
| Poller      | Centreon MBI reporting server  | UDP        | 161     |


Install the SNMP service on the Centreon MBI reporting server.

```shell
yum install net-snmp
```

Open */etc/snmp/snmpd.conf* and replace ```my-snmp-community``` by the relevant 
value. Comment all the lines begin by ```view``` and add the following line:

```
view systemview included .1
```

It should look like this:

```
com2sec notConfigUser  default       my-snmp-community
[...]
#view    systemview    included   .1.3.6.1.2.1.1
#view    systemview    included   .1.3.6.1.2.1.25.1.1
view    systemview    included   .1
```

The SNMP server must be restarted each time the configuration is modified. 
Also make sure that the SNMP server is configured to automatically start on boot.

```shell
systemctl restart snmpd && systemctl enable snmpd
```

To check your SNMP installation, try to execute this command:

```shell
snmpwalk -v 1 -c my-snmp-community IPSERVER .1.3.6.1.2.1.1.1
```

You should get a response looking like the following:

```shell
SNMPv2-MIB::sysDescr.0 = STRING: Linux <SERVER> 2.6.18-128.1.10.el5 #1 SMP Thu May 7 10:39:21 EDT 2009 i686
```

Otherwise please refer to the [troubleshooting](#troubleshooting) section.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Linux SNMP Centreon plugin on every Centreon poller expected to monitor a Centreon MBI reporting server:

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

2. On the centreon Web interface, install the *Centreon MBI* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Linux SNMP Centreon plugin on every Centreon poller expected to monitor a Centreon MBI reporting server:

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-operatingsystems-linux-snmp centreon-pack-applications-monitoring-centreon-mbi
```

3. On the Centreon Web interface, install the *Centreon MBI* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Create a host using the appropriate template

Go to *Configuration* > *Host* > and click *Add*. Then fill the *SNMP Community*
and *SNMP Version* fields and apply the template 
*App-Monitoring-Centreon-MBI-custom*.

If you are using SNMP Version 3, use the
*SNMPEXTRAOPTIONS* macro to configure your own SNMPv3 credentials combo.

| Mandatory | Name             | Description                                                                                 |
| :-------- | :--------------- | ------------------------------------------------------------------------------------------- |
|     X     | NRPECLIENT       | Name of the plugin to use to dialog with the NRPE3 daemon (default: `check_centreon_nrpe3`) |
|     X     | NRPEPORT         | TCP port the NRPE3 daemon is listening to (default: 5666)                                   |
|     X     | NRPETIMEOUT      | Command timeout (default: 5s)                                                               |
|           | NRPEEXTRAOPTIONS | Any extra option (default: `-u` to return an `UNKNOWN` state in case of a connection issue) |
|           | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo                                                 |

#### Notice

We advice you to also link your reporting server to *App-DB-MySQL* template.
Refer to its monitoring procedure for the configuration.

## FAQ

### Troubleshooting

##### `connect to address x.x.x.x port 5666: Connection refused`

If the output of the command is:

```text
connect to address x.x.x.x port 5666: Connection refused
```

It probably means that the IP address from which the request was sent is not allowed to dialog with the NRPE daemon. 

The `allowed_hosts` parameter, in the `/etc/nrpe/centreon-nrpe3.cfg` configuration file [see above](#NRPE3).

Then restart the service.

```bash
systemctl restart centreon-nrpe3.service
```

##### `CHECK_NRPE STATE CRITICAL: Socket timeout after 10 seconds`

If the output of the command is:

```text
CHECK_NRPE STATE CRITICAL: Socket timeout after 10 seconds.
```

Then the following points must be checked:

* the `centreon-nrpe3` is effectively started

```bash
systemctl status centreon-nrpe3.service
```

* the TCP port that is used by the plugin (`-p 5666` for example) is the same as the one configured for the daemon
* there is no local firewall blocking the NRPE port (`iptables -L`)
* there is no firewall device filtering this port on the network

#### `NRPE: Command 'my_command' not defined`

If the output of the command is:

```text
NRPE: Command 'my_command' not defined
```

This means that the daemon is asked to run a command it doesn't know about.

For a command to be recognized, it has to be defined using the right syntax:

```ini
[my_command]=/full/path/to/command --argument --other-argument
```

And restart the daemon:

```ash
systemctl restart centreon-nrpe3.service
```

#### UNKNOWN: SNMP GET Request : Timeout

If you get this message, you're probably facing one of theses issues:

* Your SNMP server isn't started or misconfigured
* An external device is blocking your request (firewall, ...)

#### UNKNOWN: SNMP GET Request : Cant get a single value.

This message generally means that SNMP privileges are not wide enough for the
mode/plugin to work properly.