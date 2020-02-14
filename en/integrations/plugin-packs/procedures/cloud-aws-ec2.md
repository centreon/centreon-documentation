---
id: cloud-aws-ec2
title: Amazon EC2
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.5.0 | `STABLE` | Oct 15 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Aws-Ec2-Api
```

To use it, you can either install 'awscli' (AWS Command Line Interface) or 'paws' (Perl AWS SDK).

### Install awscli

On CentOS, install with following commands:

``` shell
yum install awscli
```

## Centreon Configuration

### Create a host using the appropriate template

#### For an AutoScalingGroup

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field            | Value                    |
| :--------------- | :----------------------- |
| Name             | *Name of the host*       |
| Alias            | *Description*            |
| IP Address / DNS | *Can be localhost*       |
| Monitored from   | *Poller used to monitor* |
| Templates        | Cloud-Aws-Ec2-Asg-custom |

The following host macros should be set as shown:

| Macro           | Value                                |
| :-------------- | :----------------------------------- |
| AWSACCESSKEY    | *AWS access key*                     |
| AWSSECRETKEY    | *AWS secret key*                     |
| AWSREGION       | *AWS region*                         |
| AWSCUSTOMMODE   | *Plugin custom mode: awscli or paws* |
| AWSINSTANCETYPE | asg                                  |
| AWSINSTANCENAME | *Name of the load balancer*          |

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following services will be created:

  - Ec2-Cpu-Credit
  - Ec2-Cpu-Usage
  - Ec2-Diskio
  - Ec2-Network
  - Ec2-Status

#### For an instance

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field            | Value                         |
| :--------------- | :---------------------------- |
| Name             | *Name of the host*            |
| Alias            | *Description*                 |
| IP Address / DNS | *Can be localhost*            |
| Monitored from   | *Poller used to monitor*      |
| Templates        | Cloud-Aws-Ec2-Instance-custom |

The following host macros should be set as shown:

| Macro           | Value                                |
| :-------------- | :----------------------------------- |
| AWSACCESSKEY    | *AWS access key*                     |
| AWSSECRETKEY    | *AWS secret key*                     |
| AWSREGION       | *AWS region*                         |
| AWSCUSTOMMODE   | *Plugin custom mode: awscli or paws* |
| AWSINSTANCETYPE | instance                             |
| AWSINSTANCENAME | *Name of the load balancer*          |

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following services will be created:

  - Ec2-Cpu-Credit
  - Ec2-Cpu-Usage
  - Ec2-Diskio
  - Ec2-Network
  - Ec2-Status


