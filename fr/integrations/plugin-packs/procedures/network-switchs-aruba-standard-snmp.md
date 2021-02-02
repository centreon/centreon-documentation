---
id: network-switchs-aruba-standard-snmp
title: Aruba Standard
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Switchs-Aruba-Standard-Snmp
```

### Configure SNMP

Follow constructor procedure to enable and configure SNMP on the equipment.

Read *[this
guide](https://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp)*
to troubleshoot SNMP problems.

## Centreon Configuration

### Create hosts using the appropriate template

Both controllers and access points can be monitored using specific host
templates.

Be sure to have with you the following information:

  - Read-only SNMP community
  - IP Address of the equipment

#### Controller

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                    | Value                                     |
| :----------------------- | :---------------------------------------- |
| Name                     | *Name of the controller*                  |
| Alias                    | *Description*                             |
| IP Address / DNS         | *IP address of the controller*            |
| SNMP Community & Version | *Community and version of the SNMP agent* |
| Monitored from           | *Poller used to monitor*                  |
| Templates                | Net-Aruba-Standard-Controller-SNMP-custom |

Check the *Create Services linked to the Template too* box and click on the
*Save* button.

The following services will be created:

  - Cpu
  - Memory
  - Storage
  - Hardware
  - License
  - Controller-Status

The following rules are linked to this host template:

  - Net-Aruba-Standard-SNMP-Packet-Errors-Name
  - Net-Aruba-Standard-SNMP-Traffic-Name

#### Access Point

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                    | Value                                     |
| :----------------------- | :---------------------------------------- |
| Name                     | *Name of the access point*                |
| Alias                    | *Description*                             |
| IP Address / DNS         | ***IP address of the controller***        |
| SNMP Community & Version | *Community and version of the SNMP agent* |
| Monitored from           | *Poller used to monitor*                  |
| Templates                | Net-Aruba-Standard-Ap-SNMP-custom         |

The following host macros should be set as shown:

| Macro  | Value                      |
| :----- | :------------------------- |
| APNAME | *Name of the access point* |

Check the *Create Services linked to the Template too* box and click on the
*Save* button.

The following services will be created:

  - Ap-Ssid-Statistics
  - Ap-Status
