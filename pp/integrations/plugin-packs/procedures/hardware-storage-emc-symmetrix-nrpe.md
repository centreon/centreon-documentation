---
id: hardware-storage-emc-symmetrix-nrpe
slug: /hardware-storage-emc-symmetrix-nrpe
title: EMC Symmetrix NRPE
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **EMC Symmetrix NRPE** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **EMC Symmetrix NRPE** brings 2 host templates:

* **HW-Storage-EMC-Symmetrix-Dmx34-NRPE-custom**
* **HW-Storage-EMC-Symmetrix-Vmax-NRPE-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-EMC-Symmetrix-Dmx34-NRPE-custom" label="HW-Storage-EMC-Symmetrix-Dmx34-NRPE-custom">

| Service Alias   | Service Template                                           | Service Description             |
|:----------------|:-----------------------------------------------------------|:--------------------------------|
| Hardware-Global | HW-Storage-EMC-Symmetrix-Dmx34-Hardware-Global-NRPE-custom | Check hardware components state |

> The services listed above are created automatically when the **HW-Storage-EMC-Symmetrix-Dmx34-NRPE-custom** host template is used.

</TabItem>
<TabItem value="HW-Storage-EMC-Symmetrix-Vmax-NRPE-custom" label="HW-Storage-EMC-Symmetrix-Vmax-NRPE-custom">

| Service Alias   | Service Template                                           | Service Description             |
|:----------------|:-----------------------------------------------------------|:--------------------------------|
| Hardware-Global | HW-Storage-EMC-Symmetrix-Vmax-Hardware-Global-NRPE-custom  | Check hardware components state |

> The services listed above are created automatically when the **HW-Storage-EMC-Symmetrix-Vmax-NRPE-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Hardware-*" label="Hardware-*">

| Name                | Unit |
|:-------------------|:------|
| director.status     | N/A   |
| xcm.status     | N/A   |
| disk.status     | N/A   |
| memory.status     | N/A   |
| test.status     | N/A   |
| fru.status     | N/A   |
| module.status     | N/A   |
| temperature.status     | N/A   |
| cabling.status     | N/A   |
| power.status     | N/A   |
| fabric.status     | N/A   |
| voltage.status     | N/A   |
| spreadisk.status     | N/A   |

</TabItem>
</Tabs>

## Prerequisites

### Centreon NSClient++

To monitor an *Active Directory* domain controller through NRPE, install the
Centreon packaged version of the NSClient++ agent. Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md)
and make sure that the **NRPE Server** configuration is correct.

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
dnf install centreon-pack-hardware-storage-emc-symmetrix-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-emc-symmetrix-nrpe
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-emc-symmetrix-nrpe
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-emc-symmetrix-nrpe
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **EMC Symmetrix NRPE** connector through
the **Configuration > Connectors > Monitoring Connectors** menu.

### Plugin

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install nagios-plugins-nrpe
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install nagios-plugins-nrpe
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install nagios-plugins-nrpe
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install nagios-plugins-nrpe
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="HW-Storage-EMC-Symmetrix-Dmx34-NRPE-custom" label="HW-Storage-EMC-Symmetrix-Dmx34-NRPE-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-EMC-Symmetrix-Dmx34-NRPE-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro            | Description                                                                                          | Default value         | Mandatory   |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| NRPEPORT         | Port used to reach the NRPE server                                                                                                      | 5666                  |             |
| NRPECLIENT       | NRPE Binary used to perform the check                                                                                                     | check\_centreon\_nrpe |             |
| NRPETIMEOUT      | Timeout to connect to the NRPE Server                                                                                                     |                       |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                       |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="HW-Storage-EMC-Symmetrix-Vmax-NRPE-custom" label="HW-Storage-EMC-Symmetrix-Vmax-NRPE-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **HW-Storage-EMC-Symmetrix-Vmax-NRPE-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro            | Description                                                                                          | Default value         | Mandatory   |
|:-----------------|:-----------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| NRPEPORT         |                                                                                                      | 5666                  |             |
| NRPECLIENT       |                                                                                                      | check\_centreon\_nrpe |             |
| NRPETIMEOUT      |                                                                                                      |                       |             |
| NRPEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                       |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Hardware-Global" label="Hardware-Global">

| Macro         | Description                                                                                                                      | Default value     | Mandatory   |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT     | Which component to check (default: '.*'). Can be: 'module', 'temperature', 'director, 'cabling', 'power', 'voltage', 'sparedisk' | .*                |             |
| FILEHEALTH    | Name of the global storage file status (default: HealthCheck.log)                                                                |                   |             |
| FILEHEALTHENV | Name of the environment storage file status (default: sympl\_env\_health.log)                                                    |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                               | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib64/nagios/plugins//check\_centreon\_nrpe -H 10.0.0.1 -p 5666 -t   -c check_centreon_plugins -a 'storage::emc::symmetrix::vmax::local::plugin' 'hardware' ' \
	--file-health-name="" \
	--file-health-env-name="" \
	--component=".*" \
	--verbose'
```

The expected command output is shown below:

```bash
OK: All 2 components are ok [2/2 temperatures]. | 'temp1 Temp'=30C;;;;'temp2 Temp'=31C;;;;'count_temperature'=2;;;;
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
/usr/lib64/nagios/plugins//check\_centreon\_nrpe -H 10.0.0.1 -p 5666 -t   -c check_centreon_plugins -a 'storage::emc::symmetrix::vmax::local::plugin' 'hardware' ' \
	--file-health-name="" \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                               | Linked service template                                                                                                   |
|:-----------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/emc/symmetrix/vmax/local/mode/hardware.pm)] | HW-Storage-EMC-Symmetrix-Dmx34-Hardware-Global-NRPE-custom<br />HW-Storage-EMC-Symmetrix-Vmax-Hardware-Global-NRPE-custom |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Hardware-*" label="Hardware-*">

| Option                     | Description                                                                                                                                                                                                                                     |
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component                |   Which component to check (default: '.*'). Can be: 'module', 'temperature', 'director, 'cabling', 'power', 'voltage', 'sparedisk'.                                                                                                             |
| --filter                   |   Exclude the items given as a comma-separated list (example: --filter=temperature --filter=module). You can also exclude items from specific instances: --filter=temperature,ES-PWS-A ES-4                                                     |
| --absent-problem           |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                          |
| --no-component             |   Define the expected status if no components are found (default: critical).                                                                                                                                                                    |
| --threshold-overload       |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='director,WARNING,^(?!(OK)$)'                    |
| --warning                  |   Set warning threshold for disk (syntax: type,regexp,threshold) Example: --warning='sparedisk,.*,5:'                                                                                                                                           |
| --critical                 |   Set critical threshold for disk (syntax: type,regexp,threshold) Example: --critical='sparedisk,.*,3:'                                                                                                                                         |
| --warning-count-*          |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                  |
| --critical-count-*         |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                 |
| --memcached                |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server             |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute          |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                 |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file            |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration            |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir            |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix         |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd     |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format         |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key            |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher         |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --health-directory         |   Location of health files.                                                                                                                                                                                                                     |
| --health-directory-pattern |   Set pattern to match the most recent directory (getting the hexa value).                                                                                                                                                                      |
| --file-health-name         |   Name of the global storage file status (default: HealthCheck.log).                                                                                                                                                                            |
| --file-health-env-name     |   Name of the environment storage file status (default: sympl\_env\_health.log).                                                                                                                                                                |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib64/nagios/plugins//check\_centreon\_nrpe -H 10.0.0.1 -p 5666 -t   -c check_centreon_plugins -a 'storage::emc::symmetrix::vmax::local::plugin' 'hardware' ' \
	--file-health-name="" \
	--file-health-env-name="" \
	--help
```
