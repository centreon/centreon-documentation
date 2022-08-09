---
id: applications-drbd-ssh
title: DRBD SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Overview

DRBD (Distributed Replicated Block Device) is a distributed storage architecture for GNU/Linux,
allowing the replication of block devices (disks, partitions, logical volumes etc.) between servers.
DRBD is free software, but support exists. DRBD consists of a kernel module, administration tools in
user space as well as shell scripts.

## Pack Assets

### Monitored Objects

* DRBD replication including roles, peers, devices

### Collected Metrics

More information about collected metrics is available in the official DRBD documentation : https://www.linbit.com/drbd-user-guide/drbd-guide-9_0-en/

<Tabs groupId="sync">
<TabItem value="Resources" label="Resources">

| Metric name                         | Description                         | Unit  |
| :-----------------------------------| :-----------------------------------| :---- |
| disk-status                         | Disk status                         |       |
| peer-connection-status              | Peer connection status              |       |
| peer-device-replication-status      | Peer device replication status      |       |
| peer-device-disk-status             | Peer device disk status             |       |
| resources.total.count               | Total number of resources           | count |
| disk.data.read.bytespersecond       | Disk data read                      |  B/s  |
| disk.data.written.bytespersecond    | Disk data written                   |  B/s  |
| peer.traffic.in.bitspersecond       | Peer traffic in                     |  b/s  |
| peer.traffic.out.bitspersecond      | Peer traffic out                    |  b/s  |

</TabItem>
</Tabs>

## Prerequisites

A number of distributions provide DRBD, including pre-built binary packages.
Support for these builds, if any, is being provided by the associated distribution vendor.
Their release cycle may lag behind DRBD source releases.

More information is available on the official documentation of DRBD : https://www.linbit.com/drbd-user-guide/drbd-guide-9_0-en/#ch-install-packages

The centreon-engine user performs a SSH connection to a remote system user. This user must have enough privileges to run ```/usr/bin/drbdsetup``` command.

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the 
**Configuration > Plugin Packs > Manager** menu. 

If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager: 

<Tabs groupId="sync">
<TabItem value="RHEL, Oracle Linux, Alma Linux version >= 8" label="RHEL, Oracle Linux, Alma Linux version >= 8">

```bash
dnf install centreon-pack-applications-drbd-ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash title='Debian >= 8'
apt-get centreon-pack-applications-drbd-ssh
```

</TabItem>
<TabItem value="RHEL, Oracle Linux, Alma Linux version <= 8" label="RHEL, Oracle Linux, Alma Linux version <= 8">

```bash
yum install centreon-pack-applications-drbd-ssh
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **DRBD SSH** Pack through
the **Configuration > Plugin Packs > Manager** menu. 

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature. 
When this feature is enabled, you can skip the installation part below. 

You still have to manually install the plugin on the poller(s) when: 
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

Use the commands below according to your operating system's package manager: 

<Tabs groupId="sync">
<TabItem value="RHEL, Oracle Linux, Alma Linux version >= 8" label="RHEL, Oracle Linux, Alma Linux version >= 8">

```bash
dnf install centreon-plugin-Applications-Drbd-Ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt-get install centreon-plugin-applications-drbd-ssh
```

</TabItem>
<TabItem value="RHEL, Oracle Linux, Alma Linux version <= 8" label="RHEL, Oracle Linux, Alma Linux version <= 8">

```bash
yum install centreon-plugin-Applications-Drbd-Ssh
```

</TabItem>
</Tabs>

## Configuration

Adding a Host into Centreon, link it to the Template named *App-Drbd-SSH-custom*.
Once the Template set, you have to set values according to the chosen SSH backend.
3 SSH backends are available to connect to the remote server: *sshcli*, *plink* and *libssh* which are detailed below.

<Tabs groupId="sync">
<TabItem value="sshcli backend" label="sshcli backend">

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```sshcli```                                                           |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Cannot be used with backend. Only ssh key authentication                                    |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

> With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

</TabItem>
<TabItem value="plink backend" label="plink backend">

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```plink```                                                            |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

> With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

</TabItem>
<TabItem value="libssh backend (default)" label="libssh backend (default)">

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```libssh```                                                           |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

With that backend, you do not have to validate the target server fingerprint manually.

</TabItem>
</Tabs>

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your Poller using the *centreon-engine* user account and test by running the following command :

```bash
/usr/lib/centreon/plugins/centreon_drbd_ssh.pl \
    --plugin=apps::drbd::local::plugin.pm \
    --mode=resources \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password=centreon-password \
    --ssh-backend=libssh \
    --legacy-proc \
    --verbose
```

Which output something similar to:

```bash
OK: total resources: 9 - All drbd resources are ok
| 'resources.total.count'=9;;;0; '0#disk.data.read.bytespersecond'=0B/s;;;0; '0#disk.data.written.bytespersecond'=0B/s;;;0; '0~0#peer.traffic.in.bitspersecond'=0b/s;;;0;
'0~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '1#disk.data.read.bytespersecond'=0B/s;;;0; '1#disk.data.written.bytespersecond'=0B/s;;;0; '1~0#peer.traffic.in.bitspersecond'=0b/s;;;0;
'1~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '2#disk.data.read.bytespersecond'=0B/s;;;0; '2#disk.data.written.bytespersecond'=0B/s;;;0; '2~0#peer.traffic.in.bitspersecond'=0b/s;;;0;
'2~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '3#disk.data.read.bytespersecond'=0B/s;;;0; '3#disk.data.written.bytespersecond'=0B/s;;;0; '3~0#peer.traffic.in.bitspersecond'=0b/s;;;0;
'3~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '4#disk.data.read.bytespersecond'=0B/s;;;0; '4#disk.data.written.bytespersecond'=0B/s;;;0; '4~0#peer.traffic.in.bitspersecond'=0b/s;;;0;
'4~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '5#disk.data.read.bytespersecond'=0B/s;;;0; '5#disk.data.written.bytespersecond'=0B/s;;;0; '5~0#peer.traffic.in.bitspersecond'=0b/s;;;0;
'5~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '6#disk.data.read.bytespersecond'=0B/s;;;0; '6#disk.data.written.bytespersecond'=0B/s;;;0; '6~0#peer.traffic.in.bitspersecond'=0b/s;;;0;
'6~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '7#disk.data.read.bytespersecond'=0B/s;;;0; '7#disk.data.written.bytespersecond'=0B/s;;;0; '7~0#peer.traffic.in.bitspersecond'=0b/s;;;0;
'7~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '8#disk.data.read.bytespersecond'=0B/s;;;0; '8#disk.data.written.bytespersecond'=0B/s;;;0; '8~0#peer.traffic.in.bitspersecond'=0b/s;;;0;
'8~0#peer.traffic.out.bitspersecond'=0b/s;;;0;
```

The command above gets the status of resources DRBD SSH (```--mode=resources```).
It uses a SSH username _centreon_ (```--ssh-username=centreon```), a SSH password _centreon-password_ (```--ssh-password='centreon-password'```),
uses a SSH backend _libssh_ (```--ssh-backend='libssh'```) and it connects to the host _10.30.2.81_ (```--hostname=10.30.2.81```)
on the SSH default port _22_ (```--ssh-port=22```).

The _legacy-proc_ (```--legacy-proc```) option allows you to use the old proc file (```/proc/drbd```). This makes it possible to use a version prior to version 9.

All the options that can be used with this plugin can be found over the ```--help``` options:

```bash
/usr/lib/centreon/plugins/centreon_drbd_ssh.pl \
--plugin=apps::drbd::local::plugin.pm \
--mode=resources --help
```

### I have that error message: ```UNKNOWN: Command error: Host key verification failed.```. What does it mean ?

It means you haven't manually validated the target server fingerprint with ```ssh``` or ```plink``` on the Centreon Poller.
