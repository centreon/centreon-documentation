---
id: cloud-prometheus-api
title: Prometheus Server
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.0 | `STABLE` | Jan 11 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Prometheus-Api
```

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                       |
| :---------------------- | :-------------------------- |
| Host name               | *Name of the host*          |
| Alias                   | *Host description*          |
| IP                      | *Host IP Address*           |
| Monitored from          | *Monitoring Poller to use*  |
| Host Multiple Templates | Cloud-Prometheus-Api-custom |

Service template "Cloud-Prometheus-Expression-Api" is not part of the host template. This template is supposed to be
used on specific cases through custom host templates or directly attached to an host.

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro                 | Description                                                     | Default value |
| :-------------------- | :-------------------------------------------------------------- | :------------ |
| PROMETHEUSAPIHOSTNAME | Hostname of the Prometheus Server (for Expression service only) |               |
| PROMETHEUSAPIURL      | URL of the API                                                  | /api/v1       |
| PROMETHEUSAPIPORT     | Port of the API                                                 | 9090          |
| PROMETHEUSAPIPROTO    | Protocol used by API                                            | http          |

Click on the *Save* button.


