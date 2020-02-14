---
id: cloud-cloudfoundry-api
title: Cloud Foundry
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Nov  9 2018 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Cloud-Cloudfoundry-Api
```

## Centreon Configuration

### Create a new host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                         |
| :---------------------- | :---------------------------- |
| Host name               | *Name of the host*            |
| Alias                   | *Host description*            |
| IP                      | *Host IP Address*             |
| Monitored from          | *Monitoring Poller to use*    |
| Host Multiple Templates | Cloud-Cloudfoundry-Api-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro                   | Description                       | Default value |
| :---------------------- | :-------------------------------- | :------------ |
| CLOUDFOUNDRYAPIHOSTNAME | Hostname of the Cloud Foundry API |               |
| CLOUDFOUNDRYAPIPATH     | URL of the API                    | /v2           |
| CLOUDFOUNDRYAPIPORT     | Port of the API                   | 443           |
| CLOUDFOUNDRYAPIPROTO    | Protocol used by API              | https         |
| CLOUDFOUNDRYAPIUSERNAME | API username                      |               |
| CLOUDFOUNDRYAPIPASSWORD | API password                      |               |

Click on the *Save* button.

