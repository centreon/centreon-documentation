---
id: cloud-aws-vpn
title: AWS VPN
---

## Overview

AWS Virtual Private Network (AWS VPN) lets you establish a secure and private tunnel from your network or device to the AWS Cloud.
You can extend your existing on-premises network into a VPC, or connect to other AWS resources from a client. AWS VPN offers two
types of private connectivity that feature the high availability and robust security necessary for your data.

The *AWS VPN* Centreon Plugin-Pack uses the Amazon Cloudwatch APIs to collect the related metrics and status.

## Plugin Pack Assets

### Monitored Objects

* VPN Site-To-Site & VPC connections

### Discovery Rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                 | Description                                                   |
|:--------------------------|:--------------------------------------------------------------|
| Cloud-Aws-Vpn-Connections | Discover VPN connections and monitor their status and traffic |

<!--END_DOCUSAURUS_CODE_TABS-->

## Collected Metrics

More information about collected metrics is available in the official Amazon documentation: https://docs.aws.amazon.com/vpn/latest/s2svpn/monitoring-cloudwatch-vpn.html

<!--DOCUSAURUS_CODE_TABS-->

<!--Vpn-Traffic-*-->

| Metric name                         | Description                                                                                                                                             | Unit |
|:------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| *instance*\#vpn.tunnel.tunnelstate  | The state of the tunnel. For static VPNs, 0 indicates DOWN and 1 indicates UP. For BGP VPNs, 1 indicates ESTABLISHED and 0 is used for all other states |      |
| *instance*\#vpn.tunnel.datain.bytes | The bytes received through the VPN tunnel                                                                                                               | B    |
| *instance*\#vpn.tunnel.datain.bytes | The bytes sent through the VPN tunnel                                                                                                                   | B    |

All these metrics can be calculated on a *per-second* time reference rather than displaying the absolute value. To do so,
simply add the setting ```--per-sec``` to the command and/or the Service Macros

> By default, the *Vpn-Traffic-Global* Service will monitor all of the VPN connections of the AWS infrastructure.
> To get one Service per connection, use the **Service Autodiscovery module** with the rule described above.

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### AWS Privileges

Whether using a service account or a dedicated monitoring account to monitor Cloudwatch metrics, the following rights have to be granted to the IAM role (accesskey/secretkey):

| AWS Privilege                  | Description                                          |
|:-------------------------------|:-----------------------------------------------------|
| ec2:DescribeVpnConnections     | Describes one or more of your VPN connections        |
| cloudwatch:listMetrics         | List all metrics from Cloudwatch AWS/VPN namespace   |
| cloudwatch:getMetricStatistics | Get metrics values from Cloudwatch AWS/VPN namespace |

### Plugin dependencies

To interact with Amazon APIs, you can use either use awscli binary or paws, a perl AWS SDK (recommended). You must install it on every poller that will monitor AWS resources.

**Warning** At the moment it is not possible to use perl-Paws if you are using a proxy to connect to AWS Cloudwatch APIs.

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

1. Install the Centreon Plugin package on every Centreon poller expected to monitor AWS VPN ressources:

```bash
yum install centreon-plugin-Cloud-Aws-Vpn-Api
```

2. On the Centreon Web interface, install the *AWS VPN* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor AWS VPN ressources:

```bash
yum install centreon-plugin-Cloud-Aws-Vpn-Api
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-aws-vpn.noarch
```

3. On the Centreon Web interface, install the *AWS VPN* Centreon Plugin-Pack on the "Configuration > Plugin Packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through "Configuration > Hosts".
* In the *IP Address/FQDN* field, set the following IP address: '127.0.0.1'
* Select the *Cloud-Aws-Vpn-custom* template to apply to the Host.
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

Once the Plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account and test the Plugin by
running the following command (Some of the parameters such as ```--proxyurl``` have to be adjusted):

```bash
/usr/lib/centreon/plugins//centreon_aws_vpn_api.pl \
    --plugin=cloud::aws::vpn::plugin \
    --mode=traffic \
    --custommode='awscli' \
    --aws-secret-key='*******************' \
    --aws-access-key='**********' \
    --region='eu-west-1' \
    --name='vpn-123abc456def789gh' \
    --proxyurl='http://myproxy.mycompany.org:8080'
    --filter-metric='' \
    --statistic='average' \
    --timeframe='600' \
    --period='60' \
    --warning-tunnel-state='1:' \
    --critical-tunnel-state='0.5:'
    --verbose
```
Expected command output is shown below:

```
OK: 'vpn-123abc456def789gh' Statistic 'Average' Metrics Tunnel Data Out: 328.69 KB, Tunnel State: 1.00, Tunnel Data In: 715.10 KB | 'vpn-123abc456def789gh~average#vpn.tunnel.dataout.bytes'=336576.82B;;;;
'vpn-123abc456def789gh~average#vpn.tunnel.tunnelstate'=1.00;1:;0.5:;; 'vpn-123abc456def789gh~average#vpn.tunnel.datain.bytes'=732257.42B;;;;
```

The command above gets the state and traffic (```--mode=traffic```) of the *vpn-123abc456def789gh* VPN link (```--name='vpn-123abc456def789gh'```).
This VPN link is hosted on the *eu-west-1* AWS region cloud (```--region='eu-west-1'```). The calculated metric is an average of values
(```--statistic='average'```) on a 600 secondes / 10 min period (```--timeframe='600'```) with one sample per 60s / 1 minute (```--period='60'```).

> It's possible to display and use filter on the VPN *name* rather than the ID (by default).
> To do so, simply add the ```--name``` parameter to the command.

This command would trigger a WARNING alert if the calcultaed boolean status of the VPN link falls below 1 and a CRITICAL alert
if below 0.5. The Amazon VPN Site-To-Site links can indeed rely on several gateways and routes. The Plugin gets the boolean status
of all of these gateways/routes status and return an average value.

All the available thresholds parameters can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_vpn_api.pl \
    --plugin=cloud::aws::vpn::plugin \
    --mode=traffic \
    --help
```

### Why do I get the following result:

#### ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values``` ?

This command result means that Amazon Cloudwatch does not have any value for the requested period.

This result can be overriden by adding the ```--zeroed``` option in the command. This will force a value of 0 when no metric has
been collected and will prevent the UNKNOWN error message.

#### ```UNKNOWN: Command error:  - An error occurred (AuthFailure) [...]``` ?

This command result means that the credentials provided don't have enough privileges to perform the underlying AWS Operation.

#### ```UNKNOWN: 500 Can't connect to monitoring.eu-west-1.amazonaws.com:443 |```

This error message means that the Centreon Plugin couldn't successfully connect to the AWS Cloudwatch API. Check that no third party device (such as a firewall)
is blocking the request. A proxy connection may also be necessary to connect to the API. This can be done by using this option in the command:
```--proxyurl='http://proxy.mycompany:8080'```.