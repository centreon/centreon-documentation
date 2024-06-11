---
id: cloud-aws-elasticache
title: Amazon ElastiCache
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **Amazon ElastiCache** brings 3 different host templates:

* Cloud-Aws-ElastiCache-custom
* Cloud-Aws-ElastiCache-Memcached-custom
* Cloud-Aws-ElastiCache-Redis-custom

It brings the following service templates:

| Service Alias           | Service Template                             | Service Description            | Default |
|:------------------------|:---------------------------------------------|:-------------------------------|:--------|
| ElastiCache-Commands    | Cloud-Aws-ElastiCache-Commands-Memcached-Api | Check Memcached performances   | X       |
| ElastiCache-Commands    | Cloud-Aws-ElastiCache-Commands-Redis-Api     | Check Redis performances       | X       |
| ElastiCache-Connections | Cloud-Aws-ElastiCache-Connections-Api        | Check connections number       | X       |
| ElastiCache-Cpu         | Cloud-Aws-ElastiCache-Cpu-Api                | Check CPU utilization          | X       |
| ElastiCache-Evictions   | Cloud-Aws-ElastiCache-Evictions-Api          | Check evictions number         | X       |
| ElastiCache-Items       | Cloud-Aws-ElastiCache-Items-Api              | Check items number             | X       |
| ElastiCache-Network     | Cloud-Aws-ElastiCache-Network-Api            | Check network usage            | X       |
| ElastiCache-Replication | Cloud-Aws-ElastiCache-Replication-Api        | Check replication performances | X       |
| ElastiCache-Requests    | Cloud-Aws-ElastiCache-Requests-Memcached-Api | Check Memcached performances   | X       |
| ElastiCache-Requests    | Cloud-Aws-ElastiCache-Requests-Redis-Api     | Check Redis performances       | X       |
| ElastiCache-Usage       | Cloud-Aws-ElastiCache-Usage-Memcached-Api    | Check Memcached space usage    | X       |
| ElastiCache-Usage       | Cloud-Aws-ElastiCache-Usage-Redis-Api        | Check Redis space usage        | X       |

### Discovery rules

The pack provides a discovery rule to automatically discover Elasticache resources.


More information about the Host Discovery module is available in the Centreon documentation: [Host Discovery](/onprem/monitoring/discovery/hosts-discovery)

### Collected metrics & status
<Tabs groupId="sync">
<TabItem value="ElastiCache-Commands" label="ElastiCache-Commands">

| Metric name      | Description       | Unit                                                                     |
| :--------------- | :-----------------|:-------------------------------------------------------------------- |
| CPUUtilization   | The percentage of CPU utilization. | Percent                                       |

</TabItem>
<TabItem value="ElastiCache-Connections" label="ElastiCache-Connections">

| Metric name      | Description      |       Unit                                                               |
| :--------------- | :----------------|:--------------------------------------------------------------------- |
| CurrConnections  | A count of the number of connections connected to the cache at an instant in time. ElastiCache uses two to three of the connections to monitor the cluster. In addition to the above, memcached creates a number of internal connections equal to twice the number of threads used for the node type. The thread count for the various node types can be seen in the Nodetype Specific Parameters of the applicable Parameter Group. | Count                                                                                                 |                                                                                       |
| NewConnections   | The number of new connections the cache has received. This is derived from the memcached total_connections statistic by recording the change in total_connections across a period of time. This will always be at least 1, due to a connection reserved for ElastiCache. |Count                                                                                               |

</TabItem>
<TabItem value="ElastiCache-Cpu" label="ElastiCache-Cpu">

| Metric name      | Description                        | Unit                                                    |
| :--------------- | :----------------------------------|:--------------------------------------------------- |
| CPUUtilization   | The percentage of CPU utilization. | Percent                                       |

</TabItem>
<TabItem value="ElastiCache-Evictions" label="ElastiCache-Evictions">

| Metric name      | Description     | Unit                                                                       |
| :--------------- | :---------------|:---------------------------------------------------------------------- |
| Evictions   | The number of non-expired items the cache evicted to allow space for new writes.	 | Count                                       |
| Reclaimed   | The number of expired items the cache evicted to allow space for new writes.		 | Count                                       |


</TabItem>
<TabItem value="ElastiCache-Items" label="ElastiCache-Items">

| Metric name      | Description               | Unit                                                             |
| :--------------- | :-------------------------|:------------------------------------------------------------ |
| CurrItems   | A count of the number of items currently stored in the cache.			 | Count                                      |
| NewItems   | The number of new items the cache has stored. This is derived from the memcached total_items statistic by recording the change in total_items across a period of time.	| Count      

</TabItem>
<TabItem value="ElastiCache-Network" label="ElastiCache-Network">

| Metric name      | Description          | Unit                                                                  |
| :--------------- | :--------------------|:----------------------------------------------------------------- |
| NetworkBytesIn   | The number of bytes the host has read from the network.			 | Bytes         |
| NetworkBytesIn   | 	The number of bytes sent out on all network interfaces by the instance.    | Bytes                                                                                  |

</TabItem>
<TabItem value="ElastiCache-Replication" label="ElastiCache-Replication">

| Metric name      | Description     | Unit                                                                       |
| :--------------- | :---------------|:---------------------------------------------------------------------- |
| ReplicationBytes | For nodes in a replicated configuration, ReplicationBytes reports the number of bytes that the primary is sending to all of its replicas. This metric is representative of the write load on the replication group. 			| Bytes         |
| ReplicationLag   | This metric is only applicable for a node running as a read replica. It represents how far behind, in seconds, the replica is in applying changes from the primary node. For Redis engine version 5.0.6 onwards, the lag can be measured in milliseconds.  | Seconds                   |

</TabItem>
<TabItem value="ElastiCache-Requests" label="ElastiCache-Requests">

| Metric name      | Description     | Unit                                                                       |
| :--------------- | :---------------|:---------------------------------------------------------------------- |
| CasHits |The number of Cas requests the cache has received where the requested key was found and the Cas value matched.			 |Count         |
| CasMisses   | The number of Cas requests the cache has received where the key requested was not found.  | Count                   |
| DecrHits   | The number of decrement requests the cache has received where the requested key was found.   | Count                   |
| DecrMisses   | The number of decrement requests the cache has received where the requested key was not found.   | Count                   |
| DeleteHits   | The number of delete requests the cache has received where the requested key was found.   | Count                   |
| DeleteMisses  |The number of delete requests the cache has received where the requested key was not found.  | Count                   |
| GetHits  |The number of get requests the cache has received where the key requested was found.  | Count                   |
| GetMisses  |The number of get requests the cache has received where the key requested was not found.   | Count                   |
| IncrHits  |The number of increment requests the cache has received where the key requested was found.  | Count                   |
| IncrMisses  |The number of increment requests the cache has received where the key requested was not found.   | Count                   |
| TouchHits  |The number of keys that have been touched and were given a new expiration time.  | Count                   |
| TouchMisses  |The number of items that have been touched, but were not found.   | Count                   |
| CacheHits | The number of successful read-only key lookups in the main dictionary.  | Count                   |
| CacheMisses  | The number of unsuccessful read-only key lookups in the main dictionary.    | Count            |
</TabItem>
<TabItem value="ElastiCache-Usage" label="ElastiCache-Usage">

| Metric name      | Description      | Unit                                                                      |
| :--------------- | :----------------|:--------------------------------------------------------------------- |
| BytesUsedForCacheItems |The number of bytes used to store cache items.			| Bytes         |
| BytesUsedForCache   | Dimension: Tier=Memory for Redis clusters using Data tiering: The total number of bytes used for cache by memory. This is the value of used_memory statistic at Redis  | Bytes                   |

</TabItem>
</Tabs>

## Prerequisites

### AWS Configuration

Configure a service account (access/secret key combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| elasticache:describeCacheClusters         | Returns information about all provisioned clusters if no cluster identifier is specified, or about a specific cache cluster if a cluster identifier is supplied.                                                     |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/EC2 namespace on Cloudwatch.           |

### Plugin dependencies

To interact with Amazon APIs, you can use either use the *awscli* binary provided by Amazon or *paws*, a Perl AWS SDK (recommended). You must install it on every poller expected to monitor AWS resources.

> For now, it is not possible to use *paws* if you are using a proxy to reach AWS Cloudwatch APIs.

<Tabs groupId="sync">
<TabItem value="perl-Paws-installation" label="perl-Paws-installation">

```bashn
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

## Setup

### Monitoring Pack

If the platform uses an *online* license, you can skip the package installation
instruction below as it is not required to have the pack displayed within the
**Configuration > Monitoring Connector Manager** menu.
If the platform uses an *offline* license, install the package on the **central server**
with the command corresponding to the operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-cloud-aws-elasticache
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-cloud-aws-elasticache
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-cloud-aws-elasticache
```

</TabItem>
</Tabs>

Whatever the license type (*online* or *offline*), install the **Amazon ElastiCache** Pack through
the **Configuration > Monitoring Connector Manager** menu.

### Plugin

Since Centreon 22.04, you can benefit from the 'Automatic plugin installation' feature.
When this feature is enabled, you can skip the installation part below.

You still have to manually install the plugin on the poller(s) when:
- Automatic plugin installation is turned off
- You want to run a discovery job from a poller that doesn't monitor any resource of this kind yet

> More information in the [Installing the plugin](/onprem/monitoring/pluginpacks/#installing-the-plugin) section.

Use the commands below according to your operating system's package manager:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Cloud-Aws-Elasticache-Api
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Cloud-Aws-Elasticache-Api
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-cloud-aws-elasticache-api
```

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **Elasticache** server settings.
* Apply the **Cloud-Aws-ElastiCache-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro           | Description                                                                            |
|:------------|:----------------|:---------------------------------------------------------------------------------------|
|             | AWSACCESSKEY    |                                                                                        |
|             | AWSASSUMEROLE   |                                                                                        |
|             | AWSCUSTOMMODE   |                                                                                        |
|             | AWSINSTANCENAME |                                                                                        |
|             | AWSNODEID       |                                                                                        |
|             | AWSREGION       |                                                                                        |
|             | AWSSECRETKEY    |                                                                                        |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command line (eg. a --verbose flag)      |
|             | PROXYURL        |                                                                                        |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command:

```bash
/usr/lib/centreon/plugins//centreon_aws_elasticache_api.pl \
    --plugin=cloud::aws::elasticache::plugin \
    --mode=cpu \
    --custommode='' \
    --aws-secret-key='' \
    --aws-access-key='' \
    --aws-role-arn='' \
    --region='' \
    --name='' \
    --node-id='' \
    --proxyurl='' \
    --statistic='average' \
    --timeframe='600' \
    --period='60' \
    --warning-cpuutilization-average='' \
    --critical-cpuutilization-average='' \
    --per-sec \
    --verbose \
    --use-new-perfdata
```

The expected command output is shown below:

```bash
OK: | 
```

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_elasticache_api.pl \
    --plugin=cloud::aws::elasticache::plugin \
    --mode=cpu \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_elasticache_api.pl \
    --plugin=cloud::aws::elasticache::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.