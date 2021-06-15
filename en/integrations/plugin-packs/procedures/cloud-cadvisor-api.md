---
id: cloud-cadvisor-api
title: cAdvisor API
---

## Overview

cAdvisor (Container Advisor) provides container users an understanding of the resource usage and 
performance characteristics of their running containers. 

It is a running daemon that collects, aggregates, processes, and exports information about running containers.

This Pack aims to monitor metrics exposed through cAdvisor API endpoint. 

## Monitored objects 

This Pack contains one Host Template and several Service Templates to monitor node resource allocation 
and container performances: 
  * Container-Usage
  * Container-Disk-IO
  * Container-Traffic
  * Node-Status

### Discovery rules

The cAdvisor API Pack comes with several service discovery rules.

To monitor container metrics, you must launch a discovery to add relevant services:

| Rule                                    | Description                                            |
|-----------------------------------------|--------------------------------------------------------|
| Cloud-cAdvisor-API-Container-Disk-IO    | Discover containers and monitor Disk-IO metrics        |
| Cloud-cAdvisor-API-Container-Usage      | Discover containers and monitor CPU & RAM consumption  |
| Cloud-cAdvisor-API-Container-Traffic    | Discover containers and monitor bandwidth utilization  |

### Collected metrics

<!--DOCUSAURUS_CODE_TABS-->

<!--Container-Usage-->

| Metric name                                                        | Description                    | Unit   |
| :------------------------------------------------------------------| :----------------------------- | :----- |
| <container_name_or_id>#container.cpu.count                         | Number of allocated CPU(s)     | count  |
| <container_name_or_id>#container.cpu.utilization.percentage        | CPU utilization                |   %    |
| <container_name_or_id>#container.cpu.user.utilization.percentage   | CPU User utilization           |   %    |
| <container_name_or_id>#container.cpu.system.utilization.percentage | CPU System utilization         |   %    |
| <container_name_or_id>#container.memory.usage.bytes                | Memory usage                   |   B    |
| <container_name_or_id>#container.memory.cache.usage.bytes          | Cached memory usage            |   B    |
| <container_name_or_id>#container.memory.rss.usage.bytes            | RSS memory usage               |   B    |
| <container_name_or_id>#container.swap.usage.bytes                  | SWAP memory usage              |   B    |

By default, the --use-name flag will instance the metric with the <container_name>. 
If you want to use the <container_id> instead, remove it from the EXTRAOPTIONS macro at the Service Template level.

<!--Container-Disk-IO-->

| Metric name                                                   | Description                      | Unit   |
| :-------------------------------------------------------------| :------------------------------- | :----- |
|	<container_name_or_id:device>#disk.io.read.bytespersecond     | Disk I/O Read from the container |  B/s   |
| <container_name_or_id:device>#disk.io.write.bytespersecond    | Disk I/O Read from the container |  B/s   |

By default, the --use-name flag will instance the metric with the <container_name>. 
If you want to use the <container_id> instead, remove it from the EXTRAOPTIONS macro at the Service Template level.

<!--Container-Traffic-->

| Metric name                                                            | Description                      | Unit   |
| :----------------------------------------------------------------------| :------------------------------- | :----- |
|	<container_name_or_id.network_int>#container.traffic.in.bitspersecond  | Container incoming traffic       |  bps   |
| <container_name_or_id.network_int>#container.traffic.out.bitspersecond | Container outgoing traffic       |  bps   |

By default, the --use-name flag will instance the metric with the <container_name>. 
If you want to use the <container_id> instead, remove it from the EXTRAOPTIONS macro at the Service Template level.

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

### cAdvisor

A running cAdvisor container should be available. You can refer to the official
[quick start](https://github.com/google/cadvisor#quick-start-running-cadvisor-in-a-docker-container).

### Network flow

The Poller should be able to reach the cAdvisor Host over the TCP/8080 port. Note that the port 
may be different on your setup. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor containers with cAdvisor:

```bash
yum install centreon-plugin-Cloud-cAdvisor-Api
```

2. On the Centreon Web interface, install the *cAdvisor API* Plugin Pack through the `Configuration > Plugin Packs > Manager` page.

<!--Offline IMP License-->

1. Install the Centreon Plugin package on every Centreon Poller expected to monitor containers with cAdvisor:

```bash
yum install centreon-plugin-Cloud-cAdvisor-Api
```

2. Install the Centreon Plugin Pack RPM on the Centreon Central server:

```bash
yum install centreon-pack-cloud-cadvisor-api
```

3. On the Centreon Web interface, install the *cAdvisor API* Plugin Pack through the `Configuration > Plugin Packs > Manager` page.

<!--END_DOCUSAURUS_CODE_TABS-->

### Host configuration

Add a host from `Configuration > Hosts` menu and select the `Cloud-cAdvisor-API` template. 

Here is a quick description of available configuration Macros: 

|Mandatory | Macro                     | Description                                       | Default value                    |
|----------|---------------------------|---------------------------------------------------|----------------------------------|
|    x     | `CADVISORAPIPROTO`        | Protocol used to talk with cAdvisor API           | `http`                           |
|    x     | `CADVISORAPIPORT`         | Network port cAdvisor API listens over            | `8080`                           |
|    x     | `CADVISORAPIPATH`         | API Path to container metrics information         | `/containers/docker/`            |
|          | `CADVISORAPIEXTRAOPTIONS` | Extraoptions you may want to add to your command  | `--http-backend=curl --insecure` |
|          | `PROXYURL`                | URL of a proxy to use to reach cAdvisor API       |                                  | 

Click on the **Save** button and you're good to push the configuration to
the Engines.

## How to test my plugin and what do the main parameters stand for?

Once the plugin is installed, you can test it by logging into the CLI with the centreon-engine user.

```bash
/usr/lib/centreon/plugins//centreon_cadvisor_api.pl \
    --plugin=cloud::cadvisor::restapi::plugin --mode=traffic \
    --hostname=10.1.1.136 --port='8080' --proto='http' \
    --api-path='/containers/docker/' --http-backend=curl --insecure \
    --container-id='' --container-name='' --filter-name='^gray$' \
    --warning-traffic-in='' --critical-traffic-in='' \
    --warning-traffic-out='' --critical-traffic-out='' \
    --verbose --use-name
```

Expected output is shown below: 

```bash
OK: Container 'gray.eth0' Traffic In: 43.99 b/s, Traffic Out: 39.92 b/s | 'gray.eth0#container.traffic.in.bitspersecond'=43.99b/s;;;0; 'gray.eth0#container.traffic.out.bitspersecond'=39.92b/s;;;0;
Container 'gray.eth0' Traffic In: 43.99 b/s, Traffic Out: 39.92 b/s
```

The command above checks the incoming and outgoing traffic for a container (`--plugin=cloud::cadvisor::restapi::plugin --mode=traffic`).
The focus is on the gray (`--filter-name='^gray$'`) container and we use this name as the perfdata instance `--use-name`. 

All available options for a given mode can be displayed by adding the `--help` parameter to the command:

```bash
/usr/lib/centreon/plugins//centreon_cadvisor_api.pl \
    --plugin=cloud::cadvisor::restapi::plugin --mode=traffic \
    --help
```

## Troubleshooting

### UNKNOWN: curl perform error : Timeout was reached

When this error occurs, check that you can reach the cAdvisor over the 8080/HTTP port. 

You can use the `--debug` flag to obtain additionnal information about the reason of the failure.

If a proxy is required, add its URL within the PROXYURL Macro at the Host level.

### UNKNOWN: No containers found or no data available for this specific metric.

This error means that no data is available for this specific or that the container name used in 
the filter might be mispelled (this can't happen if you use the service discoveru feature). 
