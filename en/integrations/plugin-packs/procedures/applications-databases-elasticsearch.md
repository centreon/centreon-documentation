---
id: pp/applications-databases-elasticsearch
title: Elasticsearch
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.4 | `STABLE` | Jul 11 2019 |

## Prerequisites
This chapter describes the prerequisites installation needed by plugins
to run.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Databases-Elasticsearch

## Centreon Configuration
### Create a host using the appropriate template
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
<td align="left"><p>App-DB-Elascticsearch-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

### Host Macro Configuration
The following macros must be configured on host:

<table>
<colgroup>
<col width="24%" />
<col width="44%" />
<col width="17%" />
<col width="12%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Macro</th>
<th align="left">Description</th>
<th align="left">Default value</th>
<th align="left">Example</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>ELASTICSEARCHPORT</p></td>
<td align="left"><p>The Elasticsearch instance port</p></td>
<td align="left"><p>9200</p></td>
<td align="left"><p>1234</p></td>
</tr>
<tr class="even">
<td align="left"><p>ELASTICSEARCHPROTO</p></td>
<td align="left"><p>The Elasticsearch instance protocol</p></td>
<td align="left"><p>http</p></td>
<td align="left"><p>https</p></td>
</tr>
<tr class="odd">
<td align="left"><p>ELASTICSEARCHUSERNAME</p></td>
<td align="left"><p>The Elasticsearch instance username</p></td>
<td align="left"><p></p></td>
<td align="left"><p>centreon</p></td>
</tr>
<tr class="even">
<td align="left"><p>ELASTICSEARCHPASSWORD</p></td>
<td align="left"><p>The Elasticsearch instance password</p></td>
<td align="left"><p></p></td>
<td align="left"><p>centreon</p></td>
</tr>
</tbody>
</table>

