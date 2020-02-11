---
id: pp-applications-databases-warp10-sensision
title: Warp10 Sensision
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Sep 12 2019 |


## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

    yum install centreon-plugin-Applications-Databases-Warp10-Sensision

## Centreon Configuration

### Create a host using the appropriate template

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
            <td align="left"><p><em>Name of the host</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Alias</p></td>
            <td align="left"><p><em>Description</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>IP Address / DNS</p></td>
            <td align="left"><p><em>Can be localhost</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Monitored from</p></td>
            <td align="left"><p><em>Poller used to monitor</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Templates</p></td>
            <td align="left"><p>App-DB-Warp10-Sensision-Web</p></td>
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
            <td align="left"><p>WARP10SENSISIONPORT</p></td>
            <td align="left"><p><em>Warp10 Sensision web page port</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>WARP10SENSISIONPROTO</p></td>
            <td align="left"><p><em>Warp10 Sensision web page protocol</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>WARP10SENSISIONURLPATH</p></td>
            <td align="left"><p><em>Warp10 Sensision web page url path</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>WARP10SENSISIONUSERNAME</p></td>
            <td align="left"><p><em>Warp10 Sensision web page username (if needed)</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>WARP10SENSISIONPASSWORD</p></td>
            <td align="left"><p><em>Warp10 Sensision web page password(if needed)</em></p></td>
        </tr>
    </tbody>
</table>

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following services will be created:

* Fetch-Statistics
* Script-Statistics


