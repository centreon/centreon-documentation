---
id: hardware-servers-cisco-ucs-snmp
title: Cisco UCS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Overview

The Centreon Monitoring Connector **Cisco UCS** relies on the SNMP protocol to query and collect statuses and metrics from the UCS server.

## Pack assets

### Templates

The Monitoring Connector **Cisco UCS** brings a host template:

* **HW-Server-Cisco-Ucs-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Server-Cisco-Ucs-SNMP-custom" label="HW-Server-Cisco-Ucs-SNMP-custom">

| Service Alias | Service Template                           | Service Description  |
|:--------------|:-------------------------------------------|:---------------------|
| Audit-Logs    | HW-Server-Cisco-Ucs-Audit-Logs-SNMP-custom | Check audit logs     |
| Equipment     | HW-Server-Cisco-Ucs-Equipment-SNMP-custom  | Check hardware state |
| Faults        | HW-Server-Cisco-Ucs-Faults-SNMP-custom     | Check faults         |

> The services listed above are created automatically when the **HW-Server-Cisco-Ucs-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias   | Service Template                                | Service Description             |
|:----------------|:------------------------------------------------|:--------------------------------|
| Mgmt-Entities   | HW-Server-Cisco-Ucs-Mgmt-Entities-SNMP-custom   | Check management entities       |
| Service-Profile | HW-Server-Cisco-Ucs-Service-Profile-SNMP-custom | Check count of service profiles |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                             |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **HW-Server-Cisco-Ucs-SNMP-custom** host template |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Audit-Logs" label="Audit-Logs">

| Metric name          | Unit  |
|:---------------------|:------|
| audit.total.count    | count |
| audit.values %.count | count |
| status               | N/A   |

</TabItem>
<TabItem value="Equipment" label="Equipment">

| Metric name | Description           | Unit  |
|:------------|:----------------------|:------|
| status      | Check Hardware status |       |

</TabItem>
<TabItem value="Faults" label="Faults">

| Metric name           | Unit  |
|:----------------------|:------|
| faults.total.count    | count |
| faults.values %.count | count |
| status                | N/A   |

</TabItem>
<TabItem value="Mgmt-Entities" label="Mgmt-Entities">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| management_entities.total.count | count |
| *mgmt*#status                   | N/A   |

</TabItem>
<TabItem value="Service-Profile" label="Service-Profile">

| Metric name                   | Unit  |
|:------------------------------|:------|
| serviceprofiles.total.count   | count |
| serviceprofiles.online.count  | count |
| serviceprofiles.offline.count | count |
| *sp*#status                   | N/A   |

</TabItem>
</Tabs>

## Prerequisites

### Device Configuration

The SNMP agent must be configured and running on the UCS server. Please refer to the manufacturer documentation to achieve this.

### Network flows

The Centreon Poller must be able to reach the UDP/161 SNMP port of the UCS server.

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
dnf install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-servers-cisco-ucs-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Cisco UCS** connector through
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
dnf install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-servers-cisco-ucs-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Servers-Cisco-Ucs-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Server-Cisco-Ucs-SNMP-custom** template to the host.

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                          | Default value     | Mandatory   |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Audit-Logs" label="Audit-Logs">

| Macro                  | Description                                                                                                                                                                         | Default value                    | Mandatory   |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| WARNINGAUDITCRITICAL   | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALAUDITCRITICAL  | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGAUDITWARNING    | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALAUDITWARNING   | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGAUDITCLEARED    | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALAUDITCLEARED   | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGAUDITCONDITION  | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALAUDITCONDITION | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGAUDITINFO       | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALAUDITINFO      | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGAUDITMAJOR      | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALAUDITMAJOR     | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGAUDITMINOR      | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALAUDITMINOR     | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGAUDITTOTAL      | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALAUDITTOTAL     | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING (default: '%{severity} =~ /minor\|warning/') You can use the following variables: %{severity}, %{description}, %{dn}    | %{severity} =~ /minor\|warning/  |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%{severity} =~ /major\|critical/'). You can use the following variables: %{severity}, %{description}, %{dn} | %{severity} =~ /major\|critical/ |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                  | --verbose                        |             |

</TabItem>
<TabItem value="Equipment" label="Equipment">

| Macro        | Description                                                                                                                       | Default value                   | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------------------------------------|:--------------------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'chassis', 'iocard', 'blade', 'fex', 'cpu', 'memory', 'localdisk' | .*                              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                | --verbose  --snmp-force-getnext |             |

</TabItem>
<TabItem value="Faults" label="Faults">

| Macro                   | Description                                                                                                                                                                         | Default value                    | Mandatory   |
|:------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| WARNINGFAULTSWARNING    | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALFAULTSWARNING   | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGFAULTSCRITICAL   | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALFAULTSCRITICAL  | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGFAULTSCLEARED    | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALFAULTSCLEARED   | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGFAULTSCONDITION  | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALFAULTSCONDITION | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGFAULTSINFO       | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALFAULTSINFO      | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGFAULTSMAJOR      | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALFAULTSMAJOR     | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGFAULTSMINOR      | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALFAULTSMINOR     | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGFAULTSTOTAL      | Warning threshold                                                                                                                                                                                    |                                  |             |
| CRITICALFAULTSTOTAL     | Critical threshold                                                                                                                                                                                    |                                  |             |
| WARNINGSTATUS           | Define the conditions to match for the status to be WARNING (default: '%{severity} =~ /minor\|warning/') You can use the following variables: %{severity}, %{description}, %{dn}    | %{severity} =~ /minor\|warning/  |             |
| CRITICALSTATUS          | Define the conditions to match for the status to be CRITICAL (default: '%{severity} =~ /major\|critical/'). You can use the following variables: %{severity}, %{description}, %{dn} | %{severity} =~ /major\|critical/ |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                  | --verbose                        |             |

</TabItem>
<TabItem value="Mgmt-Entities" label="Mgmt-Entities">

| Macro          | Description                                                                                                                                                                                                                                                      | Default value                                                                                     | Mandatory   |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (default: '%{role} =~ /unknown/ or %{status} eq "unknown" or %{services\_status} eq "unknown"') You can use the following variables: %{dn}, %{role}, %{services\_status}, %{status}                  | %{role} =~ /unknown/ or %{status} eq "unknown" or %{services\_status} eq "unknown"                |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%{role} =~ /electionFailed\|inapplicable/ or %{status} eq "down" or %{services\_status} eq "down"'). You can use the following variables: %{dn}, %{role}, %{services\_status}, %{status} | %{role} =~ /electionFailed\|inapplicable/ or %{status} eq "down" or %{services\_status} eq "down" |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{dn}, %{role}, %{services\_status}, %{status}                                                                                                                 |                                                                                                   |             |
| WARNINGTOTAL   | Thresholds                                                                                                                                                                                                                                                       |                                                                                                   |             |
| CRITICALTOTAL  | Thresholds                                                                                                                                                                                                                                                       |                                                                                                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                               | --verbose                                                                                         |             |

</TabItem>
<TabItem value="Service-Profile" label="Service-Profile">

| Macro           | Description                                                                                                                                             | Default value          | Mandatory   |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| WARNINGOFFLINE  | Thresholds                                                                                                                                              |                        |             |
| CRITICALOFFLINE | Thresholds                                                                                                                                              |                        |             |
| WARNINGONLINE   | Thresholds                                                                                                                                              |                        |             |
| CRITICALONLINE  | Thresholds                                                                                                                                              |                        |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL (default: '%{status} eq "offline"'). You can use the following variables: %{dn}, %{status} | %{status} eq "offline" |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %{dn}, %{status}                                      |                        |             |
| WARNINGTOTAL    | Thresholds                                                                                                                                              |                        |             |
| CRITICALTOTAL   | Thresholds                                                                                                                                              |                        |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                      | --verbose              |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_cisco_ucs.pl \
	--plugin=hardware::server::cisco::ucs::snmp::plugin \
	--mode=service-profile \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--warning-total='' \
	--critical-total='' \
	--warning-online='' \
	--critical-online='' \
	--warning-offline='' \
	--critical-offline='' \
	--warning-status='' \
	--critical-status='%{status} eq "offline"' \
	--verbose
```

The expected command output is shown below:

```bash
OK: total: 2 online: 89 offline: 31 All service profiles are ok | 'serviceprofiles.total.count'=2;;;0;'serviceprofiles.online.count'=89;;;0;total'serviceprofiles.offline.count'=31;;;0;total
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
/usr/lib/centreon/plugins/centreon_cisco_ucs.pl \
	--plugin=hardware::server::cisco::ucs::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                          | Linked service template                         |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| audit-logs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/cisco/ucs/snmp/mode/auditlogs.pm)]           | HW-Server-Cisco-Ucs-Audit-Logs-SNMP-custom      |
| equipment [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/cisco/ucs/snmp/mode/equipment.pm)]            | HW-Server-Cisco-Ucs-Equipment-SNMP-custom       |
| faults [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/cisco/ucs/snmp/mode/faults.pm)]                  | HW-Server-Cisco-Ucs-Faults-SNMP-custom          |
| mgmt-entities [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/cisco/ucs/snmp/mode/mgmtentities.pm)]     | HW-Server-Cisco-Ucs-Mgmt-Entities-SNMP-custom   |
| service-profile [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/hardware/server/cisco/ucs/snmp/mode/serviceprofile.pm)] | HW-Server-Cisco-Ucs-Service-Profile-SNMP-custom |

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
<TabItem value="Audit-Logs" label="Audit-Logs">

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
| --warning-status       | Define the conditions to match for the status to be WARNING (default: '%{severity} =~ /minor\|warning/') You can use the following variables: %{severity}, %{description}, %{dn}                                                              |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%{severity} =~ /major\|critical/'). You can use the following variables: %{severity}, %{description}, %{dn}                                                           |
| --memory               | Only check new audit.                                                                                                                                                                                                                         |
| --filter-message       | Filter on event message. (default: none)                                                                                                                                                                                                      |
| --retention            | Event older (current time - retention time) is not checked (in seconds).                                                                                                                                                                      |

</TabItem>
<TabItem value="Equipment" label="Equipment">

| Option               | Description                                                                                                                                                                                                                                                                                                                       |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'fan', 'psu', 'chassis', 'iocard', 'blade', 'fex', 'cpu', 'memory', 'localdisk'.                                                                                                                                                                                                |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=fan,/sys/chassis-7/fan-module-1-7/fan-1                                                                                                                                      |
| --absent-problem     | Return an error if an entity is not 'present' (default is skipping) (comma separated list) Can be specific or global: --absent-problem=fan,/sys/chassis-7/fan-module-1-7/fan-1                                                                                                                                                    |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                                                                                                                                        |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fan.operability,OK,poweredOff\|removed' --threshold-overload='presence,OK,missing' --threshold-overload='operability,OK,removed'    |

</TabItem>
<TabItem value="Faults" label="Faults">

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
| --warning-status       | Define the conditions to match for the status to be WARNING (default: '%{severity} =~ /minor\|warning/') You can use the following variables: %{severity}, %{description}, %{dn}                                                              |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (default: '%{severity} =~ /major\|critical/'). You can use the following variables: %{severity}, %{description}, %{dn}                                                           |
| --memory               | Only check new fault.                                                                                                                                                                                                                         |
| --filter-message       | Filter on event message. (default: none)                                                                                                                                                                                                      |
| --retention            | Event older (current time - retention time) is not checked (in seconds).                                                                                                                                                                      |

</TabItem>
<TabItem value="Mgmt-Entities" label="Mgmt-Entities">

| Option                   | Description                                                                                                                                                                                                                                                        |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (default: '%{role} =~ /unknown/ or %{status} eq "unknown" or %{services\_status} eq "unknown"') You can use the following variables: %{dn}, %{role}, %{services\_status}, %{status}                    |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{dn}, %{role}, %{services\_status}, %{status}                                                                                                                   |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{role} =~ /electionFailed\|inapplicable/ or %{status} eq "down" or %{services\_status} eq "down"'). You can use the following variables: %{dn}, %{role}, %{services\_status}, %{status}   |
| --warning-* --critical-* | Thresholds. Can be: 'total'.                                                                                                                                                                                                                                       |

</TabItem>
<TabItem value="Service-Profile" label="Service-Profile">

| Option                   | Description                                                                                                                                               |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{dn}, %{status}                                        |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%{status} eq "offline"'). You can use the following variables: %{dn}, %{status}   |
| --warning-* --critical-* | Thresholds. Can be: 'total', 'online', 'offline'.                                                                                                         |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_ucs.pl \
	--plugin=hardware::server::cisco::ucs::snmp::plugin \
	--mode=service-profile \
	--help
```
