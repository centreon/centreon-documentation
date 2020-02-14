---
id: cloud-aws-kinesis
title: Amazon Kinesis
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.4.2 | `STABLE` | Oct 15 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Aws-Kinesis-Api
```

To use it, you can either install 'awscli' (AWS Command Line Interface) or
'paws' (Perl AWS SDK).

### Install awscli

On CentOS, install with following commands:

``` shell
yum install awscli
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field            | Value                    |
| :--------------- | :----------------------- |
| Name             | *Name of the host*       |
| Alias            | *Description*            |
| IP Address / DNS | *Can be localhost*       |
| Monitored from   | *Poller used to monitor* |
| Templates        | Cloud-Aws-Lambda-custom  |

The following host macros should be set as shown:

| Macro         | Value                                |
| :------------ | :----------------------------------- |
| AWSACCESSKEY  | *AWS access key*                     |
| AWSSECRETKEY  | *AWS secret key*                     |
| AWSCUSTOMMODE | *Plugin custom mode: awscli or paws* |
| AWSREGION     | *AWS region*                         |

Check the *Create Services linked to the Template too* box and click on the
*Save* button.

The following service will be created:

  - Streams
  - Records-Statistics

The following service macros should be set as shown:

| Macro      | Value                    |
| :--------- | :----------------------- |
| STREAMNAME | *Name of Kinesis stream* |

