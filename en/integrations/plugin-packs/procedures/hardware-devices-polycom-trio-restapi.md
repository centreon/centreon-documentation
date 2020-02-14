---
id: hardware-devices-polycom-trio-restapi
title: Polycom Trio Rest API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jan 29 2020 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Devices-Polycom-Trio-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                                 |
| :---------------------- | :------------------------------------ |
| Host name               | *Name of the host*                    |
| Alias                   | *Host description*                    |
| IP                      | *Host IP Address*                     |
| Monitored from          | *Monitoring Poller to use*            |
| Host Multiple Templates | HW-Device-Polycom-Trio-Restapi-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro                 | Description              | Default value |
| :-------------------- | :----------------------- | :------------ |
| POLYCOMTRIOAPIPORT    | Port of the API instance | 443           |
| POLYCOMTRIAPIPROTO    | Protocol used by the API | https         |
| POLYCOMTRIAPIUSERNAME | Username to access API   |               |
| POLYCOMTRIAPIPASSWORD | Password to access API   |               |

Click on the *Save* button.

