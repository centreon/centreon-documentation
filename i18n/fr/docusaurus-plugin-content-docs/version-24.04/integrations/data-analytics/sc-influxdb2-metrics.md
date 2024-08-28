---
id: sc-influxdb2-metrics
title: - InfluxdDB 2 Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le stream connector InfluxdDB 2 Metrics vous permet d'envoyer des données depuis Centreon vers des instances InfluxdDB 2.

## Avant de commencer

- Dans la plupart des cas, vous enverrez les données depuis le serveur central. Il est également possible de les envoyer 
depuis un serveur distant ou un collecteur (par exemple si vous voulez éviter que le serveur central ne représente un point 
de défaillance unique, ou bien si vous êtes un MSP et vous installez le stream connector sur un collecteur ou un serveur distant dans l'infratructure de votre client).
- Par défaut, le stream connector InfluxdDB 2 Metrics envoie des métriques des évènements Broker [**host_status**](../../developer/developer-broker-mapping.md#host-status) 
et [**service_status**](../../developer/developer-broker-mapping.md#service-status). Ces métriques sont contenues dans le champ **perf_data** des évènements. 
Le format des évènements est décrit **[ici](#format-des-évènements)**.
- Ces évènements sont envoyés à chaque contrôle sur l'hôte ou le service. Des paramètres dédiés vous permettent de [ne pas envoyer certains évènements](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-influxdb2).

## Installation

Faites l'installation sur le serveur qui enverra les données à InfluxdDB 2 (serveur central, serveur distant, collecteur).

1. Connectez-vous en tant que `root` en utilisant votre client SSH préféré.

2. Exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-stream-connector-influxdb
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-stream-connector-influxdb
```

</TabItem>

<TabItem value="Debian 11 & 12" label="Debian_11_&_12">

```shell
apt install centreon-stream-connector-influxdb
```

</TabItem>
</Tabs>

## Configurer votre équipement InfluxdDB 2

Vous devrez paramétrer votre équipement InfluxdDB 2 pour qu'il puisse recevoir des données de la part de Centreon. Reportez-vous à la documentation InfluxdDB 2.
Assurez-vous que InfluxdDB 2 puisse recevoir les données envoyées par Centreon : les flux ne doivent pas être bloqués par la configuration de InfluxdDB 2 ou par un équipement de sécurité.

## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page **Configuration > Collecteurs > Configuration de Centreon Broker**.
2. Cliquez sur **central-broker-master** (ou sur la configuration du Broker correspondant si les évènements seront envoyés par un serveur distant ou un collecteur).
3. Dans l'onglet **Output**, sélectionnez **Generic - Stream connector** dans la liste, puis cliquez sur **Ajouter**. Un nouvel output apparaît dans la liste.
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                     |
| --------------- |------------------------------------------------------------|
| Name            | InfluxdDB 2 metrics                                          |
| Path            | /usr/share/centreon-broker/lua/influxdb2-metrics-apiv2.lua |
| Filter category | Neb                                                        |

5. Pour permettre à Centreon de se connecter à votre équipement InfluxdDB 2, remplissez les paramètres obligatoires suivants. La première entrée existe déjà. Cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category** pour en ajouter un autre.

| Type   | Nom             | Explication                                   | Exemple de valeur                                                                       |
| ------ |-----------------|-----------------------------------------------|-----------------------------------------------------------------------------------------|
| string | bucket_id       | The bucket ID where metrics will be sent      | `65f5f748e28c92f0`                                                                      |
| string | bucket_api_key  | The API key used to send data to the bucket   | `OGwOM8nse3FHjxyGw5ODLWWXS1oEpcPsjLcRl09zmCEbBE0TKgAiJiKOyKOBUZxoo76qe6-PTPq-70ECCwA==` |
| string | org_name        | The name of the InfluxdDB organization         | `centreon`                                                                              |
| string | http_server_url | The InfluxdDB address with the port at the end | `https://myinfluxdb2.local:8086`                                                        |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien **+Add a new entry**) :

| Type   | Nom         | Explication                                 | Valeur par défaut                              |
| ------ |-------------|---------------------------------------------|------------------------------------------------|
| string | logfile     | The file in which logs are written          | /var/log/centreon-broker/influxdb2-metrics.log |
| number | log_level   | Logging level from 1 (errors) to 3 (debug)  | 1                                              |

7. Utilisez les paramètres optionnels du stream connector pour [filtrer ou adapter les données que vous voulez que Centreon envoie à InfluxdDB 2](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-influxdb2).

8. [Déployez la configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Redémarrez **centengine** sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

   InfluxdDB 2 reçoit maintenant des données de Centreon. Pour tester le bon fonctionnement de l'intégration, voir [Commandes curl : tester le stream connector](#commandes-curl--tester-le-stream-connector).

### Filtrer ou adapter les données que vous voulez envoyer à InfluxdDB 2

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) qui vous permettent de filtrer les données que vous enverrez à votre équipement InfluxdDB 2, de reformater les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation correspondante.

* Pour surcharger la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category**, afin d'ajouter un paramètre personnalisé. Par exemple, si vous ne voulez envoyer à Influxdb 2 que les évènements traités par un collecteur nommé "poller-1", entrez :

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* Pour le stream connector InfluxdDB 2 Metrics, les données suivantes surchargent toujours les valeurs par défaut (il n'est pas nécessaire de les redéfinir dans l'interface).

| Type   | Nom                          | Valeur par défaut pour le stream connector |
| ------ |------------------------------|--------------------------------------------|
| string | influxdb2_api_endpoint       | `/api/v2/write`                            |
| string | influxdb2_precision          | `s`                                        |
| string | accepted_categories          | `neb`                                      |
| string | accepted_elements            | `host_status,service_status`               |
| number | hard_only                    | `0`                                        |
| number | enable_host_status_dedup     | `0`                                        |
| number | enable_service_status_dedup  | `0`                                        |
| string | metric_name_regex            | `([, =])`                                  |
| string | metric_replacement_character | `\\%1`                                     |
| number | use_deprecated_metric_system | `0`                                        |

> Pour les noms de métriques et remplacements voir [ici](https://docs.influxdata.com/influxdb/cloud/reference/syntax/line-protocol/#special-characters).

## Event bulking

Ce stream connector est compatible avec l'event bulking. Cela signifie qu'il est capable d'envoyer plus d'un évènement lors de chaque appel à l'API REST Spunk.

Pour utiliser cette fonctionnalité, vous devez ajouter le paramètre suivant à la configuration de votre stream connector.

| Type   | Nom             | Valeur          |
| ------ | --------------- | --------------- |
| number | max_buffer_size | `more than one` |

> Conformément aux [best practices](https://docs.influxdata.com/influxdb/cloud/write-data/best-practices/optimize-writes/#batch-writes), `max_buffer_size` est défini par défaut à 5000. Mais vous devriez réduire sa valeur à quelques centaines si vous avez moins de 10 000 services.

## Format des évènements

Ce stream connector envoie des évènements au format suivant :

### Évènement service_status

```
rta,type=service,service.name=my_service,host.name=central,poller=Central,metric.unit=ms value=0.008 1694370951
pl,type=service,service.name=my_service,host.name=central,poller=Central,metric.unit=% value=0.0 1694370951
```

### Évènement host_status

```
rta,type=host,host.name=central,poller=Central,metric.unit=ms value=0.008 1694370951
pl,type=host,host.name=central,poller=Central,metric.unit=% value=0.0 1694370951
```

### Format d'évènement personnalisé

Ce stream connector n'est pas compatible avec le format d'événements personnalisé.

## Commandes Curl : tester le stream connector

### Envoyer des évènements

Si vous voulez tester que les évènements sont envoyés correctement à InfluxdDB 2 :

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à InfluxdDB 2 (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

   ```shell
    curl -X POST -H 'content-type: text/plain; charset=utf-8' -H 'accept: application/json' -H 'Authorization: Token <bucket_api_key>' 'http://<http_server_url>/api/v2/write?bucket=<bucket_id>&org=<org_name>&precision=s' -d
   ```

   > Remplacez tous les *`<xxxx>`* dans la commande ci-dessus par la valeur correcte. Par exemple, *<bucket_id>* pourra être remplacé par *65f5f748e28c92f0*.

3. Vérifiez que l'évènement a bien été reçu par InfluxdDB 2.
