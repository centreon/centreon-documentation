---
id: pp-applications-protocol-jmx
title: JMX value
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Protocol-Jmx

Please install jolokia agent on your java application server
[Jolikia download page](https://jolokia.org/download.html). Ask to
your admin to deploy it and give you the URL.

## Centreon Configuration
### Create a service using the appropriate template
Go to *Configuration &gt; Services* and click *Add*. Then, fill the form
as shown by the following table:

<table>
<colgroup>
<col width="35%" />
<col width="64%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Field</th>
<th align="left">Value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Service name</p></td>
<td align="left"><p><em>Choose a name</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Service Template</p></td>
<td align="left"><p>App-Protocol-Jmx-Numeric-Value-Generic-Custom-custom</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Macros</p></td>
<td align="left"><p>JOLOKIAURL, MBEANPATTERN, ATTRIBUTE, PATH</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

