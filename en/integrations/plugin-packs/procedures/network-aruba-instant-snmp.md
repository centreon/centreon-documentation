---
id: network-aruba-instant-snmp
title: Aruba Instant SNMP
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Aruba-Instant-Snmp
```

### Configure SNMP

Follow constructor procedure to enable and configure SNMP on the equipment.

Read *[this
guide](https://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp)*
to troubleshoot SNMP problems.

## Centreon Configuration

### Create hosts using the appropriate template

Be sure to have with you the following information:

  - Read-only SNMP community
  - IP Address of the equipment

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                    | Value                                     |
| :----------------------- | :---------------------------------------- |
| Name                     | *Name of the access point*                |
| Alias                    | *Description*                             |
| IP Address / DNS         | ***IP address of the access point***      |
| SNMP Community & Version | *Community and version of the SNMP agent* |
| Monitored from           | *Poller used to monitor*                  |
| Templates                | Net-Aruba-Instant-SNMP-custom             |

Check the *Create Services linked to the Template too* box and click on the
*Save* button.

The following services will be created:

  - Ap-Usage
  - Ssid-Status
