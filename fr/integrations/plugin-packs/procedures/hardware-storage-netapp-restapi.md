---
id: hardware-storage-netapp-restapi
title: NetApp Restapi
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.1.1 | `STABLE` | Apr 25 2018 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Hardware-Storage-Netapp-Restapi
```

## Centreon Configuration

### Create a new NetApp server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                            |
| :----------------------------------- | :------------------------------- |
| Host name                            | *Name of the host*               |
| Alias                                | *Host description*               |
| IP                                   | *Host IP Address*                |
| Monitored from                       | *Monitoring Poller to use*       |
| Host Multiple Templates              | HW-Storage-NetApp-Restapi-custom |
| *Relations \> Parent Hostgroups* tab |                                  |

### Host Macro Configuration

The following macros must be configured on host:

| Macro       | Description            | Default value  |
| :---------- | :--------------------- | :------------- |
| APIURLPATH  | OnCommand API path     | /api/4.0/ontap |
| APIUSERNAME | OnCommand API username |                |
| APIPASSWORD | OnCommand API password |                |
| APIPORT     | OnCommand API port     | 8443           |
| APIPROTO    | OnCommand API protcole | https          |

Click on the *Save* button.


