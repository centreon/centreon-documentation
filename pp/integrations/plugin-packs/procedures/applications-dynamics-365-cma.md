---
id: applications-dynamics-365-cma
title: Dynamics365 CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CMAprerequisites from './_cma-prerequisites.mdx';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Dynamics365 CMA** connector through the
**Configuration > Connectors > Monitoring Connectors** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Dynamics365 CMA** brings a host template:

* **App-Dynamics-365-CMA-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Dynamics-365-CMA-custom" label="App-Dynamics-365-CMA-custom">

| Service Alias | Service Template                       | Service Description               | Type of check |
|:--------------|:---------------------------------------|:----------------------------------|---------------|
| New-Orders    | App-Dynamics-365-New-Orders-CMA-custom | Check new orders presence and age | natif         |

> The services listed above are created automatically when the **App-Dynamics-365-CMA-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="New-Orders" label="New-Orders">

| Name           | Unit  |
|:---------------|:------|
| critical_count | count |
| warning_count  | count |
| ok_count       | count |

</TabItem>
</Tabs>

## Prerequisites

<CMAprerequisites />

## Installing the monitoring connector

### Pack

 The installation procedures for monitoring connectors are slightly different depending on [whether your license is offline or online](../getting-started/how-to-guides/connectors-licenses.md).

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-dynamics-365-cma
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-dynamics-365-cma
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-dynamics-365-cma
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Dynamics365 CMA** connector through
the **Configuration > Monitoring Connectors Manager** menu.

3. According to your version of Centreon, skip to the next step or create a connector on your central server.

<Tabs groupId="sync">
<TabItem value="OnPrem version 24.10.6 or newer" label="OnPrem version 24.10.6 or newer">

For this version, no configuration is needed. Move on to the [next step](#plugin).

</TabItem>
<TabItem value="OnPrem version older than 24.10.6" label="OnPrem version older than 24.10.6">

If your Centreon is in a version older than 24.10.6, you need to create the CMA connector on your central server:

1. Go to **Configuration > Commands > Connectors**.
2. Create a new connector with the following values:

| Parameter             | Value                                                                                                                                                                                         |
|-----------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connector Name        | Centreon Monitoring Agent                                                                                                                                                                     |
| Connector Description | Centreon Monitoring Agent                                                                                                                                                                     |
| Command Line          | `opentelemetry --processor=centreon_agent --extractor=attributes --host_path=resource_metrics.resource.attributes.host.name --service_path=resource_metrics.resource.attributes.service.name` |
| Used by command       | Select all the commands named like `App-Dynamics-365-CMA-*`                                                                                                                   |
| Connector Status      | Enabled                                                                                                                                                                                       |

</TabItem>
</Tabs>

### Plugin

This connector relies on an integration supported by Centreon Engine and does not need a plugin.

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Dynamics-365-CMA-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                | Description                                              | Default value                       | Mandatory |
|:---------------------|:---------------------------------------------------------|:------------------------------------|:---------:|
| SYSTEMLANGUAGE       | Language installed on the Dynamics365 system.            | en                                  |           |
| CENTREONAGENTPLUGINS | Path where the centreon_plugins.exe plugin can be found. | `C:/Program Files/Centreon/Plugins` |     X     |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Files-Generic" label="Files-Generic">

Checks files in a directory tree, applies filters, and evaluates file metadata (size, timestamps, version, line count, etc.) for monitoring and alerting.

| Macro          | Description                                                                              | Mandatory | Allowed values                                                                                                                                                                         | Default value                                                      | Examples                             |
|:---------------|:-----------------------------------------------------------------------------------------|:---------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------|--------------------------------------|
| PATHS          | Root directory to search files in.                                                       |     X     |                                                                                                                                                                                        | C:/D365/Interfaces/Input/SalesOrders/New/                          | path/to/file                         |
| PATTERN        | Shell-style wildcards pattern to match filenames.<br/>* can be used as a wildcard        |           |                                                                                                                                                                                        | *.xml                                                              |                                      |
| MAXDEPTH       | Max recursion depth.                                                                     |           | - 0: top only <br/>- 1: include subdirs <br/>- -1: recursively include all subdirs                                                                                                     | 0                                                                  |                                      |
| OUTPUTSYNTAX   | Output format string for the overall check result.                                       |           | Placeholders: `{status}`, `{count}`, `{total}`, `{list}`, `{warn_count}`, `{warn_list}`, `{crit_count}`, `{crit_list}`, `{problem_count}`, `{problem_list}`, `{ok_count}`, `{ok_list}` | `$\{status}: $\{problem_count}/$\{count} files ($\{problem_list})` |                                      |
| DETAILSYNTAX   | Format for each file detail inside `{list}`.                                             |           | `{path}`, `{filename}`, `{size}`, `{creation}`, `{access}`, `{written}`, `{version}`, `{line_count}`, `{extension}`.                                                                   | `$\{name}   `                                                      |                                      |
| OKSYNTAX       | Output if all files are OK.                                                              |           |                                                                                                                                                                                        | `{status}: All {count} files are ok`                               |                                      |
| FILTER         | Filter expression to select files for the check.                                         |           |                                                                                                                                                                                        | none                                                               | `size > 1M && extension == '.dll'`   |
| WARNINGSTATUS  | Filter expression: files matching are considered WARNING.                                |           |                                                                                                                                                                                        |                                                                    |                                      |
| CRITICALSTATUS | Filter expression: files matching are considered CRITICAL.                               |           |                                                                                                                                                                                        |                                                                    |                                      |
| WARNING        | WARNING status items count must be strictly higher than this value to trigger WARNING.   |           |                                                                                                                                                                                        | count > 20                                                         | 0 = at least 1 file to trigger alert |
| CRITICAL       | CRITICAL status items count must be strictly higher than this value to trigger CRITICAL. |           |                                                                                                                                                                                        | age > -1d or count > 100                                           | 0 = at least 1 file to trigger alert |
| VERBOSE        | Display detailed file info.                                                              |           |                                                                                                                                                                                        |                                                                    |                                      |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks) if you cannot find the solution to your issue below.