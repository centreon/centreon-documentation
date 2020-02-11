---
id: pp/network-switchs-aruba-standard-snmp
title: Aruba Standard
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.3.0 | `STABLE` | Oct 16 2019 |


## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

    yum install centreon-plugin-Network-Switchs-Aruba-Standard-Snmp

### Configure SNMP

Follow constructor procedure to enable and configure SNMP on the equipment.

Read *[this guide](https://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp)* to troubleshoot SNMP problems.

## Centreon Configuration

### Create hosts using the appropriate template

Both controllers and access points can be monitored using specific host templates.

Be sure to have with you the following information:

* Read-only SNMP community
* IP Address of the equipment

#### Controller

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
            <td align="left"><p><em>Name of the controller</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Alias</p></td>
            <td align="left"><p><em>Description</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>IP Address / DNS</p></td>
            <td align="left"><p><em>IP address of the controller</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>SNMP Community & Version</p></td>
            <td align="left"><p><em>Community and version of the SNMP agent</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Monitored from</p></td>
            <td align="left"><p><em>Poller used to monitor</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Templates</p></td>
            <td align="left"><p>Net-Aruba-Standard-Controller-SNMP-custom</p></td>
        </tr>
    </tbody>
</table>

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following services will be created:

* Cpu
* Memory
* Storage
* Hardware
* License
* Controller-Status

The following rules are linked to this host template:

* Net-Aruba-Standard-SNMP-Packet-Errors-Name 
* Net-Aruba-Standard-SNMP-Traffic-Name 

#### Access Point

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
            <td align="left"><p><em>Name of the access point</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Alias</p></td>
            <td align="left"><p><em>Description</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>IP Address / DNS</p></td>
            <td align="left"><p><em><b>IP address of the controller</b></em></p></td>
        </tr>
        <tr>
            <td align="left"><p>SNMP Community & Version</p></td>
            <td align="left"><p><em>Community and version of the SNMP agent</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Monitored from</p></td>
            <td align="left"><p><em>Poller used to monitor</em></p></td>
        </tr>
        <tr>
            <td align="left"><p>Templates</p></td>
            <td align="left"><p>Net-Aruba-Standard-Ap-SNMP-custom</p></td>
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
            <td align="left"><p>APNAME</p></td>
            <td align="left"><p><em>Name of the access point</em></p></td>
        </tr>
    </tbody>
</table>

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following services will be created:

* Ap-Ssid-Statistics
* Ap-Status


