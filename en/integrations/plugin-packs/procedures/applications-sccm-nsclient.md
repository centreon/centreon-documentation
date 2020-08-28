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
| :----------------------- | :--------------------------------------- | :------ |
| display                  | Name of the replication database         |         |
| status                   | Status of the replication database       |         |


<!--site-status-->

| Metric name              | Description              | Unit    |
| :----------------------- | :----------------------- | :------ |
| display                  | Name of the site         |         |
| status                   | Status of the site       |         |



<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites 

There is two ways to monitor SCCM, through the NRPE protocol or through the Nsclient Rest Api.

For NRPE, you can follow the procedure as described here https://docs.centreon.com/current/en/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-nrpe.html#nsclient

And for the Nsclient Rest Api, you can follow the procedure as seen there https://docs.centreon.com/current/en/integrations/plugin-packs/procedures/operatingsystems-windows-nsclient-05-restapi.html#prerequisites

https://docs.centreon.com/docs/centreon-nsclient/en/latest/windows_agent.html

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online Licence Business & IT Editions-->

1. Install the Plugin on all Centreon pollers monitoring SCCM ressources:

For the NRPE protocol
```bash
yum install centreon-nrpe-plugin
```
and for the Restapi
```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Instal the Plugin-Pack 'Microsoft SCCM' in the *Configuration  >  Plugin Packs*  page of the Web Centreon interface

<!--Offline Licenses-->

1. Install the Plugin on all Centreon pollers monitoring SCCM ressources:

For the NRPE protocol
```bash
yum install centreon-nrpe-plugin
```
and for the Restapi
```bash
yum install centreon-plugin-Operatingsystems-Windows-Restapi
```

2. Install the Plugin-Pack RPM on the Centreon server **Central**:

```bash
yum install centreon-pack-applications-sccm-nsclient
```

3. In the *Configuration  \>  Plugin Packs*  page of the Web Centreon interface, install the Plugin-Pack 'Microsoft SCCM'

<!--END_DOCUSAURUS_CODE_TABS-->

### Host Macro Configuration


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

## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

One the Plugin is installed, you can test it directly in the command line from your Centreon poller
with the user *centreon-engine*:

```bash
su - centreon-engine\
/usr/lib/nagios/plugins/check_centreon_nrpe \ 
-H 168.253.16.125  \
	-p 5666\
	-t  \
	-c check_centreon_plugins \
	-a 'apps::sccm::local::plugin' 'site-status' 


/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl \
	--plugin=apps::nsclient::restapi::plugin  \
	--mode=query  \
	--hostname=168.253.16.125  \
	--port='5666'  \
	--proto='http'  \
    --username='yourusername' \
	--password='yourpassword' \
	--command=check_centreon_plugins  \
	--arg='apps::sccm::local::plugin'  \
	--arg='database-replication-status'  

```

Output: 

```bash
OK: Node 'i-Vertix Node 1' JVM Heap: 26%, Free Disk Space: 1.56TB, Documents: 4362761044, Data: 1.26TB | 'i-Vertix Node 1#node.jvm.heap.usage.percentage'=26%;;;0;100 'i-Vertix Node 1#node.jvm.heap.usage.bytes'=36380302240B;;;0;137151119360 'i-Vertix Node 1#node.disk.free.bytes'=1710072680448B;;;0;3113589145600 'i-Vertix Node 1#node.documents.total.count'=4362761044;;;0; 'i-Vertix Node 1#node.data.size.bytes'=1386278479651B;;;0;
```

The command request statistic to the Elasticsearch node named 'Node 1' (```--mode=node-statistics --filter-name='Node 1```) with the IP/FQDN address *168.253.16.125* (```--hostname=168.253.16.125```). We will use the port 92000 (```--port=9200```) and the http protocol (```proto=http''```). The username of the datebase is *Elasticsearch_username* (```--username='Elasticsearch_username'```) and its paswword is *Elasticsearch_password*(```--password='Elasticsearch_password'```)


The different options can be displayed with the ```--help``` parameter:  

```bash
/usr/lib/nagios/plugins/check_centreon_nrpe -c check_centreon_plugins -a 'apps::sccm::local::plugin' 'site-status' --help
```
```bash
/usr/lib/centreon/plugins//centreon_nsclient_restapi.pl --plugin=apps::nsclient::restapi::plugin --mode=query --command=check_centreon_plugins --arg='apps::sccm::local::plugin' --arg='database-replication-status' --help
```

### Why do I get the following error:

#### UNKNOWN: 500 Can't connect

This error message means that the Centreon Plugin couldn't successfully connect to the host API. Check that no third party device (such as a firewall) is blocking the request. A proxy connection may also be necessary to connect to the API. This can be done by using the --proxyurl option in the command.

#### UNKNOWN: 501 Protocol scheme 'connect' is not supported

When using a proxy to connect to the host, this error message means that the Centreon Plugin library does not support the proxy connection protocol.

In order to prevent this issue, use the curl HTTP backend by adding the following option to the command: *--http-backend='curl'*.
