---
id: sc-canopsis-events
title: Canopsis Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le stream connector Canopsis Events vous permet d'envoyer des données d'événements depuis Centreon vers Canopsis via un protocole HTTP REST API.

## Avant de commencer

- Dans la plupart des cas, vous enverrez les données depuis le serveur central. Il est également possible de les envoyer depuis un serveur distant ou un collecteur (par exemple si vous voulez éviter que le serveur central ne représente un point de défaillance unique, ou bien si vous êtes un MSP et vous installez le stream connector sur un collecteur ou un serveur distant dans l'infratructure de votre client).
- Par défaut, le stream connector Canopsis Events envoie des événéments Broker **[host_status](https://docs.centreon.com/fr/docs/developer/developer-broker-mapping/#host-status)**, **[service_status](https://docs.centreon.com/fr/docs/developer/developer-broker-mapping/#service-status)** et **[acknowledgement](https://docs.centreon.com/fr/docs/developer/developer-broker-mapping/#acknowledgement)**. Ces formats d'événement sont décrits **[ici](#event-format)**.
- Ces évènements sont envoyés à chaque contrôle sur l'hôte ou le service. Des paramètres dédiés vous permettent de ne pas envoyer certains évènements.

## Compatibilité

Conçu pour être compatible avec Canopsis (API v.4) et plus précisément les versions : 22.10, 23.04, 23.10 et 24.04 

## Installation

Faites l'installation sur le serveur qui enverra les données à Canopsis (serveur central, serveur distant, collecteur).
1. Connectez vous en tant que `root` sur le serveur Centreon central en utilisant votre client SSH préféré. 
2. Exécuter la commande adaptée à votre système :

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



## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page Configuration > Collecteurs > Configuration de Centreon Broker. 
2. Cliquez sur central-broker-master (ou sur la configuration du Broker correspondant si les évènements seront envoyés par un serveur distant ou un collecteur). 
3. Dans l'onglet Output, sélectionnez Generic - Stream connector dans la liste, puis cliquez sur Ajouter. Un nouvel output apparaît dans la liste. 
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                   |
|-----------------|----------------------------------------------------------|
| Name            | Canopsis events                                          |
| Path            | /usr/share/centreon-broker/lua/canopsis-events-apiv2.lua |
| Filter category | Neb                                                      |

5. Pour permettre à Centreon de se connecter à votre équipement Canopsis, remplissez les paramètres obligatoires suivants. La première entrée existe déjà. Cliquez sur le lien +Add a new entry en-dessous du tableau Filter category pour en ajouter un autre.

| Type   | Nom              | Explication de "Value"                      | Exemple de valeur |
| ------ |------------------|---------------------------------------------|-------------------|
| string | canopsis_authkey | La clé d'authentification de l'API Canopsis | `an_authkey`      |
| string | canopsis_host    | L'adresse de l'hôte Canopsis                | `a host`          |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien +Add a new entry) :

| Type   | Nom       | Explication de "Value"                                  | Valeur par défaut                                  |
| ------ |-----------|---------------------------------------------------------|----------------------------------------------------|
| string | logfile   | Fichier dans lequel les logs sont écrits                | /var/log/centreon-broker/canopsis-events-apiv2.log |
| number | log_level | Niveau de verbosité des logs de 1 (erreurs) à 3 (debug) | 1                                                  |

7. Utilisez les paramètres optionnels du stream connector pour filtrer ou adapter les données que vous voulez que Centreon envoie à Canopsis.
8. [Déployez la configuration](https://docs.centreon.com/fr/docs/monitoring/monitoring-servers/deploying-a-configuration/). 
9. Redémarrez centengine sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

   Canopsis reçoit maintenant les données de Centreon.


### Filtrer ou adapter les données que vous voulez envoyer à Canopsis

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) qui vous permettent de filtrer les données que vous enverrez à Canopsis, de reformater les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation correspondante.

* Pour remplacer la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category**, afin d'ajouter un paramètre personnalisé. 
Par exemple, si vous ne voulez envoyer à Splunk que les évènements traités par un collecteur nommé "poller-1", entrez :

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* Pour le stream connector Canopsis Events, les données suivantes remplacent toujours les valeurs par défaut des stream connectors (il n'est pas nécessaire de les redéfinir dans l'interface).


| Type   | Nom                 | Valeur par défaut pour le stream connector Canopsis |
| ------ |---------------------|-----------------------------------------------------|
| string | accepted_categories | neb                                                 |
| string | accepted_elements   | host_status,service_status,acknowledgement          |

## Event bulking

Ce stream connector est compatible avec l'event bulking. Cela signifie qu'il est capable d'envoyer plus d'un évènement lors de chaque appel à l'API REST Canopsis.

Pour utiliser cette fonctionnalité, vous devez ajouter le paramètre suivant à la configuration de votre stream connector.

| Type   | Nom             | Exemple de valeur |
| ------ |-----------------|-------------------|
| number | max_buffer_size | `3`               |

Dans cet exemple de valeur, le stream connecteur Canopsis conservera 3 événements et ne déclenchera l'envoie qu'au 4ème. 

<div id='event-format'/>

## Format des évènements

Ce stream connector envoie des évènements au format suivant :

### Exemple de sortie pour un événement service_status

```json
[
   {
      "notes_url":"",
      "host_id":"15",
      "event_type":"check",
      "service_id":"47",
      "timestamp":1708693347,
      "hostgroups":[
         "Group 1",
         "Group 2"
      ],
      "servicegroups":[
         
      ],
      "state":1,
      "connector":"centreon-stream",
      "action_url":"",
      "long_output":"(No output returned from plugin)",
      "resource":"Service-name",
      "output":"(No output returned from plugin)",
      "source_type":"resource",
      "component":"Host-name",
      "connector_name":"Central"
   }
]
```

### Exemple de sortie pour un événement host_status

```json
{

}
```

### Custom event format

This stream connector allows you to change the format of the event to suit your needs. Only the **event** part of the json is customisable. It also allows you to handle events type that are not handled by default such as **ba_status events**.

In order to use this feature you need to configure a json event format file and add a new stream connector parameter.

| Type   | Name        | Value                                           |
| ------ | ----------- | ----------------------------------------------- |
| string | format_file | /etc/centreon-broker/elastic-events-format.json |

> The event format configuration file must be readable by the centreon-broker user

To learn more about custom event format and templating file, head over the following **[documentation](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Commandes Curl : tester le stream connector

Voici la liste des commandes curl qui sont utilisées par le stream connecteur Canopsis :

### Envoyer des évènements

Si vous voulez tester que les évènements sont envoyés correctement à Canopsis :

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à Canopsis (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

```shell
curl -u elastic:centreon-es-passwd --header 'content-type: application/json'  -X POST "<elastic_url>/_bulk" --data-binary '{"index":{"_index":"<elastic_index_status>"}}
{"host":"jamaica","status":"OK","state_type":1,"state":0,"timestamp":<a_recent_timestamp>,"event_type":"service","service":"kingston","output":"OK: Everything is gonna be alright"}
'
```

> Remplacez tous les *`<xxxx>`* dans la commande ci-dessus par la valeur correcte. Par exemple, *<splunk_sourcetype>* pourra être remplacé par *_json*.

3. Vérifiez que l'évènement a bien été reçu par Canopsis.