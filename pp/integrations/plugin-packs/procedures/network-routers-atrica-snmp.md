---
id: network-routers-atrica-snmp
title: Atrica Routeur
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Atrica Routeur** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Atrica Routeur** brings a host template:

* **Net-Atrica-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Atrica-SNMP-custom" label="Net-Atrica-SNMP-custom">

No service template linked to this host template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias            | Service Template                                | Service Description | Discovery  |
|:-------------------------|:------------------------------------------------|:--------------------|:----------:|
| Connections-Generic-Id   | Net-Atrica-Connections-Generic-Id-SNMP-custom   | Check traffic       |            |
| Connections-Generic-Name | Net-Atrica-Connections-Generic-Name-SNMP-custom | Check traffic       |            |
| Connections-Global       | Net-Atrica-Connections-Global-SNMP-custom       | Check traffic       | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                     |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **Net-Atrica-SNMP-custom** host template. |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                      | Description                                                   |
|:-------------------------------|:--------------------------------------------------------------|
| Net-Atrica-SNMP-Conection-Name | Discover network interfaces and monitor bandwidth utilization |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Connections-*" label="Connections-*">

| Metric name                                               | Unit  |
|:----------------------------------------------------------|:------|
| *interface_name*#status                                   | N/A   |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

The SNMP agent must be configured and activated on the host. Please refer to the official documentation from the manufacturer/publisher.

### Network flow

The target resource must be reachable from the Centreon poller on the UDP/161
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
dnf install centreon-pack-network-routers-atrica-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-routers-atrica-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-routers-atrica-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-routers-atrica-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Atrica Routeur** connector through
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
dnf install centreon-plugin-Network-Routers-Atrica-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Routers-Atrica-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-routers-atrica-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Routers-Atrica-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Atrica-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Connections-Generic-Id" label="Connections-Generic-Id">

| Macro                 | Description                                                                                                                            | Default value      | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| OIDDISPLAY            | Define the OID that will be used to name the interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                  | atrConnCepGenDescr |             |
| SPEED                 | Set interface speed for incoming/outgoing traffic (in Mb)                                                                              |                    |             |
| OIDFILTER             | Define the OID to be used to filter interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                           | atrConnCepGenDescr |             |
| INTERFACEID           | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                              |                    |             |
| WARNINGINCIR          | Threshold                                                                                                                              |                    |             |
| CRITICALINCIR         | Threshold                                                                                                                              |                    |             |
| WARNINGINEIR          | Threshold                                                                                                                              |                    |             |
| CRITICALINEIR         | Threshold                                                                                                                              |                    |             |
| WARNINGINEIRDISCARD   | Threshold                                                                                                                              |                    |             |
| CRITICALINEIRDISCARD  | Threshold                                                                                                                              |                    |             |
| WARNINGOUTCIR         | Threshold                                                                                                                              |                    |             |
| CRITICALOUTCIR        | Threshold                                                                                                                              |                    |             |
| WARNINGOUTEIR         | Threshold                                                                                                                              |                    |             |
| CRITICALOUTEIR        | Threshold                                                                                                                              |                    |             |
| WARNINGOUTEIRDISCARD  | Threshold                                                                                                                              |                    |             |
| CRITICALOUTEIRDISCARD | Threshold                                                                                                                              |                    |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                    |             |

</TabItem>
<TabItem value="Connections-Generic-Name" label="Connections-Generic-Name">

| Macro                 | Description                                                                                                                            | Default value      | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| OIDDISPLAY            | Define the OID that will be used to name the interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                  | atrConnCepGenDescr |             |
| OIDFILTER             | Define the OID to be used to filter interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                           | atrConnCepGenDescr |             |
| SPEED                 | Set interface speed for incoming/outgoing traffic (in Mb)                                                                              |                    |             |
| INTERFACENAME         | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                              |                    |             |
| CRITICALINCIR         | Threshold                                                                                                                              |                    |             |
| WARNINGINCIR          | Threshold                                                                                                                              |                    |             |
| WARNINGINEIR          | Threshold                                                                                                                              |                    |             |
| CRITICALINEIR         | Threshold                                                                                                                              |                    |             |
| CRITICALINEIRDISCARD  | Threshold                                                                                                                              |                    |             |
| WARNINGINEIRDISCARD   | Threshold                                                                                                                              |                    |             |
| WARNINGOUTCIR         | Threshold                                                                                                                              |                    |             |
| CRITICALOUTCIR        | Threshold                                                                                                                              |                    |             |
| WARNINGOUTEIR         | Threshold                                                                                                                              |                    |             |
| CRITICALOUTEIR        | Threshold                                                                                                                              |                    |             |
| CRITICALOUTEIRDISCARD | Threshold                                                                                                                              |                    |             |
| WARNINGOUTEIRDISCARD  | Threshold                                                                                                                              |                    |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                    |             |

</TabItem>
<TabItem value="Connections-Global" label="Connections-Global">

| Macro                 | Description                                                                                                                                                                                                                                                                            | Default value      | Mandatory   |
|:----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| OIDFILTER             | Define the OID to be used to filter interfaces(values: atrConnIngDescr, atrConnCepGenDescr)                                                                                                                                                                                            | atrConnCepGenDescr |             |
| SPEED                 | Set interface speed for incoming/outgoing traffic (in Mb)                                                                                                                                                                                                                              |                    |             |
| OIDDISPLAY            | Define the OID that will be used to name the interfaces (values: atrConnIngDescr, atrConnCepGenDescr)                                                                                                                                                                                  | atrConnCepGenDescr |             |
| FILTER                | Set the interface (number expected) example: 1,2,... (empty means 'check all interfaces')                                                                                                                                                                                              | .+                 |             |
| WARNINGINCIR          | Threshold                                                                                                                                                                                                                                                                              |                    |             |
| CRITICALINCIR         | Threshold                                                                                                                                                                                                                                                                              |                    |             |
| WARNINGINEIR          | Threshold                                                                                                                                                                                                                                                                              |                    |             |
| CRITICALINEIR         | Threshold                                                                                                                                                                                                                                                                              |                    |             |
| WARNINGINEIRDISCARD   | Threshold                                                                                                                                                                                                                                                                              |                    |             |
| CRITICALINEIRDISCARD  | Threshold                                                                                                                                                                                                                                                                              |                    |             |
| WARNINGOUTCIR         | Threshold                                                                                                                                                                                                                                                                              |                    |             |
| CRITICALOUTCIR        | Threshold                                                                                                                                                                                                                                                                              |                    |             |
| WARNINGOUTEIR         | Threshold                                                                                                                                                                                                                                                                              |                    |             |
| CRITICALOUTEIR        | Threshold                                                                                                                                                                                                                                                                              |                    |             |
| WARNINGOUTEIRDISCARD  | Threshold                                                                                                                                                                                                                                                                              |                    |             |
| CRITICALOUTEIRDISCARD | Threshold                                                                                                                                                                                                                                                                              |                    |             |
| CRITICALSTATUS        | Define the conditions to match for the status to be CRITICAL. Default (depends of the atrica release): '%{admstatus} eq "on" and %{opstatus} ne "inService"' '%{admstatus} eq "up" and %{opstatus} ne "up"' You can use the following variables: %{admstatus}, %{opstatus}, %{display} |                    |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                 | --verbose          |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_atrica.pl \
	--plugin=network::atrica::snmp::plugin \
	--mode=connections \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--interface='.+' \
	--name \
	--add-status \
	--add-traffic \
	--add-errors \
	--critical-status='' \
	--warning-in-cir='' \
	--critical-in-cir='' \
	--warning-out-cir='' \
	--critical-out-cir='' \
	--warning-in-eir='' \
	--critical-in-eir='' \
	--warning-out-eir='' \
	--critical-out-eir='' \
	--warning-in-eir-discard='' \
	--critical-in-eir-discard='' \
	--warning-out-eir-discard='' \
	--critical-out-eir-discard='' \
	--speed='' \
	--oid-filter='atrConnCepGenDescr' \
	--oid-display='atrConnCepGenDescr'  \
	--verbose
```

The expected command output is shown below:

```bash
OK: All interfaces are ok | '*interface_name*#status'='up';;;;'*interface_name*#interface.traffic.in.bitspersecond'=20b/s;;;;'*interface_name*#interface.traffic.out.bitspersecond'=20b/s;;;;'*interface_name*#interface.packets.in.discard.percentage'=10%;;;;100'*interface_name*#interface.packets.in.error.percentage'=25%;;;;100'*interface_name*#interface.packets.out.discard.percentage'=12%;;;;100'*interface_name*#interface.packets.out.error.percentage'=30%;;;;100
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
/usr/lib/centreon/plugins/centreon_atrica.pl \
	--plugin=network::atrica::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                 | Linked service template                                                                                                                           |
|:-------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/atrica/snmp/mode/connections.pm)]          | Net-Atrica-Connections-Generic-Id-SNMP-custom<br />Net-Atrica-Connections-Generic-Name-SNMP-custom<br />Net-Atrica-Connections-Global-SNMP-custom |
| list-connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/atrica/snmp/mode/listconnections.pm)] | Used for service discovery                                                                                                                        |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Connections-*" label="Connections-*">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters      |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                     |
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_atrica.pl \
	--plugin=network::atrica::snmp::plugin \
	--mode=connections \
	--help
```
