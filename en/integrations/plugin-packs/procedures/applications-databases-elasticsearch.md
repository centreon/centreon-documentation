---
id: applications-databases-elasticsearch
title: Elasticsearch
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.4 | `STABLE` | Jul 11 2019 |

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Databases-Elasticsearch
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
| Host Multiple Templates | App-DB-Elascticsearch-custom |

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro                 | Description                         | Default value | Example  |
| :-------------------- | :---------------------------------- | :------------ | :------- |
| ELASTICSEARCHPORT     | The Elasticsearch instance port     | 9200          | 1234     |
| ELASTICSEARCHPROTO    | The Elasticsearch instance protocol | http          | https    |
| ELASTICSEARCHUSERNAME | The Elasticsearch instance username |               | centreon |
| ELASTICSEARCHPASSWORD | The Elasticsearch instance password |               | centreon |

