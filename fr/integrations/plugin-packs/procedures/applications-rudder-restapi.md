---
id: applications-rudder-restapi
title: Rudder
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.5 | `STABLE` | Oct 16 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Rudder-Restapi
```

### API token

A token needs to be created to acces the API.

To do so, follow the official documentation here :
<https://docs.rudder.io/api/#api-_-Authentication>.

## Centreon Configuration

### Create hosts using the appropriate template

The Rudder instance can be monitored as a host to get global statuses and
statistics.

A dedicated host template can also be added to any Centreon host to monitor its
Rudder compliance.

#### Rudder instance

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field            | Value                                              |
| :--------------- | :------------------------------------------------- |
| Name             | *Name of the Rudder instance*                      |
| Alias            | *Description*                                      |
| IP Address / DNS | *IP address of the Rudder instance (or localhost)* |
| Monitored from   | *Poller used to monitor*                           |
| Templates        | App-Rudder-Restapi-custom                          |

The following host macros should be set as shown:

| Macro             | Value                                    |
| :---------------- | :--------------------------------------- |
| RUDDERAPIHOSTNAME | *Rudder instance hostname or IP address* |
| RUDDERAPIURLPATH  | *URL path of the Rudder instance API*    |
| RUDDERAPIPORT     | *Port of the Rudder instance API*        |
| RUDDERAPIPROTO    | *Protocol used by the Rudder API*        |
| RUDDERAPITOKEN    | *Token used to access the Rudder API*    |

Check the *Create Services linked to the Template too* box and click on the
*Save* button.

The following services will be created:

  - Global-Compliance
  - Nodes-Overall-Compliance
  - Statistics

The following rules are linked to this host template:

  - App-Rudder-Restapi-Nodes
  - App-Rudder-Restapi-Rules

#### Host

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field            | Value                                     |
| :--------------- | :---------------------------------------- |
| Name             | *Hostname*                                |
| Alias            | *Description*                             |
| IP Address / DNS | *IP address of the host*                  |
| Monitored from   | *Poller used to monitor*                  |
| Templates        | App-Rudder-Node-Compliance-Restapi-custom |

The following host macros should be set as shown:

| Macro             | Value                                        |
| :---------------- | :------------------------------------------- |
| RUDDERAPIHOSTNAME | *Rudder instance hostname or IP address*     |
| RUDDERAPIURLPATH  | *URL path of the Rudder instance API*        |
| RUDDERAPIPORT     | *Port of the Rudder instance API*            |
| RUDDERAPIPROTO    | *Protocol used by the Rudder API*            |
| RUDDERAPITOKEN    | *Token used to access the Rudder API*        |
| RUDDERNODENAME    | *Hostname (or name as registered in Rudder)* |

Check the *Create Services linked to the Template too* box and click on the
*Save* button.

The following service will be created:

  - Node-Compliance

