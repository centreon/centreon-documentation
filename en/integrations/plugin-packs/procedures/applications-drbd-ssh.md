---
id: applications-drbd-ssh
title: DRBD SSH
---

## Overview

DRBD (Distributed Replicated Block Device) is a distributed storage architecture for GNU/Linux, 
allowing the replication of block devices (disks, partitions, logical volumes etc.) between servers.
DRBD is free software, but support exists. DRBD consists of a kernel module, administration tools in
user space as well as shell scripts.

## Plugin-Pack Assets

### Monitored Objects

* DRBD replication including roles, peers, devices

### Collected Metrics

More information about collected metrics is available in the official DRBD documentation : https://www.linbit.com/drbd-user-guide/drbd-guide-9_0-en/

<!--DOCUSAURUS_CODE_TABS-->

<!--Resources-->

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

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

A number of distributions provide DRBD, including pre-built binary packages. 
Support for these builds, if any, is being provided by the associated distribution vendor. 
Their release cycle may lag behind DRBD source releases.

More information is available on the official documentation of DRBD : https://www.linbit.com/drbd-user-guide/drbd-guide-9_0-en/#ch-install-packages

The centreon-engine user performs a SSH connection to a remote system user. This user must have enough privileges to run `/usr/bin/drbdsetup` command.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller monitoring DRBD resources:

```bash
yum install centreon-plugin-Applications-Drbd-Ssh.noarch
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *DRBD SSH* Plugin-Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller monitoring DRBD resources:

```bash
yum install centreon-plugin-Applications-Drbd-Ssh.noarch
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install ccentreon-pack-applications-drbd-ssh.noarch
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *DRBD SSH* Plugin-Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Adding a Host into Centreon, link it to the Template named *App-Drbd-SSH-custom*. 
Once the Template set, you have to set values according to the chosen SSH backend.
3 SSH backends are available to connect to the remote server: *sshcli*, *plink* and *libssh* which are detailed below.  

<!--DOCUSAURUS_CODE_TABS-->

<!--sshcli backend-->

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```sshcli```                                                           |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Cannot be used with backend. Only ssh key authentication                                    |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

**Warning** With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

<!--plink backend-->

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```plink```                                                            |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

**Warning** With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

<!--libssh backend (by défaut)-->

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```libssh```                                                           |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

With that backend, you don't have to validate the target server fingerprint manually.

<!--END_DOCUSAURUS_CODE_TABS-->

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
on the SSH default port _22_ (```---ssh-port=22```).

The _legacy-proc_ (```--legacy-proc``) option allows you to use the old proc file (```/proc/drbd``). This makes it possible to use a version prior to version 9.

All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins/centreon_drbd_ssh.pl \
--plugin=apps::drbd::local::plugin.pm \
--mode=resources --help
```

### I have that error message: ```UNKNOWN: Command error: Host key verification failed.```. What does it mean ?

It means you haven't manually validated the target server fingerprint with ```ssh``` or ```plink``` on the Centreon Poller.
