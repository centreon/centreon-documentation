---
id: network-firewalls-arkoon-snmp
title: Arkoon
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.2 | `STABLE` | Sep 23 2019 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Firewalls-Arkoon-Snmp
```

### SNMP

It's necessary to enable SNMP on Arkoon Firewall

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
| Host Multiple Templates | Net-FW-Arkoon-SNMP-custom  |

Click on the *Save* button.

Those services were automatically created for this host:

| Service | Description                |
| :------ | :------------------------- |
| Ping    | Monitor host response time |
| Load    | Monitor CPU load           |
| Memory  | Monitor memory used        |
| Swap    | Monitor swap used          |
| Uptime  | Monitor uptime             |

