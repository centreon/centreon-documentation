---
id: applications-protocol-ftp
title: FTP Server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **FTP Server** brings a host template:

* **App-Protocol-FTP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Protocol-FTP-custom" label="App-Protocol-FTP-custom">

| Service Alias | Service Template              | Service Description                                                |
|:--------------|:------------------------------|:-------------------------------------------------------------------|
| FTP-Login     | App-Protocol-FTP-Login-custom | Check connection on a remote FTP server with username and password |

> The services listed above are created automatically when the **App-Protocol-FTP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias  | Service Template                   | Service Description                                                              |
|:---------------|:-----------------------------------|:---------------------------------------------------------------------------------|
| FTP-Commands   | App-Protocol-FTP-Commands-custom   | Check several commands execution on a remote FTP server                          |
| FTP-Date       | App-Protocol-FTP-Date-custom       | Check date of files within a directory or a specific file on a remote FTP Server |
| FTP-FilesCount | App-Protocol-FTP-FilesCount-custom | Count files on a remote FTP directory                                            |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="FTP-Commands" label="FTP-Commands">

Coming soon

</TabItem>
<TabItem value="FTP-Date" label="FTP-Date">

Coming soon

</TabItem>
<TabItem value="FTP-FilesCount" label="FTP-FilesCount">

| Metric name | Unit  |
|:------------|:------|
| files       | N/A   |

</TabItem>
<TabItem value="FTP-Login" label="FTP-Login">

Coming soon

</TabItem>
</Tabs>

## Prerequisites

*Specify prerequisites that are relevant. You may want to just provide a link\n\
to the manufacturer official documentation BUT you should try to be as complete\n\
as possible here as it will save time to everybody.*

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
dnf install centreon-pack-applications-protocol-ftp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-ftp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-protocol-ftp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-ftp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **FTP Server** connector through
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
dnf install centreon-plugin-Applications-Protocol-Ftp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Protocol-Ftp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-protocol-ftp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-Ftp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Protocol-FTP-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                              | Default value     | Mandatory   |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FTPUSERNAME     | FTP Username                                                                                                                             |                   |             |
| FTPPASSWORD     | FTP Password                                                                                                                             |                   |             |
| FTPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="FTP-Commands" label="FTP-Commands">

| Macro        | Description                                                                                                                                                                          | Default value     | Mandatory   |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FTPCOMMAND   | Set command to test. (can be : binary; ascii; cwd,DIR; rmdir,DIR; mdkir,DIR; ls,DIR; rename,OLDNAME,NEWNAME; delete,FILENAME; get,REMOTE_FILE,LOCAL_FILE; put,LOCAL_FILE,REMOTE_FILE | cwd,DIR           |             |
| CRITICAL     | Threshold                                                                                                                                                                            |                   |             |
| WARNING      | Threshold                                                                                                                                                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                               |                   |             |

</TabItem>
<TabItem value="FTP-Date" label="FTP-Date">

| Macro        | Description                                                                                        | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DIRECTORY    | Check files in the directory (no recursive)                                                                                                   |                   |             |
| CRITICAL     | Threshold                                                                                                   |                   |             |
| WARNING      | Threshold                                                                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="FTP-FilesCount" label="FTP-FilesCount">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DIRECTORY    | Check files in the directory (no recursive)                                                                                            |                   |             |
| WARNING      | Threshold                                                                                                                              |                   |             |
| CRITICAL     | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="FTP-Login" label="FTP-Login">

| Macro        | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CRITICAL     | Threshold                                                                                                                              |                   |             |
| WARNING      | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_protocol_ftp.pl \
	--plugin=apps::protocols::ftp::plugin \
	--mode=login \
	--hostname=10.0.0.1  \
	--username='' \
	--password='' \
	--warning='' \
	--critical='' 
```

The expected command output is shown below:

```bash
OK: | 
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
/usr/lib/centreon/plugins/centreon_protocol_ftp.pl \
	--plugin=apps::protocols::ftp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                     | Linked service template            |
|:-------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|
| commands [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ftp/mode/commands.pm)]     | App-Protocol-FTP-Commands-custom   |
| date [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ftp/mode/date.pm)]             | App-Protocol-FTP-Date-custom       |
| filescount [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ftp/mode/filescount.pm)] | App-Protocol-FTP-FilesCount-custom |
| login [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/ftp/mode/login.pm)]           | App-Protocol-FTP-Login-custom      |

### Available options

#### Generic options

All generic options are listed here:

| Option | Description |
|:-------|:------------|

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="FTP-Commands" label="FTP-Commands">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="FTP-Date" label="FTP-Date">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="FTP-FilesCount" label="FTP-FilesCount">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="FTP-Login" label="FTP-Login">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_ftp.pl \
	--plugin=apps::protocols::ftp::plugin \
	--mode=login \
	--help
```
