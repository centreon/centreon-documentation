---
id: pp-applications-selenium
title: Selenium
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.1 | `STABLE` | Nov  9 2018 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Selenium

Be sure that centreon-plugin-Applications-Selenium is installed and that the
communication between your monitoring poller and the selenium server is
OK on port 4444

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
<td align="left"><p>App-Selenium-WAA-custom or App-Selenium-Katalon-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.


### Host Macro Configuration
The following macros must be configured on host using App-Selenium-Katalon-custom template :

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
<td align="left"><p>SELENIUMHOSTNAME</p></td>
<td align="left"><p>Hostname of the Selenium server</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="even">
<td align="left"><p>SELENIUMPORT</p></td>
<td align="left"><p>Port of the Selenium server</p></td>
<td align="left"><p>4444</p></td>
</tr>
<tr class="odd">
<td align="left"><p>SELENIUMBROWSER</p></td>
<td align="left"><p>Browser used by Selenium server</p></td>
<td align="left"><p>*firefox</p></td>
</tr>
<tr class="even">
<td align="left"><p>SCENARIODIRECTORY</p></td>
<td align="left"><p>Directory on the poller where the scenarii are stored</p></td>
<td align="left"><p>/var/lib/centreon_waa</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

### Service Macro Configuration
The following macros must be configured on the deployed services :

<table>
<colgroup>
<col width="20%" />
<col width="43%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Macro</th>
<th align="left">Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>SCENARIONAME</p></td>
<td align="left"><p>Name of the scenario without extension</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

