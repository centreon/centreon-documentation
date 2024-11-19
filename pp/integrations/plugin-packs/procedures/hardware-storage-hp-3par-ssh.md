---
id: hardware-storage-hp-3par-ssh
title: HP 3PAR SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **HP 3PAR SSH** brings a host template:

* **HW-Storage-HP-3par-SSH-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-HP-3par-SSH-custom" label="HW-Storage-HP-3par-SSH-custom">

| Service Alias | Service Template                           | Service Description      |
|:--------------|:-------------------------------------------|:-------------------------|
| Capacity      | HW-Storage-HP-3par-Capacity-SSH-custom     | Check storage capacities |
| Components    | HW-Storage-HP-3par-Components-SSH-custom   | Check hardware           |
| Disk-Usage    | HW-Storage-HP-3par-Disk-Usage-SSH-custom   | Check disk usage         |
| Nodes         | HW-Storage-HP-3par-Nodes-SSH-custom        | Check nodes              |
| Volume-Usage  | HW-Storage-HP-3par-Volume-Usage-SSH-custom | Check volume usage       |

> The services listed above are created automatically when the **HW-Storage-HP-3par-SSH-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                     | Service Description        |
|:--------------|:-------------------------------------|:---------------------------|
| Afc           | HW-Storage-HP-3par-Afc-SSH-custom    | Check adaptive flash cache |
| Cages         | HW-Storage-HP-3par-Cages-SSH-custom  | Check cages                |
| Psu           | HW-Storage-HP-3par-Psu-SSH-custom    | Check power supplies       |
| Time          | HW-Storage-HP-3par-Time-SSH-custom   | Check nodes time offset    |
| Uptime        | HW-Storage-HP-3par-Uptime-SSH-custom | Check nodes uptime         |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Afc" label="Afc">

| Metric name                                     | Unit  |
|:------------------------------------------------|:------|
| *nodes*~status                                  | N/A   |
| *nodes*~node.flashcache.usage.bytes             | B     |
| *nodes*~node.flashcache.free.bytes              | B     |
| *nodes*~node.flashcache.usage.percentage        | %     |
| *nodes*~node.flashcache.readhits.percentage     | %     |
| *volumes*~volume.flashcache.readhits.percentage | %     |

</TabItem>
<TabItem value="Cages" label="Cages">

| Metric name                            | Unit  |
|:---------------------------------------|:------|
| *cages*~status                         | N/A   |
| *cages*~*boards*#board-firmware-status | N/A   |
| *cages*~*boards*#board-self-status     | N/A   |
| *cages*~*boards*#board-partner-status  | N/A   |
| *cages*~*psu*#psu-status               | N/A   |
| *cages*~*psu*#psu-ac-status            | N/A   |
| *cages*~*psu*#psu-dc-status            | N/A   |
| *cages*~*psu*#psu-fan-status           | N/A   |
| *cages*~*drives*#drive-status          | N/A   |

</TabItem>
<TabItem value="Capacity" label="Capacity">

| Metric name                                           | Unit  |
|:------------------------------------------------------|:------|
| *storages*~storage.space.usage.bytes                  | B     |
| *storages*~storage.space.free.bytes                   | B     |
| *storages*~storage.space.usage.percentage             | %     |
| *storages*~storage.space.unavailable.bytes            | B     |
| *storages*~storage.space.failed.bytes                 | B     |
| *storages*~storage.space.compaction.ratio.count       | count |
| *storages*~storage.space.deduplication.ratio.count    | count |
| *storages*~storage.space.compression.ratio.count      | count |
| *storages*~storage.space.data_reduction.ratio.count   | count |
| *storages*~storage.space.overprovisioning.ratio.count | count |

</TabItem>
<TabItem value="Components" label="Components">

| Metric name    | Unit |
|:---------------|:-----|
| battery.status | N/A  |
| cim.status     | N/A  |
| port.status    | N/A  |
| node.status    | N/A  |
| disk.status    | N/A  |
| psu.status     | N/A  |
| sensor.status  | N/A  |
| wsapi.status   | N/A  |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| *disk_name*#status                      | N/A   |
| *disk_name*#disk.space.usage.bytes      | B     |
| *disk_name*#disk.space.free.bytes       | B     |
| *disk_name*#disk.space.usage.percentage | %     |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Metric name                                   | Unit  |
|:----------------------------------------------|:------|
| *nodes*~status                                | N/A   |
| *nodes*~*cpu*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Psu" label="Psu">

| Metric name          | Unit  |
|:---------------------|:------|
| *psu*~status         | N/A   |
| *psu*~ac-status      | N/A   |
| *psu*~dc-status      | N/A   |
| *psu*~fan-status     | N/A   |
| *psu*~battery-status | N/A   |

</TabItem>
<TabItem value="Time" label="Time">

| Metric name              | Unit  |
|:-------------------------|:------|
| node.time.offset.seconds | s     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name                 | Unit  |
|:----------------------------|:------|
| *nodes*#node.uptime.seconds | s     |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Metric name                            | Unit  |
|:---------------------------------------|:------|
| *volume*#volume.space.usage.bytes      | B     |
| *volume*#volume.space.free.bytes       | B     |
| *volume*#volume.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

### SSH configuration

Using this connector requires a user to be created on the monitored resource, which will be used by the Centreon poller to authenticate and execute the SSH requests. There is no need for root or sudo
privileges. There are two possible ways to log in through SSH, either by
exchanging the SSH key of the **centreon-engine** user to the target resource, or by
setting your unique user and password directly in the host macros.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-hp-3par-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-hp-3par-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-hp-3par-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-hp-3par-ssh
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **HP 3PAR SSH** connector through
the **Configuration > Monitoring Connector Manager** menu.

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
dnf install centreon-plugin-Hardware-Storage-Hp-3par-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Hp-3par-Ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-hp-3par-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Hp-3par-Ssh
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-HP-3par-SSH-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                                                          | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                           |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead  |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                        |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli (default), plink and libssh                                                                                    | sshcli            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                             |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Afc" label="Afc">

| Macro                            | Description                                                                                                                            | Default value          | Mandatory   |
|:---------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| FILTERNODEID                     | Filter nodes by ID (can be a regexp)                                                                                                   |                        |             |
| FILTERVOLUMENAME                 | Filter volumes by name (can be a regexp)                                                                                               |                        |             |
| WARNINGFLASHCACHENODEREADHITS    | Define the WARNING threshold for the following component: 'flashcache-node-readhits'                                                  |                        |             |
| CRITICALFLASHCACHENODEREADHITS   | Define the CRITICAL threshold for the following component: 'flashcache-node-readhits'                                                 |                        |             |
| WARNINGFLASHCACHEUSAGE           | Define the WARNING threshold for the following component: 'flashcache-usage'                                                          |                        |             |
| CRITICALFLASHCACHEUSAGE          | Define the CRITICAL threshold for the following component: 'flashcache-usage'                                                         |                        |             |
| WARNINGFLASHCACHEUSAGEFREE       | Define the WARNING threshold for the following component: 'flashcache-usage-free'                                                     |                        |             |
| CRITICALFLASHCACHEUSAGEFREE      | Define the CRITICAL threshold for the following component: 'flashcache-usage-free'                                                    |                        |             |
| WARNINGFLASHCACHEUSAGEPRCT       | Define the WARNING threshold for the following components: 'flashcache-usage-prct'                                                    |                        |             |
| CRITICALFLASHCACHEUSAGEPRCT      | Define the CRITICAL threshold for the following component: 'flashcache-usage-prct'                                                    |                        |             |
| WARNINGFLASHCACHEVOLUMEREADHITS  | Define the WARNING threshold for the following component: 'flashcache-volume-readhits'                                                |                        |             |
| CRITICALFLASHCACHEVOLUMEREADHITS | Define the CRITICAL threshold for the following component: 'flashcache-volume-readhits'                                               |                        |             |
| CRITICALSTATUS                   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %\{node_id\}              | %{status} !~ /normal/i |             |
| WARNINGSTATUS                    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %\{node_id\}               |                        |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose              |             |

</TabItem>
<TabItem value="Cages" label="Cages">

| Macro                       | Description                                                                                                                                                                 | Default value           | Mandatory   |
|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERCAGEID                | Filter cages by ID (can be a regexp)                                                                                                                                       |                         |             |
| CRITICALBOARDFIRMWARESTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %\{cage_id\}, %\{board_id\}                                    | %{status} !~ /Current/i |             |
| WARNINGBOARDFIRMWARESTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %\{cage_id\}, %\{board_id\}                                     |                         |             |
| CRITICALBOARDPARTNERSTATUS  | Define the conditions on partner to match for the status to be CRITICAL                                                                                                    | %{status} !~ /ok/i      |             |
| WARNINGBOARDPARTNERSTATUS   | Define the conditions on partner to match for the status to be WARNING                                                                                                     |                         |             |
| CRITICALBOARDSELFSTATUS     | Define the conditions on self to match for the status to be CRITICAL                                                                                                       | %{status} !~ /ok/i      |             |
| WARNINGBOARDSELFSTATUS      | Define the conditions on self to match for the status to be WARNING                                                                                                        |                         |             |
| CRITICALDRIVEPORTASTATUS    | Define the conditions on port A to match for the status to be CRITICAL                                                                                                     | %{status} !~ /ok/i      |             |
| WARNINGDRIVEPORTASTATUS     | Define the conditions on port A to match for the status to be WARNING                                                                                                      |                         |             |
| CRITICALDRIVEPORTBSTATUS    | Define the conditions on port B to match for the status to be CRITICAL                                                                                                     | %{status} !~ /ok/i      |             |
| WARNINGDRIVEPORTBSTATUS     | Define the conditions on port B to match for the status to be WARNING                                                                                                      |                         |             |
| WARNINGDRIVESTATUS          | Define the conditions to match for the status to be WARNING (default: '%{status} !~ /normal/i') You can use the following variables: %{status}, %\{cage_id\}, %\{drive_id\}  |                         |             |
| CRITICALDRIVESTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /normal/i') You can use the following variables: %{status}, %\{cage_id\}, %\{drive_id\} |                         |             |
| WARNINGDRIVETEMPERATURE     | Define WARNING threshold for the temperature of the drives                                                                                                                 |                         |             |
| CRITICALDRIVETEMPERATURE    | Define CRITICAL threshold for the temperature of the drives                                                                                                                |                         |             |
| CRITICALPSUACSTATUS         | Define the conditions on psu ac to match for the status to be CRITICAL                                                                                                     | %{status} !~ /ok/i      |             |
| WARNINGPSUACSTATUS          | Define the conditions on psu ac to match for the status to be WARNING                                                                                                      |                         |             |
| CRITICALPSUDCSTATUS         | Define the conditions on psu dc to match for the status to be CRITICAL                                                                                                     | %{status} !~ /ok/i      |             |
| WARNINGPSUDCSTATUS          | Define the conditions on psu dc to match for the status to be WARNING                                                                                                      |                         |             |
| CRITICALPSUFANSTATUS        | Define the conditions on psu fan to match for the status to be CRITICAL                                                                                                    | %{status} !~ /ok/i      |             |
| WARNINGPSUFANSTATUS         | Define the conditions on psu fan to match for the status to be WARNING                                                                                                     |                         |             |
| CRITICALPSUSTATUS           | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %\{cage_id\}, %\{psu_id\}                                      | %{status} !~ /ok/i      |             |
| WARNINGPSUSTATUS            | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %\{cage_id\}, %\{psu_id\}                                                                                                                  |                         |             |
| CRITICALSTATUS              | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %\{cage_id\}                                                  | %{status} !~ /Normal/i  |             |
| WARNINGSTATUS               | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %\{cage_id\}                                                                                                                 |                         |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                           | --verbose               |             |

</TabItem>
<TabItem value="Capacity" label="Capacity">

| Macro                    | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERTYPE               | Filter storages by type (can be a regexp)                                                                                              |                   |             |
| WARNINGCOMPACTION        | WARNING threshold                                                                                                                      |                   |             |
| CRITICALCOMPACTION       | CRITICAL threshold                                                                                                                     |                   |             |
| WARNINGCOMPRESSION       | WARNING threshold                                                                                                                      |                   |             |
| CRITICALCOMPRESSION      | CRITICAL threshold                                                                                                                     |                   |             |
| WARNINGDATAREDUCTION     | WARNING threshold                                                                                                                      |                   |             |
| CRITICALDATAREDUCTION    | CRITICAL threshold                                                                                                                     |                   |             |
| WARNINGDEDUP             | WARNING threshold                                                                                                                      |                   |             |
| CRITICALDEDUP            | CRITICAL threshold                                                                                                                     |                   |             |
| WARNINGOVERPROVISIONING  | WARNING threshold                                                                                                                      |                   |             |
| CRITICALOVERPROVISIONING | CRITICAL threshold                                                                                                                     |                   |             |
| WARNINGSPACEFAILED       | WARNING threshold                                                                                                                      |                   |             |
| CRITICALSPACEFAILED      | CRITICAL threshold                                                                                                                     |                   |             |
| WARNINGSPACEUNAVAILABLE  | WARNING threshold                                                                                                                      |                   |             |
| CRITICALSPACEUNAVAILABLE | CRITICAL threshold                                                                                                                     |                   |             |
| WARNINGSPACEUSAGE        | WARNING threshold                                                                                                                      |                   |             |
| CRITICALSPACEUSAGE       | CRITICAL threshold                                                                                                                     |                   |             |
| WARNINGSPACEUSAGEFREE    | WARNING threshold                                                                                                                      |                   |             |
| CRITICALSPACEUSAGEFREE   | CRITICAL threshold                                                                                                                     |                   |             |
| WARNINGSPACEUSAGEPRCT    | WARNING threshold                                                                                                                      |                   |             |
| CRITICALSPACEUSAGEPRCT   | CRITICAL threshold                                                                                                                     |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Components" label="Components">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'battery', 'cim', 'port', 'node', 'disk', 'psu', 'sensor', 'wsapi'                   | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Macro             | Description                                                                                                                            | Default value          | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| FILTERNAME        | Filter disk name (can be a regexp)                                                                                                     |                        |             |
| CRITICALSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{display}               | %{status} !~ /normal/i |             |
| WARNINGSTATUS     | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{status}, %{display}  |                        |             |
| WARNINGUSAGE      | Warning threshold                                                                                                                      |                        |             |
| CRITICALUSAGE     | Warning threshold                                                                                                                      |                        |             |
| WARNINGUSAGEFREE  | Warning threshold                                                                                                                      |                        |             |
| CRITICALUSAGEFREE | Warning threshold                                                                                                                      |                        |             |
| WARNINGUSAGEPRCT  | Warning threshold                                                                                                                      |                        |             |
| CRITICALUSAGEPRCT | Warning threshold                                                                                                                      |                        |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose              |             |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Macro                  | Description                                                                                                                                              | Default value      | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| FILTERNODEID           | Filter nodes by ID (can be a regexp)                                                                                                                     |                    |             |
| WARNINGCPUUTILIZATION  | Warning threshold                                                                                                                                        |                    |             |
| CRITICALCPUUTILIZATION | Critical threshold                                                                                                                                       |                    |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %\{node_id\}                                | %{status} !~ /ok/i |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %\{node_id\}                                 |                    |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                   | --verbose          |             |

</TabItem>
<TabItem value="Psu" label="Psu">

| Macro                          | Description                                                                                                                                      | Default value      | Mandatory   |
|:-------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| FILTERNODEID                   | Filter nodes by ID (can be a regexp)                                                                                                             |                    |             |
| FILTERPSUID                    | Filter power supplies by ID (can be a regexp)                                                                                                    |                    |             |
| CRITICALACSTATUS               | Set critical threshold for AC status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                    | %{status} !~ /ok/i |             |
| WARNINGACSTATUS                | Set warning threshold for AC status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                     |                    |             |
| CRITICALBATTERYSTATUS          | Set critical threshold for battery status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                               | %{status} !~ /ok/i |             |
| WARNINGBATTERYSTATUS           | Set warning threshold for battery status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                |                    |             |
| WARNINGCHARGEREMAINING         | Warning threshold                                                                                                                                |                    |             |
| CRITICALCHARGEREMAINING        | Critical threshold                                                                                                                               |                    |             |
| WARNINGCHARGEREMAININGMINUTES  | Warning threshold                                                                                                                                |                    |             |
| CRITICALCHARGEREMAININGMINUTES | Critical threshold                                                                                                                               |                    |             |
| CRITICALDCSTATUS               | Set critical threshold for DC status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                    | %{status} !~ /ok/i |             |
| WARNINGDCSTATUS                | Set warning threshold for DC status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                     |                    |             |
| CRITICALFANSTATUS              | Set critical threshold for fan status . You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                  | %{status} !~ /ok/i |             |
| WARNINGFANSTATUS               | Set warning threshold for fan status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                    |                    |             |
| CRITICALSTATUS                 | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}            | %{status} !~ /ok/i |             |
| WARNINGSTATUS                  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}             |                    |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose          |             |

</TabItem>
<TabItem value="Time" label="Time">

| Macro          | Description                                                                                                                            | Default value     | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNODEID   | Filter nodes by ID (can be a regexp)                                                                                                   |                   |             |
| NTPHOSTNAME    | Set the ntp hostname (if not set, localtime is used)                                                                                   |                   |             |
| NTPPORT        | Set the ntp port (default: 123)                                                                                                        |                   |             |
| TIMEZONE       | Set the timezone for displaying the date (default: UTC)                                                                                |                   |             |
| WARNINGOFFSET  | Time offset warning threshold (in seconds)                                                                                             |                   |             |
| CRITICALOFFSET | Time offset critical Threshold (in seconds)                                                                                            |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                                                                                          | Default value     | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNODEID   | Filter nodes by ID (can be a regexp)                                                                                                                                 |                   |             |
| UNIT           | Select the time unit for the performance data and thresholds.May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds |                   |             |
| TIMEZONE       | Timezone options. Default is 'UTC'                                                                                                                                   |                   |             |
| WARNINGUPTIME  | Warning threshold                                                                                                                                                    |                   |             |
| CRITICALUPTIME | Critical threshold                                                                                                                                                   |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                               | --verbose         |             |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Macro             | Description                                                                                                                            | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME        | Filter volume name (can be a regexp)                                                                                                   |                   |             |
| WARNINGUSAGE      | Warning threshold                                                                                                                      |                   |             |
| CRITICALUSAGE     | Critical threshold                                                                                                                     |                   |             |
| WARNINGUSAGEFREE  | Warning threshold                                                                                                                      |                   |             |
| CRITICALUSAGEFREE | Critical threshold                                                                                                                     |                   |             |
| WARNINGUSAGEPRCT  | Warning threshold                                                                                                                      |                   |             |
| CRITICALUSAGEPRCT | Critical threshold                                                                                                                     |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \
	--plugin=storage::hp::3par::ssh::plugin \
	--mode=volume-usage \
	--hostname='10.0.0.1' \
	--ssh-backend='sshcli' \
	--ssh-username='' \
	--ssh-password='' \
	--ssh-port=''  \
	--filter-name='' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All volumes are ok | '*volume*#volume.space.usage.bytes'=3147727000000B;;;0;total'*volume*#volume.space.free.bytes'=1460273000000B;;;0;total'*volume*#volume.space.usage.percentage'=68,31%;;;0;100
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
/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \
	--plugin=storage::hp::3par::ssh::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                         | Linked service template                    |
|:-----------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| afc [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/afc.pm)]                  | HW-Storage-HP-3par-Afc-SSH-custom          |
| cages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/cages.pm)]              | HW-Storage-HP-3par-Cages-SSH-custom        |
| capacity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/capacity.pm)]        | HW-Storage-HP-3par-Capacity-SSH-custom     |
| components [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/hardware.pm)]      | HW-Storage-HP-3par-Components-SSH-custom   |
| disk-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/diskusage.pm)]     | HW-Storage-HP-3par-Disk-Usage-SSH-custom   |
| nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/nodes.pm)]              | HW-Storage-HP-3par-Nodes-SSH-custom        |
| psu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/psu.pm)]                  | HW-Storage-HP-3par-Psu-SSH-custom          |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/time.pm)]                | HW-Storage-HP-3par-Time-SSH-custom         |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/uptime.pm)]            | HW-Storage-HP-3par-Uptime-SSH-custom       |
| volume-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hp/3par/ssh/mode/volumeusage.pm)] | HW-Storage-HP-3par-Volume-Usage-SSH-custom |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  | Timeout in seconds for the command (default: 45).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --command                                  | Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             | Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          | Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --ssh-backend                              | Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-username                             | Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 | Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             | Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --sshcli-command                           | ssh command (default: 'ssh').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --sshcli-path                              | ssh command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --sshcli-option                            | Specify ssh cli options (example: --sshcli-option='-o=StrictHostKeyChecking=no').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-command                            | plink command (default: 'plink').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --plink-path                               | plink command path (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --plink-option                             | Specify plink options (example: --plink-option='-T').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --libssh-strict-connect                    | Connection won't be OK even if there is a problem (server known changed or server found other) with the ssh server.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Afc" label="Afc">

| Option               | Description                                                                                                                                                                                     |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-node-id     | Filter nodes by ID (can be a regexp).                                                                                                                                                           |
| --filter-volume-name | Filter volumes by name (can be a regexp).                                                                                                                                                       |
| --unknown-status     | Define the conditions to match for the status to be UNKNOWN.                                                                                                                                    |
| --warning-status     | Define the conditions to match for the status to be WARNING.                                                                                                                                    |
| --critical-status    | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /normal/i') You can use the following variables: %{status}, %\{node_id\}                                    |
| --warning-*          | Define the WARNING thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits'.     |
| --critical-*         | Define the CRITICAL thresholds for the following components: 'flashcache-usage', 'flashcache-usage-free', 'flashcache-usage-prct', 'flashcache-node-readhits', 'flashcache-volume-readhits'.    |

</TabItem>
<TabItem value="Cages" label="Cages">

| Option                                    | Description                                                                                                                                                                   |
|:------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-cage-id                          | Filter cages by ID (can be a regexp).                                                                                                                                         |
| --unknown-status                          | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-status                          | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-status                         | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /Normal/i') You can use the following variables: %{status}, %\{cage_id\}                  |
| --unknown-board-firmware-status           | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-board-firmware-status           | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-board-firmware-status          | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /Current/i') You can use the following variables: %{status}, %\{cage_id\}, %\{board_id\}   |
| --unknown-board-\[self\|partner\]-status  | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-board-\[self\|partner\]-status  | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-board-\[self\|partner\]-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i') You can use the following variables: %{status}, %\{cage_id\}, %\{board_id\}        |
| --unknown-psu-status                      | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-psu-status                      | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-psu-status                     | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i') You can use the following variables: %{status}, %\{cage_id\}, %\{psu_id\}          |
| --unknown-psu-\[ac\|dc\|fan\]-status      | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-psu-\[ac\|dc\|fan\]-status      | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-psu-\[ac\|dc\|fan\]-status     | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i') You can use the following variables: %{status}, %\{cage_id\}, %\{psu_id\}          |
| --unknown-drive-status                    | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-drive-status                    | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-drive-status                   | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /normal/i') You can use the following variables: %{status}, %\{cage_id\}, %\{drive_id\}    |
| --unknown-drive-\[porta\|portb\]-status   | Define the conditions to match for the status to be UNKNOWN.                                                                                                                  |
| --warning-drive-\[porta\|portb\]-status   | Define the conditions to match for the status to be WARNING.                                                                                                                  |
| --critical-drive-\[porta\|portb\]-status  | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i') You can use the following variables: %{status}, %\{cage_id\}, %\{drive_id\}        |
| --warning-drive-temperature               | Define WARNING threshold for the temperature of the drives.                                                                                                                   |
| --critical-drive-temperature              | Define CRITICAL threshold for the temperature of the drives.                                                                                                                  |

</TabItem>
<TabItem value="Capacity" label="Capacity">

| Option                   | Description                                                                                                                                                                                    |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-type            | Filter storages by type (can be a regexp).                                                                                                                                                     |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct', 'space-unavailable', 'space-failed', 'compaction', 'dedup', 'compression', 'data-reduction', 'overprovisioning'.    |

</TabItem>
<TabItem value="Components" label="Components">

| Option               | Description                                                                                                                                                                                                          |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'battery', 'cim', 'port', 'node', 'disk', 'psu', 'sensor', 'wsapi'.                                                                                                |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=battery --filter=cim). You can also exclude items from specific instances: --filter=port,free                                                   |
| --add-name-instance  | Add literal description for instance value (used in filter and threshold options).                                                                                                                                   |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                           |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='battery,OK,degraded'   |
| --warning            | Set warning threshold for 'battery.charge' (syntax: type,regexp,threshold) Example: --warning='battery.charge,.*,30'                                                                                                 |
| --critical           | Set critical threshold for 'battery.charge' (syntax: type,regexp,threshold) Example: --critical='battery.charge,.*,50'                                                                                               |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Option                   | Description                                                                                                                                                    |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^status$'                                                                         |
| --filter-name            | Filter disk name (can be a regexp).                                                                                                                            |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{status}, %{display}                          |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /normal/i'). You can use the following variables: %{status}, %{display}   |
| --warning-* --critical-* | Warning threshold. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                                                    |

</TabItem>
<TabItem value="Nodes" label="Nodes">

| Option                   | Description                                                                                                                                                 |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-node-id         | Filter nodes by ID (can be a regexp).                                                                                                                       |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %\{node_id\}                                    |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %\{node_id\}                                    |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %\{node_id\}   |
| --warning-* --critical-* | Thresholds. Can be: 'cpu-utilization'.                                                                                                                      |

</TabItem>
<TabItem value="Psu" label="Psu">

| Option                    | Description                                                                                                                                                             |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-node-id          | Filter nodes by ID (can be a regexp).                                                                                                                                   |
| --filter-psu-id           | Filter power supplies by ID (can be a regexp).                                                                                                                          |
| --unknown-status          | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                    |
| --warning-status          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                    |
| --critical-status         | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}   |
| --unknown-ac-status       | Set unknown threshold for AC status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                                            |
| --warning-ac-status       | Set warning threshold for AC status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                                            |
| --critical-ac-status      | Set critical threshold for AC status (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                           |
| --unknown-dc-status       | Set unknown threshold for DC status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                                            |
| --warning-dc-status       | Set warning threshold for DC status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                                            |
| --critical-dc-status      | Set critical threshold for DC status (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                           |
| --unknown-fan-status      | Set unknown threshold for fan status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                                           |
| --warning-fan-status      | Set warning threshold for fan status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                                           |
| --critical-fan-status     | Set critical threshold for fan status (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                          |
| --unknown-battery-status  | Set unknown threshold for battery status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                                       |
| --warning-battery-status  | Set warning threshold for battery status. You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                                                       |
| --critical-battery-status | Set critical threshold for battery status (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %\{node_id\}, %\{psu_id\}                      |
| --warning-* --critical-*  | Thresholds. Can be: 'charge-remaining', 'charge-remaining-minutes.                                                                                                      |

</TabItem>
<TabItem value="Time" label="Time">

| Option            | Description                                                |
|:------------------|:-----------------------------------------------------------|
| --filter-node-id  | Filter nodes by ID (can be a regexp).                      |
| --ntp-hostname    | Set the ntp hostname (if not set, localtime is used).      |
| --ntp-port        | Set the ntp port (default: 123).                           |
| --timezone        | Set the timezone for displaying the date (default: UTC).   |
| --warning-offset  | Time offset warning threshold (in seconds).                |
| --critical-offset | Time offset critical Threshold (in seconds).               |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                   | Description                                                                                                                                                             |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-node-id         | Filter nodes by ID (can be a regexp).                                                                                                                                   |
| --timezone               | Timezone options. Default is 'UTC'.                                                                                                                                     |
| --unit                   | Select the time unit for the performance data and thresholds.May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.   |
| --warning-* --critical-* | Thresholds. Can be: 'uptime'.                                                                                                                                           |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Option                   | Description                                                                             |
|:-------------------------|:----------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^usage$'   |
| --filter-name            | Filter volume name (can be a regexp).                                                   |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hp_3par_ssh.pl \
	--plugin=storage::hp::3par::ssh::plugin \
	--mode=volume-usage \
	--help
```
