---
id: applications-dynamics-ax-cma
title: Dynamics AX CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CMAprerequisites from './_cma-prerequisites.mdx';

The connector allows you to monitor:
* Windows Server OS from 2003 SP2 version
* Windows workstations from the XP version

## Pack assets

### Templates

The Monitoring Connector **Dynamics AX CMA** brings a host template:

* **App-Dynamics-AX-CMA-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Dynamics-AX-CMA-custom" label="App-Dynamics-AX-CMA-custom">

| Service Alias               | Service Template                                       | Service Description                                       |
|:----------------------------|:-------------------------------------------------------|:----------------------------------------------------------|
| RIS-Import-Input            | App-Dynamics-AX-RIS-Import-Input-CMA-custom            | Check import files presence                               | 
| RIS-Import-ProcessingErrors | App-Dynamics-AX-RIS-Import-ProcessingErrors-CMA-custom | Check files importation failure                           |
| Service-RIS                 | App-Dynamics-AX-Service-RIS-CMA-custom                 | Check state of the RecurringIntegrationsScheduler service |

> The services listed above are created automatically when the **App-Dynamics-AX-CMA-custom** host template is used.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="RIS-Import-Input" label="RIS-Import-Input">

| Name  | Unit  |
|:------|:------|
| count | count |

</TabItem>
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

| Name  | Unit  |
|:------|:------|
| count | count |

</TabItem>
<TabItem value="Service-RIS" label="Service-RIS">

No metric for this service.

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
dnf install centreon-pack-applications-dynamics-ax-cma
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-dynamics-ax-cma
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-dynamics-ax-cma
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-dynamics-ax-cma
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Windows NSClient API** connector through
the **Configuration > Monitoring Connectors Manager** menu.

### Plugin

This connector relies on an integration supported by Centreon Engine and does not need a plugin.

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **App-Dynamics-AX-CMA-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
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
<TabItem value="RIS-Import-Input" label="RIS-Import-Input">

| Macro        | Description                                                                                                                    | Default value                                                    | Mandatory |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|:---------:|
| PATHS        | The path to search for files under                                                                                             | C:/RIS/Import/RIS General Ledger/Input                           |           |
| PATTERN      | The pattern of files to search for (works like a filter but is faster and can be combined with a filter)                       | *.xlsx                                                           |           |
| TOPSYNTAX    | The top level syntax string                                                                                                    | $\{status}: $\{problem_count}/$\{count} files ($\{problem_list}) |           |
| DETAILSYNTAX | Detail level syntax                                                                                                            | $\{name}                                                         |           |
| FILTER       | Filter which marks interesting items.                                                                                          | none                                                             |           |
| WARNING      | Filter which marks items which generates a warning state.                                                                      | count > 5                                                        |           |
| CRITICAL     | Filter which marks items which generates a critical state.                                                                     | age > -1d or count > 20                                          |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | "empty-state=ok" show-all                                        |           |

</TabItem>
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

| Macro        | Description                                                                                                                    | Default value                                                    | Mandatory |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|:---------:|
| PATHS        | The path to search for files under                                                                                             | C:/RIS/Import/RIS General Ledger/ProcessingErrors                |           |
| PATTERN      | The pattern of files to search for (works like a filter but is faster and can be combined with a filter)                       | *.xlsx                                                           |           |
| TOPSYNTAX    | The top level syntax string                                                                                                    | $\{status}: $\{problem_count}/$\{count} files ($\{problem_list}) |           |
| DETAILSYNTAX | Detail level syntax                                                                                                            | $\{name}                                                         |           |
| FILTER       | Filter which marks interesting items.                                                                                          | none                                                             |           |
| WARNING      | Filter which marks items which generates a warning state.                                                                      | count > 5                                                        |           |
| CRITICAL     | Filter which marks items which generates a critical state.                                                                     | age > -1d or count > 20                                          |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | "empty-state=ok" show-all                                        |           |

</TabItem>
<TabItem value="Service-RIS" label="Service-RIS">

| Macro        | Description                                                                                                                    | Default value                       | Mandatory |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|:---------:|
| EXCLUDE      | A list of services to ignore (mainly useful in combination with service=*)                                                     |                                     |           |
| OK           | Filter which marks items which generates an ok state                                                                           | state_is_ok()                       |           |
| SERVICE      | The service to check, set this to * to check all services                                                                      | RecurringIntegrationsScheduler      |           |
| TOPSYNTAX    | The top level syntax string                                                                                                    | $\{problem_list}                    |           |
| DETAILSYNTAX | Detail level syntax                                                                                                            | $\{name}=$\{state} ($\{start_type}) |           |
| FILTER       | Filter which marks interesting items.                                                                                          | none                                |           |
| WARNING      | Filter which marks items which generates a warning state.                                                                      | none                                |           |
| CRITICAL     | Filter which marks items which generates a critical state.                                                                     | not state_is_ok()                   |           |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | 'perf-config=none'                  |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks) if you cannot find the solution to your issue below.