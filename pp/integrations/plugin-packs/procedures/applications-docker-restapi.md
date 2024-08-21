---
id: applications-docker-restapi
title: Docker
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

### Templates

The Monitoring Connector **Docker** brings a host template:

* **App-Docker-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="App-Docker-Restapi-custom" label="App-Docker-Restapi-custom">

| Service Alias | Service Template                      | Service Description |
|:--------------|:--------------------------------------|:--------------------|
| Node-Status   | App-Docker-Node-Status-Restapi-custom | Check node status   |

> The services listed above are created automatically when the **App-Docker-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias   | Service Template                          | Service Description   | Discovery  |
|:----------------|:------------------------------------------|:----------------------|:----------:|
| Container-Usage | App-Docker-Container-Usage-Restapi-custom | Check container usage | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                     | Description |
|:------------------------------|:------------|
| App-Docker-Restapi-Containers |             |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Container-Usage" label="Container-Usage">

| Metric name                                              | Unit  |
|:---------------------------------------------------------|:------|
| *containers*#container-status                            | N/A   |
| *containers*#container.cpu.utilization.percentage        | %     |
| *containers*#container.memory.usage.bytes                | B     |
| *containers*#container.disk.io.read.usage.iops           | iops  |
| *containers*#container.disk.io.write.usage.iops          | iops  |
| *containers_traffic*#container.traffic.in.bitspersecond  | b/s   |
| *containers_traffic*#container.traffic.out.bitspersecond | b/s   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
<TabItem value="Node-Status" label="Node-Status">

| Metric name                          | Unit  |
|:-------------------------------------|:------|
| *node*#node.containers.running.count | count |
| *node*#node.containers.stopped.count | count |
| *node*#node.containers.paused.count  | count |
| *nodes*#node-status                  | N/A   |

> To obtain this new metric format, include **--use-new-perfdata** in the **EXTRAOPTIONS** service macro.

</TabItem>
</Tabs>

## Prerequisites

* This monitoring plugin requires at least a Docker API version >= 1.21 (https://docs.docker.com/engine/api/v1.30/).

### API connection

Open your favorite ssh client and configure your API to allow connections from the outside: 
* vi /lib/systemd/system/docker.service
* Modify the line starting with ExecStart as shown below: 

```bash 
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H=tcp://0.0.0.0:2375
```

* Save the changes
* Apply the changes made at the systemd level : ```systemctl daemon-reload```
* Restart the Docker engine: ```systemctl restart docker``` 
 

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
dnf install centreon-pack-applications-docker-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-docker-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-docker-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-docker-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Docker** connector through
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
dnf install centreon-plugin-Applications-Docker-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Docker-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-docker-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Docker-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **App-Docker-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro                    | Description                                                                                          | Default value     | Mandatory   |
|:-------------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DOCKERENGINEPORT         | Port used (default: 8080)                                                                            |                   |             |
| DOCKERENGINEEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Container-Usage" label="Container-Usage">

| Macro                   | Description                                                                                                                     | Default value     | Mandatory   |
|:------------------------|:--------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| CONTAINERID             | Exact container ID                                                                                                              |                   |             |
| CONTAINERNAME           | Exact container name (if multiple names: names separated by ':')                                                                |                   |             |
| FILTERNAME              | Filter by container name (can be a regexp)                                                                                      |                   |             |
| WARNINGCONTAINERSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{name}, %{state}, %{health}  |                   |             |
| CRITICALCONTAINERSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{name}, %{state}, %{health} |                   |             |
| WARNINGCPU              | Thresholds                                                                                                                      |                   |             |
| CRITICALCPU             | Thresholds                                                                                                                      |                   |             |
| WARNINGMEMORY           | Thresholds                                                                                                                      |                   |             |
| CRITICALMEMORY          | Thresholds                                                                                                                      |                   |             |
| WARNINGREADIOPS         | Thresholds                                                                                                                      |                   |             |
| CRITICALREADIOPS        | Thresholds                                                                                                                      |                   |             |
| WARNINGTRAFFICIN        | Thresholds                                                                                                                      |                   |             |
| CRITICALTRAFFICIN       | Thresholds                                                                                                                      |                   |             |
| WARNINGTRAFFICOUT       | Thresholds                                                                                                                      |                   |             |
| CRITICALTRAFFICOUT      | Thresholds                                                                                                                      |                   |             |
| WARNINGWRITEIOPS        | Thresholds                                                                                                                      |                   |             |
| CRITICALWRITEIOPS       | Thresholds                                                                                                                      |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                              | --verbose         |             |

</TabItem>
<TabItem value="Node-Status" label="Node-Status">

| Macro                     | Description                                                                                                                                                                                                              | Default value                                                  | Mandatory   |
|:--------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------|:-----------:|
| WARNINGCONTAINERSPAUSED   | Warning threshold                                                                                                                                                                                                        |                                                                |             |
| CRITICALCONTAINERSPAUSED  | Critical threshold                                                                                                                                                                                                       |                                                                |             |
| WARNINGCONTAINERSRUNNING  | Warning threshold                                                                                                                                                                                                        |                                                                |             |
| CRITICALCONTAINERSRUNNING | Critical threshold                                                                                                                                                                                                       |                                                                |             |
| WARNINGCONTAINERSSTOPPED  | Warning threshold                                                                                                                                                                                                        |                                                                |             |
| CRITICALCONTAINERSSTOPPED | Critical threshold                                                                                                                                                                                                       |                                                                |             |
| CRITICALNODESTATUS        | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ready/ \|\| %{manager\_status} !~ /reachable\|-/'). You can use the following variables: %{display}, %{status}, %{manager\_status} | %{status} !~ /ready/ \|\| %{manager\_status} !~ /reachable\|-/ |             |
| WARNINGNODESTATUS         | Define the conditions to match for the status to be WARNING (default: -) You can use the following variables: %{display}, %{status}, %{manager\_status}                                                                  |                                                                |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                                                                       | --verbose                                                      |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_docker_restapi.pl \
	--plugin=cloud::docker::restapi::plugin \
	--mode=container-usage \
	--hostname='10.0.0.1' \
	--port=''   \
	--container-id='' \
	--container-name='' \
	--filter-name='' \
	--warning-container-status='' \
	--critical-container-status='' \
	--warning-read-iops='' \
	--critical-read-iops='' \
	--warning-write-iops='' \
	--critical-write-iops='' \
	--warning-cpu='' \
	--critical-cpu='' \
	--warning-memory='' \
	--critical-memory='' \
	--warning-traffic-in='' \
	--critical-traffic-in='' \
	--warning-traffic-out='' \
	--critical-traffic-out='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All containers are ok All container traffics are ok | '*containers*#container.cpu.utilization.percentage'=%;;;0;100'*containers*#container.memory.usage.bytes'=B;;;;'*containers*#container.disk.io.read.usage.iops'=iops;;;0;'*containers*#container.disk.io.write.usage.iops'=iops;;;0;'*containers_traffic*#container.traffic.in.bitspersecond'=b/s;;;0;'*containers_traffic*#container.traffic.out.bitspersecond'=b/s;;;0;
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
/usr/lib/centreon/plugins/centreon_docker_restapi.pl \
	--plugin=cloud::docker::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                | Linked service template                   |
|:------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------|
| container-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/docker/restapi/mode/containerusage.pm)] | App-Docker-Container-Usage-Restapi-custom |
| list-containers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/docker/restapi/mode/listcontainers.pm)] | Used for service discovery                |
| node-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/docker/restapi/mode/nodestatus.pm)]         | App-Docker-Node-Status-Restapi-custom     |
| service-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/docker/restapi/mode/servicestatus.pm)]   | Not used in this Monitoring Connector     |

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
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
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
| --hostname                                 | IP Addr/FQDN of the docker node (can be multiple).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     | Port used (default: 8080)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --proto                                    | Specify https if needed (default: 'http')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --credentials                              | Specify this option if you access server-status page with authentication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --username                                 | Specify the username for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --password                                 | Specify the password for authentication (mandatory if --credentials is specified)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --basic                                    | Specify this option if you access server-status page over basicauthentication and don't want a '401 UNAUTHORIZED' error to be logged on your web server.  Specify this option if you access server-status page over hidden basic authentication or you'll get a '404 NOT FOUND' error.  (use with --credentials)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --timeout                                  | Threshold for HTTP timeout (default: 10)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --cert-file                                | Specify certificate to send to the web server                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --key-file                                 | Specify key to send to the web server                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --cacert-file                              | Specify root certificate to send to the web server                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --cert-pwd                                 | Specify certificate's password                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --cert-pkcs12                              | Specify type of certificate (PKCS12)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --api-display                              | Print json api.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --api-write-display                        | Print json api in a file (to be used with --api-display).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --api-read-file                            | Read API from file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --reload-cache-time                        | Time in seconds before reloading list containers cache (default: 300)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Container-Usage" label="Container-Usage">

| Option                      | Description                                                                                                                                                                                                                                   |
|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached                 | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server              | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute           | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db                  | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file             | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration             | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir             | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix          | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd      | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format          | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key             | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher          | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --container-id              | Exact container ID.                                                                                                                                                                                                                           |
| --container-name            | Exact container name (if multiple names: names separated by ':').                                                                                                                                                                             |
| --use-name                  | Use docker name for perfdata and display.                                                                                                                                                                                                     |
| --add-health                | Get container health status (call inspector endpoint).                                                                                                                                                                                        |
| --no-stats                  | Don't get container statistics.                                                                                                                                                                                                               |
| --filter-name               | Filter by container name (can be a regexp).                                                                                                                                                                                                   |
| --filter-counters           | Only display some counters (regexp can be used). Example: --filter-counters='^container-status$'                                                                                                                                              |
| --warning-container-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{name}, %{state}, %{health}.                                                                                                               |
| --critical-container-status | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{name}, %{state}, %{health}.                                                                                                              |
| --warning-* --critical-*    | Thresholds. Can be: 'read-iops', 'write-iops', 'traffic-in', 'traffic-out', 'cpu' (%), 'memory' (%).                                                                                                                                          |

</TabItem>
<TabItem value="Node-Status" label="Node-Status">

| Option                 | Description                                                                                                                                                                                                                 |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-node-status  | Define the conditions to match for the status to be WARNING (default: -) You can use the following variables: %{display}, %{status}, %{manager\_status}.                                                                    |
| --critical-node-status | Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ready/ \|\| %{manager\_status} !~ /reachable\|-/'). You can use the following variables: %{display}, %{status}, %{manager\_status}.   |
| --warning-*            | Warning threshold. Can be: 'containers-running', 'containers-paused', 'containers-stopped'.                                                                                                                                 |
| --critical-*           | Critical threshold. Can be: 'containers-running', 'containers-paused', 'containers-stopped'.,                                                                                                                               |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_docker_restapi.pl \
	--plugin=cloud::docker::restapi::plugin \
	--mode=container-usage \
	--help
```
