---
id: applications-bluemind-ssh
title: BlueMind SSH
---

## Overview

BlueMind is a complete unified enterprise messaging and communications solution.

## Plugin-Pack Assets

### Monitored Objects

* Core: Main BlueMind engine
* Eas: Mobile connection service
* Hps: Authentication service
* Ips: IMAP operations tracking
* Lmtpd: Email delivery service
* Milter: Analysis and modification of emails at SMTP Level
* Webserver: Web application server
* Xmpp: Instant messaging service

## Monitored Metrics 

You can get an overview of all the metrics gathered from BlueMind in the official documentation: https://forge.bluemind.net/confluence/display/BM35/Reference+des+metriques

<!--DOCUSAURUS_CODE_TABS-->
<!--Core-->

| Metric name                              | Description                                          |
| :--------------------------------------- | :--------------------------------------------------- |
| core.calls.received.success.count        | Successful calls to the core. Unit: Count            |
| core.calls.received.failure.count        | Failure calls to the core. Unit: Count               |                                                      
| core.heartbeat.broadcast.running.count   | Broadcast routine running. Unit: Count               |
| core.directory.cluster.events.count      | Directory Cluster events. Unit: Count                |
| core.request.handling.total.milliseconds | Total time Core spent to handle requests. Unit: ms   |
| core.request.handling.mean.milliseconds  | Mean time Core spent to handle requests. Unit: ms    |

<!--Eas-->

| Metric name                              | Description                                          |
| :--------------------------------------- | :--------------------------------------------------- |
| eas.responses.size.total.bytes           | Response size. Unit: Bytes                           |
| eas.execution.total.milliseconds         | Total execution time. Unit: ms                       |
| eas.execution.mean.milliseconds          | Mean execution time. Unit: ms                        |

<!--Hps-->

| Metric name                                  | Description                                          |
| :------------------------------------------- | :--------------------------------------------------- |
| hps.authentication.success.count             | HPS Successful authentications. Unit: Count          |
| hps.authentication.failure.count             | HPS Failed authentications. Unit: Count              |
| hps.requests.protected.count                 | Number of protected page display. Unit: Count        |
| hps.requests.maintenance.count               | Number of maintenance page display. Unit: Count      |
| hps.upstream.requests.time.milliseconds      | By instances. e.g. /login /webmail ...               |
| hps.upstream.requests.time.mean.milliseconds | By instances. e.g. /login /webmail ...               |
| hps.upstream.requests.size.total.bytes       | By instances. e.g. /login /webmail ...               |
| hps.upstream.requests.total.count            | By instances. e.g. /login /webmail ...               |

<!--Ips-->

| Metric name                              | Description                                          |
| :--------------------------------------- | :--------------------------------------------------- |
| ips.connections.active.count             | IPS active connections. Unit: Count                  |

<!--Lmtpd-->

| Metric name                                        | Description                                    |
| :------------------------------------------------- | :--------------------------------------------- |
| lmtpd.connections.active.count                     | Active connections. Unit: Count                |
| lmtpd.connections.total.count                      | Total connections. Unit: Count                 |
| lmtpd.deliveries.success.count                     | Connection success. Unit: Count                |
| lmtpd.deliveries.failure.count                     | Connection failure. Unit: Count                |
| lmtpd.emails.size.total.bytes                      | Total email size. Unit: Bytes                  |
| lmtpd.sessions.duration.total.milliseconds         | Sessions total duration. Unit: ms              |
| lmtpd.sessions.duration.mean.milliseconds          | Sessions mean duration. Unit: ms               |
| lmtpd.traffic.transport.latency.total.milliseconds | Transport total latency. Unit: ms              |
| lmtpd.traffic.transport.latency.mean.milliseconds  | Transport mean latency. Unit: ms               |
 
<!--Milter-->

| Metric name                                 | Description                                          |
| :------------------------------------------ | :--------------------------------------------------- |
| milter.connections.total.count              | Total connections. Unit: Count                       |
| milter.traffic.class.inbound.count          | Inbound email. Unit. Count                           |
| milter.traffic.class.outbound.count         | Outbound email. Unit. Count                          |
| milter.traffic.size.inbound.bytes           | Inbound email size. Unit: Bytes                      |
| milter.traffic.size.outbound.bytes          | Outbound email size. Unit: Bytes                     |
| milter.sessions.duration.total.milliseconds | Sessions total duration. Unit: ms                    |
| milter.sessions.duration.mean.milliseconds  | Sessions mean duration. Unit: ms                     |

<!--Webserver-->

| Metric name                                | Description                                          |
| :----------------------------------------- | :--------------------------------------------------- |
| webserver.requests.time.milliseconds       | Request handling time. Unit: ms                      |
| webserver.requests.time.mean.milliseconds  | Request handling mean time. Unit: ms                 |
| webserver.requests.total.count             | Total requested page page. Unit: Count               |
| webserver.requests.status.200.count        | Total 200/OK requests. Unit: Count                   |
| webserver.requests.status.304.count        | Total 304/Not Modified. Unit: Count                  |

<!--Xmpp-->

| Metric name                              | Description                                          |
| :--------------------------------------- | :--------------------------------------------------- |
| xmpp.packets.all.count                   | XMPP packet number. Unit: Count                      |
| xmpp.packets.chat.count                  | XMPP IM packet number. Unit: Count                   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisistes

### BlueMind Configuration

A monitoring account allowed to access unix sockets within ```/var/run/bm-metrics/``` directory must be created on the BlueMind system  and be part of the *telegraph* group.

You can check that the proper monitoring account permissions are set by logging on the BlueMind system using this newly created user and  executing this test command:

```bash
user$ curl --unix-socket /var/run/bm-metrics/metrics-bm-core.sock http://127.0.0.1/metrics
```
The command should return some results such as below:

```
bm-core.callsByRPC,rpc=GET-/api/todolist/{containerUid}/{uid}/_itemchangelog,status=success,meterType=Counter count=1
bm-core.callsByRPC,rpc=GET-/api/externaluser/{domainUid}/{uid}/groups,status=success,meterType=Counter count=2
bm-core.heartbeat.broadcast,state=core.state.stopping,meterType=Counter count=2
...
```

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every poller expected to monitor BlueMind servers:

```bash
yum install centreon-plugin-Applications-Bluemind-Ssh
```

2. Install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every poller expected to monitor BlueMind servers:

```bash
yum install centreon-plugin-Applications-Bluemind-Ssh
```

2. Install the Centreon Plugin-Pack RPM:

```bash
yum install centreon-pack-applications-bluemind-ssh
```

3. Install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Adding a new host into Centreon, apply the relevant host template matching your instance/cluster type. All of the host templates begin with *App-Bluemind-SSH*. Once the template set, you have to set values according to the chosen SSH backend. 

3 SSH backends are available to connect to the BlueMind server: *sshcli*, *plink* and *libssh* which are detailed below.  

### sshcli backend

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```sshcli```                                                           |
|             | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your poller                |                                                         |
|             | SSHPASSWORD     | Cannot be used with backend. Only ssh key authentication                                    |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

**Warning** With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

### plink backend

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```plink```                                                            |
|             | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your poller                |                                                         |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

**Warning** With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

### libssh backend

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```libssh```                                                           |
|             | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your poller                |                                                         |
|             | SSHPASSWORD     | Can be used. If not set, SSH key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

With that backend, you don't have to validate the target server fingerprint manually. Nice ;)

## FAQ

### I have that error message: ```UNKNOWN: Command error: Host key verification failed.```. What does it mean ?

It means you haven't manually validated the target server fingerprint with ```ssh``` or ```plink``` on the Centreon poller.
