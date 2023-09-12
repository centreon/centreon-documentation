---
id: hardware-storage-netapp-ontap-restapi
title: NetApp Ontap Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Pack assets

ONTAP or Data ONTAP or Clustered Data ONTAP (cDOT) or Data ONTAP 7-Mode is NetApp's proprietary operating system used in storage disk arrays such as NetApp FAS and AFF, ONTAP Select and Cloud Volumes ONTAP

### Templates

The Monitoring Connector **NetApp Ontap Rest API** brings a host template:

* **HW-Storage-NetApp-Ontap-Restapi-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="HW-Storage-NetApp-Ontap-Restapi-custom" label="HW-Storage-NetApp-Ontap-Restapi-custom">

| Service Alias | Service Template                                  | Service Description |
|:--------------|:--------------------------------------------------|:--------------------|
| Aggregates    | HW-Storage-NetApp-Ontap-Aggregates-Restapi-custom | Check aggregates    |
| Cluster       | HW-Storage-NetApp-Ontap-Cluster-Restapi-custom    | Check cluster       |
| Hardware      | HW-Storage-NetApp-Ontap-Hardware-Restapi-custom   | Check hardware      |

> The services listed above are created automatically when the **HW-Storage-NetApp-Ontap-Restapi-custom** host template is used.

</TabItem>
<TabItem value="Not attached to a host template" label="Not attached to a host template">

| Service Alias | Service Template                                   | Service Description | Discovery  |
|:--------------|:---------------------------------------------------|:--------------------|:----------:|
| Luns          | HW-Storage-NetApp-Ontap-Luns-Restapi-custom        | Check LUNs          |            |
| Quotas        | HW-Storage-NetApp-Ontap-Quotas-Restapi-custom      | Check quotas        |            |
| Snapmirrors   | HW-Storage-NetApp-Ontap-Snapmirrors-Restapi-custom | Check snapmirrors   |            |
| Volumes       | HW-Storage-NetApp-Ontap-Volumes-Restapi-custom     | Check volumes       | X          |

> The services listed above are not created automatically when a host template is applied. To use them, [create a service manually](/docs/monitoring/basic-objects/services), then apply the service template you want.

> If **Discovery** is checked, it means a service discovery rule exists for this service template.

</TabItem>
</Tabs>

### Discovery rules

#### Service discovery

| Rule name                                   | Description                                               |
|:--------------------------------------------|:----------------------------------------------------------|
| HW-Storage-Netapp-Ontap-Restapi-Volume-Name | Discover the disk partitions and monitor space occupation |

More information about discovering services automatically is available on the [dedicated page](/docs/monitoring/discovery/services-discovery)
and in the [following chapter](/docs/monitoring/discovery/services-discovery/#discovery-rules).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics linked to each service.

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Metric name                                          | Unit  |
|:-----------------------------------------------------|:------|
| *aggregates*#status                                  | N/A   |
| *aggregates*#aggregate.space.usage.bytes             | B     |
| *aggregates*#aggregate.space.free.bytes              | B     |
| *aggregates*#aggregate.space.usage.percentage        | %     |
| *aggregates*#aggregate.io.read.usage.bytespersecond  | B/s   |
| *aggregates*#aggregate.io.write.usage.bytespersecond | B/s   |
| *aggregates*#aggregate.io.other.usage.bytespersecond | B/s   |
| *aggregates*#aggregate.io.total.usage.bytespersecond | B/s   |
| *aggregates*#aggregate.io.read.usage.iops            | iops  |
| *aggregates*#aggregate.io.write.usage.iops           | iops  |
| *aggregates*#aggregate.io.other.usage.iops           | iops  |
| *aggregates*#aggregate.io.total.usage.iops           | iops  |
| *aggregates*#aggregate.io.read.latency.microseconds  | µs    |
| *aggregates*#aggregate.io.write.latency.microseconds | µs    |
| *aggregates*#aggregate.io.other.latency.microseconds | µs    |
| *aggregates*#aggregate.io.total.latency.microseconds | µs    |

</TabItem>
<TabItem value="Cluster" label="Cluster">

| Metric name                                      | Unit  |
|:-------------------------------------------------|:------|
| *clusters*~cluster.io.read.usage.bytespersecond  | B/s   |
| *clusters*~cluster.io.write.usage.bytespersecond | B/s   |
| *clusters*~cluster.io.other.usage.bytespersecond | B/s   |
| *clusters*~cluster.io.total.usage.bytespersecond | B/s   |
| *clusters*~cluster.io.read.usage.iops            | iops  |
| *clusters*~cluster.io.write.usage.iops           | iops  |
| *clusters*~cluster.io.other.usage.iops           | iops  |
| *clusters*~cluster.io.total.usage.iops           | iops  |
| *clusters*~cluster.io.read.latency.milliseconds  | ms    |
| *clusters*~cluster.io.write.latency.milliseconds | ms    |
| *clusters*~cluster.io.other.latency.milliseconds | ms    |
| *clusters*~cluster.io.total.latency.milliseconds | ms    |
| *clusters*~*nodes*#node-status                   | N/A   |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric Name  | Unit  |
|:-------------|:------|
| bay status   |       |
| fru status   |       |
| shelf status |       |

</TabItem>
<TabItem value="Luns" label="Luns">

| Metric name   | Unit  |
|:--------------|:------|
| *luns*#status | N/A   |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Metric name                           | Unit  |
|:--------------------------------------|:------|
| *quotas*#quota.space.usage.bytes      | B     |
| *quotas*#quota.space.free.bytes       | B     |
| *quotas*#quota.space.usage.percentage | %     |

</TabItem>
<TabItem value="Snapmirrors" label="Snapmirrors">

| Metric name          | Unit  |
|:---------------------|:------|
| *snapmirrors*#status | N/A   |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Metric name                                    | Unit  |
|:-----------------------------------------------|:------|
| *volumes*#status                               | N/A   |
| *volumes*#volume.space.usage.bytes             | B     |
| *volumes*#volume.space.free.bytes              | B     |
| *volumes*#volume.space.usage.percentage        | %     |
| *volumes*#volume.io.read.usage.bytespersecond  | B/s   |
| *volumes*#volume.io.write.usage.bytespersecond | B/s   |
| *volumes*#volume.io.other.usage.bytespersecond | B/s   |
| *volumes*#volume.io.total.usage.bytespersecond | B/s   |
| *volumes*#volume.io.read.usage.iops            | iops  |
| *volumes*#volume.io.write.usage.iops           | iops  |
| *volumes*#volume.io.other.usage.iops           | iops  |
| *volumes*#volume.io.total.usage.iops           | iops  |
| *volumes*#volume.io.read.latency.milliseconds  | ms    |
| *volumes*#volume.io.write.latency.milliseconds | ms    |
| *volumes*#volume.io.other.latency.milliseconds | ms    |
| *volumes*#volume.io.total.latency.milliseconds | ms    |

</TabItem>
</Tabs>

## Prerequisites

### NetApp ONTAP configuration

A read-only account (login/password) is required.

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
dnf install centreon-pack-hardware-storage-netapp-ontap-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-netapp-ontap-restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-storage-netapp-ontap-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-netapp-ontap-restapi
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **NetApp Ontap Rest API** connector through
the **Configuration > Monitoring Connectors Manager** menu.

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
dnf install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-storage-netapp-ontap-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your ressource settings.
3. Apply the **HW-Storage-NetApp-Ontap-Restapi-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                           | Default value     | Mandatory   |
|:----------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME     | Netapp API username                                                                                   |                   | X           |
| APIPASSWORD     | Netapp API password                                                                                   |                   | X           |
| APIPROTO        | Specify https if needed (Default: 'https')                                                            | https             |             |
| APIPORT         | Port used (Default: 443)                                                                              | 443               |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). All options are listed [here](#available-options) |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Macro                | Description                                                                                                                                                | Default value         | Mandatory   |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| FILTERNAME           | Filter aggregates by aggregate name (can be a regexp)                                                                                                      |                       |             |
| WARNINGOTHER         | Thresholds                                                                                                                                                 |                       |             |
| CRITICALOTHER        | Thresholds                                                                                                                                                 |                       |             |
| WARNINGOTHERIOPS     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALOTHERIOPS    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGOTHERLATENCY  | Thresholds                                                                                                                                                 |                       |             |
| CRITICALOTHERLATENCY | Thresholds                                                                                                                                                 |                       |             |
| WARNINGREAD          | Thresholds                                                                                                                                                 |                       |             |
| CRITICALREAD         | Thresholds                                                                                                                                                 |                       |             |
| WARNINGREADIOPS      | Thresholds                                                                                                                                                 |                       |             |
| CRITICALREADIOPS     | Thresholds                                                                                                                                                 |                       |             |
| WARNINGREADLATENCY   | Thresholds                                                                                                                                                 |                       |             |
| CRITICALREADLATENCY  | Thresholds                                                                                                                                                 |                       |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (Default: '%{state} !~ /online/i'). You can use the following variables: %{state}, %{display} | %{state} !~ /online/i |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{display}                                     |                       |             |
| WARNINGTOTAL         | Thresholds                                                                                                                                                 |                       |             |
| CRITICALTOTAL        | Thresholds                                                                                                                                                 |                       |             |
| WARNINGTOTALIOPS     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALTOTALIOPS    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGTOTALLATENCY  | Thresholds                                                                                                                                                 |                       |             |
| CRITICALTOTALLATENCY | Thresholds                                                                                                                                                 |                       |             |
| WARNINGUSAGE         | Thresholds                                                                                                                                                 |                       |             |
| CRITICALUSAGE        | Thresholds                                                                                                                                                 |                       |             |
| WARNINGUSAGEFREE     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALUSAGEFREE    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGUSAGEPRCT     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALUSAGEPRCT    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGWRITE         | Thresholds                                                                                                                                                 |                       |             |
| CRITICALWRITE        | Thresholds                                                                                                                                                 |                       |             |
| WARNINGWRITEIOPS     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALWRITEIOPS    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGWRITELATENCY  | Thresholds                                                                                                                                                 |                       |             |
| CRITICALWRITELATENCY | Thresholds                                                                                                                                                 |                       |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                        |                       |             |

</TabItem>
<TabItem value="Cluster" label="Cluster">

| Macro                | Description                                                                                                                                                                | Default value        | Mandatory   |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| UNKNOWNNODESTATUS    | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{link\_status}, %{display}                                    |                      |             |
| CRITICALNODESTATUS   | Define the conditions to match for the status to be CRITICAL (Default: '%{state} ne "online"'). You can use the following variables: %{state}, %{link\_status}, %{display} | %{state} ne "online" |             |
| WARNINGNODESTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{link\_status}, %{display}                                    |                      |             |
| WARNINGREAD          | Thresholds                                                                                                                                                                 |                      |             |
| CRITICALREAD         | Thresholds                                                                                                                                                                 |                      |             |
| WARNINGREADIOPS      | Thresholds                                                                                                                                                                 |                      |             |
| CRITICALREADIOPS     | Thresholds                                                                                                                                                                 |                      |             |
| WARNINGREADLATENCY   | Thresholds                                                                                                                                                                 |                      |             |
| CRITICALREADLATENCY  | Thresholds                                                                                                                                                                 |                      |             |
| WARNINGWRITE         | Thresholds                                                                                                                                                                 |                      |             |
| CRITICALWRITE        | Thresholds                                                                                                                                                                 |                      |             |
| WARNINGWRITEIOPS     | Thresholds                                                                                                                                                                 |                      |             |
| CRITICALWRITEIOPS    | Thresholds                                                                                                                                                                 |                      |             |
| WARNINGWRITELATENCY  |                                                                                                                                                                            |                      |             |
| CRITICALWRITELATENCY |                                                                                                                                                                            |                      |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                        | --verbose            |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                         | Default value     | Mandatory   |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (Default: '.*'). Can be: 'shelf', 'bay', 'fru'                             | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Luns" label="Luns">

| Macro          | Description                                                                                                                                                                     | Default value         | Mandatory   |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| FILTERNAME     | Filter LUN name (can be a regexp)                                                                                                                                               |                       |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{container\_state}, %{display}                                     |                       |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{state} !~ /online/i'). You can use the following variables: %{state}, %{container\_state}, %{display} | %{state} !~ /online/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{container\_state}, %{display}                                     |                       |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                             | --verbose             |             |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Macro                  | Description                                                                                         | Default value     | Mandatory   |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERINDEX            | Filter by index (identified entry in the /etc/quotas) (can be a regexp)                             |                   |             |
| FILTERVSERVER          | Filter by vserver name (can be a regexp)                                                            |                   |             |
| FILTERVOLUME           | Filter by volume name (can be a regexp)                                                             |                   |             |
| FILTERQTREE            | Filter by qtree name (can be a regexp)                                                              |                   |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options) | --verbose         |             |

</TabItem>
<TabItem value="Snapmirrors" label="Snapmirrors">

| Macro          | Description                                                                                                                                                                                                            | Default value                                     | Mandatory   |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|:-----------:|
| FILTERNAME     | Filter snapmirror name (can be a regexp)                                                                                                                                                                               |                                                   |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{healthy}, %{state}, %{transfer\_state}, %{display}                                                                 |                                                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{healthy} ne "true" or %{state} eq "broken\_off"'). You can use the following variables: %{healthy}, %{state}, %{transfer\_state}, %{display} | %{healthy} ne "true" or %{state} eq "broken\_off" |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{healthy}, %{state}, %{transfer\_state}, %{display}                                                                 |                                                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                                                                                    | --verbose                                         |             |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Macro                | Description                                                                                                                                                | Default value         | Mandatory   |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| FILTERNAME           | Filter volumes by volume name (can be a regexp)                                                                                                            |                       |             |
| UNKNOWNSTATUS        | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{display}                                     |                       |             |
| WARNINGREAD          | Thresholds                                                                                                                                                 |                       |             |
| CRITICALREAD         | Thresholds                                                                                                                                                 |                       |             |
| WARNINGREADIOPS      | Thresholds                                                                                                                                                 |                       |             |
| CRITICALREADIOPS     | Thresholds                                                                                                                                                 |                       |             |
| WARNINGREADLATENCY   | Thresholds                                                                                                                                                 |                       |             |
| CRITICALREADLATENCY  | Thresholds                                                                                                                                                 |                       |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (Default: '%{state} !~ /online/i'). You can use the following variables: %{state}, %{display} | %{state} !~ /online/i |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{display}                                     |                       |             |
| WARNINGUSAGE         | Thresholds                                                                                                                                                 |                       |             |
| CRITICALUSAGE        | Thresholds                                                                                                                                                 |                       |             |
| WARNINGUSAGEFREE     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALUSAGEFREE    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGUSAGEPRCT     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALUSAGEPRCT    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGWRITE         | Thresholds                                                                                                                                                 |                       |             |
| CRITICALWRITE        | Thresholds                                                                                                                                                 |                       |             |
| WARNINGWRITEIOPS     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALWRITEIOPS    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGWRITELATENCY  | Thresholds                                                                                                                                                 |                       |             |
| CRITICALWRITELATENCY | Thresholds                                                                                                                                                 |                       |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). All options are listed [here](#available-options)                                                        | --verbose             |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on page **Resources Status**. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor a resource using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_netapp_ontap_restapi.pl \
	--plugin=storage::netapp::ontap::restapi::plugin \
	--mode=volumes \
	--hostname='10.0.0.1' \
	--port='443' \
	--proto='https' \
	--api-username='' \
	--api-password=''  \
	--filter-name='' \
	--unknown-status='' \
	--warning-status='' \
	--critical-status='%{state} !~ /online/i' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' \
	--warning-read='' \
	--critical-read='' \
	--warning-write='' \
	--critical-write='' \
	--warning-read-iops='' \
	--critical-read-iops='' \
	--warning-write-iops='' \
	--critical-write-iops='' \
	--warning-read-latency='' \
	--critical-read-latency='' \
	--warning-write-latency='' \
	--critical-write-latency='' \
	--verbose
```

The expected command output is shown below:

```bash
OK: All volumes are ok | '*volumes*#volume.space.usage.bytes'=B;;;0;total_space'*volumes*#volume.space.free.bytes'=B;;;0;total_space'*volumes*#volume.space.usage.percentage'=%;;;0;100'*volumes*#volume.io.read.usage.bytespersecond'=B/s;;;;'*volumes*#volume.io.write.usage.bytespersecond'=B/s;;;0;'*volumes*#volume.io.other.usage.bytespersecond'=B/s;;;0;'*volumes*#volume.io.total.usage.bytespersecond'=B/s;;;0;'*volumes*#volume.io.read.usage.iops'=iops;;;0;'*volumes*#volume.io.write.usage.iops'=iops;;;0;'*volumes*#volume.io.other.usage.iops'=iops;;;0;'*volumes*#volume.io.total.usage.iops'=iops;;;0;'*volumes*#volume.io.read.latency.milliseconds'=ms;;;0;'*volumes*#volume.io.write.latency.milliseconds'=ms;;;0;'*volumes*#volume.io.other.latency.milliseconds'=ms;;;0;'*volumes*#volume.io.total.latency.milliseconds'=ms;;;0;
```

The command above checks the status of the volumes (```--mode=volumes```) of the NetApp storage *netapp.centreon.com* (```--hostname=netapp.centreon.com```)
using the API username *admin* and the related password (```--api-username='admin' --api-password='xxxx'```).
The API connection uses the *HTTPS* protocol (```--proto=https```) on the port *443* (```--port=443```).

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
/usr/lib/centreon/plugins/centreon_netapp_ontap_restapi.pl \
	--plugin=storage::netapp::ontap::restapi::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                  | Linked service template                            |
|:--------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| aggregates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/aggregates.pm)]    | HW-Storage-NetApp-Ontap-Aggregates-Restapi-custom  |
| cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/cluster.pm)]          | HW-Storage-NetApp-Ontap-Cluster-Restapi-custom     |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/hardware.pm)]        | HW-Storage-NetApp-Ontap-Hardware-Restapi-custom    |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/listvolumes.pm)] | Used for service discovery                         |
| luns [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/luns.pm)]                | HW-Storage-NetApp-Ontap-Luns-Restapi-custom        |
| quotas [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/quotas.pm)]            | HW-Storage-NetApp-Ontap-Quotas-Restapi-custom      |
| snapmirrors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/snapmirrors.pm)]  | HW-Storage-NetApp-Ontap-Snapmirrors-Restapi-custom |
| volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/volumes.pm)]          | HW-Storage-NetApp-Ontap-Volumes-Restapi-custom     |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Netapp ONTAP Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --hostname                                 | Netapp hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --port                                     | Port used (Default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-username                             | Netapp API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --api-password                             | Netapp API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --timeout                                  | Set timeout in seconds (Default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Option                   | Description                                                                                                                                                                                                                                                                      |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                                                                                                                                                            |
| --filter-name            | Filter aggregates by aggregate name (can be a regexp).                                                                                                                                                                                                                           |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{display}                                                                                                                                                           |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{display}                                                                                                                                                           |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{state} !~ /online/i'). You can use the following variables: %{state}, %{display}                                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'read' (B/s), 'read-iops', 'write' (B/s), 'write-iops', 'read-latency' (ms), 'write-latency' (ms), 'total-latency' (ms), 'other-latency' (ms), 'other' (B/s), 'total' (B/s), 'other-iops', 'total-iops'.    |

</TabItem>
<TabItem value="Cluster" label="Cluster">

| Option                   | Description                                                                                                                                                                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                              |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                         |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                 |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                               |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                    |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                          |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                  |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                          |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.             |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                   |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                            |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                      |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='node-status'                                                                                                                                                               |
| --unknown-node-status    | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{link\_status}, %{display}                                                                                                                 |
| --warning-node-status    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{link\_status}, %{display}                                                                                                                 |
| --critical-node-status   | Define the conditions to match for the status to be CRITICAL (Default: '%{state} ne "online"'). You can use the following variables: %{state}, %{link\_status}, %{display}                                                                              |
| --warning-* --critical-* | Thresholds. Can be: 'cpu-utilization' (%), 'read' (B/s), 'write' (B/s), 'read-iops', 'write-iops', 'read-latency' (ms), 'write-lantency' (ms), 'other-latency' (ms), 'total-latency' (ms), 'other' (B/s), 'total' (B/s), 'other-iops', 'total-iops'.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                    |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (Default: '.*'). Can be: 'shelf', 'bay', 'fru'.                                                                                                                                       |
| --filter             | Exclude some parts (comma seperated list) You can also exclude items from specific instances: --filter='fru,-'                                                                                                 |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                     |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fru,OK,error'    |

</TabItem>
<TabItem value="Luns" label="Luns">

| Option            | Description                                                                                                                                                                        |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name     | Filter LUN name (can be a regexp).                                                                                                                                                 |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{container\_state}, %{display}                                        |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{container\_state}, %{display}                                        |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: '%{state} !~ /online/i'). You can use the following variables: %{state}, %{container\_state}, %{display}    |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Option                   | Description                                                                   |
|:-------------------------|:------------------------------------------------------------------------------|
| --filter-index           | Filter by index (identified entry in the /etc/quotas) (can be a regexp).      |
| --filter-vserver         | Filter by vserver name (can be a regexp).                                     |
| --filter-volume          | Filter by volume name (can be a regexp).                                      |
| --filter-qtree           | Filter by qtree name (can be a regexp).                                       |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.    |

</TabItem>
<TabItem value="Snapmirrors" label="Snapmirrors">

| Option            | Description                                                                                                                                                                                                               |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name     | Filter snapmirror name (can be a regexp).                                                                                                                                                                                 |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{healthy}, %{state}, %{transfer\_state}, %{display}                                                                    |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{healthy}, %{state}, %{transfer\_state}, %{display}                                                                    |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: '%{healthy} ne "true" or %{state} eq "broken\_off"'). You can use the following variables: %{healthy}, %{state}, %{transfer\_state}, %{display}    |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Option                   | Description                                                                                                                                                                                                                                                                      |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                                                                                                                                                            |
| --filter-name            | Filter volumes by volume name (can be a regexp).                                                                                                                                                                                                                                 |
| --filter-vserver-name    | Filter volumes by vserver name (can be a regexp).                                                                                                                                                                                                                                |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{display}                                                                                                                                                           |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{display}                                                                                                                                                           |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{state} !~ /online/i'). You can use the following variables: %{state}, %{display}                                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'read' (B/s), 'read-iops', 'write' (B/s), 'write-iops', 'read-latency' (ms), 'write-latency' (ms), 'total-latency' (ms), 'other-latency' (ms), 'other' (B/s), 'total' (B/s), 'other-iops', 'total-iops'.    |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_netapp_ontap_restapi.pl \
	--plugin=storage::netapp::ontap::restapi::plugin \
	--mode=volumes \
	--help
```
