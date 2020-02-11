---
id: cloud-aws-lambda
title: AWS Lambda
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.4.1 | `STABLE` | Oct  1 2019 |


## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

    yum install centreon-plugin-Cloud-Aws-Lambda-Api

To use it, you can either install 'awscli' (AWS Command Line Interface) or 'paws' (Perl AWS SDK).

### Install awscli

On CentOS, install with following commands:

    yum install awscli

## Centreon Configuration

### Create a host using the appropriate template

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
            <td align="left"><p>Cloud-Aws-Lambda-custom</p></td>
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
            <td align="left"><p>AWSCUSTOMMODE</p></td>
            <td align="left"><p><em>Plugin custom mode: awscli or paws</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>AWSREGION</p></td>
            <td align="left"><p><em>AWS region</em></p></td>
        </tr>
    </tbody>
</table>

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following service will be created:

* Lambda-Invocations

The following service macros should be set as shown:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Macro</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>FUNCTIONNAME</p></td>
            <td align="left"><p><em>Name of the Lambda function</em></p></td>
        </tr>
    </tbody>
</table>

Add as many services as needed.


