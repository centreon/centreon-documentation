---
id: sc-splunk-metrics
title: Splunk Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le stream connector Splunk Metrics vous permet d'envoyer des données depuis Centreon vers des instances Splunk.

## Avant de commencer

Si vous ne voulez récupérer que des métriques, utilisez le stream connector Splunk Metrics. Si vous voulez récupérer toutes les données des évènements, utilisez le stream connector Splunk Events.

- Dans la plupart des cas, vous enverrez les données depuis le serveur central. Il est également possible de les envoyer depuis un serveur distant ou un collecteur (par exemple si vous voulez éviter que le serveur central ne représente un point de défaillance unique, ou bien si vous êtes un MSP et vous installez le stream connector sur un collecteur ou un serveur distant dans l'infratructure de votre client).
- Par défaut, le stream connector Splunk Metrics envoie des métriques des évènements Broker [**host_status**](../../developer/developer-broker-mapping.md#host-status) et [**service_status**](../../developer/developer-broker-mapping.md#service-status). Ces métriques sont contenues dans le champ **perf_data** des évènements. Le format des évènements est décrit **[ici](#format-des-évènements)**.
- Ces évènements sont envoyés à chaque contrôle sur l'hôte ou le service. Des paramètres dédiés vous permettent de [ne pas envoyer certains évènements](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-splunk).

## Installation

Faites l'installation sur le serveur qui enverra les données à Splunk (serveur central, serveur distant, collecteur).

1. Connectez-vous en tant que `root` en utilisant votre client SSH préféré.

2. Exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-splunk
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-splunk
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install centreon-stream-connector-splunk
```

</TabItem>
</Tabs>

## Configurer votre équipement Splunk

Vous devrez paramétrer votre équipement Splunk pour qu'il puisse recevoir des données de la part de Centreon. Reportez-vous à la documentation Splunk.
Assurez-vous que Splunk puisse recevoir les données envoyées par Centreon : les flux ne doivent pas être bloqués par la configuration de Splunk ou par un équipement de sécurité.

Le sourcetype correspondant au stream connector est "_json". D'autres informations utiles peuvent être par exemple : "source": "http:my_index", "index": "my_index", "host": "Central". Vous pouvez également ajouter ces informations à la configuration de votre stream connector si nécessaire.

## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page **Configuration > Collecteurs > Configuration de Centreon Broker**.
2. Cliquez sur **central-broker-master** (ou sur la configuration du Broker correspondant si les évènements seront envoyés par un serveur distant ou un collecteur).
3. Dans l'onglet **Output**, sélectionnez **Generic - Stream connector** dans la liste, puis cliquez sur **Ajouter**. Un nouvel output apparaît dans la liste.
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                  |
| --------------- | ------------------------------------------------------- |
| Name            | Splunk metrics                                          |
| Path            | /usr/share/centreon-broker/lua/splunk-metrics-apiv2.lua |
| Filter category | Neb                                                     |

5. Pour permettre à Centreon de se connecter à votre équipement Splunk, remplissez les paramètres obligatoires suivants. La première entrée existe déjà. Cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category** pour en ajouter un autre.

| Type   | Nom             | Explication                 | Exemple de valeur                                           |
| ------ | --------------- | --------------------------------------- | ------------------------------------------------------- |
| string | http_server_url | L'URL du collecteur de services de Splunk | `https://mysplunk.centreon.com:8088/services/collector` |
| string | splunk_token    | Jeton pour l'API du collecteur d'évènements    |                                                         |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien **+Add a new entry**) :

| Type   | Nom               | Explication                                              | Valeur par défaut                              |
| ------ | ----------------- | --------------------------------------------------------------- | ------------------------------------------- |
| string | logfile           | Fichier dans lequel les logs sont écrits                              | /var/log/centreon-broker/splunk-metrics.log |
| number | log_level         | Niveau de log, de 1 (erreurs) à 3 (débug)                      | 1                                           |

7. Utilisez les paramètres optionnels du stream connector pour [filtrer ou adapter les données que vous voulez que Centreon envoie à Splunk](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-splunk).

8. [Déployez la configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Redémarrez **centengine** sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

   Splunk reçoit maintenant des données de Centreon. Pour tester le bon fonctionnement de l'intégration, voir [Commandes curl : tester le stream connector](#commandes-curl--tester-le-stream-connector).

### Filtrer ou adapter les données que vous voulez envoyer à Splunk

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) qui vous permettent de filtrer les données que vous enverrez à votre équipement Splunk, de reformatter les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation correspondante.

* Pour surcharger la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category**, afin d'ajouter un paramètre personnalisé. Par exemple, si vous ne voulez envoyer à Splunk que les évènmenes traités par un collecteur nommé "poller-1", entrez :

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* Pour le stream connector Splunk Metrics, les données suivantes surchargent toujours les valeurs par défaut (il n'est pas nécessaire de les redéfinir dans l'interface).

| Type   | Nom                 | Valeur par défaut pour le stream connector |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_categories | neb                                    |
| string | accepted_elements   | host_status,service_status             |

## Event bulking

Ce stream connector est compatible avec l'event bulking. Cela signifie qu'il est capable d'envoyer plus d'un évènement lors de chaque appel à l'API REST Spunk.

Pour utiliser cette fonctionnalité, vous devez ajouter le paramètre suivant à la configuration de votre stream connector.

| Type   | Nom             | Valeur          |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

## Format des évènements

Ce stream connector envoie des évènements au format suivant :

### Évènement service_status

```json
{
  "sourcetype": "_json",
  "source": "http:my_index",
  "index": "my_index",
  "host": "Central",
  "time": 1675865364,
  "fields": {
    "event_type": "service",
    "state": 2,
    "state_type": 1,
    "hostname": "my_host",
    "service_description": "my_service",
    "ctime": 1675865364,
    "metric: pl": 0,
    "metric: rta": 10,
    "metric: rtmin": 5,
    "metric: rtmax": 15
  }
}
```

### Évènement host_status

```json
{
  "sourcetype": "_json",
  "source": "http:my_index",
  "index": "my_index",
  "host": "Central",
  "time": 1675865364,
  "fields": {
    "event_type": "host",
    "state": 1,
    "state_type": 1,
    "hostname": "my_host",
    "ctime": 1675865364,
    "metric: pl": 0,
    "metric: rta": 10,
    "metric: rtmin": 5,
    "metric: rtmax": 15
  }
}
```

### Format d'évènement personnalisé

Il n'est pas possible de changer le format des évènements pour les stream connectors orientés métriques. Vous ne pouvez donc pas envoyer d'autres évènements Broker contenant des données de performance.

## Commandes Curl : tester le stream connector

### Envoyer des évènements

Si vous voulez tester que les évènements sont envoyés correctement à Splunk :

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à Splunk (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

   ```shell
   curl -X POST -H "content-type: application/json" -H "authorization: Splunk <splunk_token>" '<http_server_url>' -d '{"sourcetype": "<splunk_sourcetype>","source": "<splunk_source>","index": "<splunk_index>","host": "<splunk_host>","time": <epoch_timestamp>,"event": {"event_type": "host","state": 1,"state_type": 1,"hostname":"my_host","ctime": 1675865364,"metric: pl": 0,"metric: rta": 10,"metric: rtmin": 5,"metric: rtmax": 15}}'
   ```

   > Remplacez tous les *`<xxxx>`* dans la commande ci-dessus par la valeur correcte. Par exemple, *<splunk_sourcetype>* pourra être remplacé par *_json*.

3. Vérifiez que l'évènement a bien été reçu par Splunk.
