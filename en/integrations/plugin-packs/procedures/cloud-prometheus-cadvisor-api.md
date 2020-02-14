---
id: cloud-prometheus-cadvisor-api
title: cAdvisor
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.0 | `STABLE` | Jan 11 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Prometheus-cAdvisor-Api
```

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                                |
| :---------------------- | :----------------------------------- |
| Host name               | *Name of the host*                   |
| Alias                   | *Host description*                   |
| IP                      | *Host IP Address*                    |
| Monitored from          | *Monitoring Poller to use*           |
| Host Multiple Templates | Cloud-Prometheus-cAdvisor-Api-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro                 | Description                       | Default value |
| :-------------------- | :-------------------------------- | :------------ |
| PROMETHEUSAPIHOSTNAME | Hostname of the Prometheus Server |               |
| PROMETHEUSAPIURL      | URL of the API                    | /api/v1       |
| PROMETHEUSAPIPORT     | Port of the API                   | 9090          |
| PROMETHEUSAPIPROTO    | Protocol used by API              | http          |

Click on the *Save* button.

