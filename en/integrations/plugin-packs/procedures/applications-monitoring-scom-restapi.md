---
id: applications-monitoring-scom-restapi
title: SCOM Rest API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Sep  9 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Monitoring-Scom-Restapi
```

The plugin works with SCOM 2012 and 2016 only. You need to install following module:
<https://gallery.technet.microsoft.com/System-Center-Operations-5d88527c>

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                              |
| :---------------------- | :--------------------------------- |
| Host name               | *Name of the host*                 |
| Alias                   | *Host description*                 |
| IP                      | *Host IP Address*                  |
| Monitored from          | *Monitoring Poller to use*         |
| Host Multiple Templates | App-Monitoring-Scom-Restapi-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro           | Description                   | Default value |
| :-------------- | :---------------------------- | :------------ |
| SCOMAPIPORT     | Port of the SCOM API instance | 80            |
| SCOMAPIPROTO    | Protocol used by the SCOM API | http          |
| SCOMAPIUSERNAME | Username to access API        |               |
| SCOMAPIPASSWORD | Password to access API        |               |

Click on the *Save* button.

