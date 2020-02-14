---
id: hardware-storage-netgear-readynas-snmp
title: Netgear Readynas SNMP
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jun  7 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Netgear-Readynas-Snmp
```

Be sure to have with you the following information:

  - Read-Only SNMP community
  - IP Address of the equipment

### Configure SNMP on your server

Follow constructor procedure for your equipment.

### SNMP Permissions

Read-Only access.

### Troubleshooting

Read [Troubleshooting SNMP](http://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp).

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                                   |
| :----------------------------------- | :-------------------------------------- |
| Host name                            | *Name of the host*                      |
| Alias                                | *Host description*                      |
| IP                                   | *Host IP Address*                       |
| Monitored from                       | *Monitoring Poller to use*              |
| Host Multiple Templates              | HW-Storage-Netgear-Readynas-SNMP-custom |

Click on the *Save* button.

