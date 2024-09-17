---
id: network-cisco-esa-xmlapi
title: Cisco ESA XMLAPI
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Cisco ESA XMLAPI** brings a host template:

* **Net-Cisco-Esa-Xmlapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Esa-Xmlapi-custom" label="Net-Cisco-Esa-Xmlapi-custom">

| Service Alias | Service Template                        | Service Description |
|:--------------|:----------------------------------------|:--------------------|
| System-Usage  | Net-Cisco-Esa-Sytem-Usage-Xmlapi-custom | Check system usage  |

> The services listed above are created automatically when the **Net-Cisco-Esa-Xmlapi-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="System-Usage" label="System-Usage">

| Metric name                                    | Unit  |
|:-----------------------------------------------|:------|
| system-status                                  | N/A   |
| system.memory.usage.percentage                 | %     |
| system.cpu.total.utilization.percentage        | %     |
| system.disk.io.usage.percentage                | %     |
| system.logging.disk.usage.percentage           | %     |
| system.resource.conservation.current.count     | count |
| system.connections.inbound.current.count       | count |
| system.connections.outbound.current.count      | count |
| system.queue.recipients.active.current.count   | count |
| system.queue.messages.quarantine.current.count | count |
| system.queue.messages.workqueue.current.count  | count |
| system.queue.messages.received.persecond       | /s    |
| system.queue.disk.usage.percentage             | %     |

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
dnf install centreon-pack-network-cisco-esa-xmlapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-cisco-esa-xmlapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-cisco-esa-xmlapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-esa-xmlapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Cisco ESA XMLAPI** connector through
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
dnf install centreon-plugin-Network-Cisco-Esa-Xmlapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Cisco-Esa-Xmlapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-cisco-esa-xmlapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Esa-Xmlapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Cisco-Esa-Xmlapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro              | Description                                                                                          | Default value     | Mandatory   |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| XMLAPIUSERNAME     |                                                                                                      |                   | X           |
| XMLAPIPASSWORD     |                                                                                                      |                   | X           |
| XMLAPIPROTO        |                                                                                                      |                   |             |
| XMLAPIURLPATH      |                                                                                                      |                   |             |
| XMLAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="System-Usage" label="System-Usage">

| Macro                         | Description                                                                                        | Default value                  | Mandatory   |
|:------------------------------|:---------------------------------------------------------------------------------------------------|:-------------------------------|:-----------:|
| UNKNOWNHTTPSTATUS             |                                                                                                    |                                |             |
| WARNINGCONNECTIONSIN          |                                                                                                    |                                |             |
| CRITICALCONNECTIONSIN         |                                                                                                    |                                |             |
| WARNINGCONNECTIONSOUT         |                                                                                                    |                                |             |
| CRITICALCONNECTIONSOUT        |                                                                                                    |                                |             |
| WARNINGCPUTOTAL               |                                                                                                    |                                |             |
| CRITICALCPUTOTAL              |                                                                                                    |                                |             |
| WARNINGDISKIO                 |                                                                                                    |                                |             |
| CRITICALDISKIO                |                                                                                                    |                                |             |
| WARNINGHTTPSTATUS             |                                                                                                    |                                |             |
| CRITICALHTTPSTATUS            |                                                                                                    |                                |             |
| WARNINGLOG                    |                                                                                                    |                                |             |
| CRITICALLOG                   |                                                                                                    |                                |             |
| WARNINGMEMORY                 |                                                                                                    |                                |             |
| CRITICALMEMORY                |                                                                                                    |                                |             |
| WARNINGMESSAGESQUARANTINE     |                                                                                                    |                                |             |
| CRITICALMESSAGESQUARANTINE    |                                                                                                    |                                |             |
| WARNINGMESSAGESRECEIVED       |                                                                                                    |                                |             |
| CRITICALMESSAGESRECEIVED      |                                                                                                    |                                |             |
| WARNINGMESSAGESWORKQUEUE      |                                                                                                    |                                |             |
| CRITICALMESSAGESWORKQUEUE     |                                                                                                    |                                |             |
| WARNINGQUEUEACTIVERECIPIENTS  |                                                                                                    |                                |             |
| CRITICALQUEUEACTIVERECIPIENTS |                                                                                                    |                                |             |
| WARNINGQUEUEDISK              |                                                                                                    |                                |             |
| CRITICALQUEUEDISK             |                                                                                                    |                                |             |
| WARNINGRESOURCECONSERVATION   |                                                                                                    |                                |             |
| CRITICALRESOURCECONSERVATION  |                                                                                                    |                                |             |
| CRITICALSYSTEMSTATUS          |                                                                                                    | %{system\_status} !~ /online/i |             |
| WARNINGSYSTEMSTATUS           |                                                                                                    |                                |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                                |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_cisco_esa_xmlapi.pl \
	--plugin=network::cisco::esa::xmlapi::plugin \
	--mode=system-usage \
	--hostname=10.0.0.1 \
	--proto='' \
	--urlpath='' \
	--username='' \
	--password=''  \
	--unknown-http-status='' \
	--warning-http-status='' \
	--critical-http-status='' \
	--warning-system-status='' \
	--critical-system-status='%{system_status} !~ /online/i' \
	--warning-memory='' \
	--critical-memory='' \
	--warning-cpu-total='' \
	--critical-cpu-total='' \
	--warning-diskio='' \
	--critical-diskio='' \
	--warning-log='' \
	--critical-log='' \
	--warning-queue-active-recipients='' \
	--critical-queue-active-recipients='' \
	--warning-messages-quarantine='' \
	--critical-messages-quarantine='' \
	--warning-messages-workqueue='' \
	--critical-messages-workqueue='' \
	--warning-messages-received='' \
	--critical-messages-received='' \
	--warning-queuedisk='' \
	--critical-queuedisk='' \
	--warning-connections-in='' \
	--critical-connections-in='' \
	--warning-connections-out='' \
	--critical-connections-out='' \
	--warning-resource-conservation='' \
	--critical-resource-conservation='' 
```

The expected command output is shown below:

```bash
OK: memory usage: 36 % total cpu usage: 46 % disk i/o usage: 1 % logging disk usage: 23 % resource conservation mode: 46 current inbound connections: 97 current outbound connections: 0 queue active recipients: 25 messages in quarantine: 35 messages in work queue: 42 messages received: 2/s queue disk usage: 8 % | 'system-status'=90;;;;'system.memory.usage.percentage'=36%;;;0;100'system.cpu.total.utilization.percentage'=46%;;;0;100'system.disk.io.usage.percentage'=1%;;;0;100'system.logging.disk.usage.percentage'=23%;;;0;100'system.resource.conservation.current.count'=46;;;0;'system.connections.inbound.current.count'=97;;;0;'system.connections.outbound.current.count'=0;;;0;'system.queue.recipients.active.current.count'=25;;;0;'system.queue.messages.quarantine.current.count'=35;;;0;'system.queue.messages.workqueue.current.count'=42;;;0;'system.queue.messages.received.persecond'=2/s;;;0;'system.queue.disk.usage.percentage'=8%;;;0;100
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_esa_xmlapi.pl \
	--plugin=network::cisco::esa::xmlapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                           | Linked service template                 |
|:-----------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|
| system-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/cisco/ironport/xmlapi/mode/systemusage.pm)] | Net-Cisco-Esa-Sytem-Usage-Xmlapi-custom |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="System-Usage" label="System-Usage">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_esa_xmlapi.pl \
	--plugin=network::cisco::esa::xmlapi::plugin \
	--mode=system-usage \
	--help
```
