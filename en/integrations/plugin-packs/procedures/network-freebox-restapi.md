---
id: pp/network-freebox-restapi
title: Freebox
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `DEV` | Nov 22 2017 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Network-Freebox-Restapi

### Rest API
The plugin need an AppID and a AppToken. To create a token, you can use that command (you'll need to be near your freebox because you have to validate the token on the freebox screen):

   $ curl http://mafreebox.free.fr/api/v4/login/authorize/ -H "Content-type: application/json" -d '{ "app_id": "centreon", "app_name": "Test Centreon", "app_version": "1.0.0", "device_name": "centreon monitoring server" }'
   {"success":true,"result":{"app_token":"uU2avKR3BM6Gf\/VeV5lSy\/rKsLg8CCX8K4jviMCokQdDeYfn\/IGhqa9\/brszrhXU","track_id":0}}

You have to remove backslash characters and you have your AppToken. You can check if your AppToken is valid with the following command:

   $ curl http://mafreebox.free.fr/api/v4/login/authorize/0
   {"success":true,"result":{"status":"granted","challenge":"cfMfSY6HufMVspzod9uh8ikGNyVhRe1M","password_salt":"3MQ+O16Q8zY7eSUdLfndcSkc6jitkGoP"}}

If the status is 'granted', that's ok!

## Centreon Configuration
### Create a host using the appropriate template
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

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
<td align="left"><p>Net-Freebox-Restapi-custom</p></td>
</tr>
</tbody>
</table>

Click on the *Save* button.

