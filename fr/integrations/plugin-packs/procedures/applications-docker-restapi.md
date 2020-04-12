---
id: applications-docker-restapi
title: Docker
---

## Vue d'ensemble

Docker permet d'embarquer une application dans un ou plusieurs containers logiciels qui pourra s'exécuter sur n'importe quel système d'exploitation hôte. Docker fonctionne sous Linux comme Windows Server. C'est une technologie qui a pour but de faciliter les déploiements d'application, et la gestion du dimensionnement de l'infrastructure sous-jacente.

## Contenu du pack de supervision

### Objets supervisés

* Nodes
* Containers

## Métriques collectées                                                                                                   

Plus d'informations sur les métriques remontées sont consultables sur la documentation officiel de l'api Rest Docker: https://docs.docker.com/engine/api/v1.30/


<!--DOCUSAURUS_CODE_TABS-->
<!--Container-Usage-->

| Metric name     | Description                                                                                  |
| :-------------- | :------------------------------------------------------------------------------------------- |
| Name            | Name of the container. Units: text                                                           |
| State_name      | Real state of Container. Units: text                                                         |
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

## Prérequis

* Le plugin nécessite une version de l'API Docker >= 1.21 (https://docs.docker.com/engine/api/v1.30/).

### Connection à l'api rest de Docker

Ouvrez votre terminal ssh préféré : 
* vi /lib/systemd/system/docker.service
* Trouver la ligne qui commence par Execstart et modifier les options suivantes : 

```bash 
Execstart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H=tcp://0.0.0.0:2375
```

* Enregistrer les modifications
* Recharger les services du système : systemctl daemon-reload
* Redémarrer Docker : système Docker restart
 
## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources Docker:

```bash
yum install centreon-plugin-Applications-Docker-Restapi
```

2. Installer le pack depuis la page "Configuration > Plugin packs > Manager":


<!--Offline IMP License-->
1. Installer le code du connecteur sur l'ensemble des collecteurs supervisant des ressources Docker:

```bash
yum install centreon-plugin-Applications-Docker-Restapi
```

2. Installer le RPM contenant les modèles de supervision

```bash
yum install centreon-pack-applications-docker-restapi
```

3. Installer le pack depuis l'interface Web via la page "Configuration > Plugin packs > Manager":

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Choisissez le modèle d'hôte correspondant aux nodes ou containers "App-Docker-Restapi-custom". Une fois le modèle d'hôte appliqué, il est possible de définir l'ensemble des macros nécessaires au fonctionnement des contrôles:

| Obligatoire | Nom                     | Description                                                                                 |
| :---------- | :---------------------- | :------------------------------------------------------------------------------------------ |
| X           | DOCKERENGINEPORT        | Engine port application for monitoring containers api usages                                |
|             | DOCKERENGINEEXTRAOPTIONS| Extra options for monitoring containers api usages                                          |

## FAQ

#### Je supervise mes nodes et containers Docker, les temps de contrôle sont anormalement longs, est-ce normal ?

L’api webservice 'container stats' est relativement lente (entre 1s et 2s), les temps de réponse peuvent donc être un peu long.

#### Comment tester en ligne de commande et quelles significations portent les options principales ?

A partir du moment ou la sonde est installée, vous pouvez tester directement depuis votre poller de supervision avec l'utilisateur centreon-engine:

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

La commande ci-dessus requête un noeud Docker (```--mode=node-status```) sur le port 2375 (```--port='2375'```) et fournit son état (Ready ou pas) ainsi que l'état de ses containers en état "running","stopped" et "paused".

Une alerte CRITICAL sera déclenchée si l'état du noeud n'est pas 'ready' ou que le statut du manager renvoie un autre état que 'reachable' (```--critical-node-status='%{status} !~ /ready/ || %{manager_status} !~ /reachable|-/'```)