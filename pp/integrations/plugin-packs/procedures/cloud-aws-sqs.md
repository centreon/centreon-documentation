---
id: cloud-aws-sqs
title: Amazon SQS
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack **Amazon SQS** brings a host template:

* Cloud-Aws-Sqs-custom

It brings the following service templates:

| Service Alias | Service Template         | Service Description     | Default |
|:--------------|:-------------------------|:------------------------|:--------|
| Sqs-Queues    | Cloud-Aws-Sqs-Queues-Api | Check Amazon SQS queues | X       |

### Discovery rules

The pack provides a discovery rule to automatically discover SQS resources:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-aws-sqs-provider.png)

More information about the Host Discovery module is available in the Centreon documentation: [Host Discovery](/docs/monitoring/discovery/hosts-discovery)

### Collected metrics & status

More information about collected metrics is available in the official Amazon documentation:
https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-monitoring-using-cloudwatch

<Tabs groupId="sync">
<TabItem value="Sqs-Queues" label="Sqs-Queues">

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

</TabItem>
</Tabs>

## Prerequisites

### AWS Configuration

Configure a service account (*access/secret keys* combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                          |
|:-------------------------------|:-----------------------------------------------------|
| sqs:ListQueues                 | Returns a list of your queues in the current region. |
| cloudwatch:listMetrics         | List all metrics from Cloudwatch AWS/VPN namespace   |
| cloudwatch:getMetricStatistics | Get metrics values from Cloudwatch AWS/VPN namespace |

### Plugin dependencies

To interact with Amazon APIs, you can use either use the *awscli* binary provided by Amazon or *paws*, a Perl AWS SDK (recommended). You must install it on every poller expected to monitor AWS resources. 

> For now, it is not possible to use *paws* if you are using a proxy to reach AWS Cloudwatch APIs. 

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

## Setup

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Install the plugin package on every Centreon poller expected to monitor **SQS** resources:

```bash
yum install centreon-plugin-Cloud-Aws-Sqs-Api
```

2. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Amazon SQS** Centreon Plugin Pack.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the plugin package on every Centreon poller expected to monitor **SQS** resources:

```bash
yum install centreon-plugin-Cloud-Aws-Sqs-Api
```

2. Install the **Amazon SQS** Centreon Plugin Pack RPM on the Centreon central server:

```bash
yum install centreon-pack-cloud-aws-sqs
```

3. On the Centreon web interface, on page **Configuration > Plugin Packs**, install the **Amazon SQS** Centreon Plugin Pack.

</TabItem>
</Tabs>

## Configuration

* Log into Centreon and add a new host through **Configuration > Hosts**.
* In the **IP Address/DNS** field, set the following IP address: **127.0.0.1**.
* Aplly the **Cloud-Aws-Sqs-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Nom             | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
|             | QUEUENAME       | Queue name (Default : '.*')                                                                 |
|             | PROXYURL        | Configure proxy URL                                                                         |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command line (eg. a --verbose flag)           |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it unless you know what you are doing              |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

## How to check in the CLI that the configuration is OK and what are the main options for?

Once the plugin is installed, log into your Centreon poller's CLI using the
**centreon-engine** user account (`su - centreon-engine`) and test the plugin by
running the following command (Some of the parameters such as ```--proxyurl``` have to be adjusted):

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

All available options for a given mode can be displayed by adding the
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_sqs_api.pl \
    --plugin=cloud::aws::sqs::plugin \
    --mode=queues \
    --help
```

All available modes can be displayed by adding the `--list-mode` parameter to
the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_sqs_api.pl \
    --plugin=cloud::aws::sqs::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md)
for Centreon Plugins typical issues.