---
id: applications-mail-bluemind
title: BlueMind
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.15 | `STABLE` | Jul 11 2019 |

## Prerequisites
### Centreon Plugin
Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Mail-Bluemind

## centreon user for check by ssh
You must create the centreon user on your bluemind server and setup its
password with these following commands:

    $ useradd -m -s /bin/bash centreon
    $ passwd centreon

### SSH key exchange
You must make a ssh key exchange between the user centreon-engine of
your monitoring poller and centreon user of your Bluemind server with
these following commands:

    $ su - centreon-engine 
    $ ssh-keygen
    $ ssh-copy-id centreon@bluemind_server_@IP
    $ ssh centreon@centreon@bluemind_server_@IP
    $ exit

### Install InfluxDB
Install InfluDB metric database on Bluemind web interface.

### Configure bm-iptables
You must allow the monitoring poller to access the Bluemind server. Log
on Bluemind web interface with Global Admin and go to
*Security-&gt;Firewall settings*. Add the ip address of your monitoring
poller and click the *Save* button.

## Centreon configuration
### Create a Bluemind server
Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
<colgroup>
<col width="44%" />
<col width="55%" />
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
<td align="left"><p><em>App-Mail-Bluemind-custom</em></p></td>
</tr>
</tbody>
</table>

Click the *Save* button.

