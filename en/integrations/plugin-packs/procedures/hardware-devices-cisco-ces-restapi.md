---
id: hardware-devices-cisco-ces-restapi
title: Cisco Collaboration Endpoint Rest API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jan 14 2020 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Devices-Cisco-Ces-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                              |
| :---------------------- | :--------------------------------- |
| Host name               | *Name of the host*                 |
| Alias                   | *Host description*                 |
| IP                      | *Host IP Address*                  |
| Monitored from          | *Monitoring Poller to use*         |
| Host Multiple Templates | HW-Device-Cisco-Ces-Restapi-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro          | Description                  | Default value |
| :------------- | :--------------------------- | :------------ |
| CESAPIPORT     | Port of the MIP API instance | 443           |
| CESAPIPROTO    | Protocol used by the MIP API | https         |
| CESAPIUSERNAME | Username to access API       |               |
| CESAPIPASSWORD | Password to access API       |               |

Click on the *Save* button.

