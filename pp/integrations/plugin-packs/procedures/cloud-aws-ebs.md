---
id: cloud-aws-ebs
title: Amazon EBS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Amazon Elastic Block Store (Amazon EBS) provides block level storage volumes for use with EC2 instances. 
EBS volumes behave like raw, unformatted block devices. You can mount these volumes as devices on your instances. 
You can mount multiple volumes on the same instance, and you can mount a volume to multiple instances at a time. 
You can create a file system on top of these volumes, or use them in any way you would use a block device (like a hard drive). 
You can dynamically change the configuration of a volume attached to an instance.

## Connector dependencies

The following monitoring connectors will be installed when you install the **Amazon EBS** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Amazon EBS** brings a host template:

* **Cloud-Aws-Ebs-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-Ebs-custom" label="Cloud-Aws-Ebs-custom">

| Service Alias | Service Template                     | Service Description          |
|:--------------|:-------------------------------------|:-----------------------------|
| Ebs-Iops      | Cloud-Aws-Ebs-Volume-Iops-Api-custom | Check volume IOPS            |
| Ebs-Time      | Cloud-Aws-Ebs-Volume-Time-Api-custom | Check read/write time        |
| Ebs-Volume-IO | Cloud-Aws-Ebs-Volume-Io-Api-custom   | Check volume I/O utilization |

> The services listed above are created automatically when the **Cloud-Aws-Ebs-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name       | Description                             |
|:----------------|:----------------------------------------|
| Amazon AWS EBS  | Discover Amazon AWS Elastic Block Store |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="Ebs-Iops" label="Ebs-Iops">

| Name                                           | Unit  |
|:-----------------------------------------------|:------|
| ebs.volume.iops.read.count                     | count |
| ebs.volume.iops.read.countpersecond            | /s    |
| ebs.volume.iops.write.count                    | count |
| ebs.volume.iops.write.countpersecond           | /s    |
| ebs.volume.iops.throughput.percentage          | %     |
| ebs.volume.iops.throughput.percentagepersecond | %/s   |
| ebs.volume.iops.consumed.count                 | count |
| ebs.volume.iops.consumed.countpersecond        | /s    |
| ebs.volume.iops.queuelength.count              | count |
| ebs.volume.iops.queuelength.countpersecond     | /s    |

</TabItem>
<TabItem value="Ebs-Time" label="Ebs-Time">

| Name                              | Unit  |
|:----------------------------------|:------|
| ebs.volume.totalread.time.second  | s     |
| ebs.volume.totalwrite.time.second | s     |
| ebs.volume.idle.time.second       | s     |

</TabItem>
<TabItem value="Ebs-Volume-IO" label="Ebs-Volume-IO">

| Name                                  | Unit  |
|:--------------------------------------|:------|
| ebs.volume.bytes.read.bytes           | B     |
| ebs.volume.bytes.read.bytespersecond  | B/s   |
| ebs.volume.bytes.write.bytes          | B     |
| ebs.volume.bytes.write.bytespersecond | B/s   |

</TabItem>
</Tabs>

## Prerequisites

### AWS Configuration

Configure a service account (access/secret key combo) for which the following privileges have to be granted:
* cloudwatch:getMetricStatistics
* ec2:DescribeVolumes

### Plugin dependencies

To interact with the Amazon APIs, you can use either use the *awscli* binary provided by Amazon or *paws*, a Perl AWS SDK (recommended). You must install it on every poller expected to monitor AWS resources.

> For now, it is not possible to use *paws* if you are using a proxy to reach the AWS Cloudwatch APIs.

<Tabs groupId="sync">
<TabItem value="perl-Paws-installation" label="perl-Paws-installation">

```bash
yum install perl-Paws
```

</TabItem>
<TabItem value="aws-cli-installation" label="aws-cli-installation">

```bash
curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
unzip awscliv2.zip
sudo ./aws/install
```

</TabItem>
</Tabs>

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
dnf install centreon-pack-cloud-aws-ebs
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-aws-ebs
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-aws-ebs
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-ebs
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Amazon EBS** connector through
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
dnf install centreon-plugin-Cloud-Aws-Ebs-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Aws-Ebs-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-aws-ebs-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Ebs-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Aws-Ebs-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro         | Description                                                                                                                              | Default value     | Mandatory   |
|:--------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY  | Set AWS access key                                                                                                                       |                   |             |
| AWSASSUMEROLE | Set Amazon Resource Name of the role to be assumed                                                                                       |                   |             |
| AWSCUSTOMMODE | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option               | awscli            |             |
| AWSREGION     | Set the region name (required)                                                                                                           |                   | X           |
| AWSSECRETKEY  | Set AWS secret key                                                                                                                       |                   |             |
| AWSVOLUMEID   | Set the VolumeId (required)                                                                                                              |                   | X           |
| PROXYURL      | Proxy URL if any                                                                                                                         |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="Ebs-Iops" label="Ebs-Iops">

| Macro                   | Description                                                                                                                            | Default value     | Mandatory   |
|:------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIOPSCONSUMED     | Threshold                                                                                                                              |                   |             |
| CRITICALIOPSCONSUMED    | Threshold                                                                                                                              |                   |             |
| WARNINGIOPSQUEUELENGTH  | Threshold                                                                                                                              |                   |             |
| CRITICALIOPSQUEUELENGTH | Threshold                                                                                                                              |                   |             |
| WARNINGIOPSREAD         | Threshold                                                                                                                              |                   |             |
| CRITICALIOPSREAD        | Threshold                                                                                                                              |                   |             |
| WARNINGIOPSTHROUGHPUT   | Threshold                                                                                                                              |                   |             |
| CRITICALIOPSTHROUGHPUT  | Threshold                                                                                                                              |                   |             |
| WARNINGIOPSWRITE        | Threshold                                                                                                                              |                   |             |
| CRITICALIOPSWRITE       | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Ebs-Time" label="Ebs-Time">

| Macro                  | Description                                                                                                                            | Default value     | Mandatory   |
|:-----------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIDLETIME        | Threshold                                                                                                                              |                   |             |
| CRITICALIDLETIME       | Threshold                                                                                                                              |                   |             |
| WARNINGTOTALREADTIME   | Threshold                                                                                                                              |                   |             |
| CRITICALTOTALREADTIME  | Threshold                                                                                                                              |                   |             |
| WARNINGTOTALWRITETIME  | Threshold                                                                                                                              |                   |             |
| CRITICALTOTALWRITETIME | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
<TabItem value="Ebs-Volume-IO" label="Ebs-Volume-IO">

| Macro                    | Description                                                                                                                            | Default value     | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGVOLUMEREADBYTES   | Threshold                                                                                                                              |                   |             |
| CRITICALVOLUMEREADBYTES  | Threshold                                                                                                                              |                   |             |
| WARNINGVOLUMEWRITEBYTES  | Threshold                                                                                                                              |                   |             |
| CRITICALVOLUMEWRITEBYTES | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). |                   |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor an AWS Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_aws_ebs_api.pl \
	--plugin=cloud::aws::ebs::plugin \
	--mode=volumeio \
	--custommode='awscli' \
	--aws-secret-key='' \
	--aws-access-key='' \
	--aws-role-arn='' \
	--region='' \
	--volume-id='' \
	--proxyurl=''  \
	--warning-volume-read-bytes='' \
	--critical-volume-read-bytes='' \
	--warning-volume-write-bytes='' \
	--critical-volume-write-bytes='' 
```

The expected command output is shown below:

```bash
OK: Volume Read Bytes Volume Read Bytes Volume Write Bytes Volume Write Bytes | 'ebs.volume.bytes.read.bytes'=82805B;;;; 'ebs.volume.bytes.read.bytespersecond'=47281B/s;;;; 'ebs.volume.bytes.write.bytes'=15418B;;;; 'ebs.volume.bytes.write.bytespersecond'=2832B/s;;;; 
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
/usr/lib/centreon/plugins/centreon_aws_ebs_api.pl \
	--plugin=cloud::aws::ebs::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                   | Linked service template               |
|:-----------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ebs/mode/discovery.pm)]      | Used for host discovery               |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ebs/mode/listvolumes.pm)] | Not used in this Monitoring Connector |
| volumeio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ebs/mode/volumeio.pm)]        | Cloud-Aws-Ebs-Volume-Io-Api-custom    |
| volumeiops [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ebs/mode/volumeiops.pm)]    | Cloud-Aws-Ebs-Volume-Iops-Api-custom  |
| volumetime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/ebs/mode/volumetime.pm)]    | Cloud-Aws-Ebs-Volume-Time-Api-custom  |

### Available options

#### Generic options

All generic options are listed here:

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --aws-secret-key                           |   Set AWS secret key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --aws-access-key                           |   Set AWS access key.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --aws-session-token                        |   Set AWS session token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --aws-role-arn                             |   Set Amazon Resource Name of the role to be assumed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --region                                   |   Set the region name (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --period                                   |   Set period in seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --timeframe                                |   Set timeframe in seconds.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --statistic                                |   Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --zeroed                                   |   Set metrics value to 0 if none. Useful when CloudWatch does not return value when not defined.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --proxyurl                                 |   Proxy URL if any                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --aws-profile                              |   Set AWS profile.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --endpoint-url                             |   Override AWS service endpoint URL if necessary.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  |   Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --sudo                                     |   Use 'sudo' to execute the command.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --command                                  |   Command to get information (default: 'aws'). Can be changed if you have output in a file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --command-path                             |   Command path (default: none).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --command-options                          |   Command options (default: none). Only use for testing purpose, when you want to set ALL parameters of a command by yourself.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --skip-ssl-check                           |   Avoid certificate issuer verification. Useful when AWS resources are hosted by a third party.   Note that it strips all stderr from the command result. Debug will only display CLI instead of everything.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |

#### Modes options

All available options for each service template are listed below:

<Tabs groupId="sync">
<TabItem value="Ebs-Iops" label="Ebs-Iops">

| Option              | Description                                                                                                                    |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters   |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'    |
| --volume-id         |   Set the VolumeId (required).                                                                                                 |
| --filter-metric     |   Filter on a specific metric. Can be: VolumeReadOps, VolumeWriteOps, VolumeThroughputPercentage, VolumeConsumedReadWriteOps   |
| --warning-$metric$  |   Warning thresholds ($metric$ can be: 'iops-read', 'iops-write', 'iops-throughput', 'iops-consumed', 'iops-queue-length').    |
| --critical-$metric$ |   Critical thresholds ($metric$ can be: 'iops-read', 'iops-write', 'iops-throughput', 'iops-consumed', 'iops-queue-length').   |
| --per-sec           |   Change the data to be unit/sec.                                                                                              |

</TabItem>
<TabItem value="Ebs-Time" label="Ebs-Time">

| Option              | Description                                                                                                                   |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters   |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --volume-id         |   Set the VolumeId (required).                                                                                                |
| --filter-metric     |   Filter on a specific metric. Can be: VolumeTotalReadTime, VolumeTotalWriteTime, VolumeIdleTime                              |
| --warning-$metric$  |   Warning thresholds ($metric$ can be: 'total-read-time', 'total-write-time', 'idle-time').                                   |
| --critical-$metric$ |   Critical thresholds ($metric$ can be: 'total-read-time', 'total-write-time', 'idle-time').                                  |

</TabItem>
<TabItem value="Ebs-Volume-IO" label="Ebs-Volume-IO">

| Option              | Description                                                                           |
|:--------------------|:--------------------------------------------------------------------------------------|
| --volume-id         |   Set the VolumeId (required).                                                        |
| --filter-metric     |   Filter on a specific metric. Can be: VolumeReadBytes, VolumeWriteBytes              |
| --warning-$metric$  |   Warning thresholds ($metric$ can be: 'volume-read-bytes', 'volume-write-bytes').    |
| --critical-$metric$ |   Critical thresholds ($metric$ can be: 'volume-read-bytes', 'volume-write-bytes').   |
| --per-sec           |   Change the data to be unit/sec.                                                     |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_ebs_api.pl \
	--plugin=cloud::aws::ebs::plugin \
	--mode=volumeio \
	--help
```
