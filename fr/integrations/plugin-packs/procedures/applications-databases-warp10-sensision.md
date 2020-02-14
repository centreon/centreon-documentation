---
id: applications-databases-warp10-sensision
title: Warp10 Sensision
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.1 | `STABLE` | Sep 12 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Databases-Warp10-Sensision
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field            | Value                       |
| :--------------- | :-------------------------- |
| Name             | *Name of the host*          |
| Alias            | *Description*               |
| IP Address / DNS | *Can be localhost*          |
| Monitored from   | *Poller used to monitor*    |
| Templates        | App-DB-Warp10-Sensision-Web |

The following host macros should be set as shown:

| Macro                   | Value                                            |
| :---------------------- | :----------------------------------------------- |
| WARP10SENSISIONPORT     | *Warp10 Sensision web page port*                 |
| WARP10SENSISIONPROTO    | *Warp10 Sensision web page protocol*             |
| WARP10SENSISIONURLPATH  | *Warp10 Sensision web page url path*             |
| WARP10SENSISIONUSERNAME | *Warp10 Sensision web page username (if needed)* |
| WARP10SENSISIONPASSWORD | *Warp10 Sensision web page password(if needed)*  |

Check the *Create Services linked to the Template too* box and click on the *Save* button.

The following services will be created:

  - Fetch-Statistics
  - Script-Statistics


