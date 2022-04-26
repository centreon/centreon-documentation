---
id: applications-databases-db2
title: DB2 Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Objets supervisés

Le Pack DB2 collecte les données pour:
* Connection-time
* Connected-users
* Database-logs
* Database-usage
* Hadr
* Tablespaces

### Règles de découvertes

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Nom de la règle            | Description                                         |
| :------------------------- | :-------------------------------------------------- |
| App-DB-Db2-Tablespace-Name | Découvre les tablespaces et supervise l'utilisation |

</TabItem>
</Tabs>

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Connection-time" label="Connection-time">

| Metric name           | Description                        | Unit  |
| :--------------------------- | :-------------------------- | :---- |
| connection.time.milliseconds | Connection established time | ms    |

</TabItem>
<TabItem value="Connected-users" label="Connected-users">

| Metric name           | Description               | Unit  |
| :-------------------- | :------------------------ | :---- |
| users.connected.count | Number of connected users |       |

</TabItem>
<TabItem value="Database-logs" label="Database-logs">

| Metric name                                                    | Description              | Unit  |
| :------------------------------------------------------------- | :----------------------- | :---- |
| *db\_name~partition\_num*\#database.log.space.usage.bytes      | Used space               | B     |
| *db\_name~partition\_num*\#database.log.space.free.bytes       | Free space               | B     |
| *db\_name~partition\_num*\#database.log.space.usage.percentage | Used space in percentage | %     |

</TabItem>
<TabItem value="Database-usage" label="Database-usage">

| Metric name                                 | Description              | Unit  |
| :------------------------------------------ | :----------------------- | :---- |
| *db\_name*\#database.space.usage.bytes      | Used space               | B     |
| *db\_name*\#database.space.free.bytes       | Free space               | B     |
| *db\_name*\#database.space.usage.percentage | Used space in percentage | %     |

</TabItem>
<TabItem value="Hadr" label="Hadr">

| Metric name                                | Description                                                                           | Unit  |
| :----------------------------------------- | :------------------------------------------------------------------------------------ | :---- |
| hadr.instances.standby.count               | Number of standby instances                                                           |       |
| hadr connection status                     | The current high availability disaster recovery connection status of the database     |       |
| hadr state                                 | The current high availability disaster recovery state of the database                 |       |
| *standby\_id*\#hadr.instance.log.gap.bytes | Recent average of the gap between the PRIMARY_LOG_POS value and STANDBY_LOG_POS value | B     |

</TabItem>
<TabItem value="Tablespaces" label="Tablespaces">

| Metric name                                                    | Description              | Unit  |
| :------------------------------------------------------------- | :----------------------- | :---- |
| tablespace status                                              | Tablespace state         |       |
| *db\_name~tablespace\_name*\#tablespace.space.usage.bytes      | Used space               | B     |
| *db\_name~tablespace\_name*\#tablespace.space.free.bytes       | Free space               | B     |
| *db\_name~tablespace\_name*\#tablespace.space.usage.percentage | Used space in percentage | %     |

</TabItem>
</Tabs>

## Prérequis

### Installation des dépendances du Plugin

#### RPM

Pour utiliser le Pack DB2, il est nécessaire d'installer l'outil de ligne de commande `wget` et la collection de compilateurs GNU (`gcc`).

```bash
yum install -y gcc wget ksh
```

#### DB2 driver package

Se connecter sur le site du support IBM et télécharger l'archive `data_server_driver_package_linuxx64_v11.5.tar.gz`.

Installer l'archive avec les commande suivantes :

```bash
tar zxf ibm_data_server_driver_package_linuxx64_v11.5.tar.gz
mv dsdriver/ /opt/
cd /opt/dsdriver/
./installDSDriver
echo "/opt/dsdriver/lib/" > /etc/ld.so.conf.d/db2-x86_64.conf
/sbin/ldconfig
```

#### Bibliothèque Perl pour DB2

En tant que root, exécuter:

```bash
cd /usr/local/src 
wget https://cpan.metacpan.org/authors/id/R/RO/ROCKETDB/DBD-DB2-1.89.tar.gz
tar zxvf DBD-DB2-1.89.tar.gz
cd DBD-DB2-1.89/
export DB2LIB=/opt/dsdriver/lib/
export DB2_HOME=/opt/dsdriver/
perl Makefile.PL
```

Compiler la bibliothèque:

```bash
make
```

Puis l'installer:

```bash
make install
```

### Compte d'utilisateur

La façon la plus sûre de récupérer des informations du serveur DB2 est de créer un utilisateur dédié à Centreon.

Ce compte utilisateur doit avoir la permission de lecture sur les tables suivantes :
- syscat.tablespaces
- sysibmadm.applications
- sysibmadm.container_utilization
- sysibmadm.log_utilization
- sysibmadm.tbsp_utilization

Ce compte utilisateur doit avoir la permission d'exécuter la procédure `SYSPROC.GET_DBSIZE_INFO` et l'authorité `SYSMON`.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Databases-Db2
```

2. Sur l'interface Web de Centreon, installer le Pack *DB2 Database* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Databases-Db2
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-applications-databases-db2
```

3. Sur l'interface Web de Centreon, installer le Pack *DB2 Database* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

Ce Pack est conçu de manière à avoir dans Centreon un hôte par base de données IBM DB2.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-DB-Db2-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name            | Description                                                                |
| :-------- | :-------------- | :------------------------------------------------------------------------- |
| X         | DB2PORT         | Port used (Default: 50000)                                                 |
| X         | DB2DATABASE     | Name for the Db2 database system                                           |
| X         | DB2USERNAME     | DB2 username account                                                       |
| X         | DB2PASSWORD     | DB2 password account                                                       |
|           | DB2EXTRAOPTIONS | Any extra option you may want to add to the command (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_database_db2.pl \
    --plugin=database::db2::plugin \
    --mode=database-usage \
    --server='10.30.2.79' \
    --database='TEST' \
    --port='50000' \
    --username='myusername' \
    --password='mypassword' \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: database 'TEST' space usage total: 99.84 GB used: 698.34 MB (0.68%) free: 99.16 GB (99.32%) | 'TEST#database.space.usage.bytes'=732266496B;;;0;107204739072 'TEST#database.space.free.bytes'=106472472576B;;;0;107204739072 'TEST#database.space.usage.percentage'=0.68%;;;0;100
```

Cette commande contrôle le taux d'utilisation de la base de données (```--mode=database-usage```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peuvent être affichés
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_database_db2.pl \
    --plugin=database::db2::plugin \
    --mode=database-usage \
    --help
```

## Diagnostique

[Diagnostique des plugins](../getting-started/how-to-guides/troubleshooting-plugins.md)

