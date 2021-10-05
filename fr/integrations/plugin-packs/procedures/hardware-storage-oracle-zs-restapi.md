---
id: hardware-storage-oracle-zs-restapi
title: Oracle ZS Rest API
---

## Contenu du Pack

### Objets supervisés

Le Pack Oracle ZS collecte les données pour:
* Hardware
* Pools

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Hardware-->

| Metric name         | Description        | Unit  |
| :------------------ | :----------------- | :---- |
| chassis status      | Chassis state      |       |
| cpu status          | CPU state          |       |
| disk status         | Disk state         |       |
| fan status          | Fan state          |       |
| memory status       | Memory state       |       |
| power supply status | Power supply state |       |
| slot status         | Slot state         |       |

<!--Pools-->

| Metric name                              | Description               | Unit  |
| :--------------------------------------- | :------------------------ | :---- |
| pool status                              | Pool status               |       |
| *pool\_name*#pool.space.usage.bytes      | Space usage               | B     |
| *pool\_name*#pool.space.free.bytes       | Free space                | B     |
| *pool\_name*#pool.space.usage.percentage | Space usage in percentage | %     |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de contrôler votre équipement Oracle ZS, l'API Rest doit être configuré (cf: https://docs.oracle.com/cd/E79446_01/html/E79460/index.html).

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Oracle-Zs-Restapi
```

2. Sur l'interface Web de Centreon, installer le Pack *Oracle ZS Rest API* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Storage-Oracle-Zs-Restapi
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-hardware-storage-oracle-zs-restapi
```

3. Sur l'interface Web de Centreon, installer le Pack *Oracle ZS Rest API* depuis la page **Configuration > Plugin Packs > Gestionnaire**

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Pack est conçu de manière à avoir dans Centreon un hôte par équipement Oracle ZS.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *HW-Storage-Oracle-Zs-Restapi-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | APIPORT         | Port used (Default: 215)                                                   |
| X         | APIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | APIUSERNAME     | Api username                                                               |
| X         | APIPASSWORD     | Api password                                                               |
|           | APIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_oracle_zs_restapi.pl \
    --plugin=storage::oracle::zs::restapi::plugin \
    --mode=pools \
    --hostname='10.30.2.79' \
    --port='215' \
    --proto='https' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: All pools are ok | 'Pool_Exalogic#pool.space.usage.bytes'=19730301416448B;;;0;33432025432064 'Pool_Exalogic#pool.space.free.bytes'=13176557201408B;;;0;33432025432064 'Pool_Exalogic#pool.space.usage.percentage'=59.02%;;;0;100
Pool 'Pool_Exadata' status : exported
Pool 'Pool_Exalogic' status : online, space usage total: 30.41 TB used: 17.94 TB (59.02%) free: 11.98 TB (39.41%)
```

Cette commande contrôle les alertes (```--mode=alerts```).

La commande utilise l'api-username (```--api-username='myapiusername'```), l'api-password (```--api-password='myapipassword'```)
et elle se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _215_ (```--port='215'```) utilisant le protocol _https_ (```--proto='https'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_oracle_zs_restapi.pl \
    --plugin=storage::oracle::zs::restapi::plugin \
    --mode=pools \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins.html)
