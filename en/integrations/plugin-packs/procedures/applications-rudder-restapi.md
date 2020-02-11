---
id: pp/applications-rudder-restapi
title: Rudder
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.5 | `STABLE` | Oct 16 2019 |


## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Rudder-Restapi

### API token

A token needs to be created to acces the API.

To do so, follow the official documentation here : https://docs.rudder.io/api/#api-_-Authentication.

## Centreon Configuration

### Create hosts using the appropriate template

The Rudder instance can be monitored as a host to get global statuses and statistics.

A dedicated host template can also be added to any Centreon host to monitor its Rudder compliance.

#### Rudder instance

Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Field</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>Name</p></td>
            <td align="left"><p><em>Name of the Rudder instance</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Alias</p></td>
            <td align="left"><p><em>Description</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>IP Address / DNS</p></td>
            <td align="left"><p><em>IP address of the Rudder instance (or localhost)</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Monitored from</p></td>
            <td align="left"><p><em>Poller used to monitor</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Templates</p></td>
            <td align="left"><p>App-Rudder-Restapi-custom</p></td>
        </tr>
    </tbody>
</table>

The following host macros should be set as shown:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Macro</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>RUDDERAPIHOSTNAME</p></td>
            <td align="left"><p><em>Rudder instance hostname or IP address</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>RUDDERAPIURLPATH</p></td>
            <td align="left"><p><em>URL path of the Rudder instance API</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>RUDDERAPIPORT</p></td>
            <td align="left"><p><em>Port of the Rudder instance API</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>RUDDERAPIPROTO</p></td>
            <td align="left"><p><em>Protocol used by the Rudder API</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>RUDDERAPITOKEN</p></td>
            <td align="left"><p><em>Token used to access the Rudder API</em></p></td>
        </tr>
    </tbody>
</table>

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following services will be created:

* Global-Compliance
* Nodes-Overall-Compliance
* Statistics

The following rules are linked to this host template:

* App-Rudder-Restapi-Nodes 
* App-Rudder-Restapi-Rules 

#### Host

Go to *Configuration &gt; Hosts* and click *Add*. Then, fill the form as
shown by the following table:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Field</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>Name</p></td>
            <td align="left"><p><em>Hostname</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Alias</p></td>
            <td align="left"><p><em>Description</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>IP Address / DNS</p></td>
            <td align="left"><p><em>IP address of the host</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Monitored from</p></td>
            <td align="left"><p><em>Poller used to monitor</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Templates</p></td>
            <td align="left"><p>App-Rudder-Node-Compliance-Restapi-custom</p></td>
        </tr>
    </tbody>
</table>

The following host macros should be set as shown:

<table>
    <thead>
        <tr class="header">
            <th align="left" width="10%">Macro</th>
            <th align="left" width="20%">Value</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td align="left"><p>RUDDERAPIHOSTNAME</p></td>
            <td align="left"><p><em>Rudder instance hostname or IP address</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>RUDDERAPIURLPATH</p></td>
            <td align="left"><p><em>URL path of the Rudder instance API</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>RUDDERAPIPORT</p></td>
            <td align="left"><p><em>Port of the Rudder instance API</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>RUDDERAPIPROTO</p></td>
            <td align="left"><p><em>Protocol used by the Rudder API</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>RUDDERAPITOKEN</p></td>
            <td align="left"><p><em>Token used to access the Rudder API</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>RUDDERNODENAME</p></td>
            <td align="left"><p><em>Hostname (or name as registered in Rudder)</em></p></td>
        </tr>
    </tbody>
</table>

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following service will be created:

* Node-Compliance

