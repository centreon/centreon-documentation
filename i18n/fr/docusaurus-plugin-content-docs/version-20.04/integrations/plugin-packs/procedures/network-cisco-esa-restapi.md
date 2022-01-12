---
id: network-cisco-esa-restapi
title: Cisco ESA Rest API
---

## Contenu du Pack

### Objets supervisés

Le Pack Cisco ESA collecte les données pour:
* System

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--System-->

| Metric name                                    | Description                      | Unit  |
| :--------------------------------------------- | :------------------------------- | :---- |
| system.cpu.utilization.percentage              | Cpu utilization                  | %     |
| system.memory.usage.percentage                 | Memory usage                     | %     |
| system.swap.usage.percentage                   | Swap usage                       | %     |
| system.resource.conservation.current.count     | Current resource conservation    |       |
| system.queue.messages.quarantine.current.count | Number of messages in quarantine |       |
| system.queue.messages.workqueue.current.count  | Number of messages in workqueue  |       |
| system.queue.utilization.percentage            | Queue utilization                |       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Cisco ESA, l'API Rest doit être configurée (cf: https://www.cisco.com/c/en/us/support/security/email-security-appliance/products-programming-reference-guides-list).

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Cisco-Esa-Restapi
```

2. Sur l'interface Web de Centreon, installer le Pack *Cisco ESA Rest API* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Cisco-Esa-Restapi
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-network-cisco-esa-restapi
```

3. Sur l'interface Web de Centreon, installer le Pack *Cisco ESA Rest API* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Pack est conçu de manière à avoir dans Centreon un hôte par équipement Cisco ESA.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *Net-Cisco-Esa-Restapi-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 443)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIUSERNAME     | Api username                                                               |
| X         | APIPASSWORD     | Api password                                                               |
|           | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_cisco_esa_restapi.pl \
    --plugin=network::cisco::esa::restapi::plugin \
    --mode=system \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --warning-cpu-utilization='90' \
    --critical-cpu-utilization='95' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: System is ok | 'system.cpu.utilization.percentage'=78%;0:90;0:95;0;100 'system.memory.usage.percentage'=5.00%;;;0;100 'system.swap.usage.percentage'=0.00%;;;0;100 'system.resource.conservation.current.count'=0;;;0; 'system.queue.messages.quarantine.current.count'=1;;;0; 'system.queue.messages.workqueue.current.count'=0;;;0; 'system.queue.utilization.percentage'=0.092%;;;0;100
checking system
    cpu utilization: 78.00%
    memory usage: 5.00 %, swap usage: 0.00 %
    current resource conservation: 0
    messages in quarantine: 1, workqueue: 0
    queue utilization: 0.09%
```

Cette commande contrôle les système (```--mode=system```).

La commande utilise l'api-username (```--api-username='myapiusername'```), l'api-password (```--api-password='myapipassword'```)
et elle se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _443_ (```--port='443'```) utilisant le protocol _https_ (```--proto='https'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peuvent être affichés
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_cisco_esa_restapi.pl \
    --plugin=network::cisco::esa::restapi::plugin \
    --mode=system \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins#http-and-api-checks)
