---
id: cloud-aws-efs
title: Amazon EFS
---

## Overview

Amazon Elastic File System (Amazon EFS) provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources. It is built to scale on demand to petabytes without disrupting applications, growing and shrinking automatically as you add and remove files, eliminating the need to provision and manage capacity to accommodate growth.

## Plugin Pack Assets

### Monitored Objects

* Filesystems

### Discovery Rules

This pack provides a host discovery rule:

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

| Rule name                             | Description                                                   |
| :------------------------------------ | :------------------------------------------------------------ |
| Cloud-Aws-Efs-Api-HostDiscovery       | Discover File Systems from your Cloudwatch endpoint           |

<!--Services-->

No services discovery rule available on this pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Collected Metrics

More information about collected metrics is available in the official Amazon documentation: https://docs.aws.amazon.com/efs/latest/ug/monitoring-cloudwatch.html

<!--DOCUSAURUS_CODE_TABS-->
<!--Connections-->

| Metric name         | Description                                                     |
| :------------------ | :-------------------------------------------------------------- |
| ClientConnections   | The number of client connections to a file system. Units: Count |


<!--Data Usage-->

| Metric name        | Description                                                                                                                                                                                |
| :----------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| DataReadIOBytes    | The number of bytes for each file system read operation. Units: Bytes                                                                                                                      |
| DataWriteIOBytes   | The number of bytes for each file write operation. Units: Bytes                                                                                                                            |
| MetadataIOBytes    | The number of bytes for each metadata operation. Units: Bytes                                                                                                                              |
| TotalIOBytes       | The number of bytes for each file system operation, including data read, data write, and metadata operations. Units: Bytes                                                                 |
| BurstCreditBalance | The number of burst credits that a file system has. Burst credits allow a file system to burst to throughput levels above a file system’s baseline level for periods of time. Units: Bytes |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### AWS Privileges 

Whether using a service account or a dedicated monitoring account to monitor Cloudwatch metrics, the following rights have to be granted to the IAM role (accesskey/secretkey):

| AWS Privilege                         | Description                                          |
| :------------------------------------ | :--------------------------------------------------- |
| elasticfilesystem:DescribeFileSystems | List all EFS Filesystems IDs                         |
| cloudwatch:listMetrics                | List all metrics from Cloudwatch AWS/EFS namespace   |
| cloudwatch:getMetricStatistics        | Get metrics values from Cloudwatch AWS/EFS namespace |

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

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every poller monitoring EFS ressources:

```bash
yum install centreon-plugin-Cloud-Aws-Efs-Api
```

2. On Centreon Web interface in "Configuration > Plugin packs > Manager", install the "Amazon EFS" Plugin Pack:


<!--Offline IMP License-->

1. Install the Centreon Plugin on every poller monitoring EFS ressources:

```bash
yum install centreon-plugin-Cloud-Aws-Efs-Api
```

2. Installer the Plugin Pack from the RPM:

```bash
yum install centreon-pack-cloud-aws-efs.noarch
```

3. On Centreon Web interface in "Configuration > Plugin packs > Manager", install the "Amazon EFS" Plugin Pack:


<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Adding a host into Centreon, link it to the template named "Cloud-Aws-EFS-custom". Once the template applied, some macros have to be configured:

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
| X           | AWSFILESYSTEMID | Name of the FileSystem to be monitored                                                      |
|             | PROXYURL        | Configure proxy URL information                                                             |
|             | EXTRAOPTIONS    | Any extraoptions you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it until you know what you are doing               |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your poller using the centreon-engine user account and test by running the following command (Parameters such as ```name``` and ```proxyurl```have to be adjusted):

```bash
/usr/lib/centreon/plugins//centreon_aws_efs_api.pl \
    --plugin=cloud::aws::efs::plugin \
    --mode=connections \
    --custommode='awscli' \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --name='fs-1234abcd' \
    --proxyurl='http://myproxy.mycompany.org:8080'
    --filter-metric='' \
    --statistic='average' \
    --timeframe='600' \
    --period='60' \
    --warning-client-connections='25' \
    --critical-client-connections='50' \
    --verbose

OK: 'fs-1234abcd' Statistic 'Sum' Metrics ClientConnections: 19.00 | 'client-connections_sum'=19;;;;
EFS FileSystemId'fs-1234abcd'
Statistic 'Sum' Metrics ClientConnections: 19.00

```

The command above gets the number of client connections (```--mode=connections```) on the *fs-1234abcd* filesystem (```--name='fs-1234abcd'```). This filesystem is hosted on the *eu-west-1* AWS region cloud (```--region='eu-west-1'```). The calculated metric is a sum of values (```--statistic='sum'```) on a 600 secondes / 10 min period (```--timeframe='600'```) with one sample per 60s / 1 minute (```--period='60'```).

This command would trigger a WARNING alert if the calculated value raises beyond 25 and a CRITICAL value beyond 50.

All the options that can be used with this plugin can be found over the ```--help``` command:

```/usr/lib/centreon/plugins//centreon_aws_efs_api.pl --plugin=cloud::aws::efs::plugin --mode=connections --help```


### Why do I get the following result ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values``` ?

This command result means that Amazon Cloudwatch does not have any value for the requested period.
This result can be overriden by adding the ```--zeroed``` option in the command. This will force a value of 0 when no metric has been collected and will prevent the UNKNOWN error message
