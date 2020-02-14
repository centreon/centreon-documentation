---
id: applications-docker-restapi
title: Docker
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Aug  9 2017 |

## Prerequisites

The plugin needs to access Docker Engine API \>= 1.21 (<https://docs.docker.com/engine/api/v1.30/>).

Please create a Centreon service by container (use CONTAINERID service macro). The 'container stats' webservice api is
"slow" (between 1s and 2s).

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Docker-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                      |
| :----------------------------------- | :------------------------- |
| Host name                            | *Name of the host*         |
| Alias                                | *Host description*         |
| IP                                   | *Host IP Address*          |
| Monitored from                       | *Monitoring Poller to use* |
| Host Multiple Templates              | App-Docker-Restapi         |

Click on the *Save* button.

