---
id: infrastructure-pop
title: POP Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.8 | `STABLE` | Feb  6 2017 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install nagios-plugins-tcp
```

### Remote server

The remote server must have a POP service running and available.

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                   | Value                      |
| :-------------------------------------- | :------------------------- |
| Host name                               | *Name of the host*         |
| Alias                                   | *Host description*         |
| IP                                      | *Host IP Address*          |
| Monitored from                          | *Monitoring Poller to use* |
| Host Multiple Templates                 | Infra-POP-custom           |

Click on the *Save* button.

Those services were automatically created for this host:

| Service | Description                |
| :------ | :------------------------- |
| ping    | Monitor host response time |
| POP     | Check POP connection time  |

### Host Macro Configuration

No macro is defined for this template.

### Service Macro configuration

The following macros must be configured on services:

| Service | Macro    | Description                                   | Default Value | Example |
| :------ | :------- | :-------------------------------------------- | :------------ | :------ |
| POP     | WARNING  | Connection time Warning threshold in Seconds  | 5             |         |
| POP     | CRITICAL | Connection time Critical threshold in Seconds | 8             |         |
| POP     | PORT     | Communication Port                            | 110           |         |

