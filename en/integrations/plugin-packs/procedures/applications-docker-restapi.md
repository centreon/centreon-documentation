---
id: applications-docker-restapi
title: Docker
---

## Overview

Docker is a set of platform as a service (PaaS) products that uses OS-level virtualization to deliver software in packages called containers. Containers are isolated from one another and bundle their own software, libraries and configuration files; they can communicate with each other through well-defined channels. All containers are run by a single operating system kernel and therefore use fewer resources than virtual machines.

The service has both free and premium tiers. The software that hosts the containers is called Docker Engine.[8] It was first started in 2013 and is developed by Docker, Inc.

## Plugin-pack assets

### Monitored objects

* Nodes
* Containers

## Monitored metrics                                                                                                   

More informations about gathered metrics can be found into Docker official API documentation : https://docs.docker.com/engine/api/v1.30/

<!--DOCUSAURUS_CODE_TABS-->
<!--Container-Usage-->

| Metric name     | Description                                                                                  |
| :-------------- | :------------------------------------------------------------------------------------------- |
| Name            | Name of the container.                                                                       |
| State_name      | Real state of Container.                                                                     |
| read_io         | The average number of bytes read from disk per second. Units: Bytes/Second                   |
| Write_io        | The average number of bytes write from disk per second. Units: Bytes/Second Units: Bytes/s   |
| Cpu_total_usage | The percentage of CPU utilization. Units: Percent                                            |
| Cpu_system_usage| The average amount of time taken per disk I/O write operation. Units: Seconds                |
| Memory_usage    | The percentage of Memory utilization. Units: Percent & Bytes                                 |
| Traffic_in      | The percentage of Inbound Traffic utilization. Units: Percent & Bytes/s                      |
| Traffic_out     | The percentage of Outbound Traffic utilization. Units: Percent & Bytes/s                     |

<!--Nodes-Status-->

| Metric name        | Description                                                                                             |
| :----------------- | :------------------------------------------------------------------------------------------------------ |
| Node-status        | The status of node. Units: text                                                                         |
| Containers-running | The number of Contaniers system running. Units: counter                                                 |
| Containers-stopped | The number of Contaniers system stopped. Units: counter                                                 |
| Containers_paused  | The Number of Contaniers system paused. Units: counter                                                  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

* This monitoring plugin requires at least a Docker API version >= 1.21 (https://docs.docker.com/engine/api/v1.30/).

### API connection

Open your favorite ssh client and configure your API to allow connection to allow connections from the outside: 
* vi /lib/systemd/system/docker.service
* Modify the line starting with ExecStart as shown below: 

```bash 
Execstart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H=tcp://0.0.0.0:2375
```

* Save your modifications
* Apply the modification made at the systemd level : ```systemctl daemon-reload```
* Restart your docker engine: ```systemctl restart centengine``` 
 
## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the plugin on every poller monitoring docker resources:

```bash
yum install centreon-plugin-Applications-Docker-Restapi
```

2. Install packs "Docker-Restapi" from the "Configuration > Plugin packs > Manager" page:


<!--Offline IMP License-->

1. Install the plugin on every poller monitoring docker resources:

```bash
yum install centreon-plugin-Applications-Docker-Restapi
```

2. Install the RPM containing pack definition on your central server

```bash
yum install centreon-pack-applications-docker-restapi
```

3. Install pack "Docker-Restapi" from the "Configuration > Plugin packs > Manager" page:

<!--END_DOCUSAURUS_CODE_TABS-->

## Host Configuration

Apply the "App-Docker-Restapi-custom" template to your newly created host. Then, fill macros values marked as mandatory below: 

| Mandatory   | Name                    | Description                                                                                 |
| :---------- | :---------------------- | :------------------------------------------------------------------------------------------ |
| X           | DOCKERENGINEPORT        | Engine port application for monitoring containers api usages                                |
|             | DOCKERENGINEEXTRAOPTIONS| Extra options for monitoring containers api usages                                          |

## FAQ

#### Some of my checks are very slow, why ?

The container stats endpoint is prelly slow to give an answer (between 1 and 2 second), so it's normal that the container-stats check takes some time. 

#### How can I test my plugin through CLI and what does the main command_line parameters mean ?

Once you've installed your monitoring plugin, you can use the centreon-engine user to test it! 

```bash
/usr/lib/centreon/plugins//centreon_docker_restapi.pl \
--plugin=cloud::docker::restapi::plugin \
--mode=node-status \
--hostname='192.168.0.50' \
--port='2375'   \
--warning-node-status='' \
--critical-node-status='%{status} !~ /ready/ || %{manager_status} !~ /reachable|-/' \
--verbose

OK: Node '192.168.0.50' Containers Running : 7, Containers Stopped : 2, Containers Paused : 0 | 'containers_running'=7;;;0; 'containers_stopped'=2;;;0; 'containers_paused'=0;;;0;
Node '192.168.0.50' Containers Running : 7, Containers Stopped : 2, Containers Paused : 0
```

This command checks your docker engine node status (```--mode=node-status```) using tcp port 2375 (```--port='2375'```). It provides the overall status of the node and state of each container it manages.

A CRITICAL alert is triggered if your node is not considered as ready or the manager isn't reachable (```--critical-node-status='%{status} !~ /ready/ || %{manager_status} !~ /reachable|-/'```)