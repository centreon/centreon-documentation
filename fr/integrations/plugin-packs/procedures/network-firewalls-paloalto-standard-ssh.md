---
id: network-firewalls-paloalto-standard-ssh
title: Palo Alto firewall SSH
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Oct 25 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                            |
| :----------------------------------- | :------------------------------- |
| Host name                            | *Name of the host*               |
| Alias                                | *Host description*               |
| IP                                   | *Host IP Address*                |
| Monitored from                       | *Monitoring Poller to use*       |
| Host Multiple Templates              | Net-PaloAlto-Standard-SSH-custom |
| *Relations \> Parent Hostgroups* tab |                                  |

Click on the *Save* button.


