---
id: applications-monitoring-mip-restapi
title: Maltem Insight Rest API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.2 | `STABLE` | Dec  4 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Monitoring-Mip-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                             |
| :---------------------- | :-------------------------------- |
| Host name               | *Name of the host*                |
| Alias                   | *Host description*                |
| IP                      | *Host IP Address*                 |
| Monitored from          | *Monitoring Poller to use*        |
| Host Multiple Templates | App-Monitoring-Mip-Restapi-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro       | Description                  | Default value |
| :---------- | :--------------------------- | :------------ |
| MIPAPIPORT  | Port of the MIP API instance | 443           |
| MIPAPIPROTO | Protocol used by the MIP API | https         |
| MIPAPITOKEN | Token to access API          |               |

Click on the *Save* button.

