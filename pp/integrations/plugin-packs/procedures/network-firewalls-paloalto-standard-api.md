---
id: network-firewalls-paloalto-standard-api
title: Palo Alto firewall API
description: "Monitor Palo Alto Networks firewalls via the XML API, covering hardware environment, HA status, IPSec VPN tunnels, licenses, and system health."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Palo Alto firewall API** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Palo Alto firewall API** brings a host template:

* **Net-PaloAlto-Standard-Api-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Net-PaloAlto-Standard-Api-custom" label="Net-PaloAlto-Standard-Api-custom">

| Service Alias | Service Template                             | Service Description                   |
|:--------------|:---------------------------------------------|:--------------------------------------|
| Environment   | Net-PaloAlto-Standard-Environment-Api-custom | Check components                      |
| Ha            | Net-PaloAlto-Standard-Ha-Api-custom          | Check high-availability               |
| Ipsec         | Net-PaloAlto-Standard-Ipsec-Api-custom       | Check the status of IPSec VPN tunnels |
| Licenses      | Net-PaloAlto-Standard-Licenses-Api-custom    | Check features licensing              |
| System        | Net-PaloAlto-Standard-System-Api-custom      | Check system                          |

> The services listed above are created automatically when the **Net-PaloAlto-Standard-Api-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Environment" label="Environment">

| Name                       | Unit  |
|:---------------------------|:------|
| hardware.temperature.count | count |
| temperature status         | N/A   |
| hardware.fan.count         | count |
| fan status                 | N/A   |
| hardware.voltage.count     | count |
| voltage status             | N/A   |
| hardware.psu.count         | count |
| psu status                 | N/A   |

</TabItem>
<TabItem value="Ha" label="Ha">

| Name            | Unit |
|:----------------|:-----|
| local-state     | N/A  |
| peer-state      | N/A  |
| state-sync      | N/A  |
| ha1-link-status | N/A  |
| ha2-link-status | N/A  |
| ha-mode         | N/A  |
| build-compat    | N/A  |

</TabItem>
<TabItem value="Ipsec" label="Ipsec">

| Name                            | Unit  |
|:--------------------------------|:------|
| tunnels.count                   | count |
| *tunnels*#tunnel.remain.seconds | s     |
| encryption                      | N/A   |
| gateway                         | N/A   |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Name                               | Unit  |
|:-----------------------------------|:------|
| licenses.count                     | count |
| status                             | N/A   |
| *licenses*#license.empiration.days | d     |

</TabItem>
<TabItem value="System" label="System">

| Name                  | Unit |
|:----------------------|:-----|
| system.uptime.seconds | s    |
| certificate-status    | N/A  |
| operational-mode      | N/A  |
| software-version      | N/A  |
| wildfire-mode         | N/A  |

</TabItem>
</Tabs>

## Prerequisites

This connector allows you to monitor Palo Alto Networks devices via the XML API.
Please refer to the [official documentation](https://docs.paloaltonetworks.com/pan-os/11-0/pan-os-panorama-api/get-started-with-the-pan-os-xml-api) for more information on accessing this API.

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
dnf install centreon-pack-network-firewalls-paloalto-standard-api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-firewalls-paloalto-standard-api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-firewalls-paloalto-standard-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-firewalls-paloalto-standard-api
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Palo Alto firewall API** connector through
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
dnf install centreon-plugin-Network-Firewalls-Paloalto-Standard-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Firewalls-Paloalto-Standard-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-firewalls-paloalto-standard-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Firewalls-Paloalto-Standard-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Net-PaloAlto-Standard-Api-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro         | Description                                                                                                                                                                                                                                        | Default value | Mandatory |
|:--------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| USERNAME      | Username. Required with --auth-type=basic. Also used with --auth-type=api-key to auto-generate or regenerate the API key                                                                                                                           |               |           |
| PASSWORD      | Password                                                                                                                                                                                                                                           |               |           |
| PROTO         | Protocol to use: http or https                                                                                                                                                                                                                     | https         |           |
| PORT          | Port used                                                                                                                                                                                                                                          | 443           |           |
| API_KEY       | PAN-OS API key (sent as X-PAN-KEY header). Used with --auth-type=api-key. If omitted, the key is auto-generated from --username/--password via the `keygen API` and cached locally. A 401 or 403 response also triggers automatic key regeneration |               |           |
| AUTH_TYPE     | Authentication type: `api-key` (default) or `basic`                                                                                                                                                                                                | api-key       |           |
| TIMEOUT       | HTTP request timeout in seconds                                                                                                                                                                                                                    | 30            |           |
| EXTRA_OPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                           |               |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Environment" label="Environment">

| Macro         | Description                                                                                                                                                 | Default value | Mandatory |
|:--------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| COMPONENT     | Which component to check. Can be: 'psu', 'temperature', 'fan', 'voltage'                                                                                    | .*            |           |
| WARNING       | Set warning threshold for 'temperature', 'fan', 'voltage' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,50' --warning='fan,.*,2500'    |               |           |
| CRITICAL      | Set critical threshold for 'temperature', 'fan', 'voltage' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,70' --critical='fan,.*,1000' |               |           |
| EXTRA_OPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                      | --verbose     |           |

</TabItem>
<TabItem value="Ha" label="Ha">

| Macro                    | Description                                                                                                                                                                                                                        | Default value                                                              | Mandatory |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------|:---------:|
| WARNING_BUILD_COMPAT     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{build\_compat\}                                                                                                               | %\{build\_compat\} !~ /Match/                                              |           |
| CRITICAL_BUILD_COMPAT    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{build\_compat\}                                                                                                              |                                                                            |           |
| CRITICAL_HA1_LINK_STATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{ha1\_status\}                                                                                                                | %\{ha1\_status\} !~ /up/                                                   |           |
| WARNING_HA1_LINK_STATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{ha1\_status\}                                                                                                                 |                                                                            |           |
| CRITICAL_HA2_LINK_STATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{ha2\_status\}                                                                                                                | %\{ha2\_status\} !~ /up/                                                   |           |
| WARNING_HA2_LINK_STATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{ha2\_status\}                                                                                                                 |                                                                            |           |
| WARNING_HA_MODE          |                                                                                                                                                                                                                                    |                                                                            |           |
| CRITICAL_HA_MODE         |                                                                                                                                                                                                                                    |                                                                            |           |
| WARNING_LOCAL_STATE      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{local\_state\}, %\{local\_priority\}, %\{local\_state\_last\}                                                                 |                                                                            |           |
| CRITICAL_LOCAL_STATE     | Define the conditions to match for the status to be CRITICAL$/'). You can use the following variables: %\{local\_state\}, %\{local\_priority\}, %\{local\_state\_last\}                                                            | '%\{local\_state\} !~ /^(?:active\|passive                                 |           |
| CRITICAL_PEER_STATE      | Define the conditions to match for the status to be CRITICAL$/ \|\| %\{peer\_conn\_status\} ne "up"'). You can use the following variables: %\{peer\_state\}, %\{peer\_priority\}, %\{peer\_conn\_status\}, %\{peer\_state\_last\} | %\{peer\_state\} !~ /active\|passive/ \|\| %\{peer\_conn\_status\} !~ /up/ |           |
| WARNING_PEER_STATE       | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{peer\_state\}, %\{peer\_priority\}, %\{peer\_conn\_status\}, %\{peer\_state\_last\}                                           |                                                                            |           |
| CRITICAL_STATE_SYNC      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\_sync\}                                                                                                                | %\{state\_sync\} !~ /^synchronized\|complete$/                             |           |
| WARNING_STATE_SYNC       | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\_sync\}                                                                                                                 |                                                                            |           |
| EXTRA_OPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                             |                                                                            |           |

</TabItem>
<TabItem value="Ipsec" label="Ipsec">

| Macro                  | Description                                                                                                                                      | Default value | Mandatory |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| INCLUDE_TUNNEL_NAME    | Include tunnel names (regexp)                                                                                                                    |               |           |
| EXCLUDE_TUNNEL_NAME    | Exclude tunnel names (regexp)                                                                                                                    |               |           |
| INCLUDE_GATEWAY_NAME   | Include gateway names (regexp)                                                                                                                   |               |           |
| EXCLUDE_GATEWAY_NAME   | Exclude gateway names (regexp)                                                                                                                   |               |           |
| WARNING_ENCRYPTION     | Define the condition for WARNING status based on tunnel encryption state. Available variables: %\{enc\}, %\{name\}                               |               |           |
| CRITICAL_ENCRYPTION    | Define the condition for CRITICAL status based on tunnel encryption state. Available variables: %\{enc\}, %\{name\}                              |               |           |
| WARNING_GATEWAY        | Define the condition for WARNING status based on gateway. Available variables: %\{gateway\}, %\{name\}                                           |               |           |
| CRITICAL_GATEWAY       | Define the condition for CRITICAL status based on gateway. Available variables: %\{gateway\}, %\{name\}                                          |               |           |
| WARNING_REMAIN_TIME    | Warning threshold for tunnel remain time in seconds                                                                                              |               |           |
| CRITICAL_REMAIN_TIME   | Critical threshold for tunnel remain time in seconds                                                                                             |               |           |
| WARNING_TUNNELS_COUNT  | Warning threshold for tunnels count                                                                                                              |               |           |
| CRITICAL_TUNNELS_COUNT | Critical threshold for tunnels count                                                                                                             |               |           |
| EXTRA_OPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |               |           |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Macro                    | Description                                                                                                                                      | Default value         | Mandatory |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:---------:|
| INCLUDE_LICENSE_NAME     | Include license names (regexp)                                                                                                                   |                       |           |
| EXCLUDE_LICENSE_NAME     | Exclude license names (regexp)                                                                                                                   |                       |           |
| CRITICAL_EXPIRATION_DAYS | Critical threshold in days before expiration                                                                                                     | @0                    |           |
| WARNING_EXPIRATION_DAYS  | Warning threshold in days before expiration                                                                                                      |                       |           |
| WARNING_LICENSES_COUNT   | Warning threshold for licenses count                                                                                                             |                       |           |
| CRITICAL_LICENSES_COUNT  | Critical threshold for licenses count                                                                                                            |                       |           |
| CRITICAL_STATUS          | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{expired\}                                  | %\{expired\} =~ /yes/ |           |
| WARNING_STATUS           | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{expired\}                                   |                       |           |
| EXTRA_OPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |                       |           |

</TabItem>
<TabItem value="System" label="System">

| Macro                       | Description                                                                                                                                      | Default value                 | Mandatory |
|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:---------:|
| WARNING_CERTIFICATE_STATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{cert\_status\}                              |                               |           |
| CRITICAL_CERTIFICATE_STATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{cert\_status\}                             | %\{cert\_status\} !~ /Valid/i |           |
| WARNING_OPERATIONAL_MODE    | Define the condition for WARNING status based on operational mode. Available variable: %\{operational_mode\}                                     |                               |           |
| CRITICAL_OPERATIONAL_MODE   | Define the condition for CRITICAL status based on operational mode. Available variables: %\{operational_mode\}                                   |                               |           |
| WARNING_SOFTWARE_VERSION    | Define the condition for WARNING status based on software version. Available variable: %\{sw_version\}                                           |                               |           |
| CRITICAL_SOFTWARE_VERSION   | Define the condition for CRITICAL status based on software version. Available variable: %\{sw_version\}                                          |                               |            |
| WARNING_UPTIME              | Warning threshold for uptime in seconds                                                                                                          |                               |           |
| CRITICAL_UPTIME             | Critical threshold for uptime in seconds                                                                                                         |                               |           |
| WARNING_WILDFIRE_MODE       | Define the condition for WARNING status based on WildFire mode status. Available variable: %\{wildfire_mode\}                                    |                               |           |
| CRITICAL_WILDFIRE_MODE      | Define the condition for CRITICAL status based on WildFire mode status. Available variable: %\{wildfire_mode\}                                   |                               |           |
| EXTRA_OPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).           |                               |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_paloalto_api.pl \
	--plugin=network::paloalto::api::plugin \
	--mode=system \
	--hostname='10.0.0.1' \
	--port='443' \
	--proto='https' \
	--timeout='30' \
	--auth-type='api-key' \
	--api-key='' \
	--username='username' \
	--password='password'  \
	--warning-uptime='' \
	--critical-uptime='' \
	--warning-certificate-status='' \
	--critical-certificate-status='%\{cert\_status\} !~ /Valid/i' \
	--warning-operational-mode='' \
	--critical-operational-mode='' \
	--warning-software-version='' \
	--critical-software-version='' \
	--warning-wildfire-mode='' \
	--critical-wildfire-mode='' 
```

The expected command output is shown below:

```bash
OK: uptime: 90973 seconds | 'system.uptime.seconds'=90973s;;;0; 
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
/usr/lib/centreon/plugins/centreon_paloalto_api.pl \
	--plugin=network::paloalto::api::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                         | Linked service template                      |
|:-----------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|
| environment [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/api/mode/environment.pm)] | Net-PaloAlto-Standard-Environment-Api-custom |
| ha [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/api/mode/ha.pm)]                   | Net-PaloAlto-Standard-Ha-Api-custom          |
| ipsec [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/api/mode/ipsec.pm)]             | Net-PaloAlto-Standard-Ipsec-Api-custom       |
| licenses [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/api/mode/licenses.pm)]       | Net-PaloAlto-Standard-Licenses-Api-custom    |
| system [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/paloalto/api/mode/system.pm)]           | Net-PaloAlto-Standard-System-Api-custom      |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                                                              |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'        |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --change-output-adv                        | Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --proxypac                                 | Proxy PAC file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --failback-file                            | Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memexpiration                            | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --statefile-suffix                         | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --hostname                                 | Hostname or IP address of the Palo Alto device.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --port                                     | Port used (default: 443).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --proto                                    | Protocol to use: http or https (default: https).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --auth-type                                | Authentication type: `api-key` (default) or `basic`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --api-key                                  | PAN-OS API key (sent as X-PAN-KEY header). Used with --auth-type=api-key. If omitted, the key is auto-generated from --username/--password via the `keygen API` and cached locally. A 401 or 403 response also triggers automatic key regeneration.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --username                                 | Username. Required with --auth-type=basic. Also used with --auth-type=api-key to auto-generate or regenerate the API key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --password                                 | Password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --timeout                                  | HTTP request timeout in seconds (default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --unknown-http-status                      | Threshold for unknown HTTP status (default: '%\{http\_code\} \< 200 or %\{http\_code\} \>= 300').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --warning-http-status                      | Threshold for warning HTTP status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --critical-http-status                     | Threshold for critical HTTP status.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Environment" label="Environment">

| Option               | Description                                                                                                                                                                                                         |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: 'psu', 'temperature', 'fan', 'voltage'.                                                                                                                           |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=temperature). You can also exclude items from specific instances: --filter=`temperature,Temperature CPLD`                                      |
| --absent-problem     | Return an error if a component is not 'present' (default is skipping). It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'. |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                          |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='psu,ok,true'          |
| --warning            | Set warning threshold for 'temperature', 'fan', 'voltage' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,50' --warning='fan,.*,2500'                                                            |
| --critical           | Set critical threshold for 'temperature', 'fan', 'voltage' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,70' --critical='fan,.*,1000'                                                         |
| --warning-count-*    | Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                        |
| --critical-count-*   | Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                       |

</TabItem>
<TabItem value="Ha" label="Ha">

| Option                     | Description                                                                                                                                                                                                                                                                             |
|:---------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                               |
| --warning-local-state      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{local\_state\}, %\{local\_priority\}, %\{local\_state\_last\}                                                                                                                      |
| --critical-local-state     | Define the conditions to match for the status to be CRITICAL (default: '%\{local\_state\} !~ /^(?:active\|passive)$/'). You can use the following variables: %\{local\_state\}, %\{local\_priority\}, %\{local\_state\_last\}                                                           |
| --warning-peer-state       | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{peer\_state\}, %\{peer\_priority\}, %\{peer\_conn\_status\}, %\{peer\_state\_last\}                                                                                                |
| --critical-peer-state      | Define the conditions to match for the status to be CRITICAL (default: '%\{peer\_state\} !~ /^(?:active\|passive)$/ \|\| %\{peer\_conn\_status\} ne "up"'). You can use the following variables: %\{peer\_state\}, %\{peer\_priority\}, %\{peer\_conn\_status\}, %\{peer\_state\_last\} |
| --warning-state-sync       | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\_sync\}                                                                                                                                                                      |
| --critical-state-sync      | Define the conditions to match for the status to be CRITICAL (default: '%\{state\_sync\} !~ /^synchronized\|complete$/'). You can use the following variables: %\{state\_sync\}                                                                                                         |
| --warning-ha1-link-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{ha1\_status\}                                                                                                                                                                      |
| --critical-ha1-link-status | Define the conditions to match for the status to be CRITICAL (default: '%\{ha1\_status\} ne "up"'). You can use the following variables: %\{ha1\_status\}                                                                                                                               |
| --warning-ha2-link-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{ha2\_status\}                                                                                                                                                                      |
| --critical-ha2-link-status | Define the conditions to match for the status to be CRITICAL (default: '%\{ha2\_status\} ne "up"'). You can use the following variables: %\{ha2\_status\}                                                                                                                               |
| --warning-build-compat     | Define the conditions to match for the status to be WARNING (default: '%\{build\_compat\} ne "Match"'). You can use the following variables: %\{build\_compat\}                                                                                                                         |
| --critical-build-compat    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{build\_compat\}                                                                                                                                                                   |

</TabItem>
<TabItem value="Ipsec" label="Ipsec">

| Option                   | Description                                                                                                               |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --include-tunnel-name    | Include tunnel names (regexp).                                                                                            |
| --exclude-tunnel-name    | Exclude tunnel names (regexp).                                                                                            |
| --include-gateway-name   | Include gateway names (regexp).                                                                                           |
| --exclude-gateway-name   | Exclude gateway names (regexp).                                                                                           |
| --warning-tunnels-count  | Warning threshold for tunnels count.                                                                                      |
| --critical-tunnels-count | Critical threshold for tunnels count.                                                                                     |
| --warning-remain-time    | Warning threshold for tunnel remain time in seconds.                                                                      |
| --critical-remain-time   | Critical threshold for tunnel remain time in seconds.                                                                     |

</TabItem>
<TabItem value="Licenses" label="Licenses">

| Option                     | Description                                                                                                                                        |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters          | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                          |
| --include-license-name     | Include license names (regexp).                                                                                                                    |
| --exclude-license-name     | Exclude license names (regexp).                                                                                                                    |
| --unknown-status           | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{expired\}                                     |
| --warning-status           | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{expired\}                                     |
| --critical-status          | Define the conditions to match for the status to be CRITICAL (default: '%\{expired\} =~ /yes/'). You can use the following variables: %\{expired\} |
| --warning-expiration-days  | Warning threshold in days before expiration.                                                                                                       |
| --critical-expiration-days | Critical threshold in days before expiration (default: '@0').                                                                                      |
| --warning-licenses-count   | Warning threshold for licenses count.                                                                                                              |
| --critical-licenses-count  | Critical threshold for licenses count.                                                                                                             |

</TabItem>
<TabItem value="System" label="System">

| Option                        | Description                                                                                                                                                              |
|:------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters             | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                |
| --warning-uptime              | Warning threshold for uptime in seconds.                                                                                                                                 |
| --critical-uptime             | Critical threshold for uptime in seconds.                                                                                                                                |
| --unknown-certificate-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{cert\_status\}                                                      |
| --warning-certificate-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{cert\_status\}                                                      |
| --critical-certificate-status | Define the conditions to match for the status to be CRITICAL (default: '%\{cert\_status\} !~ /Valid/i'). You can use the following variables: %\{cert\_status\}          |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_paloalto_api.pl \
	--plugin=network::paloalto::api::plugin \
	--mode=system \
	--help
```
