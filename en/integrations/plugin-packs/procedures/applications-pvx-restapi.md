---
id: applications-pvx-restapi
title: PVX
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | May 13 2019 |

## Prerequisites
### PVX version
Plugin requires PVX version 5.1.1 minimum.

### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Pvx-Restapi

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
<td align="left"><p>App-Pvx-Application-Restapi-custom</p></td>
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
<td align="left"><p>PVXCUSTOMMODE</p></td>
<td align="left"><p>Mode used by plugin</p></td>
<td align="left"><p>api</p></td>
</tr>
<tr class="even">
<td align="left"><p>PVXAPIHOSTNAME</p></td>
<td align="left"><p>Hostname of the PVX API instance</p></td>
<td align="left"><p></p></td>
</tr>
<tr class="odd">
<td align="left"><p>PVXAPIURLPATH</p></td>
<td align="left"><p>Path to the PVX API</p></td>
<td align="left"><p>/api</p></td>
</tr>
<tr class="even">
<td align="left"><p>PVXAPIPORT</p></td>
<td align="left"><p>Port of the PVX API instance</p></td>
<td align="left"><p>443</p></td>
</tr>
<tr class="odd">
<td align="left"><p>PVXAPIPROTO</p></td>
<td align="left"><p>Protocol used by the PVX API</p></td>
<td align="left"><p>http</p></td>
</tr>
<tr class="even">
<td align="left"><p>PVXAPIKEY</p></td>
<td align="left"><p>Key to access PVX API</p></td>
<td align="left"><p></p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

### Other host templates
The "App-Pvx-Application-Restapi-custom" host template will add services that will retrieve metrics
about traffic, connection, user experience and http hits by application.

It's possible to have the same metrics by other 'instances' like layer, server IP, client OS.
For this, new host templates can be created and linked to existing service templates, or newly created ones, 
where the instance macro is set to instance name.

Examples of existing service templates :
<table>
<colgroup>
<col width="23%" />
<col width="53%" />
<col width="24%" />
</colgroup>
<thead>
<tr class="header">
<th align="left">Name</th>
<th align="left">Alias</th>
<th align="left">Instance macro value</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td align="left"><p>Network-Traffic-Layer</p></td>
<td align="left"><p>App-Pvx-Network-Traffic-Layer-Restapi</p></td>
<td align="left"><p>layer</p></td>
</tr>
<tr class="even">
<td align="left"><p>Network-User-Experience-Server-Ip</p></td>
<td align="left"><p>App-Pvx-Network-User-Experience-Server-Ip-Restapi</p></td>
<td align="left"><p>server.ip</p></td>
</tr>
<tr class="odd">
<td align="left"><p>Http-Hits-Server-Ip</p></td>
<td align="left"><p>App-Pvx-Http-Hits-Server-Ip-Restapi</p></td>
<td align="left"><p>server.ip</p></td>
</tr>
</tbody>
</table>

### Create an API key
An API key has to be created to access the API. The key will never expire.

(From the official documentation at http://docs.performancevision.com/api_use.html)

#### Create a session ID :
First, a session ID needs to be requested.

    (From the central or poller)

    curl -k "https://<pvxapihost>/api/login?user=<user>&password=<password>"

Replace pvxapihost, user and password by your values.

The command line should return:

    {
        "type": "result",
        "result": "session:91554086-842b-4b73-9028-c51d20d91b94"
    }

The session ID is "session:91554086-842b-4b73-9028-c51d20d91b94".

#### Create an API key :
With the session ID, request an API key.

    (From the central or poller)

    curl -k "https://<pvxapihost>/api/create-api-key?name=<keyname>&_session=session:91554086-842b-4b73-9028-c51d20d91b94"

Replace pvxapihost by your value, and use the session ID for the "_session" argument.

The command line should return:

    {
        "type": "result",
        "result": "secret:e40b1cc6-f629-43a4-8be6-14a9c9f036e0"
    }

The API key is "secret:e40b1cc6-f629-43a4-8be6-14a9c9f036e0".


