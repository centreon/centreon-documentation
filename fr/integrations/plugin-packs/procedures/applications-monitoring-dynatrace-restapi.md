---
id: applications-monitoring-dynatrace-restapi
title: Dynatrace Rest API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jan 29 2020 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Monitoring-Dynatrace-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                   |
| :---------------------- | :-------------------------------------- |
| Host name               | *Name of the host*                      |
| Alias                   | *Host description*                      |
| IP                      | *Host IP Address*                       |
| Monitored from          | *Monitoring Poller to use*              |
| Host Multiple Templates | App-Monitoring-Dynatrace-Restapi-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro                  | Description                        | Default value |
| :--------------------- | :--------------------------------- | :------------ |
| DYNATRACEAPIPORT       | Port of the Dynatrace API instance | 443           |
| DYNATRACEAPIPROTO      | Protocol used by the Dynatrace API | http          |
| DYNATRACEAPIUSERNAME   | Username to access API             |               |
| DYNATRACEENVIRONMENTID | Environement ID                    |               |

Click on the *Save* button.

