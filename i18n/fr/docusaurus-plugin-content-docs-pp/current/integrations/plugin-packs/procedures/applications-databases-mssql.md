---
id: applications-databases-mssql
title: Microsoft SQL Server
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Microsoft SQL Server** apporte un modèle d'hôte :

* App-DB-MSSQL-custom

Il apporte les modèles de service suivants :

| Alias                | Modèle de service                 | Description                                                                                                                       | Défaut |
|:---------------------|:----------------------------------|:----------------------------------------------------------------------------------------------------------------------------------|:-------|
| Backup-Age           | App-DB-MSSQL-Backup-Age           | Contrôle permettant de vérifier les sauvegardes des bases données MSSQL                                                           |        |
| Blocked-Processes    | App-DB-MSSQL-Blocked-Processes    | Contrôle permettant de vérifier les processus bloqués. Ce service utilise une requête non valide selon les versions MS SQL Server | X      |
| Cache-Hitratio       | App-DB-MSSQL-Cache-Hitratio       | Contrôle permettant de vérifier le "Data Buffer Cache Hit Ratio" du serveur. Aucune alerte par défaut                           |        |
| Connected-Users      | App-DB-MSSQL-Connected-Users      | Contrôle permettant de vérifier le nombre d'utilisateurs connectés à la base de données                                           | X      |
| Connection-Time      | App-DB-MSSQL-Connection-Time      | Contrôle permettant de vérifier la durée de connexion au serveur. Ce temps est donné en secondes                                  | X      |
| Databases-Size       | App-DB-MSSQL-Databases-Size       | Contrôle permettant de vérifier l'espace utilisé des bases de données du serveur                                                  | X      |
| Deadlocks            | App-DB-MSSQL-Deadlocks            | Contrôle permettant de vérifier le nombre de "deadlocks" par seconde du serveur                                                   | X      |
| Failed-Jobs          | App-DB-MSSQL-Failed-Jobs          | Contrôle les jobs MSSQL en erreur                                                                                                 | X      |
| Locks-Waits          | App-DB-MSSQL-Locks-Waits          | Contrôle permettant de vérifier le nombre de "locks-waits" par seconde du serveur                                                 |        |
| Page-Life-Expectancy | App-DB-MSSQL-Page-Life-Expectancy | Contrôle permettant de vérifier le "Page Life Expectancy" du serveur. Aucune alerte par défaut                                   |        |
| Sql-Statement        | App-DB-MSSQL-Sql-Statement        | Contrôle permettant d'exécuter une requête SQL personnalisée renvoyant une donnée numérique                                       |        |
| Sql-Statement-String | App-DB-MSSQL-Sql-Statement-String | Contrôle permettant d'exécuter une requête SQL personnalisée renvoyant une chaîne de caractères                                   |        |
| Transactions         | App-DB-MSSQL-Transactions         | Contrôle permettant de vérifier le nombre de transactions par seconde du serveur. Aucune alerte par défaut                        | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Backup-Age" label="Backup-Age">

| Métrique       | Unité |
|:---------------|:------|
| last-duration  |       |
| last-execution |       |

</TabItem>
<TabItem value="Blocked-Processes" label="Blocked-Processes">

| Métrique              | Unité |
|:----------------------|:------|
| blocked-processes     |       |
| *processes*#wait-time |       |

</TabItem>
<TabItem value="Cache-Hitratio" label="Cache-Hitratio">

| Métrique                        | Unité |
|:--------------------------------|:------|
| mssql.cache.hitratio.percentage | %     |

</TabItem>
<TabItem value="Connected-Users" label="Connected-Users">

| Métrique                    | Unité |
|:----------------------------|:------|
| mssql.users.connected.count | count |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Métrique                     | Unité |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Databases-Size" label="Databases-Size">

| Métrique                         | Unité |
|:---------------------------------|:------|
| datafiles.space.usage.bytes      | bytes |
| datafiles.space.free.bytes       | bytes |
| datafiles.space.usage.percentage | %     |
| logfiles.space.usage.bytes       | bytes |
| logfiles.space.free.bytes        | bytes |
| logfiles.space.usage.percentage  | %     |

</TabItem>
<TabItem value="Deadlocks" label="Deadlocks">

| Métrique              | Unité |
|:----------------------|:------|
| mssql.deadlocks.count | count |

</TabItem>
<TabItem value="Failed-Jobs" label="Failed-Jobs">

| Métrique             | Unité |
|:---------------------|:------|
| jobs.                |       |
| jobs.total.count     | count |
| job.duration.seconds | s     |

</TabItem>
<TabItem value="Locks-Waits" label="Locks-Waits">

| Métrique               | Unité |
|:-----------------------|:------|
| mssql.lockswaits.count | count |

</TabItem>
<TabItem value="Page-Life-Expectancy" label="Page-Life-Expectancy">

| Métrique                     | Unité |
|:-----------------------------|:------|
| page.life.expectancy.seconds | s     |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Métrique                          | Unité |
|:----------------------------------|:------|
| sqlrequest.execution.time.seconds | s     |

</TabItem>
<TabItem value="Sql-Statement-String" label="Sql-Statement-String">

| Métrique      | Unité |
|:--------------|:------|
| *rows*#string |       |

</TabItem>
<TabItem value="Transactions" label="Transactions">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| databases.transactions.persecond           | /s    |
| *database*#database.transactions.persecond | /s    |

</TabItem>
</Tabs>

## Prérequis

### Utilisateur de supervision

Afin d'utiliser cette sonde, il est nécessaire de configurer un utilisateur avec des droits suffisants. Le rôle serveradmin peut être
utilisé pour du test mais ne doit pas être utilisé pour de la production en raison du risque de sécurité associé. 

Un contributeur de la sonde _check_mssql_health_, Birk Bohne, a écrit un script permettant d'assigner un minimum de privilèges pour 
que la majorité des contrôles fonctionnent. Ce script peut être trouvé dans la section **Preparation of the database** [ici](https://github.com/lausser/check_mssql_health/blob/master/doc/check_mssql_health.en.txt).

Néanmoins, la solution la plus optimale est l'utilisation d'un compte du domaine.

### Dépendances

Il est nécessaire d'installer les paquets suivants: `freetds perl-DBD-Sybase unixODBC`

### Configuration de freetds

Par défaut, la version utilisée dans le fichier de configuration de freetds est la 4.2. Il est nécessaire d'utiliser au 
moins la version 8.0 pour un fonctionnement et une sécurité optimales. Pour cela, éditer le fichier freetds.conf afin de 
décommenter la ligne `version = 4.2` et remplacer `4.2` par `8.0`. 

Chemin du fichier: 
- RedHat-like: /etc/freetds.conf
- Debian 11: /etc/freetds/freetds.conf

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Plugin Packs > Gestionnaire**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-databases-mssql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-mssql
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-databases-mssql
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Microsoft SQL Server**
depuis l'interface web et le menu **Configuration > Plugin Packs > Gestionnaire**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Databases-Mssql
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Mssql
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-databases-mssql
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **SQL Server database**.
* Appliquez le modèle d'hôte **App-DB-MSSQL-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro         | Description                                                                            |
|:------------|:--------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS  | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|     X       | MSSQLPASSWORD | Mot de passe d'accès à la base de données (Défaut : 'PASSWORD')                        |
|     X       | MSSQLPORT     | Port d'écoute de l'instance MSSQL (Défaut : '1433')                                    |
|     X       | MSSQLUSERNAME | Utilisateur utilisé pour réaliser le contrôle (Défaut : 'USERNAME')                    |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_mssql.pl \
    --plugin database::mssql::plugin \
    --hostname 10.0.0.1 \
    --port 1433 \
    --username 'USERNAME@DOMAIN' \
    --password 'PASSWORD'  \
    --mode=connected-users \
    --warning-connected-user='' \
    --critical-connected-user='' \
    --verbose \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: 20 connected user(s) | 'mssql.users.connected.count'=20;;;0; 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_mssql.pl \
    --plugin database::mssql::plugin \
    --hostname 10.0.0.1 \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_mssql.pl \
    --plugin database::mssql::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.