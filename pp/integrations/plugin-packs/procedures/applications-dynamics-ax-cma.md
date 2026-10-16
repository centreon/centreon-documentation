---
id: applications-dynamics-ax-cma
title: Dynamics AX CMA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CMAprerequisites from './_cma-prerequisites.mdx';

The connector allows you to monitor:
* Windows Server OS from 2003 SP2 version
* Windows workstations from the XP version.

## Pack assets

### Templates

The Monitoring Connector **Dynamics AX CMA** brings a host template:

* **App-Dynamics-AX-CMA-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Dynamics-AX-CMA-custom" label="App-Dynamics-AX-CMA-custom">

| Service Alias               | Service Template                                       | Service Description                                       |
|:----------------------------|:-------------------------------------------------------|:----------------------------------------------------------|
| RIS-Import-Input            | App-Dynamics-AX-RIS-Import-Input-CMA-custom            | Check whether files must be imported                               | 
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

2. Whatever the license type (*online* or *offline*), install the **Dynamics AX CMA** connector through
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

Checks files in a directory tree, applies filters, and evaluates file metadata (size, timestamps, version, line count, etc.) for monitoring and alerting.

| Macro          | Description                                                                              | Mandatory | Allowed values                                                                                                                                                                         | Default value                                                  | Examples                             |
|:---------------|:-----------------------------------------------------------------------------------------|:---------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|--------------------------------------|
| PATHS          | Root directory to search files in.                                                       |     X     |                                                                                                                                                                                        | C:/RIS/Import/RIS General Ledger/Input                         | path/to/file                         |
| PATTERN        | Shell-style wildcards pattern to match filenames.<br/>* can be used as a wildcard        |           |                                                                                                                                                                                        | *.xlsx                                                         |                                      |
| MAXDEPTH       | Max recursion depth.                                                                     |           | - 0: top only <br/>- 1: include subdirs <br/>- -1: recursively include all subdirs                                                                                                     | 0                                                              |                                      |
| OUTPUTSYNTAX   | Output format string for the overall check result.                                       |           | Placeholders: `{status}`, `{count}`, `{total}`, `{list}`, `{warn_count}`, `{warn_list}`, `{crit_count}`, `{crit_list}`, `{problem_count}`, `{problem_list}`, `{ok_count}`, `{ok_list}` | `${status}: ${problem_count}/${count} files (${problem_list})` |                                      |     
| DETAILSYNTAX   | Format for each file detail inside `{list}`.                                             |           | `{path}`, `{filename}`, `{size}`, `{creation}`, `{access}`, `{written}`, `{version}`, `{line_count}`, `{extension}`.                                                                   | `${name}`                                                      |                                      |
| OKSYNTAX       | Output if all files are OK.                                                              |           |                                                                                                                                                                                        | `{status}: {ok_count} files found - {ok_list}`                 |                                      |
| FILTER         | Filter expression to select files for the check.                                         |           |                                                                                                                                                                                        | none                                                           | `size > 1M && extension == '.dll'`   |
| WARNINGSTATUS  | Filter expression: files matching are considered WARNING.                                |           |                                                                                                                                                                                        |                                                                |                                      |
| CRITICALSTATUS | Filter expression: files matching are considered CRITICAL.                               |           |                                                                                                                                                                                        |                                                                |                                      |
| WARNING        | WARNING status items count must be strictly higher than this value to trigger WARNING.   |           |                                                                                                                                                                                        | count > 5                                                      | 0 = at least 1 file to trigger alert |
| CRITICAL       | CRITICAL status items count must be strictly higher than this value to trigger CRITICAL. |           |                                                                                                                                                                                        | age > -1d or count > 20                                        | 0 = at least 1 file to trigger alert |
| VERBOSE        | Display detailed file info.                                                              |           |                                                                                                                                                                                        | false                                                          |                                      |
| TIMEOUT        | Set timeout for command execution                                                        |           |                                                                                                                                                                                        | 120                                                            |

### Filter expressions

> Applies for FILTER, WARNINGSTATUS, CRITICALSTATUS.

Filter syntax is similar to C/SQL:

- Numeric operators: `==`, `!=`, `>`, `<`, `>=`, `<=`
- Logical: `&&` (AND), `||` (OR)
- String equality: `==`, `!=` (note: single `=` is **not** valid)
- IN/NOT IN: `filename in ('myfile.txt')`, `version in ('1.0', '1.1')`

Supported file metadata labels:

- size           (in bytes, supports units: K, Ko, M, Mo, G, Go)
- line_count     (line counting in txt file)
- creation       (file age in seconds since creation, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- access         (file age in seconds since last access, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- written        (file age in seconds since last modification, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- filename       (name of the file, string comparison)
- path           (full file path, string comparison)
- extension      (file extension, e.g. '.dll')
- version        (for .exe/.dll files, string comparison)

You can also add this result list filter in WARNINGSTATUS and CRITICALSTATUS:

- count          number of items

### Warning and Critical Status

Files matching the WARNINGSTATUS/CRITICALSTATUS filters are considered WARNING/CRITICAL.
You can combine with WARNING/CRITICAL to require multiple matches before changing the global state.

### Examples

#### Filters

> Applies for FILTER, WARNINGSTATUS, CRITICALSTATUS.

- "size > 50M"                            # File larger than 50 MB
- "extension == '.bak'"                   # Backup files
- "size > 200m && extension == '.dll'"    # Large DLLs
- "count &lt;= 0"                            # No file found
- "filename in ('myfile.txt')"            # Specific file by name
- "filename == 'myfile.txt'"              # Specific file by name (alternative)

#### File age check

File age can be checked using 3 metadata labels, which can be mixed using logical operators :

- creation       (file age in seconds since creation, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- access         (file age in seconds since last access, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- written        (file age in seconds since last modification, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)

_“I want to trigger a CRITICAL alert if at least one file of my test directory has not be updated since 1 day or more, and WARNING alert if more than 12 hours and less than 1 day”_

```
PATH= C:/Users/User/Documents/test
PATTERN= *.*
MAXDEPTH= -1,
DETAILSYNTAX= {filename}: {size}
WARNINGSTATUS= written > 12h
CRITICALSTATUS= written > 1d
WARNING= 0
CRITICAL= 0
```

#### File size check

_"I want to trigger CRITICAL alert if at least 1 DLL in System32 (including subdirs without recursivity) size is >100M, and trigger WARNING alert if at least 2 DLLs size is >10M"_

The extension filter can be done using PATTERN or FILTER.

```
PATH= C:/Windows/System32
PATTERN= *.dll
MAXDEPTH= 1,
OUTPUTSYNTAX= {status}: {problem_count}/{count} DLLs have issues: {problem_list}
DETAILSYNTAX= {filename}: {size} {version}
FILTER= extension == '.dll'
WARNINGSTATUS= size > 10m
CRITICALSTATUS= size > 100m
WARNING= 1
CRITICAL= 0
```

Note:

- If "line_count" is used in any filter or output, line count calculation will be enabled (may impact performance).
- Paths, patterns, and filters are case-insensitive on Windows.
- Use `/` as the path separator instead of `\` (e.g., `C:/Users/...`). Backslashes require extra escaping and may cause errors.


#### File presence check

_"I want to trigger a CRITICAL alert if a specific file is not present"_

```
PATH= C:/Users/User/Documents/test
PATTERN= myfile.txt
MAXDEPTH= -1,
DETAILSYNTAX= {filename}: {size}
WARNINGSTATUS=
CRITICALSTATUS= count < 0
WARNING=
CRITICAL= 0
```

_"I want to trigger a CRITICAL alert if at least one file is present"_

```
PATH= C:/Users/User/Documents/test
PATTERN= myfile.txt
MAXDEPTH= -1,
DETAILSYNTAX= {filename}: {size}
WARNINGSTATUS=
CRITICALSTATUS= count > 0
WARNING=
CRITICAL= 0
```

</TabItem>
<TabItem value="RIS-Import-ProcessingErrors" label="RIS-Import-ProcessingErrors">

Checks files in a directory tree, applies filters, and evaluates file metadata (size, timestamps, version, line count, etc.) for monitoring and alerting.

| Macro          | Description                                                                              | Mandatory | Allowed values                                                                                                                                                                         | Default value                                                  | Examples                             |
|:---------------|:-----------------------------------------------------------------------------------------|:---------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------|--------------------------------------|
| PATHS          | Root directory to search files in.                                                       |     X     |                                                                                                                                                                                        | C:/RIS/Import/RIS General Ledger/Input                         | path/to/file                         |
| PATTERN        | Shell-style wildcards pattern to match filenames.<br/>* can be used as a wildcard        |           |                                                                                                                                                                                        | *.xlsx                                                         |                                      |
| MAXDEPTH       | Max recursion depth.                                                                     |           | - 0: top only <br/>- 1: include subdirs <br/>- -1: recursively include all subdirs                                                                                                     | 0                                                              |                                      |
| OUTPUTSYNTAX   | Output format string for the overall check result.                                       |           | Placeholders: `{status}`, `{count}`, `{total}`, `{list}`, `{warn_count}`, `{warn_list}`, `{crit_count}`, `{crit_list}`, `{problem_count}`, `{problem_list}`, `{ok_count}`, `{ok_list}` | `${status}: ${problem_count}/${count} files (${problem_list})` |                                      |     
| DETAILSYNTAX   | Format for each file detail inside `{list}`.                                             |           | `{path}`, `{filename}`, `{size}`, `{creation}`, `{access}`, `{written}`, `{version}`, `{line_count}`, `{extension}`.                                                                   | `${name}`                                                      |                                      |
| OKSYNTAX       | Output if all files are OK.                                                              |           |                                                                                                                                                                                        | `{status}: {ok_count} files found - {ok_list}`                 |                                      |
| FILTER         | Filter expression to select files for the check.                                         |           |                                                                                                                                                                                        | none                                                           | `size > 1M && extension == '.dll'`   |
| WARNINGSTATUS  | Filter expression: files matching are considered WARNING.                                |           |                                                                                                                                                                                        |                                                                |                                      |
| CRITICALSTATUS | Filter expression: files matching are considered CRITICAL.                               |           |                                                                                                                                                                                        |                                                                |                                      |
| WARNING        | WARNING status items count must be strictly higher than this value to trigger WARNING.   |           |                                                                                                                                                                                        | count > 5                                                      | 0 = at least 1 file to trigger alert |
| CRITICAL       | CRITICAL status items count must be strictly higher than this value to trigger CRITICAL. |           |                                                                                                                                                                                        | age > -1d or count > 20                                        | 0 = at least 1 file to trigger alert |
| VERBOSE        | Display detailed file info.                                                              |           |                                                                                                                                                                                        | false                                                          |                                      |
| TIMEOUT        | Set timeout for command execution                                                        |           |                                                                                                                                                                                        | 120                                                            |

### Filter expressions

> Applies for FILTER, WARNINGSTATUS, CRITICALSTATUS.

Filter syntax is similar to C/SQL:

- Numeric operators: `==`, `!=`, `>`, `<`, `>=`, `<=`
- Logical: `&&` (AND), `||` (OR)
- String equality: `==`, `!=` (note: single `=` is **not** valid)
- IN/NOT IN: `filename in ('myfile.txt')`, `version in ('1.0', '1.1')`

Supported file metadata labels:

- size           (in bytes, supports units: K, Ko, M, Mo, G, Go)
- line_count     (line counting in txt file)
- creation       (file age in seconds since creation, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- access         (file age in seconds since last access, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- written        (file age in seconds since last modification, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- filename       (name of the file, string comparison)
- path           (full file path, string comparison)
- extension      (file extension, e.g. '.dll')
- version        (for .exe/.dll files, string comparison)

You can also add this result list filter in WARNINGSTATUS and CRITICALSTATUS:

- count          number of items

### Warning and Critical Status

Files matching the WARNINGSTATUS/CRITICALSTATUS filters are considered WARNING/CRITICAL.
You can combine with WARNING/CRITICAL to require multiple matches before changing the global state.

### Examples

#### Filters

> Applies for FILTER, WARNINGSTATUS, CRITICALSTATUS.

- "size > 50M"                            # File larger than 50 MB
- "extension == '.bak'"                   # Backup files
- "size > 200m && extension == '.dll'"    # Large DLLs
- "count &lt;= 0"                            # No file found
- "filename in ('myfile.txt')"            # Specific file by name
- "filename == 'myfile.txt'"              # Specific file by name (alternative)

#### File age check

File age can be checked using 3 metadata labels, which can be mixed using logical operators :

- creation       (file age in seconds since creation, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- access         (file age in seconds since last access, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)
- written        (file age in seconds since last modification, supports units : w, d, h, m, s) no unit = s. Unit can’t be composed (ie : 1d3h)

_"I want to trigger a CRITICAL alert if at least one file of my test directory has not be updated since 1 day or more, and WARNING alert if more than 12 hours and less than 1 day"_

```
PATH= C:/Users/User/Documents/test
PATTERN= *.*
MAXDEPTH= -1,
DETAILSYNTAX= {filename}: {size}
WARNINGSTATUS= written > 12h
CRITICALSTATUS= written > 1d
WARNING= 0
CRITICAL= 0
```

#### File size check

_"I want to trigger a CRITICAL alert if at least 1 DLL in System32 (including subdirs without recursivity) size is >100M, and trigger a WARNING alert if at least 2 DLLs' size is >10M”_

The extension filter can be done using PATTERN or FILTER.

```
PATH= C:/Windows/System32
PATTERN= *.dll
MAXDEPTH= 1,
OUTPUTSYNTAX= {status}: {problem_count}/{count} DLLs have issues: {problem_list}
DETAILSYNTAX= {filename}: {size} {version}
FILTER= extension == '.dll'
WARNINGSTATUS= size > 10m
CRITICALSTATUS= size > 100m
WARNING= 1
CRITICAL= 0
```

Note:

- If "line_count" is used in any filter or output, line count calculation will be enabled (may impact performance).
- Paths, patterns, and filters are case-insensitive on Windows.
- Use `/` as the path separator instead of `\` (e.g., `C:/Users/...`). Backslashes require extra escaping and may cause errors.


#### File presence check

_“I want to trigger a CRITICAL alert if file is not present“_

```
PATH= C:/Users/User/Documents/test
PATTERN= myfile.txt
MAXDEPTH= -1,
DETAILSYNTAX= {filename}: {size}
WARNINGSTATUS=
CRITICALSTATUS= count < 0
WARNING=
CRITICAL= 0
```

_"I want to trigger a CRITICAL alert if at least one file is present"_

```
PATH= C:/Users/User/Documents/test
PATTERN= myfile.txt
MAXDEPTH= -1,
DETAILSYNTAX= {filename}: {size}
WARNINGSTATUS=
CRITICALSTATUS= count > 0
WARNING=
CRITICAL= 0
```

</TabItem>
<TabItem value="Service-RIS" label="Service-RIS">

| Macro                | Description                                                                                                                               | Default value                  | Mandatory |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------|:---------:|
| STARTAUTO            | Only services that start automatically will be counted                                                                                    | false                          |           |
| FILTERNAME           | Regex to filter service names                                                                                                             | RecurringIntegrationsScheduler |           |
| EXCLUDENAME          | Regex to exclude service names                                                                                                            |                                |           |
| FILTERDISPLAY        | Regex to filter service display names as they appear in service manager                                                                   |                                |           |
| EXCLUDEDISPLAY       | Regex to exclude service display names                                                                                                    |                                |           |
| SERVICE_TYPE         | Regex to filter by service type                                                                                                           | service                        |           |
| START_TYPE           | Regex to filter by service startup type. Can be auto, boot, system, demand, disabledn or empty to match all modes.                        |                                |           |
| DELAYED              | Regex to filter by delayed startup services. Can be true, false or empty to match all services.                                           |                                |           |
| WARNINGSTATE         | Regex to match service state that will trigger a warning. States are (stopped, starting, stopping, running, continuing, pausing, paused)  | none                           |           |
| CRITICALSTATE        | Regex to match service state that will trigger a critical. States are (stopped, starting, stopping, running, continuing, pausing, paused) | not state_is_ok()              |           |
| WARNINGTOTALRUNNING  | Running service number threshold below which the service will pass in the warning state                                                   |                                |           |
| CRITICALTOTALRUNNING | Running service number threshold below which the service will pass in the critical state                                                  |                                |           |
| WARNINGTOTALPAUSED   | Number of services in the pause state above which the service goes into the warning state                                                 |                                |           |
| CRITICALTOTALPAUSED  | Number of services in the pause state above which the service goes into the critical state                                                |                                |           |
| WARNINGTOTALSTOPPED  | Number of services in a stopped state above which the service takes on a warning status                                                   |                                |           |
| CRITICALTOTALSTOPPED | Number of services in a stopped state above which the service takes on a critical status                                                  |                                |           |
| TIMEOUT              | Set timeout for command execution                                                                                                         | 120                            |           |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

### Troubleshooting

Please find the troubleshooting documentation for the API-based plugins in
this [chapter](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks) if you cannot find the solution to your issue below.