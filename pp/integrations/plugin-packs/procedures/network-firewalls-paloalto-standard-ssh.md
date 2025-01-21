---
id: network-firewalls-paloalto-standard-ssh
title: Palo Alto firewall SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Palo Alto firewall SSH** brings a host template:

* **Net-PaloAlto-Standard-SSH-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-PaloAlto-Standard-SSH-custom" label="Net-PaloAlto-Standard-SSH-custom">

| Service Alias | Service Template                             | Service Description      |
|:--------------|:---------------------------------------------|:-------------------------|
| Environment   | Net-PaloAlto-Standard-Environment-SSH-custom | Check components         |
| Ha            | Net-PaloAlto-Standard-Ha-SSH-custom          | Check high availability  |
| Interfaces    | Net-PaloAlto-Standard-Interfaces-SSH-custom  | Check interfaces         |
| Ipsec         | Net-PaloAlto-Standard-Ipsec-SSH-custom       | Check IPsec tunnels      |
| Licenses      | Net-PaloAlto-Standard-Licenses-SSH-custom    | Check features licensing |
| System        | Net-PaloAlto-Standard-System-SSH-custom      | Check system             |

> The services listed above are created automatically when the **Net-PaloAlto-Standard-SSH-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Environment" label="Environment">

Coming soon

</TabItem>
<TabItem value="Ha" label="Ha">

| Metric name                 | Unit  |
|:----------------------------|:------|
| sync-status                 | N/A   |
| *member*~member-status      | N/A   |
| *member*~*link*#link-status | N/A   |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name            | Unit  |
|:-----------------------|:------|
| interfaces.total.count | count |
| *interface*#status     | N/A   |

</TabItem>
<TabItem value="Ipsec" label="Ipsec">

| Metric name               | Unit  |
|:--------------------------|:------|
| tunnels.ipsec.total.count | count |
| *tunnels*#status          | N/A   |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Metric name       | Unit  |
|:------------------|:------|
| *features*#status | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="System" label="System">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| status                                   | N/A   |
| system.antivirus.lastupdate.time.seconds | s     |
| system.threat.lastupdate.time.seconds    | s     |
| system.sessions.traffic.count            | b/s   |
| system.sessions.total.active.count       | count |

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
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-firewalls-paloalto-standard-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-firewalls-paloalto-standard-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-firewalls-paloalto-standard-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-firewalls-paloalto-standard-ssh
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Palo Alto firewall SSH** connector through
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
dnf install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-firewalls-paloalto-standard-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-PaloAlto-Standard-SSH-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                                                         | Default value     | Mandatory   |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli (default), plink and libssh                                                                                   | sshcli            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                                                                |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Environment" label="Environment">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'psu', 'temperature', 'voltage'                  | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Ha" label="Ha">

| Macro                | Description                                                                                                                                                                          | Default value                                       | Mandatory   |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| UNKNOWNLINKSTATUS    | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use special variables like: %\{status\}, %\{display\}                                                     |                                                     |             |
| UNKNOWNSYNCSTATUS    | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use special variables like: %\{enabled\}, %\{status\}                                                     |                                                     |             |
| UNKNOWNMEMBERSTATUS  | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use special variables like: %\{state\}, %\{stateLast\}                                                    |                                                     |             |
| CRITICALLINKSTATUS   | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} ne "up"'). Can use special variables like: %\{status\}, %\{display\}                                   | %\{status\} ne "up"                                   |             |
| WARNINGLINKSTATUS    | Define the conditions to match for the status to be WARNING (default: ''). Can use special variables like: %\{status\}, %\{display\}                                                     |                                                     |             |
| CRITICALMEMBERSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} ne %\{stateLast\}'). Can use special variables like: %\{state\}, %\{stateLast\}                           | %\{state\} ne %\{stateLast\}                            |             |
| WARNINGMEMBERSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). Can use special variables like: %\{state\}, %\{stateLast\}                                                    |                                                     |             |
| CRITICALSYNCSTATUS   | Define the conditions to match for the status to be CRITICAL (default: '%\{enabled\} eq "yes" and %\{status\} ne "synchronized"'). Can use special variables like: %\{enabled\}, %\{status\} | %\{enabled\} eq "yes" and %\{status\} ne "synchronized" |             |
| WARNINGSYNCSTATUS    | Define the conditions to match for the status to be WARNING (default: ''). Can use special variables like: %\{enabled\}, %\{status\}                                                     |                                                     |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                   | --verbose                                           |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro          | Description                                                                                                                                                                      | Default value     | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME     | Filter interface name (can be a regexp)                                                                                                                                          |                   |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %\{state\}, %\{type\}, %\{ha_state\}, %\{display\}                      |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} ne "active"'). You can use the following variables: %\{state\}, %\{type\}, %\{ha_state\}, %\{display\} | %\{state\} ne "up"  |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}, %\{type\}, %\{ha_state\}, %\{display\}                      |                   |             |
| WARNINGTOTAL   | Thresholds                                                                                                                                                                       |                   |             |
| CRITICALTOTAL  | Thresholds                                                                                                                                                                       |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                               | --verbose         |             |

</TabItem>
<TabItem value="Ipsec" label="Ipsec">

| Macro              | Description                                                                                                                                                                                                                             | Default value                                           | Mandatory   |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------|:-----------:|
| UNKNOWNSTATUS      | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{ike_phase1_state\}, %\{state\}, %\{monitor_status\}, %\{display\}                                                                       |                                                         |             |
| WARNINGIPSECTOTAL  | Thresholds                                                                                                                                                                                                                              |                                                         |             |
| CRITICALIPSECTOTAL | Thresholds                                                                                                                                                                                                                              |                                                         |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%\{ike_phase1_state\} eq "down" or %\{state\} ne "active"'). You can use the following variables: %\{ike_phase1_state\}, %\{state\}, %\{monitor_status\}, %\{display\} | %\{ike_phase1_state\} eq "down" or %\{state\} ne "active" |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{ike_phase1_state\}, %\{state\}, %\{monitor_status\}, %\{display\}                                                                       |                                                         |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                      | --verbose                                               |             |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Macro          | Description                                                                                                                                                             | Default value       | Mandatory   |
|:---------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| FILTERFEATURE  | Filter license by feature (can be a regexp)                                                                                                                             | .*                  |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. (default: '%\{expired\} eq "yes"'). Can use special variables like: %\{expired\}, %\{expiry_days\}, %\{feature\} | %\{expired\} eq "yes" |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. Can use special variables like: %\{expired\}, %\{expiry_days\}, %\{feature\}                                    |                     |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                      |                     |             |

</TabItem>
<TabItem value="System" label="System">

| Macro                | Description                                                                                                                                              | Default value              | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| WARNINGAVUPDATE      | Thresholds                                                                                                                                               |                            |             |
| CRITICALAVUPDATE     | Thresholds                                                                                                                                               |                            |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (default: '%\{oper_mode\} !~ /normal/i'). You can use the following variables: %\{oper_mode\} | %\{oper_mode\} !~ /normal/i |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{oper_mode\}                            |                            |             |
| WARNINGTHREATUPDATE  | Thresholds                                                                                                                                               |                            |             |
| CRITICALTHREATUPDATE | Thresholds                                                                                                                                               |                            |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                       |                            |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \
	--plugin=network::paloalto::ssh::plugin \
	--mode=environment \
	--hostname='10.0.0.1' \
	--ssh-backend='sshcli' \
	--ssh-username='XXXX' \
	--ssh-password='XXXX' \
	--ssh-port=''  \
	--component='.*' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All 12 components are ok [4/4 psus, 4/4 temperatures, 4/4 voltages].
Checking power supplies
Power supply 'Power Supply A1' status is normal [instance: 1].
Power supply 'Power Supply B1' status is normal [instance: 2].
Power supply 'Power Supply A2' status is normal [instance: 1].
Power supply 'Power Supply B2' status is normal [instance: 2].
Checking temperatures
Temperature sensor on slot 1' temperature is 69C [instance: 18.1].
Temperature sensor on slot 2' temperature is 59C [instance: 40.1].
Temperature sensor on slot 3' temperature is 57C [instance: 89.1].
Temperature sensor on slot 4' temperature is 67C [instance: 89.2].
Checking voltages
1,500V voltage sensor, slot 1' voltage is 1,732 V [instance: 18.1].
1,800V voltage sensor, slot 1' voltage is 1,072 V [instance: 18.2].
1,500V voltage sensor, slot 2' voltage is 1,732 V [instance: 89.1].
1,800V voltage sensor, slot 2' voltage is 1,072 V [instance: 89.2].

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
/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \
	--plugin=network::paloalto::ssh::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                         | Linked service template                      |
|:-----------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|
| environment [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/ssh/mode/environment.pm)] | Net-PaloAlto-Standard-Environment-SSH-custom |
| ha [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/ssh/mode/ha.pm)]                   | Net-PaloAlto-Standard-Ha-SSH-custom          |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/ssh/mode/interfaces.pm)]   | Net-PaloAlto-Standard-Interfaces-SSH-custom  |
| ipsec [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/ssh/mode/ipsec.pm)]             | Net-PaloAlto-Standard-Ipsec-SSH-custom       |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/ssh/mode/licenses.pm)]       | Net-PaloAlto-Standard-Licenses-SSH-custom    |
| system [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/ssh/mode/system.pm)]           | Net-PaloAlto-Standard-System-SSH-custom      |

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
<TabItem value="Environment" label="Environment">

| Option               | Description                                                                                                                                                                                                         |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'psu', 'temperature', 'voltage'.                                                                                                                                  |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=temperature). You can also exclude items from specific instances: --filter='temperature,Temperature @ U48'                                     |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                          |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='temperture,OK,true'   |
| --warning            | Set warning threshold for 'temperature', 'voltage' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,30'                                                                                           |
| --critical           | Set critical threshold for 'temperature', 'voltage' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,50'                                                                                         |

</TabItem>
<TabItem value="Ha" label="Ha">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --unknown-sync-status    | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use special variables like: %\{enabled\}, %\{status\}                                                                                                              |
| --warning-sync-status    | Define the conditions to match for the status to be WARNING (default: ''). Can use special variables like: %\{enabled\}, %\{status\}                                                                                                              |
| --critical-sync-status   | Define the conditions to match for the status to be CRITICAL (default: '%\{enabled\} eq "yes" and %\{status\} ne "synchronized"'). Can use special variables like: %\{enabled\}, %\{status\}                                                          |
| --unknown-member-status  | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use special variables like: %\{state\}, %\{stateLast\}                                                                                                             |
| --warning-member-status  | Define the conditions to match for the status to be WARNING (default: ''). Can use special variables like: %\{state\}, %\{stateLast\}                                                                                                             |
| --critical-member-status | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} ne %\{stateLast\}'). Can use special variables like: %\{state\}, %\{stateLast\}                                                                                    |
| --unknown-link-status    | Define the conditions to match for the status to be UNKNOWN (default: ''). Can use special variables like: %\{status\}, %\{display\}                                                                                                              |
| --warning-link-status    | Define the conditions to match for the status to be WARNING (default: ''). Can use special variables like: %\{status\}, %\{display\}                                                                                                              |
| --critical-link-status   | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} ne "up"'). Can use special variables like: %\{status\}, %\{display\}                                                                                            |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                   | Description                                                                                                                                                                        |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter interface name (can be a regexp).                                                                                                                                           |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %\{state\}, %\{type\}, %\{ha_state\}, %\{display\}                        |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}, %\{type\}, %\{ha_state\}, %\{display\}                        |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} ne "active"'). You can use the following variables: %\{state\}, %\{type\}, %\{ha_state\}, %\{display\}   |
| --warning-* --critical-* | Thresholds. Can be: 'total'.                                                                                                                                                       |

</TabItem>
<TabItem value="Ipsec" label="Ipsec">

| Option                   | Description                                                                                                                                                                                                                                |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name            | Filter tunnels by name (can be a regexp).                                                                                                                                                                                                  |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{ike_phase1_state\}, %\{state\}, %\{monitor_status\}, %\{display\}.                                                                         |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{ike_phase1_state\}, %\{state\}, %\{monitor_status\}, %\{display\}.                                                                         |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%\{ike_phase1_state\} eq "down" or %\{state\} ne "active"'). You can use the following variables: %\{ike_phase1_state\}, %\{state\}, %\{monitor_status\}, %\{display\}.   |
| --warning-* --critical-* | Thresholds. Can be: 'ipsec-total'.                                                                                                                                                                                                         |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Option            | Description                                                                                                                                                                |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-feature  | Filter license by feature (can be a regexp).                                                                                                                               |
| --warning-status  | Define the conditions to match for the status to be WARNING. Can use special variables like: %\{expired\}, %\{expiry_days\}, %\{feature\}                                       |
| --critical-status | Define the conditions to match for the status to be CRITICAL. (default: '%\{expired\} eq "yes"'). Can use special variables like: %\{expired\}, %\{expiry_days\}, %\{feature\}    |

</TabItem>
<TabItem value="System" label="System">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^status$'                                                                                                                                                        |
| --timezone               | Timezone options. Default is 'GMT'.                                                                                                                                                                                                           |
| --warning-status         | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{oper_mode\}                                                                                                                 |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%\{oper_mode\} !~ /normal/i'). You can use the following variables: %\{oper_mode\}                                                                                      |
| --warning-* --critical-* | Thresholds. Can be: 'av-update' (s), 'threat-update' (s), 'sessions-traffic' (b/s), 'sessions-total-active'.                                                                                                                                  |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \
	--plugin=network::paloalto::ssh::plugin \
	--mode=environment \
	--help
```
