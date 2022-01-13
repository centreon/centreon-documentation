---
id: cloud-aws-fsx
title: Amazon FSx
---

## Pack Assets

### Templates

The Centreon Plugin Pack Amazon FSx brings 1 host template:
* Cloud-Aws-Fsx-custom

It brings the following Service Templates:

| Service Alias | Service Template            | Default |
|:--------------|:----------------------------|:--------|
| Fsx-DataUsage | Cloud-Aws-Fsx-Datausage-Api | X       |
| Fsx-Freespace | Cloud-Aws-Fsx-Freespace-Api | X       |

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

| Rule name                           | Description                                                   |
| :---------------------------------- | :------------------------------------------------------------ |
| Cloud-Aws-Fsx-Api-HostDiscovery     | Discover FSx Filesystems from your Cloudwatch endpoint        |

<!--Services-->

No service discovery rule is available in this pack

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Fsx-DataUsage-->

| Metric Name                     | Unit      |
|:--------------------------------|:----------|
| fsx.data.read.bytes             | B         |
| fsx.data.read.bytespersecond    | B/s       |
| fsx.data.write.bytes            | B         |
| fsx.data.write.bytespersecond   | B/s       |
| fsx.data.io.read.count          | count     |
| fsx.data.io.read.persecond      | persecond |
| fsx.data.io.write.count         | count     |
| fsx.data.io.write.persecond     | persecond |
| fsx.metadata.ops.bytes          | B         |
| fsx.metadata.ops.bytespersecond | B/s       |

<!--Fsx-Freespace-->

| Metric Name                     | Unit  |
|:--------------------------------|:------|
| fsx.storage.free.byt            | B     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

Configure a service account (access/secret key combo) for which the following privileges have to be granted:

| AWS Privilege                  | Description                                          |
| :----------------------------- | :--------------------------------------------------- |
| fsx:DescribeFileSystems        | Display FSx instances & details                      |
| cloudwatch:getMetricStatistics | Get metrics from the AWS/FSx namespace on Cloudwatch |

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Amazon FSx** resources:

```bash
yum install centreon-plugin-Cloud-Aws-Fsx-Api
```

2. On the Centreon Web interface, install the **Amazon FSx** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

<!--Offline License-->

1. Install the Centreon Plugin package on every Centreon poller expected to monitor **Amazon FSx** resources:

```bash
yum install centreon-plugin-Cloud-Aws-Fsx-Api
```

2. Install the **Amazon FSx** Centreon Plugin Pack RPM on the Centreon Central server:

 ```bash
yum install centreon-pack-cloud-aws-fsx
```

3. On the Centreon Web interface, install the **Amazon FSx** Centreon Plugin Pack on the **Configuration > Plugin Packs** page.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Host

* Log into Centreon and add a new Host through **Configuration > Hosts**
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your **Amazon FSx** server settings
* Select the **cloud-aws-fsx-custom** template to apply to the Host
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

## How to check in the CLI that the configuration is OK and what are the main options for? 

Once the plugin is installed, log into your Centreon Poller CLI using the 
**centreon-engine** user account and test the Plugin by running the following 
command:

```bash
/usr/lib/centreon/plugins//centreon_aws_fsx_api.pl \
    --plugin=cloud::aws::fsx::plugin \
    --mode=datausage \
    --custommode='awscli' \
    --aws-secret-key='' \
    --aws-access-key='' \
    --region='' \
    --name='' \
    --proxyurl=''  \
    --filter-metric='' \
    --statistic='average' \
    --timeframe='900' \
    --period='60' \
    --warning-data-write-ops='' \
    --critical-data-write-ops='' \
    --warning-data-read-ops='1000' \
    --critical-data-read-ops='' \
    --warning-data-write-bytes='' \
    --critical-data-write-bytes='' \
    --warning-data-read-bytes='' \
    --critical-data-read-bytes='' \
    --warning-metadata-ops-bytes='' \
    --critical-metadata-ops-bytes='' \
    --verbose
```

The expected command output is shown below:

```bash
OK: All FSx metrics are ok | 
```

This command would trigger a CRITICAL alarm if the number of read operations was reported as over
1000 (`--critical-data-read-ops='1000'`).

All available options for a given mode can be displayed by adding the 
`--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_fsx_api.pl \
    --plugin=cloud::aws::fsx::plugin \
    --mode=datausage \
    --help
```

All available options for a given mode can be displayed by adding the 
`--list-mode` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_aws_fsx_api.pl \
    --plugin=cloud::aws::fsx::plugin \
    --list-mode
```

### Troubleshooting

Please find all the troubleshooting documentation for the Centreon Plugins
in the [dedicated page](../tutorials/troubleshooting-plugins.html)