---
id: cloud-kubernetes-api
title: Kubernetes API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.3 | `STABLE` | Jul 22 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Cloud-Kubernetes-Api

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
<td align="left"><p>Cloud-Kubernetes-Api-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

### Host Macro Configuration
The following macros must be configured on host:

<table>
<colgroup>
<col width="23%" />
<col width="53%" />
<col width="24%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Macro</th>
<th align="left">Description</th>
<th align="left">Default value</th>
</tr>
</thead>
<tbody>

<tr class="even">
<td align="left"><p>KUBERNETESAPICUSTOMMODE</p></td>
<td align="left"><p>Plugin custom mode (api or kubectl)</p></td>
<td align="left"><p>api</p></td>
</tr>
<tr class="odd">
<td align="left"><p>KUBERNETESAPIHOSTNAME</p></td>
<td align="left"><p>Hostname of the Kubernetes API service</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>KUBERNETESAPIURL</p></td>
<td align="left"><p>URL of the API</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>KUBERNETESAPIPORT</p></td>
<td align="left"><p>Port of the API</p></td>
<td align="left"><p>443</p></td>
</tr>
<tr class="even">
<td align="left"><p>KUBERNETESAPIPROTO</p></td>
<td align="left"><p>Protocol used by API</p></td>
<td align="left"><p>https</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

