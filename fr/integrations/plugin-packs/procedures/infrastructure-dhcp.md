---
id: infrastructure-dhcp
title: DHCP Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.9 | `STABLE` | Jul 10 2017 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install nagios-plugins-dhcp
```

### Local Network

The local network must have a DHCP service running and available, the monitoring
server must be able to communicate with this network.

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
| Host Multiple Templates              | Infra-DHCP-custom          |

Click on the *Save* button.

Those services were automatically created for this host:

| Service | Description                |
| :------ | :------------------------- |
| ping    | Monitor host response time |
| DHCP    | Check DHCP Availability    |

### Host Macro Configuration

No macro is defined for this template.

### Service Macro configuration

No macro is defined for this template.

