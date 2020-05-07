---
id: hardware-storage-netapp-ontap-oncommandapi
title: NetApp Ontap Oncommand API
---

| Current version | Status   | Date        |
| :-------------- | :------- | :---------- |
| 3.0.0           | `STABLE` | May 07 2020 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Oncommandapi
```

## Centreon Configuration

### Create a new NetApp server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                                | Value                                       |
| :----------------------------------- | :------------------------------------------ |
| Host name                            | *Name of the host*                          |
| Alias                                | *Host description*                          |
| IP                                   | *Host IP Address*                           |
| Monitored from                       | *Monitoring Poller to use*                  |
| Host Multiple Templates              | HW-Storage-NetApp-Ontap-Oncommandapi-custom |

### Host Macro Configuration

The following macros must be configured on host:

| Macro                | Description            | Default value  |
| :------------------- | :--------------------- | :------------- |
| ONCOMMANDAPIURLPATH  | OnCommand API path     | /api/4.0/ontap |
| ONCOMMANDAPIUSERNAME | OnCommand API username |                |
| ONCOMMANDAPIPASSWORD | OnCommand API password |                |
| ONCOMMANDAPIPORT     | OnCommand API port     | 8443           |
| ONCOMMANDAPIPROTO    | OnCommand API protcole | https          |

Click on the *Save* button.

