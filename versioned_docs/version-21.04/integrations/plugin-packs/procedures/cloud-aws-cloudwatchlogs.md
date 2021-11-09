---
id: cloud-aws-cloudwatchlogs
title: Amazon CloudWatch Logs
---

## Overview

CloudWatch Logs enables you to centralize the logs from all of your systems, applications, 
and AWS services that you use, in a single, highly scalable service. You can then easily view them, 
search them for specific error codes or patterns, filter them based on specific fields, 
or archive them securely for future analysis

> **Warning** This Plugin may generate very huge queries toward CloudWatch Logs API. Make sure to use filtering capability
> with ```--group-name``` and ```--stream-name``` options. 

## Plugin-Pack assets

### Monitored objects

* Log entries related to groups and underlying streams

### Collected data 

<!--DOCUSAURUS_CODE_TABS-->

<!--Get-Logs-->

| Metric name | Description                                                                                                               |
|:------------|:--------------------------------------------------------------------------------------------------------------------------|
| Logs        | Refer to any log entry that match filters. Threshold are String on top of %{message}, %{stream\_name}, %{since} variables |

You can filter the scope of the query using ```--group-name``` and ```--stream-name``` options.

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### AWS Configuration

Configure a service account (*access/secret keys* combo) for which the following privileges have to be granted:

| AWS Privilege                    | Description                                                                     |
| :------------------------------- | :------------------------------------------------------------------------------ |
| CloudWatchLogs:DescribeLogGroups | Returns information about Log groups that meet the specified filter criteria.   |

### Plugin dependencies

To interact with Amazon APIs, you can use either use the *awscli* binary provided by Amazon or *paws*, a Perl AWS SDK (recommended). 
You must install it on every Centreon poller expected to monitor AWS Health: 

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

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Amazon CloudWatch Logs:

```bash
yum install centreon-plugin-Cloud-Aws-CloudWatchLogs-Api
```

2. On the Centreon Web interface, install the *Amazon CloudWatch Logs* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Amazon CloudWatch Logs:

```bash
yum install centreon-plugin-Cloud-Aws-CloudWatchLogs-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-aws-cloudwatchlogs.noarch
```

3. On the Centreon Web interface, install the *Amazon CloudWatch Logs* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts". 
* Select the *Cloud-Aws-CloudWatchLogs* template to apply to the Host.
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured:

| Mandatory   | Nom             | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
|             | PROXYURL        | Configure proxy URL                                                                         |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it unless you know what you are doing              |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account and test the Plugin 
by running the following command (Some of the parameters such as ```proxyurl``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_aws_cloudwatchlogs_api.pl \
 --plugin=cloud::aws::cloudwatchlogs::plugin \
 --mode=get-logs \
 --custommode='awscli' \
 --aws-secret-key='****' \
 --aws-access-key='****' \
 --proxyurl='' \
 --region='eu-west-1' \
 --group-name='/aws/lambda/MyLambda_LogGroup' \
 --stream-name='' \
 --start-time-since='3000' \
 --unknown-status='' \
 --warning-status='' \
 --critical-status='%{message} =~ /region/i' \
 --verbose
```

Expected command output is shown below: 

```bash 	
CRITICAL: 10 problem(s) detected | 'logs'=10;;;0;
critical: log [created: 5m 11s] [stream: 2020/07/21/[$LATEST]57eb66feaf4aa7bc46gr0e91aeac2b99] [message: [INFO] 2020-07-21T14:35:31.591Z    edcea75a-41ceaa-43ae0-8fa6-1cfea0d0dc  Set REGION: eu-west-1 -- ]
[...]
critical: log [created: 10m 11s] [stream: 2020/07/21/[$LATEST]57eb66eac4cea0e91ce2b99] [message: [INFO]    2020-07-21T14:30:31.767Z    8a62ac5e-d6dd-44Da-b23e-bce42fef3  Set REGION: eu-west-1 -- ]
```

The command above monitors the *logs* (```--mode=get-logs```) of an AWS account identified by the usage of API credentials (```--aws-secret-key='****' --aws-access-key='****'```). 

To avoid performance issues, the LogGroup filter is mandatory (```--group-name='/aws/lambda/MyLambda_LogGroup'```) and you can also narrow the query to filter logs created since a specific amount of time (```--start-time-since='3000'```).

This command would trigger a CRITICAL alert if the message contains the word 'region' without being case sensitive (```--critical-status='%{message} =~ /region/i'```). 

All the filters that can be used as well as all the available thresholds parameters can be displayed by adding the  ```--help``` 
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_cloudwatchlogs_api.pl --plugin=cloud::aws::cloudwatchlogs::plugin --mode=get-logs --help
```

### Why do I get the following result: 

#### ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]``` ? 

This command result means that the credentials provided don't have enough privileges to perform the underlying AWS Operation.

#### ```UNKNOWN: 500 Can't connect to monitoring.us-east-1.amazonaws.com:443 |```

This error message means that the Centreon Plugin couldn't successfully connect to the AWS CloudWatch API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. 
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.