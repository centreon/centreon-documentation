---
id: hardware-devices-nvidia-gpu-smi-ssh
title: NVIDIA GPU SMI SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Monitored Objects

The Pack NVIDIA GPU collects metrics for:
* Gpu-stats

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Gpu-stats" label="Gpu-stats">

| Metric name                                                        | Description                                                                                                                                                          | Unit  |
| :----------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---- |
| devices.gpu.total.count                                            | Number of gpu devices                                                                                                                                                |       |
| *product\_name:id*#device.gpu.utilization.percentage               | Percent of time over the past sample period (between 1 second and 1/6 second depending on the product) during which one or more kernels was executing on the GPU     | %     |
| *product\_name:id*#device.gpu.memory.utilization.percentage        | Percent of time over the past sample period (between 1 second and 1/6 second depending on the product) during which global (device) memory was being read or written | %     |
| *product\_name:id*#device.gpu.encoder.utilization.percentage       | Percent of time over the past sample period (sampling rate is variable) during which the GPU video encoder was being used                                            | %     |
| *product\_name:id*#device.gpu.decoder.utilization.percentage       | Percent of time over the past sample period (sampling rate is variable) during which the GPU video decoder was being used                                            | %     |
| *product\_name:id*#device.gpu.frame_buffer.memory.usage.bytes      | On-board frame buffer memory usage                                                                                                                                   | B     |
| *product\_name:id*#device.gpu.frame_buffer.memory.free.bytes       | On-board frame buffer memory available usage                                                                                                                         | B     |
| *product\_name:id*#device.gpu.frame_buffer.memory.usage.percentage | On-board frame buffer memory usage in percentage                                                                                                                     | %     |
| *product\_name:id*#device.gpu.bar1.memory.usage.bytes              | BAR1 memory usage                                                                                                                                                    | B     |
| *product\_name:id*#device.gpu.bar1.memory.free.bytes               | BAR1 memory available usage                                                                                                                                          | B     |
| *product\_name:id*#device.gpu.bar1.memory.usage.percentage         | BAR1 memory usage in percentage                                                                                                                                      | %     |
| *product\_name:id*#device.gpu.fan.speed.percentage                 | Fan speed value                                                                                                                                                      | %     |
| *product\_name:id*#device.gpu.temperature.celsius                  | Temperature value                                                                                                                                                    | C     |
| *product\_name:id*#device.gpu.power.consumption.watt               | The last measured power draw for the  entire  board                                                                                                                  | W     |

</TabItem>
</Tabs>

## Prerequisites

The centreon-engine user performs a SSH connection to a remote system user. This user must have enough privileges to run ```nvidia-smi``` command.

## Setup

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Devices-Nvidia-Gpu-Smi-Ssh
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *NVIDIA GPU SMI SSH* Pack

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Hardware-Devices-Nvidia-Gpu-Smi-Ssh
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-hardware-devices-nvidia-gpu-smi-ssh
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *NVIDIA GPU SMI SSH* Pack

</TabItem>
</Tabs>

## Host configuration

* Add a new Host and apply the *HW-Device-Nvidia-Gpu-Smi-SSH-custom* Host Template

> Once the template applied, some Macros have to be configured.
> 3 SSH backends are available to connect to the remote server: *sshcli*, *plink* and *libssh* which are detailed below.

<Tabs groupId="sync">
<TabItem value="sshcli backend" label="sshcli backend">

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```sshcli```                                                           |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Cannot be used with backend. Only ssh key authentication                                    |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

**Warning** With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

</TabItem>
<TabItem value="plink backend" label="plink backend">

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```plink```                                                            |
| X           | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your Poller                |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

**Warning** With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

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

## How to test the Plugin and what are the main options for?

Once the Plugin installed, log into your Poller using the *centreon-engine* user account and test by running the following command :

```bash
/usr/lib/centreon/plugins/centreon_nvidia_gpu_smi_ssh.pl \
    --plugin=hardware::devices::nvidia::gpu::smi::plugin \
    --mode=stats \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=libssh \
    --verbose
```

Expected command output is shown below:

```bash
OK: All devices are ok | 'devices.gpu.total.count'=2;;;0; 'Quadro K6000:00000000:08:00.0#device.gpu.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.memory.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.encoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.decoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.frame_buffer.memory.usage.bytes'=1349517312B;;;0;12798918656 'Quadro K6000:00000000:08:00.0#device.gpu.frame_buffer.memory.free.bytes'=11449401344B;;;0;12798918656 'Quadro K6000:00000000:08:00.0#device.gpu.frame_buffer.memory.usage.percentage'=10.54%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.bar1.memory.usage.bytes'=13631488B;;;0;268435456 'Quadro K6000:00000000:08:00.0#device.gpu.bar1.memory.free.bytes'=254803968B;;;0;268435456 'Quadro K6000:00000000:08:00.0#device.gpu.bar1.memory.usage.percentage'=5.08%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.fan.speed.percentage'=26.00%;;;0;100 'Quadro K6000:00000000:08:00.0#device.gpu.temperature.celsius'=40C;;;; 'Quadro K6000:00000000:08:00.0#device.gpu.power.consumption.watt'=24.16W;;;0; 'Quadro K6000:00000000:84:00.0#device.gpu.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.memory.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.encoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.decoder.utilization.percentage'=0.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.frame_buffer.memory.usage.bytes'=732954624B;;;0;12798918656 'Quadro K6000:00000000:84:00.0#device.gpu.frame_buffer.memory.free.bytes'=12065964032B;;;0;12798918656 'Quadro K6000:00000000:84:00.0#device.gpu.frame_buffer.memory.usage.percentage'=5.73%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.bar1.memory.usage.bytes'=5242880B;;;0;268435456 'Quadro K6000:00000000:84:00.0#device.gpu.bar1.memory.free.bytes'=263192576B;;;0;268435456 'Quadro K6000:00000000:84:00.0#device.gpu.bar1.memory.usage.percentage'=1.95%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.fan.speed.percentage'=26.00%;;;0;100 'Quadro K6000:00000000:84:00.0#device.gpu.temperature.celsius'=40C;;;; 'Quadro K6000:00000000:84:00.0#device.gpu.power.consumption.watt'=23.86W;;;0;
checking device gpu 'Quadro K6000:00000000:08:00.0'
    utilization gpu: 0.00 %, memory: 0.00 %, encoder: 0.00 %, decoder: 0.00 %
    frame buffer memory usage total: 11.92 GB used: 1.26 GB (10.54%) free: 10.66 GB (89.46%)
    bar1 memory usage total: 256.00 MB used: 13.00 MB (5.08%) free: 243.00 MB (94.92%)
    fan speed: 26.00 %
    gpu temperature: 40 C
    power consumption: 24.16 W
checking device gpu 'Quadro K6000:00000000:84:00.0'
    utilization gpu: 0.00 %, memory: 0.00 %, encoder: 0.00 %, decoder: 0.00 %
    frame buffer memory usage total: 11.92 GB used: 699.00 MB (5.73%) free: 11.24 GB (94.27%)
    bar1 memory usage total: 256.00 MB used: 5.00 MB (1.95%) free: 251.00 MB (98.05%)
    fan speed: 26.00 %gpu temperature: 40 C
    power consumption: 23.86 W
```

The command above gets GPU statistics (```--mode=stats```).

It uses a SSH username _centreon_ (```--ssh-username=centreon```), a SSH password _centreon-password_ (```--ssh-password='centreon-password'```),
uses a SSH backend _libssh_ (```--ssh-backend='libssh'```) and it connects to the host _10.30.2.81_ (```--hostname=10.30.2.81```)
on the SSH default port _22_ (```--ssh-port=22```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_nvidia_gpu_smi_ssh.pl \
    --plugin=hardware::devices::nvidia::gpu::smi::plugin \
    --mode=stats \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins#ssh-and-cli-checks)
