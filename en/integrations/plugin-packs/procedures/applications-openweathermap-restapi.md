---
id: pp/applications-openweathermap-restapi
title: OpenWeatherMap
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | May 20 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Openweathermap-Restapi

### API token
A token is mandatory to access the API.
More information can be found on the official OpenWeatherMap website : https://openweathermap.org/api.

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
<td align="left"><p>IP address / DNS</p></td>
<td align="left"><p><em>api.openweathermap.org</em></p></td>
</tr>
<tr class="even">
<td align="left"><p>Monitored from</p></td>
<td align="left"><p><em>Monitoring Poller to use</em></p></td>
</tr>
<tr class="odd">
<td align="left"><p>Host Multiple Templates</p></td>
<td align="left"><p>App-OpenWeatherMap-Restapi-custom</p></td>
</tr>
<tr class="even">
<td align="left"><p>APITOKEN</p></td>
<td align="left"><p><em>Token from OpenWeatherMap subscription</em></p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

### Service Macro Configuration
The following macros must be configured on the service:

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
</tr>
</thead>
<tbody>
<tr class="even">
<td align="left"><p>CITYNAME</p></td>
<td align="left"><p>City name (e.g London or ISO 3166 code like London,uk)</p></td>
</tr>
<tr class="odd">
<td align="left"><p>WARNINGTEMPERATURE</p></td>
<td align="left"><p>Set warning threshold for temperature (in °C)</p></td>
</tr>
<tr class="even">
<td align="left"><p>CRITICALTEMPERATURE</p></td>
<td align="left"><p>Set critical threshold for temperature (in °C)</p></td>
</tr>
<tr class="odd">
<td align="left"><p>WARNINGHUMIDITY</p></td>
<td align="left"><p>Set warning threshold for humidity (in %)</p></td>
</tr>
<tr class="even">
<td align="left"><p>CRITICALHUMIDITY</p></td>
<td align="left"><p>Set critical threshold for humidity (in %)</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>WARNINGCLOUDS</p></td>
<td align="left"><p>Set warning threshold for clouds (in %)</p></td>
</tr>
<tr class="even">
<td align="left"><p>CRITICALCLOUDS</p></td>
<td align="left"><p>Set critical threshold for clouds (in %)</p></td>
</tr>
<tr class="odd">
<td align="left"><p>WARNINGWIND</p></td>
<td align="left"><p>Set warning threshold for wind (in m/s)</p></td>
</tr>
<tr class="even">
<td align="left"><p>CRITICALWIND</p></td>
<td align="left"><p>Set critical threshold for wind (in m/s)</p></td>
</tbody>
</table>

Click on the *Save* button.

