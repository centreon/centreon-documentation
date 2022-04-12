---
id: cloud-aws-backup
title: Amazon Backup Vault
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Pack Assets

### Templates

The Centreon Plugin Pack Amazon Backup Vault brings a host template:
* Cloud-Aws-Backup-Vault-custom

It brings the following Service Template:

| Service Alias            | Service Template                       | Service Description                | Default |
|:-------------------------|:---------------------------------------|:-----------------------------------|:--------|
| Backup-Vault-Jobs-Status | Cloud-Aws-Backup-Vault-Jobs-Status-Api | Check AWS Backup Vault jobs status | X       |

### Discovery rules

The pack provides a discovery rule to automatically discover Backup vault resources:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-aws-backup-vault-provider.png)

More information about the Host Discovery module is available in the Centreon documentation: [Host Discovery](/docs/monitoring/discovery/hosts-discovery)


### Collected metrics & status

<Tabs groupId="metrics">
<TabItem value="Backup-Vault-Jobs-Status" label="Backup-Vault-Jobs-Status">

| Metric Name                 | Description                                                                             |
|:----------------------------|:----------------------------------------------------------------------------------------|
| backup.jobs.completed.count | Number of Backup vault jobs completed for the specified timeframe. Default : last 24h.  |
| backup.jobs.failed.count    | Number of Backup vault jobs failed for the specified timeframe. Default : last 24h.     |
| backup.jobs.expired.count   | Number of Backup vault jobs expired for the specified timeframe. Default : last 24h.    |
| copy.jobs.completed.count   | Number of Copy vault jobs completed for the specified timeframe. Default : last 24h.    |
| copy.jobs.failed.count      | Number of Copy vault jobs failed for the specified timeframe. Default : last 24h.       |
| recovery.jobs.expired.count | Number of Recovery vault jobs completed for the specified timeframe. Default : last 24h.|

</TabItem>
</Tabs>

## Prerequisites

### AWS Configuration

Configure a service account (access/secret key combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                                     |
| :----------------------------- | :-------------------------------------------------------------- |
| backup:ListBackupVaults        | Get Backup Vault Names.                                         |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/EC2 namespace on Cloudwatch.           |

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
yum install awscli
```

</TabItem>
</Tabs>

## Setup

<Tabs groupId="setup">
<TabItem value="Online License" label="Online License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *AWS Backup Vault* resources:

```bash
yum install centreon-plugin-Cloud-Aws-Backup-Api
```

2. On the Centreon Web interface, install the **Amazon Backup Vault** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Install the Centreon Plugin package on every Centreon poller expected to monitor *AWS Backup Vault* resources:

```bash
yum install centreon-plugin-Cloud-Aws-Backup-Api
```

2. Install the **Amazon Backup Vault** Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-aws-backup
```

3. On the Centreon Web interface, install the **Amazon Backup Vault** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

</TabItem>
</Tabs>

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**.
* Fill the **Name**, **Alias** & **IP Address/DNS** fields according to your *AWS Backup Vault* server settings.
* Select the *Cloud-Aws-Backup-Vault-custom* template to apply to the Host.
* Once the template is applied, fill in the corresponding macros. Some macros are mandatory.

| Mandatory   | Macro           | Description                                                                                  |
|:------------|:----------------|:---------------------------------------------------------------------------------------------|
| X           | AWSSECRETKEY    | AWS Secret key of your IAM role. Password checkbox must be checked.                          |
| X           | AWSACESSKEY     | AWS Access key of your IAM role. Password checkbox must be checked.                          |
| X           | AWSREGION       | Region where the instance is running.                                                        |
| X           | AWSCUSTOMMODE   | Custom mode to get metrics, 'awscli' is the default, you can also use 'paws' perl library.   |
| X           | VAULTBACKUPNAME | Backup Vault name containing jobs.                                                           |
|             | PROXYURL        | Configure proxy URL.                                                                         |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag).          |
|             | DUMMYSTATUS     | Host state. Default is OK, do not modify it until you know what you are doing.               |
|             | DUMMYOUTPUT     | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed. |

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account (`su - centreon-engine`) and test the Plugin by
running the following command with the name of your backup vault:

```bash
/usr/lib/centreon/plugins//centreon_aws_backup_api.pl \
    --plugin=cloud::aws::backup::plugin \
    --mode=jobstatus \
    --custommode='awscli' \
    --aws-secret-key='' \
    --aws-access-key='' \
    --region='' \
    --backup-vault-name='MY-VAULT' \
    --filter-metric='.*' \
    --proxyurl='' \
    --timeframe='86400' \
    --period='3600'  \
    --zeroed\
```

The expected command output is shown below:

```bash
OK: 'MY-VAULT' Statistic 'Sum' Metrics Number of backup jobs expired: 0.00 , Number of copy jobs completed: 0.00 , Number of backup jobs failed: 0.00 , Number of backup jobs completed: 4.00 , Number of recovery jobs expired: 0.00 , Number of copy jobs failed: 0.00  | 'MY-VAULT~sum#backup.jobs.expired.count'=0.00;;;0; 'MY-VAULT~sum#copy.jobs.completed.count'=0.00;;;0; 'MY-VAULT~sum#backup.jobs.failed.count'=0.00;;;0; 'MY-VAULT~sum#backup.jobs.completed.count'=4.00;;;0; 'MY-VAULT~sum#recovery.jobs.expired.count'=0.00;;;0; 'MY-VAULT~sum#copy.jobs.failed.count'=0.00;;;0;
```

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_backup_api.pl \
    --plugin=cloud::aws::backup::plugin \
    --mode=jobstatus \
    --help
```

All available modes can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_backup_api.pl \
    --plugin=cloud::aws::backup::plugin \
    --list-mode
```

### Troubleshooting

Please find the [troubleshooting documentation](../getting-started/how-to-guides/troubleshooting-plugins.md) for Centreon Plugins typical issues.
