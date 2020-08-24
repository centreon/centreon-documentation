---
id: applications-databases-elasticsearch
title: Elasticsearch
---

## Overview

Elasticsearch is a distributed, open source search and analytics engine for all types of data, including textual, numerical, geospatial, structured, and unstructured. Elasticsearch is built on Apache Lucene and was first released in 2010 by Elasticsearch N.V. (now known as Elastic).

## Plugin-Pack content

### Monitored equipments

* Databases
* Nodes
* Shards
* Clusters
* Indices
* Documents
* Licences

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Cluster-statistics-->

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
| docs_count               | Number of documents                      |         |
| size_in_bytes            | Size of all shards assigned              |    B    |

<!--Indice-statistics-->

| Metric name              | Description                              | Unit    |
| :----------------------- | :--------------------------------------- | :------ |
| display                  | Name of the Elasticsearch Indice         |         |
| status                   | Status of the Elasticsearch Indice       |         |
| shards_active            | Number of active shards                  |         |
| shards_unassigned        | Number of unassigned shards              |         |
| docs_count               | Number of documents                      |         |
| size_in_bytes_primaries  | Size of all primary shards               |    B    |
| size_in_bytes_total      | Total size of all shards assigned        |    B    |

<!--License-->

| Metric name        | Description                              | Unit    |
| :----------------- | :--------------------------------------- | :------ |
| type               | Licence type                             |         |
| status             | Licence status                           |         |
| issued_to          | Licence owner                            |         |
| issue_date         | Licence issue date                       |         |

<!--Node-statistics-->

| Metric name       | Description                                           | Unit    |
| :---------------- | :---------------------------------------------------- | :-----  |
| display           | Name of the Elasticsearch node                        |         |
| indices_count     | Number of indices in the node                         |         |
| heap_used_percent | Percentage of memory currently in use by the heap     |    %    |
| heap_used_in_bytes| Amount of memory available for use by the heap        |    B    |
| heap_max_in_bytes | Maximum amount of memory available for use by the heap|    B    |
| available_in_bytes| Total number of bytes available                       |    B    |
| total_in_bytes    | Total size of all file stores                         |    B    |
| docs_count        | Number of documents inside the indice                 |         |
| size_in_bytes     | Total size of all shards assigned to the node         |    B    |

<!--Rules-->

| Rule name                              | Description                                   |
| :------------------------------------- | :-------------------------------------------- |
| App-DB-Elasticsearch-Indice-Statistics | Discover the indices on your Elasticsearch DB |
| App-DB-Elasticsearch-Node-Statistics   | Discover the nodes on your Elasticsearch DB   |

<!--END_DOCUSAURUS_CODE_TABS-->

Use the discovery module to add the monitoring of your Elasticsearch databases, Go to *Configuration > Services > Scan* to perform a scan.

## Prerequisites 

In order to monitor an Elasticsearch cluster, it must be prepared acccording to Elasticsearch's official documentation: https://www.elastic.co/guide/en/elasticsearch/reference/7.8/monitor-elasticsearch-cluster.html
In order to be able to communicate with the Centreon poller, the Elasticsearch node's API should use the http protocol and the port 9200.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online Licence Business & IT Editions-->

1. Install the Plugin on all Centreon pollers monitoring Elasticsearch ressources:

```bash
yum install centreon-plugin-Applications-Databases-Elasticsearch
```

2. Instal the Plugin-Pack 'Elasticsearch' in the " Configuration  >  Plugin Packs"  page of the Web Centreon interface

<!--Offline Licenses-->

1. Install the Plugin on all Centreon pollers monitoring Elasticsearch ressources:

```bash
yum install centreon-plugin-Applications-Databases-Elasticsearch
```

2. Install the Plugin-Pack RPM on the Centreon server **Central**:

```bash
yum install centreon-pack-applications-databases-elasticsearch
```

3. In the *Configuration  \>  Plugin Packs*  page of the Web Centreon interface, install the Plugin-Pack 'Elasticsearch'

<!--END_DOCUSAURUS_CODE_TABS-->

### Host Macro Configuration

Apply the "The name of your template" template to your newly created host. Then fill the macros value fileds marked as mandatory below:

|Mandatory| Macro                 | Description                         | Default value | Example  |
| :-------| :---------------- --- | :---------------------------------- | :------------ | :------- |
|    X    | ELASTICSEARCHPORT     | The Elasticsearch instance port     |     9200      | 1234     |
|    X    | ELASTICSEARCHPROTO    | The Elasticsearch instance protocol |  http | https |          |
|         | ELASTICSEARCHUSERNAME | The Elasticsearch instance username |               | centreon |
|         | ELASTICSEARCHPASSWORD | The Elasticsearch instance password |               | centreon |

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

One the Plugin is installed, you can test it directly in the command line from your Centreon poller
with the user *centreon-engine*:

```bash
su - centreon-engine\
/usr/lib/centreon/plugins/centreon_elasticsearch.pl \ 
--hostname=168.253.16.125 \
--port=9200 \
--proto=http \
--plugin=database::elasticsearch::restapi::plugin \
--mode=node-statistics \
--filter-name='Node 1'  \
--username='Elasticsearch_username' \
--password='Elasticsearch_password'

```

Output: 

```bash
OK: Node 'i-Vertix Node 1' JVM Heap: 26%, Free Disk Space: 1.56TB, Documents: 4362761044, Data: 1.26TB | 'i-Vertix Node 1#node.jvm.heap.usage.percentage'=26%;;;0;100 'i-Vertix Node 1#node.jvm.heap.usage.bytes'=36380302240B;;;0;137151119360 'i-Vertix Node 1#node.disk.free.bytes'=1710072680448B;;;0;3113589145600 'i-Vertix Node 1#node.documents.total.count'=4362761044;;;0; 'i-Vertix Node 1#node.data.size.bytes'=1386278479651B;;;0;
```

The command request statistic to the Elasticsearch node named 'Node 1' (```--mode=node-statistics --filter-name='Node 1```) with the IP/FQDN address *168.253.16.125* (```--hostname=168.253.16.125```). We will use the port 92000 (```--port=9200```) and the http protocol (```proto=http''```). The username of the datebase is *Elasticsearch_username* (```--username='Elasticsearch_username'```) and its paswword is *Elasticsearch_password*(```--password='Elasticsearch_password'```)

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

### Why do I get the following error:

#### UNKNOWN: 500 Can't connect

This error message means that the Centreon Plugin couldn't successfully connect to the host API. Check that no third party device (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API. This can be done by using the --proxyurl option in the command.

#### UNKNOWN: 501 Protocol scheme 'connect' is not supported

When using a proxy to connect to the host, this error message means that the Centreon Plugin library does not support the proxy connection protocol.

In order to prevent this issue, use the curl HTTP backend by adding the following option to the command: *--http-backend='curl'*.