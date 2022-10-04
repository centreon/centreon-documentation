---
id: applications-databases-postgresql
title: PostgreSQL DB
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon PostgreSQL apporte un modèle d'hôte :

* App-DB-Postgres-custom

Il apporte les modèles de service suivants :

| Service Alias     | Service Template                  | Service Description                                                                                 | Default | Discovery |
|:------------------|:----------------------------------|:----------------------------------------------------------------------------------------------------|:--------|:----------|
| Bloat             | App-DB-Postgres-Bloat             | Contrôle l'espace libre des tables et btrees                                                        |         |           |
| Cache-Hitratio    | App-DB-Postgres-Cache-Hitratio    | Contrôle permettant de vérifier le buffer cache hitratio                                            | X       |           |
| Collection        | App-DB-Postgres-Collection        | Collecte et calcule des données SQL                                                                 |         |           |
| Connection        | App-DB-Postgres-Connection        | Contrôle la connexion à une base de données                                                         | X       |           |
| Connection-Number | App-DB-Postgres-Connection-Number | Contrôle le nombre de connexion aux bases de données                                                | X       |           |
| Database-Size     | App-DB-Postgres-Database-Size     | Contrôle la taille des bases de données                                                             |         | X         |
| Locks             | App-DB-Postgres-Locks             | Contrôle les verrous des bases de données                                                           | X       |           |
| Query-Time        | App-DB-Postgres-Query-Time        | Contrôle permettant de vérifier le temps d'exécution des requêtes en cours sur les bases de données | X       |           |
| Sql-Statement     | App-DB-Postgres-Sql-Statement     | Contrôle permettant d'exécuter une requête SQL personnalisée renvoyant une donnée numérique         |         |           |
| Statistics        | App-DB-Postgres-Statistics        | Contrôle les statistiques des types de requêtes sur les bases de données                            |         |           |
| Tablespace-Size   | App-DB-Postgres-Tablespace-Size   | Contrôle l'utilisation des tablespaces                                                              |         |           |
| Time-Sync         | App-DB-Postgres-Time-Sync         | Contrôle la différence de temps entre le collecteur et la base de données                           |         |           |
| Vacuum            | App-DB-Postgres-Vacuum            | Contrôle la dernière exécution du vacuum                                                            |         |           |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Nom de la règle                | Description                                                 |
|:-------------------------------|:------------------------------------------------------------|
| App-DB-Postgres-Databases-Size | Découvre les bases de données et supervise l'espace utilisé |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](https://docs.centreon.com/fr/docs/monitoring/discovery/services-discovery/#r%C3%A8gles-de-d%C3%A9couverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="metrics">
<TabItem value="Bloat" label="Bloat">

| Metric Name                                        | Unit  |
|:---------------------------------------------------|:------|
| *db_name~table_name*#table.space.usage.bytes       | B     |
| *db_name~table_name*#table.space.free.bytes        | B     |
| *db_name~table_name*#table.dead_tuple.bytes        | B     |
| *db_name~index_name*#index.space.usage.bytes       | B     |
| *db_name~index_name*#index.leaf_density.percentage | %     |

</TabItem>
<TabItem value="Cache-Hitratio" label="Cache-Hitratio">

| Metric Name                                    | Unit  |
|:-----------------------------------------------|:------|
| *db_name*#database.hitratio.average.percentage | %     |
| *db_name*#database.hitratio.delta.percentage   | %     |

</TabItem>
<TabItem value="Connection" label="Connection">

| Metric Name                  | Unit  |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Metric Name                                | Unit  |
|:-------------------------------------------|:------|
| *db_name*#database.clients.connected.count |       |

</TabItem>
<TabItem value="Database-Size" label="Database-Size">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| *db_name*#database.space.usage.bytes | B     |

</TabItem>
<TabItem value="Locks" label="Locks">

| Metric Name                              | Unit  |
|:-----------------------------------------|:------|
| *db_name~lock_type*#database.locks.count |       |

</TabItem>
<TabItem value="Query-Time" label="Query-Time">

| Metric Name                          | Unit  |
|:-------------------------------------|:------|
| *db_name*#database.longqueries.count |       |

</TabItem>
<TabItem value="Statistics" label="Statistics">

| Metric Name                      | Unit  |
|:---------------------------------|:------|
| queries.commit.count             |       |
| queries.rollback.count           |       |
| queries.insert.count             |       |
| queries.update.count             |       |
| queries.delete.count             |       |
| *db_name*#queries.commit.count   |       |
| *db_name*#queries.rollback.count |       |
| *db_name*#queries.insert.count   |       |
| *db_name*#queries.update.count   |       |
| *db_name*#queries.delete.count   |       |

</TabItem>
<TabItem value="Tablespace-Size" label="Tablespace-Size">

| Metric Name                                    | Unit  |
|:-----------------------------------------------|:------|
| *tablespace_name*#tablespace.space.usage.bytes | B     |

</TabItem>
<TabItem value="Time-Sync" label="Time-Sync">

| Metric Name         | Unit  |
|:--------------------|:------|
| time.offset.seconds | s     |

</TabItem>
<TabItem value="Vacuum" label="Vacuum">

| Metric Name                   | Unit  |
|:------------------------------|:------|
| vacuum.last_execution.seconds | s     |

</TabItem>
</Tabs>


## Prérequis

Pour superviser votre serveur PostgreSQL, créez un utilisateur dédié en lecture seule :

```
CREATE USER centreonro WITH PASSWORD 'test';
GRANT CONNECT ON DATABASE postgres TO centreonro;
GRANT USAGE ON SCHEMA public TO centreonro;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO centreonro;
GRANT SELECT ON ALL SEQUENCES IN SCHEMA public TO centreonro;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT SELECT ON TABLES TO centreonro;
```

Pour utiliser le service **Tablespace-Size**, un utilisateur avec les droits de administrateurs est nécessaire.

Pour utiliser le service **Bloat**, veuillez installer l'extension **pgstattuple** (https://docs.postgresql.fr/13/pgstattuple.html) et ajoutez les privilèges :

```
GRANT EXECUTE ON FUNCTION pgstattuple(regclass) TO centreonro;
GRANT EXECUTE ON FUNCTION pgstatindex(regclass) TO centreonro;
```

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **PostgreSQL** :

```bash
yum install centreon-plugin-Applications-Databases-Postgresql
```

2. Sur l'interface web de Centreon, installer le Pack **PostgreSQL** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **PostgreSQL** :

```bash
yum install centreon-plugin-Applications-Databases-Postgresql
```

2. Sur le serveur central Centreon, installer le RPM du Pack **PostgreSQL** :

```bash
yum install centreon-pack-applications-databases-postgresql
```

3. Sur l'interface web de Centreon, installer le Pack **PostgreSQL** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** et **IP Address/DNS** correspondant à votre serveur **PostgreSQL**.
* Appliquez le Modèle d'Hôte **App-DB-Postgres-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (*Obligatoire*) doivent être renseignées.

| Obligatoire | Macro                | Description                                                                       |
|:------------|:---------------------|:----------------------------------------------------------------------------------|
| X           | POSTGRESUSERNAME     |                                                                                   |
| X           | POSTGRESPASSWORD     |                                                                                   |
|             | POSTGRESPORT         | Port used (Default: 5432)                                                         |
|             | POSTGRESDATABASE     | Database connection (Default: postgres)                                           |
|             | POSTGRESEXTRAOPTIONS | Any extra option you may want to add to every command line (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins/centreon_postgresql.pl \
    --plugin=database::postgres::plugin \
    --mode=connection-time \
    --hostname=10.0.0.1 \
    --database=postgres \
    --port=5432 \
    --username='centreonro' \
    --password='test'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Connection established in 0.533s. | 'connection.time.milliseconds'=533ms;;;0;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_postgresql.pl \
    --plugin=database::postgres::plugin \
    --mode=connection-time \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_postgresql.pl \
    --plugin=database::postgres::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
