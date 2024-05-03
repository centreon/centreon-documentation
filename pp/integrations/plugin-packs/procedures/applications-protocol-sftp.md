---
id: applications-protocol-sftp
title: Protocol SFTP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Protocol SFTP** brings a host template:

* **App-Protocol-Sftp-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Protocol-Sftp-custom" label="App-Protocol-Sftp-custom">

| Service Alias | Service Template                    | Service Description                      |
|:--------------|:------------------------------------|:-----------------------------------------|
| Connection    | App-Protocol-Sftp-Connection-custom | Check connection on a remote SFTP server |

> The services listed above are created automatically when the **App-Protocol-Sftp-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                     | Service Description                  |
|:--------------|:-------------------------------------|:-------------------------------------|
| Files-Count   | App-Protocol-Sftp-Files-Count-custom | Check number of files in a directory |
| Files-Date    | App-Protocol-Sftp-Files-Date-custom  | Check modified time of files         |
| Scenario      | App-Protocol-Sftp-Scenario-custom    | Execute SFTP commands                |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Connection" label="Connection">

| Metric name             | Unit  |
|:------------------------|:------|
| status                  | N/A   |
| connection.time.seconds | s     |

</TabItem>
<TabItem value="Files-Count" label="Files-Count">

| Metric name          | Unit  |
|:---------------------|:------|
| files.detected.count | count |

</TabItem>
<TabItem value="Files-Date" label="Files-Date">

| Metric name                     | Unit  |
|:--------------------------------|:------|
| *files*#file.mtime.last.seconds | s     |

</TabItem>
<TabItem value="Scenario" label="Scenario">

| Metric name                              | Unit  |
|:-----------------------------------------|:------|
| status                                   | N/A   |
| scenario.execution.time.milliseconds     | ms    |
| scenario.steps.count                     | count |
| scenario.errors.count                    | count |
| *steps*#step.execution.time.milliseconds | ms    |
| *steps*#step-status                      | N/A   |

</TabItem>
</Tabs>

## Prerequisites

To monitor your SFTP server, you can use pubkey authentication and/or username authentication.

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
dnf install centreon-pack-applications-protocol-sftp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-sftp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-protocol-sftp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-sftp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Protocol SFTP** connector through
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
dnf install centreon-plugin-Applications-Protocol-Sftp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Protocol-Sftp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-protocol-sftp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-Sftp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Protocol-Sftp-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                    | Description                                                                                          | Default value     | Mandatory   |
|:-------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PROTOCOLSFTPUSERNAME     |                                                                                                      |                   |             |
| PROTOCOLSFTPPASSWORD     |                                                                                                      |                   |             |
| PROTOCOLSFTPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Connection" label="Connection">

| Macro          | Description                                                                                        | Default value                             | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------------------------------|:-----------:|
| CRITICALSTATUS |                                                                                                    | %{message} !~ /authentication succeeded/i |             |
| WARNINGSTATUS  |                                                                                                    |                                           |             |
| WARNINGTIME    |                                                                                                    |                                           |             |
| CRITICALTIME   |                                                                                                    |                                           |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                                           |             |

</TabItem>
<TabItem value="Files-Count" label="Files-Count">

| Macro                 | Description                                                                                        | Default value     | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MAXDEPTH              |                                                                                                    | 0                 |             |
| DIRECTORY             |                                                                                                    |                   | X           |
| FILTERFILE            |                                                                                                    |                   |             |
| WARNINGFILESDETECTED  |                                                                                                    |                   |             |
| CRITICALFILESDETECTED |                                                                                                    |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Files-Date" label="Files-Date">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILE              |                                                                                                    |                   | X           |
| DIRECTORY         |                                                                                                    |                   | X           |
| WARNINGMTIMELAST  |                                                                                                    |                   |             |
| CRITICALMTIMELAST |                                                                                                    |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Scenario" label="Scenario">

| Macro              | Description                                                                                        | Default value          | Mandatory   |
|:-------------------|:---------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| SCENARIO           |                                                                                                    |                        | X           |
| WARNINGERRORS      |                                                                                                    |                        |             |
| CRITICALERRORS     |                                                                                                    |                        |             |
| CRITICALSTATUS     |                                                                                                    | %{status} ne "success" |             |
| WARNINGSTATUS      |                                                                                                    |                        |             |
| WARNINGSTEPSTATUS  |                                                                                                    |                        |             |
| CRITICALSTEPSTATUS |                                                                                                    |                        |             |
| WARNINGSTEPTIME    |                                                                                                    |                        |             |
| CRITICALSTEPTIME   |                                                                                                    |                        |             |
| WARNINGTOTALSTEPS  |                                                                                                    |                        |             |
| CRITICALTOTALSTEPS |                                                                                                    |                        |             |
| WARNINGTOTALTIME   |                                                                                                    |                        |             |
| CRITICALTOTALTIME  |                                                                                                    |                        |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose              |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_protocol_sftp.pl \
	--plugin=apps::protocols::sftp::plugin \
	--mode=scenario \
	--hostname='10.0.0.1'  \
	--ssh-username='' \
	--ssh-password=''  \
	--scenario='' \
	--warning-status='' \
	--critical-status='%{status} ne "success"' \
	--warning-total-time='' \
	--critical-total-time='' \
	--warning-total-steps='' \
	--critical-total-steps='' \
	--warning-errors='' \
	--critical-errors='' \
	--warning-step-time='' \
	--critical-step-time='' \
	--warning-step-status='' \
	--critical-step-status='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: execution time: 15 ms total steps: 5 errors: 47 All steps are ok | 'scenario.execution.time.milliseconds'=15ms;;;0;'scenario.steps.count'=5;;;0;'scenario.errors.count'=47;;;0;'*steps*#step.execution.time.milliseconds'=ms;;;0;
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
/usr/lib/centreon/plugins/centreon_protocol_sftp.pl \
	--plugin=apps::protocols::sftp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                       | Linked service template              |
|:---------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|
| connection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/sftp/mode/connection.pm)]  | App-Protocol-Sftp-Connection-custom  |
| files-count [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/sftp/mode/filescount.pm)] | App-Protocol-Sftp-Files-Count-custom |
| files-date [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/sftp/mode/filesdate.pm)]   | App-Protocol-Sftp-Files-Date-custom  |
| scenario [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/sftp/mode/scenario.pm)]      | App-Protocol-Sftp-Scenario-custom    |

### Available options

#### Generic options

All generic options are listed here:

| Option | Description |
|:-------|:------------|

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Connection" label="Connection">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Files-Count" label="Files-Count">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Files-Date" label="Files-Date">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Scenario" label="Scenario">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_sftp.pl \
	--plugin=apps::protocols::sftp::plugin \
	--mode=scenario \
	--help
```
