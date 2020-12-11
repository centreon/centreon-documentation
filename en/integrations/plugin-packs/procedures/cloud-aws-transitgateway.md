---
id: cloud-aws-transitgateway
title: AWS Transit Gateway
---

## Overview

AWS Transit Gateway connects VPCs and on-premises networks through a central hub. This simplifies your network and puts an end to
complex peering relationships. It acts as a cloud router – each new connection is only made once.

Because of its central position, AWS Transit Gateway Network Manager has a unique view over your entire network, even connecting
to Software-Defined Wide Area Network (SD-WAN) devices.

The *AWS Transit Gateway* Centreon Plugin-Pack uses the Amazon Cloudwatch APIs to collect the
related metrics and status.

## Plugin-Pack assets

### Monitored objects

* AWS Transit Gateways

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Gateways-->

| Rule name                           | Description                                                        |
| :---------------------------------- | :----------------------------------------------------------------- |
| Cloud-Aws-Transitgateways-Gateways  | Discover the Transit Gateways within an AWS infrastructure         |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected metrics 

More information about collected metrics is available in the official Amazon documentation:
https://docs.aws.amazon.com/fr_fr/vpc/latest/tgw/transit-gateway-cloudwatch-metrics.html

<!--DOCUSAURUS_CODE_TABS-->

<!--Gateways-Traffic-*-->

| Metric name                            | Description                                                           | Unit |
|:---------------------------------------|:----------------------------------------------------------------------|:-----|
| gateway.traffic.in.bytes               | The number of bytes received by the transit gateway.                  | B    |
| gateway.traffic.out.bytes              | The number of bytes sent from the transit gateway.                    | B    |
| gateway.packets.in.count               | The number of packets received by the transit gateway.                |      |
| gateway.packets.out.count              | The number of packets sent by the transit gateway.                    |      |
| gateway.packets.blackholedropped.count | The number of packets dropped because they matched a blackhole route. |      |
| gateway.packets.noroutedropped.count   | The number of packets dropped because they did not match a route.     |      |

All these metrics can be calculated on a *per-second* time reference rather than displaying the absolute value. To do so,
simply add the setting ```--per-sec``` to the command and/or the Service Macros

> By default, the *Gateways-Traffic-Global* Service will monitor all of the Transit Gateways of the AWS infrastructure.
> To get one Service per Gateway, use the **Service Autodiscovery module** with the rule described above.

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### AWS Configuration

Configure a service account (*access/secret keys* combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                                        |
|:-------------------------------|:------------------------------------------------------------------ |
| cloudwatch:getMetricStatistics | Get metrics values from Cloudwatch AWS/TransitGateway namespace    |

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

1. Install the Centreon Plugin package on every Centreon poller expected to monitor AWS Transit Gateway resources:

```bash
yum install centreon-plugin-Cloud-Aws-Transitgateway-Api
```

2. On the Centreon Web interface, install the *AWS Transit Gateway* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor AWS Transit Gateway resources:

```bash
yum install centreon-plugin-Cloud-Aws-Transitgateway-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-aws-transitgateway.noarch
```

3. On the Centreon Web interface, install the *AWS Transit Gateway* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'
* Select the *Cloud-Aws-Transitgateway-custom* template to apply to the Host.
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

Once the Plugin installed, log into your Centreon Poller CLI using the
*centreon-engine* user account and test the Plugin by running the following
command (Some of the parameters such as ```--proxyurl``` have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_aws_transitgateway_api.pl \
    --plugin=cloud::aws::transitgateway::plugin \
    --mode=traffic \
    --custommode=awscli \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --proxyurl='http://myproxy.mycompany.org:8080' \
    --timeframe='600' \
    --period='60' \
	--filter-gateway='tgw-01234567890abcd' \
    --warning-packets-drop-blackhole='500' \
	--critical-packets-drop-blackhole='1000' \
    --verbose
```

Expected command output is shown below: 

```bash
OK: 'tgw-01234567890abcd' Statistic 'Average' Metrics Bytes In: 2.89 MB, Bytes Out: 2.78 MB, Packets Received (In): 3844.04 ,
Packets Drop Blackhole: 0.00 , Packets Sent (Out): 3677.79 , Packets Drop No Route: 0.01  |
'tgw-01234567890abcd~average#gateway.traffic.in.bytes'=3026151.39B;;;; 'tgw-01234567890abcd~average#gateway.traffic.out.bytes'=2920220.01B;;;;
'tgw-01234567890abcd~average#gateway.packets.in.count'=3844.04;;;; 'tgw-01234567890abcd~average#gateway.packets.blackholedropped.count'=0.00;;;;
'tgw-01234567890abcd~average#gateway.packets.out.count'=3677.79;;;; 'tgw-01234567890abcd~average#gateway.packets.noroutedropped.count'=0.01;;;;
```

The command above monitors the traffic statistics of the Transit Gateway service (```--plugin=cloud::aws::transitgateway::plugin --mode=traffic```)
within an AWS infrastructure. AWS account credentials are used to authenticate against and to connect to the API
(```--aws-secret-key='****' --aws-access-key='****'```). The calculated metrics are an average of values on a 600 secondes / 10 min 
period (```--timeframe='600'```) with one sample per 60s / 1 minute (```--period='60'```).

This command would trigger a 'WARNING' alert if the number of the packets dropped by a *blackhole* rule during the sample period is over 500 
(```--warning-packets-drop-blackhole='500'```). The alert would be 'CRITICAL' over 1000 dropped packets (```--critical-packets-drop-blackhole='1000'```).

All the available thresholds parameters can be displayed by adding the  
```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_transitgateway_api.pl \
    --plugin=cloud::aws::transitgateway::plugin \
    --mode=traffic \
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