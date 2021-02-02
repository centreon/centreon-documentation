---
id: cloud-aws-cloudwatch
title: Amazon CloudWatch
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Aws-Cloudwatch-Api
```

To use it, you can either install 'awscli' (AWS Command Line Interface) or
'paws' (Perl AWS SDK).

### Install awscli

On CentOS, install with following commands:

``` shell
yum install -y epel-release
```
    # yum install -y python-pip
    # pip install awscli
    # yum remove -y epel-release

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | Cloud-Aws-Api              |

Click on the *Save* button.
