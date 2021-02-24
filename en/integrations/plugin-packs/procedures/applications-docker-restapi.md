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

More information about gathered metrics can be found into Docker official API documentation : https://docs.docker.com/engine/api/v1.30/

<!--DOCUSAURUS_CODE_TABS-->
<!--Container-Usage-->

| Metric name     | Description                                                                                  |
| :-------------- | :------------------------------------------------------------------------------------------- |
| Name            | Name of the container.                                                                       |
| State_name      | Real state of the container.                                                                 |
| read_io         | The average number of read bytes from disk per second. Unit: Bytes/Second                    |
| Write_io        | The average number of written bytes on disk per second. Unit: Bytes/Second                   |
| Cpu_total_usage | The percentage of CPU usage. Unit: Percent                                                   |
| Cpu_system_usage| The average amount of time taken per disk I/O write operation. Unit: Seconds                 |
| Memory_usage    | The percentage of memory usage. Units: Percent & Bytes                                       |
| Traffic_in      | The percentage of inbound traffic usage. Units: Percent & Bytes/Second                       |
| Traffic_out     | The percentage of outbound traffic usage. Units: Percent & Bytes/Second                      |

<!--Nodes-Status-->

| Metric name        | Description                                                                                             |
| :----------------- | :------------------------------------------------------------------------------------------------------ |
| Node-status        | The status of node. Unit: text                                                                          |
| Containers-running | The number of running containers. Unit: counter                                                         |
| Containers-stopped | The number of stopped containers. Unit: counter                                                         |
| Containers_paused  | The Number of paused containers. Unit: counter                                                          |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prerequisites

* This monitoring plugin requires at least a Docker API version >= 1.21 (https://docs.docker.com/engine/api/v1.30/).

### API connection

Open your favorite ssh client and configure your API to allow connections from the outside: 
* vi /lib/systemd/system/docker.service
* Modify the line starting with ExecStart as shown below: 

```bash 
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H=tcp://0.0.0.0:2375
```

* Save the changes
* Apply the changes made at the systemd level : ```systemctl daemon-reload```
* Restart the Docker engine: ```systemctl restart docker``` 
 
## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Install the plugin on every poller expected to monitor Docker resources:

```bash
yum install centreon-plugin-Applications-Docker-Restapi
```

2. Install the "Docker-Restapi" Centreon Plugin-Pack from the "Configuration > Plugin packs > Manager" page

<!--Offline IMP License-->

1. Install the plugin on every poller expected to monitor Docker resources:

```bash
yum install centreon-plugin-Applications-Docker-Restapi
```

2. Install the Centreon Plugin-Pack RPM on your central server:

```bash
yum install centreon-pack-applications-docker-restapi
```

3. Install the "Docker-Restapi" Centreon Plugin-Pack from the "Configuration > Plugin packs > Manager" page

<!--END_DOCUSAURUS_CODE_TABS-->

## Host Configuration

Apply the "App-Docker-Restapi-custom" template to your newly created host. Then fill the macros value fileds marked as mandatory below: 

| Mandatory   | Name                    | Description                                                                                 |
| :---------- | :---------------------- | :------------------------------------------------------------------------------------------ |
| X           | DOCKERENGINEPORT        | Docker API TCP port to use to query the Docker engine                                       |
|             | DOCKERENGINEEXTRAOPTIONS| Docker API engine extra options                                                             |

## FAQ

#### Why are some of my checks are very slow ?

The container stats endpoint can be pretty slow to return a result (between 1 and 2 second), so it's considered as normal that the container-stats check may take some time. 

#### How can I test my plugin through the CLI and what does the main command_line parameters mean ?

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

A CRITICAL alert is triggered if your node is not considered as ready or the manager cannot be reached (```--critical-node-status='%{status} !~ /ready/ || %{manager_status} !~ /reachable|-/'```)
