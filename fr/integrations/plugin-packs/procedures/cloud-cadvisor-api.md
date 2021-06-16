---
id: cloud-cadvisor-api
title: cAdvisor API
---

## Overview

cAdvisor (Container Advisor) permet aux utilisateurs d'observer l'utilisation des ressources 
et les performances de leurs conteneurs en cours d'exécution.

C'est un démon qui collecte et agrège de multiples informations à propos des conteneurs. 

Ce Pack vise à superviser les métriques exposées au travers de l'API de cAdvisor.

## Contenu du Pack

## Objets supervisés 

Ce Pack comprend un Modèle d'Hôte et plusieurs Modèles de Services permettant d'observer le statut 
d'un noeud et les performances de conteneurs s'y exécutant. Les Services suivants sont disponibles:
  * Container-Usage
  * Container-Disk-IO
  * Container-Traffic
  * Node-Status

### Règles de découverte

Le Pack cAdvisor API propose différentes règles de découverte de Service.

Pour superviser les métriques des conteneurs, il est nécessaire d'utiliser la fonctionnalité de 
découverte de Service de Centreon. Voici un résumé des règles disponibles: 

| Rule                                    | Description                                            |
|-----------------------------------------|--------------------------------------------------------|
| Cloud-cAdvisor-API-Container-Disk-IO    | Discover containers and monitor Disk-IO metrics        |
| Cloud-cAdvisor-API-Container-Usage      | Discover containers and monitor CPU & RAM consumption  |
| Cloud-cAdvisor-API-Container-Traffic    | Discover containers and monitor bandwidth utilization  |

### Métriques collectées

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
| <container_name_or_id:device>#disk.io.read.bytespersecond     | Disk I/O Read from the container |  B/s   |
| <container_name_or_id:device>#disk.io.write.bytespersecond    | Disk I/O Read from the container |  B/s   |

By default, the --use-name flag will instance the metric with the <container_name>. 
If you want to use the <container_id> instead, remove it from the EXTRAOPTIONS macro at the Service Template level.

<!--Container-Traffic-->

| Metric name                                                            | Description                      | Unit   |
| :----------------------------------------------------------------------| :------------------------------- | :----- |
| <container_name_or_id.network_int>#container.traffic.in.bitspersecond  | Container incoming traffic       |  bps   |
| <container_name_or_id.network_int>#container.traffic.out.bitspersecond | Container outgoing traffic       |  bps   |

By default, the --use-name flag will instance the metric with the <container_name>. 
If you want to use the <container_id> instead, remove it from the EXTRAOPTIONS macro at the Service Template level.

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### cAdvisor

Un conteneur ou un démon cAdvisor doit être en cours d'exécution et disponible. La 
documentation officielle permet de [déployer le nécessaire rapidement](https://github.com/google/cadvisor#quick-start-running-cadvisor-in-a-docker-container).

### Flux réseaux

Le Collecteur doit être en mesure de contacter le serveur hébergeant cAdvisor au travers 
du port TCP/8080. Attention, selon la configuration le port peut être différent. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon allant superviser des containers via cAdvisor:

```bash
yum install centreon-plugin-Cloud-cAdvisor-Api
```

2. Dans l'interface de Centreon, installer le Plugin Pack *cAdvisor API* depuis la page `Configuration > Plugin Packs > Manager`

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon devant superviser des containers via cAdvisor:

```bash
yum install centreon-plugin-Cloud-cAdvisor-Api
```

2. Installer le Plugin sur chaque Collecteur allant superviser des containers via cAdvisor:

```bash
yum install centreon-pack-cloud-cadvisor-api
```

3. Dans l'interface de Centreon, installer le Plugin Pack *cAdvisor API* depuis la page "Configuration > Plugin Packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

### Host configuration

Ajouter un Hôte depuis le menu `Configuration > Hosts` et selectionner le Modèle `Cloud-cAdvisor-API`.

Voici une description rapide des Macros de configuration disponibles : 

| Mandatory | Macro                     | Description                                            | Default value                    |
|-----------|---------------------------|--------------------------------------------------------|----------------------------------|
|     x     | `CADVISORAPIPROTO`        | Protocole utilisé pour communiquer avec l'API cAdvisor | `http`                           |
|     x     | `CADVISORAPIPORT`         | Port d'écoute de l'API cAdvisor                        | `8080`                           |
|     x     | `CADVISORAPIPATH`         | Chemin pour accèder à la page contenant les métriques  | `/containers/docker/`            |
|           | `CADVISORAPIEXTRAOPTIONS` | Options additionnelles pour customiser les commandes   | `--http-backend=curl --insecure` |
|           | `PROXYURL`                | L'URL du proxy à utiliser pour atteindre l'API         |                                  | 

Cliquer sur **Save**, vous pouvez désormais déployer votre configuration vers les Collecteurs. 

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis 
votre collecteur Centreon en vous connectant avec l'utilisateur centreon-engine:

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

La commande devrait retourner un message de sortie similaire à:

```bash
OK: Container 'gray.eth0' Traffic In: 43.99 b/s, Traffic Out: 39.92 b/s | 'gray.eth0#container.traffic.in.bitspersecond'=43.99b/s;;;0; 'gray.eth0#container.traffic.out.bitspersecond'=39.92b/s;;;0;
Container 'gray.eth0' Traffic In: 43.99 b/s, Traffic Out: 39.92 b/s
```

Cette commande contrôle le traffic entrant et sortant d'un conteneur (`--plugin=cloud::cadvisor::restapi::plugin --mode=traffic`).
Le conteneur ciblé a le nom gray (`--filter-name='^gray$'`) et nous faisons en sorte d'utiliser son nom comme instance pour les 
graphiques de performances (`--use-name`). 

Toutes les options disponibles et leur signification peuvent être affichées via le paramètre `--help` :

```bash
/usr/lib/centreon/plugins//centreon_cadvisor_api.pl \
    --plugin=cloud::cadvisor::restapi::plugin --mode=traffic \
    --help
```

## Diagnostic des erreurs communes

### UNKNOWN: curl perform error : Timeout was reached

Quand cette erreur est affichée, cela signifie qu'il n'a pas été possible de rentrer en contact avec 
l'API cAdvisor.

L'utilisation du flag `--debug` permet d'afficher des détails utiles au diagnostic.

Si vous utilisez un proxy, assurez-vous de l'avoir renseigné dans la Macro PROXYURL de l'Hôte. 

### UNKNOWN: No containers found or no data available for this specific metric.

Cette erreur signifie qu'aucune donnée n'est disponible pour la métrique demandée ou que le nom du conteneur 
est erronné (faute de frappe, ou conteneur arrêté).
