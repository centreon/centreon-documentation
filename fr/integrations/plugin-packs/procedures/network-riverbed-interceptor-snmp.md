---
id: network-riverbed-interceptor-snmp
title: Riverbed Interceptor
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Mar 20 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Riverbed-Interceptor-Snmp
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

| Field                   | Value                                |
| :---------------------- | :----------------------------------- |
| Host name               | *Name of the host*                   |
| Alias                   | *Host description*                   |
| IP                      | *Host IP Address*                    |
| Monitored from          | *Monitoring Poller to use*           |
| Host Multiple Templates | Net-Riverbed-Interceptor-SNMP-custom |

Click on the *Save* button.

