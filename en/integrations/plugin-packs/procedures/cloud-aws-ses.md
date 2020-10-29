---
id: cloud-aws-ses
title: Amazon SES
---

## Overview

Amazon Simple Email Service (SES) is a cost-effective, flexible, and scalable
email service that enables developers to send mail from within any application.

There is no charge for the Amazon SES metrics reported in CloudWatch. They're 
provided as part of the Amazon SES service.

The Amazon SES Centreon Plugin uses the Amazon Cloudwatch APIs to collect the
related metrics and status.

## Plugin-Pack assets

### Monitored objects

* SES sending activity

### Collected metrics 

More information about collected metrics is available in the official Amazon 
documentation:
https://docs.aws.amazon.com/ses/latest/DeveloperGuide/monitor-sending-activity.html

<!--DOCUSAURUS_CODE_TABS-->

<!--Ses-Emails-->

| Metric name                 | Description                                                                                  
|:--------------------------- | :----------------------------------------|
| ses.emails.sent.count       | Number of sent emails                    |
| ses.emails.delivered.count  | Number of successfully delivered emails  |
| ses.emails.rejected.rate    | Rate of rejected emails                  |
| ses.emails.spam.rate        | Rate of emails marked as spam            |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### AWS Configuration

Configure a service account (*access/secret keys* combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                             |
|:-------------------------------|:------------------------------------------------------- |
| cloudwatch:getMetricStatistics | Get metrics values from Cloudwatch AWS/VPN namespace    |

### Plugin dependencies

To interact with Amazon APIs, you can use either use the *awscli* binary
provided by Amazon or *paws*, a Perl AWS SDK (recommended). 
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

> **Warning** For now, it is not possible to use *paws* if you are using a proxy to reach AWS Cloudwatch APIs. 

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Amazon SES resources:

```bash
yum install centreon-plugin-Cloud-Aws-Ses-Api
```

2. On the Centreon Web interface, install the *Amazon SES* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page


<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor Amazon SES resources:

```bash
yum install centreon-plugin-Cloud-Aws-Ses-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-aws-ses
```

3. On the Centreon Web interface, install the *Amazon SES* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts". 
* Select the *Cloud-Aws-Ses-custom* template to apply to the Host.
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

Once the plugin installed, log into your Centreon Poller CLI using the
*centreon-engine* user account and test the Plugin by running the following
command (Some of the parameters such as ```--proxyurl``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_aws_ses_api.pl \
    --plugin=cloud::aws::ses::plugin \
    --mode=email \
    --custommode=awscli \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --timeframe='600' \
    --period='60' \
    --critical-emails-spam=1: \
    --verbose
```

Expected command output is shown below: 

```bash
 OK: 'SES' Statistic 'Average' Metrics rate of rejected sent emails: 0.00, number of emails successfully delivered: 30.00, rate of sent emails marked as spam: 0.00, number of sent emails: 30.00 | 'SES~average#ses.emails.rejected.rate'=0;;;; 'SES~average#ses.emails.delivered.count'=30;;;; 'SES~average#ses.emails.spam.rate'=0;;;; 'SES~average#ses.emails.sent.count'=30;;;;
```

The command above monitors the SES sending activity 
(```--mode=emails```) of an AWS account identified by the usage of API 
credentials (```--aws-secret-key='****' --aws-access-key='****'```).
The calculated metrics are an average of values on a 600 secondes / 10 min 
period (```--timeframe='600'```) with one sample per 60s / 1 minute 
(```--period='60'```).

This command would trigger a 'CRITICAL' alert if at least one sent email is
marked as 'spam' (```--critical-emails-spam=1: ```) during the sample period.

All the available thresholds parameters can be displayed by adding the  
```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_ses_api.pl \
    --plugin=cloud::aws::ses::plugin \
    --mode=emails \
    --help
```

### Why do I get the following result: 

#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values``` ?

This command result means that Amazon Cloudwatch does not have any value for the
requested period.

This result can be overriden by adding the ```--zeroed``` option in the command.
This will force a value of 0 when no metric has been collected and will prevent
the UNKNOWN error message. 

#### ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]``` ? 

This command result means that the credentials provided don't have enough
privileges to perform the underlying AWS Operation.


#### ```UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |```

This error message means that the Centreon Plugin couldn't successfully connect 
to the AWS Cloudwatch API. Check that no third party device (such as a firewall)
is blocking the request. A proxy connection may also be necessary to connect to
the API. This can be done by using this option in the command: 
```--proxyurl='http://proxy.mycompany:8080'```.