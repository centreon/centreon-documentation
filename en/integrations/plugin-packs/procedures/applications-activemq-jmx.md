---
id: applications-activemq-jmx
title: ActiveMQ JMX
---

## Overview

Apache ActiveMQ is an open source message broker written in Java together with a full Java Message Service (JMS) client.

## Plugin-Pack assets

### Monitored objects

* Brokers (queue / topic)

### Discovery rules

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                     | Description                |
| :---------------------------- | :------------------------- |
| App-Activemq-Jmx-Brokers-Name |  Discover ActiveMQ Broker  |

<!--DOCUSAURUS_CODE_TABS-->

## Monitored metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Brokers-->

| Metric name                                    | Description                                         |
| :--------------------------------------------- | :-------------------------------------------------- |
| Broker.store.usage.percentage                  | Broker store percentage usage. Unit: %              |
| Broker.temporary.usage.percentage              | Broker temporary store percentage usage. Unit: %    |
| Broker.memory.usage.percentage                 | Broker memory usage. Unit: %                        |
| Broker.queue.average.enqueue.time.milliseconds | Broker average enqueue time (queue). Unit: ms       |
| Broker.queue.consumers.connected.count         | Broker queue connected consumers. Unit: count       |
| Broker.queue.producers.connected.count         | Broker queue connected producers . Unit: count      |
| Broker.queue.memory.usage.percentage           | Broker queue memory usage. Unit: %                  |
| Broker.queue.size.count                        | Broker queue size. Unit:count                       |
| Broker.queue.messages.enqueued.count           | Broker enqueued messages. Unit: count               |
| Broker.queue.messages.dequeue.count            | Broker dequeued messages. Unit: count               |
| Broker.queue.messages.expired.count            | Broker queue expired messages. Unit: count          |
| Broker.queue.messages.inflighted.count         | Broker queue inflighted messages. Unit: count       |
| Broker.queue.messages.size.average.bytes       | Broker queue average messages size. Unit: bytes     |
| Broker.topic.average.enqueue.time.milliseconds | Broker average queue time per topic. Unit: ms       |
| Broker.topic.consumers.connected.count         | Broker connected consumers per topic. Unit: count   |
| Broker.topic.producers.connected.count         | Broker connected producers per topic. Unit: count   |
| Broker.topic.memory.usage.percentage           | Broker memory percentage usage per topic. Unit: %   |
| Broker.topic.size.count                        | Broker topic size. Unit:count                       |
| Broker.topic.messages.enqueued.count           | Broker enqueued messages per topic. Unit: count     |
| Broker.topic.messages.dequeue.count            | Broker messages deuque per topic. Unit: count       |
| Broker.topic.messages.expired.count            | Broker expired messages per topic. Unit: count      |
| Broker.topic.messages.inflighted.count         | Broker inflighted messages per topic. Unit: count   |
| Broker.topic.messages.size.average.bytes       | Broker average messages size per topic. Unit: bytes |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### ActiveMQ configuration

ActiveMQ provides a Jolokia RestAPI reachable on http://*server_name*:8161/api/jolokia
More information on how to set up and configure the ActiveMQ RestAPI can be found in the official documentation: https://activemq.apache.org/rest

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Plugin on every poller expected to monitor ActiveMQ resources:

```bash
yum install centreon-plugin-Applications-ActiveMQ-Jmx
```

2. On the Centreon Web interface, install the *ActiveMQ JMX* Centreon Plugin-Pack from the "Configuration > Plugin packs > Manager" page

<!--Offline IMP License-->

1. Install the Plugin on every poller expected to monitor ActiveMQ resources:

```bash
yum install centreon-plugin-Applications-ActiveMQ-Jmx
```

2. Install the Centreon Plugin-Pack RPM on the Centreon Central server:

```bash
centreon-pack-applications-activemq-jmx.noarch
```

3. On the Centreon Web interface, install the *ActiveMQ JMX* Centreon Plugin-Pack from the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

* Log into Centreon and add a new Host through "Configuration > Hosts".
* Apply the *App-Activemq-JMX-custom* template to the Host and configure all of the Macros marked as mandatory :

| Mandatory   | Name                | Description                                                                |
| :---------- | :------------------ | :------------------------------------------------------------------------- |
| X           | JOLOKIAURL          | Jolokia URL (eg: http://myactivemq.centreon.com:8161/api/jolokia)          |
| X           | JOLOKIAUSERNAME     | Jolokia user name                                                          |
| X           | JOLOKIAPASSWORD     | Jolokia password                                                           |
|             | JOLOKIAEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

> It is recommended to use the discovery module to add the monitoring of your *Brokers***
> Go to *Configuration > Services > Scan* to perform a scan and easily add the discovered resources**

## FAQ

### How can I test the Plugin in the command line interface and what do the main options mean?

Once the Plugin installed, you can test it directly from the command line of the Centreon poller using the *centreon-engine* user:

```bash
/usr/lib/centreon/plugins/centreon_activemq_jmx.pl \
  --plugin apps::mq::activemq::jmx::plugin \
  --mode='brokers' \
  --url='http://myactivemq.int.centreon.com:8161/api/jolokia' \
  --username='admin' \
  --password='admin' \
```

This command will check all the Brokers (```--mode='brokers'```) of the ActiveMQ server of the *myactivemq.int.centreon.com* server. The RestAPI endpoint is set on the *http\://myactivemq.int.centreon.com\:8161/api/jolokia* URL 
(```--url='http://myactivemq.int.centreon.com:8161/api/jolokia'```).
To authenticate against the Jolokia agent, the API username *admin* is used with the relevant password (```--username='admin' --password='admin'```).

If everything's fine, it should output something similar to:

```bash
OK: Broker 'localhost' store usage: 0.00 %, temporary usage: 0.00 %, memory usage: 0.00 % - 
queue 'foo.bar' average time messages remained enqueued: 0.000 ms, consumers connected: 0, producers connected: 0, memory usage: 0.00 %, 
queue size: 1, messages enqueued: 0, messages dequeued: 0, messages expired: 0, messages in-flighted: 0, average messages size: 1.09 KB - All topics are ok | 
'localhost#Broker.store.usage.percentage'=0.00%;;;0;100 'localhost#Broker.temporary.usage.percentage'=0.00%;;;0;100 'localhost#Broker.memory.usage.percentage'=0.00%;;;0;100
```

The available thresholds as well as all of the options that can be used with this Plugin can be displayed by adding the ```--help``` parameter to the command:

```bash
/usr/lib/centreon/plugins/centreon_activemq_jmx.pl \
  --plugin apps::mq::activemq::jmx::plugin \
  --mode Brokers \
  --help
```

You can display all of the modes that come with the Plugin with the command below:

```bash
/usr/lib/centreon/plugins/centreon_activemq_jmx.pl \
  --plugin apps::mq::activemq::jmx::plugin \
  --list-mode
```

### Why do I get the following error:

#### UNKNOWN: protocol issue: Error while fetching ```http://myactivemq.int.centreon.com:8161/url/path```

This error message means that the Plugin failed to request the API. Check your credentials.

#### UNKNOWN: JMX Request: Cant get a single value.

This error message means that the Plugin failed to get the value from the API. Check the URL path.

#### UNKNOWN: protocol issue: java.lang.Exception : Origin null is not allowed to call this agent

The default Jolokia configuration in ActiveMQ doesn't allow the Cross-Origin Resource Sharing (CORS) method.
You can disable this method by editing the jolokia-access.xml file and remove the tag `<strict-checking/>`:

```xml
<cors>
 <strict-checking/>
</cors>
```
Restart your ActiveMQ server afterwards for the changes to be applied.
