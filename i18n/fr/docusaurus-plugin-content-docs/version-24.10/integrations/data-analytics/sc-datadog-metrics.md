---
id: sc-datadog-metrics
title: Datadog Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le stream connector Datadog Metrics vous permet d'envoyer des données depuis Centreon vers Datadog.

## Avant de commencer

- Dans la plupart des cas, vous enverrez les données depuis le serveur central. Il est également possible de les envoyer 
depuis un serveur distant ou un collecteur (par exemple si vous voulez éviter que le serveur central ne représente un point 
de défaillance unique, ou bien si vous êtes un MSP et vous installez le stream connector sur un collecteur ou un serveur distant dans l'infratructure de votre client).
- Par défaut, le stream connector Datadog Metrics envoie des métriques des évènements Broker [**host_status**](../../developer/developer-broker-mapping.md#host-status) 
et [**service_status**](../../developer/developer-broker-mapping.md#service-status). Ces métriques sont contenues dans le champ **perf_data** des évènements. 
Le format des évènements est décrit **[ici](#format-des-évènements)**.
- Ces évènements sont envoyés à chaque contrôle sur l'hôte ou le service. Des paramètres dédiés vous permettent de [ne pas envoyer certains évènements](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-datadog).
- Les événements mentionnés ci-dessus sont déclenchés chaque fois qu'un hôte ou un service est contrôlé. Divers paramètres permettent de filtrer les événements.

## Installation

Faites l'installation sur le serveur qui enverra les données à Datadog (serveur central, serveur distant, collecteur).

1. Connectez-vous en tant que `root` en utilisant votre client SSH préféré.

2. Exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-datadog
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-datadog
```

</TabItem>

<TabItem value="Debian 11 & 12" label="Debian_11_&_12">

```shell
apt install centreon-stream-connector-datadog
```

</TabItem>
</Tabs>

## Configurer votre équipement Datadog

Vous devrez paramétrer votre équipement Datadog pour qu'il puisse recevoir des données de la part de Centreon. Reportez-vous à la documentation Datadog.
Assurez-vous que Datadog puisse recevoir les données envoyées par Centreon : les flux ne doivent pas être bloqués par la configuration de Datadog ou par un équipement de sécurité.

## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page **Configuration > Collecteurs > Configuration de Centreon Broker**.
2. Cliquez sur **central-broker-master** (ou sur la configuration du Broker correspondant si les évènements seront envoyés par un serveur distant ou un collecteur).
3. Dans l'onglet **Output**, sélectionnez **Generic - Stream connector** dans la liste, puis cliquez sur **Ajouter**. Un nouvel output apparaît dans la liste.
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                   |
| --------------- | -------------------------------------------------------- |
| Name            | Datadog metrics                                          |
| Path            | /usr/share/centreon-broker/lua/datadog-metrics-apiv2.lua |
| Filter category | Neb                                                      |

5. Pour permettre à Centreon de se connecter à votre équipement Datadog, remplissez les paramètres obligatoires suivants. La première entrée existe déjà. Cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category** pour en ajouter un autre.

| Type   | Nom        | Explication            | Exemple de valeur                |
| ------ |------------|------------------------|----------------------------------|
| string | api_key    | The datadog api key    | OGwOM8nse3FHjxyGw5ODLWWXS1oEpcPs |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien **+Add a new entry**) :

| Type   | Nom       | Explication                                | Valeur par défaut                            |
| ------ |-----------|--------------------------------------------|----------------------------------------------|
| string | logfile   | The file in which logs are written         | /var/log/centreon-broker/datadog-metrics.log |
| number | log_level | Logging level from 1 (errors) to 3 (debug) | 1                                            |

7. Utilisez les paramètres optionnels du stream connector pour [filtrer ou adapter les données que vous voulez que Centreon envoie à Datadog](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-datadog).

8. [Déployez la configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Redémarrez **centengine** sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

   Datadog reçoit maintenant des données de Centreon. Pour tester le bon fonctionnement de l'intégration, voir [Commandes curl : tester le stream connector](#commandes-curl--tester-le-stream-connector).

### Filtrer ou adapter les données que vous voulez envoyer à Datadog

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) qui vous permettent de filtrer les données que vous enverrez à votre équipement Datadog, de reformater les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation correspondante.

* Pour surcharger la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category**, afin d'ajouter un paramètre personnalisé. Par exemple, si vous ne voulez envoyer à Datadog que les évènements traités par un collecteur nommé "poller-1", entrez :

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* Pour le stream connector Datadog Metrics, les données suivantes surchargent toujours les valeurs par défaut (il n'est pas nécessaire de les redéfinir dans l'interface).

| Type   | Nom                          | Valeur par défaut pour le stream connector  |
| ------ |------------------------------|---------------------------------------------|
| string | datadog_centreon_url         | `http://yourcentreonaddress.local`          |
| string | datadog_metric_endpoint      | /api/v1/series                              |
| string | http_server_url              | https://api.datadoghq.com                   |
| string | accepted_categories          | neb                                         |
| string | accepted_elements            | host_status,service_status                  |
| number | max_buffer_size              | 30                                          |
| number | hard_only                    | 0                                           |
| number | enable_service_status_dedup  | 0                                           |
| number | enable_host_status_dedup     | 0                                           |
| string | metric_name_regex            | `[^a-zA-Z0-9_%.]`                           |
| string | metric_replacement_character | _                                           |

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
  "host": "my_host",
  "metric": "database.used.percent",
  "points": [[1630590530, 80]],
  "tags": [
    "service:my_service",
    "instance:my_instance",
    "subinstance:sub_1",
    "subinstance:sub_2"
  ]
}
```

### Évènement host_status

```json
{
  "host": "my_host",
  "metric": "database.used.percent",
  "points": [[1630590530, 80]],
  "tags": [
    "instance:my_instance",
    "subinstance:sub_1",
    "subinstance:sub_2"
  ]
}
```

### Format d'évènement personnalisé

Ce stream connector n'est pas compatible avec le format d'événements personnalisé. Vous ne pouvez pas modifier le format de l'événement pour les stream connectors dédié aux métriques.

## Commandes Curl : tester le stream connector

### Envoyer des évènements

Si vous voulez tester que les évènements sont envoyés correctement à Datadog :

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à Datadog (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

```shell
curl -X POST -H "content-type: application/json" -H "DD-API-KEY: <api_key>" '<http_server_url><datadog_metric_endpoint>' -d '{"host":"my_host","metric":"database.used.percent","points":[[1630590530,80]],"tags":["service:my_service","instance:my_instance","subinstance:sub_1","subinstance:sub_2"]}'
```

Remplacez tous les *`<xxxx>`* dans la commande ci-dessus par la valeur correcte. *<http_server_url>* pourra être remplacé par *https://api.datadoghq.com*.

3. Vérifiez que l'évènement a bien été reçu par Datadog.
