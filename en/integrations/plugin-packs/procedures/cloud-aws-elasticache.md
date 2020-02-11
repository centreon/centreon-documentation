---
id: pp-cloud-aws-elasticache
title: Amazon ElastiCache
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.4.1 | `STABLE` | Oct 15 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Cloud-Aws-Elasticache-Api

To use it, you can either install 'awscli' (AWS Command Line Interface) or 'paws' (Perl AWS SDK).

### Install awscli
On CentOS, install with following commands:

    yum install awscli

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
<td align="left"><p>Cloud-Aws-ElastiCache-<Memcached/Redis>-custom</p></td>
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
<tr class="odd">
<td align="left"><p>AWSCUSTOMMODE</p></td>
<td align="left"><p>Mode used by plugin (awscli or paws)</p></td>
<td align="left"><p>awscli</p></td>
</tr>
<tr class="even">
<td align="left"><p>AWSSECRETKEY</p></td>
<td align="left"><p>CloudWatch secret key</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>AWSACCESSKEY</p></td>
<td align="left"><p>CloudWatch access key</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>AWSREGION</p></td>
<td align="left"><p>Monitoring region</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>AWSINSTANCENAME</p></td>
<td align="left"><p>Name of your Cache instance</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

