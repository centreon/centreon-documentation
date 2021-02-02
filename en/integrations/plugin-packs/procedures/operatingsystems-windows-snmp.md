---
id: operatingsystems-windows-snmp
title: Windows SNMP
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Operatingsystems-Windows-Snmp
```

## SNMP Installation

Read the [Microsoft Knowledgebase to configure SNMP on your
server](https://support.microsoft.com/en-us/kb/324263)

### Troubleshooting

Read [Troubleshooting
SNMP](https://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp)

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | OS-Windows-SNMP-custom     |

Click on the *Save* button.
