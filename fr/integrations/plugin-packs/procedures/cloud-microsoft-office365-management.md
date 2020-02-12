---
id: cloud-microsoft-office365-management
title: Office 365
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.1 | `STABLE` | Apr 24 2019 |


## Prerequisites

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Cloud-Microsoft-Office365-Management-Api

### Perl dependencies
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

### Register an application
To connect to the Office 365 Management API, you must register an application.

Follow the 'How-to guide' in https://docs.microsoft.com/en-us/office/office-365-management-api/get-started-with-office-365-management-apis#register-your-application-in-azure-ad for a complete explanation on how to register an application and get a client ID and secret.

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
<td align="left"><p>Cloud-Microsoft-Office365-Management-Api-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

### Set host macros
The following macros must be configured on host.

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
<td align="left"><p>OFFICE365CUSTOMMODE</p></td>
<td align="left"><p>Custom mode 'managementapi'</p></td>
</tr>
<tr class="even">
<td align="left"><p>OFFICE365TENANT</p></td>
<td align="left"><p>Office 365 tenant ID</p></td>
</tr>
<tr class="odd">
<td align="left"><p>OFFICE365CLIENTID</p></td>
<td align="left"><p>Office 365 client ID</p></td>
</tr>
<tr class="even">
<td align="left"><p>OFFICE365CLIENTSECRET</p></td>
<td align="left"><p>Office 365 client secret</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

