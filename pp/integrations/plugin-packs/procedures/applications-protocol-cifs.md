---
id: applications-protocol-cifs
title: Protocol CIFS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack Assets

### Templates

The Centreon Pack CIFS/SMB brings a host template:
* App-Protocol-Cifs-custom

It brings the following Service Templates:

| Service Alias  | Service Template              | Default | Discovery |
|:---------------|:------------------------------|:--------|:----------|
| Connection     | App-Protocol-Cifs-Connection  | X       |           |
| Files-Count    | App-Protocol-Cifs-Files-Count |         |           |
| Files-Date     | App-Protocol-Cifs-Files-Date  |         |           |
| Files-Size     | App-Protocol-Cifs-Files-Size  |         |           |
| Scenario       | App-Protocol-Cifs-Scenario    |         |           |

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Connection" label="Connection">

| Metric name             | Description                                     | Unit  |
| :---------------------- | :---------------------------------------------- | :---- |
| connection status       | Connection status                               |       |
| connection.time.seconds | Connection time to established the cifs session | s     |

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
<TabItem value="Files-Size" label="Files-Size">

| Metric name                | Description   | Unit   |
| :------------------------- | :------------ | :----- |
| *filename*#file.size.bytes | Current size  | B      |

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

To monitor your CIFS server, you can use username authentication.

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Protocol CIFS** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Cifs
```

2. On the Centreon web interface, install the **Protocol CIFS** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Install the Centreon plugin package on every Centreon poller expected to monitor **Protocol CIFS** resources:

```bash
yum install centreon-plugin-Applications-Protocol-Cifs
```

2. Install the **Protocol CIFS** Centreon Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-applications-protocol-cifs
```

3. On the Centreon web interface, install the **Protocol CIFS** Centreon Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Protocol CIFS** server settings.
* Apply the **App-Protocol-Cifs-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory | Name                     | Description                                                                |
| :-------- | :----------------------- | :------------------------------------------------------------------------- |
|           | PROTOCOLCIFSUSERNAME     | Username                                                                   |
|           | PROTOCOLCIFSPASSWORD     | Password                                                                   |
|           | PROTOCOLCIFSTIMEOUT      | Timeout (Default: 30)                                                      |
|           | PROTOCOLCIFSEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_cifs.pl \
    --plugin=apps::protocols::cifs::plugin \
    --mode=connection \
    --hostname='10.0.0.1' \
    --cifs-username='my-username' \
    --cifs-password='my-password' \
    --directory='/test' \
    --verbose
```

The expected command output is shown below:

```bash
OK: authentication succeeded - connection time: 1.372s | 'connection.time.seconds'=1.372s;;;0;
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_cifs.pl \
    --plugin=apps::protocols::cifs::plugin \
    --mode=connection \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_cifs.pl \
    --plugin=apps::protocols::cifs::plugin \
    --list-mode
```

### Troubleshooting

Please find the troubleshooting documentation for plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md).
