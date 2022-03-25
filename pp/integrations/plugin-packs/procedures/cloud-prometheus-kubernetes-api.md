---
id: cloud-prometheus-kubernetes-api
title: Kubernetes w/ Prometheus
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Prometheus-Kubernetes-Api
```

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                  |
| :---------------------- | :------------------------------------- |
| Host name               | *Name of the host*                     |
| Alias                   | *Host description*                     |
| IP                      | *Host IP Address*                      |
| Monitored from          | *Monitoring Poller to use*             |
| Host Multiple Templates | Cloud-Prometheus-Kubernetes-Api-custom |

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
