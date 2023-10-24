---
id: cloud-aws-vpn
title: AWS VPN
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Monitoring Connector **AWS VPN** brings a host template:

* Cloud-Aws-Vpn-custom

It brings the following service templates:

| Service Alias      | Service Template                 | Service Description                            | Default |
|:-------------------|:---------------------------------|:-----------------------------------------------|:--------|
| Vpn-Traffic        | Cloud-Aws-Vpn-Traffic-Api        | Check the state and traffic of an AWS VPN link | X       |
| Vpn-Traffic-Global | Cloud-Aws-Vpn-Traffic-Global-Api | Check the state and traffic of an AWS VPN link |         |

### Discovery Rules

The pack provides a discovery rule to automatically discover VPN resources:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-aws-vpn-provider.png)

More information about the Host Discovery module is available in the Centreon documentation: [Host Discovery](/docs/monitoring/discovery/hosts-discovery)

## Collected Metrics & status

<Tabs groupId="sync">
<TabItem value="Vpn-Traffic-*" label="Vpn-Traffic-*">

| Metric name                         | Description                                                                                                                                             | Unit |
|:------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| *instance*\#vpn.tunnel.tunnelstate  | The state of the tunnel. For static VPNs, 0 indicates DOWN and 1 indicates UP. For BGP VPNs, 1 indicates ESTABLISHED and 0 is used for all other states |      |
| *instance*\#vpn.tunnel.datain.bytes | The bytes received through the VPN tunnel                                                                                                               | B    |
| *instance*\#vpn.tunnel.datain.bytes | The bytes sent through the VPN tunnel                                                                                                                   | B    |

All these metrics can be calculated on a *per-second* time reference rather than displaying the absolute value. To do so,
simply add the setting ```--per-sec``` to the command and/or the Service Macros

</TabItem>
</Tabs>

## Prerequisites

### AWS Privileges

Whether using a service account or a dedicated monitoring account to monitor Cloudwatch metrics, the following rights have to be granted to the IAM role (accesskey/secretkey):

| AWS Privilege                  | Description                                          |
|:-------------------------------|:-----------------------------------------------------|
| ec2:DescribeVpnConnections     | Describes one or more of your VPN connections        |
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

1. Install the package on every Centreon poller expected to monitor **AWS VPN** resources:

```bash
yum install centreon-plugin-Cloud-Aws-Vpn-Api
```

2. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **AWS VPN** Centreon Monitoring Connector.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the package on every Centreon poller expected to monitor **AWS VPN** resources:

```bash
yum install centreon-plugin-Cloud-Aws-Vpn-Api
```

2. Install the **AWS VPN** Centreon Monitoring Connector RPM on the Centreon central server:

```bash
yum install centreon-pack-cloud-aws-vpn
```

3. On the Centreon web interface, on page **Configuration > Monitoring Connector Manager**, install the **AWS VPN** Centreon Monitoring Connector.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your **AWS VPN** server settings.
* Apply the **Cloud-Aws-Vpn-custom** template to the host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

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
running the following command (Some of the parameters such as `--proxyurl` have to be adjusted):

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

```bash
OK: 'vpn-123abc456def789gh' Statistic 'Average' Metrics Tunnel Data Out: 328.69 KB, Tunnel State: 1.00, Tunnel Data In: 715.10 KB | 'vpn-123abc456def789gh~average#vpn.tunnel.dataout.bytes'=336576.82B;;;;
'vpn-123abc456def789gh~average#vpn.tunnel.tunnelstate'=1.00;1:;0.5:;; 'vpn-123abc456def789gh~average#vpn.tunnel.datain.bytes'=732257.42B;;;;
```

All the available thresholds parameters can be displayed by adding the `--help` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_aws_vpn_api.pl \
    --plugin=cloud::aws::vpn::plugin \
    --mode=traffic \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_vpn_api.pl \
    --plugin=cloud::aws::vpn::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md) for Centreon Plugins typical issues.