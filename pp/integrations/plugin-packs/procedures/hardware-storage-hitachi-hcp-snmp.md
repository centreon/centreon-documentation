---
id: hardware-storage-hitachi-hcp-snmp
title: Hitachi HCP SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Hitachi HCP SNMP** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Hitachi HCP SNMP** brings a host template:

* **HW-Storage-Hitachi-Hcp-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-Hitachi-Hcp-SNMP-custom" label="HW-Storage-Hitachi-Hcp-SNMP-custom">

| Service Alias | Service Template  | Service Description |
|:--------------|:------------------|:--------------------|

> The services listed above are created automatically when the **HW-Storage-Hitachi-Hcp-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                           | Service Description   | Discovery  |
|:--------------|:-------------------------------------------|:----------------------|:----------:|
| Nodes         | HW-Storage-Hitachi-Hcp-Nodes-SNMP-custom   | Check nodes           | X          |
| Tenants       | HW-Storage-Hitachi-Hcp-Tenants-SNMP-custom | Check tenants         | X          |
| Volumes       | HW-Storage-Hitachi-Hcp-Volumes-SNMP-custom | Check storage volumes | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                                 |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **HW-Storage-Hitachi-Hcp-SNMP-custom** host template. |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                               | Description                                               |
|:----------------------------------------|:----------------------------------------------------------|
| HW-Storage-Hitachi-Hcp-SNMP-Node-Name   | Discover nodes and monitor them |
| HW-Storage-Hitachi-Hcp-SNMP-Tenant-Name | Discover tenants and monitor them |
| HW-Storage-Hitachi-Hcp-SNMP-Volume-Name | Discover the disk partitions and monitor space occupation |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Nodes" label="Nodes">

| Name                                                   | Unit  |
|:-------------------------------------------------------|:------|
| node-status                                            | N/A   |
| nic-status                                             | N/A   |
| san-path-status                                        | N/A   |
| bbu-status                                             | N/A   |
| *nodes*~node.space.usage.bytes                         | B     |
| *nodes*~node.space.free.bytes                          | B     |
| *nodes*~node.space.usage.percentage                    | %     |
| *nodes*~*temperatures*#node.sensor.temperature.celsius | C     |
| *nodes*~*fans*#node.sensor.fan.speed.rpm               | rpm   |
| *nodes*~*voltages*#node.sensor.voltage.volt            | V     |

</TabItem>
<TabItem value="Tenants" label="Tenants">

| Name                                    | Unit  |
|:----------------------------------------|:------|
| *tenants*~tenant.space.usage.bytes      | B     |
| *tenants*~tenant.space.free.bytes       | B     |
| *tenants*~tenant.space.usage.percentage | %     |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Name                                    | Unit  |
|:----------------------------------------|:------|
| volume-status                           | N/A   |
| *volumes*~volume.space.usage.bytes      | B     |
| *volumes*~volume.space.free.bytes       | B     |
| *volumes*~volume.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

The SNMP service must be configured and activated on the host. 
Please refer to the [official documentation](https://knowledge.hitachivantara.com/Documents/Storage/Content_Platform/9.0.x/Administering_HCP/System_monitoring/03_Configuring_SNMP) from the constructor/editor. 
Your resource may require a list of addresses authorized to query it to be set up. 
Please ensure that the addresses of the Centreon pollers are included in this list.

### Network flow

The target resource must be reachable from the Centreon poller on the UDP/161 SNMP port.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Connectors > Monitoring Connectors** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-hitachi-hcp-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-hitachi-hcp-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-hitachi-hcp-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-hitachi-hcp-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Hitachi HCP SNMP** connector through
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
dnf install centreon-plugin-Hardware-Storage-Hitachi-Hcp-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Hitachi-Hcp-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-hitachi-hcp-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Hitachi-Hcp-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-Hitachi-Hcp-SNMP-custom** template to the host.

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Nodes" label="Nodes">

| Macro                     | Description                                                                                                                                                                             | Default value                      | Mandatory   |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------|:-----------:|
| FILTERNODEID              | Filter nodes by ID (can be a regexp)                                                                                                                                                    |                                    |             |
| UNKNOWNNODESTATUS         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{node\_status\}, %\{node\_id\}                                                      |                                    |             |
| CRITICALBBUSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%\{bbu\_status\} !~ /healthy/i'). You can use the following variables: %\{bbu\_status\}, %\{node\_id\}          | %\{bbu\_status\} !~ /healthy/i     |             |
| WARNINGBBUSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{bbu\_status\}, %\{node\_id\}                                                       |                                    |             |
| CRITICALNICSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%\{nic\_status\} eq "failed"'). You can use the following variables: %\{nic\_status\}, %\{node\_id\}            | %\{nic\_status\} eq "failed"       |             |
| WARNINGNICSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{nic\_status\}, %\{node\_id\}                                                       |                                    |             |
| CRITICALNODESTATUS        | Define the conditions to match for the status to be CRITICAL (default: '%\{node\_status\} eq "unavailable"'). You can use the following variables: %\{node\_status\}, %\{node\_id\}     | %\{node\_status\} eq "unavailable" |             |
| WARNINGNODESTATUS         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{node\_status\}, %\{node\_id\}                                                      |                                    |             |
| CRITICALSANPATHSTATUS     | Define the conditions to match for the status to be CRITICAL (default: '%\{san\_path\_status\} eq "error"'). You can use the following variables: %\{san\_path\_status\}, %\{node\_id\} | %\{san\_path\_status\} eq "error"  |             |
| WARNINGSANPATHSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{san\_path\_status\}, %\{node\_id\}                                                 |                                    |             |
| WARNINGSENSORFANSPEED     | Threshold                                                                                                                                                                               |                                    |             |
| CRITICALSENSORFANSPEED    | Threshold                                                                                                                                                                               |                                    |             |
| WARNINGSENSORTEMPERATURE  | Threshold                                                                                                                                                                               |                                    |             |
| CRITICALSENSORTEMPERATURE | Threshold                                                                                                                                                                               |                                    |             |
| WARNINGSENSORVOLTAGE      | Threshold                                                                                                                                                                               |                                    |             |
| CRITICALSENSORVOLTAGE     | Threshold                                                                                                                                                                               |                                    |             |
| WARNINGSPACEUSAGE         | Threshold                                                                                                                                                                               |                                    |             |
| CRITICALSPACEUSAGE        | Threshold                                                                                                                                                                               |                                    |             |
| WARNINGSPACEUSAGEFREE     | Threshold                                                                                                                                                                               |                                    |             |
| CRITICALSPACEUSAGEFREE    | Threshold                                                                                                                                                                               |                                    |             |
| WARNINGSPACEUSAGEPRCT     | Threshold                                                                                                                                                                               |                                    |             |
| CRITICALSPACEUSAGEPRCT    | Threshold                                                                                                                                                                               |                                    |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                      | --verbose                          |             |

</TabItem>
<TabItem value="Tenants" label="Tenants">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERTENANTNAME       | Filter tenants by name (can be a regexp)                                                           |                   |             |
| WARNINGSPACEUSAGE      | Threshold                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Threshold                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Threshold                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Threshold                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Threshold                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Macro                  | Description                                                                                                                                                                     | Default value             | Mandatory   |
|:-----------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------|:-----------:|
| FILTERNODEID           | Filter volumes by node ID (can be a regexp)                                                                                                                                     |                           |             |
| FILTERLABEL            |                                                                                                                                                                                 |                           |             |
| UNKNOWNVOLUMESTATUS    | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{node\_id\}, %\{label\}                                        |                           |             |
| WARNINGSPACEUSAGE      | Threshold                                                                                                                                                                       |                           |             |
| CRITICALSPACEUSAGE     | Threshold                                                                                                                                                                       |                           |             |
| WARNINGSPACEUSAGEFREE  | Threshold                                                                                                                                                                       |                           |             |
| CRITICALSPACEUSAGEFREE | Threshold                                                                                                                                                                       |                           |             |
| WARNINGSPACEUSAGEPRCT  | Threshold                                                                                                                                                                       |                           |             |
| CRITICALSPACEUSAGEPRCT | Threshold                                                                                                                                                                       |                           |             |
| WARNINGVOLUMESTATUS    | Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /degraded/'). You can use the following variables: %\{status\}, %\{node\_id\}, %\{label\} | %\{status\} =~ /degraded/ |             |
| CRITICALVOLUMESTATUS   | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /broken/'). You can use the following variables: %\{status\}, %\{node\_id\}, %\{label\}  | %\{status\} =~ /broken/   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                              | --verbose                 |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_hitachi_hcp_snmp.pl \
	--plugin=storage::hitachi::hcp::snmp::plugin \
	--mode=nodes \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-node-id='' \
	--unknown-node-status='' \
	--warning-node-status='' \
	--critical-node-status='%\{node\_status\} eq "unavailable"' \
	--warning-nic-status='' \
	--critical-nic-status='%\{nic\_status\} eq "failed"' \
	--warning-san-path-status='' \
	--critical-san-path-status='%\{san\_path\_status\} eq "error"' \
	--warning-bbu-status='' \
	--critical-bbu-status='%\{bbu\_status\} !~ /healthy/i' \
	--warning-space-usage='' \
	--critical-space-usage='' \
	--warning-space-usage-free='' \
	--critical-space-usage-free='' \
	--warning-space-usage-prct='' \
	--critical-space-usage-prct='' \
	--warning-sensor-voltage='' \
	--critical-sensor-voltage='' \
	--warning-sensor-fan-speed='' \
	--critical-sensor-fan-speed='' \
	--warning-sensor-temperature='' \
	--critical-sensor-temperature='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: sensor-temperature is 17491 C sensor-fan-speed is 68323 rpm sensor-voltage is 64395 V | 'nodes~node.space.usage.bytes'=81486B;;;0;total 'nodes~node.space.free.bytes'=64555B;;;0;total 'nodes~node.space.usage.percentage'=96746%;;;0;100 'nodes~temperatures#node.sensor.temperature.celsius'=17491C;;;; 'nodes~fans#node.sensor.fan.speed.rpm'=68323rpm;;;0; 'nodes~voltages#node.sensor.voltage.volt'=64395V;;;;
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
/usr/lib/centreon/plugins/centreon_hitachi_hcp_snmp.pl \
	--plugin=storage::hitachi::hcp::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                              | Linked service template                    |
|:----------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/hcp/snmp/mode/listnodes.pm)]     | Used for service discovery                 |
| list-tenants [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/hcp/snmp/mode/listtenants.pm)] | Used for service discovery                 |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/hcp/snmp/mode/listvolumes.pm)] | Used for service discovery                 |
| nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/hcp/snmp/mode/nodes.pm)]              | HW-Storage-Hitachi-Hcp-Nodes-SNMP-custom   |
| tenants [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/hcp/snmp/mode/tenants.pm)]          | HW-Storage-Hitachi-Hcp-Tenants-SNMP-custom |
| volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/hitachi/hcp/snmp/mode/volumes.pm)]          | HW-Storage-Hitachi-Hcp-Volumes-SNMP-custom |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --hostname                                 |   Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-community                           |   SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-version                             |   Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-port                                |   UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-timeout                             |   Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-retries                             |   Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --maxrepetitions                           |   Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --subsetleef                               |   How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-autoreduce                          |    Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-force-getnext                       |   Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-cache-file                          |   Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-username                            |   SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --authpassphrase                           |   SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authprotocol                             |   SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --privpassphrase                           |   SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --privprotocol                             |   SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --contextname                              |   SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --contextengineid                          |   SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given  as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --securityengineid                         |   SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-errors-exit                         |   Expected status in case of SNMP error or timeout. Possible values are ok, warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-tls-transport                       |   Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-our-identity                    |   X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --snmp-tls-their-identity                  |   X.509 certificate to identify the remote host. Can be the path to the  certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-their-hostname                  |   Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-trust-cert                      |   A trusted CA certificate used to verify a remote host's certificate.  If you use this option, you must also  define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Nodes" label="Nodes">

| Option                     | Description                                                                                                                                                                                 |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-node-id           |   Filter nodes by ID (can be a regexp).                                                                                                                                                     |
| --unknown-node-status      |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{node\_status\}, %\{node\_id\}                                                        |
| --warning-node-status      |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{node\_status\}, %\{node\_id\}                                                        |
| --critical-node-status     |   Define the conditions to match for the status to be CRITICAL (default: '%\{node\_status\} eq "unavailable"'). You can use the following variables: %\{node\_status\}, %\{node\_id\}       |
| --unknown-nic-status       |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{nic\_status\}, %\{node\_id\}                                                         |
| --warning-nic-status       |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{nic\_status\}, %\{node\_id\}                                                         |
| --critical-nic-status      |   Define the conditions to match for the status to be CRITICAL (default: '%\{nic\_status\} eq "failed"'). You can use the following variables: %\{nic\_status\}, %\{node\_id\}              |
| --unknown-san-path-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{san\_path\_status\}, %\{node\_id\}                                                   |
| --warning-san-path-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{san\_path\_status\}, %\{node\_id\}                                                   |
| --critical-san-path-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{san\_path\_status\} eq "error"'). You can use the following variables: %\{san\_path\_status\}, %\{node\_id\}   |
| --unknown-bbu-status       |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{bbu\_status\}, %\{node\_id\}                                                         |
| --warning-bbu-status       |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{bbu\_status\}, %\{node\_id\}                                                         |
| --critical-bbu-status      |   Define the conditions to match for the status to be CRITICAL (default: '%\{bbu\_status\} !~ /healthy/i'). You can use the following variables: %\{bbu\_status\}, %\{node\_id\}            |
| --warning-* --critical-*   |   Thresholds. Can be: 'space-usage-prct', 'space-usage', 'space-usage-free', 'sensor-voltage' (V), 'sensor-temperature' (C), 'sensor-fan-speed' (rpm).                                      |

</TabItem>
<TabItem value="Tenants" label="Tenants">

| Option                   | Description                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------|
| --filter-tenant-name     |   Filter tenants by name (can be a regexp).                                     |
| --warning-* --critical-* |   Thresholds. Can be: 'space-usage-prct', 'space-usage', 'space-usage-free'.    |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Option                   | Description                                                                                                                                                                         |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-node-id         |   Filter volumes by node ID (can be a regexp).                                                                                                                                      |
| --unknown-volume-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{node\_id\}, %\{label\}                                          |
| --warning-volume-status  |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /degraded/'). You can use the following variables: %\{status\}, %\{node\_id\}, %\{label\}   |
| --critical-volume-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /broken/'). You can use the following variables: %\{status\}, %\{node\_id\}, %\{label\}    |
| --warning-* --critical-* |   Thresholds. Can be: 'space-usage-prct', 'space-usage', 'space-usage-free'.                                                                                                        |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_hitachi_hcp_snmp.pl \
	--plugin=storage::hitachi::hcp::snmp::plugin \
	--mode=nodes \
	--help
```
