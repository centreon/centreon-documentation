---
id: cloud-aws-health
title: AWS Health
---

## Overview

AWS Health provides personalized information about events that can affect your AWS infrastructure, 
guides you through scheduled changes, and accelerates the troubleshooting of issues that affect your AWS resources and accounts.

The AWS Health Centreon Plugin uses the Amazon Health API to collect the related metrics and details about events.

## Plugin-Pack assets

### Monitored objects

* Events related to AWS accounts and resources

## Monitored metrics 

<!--DOCUSAURUS_CODE_TABS-->

<!--Events-->

| Metric name           | Description               |
|:----------------------|:--------------------------|
| events.total.count    | Total number of events    |
| events.open.count     | Number of open events     |
| events.closed.count   | Number of closed events   |
| events.upcoming.count | Number of upcoming events |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### AWS Configuration

Configure a service account (*access/secret keys* combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                                                 |
| :----------------------------- | :-------------------------------------------------------------------------- |
| health:DescribeEvents          | Returns information about events that meet the specified filter criteria.   |

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

1. Install the Centreon Plugin package on every Centreon poller expected to monitor AWS Health:

```bash
yum install centreon-plugin-Cloud-Aws-Health-Api
```

2. On the Centreon Web interface, install the *AWS Health* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor AWS Health:

```bash
yum install centreon-plugin-Cloud-Aws-Health-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-aws-health.noarch
```

3. On the Centreon Web interface, install the *AWS Health* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts". 
* Select the *Cloud-Aws-Health* template to apply to the Host.
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
/usr/lib/centreon/plugins/centreon_aws_health_api.pl \
	--plugin=cloud::aws::health::plugin \
	--mode=events \
	--custommode='awscli' \
	--aws-secret-key='****' \
	--aws-access-key='****' \
	--proxyurl='http://myproxy.mycompany.org:8080' \
	--filter-service='' \
	--filter-region='' \
	--filter-entity-value='' \
	--filter-event-category='issue' \
	--filter-event-status='open' \
	--warning-total='0' \
	--critical-total='1' \
	--display-affected-entities \
	--verbose
```

Expected command output is shown below: 

```bash 	
CRITICAL: Events total: 1 | 'events.total.count'=1;;0:0;0; 'events.open.count'=1;;;0; 'events.closed.count'=0;;;0; 'events.upcoming.count'=0;;;0;
[service: RDS][region: eu-west-1][status: open][type: AWS_RDS_HARDWARE_MAINTENANCE_SCHEDULED][start: Wed Jul 15 13:00:00 2020][affected entity: doh-sfetoto3]
```

The command above monitors the *events* (```--mode=events```) of an AWS account identified by the usage of API credentials (```--aws-secret-key='****' --aws-access-key='****'```). 
By default, all types of events will be collected by the Plugin; it's possible though to use a set of specific filters
to customize the types of results that will be returned by the command. In the example above, only the events categorized as *issues* (```--filter-event-category='issue'```)
and having an *open* status (```--filter-event-status='open'```) will be displayed.
The ```--display-affected-entities``` option is used to include the reference of the resource to which the event is related.

This command would trigger a WARNING alert if the number of events is more than 0 (```--warning-total='0'```) and a CRITICAL alert 
for more than 1 event (```--critical-total='1'```).

All the filters that can be used as well as all the available thresholds parameters can be displayed by adding the  ```--help``` 
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_health_api.pl --plugin=cloud::aws::health::plugin --mode=events --help
```

### Why do I get the following result: 

#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values``` ?

This command result means that Amazon Cloudwatch does not have any value for the requested period.

This result can be overriden by adding the ```--zeroed``` option in the command. This will force a value of 0 when no metric 
has been collected and will prevent the UNKNOWN error message. 

#### ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]``` ? 

This command result means that the credentials provided don't have enough privileges to perform the underlying AWS Operation.

#### ```UNKNOWN: 500 Can't connect to health.us-east-1.amazonaws.com:443 |```

This error message means that the Centreon Plugin couldn't successfully connect to the AWS Health API.
Check that no third party device (such as a firewall) is blocking the request.
A proxy connection may also be necessary to connect to the API. 
This can be done by using this option in the command: ```--proxyurl='http://proxy.mycompany:8080'```.