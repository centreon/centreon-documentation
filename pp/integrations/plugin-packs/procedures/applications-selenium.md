---
id: applications-selenium
title: Selenium
description: Monitor Selenium test scenarios (Katalon or WAA) via the Selenium server: execution time, step status, and success rate.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Selenium** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Selenium** brings 2 host templates:

* **App-Selenium-Katalon-custom**
* **App-Selenium-WAA-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Selenium-Katalon-custom" label="App-Selenium-Katalon-custom">

| Service Alias     | Service Template                     | Service Description                                                                                                                                           |
|:------------------|:-------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Scenario-Selenium | App-Selenium-Scenario-Katalon-custom | Check to execute remotely a Selenium scenario and measure execution time (scenario based on the Katalon Automation Recorder web browser plugin with XML export) |

> The services listed above are created automatically when the **App-Selenium-Katalon-custom** host template is used.

</TabItem>
<TabItem value="App-Selenium-WAA-custom" label="App-Selenium-WAA-custom">

| Service Alias     | Service Template                 | Service Description                                                                                                                                           |
|:------------------|:---------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Scenario-Selenium | App-Selenium-Scenario-WAA-custom | Check to execute remotely a Selenium scenario and measure execution time                                                                                        |

> The services listed above are created automatically when the **App-Selenium-WAA-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Scenario-Selenium-Katalon" label="Scenario-Selenium-Katalon">

| Name               | Unit  |
|:-------------------|:------|
| _prct              | %     |
| time-scenario      | ms    |
| state              | N/A   |
| *steps1*#time-step | ms    |
| *steps2*#time-step | ms    |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Scenario-Selenium-WAA" label="Scenario-Selenium-WAA">

| Name         | Unit  |
|:-------------|:------|
| time         | s     |
| steps        | count |
| availability | %     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

The target Selenium server must be reachable from the Centreon poller on the 4444 port
(or another port and then you have to change the port in the host template).

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
dnf install centreon-pack-applications-selenium
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-selenium
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-selenium
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-selenium
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Selenium** connector through
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
dnf install centreon-plugin-Applications-Selenium
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Selenium
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-selenium
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Selenium
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="App-Selenium-Katalon-custom" label="App-Selenium-Katalon-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Selenium-Katalon-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro             | Description                                                                                                                              | Default value          | Mandatory |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:---------:|
| SELENIUMHOSTNAME  | IP Addr/FQDN of the Selenium server                                                                                                      |                        |           |
| SELENIUMPORT      | Port used by Selenium server                                                                                                             | 4444                   |           |
| SCENARIODIRECTORY | Directory where scenarios are stored                                                                                                      | /var/lib/centreon\_waa |           |
| SELENIUMBROWSER   | Browser used by Selenium server                                                                                                          | *firefox               |           |
| EXTRAOPTIONS      | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                        |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="App-Selenium-WAA-custom" label="App-Selenium-WAA-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Selenium-WAA-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro        | Description                         | Default value          | Mandatory |
|:-------------|:------------------------------------|:-----------------------|:---------:|
| SELENIUMPORT | Port used by Selenium server        | 4444                   |           |
| SCENARIODIR  | Directory where scenarios are stored | /var/lib/centreon\_waa |           |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Scenario-Selenium" label="Scenario-Selenium">

| Macro                | Description                                                                                                                            | Default value       | Mandatory |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:---------:|
| TIMEOUT              | Set scenario execution timeout in second                                                                                               | 50                  |           |
| ACTIONTIMEOUT        | Set action execution timeout in second                                                                                                 | 10                  |           |
| SCENARIONAME         | Scenario to play (without extension)                                                                                                   |                     |     X     |
| WARNINGFAILED        | Threshold                                                                                                                              |                     |           |
| CRITICALFAILED       | Threshold                                                                                                                              |                     |           |
| CRITICALSTATE        | Critical threshold for step state                                                                                                      | %\{state\} !~ /OK/i |           |
| WARNINGSTATE         | Warning threshold for step state                                                                                                       |                     |           |
| WARNINGSUCCESSFUL    | Threshold                                                                                                                              |                     |           |
| CRITICALSUCCESSFUL   | Threshold                                                                                                                              |                     |           |
| WARNINGTIMESCENARIO  | Warning threshold in milliseconds for scenario execution time                                                                          |                     |           |
| CRITICALTIMESCENARIO | Critical threshold in milliseconds for scenario execution time                                                                         |                     |           |
| WARNINGTIMESTEP      | Warning threshold in milliseconds for step execution time                                                                              |                     |           |
| CRITICALTIMESTEP     | Critical threshold in milliseconds for step execution time                                                                             |                     |           |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose           |           |

</TabItem>
<TabItem value="Scenario-Selenium-WAA" label="Scenario-Selenium-WAA">

| Macro        | Description                                                                                                                                    | Default value | Mandatory |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| TIMEOUT      | Set scenario execution timeout in second                                                                                                       | 40            |           |
| SCENARIONAME | Scenario to play (without extension)                                                                                                           |               |     x     |
| WARNING      | Warning threshold in seconds (scenario execution time)                                                                                         | 20            |           |
| CRITICAL     | Critical threshold in seconds (scenario execution response time)                                                                               | 30            |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#available-options). | --verbose     |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_selenium.pl \
	--plugin=apps::selenium::plugin \
	--mode=scenario-katalon \
	--selenium-hostname= \
	--selenium-port='4444' \
	--browser='*firefox' \
	--directory='/var/lib/centreon\_waa'  \
	--scenario='XXXX' \
	--timeout='50' \
	--action-timeout='10' \
	--warning-state='' \
	--critical-state='%\{state\} !~ /OK/i' \
	--warning-failed='' \
	--critical-failed='' \
	--warning-successful='' \
	--critical-successful='' \
	--warning-time-scenario='' \
	--critical-time-scenario='' \
	--warning-time-step='' \
	--critical-time-step='' \
	--verbose
```

The expected command output is shown below:

```bash
OK:   Total execution time : 912 ms All steps state are ok | '_prct'=75%;;;;100 '_prct'=96%;;;;100 'time-scenario'=912ms;;;0; 'steps1#time-step'=39595ms;;;0; 'steps2#time-step'=64207ms;;;0; 
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
/usr/lib/centreon/plugins/centreon_selenium.pl \
	--plugin=apps::selenium::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                           | Linked service template              |
|:-------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|
| scenario [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/selenium/mode/scenario.pm)]                | App-Selenium-Scenario-WAA-custom     |
| scenario-katalon [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/selenium/mode/scenariokatalon.pm)] | App-Selenium-Scenario-Katalon-custom |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Scenario-Selenium" label="Scenario-Selenium">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --selenium-hostname      |   IP Addr/FQDN of the Selenium server.                                                                                        |
| --selenium-port          |   Port used by Selenium server.                                                                                               |
| --browser                |   Browser used by Selenium server (default : '*firefox').                                                                     |
| --directory              |   Directory where scenarios are stored.                                                                                        |
| --scenario               |   Scenario to play (without extension).                                                                                       |
| --timeout                |   Set scenario execution timeout in second (default: 50).                                                                     |
| --warning                |   Warning threshold in seconds (scenario execution time)                                                                      |
| --critical               |   Critical threshold in seconds (scenario execution response time)                                                            |
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --force-continue         |   Don't stop if error.                                                                                                        |
| --action-timeout         |   Set action execution timeout in second (default: 10).                                                                       |
| --warning-*              |   Warning threshold for steps state count (can be: 'failed', 'successful').                                                   |
| --warning-state          |   Warning threshold for step state.                                                                                           |
| --critical-*             |   Critical threshold for steps state count (can be: 'failed', 'successful').                                                  |
| --critical-state         |   Critical threshold for step state (default: '%\{state\} !~ /OK/i').                                                         |
| --warning-time-scenario  |   Warning threshold in milliseconds for scenario execution time.                                                              |
| --critical-time-scenario |   Critical threshold in milliseconds for scenario execution time.                                                             |
| --warning-time-step      |   Warning threshold in milliseconds for step execution time.                                                                  |
| --critical-time-step     |   Critical threshold in milliseconds for step execution time.                                                                 |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_selenium.pl \
	--plugin=apps::selenium::plugin \
	--mode=scenario-katalon \
	--help
```
