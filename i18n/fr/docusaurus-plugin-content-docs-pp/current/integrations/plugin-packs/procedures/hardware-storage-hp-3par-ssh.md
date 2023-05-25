---
id: hardware-storage-hp-3par-ssh
title: HP 3PAR SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Monitored Objects

The Centreon Pack **HP 3PAR** brings a host template:
* HW-Storage-HP-3par-SSH-custom

It brings the following service templates:

| Service Alias | Service Template                    | Description                | Default |
|:--------------|:------------------------------------|:---------------------------|:--------|
| Afc           | HW-Storage-HP-3par-Afc-SSH          | Check adaptive flash cache |         |
| Cages         | HW-Storage-HP-3par-Cages-SSH        | Check cages                |         |
| Capacity      | HW-Storage-HP-3par-Capacity-SSH     | Check storage capacities   | X       |
| Components    | HW-Storage-HP-3par-Components-SSH   | Check hardware             | X       |
| Disk-Usage    | HW-Storage-HP-3par-Disk-Usage-SSH   | Check disks                | X       |
| Nodes         | HW-Storage-HP-3par-Nodes-SSH        | Check nodes                | X       |
| Psu           | HW-Storage-HP-3par-Psu-SSH          | Check power supplies       |         |
| Time          | HW-Storage-HP-3par-Time-SSH         | Check nodes time offset    |         |
| Uptime        | HW-Storage-HP-3par-Uptime-SSH       | Check nodes uptime         |         |
| Volume-Usage  | HW-Storage-HP-3par-Volume-Usage-SSH | Check volumes              | X       |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Afc" label="Afc">

| Metric name                                         | Unit |
| :-------------------------------------------------- | :--- |
| node adaptive flash cache status                    |      |
| *node_id*#node.flashcache.usage.bytes               | B    |
| *node_id*#node.flashcache.free.bytes                | B    |
| *node_id*#node.flashcache.usage.percentage          | %    |
| *node_id*#node.flashcache.readhits.percentage       | %    |
| *volume_name*#volume.flashcache.readhits.percentage | %    |

</TabItem>
<TabItem value="Cages" label="Cages">

| Metric name                                         | Unit |
| :-------------------------------------------------- | :--- |
| cage status                                         |      |
| cage board firmware status                          |      |
| cage board self status                              |      |
| cage board partner status                           |      |
| cage power supply status                            |      |
| cage power supply AC status                         |      |
| cage power supply DC status                         |      |
| cage power supply fan status                        |      |
| cage drive status                                   |      |
| cage drive portA status                             |      |
| cage drive portB status                             |      |
| *cage_id~drive_id*#battery.charge.remaining.percent | %    |

</TabItem>
<TabItem value="Capacity" label="Capacity">

| Metric name                                               | Unit |
| :-------------------------------------------------------- | :--- |
| *storage_type*#storage.space.usage.bytes                  | B    |
| *storage_type*#storage.space.free.bytes                   | B    |
| *storage_type*#storage.space.usage.percentage             | %    |
| *storage_type*#storage.space.unavailable.bytes            | B    |
| *storage_type*#storage.space.failed.bytes                 | B    |
| *storage_type*#storage.space.compaction.ratio.count       |      |
| *storage_type*#storage.space.deduplication.ratio.count    |      |
| *storage_type*#storage.space.compression.ratio.count      |      |
| *storage_type*#storage.space.data_reduction.ratio.count   |      |
| *storage_type*#storage.space.overprovisioning.ratio.count |      |

</TabItem>
<TabItem value="Components" label="Components">

| Metric name                                               | Unit |
| :-------------------------------------------------------- | :--- |
| battery power supply status                               |      |
| *psu_id~battery_id*#hardware.battery.charge.percentage    | %    |
| cim service state and status                              |      |
| disk state                                                |      |
| node state                                                |      |
| port state                                                |      |
| power supply state                                        |      |
| *node_id~sensor_name*#hardware.sensor.current.ampere      | A    |
| *node_id~sensor_name*#hardware.sensor.voltage.volt        | V    |
| *node_id~sensor_name*#hardware.sensor.power.watt          | W    |
| *node_id~sensor_name*#hardware.sensor.temperature.celsius | C    |
| *node_id~sensor_name*#hardware.sensor.current.speed       | rpm  |
| wsapi service state and status                            |      |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Metric name                           | Unit |
| :------------------------------------ | :--- |
| disk status                           |      |
| *disk_id*#disk.space.usage.bytes      | B    |
| *disk_id*#disk.space.free.bytes       | B    |
| *disk_id*#disk.space.usage.percentage | %    |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Metric name                                      | Unit |
| :----------------------------------------------- | :--- |
| node status                                      |      |
| *node_id~cpu_id*#core.cpu.utilization.percentage | %    |

</TabItem>
<TabItem value="Psu" label="Psu">

| Metric name                                       | Unit |
| :------------------------------------------------ | :--- |
| power supply status                               |      |
| power supply AC status                            |      |
| power supply DC status                            |      |
| power supply battery status                       |      |
| power supply fan status                           |      |
| *node_id~psu_id*#battery.charge.remaining.percent | %    |
| *node_id~psu_id*#battery.charge.remaining.minutes |      |

</TabItem>
<TabItem value="Time" label="Time">

| Metric name                        | Unit |
| :--------------------------------- | :--- |
| *node_id*#node.time.offset.seconds | s    |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name                    | Unit |
| :----------------------------- | :--- |
| *node_id*#node.uptime..seconds | s    |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Metric name                                 | Unit |
| :------------------------------------------ | :--- |
| *volume_name*#volume.space.usage.bytes      | B    |
| *volume_name*#volume.space.free.bytes       | B    |
| *volume_name*#volume.space.usage.percentage | %    |

</TabItem>
</Tabs>

## Prerequisites

### Configure SSH connection

On each needed poller follow this steps:

a. Login with 'centreon-engine' user:

    # su - centreon-engine

b. If SSH doesn't exist, generate SSH key using following command (press ENTER
for each question):

    $ ssh-keygen

c. Get generated SSH public key

    $ vi ~/.ssh/id_rsa.pub

d. Connect to your HP 3PAR equipment using SSH with administrator account and
copy centreon-engine public key:

    3PAR01 cli% setsshkey
    Please enter the SSH public key below.  When finished, press enter twice.
    The key is usually long.  It's better to copy it from inside an editor
    and paste it here.  (Please make sure there are no extra blanks.)
    The maximum number of characters used to represent the SSH key
    (including the "from" option, key type, and additional comments) is 4095.
    
    ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAydSr8dvdf+N5apCrij3eom6a6gMZUibiBp6GUurADktPtm1jBdbZ2GVhnwiaeUqiwgxsBSjiGCKRlpIN/zBzM59li4k+fbhyO7SzXfB3IV3ueSVKlrVljyHQL6GqUjj9opxCg8jyKerCx6iTyqUvIJ4zmhaJXQAzxQFE7YLiuaaNN9ylH1z9ebuMZZKUh0gpXNT3ID4Ea+In5CAoPopwF50EdAIZ4QkS1EibhI9Lar8GqXMyHTNR/ZapvZ/KpI3lhduLT5OJ2QMbBzVrQFKXiLbYnU2AASYyFsQQC+7YASFwIEQ6D3sp0Wg8G1Dw/jmM01CsqthTm7j1Mw070OuJSw== centreon-engine@myserver
    
    SSH public key successfully set.
    
    3PAR01 cli%

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon package on every Centreon poller expected to monitor **HP 3PAR** resources:

```bash
yum install centreon-plugin-Hardware-Storage-Hp-3par-Ssh
```

2. On the Centreon web interface, install the **HP 3PAR SSH** Centreon Pack on the **Configuration > Monitoring Connectors** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon package on every Centreon poller expected to monitor **HP 3PAR** resources:

```bash
yum install centreon-plugin-Hardware-Storage-Hp-3par-Ssh
```

2. Install the **HP 3PAR SSH** Centreon Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-hardware-storage-hp-3par-ssh
```

3. On the Centreon web interface, install the **HP 3PAR SSH** Centreon Pack on the **Configuration > Monitoring Connectors** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** and **IP Address / DNS** fields according to your **HP 3PAR** equipment settings.
* Apply the **HW-Storage-HP-3par-SSH-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

> 3 SSH backends are available to connect to the remote server: *sshcli*, *plink* and *libssh* which are detailed below.

<Tabs groupId="sync">
<TabItem value="sshcli backend  (default)" label="sshcli backend  (default)">

| Mandatory   | Name            | Description                                                                      |
| :---------- | :-------------- | :------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Name of the backend: **sshcli**                                                  |
| X           | SSHUSERNAME     | By default, it uses the user running process **centengine** on your poller       |
|             | SSHPASSWORD     | Cannot be used with backend. Only ssh key authentication                         |
|             | SSHPORT         | By default: 22                                                                   |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: **--ssh-priv-key=/user/.ssh/id_rsa** |

**Warning** With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

</TabItem>
<TabItem value="plink backend" label="plink backend">

| Mandatory   | Name            | Description                                                                      |
| :---------- | :-------------- | :------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Name of the backend: **plink**                                                   |
| X           | SSHUSERNAME     | By default, it uses the user running process **centengine** on your poller       |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                          |
|             | SSHPORT         | By default: 22                                                                   |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: **--ssh-priv-key=/user/.ssh/id_rsa** |

**Warning** With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

</TabItem>
<TabItem value="libssh backend" label="libssh backend">

| Mandatory   | Name            | Description                                                                      |
| :---------- | :-------------- | :------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Name of the backend: **libssh**                                                  |
| X           | SSHUSERNAME     | By default, it uses the user running process **centengine** on your poller       |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                          |
|             | SSHPORT         | By default: 22                                                                   |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: **--ssh-priv-key=/user/.ssh/id_rsa** |

With that backend, you do not have to validate the target server fingerprint manually.

</TabItem>
</Tabs>

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \
    --plugin=storage::hp::3par::ssh::plugin \
    --mode=capacity \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=libssh \
    --verbose
```

The expected command output is shown below:

```bash
OK: All storage capacities are ok | 'FC#storage.space.usage.bytes'=9980928000000B;;;0;20103168000000 'FC#storage.space.free.bytes'=10122240000000B;;;0;20103168000000 'FC#storage.space.usage.percentage'=49.65%;;;0;100 'FC#storage.space.unavailable.bytes'=0B;;;0; 'FC#storage.space.failed.bytes'=0B;;;0; 'FC#storage.space.compaction.ratio.count'=2.31;;;0; 'FC#storage.space.overprovisioning.ratio.count'=0.92;;;0; 'SSD#storage.space.usage.bytes'=1476608000000B;;;0;4546560000000 'SSD#storage.space.free.bytes'=3069952000000B;;;0;4546560000000 'SSD#storage.space.usage.percentage'=32.48%;;;0;100 'SSD#storage.space.unavailable.bytes'=0B;;;0; 'SSD#storage.space.failed.bytes'=0B;;;0; 'SSD#storage.space.compaction.ratio.count'=4.93;;;0; 'SSD#storage.space.deduplication.ratio.count'=1.20;;;0; 'SSD#storage.space.data_reduction.ratio.count'=1.20;;;0; 'SSD#storage.space.overprovisioning.ratio.count'=0.48;;;0; 'Total#storage.space.usage.bytes'=11457536000000B;;;0;24649728000000 'Total#storage.space.free.bytes'=13192192000000B;;;0;24649728000000 'Total#storage.space.usage.percentage'=46.48%;;;0;100 'Total#storage.space.unavailable.bytes'=0B;;;0; 'Total#storage.space.failed.bytes'=0B;;;0; 'Total#storage.space.compaction.ratio.count'=2.59;;;0; 'Total#storage.space.deduplication.ratio.count'=1.23;;;0; 'Total#storage.space.data_reduction.ratio.count'=1.23;;;0; 'Total#storage.space.overprovisioning.ratio.count'=0.92;;;0;
checking storage 'FC'
    space usage total: 18.28 TB used: 9.08 TB (49.65%) free: 9.21 TB (50.35%), unavailable: 0.00 B, failed: 0.00 B
    compaction: 2.31, overprovisioning: 0.92
checking storage 'SSD'
    space usage total: 4.14 TB used: 1.34 TB (32.48%) free: 2.79 TB (67.52%), unavailable: 0.00 B, failed: 0.00 B
    compaction: 4.93, deduplication: 1.20, data reduction: 1.20, overprovisioning: 0.48
checking storage 'Total'
    space usage total: 22.42 TB used: 10.42 TB (46.48%) free: 12.00 TB (53.52%), unavailable: 0.00 B, failed: 0.00 B
    compaction: 2.59, deduplication: 1.23, data reduction: 1.23, overprovisioning: 0.92
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \
    --plugin=storage::hp::3par::ssh::plugin \
    --mode=capacity \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \
    --plugin=storage::hp::3par::ssh::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

