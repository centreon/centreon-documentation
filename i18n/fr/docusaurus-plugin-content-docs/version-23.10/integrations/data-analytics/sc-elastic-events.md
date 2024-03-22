---
id: sc-elastic-events
title: Elastic Events
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le stream connector Elastic Events vous permet d'envoyer des données depuis Centreon vers Elasticsearch. Il envoie des données grâce aux APIs Elasticsearch.

Utilisez le stream connector Elastic Events si vous souhaitez transmettre toutes les données pour les évènements concernés (y compris les changements d'état). Si vous ne souhaitez transmettre que des métriques, utilisez le stream connector [Elastic Metrics](./sc-elasticsearch-metrics.md).

Un index template adapté est créé automatiquement par le stream connector afin que vos données soient indexées correctement dans Elasticsearch. (L'index template est la description du format des données qui seront envoyées.)

## Installation

Faites l'installation en tant que `root` sur le serveur qui enverra les données vers Elasticsearch (serveur central, serveur distant, collecteur).

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-elasticsearch
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-elasticsearch
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-elasticsearch
```

</TabItem>
</Tabs>

## Configurer votre serveur Elasticsearch

Vous devrez paramétrer votre équipement Elasticsearch pour qu'il puisse recevoir des données de la part de Centreon. Reportez-vous à la documentation Elasticsearch. Assurez-vous qu'Elasticsearch puisse recevoir les données envoyées par Centreon : les flux ne doivent pas être bloqués par la configuration d'Elasticsearch ou par un équipement de sécurité.

Sur votre serveur Elasticsearch, vous aurez besoin de :

- Un index pour stocker les évènements envoyés par Centreon. Vous pouvez créer un index *centreon_status* grâce à la commande suivante :

    ```shell
    curl --user elastic:centreon-es-passwd -X PUT "<elastic_proto>://<elastic_ip>:<elastic_port>/centreon_status" -H 'Content-Type: application/json' \
    -d '{"mappings":{"properties":{"host":{"type":"keyword"},"service":{"type":"keyword"}, "output":{"type":"text"},"status":{"type":"keyword"},"state":{"type":"keyword"}, "type":{"type":"keyword"},"timestamp":{"type":"date","format":"epoch_second"}}}}'
    ```

   > Si vous utilisez un **[format d'évènement personnalisé](#event-format)**, vous devrez modifier cette commande en conséquence.

- Un utilisateur/mot de passe ayant les privilèges nécessaires pour effectuer des requêtes POST afin d'insérer des données dans l'index.

## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page **Configuration > Collecteurs > Configuration de Centreon Broker**.
2. Cliquez sur **central-broker-master** (ou sur la configuration du Broker correspondant si les évènements seront envoyés par un serveur distant ou un collecteur).
3. Dans l'onglet **Output**, sélectionnez **Generic - Stream connector** dans la liste, puis cliquez sur **Ajouter**. Un nouvel output apparaît dans la liste.
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                  |
| --------------- | ------------------------------------------------------- |
| Name            | Elastic events                                          |
| Path            | /usr/share/centreon-broker/lua/elastic-events-apiv2.lua |
| Filter category | Neb                                                     |

5. Pour permettre à Centreon de se connecter à votre équipement Elasticsearch, remplissez les paramètres obligatoires suivants. La première entrée existe déjà. Cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category** pour en ajouter un autre.

| Type   | Nom            | Description                       | Exemple                                           |
| ------ | ----------------------- | --------------------------------------- | ------------------------------------------------------- |
| string | elastic_url             | URL de votre stack Elastic            | `https://elastic-fqdn:9200/`                            |
| string | elastic_index_status    | Nom de l'index Elastic cible            | `centreon_status`                                       |
| string | elastic_username        | Identifiant pour se connecter à Elastic | `a_username`                                            |
| string | elastic_password        | Mot de passe correspondant à l'identifiant | `a password`                                            |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien **+Add a new entry**) :

| Type   | Nom               | Description                                               | Valeur par défaut   |
| ------ | ----------------- | --------------------------------------------------------------- | ------------------------------------------------- |
| string | logfile           | Fichier dans lequel les logs sont écrits                      | /var/log/centreon-broker/elastic-events-apiv2.log |
| number | log_level         | Niveau de log : de 1 (erreurs) à 3 (débug)                      | 1                                                 |

7. Utilisez les paramètres optionnels du stream connector pour [filtrer ou adapter les données que vous voulez que Centreon envoie à Elasticsearch](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-elasticsearch).

8. [Déployez la configuration](https://docs.centreon.com/fr/docs/monitoring/monitoring-servers/deploying-a-configuration/).

9. Redémarrez **centengine** sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

   Elasticsearch reçoit maintenant des données de Centreon. Pour tester le bon fonctionnement de l'intégration, voir [Commandes curl : tester le stream connector](#commandes-curl--tester-le-stream-connector).

### Filtering or adapting the data you want to send to Elasticsearch

### Filtrer ou adapter les données que vous voulez envoyer à Elasticsearch

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) qui vous permettent de filtrer les données que vous enverrez à votre équipement Elasticmetrics, de reformater les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation correspondante.

* Pour surcharger la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category**, afin d'ajouter un paramètre personnalisé. Par exemple, si vous ne voulez envoyer à Elasticmetrics que les évènmenes traités par un collecteur nommé "poller-1", entrez :

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* Pour le stream connector Elasticsearch Events, les valeurs suivantes surchargent toujours les valeurs par défaut (il n'est pas nécessaire de les redéfinir dans l'interface).

| Type   | Nom                 | Valeur par défaut pour le stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Event bulking

Ce stream connector est compatible avec l'event bulking. Cela signifie qu'il est capable d'envoyer plus d'un évènement dans chaque appel à l'API REST Elastic.

Pour utiliser cette fonctionnalité, ajoutez le paramètre suivant à la configuration de votre stream connector.

| Type   | Name            | Value           |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Format des évènements

Ce stream connector enverra des évènements au format suivant.

### Évènement service_status

```json
{
    "event_type": "host",
    "status": "CRITICAL",
    "state": "2",
    "state_type": 1,
    "host": "my_host",
    "service": "a_service",
    "output": "CRITICAL: Burnin and Lootin"
}
```

### Évènement host_status

```json
{
    "event_type": "host",
    "status": "DOWN",
    "state": "1",
    "state_type": 1,
    "host": "my_host",
    "output": "CRITICAL: No woman no cry",
    "timestamp": 1637229207
}
```

### Format d'évènement personnalisé

Ce stream connector vous permet de changer le format des évènements pour les adapter à vos besoins. Seule la partie **event** du json est personnalisable. Cela vous permet également d'utiliser des types d'évènements non pris en charge par défaut, tels que des évènements **ba_status**.

Pour utiliser cette fonctionnalité, vous devez configurer un ficher json de format d'évènement et ajouter un nouveau paramètre au stream connector.

| Type   | Nom         | Valeur                                         |
| ------ | ----------- | ---------------------------------------------- |
| string | format_file | /etc/centreon-broker/elastic-events-format.json |

> Le fichier de configuration de format doit être lisible par l'utilisateur **centreon-broker**.

Pour en savoir plus sur les formats d'évènements personnalisés t les fichiers de templating, voir la **[documentation suivante](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/templating.md#templating-documentation)**.

## Commandes Curl : tester le stream connector

### Envoyer des évènements

Si vous voulez tester que les évènements sont envoyés correctement à Elasticsearch :

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à Elasticsearch (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

```shell
curl -u elastic:centreon-es-passwd --header 'content-type: application/json'  -X POST "<elastic_url>/_bulk" --data-binary '{"index":{"_index":"<elastic_index_status>"}}
{"host":"jamaica","status":"OK","state_type":1,"state":0,"timestamp":<a_recent_timestamp>,"event_type":"service","service":"kingston","output":"OK: Everything is gonna be alright"}
'
```

> Remplacez tous les *`<xxxx>`* dans la commande ci-dessus par la valeur correcte.

3. Vérifiez que les données ont été reçues par Elasticsearch.
