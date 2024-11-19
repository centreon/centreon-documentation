---
id: sc-clickhouse
title: Clickhouse
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Avant de commencer

- Dans la plupart des cas, vous enverrez les données depuis le serveur central. Il est également possible de les envoyer depuis un serveur distant ou un collecteur (par exemple si vous voulez éviter que le serveur central ne représente un point de défaillance unique, ou bien si vous êtes un MSP et vous installez le stream connector sur un collecteur ou un serveur distant dans l'infratructure de votre client).
- Par défaut, le stream connector Clickhouse envoie des métriques des évènements Broker [**host_status**](../../developer/developer-broker-mapping.md#host-status) et [**service_status**](../../developer/developer-broker-mapping.md#service-status). Ces métriques sont contenues dans le champ **perf_data** des évènements. Le format des évènements est décrit **[ici](#event-format)**.
- Ces évènements sont envoyés à chaque contrôle sur l'hôte ou le service. Des paramètres dédiés vous permettent de [ne pas envoyer certains évènements](#filtering-or-adapting-the-data-you-want-to-send-to-clickhouse).

## Prérequis

- L'interface HTTP Clickhouse doit être activée. [(Documentation Clickhouse)](https://clickhouse.com/docs/en/interfaces/http).
- Vous devez disposer d'un utilisateur valide (et de son mot de passe), qui puisse effectuer des **INSERT** dans la table désirée.
- Vous devez créer une table dans Clickhouse qui recevra les données en provenance de Centreon. Voici le schéma de la table (vous pouvez changer les noms de la base de données et de la table : elles sont toutes les deux configurables dans le stream connector).

### Schéma de table standard

Voici le schéma par défaut à utiliser.

```sql
CREATE TABLE centreon_stream.metrics
(
  host String,
  service String,
  metric_id String,
  metric_name String,
  metric_unit String,
  metric_value Decimal,
  metric_min Decimal,
  metric_max Decimal,
  timestamp DateTime,
  hostgroups Array(String)
)
ENGINE = MergeTree()
PRIMARY KEY (timestamp, host, service, metric_name, metric_id)
```

### Schéma de table alternatif

> Attention : n'utilisez ce schéma que si vous voulez absolument récupérer le metric_id interne de Centreon. Cela entraîne la perte de nombreuses possibilités, telles que l'accès aux unités des métriques, à leur min, max...

> Pour utiliser ce schéma, reportez-vous à la documentation du paramètre **use_deprecated_metric_system** ci-dessous ([étape 6 de la procédure Configurer le stream connector dans Centreon](#configurer-le-stream-connector-dans-centreon)).

```sql
CREATE TABLE centreon_stream.metrics
(
  host String,
  service String,
  metric_id BIGINT,
  metric_name String,
  metric_value Decimal,
  timestamp DateTime,
  hostgroups Array(String)
)
ENGINE = MergeTree()
PRIMARY KEY (timestamp, host, service, metric_name, metric_id)
```

## Installation

Faites l'installation sur le serveur qui enverra les données à Clickhouse (serveur central, serveur distant, collecteur).

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

1. Connectez-vous en tant que `root` en utilisant votre client SSH préféré.

2. Installez le dépôt **Epel**.

```shell
dnf install epel-release
```

3. Installez les modules lua Centreon.

```shell
dnf install centreon-stream-connectors-lib
```

4. Téléchargez le stream connector Clickhouse :

```shell
wget -O /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/develop/centreon-certified/clickhouse/clickhouse-metrics-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

1. Connectez-vous en tant que `root` en utilisant votre client SSH préféré.

2. Installez le dépôt **Epel**.

```shell
dnf install epel-release
```

3. Installez les modules lua Centreon.

```shell
dnf install centreon-stream-connectors-lib
```

4. Téléchargez le stream connector Clickhouse :

```shell
wget -O /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/develop/centreon-certified/clickhouse/clickhouse-metrics-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

1. Connectez-vous en tant que `root` en utilisant votre client SSH préféré.

2. Installez les modules lua Centreon.

```shell
dnf install centreon-stream-connectors-lib
```

3. Téléchargez le stream connector Clickhouse :

```shell
wget -O /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connector-scripts/develop/centreon-certified/clickhouse/clickhouse-metrics-apiv2.lua
chmod 644 /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua
```

</TabItem>
</Tabs>

## Configurer votre équipement Clickhouse

Vous devrez paramétrer votre équipement Clickhouse pour qu'il puisse recevoir des données de la part de Centreon. Reportez-vous à la documentation Clickhouse.
Assurez-vous que Clickhouse puisse recevoir les données envoyées par Centreon : les flux ne doivent pas être bloqués par la configuration de Clickhouse ou par un équipement de sécurité.

## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page **Configuration > Collecteurs > Configuration de Centreon Broker**.
2. Cliquez sur **central-broker-master** (ou sur la configuration du Broker correspondant si les évènements seront envoyés par un serveur distant ou un collecteur).
3. Dans l'onglet **Output**, sélectionnez **Generic - Stream connector** dans la liste, puis cliquez sur **Ajouter**. Un nouvel output apparaît dans la liste.
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                      |
| --------------- | ----------------------------------------------------------- |
| Name            | Clickhouse metrics                                          |
| Path            | /usr/share/centreon-broker/lua/clickhouse-metrics-apiv2.lua |
| Filter category | Neb                                                         |

5. Pour permettre à Centreon de se connecter à votre équipement Clickhouse, remplissez les paramètres obligatoires suivants. La première entrée existe déjà. Cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category** pour en ajouter un autre.

| Type   | Nom             | Explication                                          | Exemple                   |
| ------ | --------------- | ----------------------------------------------------------- | ------------------------------- |
| string | user            | Utilisateur Clickhouse à utiliser                           | centreon                        |
| string | password        | Mot de passe de cet utilisateur                             | centreon                        |
| string | http_server_url | Adresse du serveur Clickhouse (inclure le protocole et le port) | https://myclickhouse.local:8123 |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien **+Add a new entry**) :

| Type   | Nom                         | Explication                                          | Valeur par défaut   |
| ------ | ---------------------------- | ------------------------------------------------------------- | --------------- |
| string | clickhouse_database          | Nom de la base de données dans laquelle la table désirée est stockée | centreon_stream |
| string | clickhouse_table             | Table dans laquelle les métriques sont écrites                       | metrics         |
| number | use_deprecated_metric_system | Si la valeur est 1, le schéma de table alternatif sera utilisé  | 0               |

7. Utilisez les paramètres optionnels du stream connector pour [filtrer ou adapter les données que vous voulez que Centreon envoie à Clickhouse](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-clickhouse).

8. [Déployez la configuration](../../monitoring/monitoring-servers/deploying-a-configuration.md).

9. Redémarrez **centengine** sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

   Clickhouse reçoit maintenant des données de Centreon. Pour tester le bon fonctionnement de l'intégration, voir [Commandes curl : tester le stream connector](#curl-commands-testing-the-stream-connector).

### Filtrer ou adapter les données que vous voulez envoyer à Clickhouse

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) qui vous permettent de filtrer les données que vous enverrez à votre équipement Clickhouse, de reformater les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation correspondante.

* Pour surcharger la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category**, afin d'ajouter un paramètre personnalisé. Par exemple, si vous ne voulez envoyer à Clickhouse que les évènements traités par un collecteur nommé "poller-1", entrez :

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

* Pour le stream connector Clickhouse, les données suivantes surchargent toujours les valeurs par défaut (il n'est pas nécessaire de les redéfinir dans l'interface).

| Type   | Nom                        | Valeur par défaut pour le stream connector | Notes                                                                                                                                                                                                                   |
| ------ | --------------------------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| string | accepted_categories         | neb                                    |                                                                                                                                                                                                                                    |
| string | accepted_elements           | host_status,service_status             |                                                                                                                                                                                                                                    |
| string | max_buffer_size             | 1000                                   | Baissez cette valeur jusqu'à environ 100 si vous avez moins de 10 000 services. Si vous effectuez des opérations de dépannage avec les paramètres log_curl_commands et/ou send_data_test, vous pouvez baisser cette valeur en-dessous de 10. |
| number | hard_only                   | 0                                      |                                                                                                                                                                                                                                    |
| number | enable_host_status_dedup    | 0                                      |                                                                                                                                                                                                                                    |
| number | enable_service_status_dedup | 0                                      |                                                                                                                                                                                                                                    |

## Event bulking

Ce stream connector est compatible avec l'event bulking. Cela signifie qu'il est capable d'envoyer plus d'un évènement lors de chaque appel à l'API REST Spunk.

Pour utiliser cette fonctionnalité, vous devez ajouter le paramètre **max_buffer_size** à la configuration de votre stream connector.

## Format des évènements

Ce stream connector envoie des évènements au format suivant :

### Évènement service_status

```sql
INSERT INTO centreon_stream.metrics (host, timestamp, metric_name, metric_value, service, hostgroups, metric_id, metric_unit, metric_min, metric_max) VALUES ('central_1',1702910747,'rtmin',0.005,'Ping',['hg'],'10-8-rtmin','ms',,),('central_1',1702910747,'rta',0.061,'Ping',['hg'],'10-8-rta','ms',0.0,),('central_1',1702910747,'pl',0.0,'Ping',['hg'],'10-8-pl','%',0.0,100.0)
```

### Évènement host_status

```sql
INSERT INTO centreon_stream.metrics (host, timestamp, metric_name, metric_value, service, hostgroups, metric_id, metric_unit, metric_min, metric_max) VALUES ('central_3',1702910932,'rtmin',0.0,'Ping',['hg'],'12-10-rtmin','ms',,),('central_3',1702910932,'rta',0.0,'Ping',['hg'],'12-10-rta','ms',0.0,),('central_3',1702910932,'pl',100.0,'Ping',['hg'],'12-10-pl','%',0.0,100.0)
```

### Résultat dans Clickhouse

```txt
┌─host────┬─service─┬─metric_name─┬─metric_unit─┬─metric_value─┬─metric_min─┬─metric_max─┬───────────timestamp─┬─hostgroups─────────────┐
│ central │         │ pl          │ %           │            0 │          0 │        100 │ 2023-11-27 14:23:31 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ rta         │ ms          │        0.052 │          0 │          0 │ 2023-11-27 14:23:31 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ rtmax       │ ms          │        0.052 │          0 │          0 │ 2023-11-27 14:23:31 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ rtmin       │ ms          │        0.052 │          0 │          0 │ 2023-11-27 14:23:31 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ pl          │ %           │            0 │          0 │        100 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ pl          │ %           │            0 │          0 │        100 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ rta         │ ms          │        0.013 │          0 │          0 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ rta         │ ms          │        0.013 │          0 │          0 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ rtmax       │ ms          │        0.049 │          0 │          0 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ rtmax       │ ms          │        0.049 │          0 │          0 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ rtmin       │ ms          │        0.004 │          0 │          0 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │ Ping    │ rtmin       │ ms          │        0.004 │          0 │          0 │ 2023-11-27 14:26:51 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ pl          │ %           │            0 │          0 │        100 │ 2023-11-27 14:28:11 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ rta         │ ms          │        0.027 │          0 │          0 │ 2023-11-27 14:28:11 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ rtmax       │ ms          │        0.027 │          0 │          0 │ 2023-11-27 14:28:11 │ ['hg_1','hg_2','hg_3'] │
│ central │         │ rtmin       │ ms          │        0.027 │          0 │          0 │ 2023-11-27 14:28:11 │ ['hg_1','hg_2','hg_3'] │
└─────────┴─────────┴─────────────┴─────────────┴──────────────┴────────────┴────────────┴─────────────────────┴────────────────────────┘
```

### Format d'évènements personnalisés

Il n'est pas possible de changer le format des évènements pour les stream connectors orientés métriques. Vous ne pouvez donc pas envoyer d'autres évènements Broker contenant des données de performance.

## Commandes Curl : tester le stream connector

### Envoyer des évènements

Si vous voulez tester que les évènements sont envoyés correctement à Clickhouse :

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à Clickhouse (le serveur central, un serveur distant ou un collecteur).
2. Exécutez la commande suivante :

```shell
curl -X POST -H 'X-ClickHouse-User: <user>' -H 'X-ClickHouse-Key: <password>' '\<http_server_url\>' -d 'INSERT INTO <clickhouse_database>.<clickhouse_table> (host, timestamp, metric_name, metric_value, service, hostgroups, metric_id, metric_unit, metric_min, metric_max) VALUES ('central_2',1702910872,'rtmin',0.0,'Ping',['hg'],'11-9-rtmin','ms',,),('central_2',1702910872,'rta',0.0,'Ping',['hg'],'11-9-rta','ms',0.0,),('central_2',1702910872,'pl',100.0,'Ping',['hg'],'11-9-pl','%',0.0,100.0)'
```

> Remplacez tous les *`<xxxx>`* dans la commande ci-dessus par la valeur correcte. Par exemple, *`<clickhouse_database>`* pourra être remplacé par *centreon_stream*.

3. Vérifiez que l'évènement a bien été reçu par Clickhouse.
