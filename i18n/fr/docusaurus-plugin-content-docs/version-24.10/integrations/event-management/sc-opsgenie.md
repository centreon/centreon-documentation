---
id: sc-opsgenie-events
title: Opsgenie Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le stream connector Opsgenie Events vous permet d'envoyer des données d'évènements 
depuis Centreon vers Opsgenie via leur API REST HTTP.

## Avant de commencer

- Dans la plupart des cas, vous enverrez les données depuis le serveur central. 
Il est également possible de les envoyer depuis un serveur distant ou un collecteur 
(par exemple si vous voulez éviter que le serveur central ne représente un point de 
défaillance unique, ou bien si vous êtes un MSP et vous installez le stream connector 
sur un collecteur ou un serveur distant dans l'infratructure de votre client).
- Par défaut, le stream connector Opsgenie Events envoie des évènements Broker 
**[host_status](https://docs.centreon.com/fr/docs/developer/developer-broker-mapping/#host-status)** et 
**[service_status](https://docs.centreon.com/fr/docs/developer/developer-broker-mapping/#service-status)**.
Ces formats d'événement sont décrits **[ici](#event-format)**.
- Ces évènements sont envoyés à chaque contrôle sur l'hôte ou le service. Des paramètres 
dédiés vous permettent de [ne pas envoyer certains évènements](#filtering-or-adapting-the-data-you-want-to-send-to-opsgenie).

## Compatibilité

> Attention, cette documentation a été écrite en février 2021, il est possible que des changements sur Opsgenie rendent obsolète des éléments décrits ci-dessous.
Vous pouvez nous le signaler en utilisant les outils de feedback de documentation en bas à droite de cette page.

## Installation

Faites l'installation sur le serveur qui enverra les données à Opsgenie (serveur central, 
serveur distant, collecteur).

1. Connectez-vous en tant que `root` sur le serveur Centreon central en utilisant votre 
client SSH préféré. 
2. Exécutez la commande adaptée à votre système :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-opsgenie
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-opsgenie
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-opsgenie
```

</TabItem>
</Tabs>

## Configuration de Opsgenie 

Vous devrez paramétrer votre interface Opsgenie pour qu'elle puisse recevoir des données 
de la part de Centreon. L'intégration d'Opsgenie nécessite deux clé d'API différentes. 
La première est une clé d'intégration provenant de l'intégration **Rest API HTTPS over JSON**. 
Cette intégration doit avoir les droits **Create and Update Access**. la seconde clé est une clé 
d'API provenant des **APP Settings**. Cette clé doit avoir les droits d'accès **Create and Update**.

### Opsgenie intégration : alerts

1. Depuis le menu **Setting**, selectionnez **Integration list**
2. Dans la liste des intégrations, ajoutez l'intégraiton **API** (Rest API HTTPS over JSON)
3. Rendez vous dans le menu **Configured integrations** et éditez votre intégration **API** pour 
l'activer si elle ne l'est pas. Vous devez aussi donner les droits **Create and Update Access**. 
Sauvegardez votre coniguration ainsi que votre **API Key** qui est obligatoire pour l'envoi 
d'alertes depuis Centreon vers Opsgenie. Cette **API Key** est référrée en tant 
qu'**integration_api_token** dans la configuration Centreon

### Opsgenie intégration : incidents

1. Avant de commencer, cette intégration ne marchera que si vous utilisez le module Centreon BAM
2. Depuis le menu **Settings**, allez dans la sous catégorie **APP SETTINGS** pour y trouver le menu **API key management**
3. Dans le menu **API key management** ajoutez une nouvelle **API key** avec les droits **Create and Update**
4. Sauvegardez votre configuration et votre **Api key** qui est obligatoire pour envoyer des incidents depuis 
Centreon vers Opsgenie. Cette **API key** est référrée en tant qu'**app_api_token** dans le configuration Centreon.

Assurez-vous que Opsgenie puisse recevoir les données envoyées par Centreon : les flux 
ne doivent pas être bloqués par la configuration de Opsgenie ou par un équipement de sécurité.

## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page **Configuration > Collecteurs > Configuration de 
Centreon Broker**. 
2. Cliquez sur **central-broker-master** (ou sur la configuration du Broker correspondant si les 
évènements seront envoyés par un serveur distant ou un collecteur). 
3. Dans l'onglet **Output**, sélectionnez **Generic - Stream connector** dans la liste, puis cliquez 
sur **Add**. Un nouvel output apparaît dans la liste. 
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                   |
|-----------------|----------------------------------------------------------|
| Name            | Opsgenie events                                          |
| Path            | /usr/share/centreon-broker/lua/opsgenie-events-apiv2.lua |
| Filter category | Neb                                                      |

5. Pour permettre à Centreon de se connecter à votre équipement Opsgenie, remplissez les 
paramètres obligatoires suivants. La première entrée existe déjà. Cliquez sur le lien **+Add 
a new entry** en-dessous du tableau **Filter category** pour en ajouter un autre.

| Type   | Nom                   | Description                                                                          | Exemple de valeur |
| ------ |-----------------------|--------------------------------------------------------------------------------------|-------------------|
| string | app_api_token         | Clé d'authentification à l'API pour les alertes                                      | `an_authkey`      |
| string | integration_api_token | Clé d'authentification à l'API pour les incidents (nécessite le module Centreon BAM) | `an_authkey`      |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien **+Add a new entry**) :

| Type   | Nom       | Description                                               | Valeur par défaut                                  |
| ------ |-----------|-----------------------------------------------------------|----------------------------------------------------|
| string | logfile   | Fichier dans lequel les logs sont écrits                  | /var/log/centreon-broker/opsgenie-events-apiv2.log |
| number | log_level | Niveau de verbosité des logs : de 1 (erreurs) à 3 (debug) | 1                                                  |

7. Utilisez les paramètres optionnels du stream connector pour [filtrer ou adapter les 
données que vous voulez que Centreon envoie à Opsgenie](#filtering-or-adapting-the-data-you-want-to-send-to-opsgenie).
8. [Déployez la configuration](https://docs.centreon.com/fr/docs/monitoring/monitoring-servers/deploying-a-configuration/). 
9. Redémarrez **centengine** sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

   Opsgenie reçoit maintenant les données de Centreon.


### Filtrer ou adapter les données que vous voulez envoyer à Opsgenie

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) 
qui vous permettent de filtrer les données que vous enverrez à Opsgenie, de reformater 
les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation 
correspondante.

* Pour remplacer la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** 
en-dessous du tableau **Filter category**, afin d'ajouter un paramètre personnalisé. 
Par exemple, si vous ne voulez envoyer à Opsgenie que les évènements liés à un hostgroup
nommé "Europe", entrez :

   ```text
   type = string
   name = accepted_hostgroup
   value = Europe
   ```

* Pour le stream connector Opsgenie Events, les données suivantes remplacent toujours les 
valeurs par défaut. Il n'est donc pas nécessaire de les redéfinir 
dans l'interface sauf si vous voulez en changer les valeurs (par exemple retirer les 
plages de maintenance à la variable **accepted_elements**).


| Type   | Nom                         | Description                                                                                                                                                                                                  | Valeur par défaut pour le stream connector Opsgenie | Valeur(s) possibles                 |
|--------|-----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------|-------------------------------------|
| string | accepted_categories         | Chaque événement est lié à une catégorie de broker qui peut être utilisée pour filtrer les événements                                                                                                        | neb                                                 | neb ou bam                          |
| string | accepted_elements           | Élément Centreon géré par ce connecteur (pour en ajouter, vous devez regarder la section des format d'événement personnalisé, voir ci-dessous), la liste de éléments à séparer par des virgules sans espaces | host_status,service_status                          | host_status ou service_status ou ba |
| string | api_url                     | Adresse API d'Opsgenie, utilisez https://api.eu.opsgenie.com si votre instance est en Europe                                                                                                                 | https://api.opsgenie.com                            | -                                   |
| string | alerts_api_endpoint         | Adresse API d'Opsgenie pour les alertes                                                                                                                                                                      | /v2/alerts                                          | -                                   |
| string | incident_api_endpoint       | Adresse API d'Opsgenie pour les incidents                                                                                                                                                                    | /v1/incidents/create                                | -                                   |
| string | ba_incident_tags            | Liste de tags pour un incident. Doit utiliser la virgule comme séparateur. Les noms des BV seront ajoutés automatiquement dans les tags                                                                     | centreon,application                                | -                                   |
| number | enable_incident_tags        | Ajoute les tags pour les incidents si est à ` 1`                                                                                                                                                             | 1                                                   | 1 ou 0                              |
| number | get_bv                      | Ajoute le nom des BV dans les tags si `enable_incident_tags` est à `1`                                                                                                                                       | 1                                                   | 1 ou 0                              |
| string | enable_severity             | Si positionné à 1, essaie de lier une sévérité de Centreon à une priorité d'Opsgenie                                                                                                                         | 0                                                   | 1 ou 0                              |
| string | default_priority            |                                                                                                                                                                                                              |                                                     |                                     |
| string | priority_mapping            | Permet de faire correspondre les priorités d'Opsgenie avec un ordre de priorité dans le stream connector                                                                                                     | P1=1,P2=2,P3=3,P4=4,P5=5                            | -                                   |
| string | opsgenie_priorities         | Liste des priorités Opsgenie avec la virgule pour séparateur                                                                                                                                                 | P1,P2,P3,P4,P5                                      | -                                   |
| string | timestamp_conversion_format | Indique le format d'affichage des horodatages                                                                                                                                                                | %Y-%m-%d %H:%M:%S                                   | -                                   |


## Event bulking

Ce stream connector est compatible avec l'event bulking. Cela signifie qu'il est capable d'envoyer plus d'un évènement dans chaque appel à l'API Opsgenie.

Pour utiliser cette fonctionnalité, ajoutez le paramètre suivant à la configuration de votre stream connector.

| Type    | Nom              | Valeur    |
|---------|------------------|-----------|
| number  | max_buffer_size  | 1 ou plus |

## Format des évènements

Ce stream connector envoie des évènements au format suivant :

### Exemple de sortie pour un événement service_status

```json
{
	"alias": "Host-Name_Service-Name_WARNING",
	"description": "Output returned from plugin",
	"message": "2024-10-21 11:29:41 Host-Name // Service-Name is WARNING"
}
```

### Exemple de sortie pour un événement host_status

```json
{
	"alias": "Host-Name_DOWN",
	"description": "Output returned from host check",
	"message": "2024-10-21 11:32:42 Host-Name is DOWN"
}
```

### Format d'évènement personnalisé

Ce stream connector vous permet de changer le format des événements pour correspondre 
à vos besoins. Cela vous permet de gérer des types d'événements qui ne le sont pas 
par défaut, comme les évènements **downtimes**.

Pour utiliser cette fonctionnalité vous devez configurer un fichier json de formatage 
et ajouter un nouveau paramètre à la configuration du stream connector.

| Type   | Nom         | Valeur                                           |
| ------ |-------------|--------------------------------------------------|
| string | format_file | /etc/centreon-broker/opsgenie-events-format.json |

> Le fichier de configuration de format des évènements doit être lisible par l'utilisateur **centreon-broker**.

Pour en savoir plus sur les fichiers modèle et comment formatter les évènements vous pouvez 
consulter la **[documentation dédiée](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Commandes Curl : tester le stream connector

### Envoyer des évènements

Si vous voulez tester que les évènements sont envoyés correctement à Opsgenie :

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à Opsgenie (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

```shell
curl -X POST -H 'content-type: application/json' -H 'Authorization: GenieKey <app_api_token>' 'https://api.opsgenie.com/v2/alerts' -d '{"description":"Output returned from plugin","message":"2024-10-21 11:46:37 Host-Name // Service-Name is WARNING","alias":"Host-Name_Service-Name_WARNING"}'
```

> Remplacez tous les **\<xxxx\>** dans la commande ci-dessus par la valeur correcte.

3. Vérifiez que les données ont été reçues par Opsgenie.
