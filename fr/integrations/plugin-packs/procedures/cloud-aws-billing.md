---
id: cloud-aws-billing
title: AWS Billing
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.4.1 | `STABLE` | Oct 15 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Aws-Billing-Api
```

To use it, you can either install 'awscli' (AWS Command Line Interface) or 'paws' (Perl AWS SDK).

### Install awscli

On CentOS, install with following commands:

``` shell
yum install awscli
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field            | Value                    |
| :--------------- | :----------------------- |
| Name             | *Name of the host*       |
| Alias            | *Description*            |
| IP Address / DNS | *Can be localhost*       |
| Monitored from   | *Poller used to monitor* |
| Templates        | Cloud-Aws-Billing-custom |

The following host macros should be set as shown:

| Macro         | Value                                |
| :------------ | :----------------------------------- |
| AWSACCESSKEY  | *AWS access key*                     |
| AWSSECRETKEY  | *AWS secret key*                     |
| AWSREGION     | *AWS region*                         |
| AWSCUSTOMMODE | *Plugin custom mode: awscli or paws* |

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following service will be created:

  - Billing-Estimated-Charges

The following service macros should be set as shown:

| Macro   | Value                     |
| :------ | :------------------------ |
| SERVICE | *Name of the AWS service* |

Add as many services as needed or use the autodiscovery rule :

  - Cloud-Aws-Billing-Api-Estimated-Charges

This rule will add a service named *Billing-$servicename$* per AWS service.

