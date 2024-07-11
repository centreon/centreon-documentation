---
id: operatingsystems-windows-telegraf-agent
title: Windows Telegraf Agent
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Telegraf is an observability tool implementing the OpenTelemetry protocol.

> This monitoring connector is a **proof of concept**, Centreon does not recommend to use it in production.
> It has some limitations such as:
> - the need to restart the Telegraf service whenever the configuration is changed.
> - the impossibility to display the informational output message of the host or service (due to
> limitations of the OpenTelemetry protocol).

You may refer to [this page](../getting-started/how-to-guides/telegraf.md) for more information about Centreon's integration with Telegraf.

## Pack assets

### Templates

The Monitoring Connector **Windows Telegraf Agent** brings a host template:

* **OS-Windows-Telegraf-Agent-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="OS-Windows-Telegraf-Agent-custom" label="OS-Windows-Telegraf-Agent-custom">

| Service Alias | Service Template                                   | Service Description                                                                                                                                |
|:--------------|:---------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|
| Ntp            | OS-Windows-Telegraf-Ntp-Agent-custom            | Check the synchronization with a NTP server. |
| Pending-Reboot | OS-Windows-Telegraf-Pending-Reboot-Agent-custom | Check if Windows needs rebooting.    |
| Sessions       | OS-Windows-Telegraf-Sessions-Agent-custom       | Check the number of active sessions.          |
| Updates        | OS-Windows-Telegraf-Updates-Agent-custom        | Check if there are pending updates.    |

> The services listed above are created automatically when the **OS-Windows-Telegraf-Agent-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias         | Service Template                                             | Service Description                          |
|:----------------------|:-------------------------------------------------------------|:---------------------------------------------|
| Certificates          | OS-Windows-Telegraf-Certificates-Agent-custom | Check the local certificates.  |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

</TabItem>
</Tabs>

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Metric name     | Unit  |
|:--------------- |:----- |
| certificates.detected.count          | count |
| certificate#certificate.expires.days | d     |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Metric name | Unit |
|:----------- |:---- |
| offset      | s    |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

No metrics for this service.

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Metric name                         | Unit  |
|:------------------------------------|:------|
| sessions.created.total.count        | count |
| sessions.disconnected.total.count   | count |
| sessions.reconnected.total.count    | count |
| sessions.active.current.count       | count |
| sessions.disconnected.current.count | count |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Updates" label="Updates">

| Metric name                   | Unit  |
|:------------------------------|:------|
| windows.pending.updates.count | count |

</TabItem>
</Tabs>

## Prerequisites

### Network flow

Two TCP flows must be open from the host to the poller.

| Source | Destination    | Protocole | Port | Purpose |
| ------ | -------------- | --------- | ---- | --- |
| Hôte supervisé | Collecteur  | TCP       | 1443 | Access to the configuration of the Telegraf agent. |
| Hôte supervisé | Collecteur  | TCP       | 4317 | OpenTelemetry data flow. |

### System prerequisites on the poller

> To be able to use the Telegraf agent, you must use a poller with at least version `24.04.2` of `centreon-engine`. The Telegraf agent will configure itself via a HTTPS request sent to Centreon Engine.

1. For this to work, you must first get a valid certificate or generate a self-signed one on the poller as detailed below.

> In the command below, replace `${HOSTNAME}` with the poller's FQDN if they don't match.

```bash
openssl req -new -subj "/CN=${HOSTNAME}" -addext "subjectAltName = DNS:${HOSTNAME}" -newkey rsa:2048 -sha256 -days 365 -nodes -x509 -keyout /etc/centreon-engine/conf-server.key -out /etc/centreon-engine/conf-server.crt
chown centreon-engine: /etc/centreon-engine/conf-*
```

> The `-days 365` option limits the certificate's validity to one year. You may choose a longer or shorter duration according to your security/maintainance preferences.

2. Then provide Engine with the connection information it needs to give to the Telegraf agent so that it can send information to Engine.

```bash
host_ip=$(hostname -I)
cat > /etc/centreon-engine/otl_server.json <<EOF
{
    "otel_server": {
        "host": "0.0.0.0",
        "port": 4317,
        "encryption": true,
        "certificate_path": "/etc/centreon-engine/conf-server.crt",
        "key_path": "/etc/centreon-engine/conf-server.key"
    },
    "max_length_grpc_log": 0,
    "telegraf_conf_server": {
        "http_server" : {
            "port": 1443,
            "encryption": true,
            "certificate_path": "/etc/centreon-engine/conf-server.crt",
            "key_path": "/etc/centreon-engine/conf-server.key"
        },
        "engine_otel_endpoint": "${HOSTNAME}:4317",
        "check_interval":60
    }
}
EOF
chown centreon-engine: /etc/centreon-engine/otl_server.json
```

### Configuration of Centreon Engine

1. In the **Configuration > Pollers > Engine configuration** menu, on the **Data** tab, add an entry to the Broker modules to load and enter the `/usr/lib64/centreon-engine/libopentelemetry.so /etc/centreon-engine/otl_server.json` directive. Save the form.

2. Export the poller's configuration, selecting the **Restart** option.

### Telegraf agent

The official installation procedure is [here](https://docs.influxdata.com/telegraf/v1/install/?t=Windows) but you'll find the main steps below.

#### Installing the Telegraf agent

1. Download and unarchive the agent.

```powershell
wget https://dl.influxdata.com/telegraf/releases/telegraf-1.30.1_windows_amd64.zip -UseBasicParsing -OutFile telegraf-1.30.1_windows_amd64.zip
Expand-Archive .\telegraf-1.30.1_windows_amd64.zip -DestinationPath 'C:\Program Files\InfluxData\telegraf\'
```

2. Install the service:

```cmd
"C:\Program Files\InfluxData\telegraf\telegraf-1.30.3\telegraf.exe" --config https://<poller_ip_address>:1443/engine?host=<windows_server_name> --service install
```

#### Downloading centreon\_plugins.exe

Download the **centreon_plugins.exe** from the latest release available [here](https://github.com/centreon/centreon-nsclient-build/releases)
and copy it in the same place as the Telegraf agent (that should be `"C:\Program Files\InfluxData\telegraf\telegraf-1.30.3\"`)
if you followed the procedure to the letter. 

#### Import du certificat du poller

1. Open the Edge web browser.
2. Browse to `https://<poller_ip_address>:1443`.
3. Accept the certificate. `No host service found from get parameters` should be displayed.
5. Click on the certificate on the left of the URL bar.
6. Go to **Details**.
7. Export the certificate.
8. Open the file explorer.
9. Right-click on the certificate where you downloaded it.
10. Select **Install the certificate**.
11. Select **Local machine** then **Next**.
12. Specify you want to choose the certificate store manually.
13. Select **Trusted Root Certificate Authority** then **OK**.
14. Click **Next**, then  **Finish**.

## Installing the monitoring connector

### Pack

1. If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the connector displayed within the
**Configuration > Monitoring Connectors Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-operatingsystems-windows-telegraf-agent
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-windows-telegraf-agent
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-windows-telegraf-agent
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-windows-telegraf-agent
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Windows Telegraf Agent** connector through
the **Configuration > Monitoring Connectors Manager** menu.

3. Create the corresponding connector:

In the **Configuration > Commands > Connectors** menu, click **Add** and fill the following fields:

| Parameter                 | Value                                                                                                                                                                                                                           |
|---------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Connector Name         | Telegraf Agent                                                                                                                                                                                                                   |
| Connector Description | Telegraf Agent                                                                                                                                                                                                                   |
| Command Line         | `opentelemetry --processor=nagios_telegraf --extractor=attributes --host_path=resourceMetrics.scopeMetrics.metrics.dataPoints.attributes.host --service_path=resourceMetrics.scopeMetrics.metrics.dataPoints.attributes.service` |
| Used by command   | Select all the commands named like `OS-Windows-Telegraf-Agent-*`                                                                                                                                                                  |
| Connector Status     | Enabled                                                                                                                                                                                                                          |


### Plugin

This connector relies on an integration supported by Centreon Engine and does not need a plugin.

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **OS-Windows-Telegraf-Agent-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                     | Description                                                                                           | Default value     | Mandatory   |
|:--------------------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SYSTEMLANGUAGE  | Language installed on the Windows system (default: 'en') | en                                                     |             |
| TELEGRAFPLUGINS | Path where the centreon_plugins.exe plugin can be found. | `/Program\\ Files/InfluxData/telegraf/telegraf-1.30.3` |      X      |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

6. Restart the **Telegraf Data Collector Service** service on the Windows server. The host and services' statuses will update in the next minutes.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSUBJECT                | Filter certificate by subject (can be a regexp).                                                                                                            |                   |             |
| FILTERTHUMBPRINT             | Filter certificate by thumbprint (can be a regexp).                                                                                                         |                   |             |
| FILTERPATH                   | Filter certificate by path (can be a regexp).                                                                                                               |                   |             |
| THRESHOLDSUNIT               | Select the time unit for the expiration thresholds. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. | d                 |             |
| WARNINGCERTIFICATEEXPIRES    | Thresholds.                                                                                                                                                 | 60:               |             |
| CRITICALCERTIFICATEEXPIRES   | Thresholds.                                                                                                                                                 | 30:               |             |
| WARNINGCERTIFICATESDETECTED  | Thresholds.                                                                                                                                                 |                   |             |
| CRITICALCERTIFICATESDETECTED | Thresholds.                                                                                                                                                 |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                    |                   |             |


</TabItem>
<TabItem value="Ntp" label="Ntp">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| NTPHOSTNAME    | Set the NTP server to use (if not set, we try to find it with w32tm command).                                                            |                   |             |
| NTPPORT        | Set the NTP port (default: 123).                                                                                                         |                   |             |
| WARNINGOFFSET  | Thresholds.                                                                                                                              | -1:1              |             |
| CRITICALOFFSET | Thresholds.                                                                                                                              | -2:2              |             |
| TIMEOUT        | Set timeout time for 'w32tm' command execution (default: 30 sec).                                                                        | 10                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Macro          | Description                                                                                                                                                                                                                                              | Default value               | Mandatory   |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{RebootPending} =~ /true/i'). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename} | `%{RebootPending} =~ /true/i` |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}                           |                               |             |
| TIMEOUT        | Set timeout time for command execution (default: 50 sec).                                                                                                                                                                                                | 10                            |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                                                      |                             |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro                        | Description                                                                                                                                      | Default value     | Mandatory   |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERSESSIONNAME                   | Filter session name (can be a regexp).                                                                                                               |                   |             |
| CONFIG                              | The command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file |                   |             |
| WARNINGSESSIONSACTIVE               | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSACTIVE              | Thresholds.                                                                                                                                          |                   |             |
| WARNINGSESSIONSCREATED              | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSCREATED             | Thresholds.                                                                                                                                          |                   |             |
| WARNINGSESSIONSDISCONNECTED         | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSDISCONNECTED        | Thresholds.                                                                                                                                          |                   |             |
| WARNINGSESSIONSRECONNECTED          | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSRECONNECTED         | Thresholds.                                                                                                                                          |                   |             |
| WARNINGSESSIONSDISCONNECTEDCURRENT  | Thresholds.                                                                                                                                          |                   |             |
| CRITICALSESSIONSDISCONNECTEDCURRENT | Thresholds.                                                                                                                                          |                   |             |
| TIMEOUT                             | Timeout in seconds for the command (default: 30).                                                                                                    | 10                |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                              |                   |             |

</TabItem>
<TabItem value="Updates" label="Updates">

| Macro                  | Description                                                                                         | Default value               | Mandatory   |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:----------------------------|:-----------:|
| WARNINGPENDINGUPDATES  | Thresholds                                                                                                                               | 1                  |             |
| CRITICALPENDINGUPDATES | Thresholds                                                                                                                               |                    |             |
| TIMEOUT                | Set timeout time for command execution (default: 50 sec).                                                                                | 30                 |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose --display-updates |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Test that the plugin is able to monitor your Windows server by using a command like this one (replace the sample values by yours):

```cmd
"\Program Files\InfluxData\telegraf\telegraf-1.30.3\centreon_plugins.exe" --plugin os::windows::local::plugin --mode sessions --language='fr' --timeout='30' --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: Sessions created: 0, disconnected: 0, reconnected : 0, current active : 1, current disconnected : 1 | 'sessions.created.total.count'=0;;;0; 'sessions.disconnected.total.count'=0;;;0; 'sessions.reconnected.total.count'=0;;;0; 'sessions.active.current.count'=1;;;0; 'sessions.disconnected.current.count'=1;;;0;
```

### Available modes

In most cases, a mode corresponds to a service template. The mode appears in the execution command for the connector.
In the Centreon interface, you don't need to specify a mode explicitly: its use is implied when you apply a service template.
However, you will need to specify the correct mode for the template if you want to test the execution command for the 
connector in your terminal.

The plugin brings the following modes:

| Mode                                                                                                                                | Linked service template                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|:------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| certificates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/certificates.pm)]    | OS-Windows-Telegraf-Certificates-Agent-custom   |
| pending-reboot [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/pendingreboot.pm)] | OS-Windows-Telegraf-Pending-Reboot-Agent-custom |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/sessions.pm)]            | OS-Windows-Telegraf-Sessions-Agent-custom       |
| time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/ntp.pm)]                     | OS-Windows-Telegraf-Ntp-Agent-custom            |
| updates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/os/windows/local/mode/updates.pm)]              | OS-Windows-Telegraf-Updates-Agent-custom        |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Certificates" label="Certificates">

| Option                           | Description                                                                                                                                                 |
|:---------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-thumbprint              | Filter certificate by thumbprint (can be a regexp).                                                                                                         |
| --filter-subject                 | Filter certificate by subject (can be a regexp).                                                                                                            |
| --filter-path                    | Filter certificate by path (can be a regexp).                                                                                                               |
| --unit                           | Select the time unit for the expiration thresholds. May be 's' for seconds,'m' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds. |
| --warning-certificates-detected  | Thresholds.                                                                                                                                                 |
| --critical-certificates-detected | Thresholds.                                                                                                                                         |
| --warning-certificate-expires    | Thresholds.                                                                                                                                                 |
| --critical-certificate-expires   | Thresholds.                                                                                                                                         |
| --no-ps                          | Don't encode powershell. To be used with --command and 'type' command.                                                                                      |
| --command                        | Command to get information (default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                      |
| --command-path                   | Command path (default: none).                                                                                                                               |
| --command-options                | Command options (default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                     |
| --ps-display                     | Display powershell script.                                                                                                                                  |
| --ps-exec-only                   | Print powershell output.                                                                                                                                    |

</TabItem>
<TabItem value="Ntp" label="Ntp">

| Option         | Description                                                                |
|:---------------|:---------------------------------------------------------------------------|
| --warning      | Warning threshold.                                                         |
| --critical     | Critical threshold.                                                        |
| --ntp-hostname | Set the ntp hostname (if not set, we try to find it with w32tm command).   |
| --ntp-port     | Set the ntp port (Default: 123).                                           |
| --timeout      | Set timeout time for 'w32tm' command execution (Default: 30 sec)           |

</TabItem>
<TabItem value="Pending-Reboot" label="Pending-Reboot">

| Option            | Description                                                                                                                                                                                                                                               |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --timeout         | Set timeout time for command execution (Default: 50 sec)                                                                                                                                                                                                  |
| --no-ps           | Don't encode powershell. To be used with --command and 'type' command.                                                                                                                                                                                    |
| --command         | Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!                                                                                                                    |
| --command-path    | Command path (Default: none).                                                                                                                                                                                                                             |
| --command-options | Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                                                                                                                                   |
| --ps-display      | Display powershell script.                                                                                                                                                                                                                                |
| --ps-exec-only    | Print powershell output.                                                                                                                                                                                                                                  |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: '%{RebootPending} =~ /true/i'). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}. |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %{RebootPending}, %{WindowsUpdate}, %{CBServicing}, %{CCMClientSDK}, %{PendFileRename}, %{PendComputerRename}.                           |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --config                 | command can be localized by using a configuration file. This parameter can be used to specify an alternative location for the configuration file                                                                                              |
| --language               | Set the language used in config file (default: 'en').                                                                                                                                                                                         |
| --command                | Command to get information (Default: 'qwinsta'). Can be changed if you have output in a file.                                                                                                                                                 |
| --command-path           | Command path (Default: none).                                                                                                                                                                                                                 |
| --command-options        | Command options (Default: '/COUNTER').                                                                                                                                                                                                        |
| --timeout                | Timeout in seconds for the command (Default: 30).                                                                                                                                                                                             |
| --filter-sessionname     | Filter session name (can be a regexp).                                                                                                                                                                                                        |
| --warning-* --critical-* | Thresholds. Can be: 'sessions-created', 'sessions-disconnected', 'sessions-reconnected', 'sessions-active', 'sessions-disconnected-current'.                                                                                                  |

</TabItem>
<TabItem value="Updates" label="Updates">

| Option                   | Description                                                                                                                              |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|
| --timeout                | Set timeout time for command execution (Default: 50 sec)                                                                                 |
| --no-ps                  | Don't encode powershell. To be used with --command and 'type'command.                                                                    |
| --command                | Command to get information (Default: 'powershell.exe'). Can be changed if you have output in a file. To be used with --no-ps option!!!   |
| --command-path           | Command path (Default: none).                                                                                                            |
| --command-options        | Command options (Default: '-InputFormat none -NoLogo -EncodedCommand').                                                                  |
| --ps-display             | Display powershell script.                                                                                                               |
| --ps-exec-only           | Print powershell output.                                                                                                                 |
| --filter-title           | Filter windows updates by title (can be a regexp).                                                                                       |
| --exclude-title          | Exclude windows updates by title (regexp can be used).                                                                                   |
| --display-updates        | Display updates in verbose output.                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'pending-updates'.                                                                                                   |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
"\Program Files\InfluxData\telegraf\telegraf-1.30.3\centreon_plugins.exe" --plugin=os::windows::local::plugin --mode=certificates --help
```
