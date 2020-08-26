---
id: applications-sccm-nsclient
title: Microsoft SCCM
---

## Overview

Microsoft Endpoint Configuration Manager, formely knwown as System Center Configuration Manager or SCCM, is a systems management software product developed by Microsoft for managing large groups of computers running Windows NT, Windows Embedded, macOS (OS X), Linux or UNIX, as well as Windows Phone, Symbian, iOS and Android mobile operating systems. Configuration Manager provides remote control, patch management, software distribution, operating system deployment, network access protection and hardware and software inventory.

## Plugin-Pack content

### Monitored equipments

* Database replication
* Sites 


### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--database-replication-status-->

| Metric name              | Description                              | Unit    |
| :----------------------- | :--------------------------------------- | :---    |
| display                  | Name of the replication database         |         |
| status                   | Status of the replication database       |         |


<!--site-status-->

| Metric name              | Description                              | Unit    |
| :----------------------- | :--------------------------------------- | :------ |
| display                  | Name of the site         |         |
| status                   | Status of the site       |         |
| shards_active            | Number of active shards                  |         |
| shards_unassigned        | Number of unassigned shards              |         |
| docs_count               | Number of documents                      |         |
| size_in_bytes_primaries  | Size of all primary shards               |    B    |
| size_in_bytes_total      | Total size of all shards assigned        |    B    |


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
yum install centreon-nrpe-plugin
yum install centreon-plugin-Operatingsystems-Windows-Restapi
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

3. In the *Configuration  \>  Plugin Packs*  page of the Web Centreon interface, install the Plugin-Pack 'Microsoft SCCM'

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


ooooooooooooooooooooooooooooooooooooooooooooooo
---
id: applications-sccm-nsclient
title: Microsoft SCCM
---

| Current version | Status | Date |
| :-: | :-: | :-: |
| 3.0.0 | `STABLE` | Apr 25 2019 |

## Prerequisites

### Centreon Plugin

Install this plugin on each needed poller:

NRPE : \# yum install centreon-nrpe-plugin

NSClient++ RestAPI : \# yum install centreon-plugin-Operatingsystems-Windows-Restapi

### Nsclient++

This plugin pack requires the use of the NSClient++ package provided by
Centreon.

You can download it
[here](https://download.centreon.com/?action=product&product=agent-nsclient&version=0.51&secKey=59d646114079212e03ec09454456a938)

If you have some problems with the centreon\_plugins.exe, you can build it using
[following
procedure](https://documentation.centreon.com/docs/centreon-nsclient/en/latest/windows_agent.html#build-your-own-executable)

## Centreon Configuration

### Create a new IIS server

Go to *Configuration \> Hosts* and click *Add*. Then, fill the form as shown by
the following table:

| Field                   | Value                                       |
| :---------------------- | :------------------------------------------ |
| Host name               | *Name of the host*                          |
| Alias                   | *Host description*                          |
| IP                      | *Host IP Address*                           |
| Monitored from          | *Monitoring Poller to use*                  |
| Host Multiple Templates | Apps-Sccm-NRPE/App-Sccm-NSClient-05-Restapi |

Click on the *Save* button.

