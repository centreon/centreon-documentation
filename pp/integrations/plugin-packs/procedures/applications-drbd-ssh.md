---
id: applications-drbd-ssh
title: DRBD SSH
description: Monitor DRBD replicated storage resources via SSH: disk status, replication role, and peer connection health.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **DRBD SSH** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **DRBD SSH** brings a host template:

* **App-Drbd-SSH-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Drbd-SSH-custom" label="App-Drbd-SSH-custom">

| Service Alias  | Service Template              | Service Description  |
|:---------------|:------------------------------|:---------------------|
| Drbd-Resources | App-Drbd-Resources-Ssh-custom | Check DRBD resources |

> The services listed above are created automatically when the **App-Drbd-SSH-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Drbd-Resources" label="Drbd-Resources">

| Name                                               | Unit  |
|:---------------------------------------------------|:------|
| resources.total.count                              | count |
| role                                               | N/A   |
| disk-status                                        | N/A   |
| *resources*~disk.data.read.bytespersecond          | B/s   |
| *resources*~disk.data.written.bytespersecond       | B/s   |
| peer-role                                          | N/A   |
| peer-connection-status                             | N/A   |
| peer-device-replication-status                     | N/A   |
| peer-device-disk-status                            | N/A   |
| *resources*~*peers*#peer.traffic.in.bitspersecond  | b/s   |
| *resources*~*peers*#peer.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prerequisites

### SSH configuration

A user is required to query the resource by SSH. There is no need for root or sudo
privileges. There are two possible ways to log in through SSH, either by
exchanging the SSH key from the **centreon-engine** user to the target resource, or by
setting your unique user and password directly in the host macros.

## Installing the monitoring connector

### Pack

The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-drbd-ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-drbd-ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-drbd-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-drbd-ssh
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **DRBD SSH** connector through
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
dnf install centreon-plugin-Applications-Drbd-Ssh
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Drbd-Ssh
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-drbd-ssh
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Drbd-Ssh
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Drbd-SSH-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                                                         | Default value     | Mandatory   |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SSHUSERNAME     | Define the user name to log in to the host                                                                                                                          |                   |             |
| SSHPASSWORD     | Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead |                   |             |
| SSHPORT         | Define the TCP port on which SSH is listening                                                                                                                       |                   |             |
| SSHBACKEND      | Define the backend you want to use. It can be: sshcli (default), plink and libssh                                                                                   | libssh            |             |
| SSHEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                                                                |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Drbd-Resources" label="Drbd-Resources">

| Macro                               | Description                                                                                        | Default value                                                                                                                               | Mandatory   |
|:------------------------------------|:---------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|:-----------:|
| UNKNOWNDISKSTATUS                   | Threshold                                                                                                   | %\{disk\_status\} =~ /dunknown/i                                                                                                            |             |
| UNKNOWNPEERROLE                     | Threshold                                                                                                   | %\{role\} =~ /unknown/i                                                                                                                     |             |
| UNKNOWNPEERDEVICEDISKSTATUS         | Threshold                                                                                                   | %\{device\_disk\_status\} =~ /dunknown/i                                                                                                    |             |
| UNKNOWNLROLE                        | Threshold                                                                                          | %\{role\} =~ /unknown/i                                                                                                                     |             |
| FILTERRESOURCENAME                  | Filter resource name (can be a regexp)                                                             |                                                                                                                                             |             |
| UNKNOWNPEERCONNECTIONSTATUS         | Threshold                                                                                                   |                                                                                                                                             |             |
| UNKNOWNPEERDEVICEREPLICATIONSTATUS  | Threshold                                                                                                   |                                                                                                                                             |             |
| WARNINGDATAREAD                     | Threshold                                                                                          |                                                                                                                                             |             |
| CRITICALDATAREAD                    | Threshold                                                                                          |                                                                                                                                             |             |
| WARNINGDATAWRITTEN                  | Threshold                                                                                          |                                                                                                                                             |             |
| CRITICALDATAWRITTEN                 | Threshold                                                                                          |                                                                                                                                             |             |
| WARNINGDISKSTATUS                   | Threshold                                                                                                   | %\{disk\_status\} =~ /attaching\|detaching\|negotiating/i                                                                                   |             |
| CRITICALDISKSTATUS                  | Threshold                                                                                                   | %\{disk\_status\} =~ /outdated\|inconsistent\|failed\|diskless/i                                                                            |             |
| WARNINGPEERCONNECTIONSTATUS         | Threshold                                                                                                   | %\{connection\_status\} =~ /^(?:connecting\|disconnecting\|standalone\|teardown)$/i                                                         |             |
| CRITICALPEERCONNECTIONSTATUS        | Threshold                                                                                                   | %\{connection\_status\} =~ /^(?:brokenpipe\|networkfailure\|protocolerror\|timeout\|unconnected\|wfconnection\|wfreportparams)$/i           |             |
| WARNINGPEERDEVICEDISKSTATUS         | Threshold                                                                                                   | %\{device\_disk\_status\} =~ /^(?:attaching\|detaching\|diskless\|failed\|inconsistent\|negotiating\|outdated)$/i                           |             |
| CRITICALPEERDEVICEDISKSTATUS        | Threshold                                                                                                   |                                                                                                                                             |             |
| WARNINGPEERDEVICEREPLICATIONSTATUS  | Threshold                                                                                                   | %\{device\_replication\_status\} =~ /^(?:ahead\|off\|startingsyncs\|startingsynct\|syncsource\|synctarget\|verifys\|verifyt\|wfsyncuuid)$/i |             |
| CRITICALPEERDEVICEREPLICATIONSTATUS | Threshold                                                                                                   | %\{device\_replication\_status\} =~ /^(?:behind\|pausedsyncs\|pausedsynct\|wfbitmaps\|wfbitmapt)$/i                                         |             |
| CRITICALPEERROLE                    | Threshold                                                                                                   | %\{role\} =~ /unconfigured/i                                                                                                                |             |
| WARNINGPEERROLE                     | Threshold                                                                                                   |                                                                                                                                             |             |
| WARNINGPEERTRAFFICIN                | Threshold                                                                                          |                                                                                                                                             |             |
| CRITICALPEERTRAFFICIN               | Threshold                                                                                          |                                                                                                                                             |             |
| WARNINGPEERTRAFFICOUT               | Threshold                                                                                          |                                                                                                                                             |             |
| CRITICALPEERTRAFFICOUT              | Threshold                                                                                          |                                                                                                                                             |             |
| WARNINGRESOURCESTOTAL               | Threshold                                                                                          |                                                                                                                                             |             |
| CRITICALRESOURCESTOTAL              | Threshold                                                                                          |                                                                                                                                             |             |
| CRITICALROLE                        | Threshold                                                                                          | %\{role\} =~ /unconfigured/i                                                                                                                |             |
| WARNINGROLE                         | Threshold                                                                                          |                                                                                                                                             |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                                                                                                                                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_drbd_ssh.pl \
	--plugin=apps::drbd::local::plugin \
	--mode=resources \
	--hostname='10.0.0.1' \
	--ssh-backend='libssh' \
    --ssh-username=centreon \
    --ssh-password=centreon-password \
	--ssh-port=''  \
	--filter-resource-name='' \
	--warning-resources-total='' \
	--critical-resources-total='' \
	--unknown-disk-status='%\{disk\_status\} =~ /dunknown/i' \
	--warning-disk-status='%\{disk\_status\} =~ /attaching|detaching|negotiating/i' \
	--critical-disk-status='%\{disk\_status\} =~ /outdated|inconsistent|failed|diskless/i' \
	--warning-data-read='' \
	--critical-data-read='' \
	--warning-data-written='' \
	--critical-data-written='' \
	--unknown-peer-role='%\{role\} =~ /unknown/i' \
	--warning-peer-role='' \
	--critical-peer-role='%\{role\} =~ /unconfigured/i' \
	--unknown-peer-connection-status='' \
	--warning-peer-connection-status='%\{connection\_status\} =~ /^(?:connecting|disconnecting|standalone|teardown)$/i' \
	--critical-peer-connection-status='%\{connection\_status\} =~ /^(?:brokenpipe|networkfailure|protocolerror|timeout|unconnected|wfconnection|wfreportparams)$/i' \
	--unknown-peer-device-replication-status='' \
	--warning-peer-device-replication-status='%\{device\_replication\_status\} =~ /^(?:ahead|off|startingsyncs|startingsynct|syncsource|synctarget|verifys|verifyt|wfsyncuuid)$/i' \
	--critical-peer-device-replication-status='%\{device\_replication\_status\} =~ /^(?:behind|pausedsyncs|pausedsynct|wfbitmaps|wfbitmapt)$/i ' \
	--unknown-peer-device-disk-status='%\{device\_disk\_status\} =~ /dunknown/i' \
	--warning-peer-device-disk-status='%\{device\_disk\_status\} =~ /^(?:attaching|detaching|diskless|failed|inconsistent|negotiating|outdated)$/i' \
	--critical-peer-device-disk-status='' \
	--warning-peer-traffic-in='' \
	--critical-peer-traffic-in='' \
	--warning-peer-traffic-out='' \
	--critical-peer-traffic-out='' \
	--unknown-role='%\{role\} =~ /unknown/i' \
	--warning-role='' \
	--critical-role='%\{role\} =~ /unconfigured/i' \
	--verbose
```

The expected command output is shown below:

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
/usr/lib/centreon/plugins/centreon_drbd_ssh.pl \
	--plugin=apps::drbd::local::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                | Linked service template       |
|:--------------------------------------------------------------------------------------------------------------------|:------------------------------|
| resources [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/drbd/local/mode/resources.pm)] | App-Drbd-Resources-Ssh-custom |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Drbd-Resources" label="Drbd-Resources">

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-resource-name                     |   Filter resource name (can be a regexp).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --legacy-proc                              |   Use legacy proc file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --unknown-* --warning-* --critical-*       |   Available threshold options  =over 4  resources-total  data-read  data-written  peer-traffic-in  peer-traffic-out  role:  =over 4  \[unknown\] %\{role\} =~ /unknown/i  \[critical\] %\{role\} =~ /unconfigured/i                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --ssh-backend                              |   Define the backend you want to use. It can be: sshcli (default), plink and libssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --ssh-username                             |   Define the user name to log in to the host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --ssh-password                             |   Define the password associated with the user name. Cannot be used with the sshcli backend. Warning: using a password is not recommended. Use --ssh-priv-key instead.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --ssh-port                                 |   Define the TCP port on which SSH is listening.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --ssh-priv-key                             |   Define the private key file to use for user authentication.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --hostname                                 |   Hostname to query in ssh.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --timeout                                  |   Timeout in seconds for the command (default: 45). Default value can be override by the mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --command                                  |   Command to get information. Used it you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --command-path                             |   Command path.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --command-options                          |   Command options.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --sudo                                     |   sudo command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_drbd_ssh.pl \
	--plugin=apps::drbd::local::plugin \
	--mode=resources \
	--help
```
