---
id: applications-protocol-sftp
title: Protocol SFTP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack SFTP brings 1 host template:
* App-Protocol-Sftp-custom

It brings the following Service Templates:

| Service Alias  | Service Template              | Default | Discovery |
|:---------------|:------------------------------|:--------|:----------|
| Connection     | App-Protocol-Sftp-Connection  | X       |           |
| Files-Count    | App-Protocol-Sftp-Files-Count |         |           |
| Files-Date     | App-Protocol-Sftp-Files-Date  |         |           |
| Scenario       | App-Protocol-Sftp-Scenario    |         |           |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Connection" label="Connection">

| Metric name             | Description                                     | Unit  |
| :---------------------- | :---------------------------------------------- | :---- |
| connection status       | Connection status                               |       |
| connection.time.seconds | Connection time to established the sftp session | s     |

</TabItem>
<TabItem value="Files-Count" label="Files-Count">

| Metric name          | Description              | Unit  |
| :------------------- | :----------------------- | :---- |
| files.detected.count | Number of files detected |       |

</TabItem>
<TabItem value="Files-Date" label="Files-Date">

| Metric name                        | Description        | Unit   |
| :--------------------------------- | :----------------- | :----- |
| *filename*#file.mtime.last.seconds | Last modified time | s      |

</TabItem>
<TabItem value="Scenario" label="Scenario">

| Metric name                                   | Description              | Unit  |
| :-------------------------------------------- | :----------------------- | :---- |
| scenario status                               | Global scenario status   |       |
| scenario.execution.time.milliseconds          | Scenario execution time  | ms    |
| scenario.steps.count                          | Number of scenario steps |       |
| scenario.errors.count                         | Number of steps failed   |       |
| step status                                   | Step status              |       |    
| *step_label*#step.execution.time.milliseconds | Step execution time      | ms    |

</TabItem>
</Tabs>

## Prerequisites

To monitor your SFTP server, you can use pubkey authentication and/or username authentication.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Protocol SFTP** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Sftp
```

2. On the Centreon web interface, install the **Protocol SFTP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Protocol SFTP** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Sftp
```

2. Install the **Protocol SFTP** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-protocol-sftp
```

3. On the Centreon web interface, install the **Protocol SFTP** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Protocol SFTP** server settings.
* Apply the **App-Protocol-Sftp-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name                     | Description                                                                |
| :-------- | :----------------------- | :------------------------------------------------------------------------- |
|           | PROTOCOLSFTPUSERNAME     | sftp username                                                              |
|           | PROTOCOLSFTPPASSWORD     | sftp password                                                              |
|           | PROTOCOLSFTPEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_sftp.pl \
    --plugin=apps::protocols::sftp::plugin \
    --mode=connection \
    --hostname='10.0.0.1' \
    --ssh-username='my-username' \
    --ssh-password='my-password' \
    --verbose
```

The expected command output is shown below:

```bash
OK: authentication succeeded - connection time: 1.372s | 'connection.time.seconds'=1.372s;;;0;
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_sftp.pl \
    --plugin=apps::protocols::sftp::plugin \
    --mode=connection \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_sftp.pl \
    --plugin=apps::protocols::sftp::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md).
