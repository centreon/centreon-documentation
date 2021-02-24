---
id: cloud-kubernetes-api
title: Kubernetes API
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Kubernetes-Api
```

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                       |
| :---------------------- | :-------------------------- |
| Host name               | *Name of the host*          |
| Alias                   | *Host description*          |
| IP                      | *Host IP Address*           |
| Monitored from          | *Monitoring Poller to use*  |
| Host Multiple Templates | Cloud-Kubernetes-Api-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro                   | Description                            | Default value |
| :---------------------- | :------------------------------------- | :------------ |
| KUBERNETESAPICUSTOMMODE | Plugin custom mode (api or kubectl)    | api           |
| KUBERNETESAPIHOSTNAME   | Hostname of the Kubernetes API service |               |
| KUBERNETESAPIURL        | URL of the API                         |               |
| KUBERNETESAPIPORT       | Port of the API                        | 443           |
| KUBERNETESAPIPROTO      | Protocol used by API                   | https         |

Click on the *Save* button.
