---
id: cloud-aws-sqs
title: Amazon SQS
---

## Overview

Amazon Simple Queue Service (SQS) is a fully managed message queuing service that enables you to decouple and scale microservices, 
distributed systems, and serverless applications. SQS eliminates the complexity and overhead associated with managing 
and operating message oriented middleware, and empowers developers to focus on differentiating work.

There is no charge for the Amazon SQS metrics reported in CloudWatch. They're provided as part of the Amazon SQS service.

The Amazon SQS Centreon Plugin uses the Amazon Cloudwatch APIs to collect the related metrics and status.

## Plugin-Pack assets

### Monitored objects

* SQS Message queues (both standard and FiFo queues are supported)

### Discovery Rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name            | Description                                                             |
|:---------------------|:------------------------------------------------------------------------|
| Cloud-Aws-Sqs-Queues | Discover Amazon SQS queues and monitor their status and related metrics |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected metrics 

More information about collected metrics is available in the official Amazon documentation:
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-monitoring-using-cloudwatch.html


<!--DOCUSAURUS_CODE_TABS-->

<!--Sqs-Queues-->

| Metric name                         | Description                                                                                     | Unit |
|:------------------------------------|:------------------------------------------------------------------------------------------------|:-----|
| sqs.queue.messages.oldest.seconds   | The approximate age of the oldest non-deleted message in the queue.                             | s    |
| sqs.queue.messages.delayed.count    | The number of messages in the queue that are delayed and not available for reading immediately. |      |
| sqs.queue.messages.notvisible.count | The number of messages that are in flight.                                                      |      |
| sqs.queue.messages.visible.count    | The number of messages available for retrieval from the queue.                                  |      |
| sqs.queue.messages.empty.count      | The number of ReceiveMessage API calls that did not return a message.                           |      |
| sqs.queue.messages.deleted.count    | The number of messages deleted from the queue.                                                  |      |
| sqs.queue.messages.received.count   | The number of messages returned by calls to the ReceiveMessage action.                          |      |
| sqs.queue.messages.sent.count       | The number of messages added to a queue.                                                        |      |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### AWS Configuration

Configure a service account (*access/secret keys* combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                          |
|:-------------------------------|:-----------------------------------------------------|
| sqs:ListQueues                 | Returns a list of your queues in the current region. |
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

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Amazon SQS resources:

```bash
yum install centreon-plugin-Cloud-Aws-Sqs-Api
```

2. On the Centreon Web interface, install the *Amazon SQS* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page


<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Amazon SQS resources:

```bash
yum install centreon-plugin-Cloud-Aws-Sqs-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-aws-sqs.noarch
```

3. On the Centreon Web interface, install the *Amazon SQS* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts". 
* Select the *Cloud-Aws-Sqs-custom* template to apply to the Host.
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

### Services

Once the Host template applied, a *Sqs-Queues* service will be created. This service is generic, meaning that it won't work "as is".
The *QUEUENAME* Service Macro is mandatory for the resources to be monitored properly and has to be set. You can then duplicate the service
as much as the different queues to be monitored (the Services names can also be adjusted accordingly with the queues names).


## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account and test the Plugin 
by running the following command (Some of the parameters such as ```--proxyurl``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_aws_sqs_api.pl \
    --plugin=cloud::aws::sqs::plugin \
    --mode=queues \
    --custommode=awscli \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --proxyurl='http://myproxy.mycompany.org:8080'
    --statistic=average \
    --timeframe='600' \
    --period='60' \
    --queue-name='my_sqs_queue_1' \
    --filter-metric='NumberOfMessagesSent|NumberOfMessagesReceived' \
    --critical-messages-sent=1: \
    --critical-messages-received=1: \
    --verbose
```

Expected command output is shown below: 

```bash
OK: 'my_sqs_queue_1' Statistic 'Average' number of messages sent: 45, number of 
messages received: 32 | 'my_sqs_queue_1~average#sqs.queue.messages.sent.count'=45;;1:;; 'my_sqs_queue_1~average#sqs.queue.messages.received.count'=32;;1:;;
SQS Queue'my_sqs_queue_1'
    Statistic 'Average' number of messages sent: 45, number of messages received: 32  
```

The command above monitors the SQS queue named *my_sqs_queue_1* (```--mode=queues --queue-name='my_sqs_queue_1'```) of an AWS account
identified by the usage of API credentials (```--aws-secret-key='****' --aws-access-key='****'```).
The calculated metrics are an average of values (```--statistic='average'```) on a 600 secondes / 10 min period (```--timeframe='600'```) with one sample per 60s / 1 minute (```--period='60'```).
In the example above, only the *sent* and *received* messages statistics will be returned (```--filter-metric='NumberOfMessagesSent|NumberOfMessagesReceived'```).


This command would trigger a CRITICAL alert if no messages (*less than 1*) have been sent or received (```--critical-messages-sent=0: ```)
during the sample period.

All the metrics that can be filtered on as well as all the available thresholds parameters can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_sqs_api.pl --plugin=cloud::aws::sqs::plugin --mode=queues --help
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