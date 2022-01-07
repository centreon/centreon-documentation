---
id: network-cisco-apic-restapi
title: Cisco Apic
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Cisco-Apic-Restapi
```

Be sure to have with you the following information:

  - Read-Only Rest API credentials
  - IP Address of the equipment

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                         |
| :---------------------- | :---------------------------- |
| Host name               | *Name of the host*            |
| Alias                   | *Host description*            |
| IP                      | *Host IP Address*             |
| Monitored from          | *Monitoring Poller to use*    |
| Host Multiple Templates | Net-Cisco-Apic-Restapi-custom |

Click on the *Save* button.
