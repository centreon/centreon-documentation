---
id: applications-rudder-restapi
title: Rudder
description: Monitor Rudder configuration compliance via REST API, tracking node, rule, and global compliance status plus key statistics.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Rudder** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Rudder** brings 2 host templates:

* **App-Rudder-Node-Compliance-Restapi-custom**
* **App-Rudder-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Rudder-Node-Compliance-Restapi-custom" label="App-Rudder-Node-Compliance-Restapi-custom">

| Service Alias   | Service Template                                 | Service Description            | Discovery  |
|:----------------|:-------------------------------------------------|:-------------------------------|:----------:|
| Node-Compliance | App-Rudder-Node-Compliance-Name-Restapi-custom   | Check a node compliance status |            |
| Node-Compliance | App-Rudder-Node-Compliance-Global-Restapi-custom | Check nodes compliance status  | X          |

> The services listed above are created automatically when the **App-Rudder-Node-Compliance-Restapi-custom** host template is used.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
<TabItem value="App-Rudder-Restapi-custom" label="App-Rudder-Restapi-custom">

| Service Alias            | Service Template                                   | Service Description                   |
|:-------------------------|:---------------------------------------------------|:--------------------------------------|
| Global-Compliance        | App-Rudder-Global-Compliance-Restapi-custom        | Check global compliance status        |
| Nodes-Overall-Compliance | App-Rudder-Nodes-Overall-Compliance-Restapi-custom | Check overall nodes compliance status |
| Statistics               | App-Rudder-Statistics-Restapi-custom               | Check statistics                      |

> The services listed above are created automatically when the **App-Rudder-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias   | Service Template                                 | Service Description            | Discovery  |
|:----------------|:-------------------------------------------------|:-------------------------------|:----------:|
| Node-Compliance | App-Rudder-Node-Compliance-Name-Restapi-custom   | Check a node compliance status |            |
| Node-Compliance | App-Rudder-Node-Compliance-Global-Restapi-custom | Check nodes compliance status  | X          |
| Rule-Compliance | App-Rudder-Rule-Compliance-Restapi-custom        | Check rules compliance status  | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                            |
|:----------------|:---------------------------------------|
| Rudder          | Discover hosts from Rudder's inventory |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

#### Service discovery

| Rule name                | Description |
|:-------------------------|:------------|
| App-Rudder-Restapi-Nodes | Discover nodes managed by Rudder            |
| App-Rudder-Restapi-Rules | Discover compliance rules in Rudder            |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Global-Compliance" label="Global-Compliance">

| Name                | Unit  |
|:--------------------|:------|
| global-compliance   | %     |
| *compliances*#value | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Node-Compliance*" label="Node-Compliance*">

| Name                    | Unit  |
|:------------------------|:------|
| *nodes*~node-compliance | %     |
| status                  | N/A   |

> Applies to the following service templates: Node-Compliance, Node-Compliance

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Nodes-Overall-Compliance" label="Nodes-Overall-Compliance">

| Name               | Unit  |
|:-------------------|:------|
| compliance_perfect | nodes |
| compliance_good    | nodes |
| compliance_average | nodes |
| compliance_poor    | nodes |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Rule-Compliance" label="Rule-Compliance">

| Name                    | Unit  |
|:------------------------|:------|
| *rules*~rule-compliance | %     |
| status                  | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Name          | Unit  |
|:--------------|:------|
| nodes         | N/A   |
| pending-nodes | N/A   |
| rules         | N/A   |
| directives    | N/A   |
| groups        | N/A   |
| techniques    | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

For prerequisites and setup details, please refer to the [official documentation](https://docs.rudder.io/api/v/21/).


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
dnf install centreon-pack-applications-rudder-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-rudder-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-rudder-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-rudder-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Rudder** connector through
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
dnf install centreon-plugin-Applications-Rudder-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Rudder-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-rudder-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Rudder-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="App-Rudder-Node-Compliance-Restapi-custom" label="App-Rudder-Node-Compliance-Restapi-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Rudder-Node-Compliance-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro             | Description                                                                                          | Default value      | Mandatory   |
|:------------------|:-----------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| RUDDERAPIHOSTNAME | Rudder API hostname                                                                                  |                    | X           |
| RUDDERAPITOKEN    | API token                                                                                                     |                    | X           |
| RUDDERAPIPROTO    | Specify https if needed (default: 'https')                                                           | https              |             |
| RUDDERAPIPORT     | API port (default: 443)                                                                              | 443                |             |
| PROXYURL          | Proxy URL. Example: http://my.proxy:3128                                                             |                    |             |
| RUDDERAPIURLPATH  | API URL path (default: '/rudder/api/latest')                                                         | /rudder/api/latest |             |
| RUDDERNODENAME    | Filter node name (regexp can be used)                                                                |                    |             |
| EXTRAOPTIONS      | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                    |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="App-Rudder-Restapi-custom" label="App-Rudder-Restapi-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Rudder-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro             | Description                                                                                          | Default value      | Mandatory   |
|:------------------|:-----------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| RUDDERAPIHOSTNAME | Rudder API hostname                                                                                  |                    | X           |
| RUDDERAPITOKEN    | API token                                                                                                     |                    | X           |
| RUDDERAPIPROTO    | Specify https if needed (default: 'https')                                                           | https              |             |
| RUDDERAPIPORT     | API port (default: 443)                                                                              | 443                |             |
| PROXYURL          | Proxy URL. Example: http://my.proxy:3128                                                             |                    |             |
| RUDDERAPIURLPATH  | API URL path (default: '/rudder/api/latest')                                                         | /rudder/api/latest |             |
| EXTRAOPTIONS      | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                    |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Global-Compliance" label="Global-Compliance">

| Macro                    | Description                                                                                                                                                                                                         | Default value     | Mandatory   |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGGLOBALCOMPLIANCE  | Set warning threshold on global compliance                                                                                                                                                                          |                   |             |
| CRITICALGLOBALCOMPLIANCE | Set critical threshold on global compliance                                                                                                                                                                         |                   |             |
| WARNINGSTATUS            | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{detail\}, %\{value\}                                                                             |                   |             |
| CRITICALSTATUS           | Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %\{detail\}, %\{value\}  Example :   --critical-status='%\{detail\} eq "error" && %\{value\} \> 5' |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                  |                   |             |

</TabItem>
<TabItem value="Node-Compliance" label="Node-Compliance">

| Macro                  | Description                                                                                                                                                                                                                                                                | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME             | Filter node name (regexp can be used)                                                                                                                                                                                                                                      | .*                |             |
| CRITICALNODECOMPLIANCE | Set critical threshold on node compliance                                                                                                                                                                                                                                  | 100:              |             |
| WARNINGNODECOMPLIANCE  | Set warning threshold on node compliance                                                                                                                                                                                                                                   |                   |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING of rule compliance (default: ''). You can use the following variables: %\{rule\}, %\{compliance\}                                                                                                              |                   |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL of rule compliance (default: ''). You can use the following variables: %\{rule\}, %\{compliance\}  Example :   --critical-status='%\{rule\} eq "Global configuration for all nodes" && %\{compliance\} \< 95' |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                                         | --verbose         |             |

</TabItem>
<TabItem value="Nodes-Overall-Compliance" label="Nodes-Overall-Compliance">

| Macro           | Description                                                                                        | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS           | Units of thresholds (default: '%') ('%', 'count')                                                  |                   |             |
| WARNINGAVERAGE  | Threshold                                                                                          |                   |             |
| CRITICALAVERAGE | Threshold                                                                                          |                   |             |
| WARNINGGOOD     | Threshold                                                                                          |                   |             |
| CRITICALGOOD    | Threshold                                                                                          |                   |             |
| WARNINGPERFECT  | Threshold                                                                                          |                   |             |
| CRITICALPERFECT | Threshold                                                                                          |                   |             |
| WARNINGPOOR     | Threshold                                                                                          |                   |             |
| CRITICALPOOR    | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Rule-Compliance" label="Rule-Compliance">

| Macro                  | Description                                                                                                                                                                                                                                                  | Default value     | Mandatory   |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME             | Filter rule name (regexp can be used)                                                                                                                                                                                                                        | .*                |             |
| CRITICALRULECOMPLIANCE | Set critical threshold on rule compliance                                                                                                                                                                                                                    | 100:              |             |
| WARNINGRULECOMPLIANCE  | Set warning threshold on rule compliance                                                                                                                                                                                                                     |                   |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING of directive compliance (default: ''). You can use the following variables: %\{directive\}, %\{compliance\}                                                                                      |                   |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL of directive compliance (default: ''). You can use the following variables: %\{directive\}, %\{compliance\}  Example :   --critical-status='%\{directive\} eq "Users" && %\{compliance\} \< 85' |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                                                           | --verbose         |             |

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Macro                | Description                                                                                        | Default value     | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGDIRECTIVES    | Threshold                                                                                          |                   |             |
| CRITICALDIRECTIVES   | Threshold                                                                                          |                   |             |
| WARNINGGROUPS        | Threshold                                                                                          |                   |             |
| CRITICALGROUPS       | Threshold                                                                                          |                   |             |
| WARNINGNODES         | Threshold                                                                                          |                   |             |
| CRITICALNODES        | Threshold                                                                                          |                   |             |
| WARNINGPENDINGNODES  | Threshold                                                                                          |                   |             |
| CRITICALPENDINGNODES | Threshold                                                                                          |                   |             |
| WARNINGRULES         | Threshold                                                                                          |                   |             |
| CRITICALRULES        | Threshold                                                                                          |                   |             |
| WARNINGTECHNIQUES    | Threshold                                                                                          |                   |             |
| CRITICALTECHNIQUES   | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_rudder_restapi.pl \
	--plugin=apps::rudder::restapi::plugin \
	--mode=statistics \
	--hostname='10.0.0.1' \
	--url-path='' \
	--port= \
	--proto='' \
	--api-token='xxxxxx' \
	--proxyurl=''  \
	--warning-nodes='' \
	--critical-nodes='' \
	--warning-pending-nodes='' \
	--critical-pending-nodes='' \
	--warning-rules='' \
	--critical-rules='' \
	--warning-directives='' \
	--critical-directives='' \
	--warning-groups='' \
	--critical-groups='' \
	--warning-techniques='' \
	--critical-techniques=''
```

The expected command output is shown below:

```bash
OK: Nodes: 78140 Pending Nodes: 88948 Rules: 68148 Directives: 91500 Groups: 85743 Techniques: 21434 | 'nodes'=78140;;;0; 'pending-nodes'=88948;;;0; 'rules'=68148;;;0; 'directives'=91500;;;0; 'groups'=85743;;;0; 'techniques'=21434;;;0;
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
/usr/lib/centreon/plugins/centreon_rudder_restapi.pl \
	--plugin=apps::rudder::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                                | Linked service template                                                                              |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/discovery.pm)]                             | Used for host discovery                                                                              |
| global-compliance [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/globalcompliance.pm)]              | App-Rudder-Global-Compliance-Restapi-custom                                                          |
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/listnodes.pm)]                            | Used for service discovery                                                                           |
| list-rules [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/listrules.pm)]                            | Used for service discovery                                                                           |
| node-compliance [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/nodecompliance.pm)]                  | App-Rudder-Node-Compliance-Name-Restapi-custom<br />App-Rudder-Node-Compliance-Global-Restapi-custom |
| nodes-overall-compliance [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/nodesoverallcompliance.pm)] | App-Rudder-Nodes-Overall-Compliance-Restapi-custom                                                   |
| rule-compliance [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/rulecompliance.pm)]                  | App-Rudder-Rule-Compliance-Restapi-custom                                                            |
| statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/rudder/restapi/mode/statistics.pm)]                           | App-Rudder-Statistics-Restapi-custom                                                                 |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   Rudder API hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --port                                     |   API port (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --url-path                                 |   API URL path (default: '/rudder/api/latest')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Global-Compliance" label="Global-Compliance">

| Option                       | Description                                                                                                                                                                                                              |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters            |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                              |
| --warning-global-compliance  |   Set warning threshold on global compliance.                                                                                                                                                                            |
| --critical-global-compliance |   Set critical threshold on global compliance.                                                                                                                                                                           |
| --warning-status             |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{detail\}, %\{value\}                                                                                |
| --critical-status            |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %\{detail\}, %\{value\}  Example :   --critical-status='%\{detail\} eq "error" && %\{value\} \> 5'    |

</TabItem>
<TabItem value="Node-Compliance*" label="Node-Compliance*">

| Option                     | Description                                                                                                                                                                                                                                                                     |
|:---------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                     |
| --filter-name              |   Filter node name (regexp can be used)                                                                                                                                                                                                                                         |
| --warning-node-compliance  |   Set warning threshold on node compliance.                                                                                                                                                                                                                                     |
| --critical-node-compliance |   Set critical threshold on node compliance.                                                                                                                                                                                                                                    |
| --warning-status           |   Define the conditions to match for the status to be WARNING of rule compliance (default: ''). You can use the following variables: %\{rule\}, %\{compliance\}                                                                                                                 |
| --critical-status          |   Define the conditions to match for the status to be CRITICAL of rule compliance (default: ''). You can use the following variables: %\{rule\}, %\{compliance\}  Example :   --critical-status='%\{rule\} eq "Global configuration for all nodes" && %\{compliance\} \< 95'    |

</TabItem>
<TabItem value="Nodes-Overall-Compliance" label="Nodes-Overall-Compliance">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'perfect', 'good', 'average', 'poor'.                                                            |
| --critical-*      |   Critical threshold. Can be: 'perfect', 'good', 'average', 'poor'.                                                           |
| --units           |   Units of thresholds (default: '%') ('%', 'count').                                                                          |

</TabItem>
<TabItem value="Rule-Compliance" label="Rule-Compliance">

| Option                     | Description                                                                                                                                                                                                                                                       |
|:---------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                       |
| --filter-name              |   Filter rule name (regexp can be used)                                                                                                                                                                                                                           |
| --warning-rule-compliance  |   Set warning threshold on rule compliance.                                                                                                                                                                                                                       |
| --critical-rule-compliance |   Set critical threshold on rule compliance.                                                                                                                                                                                                                      |
| --warning-status           |   Define the conditions to match for the status to be WARNING of directive compliance (default: ''). You can use the following variables: %\{directive\}, %\{compliance\}                                                                                         |
| --critical-status          |   Define the conditions to match for the status to be CRITICAL of directive compliance (default: ''). You can use the following variables: %\{directive\}, %\{compliance\}  Example :   --critical-status='%\{directive\} eq "Users" && %\{compliance\} \< 85'    |

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'nodes', 'pending-nodes', 'rules', 'directives', 'groups', 'techniques'.                         |
| --critical-*      |   Critical threshold. Can be: 'nodes', 'pending-nodes', 'rules', 'directives', 'groups', 'techniques'.                        |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_rudder_restapi.pl \
	--plugin=apps::rudder::restapi::plugin \
	--mode=statistics \
	--help
```
