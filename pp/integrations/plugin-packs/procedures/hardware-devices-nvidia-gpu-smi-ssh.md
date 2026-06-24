---
id: hardware-devices-nvidia-gpu-smi-ssh
slug: /hardware-devices-nvidia-gpu-smi-ssh
title: NVIDIA GPU SMI SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **NVIDIA GPU SMI SSH** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **NVIDIA GPU SMI SSH** brings a host template:

* **HW-Device-Nvidia-Gpu-Smi-SSH-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Device-Nvidia-Gpu-Smi-SSH-custom" label="HW-Device-Nvidia-Gpu-Smi-SSH-custom">

| Service Alias | Service Template                          | Service Description  |
|:--------------|:------------------------------------------|:---------------------|
| Gpu-Stats     | HW-Device-Nvidia-Gpu-Smi-Stats-Ssh-custom | Check GPU statistics |

> The services listed above are created automatically when the **HW-Device-Nvidia-Gpu-Smi-SSH-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Gpu-Stats" label="Gpu-Stats">

| Name                                                      | Unit  |
|:----------------------------------------------------------|:------|
| devices.gpu.total.count                                   | count |
| *devices*~device.gpu.utilization.percentage               | %     |
| *devices*~device.gpu.memory.utilization.percentage        | %     |
| *devices*~device.gpu.encoder.utilization.percentage       | %     |
| *devices*~device.gpu.decoder.utilization.percentage       | %     |
| *devices*~device.gpu.frame_buffer.memory.usage.bytes      | B     |
| *devices*~device.gpu.frame_buffer.memory.free.bytes       | B     |
| *devices*~device.gpu.frame_buffer.memory.usage.percentage | %     |
| *devices*~device.gpu.bar1.memory.usage.bytes              | B     |
| *devices*~device.gpu.bar1.memory.free.bytes               | B     |
| *devices*~device.gpu.bar1.memory.usage.percentage         | %     |
| *devices*~device.gpu.fan.speed.percentage                 | %     |
| *devices*~device.gpu.temperature.celsius                  | C     |
| *devices*~device.gpu.power.consumption.watt               | W     |

</TabItem>
</Tabs>

## Prerequisites

### SSH configuration

A user is required to query the resource by SSH. There is no need for root or sudo
privileges. There are two possible ways to log in through SSH, either by
exchanging the SSH key from **centreon-engine** user to the target resource, or by
setting your unique user and password directly in the host macros.

This user must have enough privileges to run nvidia-smi command.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-devices-nvidia-gpu-smi-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-devices-nvidia-gpu-smi-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-devices-nvidia-gpu-smi-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-devices-nvidia-gpu-smi-ssh
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **NVIDIA GPU SMI SSH** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/docs/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Hardware-Devices-Nvidia-Gpu-Smi-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Devices-Nvidia-Gpu-Smi-Ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-devices-nvidia-gpu-smi-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Devices-Nvidia-Gpu-Smi-Ssh
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Device-Nvidia-Gpu-Smi-SSH-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                                                         | Default value | Mandatory |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |               |           |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |               |           |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |               |           |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli, plink and libssh                                                                                             | libssh        |           |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                            |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Gpu-Stats" label="Gpu-Stats">

| Macro                         | Description                                                                                                                            | Default value | Mandatory |
|:------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| FILTERNAME                    | Filter gpu devices by name (can be a regexp)                                                                                           |               |           |
| WARNINGBAR1MEMORYUSAGE        | Threshold                                                                                                                              |               |           |
| CRITICALBAR1MEMORYUSAGE       | Threshold                                                                                                                              |               |           |
| WARNINGBAR1MEMORYUSAGEFREE    | Threshold                                                                                                                              |               |           |
| CRITICALBAR1MEMORYUSAGEFREE   | Threshold                                                                                                                              |               |           |
| WARNINGBAR1MEMORYUSAGEPRCT    | Threshold                                                                                                                              |               |           |
| CRITICALBAR1MEMORYUSAGEPRCT   | Threshold                                                                                                                              |               |           |
| WARNINGDEVICESGPUTOTAL        | Threshold                                                                                                                              |               |           |
| CRITICALDEVICESGPUTOTAL       | Threshold                                                                                                                              |               |           |
| WARNINGFANSPEED               | Threshold                                                                                                                              |               |           |
| CRITICALFANSPEED              | Threshold                                                                                                                              |               |           |
| WARNINGFBMEMORYUSAGE          | Threshold                                                                                                                              |               |           |
| CRITICALFBMEMORYUSAGE         | Threshold                                                                                                                              |               |           |
| WARNINGFBMEMORYUSAGEFREE      | Threshold                                                                                                                              |               |           |
| CRITICALFBMEMORYUSAGEFREE     | Threshold                                                                                                                              |               |           |
| WARNINGFBMEMORYUSAGEPRCT      | Threshold                                                                                                                              |               |           |
| CRITICALFBMEMORYUSAGEPRCT     | Threshold                                                                                                                              |               |           |
| WARNINGGPUDECODERUTILIZATION  | Threshold                                                                                                                              |               |           |
| CRITICALGPUDECODERUTILIZATION | Threshold                                                                                                                              |               |           |
| WARNINGGPUENCODERUTILIZATION  | Threshold                                                                                                                              |               |           |
| CRITICALGPUENCODERUTILIZATION | Threshold                                                                                                                              |               |           |
| WARNINGGPUMEMORYUTILIZATION   | Threshold                                                                                                                              |               |           |
| CRITICALGPUMEMORYUTILIZATION  | Threshold                                                                                                                              |               |           |
| WARNINGGPUUTILIZATION         | Threshold                                                                                                                              |               |           |
| CRITICALGPUUTILIZATION        | Threshold                                                                                                                              |               |           |
| WARNINGPOWER                  | Threshold                                                                                                                              |               |           |
| CRITICALPOWER                 | Threshold                                                                                                                              |               |           |
| WARNINGTEMPERATURE            | Threshold                                                                                                                              |               |           |
| CRITICALTEMPERATURE           | Threshold                                                                                                                              |               |           |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose     |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_nvidia_gpu_smi_ssh.pl \
	--plugin=hardware::devices::nvidia::gpu::smi::plugin \
	--mode=stats \
	--hostname='10.0.0.1' \
	--ssh-backend='libssh' \
	--ssh-username='' \
	--ssh-password='' \
	--ssh-port=''  \
	--filter-name='' \
	--warning-fb-memory-usage='' \
	--critical-fb-memory-usage='' \
	--warning-fb-memory-usage-free='' \
	--critical-fb-memory-usage-free='' \
	--warning-fb-memory-usage-prct='' \
	--critical-fb-memory-usage-prct='' \
	--warning-bar1-memory-usage='' \
	--critical-bar1-memory-usage='' \
	--warning-bar1-memory-usage-free='' \
	--critical-bar1-memory-usage-free='' \
	--warning-bar1-memory-usage-prct='' \
	--critical-bar1-memory-usage-prct='' \
	--warning-gpu-utilization='' \
	--critical-gpu-utilization='' \
	--warning-gpu-memory-utilization='' \
	--critical-gpu-memory-utilization='' \
	--warning-gpu-encoder-utilization='' \
	--critical-gpu-encoder-utilization='' \
	--warning-gpu-decoder-utilization='' \
	--critical-gpu-decoder-utilization='' \
	--warning-devices-gpu-total='' \
	--critical-devices-gpu-total='' \
	--warning-power='' \
	--critical-power='' \
	--warning-temperature='' \
	--critical-temperature='' \
	--warning-fan-speed='' \
	--critical-fan-speed='' \
	--verbose
```

The expected command output is shown below:

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

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_nvidia_gpu_smi_ssh.pl \
	--plugin=hardware::devices::nvidia::gpu::smi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                        | Linked service template                   |
|:----------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
| stats [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/devices/nvidia/gpu/smi/mode/stats.pm)] | HW-Device-Nvidia-Gpu-Smi-Stats-Ssh-custom |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Gpu-Stats" label="Gpu-Stats">

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --filter-name                              |   Filter gpu devices by name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --warning-* --critical-*                   |   Thresholds. Can be: 'devices-gpu-total', 'bar1-memory-usage', 'bar1-memory-usage-free', 'bar1-memory-usage-prct',  'fb-memory-usage', 'fb-memory-usage-free', 'fb-memory-usage-prct', 'gpu-utilization', 'gpu-memory-utilization', 'gpu-encoder-utilization', 'gpu-decoder-utilization', 'temperature', 'fan-speed', 'power'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --ssh-backend                              |   Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-username                             |   Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             |   Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 |   Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             |   Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --hostname                                 |   Hostname to query in ssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --timeout                                  |   Timeout in seconds for the command (default: 45). Default value can be override by the mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command                                  |   Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             |   Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          |   Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sudo                                     |   sudo command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_nvidia_gpu_smi_ssh.pl \
	--plugin=hardware::devices::nvidia::gpu::smi::plugin \
	--mode=stats \
	--help
```
