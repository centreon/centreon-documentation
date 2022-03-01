---
id: hardware-storage-dell-powerstore-restapi
title: Dell PowerStore Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Objets supervisés

Le Pack Dell PowerStore collecte les données pour:
* Alerts
* Hardware

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Metric name                    | Description                                | Unit  |
| :----------------------------- | :----------------------------------------- | :---- |
| alerts.severity.none.count     | Number of alerts with none severity        |       |
| alerts.severity.info.count     | Number of alerts with information severity |       |
| alerts.severity.minor.count    | Number of alerts with minor severity       |       |
| alerts.severity.major.count    | Number of alerts with major severity       |       |
| alerts.severity.critical.count | Number of alerts with critical severity    |       |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name         | Description                  | Unit  |
| :------------------ | :--------------------------- | :---- |
| appliance status    | Appliance lifecycle state    |       |
| battery status      | Battery lifecycle state      |       |
| dimm status         | DIMM lifecycle state         |       |
| disk status         | Disk lifecycle state         |       |
| enclosure status    | Enclosure lifecycle state    |       |
| fan status          | Fan lifecycle state          |       |
| node status         | Node lifecycle state         |       |
| io module status    | IO module lifecycle state    |       |
| power supply status | Power supply lifecycle state |       |
| sfp status          | SFP lifecycle state          |       |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre équipement Dell PowerStore, l'API Rest doit être configurée (cf: https://downloads.dell.com/manuals/common/pwrstr-apig_en-us.pdf).

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

2. Sur l'interface Web de Centreon, installer le Pack *Dell PowerStore Rest API* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-hardware-storage-dell-powerstore-restapi
```

3. Sur l'interface Web de Centreon, installer le Pack *Dell PowerStore Rest API* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

Ce Pack est conçu de manière à avoir dans Centreon un hôte par équipement Dell PowerStore.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *HW-Storage-Dell-Powerstore-Restapi-custom*. 
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
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
    --plugin=storage::dell::powerstore::restapi::plugin \
    --mode=alerts \
    --hostname='10.30.2.79' \
    --port='443' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
CRITICAL: 1 alerts detected | 'alerts.severity.none.count'=0;;;0; 'alerts.severity.info.count'=1;;;0; 'alerts.severity.minor.count'=0;;;0; 'alerts.severity.major.count'=1;;;0; 'alerts.severity.critical.count'=0;;;0; 'alerts.problems.current.count'=1;;;0;
critical: alert [severity: major] [name: XMS_JBOD_CONTROLLER_SAS1_HEALTH_LEVEL_LEVEL_1_CLEAR] [resource: ] 2021-09-08T08:13:14.804936+00:00
```

Cette commande contrôle les alertes (```--mode=alerts```).

La commande utilise l'api-username (```--api-username='myapiusername'```), l'api-password (```--api-password='myapipassword'```)
et elle se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _443_ (```--port='443'```) utilisant le protocol _https_ (```--proto='https'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peuvent être affichés
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
    --plugin=storage::dell::powerstore::restapi::plugin \
    --mode=alerts \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins#http-and-api-checks)
