---
id: applications-protocol-bgp
title: BGP Protocol
---

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Protocol-Bgp
```

### Network Equipment

Network equipment must have SNMP Enabled and allow query on OID .1.3.6.1.2.1.5

Note: If you use several logical system/network to segment your network (e.g
with Juniper equipments), you need to specify community in the following format
:

    LOGICALSYSTEM/routingInstance@Community

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | App-Protocol-BGP-custom    |

Click on the *Save* button.
