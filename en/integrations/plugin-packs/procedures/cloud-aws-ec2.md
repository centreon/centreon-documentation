---
id: pp/cloud-aws-ec2
title: Amazon EC2
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.5.0 | `STABLE` | Oct 15 2019 |


## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

    yum install centreon-plugin-Cloud-Aws-Ec2-Api

To use it, you can either install 'awscli' (AWS Command Line Interface) or 'paws' (Perl AWS SDK).

### Install awscli

On CentOS, install with following commands:

    yum install awscli

## Centreon Configuration

### Create a host using the appropriate template

#### For an AutoScalingGroup

Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Field</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>Name</p></td>
            <td align="left"><p><em>Name of the host</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Alias</p></td>
            <td align="left"><p><em>Description</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>IP Address / DNS</p></td>
            <td align="left"><p><em>Can be localhost</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Monitored from</p></td>
            <td align="left"><p><em>Poller used to monitor</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Templates</p></td>
            <td align="left"><p>Cloud-Aws-Ec2-Asg-custom</p></td>
        </tr>
    </tbody>
</table>

The following host macros should be set as shown:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Macro</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>AWSACCESSKEY</p></td>
            <td align="left"><p><em>AWS access key</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>AWSSECRETKEY</p></td>
            <td align="left"><p><em>AWS secret key</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>AWSREGION</p></td>
            <td align="left"><p><em>AWS region</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>AWSCUSTOMMODE</p></td>
            <td align="left"><p><em>Plugin custom mode: awscli or paws</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>AWSINSTANCETYPE</p></td>
            <td align="left"><p>asg</p></td>
        </tr>
        <tr>
            <td align="left"><p>AWSINSTANCENAME</p></td>
            <td align="left"><p><em>Name of the load balancer</em></p></td>
        </tr>
    </tbody>
</table>

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following services will be created:

* Ec2-Cpu-Credit
* Ec2-Cpu-Usage
* Ec2-Diskio
* Ec2-Network
* Ec2-Status

#### For an instance

Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Field</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>Name</p></td>
            <td align="left"><p><em>Name of the host</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Alias</p></td>
            <td align="left"><p><em>Description</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>IP Address / DNS</p></td>
            <td align="left"><p><em>Can be localhost</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Monitored from</p></td>
            <td align="left"><p><em>Poller used to monitor</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Templates</p></td>
            <td align="left"><p>Cloud-Aws-Ec2-Instance-custom</p></td>
        </tr>
    </tbody>
</table>

The following host macros should be set as shown:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Macro</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>AWSACCESSKEY</p></td>
            <td align="left"><p><em>AWS access key</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>AWSSECRETKEY</p></td>
            <td align="left"><p><em>AWS secret key</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>AWSREGION</p></td>
            <td align="left"><p><em>AWS region</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>AWSCUSTOMMODE</p></td>
            <td align="left"><p><em>Plugin custom mode: awscli or paws</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>AWSINSTANCETYPE</p></td>
            <td align="left"><p>instance</p></td>
        </tr>
        <tr>
            <td align="left"><p>AWSINSTANCENAME</p></td>
            <td align="left"><p><em>Name of the load balancer</em></p></td>
        </tr>
    </tbody>
</table>

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following services will be created:

* Ec2-Cpu-Credit
* Ec2-Cpu-Usage
* Ec2-Diskio
* Ec2-Network
* Ec2-Status


