---
id: cloud-gcp-cloudsql-mysql
title: Google CloudSQL MySQL
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack Google CloudSQL MySQL collecte les données pour:
* Cpu
* Innodb
* Network
* Queries
* Storage

### Règles de découverte

Le Plugin-Pack Centreon *Google CloudSQL MySQL* inclut un *provider* de découverte d'Hôtes.
Celui-ci permet de découvrir l'ensemble des bases de données MySQL rattachées à un projet GCP donné:

![image](../../../assets/integrations/plugin-packs/procedures/cloud-gcp-cloudsql-mysql-provider.png)

> Le fichier *key* doit être déployé sur les Collecteurs utilisés pour la découverte en amont de son execution (voir chapitre Prérequis) 

Vous trouverez plus d'informations sur la découverte d'Hôtes et son fonctionnement sur la documentation du module:
[Découverte des hôtes](../../../monitoring/discovery/hosts-discovery.html)

### Métriques collectées

Pour l'ensemble des métriques collectées, il est possible de choisir *aggregation*: _average_, _minimum_, _maximum_ et _total_.

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                                                     | Description                                          | Unit  |
| :-------------------------------------------------------------- | :--------------------------------------------------- | :---- |
| *database_id*~*aggregation*#database.cpu.utilization.percentage | Utilization of the reserved CPU                      | %     |
| *database_id*~*aggregation*#database.cpu.reserved_cores.count   | Number of cores reserved for the database instance   |       |

<!--Innodb-->

| Metric name                                                               | Description                                              | Unit  |
| :------------------------------------------------------------------------ | :------------------------------------------------------- | :---- |
| *database_id*~*aggregation*#database.mysql.innodb.data_fsyncs.count       | Count of InnoDB fsync() calls                            |       |
| *database_id*~*aggregation*#database.mysql.innodb.data_fsyncs.persecond   | Count of InnoDB fsync() calls per second                 |       |
| *database_id*~*aggregation*#database.mysql.innodb.os_log_fsyncs.count     | Count of InnoDB fsync() calls to the log file            |       |
| *database_id*~*aggregation*#database.mysql.innodb.os_log_fsyncs.persecond | Count of InnoDB fsync() calls per second to the log file |       |
| *database_id*~*aggregation*#database.mysql.innodb.pages_read.count        | Count of InnoDB pages read                               |       |
| *database_id*~*aggregation*#database.mysql.innodb.pages_read.persecond    | Count of InnoDB pages read per second                    |       |
| *database_id*~*aggregation*#database.mysql.innodb.pages_written.count     | Count of InnoDB pages written                            |       |
| *database_id*~*aggregation*#database.mysql.innodb.pages_written.persecond | Count of InnoDB pages written per second                 |       |

<!--Network-->

| Metric name                                                                 | Description                                            | Unit  |
| :-------------------------------------------------------------------------- | :----------------------------------------------------- | :---- |
| *database_id*~*aggregation*#database.network.connections.count              | Number of connections to databases                     |       |
| *database_id*~*aggregation*#database.network.received.volume.bytes          | Count of bytes received through the network            | B     |
| *database_id*~*aggregation*#database.network.received.volume.bytespersecond | Count of bytes received per second through the network | B/s   |
| *database_id*~*aggregation*#database.network.sent.volume.bytes              | Count of bytes sent through the network                | B     |
| *database_id*~*aggregation*#database.network.sent.volume.bytespersecond     | Count of bytes sent per second through the network     | B/s   |

<!--Queries-->

| Metric name                                                    | Description                                                              | Unit  |
| :------------------------------------------------------------- | :----------------------------------------------------------------------- | :---- |
| *database_id*~*aggregation*#database.mysql.questions.count     | Count of statements executed by the server sent by the client            |       |
| *database_id*~*aggregation*#database.mysql.questions.persecond | Count of statements per second executed by the server sent by the client |       |
| *database_id*~*aggregation*#database.mysql.queries.count       | Count of statements executed by the server                               |       |
| *database_id*~*aggregation*#database.mysql.queries.persecond   | Count of statements per second executed by the server                    |       |

<!--Storage-->

| Metric name                                                             | Description                                       | Unit  |
| :---------------------------------------------------------------------- | :------------------------------------------------ | :---- |
| *database_id*~*aggregation*#database.space.usage.bytes                  | Data utilization                                  | B     |
| *database_id*~*aggregation*#database.disk.read.io.operations.count      | Count of data disk read IO operations             |       |
| *database_id*~*aggregation*#database.disk.read.io.operations.persecond  | Count of data disk read IO operations per second  |       |
| *database_id*~*aggregation*#database.disk.write.io.operations.count     | Count of data disk write IO operations            |       |
| *database_id*~*aggregation*#database.disk.write.io.operations.persecond | Count of data disk write IO operations per second |       |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Privilèges Google Cloud

Créer une *clé de compte de service* (télécharger sa clé privée sous la forme d'un fichier JSON) avec les privilèges suivants:

| Google Scope                                     | Description                                                     |
| :----------------------------------------------- | :-------------------------------------------------------------- |
| https://www.googleapis.com/auth/cloud-platform   | View and manage your data across Google Cloud Platform services |

Comment créer une clé de compte de service: https://developers.google.com/identity/protocols/oauth2/service-account

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Cloud-Gcp-CloudSQL-MySQL-Api
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Google CloudSQL MySQL* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Cloud-Gcp-CloudSQL-MySQL-Api
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-cloud-gcp-cloudsql-mysql
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Google CloudSQL MySQL* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par instance Google CloudSQL MySQL.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *Cloud-Gcp-CloudSQL-MySQL-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory   | Name                 | Description                                                                                 |
| :---------- | :------------------- | :------------------------------------------------------------------------------------------ |
| X           | GCPKEYFILEPATH       | Service account key json file                                                               |
| X           | GCPSCOPEENDPOINT     | Google Scope. Default: https://www.googleapis.com/auth/cloud-platform                       |
| X           | GCPDIMENSIONNAME     | The name of the dimension to filter on. Default: resource.labels.database_id                |
| X           | GCPDIMENSIONOPERATOR | Define the type of filter match to use. Default: equals                                     |
| X           | GCPDIMENSIONVALUE    | ID of the database you want to monitor.                                                     |
|             | PROXYURL             | Configure proxy URL                                                                         |
|             | GCPEXTRAOPTIONS      | Any extra option you may want to add to every command_line (eg. a --verbose flag)           |
|             | DUMMYSTATUS          | Host state. Default is OK, do not modify it until you know what you are doing               |
|             | DUMMYOUTPUT          | Host check output. Default is 'This is a dummy check'. Customize it with your own if needed |

> **WARNING**: La clé de service (format json) doit être hébergée sur le collecteur Centreon. L'utilisateur *centreon-engine* doit avoir les droits en lecture sur ce fichier.

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_gcp_cloudsql_mysql_api.pl \
    --plugin=cloud::google::gcp::cloudsql::mysql::plugin \
    --mode=cpu \
    --key-file=/var/lib/centreon-engine/centreon-dev-6e5531fc9e82.json \
    --dimension-name='resource.labels.database_id' \
    --dimension-operator='equals' \
    --dimension-value='centreon-dev:centreon-mysql' \
    --aggregation='average' \
    --warning-utilization='90' \
    --critical-utilization='95' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: Instance 'centreon-dev:centreon-mysql' aggregation 'average' metrics cpu utilization: 2.40 %, cpu reserved cores: 1.00 | 'centreon-dev:centreon-mysql~average#database.cpu.utilization.percentage'=2.40%;0:95;;0;100 'centreon-dev:centreon-mysql~average#database.cpu.reserved_cores.count'=1.00;;;;
Checking 'centreon-dev:centreon-mysql' 
    aggregation 'average' metrics cpu utilization: 2.40 %, cpu reserved cores: 1.00
```

Cette commande contrôle l'utilisation processeur (```--mode=cpu```) d'une instance Google MySQL 
ayant pour nom *centreon-dev:centreon-mysql* (```--dimension-name='resource.labels.database_id' --dimension-operator='equals' --dimension-value='centreon-dev:centreon-mysql'```).

Cette commande déclenchera une alarme WARNING si l'utilisation processeur est supérieur à 90% (```--warning-utilization='90'```)
et une alarme CRITICAL si supérieur à 95% (```--critical-utilization='95'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_gcp_cloudsql_mysql_api.pl \
    --plugin=cloud::google::gcp::cloudsql::mysql::plugin \
    --mode=cpu \
    --help
```

### J'obtiens le message d'erreur suivant: ```UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values```

Lors du déploiement de mes contrôles, j'obtiens le message suivant 'UNKNOWN: No metrics. Check your options or use --zeroed option to set 0 on undefined values'. 

Cela signifie qu'il n'y a pas de données sur la période.

Vous pouvez ajouter ```--zeroed``` à la macro EXTRAOPTIONS du **service** en question afin de forcer le stockage d'un 0 et ainsi éviter un statut UNKNOWN.

