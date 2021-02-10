---
id: cloud-gcp-compute-computeengine
title: Google Compute Engine
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack Google Compute Engine collecte les données pour:
* Cpu
* Diskio
* Network

### Métriques collectées

Pour l'ensemble des métriques collectées, il est possible de choisir *aggregation*: _average_, _minimum_, _maximum_ et _total.

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                                                            | Description                                          | Unit  |
| :--------------------------------------------------------------------- | :--------------------------------------------------- | :---- |
| *instance_name*~*aggregation*#computeengine.cpu.utilization.percentage | Utilization of allocated CPU                         | %     |
| *instance_name*~*aggregation*#computeengine.cpu.reserved_cores.count   | Number of vCPUs reserved on the host of the instance |       |

<!--Diskio-->

| Metric name                                                                            | Description                                              | Unit  |
| :------------------------------------------------------------------------------------- | :------------------------------------------------------- | :---- |
| *instance_name*~*aggregation*#computeengine.disk.read.volume.bytes                     | Count of bytes read from disk                            | B     |
| *instance_name*~*aggregation*#computeengine.disk.read.volume.bytespersecond            | Count of bytes read per seconds from disk                | B/s   |
| *instance_name*~*aggregation*#computeengine.disk.throttled.read.volume.bytes           | Count of bytes in throttled read operations              | B     |
| *instance_name*~*aggregation*#computeengine.disk.throttled.read.volume.bytespersecond  | Count of bytes per seconds in throttled read operations  | B/s   |
| *instance_name*~*aggregation*#computeengine.disk.write.volume.bytes                    | Count of bytes write from disk                           | B     |
| *instance_name*~*aggregation*#computeengine.disk.write.volume.bytespersecond           | Count of bytes write per seconds from disk               | B/s   |
| *instance_name*~*aggregation*#computeengine.disk.throttled.write.volume.bytes          | Count of bytes in throttled write operations             | B     |
| *instance_name*~*aggregation*#computeengine.disk.throttled.write.volume.bytespersecond | Count of bytes per seconds in throttled write operations | B/s   |
| *instance_name*~*aggregation*#computeengine.disk.read.ops.count                        | Count of data disk read IO operations                    |       |
| *instance_name*~*aggregation*#computeengine.disk.read.ops.persecond                    | Count of data disk read IOPs operations                  |       |
| *instance_name*~*aggregation*#computeengine.disk.write.ops.persecond                   | Count of data disk write IO operations                   |       |
| *instance_name*~*aggregation*#computeengine.disk.write.ops.persecond                   | Count of data disk write IOPs operations                 |       |

<!--Network-->

| Metric name                                                                        | Description                                            | Unit  |
| :--------------------------------------------------------------------------------- | :----------------------------------------------------- | :---- |
| *instance_name*~*aggregation*#computeengine.network.received.volume.bytes          | Count of bytes received from the network               | B     |
| *instance_name*~*aggregation*#computeengine.network.received.volume.bytespersecond | Count of bytes received per seconds from the network   | B/s   |
| *instance_name*~*aggregation*#computeengine.network.sent.volume.bytes              | Count of bytes sent over the network                   | B     |
| *instance_name*~*aggregation*#computeengine.network.sent.volume.bytespersecond     | Count of bytes sent per seconds over the network       | B/s   |
| *instance_name*~*aggregation*#computeengine.network.received.packets.count         | Count of packets received from the network             |       |
| *instance_name*~*aggregation*#computeengine.network.received.packets.persecond     | Count of packets received per seconds from the network |       |
| *instance_name*~*aggregation*#computeengine.network.sent.packets.count             | Count of packets sent over the network                 |       |
| *instance_name*~*aggregation*#computeengine.network.sent.packets.persecond         | Count of packets sent per seconds over the network     |       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges Google Cloud

Créer une *clé de compte de service* (télécharger sa clé privée sous la forme d'un fichier JSON) avec les privilèges suivants:

| Google Scope                                     | Description                                                     |
| :----------------------------------------------- | :-------------------------------------------------------------- |
| https://www.googleapis.com/auth/cloud-platform   | View and manage your data across Google Cloud Platform services |

Comment créer une clé de compte de service: https://developers.google.com/identity/protocols/oauth2/service-account

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Cloud-Gcp-Compute-ComputeEngine-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Google Compute Engine* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Cloud-Gcp-Compute-ComputeEngine-Api
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-cloud-gcp-compute-computeengine
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Google Compute Engine* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par instance Google Compute Engine.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *Cloud-Gcp-Compute-ComputeEngine-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory   | Name                 | Description                                                                                 |
| :---------- | :------------------- | :------------------------------------------------------------------------------------------ |
| X           | GCPKEYFILEPATH       | Service account key json file                                                               |
| X           | GCPSCOPEENDPOINT     | Google Scope. Default: https://www.googleapis.com/auth/cloud-platform                       |
| X           | GCPDIMENSIONNAME     | The name of the dimension to filter on. Default: resource.labels.instance_id                |
| X           | GCPDIMENSIONOPERATOR | Define the type of filter match to use. Default: equals                                     |
| X           | GCPDIMENSIONVALUE    | ID of the instance you want to monitor.                                                     |
|             | PROXYURL             | Configure proxy URL                                                                         |
|             | GCPEXTRAOPTIONS      | Any extra option you may want to add to every command_line (eg. a --verbose flag)           |
|             | DUMMYSTATUS          | Host state. Default is OK, do not modify it until you know what you are doing               |
|             | DUMMYOUTPUT          | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

> **WARNING**: La clé de service (format json) doit être hébergée sur le collecteur Centreon. L'utilisateur *centreon-engine* doit avoir les droits en lecture sur ce fichier.

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_gcp_compute_computeengine_api.pl \
    --plugin=cloud::google::gcp::compute::computeengine::plugin \
    --mode=cpu \
    --key-file=/var/lib/centreon-engine/centreon-dev-6e5531fc9e82.json \
    --dimension-name='metric.labels.instance_name' \
    --dimension-operator='equals' \
    --dimension-value='instance-centreon1-drb5' \
    --aggregation='average' \
    --warning-utilization='90' \
    --critical-utilization='95' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Instance 'instance-centreon1-drb5' aggregation 'average' metrics cpu utilization: 1.04 %, cpu reserved cores: 0.20 | 'instance-centreon1-drb5~average#computeengine.cpu.utilization.percentage'=1.04%;0:90;0:95;0;100 'instance-centreon1-drb5~average#computeengine.cpu.reserved_cores.count'=0.20;;;;
Checking 'instance-centreon1-drb5'aggregation 'average' metrics cpu utilization: 1.04 %, cpu reserved cores: 0.20
```

Cette commande contrôle l'utilisation processeur (```--mode=cpu```) d'une instance Google Compute Engine 
ayant pour nom *instance-centreon1-drb5* (```--dimension-name='metric.labels.instance_name' --dimension-operator='equals' --dimension-value='instance-centreon1-drb5'```).

Cette commande déclenchera une alarme WARNING si l'utilisation processeur est supérieur à 90% (```--warning-utilization='90'```)
et une alarme CRITICAL si supérieur à 95% (```--critical-utilization='95'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_gcp_compute_computeengine_api.pl \
    --plugin=cloud::google::gcp::compute::computeengine::plugin \
    --mode=cpu \
    --help
```


### J'obtiens le message d'erreur suivant:  ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'il n'y a pas de données sur la période.

Vous pouvez ajouter ```--zeroed``` à la macro EXTRAOPTIONS du **service** en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.

