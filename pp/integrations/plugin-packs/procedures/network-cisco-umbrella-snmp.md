---
id: network-cisco-umbrella-snmp
title: Cisco Umbrella
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Cisco Umbrella** brings a host template:

* **Net-Cisco-Umbrella-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Umbrella-SNMP-custom" label="Net-Cisco-Umbrella-SNMP-custom">

| Service Alias    | Service Template                                | Service Description                                                                           |
|:-----------------|:------------------------------------------------|:----------------------------------------------------------------------------------------------|
| Appliance-Status | Net-Cisco-Umbrella-Appliance-Status-SNMP-custom | Check virtual appliance status                                                                |
| Connectivity     | Net-Cisco-Umbrella-Connectivity-SNMP-custom     | Check connectivity between Umbrella virtual appliance and DNS, local DNS, and Umbrella dashboard  |
| Cpu              | Net-Cisco-Umbrella-Cpu-SNMP-custom              | Check CPU usage                                                                               |
| Load-Average     | Net-Cisco-Umbrella-Load-Average-SNMP-custom     | Check load for 5m and 15m                                                                      |
| Memory           | Net-Cisco-Umbrella-Memory-SNMP-custom           | Check memory usage                                                                            |
| Query            | Net-Cisco-Umbrella-Query-SNMP-custom            | Check number of DNS queries per second over the last 5 and 15 minutes                         |
| Storage-Usage    | Net-Cisco-Umbrella-Storage-SNMP-custom          | Check storage usage                                                                           |

> The services listed above are created automatically when the **Net-Cisco-Umbrella-SNMP-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                            |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Cisco-Umbrella-SNMP-custom** host template |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Appliance-Status" label="Appliance-Status">

| Metric name | Unit  |
|:------------|:------|
| status      | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Connectivity" label="Connectivity">

| Metric Name                   | Unit |
|:------------------------------|:-----|
| DNS connectivity status       | N/A  |
| Local DNS connectivity status | N/A  |
| Umbrella dashboard (cloud) connectivity status | N/A  |
| AD connectors connectivity status              | N/A  |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| cpu.user.utilization.percentage      | %     |
| cpu.nice.utilization.percentage      | %     |
| cpu.system.utilization.percentage    | %     |
| cpu.idle.utilization.percentage      | %     |
| cpu.wait.utilization.percentage      | %     |
| cpu.kernel.utilization.percentage    | %     |
| cpu.interrupt.utilization.percentage | %     |
| cpu.softirq.utilization.percentage   | %     |
| cpu.steal.utilization.percentage     | %     |
| cpu.guest.utilization.percentage     | %     |
| cpu.guestnice.utilization.percentage | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Load-Average" label="Load-Average">

| Metric name            | Unit  |
|:-----------------------|:------|
| load.1m.average.count  | count |
| load.5m.average.count  | count |
| load.15m.average.count | count |
| load.1m.count          | count |
| load.5m.count          | count |
| load.15m.count         | count |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name             | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| memory.buffer.bytes     | B     |
| memory.cached.bytes     | B     |
| memory.shared.bytes     | B     |
| swap.usage.bytes        | B     |
| swap.free.bytes         | B     |
| swap.usage.percentage   | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Query" label="Query">

| Metric name                        | Unit  |
|:-----------------------------------|:------|
| dns.query.last.5m.persecond.count  | count |
| dns.query.last.15m.persecond.count | count |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Metric name                    | Unit  |
|:-------------------------------|:------|
| storage.utilization.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **Cisco Umbrella**
server. Please refer to the official documentation from Cisco:

* [Cisco Umbrella](https://docs.umbrella.com/deployment-umbrella/docs/appendix-c-enable-snmp-monitoring)

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
SNMP port.

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
dnf install centreon-pack-network-cisco-umbrella-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-cisco-umbrella-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-cisco-umbrella-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-umbrella-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Cisco Umbrella** connector through
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
dnf install centreon-plugin-Network-Cisco-Umbrella-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Cisco-Umbrella-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-cisco-umbrella-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Umbrella-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Cisco-Umbrella-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                                                              | Default value     | Mandatory   |
|:-----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Appliance-Status" label="Appliance-Status">

| Macro          | Description                                                                                                                            | Default value         | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}                            | %\{status\} =~ /yellow/ |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}                           | %\{status\} =~ /red/    |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                       |             |

</TabItem>
<TabItem value="Connectivity" label="Connectivity">

| Macro                  | Description                                                                                                                            | Default value         | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| WARNINGADSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                | %\{status\} =~ /yellow/ |             |
| CRITICALADSTATUS       | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\}               | %\{status\} =~ /red/    |             |
| WARNINGCLOUDSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                | %\{status\} =~ /yellow/ |             |
| CRITICALCLOUDSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\}               | %\{status\} =~ /red/    |             |
| WARNINGDNSSTATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                | %\{status\} =~ /yellow/ |             |
| CRITICALDNSSTATUS      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\}               | %\{status\} =~ /red/    |             |
| WARNINGLOCALDNSSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                | %\{status\} =~ /yellow/ |             |
| CRITICALLOCALDNSSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\}               | %\{status\} =~ /red/    |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                       |             |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Macro             | Description                                                                                                                            | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGGUEST      | Warning threshold in percent                                                                                                           |                   |             |
| CRITICALGUEST     | Critical threshold in percent                                                                                                          |                   |             |
| WARNINGGUESTNICE  | Warning threshold in percent                                                                                                           |                   |             |
| CRITICALGUESTNICE | Critical threshold in percent                                                                                                          |                   |             |
| WARNINGIDLE       | Warning threshold in percent                                                                                                           |                   |             |
| CRITICALIDLE      | Critical threshold in percent                                                                                                          |                   |             |
| WARNINGINTERRUPT  | Warning threshold in percent                                                                                                           |                   |             |
| CRITICALINTERRUPT | Critical threshold in percent                                                                                                          |                   |             |
| WARNINGKERNEL     | Warning threshold in percent                                                                                                           |                   |             |
| CRITICALKERNEL    | Critical threshold in percent                                                                                                          |                   |             |
| WARNINGNICE       | Warning threshold in percent                                                                                                           |                   |             |
| CRITICALNICE      | Critical threshold in percent                                                                                                          |                   |             |
| WARNINGSOFTIRQ    | Warning threshold in percent                                                                                                           |                   |             |
| CRITICALSOFTIRQ   | Critical threshold in percent                                                                                                          |                   |             |
| WARNINGSTEAL      | Warning threshold in percent                                                                                                           |                   |             |
| CRITICALSTEAL     | Critical threshold in percent                                                                                                          |                   |             |
| WARNINGSYSTEM     | Warning threshold in percent                                                                                                           |                   |             |
| CRITICALSYSTEM    | Critical threshold in percent                                                                                                          |                   |             |
| WARNINGUSER       | Warning threshold in percent                                                                                                           |                   |             |
| CRITICALUSER      | Critical threshold in percent                                                                                                          |                   |             |
| WARNINGWAIT       | Warning threshold in percent                                                                                                           |                   |             |
| CRITICALWAIT      | Critical threshold in percent                                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Load-Average" label="Load-Average">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold (1min,5min,15min)                                                                                                    |                   |             |
| CRITICAL     | Critical threshold (1min,5min,15min)                                                                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Thresholds                                                                                                                             |                   |             |
| CRITICAL     | Thresholds                                                                                                                             |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Query" label="Query">

| Macro                  | Description                                                                                                                            | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGQUERY15MINUTES  | Warning threshold                                                                                                                      |                   |             |
| CRITICALQUERY15MINUTES | Critical threshold                                                                                                                     |                   |             |
| WARNINGQUERY5MINUTES   | Warning threshold                                                                                                                      |                   |             |
| CRITICALQUERY5MINUTES  | Critical threshold                                                                                                                     |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPRCT  | Warning threshold for disk usage in percent                                                                                            |                   |             |
| CRITICALPRCT | Critical threshold for disk usage in percent                                                                                           |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_cisco_umbrella_snmp.pl \
	--plugin=network::cisco::umbrella::snmp::plugin \
	--mode=storage \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--warning-usage='' \
	--critical-usage='' 
```

The expected command output is shown below:

```bash
OK: Storage usage: 67 % | 'storage.utilization.percentage'=67%;;;0;100
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
/usr/lib/centreon/plugins/centreon_cisco_umbrella_snmp.pl \
	--plugin=network::cisco::umbrella::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                  | Linked service template                         |
|:--------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| appliance [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/umbrella/snmp/mode/appliance.pm)]       | Net-Cisco-Umbrella-Appliance-Status-SNMP-custom |
| connectivity [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/umbrella/snmp/mode/connectivity.pm)] | Net-Cisco-Umbrella-Connectivity-SNMP-custom     |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/umbrella/snmp/mode/cpudetailed.pm)]           | Net-Cisco-Umbrella-Cpu-SNMP-custom              |
| load [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/umbrella/snmp/mode/load.pm)]                 | Net-Cisco-Umbrella-Load-Average-SNMP-custom     |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/umbrella/snmp/mode/memory.pm)]             | Net-Cisco-Umbrella-Memory-SNMP-custom           |
| query [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/umbrella/snmp/mode/query.pm)]               | Net-Cisco-Umbrella-Query-SNMP-custom            |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/umbrella/snmp/mode/storage.pm)]           | Net-Cisco-Umbrella-Storage-SNMP-custom          |

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
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
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
| --hostname                                 | Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-community                           | SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-version                             | Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-port                                | UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-timeout                             | Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-retries                             | Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --subsetleef                               | How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-autoreduce                          | Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-force-getnext                       | Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --snmp-username                            | SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authpassphrase                           | SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --authprotocol                             | SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --privpassphrase                           | SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --privprotocol                             | SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --contextname                              | SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --contextengineid                          | SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --securityengineid                         | SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-errors-exit                         | Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-tls-transport                       | Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-our-identity                    | X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-tls-their-identity                  | X.509 certificate to identify the remote host. Can be the path to the certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --snmp-tls-their-hostname                  | Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-trust-cert                      | A trusted CA certificate used to verify a remote host's certificate. If you use this option, you must also define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Appliance-Status" label="Appliance-Status">

| Option            | Description                                                                                                                                      |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status  | Define the conditions to match for the status to be WARNING. (default: '%\{status\} =~ /yellow/') You can use the following variables: %\{status\}   |
| --critical-status | Define the conditions to match for the status to be CRITICAL. (default: '%\{status\} =~ /red/'). You can use the following variables: %\{status\}    |

</TabItem>
<TabItem value="Connectivity" label="Connectivity">

| Option       | Description                                                                                                                                                                                                                                          |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-*  | Define the conditions to match for the status to be WARNING. (default: '%\{status\} =~ /yellow/'). Can be: 'dns-status', 'localdns-status', 'cloud-status', 'ad-status'.  Can use special variables like: %\{status\}, %\{display\}                        |
| --critical-* | Define the conditions to match for the status to be CRITICAL. (default: %\{status\} =~ /red/). Can be: 'dns-connectivity', 'localdns-connectivity', 'cloud-connectivity', 'ad-connectivity'.  Can use special variables like: %\{status\}, %\{display\}    |

</TabItem>
<TabItem value="Cpu" label="Cpu">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                              |
| --critical-*           | Critical threshold in percent. Can be: 'user', 'nice', 'system', 'idle', 'wait', 'kernel', 'interrupt', 'softirq', 'steal', 'guest', 'guestnice'.                                                                                             |

</TabItem>
<TabItem value="Load-Average" label="Load-Average">

| Option     | Description                             |
|:-----------|:----------------------------------------|
| --warning  | Warning threshold (1min,5min,15min).    |
| --critical | Critical threshold (1min,5min,15min).   |
| --average  | Load average for the number of CPUs.    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                                     |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --units                  | Units of thresholds (default: '%') ('%', 'absolute')(deprecated. Please use new counters directly)                                                              |
| --free                   | Thresholds are on free space left (deprecated. Please use newcounters directly)                                                                                 |
| --swap                   | Check swap also.                                                                                                                                                |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'swap' (B), 'swap-free' (B), 'swap-prct' (%), 'buffer' (B), 'cached' (B), 'shared' (B).    |

</TabItem>
<TabItem value="Query" label="Query">

| Option       | Description                                 |
|:-------------|:--------------------------------------------|
| --warning-*  | Warning threshold. Can be: '5m', '15m'.     |
| --critical-* | Critical threshold. Can be: '5m', '15m'.    |

</TabItem>
<TabItem value="Storage-Usage" label="Storage-Usage">

| Option           | Description                                      |
|:-----------------|:-------------------------------------------------|
| --warning-usage  | Warning threshold for disk usage in percent.     |
| --critical-usage | Critical threshold for disk usage in percent.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_umbrella_snmp.pl \
	--plugin=network::cisco::umbrella::snmp::plugin \
	--mode=storage \
	--help
```
