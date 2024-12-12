---
id: cloud-aws-elasticache
title: Amazon ElastiCache
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Connector dependencies

The following monitoring connectors will be installed when you install the **Amazon ElastiCache** connector through the
**Configuration > Monitoring Connector Manager** menu:
* [Base Pack](./base-generic.md)

## Pack assets

### Templates

The Monitoring Connector **Amazon ElastiCache** brings 3 host templates:

* **Cloud-Aws-ElastiCache-custom**
* **Cloud-Aws-ElastiCache-Memcached-custom**
* **Cloud-Aws-ElastiCache-Redis-custom**

The connector brings the following service templates (sorted by the host template they are attached to):

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-ElastiCache-custom" label="Cloud-Aws-ElastiCache-custom">

| Service Alias           | Service Template                             | Service Description      |
|:------------------------|:---------------------------------------------|:-------------------------|
| ElastiCache-Connections | Cloud-Aws-ElastiCache-Connections-Api-custom | Check the number of connections |
| ElastiCache-Cpu         | Cloud-Aws-ElastiCache-Cpu-Api-custom         | Check CPU utilization    |
| ElastiCache-Evictions   | Cloud-Aws-ElastiCache-Evictions-Api-custom   | Check the number of evictions |
| ElastiCache-Items       | Cloud-Aws-ElastiCache-Items-Api-custom       | Check the number of items      |
| ElastiCache-Network     | Cloud-Aws-ElastiCache-Network-Api-custom     | Check network usage      |

> The services listed above are created automatically when the **Cloud-Aws-ElastiCache-custom** host template is used.

</TabItem>
<TabItem value="Cloud-Aws-ElastiCache-Memcached-custom" label="Cloud-Aws-ElastiCache-Memcached-custom">

| Service Alias           | Service Template                                    | Service Description          |
|:------------------------|:----------------------------------------------------|:-----------------------------|
| ElastiCache-Commands    | Cloud-Aws-ElastiCache-Commands-Memcached-Api-custom | Check Memcached performances |
| ElastiCache-Commands    | Cloud-Aws-ElastiCache-Commands-Redis-Api-custom     | Check Redis performances     |
| ElastiCache-Connections | Cloud-Aws-ElastiCache-Connections-Api-custom        | Check connections number     |
| ElastiCache-Cpu         | Cloud-Aws-ElastiCache-Cpu-Api-custom                | Check CPU utilization        |
| ElastiCache-Evictions   | Cloud-Aws-ElastiCache-Evictions-Api-custom          | Check evictions number       |
| ElastiCache-Items       | Cloud-Aws-ElastiCache-Items-Api-custom              | Check items number           |
| ElastiCache-Network     | Cloud-Aws-ElastiCache-Network-Api-custom            | Check network usage          |
| ElastiCache-Requests    | Cloud-Aws-ElastiCache-Requests-Memcached-Api-custom | Check Memcached performances |
| ElastiCache-Requests    | Cloud-Aws-ElastiCache-Requests-Redis-Api-custom     | Check Redis performances     |
| ElastiCache-Usage       | Cloud-Aws-ElastiCache-Usage-Memcached-Api-custom    | Check Memcached space usage  |
| ElastiCache-Usage       | Cloud-Aws-ElastiCache-Usage-Redis-Api-custom        | Check Redis space usage      |

> The services listed above are created automatically when the **Cloud-Aws-ElastiCache-Memcached-custom** host template is used.

</TabItem>
<TabItem value="Cloud-Aws-ElastiCache-Redis-custom" label="Cloud-Aws-ElastiCache-Redis-custom">

| Service Alias           | Service Template                                    | Service Description            |
|:------------------------|:----------------------------------------------------|:-------------------------------|
| ElastiCache-Commands    | Cloud-Aws-ElastiCache-Commands-Memcached-Api-custom | Check Memcached performances   |
| ElastiCache-Commands    | Cloud-Aws-ElastiCache-Commands-Redis-Api-custom     | Check Redis performances       |
| ElastiCache-Connections | Cloud-Aws-ElastiCache-Connections-Api-custom        | Check connections number       |
| ElastiCache-Cpu         | Cloud-Aws-ElastiCache-Cpu-Api-custom                | Check CPU utilization          |
| ElastiCache-Evictions   | Cloud-Aws-ElastiCache-Evictions-Api-custom          | Check evictions number         |
| ElastiCache-Items       | Cloud-Aws-ElastiCache-Items-Api-custom              | Check items number             |
| ElastiCache-Network     | Cloud-Aws-ElastiCache-Network-Api-custom            | Check network usage            |
| ElastiCache-Replication | Cloud-Aws-ElastiCache-Replication-Api-custom        | Check replication performances |
| ElastiCache-Requests    | Cloud-Aws-ElastiCache-Requests-Memcached-Api-custom | Check Memcached performances   |
| ElastiCache-Requests    | Cloud-Aws-ElastiCache-Requests-Redis-Api-custom     | Check Redis performances       |
| ElastiCache-Usage       | Cloud-Aws-ElastiCache-Usage-Memcached-Api-custom    | Check Memcached space usage    |
| ElastiCache-Usage       | Cloud-Aws-ElastiCache-Usage-Redis-Api-custom        | Check Redis space usage        |

> The services listed above are created automatically when the **Cloud-Aws-ElastiCache-Redis-custom** host template is used.

</TabItem>
</Tabs>

### Discovery rules

#### Host discovery

| Rule name                      | Description              |
|:-------------------------------|:-------------------------|
| Amazon Web Service Elasticache | Discover AWS Elasticache |

More information about discovering hosts automatically is available on the [dedicated page](/docs/monitoring/discovery/hosts-discovery).

### Collected metrics & status

Here is the list of services for this connector, detailing all metrics and statuses linked to each service.

<Tabs groupId="sync">
<TabItem value="ElastiCache-Commands" label="ElastiCache-Commands">

| Metric name    | Unité |
|:---------------|:------|
| CPUUtilization | %     |

</TabItem>
<TabItem value="ElastiCache-Connections" label="ElastiCache-Connections">

| Metric name     | Unité |
|:----------------|-------|
| CurrConnections | count |

</TabItem>
<TabItem value="ElastiCache-Cpu" label="ElastiCache-Cpu">

| Metric name    | Unité |
|:---------------|-------|
| CPUUtilization | %     |

</TabItem>
<TabItem value="ElastiCache-Evictions" label="ElastiCache-Evictions">

| Metric name | Unité |
|:------------|:------|
| Evictions   | count |
| Reclaimed   | count |

</TabItem>
<TabItem value="ElastiCache-Items" label="ElastiCache-Items">

| Metric name | Unité  |
|:------------|:-------|
| CurrItems   | count  |
| NewItems    | count  |

</TabItem>
<TabItem value="ElastiCache-Network" label="ElastiCache-Network">

| Metric name    | Unité |
|:---------------|:------|
| NetworkBytesIn | B     |

</TabItem>
<TabItem value="ElastiCache-Replication" label="ElastiCache-Replication">

| Metric name      | Unité |
|:-----------------|:------|
| ReplicationBytes | B     |

</TabItem>
<TabItem value="ElastiCache-Requests" label="ElastiCache-Requests">

| Metric name  | Unité |
|:-------------|:------|
| CasHits      | count |
| CasMisses    | count |
| DecrHits     | count |
| DecrMisses   | count |
| DeleteHits   | count |
| DeleteMisses | count |
| GetHits      | count |
| GetMisses    | count |
| IncrHits     | count |
| IncrMisses   | count |
| TouchHits    | count |
| TouchMisses  | count |

</TabItem>
<TabItem value="ElastiCache-Usage" label="ElastiCache-Usage">

| Metric name            | Unité |
|:-----------------------|:------|
| BytesUsedForCacheItems | B     |
| BytesUsedForCache      | B     |

</TabItem>
</Tabs>

## Prerequisites

### AWS Configuration

Configure a service account (access/secret key combo) for which the following privileges have to be granted:
* cloudwatch:getMetricStatistics
* elasticache:describeCacheClusters

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
dnf install centreon-pack-cloud-aws-elasticache
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-cloud-aws-elasticache
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-aws-elasticache
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-elasticache
```

</TabItem>
</Tabs>

2. Whatever the license type (*online* or *offline*), install the **Amazon ElastiCache** connector through
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
dnf install centreon-plugin-Cloud-Aws-Elasticache-Api
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Cloud-Aws-Elasticache-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-aws-elasticache-api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Elasticache-Api
```

</TabItem>
</Tabs>

## Using the monitoring connector

### Using a host template provided by the connector

<Tabs groupId="sync">
<TabItem value="Cloud-Aws-ElastiCache-custom" label="Cloud-Aws-ElastiCache-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Aws-ElastiCache-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set Amazon Resource Name of the role to be assumed                                                                         |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option |                   |             |
| AWSINSTANCENAME | Set the cluster name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSNODEID       | Set the node ID (optional)                                                                                                 |                   |             |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                       |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Aws-ElastiCache-Memcached-custom" label="Cloud-Aws-ElastiCache-Memcached-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Aws-ElastiCache-Memcached-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   | X            |
| AWSASSUMEROLE   | Set Amazon Resource Name of the role to be assumed                                                                         |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | paws              |             |
| AWSINSTANCENAME | Set the cluster name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSNODEID       | Set the node ID (optional)                                                                                                 |                   |             |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   | X           |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                       |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
<TabItem value="Cloud-Aws-ElastiCache-Redis-custom" label="Cloud-Aws-ElastiCache-Redis-custom">

1. Log into Centreon and add a new host through **Configuration > Hosts**.
2. Fill in the **Name**, **Alias** & **IP Address/DNS** fields according to your resource's settings.
3. Apply the **Cloud-Aws-ElastiCache-Redis-custom** template to the host. A list of macros appears. Macros allow you to define how the connector will connect to the resource, and to customize the connector's behavior.
4. Fill in the macros you want. Some macros are mandatory.

| Macro           | Description                                                                                                                | Default value     | Mandatory   |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| AWSACCESSKEY    | Set AWS access key                                                                                                         |                   |             |
| AWSASSUMEROLE   | Set Amazon Resource Name of the role to be assumed                                                                         |                   |             |
| AWSCUSTOMMODE   | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option | paws              |             |
| AWSINSTANCENAME | Set the cluster name (required) (can be defined multiple times)                                                            |                   | X           |
| AWSNODEID       | Set the node ID (optional)                                                                                                 |                   |             |
| AWSREGION       | Set the region name (required)                                                                                             |                   | X           |
| AWSSECRETKEY    | Set AWS secret key                                                                                                         |                   |             |
| PROXYURL        | Proxy URL if any                                                                                                           |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to every command (a --verbose flag for example). All options are listed [here](#available-options).                       |                   |             |

5. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The host appears in the list of hosts, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the host: it shows the values of the macros.

</TabItem>
</Tabs>

### Using a service template provided by the connector

1. If you have used a host template and checked **Create Services linked to the Template too**, the services linked to the template have been created automatically, using the corresponding service templates. Otherwise, [create manually the services you want](/docs/monitoring/basic-objects/services) and apply a service template to them.
2. Fill in the macros you want (e.g. to change the thresholds for the alerts). Some macros are mandatory (see the table below).

<Tabs groupId="sync">
<TabItem value="ElastiCache-Commands" label="ElastiCache-Commands">

| Macro                               | Description                                                                                                                                                                                                 | Default value       | Mandatory   |
|:------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                           | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                                                                                                  | average             |             |
| TIMEFRAME                           | Set timeframe in seconds                                                                                                                                                                                    | 600                 |             |
| PERIOD                              | Set period in seconds                                                                                                                                                                                       | 60                  |             |
| FILTERMETRIC                        | Filter metrics (can be: 'GetTypeCmds', 'HashBasedCmds', 'KeyBasedCmds', 'ListBasedCmds', 'SetBasedCmds', 'SetTypeCmds', 'SortedSetBasedCmds', 'StringBasedCmds', 'HyperLogLogBasedCmds')  (can be a regexp) |                     |             |
| WARNINGGETTYPECMDSAVERAGE           | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALGETTYPECMDSAVERAGE          | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGHASHBASEDCMDSAVERAGE         | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALHASHBASEDCMDSAVERAGE        | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGHYPERLOGLOGBASEDCMDSAVERAGE  | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALHYPERLOGLOGBASEDCMDSAVERAGE | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGKEYBASEDCMDSAVERAGE          | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALKEYBASEDCMDSAVERAGE         | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGLISTBASEDCMDSAVERAGE         | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALLISTBASEDCMDSAVERAGE        | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGSETBASEDCMDSAVERAGE          | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALSETBASEDCMDSAVERAGE         | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGSETTYPECMDSAVERAGE           | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALSETTYPECMDSAVERAGE          | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGSORTEDSETBASEDCMDSAVERAGE    | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALSORTEDSETBASEDCMDSAVERAGE   | Threshold                                                                                                                                                                                                   |                     |             |
| WARNINGSTRINGBASEDCMDSAVERAGE       | Threshold                                                                                                                                                                                                   |                     |             |
| CRITICALSTRINGBASEDCMDSAVERAGE      | Threshold                                                                                                                                                                                                   |                     |             |
| EXTRAOPTIONS                        | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options).                                                                      | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Connections" label="ElastiCache-Connections">

| Macro                          | Description                                                                                                                            | Default value       | Mandatory   |
|:-------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                      | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                             | average             |             |
| TIMEFRAME                      | Set timeframe in seconds                                                                                                               | 600                 |             |
| PERIOD                         | Set period in seconds                                                                                                                  | 60                  |             |
| FILTERMETRIC                   | Filter metrics (can be: 'CurrConnections', 'NewConnections')  (can be a regexp)                                                        |                     |             |
| WARNINGCURRCONNECTIONSAVERAGE  | Threshold                                                                                                                              |                     |             |
| CRITICALCURRCONNECTIONSAVERAGE | Threshold                                                                                                                              |                     |             |
| WARNINGNEWCONNECTIONSAVERAGE   | Threshold                                                                                                                              |                     |             |
| CRITICALNEWCONNECTIONSAVERAGE  | Threshold                                                                                                                              |                     |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Cpu" label="ElastiCache-Cpu">

| Macro                         | Description                                                                                        | Default value     | Mandatory   |
|:------------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                     | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                         | average           |             |
| TIMEFRAME                     | Set timeframe in seconds                                                                           | 600               |             |
| PERIOD                        | Set period in seconds                                                                              | 60                |             |
| WARNINGCPUUTILIZATIONAVERAGE  | Threshold                                                                                          | 80                |             |
| CRITICALCPUUTILIZATIONAVERAGE | Threshold                                                                                          | 90                |             |
| EXTRAOPTIONS                  | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
<TabItem value="ElastiCache-Evictions" label="ElastiCache-Evictions">

| Macro                    | Description                                                                                                                            | Default value       | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                             | average             |             |
| TIMEFRAME                | Set timeframe in seconds                                                                                                               | 600                 |             |
| PERIOD                   | Set period in seconds                                                                                                                  | 60                  |             |
| FILTERMETRIC             | Filter metrics (can be: 'Evictions', 'Reclaimed')  (can be a regexp)                                                                   |                     |             |
| WARNINGEVICTIONSAVERAGE  | Threshold                                                                                                                              |                     |             |
| CRITICALEVICTIONSAVERAGE | Threshold                                                                                                                              |                     |             |
| WARNINGRECLAIMEDAVERAGE  | Threshold                                                                                                                              |                     |             |
| CRITICALRECLAIMEDAVERAGE | Threshold                                                                                                                              |                     |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Items" label="ElastiCache-Items">

| Macro                    | Description                                                                                                                            | Default value       | Mandatory   |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                             | average             |             |
| TIMEFRAME                | Set timeframe in seconds                                                                                                               | 600                 |             |
| PERIOD                   | Set period in seconds                                                                                                                  | 60                  |             |
| FILTERMETRIC             | Filter metrics (can be: 'CurrItems', 'NewItems')  (can be a regexp)                                                                    |                     |             |
| WARNINGCURRITEMSAVERAGE  | Threshold                                                                                                                              |                     |             |
| CRITICALCURRITEMSAVERAGE | Threshold                                                                                                                              |                     |             |
| WARNINGNEWITEMSAVERAGE   | Threshold                                                                                                                              |                     |             |
| CRITICALNEWITEMSAVERAGE  | Threshold                                                                                                                              |                     |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Network" label="ElastiCache-Network">

| Macro                          | Description                                                                                                                            | Default value       | Mandatory   |
|:-------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                      | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                             | average             |             |
| TIMEFRAME                      | Set timeframe in seconds                                                                                                               | 600                 |             |
| PERIOD                         | Set period in seconds                                                                                                                  | 60                  |             |
| FILTERMETRIC                   | Filter metrics (can be: 'NetworkBytesIn', 'NetworkBytesOut')  (can be a regexp)                                                        |                     |             |
| WARNINGNETWORKBYTESINAVERAGE   | Threshold                                                                                                                              |                     |             |
| CRITICALNETWORKBYTESINAVERAGE  | Threshold                                                                                                                              |                     |             |
| WARNINGNETWORKBYTESOUTAVERAGE  | Threshold                                                                                                                              |                     |             |
| CRITICALNETWORKBYTESOUTAVERAGE | Threshold                                                                                                                              |                     |             |
| EXTRAOPTIONS                   | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Replication" label="ElastiCache-Replication">

| Macro                           | Description                                                                                                                            | Default value       | Mandatory   |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                       | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                             | average             |             |
| TIMEFRAME                       | Set timeframe in seconds                                                                                                               | 600                 |             |
| PERIOD                          | Set period in seconds                                                                                                                  | 60                  |             |
| FILTERMETRIC                    | Filter metrics (can be: 'ReplicationBytes', 'ReplicationLag')  (can be a regexp)                                                       |                     |             |
| WARNINGREPLICATIONBYTESAVERAGE  | Threshold                                                                                                                              |                     |             |
| CRITICALREPLICATIONBYTESAVERAGE | Threshold                                                                                                                              |                     |             |
| WARNINGREPLICATIONLAGAVERAGE    | Threshold                                                                                                                              |                     |             |
| CRITICALREPLICATIONLAGAVERAGE   | Threshold                                                                                                                              |                     |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Requests" label="ElastiCache-Requests">

| Macro                      | Description                                                                                                                            | Default value       | Mandatory   |
|:---------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:--------------------|:-----------:|
| STATISTIC                  | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                             | average             |             |
| TIMEFRAME                  | Set timeframe in seconds                                                                                                               | 600                 |             |
| PERIOD                     | Set period in seconds                                                                                                                  | 60                  |             |
| FILTERMETRIC               | Filter metrics (can be: 'CacheHits', 'CacheMisses')  (can be a regexp)                                                                 |                     |             |
| WARNINGCACHEHITSAVERAGE    | Threshold                                                                                                                              |                     |             |
| CRITICALCACHEHITSAVERAGE   | Threshold                                                                                                                              |                     |             |
| WARNINGCACHEMISSESAVERAGE  | Threshold                                                                                                                              |                     |             |
| CRITICALCACHEMISSESAVERAGE | Threshold                                                                                                                              |                     |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --per-sec --verbose |             |

</TabItem>
<TabItem value="ElastiCache-Usage" label="ElastiCache-Usage">

| Macro                            | Description                                                                                                                            | Default value     | Mandatory   |
|:---------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| STATISTIC                        | Set CloudWatch statistics (can be: 'minimum', 'maximum', 'average', 'sum')                                                             | average           |             |
| TIMEFRAME                        | Set timeframe in seconds                                                                                                               | 600               |             |
| PERIOD                           | Set period in seconds                                                                                                                  | 60                |             |
| WARNINGBYTESUSEDFORCACHEAVERAGE  | Threshold                                                                                                                              |                   |             |
| CRITICALBYTESUSEDFORCACHEAVERAGE | Threshold                                                                                                                              |                   |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). All options are listed [here](#available-options). | --verbose         |             |

</TabItem>
</Tabs>

3. [Deploy the configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). The service appears in the list of services, and on the **Resources Status** page. The command that is sent by the connector is displayed in the details panel of the service: it shows the values of the macros.

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`). Test that the connector 
is able to monitor an AWS Instance using a command like this one (replace the sample values by yours):

```bash
/usr/lib/centreon/plugins/centreon_aws_elasticache_api.pl \
	--plugin=cloud::aws::elasticache::plugin \
	--mode=cpu \
	--custommode='' \
	--aws-secret-key='XXXX' \
	--aws-access-key='XXXX' \
	--aws-role-arn='' \
	--region='eu-west-1' \
	--name='' \
	--node-id='' \
	--proxyurl=''  \
	--statistic='average' \
	--timeframe='600' \
	--period='60' \
	--warning-cpuutilization-average='80' \
	--critical-cpuutilization-average='90' \
	--verbose
```

The expected command output is shown below:

```bash
OK: Cluster 'Cluster A' average CPUUtilization: 27.00 % | 'cpuutilization_average'=27.00%;0:80;0:90;0;100
Cluster 'Cluster A' average CPUUtilization: 27.00 %
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
/usr/lib/centreon/plugins/centreon_aws_elasticache_api.pl \
	--plugin=cloud::aws::elasticache::plugin \
	--list-mode
```

The plugin brings the following modes:

| Mode                                                                                                                                       | Linked service template                             |
|:-------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|
| commands-memcached [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/commandsmemcached.pm)] | Cloud-Aws-ElastiCache-Commands-Memcached-Api-custom |
| commands-redis [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/commandsredis.pm)]         | Cloud-Aws-ElastiCache-Commands-Redis-Api-custom     |
| connections [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/connections.pm)]              | Cloud-Aws-ElastiCache-Connections-Api-custom        |
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/cpu.pm)]                              | Cloud-Aws-ElastiCache-Cpu-Api-custom                |
| discovery [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/discovery.pm)]                  | Used for host discovery                             |
| evictions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/evictions.pm)]                  | Cloud-Aws-ElastiCache-Evictions-Api-custom          |
| items [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/items.pm)]                          | Cloud-Aws-ElastiCache-Items-Api-custom              |
| network [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/network.pm)]                      | Cloud-Aws-ElastiCache-Network-Api-custom            |
| replication [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/replication.pm)]              | Cloud-Aws-ElastiCache-Replication-Api-custom        |
| requests-memcached [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/requestsmemcached.pm)] | Cloud-Aws-ElastiCache-Requests-Memcached-Api-custom |
| requests-redis [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/requestsredis.pm)]         | Cloud-Aws-ElastiCache-Requests-Redis-Api-custom     |
| usage-memcached [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/usagememcached.pm)]       | Cloud-Aws-ElastiCache-Usage-Memcached-Api-custom    |
| usage-redis [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/cloud/aws/elasticache/mode/usageredis.pm)]               | Cloud-Aws-ElastiCache-Usage-Redis-Api-custom        |

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
<TabItem value="ElastiCache-Commands" label="ElastiCache-Commands">

| Option                          | Description                                                                                                                                                                                                                                                            |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                            |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                                                                                                                                                                     |
| --node-id                       |   Set the node ID (optional).                                                                                                                                                                                                                                          |
| --filter-metric                 |   Filter metrics (can be: 'GetTypeCmds', 'HashBasedCmds', 'KeyBasedCmds', 'ListBasedCmds', 'SetBasedCmds', 'SetTypeCmds', 'SortedSetBasedCmds', 'StringBasedCmds', 'HyperLogLogBasedCmds')  (can be a regexp).                                                         |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'gettypecmds', 'hashbasedcmds', 'keybasedcmds', 'listbasedcmds', 'setbasedcmds', 'settypecmds', 'sortedsetbasedcmds', 'stringbasedcmds', 'hyperloglogbasedcmds', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'gettypecmds', 'hashbasedcmds', 'keybasedcmds', 'listbasedcmds', 'setbasedcmds', 'settypecmds', 'sortedsetbasedcmds', 'stringbasedcmds' 'hyperloglogbasedcmds', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                                                                                                                                                                      |

</TabItem>
<TabItem value="ElastiCache-Connections" label="ElastiCache-Connections">

| Option                          | Description                                                                                                                                 |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                 |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                                          |
| --node-id                       |   Set the node ID (optional).                                                                                                               |
| --filter-metric                 |   Filter metrics (can be: 'CurrConnections', 'NewConnections')  (can be a regexp).                                                          |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'currconnections', 'newconnections', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'currconnections', 'newconnections', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                                           |

</TabItem>
<TabItem value="ElastiCache-Cpu" label="ElastiCache-Cpu">

| Option                      | Description                                                                                                                   |
|:----------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters           |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --name                      |   Set the cluster name (required) (can be defined multiple times).                                                            |
| --node-id                   |   Set the node ID (optional).                                                                                                 |
| --warning-cpuutilization-*  |   Warning thresholds (* can be: 'minimum', 'maximum', 'average', 'sum').                                                      |
| --critical-cpuutilization-* |   Critical thresholds (* can be: 'minimum', 'maximum', 'average', 'sum').                                                     |

</TabItem>
<TabItem value="ElastiCache-Evictions" label="ElastiCache-Evictions">

| Option                          | Description                                                                                                                      |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'      |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                               |
| --node-id                       |   Set the node ID (optional).                                                                                                    |
| --filter-metric                 |   Filter metrics (can be: 'Evictions', 'Reclaimed')  (can be a regexp).                                                          |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'evictions', 'reclaimed', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'evictions', 'reclaimed', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                                |

</TabItem>
<TabItem value="ElastiCache-Items" label="ElastiCache-Items">

| Option                          | Description                                                                                                                     |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'     |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                              |
| --node-id                       |   Set the node ID (optional).                                                                                                   |
| --filter-metric                 |   Filter metrics (can be: 'CurrItems', 'NewItems')  (can be a regexp).                                                          |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'curritems', 'newitems', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'curritems', 'newitems', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                               |

</TabItem>
<TabItem value="ElastiCache-Network" label="ElastiCache-Network">

| Option                          | Description                                                                                                                                 |
|:--------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                 |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                                          |
| --node-id                       |   Set the node ID (optional).                                                                                                               |
| --filter-metric                 |   Filter metrics (can be: 'NetworkBytesIn', 'NetworkBytesOut')  (can be a regexp).                                                          |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'networkbytesin', 'networkbytesout', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'networkbytesin', 'networkbytesout', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                                           |

</TabItem>
<TabItem value="ElastiCache-Replication" label="ElastiCache-Replication">

| Option                          | Description                                                                                                                                  |
|:--------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                  |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                                           |
| --node-id                       |   Set the node ID (optional).                                                                                                                |
| --filter-metric                 |   Filter metrics (can be: 'ReplicationBytes', 'ReplicationLag')  (can be a regexp).                                                          |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'replicationbytes', 'replicationlag', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'replicationbytes', 'replicationlag', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                                            |

</TabItem>
<TabItem value="ElastiCache-Requests" label="ElastiCache-Requests">

| Option                          | Description                                                                                                                        |
|:--------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'        |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                                 |
| --node-id                       |   Set the node ID (optional).                                                                                                      |
| --filter-metric                 |   Filter metrics (can be: 'CacheHits', 'CacheMisses')  (can be a regexp).                                                          |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'cachehits', 'cachemisses', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').    |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'cachehits', 'cachemisses', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').   |
| --per-sec                       |   Change the data to be unit/sec.                                                                                                  |

</TabItem>
<TabItem value="ElastiCache-Usage" label="ElastiCache-Usage">

| Option                          | Description                                                                                                                   |
|:--------------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters               |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --name                          |   Set the cluster name (required) (can be defined multiple times).                                                            |
| --node-id                       |   Set the node ID (optional).                                                                                                 |
| --warning-$metric$-$statistic$  |   Warning thresholds ($metric$ can be: 'bytesusedforcache', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').      |
| --critical-$metric$-$statistic$ |   Critical thresholds ($metric$ can be: 'bytesusedforcache', $statistic$ can be: 'minimum', 'maximum', 'average', 'sum').     |

</TabItem>
</Tabs>

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_elasticache_api.pl \
	--plugin=cloud::aws::elasticache::plugin \
	--mode=cpu \
	--help
```
