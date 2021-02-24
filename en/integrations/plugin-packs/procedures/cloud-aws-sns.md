---
id: cloud-aws-sns
title: Amazon SNS
---

## Overview

Amazon Simple Notification Service (SNS) is a fully managed messaging service for both system-to-system and app-to-person (A2P) 
communication. It enables you to communicate between systems through publish/subscribe (pub/sub) patterns that enable 
messaging between decoupled microservice applications or to communicate directly to users via SMS, mobile push and email.

There is no charge for the Amazon SNS metrics reported in CloudWatch; they are provided as part of the Amazon SNS service.

The Amazon SNS Centreon Plugin uses the Amazon Cloudwatch APIs to collect the related metrics and status.

## Plugin-Pack assets

### Monitored objects

* SNS notifications statistics (per "topic")

### Discovery Rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                         | Description                                                                 |
|:----------------------------------|:----------------------------------------------------------------------------|
| Cloud-Aws-Sns-Topic-Notifications | Discover Amazon SNS topics and monitor the related notifications statistics |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected metrics 

More information about collected metrics is available in the official Amazon documentation:
https://docs.aws.amazon.com/sns/latest/dg/sns-monitoring-using-cloudwatch.html

<!--DOCUSAURUS_CODE_TABS-->

<!--Sns-Topic-Notifications-->

| Metric name                       | Description                                                                                         |
|:----------------------------------|:----------------------------------------------------------------------------------------------------|
| sns.notifications.published.count | The number of messages published to your Amazon SNS topics.                                         |
| sns.notifications.delivered.count | The number of messages successfully delivered from your Amazon SNS topics to subscribing endpoints. |
| sns.notifications.failed.count    | The number of messages that Amazon SNS failed to deliver.                                           |
| sns.notifications.filtered.count  | The number of messages that were rejected by subscription filter policies.                          |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### AWS Configuration

Configure a service account (*access/secret keys* combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                          |
|:-------------------------------|:-----------------------------------------------------|
| sns:ListTopics                 | Returns a list of the requester's topics.            |
| cloudwatch:listMetrics         | List all metrics from Cloudwatch AWS/VPN namespace   |
| cloudwatch:getMetricStatistics | Get metrics values from Cloudwatch AWS/VPN namespace |

### Plugin dependencies

To interact with Amazon APIs, you can use either use the *awscli* binary provided by Amazon or *paws*, a Perl AWS SDK (recommended). 
You must install it on every Centreon poller expected to monitor AWS resources: 

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

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Amazon SNS resources:

```bash
yum install centreon-plugin-Cloud-Aws-Sns-Api
```

2. On the Centreon Web interface, install the *Amazon SNS* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Amazon SNS resources:

```bash
yum install centreon-plugin-Cloud-Aws-Sns-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-aws-sns.noarch
```

3. On the Centreon Web interface, install the *Amazon SNS* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts". 
* Select the *Cloud-Aws-Sns-custom* template to apply to the Host.
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
by running the following command (Some of the parameters such as ```--proxyurl``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_aws_sns_api.pl \
    --plugin=cloud::aws::sns::plugin \
    --mode=notifications \
    --custommode=awscli \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --proxyurl='http://myproxy.mycompany.org:8080'
    --statistic=sum \
    --timeframe='600' \
    --period='60' \
    --topic-name='my_sns_topic_1' \
    --filter-metric='NumberOfNotificationsFailed' \
    --warning-notifications-failed=0 \
    --critical-notifications-failed=5 \
    --verbose
```

Expected command output is shown below: 

```bash
OK: 'my_sns_topic_1' Statistic 'Sum' number of notifications failed: 0 | 'my_sns_topic_1~sum#sns.notifications.failed.count'=0;;;;
Notifications for topic 'my_sns_topic_1' :
    Statistic 'Sum' number of notifications failed: 0 
```

The command above monitors the SNS notifications statistics of a 'topic' named *my_sns_topic_1* (```--mode=notifications --topic-name='my_sns_topic_1'```) 
of an AWS account identified by the usage of API credentials (```--aws-secret-key='****' --aws-access-key='****'```).
The calculated metrics are an sum of values (```--statistic='sum'```) on a 600 secondes / 10 min period (```--timeframe='600'```)
with one sample per 60s / 1 minute (```--period='60'```).
In the example above, only the *failed* notifications statistics will be returned (```--filter-metric='NumberOfNotificationsFailed'```).

This command would trigger a WARNING alert if at least one notification is marked as *failed* (```--warning-notifications-failed=0```)
during the sample period and a CRITICAL alert beyond 5 *failed* notifications.

All the metrics that can be filtered on as well as all the available thresholds parameters can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_sns_api.pl --plugin=cloud::aws::sns::plugin --mode=notifications --help
```

### Why do I get the following result: 

#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values``` ?

This command result means that Amazon Cloudwatch does not have any value for the requested period.

This result can be overriden by adding the ```--zeroed``` option in the command. This will force a value of 0 when no metric 
has been collected and will prevent the UNKNOWN error message. 

#### ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]``` ? 

This command result means that the credentials provided don't have enough privileges to perform the underlying AWS Operation.

#### ```UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |```

This error message means that the Centreon Plugin couldn't successfully connect to the AWS Cloudwatch API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. 
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.