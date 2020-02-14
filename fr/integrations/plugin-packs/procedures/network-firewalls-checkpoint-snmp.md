---
id: network-firewalls-checkpoint-snmp
title: CheckPoint firewall
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.2.3 | `STABLE` | Oct  9 2019 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Firewalls-Checkpoint-Snmp
```

### SNMP

It's necessary to enable SNMP on Checkpoint Firewall

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | Net-FW-Checkpoint-SNMP     |

Click on the *Save* button.

Those services were automatically created for this host:

| Service     | Description                |
| :---------- | :------------------------- |
| Cpu         | *Monitor CPU used*         |
| Memory      | *Monitor memory used*      |
| Connections | *Monitor connections used* |
| Hardware    | *Monitor Hardware*         |
| HA-State    | Monitor HA State           |

