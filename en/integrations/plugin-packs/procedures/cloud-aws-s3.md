---
id: cloud-aws-s3
title: Amazon S3
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.5.0 | `STABLE` | Oct 15 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Aws-S3-Api
```

To use it, you can either install 'awscli' (AWS Command Line Interface) or 'paws' (Perl AWS SDK).

### Install awscli

On CentOS, install with following commands:

``` shell
yum install awscli
```

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | Cloud-Aws-S3-custom        |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro           | Description                          | Default value |
| :-------------- | :----------------------------------- | :------------ |
| AWSCUSTOMMODE   | Mode used by plugin (awscli or paws) | awscli        |
| AWSSECRETKEY    | CloudWatch secret key                |               |
| AWSACCESSKEY    | CloudWatch access key                |               |
| AWSREGION       | Monitoring region                    |               |
| AWSINSTANCENAME | Name of your S3 instance             |               |

Click on the *Save* button.

