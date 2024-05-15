---
id: sc-canopsis-events
title: Canopsis Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le stream connector Canopsis Events vous permet d'envoyer des données d'évènements 
depuis Centreon vers Canopsis via leur API REST HTTP.

## Avant de commencer

- Dans la plupart des cas, vous enverrez les données depuis le serveur central. 
Il est également possible de les envoyer depuis un serveur distant ou un collecteur 
(par exemple si vous voulez éviter que le serveur central ne représente un point de 
défaillance unique, ou bien si vous êtes un MSP et vous installez le stream connector 
sur un collecteur ou un serveur distant dans l'infratructure de votre client).
- Par défaut, le stream connector Canopsis Events envoie des évènements Broker 
**[host_status](https://docs.centreon.com/fr/docs/developer/developer-broker-mapping/#host-status)**,
**[service_status](https://docs.centreon.com/fr/docs/developer/developer-broker-mapping/#service-status)**,
**[acknowledgement](https://docs.centreon.com/fr/docs/developer/developer-broker-mapping/#acknowledgement)**
et **[downtime](https://docs.centreon.com/fr/docs/developer/developer-broker-mapping/#downtime)**.
Ces formats d'événement sont décrits **[ici](#event-format)**.
- Ces évènements sont envoyés à chaque contrôle sur l'hôte ou le service. Des paramètres 
dédiés vous permettent de [ne pas envoyer certains évènements](#filtering-or-adapting-the-data-you-want-to-send-to-canopsis).

## Compatibilité

Ce stream connector est conçu pour être compatible avec l'API v.4 de Canopsis, ce qui inclut les versions suivantes de **Canopsis** : 22.10, 
23.04, 23.10 et 24.04.

## Installation

Faites l'installation sur le serveur qui enverra les données à Canopsis (serveur central, 
serveur distant, collecteur).

1. Connectez-vous en tant que `root` sur le serveur Centreon central en utilisant votre 
client SSH préféré. 
2. Exécutez la commande adaptée à votre système :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-canopsis
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-canopsis
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-canopsis
```

</TabItem>
</Tabs>

## Configuration de Canopsis 

Vous devrez paramétrer votre interface Canopsis pour qu'elle puisse recevoir des données 
de la part de Centreon. Reportez-vous au [guide d'utilisation Canopsis](https://doc.canopsis.net/guide-utilisation/)
, notamment vérifiez que les droits de création, lecture et suppression sont activés (voir la documentation d'
[administration des droits](https://doc.canopsis.net/guide-utilisation/menu-administration/droits/) et celle d'
[administration de la planification](https://doc.canopsis.net/guide-utilisation/menu-administration/planification/) 
dans le cas des plages de maintenance). 
Pour l'utilisateur associé à la clé d'authentification, il faut modifier la matrice de droits à la page **Administration > Droits**.
Vous devez avoir au minimum coché les cases indiquées dans le tableau suivant :

| Section                   | Sous-section                                   | Case minimales à cocher                         |
|---------------------------|------------------------------------------------|-------------------------------------------------|
| Général                   | Événement                                      | Cocher la seule case disponible                 |
| Comportements périodiques | Comportements périodiques                      | Cocher les cases create, read, update et delete |
| Comportements périodiques | Comportements périodiques : Dates d'exceptions | Cocher les cases create et read                 |
| Comportements périodiques | Comportements périodiques : Raisons            | Cocher les cases create et read                 |
| Comportements périodiques | Comportements périodiques : Types              | Cocher la case read                             |

Assurez-vous que Canopsis puisse recevoir les données envoyées par Centreon : les flux 
ne doivent pas être bloqués par la configuration de Canopsis ou par un équipement de sécurité.

## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page **Configuration > Collecteurs > Configuration de 
Centreon Broker**. 
2. Cliquez sur **central-broker-master** (ou sur la configuration du Broker correspondant si les 
évènements seront envoyés par un serveur distant ou un collecteur). 
3. Dans l'onglet **Output**, sélectionnez **Generic - Stream connector** dans la liste, puis cliquez 
sur **Add**. Un nouvel output apparaît dans la liste. 
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                     |
|-----------------|------------------------------------------------------------|
| Name            | Canopsis events                                            |
| Path            | /usr/share/centreon-broker/lua/canopsis2x-events-apiv2.lua |
| Filter category | Neb                                                        |

5. Pour permettre à Centreon de se connecter à votre équipement Canopsis, remplissez les 
paramètres obligatoires suivants. La première entrée existe déjà. Cliquez sur le lien **+Add 
a new entry** en-dessous du tableau **Filter category** pour en ajouter un autre.

| Type   | Nom              | Description                             | Exemple de valeur |
| ------ |------------------|-----------------------------------------|-------------------|
| string | canopsis_authkey | Clé d'authentification à l'API Canopsis | `an_authkey`      |
| string | canopsis_host    | Adresse de l'hôte Canopsis              | `a host`          |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien **+Add a new entry**) :

| Type   | Nom       | Description                                               | Valeur par défaut                                  |
| ------ |-----------|-----------------------------------------------------------|----------------------------------------------------|
| string | logfile   | Fichier dans lequel les logs sont écrits                  | /var/log/centreon-broker/canopsis-events-apiv2.log |
| number | log_level | Niveau de verbosité des logs : de 1 (erreurs) à 3 (debug) | 1                                                  |

7. Utilisez les paramètres optionnels du stream connector pour [filtrer ou adapter les 
données que vous voulez que Centreon envoie à Canopsis](#filtering-or-adapting-the-data-you-want-to-send-to-canopsis).
8. [Déployez la configuration](https://docs.centreon.com/fr/docs/monitoring/monitoring-servers/deploying-a-configuration/). 
9. Redémarrez **centengine** sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

   Canopsis reçoit maintenant les données de Centreon.

<div id='filtering-or-adapting-the-data-you-want-to-send-to-canopsis'/>

### Filtrer ou adapter les données que vous voulez envoyer à Canopsis

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) 
qui vous permettent de filtrer les données que vous enverrez à Canopsis, de reformater 
les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation 
correspondante.

* Pour remplacer la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** 
en-dessous du tableau **Filter category**, afin d'ajouter un paramètre personnalisé. 
Par exemple, si vous ne voulez envoyer à Canopsis que les évènements liés à un hostgroup
nommé "Europe", entrez :

   ```text
   type = string
   name = accepted_hostgroup
   value = Europe
   ```

* Pour le stream connector Canopsis Events, les données suivantes remplacent toujours les 
valeurs par défaut. Il n'est donc pas nécessaire de les redéfinir 
dans l'interface sauf si vous voulez en changer les valeurs (par exemple retirer les 
plages de maintenance à la variable **accepted_elements**).


| Type   | Nom                              | Description                                                                                                                                                                                                 | Valeur par défaut pour le stream connector Canopsis | Valeur(s) possibles                                          |
|--------|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|--------------------------------------------------------------|
| string | accepted_categories              | Chaque événement est lié à une catégorie de broker qui peut être utilisée pour filtrer les événements                                                                                                       | neb                                                 | neb ou bam                                                   |
| string | accepted_elements                | Élément Centreon géré par ce connecteur (pour en ajouter, vous devez regarder la section des format d'événement personnalisé, voir ci-dessous), la iste de éléments à séparer par des virgules sans espaces | host_status,service_status,acknowledgement,downtime | host_status ou service_status ou acknowledgement ou downtime |
| string | canopsis_downtime_comment_route  | Route Canopsis pour envoyer les commentaires sur les plages de maintenance                                                                                                                                  | /api/v4/pbehavior-comments                          | /api/v4/pbehavior-comments                                   |
| string | canopsis_downtime_reason_name    | Nom de la raison Canopsis pour les plages de maintenance                                                                                                                                                    | Centreon_downtime                                   | -                                                            |
| string | canopsis_downtime_reason_route   | Route Canopsis pour requêter le champs "raison"                                                                                                                                                             | /api/v4/pbehavior-reasons                           | /api/v4/pbehavior-reasons                                    |
| string | canopsis_downtime_route          | Route Canospsis pour envoyer les plages de maintenance                                                                                                                                                      | /api/v4/pbehaviors                                  | /api/v4/pbehaviors                                           |
| number | canopsis_downtime_send_pbh       | Désactiver (0) / Activer (1) l'envoi des plages de maintenance si toutes les règles pour le faire sont validées (le champs raison et le type existent)                                                      | 1                                                   | 0 ou 1                                                       |
| string | canopsis_downtime_type_name      | Nom de la catégorie de type des plages de maintenance de Canopsis                                                                                                                                           | Default maintenance                                 | -                                                            |
| string | canopsis_downtime_type_route     | Route Canopsis pour requêter le champs "type"                                                                                                                                                               | /api/v4/pbehavior-types                             | /api/v4/pbehavior-types                                      |
| string | canopsis_event_route             | Route Canospsis pour envoyer les événements (hors plages de maintenance)                                                                                                                                    | /api/v4/event                                       | /api/v4/event                                                |
| number | canopsis_port                    | Port Canopsis                                                                                                                                                                                               | 443                                                 | -                                                            |
| number | canopsis_sort_list_hostgroups    | Désactiver (0) / Activer (1) le tri des listes de groupes d'hôtes                                                                                                                                           | 0                                                   | 0 ou 1                                                       |
| number | canopsis_sort_list_servicegroups | Désactiver (0) /Activer (1) le tri des listes de groupes de services                                                                                                                                        | 0                                                   | 0 ou 1                                                       |
| string | connector                        | Le type de connecteur s'affichant dans l'interface Canopsis dans Alarmes > Type de connecteur                                                                                                               | centreon-stream                                     | -                                                            |
| string | connector_name                   | Nom du connector                                                                                                                                                                                            | centreon-stream-central                             | -                                                            |
| string | connector_name_type              | Type de connector                                                                                                                                                                                           | poller                                              | -                                                            |
| string | sending_method                   | Méthode d'envoi (seule l'API est disponible pour le moment)                                                                                                                                                 | api                                                 | api                                                          |
| string | sending_protocol                 | Protocole d'envoi (peut être https ou http)                                                                                                                                                                 | https                                               | http ou https                                                |
| number | use_severity_as_state            | Désactiver (0) /Activer (1) convertit la sévérité en état                                                                                                                                                   | 0                                                   | 0 ou 1                                                       |

## Event bulking

Ce stream connector n'est compatible **pas** avec l'event bulking pour le moment. Cela signifie qu'il n'est **pas** capable 
d'envoyer plus d'un évènement lors de chaque appel à l'API REST Canopsis.

## Format des évènements

Ce stream connector envoie des évènements au format suivant :

### Exemple de sortie pour un événement service_status

```json
[
	{
		"action_url": "",
		"component": "Host-name",
		"connector": "centreon-stream",
		"connector_name": "Central",
		"event_type": "check",
		"host_id": "15",
		"hostgroups": [
			"Group 1",
			"Group 2"
		],
		"long_output": "Plugin's long output",
		"notes_url": "",
		"output": "Plugin's output",
		"resource": "Service-name",
		"service_id": "47",
		"servicegroups": [],
		"source_type": "resource",
		"state": 1,
		"timestamp": 1708693347
	}
]
```

### Exemple de sortie pour un événement host_status

```json
[
	{
		"action_url": "",
		"component": "Host-1",
		"connector": "centreon-stream",
		"connector_name": "Central",
		"event_type": "check",
		"host_id": "15",
		"hostgroups": [
			"Group 1",
			"Group 2"
		],
		"long_output": "OK: Host is OK",
		"notes_url": "",
		"output": "OK: Host is OK",
		"source_type": "component",
		"state": 0,
		"timestamp": 1708953238
	}
]
```

### Exemple de sortie pour un événement acquittement

```json
[
	{
		"author": "admin",
		"component": "Host-1",
		"connector": "centreon-stream",
		"connector_name": "Central",
		"event_type": "ack",
		"long_output": "Acknowledged by admin",
		"output": "Acknowledged by admin",
		"resource": "passif",
		"source_type": "resource",
		"state": 1,
		"timestamp": 1709052753
	}
]
```

### Exemple de sortie pour un événement plage de maintenance

```json
[
	{
		"_id": "centreon-downtime-8-1715607730",
		"author": "admin",
		"enabled": true,
		"entity_pattern": [
			[
				{
					"field": "name",
					"cond": {
						"type": "eq",
						"value": "Test-Service-Demo-Canopsis/Test-Demo-Canopsis"
					}
				}
			]
		],
		"name": "centreon-downtime-8-1715607730",
		"reason": "XXXX",
		"rrule": "",
		"tstart": 1715607718,
		"tstop": 1715607958,
		"type": "XXXX"
	}
]
```

* Remarque : En version 22.10 de Canopsis il y a en plus un champs color.*

### Format d'évènement personnalisé

Ce stream connector vous permet de changer le format des événements pour correspondre 
à vos besoins. Cela vous permet de gérer des types d'événements qui ne le sont pas 
par défaut, comme les évènements **ba_status**.

Pour utiliser cette fonctionnalité vous devez configurer un fichier json de formatage 
et ajouter un nouveau paramètre à la configuration du stream connector.

| Type   | Nom         | Valeur                                           |
| ------ |-------------|--------------------------------------------------|
| string | format_file | /etc/centreon-broker/canopsis-events-format.json |

> Le fichier de configuration de format des évènements doit être lisible par l'utilisateur **centreon-broker**.

Pour en savoir plus sur les fichiers modèle et comment formatter les évènements vous pouvez 
consulter la **[documentation dédiée](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Commandes Curl : tester le stream connector

Voici la liste des commandes curl qui sont utilisées par le stream connector Canopsis.

### Configuration du stream connector

Si vous voulez tester que les commandes de configuration sont envoyées correctement à Canopsis, utilisez les commandes curl suivantes.

#### Requête de la route pbehavior-reasons

Cette commande vérifie que la route **pbehavior-reasons** est accessible et renvoie notamment les valeurs du champ **Raison** des plages de maintenance. Cela permet par la suite de vérifier que le nom du champ **Raison** pour les plages de maintenance Centreon existe (par défaut ce nom est **Centreon_downtime**).

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à 
Canopsis (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

```shell
curl -X GET -H 'accept: application/json' -H 'x-canopsis-authkey: <canopsis-auth-token>' '<https_canopsis_host_url>:<canopsis_port><canopsis_pbehavior_reasons>'
```

> Remplacez les *`<xxxx>`* dans la commande ci-dessus par les valeurs correctes d'authentification à l'hôte Canopsis.
> Les valeurs par défaut définies dans le stream connector sont : pour **canopsis_port** : **443** et pour **canopsis_pbehavior_reasons** : **/api/v4/pbehavior-reasons**.

3. Vérifiez que la commande renvoie bien une structure de données de la forme suivante :

```json
   "data":[
      {
         "_id":"XXXX",
         "description":"DESCRIPTION",
         "name":"NAME"         
      }
   ]
```

#### Requête de la route pbehavior-types

Cette commande vérifie que la route **pbehavior-types** est accessible et renvoie notamment l'ID des Types des plages de maintenance possibles. Cela permet par la suite de vérifier que le nom 
du **Type** des plages de maintenance Centreon existe (par défaut ce nom est **Default maintenance**).

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à 
Canopsis (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

```shell
curl -X GET -H 'accept: application/json' -H 'x-canopsis-authkey: <canopsis-auth-token>' '<https_canopsis_host_url>:<canopsis_port><canopsis_pbehavior_types>'
```

> Remplacez les *`<xxxx>`* dans la commande ci-dessus par les valeurs correctes d'authentification à l'hôte Canopsis.
> Les valeurs par défaut définies dans le stream connector sont : pour **canopsis_port** : **443**, et pour **canopsis_pbehavior_types** : **/api/v4/pbehavior-types**.

3. Vérifiez que la commande renvoie bien une structure de données de la forme suivante :

```json
   "data":[
      {
         "_id":"ec35c069-1651-4ee1-8944-3e5574e7b516",
         "name":"Default active",
         "description":"Default active",
         "type":"active",
         "priority":2,
         "icon_name":"",
         "color":"#2FAB63"
      },
      {
         "_id":"470c469c-77bc-402c-910f-30a8b2584343",
         "name":"Default inactive",
         "description":"Default inactive",
         "type":"inactive",
         "priority":1,
         "icon_name":"brightness_3",
         "color":"#979797"
      },
      {
         "_id":"5ea9d2d8-0f16-4e19-bcca-64b1e96e00fa",
         "name":"Default maintenance",
         "description":"Default maintenance",
         "type":"maintenance",
         "priority":3,
         "icon_name":"build",
         "color":"#BF360C"
      },
      {
         "_id":"1fb65097-ddaa-4e99-9239-8263095c156c",
         "name":"Default pause",
         "description":"Default pause",
         "type":"pause",
         "priority":4,
         "icon_name":"pause",
         "color":"#5A6D80"
      }
   ]
```
> En laissant les valeurs par défaut du stream connector Canopsis, les plages de maintenance sont classées dans le type **Default maintenance**.

#### Requête de la route app-info

Cette commande vérifie que la route **app-info** est accessible et retourne des informations
concernant l'hôte Canopsis.

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à 
Canopsis (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

```shell
curl -X GET -H 'accept: application/json' -H 'x-canopsis-authkey: <canopsis-auth-token>' '<https_canopsis_host_url>:<canopsis_port>/api/v4/app-info'
```

> Remplacez tous les *`<xxxx>`* dans la commande ci-dessus par les valeurs correctes d'authentification à l'hôte Canopsis.
> Pour le port, la valeur par défaut définie dans le stream connector est **443**.

Cette commande permet entre autres d'accéder à la version de Canopsis.

### Envoyer des évènements

Si vous voulez tester que les évènements sont envoyés correctement à Canopsis :

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à 
Canopsis (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

```shell
curl -X POST -H 'content-length: 400' -H 'content-type: application/json' -H 'x-canopsis-authkey: <canopsis-auth-token>' '<https_canopsis_host_url>:<canopsis_port><canopsis_event_route>' -d '[{"hostgroups":[],"component":"Test-Canopsis","host_id":"8","event_type":"check","resource":"passif","output":"Test_passif_output","servicegroups":[],"connector":"centreon-stream","source_type":"resource","action_url":"","long_output":"Test-curl-command Passif long output","notes_url":"","connector_name":"Central","timestamp":1710843117,"service_id":"10","state":1}]'
```

> Remplacez tous les *`<xxxx>`* dans la commande ci-dessus par les valeurs correctes d'authentification à l'hôte Canopsis.
> Les valeurs par défaut définies dans le stream connector sont : pour **canopsis_port** : **443** et **canopsis_event_route** : **/api/v4/event**.

3. Vérifiez que l'évènement a bien été reçu par Canopsis : les statuts doivent apparaître à la page **Alarmes > En Cours** de Canopsis.

![image](../../assets/integrations/data-analytics/status.png)