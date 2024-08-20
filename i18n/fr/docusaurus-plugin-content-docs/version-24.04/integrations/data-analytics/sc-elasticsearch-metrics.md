---
id: sc-elastic-metrics
title: Elastic Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Le stream connector Elasticsearch metrics vous permet d'envoyer des données depuis Centreon vers Elasticsearch.
Les métriques sont envoyées via les APIs Elasticsearch.

Un index template adapté est créé automatiquement par le stream connector afin que vos données soient indexées correctement dans Elasticsearch. (L'index template est la description du format des données qui seront envoyées.)

## Prérequis

Certaines dépendances sont installées par **luarocks**, qui se connecte à `https://github.com` pour récupérer celles-ci. Si la connexion à github est impossible, téléchargez la dernière version des bibliothèques Lua pour les stream connectors disponibles sur [cette page](https://github.com/centreon/centreon-stream-connector-scripts/releases): dans l'archive, copiez le répertoire **centreon-stream-connectors-lib** depuis le répertoire **modules** vers le dossier **/usr/share/lua/5.x/** de votre serveur (5.x étant la version de Lua installée, par exemple 5.4).

## Installation

Réalisez l'installation en `root` sur le serveur qui enverra les données vers Elasticsearch (serveur central, serveur distant, collecteur).

1. Installez les dépendances :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install luarocks make gcc lua-curl lua-devel wget
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install luarocks make gcc lua-curl lua-devel wget
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
apt install luarocks make gcc lua-curl lua-devel wget
```

</TabItem>
</Tabs>

2. Installez les bibliothèques Centreon Lua pour les stream connectors :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
luarocks install centreon-stream-connectors-lib
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
luarocks install centreon-stream-connectors-lib
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
luarocks install centreon-stream-connectors-lib
```

</TabItem>
</Tabs>

3. Installez le stream connector :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
wget -O /usr/share/centreon-broker/lua/elastic-metrics-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connectorscripts/develop/centreon-certified/elasticsearch/elastic-metrics-apiv2.lua
```

```shell
chmod 644 /usr/share/centreon-broker/lua/elastic-events-apiv2.lua
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
wget -O /usr/share/centreon-broker/lua/elastic-metrics-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connectorscripts/develop/centreon-certified/elasticsearch/elastic-metrics-apiv2.lua
```

```shell
chmod 644 /usr/share/centreon-broker/lua/elastic-events-apiv2.lua
```

</TabItem>

<TabItem value="Debian 11" label="Debian_11">

```shell
wget -O /usr/share/centreon-broker/lua/elastic-metrics-apiv2.lua https://raw.githubusercontent.com/centreon/centreon-stream-connectorscripts/develop/centreon-certified/elasticsearch/elastic-metrics-apiv2.lua
```

```shell
chmod 644 /usr/share/centreon-broker/lua/elastic-events-apiv2.lua
```

</TabItem>
</Tabs>

## Configurer votre serveur Elasticsearch

Vous devrez paramétrer votre équipement Elasticsearch pour qu'il puisse recevoir des données de la part de Centreon. Reportez-vous à la documentation Elasticsearch. Assurez-vous qu'Elasticsearch puisse recevoir les données envoyées par Centreon : les flux ne doivent pas être bloqués par la configuration d'Elasticsearch ou par un équipement de sécurité.

## Configurer le stream connector dans Centreon

1. Sur votre serveur central, allez à la page **Configuration > Collecteurs > Configuration de Centreon Broker**.
2. Cliquez sur **central-broker-master** (ou sur la configuration du Broker correspondant si les évènements seront envoyés par un serveur distant ou un collecteur).
3. Dans l'onglet **Output**, sélectionnez **Generic - Stream connector** dans la liste, puis cliquez sur **Ajouter**. Un nouvel output apparaît dans la liste.
4. Remplissez les champs de la manière suivante :

| Champ           | Valeur                                                   |
| --------------- | ------------------------------------------------------- |
| Name            | Elasticsearch metrics                                   |
| Path            | /usr/share/centreon-broker/lua/elastic-metrics-apiv2.lua |
| Filter category | Neb                                                     |

5. Pour permettre à Centreon de se connecter à votre équipement Elasticsearch, remplissez les paramètres obligatoires suivants. La première entrée existe déjà. Cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category** pour en ajouter un autre.

| Type   | Nom            | Description                       | Exemple                                           |
| ------ | --------------- | --------------------------------------- | ------------------------------------------------------- |
| string | http_server_url | L'adresse de votre serveur Elasticsearch, protocole et port inclus | Exemple: https://my_elasticsearch.local:9200 |

6. Renseignez les paramètres optionnels désirés (en utilisant le lien **+Add a new entry**) :

| Type   | Nom               | Description                                               | Valeur par défaut   |
| ------ | ----------------- | --------------------------------------------------------------- | ------------------------------------------- |
| string | elastic_username | Compte API auquel envoyer les données | |
| string | elastic_password | MOt de passe du compte API | |
| string | index_name | Nom de l'index Elasticsearch à utiliser | centreon-metrics |
| string | index_template_api_endpoint | Chemin de l'endpoint des templates d'index Elasticsearch | /_index_template |
| string | index_pattern | Par défaut, prend le nom de l'index et ajoute `*`. C'est le nom des index pour lesquels s'appliquera le template d'index lorsque ce dernier sera créé par le stream connector | centreon-metrics* |
| number | index_priority | La priorité de l'index lorsque le template d'index est créé par le stream connector | 200 |
| number | create_datastream_index_template | Le stream connector va automatiquement créer l'index template s'il ne trouve pas ce dernier (1 = création automatique, 0 = pas de template d'index créé) | 1 |
| number | update_datastream_index_template | le stream connector mettra à jour l'index template si ce dernier ne correspond pas aux données qui vont être envoyées. (1 = mise à jour automatique, 0 = pas de mise à jour automatique). Même si la mise à jour automatique est activée, elle ne fonctionnera que si l'index template a été créé par Centreon. (L'index template contient une metadonnée qui indique cela.) | 0 |
| number | add_hostgroups_dimension | Ajoute les groupes d'hôtes aux données envoyées. (1 = ajout des groupes d'hôtes, 0 = pas de groupes d'hôtes envoyés)  | 1 |
| number | add_poller_dimension | Ajoute le collecteur aux données envoyées. (1 = ajout du collecteur, 0 = pas de collecteur envoyé) | 0 |
| number | add_servicegroups_dimension | Ajoute les groupes de services aux données envoyées. (1 = ajout des groupes de services, 0 = pas
de groupes de services envoyés) | 0 |

7. Utilisez les paramètres optionnels du stream connector pour [filtrer ou adapter les données que vous voulez que Centreon envoie à Elasticsearch](#filtrer-ou-adapter-les-données-que-vous-voulez-envoyer-à-elasticsearch).

8. [Déployez la configuration](https://docs.centreon.com/fr/docs/monitoring/monitoring-servers/deploying-a-configuration/).

9. Redémarrez **centengine** sur tous les collecteurs :

   ```shell
   systemctl restart centengine
   ```

   Elasticsearch reçoit maintenant des données de Centreon. Pour tester le bon fonctionnement de l'intégration, voir [Commandes curl : tester le stream connector](#commandes-curl--tester-le-stream-connector).

### Filtrer ou adapter les données que vous voulez envoyer à Elasticsearch

Tous les stream connectors ont un jeu de [paramètres optionnels](https://github.com/centreon/centreon-stream-connector-scripts/blob/master/modules/docs/sc_param.md#default-parameters) qui vous permettent de filtrer les données que vous enverrez à votre équipement Elasticmetrics, de reformater les données, de définir un proxy...

Chaque paramètre optionnel a une valeur par défaut, qui est indiquée dans la documentation correspondante.

* Pour surcharger la valeur par défaut d'un paramètre, cliquez sur le lien **+Add a new entry** en-dessous du tableau **Filter category**, afin d'ajouter un paramètre personnalisé. Par exemple, si vous ne voulez envoyer à Elasticmetrics que les évènmenes traités par un collecteur nommé "poller-1", entrez :

   ```text
   type = string
   name = accepted_pollers
   value = poller-1
   ```

| Type   | Name                | Description |
| ------ | ------------------- | -------------------------------------- |
| string | accepted_pollers | Seules les métriques traitées par les collecteurs spécifiés ici seront envoyées (le séparateur est la virgule). Exemple : poller_1,poller_2                                    |
| string | accepted_hostgroups   | Seules les métriques rattachées aux groupes d'hôtes spécifiés ici seront envoyées (le séparateur est la virgule). Exemple : hg_1,hg_2             |
| string | accepted_servicegroups | eules les métriques rattachées aux groupes de services spécifiés ici seront envoyées (le séparateur est la virgule). Exemple : sg_1,sg_2 |
| string | accepted_metrics | [Pattern Lua](#exemples-de-patterns-lua) auquel doit correspondre le nom de la métrique. Si le nom ne correspond pas au pattern, la métrique n'est pas envoyée. Valeur par défaut : .* |
| string | accepted_hosts | [Pattern Lua](#exemples-de-patterns-lua) auquel doit correspondre le nom de l'hôte. Si le nom de l'hôte ne correspond pas au pattern, aucune métrique rattachée à cet hôte ne sera envoyée. |
| string | accepted_services | [Pattern Lua](#exemples-de-patterns-lua) auquel doit correspondre le nom du service. Si le nom du service ne correspond pas au pattern, aucune métrique rattachée à ce service ne sera envoyée. |
| number | accepted_hosts_enable_split_pattern | Lorsque cette option est activée, il est possible de filtrer à la fois sur une liste de noms d'hôtes ou une liste de [patterns lua](#exemples-de-patterns-lua) en utilisant la virgule comme séparateur. Exemple de liste : "host_1,host_2", exemple de pattern lua : "host_%d+,autre_host". (0 = désactivé, 1 = activé. Valeur par défaut : 0.) |
| number | accepted_services_enable_split_pattern |  Lorsque cette option est activée, il est possible de filtrer à la fois sur une liste de noms de services ou une liste de [patterns lua](#exemples-de-patterns-lua) en utilisant la virgule comme séparateur. Exemple de liste : "service_1,service_2", exemple de pattern lua : "service_%d+,autre_service" (0 = désactivé, 1 = activé. Valeur par défaut : 0.) |

* Pour le stream connector Elastic metrics, les données suivantes surchargent toujours les valeurs par défaut (il n'est pas nécessaire de les redéfinir dans l'interface). Mis à part le paramètre **max_buffer_size** qui est important pour les performances, il n'est pas recommandé de modifier ceux-ci.

| Type   | Nom                | Description | Valeur par défaut pour le stream connector |
| ------ | ------------------- | ------------ | -------------------------- |
| string | accepted_elements | Ne pas modifier ce paramètre | host_status,service_status |
| number | max_buffer_size | Nombre maximum de métriques envoyées en un paquet à Elasticsearch | 30 |
| number | hard_only | Envoie les métriques pour les évènements suivant qu'ils sont dans un état SOFT ou HARD (1 = seulement HARD, 0 = SOFT et HARD) | 0 |
| number | enable_host_status_dedup | Envoie des métriques pour tous les évènements touchant les hôtes, et pas seulement les changements d'état (0 = tous les évènements, 1 = uniquement les changements d'état) | 0 |
| number | enable_service_status_dedup | Envoie des métriques pour tous les évènements touchant les services, et pas seulement les changements d'état (0 = tous les évènements, 1 = uniquement les changements d'état)| 0 |

## Exemples de patterns Lua

Exemples de patterns Lua pour l'option **accepted_hosts** :

* Tous les hôtes dont le nom commence par "CENTREON" :

```shell
^CENTREON.*
```

* Tous les hôtes dont le nom ne finit pas par un chiffre :

```shell
.*[^0-9]$
```

* Tous les hôtes dont le nom contient un `.`:

```shell
.*%..*
```

* Tous les hôtes dont le nom contient uniquement des lettre minuscules :

```shell
%l+
```

* Tous les hôtes dont le nom ne finit pas par un chiffre, ou dont le nom commence par "CENTREON" (si l'option **accepted_hosts_enable_split_pattern** est activée, vous pouvez combiner plusieurs filtres) :


```shell
^CENTREON.*,.*[^0-9]$
```

## Format des évènements

Voici un exemple de données envoyées par le stream connector :

```shell
{"index":{}}
{"@timestamp":1700229605,"metric_value":0.045,"host_name":"127.0.0.1","metric_instance":"","metric_name":"rtmin","host_groups":["HG"]}
{"index":{}}
{"@timestamp":1700229605,"metric_value":0.045,"host_name":"127.0.0.1","metric_instance":"","metric_name":"rta","host_groups":["HG"]}
{"index":{}}
{"@timestamp":1700229605,"metric_value":0.0,"host_name":"127.0.0.1","metric_instance":"","metric_name":"pl","host_groups":["HG"]}
{"index":{}}
{"@timestamp":1700229605,"metric_value":0.045,"host_name":"127.0.0.1","metric_instance":"","metric_name":"rtmax","host_groups":["HG"]}
```

## Options de debug

Vous pouvez ajouter les options suivantes à votre configuration afin de vous aider à débugger :

| Type   | Nom                | Description | Valeur par défaut pour le stream connector |
| ------ | ------------------- | ------------ | -------------------------- |
| string | logfile | Fichier de log par défaut pour le stream connector (en cas de problème, il est également possible de trouver des informations dans /var/log/centreon-broker/central-broker-master.log) | /var/log/centreonbroker/
elastic-metrics.log |
| number | log_level | niveau de verbosité, de 1 à 3, (1 = notice et errors, 2 =
warning, notice et errors, 3 = warning, notice, errors, info, debug). Il est fortement recommandé de ne pas définir une valeur supérieure à 2. | 1 |
| number | log_curl_commands | Affiche toutes les commandes curl utilisées par le stream connector dans le fichier de log (0 = ne rien afficher, 1 = logguer les commandes) | 0 |
| number | send_data_test | Simule le fonctionnement du stream connector de bout en bout, mais envoie les données au fichier de log plutôt qu'à Elasticsearch (0 = envoyer à Elasticsearch, 1 = envoyer au fichier de log) | 0 |

## Commandes Curl : tester le stream connector

### Envoyer des métriques

Si vous voulez tester que les évènements sont envoyés correctement à Elasticsearch :

1. Connectez-vous au serveur que vous avez configuré pour envoyer les évènements à Elasticsearch (le serveur central, un serveur distant ou un collecteur)
2. Exécutez la commande suivante :

```shell
curl -X PUT -u "<user>:<password>" -H 'Content-type: application/json'
'<protocol>://<address>:<port>/<index_name>/_bulk' -d '{"index":{}}
{"poller":"Central","metric.value":0.0,"@timestamp":1690808140,"host.groups":
["HG_1","ALL"],"host.name":"central","metric.name":"rta","metric.instance":""}
{"index":{}}
{"poller":"Central","metric.value":0.0,"@timestamp":1690808140,"host.groups":
["HG_1","ALL"],"host.name":"central","metric.name":"rtmin","metric.instance":""}
'
```
  
> Remplacez tous les *`<xxxx>`* dans la commande ci-dessus par la valeur correcte.

3. Vérifiez que les 2 métriques ont été reçues par Elasticsearch.

### Vérifier l'index template

Si vous ne recevez pas les données attendues, vérifiez que votre index template est correct.

```shell
curl -X GET -u "<user>:<password>" -H 'Content-type: application/json'
'<protocol>://<address>:<port>/_index_template/<index_template_name>'
```

### Créer un index template

Vous pouvez créer un index template manuellement. Utilisez l'exemple ci-dessous :

```shell
curl -X PUT -u "<user>:<password>" -H 'Content-type: application/json'
'<protocol>://<address>:<port>/_index_template/<index_template_name>' -d
'{"priority":200,"index_patterns":["my_index*"],"_meta":
{"created_by_centreon":true,"description":"Timeseries index template for Centreon
metrics"},"template":{"mappings":{"properties":{"service.groups":
{"type":"keyword","time_series_dimension":false},"host.name":
{"type":"keyword","time_series_dimension":true},"poller":
{"type":"keyword","time_series_dimension":true},"metric.unit":
{"type":"keyword","time_series_dimension":false},"@timestamp":
{"type":"date","format":"epoch_second"},"metric.value":
{"type":"double"},"service.description":
{"type":"keyword","time_series_dimension":true},"host.groups":
{"type":"keyword","time_series_dimension":false},"metric.subinstances":
{"type":"keyword","time_series_dimension":false},"metric.name":
{"type":"keyword","time_series_dimension":true},"metric.instance":
{"type":"keyword","time_series_dimension":true}}},"settings":
{"index.mode":"time_series","index.routing_path":
["host.name","service.description","metric.name","metric.instance","poller"]}}}'
```
