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

### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Fsx-DataUsage-->

<!--Fsx-Freespace-->

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

*Specify prerequisites that are relevant. You may want to just provide a link
to the manufacturer official documentation BUT you should try to be as complete
as possible here as it will save time to everybody.*

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
* Fill the **Name**, **Alias** & **IP Address / DNS** fields according to your *Amazon FSx* server settings
* Select the *cloud-aws-fsx-custom* template to apply to the Host
* Once the template applied, some Macros marked as 'Mandatory' hereafter have to be configured.

| Mandatory | Name            | Description                                                                                     |
|:----------|:----------------|:------------------------------------------------------------------------------------------------|
|           | AWSACCESSKEY    |                                                                                                 |
|           | AWSCUSTOMMODE   | (Default: 'awscli')                                                                             |
|           | AWSEXTRAOPTIONS |                                                                                                 |
|           | AWSREGION       |                                                                                                 |
|           | AWSSECRETKEY    |                                                                                                 |
|           | FILESYSTEMID    |                                                                                                 |
|           | PROXYURL        |                                                                                                 |
|           | EXTRAOPTIONS    | (Default: 'Any extra option you may want to add to every command\_line (eg. a --verbose flag)') |

## How to check in the CLI that the configuration is OK and what are the main options for ? 

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
    --warning-data-read-ops='' \
    --critical-data-read-ops='' \
    --warning-data-write-ops='' \
    --critical-data-write-ops='' \
    --warning-data-read-bytes='' \
    --critical-data-read-bytes='' \
    --warning-metadata-ops-bytes='' \
    --critical-metadata-ops-bytes='' \
    --verbose \
    --use-new-perfdata 
```

The expected command output is shown below:

```bash
OK: | 
```

This command would trigger a WARNING alarm if *WHAT* is reported as over 
(`--warning-vault-availability-percentage`) and a CRITICAL alarm if less
than 50% (`--critical-vault-availability-percentage='50:'`).

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