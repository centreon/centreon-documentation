---
id: cloud-aws-elb
title: AWS ELB
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.5.0 | `STABLE` | Oct 21 2019 |

## Prerequisites

### Centreon Plugin

Install this plugins on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Aws-Elb-Api
```
    # yum install centreon-plugin-Cloud-Aws-Elb-Application-Api
    # yum install centreon-plugin-Cloud-Aws-Elb-Network-Api

To use it, you can either install 'awscli' (AWS Command Line Interface) or
'paws' (Perl AWS SDK).

### Install awscli

On CentOS, install with following commands:

``` shell
yum install awscli
```

## Centreon Configuration

### Create a host using the appropriate template

#### For an Availability Zone (Classic ELB)

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field            | Value                                 |
| :--------------- | :------------------------------------ |
| Name             | *Name of the host*                    |
| Alias            | *Description*                         |
| IP Address / DNS | *Can be localhost*                    |
| Monitored from   | *Poller used to monitor*              |
| Templates        | Cloud-Aws-Elb-AvailabilityZone-custom |

The following host macros should be set as shown:

| Macro           | Value                                |
| :-------------- | :----------------------------------- |
| AWSACCESSKEY    | *AWS access key*                     |
| AWSSECRETKEY    | *AWS secret key*                     |
| AWSREGION       | *AWS region*                         |
| AWSCUSTOMMODE   | *Plugin custom mode: awscli or paws* |
| AWSINSTANCETYPE | availabilityzone                     |
| AWSINSTANCENAME | *Name of the availability zone*      |

Check the *Create Services linked to the Template too* box and click on the
*Save* button.

The following services will be created:

  - Elb-Http-Codes
  - Elb-Performances
  - Elb-Queues
  - Elb-Targets-Health

#### For a load balancer (Classic ELB)

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field            | Value                             |
| :--------------- | :-------------------------------- |
| Name             | *Name of the host*                |
| Alias            | *Description*                     |
| IP Address / DNS | *Can be localhost*                |
| Monitored from   | *Poller used to monitor*          |
| Templates        | Cloud-Aws-Elb-LoadBalancer-custom |

The following host macros should be set as shown:

| Macro           | Value                                |
| :-------------- | :----------------------------------- |
| AWSACCESSKEY    | *AWS access key*                     |
| AWSSECRETKEY    | *AWS secret key*                     |
| AWSREGION       | *AWS region*                         |
| AWSCUSTOMMODE   | *Plugin custom mode: awscli or paws* |
| AWSINSTANCETYPE | loadbalancer                         |
| AWSINSTANCENAME | *Name of the load balancer*          |

Check the *Create Services linked to the Template too* box and click on the
*Save* button.

The following services will be created:

  - Elb-Http-Codes
  - Elb-Performances
  - Elb-Queues
  - Elb-Targets-Health

