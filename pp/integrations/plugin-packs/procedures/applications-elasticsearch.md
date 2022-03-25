---
id: applications-elasticsearch
title: Elasticsearch (Deprecated)
---

## Prerequisites

This chapter describes the prerequisites installation needed by plugins to run.

### Centreon Plugin

Install this plugin on each needed poller:

``` shell
yum install centreon-plugin-Applications-Elasticsearch
```

### Remote server

The remote server must have an elasticsearch instance running and its API
available on the port 9200

## Centreon Configuration

### Create a host using the appropriate template

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                      |
| :---------------------- | :------------------------- |
| Host name               | *Name of the host*         |
| Alias                   | *Host description*         |
| IP                      | *Host IP Address*          |
| Monitored from          | *Monitoring Poller to use* |
| Host Multiple Templates | App-Elascticsearch-custom  |

Click on the *Save* button.

This service was automatically created for this host:

| Service       | Description                           |
| :------------ | :------------------------------------ |
| Cluster-state | Monitor state of cluster              |
| Nodes-count   | Monitor number of nodes in a cluster  |
| Indices-state | Monitor state of indices in a cluster |

### Host Macro Configuration

The following macros must be configured on host:

| Macro              | Description                         | Default value | Example |
| :----------------- | :---------------------------------- | :------------ | :------ |
| ELASTICSEARCHPORT  | The Elasticsearch instance port     | 9200          | 9200    |
| ELASTICSEARCHPROTO | The Elasticsearch instance protocol | http          | http    |

### Service Macro Configuration

The following macros must be configured on services:

| Macro    | Description                         | Default value | Example |
| :------- | :---------------------------------- | :------------ | :------ |
| URLPATH  | Path to connect to web inteface     | /             | /       |
| WARNING  | Warning Thresold (number of nodes)  | 2:            | 2:      |
| CRITICAL | Critical Thresold (number of nodes) | 1:            | 1:      |
