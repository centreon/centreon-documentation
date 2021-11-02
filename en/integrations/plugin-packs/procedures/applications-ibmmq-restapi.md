---
id: applications-ibmmq-restapi
title: IBM MQ Rest API
---

## Pack Assets

### Monitored Objects

The Pack IBM MQ collects metrics for:
* Queue-managers
* Queues

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                            | Description                                    |
| :----------------------------------- | :--------------------------------------------- |
| App-Ibmmq-Restapi-Queue-Manager-Name | Discover queue managers and monitor statistics |
| App-Ibmmq-Restapi-Queue-Name         | Discover queues and monitor statistics         |

<!--END_DOCUSAURUS_CODE_TABS-->

### Collected Metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Queue-managers-->

| Metric name                                           | Description                   | Unit  |
| :---------------------------------------------------- | :---------------------------- | :---- |
| queue manager status                                  | Queue manager status          |       |
| *queue\_manager_name*\#queuemanager.connections.count | Current number of connections |       |

<!--Queues-->

| Metric name                                                        | Description               | Unit  |
| :----------------------------------------------------------------- | :------------------------ | :---- |
| *queue\_manager_name*~*queue\_name*\#queue.connections.input.count | Current input connections |       |
| *queue\_manager_name*~*queue\_name*\#queue.messages.depth.count    | Current messages depth    |       |
| *queue\_manager_name*~*queue\_name*\#queue.message.oldest.seconds  | Oldest message            | s     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

To control your IBM MQ, the Rest API must be configured.
E.g: https://www.ibm.com/docs/en/ibm-mq/9.0?topic=api-getting-started-administrative-rest

The Pack supports only the basic authentification.

## Setup

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Ibmmq-Restapi
```

2. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *IBM MQ Rest API* Pack

<!--Offline IMP License-->

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Ibmmq-Restapi
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-applications-ibmmq-restapi
```

3. On the Centreon Web interface in **Configuration > Plugin packs > Manager**, install the *IBM MQ Rest API* Pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Host configuration

* Add a new Host and apply the *App-Ibmmq-Restapi-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name                 | Description                                                                |
| :-------- | :------------------- | :------------------------------------------------------------------------- |
| X         | IBMMQAPIPORT         | Port used (Default: 9443)                                                  |
| X         | IBMMQAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | IBMMQAPIURLPATH      | Specify api prefix (Default: '/ibmmq/rest/v1/admin')                       |
| X         | IBMMQAPIUSERNAME     | Api username                                                               |
| X         | IBMMQAPIPASSWORD     | Api password                                                               |
|           | IBMMQAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## How to test the Plugin and what are the main options for?

Once the plugin installed, log into your Centreon Poller CLI using the *centreon-engine* user account
and test the Plugin by running the following command (Parameters such as ```api-username``` or ```api-password```have to be adjusted):

```bash
/usr/lib/centreon/plugins/centreon_ibmmq_restapi.pl \
    --plugin=apps::mq::ibmmq::restapi::plugin \
    --mode=queue-managers \
    --hostname='10.30.2.79' \
    --port='9443' \
    --proto='https' \
    --url-path='/ibmmq/rest/v1/admin' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --verbose
```

Expected command output is shown below:

```bash
OK: Queue manager 'MQPRD' status: running [channel initiator: running], current number of connections: 43 | 'MQPRD#queuemanager.connections.count'=43;;;0;
```

The command above monitors queue managers (```--mode=queue-managers```).

It uses api-username (```--api-username='myapiusername'```), an api-password (```--api-password='myapipassword'```)
and it connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```)
on the port 9443 (```--port='9443'```) using https (```--proto='https'```).

All the options as well as all the available thresholds can be displayed by adding the  ```--help```
parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_ibmmq_restapi.pl \
    --plugin=apps::mq::ibmmq::restapi::plugin \
    --mode=queue-managers \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins.html#http-and-api-checks)

