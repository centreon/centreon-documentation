---
id: applications-protocol-modbus
title: Modbus
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Modbus** brings a host template:

* **App-Protocol-Modbus-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Protocol-Modbus-custom" label="App-Protocol-Modbus-custom">

No services are created by default for this host template.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias         | Service Template                                 | Service Description        |
|:----------------------|:-------------------------------------------------|:---------------------------|
| Numeric-Value-Generic | App-Protocol-Modbus-Numeric-Value-Generic-custom | Monitor metrics via Modbus |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Numeric-Value-Generic" label="Numeric-Value-Generic">

This mode is generic, so there are no default metrics.

</TabItem>
</Tabs>

## Prerequisites

The monitored server must have a Modbus service running and available.

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
dnf install centreon-pack-applications-protocol-modbus
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-modbus
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-protocol-modbus
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-modbus
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Modbus** connector through
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
dnf install centreon-plugin-Applications-Protocol-Modbus
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Protocol-Modbus
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-protocol-modbus
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Protocol-Modbus
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Protocol-Modbus-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Numeric-Value-Generic" label="Numeric-Value-Generic">

| Macro        | Description                                                                                                                            | Default value | Mandatory |
|:-------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------|:---------:|
| CONFIG       | Define the configuration of the check (can be a file or a json string directly).                                                       |               |     X     |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |               |           |

> **CONFIG :** More information is available [here](https://github.com/centreon/centreon-plugins/blob/master/doc/en/user/guide.rst#modbus-protocol).

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_protocol_modbus.pl \
	--plugin=apps::protocols::modbus::plugin \
	--mode=numeric-value \
	--tcp-host=''  \
	--config='my-modbus.json' 
```

The expected command output is shown below:

```bash
OK: All metrics are OK | 'metric1'=10;;;; 'metric2'=40;;;; 'metric3'=72;;;; 
```

> The JSON file content can also be passed directly:  
> `--config='{ "selection": { "metric1": { ... } } }'`

### General structure of the JSON file

```json
{
  "selection": { ... },
  "virtualcurve": { ... },
  "command": { ... }
}
```

| Section        | Required | Description                                   |
|----------------|----------|-----------------------------------------------|
| `selection`    | Yes      | Defines the Modbus registers to read          |
| `virtualcurve` | No       | Aggregates and transforms the read values     |
| `command`      | No       | Customizes the global formatting of the output |


### Section `selection`

Each entry in `selection` corresponds to a Modbus register (or group of registers) to read.
The key is the **name of the resulting metric**.

```json
{
  "selection": {
    "<metric_name>": {
      "address": <integer>,
      "quantity": <integer>,
      "type": "<register_type>",
      "display": <true|false>,
      "formatting": { ... }
    }
  }
}
```

#### Available keys in `selection`

| Key          | Type    | Required | Description                                                              |
|--------------|---------|----------|--------------------------------------------------------------------------|
| `address`    | integer | Yes      | Modbus register address (decimal)                                        |
| `quantity`   | integer | Yes      | Number of consecutive registers to read                                  |
| `type`       | string  | No       | Register type (see values below). Default: `holding`                     |
| `display`    | boolean | No       | Display the raw value in the output. Default: `true`                     |
| `formatting` | object  | No       | Customize the output message (see [Formatting](#formatting) section)     |

#### Possible values for `type`

| Value      | Description                                                  |
|------------|--------------------------------------------------------------|
| `holding`  | Holding register (read/write) — most common                  |
| `input`    | Input register (read-only)                                   |
| `coil`     | Coil (binary value 0/1, read/write)                          |
| `discrete` | Discrete input (binary value 0/1, read-only)                 |

#### Minimal example

```json
{
  "selection": {
    "temperature": {
      "address": 100,
      "quantity": 1,
      "type": "holding",
      "display": true
    }
  }
}
```

#### Example with multiple metrics

```json
{
  "selection": {
    "metric1": { "address": 1, "quantity": 1, "type": "holding", "display": true },
    "metric2": { "address": 2, "quantity": 1, "type": "holding", "display": true },
    "metric3": { "address": 3, "quantity": 1, "type": "holding", "display": true }
  }
}
```

#### Reading multiple registers at once (`quantity > 1`)

When `quantity` is greater than 1, the plugin reads multiple consecutive registers and names them automatically `<name>.0`, `<name>.1`, etc.
This is useful to reduce network exchanges on low-bandwidth links.

```json
{
  "selection": {
    "phases": {
      "address": 1045,
      "quantity": 3,
      "type": "holding",
      "display": false
    }
  }
}
```

> The generated metrics will be named: `phases.0`, `phases.1`, `phases.2`

### Section `virtualcurve`

The `virtualcurve` section allows you to create derived metrics from the values read in `selection`. It is essential for:
- Applying a scaling factor (e.g. dividing by 10 if the device returns `153` for `15.3A`)
- Aggregating multiple registers (average, sum, min, max)
- Defining warning and critical thresholds
- Performing complex calculations (e.g. power = current × voltage)

```json
{
  "virtualcurve": {
    "<metric_name>": {
      "aggregation": "<method>",
      "pattern": "<regex>",
      "custom": "<expression>",
      "unit": "<unit>",
      "warning": "<threshold>",
      "critical": "<threshold>",
      "formatting": { ... }
    }
  }
}
```

#### Available keys in `virtualcurve`

| Key           | Type   | Required | Description                                                                                                                    |
|---------------|--------|----------|--------------------------------------------------------------------------------------------------------------------------------|
| `aggregation` | string | Yes      | Aggregation method for the selected values                                                                                     |
| `pattern`     | string | No       | Regular expression to filter source metrics from `selection`. If absent, all metrics are used                                  |
| `custom`      | string | No       | Arithmetic expression applied to the aggregated value                                                                          |
| `unit`        | string | No       | Unit of the resulting metric (e.g. `A`, `W`, `°C`)                                                                             |
| `warning`     | string | No       | Warning threshold (Nagios format: simple value or range `min:max`)                                                             |
| `critical`    | string | No       | Critical threshold (Nagios format: simple value or range `min:max`)                                                            |
| `formatting`  | object | No       | Customize the output message (see [Formatting](#formatting) section)                                                           |

#### Possible values for `aggregation`

| Value | Description                                 |
|-------|---------------------------------------------|
| `avg` | Average of the selected values              |
| `sum` | Sum of the selected values                  |
| `min` | Minimum value among the selected values     |
| `max` | Maximum value among the selected values     |

### Section `command` (global formatting)

The `command` section allows you to modify the display of all metrics globally, and to override this behavior for a specific metric via `override`.

```json
{
  "selection": { ... },
  "command": {
    "formatting": {
      "printf_msg": "My Metric '%s' value is %.2f",
      "printf_var": "$self->{result_values}->{instance}, $self->{result_values}->{value}"
    },
    "override": {
      "metric3": {
        "formatting": {
          "printf_msg": "Override '%s' value is %.2f",
          "printf_var": "$self->{result_values}->{instance}, $self->{result_values}->{value}"
        }
      }
    }
  }
}
```

### Formatting output messages {#formatting}

The `formatting` object (available in `selection`, `virtualcurve` or `command`) allows you to customize the text displayed for each metric.

| Key          | Description                                                                     |
|--------------|---------------------------------------------------------------------------------|
| `printf_msg` | Message format, Perl `printf` syntax (e.g. `"Metric '%s' value is %.2f"`)       |
| `printf_var` | Perl variables to inject into the message                                       |

Available variables in `printf_var`:

| Variable                             | Content                      |
|--------------------------------------|------------------------------|
| `$self->{result_values}->{instance}` | Name of the metric           |
| `$self->{result_values}->{value}`    | Numeric value of the metric  |

### Examples of custom calculations (`custom`)

The `custom` attribute accepts a Perl arithmetic expression that will be applied to the aggregated value.
The current value is implicit — the expression starts directly with the operator.

#### Simple scaling

The device returns `1530` to represent `15.3 A`:

```json
{
  "selection": {
    "rawCurrent": { "address": 1045, "quantity": 1, "display": false }
  },
  "virtualcurve": {
    "currentA": {
      "aggregation": "avg",
      "custom": "/10",
      "unit": "A",
      "warning": "45",
      "critical": "50"
    }
  }
}
```

#### Power calculation (current × voltage)

From the raw current value, calculate the power in kW (assuming 230V voltage):

```json
{
  "selection": {
    "rawCurrent": { "address": 1045, "quantity": 1, "display": false }
  },
  "virtualcurve": {
    "currentA": {
      "aggregation": "avg",
      "custom": "/10",
      "unit": "A"
    },
    "powerKW": {
      "aggregation": "avg",
      "custom": "/10*230/1000",
      "unit": "kW",
      "formatting": {
        "printf_msg": "Power '%s' is %.3f kW",
        "printf_var": "$self->{result_values}->{instance}, $self->{result_values}->{value}"
      }
    }
  }
}
```

#### Aggregating multiple registers with `pattern`

Read 4 registers at once and calculate two averages over pairs:

```json
{
  "selection": {
    "phases": {
      "address": 1,
      "quantity": 4,
      "type": "holding",
      "display": false
    }
  },
  "virtualcurve": {
    "avg_phases_12": {
      "pattern": "phases\\.[01]$",
      "aggregation": "avg",
      "unit": "V"
    },
    "avg_phases_34": {
      "pattern": "phases\\.[23]$",
      "aggregation": "avg",
      "unit": "V"
    }
  }
}
```

> The metrics `phases.0`, `phases.1`, `phases.2`, `phases.3` are created automatically by `quantity: 4`. The `pattern` then filters which ones are included in each `virtualcurve`.

### Full example — Monitoring an electric generator [based on a community use case](https://thewatch.centreon.com/infra-monitoring-data-collection-6/monitor-an-electric-generator-with-modbus-376)

This file monitors the battery voltage, current and power of a generator. The device returns values ×10 (e.g. `230` = `23.0 V`).

```json
{
  "selection": {
    "batteryVoltageRaw": { "address": 1029, "quantity": 1, "type": "holding", "display": false },
    "currentPhase1Raw":  { "address": 1045, "quantity": 1, "type": "holding", "display": false },
    "currentPhase2Raw":  { "address": 1046, "quantity": 1, "type": "holding", "display": false },
    "currentPhase3Raw":  { "address": 1047, "quantity": 1, "type": "holding", "display": false }
  },
  "virtualcurve": {
    "batteryVoltage": {
      "aggregation": "avg",
      "custom": "/10",
      "unit": "V",
      "warning": "22",
      "critical": "20",
      "formatting": {
        "printf_msg": "Battery voltage '%s' is %.1f V",
        "printf_var": "$self->{result_values}->{instance}, $self->{result_values}->{value}"
      }
    },
    "currentPhase1": {
      "pattern": "currentPhase1Raw",
      "aggregation": "avg",
      "custom": "/10",
      "unit": "A",
      "warning": "45",
      "critical": "50"
    },
    "powerPhase1": {
      "pattern": "currentPhase1Raw",
      "aggregation": "avg",
      "custom": "/10*230/1000",
      "unit": "kW"
    },
    "currentPhase2": {
      "pattern": "currentPhase2Raw",
      "aggregation": "avg",
      "custom": "/10",
      "unit": "A",
      "warning": "45",
      "critical": "50"
    },
    "currentPhase3": {
      "pattern": "currentPhase3Raw",
      "aggregation": "avg",
      "custom": "/10",
      "unit": "A",
      "warning": "45",
      "critical": "50"
    }
  }
}
```

### Threshold format (`warning` / `critical`)

Thresholds follow the standard Nagios/Centreon syntax:

| Example   | Meaning                                              |
|-----------|------------------------------------------------------|
| `"50"`    | Alert if value > 50                                  |
| `"0:50"`  | Alert if value is outside `[0, 50]`                  |
| `"@0:50"` | Alert if value is **inside** `[0, 50]` (inverted)    |
| `"~:50"`  | Alert if value > 50 (no lower bound)                 |
| `"50:"`   | Alert if value < 50                                  |


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
/usr/lib/centreon/plugins/centreon_protocol_modbus.pl \
	--plugin=apps::protocols::modbus::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                             | Linked service template                          |
|:---------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------|
| numeric-value [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/apps/protocols/modbus/mode/numericvalue.pm)] | App-Protocol-Modbus-Numeric-Value-Generic-custom |

### Available options

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Numeric-Value-Generic" label="Numeric-Value-Generic">

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --rtu-port                                 | The serial port to open. Example: --rtu-port=/dev/ttyUSB0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --rtu-baudrate                             | A valid baud rate (default: 9600)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --rtu-databits                             | An integer from 5 to 8 (default: 8)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --rtu-parity                               | Either 'even', 'odd' or 'none' (default: none)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --rtu-stopbits                             | 1 or 2 (default: 1)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --tcp-host                                 | Host address                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --tcp-port                                 | Host port (default: 502)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeout                                  | Timeout in seconds (default: 10)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --config                                   | Specify the config (can be a file or a json string directly).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --filter-counters                          | Filter some counter (can be 'unique' or 'global') Useless, if you use selection/filter but not global/virtual curves                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --warning-*                                | Warning threshold (can be 'unique' or 'global') (Override config if set)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --critical-*                               | Critical threshold (can be 'unique' or 'global') (Override config if set)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_protocol_modbus.pl \
	--plugin=apps::protocols::modbus::plugin \
	--mode=numeric-value \
	--help
```
