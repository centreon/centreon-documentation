---
id: cloud-aws-ec2
title: Amazon EC2
---

## Overview

Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides secure, resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers. Amazon EC2’s simple web service interface allows you to obtain and configure capacity with minimal friction. It provides you with complete control of your computing resources and lets you run on Amazon’s proven computing environment.

## Plugin-Pack assets

### Monitored objects

* EC2 standalone instances
* EC2 autoscaling groups
* EC2 Spot fleet requests

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

| Rule name                           | Description                                                   |
| :---------------------------------- | :------------------------------------------------------------ |
| Cloud-Aws-Ec2-Api-HostDiscovery-Ec2 | Discover EC2 Instances from your Cloudwatch endpoint          |
| Cloud-Aws-Ec2-Api-HostDiscovery-Asg | Discover EC2 Autoscalingroups from your Cloudwatch endpoint   |

<!--Services-->

No services discovery rule available on this pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Monitored metrics 

You can get more details on AWS/EC2 Cloudwatch metrics in the official AWS documentation: https://docs.aws.amazon.com/ec2/index.html. 

In addition to modes and metrics described here, it is also possible to monitor the following indicators:

 * Instance-Types: Number of instances of each AWS Family and associated types.
 * Instance-Status: Global heath check and count of EC2 instances.

<!--DOCUSAURUS_CODE_TABS-->

<!--Ec2-Cpu-Credit-->

This check is available with 'Cloud-Aws-Ec2-Asg' and 'Cloud-Aws-Ec2-Instance' Host Templates.

| Metric name                  | Description                                                                                                                                        |
| :--------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------- |
| CPUCreditBalance             | The number of earned CPU credits that an instance has accrued since it was launched or started. Unit: Credit vCPU-minutes)                         |
| CPUCreditUsage               | Number of CPU credit consumed. Unit: Credits (vCPU-minutes)                                                                                        |
| CPUSurplusCreditBalance      | The number of surplus credits that have been spent by an unlimited instance when its CPUCreditBalance value is zero. Credits (vCPU-minutes)        |
| CPUSurplusCreditsCharged     | The number of spent surplus credits that are not paid down by earned CPU credits, and which thus incur an additional charge. Unit: Credits(vCPU-minutes)|

<!--Ec2-Cpu-Usage-->

This check is available with 'Cloud-Aws-Ec2-Asg' and 'Cloud-Aws-Ec2-Instance' Host Templates.

| Metric name      | Description                                                                            |
| :--------------- | :------------------------------------------------------------------------------------- |
| CPUUtilization   | The percentage of CPU utilization. Unit: Percent                                       |

<!--Ec2-Diskio-->

This check is available with 'Cloud-Aws-Ec2-Asg' and 'Cloud-Aws-Ec2-Instance' Host Templates.

| Metric name     | Description                                                                                  |
| :-------------- | :------------------------------------------------------------------------------------------- |
| ReadIOPS        | The average number of disk read I/O operations per second. Unit: Count/Second                |
| WriteIOPS       | The average number of disk write I/O operations per second. Unit: Count/Second               |
| ReadThroughput  | The average number of bytes read from disk per second. Unit: Bytes/Second                    |
| WriteThroughput | The average number of bytes write to disk per second. Unit: Bytes/Second                     |
| ReadLatency     | The average amount of time taken per disk I/O read operation. Unit: Seconds                  |
| WriteLatency    | The average amount of time taken per disk I/O write operation. Unit: Seconds                 |
| DiskQueueDepth  | The number of outstanding IOs (read/write requests) waiting to access the disk. Unit: Count  |

**Important notes** This metric is most of the time irrelevant or null when applied to an AutoscalingGroup

<!--Ec2-Network-->

This check is available with 'Cloud-Aws-Ec2-Asg' and 'Cloud-Aws-Ec2-Instance' Host Templates.

| Metric name       | Description                                                                                                                                              |
| :---------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------- |
| NetworkIn         | The number of bytes received on all network interfaces by the instance. This metric identifies the volume of incoming network traffic to a single instance. Unit: Bytes/Second  |
| NetworkOut        | The number of bytes sent out on all network interfaces by the instance. This metric identifies the volume of outgoing network traffic from a single instance. Unit: Bytes/Second  |
| NetworkPacketsIn  | The number of packets received on all network interfaces by the instance. This metric identifies the volume of incoming traffic in terms of the number of packets on a single instance. This metric is available for basic monitoring only. Unit: Packets/Second  |
| NetworkPacketsOut | The number of packets sent out on all network interfaces by the instance. This metric identifies the volume of outgoing traffic in terms of the number of packets on a single instance. This metric is available for basic monitoring only. Unit: Packets/Second  |

<!--EC2Spot-Active-Instances-->

This check is available with 'Cloud-Aws-Ec2-Spot-Fleet-Request' Host Template

| Metric name         | Description                                                                   |
| :------------------ | :---------------------------------------------------------------------------- |
| ActiveInstances     | Number of active instances for a give EC2Spot fleet request. Unit: Count.     |
| HealthyInstances    | Number of healthy instances for a give EC2Spot fleet request. Unit: Count.    |
| UnhealthyInstances  | Number of unhealthy instances for a give EC2Spot fleet request. Unit: Count.  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisistes

### AWS Configuration

Configure an access/secret key combo these privileges:

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| ec2:DescribeInstances          | Display EC2 instances & ASG details                             |
| ec2:DescribeSpotFleetRequests  | Display EC2 Spot Fleet Requests details                         |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/EC2 namespace on Cloudwatch            |

### Plugin dependencies

To interact with Amazon APIs, you can use either use awscli binary or paws, a perl AWS SDK (recommended). You must install it on every poller that will monitor AWS resources. 

**Warning** At the moment it is not possible to use perl-Paws if you are using a proxy to reach AWS Cloudwatch APIs. 

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

1. Install the Centreon Plugin package on every poller expected to monitor Amazon EC2 ressources:

```bash
yum install centreon-plugin-Cloud-Aws-Ec2-Api
```

2. Install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page


<!--Offline IMP License-->

1. Install the Centreon Plugin package on every poller expected to monitor Amazon RDS ressources:

```bash
yum install centreon-plugin-Cloud-Aws-Ec2-Api
```

2. Install the Centreon Plugin-Pack RPM:

```bash
yum install centreon-pack-cloud-aws-ec2.noarch
```

3. Install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

- Log into Centreon and add a new host through "Configuration > Hosts".
- Apply the relevant Host Template. They all begins with "Cloud-Aws-Ec2*".  

All of the Host Templates share the following configuration macros:

| Mandatory   | Nom             | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
|             | PROXYURL        | Configure proxy URL                                                                         |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it until you know what you are doing               |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

Set additionnal macros that comes with the Host Templates: 

<!--DOCUSAURUS_CODE_TABS-->

<!--Cloud-Aws-Ec2-Asg-&-Cloud-Aws-Ec2-Instance-->

| Mandatory   | Nom             | Description                                                |
| :---------- | :-------------- | :--------------------------------------------------------- |
| X           | AWSINSTANCENAME | Name of the instance you want to monitor                   |
| X           | AWSINSTANCETYPE | Type of instance to check ('instance' or 'cluster')        |

<!--Cloud-Aws-Ec2-Spot-Fleet-Request-->

| Mandatory   | Nom                | Description                                             |
| :---------- | :----------------- | :------------------------------------------------------ |
| X           | SPOTFLEETREQUESTID | Spot Fleet Request identifier. (e.g: sfr-abcd1234)      |

<!--END_DOCUSAURUS_CODE_TABS-->

## FAQ

### How can I test it through the CLI and what is the meaning of the command_line parameters ?

Once the plugin installed, log into your Poller using the *centreon-engine* user account and test by running the following 
command (Some of the parameters such as ```name``` have to be adjusted):

```bash
/usr/lib/centreon/plugins//centreon_aws_ec2_api.pl
	--plugin=cloud::aws::ec2::plugin
	--mode=cpu
	--custommode='awscli'
	--aws-secret-key='***'
	--aws-access-key='AKIA5EDPTASPNBK5EMTM'
	--region='eu-west-1'
	--type='asg'
	--name='centreon-front'
	--filter-metric='Utilization'
	--statistic='average'
	--timeframe='600'
	--period='60'
	--warning-cpu-utilization='80'
	--critical-cpu-utilization='90'
```

Expected command output is shown below: 

```bash 	
OK: Asg 'centreon-front' Statistic 'Average' Metrics CPU Utilization: 35.81 | 'centreon-front~average#ec2.cpu.utilization.percentage'=35.81;80;90;;
```

The command above monitors the CPU Utilization (```--mode=cpu```) of the *centreon-front* (```--name='centreon-front'```) 
Autoscaling Group  (```--type='asg'```). This ASG is deployed  ithin the AWS eu-west-1 region (```--region='eu-west-1'```). 
The collected metrics will be parsed as average statistics (```--statistic='average'```) over a timeframe of 600 secondes (```--timeframe='600'```) 
with a sample of 1 point per minute (```--period='60'```).

This command would trigger a WARNING alert if the CPU Utilization is higher than 80% and a CRITICAL alert if higher than 90.

All the options that can be used with this plugin can be found over the ```--help``` command:

```
/usr/lib/centreon/plugins/centreon_aws_ec2_api.pl --plugin=cloud::aws::ec2::plugin --mode=cpu --help
```

### Why do I get the following result ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values``` ?

This command result means that Amazon Cloudwatch does not have any value for the requested period.

This result can be overriden by adding the ```--zeroed``` option in the command. This will force a value of 0 when no metric 
has been collected and will prevent the UNKNOWN error message. 

### Why do I get the following result ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]``` ? 

This command result means that the credentials provided don't have enough privileges to perform the underlying AWS Operation.

### Why do I get the following result ```UNKNOWN: Command error:  - An error occurred (InvalidParameterValue) [...]```

Most of the time, this command result highlights typo/mispelling in the Amazon Dimension name (```--name```).