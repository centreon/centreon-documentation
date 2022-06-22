---
id: cloud-aws-billing
title: AWS Billing
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack AWS Billing brings a host template:

* Cloud-Aws-Billing-custom

It brings the following Service Template:

| Service Alias             | Service Template                        | Service Description                  | Default |
|:--------------------------|:----------------------------------------|:-------------------------------------|:--------|
| Billing-Estimated-Charges | Cloud-Aws-Billing-Estimated-Charges-Api | Check AWS service estimated charges. | X       |

### Discovery rules

The pack provides a discovery rule to automatically discover AWS services generating charges:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-aws-billing-provider.png)

More information about the Host Discovery module is available in the Centreon documentation: [Host Discovery](/docs/monitoring/discovery/hosts-discovery)


### Collected metrics & status

<Tabs groupId="metrics">
<TabItem value="Billing-Estimated-Charges" label="Billing-Estimated-Charges">

| Metric Name                  | Description                                    |
|:-----------------------------|:---------------------------------------------- |
| billing.estimatedcharges.usd | Check Billing estimated charges for a service. |

</TabItem>
</Tabs>

## Prerequisites

### AWS Configuration

Configure a service account (access/secret key combo) for which the following privileges have to be granted:

| AWS Permission                 | Description                                               |
| :----------------------------- | :-------------------------------------------------------- |
| cloudwatch:ListMetrics         | Get all services generating charges.                      |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/Billing namespace on Cloudwatch. |

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

<Tabs groupId="setup">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor AWS services generating charges:

```bash
yum install centreon-plugin-Cloud-Aws-Billing-Api
```

2. On the Centreon Web interface, install the **AWS Billing** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor AWS services generating charges:

```bash
yum install centreon-plugin-Cloud-Aws-Billing-Api
```

2. Install the **AWS Billing** Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-aws-billing
```

3. On the Centreon Web interface, install the **AWS Billing** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Set **IP Address/DNS** as **127.0.0.1**.
* Select the **Cloud-Aws-Billing-custom** template to apply to the host.
* Once the template is applied, fill the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro           | Description                                                                                  |
|:------------|:----------------|:---------------------------------------------------------------------------------------------|
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked.                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked.                          |
| X           | AWSREGION       | Region where the instance is running.                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library.   |
| X           | SERVICENAME     | Billed AWS service name.                                                                     |
|             | PROXYURL        | Configure proxy URL.                                                                         |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag).          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it until you know what you are doing.               |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed. |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account (`su - centreon-engine`) and test the Plugin by
running the following command with the name of your backup vault:

```bash
/usr/lib/centreon/plugins//centreon_aws_billing_api.pl \
    --plugin=cloud::aws::billing::plugin \
    --mode=estimated-charges \
    --custommode='awscli' \
    --region=us-east-1 \
    --aws-secret-key='xxx' \
    --aws-access-key='xxx' \
    --service='AWSBackup' \
    --warning-billing='' \
    --critical-billing='' \
```

The expected command output is shown below:

```bash
OK: Service 'AWSBackup' Estimated Charges: 0.85 USD | 'AWSBackup#billing.estimatedcharges.usd'=0.85USD;;;;
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_billing_api.pl \
    --plugin=cloud::aws::billing::plugin \
    --mode=estimated-charges \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_billing_api.pl \
    --plugin=cloud::aws::billing::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md) for Centreon Plugins typical issues.
