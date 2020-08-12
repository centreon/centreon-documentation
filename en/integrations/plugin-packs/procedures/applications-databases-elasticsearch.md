---
id: centreon-pack-applications-databases-elasticsearch
title: Elasticsearch
---

## Overview

Elasticsearch is a distributed, open source search and analytics engine for all types of data, including textual, numerical, geospatial, structured, and unstructured. Elasticsearch is built on Apache Lucene and was first released in 2010 by Elasticsearch N.V. (now known as Elastic).

## Plugin-Pack content

### Monitored equipments

* Databases

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->
<!--cluster-statistics-->

| Metric name              | Description                              | Unit    |
| :----------------------- | :--------------------------------------- | :---    |
| display                  | Name of the Elasticsearch cluster        |         |
| status                   | Status of the Elasticsearch cluster      |         |
| nodes_total              | Number of nodes                          |         |
| nodes_data               | Number of data                           |         |
| nodes_coordinating       | Number of nodes coordinating             |         |
| nodes_master             | Number of master nodes                   |         |
| nodes_ingest             | Number of ingest data                    |         |
| indices_count            | Number of indices                        |         |
| shards_total             | Total number of shards                   |         |
| shards_active            | Number of active shards                  |         |
| shards_unassigned        | Number of unassigned shards              |         |
| shards_relocating        | Number of relocating shards              |         |
| active_shards_percent    | Percentage of active shards              |    %    |
| tasks_pending            | Number of pending tasks                  |         |
| docs_count               | Number of docs                           |         |
| size_in_bytes            | Size of all shards assigned              |  bytes  |

<!--indice-statistics-->

| Metric name              | Description                              | Unit    |
| :----------------------- | :--------------------------------------- | :------ |
| display                  | Name of the Elasticsearch cluster        |         |
| status                   | Status of the Elasticsearch cluster      |         |
| shards_active            | Number of active shards                  |         |
| shards_unassigned        | Number of unassigned shards              |         |
| docs_count               | Number of docs                           |         |
| size_in_bytes_primaries  | Size of all primary shards               |  bytes  |
| size_in_bytes_total      | Total size of all shards assigned        |  bytes  |

<!--license-->

| Metric name        | Description                              | Unit    |
| :----------------- | :--------------------------------------- | :------ |
| type               | Licence type                             |         |
| status             | Licence status                           |         |
| issued_to          | Licence owner                            |         |
| issue_date         | Licence issue date                       |  date   |

<!--list-indices-->

| Metric name        | Description                             | Unit    |
| :----------------- | :-------------------------------------- | :------ |
| name               | Indice name                             |         |
| status             | Indice status                           |         |

<!--list-nodes-->

| Metric name        | Description                             | Unit    |
| :----------------- | :-------------------------------------- | :------ |
| name               | Node name                               |         |
| host               | Node host                               |         |
| ip                 | Node ip                                 |   ip    |

<!--node-statistics-->

| Metric name       | Description                                           | Unit    |
| :---------------- | :---------------------------------------------------- | :-----  |
| display           | Name of the Elasticsearch node                        |         |
| indices_count     | Number of indices in the node                         |         |
| heap_used_percent | Percentage of memory currently in use by the heap     |    %    |
| heap_used_in_bytes| Amount of memory available for use by the heap        |  bytes  |
| heap_max_in_bytes | Maximum amount of memory available for use by the heap|  bytes  |
| available_in_bytes| Total number of bytes available                       |  bytes  |
| total_in_bytes    | Total size of all file stores                         |  bytes  |
| docs_count        | Number of documents inside the indice                 |         |
| size_in_bytes     | Total size of all shards assigned to the node         |  bytes  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites 

In order to monitor an Elasticsearch cluster, it must be prepared acccording to Elasticsearch's official documentation: https://www.elastic.co/guide/en/elasticsearch/reference/7.8/monitor-elasticsearch-cluster.html

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online Licence Business & IT Editions-->

1. Install the Plugin on all Centreon pollers supervising Elasticsearch ressources:

```bash
yum install centreon-plugin-Applications-Databases-Elasticsearch
```

2. Instal the Plugin-Pack 'Elasticsearch' in the " Configuration  >  Plugin Packs"  page of the Web Centreon interface

<!--Offline Licenses-->

1. Install the Plugin on all Centreon pollers supervising Elasticsearch ressources:

```bash
yum install centreon-plugin-Applications-Databases-Elasticsearch
```

2. Install the Plugin-Pack RPM on the Centreon server **Central**:

```bash
yum install centreon-pack-applications-databases-elasticsearch
```

3. In the *Configuration  \>  Plugin Packs*  page of the Web Centreon interface, instal the Plugin-Pack 'Elasticsearch'

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Still in the Web Centreon interface, go to *Configuration \> Hosts* and click *Add*. Then fill the form as shown by the following table:

| Field                   | Value                        |
| :---------------------- | :--------------------------- |
| Name                    | *Name of the host*           |
| Alias                   | *Host description*           |
| IP                      | *Host IP Address*            |
| Monitored from          | *Monitoring Poller to use*   |
In the field *Templates* click on *+ Add a new entry* and then select *App-DB-Elascticsearch-custom*

Click on the *Save* button.

### Host Macro Configuration

The following macros must be configured on host:

| Macro                 | Description                         | Default value | Example  |
| :-------------------- | :---------------------------------- | :------------ | :------- |
| ELASTICSEARCHPORT     | The Elasticsearch instance port     | 9200          | 1234     |
| ELASTICSEARCHPROTO    | The Elasticsearch instance protocol | http          | https    |
| ELASTICSEARCHUSERNAME | The Elasticsearch instance username |               | centreon |
| ELASTICSEARCHPASSWORD | The Elasticsearch instance password |               | centreon |

## FAQ

### Comment tester en ligne de commande et que signifient les options principales ?

One the Plugin is installed, you can test it directly in the command line from your Centreon poller
with the user *centreon-engine*:

```bash
su - centreon-engine\
/usr/lib/centreon/plugins/centreon_elasticsearch.pl \ 
--hostname=x.x.x.x \
--port=9200 \
--proto=http \
--plugin=database::elasticsearch::restapi::plugin \
--mode=node-statistics \
--filter-name='Node 1'

```

Output: 

```bash
OK: Node 'i-Vertix Node 1' JVM Heap: 26%, Free Disk Space: 1.56TB, Documents: 4362761044, Data: 1.26TB | 'i-Vertix Node 1#node.jvm.heap.usage.percentage'=26%;;;0;100 'i-Vertix Node 1#node.jvm.heap.usage.bytes'=36380302240B;;;0;137151119360 'i-Vertix Node 1#node.disk.free.bytes'=1710072680448B;;;0;3113589145600 'i-Vertix Node 1#node.documents.total.count'=4362761044;;;0; 'i-Vertix Node 1#node.data.size.bytes'=1386278479651B;;;0;
```

The above command reqquest some statistic of the Elasticsearch node
(```--mode=node-statistics```). 
The important informations are the IP/FQDN address 
(```--hostname=x.x.x.x```) 
and the filter-name 
(```--filter-name='Node 1''```) 

All the available modes can be listed with the command line:

```bash
/usr/lib/centreon/plugins/centreon_elasticsearch.pl \
    --list-mode
```

And the different mode's options can be displayed with the ```--help``` parameter:  

```bash
/usr/lib/centreon/plugins/centreon_elasticsearch.pl \
    --mode=node-statistics \
    --help
```

