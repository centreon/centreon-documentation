---
id: cloud-aws-vpn
title: Amazon VPN
---

## Vue d'ensemble

AWS Virtual Private Network (AWS VPN) lets you establish a secure and private tunnel from your network or device to the AWS Cloud. You can extend your existing on-premises network into a VPC, or connect to other AWS resources from a client. AWS VPN offers two types of private connectivity that feature the high availability and robust security necessary for your data.

## Plugin Pack Assets

### Monitored Objects

* VPN Site-To-Site connections

### Discovery Rules

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

This pack doesn't provide any hosts discovery rule.

<!--Services-->

| Rule name		                        | Description                                                   			 |
| :------------------------------------ | :------------------------------------------------------------------------- |
| Cloud-Aws-Vpn-Connections		        | Discover VPN Site-To-Site connections and monitor their status and traffic |

<!--END_DOCUSAURUS_CODE_TABS-->

## Collected Metrics

More information about collected metrics is available in the official Amazon documentation: https://docs.aws.amazon.com/vpn/latest/s2svpn/monitoring-cloudwatch-vpn.html

<!--DOCUSAURUS_CODE_TABS-->
<!--Traffic-->

| Metric name		  | Description                                                     																											 |
| :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| TunnelState	      | The state of the tunnel. For static VPNs, 0 indicates DOWN and 1 indicates UP. For BGP VPNs, 1 indicates ESTABLISHED and 0 is used for all other states. Unit: Boolean  	 |
| TunnelDataIn		  | The bytes received through the VPN tunnel. Unit: Bytes																														 |
| TunnelDataOut		  | The bytes sent through the VPN tunnel. Unit: Bytes																												     |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### AWS Privileges

Whether using a service account or a dedicated monitoring account to monitor Cloudwatch metrics, the following rights have to be granted to the IAM role (accesskey/secretkey): 

| AWS Privilege                         | Description                                          |
| :------------------------------------ | :--------------------------------------------------- |
| ec2:DescribeVpnConnections		    | Describes one or more of your VPN connections	       |
| cloudwatch:listMetrics                | List all metrics from Cloudwatch AWS/VPN namespace   |
| cloudwatch:getMetricStatistics        | Get metrics values from Cloudwatch AWS/VPN namespace |

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

1. Install the Centreon Plugin on every poller monitoring VPN ressources:

```bash
yum install centreon-plugin-Cloud-Aws-Vpn-Api
```

2. On Centreon Web interface in "Configuration > Plugin packs > Manager", install the "Amazon VPN" Plugin-Pack


<!--Offline IMP License-->

1. Install the Centreon Plugin on every poller monitoring VPN ressources:

```bash
yum install centreon-plugin-Cloud-Aws-Vpn-Api
```

2. Install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-cloud-aws-vpn.noarch
```

3. On Centreon Web interface in "Configuration > Plugin packs > Manager", install the "Amazon VPN" Plugin-Pack:


<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

Adding a host into Centreon, link it to the template named "Cloud-Aws-VPN-custom". Once the template applied, some macros have to be configured:

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked                          |
| X           | AWSREGION       | Region where the instance is running                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library   |
|             | PROXYURL        | Configure proxy URL information                                                             |
|             | EXTRAOPTIONS    | Any extraoptions you may want to add to every command\_line (eg. a --verbose flag)          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it until you know what you are doing               |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

### Services

Once the host created and the configuration exported on Centreon, a "Traffic-Generic-VpnID" is created. You can use this generic service by adjusting its name and configuring the following macro:

| Mandatory   | Name            | Description                           |
| :---------- | :-------------- | :-------------------------------------|
| X           | VPNID	 		| ID of the VPN link to be monitored    |

The service can be duplicated as per each *VPNID*.

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command (Parameters such as ```vpnid``` and ```proxyurl```have to be adjusted):

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

OK: 'vpn-123abc456def789gh' Statistic 'Average' Metrics Tunnel Data Out: 328.69 KB, Tunnel State: 1.00, Tunnel Data In: 715.10 KB | 'vpn-123abc456def789gh~average#vpn.tunnel.dataout.bytes'=336576.82B;;;;
'vpn-123abc456def789gh~average#vpn.tunnel.tunnelstate'=1.00;1:;0.5:;; 'vpn-123abc456def789gh~average#vpn.tunnel.datain.bytes'=732257.42B;;;;

```

The command above gets the state and traffic (```--mode=traffic```) of the *vpn-123abc456def789gh* VPN link (```--name='vpn-123abc456def789gh'```). This VPN link is hosted on the *eu-west-1* AWS region cloud (```--region='eu-west-1'```). The calculated metric is an average of values (```--statistic='average'```) on a 600 secondes / 10 min period (```--timeframe='600'```) with one sample per 60s / 1 minute (```--period='60'```).

This command would trigger a WARNING alert if the calcultaed boolean status of the VPN link falls below 1 and a CRITICAL alert if below 0.5. The Amazon VPN Site-To-Site links can indeed rely on several gateways and routes. The Plugin gets the boolean status of all of these gateways/routes status and return an average value.

All the options that can be used with this plugin can be found over the ```--help``` command:

```/usr/lib/centreon/plugins//centreon_aws_vpn_api.pl --plugin=cloud::aws::vpn::plugin --mode=traffic --help```


### Why do I get the following result ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values``` ?

This command result means that Amazon Cloudwatch does not have any value for the requested period.
This result can be overriden by adding the ```--zeroed``` option in the command. This will force a value of 0 when no metric has been collected and will prevent the UNKNOWN error message