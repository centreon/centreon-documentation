---
id: network-cisco-vcs-restapi
title: Cisco VCS
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Jan 10 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Network-Cisco-Vcs-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                        |
| :---------------------- | :--------------------------- |
| Host name               | *Name of the host*           |
| Alias                   | *Host description*           |
| IP                      | *Host IP Address*            |
| Monitored from          | *Monitoring Poller to use*   |
| Host Multiple Templates | Net-Cisco-Vcs-Restapi-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro         | Description                  | Default value     |
| :------------ | :--------------------------- | :---------------- |
| VCSCUSTOMMODE | Mode used by plugin          | xmlapi            |
| VCSAPIURLPATH | Path to the CMS API          | /getxml?location= |
| VCSAPIPORT    | Port of the VCS API instance | 443               |
| VCSAPIPROTO   | Protocol used by the VCS API | https             |
| USERNAME      | Username to access VCS API   |                   |
| PASSWORD      | Password to access VCS API   |                   |

Click on the *Save* button.


