
--
id: applications-bluemind-ssh
title: BlueMind SSH
---

## Overview

BlueMind is a complete unified enterprise messaging and communications solution.

## Connector Pack content

### Monitored objects

* Core: main bluemind engine
* Eas: mobile connection service
* Hps: authentication service
* Ips: IMAP operations tracking
* Lmtpd: email delivery service
* Milter: analysis and modification of emails at SMTP Level
* Webserver: web application server
* Xmpp: instant messaging service

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->
<!--Hosts-->

No hosts discovery rule available on this pack

<!--Services-->

No services discovery rule available on this pack

<!--END_DOCUSAURUS_CODE_TABS-->

## Monitored metrics 

You can get an overview of all gathered metrics from bluemind in the official documentation: https://forge.bluemind.net/confluence/display/BM35/Reference+des+metriques

<!--DOCUSAURUS_CODE_TABS-->
<!--Core-->

| Metric name                              | Description                                          |
| :--------------------------------------- | :--------------------------------------------------- |
| core.calls.received.success.count        |                                                      |
| core.calls.received.failure.count        |                                                      |
| core.calls.received.failure.count        |                                                      |
| core.calls.received.failure.count        |                                                      |
| core.heartbeat.broadcast.running.count   |                                                      |
| core.directory.cluster.events.count      |                                                      |
| core.request.handling.total.milliseconds |                                                      |
| core.request.handling.mean.milliseconds  |                                                      |

<!--Eas-->

| Metric name                              | Description                                          |
| :--------------------------------------- | :--------------------------------------------------- |
| eas.responses.size.total.bytes           |                                                      |
| eas.execution.total.milliseconds         |                                                      |
| eas.execution.mean.milliseconds          |                                                      |

<!--Hps-->

| Metric name                                  | Description                                          |
| :------------------------------------------- | :--------------------------------------------------- |
| hps.authentication.success.count             |                                                      |
| hps.authentication.failure.count             |                                                      |
| hps.requests.protected.count                 |                                                      |
| hps.requests.maintenance.count               |                                                      |
| hps.upstream.requests.time.milliseconds      | By instances. e.g. /login /webmail ...               |
| hps.upstream.requests.time.mean.milliseconds | By instances. e.g. /login /webmail ...               |
| hps.upstream.requests.size.total.bytes       | By instances. e.g. /login /webmail ...               |
| hps.upstream.requests.total.count            | By instances. e.g. /login /webmail ...               |

<!--Ips-->

| Metric name                              | Description                                          |
| :--------------------------------------- | :--------------------------------------------------- |
| ips.connections.active.count             |                                                      |

<!--Lmtpd-->

| Metric name                                        | Description                                          |
| :------------------------------------------------- | :--------------------------------------------------- |
| lmtpd.connections.active.count                     |                                                      |
| lmtpd.connections.total.count                      |                                                      |
| lmtpd.deliveries.success.count                     |                                                      |
| lmtpd.deliveries.failure.count                     |                                                      |
| lmtpd.emails.size.total.bytes                      |                                                      |
| lmtpd.sessions.duration.total.milliseconds         |                                                      |
| lmtpd.sessions.duration.mean.milliseconds          |                                                      |
| lmtpd.traffic.transport.latency.total.milliseconds |                                                      |
| lmtpd.traffic.transport.latency.mean.milliseconds  |                                                      |

<!--Milter-->

| Metric name                                 | Description                                          |
| :------------------------------------------ | :--------------------------------------------------- |
| milter.connections.total.count              |                                                      |
| milter.traffic.class.inbound.count          |                                                      |
| milter.traffic.class.outbound.count         |                                                      |
| milter.traffic.size.inbound.bytes           |                                                      |
| milter.traffic.size.outbound.bytes          |                                                      |
| milter.sessions.duration.total.milliseconds |                                                      |
| milter.sessions.duration.mean.milliseconds  |                                                      |

<!--Webserver-->

| Metric name                                | Description                                          |
| :----------------------------------------- | :--------------------------------------------------- |
| webserver.requests.time.milliseconds       |                                                      |
| webserver.requests.time.mean.milliseconds  |                                                      |
| webserver.requests.total.count             |                                                      |
| webserver.requests.status.200.count        |                                                      |
| webserver.requests.status.304.count        |                                                      |

<!--Xmpp-->

| Metric name                              | Description                                          |
| :--------------------------------------- | :--------------------------------------------------- |
| xmpp.packets.all.count                   |                                                      |
| xmpp.packets.chat.count                  |                                                      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisistes

### Bluemind Configuration

On Bluemind server, you need a system account who can access unix sockets of the directory ```/var/run/bm-metrics/``` (group telegraph).
To test, execute that command with the user:

```bash
user$ curl --unix-socket /var/run/bm-metrics/metrics-bm-core.sock http://127.0.0.1/metrics
bm-core.callsByRPC,rpc=GET-/api/todolist/{containerUid}/{uid}/_itemchangelog,status=success,meterType=Counter count=1
bm-core.callsByRPC,rpc=GET-/api/externaluser/{domainUid}/{uid}/groups,status=success,meterType=Counter count=2
bm-core.heartbeat.broadcast,state=core.state.stopping,meterType=Counter count=2
...
```

## Setup 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every poller expected to monitor Bluemind server:

```bash
yum install centreon-plugin-Applications-Bluemind-Ssh
```

2. Install the monitoring templates from the Centreon Plugin-Pack on the "Configuration > Plugin packs > Manager" page


<!--Offline IMP License-->

1. Install the Centreon Plugin package on every poller expected to monitor Bluemind server:

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

You can choose between 3 ssh backends to connect on your Bluemind server.

Addinge a new host into Centreon, apply the relevant host template matching your instance/cluster type. All of the host templates begin with ```App-Bluemind-SSH```. Once the template chosen, you have to set values according the ssh backend. 

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
|             | SSHPASSWORD     | Can be used. If not set, ssh key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

**Warning** With that backend, you have to validate the target server fingerprint manually (with the SSHUSERNAME used).

### libssh backend

| Mandatory   | Name            | Description                                                                                 |
| :---------- | :-------------- | :------------------------------------------------------------------------------------------ |
| X           | SSHBACKEND      | Name of the backend: ```libssh```                                                           |
|             | SSHUSERNAME     | By default, it uses the user running process ```centengine``` on your poller                |                                                         |
|             | SSHPASSWORD     | Can be used. If not set, ssh key authentication is used                                     |
|             | SSHPORT         | By default: 22                                                                              |
|             | SSHEXTRAOPTIONS | Customize it with your own if needed. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```          |

With that backend, you don't have to validate the target server fingerprint manually. Nice ;)

## FAQ

### I have that error message: ```UNKNOWN: Command error: Host key verification failed.```. What does it means ?

It means you don't have validated the target server fingerprint with ```ssh``` or ```plink``` manually on your poller.
