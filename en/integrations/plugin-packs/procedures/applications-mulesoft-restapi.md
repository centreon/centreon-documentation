---
id: applications-mulesoft-restapi
title: Mulesoft Anypoint
---

## Overview

Anypoint Platform helps you build a structured application network that connects applications, data, and devices with reusable APIs. 
The unified Anypoint Platform makes it easy to discover, create, and manage APIs in a modular, organized layer. 
Instead of retrieving random and possibly unstable code snippets, you can “shop” for APIs created using the industry’s best practices.
The Centreon Plugin and Plugin-Packs rely on the Mulesoft Anypoint Rest API to collect the status of the Mulesoft resources.

## Plugin Pack Assets

### Monitored Objects

* Applications
* Servers
* Clusters
* Queue Messages

### Discovery Rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                                | Description                                                        |
| :--------------------------------------- | :----------------------------------------------------------------- |
| App-Mulesoft-Restapi-Application-Name    | Discover Anypoint applications and monitor their status            |
| App-Mulesoft-Restapi-Server-Name         | Discover Anypoint servers and monitor their status                 |
| App-Mulesoft-Restapi-Queue-Messages-Name | Discover Anypoint MQ queues and monitor the related messages count |


<!--END_DOCUSAURUS_CODE_TABS-->

### Collected Metrics

More information about collected metrics is available in the official Mulesoft Rest API documentation: https://anypoint.mulesoft.com/exchange/portals/anypoint-platform/f1e97bc6-315a-4490-82a7-23abe036327a.anypoint-platform/arm-rest-services/

<!--DOCUSAURUS_CODE_TABS-->

<!--Applications-->

| Metric name                                | Description                        |
| :----------------------------------------- | :--------------------------------- |
| status                                     | Current status of each application |
| mulesoft.applications.total.count          | Total number of applications       |
| mulesoft.applications.status.started.count | Number of started applications     |
| mulesoft.applications.status.stopped.count | Number of stopped applications     |
| mulesoft.applications.status.failed.count  | Number of failed applications      |

<!--Clusters-->

| Metric name                                 | Description                     |
| :------------------------------------------ | :------------------------------ |
| status                                      | Current status of each cluster  |
| mulesoft.clusters.total.count               | Total number of clusters        |
| mulesoft.clusters.status.running.count      | Number of running clusters      |
| mulesoft.clusters.status.disconnected.count | Number of disconnected clusters |

<!--Messages-->

| Metric name                      | Description                                  |
| :------------------------------- | :------------------------------------------- |
| mulesoft.mq.messages.total.count | Total number of messages in the queue        |
| mulesoft.mq.inflight.count       | Number of inflight messages in the queue     |
| mulesoft.mq.received.count       | Number of received messages in the queue     |
| mulesoft.mq.sent.count           | Number of sent messages in the queue         |
| mulesoft.mq.visible.count        | Number of visible messages in the queue      |
| mulesoft.mq.acked.count          | Number of acknowledged messages in the queue |

<!--Servers-->

| Metric name                                | Description                    |
| :----------------------------------------- | :----------------------------- |
| status                                     | Current status of each server  |
| mulesoft.servers.total.count               | Total number of servers        |
| mulesoft.servers.status.running.count      | Number of running servers      |
| mulesoft.servers.status.disconnected.count | Number of disconnected servers |


<!--END_DOCUSAURUS_CODE_TABS-->


## Prerequisites

### API Privileges

A service account with proper access in the right Mulesoft environment/organization has to be used.
This account has to own the privileges to manage Applications, Servers, Clusters and Messages Queues on the designated environment.


## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every poller monitoring Mulesoft Anypoint resources:

```bash
yum install centreon-plugin-Applications-Mulesoft-Restapi.noarch
```

2. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Mulesoft Anypoint* Plugin-Pack


<!--Offline IMP License-->

1. Install the Centreon Plugin on every poller monitoring Mulesoft Anypoint resources:

```bash
yum install centreon-plugin-Applications-Mulesoft-Restapi.noarch
```

2. On the Centreon Central server, install the Centreon Plugin-Pack from the RPM:

```bash
yum install centreon-pack-applications-mulesoft-restapi.noarch
```

3. On the Centreon Web interface in "Configuration > Plugin packs > Manager", install the *Mulesoft Anypoint* Plugin-Pack


<!--END_DOCUSAURUS_CODE_TABS-->


## Configuration

The Plugin-Pack is designed to monitor resources based on one host per Mulesoft environment/organization.
Adding a host into Centreon, link it to the template named *App-Mulesoft-Restapi-custom*. 
Once the template applied, some Macros have to be configured:

| Mandatory | Name        | Description                                                       |
| :-------- | :---------- | :---------------------------------------------------------------- |
| X         | ENVID       | Mulesoft Environment ID fetched from the Mulesoft Web console     |
| X         | ORGID       | Mulesoft Organization ID fetched from the Mulesoft Web console    |
| (X)       | REGIONID    | Mulesoft MQ region ID to use (only mandatory for *messages* mode) |
| X         | APIUSERNAME | API username                                                      |
| X         | APIPASSWORD | API password (*password* type should be ticked)                   |


## FAQ

### How to check in the CLI that the configuration is OK and what are the main options for ?

Once the Plugin installed, log into your poller using the *centreon-engine* user account and test by running the following command (Parameters such as ```environment-id``` or ```api-username```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_mulesoft_restapi.pl \
    --plugin=apps::mulesoft::restapi::plugin \
	--mode=applications \
	--environment-id='1234abc-56de-78fg-90hi-1234abcdefg' \
	--organization-id='1234abcd-56ef-78fg-90hi-1234abcdefg' \
	--api-username='myapiuser' \
	--api-password='myapipassword' \
	--filter-name='myapplication1' \
	--warning-status='%{status} =~ /STOPPED/' \
	--critical-status='%{status} =~ /FAILED/' \
	--verbose
	

OK: Total applications Total : 1, Started : 1, Stopped : 0, Failed : 0 - Application 'myapplication1' Id: 123456, Status: STARTED |
'mulesoft.applications.total.count'=1;;;0; 'mulesoft.applications.status.started.count'=1;;;0; 'mulesoft.applications.status.stopped.count'=0;;;0; 'mulesoft.applications.status.failed.count'=0;;;0;
Application 'myapplication1' Id: 123456, Status: STARTED

```

The command above gets the status of a Mulesoft application (```--mode=applications```) named *myapplication1* (```--filter-name='myapplication1'```). 
This application stands within the *1234abc-56de-78fg-90hi-1234abcdefg* environment and the *234abcd-56ef-78fg-90hi-1234abcdefg* organization (```---environment-id='1234abc-56de-78fg-90hi-1234abcdefg' --organization-id='1234abcd-56ef-78fg-90hi-1234abcdefg'```). 

This command would trigger a WARNING alert if the returned status of the application contains the word *STOPPED* (```--warning-status='%{status} =~ /STOPPED/'```) and a CRITICAL alert if it contains the word *FAILED* (```--critical-status='%{status} =~ /FAILED/'```).

All the options that can be used with this plugin can be found over the ```--help``` command:

```/usr/lib/centreon/plugins//centreon_mulesoft_restapi.pl --plugin=apps::mulesoft::restapi::plugin --mode=applications --help```


### How do I remove the *count* perfdatas if I want to filter on just one application ?

The Plugin adds the count of objects by default. This can be useless if the objects are filtered with the ```--filter-name``` parameter.
Therefore, these useless perfdatas can be omitted by adding a perfdata filter : ```--filter-perfdata='^$'```.
