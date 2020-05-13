---
id: cloud-aws-ebs
title: Amazon EBS
---

## Overview

Amazon Elastic Block Store (Amazon EBS) provides block level storage volumes for use with EC2 instances. 
EBS volumes behave like raw, unformatted block devices. You can mount these volumes as devices on your instances. 
You can mount multiple volumes on the same instance, and you can mount a volume to multiple instances at a time. 
You can create a file system on top of these volumes, or use them in any way you would use a block device (like a hard drive). 
You can dynamically change the configuration of a volume attached to an instance.

The Amazon EBS Centreon Plugin uses the Amazon Cloudwatch API to collect the related EBS metrics.

## Plugin-Pack assets

### Monitored objects

* EBS volumes: standard, gp2, st1, sc1 & io1

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

| Rule name                       | Description          |
| :------------------------------ | :------------------- |
| Cloud-Aws-Ebs-Api-HostDiscovery | Discover EBS volumes |


<!--Services-->

No services discovery rule available on this pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Monitored metrics 

You can get more details on Amazon EBS Cloudwatch metrics in the official AWS documentation: 
https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using_cloudwatch_ebs.html

<!--DOCUSAURUS_CODE_TABS-->


<!--Ebs-Volume-Io-->

| Metric name      | Description                                                                             |
| :--------------- | :-------------------------------------------------------------------------------------- |
| VolumeReadBytes  | Provides information on the read operations in a specified period of time. Unit: Bytes  |
| VolumeWriteBytes | Provides information on the write operations in a specified period of time. Unit: Bytes |


<!--Ebs-Iops-->

| Metric name                | Description                                                                                                                           |
| :------------------------- | :------------------------------------------------------------------------------------------------------------------------------------ |
| VolumeReadOps              | The total number of read operations in a specified period of time. Unit: Count                                                        |
| VolumeWriteOps             | The total number of write operations in a specified period of time. Unit: Count                                                       |
| VolumeThroughputPercentage | The percentage of I/O operations per second (IOPS) delivered of the total IOPS provisioned for an Amazon EBS volume. Unit: Percent    |
| VolumeConsumedReadWriteOps | The total amount of read and write operations (normalized to 256K capacity units) consumed in a specified period of time. Unit: Count |
| VolumeQueueLength          | The number of read and write operation requests waiting to be completed in a specified period of time. Unit: Count                    |


<!--Ebs-Time-->


| Metric name          | Description                                                                                                              |
| :------------------- | :----------------------------------------------------------------------------------------------------------------------- |
| VolumeTotalReadTime  | The total number of seconds spent by all read operations that completed in a specified period of time. Unit: Seconds     |
| VolumeTotalWriteTime | The total number of seconds spent by all write operations that completed in a specified period of time. Unit: Seconds    |
| VolumeIdleTime       | The total number of seconds in a specified period of time when no read or write operations were submitted. Unit: Seconds |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### AWS Configuration

Configure a service account (*access/secret keys* combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| ec2:DescribeVolumes            | Describes the specified EBS volumes or all of your EBS volumes. |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/EBS namespace on Cloudwatch            |

### Plugin dependencies

To interact with Amazon APIs, you can use either use the *awscli* binary provided by Amazon or *paws*, a Perl AWS SDK (recommended). 
You must install it on every Centreon poller expected to monitor Amazon EBS resources: 

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


> **Warning** For now, it is not possible to use *paws* in the following situations:
> * if you are using a proxy to reach AWS Cloudwatch APIs. 
> * to automatically add Hosts in Centreon using the *Host Discovery* feature



## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Amazon EBS ressources:

```bash
yum install centreon-plugin-Cloud-Aws-Ebs-Api
```

2. On the Centreon Web interface, install the 'Amazon EBS' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page


<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Amazon EBS resources:

```bash
yum install centreon-plugin-Cloud-Aws-Ebs-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-aws-ec2.noarch
```

3. On the Centreon Web interface, install the 'Amazon EBS' Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Log into Centreon and add a new Host through "Configuration > Hosts". Select the *Cloud-Aws-Ebs-custom* template to apply to the Host.

Once the template applied, some Macros have to be configured:


| Mandatory   | Nom             | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
| X           | AWSVOLUMEID		| EBS Volume ID                                                                               |
|             | PROXYURL        | Configure proxy URL                                                                         |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it unless you know what you are doing              |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |


## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account and test the Plugin 
by running the following command (Some of the parameters such as ```volumeid``` and ```proxyurl``` have to be adjusted):

```bash
/usr/lib/centreon/plugins//centreon_aws_ebs_api.pl \
	--plugin=cloud::aws::ebs::plugin \
	--mode=volumeio \
	--custommode='awscli' \
	--aws-secret-key='***' \
	--aws-access-key='***' \
	--region='eu-west-1' \
	--proxyurl='http://myproxy.mycompany.org:8080' \
	--volumeid='vol-1234abcd' \
	--statistic='average' \
	--timeframe='600' \
	--period='60' \
	--warning-volume-write-bytes='60000000' \
	--critical-volume-write-bytes='90000000' \
	-- verbose
```

Expected command output is shown below: 

```bash 	
OK: 'vol-1234abcd' Statistic 'Average' Metrics Volume Read Bytes: 28.40 KB, Volume Write Bytes: 54.61 MB | 
'vol-1234abcd~average#ebs.volume.bytes.read.bytes'=29081.60B;;;; 'vol-1234abcd~average#ebs.volume.bytes.write.bytes'=57261465.60B;0:60000000;0:90000000;;
AWS EBS Volume'vol-1234abcd'
    Statistic 'Average' Metrics Volume Read Bytes: 28.40 KB, Volume Write Bytes: 54.61 MB
```

The command above monitors the Volume IOs  (```--mode=volumeio```) of the *vol-1234abcd* EBS volume (```--volumeid='vol-1234abcd'```). 
This volume is hosted within the AWS *eu-west-1* region (```--region='eu-west-1'```). 
The collected metrics will be parsed as average statistics (```--statistic='average'```) over a timeframe of 600 secondes (```--timeframe='600'```) 
with a sample of 1 point per minute (```--period='60'```).

This command would trigger a WARNING alert if the average writing operations on the volume are higher than 60MB and a CRITICAL alert if they're higher than 90MB.

All the options that can be used with this Plugin can be displayed by adding the  ```--help``` parameter to the command:

```
/usr/lib/centreon/plugins/centreon_aws_ebs_api.pl --plugin=cloud::aws::ebs::plugin --mode=volumeio --help
```

### Why do I get the following result: 

#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values``` ?

This command result means that Amazon Cloudwatch does not have any value for the requested period.

This result can be overriden by adding the ```--zeroed``` option in the command. This will force a value of 0 when no metric 
has been collected and will prevent the UNKNOWN error message. 

#### ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]``` ? 

This command result means that the credentials provided don't have enough privileges to perform the underlying AWS Operation.

#### ```UNKNOWN: Command error:  - An error occurred (InvalidParameterValue) [...]```

Most of the time, this command result highlights typo/mispelling in the Amazon Dimension name (```--volumeid```).