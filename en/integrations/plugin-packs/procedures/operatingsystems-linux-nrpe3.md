---
id: operatingsystems-linux-nrpe3
title: Linux NRPE3
---

## Overview

NRPE (Nagios Remote Plugin Executor) is a protocol that was designed to remotely run monitoring commands.

This Plugin-Pack relies on 3 components that are listed below:

| Component                 | Type              | Location       | Role                                                               |
| ------------------------- | ----------------- | -------------- | ------------------------------------------------------------------ |
| `centreon_nrpe3_plugin`   | Binary executable | Poller         | Sends a command name and arguments associated to it                |
| `centreon_linux_local.pl` | Perl Script       | Monitored host | Is run locally and returns a status, an output message and metrics |
| `centreon-nrpe3`          | Service/daemon    | Monitored host | Listens on port 5666 and runs the configured commands on demand    |

## Plugin-Pack assets

### Monitored objects

* CentOS 7 / RHEL7 Linux servers (to which this procedure applies)
* Other GNU/Linux distributions, provided that the plugin and the daemon are installed and configured manually)

### Collected metrics

Only standard metrics are described in this section. Be aware that a lot of other checks and metrics are available from the `centreon_linux_local.pl` Plugin. Here is a non-exhaustive list:

* Cmd-Generic : Check command returns
* Connections-Generic : Check tcp/udp connections
* Cpu-Detailed : Check average usage for each CPUs (User, Nice, System, Idle,
Wait, Interrupt, SoftIRQ, Steal, Guest, GuestNice)
* Disk-Generic-Name : Check storage usage (single partition)
* Disk-Global : Check storage usage (all partitions or filtered with regexp)
* Disk-IO-Generic-Name : Check some disk io counters (single partition)
* Disk-IO-Global : Check some disk io counters (all partitions or filtered with
regexp)
* File-Date-Generic : Check time (modified, creation,...) of files/directories
* File-Size-Generic : Check size of files/directories
* Inodes-Generic-Name : Check Inodes space usage (single partition)
* Inodes-Global : Check Inodes space usage (all partitions or filtered with
regexp)
* Is-File-Generic : Check the presence of a file
* Is-Not-File-Generic : Check the absence of a file
* Packet-Errors-Generic-Name : Check packet errors and discards on an interface
* Packet-Errors-Global : Check packet errors and discards on interfaces (all
interfaces or filtered with regexp)
* Process-Generic : Check linux processes
* Traffic-Generic-Name : Check Traffic (single interface)
* Traffic-Global : Check Traffic (all interfaces or filtered with regexp)

Here are the metrics that are collected by default:

<!--DOCUSAURUS_CODE_TABS-->
<!--Cpu-->

| Metric                              | Description               | UOM |
| :---------------------------------- | :------------------------ | :-: |
| `0#core.cpu.utilization.percentage` | Average core 0 CPU usage  |  %  |
| `1#core.cpu.utilization.percentage` | Average core 1 CPU usage  |  %  |
| ...                                 | ...                       |  %  |
| `cpu.utilization.percentage`        | Average overall CPU usage |  %  |

<!--Load-->

| Metric   | Description                            | UOM |
| :------- | :------------------------------------- | :-: |
| `load1`  | System load average on last 1 minute   |     |
| `load5`  | System load average on last 5 minutes  |     |
| `load15` | System load average on last 15 minutes |     |

<!--Memory-->

| Metric   | Description                           | UOM |
| :------- | :------------------------------------ | :-: |
| `buffer` | Amount of memory allocated to buffers |  B  |
| `cached` | Amount of memory allocated to cache   |  B  |
| `slab`   | Amount of memory allocated to Slab    |  B  |
| `used`   | Total amount of used memory           |  B  |

<!--Swap-->

| Metric                  | Description      | UOM |
| :---------------------- | :--------------- | :-: |
| `swap.free.bytes`       | Free Swap space  |  B  |
| `swap.usage.bytes`      | Used Swap space  |  B  |
| `swap.usage.percentage` | Swap space usage |  %  |

<!--Uptime-->
| Metric   | Description                    | UOM |
| :------- | :----------------------------- | :-: |
| `uptime` | Elapsed time since last reboot |  s  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

This chapter describes the installation prerequisites required by the plugin to run.

### Network flows

The default TCP port for NRPE is 5666.

| Source | Destination    | Protocol | Port |
| ------ | -------------- | -------- | ---- |
| Poller | Monitored host | TCP      | 5666 |

### Installation of Centreon-packaged NRPE3 daemon and Linux local plugin

The monitored hosts will need two components to be monitored:

* the `centreon_linux_local.pl` plugin
* the NRPE3 daemon

To install them, run the commands below:

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y http://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-1.el8.centos.noarch.rpm
dnf install centreon-nrpe3-daemon.x86_64 centreon-plugin-Operatingsystems-Linux-Local.noarch
```
<!--CentOS 7-->
```shell
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-1.el7.centos.noarch.rpm
yum install centreon-nrpe3-daemon.x86_64 centreon-plugin-Operatingsystems-Linux-Local.noarch
```
<!--END_DOCUSAURUS_CODE_TABS-->

> **NB:** To avoid installing the Centreon Yum repo on all your monitored Linux servers, both `http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-plugin-Operatingsystems-Linux-Local-20201006-142255.el7.centos.noarch.rpm` and `http://yum.centreon.com/standard/21.04/el7/stable/x86_64/RPMS/centreon-nrpe3-daemon-3.2.1-8.el7.centos.x86_64.rpm` (current version at the time this document is written) can be installed directly **but this installation mode won't allow the packages to be updated with `yum update` command, so it is not recommended**.

#### NRPE daemon configuration

The value of the `allowed_hosts` parameter in `/etc/nrpe/centreon-nrpe3.cfg` must be changed to include the pollers IP addresses:

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

And the service must be restarted:

```bash
systemctl restart centreon-nrpe3.service
```

## Installation

### Plugin-Pack

The Plugin-Pack installation concerns only the central server and the procedure depends on the type of license.

<!--DOCUSAURUS_CODE_TABS-->

<!--IMP/EPP "Online" License & IT-100 Editions-->

 Install the "Linux NRPE3" Plugin Pack from "Configuration > Plugin Packs > Manager" in the WUI.

<!--IMP/EPP "Offline" License-->

1. Install the Plugin Pack's RPM on the central server.

```bash
yum install centreon-pack-operatingsystems-linux-nrpe3
```

2. Install the "Linux NRPE3" Plugin Pack from "Configuration > Plugin Packs > Manager" in the WUI.

<!--END_DOCUSAURUS_CODE_TABS-->

### Centreon NRPE3 Plugin

Install this plugin on each poller:

```bash
yum install centreon-nrpe3-plugin
```
### Prerequisites and installation validation

If everything is fine, this command:

```bash
/usr/lib64/nagios/plugins/check_centreon_nrpe3 -H monitored_host_ip -p 5666
```

should produce this output:

```text
NRPE v3.2.1
```

Otherwise please refer to the [troubleshooting](#troubleshooting) section.

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

Once the template has been applied, the following macros can be customized:

| Mandatory | Name             | Description                                                                                 |
| :-------: | :--------------- | ------------------------------------------------------------------------------------------- |
|     X     | NRPECLIENT       | Name of the plugin to use to dialog with the NRPE3 daemon (default: `check_centreon_nrpe3`) |
|     X     | NRPEPORT         | TCP port the NRPE3 daemon is listening to (default: 5666)                                   |
|     X     | NRPETIMEOUT      | Command timeout (default: 5s)                                                               |
|           | NRPEEXTRAOPTIONS | Any extra option (default: `-u` to return an `UNKNOWN` state in case of a connection issue) |

## FAQ

### How does it work?

Here is a command monitors the Cpu usage of the Linux Server having the IP address `x.x.x.x`:

```bash
/usr/lib64/nagios/plugins/check_centreon_nrpe3 \
    -H x.x.x.x \
    -p 5666 -t 5 -u \
    -c check_centreon_plugins \
    -a 'os::linux::local::plugin' 'cpu'  '  --statefile-dir=/var/log/nrpe/centplugins'
```

It should return this:

```text
OK: CPU(s) average usage is: 1.16% | 'cpu0'=1.64%;;;0;100 'cpu1'=0.98%;;;0;100 'cpu2'=1.09%;;;0;100 'cpu3'=0.94%;;;0;100 'total_cpu_avg'=1.16%;;;0;100
```

What happened:

* The `check_centreon_nrpe3` executable asked the daemon to run the "check_centreon_plugins" command with "os::linux::local::plugin" "cpu"  and "  --statefile-dir=/var/log/nrpe/centplugins" as arguments
* The NRPE daemon puts together the command (that is defined in the NRPE configuration file) with its arguments, forming this local command line:

```bash
/usr/lib/centreon/plugins/centreon_linux_local.pl --plugin=os::linux::local::plugin --mode=cpu --statefile-dir=/var/log/nrpe/centplugins
```

* The NRPE daemon runs this command and sends its results (return code and standard output) back to the `check_centreon_nrpe3` executable, that was waiting for the answer.

### Troubleshooting

Let's detail the most common errors.

#### `connect to address x.x.x.x port 5666: Connection refused`

If the output of the command is:

```text
connect to address x.x.x.x port 5666: Connection refused
```

It probably means that the IP address from which the request was sent is not allowed to dialog with the NRPE daemon. 

The `allowed_hosts` parameter, in the `/etc/nrpe/centreon-nrpe3.cfg` configuration file ([see above](#nrpe-configuration)).

Then restart the service.

```bash
systemctl restart centreon-nrpe3.service
```

#### `CHECK_NRPE STATE CRITICAL: Socket timeout after 10 seconds`

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

```bash
systemctl restart centreon-nrpe3.service
```
