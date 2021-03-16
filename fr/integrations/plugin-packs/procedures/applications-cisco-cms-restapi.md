---
id: applications-cisco-cms-restapi
title: Cisco CMS
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Cisco-Cms-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                        |
| :---------------------- | :--------------------------- |
| Host name               | *Name of the host*           |
| Alias                   | *Host description*           |
| IP                      | *Host IP Address*            |
| Monitored from          | *Monitoring Poller to use*   |
| Host Multiple Templates | App-Cisco-Cms-Restapi-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro         | Description                  | Default value |
| :------------ | :--------------------------- | :------------ |
| CMSCUSTOMMODE | Mode used by plugin          | xmlapi        |
| CMSAPIURLPATH | Path to the CMS API          | /api/v1       |
| CMSAPIPORT    | Port of the CMS API instance | 445           |
| CMSAPIPROTO   | Protocol used by the CMS API | https         |
| USERNAME      | Username to access CMS API   |               |
| PASSWORD      | Password to access CMS API   |               |

Click on the *Save* button.
