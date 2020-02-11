---
id: cloud-azure-database-sqlserver
title: Azure SQL Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.2.2 | `STABLE` | Oct 15 2019 |


## Prerequisites

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Cloud-Azure-Database-SqlServer-Api

### Perl dependencies (for 'api' custom mode)
By installing the plugin, some perl depencies will be installed :

    JSON::XS
    DateTime
    Digest::MD5
    Digest::SHA
    LWP::UserAgent
    LWP::Protocol::https
    IO::Socket::SSL
    URI
    HTTP::ProxyPAC

The login and access token handling will be made by the plugin itself.

### Azure CLI 2.0 (for 'azcli' custom mode)
The CLI needs at least Python version 2.7 (https://github.com/Azure/azure-cli/blob/dev/doc/install_linux_prerequisites.md).

On CentOS/RedHat, install with following commands:

    (As root)
    rpm --import https://packages.microsoft.com/keys/microsoft.asc
    echo -e "[azure-cli]\nname=Azure CLI\nbaseurl=https://packages.microsoft.com/yumrepos/azure-cli\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/azure-cli.repo
    yum install azure-cli
    (As centreon-engine)
    az login

The shell should prompt:

    To sign in, use a web browser to open the page https://microsoft.com/devicelogin and enter the code CWT4WQZAD to authenticate.

Go to https://microsoft.com/devicelogin and enter the given code.

Log in with your account credentials. You should use a service account. Application is not yet supported.

The command line should now show:

    [
      {
        "cloudName": "AzureCloud",
        "id": "0ef83f3a-d83e-2039-d930-309df93acd93d",
        "isDefault": true,
        "name": "N/A(tenant level account)",
        "state": "Enabled",
        "tenantId": "0ef83f3a-03cd-2039-d930-90fd39ecd048",
        "user": {
          "name": "email@mycompany.onmicrosoft.com",
          "type": "user"
        }
      }
    ]

You now have a hidden azure directory where your token is stored in an accessTokens.json file.

## Centreon Configuration

### Create a new host
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="58%" />
<col width="41%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field</th>
<th align="left">Value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Host name</p></td>
<td align="left"><p><em>Name of the host</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Alias</p></td>
<td align="left"><p><em>Host description</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>IP</p></td>
<td align="left"><p><em>Host IP Address</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Monitored from</p></td>
<td align="left"><p><em>Monitoring Poller to use</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Host Multiple Templates</p></td>
<td align="left"><p>Cloud-Azure-Database-SqlServer-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

### Set host macros
The following macros must be configured on host.

#### Common macros
<table>
<colgroup>
<col width="58%" />
<col width="41%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Macro</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>AZURESQLSERVERNAME</p></td>
<td align="left"><p>SQL server name</p></td>
</tr>
<tr class="even">
<td align="left"><p>AZURERESOURCEGROUP</p></td>
<td align="left"><p>Resource group</p></td>
</tr>
</tbody>
</table>

#### 'api' custom mode macros
<table>
<colgroup>
<col width="58%" />
<col width="41%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Macro</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>AZURECUSTOMMODE</p></td>
<td align="left"><p>Custom mode 'api'</p></td>
</tr>
<tr class="even">
<td align="left"><p>AZURESUBSCRIPTION</p></td>
<td align="left"><p>Subscription ID</p></td>
</tr>
<tr class="odd">
<td align="left"><p>AZURETENANT</p></td>
<td align="left"><p>Tenant ID</p></td>
</tr>
<tr class="even">
<td align="left"><p>AZURECLIENTID</p></td>
<td align="left"><p>Client ID</p></td>
</tr>
<tr class="odd">
<td align="left"><p>AZURECLIENTSECRET</p></td>
<td align="left"><p>Client secret</p></td>
</tr>
</tbody>
</table>

#### 'azcli' custom mode macros
<table>
<colgroup>
<col width="58%" />
<col width="41%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Macro</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>AZURECUSTOMMODE</p></td>
<td align="left"><p>Custom mode 'azcli'</p></td>
</tr>
<tr class="even">
<td align="left"><p>AZURESUBSCRIPTION</p></td>
<td align="left"><p>Subscription ID</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

## Available metrics
Go to https://docs.microsoft.com/en-us/azure/monitoring-and-diagnostics/monitoring-supported-metrics?toc=/azure/azure-monitor/toc.json#microsoftnetworknetworkinterfaces to see the description of return metrics for this Azure service.

