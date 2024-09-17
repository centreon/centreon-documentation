---
id: hardware-storage-wd-nas-snmp
title: WD NAS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **WD NAS SNMP** brings a host template:

* **HW-Storage-Wd-Nas-SNMP-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-Wd-Nas-SNMP-custom" label="HW-Storage-Wd-Nas-SNMP-custom">

| Service Alias | Service Template                       | Service Description |
|:--------------|:---------------------------------------|:--------------------|
| Hardware      | HW-Storage-Wd-Nas-Hardware-SNMP-custom | Check hardware      |

> The services listed above are created automatically when the **HW-Storage-Wd-Nas-SNMP-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                      | Service Description | Discovery  |
|:--------------|:--------------------------------------|:--------------------|:----------:|
| Volumes       | HW-Storage-Wd-Nas-Volumes-SNMP-custom | Check volumes       | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                                                                                                                                                                                                                                           |
|:----------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Discover your resources through an SNMP subnet scan. You need to install the [Generic SNMP](./applications-protocol-snmp.md) connector to get the discovery rule and create a template mapper for the **HW-Storage-Wd-Nas-SNMP-custom** host template |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                          | Description                                               |
|:-----------------------------------|:----------------------------------------------------------|
| HW-Storage-Wd-Nas-SNMP-Volume-Name | Discover the disk partitions and monitor space occupation |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| hardware.temperature.celsius          | C     |
| *fans*#fan-status                     | N/A   |
| *drives*#hardware.temperature.celsius | C     |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Metric name                             | Unit  |
|:----------------------------------------|:------|
| *volumes*#volume.space.usage.bytes      | B     |
| *volumes*#volume.space.free.bytes       | B     |
| *volumes*#volume.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prerequisites

### SNMP Configuration

To use this pack, the SNMP service must be properly configured on your **WD NAS** equipment.

### Network flow

The target server must be reachable from the Centreon poller on the UDP/161
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
dnf install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-wd-nas-snmp
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **WD NAS SNMP** connector through
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
dnf install centreon-plugin-Hardware-Storage-Wd-Nas-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Wd-Nas-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-storage-wd-nas-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Wd-Nas-Snmp
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-Wd-Nas-SNMP-custom** template to the host. 

> When using SNMP v3, use the **SNMPEXTRAOPTIONS** macro to add specific authentication parameters.
> More information in the [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping) section.

| Macro            | Description                                                                                          | Default value     | Mandatory   |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

4. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Macro                     | Description                                                                                        | Default value     | Mandatory   |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGDRIVETEMPERATURE   |                                                                                                    |                   |             |
| CRITICALDRIVETEMPERATURE  |                                                                                                    |                   |             |
| WARNINGFANSTATUS          |                                                                                                    |                   |             |
| CRITICALFANSTATUS         |                                                                                                    |                   |             |
| WARNINGSYSTEMTEMPERATURE  |                                                                                                    |                   |             |
| CRITICALSYSTEMTEMPERATURE |                                                                                                    |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Macro                  | Description                                                                                        | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME             |                                                                                                    |                   |             |
| WARNINGSPACEUSAGE      |                                                                                                    |                   |             |
| CRITICALSPACEUSAGE     |                                                                                                    |                   |             |
| WARNINGSPACEUSAGEFREE  |                                                                                                    |                   |             |
| CRITICALSPACEUSAGEFREE |                                                                                                    |                   |             |
| WARNINGSPACEUSAGEPRCT  |                                                                                                    |                   |             |
| CRITICALSPACEUSAGEPRCT |                                                                                                    |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_wd_nas_snmp.pl \
	--plugin=storage::wd::nas::snmp::plugin \
	--mode=volumes \
	--hostname=10.0.0.1 \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-name='' \
	--warning-space-usage='' \
	--critical-space-usage='' \
	--warning-space-usage-free='' \
	--critical-space-usage-free='' \
	--warning-space-usage-prct='' \
	--critical-space-usage-prct='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All volumes are ok | '*volumes*#volume.space.usage.bytes'=B;;;0;total'*volumes*#volume.space.free.bytes'=B;;;0;total'*volumes*#volume.space.usage.percentage'=%;;;0;100
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
/usr/lib/centreon/plugins/centreon_wd_nas_snmp.pl \
	--plugin=storage::wd::nas::snmp::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                         | Linked service template                |
|:-----------------------------------------------------------------------------------------------------------------------------|:---------------------------------------|
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/wd/nas/snmp/mode/hardware.pm)]        | HW-Storage-Wd-Nas-Hardware-SNMP-custom |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/wd/nas/snmp/mode/listvolumes.pm)] | Used for service discovery             |
| volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/wd/nas/snmp/mode/volumes.pm)]          | HW-Storage-Wd-Nas-Volumes-SNMP-custom  |

### Available options

#### Generic options

All generic options are listed here:

| Option | Description |
|:-------|:------------|

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Option | Description |
|:-------|:------------|

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_wd_nas_snmp.pl \
	--plugin=storage::wd::nas::snmp::plugin \
	--mode=volumes \
	--help
```
