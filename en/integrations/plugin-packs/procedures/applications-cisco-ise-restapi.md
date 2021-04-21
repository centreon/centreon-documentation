---
id: applications-cisco-ise-restapi
title: Cisco ISE
---

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Cisco-Ise-Restapi
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
| Host Multiple Templates | App-Cisco-Ise-Restapi-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro         | Description                  | Default value  |
| :------------ | :--------------------------- | :------------- |
| ISECUSTOMMODE | Mode used by plugin          | xmlapi         |
| ISEAPIURLPATH | Path to the ISE API          | /admin/API/mnt |
| ISEAPIPORT    | Port of the ISE API instance | 443            |
| ISEAPIPROTO   | Protocol used by the ISE API | https          |
| USERNAME      | Username to access ISE API   |                |
| PASSWORD      | Password to access ISE API   |                |

Click on the *Save* button.
