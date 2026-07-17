---
id: infrastructure-pop
title: POP Server
description: "Monitor POP mail servers by checking service availability and connection response time via TCP-based checks."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **POP Server** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **POP Server** brings a host template:

* **Infra-POP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Infra-POP-custom" label="Infra-POP-custom">

| Service Alias | Service Template | Service Description                                              |
|:--------------|:-----------------|:-----------------------------------------------------------------|
| POP           | Infra-POP-custom | Check the availability of the POP service for a specific address | 

> The services listed above are created automatically when the **Infra-POP-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="POP" label="POP">

| Name | Unit |
|:-----|:-----|
| time | s    |

</TabItem>
</Tabs>

## Prerequisites

The remote server must have a POP service running and available.

## Installer le connecteur de supervision

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
dnf install centreon-pack-infrastructure-pop
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-infrastructure-pop
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-infrastructure-pop
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-infrastructure-pop
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **POP Server** connector through
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
dnf install nagios-plugins-tcp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install nagios-plugins-tcp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install nagios-plugins-tcp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install cnagios-plugins-tcp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Infra-POP-custom** template to the host.
5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="POP" label="POP">

| Macro    | Description                                   | Default value | Mandatory |
|:---------|:----------------------------------------------|:--------------|:---------:|
| WARNING  | Connection time Warning threshold in Seconds  | 5             |           |
| CRITICAL | Connection time Critical threshold in Seconds | 8             |           |
| PORT     | Communication Port                            | 110           |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/check_pop -H='10.0.0.1' -w=5 -c=8 -p=110
```

The expected command output is shown below:

```bash
POP OK - 0.082 second response time on 3.159.212.217 port 995 [+OK The Microsoft Exchange POP3 service is ready.]|time=0.081917s;15.000000;30.000000;0.000000;60.000000   
```

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks).

### Available options

All available options can be displayed by adding the
`-h` parameter to the command:

```bash
/usr/lib/centreon/plugins/check_pop -H='10.0.0.1' -h
```
