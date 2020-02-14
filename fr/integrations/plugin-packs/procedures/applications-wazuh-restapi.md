---
id: applications-wazuh-restapi
title: Wazuh Rest API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Aug  8 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Wazuh-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-Wazuh-Restapi-custom   |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro            | Description                    | Default value |
| :--------------- | :----------------------------- | :------------ |
| WAZUHAPIPORT     | Port of the Wazuh API instance | 55000         |
| WAZUHAPIPROTO    | Protocol used by the Wazuh API | https         |
| WAZUHAPIUSERNAME | Username to access Wazuh API   |               |
| WAZUHAPIPASSWORD | Password to access Wazuh API   |               |

Click on the *Save* button.

