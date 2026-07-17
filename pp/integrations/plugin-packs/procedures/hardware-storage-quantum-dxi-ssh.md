---
id: hardware-storage-quantum-dxi-ssh
title: Quantum DXi Series SSH
description: Monitor Quantum DXi Series storage appliances via SSH: compaction, deduplication, disk usage, health, memory, network, and throughput.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Quantum DXi Series** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Quantum DXi Series** brings a host template:

* **HW-Storage-Quantum-Dxi-SSH-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-Quantum-Dxi-SSH-custom" label="HW-Storage-Quantum-Dxi-SSH-custom">

| Service Alias          | Service Template                                         | Service Description                              |
|:-----------------------|:---------------------------------------------------------|:-------------------------------------------------|
| Compaction             | HW-Storage-Quantum-Dxi-Compaction-SSH-custom             | Check compaction service status and data volume  |
| Dedupnas               | HW-Storage-Quantum-Dxi-Dedupnas-SSH-custom               | Check deduped NAS status and evolution           |
| Disk-Usage             | HW-Storage-Quantum-Dxi-Disk-Usage-SSH-custom             | Check disk usage                                 |
| Health                 | HW-Storage-Quantum-Dxi-Health-SSH-custom                 | Check services health                            |
| Hostbus-Adapter-Status | HW-Storage-Quantum-Dxi-Hostbus-Adapter-Status-SSH-custom | Check disk usage                                 |
| Memory                 | HW-Storage-Quantum-Dxi-Memory-SSH-custom                 | Check memory usage                               |
| Network                | HW-Storage-Quantum-Dxi-Network-SSH-custom                | Check network ports status                       |
| Reclamation            | HW-Storage-Quantum-Dxi-Reclamation-SSH-custom            | Check reclamation service status and data volume |
| Reduction              | HW-Storage-Quantum-Dxi-Reduction-SSH-custom              | Check reduction service statistics               |
| Storage-Array-Status   | HW-Storage-Quantum-Dxi-Storage-Array-Status-SSH-custom   | Check storage arrays status                      |
| System-Status          | HW-Storage-Quantum-Dxi-System-Status-SSH-custom          | Check hardware system board status               |
| Throughput             | HW-Storage-Quantum-Dxi-Throughput-SSH-custom             | Check reclamation service status and data volume |

> The services listed above are created automatically when the **HW-Storage-Quantum-Dxi-SSH-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Compaction" label="Compaction">

| Name             | Unit  |
|:-----------------|:------|
| status           | N/A   |
| status-progress  | %     |
| compacted        | B     |
| still-to-compact | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Dedupnas" label="Dedupnas">

| Name                        | Unit  |
|:----------------------------|:------|
| status                      | N/A   |
| *global*#original-data-size | B     |
| *global*#sent-data-size     | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Name                                | Unit  |
|:------------------------------------|:------|
| used                                | B     |
| free-space                          | B     |
| reclaimable-space                   | B     |
| deduplicated-data                   | B     |
| system-metadata                     | B     |
| data-not-intended-for-deduplication | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Health" label="Health">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Hostbus-Adapter-Status" label="Hostbus-Adapter-Status">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Memory" label="Memory">

| Name | Unit  |
|:-----|:------|
| used | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Network" label="Network">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Reclamation" label="Reclamation">

| Name                  | Unit  |
|:----------------------|:------|
| status                | N/A   |
| stage-status-progress | %     |
| total-progress        | %     |
| data-scanned          | B     |
| reclaimable-space     | B     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Reduction" label="Reduction">

| Name                                     | Unit  |
|:-----------------------------------------|:------|
| size-before-reduction                    | B     |
| size-after-reduction                     | B     |
| incoming-namespace                       | B     |
| nfs-deduplicated-shares                  | B     |
| cifs-smb-deduplicated-shares             | B     |
| application-specific-deduplicated-shares | B     |
| deduplicated-partitions                  | B     |
| ost-storage-servers                      | B     |
| total-reduction-ratio                    | %     |
| deduplication-ratio                      | %     |
| compression-ratio                        | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Storage-Array-Status" label="Storage-Array-Status">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="System-Status" label="System-Status">

| Name   | Unit  |
|:-------|:------|
| status | N/A   |
| status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Name       | Unit  |
|:-----------|:------|
| read-rate  | B/s   |
| write-rate | B/s   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

### SSH configuration

A user is required to query the resource by SSH. There is no need for root or sudo
privileges. There are two possible ways to log in through SSH, either by
exchanging the SSH key from **centreon-engine** user to the target resource, or by
setting your unique user and password directly in the host macros.

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
dnf install centreon-pack-hardware-storage-quantum-dxi-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-quantum-dxi-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-quantum-dxi-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-quantum-dxi-ssh
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Quantum DXi Series** connector through
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
dnf install centreon-plugin-Hardware-Storage-Quantum-Dxi-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Quantum-Dxi-Ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-quantum-dxi-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Quantum-Dxi-Ssh
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-Quantum-Dxi-SSH-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                                                         | Default value | Mandatory |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |               |           |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |               |           |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |               |           |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli, plink and libssh                                                                                             | sshcli        |           |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                            |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Compaction" label="Compaction">

| Macro                  | Description                                                                                                                            | Default value                       | Mandatory |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|:---------:|
| WARNINGCOMPACTED       | Threshold                                                                                                                              |                                     |           |
| CRITICALCOMPACTED      | Threshold                                                                                                                              |                                     |           |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{compaction\_status\}             | %\{compaction\_status\} !~ /ready/i |           |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{compaction\_status\}              |                                     |           |
| WARNINGSTATUSPROGRESS  | Threshold                                                                                                                              |                                     |           |
| CRITICALSTATUSPROGRESS | Threshold                                                                                                                              |                                     |           |
| WARNINGSTILLTOCOMPACT  | Threshold                                                                                                                              |                                     |           |
| CRITICALSTILLTOCOMPACT | Threshold                                                                                                                              |                                     |           |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                                     |           |

</TabItem>
<TabItem value="Dedupnas" label="Dedupnas">

| Macro                | Description                                                                                                                                                       | Default value            | Mandatory |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:---------:|
| WARNINGORIGINALSIZE  | Threshold                                                                                                                                                         |                          |           |
| CRITICALORIGINALSIZE | Threshold                                                                                                                                                         |                          |           |
| WARNINGSENTDATASIZE  | Threshold                                                                                                                                                         |                          |           |
| CRITICALSENTDATASIZE | Threshold                                                                                                                                                         |                          |           |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{state\}, %\{duration\}, %\{percent\_complete\}  | %\{state\} !~ /Enabled/i |           |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{state\}, %\{duration\}, %\{percent\_complete\} |                          |           |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                            |                          |           |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Macro                    | Description                                                                                                                            | Default value | Mandatory |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGDATANOTDEDUP      | Threshold                                                                                                                              |               |           |
| CRITICALDATANOTDEDUP     | Threshold                                                                                                                              |               |           |
| WARNINGDEDUPLICATEDDATA  | Threshold                                                                                                                              |               |           |
| CRITICALDEDUPLICATEDDATA | Threshold                                                                                                                              |               |           |
| WARNINGFREESPACE         | Threshold                                                                                                                              |               |           |
| CRITICALFREESPACE        | Threshold                                                                                                                              |               |           |
| WARNINGRECLAIMABLESPACE  | Threshold                                                                                                                              |               |           |
| CRITICALRECLAIMABLESPACE | Threshold                                                                                                                              |               |           |
| WARNINGSYSTEMDATA        | Threshold                                                                                                                              |               |           |
| CRITICALSYSTEMDATA       | Threshold                                                                                                                              |               |           |
| WARNINGUSAGE             | Threshold                                                                                                                              |               |           |
| CRITICALUSAGE            | Threshold                                                                                                                              |               |           |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="Health" label="Health">

| Macro          | Description                                                                                                                            | Default value                    | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{status\}, %\{state\}  | %\{status\} !~ /Ready\|Success/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{status\}, %\{state\}   |                                  |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                                  |             |

</TabItem>
<TabItem value="Hostbus-Adapter-Status" label="Hostbus-Adapter-Status">

| Macro          | Description                                                                                                                            | Default value            | Mandatory |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:---------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{status\}              | %\{status\} !~ /Normal/i |           |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{status\}               |                          |           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                          |           |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro         | Description                                                                                                                            | Default value     | Mandatory |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:---------:|
| UNITS         | Units of thresholds. Can be : '%', 'B'                                                                                                 | %                 |           |
| WARNINGUSAGE  | Warning threshold                                                                                                                      |                   |           |
| CRITICALUSAGE | Critical threshold                                                                                                                     |                   |           |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |           |

</TabItem>
<TabItem value="Network" label="Network">

| Macro          | Description                                                                                                                            | Default value        | Mandatory |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:---------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{status\}              | %\{status\} !~ /Up/i |           |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{status\}               |                      |           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                      |           |

</TabItem>
<TabItem value="Reclamation" label="Reclamation">

| Macro                       | Description                                                                                                                            | Default value                        | Mandatory |
|:----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|:---------:|
| WARNINGDATASCANNED          | Threshold                                                                                                                              |                                      |           |
| CRITICALDATASCANNED         | Threshold                                                                                                                              |                                      |           |
| WARNINGRECLAIMABLESPACE     | Threshold                                                                                                                              |                                      |           |
| CRITICALRECLAIMABLESPACE    | Threshold                                                                                                                              |                                      |           |
| WARNINGSTAGESTATUSPROGRESS  | Threshold                                                                                                                              |                                      |           |
| CRITICALSTAGESTATUSPROGRESS | Threshold                                                                                                                              |                                      |           |
| CRITICALSTATUS              | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{reclamation\_status\}            | %\{reclamation\_status\} !~ /ready/i |           |
| WARNINGSTATUS               | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{reclamation\_status\}             |                                      |           |
| WARNINGTOTALPROGRESS        | Threshold                                                                                                                              |                                      |           |
| CRITICALTOTALPROGRESS       | Threshold                                                                                                                              |                                      |           |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                                      |           |

</TabItem>
<TabItem value="Reduction" label="Reduction">

| Macro                                 | Description                                                                                                                            | Default value | Mandatory |
|:--------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGAPPSPECIFICDEDUPLICATEDSHARES  | Threshold                                                                                                                              |               |           |
| CRITICALAPPSPECIFICDEDUPLICATEDSHARES | Threshold                                                                                                                              |               |           |
| WARNINGCIFSSMBDEDUPLICATEDSHARES      | Threshold                                                                                                                              |               |           |
| CRITICALCIFSSMBDEDUPLICATEDSHARES     | Threshold                                                                                                                              |               |           |
| WARNINGCOMPRESSIONRATIO               | Threshold                                                                                                                              |               |           |
| CRITICALCOMPRESSIONRATIO              | Threshold                                                                                                                              |               |           |
| WARNINGDEDUPLICATEDPARTITIONS         | Threshold                                                                                                                              |               |           |
| CRITICALDEDUPLICATEDPARTITIONS        | Threshold                                                                                                                              |               |           |
| WARNINGDEDUPLICATIONRATIO             | Threshold                                                                                                                              |               |           |
| CRITICALDEDUPLICATIONRATIO            | Threshold                                                                                                                              |               |           |
| WARNINGINCOMINGNAMESPACE              | Threshold                                                                                                                              |               |           |
| CRITICALINCOMINGNAMESPACE             | Threshold                                                                                                                              |               |           |
| WARNINGNFSDEDUPLICATEDSHARES          | Threshold                                                                                                                              |               |           |
| CRITICALNFSDEDUPLICATEDSHARES         | Threshold                                                                                                                              |               |           |
| WARNINGOSTSTORAGESERVERS              | Threshold                                                                                                                              |               |           |
| CRITICALOSTSTORAGESERVERS             | Threshold                                                                                                                              |               |           |
| WARNINGSIZEAFTERREDUCTION             | Threshold                                                                                                                              |               |           |
| CRITICALSIZEAFTERREDUCTION            | Threshold                                                                                                                              |               |           |
| WARNINGSIZEBEFOREREDUCTION            | Threshold                                                                                                                              |               |           |
| CRITICALSIZEBEFOREREDUCTION           | Threshold                                                                                                                              |               |           |
| WARNINGTOTALREDUCTIONRATIO            | Threshold                                                                                                                              |               |           |
| CRITICALTOTALREDUCTIONRATIO           | Threshold                                                                                                                              |               |           |
| EXTRAOPTIONS                          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
<TabItem value="Storage-Array-Status" label="Storage-Array-Status">

| Macro          | Description                                                                                                                            | Default value            | Mandatory |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:---------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{status\}              | %\{status\} !~ /Normal/i |           |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{status\}               |                          |           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                          |           |

</TabItem>
<TabItem value="System-Status" label="System-Status">

| Macro          | Description                                                                                                                            | Default value            | Mandatory |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:---------:|
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{name\}, %\{status\}              | %\{status\} !~ /Normal/i |           |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{name\}, %\{status\}               |                          |           |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                          |           |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Macro             | Description                                                                                                                            | Default value | Mandatory |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| WARNINGREADRATE   | Threshold                                                                                                                              |               |           |
| CRITICALREADRATE  | Threshold                                                                                                                              |               |           |
| WARNINGWRITERATE  | Threshold                                                                                                                              |               |           |
| CRITICALWRITERATE | Threshold                                                                                                                              |               |           |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_quantum_dxi.pl \
	--plugin=storage::quantum::dxi::ssh::plugin \
	--mode=system-status \
	--hostname='10.0.0.1' \
	--ssh-backend='sshcli' \
	--ssh-username='' \
	--ssh-password='' \
	--ssh-port=''  \
	--warning-status='' \
	--critical-status='%\{status\} !~ /Normal/i' 
```

The expected command output is shown below:

```bash
OK: All component status are ok 
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
/usr/lib/centreon/plugins/centreon_quantum_dxi.pl \
	--plugin=storage::quantum::dxi::ssh::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                | Linked service template                                  |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------|
| compaction [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/compaction.pm)]                       | HW-Storage-Quantum-Dxi-Compaction-SSH-custom             |
| dedupnas [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/dedupnas.pm)]                           | HW-Storage-Quantum-Dxi-Dedupnas-SSH-custom               |
| dedupvtl [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/dedupvtl.pm)]                           | Not used in this Monitoring Connector                    |
| disk-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/diskusage.pm)]                        | HW-Storage-Quantum-Dxi-Disk-Usage-SSH-custom             |
| health [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/health.pm)]                               | HW-Storage-Quantum-Dxi-Health-SSH-custom                 |
| hostbus-adapter-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/hostbusadapterstatus.pm)] | HW-Storage-Quantum-Dxi-Hostbus-Adapter-Status-SSH-custom |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/memory.pm)]                               | HW-Storage-Quantum-Dxi-Memory-SSH-custom                 |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/network.pm)]                             | HW-Storage-Quantum-Dxi-Network-SSH-custom                |
| reclamation [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/reclamation.pm)]                     | HW-Storage-Quantum-Dxi-Reclamation-SSH-custom            |
| reduction [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/reduction.pm)]                         | HW-Storage-Quantum-Dxi-Reduction-SSH-custom              |
| storage-array-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/storagearraystatus.pm)]     | HW-Storage-Quantum-Dxi-Storage-Array-Status-SSH-custom   |
| system-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/systemstatus.pm)]                  | HW-Storage-Quantum-Dxi-System-Status-SSH-custom          |
| throughput [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/quantum/dxi/ssh/mode/throughput.pm)]                       | HW-Storage-Quantum-Dxi-Throughput-SSH-custom             |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
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
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --ssh-backend                              |   Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-username                             |   Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --ssh-password                             |   Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-port                                 |   Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --ssh-priv-key                             |   Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --hostname                                 |   Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --timeout                                  |   Timeout in seconds for the command (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sudo                                     |   Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --command                                  |   Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --command-path                             |   Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --command-options                          |   Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Compaction" label="Compaction">

| Option                   | Description                                                                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                                          |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{compaction\_status\}                                       |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{compaction\_status\} !~ /ready/i'). You can use the following variables: %\{compaction\_status\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'status-progress', 'compacted', 'still-to-compact'.                                                                                                       |

</TabItem>
<TabItem value="Dedupnas" label="Dedupnas">

| Option                   | Description                                                                                                                                                                                                 |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                                                                      |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%\{state\} !~ /Enabled/i'). You can use the following variables: %\{status\}, %\{state\}, %\{duration\}, %\{percent\_complete\}.   |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %\{status\}, %\{state\}, %\{duration\}, %\{percent\_complete\}.                          |
| --warning-* --critical-* |   Thresholds. Can be: 'original-data-size', 'sent-data-size'.                                                                                                                                               |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Option                   | Description                                                                                                                                        |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='usage'                                                              |
| --warning-* --critical-* |   Thresholds. Can be: 'usage', 'free-space','reclaimable-space', 'deduplicated-data', 'system-metadata', 'data-not-intended-for-deduplication'.    |

</TabItem>
<TabItem value="Health" label="Health">

| Option            | Description                                                                                                                                                                              |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{name\}, %\{status\}, %\{state\}                                     |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /Ready\|Success/i'). You can use the following variables: %\{name\}, %\{status\}, %\{state\}    |

</TabItem>
<TabItem value="Hostbus-Adapter-Status" label="Hostbus-Adapter-Status">

| Option            | Description                                                                                                                                                          |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{name\}, %\{status\}                             |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /Normal/i'). You can use the following variables: %\{name\}, %\{status\}    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option           | Description              |
|:-----------------|:-------------------------|
| --warning-usage  |   Warning threshold.     |
| --critical-usage |   Critical threshold.    |

</TabItem>
<TabItem value="Network" label="Network">

| Option            | Description                                                                                                                                                      |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{name\}, %\{status\}                         |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /Up/i'). You can use the following variables: %\{name\}, %\{status\}    |

</TabItem>
<TabItem value="Reclamation" label="Reclamation">

| Option                   | Description                                                                                                                                                                       |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                                            |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{reclamation\_status\}                                        |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{reclamation\_status\} !~ /ready/i'). You can use the following variables: %\{reclamation\_status\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'status-progress', 'compacted', 'still-to-compact'.                                                                                                         |

</TabItem>
<TabItem value="Reduction" label="Reduction">

| Option                   | Description                                                                                                                                                                                                                                                                                                                  |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='ratio'                                                                                                                                                                                                                                        |
| --warning-* --critical-* |   Thresholds. Can be: 'size-before-reduction', 'size-after-reduction', 'incoming-namespace', 'nfs-deduplicated-shares', cifs-smb-deduplicated-shares', 'application-specific-deduplicated-shares', 'deduplicated-partitions', 'ost-storage-servers', 'total-reduction-ratio', 'deduplication-ratio', 'compression-ratio'.    |

</TabItem>
<TabItem value="Storage-Array-Status" label="Storage-Array-Status">

| Option            | Description                                                                                                                                                          |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{name\}, %\{status\}                             |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /Normal/i'). You can use the following variables: %\{name\}, %\{status\}    |

</TabItem>
<TabItem value="System-Status" label="System-Status">

| Option            | Description                                                                                                                                                          |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{name\}, %\{status\}                             |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /Normal/i'). You can use the following variables: %\{name\}, %\{status\}    |

</TabItem>
<TabItem value="Throughput" label="Throughput">

| Option                   | Description                                         |
|:-------------------------|:----------------------------------------------------|
| --warning-* --critical-* |   Thresholds. Can be: 'read-rate', 'write-rate'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_quantum_dxi.pl \
	--plugin=storage::quantum::dxi::ssh::plugin \
	--mode=system-status \
	--help
```
