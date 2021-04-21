---
id: network-digi-sarian-snmp
title: Digi Sarian
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Digi-Sarian-Snmp
```

Be sure to have with you the following information:

  - Read-Only SNMP community
  - IP Address of the equipment

### Configure SNMP on your equipment

Follow constructor procedure for your equipment.

### SNMP Permissions

Read-Only access.

### Troubleshooting

Read [Troubleshooting
SNMP](http://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp).

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                       |
| :----------------------------------- | :-------------------------- |
| Host name                            | *Name of the host*          |
| Alias                                | *Host description*          |
| IP                                   | *Host IP Address*           |
| Monitored from                       | *Monitoring Poller to use*  |
| Host Multiple Templates              | Net-Digi-Sarian-SNMP-custom |

Click on the *Save* button.
