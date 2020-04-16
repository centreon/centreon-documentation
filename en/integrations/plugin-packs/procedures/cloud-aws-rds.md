---
id: cloud-aws-rds
title: Amazon RDS
---

## Overview

Amazon Relational Database Service (Amazon RDS) makes it easy to set up, operate, and scale a relational database in the cloud. It provides cost-efficient and resizable capacity while automating time-consuming administration tasks such as hardware provisioning, database setup, patching and backups. It frees you to focus on your applications so you can give them the fast performance, high availability, security and compatibility they need.

## Connector Pack content

### Monitored objects

* Instances (MySQL, MariaDB, Oracle, SQL Server ...)
* Clusters (Aurora, ...)

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

| Rule name                       | Description                                                   |
| :------------------------------ | :------------------------------------------------------------ |
| Cloud-Aws-Rds-Api-HostDiscovery | Discover Instances and Clusters from your Cloudwatch endpoint |

<!--Services-->

No services discovery rule available on this pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Monitored metrics 

You can get an overview of all gathered metrics from AWS/RDS in the official documentation: https://docs.aws.amazon.com/rds/index.html

<!--DOCUSAURUS_CODE_TABS-->
<!--Connections-->

| Metric name         | Description                                          |
| :------------------ | :--------------------------------------------------- |
| DatabaseConnections | Number of connections to the dtatabase. Unit: Count  |

<!--Cpu-->

| Metric name      | Description                                                                            |
| :--------------- | :------------------------------------------------------------------------------------- |
| CPUCreditBalance | Balance of allocated CPU credit to this type of instance. Unit: Credits (vCPU-minutes) |
| CPUCreditUsage   | Number of CPU credit consumed. Unit: Credits (vCPU-minutes)                            |
| CPUUtilization   | The percentage of CPU utilization. Unit: Percent                                       |

<!--Disk-IO-->

| Metric name     | Description                                                                                  |
| :-------------- | :------------------------------------------------------------------------------------------- |
| ReadIOPS        | The average number of disk read I/O operations per second. Unit: Count/Second                |
| WriteIOPS       | The average number of disk write I/O operations per second. Unit: Count/Second               |
| ReadThroughput  | The average number of bytes read from disk per second. Unit: Bytes/Second                    |
| WriteThroughput | The average number of bytes write to disk per second. Unit: Bytes/Second                     |
| ReadLatency     | The average amount of time taken per disk I/O read operation. Unit: Seconds                  |
| WriteLatency    | The average amount of time taken per disk I/O write operation. Unit: Seconds                 |
| DiskQueueDepth  | The number of outstanding IOs (read/write requests) waiting to access the disk. Unit: Count  |

<!--Network-->

| Metric name               | Description                                                                                                                                              |
| :------------------------ | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NetworkReceiveThroughput  | The incoming traffic on the DB instance, including both customer db traffic and AWS/RDS traffic used for monitoring and replication. Unit: Bytes/Second  |
| NetworkTransmitThroughput | The outgoing traffic on the DB instance, including both customer db traffic and AWS/RDS traffic used for monitoring and replication. Unit: Bytes/Second  |

<!--Queries-->

| Metric name      | Description                                                                                             |
| :--------------- | :------------------------------------------------------------------------------------------------------ |
| Queries          | The average number of queries executed per second **(Only available on Aurora MySQL)**                  |
| InsertThroughput | The average number of insert queries per second **(Only available on Aurora MySQL)**                    |
| SelectThroughput | The average number of select queries per second **(Only available on Aurora MySQL)**                    |
| DeleteThroughput | The average number of delete queries per second **(Only available on Aurora MySQL)**                    |
| UpdateThroughput | The average number of update queries per second **(Only available on Aurora MySQL)**                    |
| DDLThroughput    | The average number of DataDefinitionLanguage requests per second **(Only available on Aurora MySQL)**   |
| DMLThroughput    | The average number of DataModificationLanguage requests per second **(Only available on Aurora MySQL)** |

<!--Transactions-->

| Metric name         | Description                                                                                                                                                                                                                  |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ActiveTransactions  | The average number of current transactions executing on an Aurora database instance per second. **(Only available on Aurora MySQL) Set innodb\_monitor\_enable='all' in the DB parameter group for a specific DB instance.** |
| BlockedTransactions | The average number of transactions in the database that are blocked per second **(Only available on Aurora MySQL)**                                                                                                          |
| CommitLatency       | The amount of latency for commit operations, in milliseconds **(Only available on Aurora MySQL and Postgres)**                                                                                                               |
| CommitThroughput    | The average number of commit operations per second **(Only available on Aurora MySQL and Postgres)**                                                                                                                         |

<!--Volume-->

| Metric name     | Description                                                                                                                                                    |
| :-------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| VolumeBytesUsed | The amount of storage used by your Aurora DB instance, in bytes and then affecting the cost of your instance **(Only available on Aurora MySQL and Postgres)** |
| VolumeReadIOPs  | The number of billed read I/O operations from a cluster volume, reported at 5-minute intervals. **(Only available on Aurora MySQL and Postgres)**              |
| VolumeWriteIOPs | The number of write disk I/O operations to the cluster volume, reported at 5-minute intervals. **(Only available on Aurora MySQL and Postgres)**               |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisistes

### AWS Configuration

Wether you are using a service account or a dedicated monitoring one, your IAM role (combo access/secret key) must have the following rights:

| AWS Privilege                  | Description                                                        |
| :----------------------------- | :----------------------------------------------------------------- |
| rds:DescribeDBInstances        | Display RDS instances & cluster descriptions                       |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/RDS namespace on Cloudwatch               |


### Plugin dependencies

To interact with Amazon APIs, you can use either use awscli binary or paws, a perl AWS SDK (recommended). You must install it on every poller that will monitor AWS resources. 

**Warning** At the moment it is not possible to use perl-Paws if you are using a proxy to talk with AWS Cloudwatch APIs. 

<!--DOCUSAURUS_CODE_TABS-->

<!--perl-Paws-installation-->

```bash
yum install perl-Paws
```

<!--aws-cli-installation-->

```bash
yum install awscli
```

<!--END_DOCUSAURUS_CODE_TABS-->

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every poller expected to monitor Amazon RDS ressources:

```bash
yum install centreon-plugin-Cloud-Aws-Rds-Api
```

2. Install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page


<!--Offline IMP License-->

1. Install the Centreon Plugin package on every poller expected to monitor Amazon RDS ressources:

```bash
yum install centreon-plugin-Cloud-Aws-Rds-Api
```

2. Install the Centreon Plugin-Pack RPM:

```bash
yum install centreon-pack-cloud-aws-rds.noarch
```

3. Install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Addinge a new host into Centreon, apply the relevant host template matching your instance/cluster type. All of the host templates begin with "Cloud-Aws-Rds-". Once the template chosen, you have to set values on the macros marked as mandatory: 

| Mandatory | Nom             | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
| X           | AWSINSTANCENAME | Name of the instance you want to monitor                                                    |
| X           | AWSINSTANCETYPE | Type of instance to check ('instance' or 'cluster')                                         |
|             | PROXYURL        | Configure proxy URL information                                                             |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it until you know what you are doing               |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

## FAQ

### How can I test it through the CLI and what is the meaning of the command_line parameters ?

Logging with the centreon-engine user, you can directly run the plugin from the command line interface : 

```bash
/usr/lib/centreon/plugins//centreon_aws_rds_api.pl \
    --plugin=cloud::aws::rds::plugin \
    --mode=connections \
    --custommode='awscli' \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --type='cluster' \
    --name='dev-cluster' \
    --environment='HTTPS_PROXY=http://proxy.int.company.com:3128/' \
    --filter-metric='' \
    --statistic='average' \
    --timeframe='600' \
    --period='60' \
    --warning-databaseconnections-average='25' \
    --critical-databaseconnections-average='50' \
    --verbose

OK: Cluster 'dev-cluster' average DatabaseConnections: 3 | 'dev-cluster#databaseconnections_average'=3;25;50;0;
Cluster 'dev-cluster' average DatabaseConnections: 3

```

This command aims to monitor the connections number (```--mode=connections```) on an Aurora db cluster (```--type='cluster'```) whose name is dev-cluster (```--name='dev-cluster'```). This cluster is deployed within the AWS eu-west-1 region (```--region='eu-west-1'```). The collected metrics will be parsed as average statistics (```--statistic='average'```) over a timeframe of 600 secondes (```--timeframe='600'```) with a sample of 1 point per minute (```--period='60'```).

A WARNING alert will be triggered if the value raises beyond 25 and a CRITICAL alert beyond 50 (```--warning-databaseconnections-average='25' --critical-databaseconnections-average='50'```).

All options are described through the plugin help:

```/usr/lib/centreon/plugins//centreon_aws_rds_api.pl --plugin=cloud::aws::rds::plugin --mode=<modename> --help```


### UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values

When using AWS monitoring checks, I get the following message 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

It may happen when the AWS Cloudwatch service doesn't have any entry for that period or this specific metric is not available on this instance. 

Most of the time, it is due to AWS Cloudwatch not storing any value because there isn't any activity related to the instance (e.g no transactions or IO disk in the last 10 minutes). 

You can bypass this message adding ' --zeroed' flag within your **service** EXTRAOPTIONS macro to make the plugin return a 0 instead of this message. 
