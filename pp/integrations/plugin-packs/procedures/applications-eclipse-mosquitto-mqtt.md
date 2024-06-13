---
id: applications-eclipse-mosquitto-mqtt
title: Eclipse Mosquitto MQTT
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

{DEPENDENCY_TEMPLATE}

### Templates

The Monitoring Connector **Eclipse Mosquitto MQTT** brings a host template:

* **App-Eclipse-Mosquitto-Mqtt-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Eclipse-Mosquitto-Mqtt-custom" label="App-Eclipse-Mosquitto-Mqtt-custom">

| Service Alias | Service Template                                | Service Description                                     |
|:--------------|:------------------------------------------------|:--------------------------------------------------------|
| Clients       | App-Eclipse-Mosquitto-Mqtt-Clients-custom       | Check connected clients count                           |
| Messages      | App-Eclipse-Mosquitto-Mqtt-Messages-custom      | Check messages count, open                              |
| Numeric-Value | App-Eclipse-Mosquitto-Mqtt-Numeric-Value-custom | Check allowing to retrieve a digital value from a topic |
| String-Value  | App-Eclipse-Mosquitto-Mqtt-String-Value-custom  | Check allowing to retrieve a string value from a topic  |
| Uptime        | App-Eclipse-Mosquitto-Mqtt-Uptime-custom        | Time since the server has been working and available    |

> The services listed above are created automatically when the **App-Eclipse-Mosquitto-Mqtt-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

Coming soon

</TabItem>
<TabItem value="Messages" label="Messages">

Coming soon

</TabItem>
<TabItem value="Numeric-Value" label="Numeric-Value">

| Metric name | Unit  |
|:------------|:------|
| generic     | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="String-Value" label="String-Value">

| Metric name | Unit  |
|:------------|:------|
| generic     | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

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
dnf install centreon-pack-applications-eclipse-mosquitto-mqtt
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-eclipse-mosquitto-mqtt
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-eclipse-mosquitto-mqtt
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-eclipse-mosquitto-mqtt
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Eclipse Mosquitto MQTT** connector through
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
dnf install centreon-plugin-Applications-Eclipse-Mosquitto-MQTT
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Eclipse-Mosquitto-MQTT
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-eclipse-mosquitto-mqtt
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Eclipse-Mosquitto-MQTT
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Eclipse-Mosquitto-Mqtt-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro              | Description                                                                                          | Default value     | Mandatory   |
|:-------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MQTTUSERNAME       | MQTT username                                                                                        |                   |             |
| MQTTPASSWORD       | MQTT password                                                                                        |                   |             |
| MQTTPORT           | Port used by MQTT (default: 8883)                                                                    | 8883              |             |
| ADDRESS            | Name or address of the host to monitor (mandatory)                                                   |                   |             |
| MQTTCACERTIFICATE  | CA certificate file                                                                                  |                   |             |
| MQTTSSL            | Use SSL for MQTT connection (default: 1)                                                             | 1                 |             |
| MQTTSSLCERTIFICATE | Client SSL certificate file                                                                          |                   |             |
| MQTTSSLKEY         | Client SSL key file                                                                                  |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Macro                    | Description                                                                                        | Default value     | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCLIENTSACTIVE     | Threshold                                                                                          |                   |             |
| CRITICALCLIENTSACTIVE    | Threshold                                                                                          |                   |             |
| WARNINGCLIENTSCONNECTED  | Threshold                                                                                          |                   |             |
| CRITICALCLIENTSCONNECTED | Threshold                                                                                          |                   |             |
| WARNINGCLIENTSINACTIVE   | Threshold                                                                                          |                   |             |
| CRITICALCLIENTSINACTIVE  | Threshold                                                                                          |                   |             |
| WARNINGCLIENTSMAXIMUM    | Threshold                                                                                          |                   |             |
| CRITICALCLIENTSMAXIMUM   | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Messages" label="Messages">

| Macro                    | Description                                                                                        | Default value     | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGMESSAGESRECEIVED  | Threshold                                                                                          |                   |             |
| CRITICALMESSAGESRECEIVED | Threshold                                                                                          |                   |             |
| WARNINGMESSAGESSENT      | Threshold                                                                                          |                   |             |
| CRITICALMESSAGESSENT     | Threshold                                                                                          |                   |             |
| WARNINGMESSAGESSTORED    | Threshold                                                                                          |                   |             |
| CRITICALMESSAGESSTORED   | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Numeric-Value" label="Numeric-Value">

| Macro            | Description                                                                                        | Default value     | Mandatory   |
|:-----------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PERFDATANAME     | Perfdata name in perfdata output (default: 'value')                                                | value             |             |
| TOPIC            | Topic value to check                                                                               |                   |             |
| EXTRACTEDPATTERN | Define a pattern to extract a number from the returned string                                      |                   |             |
| FORMAT           | Output format (default: 'current value is %s')                                                     |                   |             |
| FORMATCUSTOM     | Apply a custom change on the value(example to multiply the value: --format-custom='* 8')           |                   |             |
| PERFDATAUNIT     | Perfdata unit in perfdata output (default: '')                                                     |                   |             |
| PERFDATAMIN      | Minimum value to add in perfdata output (default: '')                                              |                   |             |
| PERFDATAMAX      | Maximum value to add in perfdata output (default: '')                                              |                   |             |
| WARNING          | Warning threshold                                                                                  |                   |             |
| CRITICAL         | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="String-Value" label="String-Value">

| Macro             | Description                                                                                        | Default value     | Mandatory   |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FORMATOK          | Threshold                                                                                          | value: %{value}   |             |
| FORMATUNKNOWN     | Threshold                                                                                          | value: %{value}   |             |
| TOPIC             | Topic value to check                                                                               |                   |             |
| FORMATCUSTOM      | Apply a custom change on the value                                                                 |                   |             |
| UNKNOWNREGEXP     |                                                                                                    |                   |             |
| REGEXPINSENSITIVE | Allows to use case-insensitive regexp                                                              |                   |             |
| FORMATWARNING     | Threshold                                                                                          | value: %{value}   |             |
| FORMATCRITICAL    | Threshold                                                                                          | value: %{value}   |             |
| WARNINGREGEXP     | Return Warning if the topic value match the regexp                                                 |                   |             |
| CRITICALREGEXP    | Return Critical if the topic value match the regexp                                                |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                        | Default value     | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGUPTIME  | Warning threshold                                                                                  |                   |             |
| CRITICALUPTIME | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_eclipse_mosquitto_mqtt.pl \
	--plugin=apps::eclipse::mosquitto::mqtt::plugin \
	--mode=uptime \
	--hostname='' \
	--mqtt-port='8883' \
	--mqtt-ca-certificate='' \
	--mqtt-ssl-certificate='' \
	--mqtt-ssl-key='' \
	--mqtt-username='' \
	--mqtt-password='' \
	--mqtt-ssl='1'  \
	--warning-uptime='' \
	--critical-uptime='' 
```

The expected command output is shown below:

```bash
OK:  | 'system.uptime.seconds'=73s;;;; 
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
/usr/lib/centreon/plugins/centreon_eclipse_mosquitto_mqtt.pl \
	--plugin=apps::eclipse::mosquitto::mqtt::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                   | Linked service template                         |
|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------|
| clients [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/eclipse/mosquitto/mqtt/mode/clients.pm)]            | App-Eclipse-Mosquitto-Mqtt-Clients-custom       |
| messages [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/eclipse/mosquitto/mqtt/mode/messages.pm)]          | App-Eclipse-Mosquitto-Mqtt-Messages-custom      |
| numeric-value [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/eclipse/mosquitto/mqtt/mode/numericvalue.pm)] | App-Eclipse-Mosquitto-Mqtt-Numeric-Value-custom |
| string-value [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/eclipse/mosquitto/mqtt/mode/stringvalue.pm)]   | App-Eclipse-Mosquitto-Mqtt-String-Value-custom  |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/eclipse/mosquitto/mqtt/mode/uptime.pm)]              | App-Eclipse-Mosquitto-Mqtt-Uptime-custom        |

### Available options

#### Generic options

All generic options are listed here:

| Option                 | Description                                                                                                                  |
|:-----------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| --mode                 | Define the mode in which you want the plugin to be executed (see --list-mode).                                               |
| --dyn-mode             | Specify a mode with the module's path (advanced).                                                                            |
| --list-mode            | List all available modes.                                                                                                    |
| --mode-version         | Check minimal version of mode. If not, unknown error.                                                                        |
| --version              | Return the version of the plugin.                                                                                            |
| --pass-manager         | Define the password manager you want to use.Supported managers are: environment, file, keepass, hashicorpvault and teampass. |
| --hostname             | Name or address of the host to monitor (mandatory).                                                                          |
| --mqtt-port            | Port used by MQTT (default: 8883).                                                                                           |
| --mqtt-ssl             | Use SSL for MQTT connection (default: 1).                                                                                    |
| --mqtt-ca-certificate  | CA certificate file.                                                                                                         |
| --mqtt-ssl-certificate | Client SSL certificate file.                                                                                                 |
| --mqtt-ssl-key         | Client SSL key file.                                                                                                         |
| --mqtt-username        | MQTT username.                                                                                                               |
| --mqtt-password        | MQTT password.                                                                                                               |
| --mqtt-allow-insecure  | Allow unsecure login (default: 0).                                                                                           |
| --mqtt-timeout         | MQTT timeout (default: 5).                                                                                                   |
| --filter-counters      | Only display some counters (regexp can be used).Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'     |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Clients" label="Clients">

| Option                   | Description                                                                                      |
|:-------------------------|:-------------------------------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds.Can be: 'clients-connected', 'clients-maximum', 'clients-active', 'clients-inactive'. |

</TabItem>
<TabItem value="Messages" label="Messages">

| Option                   | Description                                                                 |
|:-------------------------|:----------------------------------------------------------------------------|
| --warning-* --critical-* | Thresholds.Can be: 'messages-stored', 'messages-received', 'messages-sent'. |

</TabItem>
<TabItem value="Numeric-Value" label="Numeric-Value">

| Option              | Description                                                                               |
|:--------------------|:------------------------------------------------------------------------------------------|
| --topic             | Topic value to check.                                                                     |
| --warning           | Warning threshold.                                                                        |
| --critical          | Critical threshold.                                                                       |
| --extracted-pattern | Define a pattern to extract a number from the returned string.                            |
| --format            | Output format (default: 'current value is %s')                                            |
| --format-custom     | Apply a custom change on the value(example to multiply the value: --format-custom='* 8'). |
| --perfdata-unit     | Perfdata unit in perfdata output (default: '')                                            |
| --perfdata-name     | Perfdata name in perfdata output (default: 'value')                                       |
| --perfdata-min      | Minimum value to add in perfdata output (default: '')                                     |
| --perfdata-max      | Maximum value to add in perfdata output (default: '')                                     |

</TabItem>
<TabItem value="String-Value" label="String-Value">

| Option               | Description                                                                                                                                                                                              |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --topic              | Topic value to check.                                                                                                                                                                                    |
| --format-custom      | Apply a custom change on the value.                                                                                                                                                                      |
| --warning-regexp     | Return Warning if the topic value match the regexp.                                                                                                                                                      |
| --critical-regexp    | Return Critical if the topic value match the regexp.                                                                                                                                                     |
| --regexp-insensitive | Allows to use case-insensitive regexp.                                                                                                                                                                   |
| --format-*           | Output format according to the threshold.Can be:'ok' (default: 'value: %{value}'),'warning' (default: 'value: %{value}'),'critical' (default: 'value: %{value}'),'unknown' (default: 'value: %{value}'). |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option            | Description                                                                                                                                   |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-uptime  | Warning threshold.                                                                                                                            |
| --critical-uptime | Critical threshold.                                                                                                                           |
| --unit            | Select the time unit for thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_eclipse_mosquitto_mqtt.pl \
	--plugin=apps::eclipse::mosquitto::mqtt::plugin \
	--mode=uptime \
	--help
```
