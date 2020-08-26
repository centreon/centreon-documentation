---
id: hardware-devices-polycom-dma-snmp
title: Polycom DMA SNMP
---

## Vue d'ensemble

Le Distributed Media Application (DMA) est une application logicielle réseau qui gère et distribue les appels sur les réseaux
de collaboration. Grâce à des algorithmes intelligents, DMA achemine les appels de façon dynamique sur l'ensemble du réseau
sécurisé en fonction de la priorité, du niveau de service, de la disponibilité des ressources et des pannes réseau, avec un
équilibrage de charge hautement efficace et une virtualisation des ressources de pont. 

Le Plugin-Pack Centreon utilise le protocole SNMP pour se connecter et récupérer informations et métriques relatives aux équipements
Polycom DMA.

## Contenu du Plugin-Pack

### Objets supervisés

* Appliances Polycom DMA
* Clusters Polycom DMA

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Alerts-->

| Metric name             | Description        | Unit  |
| :---------------------- | :----------------- | :---- |
| dma.alerts.total.count  | Number of alerts.  | Count |


<!--Conference-Manager-->

| Metric name                               | Description                                    | Unit   |
|:----------------------------------------- |:-----------------------------------------------|:-------|
| dma.conferences.active.count              | Number of active conference on the DMA         | Count  |
| dma.cluster.conferences.active.count      | Number of active conference on a cluster       | Count  |
| dma.cluster.participants.active.count     | Number of active participants on a cluster     | Count  |
| dma.cluster.local.database.users.count    | Number of local users in a cluster database    | Count  |
| dma.cluster.custom.conference.rooms.count | Number of custom user rooms in a cluster       | Count  |
| dma.cluster.video.port.usage.count        | Number of video ports used by a cluster        | Count  |
| dma.cluster.video.port.free.count         | Number of free video ports on a cluster        | Count  |
| dma.cluster.video.port.percentage         | Percentage of video port used by a cluster     | %      |
| dma.cluster.voice.port.usage.count        | Number of voice ports used by a cluster        | Count  |
| dma.cluster.voice.port.free.count         | Number of free voice ports on a cluster        | Count  |
| dma.cluster.voice.port.percentage         | Percentage of voice port used by a cluster     | %      |

Vous pouvez utiliser l'option `--filter-cluster` afin de restreindre le contrôle sur un cluster donné.


<!--Clusters-Usage-->

| Metric name                           | Description                                              | Unit  |
|:--------------------------------------|:---------------------------------------------------------|:------|
| dma.clusters.total.count              | Total number of DMA clusters                             | Count |
| dma.cluster.activecalls.count         | Current active calls per cluster                         | Count |
| dma.cluster.licenses.free.count       | Current free licenses sessions per cluster               | Count |
| dma.cluster.licenses.usage.percentage | Current percentage of licenses sessions used per cluster | %     |

Vous pouvez utiliser l'option `--filter-cluster` afin de restreindre le contrôle sur un cluster donné.

<!--Device-Registrations-->

| Metric name                                         | Description                                            | Unit  | 
| :-------------------------------------------------- | :----------------------------------------------------- |------ |
| dma.registrations.count                             | Number of devices registered on the DMA                | Count |
| dma.cluster.endpoint.registrations.active.count     | Number of endpoint active registrations on a cluster   | Count |
| dma.cluster.endpoint.registrations.inactive.count   | Number of endpoint inactive registrations on a cluster | Count |

Vous pouvez utiliser l'option `--filter-cluster` afin de restreindre le contrôle sur un cluster donné.

<!--Servers-usage-->

| Metric name                           | Description                               | Unit  |
|:------------------------------------- |:------------------------------------------|:----- |
| dma.server.cpu.utilization.percentage | CPU Utilization of a server               |   %   |
| dma.server.memory.usage.bytes         | Memory usage of a server                  |   B   |
| dma.server.memory.free.bytes          | Free memory on a server                   |   B   |
| dma.server.memory.usage.percentage    | Memory percentage use on a server         |   %   |
| dma.server.swap.usage.percentage      | Swap usage of a server                    |   B   | 
| dma.server.swap.free.bytes            | Free swap on a server                     |   B   |
| dma.server.swap.usage.percentage      | Swap percentage use on a server           |   %   |
| dma.server.disk.usage.bytes           | Disk space usage of a server              |   B   |
| dma.server.disk.free.bytes            | Free disk space on a server               |   B   |
| dma.server.disk.usage.percentage      | Disk percentage space usage on a server   |   %   |
| dma.server.logs.usage.bytes           | Logs space usage of a server              |   B   |
| dma.server.logs.free.bytes            | Free logs space on a server               |   B   |
| dma.server.logs.usage.percentage      | Logs percentage space usage on a server   |   %   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Configuration SNMP de l'équipement

La documentation officielle Polycom (en anglais, lien ci-dessous) détaille les étapes pour activer et configurer le service SNMP:
https://documents.polycom.com/bundle/dma-ops-9-0/page/dma-ops-help/snmp/TOC_Configure_SNMP_Settings.htm

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser des équipements Polycom DMA:

```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Dma-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Polycom DMA SNMP* 
depuis la page "Configuration > Plugin Packs > Gestionnaire" 

<!--Offline IMP License-->

1. Installer le Plugin sur chaque collecteur Centreon devant superviser des équipements Polycom DMA:

```bash
yum install centreon-plugin-Hardware-Devices-Polycom-Dma-Snmp
```

2. Installer le RPM du Plugin-Pack sur le serveur Centreon Central:

```bash
yum install centreon-pack-hardware-devices-polycom-dma-snmp
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Polycom DMA SNMP* 
depuis la page "Configuration > Plugin Packs > Gestionnaire"

## Configuration

* Ajoutez un nouvel Hôte depuis la page "Configuration > Hôtes"
* Complétez les champs *Communauté SNMP* et *Version SNMP*
* Appliquez le Modèle d'Hôte *HW-Device-Polycom-Dma-SNMP-Custom*

> Si vous utilisez la version 3 du protocole SNMP, utilisez la Macro *SNMPEXTRAOPTIONS* afin de renseigner les paramètres
> d'authentification et de chiffrement adéquats

| Mandatory   | Name                    | Description                       |
| :---------- | :---------------------- | :---------------------------------|
|             | SNMPEXTRAOPTIONS        | Extra options SNMP                |

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_polycom_dma_snmp.pl \
    --plugin=hardware::devices::polycom::dma::snmp::plugin \
    --mode=clusters \
    --hostname=10.0.0.1 \
    --snmp-version='2c'
    --snmp-community='mysnmpcommunity' \
    --critical-cluster-status='%{cluster_status} =~ /outOfService/i' \
    --critical-license-status='%{license_status} =~ /notinstalled/i' \
    --warning-cluster-license-usage-prct='80' \
    --critical-cluster-license-usage-prct='90' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Total clusters : 1 - Cluster 'my_dma_cluster_1' Active calls : 78, Free licenses : 722, Licenses percentage usage : 9.75% |
'dma.clusters.total.count'=1;;;0; 'my_dma_cluster_1#dma.cluster.activecalls.count'=78;;;;800 
'my_dma_cluster_1#dma.cluster.licenses.free.count'=722;;;0; 'my_dma_cluster_1#dma.cluster.licenses.usage.percentage'=9.75%;0:80;0:90;0;
Cluster 'my_dma_cluster_1' Active calls : 78, Free licenses : 722, Licenses percentage usage : 9.75%
```

Dans cet exemple, le Plugin récupère les informations concernant l'état du *Cluster* d'un noeud Polycom DMA (```--plugin=hardware::devices::polycom::dma::snmp::plugin --mode=clusters```)
identifié par l'adresse IP *10.0.0.1* (```--hostname=10.0.0.1```). Les paramètres de communauté et de version SNMP (```--snmp-version='2c' --snmp-community='mysnmpcommunity'```) 
correspondants sont renseignés afin de pouvoir joindre l'équipement.

Une alarme WARNING sera ainsi déclenchée si le nombre d'appels en cours au travers de la plateforme dépasse 80% du nombre total d'appels
autorisé par la licence (```--warning-cluster-license-usage-prct='80'```) et une alarme CRITICAL au delà de 90% (```--critical-cluster-license-usage-prct='90'```).

Cette commande déclenchera également une alarme CRITICAL dans les cas suivants:
* Si le noeud du *Cluster* remonte un état *Out of Service* (```--critical-cluster-status='%{cluster_status} =~ /outOfService/i'```)
* Si la licence présente sur le noeud du *Cluster* est invalide (```--critical-license-status='%{license_status} =~ /notinstalled/i'```)

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée 
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_polycom_dma_snmp.pl --plugin=hardware::devices::polycom::dma::snmp::plugin --mode=clusters --help
```

### Comment puis-je superviser les resources système tels que CPU, disques...?

Les équipements Polycom DMA sont basés sur des systèmes Linux. Il est ainsi possible de superviser les resources de la couche OS
en appliquant le Modèle d'Hôte *OS-Linux-Snmp-Custom* en complément du Modèle *HW-Device-Polycom-Dma-SNMP-Custom* décrit précédemment.

### J'obtiens le message d'erreur suivant:

#### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter l'équipement Polycom DMA sur le port UDP/161, 
ou que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un pare-feu bloque le flux.

#### UNKNOWN: SNMP GET Request : Cant get a single value.

Les causes de cette erreur peuvent être les suivantes: 
  * cet équipement ne supporte ou n'embarque pas la MIB utilisée par ce mode
  * les autorisations données à l'utilisateur en SNMP sont trop restreintes.
