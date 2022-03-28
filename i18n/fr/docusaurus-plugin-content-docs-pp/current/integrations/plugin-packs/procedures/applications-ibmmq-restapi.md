---
id: applications-ibmmq-restapi
title: IBM MQ Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Objets supervisés

Le Pack IBM MQ collecte les données pour:
* Queue-managers
* Queues

### Règles de découvertes

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Nom de la règle                      | Description                                              |
| :----------------------------------- | :------------------------------------------------------- |
| App-Ibmmq-Restapi-Queue-Manager-Name | Découvre les queue manager et supervise les statistiques |
| App-Ibmmq-Restapi-Queue-Name         | Découvre les queues et supervise les statistiques        |

</TabItem>
</Tabs>

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Queue-managers" label="Queue-managers">

| Metric name                                           | Description                   | Unit  |
| :---------------------------------------------------- | :---------------------------- | :---- |
| queue manager status                                  | Queue manager status          |       |
| *queue\_manager_name*\#queuemanager.connections.count | Current number of connections |       |

</TabItem>
<TabItem value="Queues" label="Queues">

| Metric name                                                        | Description               | Unit  |
| :----------------------------------------------------------------- | :------------------------ | :---- |
| *queue\_manager_name*~*queue\_name*\#queue.connections.input.count | Current input connections |       |
| *queue\_manager_name*~*queue\_name*\#queue.messages.depth.count    | Current messages depth    |       |
| *queue\_manager_name*~*queue\_name*\#queue.message.oldest.seconds  | Oldest message            | s     |

</TabItem>
</Tabs>

## Prérequis

Afin de contrôler votre application IBM MQ, l'API Rest doit être configurée (cf: https://www.ibm.com/docs/en/ibm-mq/9.0?topic=api-getting-started-administrative-rest).

Le Pack supporte uniquement une authentification basique.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Ibmmq-Restapi
```

2. Sur l'interface Web de Centreon, installer le Pack *IBM MQ Rest API* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Ibmmq-Restapi
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-applications-ibmmq-restapi
```

3. Sur l'interface Web de Centreon, installer le Pack *IBM MQ Rest API* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

Ce Pack est conçu de manière à avoir dans Centreon un hôte par IBM MQ Administrative serveur.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Ibmmq-Restapi-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name                 | Description                                                                |
| :-------- | :------------------- | :------------------------------------------------------------------------- |
| X         | IBMMQAPIPORT         | Port used (Default: 9443)                                                  |
| X         | IBMMQAPIPROTO        | Specify https if needed (Default: 'https')                                 |
| X         | IBMMQAPIURLPATH      | Specify api prefix (Default: '/ibmmq/rest/v1/admin')                       |
| X         | IBMMQAPIUSERNAME     | Api username                                                               |
| X         | IBMMQAPIPASSWORD     | Api password                                                               |
|           | IBMMQAPIEXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_ibmmq_restapi.pl \
    --plugin=apps::mq::ibmmq::restapi::plugin \
    --mode=queue-managers \
    --hostname='10.30.2.79' \
    --port='9443' \
    --proto='https' \
    --url-path='/ibmmq/rest/v1/admin' \
    --api-username='myapiusername' \
    --api-password='myapipassword' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Queue manager 'MQPRD' status: running [channel initiator: running], current number of connections: 43 | 'MQPRD#queuemanager.connections.count'=43;;;0;
```

Cette commande contrôle les queue managers (```--mode=queue-managers```).

La commande utilise l'api-username (```--api-username='myapiusername'```), l'api-password (```--api-password='myapipassword'```)
et elle se connecte à l'hôte _10.30.2.79_ (```--hostname='10.30.2.79'```) sur le port _9443_ (```--port='9443'```) utilisant le protocol _https_ (```--proto='https'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peuvent être affichés
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ibmmq_restapi.pl \
    --plugin=apps::mq::ibmmq::restapi::plugin \
    --mode=queue-managers \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins.md#http-and-api-checks)

