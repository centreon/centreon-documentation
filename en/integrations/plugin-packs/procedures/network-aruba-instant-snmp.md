---
id: pp-network-aruba-instant-snmp
title: Aruba Instant SNMP
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.2 | `STABLE` | Aug  5 2019 |


## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

    yum install centreon-plugin-Network-Aruba-Instant-Snmp

### Configure SNMP

Follow constructor procedure to enable and configure SNMP on the equipment.

Read *[this guide](https://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp)* to troubleshoot SNMP problems.

## Centreon Configuration

### Create hosts using the appropriate template

Be sure to have with you the following information:

* Read-only SNMP community
* IP Address of the equipment

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
            <td align="left"><p><em><b>IP address of the access point</b></em></p></td>
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
            <td align="left"><p>Net-Aruba-Instant-SNMP-custom</p></td>
        </tr>
    </tbody>
</table>

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following services will be created:

* Ap-Usage
* Ssid-Status


