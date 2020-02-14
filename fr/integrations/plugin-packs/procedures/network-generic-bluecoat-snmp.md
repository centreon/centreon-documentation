---
id: network-generic-bluecoat-snmp
title: Bluecoat generic
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.24 | `STABLE` | Jan 11 2019 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Generic-Bluecoat-Snmp
```

### SNMP

It's necessary to enable SNMP on your equipment

### Troubleshooting

Read [Troubleshooting SNMP](http://documentation.centreon.com/docs/centreon-plugins/en/latest/user/guide.html#snmp)

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | Net-Bluecoat-SNMP-custom   |

Click on the *Save* button.

Those services were automatically created for this host:

| Service            | Description                                                                    |
| :----------------- | :----------------------------------------------------------------------------- |
| Ping               | Monitor host response time                                                     |
| Cpu                | Check CPU usage on Bluecoat                                                    |
| Memory             | Check memory usage on Bluecoat                                                 |
| Disk               | Check disk usage on Bluecoat                                                   |
| Hardware           | Check the hardware sensors on Bluecoat                                         |
| Client-Connections | Check current client connections on Bluecoat                                   |
| Client-Requests    | Check http client requests (in percent by type : hit, partial, misses, errors) |
| Client-Traffic     | Check bytes/s received/delivered to clients                                    |
| Server-Connections | Check current server connections on Bluecoat                                   |

