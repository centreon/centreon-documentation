---
id: operatingsystems-linux-snmp
title: Linux SSH
---

## Overview

Linux is a family of open source Unix-like operating systems based on the Linux kernel, an operating system kernel first released on September 17, 1991, by Linus Torvalds. 

## Plugin-Pack Assets

### Monitored Objects
This Plugin-Pack provides assets to monitor all types of Linux based systems with a SSH server enabled:
* Centos 
* Redhat
* Debian
* Ubuntu
* Fedora
* ...

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                        | Description                                    |
| :--------------------------------- | :--------------------------------------------- |
| cpu.utilization.percentage         | CPU utilization. Unit : percentage (%)         |
| core.cpu.utilization.percentage    | CPU utilization by core. Unit : percentage (%) |


<!--Cpu Detailled-->

| Metric name           | Description                             |
| :-------------------- | :-------------------------------------- |
| cpu                   | Average usage for each CPUs. Unit : %   |
| total_cpu             | Average total CPUs. Unit : %            |


<!--Memory-->

| Metric name           | Description                                   |
| :-------------------- | :-------------------------------------------- |
| used                  | Memory used. Unit : B                         |
| slab                  | Slab allocation memory used. Unit : B         |
| buffer                | Memory buffured. Unit : B                     |
| cached                | Memory cached. Unit : B                       |


<!--Filesdate-->

| Metric name           | Description                                                 |
| :-------------------- | :---------------------------------------------------------- |
| name                  | Time (modified, creation,...) of files/directories. Unit: s |


<!--Filessize-->

| Metric name           | Description                               |
| :-------------------- | :---------------------------------------- |
| name                  | Size of one file/directorie. Unit : B     |
| total                 | Total Size of files/directories. Unit : B |


<!--Diskio-->

| Metric name                            | Description                                                  |
| :------------------------------------- | :----------------------------------------------------------- |
| device.io.read.usage.bytespersecond    | Read IO usage in bytes per second. Unit : B/s                |
| device.io.write.usage.bytespersecond   | Write IO usage in bytes per second. Unit : B/s               |
| device.io.read.time.milliseconds       | Read time in milliseconds. Unit : ms                         |
| device.io.write.time.milliseconds      | Write time in milliseconds. Unit : ms                        |
| device.io.write.time.milliseconds      | Write time in milliseconds. Unit : ms                        |
| device.io.utils.percentage             | IO utilization for  different usage type of CPU. Unit : ms   |


<!--Openfiles-->

| Metric name                 | Description                                       |
| :-------------------------- | :------------------------------------------------ |
| system.files.open.count     | Counter files open. Unit: counter                 |


<!--Swap-->

| Metric name                 | Description                       |
| :-------------------------- | :-------------------------------- |
| swap.usage.bytes            | Swap usage. Unit: B               |
| swap.free.bytes             | Swap free. Unit: B                |
| swap.usage.percentage       | Swap usage in percentage. Unit: % |


<!--Load-->

| Metric name                 | Description                           |
| :-------------------------- | :------------------------------------ |
| load1                       | Load average on 1 minute. Unit : %    |
| load5                       | Load average on 5 minutes. Unit : %   |
| load15                      | Load average on 15 minutes. Unit : %  |


<!--Uptime-->

| Metric name                 | Description                                                 |
| :-------------------------- | :---------------------------------------------------------- |
| uptime                      | Duration of system has been working and available. Unit : s |


<!--Paging-->

| Metric name                            | Description                                                      |
| :------------------------------------- | :--------------------------------------------------------------- |
| system.pgpgin.usage.bytespersecond     | Usage of the number of pgpgin in bytes per second. Unit : B/s    |
| system.pgpgout.usage.bytespersecond    | Usage of the number of pgpgout in bytes per second. Unit : B/s   |
| system.pswpin.usage.bytespersecond     | Usage of the number of pswpin in bytes per second. Unit : B/s    |
| system.pswpout.usage.bytespersecond    | Usage of the number of pages in bytes per second. Unit : B/s     |
| system.pgfault.usage.bytespersecond    | Usage pgfault in bytes per second. Unit : B/s                    |
| system.pgmajfault.usage.bytespersecond | Usage pgmajfault in bytes per second. Unit : B/s                 |


<!--Connections-->

| Metric name                 | Description                                        |
| :-------------------------- | :------------------------------------------------- |
| app                         | Number of application connection                   |
| service                     | Number of service connection                       |
| con_closed                  | Number of connection closed                        |
| con_closeWait               | Number of connection on wait close                 |
| con_closing                 | Number of connection closing                       | 
| con_established             | Number of connection etablished			   |
| con_finWait1                | Number of connection finWait1                      |
| con_finWait2                | Number of connection finWait1                      | 
| con_lastAck                 | Number of connection on last Ack                   |
| con_listen                  | Number of connection on listen                     |
| con_synReceived             | Number of connection synchronized Received         |
| con_synSent                 | Number of connection synchronized syn Sent         |
| con_timeWait                | Number of connection on time wait                  | 
| total                       | Total of connection                                |

<!--Inodes-->

| Metric name                 | Description                                 |
| :-------------------------- | :------------------------------------------ |
| used                        | Inodes space usage on partitions. Unit : %  |

<!--Process-->

| Metric name                 | Description                                 |
| :-------------------------- | :------------------------------------------ |
| nbproc                      |  Number of current processes. Units: Count  |


<!--Ntp-->

| Metric name           | Description                        |
| :-------------------- | :--------------------------------- |
| offset                | Offset of ntpd service. Unit : ms  |


<!--Quota-->

| Metric name           | Description                         |
| :-------------------- | :---------------------------------- |
| data_used             | Quota usage on partitions. Unit : B |


<!--Storage-->

| Metric name           | Description              |
| :-------------------- | :----------------------- |
| used                  | Storage usages. Unit : B |


<!--Traffic-->

| Metric name                         | Description                                                      |
| :---------------------------------- | :--------------------------------------------------------------- |
| status                              | Status of the interface                                          |
| interface.traffic.in.bitspersecond  | Incoming traffic going through the interface. Units: B/s & %     |
| interface.traffic.out.bitspersecond | Outgoing traffic going through the interface. Units: B/s & %     |


<!--END_DOCUSAURUS_CODE_TABS-->


## Prerequisites

### SSH configuration

A user is required to query the OS Linux by SSH. There is no need for root or sudo privileges.
There are two possible ways to perform SSH check, either by exchanging the SSH key from centreon-engine to the target server, 
or by setting your unique user and password directly in the host macros.

<!--DOCUSAURUS_CODE_TABS-->

<!--SSH keys exchange-->

Add and generate a password for your user on the **Target sever**:

```bash
adduser ro_ssh_centreon
passwd ro_ssh_centreon
```

Switch to `centreon-engine`'s bash environment on your Central server and Poller :

```bash
su - centreon-engine
```

Then, copy this key on to the **Target server** with the following commands:

```bash
ssh-keygen -t ed25519 -a 100
ssh-copy-id -i .ssh/id_ed25519.pub ro_ssh_centreon@<IP_TARGET_SERVER>
```

<!--User/Password Authentication-->

After setting the Name, Alias, IP, and Host Template parameters, you need to set up in the macros described in the **Configuration** part below.

<!--END_DOCUSAURUS_CODE_TABS-->

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every poller monitoring Linux SSH resources:

```bash
yum install centreon-plugin-Operatingsystems-Linux-Ssh.noarch
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Linux SSH* Plugin-Pack


<!--Offline IMP License-->

1. Install the Centreon Plugin on every poller monitoring Linux SSH resources:

```bash
yum install centreon-plugin-Operatingsystems-Linux-Ssh.noarch
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-operatingsystems-linux-ssh.noarch
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Linux SSH* Plugin-Pack


<!--END_DOCUSAURUS_CODE_TABS-->


## Configuration

Adding a new host into Centreon, apply the relevant host template matching your instance/cluster type. All of the host templates begin with *Os-Linux-SSH-custom*. 
Once the template set, you have to set values according to the chosen SSH backend.
3 SSH backends are available to connect to the Linux server: *sshcli*, *plink* and *libssh* which are detailed below.  

### sshcli backend

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```sshcli```                                                           |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your poller                |
|             | SSHPASSWORD     | Cannot be used with backend. Only ssh key authentication                                    |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

**Warning** With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

### plink backend

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```plink```                                                            |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your poller                |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

**Warning** With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

### libssh backend (by default)

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```libssh```                                                           |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your poller                |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

With that backend, you don't have to validate the target server fingerprint manually. Nice ;)


## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command (Parameters such as ```ssh-username``` or ```ssh-password```have to be adjusted):

```bash
 /usr/lib/centreon/plugins//centreon_linux_ssh.pl \
    --plugin=os::linux::local::plugin \
	--mode=cpu \
	--hostname='myipaddress' \
	--ssh-backend='libssh' \
	--ssh-username='myuser' \
	--ssh-password='mypassword' \
	--ssh-port='22' \
	--warning-core='60' \
	--critical-core='70' \
	--warning-average='60' \
	--critical-average='75' \
	--verbose \
	--use-new-perfdata
	
	
OK: CPU(s) average usage is 11.91 % - CPU '0' usage : 11.91 % |
'cpu.utilization.percentage'=11.91%;;;0;100 '0#core.cpu.utilization.percentage'=11.91%;;;0;100 
CPU '0' usage : 11.91 %
```

The command above gets the average of a Linux SSH CPU (```--mode=CPU```).

This command will trigger a WARNING alarm if the CPU Average increases to more than 60% (```--warning-average='60'``)
and a CRITICAL alarm if more than 75% (```--critical-average='75'```).

Thresholds can be set on all of the device metrics using the syntax ```--warning-*metric* --critical-*metric*```


All the options that can be used with this plugin can be found over the ```--help``` command:

``` /usr/lib/centreon/plugins//centreon_linux_ssh.pl --plugin=os::linux::local::plugin --mode=cpu --help```


### I have that error message: ```UNKNOWN: Command error: Host key verification failed.```. What does it mean ?

It means you haven't manually validated the target server fingerprint with ```ssh``` or ```plink``` on the Centreon poller.
