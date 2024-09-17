---
id: network-cisco-firepower-fmc-restapi
title: Cisco Firepower Management Console Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Cisco Firepower FMC Rest API** brings a host template:

* **Net-Cisco-Firepower-Fmc-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-Cisco-Firepower-Fmc-Restapi-custom" label="Net-Cisco-Firepower-Fmc-Restapi-custom">

| Service Alias | Service Template                               | Service Description |
|:--------------|:-----------------------------------------------|:--------------------|
| Devices       | Net-Cisco-Firepower-Fmc-Devices-Restapi-custom | Check devices       |

> The services listed above are created automatically when the **Net-Cisco-Firepower-Fmc-Restapi-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Devices" label="Devices">

| Metric name                       | Unit  |
|:----------------------------------|:------|
| devices.total.count               | count |
| *domains*~*devices*#device-status | N/A   |

</TabItem>
</Tabs>

## Prerequisites

To control your Cisco Firepower Management Center, the Rest API must be configured.

E.g: https://www.cisco.com/c/en/us/td/docs/security/firepower/620/api/REST/Firepower_Management_Center_REST_API_Quick_Start_Guide_620.html

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
dnf install centreon-pack-network-cisco-firepower-fmc-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-cisco-firepower-fmc-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-cisco-firepower-fmc-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-cisco-firepower-fmc-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Cisco Firepower FMC Rest API** connector through
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
dnf install centreon-plugin-Network-Cisco-Firepower-Fmc-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Cisco-Firepower-Fmc-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-cisco-firepower-fmc-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Cisco-Firepower-Fmc-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-Cisco-Firepower-Fmc-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro              | Description                                                                                          | Default value     | Mandatory   |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FMCAPIUSERNAME     |                                                                                                      | username          | X           |
| FMCAPIPASSWORD     |                                                                                                      | password          | X           |
| FMCAPIPROTO        |                                                                                                      | https             |             |
| FMCAPIPORT         |                                                                                                      | 443               |             |
| FMCAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Devices" label="Devices">

| Macro                       | Description                                                                                        | Default value              | Mandatory   |
|:----------------------------|:---------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| FILTERDOMAINNAME            |                                                                                                    |                            |             |
| FILTERDEVICENAME            |                                                                                                    |                            |             |
| UNKNOWNDEVICESTATUS         |                                                                                                    |                            |             |
| WARNINGDEVICESSTATUSBLACK   |                                                                                                    |                            |             |
| CRITICALDEVICESSTATUSBLACK  |                                                                                                    |                            |             |
| WARNINGDEVICESSTATUSBLUE    |                                                                                                    |                            |             |
| CRITICALDEVICESSTATUSBLUE   |                                                                                                    |                            |             |
| WARNINGDEVICESSTATUSGREEN   |                                                                                                    |                            |             |
| CRITICALDEVICESSTATUSGREEN  |                                                                                                    |                            |             |
| WARNINGDEVICESSTATUSRED     |                                                                                                    |                            |             |
| CRITICALDEVICESSTATUSRED    |                                                                                                    |                            |             |
| WARNINGDEVICESSTATUSYELLOW  |                                                                                                    |                            |             |
| CRITICALDEVICESSTATUSYELLOW |                                                                                                    |                            |             |
| WARNINGDEVICESTATUS         |                                                                                                    | %{status} =~ /yellow/i     |             |
| CRITICALDEVICESTATUS        |                                                                                                    | %{status} =~ /red\|black/i |             |
| WARNINGDEVICESTOTAL         |                                                                                                    |                            |             |
| CRITICALDEVICESTOTAL        |                                                                                                    |                            |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose                  |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fmc_restapi.pl \
	--plugin=network::cisco::firepower::fmc::restapi::plugin \
	--mode=devices \
	--hostname='10.0.0.1' \
	--api-username='username' \
	--api-password='password' \
	--port='443' \
	--proto='https'  \
	--filter-domain-name='' \
	--filter-device-name='' \
	--warning-devices-total='' \
	--critical-devices-total='' \
	--warning-devices-status-green='' \
	--critical-devices-status-green='' \
	--warning-devices-status-black='' \
	--critical-devices-status-black='' \
	--warning-devices-status-blue='' \
	--critical-devices-status-blue='' \
	--warning-devices-status-red='' \
	--critical-devices-status-red='' \
	--warning-devices-status-yellow='' \
	--critical-devices-status-yellow='' \
	--unknown-device-status='' \
	--warning-device-status='%{status} =~ /yellow/i' \
	--critical-device-status='%{status} =~ /red|black/i' \
	--verbose
```

The expected command output is shown below:

```bash
OK: Domain 'Global' devices are ok | 'devices.total.count'=2;;;0; 'devices.status.green.count'=0;;;0;2 'devices.status.black.count'=0;;;0;2 'devices.status.blue.count'=0;;;0;2 'devices.status.red.count'=0;;0;0;2 'devices.status.yellow.count'=0;;;0;2
checking domain 'Global'
device 'APEXTIFWL01' status: green
device 'APEXTIFWL02' status: green

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
/usr/lib/centreon/plugins/centreon_cisco_firepower_fmc_restapi.pl \
	--plugin=network::cisco::firepower::fmc::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                    | Linked service template                        |
|:----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------|
| devices [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/firepower/fmc/restapi/mode/devices.pm)]     | Net-Cisco-Firepower-Fmc-Devices-Restapi-custom |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/cisco/firepower/fmc/restapi/mode/discovery.pm)] | Not used in this Monitoring Connector          |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Devices" label="Devices">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_cisco_firepower_fmc_restapi.pl \
	--plugin=network::cisco::firepower::fmc::restapi::plugin \
	--mode=devices \
	--help
```
