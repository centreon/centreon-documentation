---
id: network-switchs-hirschmann
title: Hirschmann switch
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.1 | `STABLE` | May  2 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Switchs-Hirschmann
```

Be sure to have with you the following information:

  - Read-Only SNMP community
  - IP Address of the equipment

### Configure SNMP on your server

Follow constructor procedure for your equipment.

### SNMP Permissions

Read-Only access.

### Troubleshooting

Read [Troubleshooting SNMP](https://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp).

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                             |
| :----------------------------------- | :-------------------------------- |
| Host name                            | *Name of the host*                |
| Alias                                | *Host description*                |
| IP                                   | *Host IP Address*                 |
| Monitored from                       | *Monitoring Poller to use*        |
| Host Multiple Templates              | Net-Cisco-Sb-Standard-SNMP-custom |
| *Relations \> Parent Hostgroups* tab |                                   |

Click on the *Save* button.

| Optionnal Service    | Description                                    |
| :------------------- | :--------------------------------------------- |
| leds                 | Monitor led status                             |
| Traffic-Generic-Name | Monitor traffic of an network interface        |
| Traffic-Generic-id   | Monitor traffic of an network interface        |
| Traffic-Global       | Monitor traffic of multiple network interfaces |

## Host Macro Configuration

The following macros must be configured on host (\* means mandatory options):

| Macro            | Description                       | Default value | Example |
| :--------------- | :-------------------------------- | :------------ | :------ |
| SNMPEXTRAOPTIONS | Extra options for SNMP connection |               |         |


