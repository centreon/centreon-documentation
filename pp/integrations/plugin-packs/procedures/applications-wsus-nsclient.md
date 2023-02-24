---
id: applications-wsus-nsclient
title: Microsoft WSUS Server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Microsoft WSUS** brings 2 different host templates:

* App-Wsus-NRPE-custom
* App-Wsus-NSClient-05-Restapi-custom

It brings the following service templates:

| Service Alias          | Service Template                                   | Service Description                                   | Default |
|:-----------------------|:---------------------------------------------------|:------------------------------------------------------|:--------|
| Computers-Status       | App-Wsus-Computers-Status-NRPE                     | Check computers status count                          | X       |
| Computers-Status       | App-Wsus-Computers-Status-NSClient05-Restapi       | Check computers status count                          | X       |
| Server-Statistics      | App-Wsus-Server-Statistics-NRPE                    | Check serveral WSUS server statistics                 | X       |
| Server-Statistics      | App-Wsus-Server-Statistics-NSClient05-Restapi      | Check serveral WSUS server statistics                 | X       |
| Synchronisation-Status | App-Wsus-Synchronisation-Status-NRPE               | Check updates synchronisation with WSUS server status | X       |
| Synchronisation-Status | App-Wsus-Synchronisation-Status-NSClient05-Restapi | Check updates synchronisation with WSUS server status | X       |
| Update-Status          | App-Wsus-Update-Status-NRPE                        | Check updates status                                  | X       |
| Update-Status          | App-Wsus-Update-Status-NSClient05-Restapi          | Check updates status                                  | X       |



> *Default* services templates are automatically linked to the host template(s).

### Collected metrics & status

<Tabs groupId="sync">
<TabItem value="Computers-Status" label="Computers-Status">

| Metric Name        | Unit  |
|:-------------------|:------|
| needing-updates    |       |
| not-contacted      |       |
| unassigned         |       |
| up-to-date         |       |
| with-update-errors |       |

</TabItem>
<TabItem value="Server-Statistics" label="Server-Statistics">

| Metric Name          | Unit  |
|:---------------------|:------|
| approved-updates     |       |
| computer-groups      |       |
| computers            |       |
| declined-updates     |       |
| expired-updates      |       |
| not-approved-updates |       |
| stale-updates        |       |
| updates              |       |

</TabItem>
<TabItem value="Synchronisation-Status" label="Synchronisation-Status">

| Metric Name                   | Unit  |
|:------------------------------|:------|
| synchronisation-progress      |       |
| synchronisation-status        |       |
| last-synchronisation-duration |       |
| last-synchronisation-status   |       |

</TabItem>
<TabItem value="Update-Status" label="Update-Status">

| Metric Name         | Unit  |
|:--------------------|:------|
| needed-by-computers |       |
| needing-files       |       |
| up-to-date          |       |
| with-client-errors  |       |
| with-server-errors  |       |

</TabItem>
</Tabs>

## Prerequisites

### Centreon NSClient++

To monitor an *Windows Servers* through NSClient++ API, install the Centreon packaged version
of the NSClient++ agent. Please follow our [official documentation](../getting-started/how-to-guides/centreon-nsclient-tutorial.md)
and make sure that the **Webserver / RESTApi** configuration is correct.

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Plugin Packs > Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-wsus-nsclient
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-wsus-nsclient
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-wsus-nsclient
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Microsoft WSUS** Pack through
the **Configuration > Plugin Packs > Manager** menu.

### Plugin

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-nrpe3-plugin
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-nrpe3-plugin
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
* Apply the **App-Wsus-NRPE-custom** template to the host
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory      | Macro                     | Description                                                                            |
|:---------------|:--------------------------|:---------------------------------------------------------------------------------------|
|                | NRPECLIENT                | (Default: 'check_centreon_nrpe')                                                       |
|                | NRPEEXTRAOPTIONS          | -u -m 8192                                                                             |
|                | NRPEPORT                  | (Default: '5666')                                                                      |
|                | NRPETIMEOUT               | (Default: '55')                                                                        |
|                | NSCPRESTAPIEXTRAOPTIONS   | Any extra option you may want to add to every command line (eg. a --verbose flag)      |
|                | NSCPRESTAPILEGACYPASSWORD |                                                                                        |
|                | NSCPRESTAPIPORT           |                                                                                        |
|                | NSCPRESTAPIPROTO          |                                                                                        |
|                | WSUSPORT                  |                                                                                        |
|                | WSUSSERVER                |                                                                                        |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
    --plugin=apps::nsclient::restapi::plugin \
    --mode=query \
    --hostname=10.0.0.1 \
    --port='' \
    --proto='' \
    --legacy-password='' \
    --command=check_centreon_plugins \
    --arg='apps::microsoft::wsus::local::plugin' \
    --arg='updates-status' \
    --arg=' \
    --wsus-server="" \
    --wsus-port="" \
    --filter-counters="" \
    --warning-with-client-errors="" \
    --critical-with-client-errors="" \
    --warning-with-server-errors="" \
    --critical-with-server-errors="" \
    --warning-needing-files="" \
    --critical-needing-files="" \
    --warning-needed-by-computers="" \
    --critical-needed-by-computers="" \
    --warning-up-to-date="" \
    --critical-up-to-date="" \
    --verbose'\
    
```

The expected command output is shown below:

```bash
OK: With Client Errors: 61 With Server Errors: 3 Needing Files: 70 Needed By Computers: 28 Up-to-date: %s | 
```

### Available modes

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
    --plugin=apps::nsclient::restapi::plugin \
    --list-mode
```

The plugin brings the following modes:

* computers-status
* server-statistics
* synchronisation-status
* updates-status

### Available options

#### Global optionsAll global options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Option type |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --mode                                     |     Choose a mode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Global      |
| --dyn-mode                                 |     Specify a mode with the path (separated by '::').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global      |
| --list-mode                                |     List available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --mode-version                             |     Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global      |
| --version                                  |     Display plugin version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --pass-manager                             |     Use a password manager.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Global      |
| --verbose                                  |     Display long output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --debug                                    |     Display also debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --filter-perfdata                          |     Filter perfdata that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --filter-perfdata-adv                      |     Advanced perfdata filter.  Eg: --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Output      |
| --explode-perfdata-max                     |     Put max perfdata (if it exist) in a specific perfdata (without values: same with '\_max' suffix) (Multiple options)                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output      |
| --change-perfdata --extend-perfdata        |     Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output      |
| --extend-perfdata-group                    |     Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output      |
| --change-short-output --change-long-output |     Change short/long output display: --change-short-output=pattern~replace~modifier                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --change-exit                              |     Change exit code: --change-exit=unknown=critical                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --range-perfdata                           |     Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output      |
| --filter-uom                               |     Filter UOM that match the regexp.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Output      |
| --opt-exit                                 |     Optional exit code for an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc) (Default: unknown).                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-ignore-perfdata                   |     Remove perfdata from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --output-ignore-label                      |     Remove label status from output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Output      |
| --output-xml                               |     Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output      |
| --output-json                              |     Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output      |
| --output-openmetrics                       |     Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output      |
| --output-file                              |     Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output      |
| --disco-format                             |     Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output      |
| --disco-show                               |     Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output      |
| --float-precision                          |     Set the float precision for thresholds (Default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |
| --source-encoding                          |     Set encoding of monitoring sources (In some case. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output      |


#### Modes options

All  modes specific options are listed here:

<Tabs groupId="sync">
<TabItem value="Computers-Status" label="Computers-Status">

| Option                   | Description                                                                                                                                | Option type |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --timeout                |     Set timeout time for command execution (Default: 30 sec)                                                                               | Mode        |
| --no-ps                  |     Don't encode powershell. To be used with --command and 'type'command.                                                                  | Mode        |
| --command                |     Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.   | Mode        |
| --command-path           |     Command path (Default: none).                                                                                                          | Mode        |
| --command-options        |     Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                | Mode        |
| --ps-display             |     Display powershell script.                                                                                                             | Mode        |
| --ps-exec-only           |     Print powershell output.                                                                                                               | Mode        |
| --wsus-server            |     Set WSUS hostname/IP.                                                                                                                  | Mode        |
| --wsus-port              |     Set WSUS port.                                                                                                                         | Mode        |
| --not-updated-since      |     Time in days to count computers not updated since (Default: 30).                                                                       | Mode        |
| --use-ssl                |     Set if WSUS use ssl.                                                                                                                   | Mode        |
| --warning-* --critical-* |     Thresholds. Can be: 'needing-updates', 'with-update-errors', 'up-to-date', 'not-contacted', 'unassigned'                               | Mode        |
| --filter-counters        |     Only display some counters (regexp can be used). Example: --filter-counters='errors'                                                   | Mode        |

</TabItem>
<TabItem value="Server-Statistics" label="Server-Statistics">

| Option            | Description                                                                                                                                                                      | Option type |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --timeout         |     Set timeout time for command execution (Default: 30 sec)                                                                                                                     | Mode        |
| --no-ps           |     Don't encode powershell. To be used with --command and 'type'command.                                                                                                        | Mode        |
| --command         |     Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.                                         | Mode        |
| --command-path    |     Command path (Default: none).                                                                                                                                                | Mode        |
| --command-options |     Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                      | Mode        |
| --ps-display      |     Display powershell script.                                                                                                                                                   | Mode        |
| --ps-exec-only    |     Print powershell output.                                                                                                                                                     | Mode        |
| --wsus-server     |     Set WSUS hostname/IP (Dafault: localhost).                                                                                                                                   | Mode        |
| --wsus-port       |     Set WSUS port (Default: 8530).                                                                                                                                               | Mode        |
| --use-ssl         |     Set if WSUS use ssl.                                                                                                                                                         | Mode        |
| --warning-*       |     Warning thresholds. Can be: 'computers', 'computer-groups', 'updates', 'approved-updates', 'declined-updates', 'not-approved-updates', 'stale-updates', 'expired-updates'    | Mode        |
| --critical-*      |     Critical thresholds. Can be: 'computers', 'computer-groups', 'updates', 'approved-updates', 'declined-updates', 'not-approved-updates', 'stale-updates', 'expired-updates'   | Mode        |
| --filter-counters |     Only display some counters (regexp can be used). Example: --filter-counters='not'                                                                                            | Mode        |

</TabItem>
<TabItem value="Synchronisation-Status" label="Synchronisation-Status">

| Option                                 | Description                                                                                                                                        | Option type |
|:---------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --timeout                              |     Set timeout time for command execution (Default: 30 sec)                                                                                       | Mode        |
| --no-ps                                |     Don't encode powershell. To be used with --command and 'type'command.                                                                          | Mode        |
| --command                              |     Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.           | Mode        |
| --command-path                         |     Command path (Default: none).                                                                                                                  | Mode        |
| --command-options                      |     Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                        | Mode        |
| --ps-display                           |     Display powershell script.                                                                                                                     | Mode        |
| --ps-exec-only                         |     Print powershell output.                                                                                                                       | Mode        |
| --wsus-server                          |     Set WSUS hostname/IP (Dafault: localhost).                                                                                                     | Mode        |
| --wsus-port                            |     Set WSUS port (Default: 8530).                                                                                                                 | Mode        |
| --use-ssl                              |     Set if WSUS use ssl.                                                                                                                           | Mode        |
| --warning-synchronisation-status       |     Set warning threshold for current synchronisation status (Default: '') Can used special variables like: %{status}.                             | Mode        |
| --critical-synchronisation-status      |     Set critical threshold for current synchronisation status (Default: ''). Can used special variables like: %{status}.                           | Mode        |
| --warning-last-synchronisation-status  |     Set warning threshold for current synchronisation status (Default: '') Can used special variables like: %{status}.                             | Mode        |
| --critical-last-synchronisation-status |     Set critical threshold for current synchronisation status (Default: '%{status} !~ /Succeeded/'). Can used special variables like: %{status}.   | Mode        |
| --warning-* --critical-*               |     Thresholds. Can be: 'last-synchronisation-duration' (s), 'synchronisation-progress' (%).                                                       | Mode        |
| --filter-counters                      |     Only display some counters (regexp can be used). Example: --filter-counters='status'                                                           | Mode        |

</TabItem>
<TabItem value="Update-Status" label="Update-Status">

| Option            | Description                                                                                                                                | Option type |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------|:------------|
| --timeout         |     Set timeout time for command execution (Default: 30 sec)                                                                               | Mode        |
| --no-ps           |     Don't encode powershell. To be used with --command and 'type'command.                                                                  | Mode        |
| --command         |     Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option.   | Mode        |
| --command-path    |     Command path (Default: none).                                                                                                          | Mode        |
| --command-options |     Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                | Mode        |
| --ps-display      |     Display powershell script.                                                                                                             | Mode        |
| --ps-exec-only    |     Print powershell output.                                                                                                               | Mode        |
| --wsus-server     |     Set WSUS hostname/IP (Dafault: localhost).                                                                                             | Mode        |
| --wsus-port       |     Set WSUS port (Default: 8530).                                                                                                         | Mode        |
| --use-ssl         |     Set if WSUS use ssl.                                                                                                                   | Mode        |
| --warning-*       |     Warning thresholds. Can be: 'with-client-errors', 'with-server-errors', 'needing-files', 'needed-by-computers', 'up-to-date'.          | Mode        |
| --critical-*      |     Critical thresholds. Can be: 'with-client-errors', 'with-server-errors', 'needing-files', 'needed-by-computers', 'up-to-date'.         | Mode        |
| --filter-counters |     Only display some counters (regexp can be used). Example: --filter-counters='errors'                                                   | Mode        |

</TabItem>
</Tabs>


All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
    --plugin=apps::nsclient::restapi::plugin \
    --mode=query \
    --help
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.