---
id: applications-jvm-actuator
title: JVM Actuator
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Plugin Pack Assets

### Monitored Objects

The Pack collects metrics for:
* Class
* Memory
* System (cpu, load-average, fd)
* Threads

### Collected Metrics

<Tabs groupId="sync">
<TabItem value="Class-count" label="Class-count">

| Metric name                | Description                      | Unit |
| :------------------------- | :------------------------------- | :--- |
| class.loaded.current.count | Current number of classes loaded |      |
| class.unloaded.count       | Number of classes unloaded       |      |

</TabItem>
<TabItem value="Cpu-load" label="Cpu-load">

| Metric name                 | Description                  | Unit |
| :-------------------------- | :--------------------------  | :--- |
| system.cpu.load.percentage  | Cpu load of the machine      | %    |
| process.cpu.load.percentage | Cpu load of the jvm instance | %    |

</TabItem>
<TabItem value="Fd-usage" label="Fd-usage">

| Metric name                | Description                                   | Unit |
| :------------------------- | :-------------------------------------------- | :--- |
| fd.opened.usage.count      | Number of used file descriptors               |      |
| fd.opened.free.count       | Number of free file descriptors               |      |
| fd.opened.usage.percentage | Number of used file descriptors in percentage | %    |

</TabItem>
<TabItem value="Load-average" label="Load-average">

| Metric name          | Description                             | Unit |
| :------------------- | :-------------------------------------- | :--- |
| system.load.1m.count | System load average for the last minute |      |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric name                | Description                           | Unit |
| :------------------------- | :------------------------------------ | :--- |
| memory.heap.usage.bytes    | Current heap memory usage             | B    |
| memory.nonheap.usage.bytes | Current memory usage outside the heap | B    |

</TabItem>
<TabItem value="Memory-detailed" label="Memory-detailed">

| Metric name                  | Description                    | Unit |
| :--------------------------- | :----------------------------- | :--- |
| memory.eden.usage.bytes      | Current eden memory usage      | B    |
| memory.tenured.usage.bytes   | Current tenured memory usage   | B    |
| memory.survivor.usage.bytes  | Current survivor memory usage  | B    |
| memory.permanent.usage.bytes | Current permanent memory usage | B    |
| memory.code.usage.bytes      | Current code memory usage      | B    |

</TabItem>
<TabItem value="Threads" label="Threads">

| Metric name           | Description                        | Unit |
| :-------------------- | :--------------------------------- | :--- |
| threads.active.count  | Number of active threads           |      |
| threads.daemon.count  | Count of threads marked as daemons |      |

</TabItem>
</Tabs>

## Prerequisites

Please install Spring Boot Actuator module: https://docs.spring.io/spring-boot/docs/current/reference/html/actuator
Ask to your admin to deploy it and give you the URL.

## Setup

<Tabs groupId="sync">
<TabItem value="Online IMP Licence & IT-100 Editions" label="Online IMP Licence & IT-100 Editions">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Jvm-Actuator
```

2. On the Centreon Web interface in **Configuration > Plugin Packs > Manager**, install the *JVM Actuator* Pack

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Install the Centreon Plugin on every Poller:

```bash
yum install centreon-plugin-Applications-Jvm-Actuator
```

2. On the Centreon Central server, install the Centreon Pack from the RPM:

```bash
yum install centreon-pack-applications-jvm-actuator
```

3. On the Centreon Web interface in **Configuration > Plugin Packs > Manager**, install the *JVM Actuator* Pack

</TabItem>
</Tabs>

## Host configuration 

* Add a new Host and apply the *App-Jvm-Actuator-custom* Host Template

> Once the template applied, some Macros have to be configured:

| Mandatory | Name                    | Description                                                                |
| :-------- | :---------------------- | :------------------------------------------------------------------------- |
| X         | ACTUATORCUSTOMMODE      | Custom mode to get metrics (Default: ```standard```)                       |
| X         | ACTUATORAPIPORT         | Port used (Default: 8080)                                                  |
| X         | ACTUATORAPIPROTO        | Specify https if needed (Default: ```http```)                              |
| X         | ACTUATORAPIURLPATH      | Api endpoint (Default: ```/actuator```)                                    |
|           | ACTUATORAPIUSERNAME     | Api username                                                               |
|           | ACTUATORAPIPASSWORD     | Api password                                                               |
|           | ACTUATORAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

To monitor *centreon-map* JVM, please use following macro values:

| Name                    | Value                           |
| :---------------------- | :------------------------------ |
| ACTUATORCUSTOMMODE      | ```centreonmap```               |
| ACTUATORAPIURLPATH      | ```/centreon-studio/api/beta``` |
| ACTUATORAPIUSERNAME     | Api username must be set        |
| ACTUATORAPIPASSWORD     | Api password must be set        |

## How to test the Plugin and what are the main options for?

Once the Plugin installed, log into your Poller using the *centreon-engine* user account and test by running the following command:

```bash
/usr/lib/centreon/plugins/centreon_jvm_actuator.pl \
    --plugin=apps::java::jvm::actuator::plugin \
    --custommode=standard \
    --mode=class-count \
    --hostname='10.30.2.79' \
    --port='8080' \
    --proto='http' \
    --url-path='/actuator'
    --verbose
```

Output example:
```
OK: Class current: 6486, unloaded: 38 | 'class.loaded.current.count'=6486;;;0; 'class.unloaded.count'=38;;;0;
```

The command above monitors JVM class usage (```--mode=class-count```).
It connects to the host _10.30.2.79_ (```--hostname='10.30.2.79'```) on the port _8080_ (```--port='8080'```) using _http_ (```--proto='http'```).

All the options that can be used with this plugin can be found over the ```--help``` command:

```bash
/usr/lib/centreon/plugins/centreon_jvm_actuator.pl \
    --plugin=apps::java::jvm::actuator::plugin \
    --custommode=standard \
    --mode=class-count \
    --help
```

## Troubleshooting

[Troubleshooting plugins](../tutorials/troubleshooting-plugins)
