---
id: applications-vmware-vcsa-restapi
title: VMware VCSA RestAPI
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Vmware-Vcsa-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                          |
| :---------------------- | :----------------------------- |
| Host name               | *Name of the host*             |
| Alias                   | *Host description*             |
| IP                      | *Host IP Address*              |
| Monitored from          | *Monitoring Poller to use*     |
| Host Multiple Templates | App-Vmware-Vcsa-Restapi-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro           | Description              | Default value |
| :-------------- | :----------------------- | :------------ |
| VCSAAPIPORT     | Port used by the API     | 443           |
| VCSAAPIPROTO    | Protocol used by the API | https         |
| VCSAAPIUSERNAME | Username to access API   |               |
| VCSAAPIPASSWORD | Password to access API   |               |

Click on the *Save* button.
