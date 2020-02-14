---
id: applications-databases-couchdb-restapi
title: CouchDB Rest API
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Dec 30 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Database-Couchdb-Restapi
```

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by the following table:

| Field                                | Value                         |
| :----------------------------------- | :---------------------------- |
| Host name                            | *Name of the host*            |
| Alias                                | *Host description*            |
| IP                                   | *Host IP Address*             |
| Monitored from                       | *Monitoring Poller to use*    |
| Host Multiple Templates              | App-DB-Couchdb-Restapi-custom |
| *Relations \> Parent Hostgroups* tab |                               |

Click on the *Save* button.


