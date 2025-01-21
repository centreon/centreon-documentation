---
id: applications-databases-informix
title: Informix DB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Informix DB** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Informix DB** apporte un modèle d'hôte :

* **App-DB-Informix-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-DB-Informix-custom" label="App-DB-Informix-custom">

| Alias                | Modèle de service                           | Description                                                           |
|:---------------------|:--------------------------------------------|:----------------------------------------------------------------------|
| Archivelevel0-Global | App-DB-Informix-Archivelevel0-Global-custom | Contrôle la dernière exécution de la sauvegarde archive level0        |
| Checkpoints          | App-DB-Informix-Checkpoints-custom          | Contrôle les métriques associées aux checkpoints Informix            |
| Chunk-Down-Global    | App-DB-Informix-Chunk-Down-Global-custom    | Contrôle l'état des chunks                                            |
| Connection           | App-DB-Informix-Connection-custom           | Contrôle la connexion au serveur Informix                            |
| Global-Cache         | App-DB-Informix-Global-Cache-custom         | Contrôle les caches de lecture et écriture                            |
| Lockoverflow         | App-DB-Informix-Lockoverflow-custom         | Contrôle le nombre de fois qu'Informix a dépassé le nombre maximal de 'locks' |
| Longtxs              | App-DB-Informix-Longtxs-custom              | Contrôle le nombre de transactions longues courantes                  |
| Sessions             | App-DB-Informix-Sessions-custom             | Contrôle les sessions courantes                                       |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-DB-Informix-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                      | Modèle de service                                 | Description                                                          |
|:---------------------------|:--------------------------------------------------|:---------------------------------------------------------------------|
| Archivelevel0-Generic-Name | App-DB-Informix-Archivelevel0-Generic-Name-custom | Contrôle la dernière exécution de la sauvegarde archive level0       |
| Dbspace-Usage-Generic-Name | App-DB-Informix-Dbspace-Usage-Generic-Name-custom | Contrôle l'utilisation de dbspaces                                   |
| Dbspace-Usage-Global       | App-DB-Informix-Dbspace-Usage-Global-custom       | Contrôle l'utilisation de dbspaces                                   |
| Logfiles-Usage             | App-DB-Informix-Logfiles-Usage-custom             | Contrôle l'utilisation des fichiers de logs Informix                 |
| Sql-Statement              | App-DB-Informix-Sql-Statement-custom              | Contrôle une instruction SQL                                         |
| Table-Locks-Generic-Name   | App-DB-Informix-Table-Locks-Generic-Name-custom   | Contrôle les différents 'locks' sur les tables d'une base de données |
| Table-Locks-Global         | App-DB-Informix-Table-Locks-Global-custom         | Contrôle les différents 'locks' sur les tables                       |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Archivelevel0-*" label="Archivelevel0-*">

| Nom                          | Unité |
|:-----------------------------|:------|
| seconds.#archive-level0-name | s     |

</TabItem>
<TabItem value="Checkpoints" label="Checkpoints">

| Nom                                     | Unité |
|:----------------------------------------|:------|
| cp\_.#checkpoint-name\_checkpoint-id    | s     |
| block\_.#checkpoint-name\_checkpoint-id | s     |
| flush\_.#checkpoint-name\_checkpoint-id | s     |
| crit\_.#checkpoint-name\_checkpoint-id  | s     |

</TabItem>
<TabItem value="Chunk-Down-Global" label="Chunk-Down-Global">

| Nom         | Unité |
|:------------|:------|
| chunk.state | N/A   |
| chunk.count | count |

</TabItem>
<TabItem value="Connection" label="Connection">

| Nom                          | Unité |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Dbspace-Usage-*" label="Dbspace-Usage-*">

| Nom                | Unité |
|:-------------------|:------|
| used.#dbspace-name | %     |

</TabItem>
<TabItem value="Global-Cache" label="Global-Cache">

| Nom         | Unité |
|:------------|:------|
| readcached  | %     |
| writecached | %     |


</TabItem>
<TabItem value="Lockoverflow" label="Lockoverflow">

| Nom    | Unité |
|:-------|:------|
| ovlock | N/A   |

</TabItem>
<TabItem value="Logfiles-Usage" label="Logfiles-Usage">

| Nom              | Unité |
|:-----------------|:------|
| used.#logfile-id | %     |

</TabItem>
<TabItem value="Longtxs" label="Longtxs">

| Nom   | Unité |
|:------|:------|
| count | count |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Nom      | Unité |
|:---------|:------|
| sessions | N/A   |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Nom                               | Unité |
|:----------------------------------|:------|
| value                             | N/A   |
| sqlrequest.execution.time.seconds | s     |

</TabItem>
<TabItem value="Table-Locks-*" label="Table-Locks-*">

| Nom                          | Unité |
|:-----------------------------|:------|
| db\_deadlks\dbname           | count |
| db\_lockwts\dbname           | count |
| db\_lockreqs\dbname          | count |
| db\_lktouts\dbname           | count |
| tbl\_deadlks\dbname.tabname  | count |
| tbl\_lockwts\dbname.tabname  | count |
| tbl\_lockreqs\dbname.tabname | count |
| tbl\_lktouts\dbname.tabname  | count |

</TabItem>
</Tabs>

## Prérequis

Vous devez télécharger "Informix Client Software Development Kit" sur le [website IBM](https://www.ibm.com/support/pages/informix-client-software-development-kit-client-sdk-and-informix-connect-system-requirements).

Installez le SDK avec la procédure suivante :
1. Copiez l'archive sur le collecteur.
2. Créez un utilisateur **informix** :

```
useradd informix chmod 775 /home/informix
``` 

3. Installez Sun JRE (comme expliqué dans la procédure IBM).
4. Installez le SDK (choisissez l'installation **Typical**) : 

```
./installclientsdk -javahome /usr/java/jreXXXX/ ....
```

Précisez le dossier ou appuyez sur **Entrée** pour accepter le dossier par défaut. 
Nom du dossier : `[/root/informix/sdkclient/] /home/informix/sdkclient` 

### Perl DBD Informix

Pour compiler Informix DBD, vous devez accéder à la base de données Informix et exécuter les commandes suivantes :

```
cd /usr/local/src
wget http://search.cpan.org/CPAN/authors/id/J/JO/JOHNL/DBD-Informix-2013.0521.tar.gz
tar xzf DBD-Informix-2013.0521.tar.gz
cd DBD-Informix-2013.0521
export INFORMIXDIR=/home/informix/sdkclient
export LD_LIBRARY_PATH=$ORACLE_HOME/lib
export PATH=${PATH}:/home/informix/sdkclient/bin
export LD_LIBRARY_PATH=/home/informix/sdkclient/lib/esql/:/home/informix/sdkclient/lib/
export DBD_INFORMIX_USERNAME=root
export DBD_INFORMIX_PASSWORD=xxxx # export DBD_INFORMIX_DATABASE=xxxx
```

Renseignez une valeur pour **Informix Instance** dans le fichier `/home/informix/sdkclient/etc/sqlhosts` :

```
INSTANCE onsoctcp IP PORT
```

1. Compilez la librairie :

```
$ perl Makefile.PL 
$ make
$ make install
```

2. Créez le fichier **/etc/ld.so.conf.d/informix.conf**.
3. Faites le lien avec la bibliothèque Informix:

```
$ touch /etc/ld.so.conf.d/informix.conf 
vi /etc/ld.so.conf.d/informix.conf
```

4. Exécutez la commande suivante :

`/home/informix/sdkclient/lib/esql/ /home/informix/sdkclient/lib/`

5. Exécutez ensuite cette commande :

`/sbin/ldconfig`

### À propos du compte utilisateur

Le moyen le plus sûr de récupérer des informations du serveur Oracle est de créer un utilisateur dédié à Centreon.
Ce compte utilisateur doit avoir les droits de lecture sur la base de données `sysmaster`.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-databases-informix
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-informix
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-informix
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-informix
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Informix DB**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Applications-Databases-Informix
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Informix
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-informix
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Informix
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-DB-Informix-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description            | Valeur par défaut | Obligatoire |
|:---------------------|:-----------------------|:------------------|:-----------:|
| INFORMIXUSERNAME     | Database Username      |                   |             |
| INFORMIXPASSWORD     | Database password      |                   |             |
| INFORMIXPORT         | Database Server Port   | 33333             |             |
| INFORMIXINSTANCENAME | Database Instance Name |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Archivelevel0-Generic-Name" label="Archivelevel0-Generic-Name">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DBSPACENAME  | Define which dbspace to check (empty means 'check all dbspaces')                                                                                               |                   |             |
| WARNING      | Warning threshold in seconds since last execution                                                                                                |                   |             |
| CRITICAL     | Critical threshold in seconds since last execution                                                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Archivelevel0-Global" label="Archivelevel0-Global">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Define which dbspace to check (empty means 'check all dbspaces')                                                                                               | .*                |             |
| WARNING      | Warning threshold in seconds since last execution                                                                                                |                   |             |
| CRITICAL     | Critical threshold in seconds since last execution                                                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Checkpoints" label="Checkpoints">

| Macro         | Description                                                                                                                                      | Valeur par défaut             | Obligatoire |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:-----------:|
| FILTERTRIGGER | Filter events that can trigger a checkpoint with a regexp                                                                                        |                               |             |
| WARNINGBLOCK  | Warning threshold 'block\_time' in seconds                                                                                                       |                               |             |
| CRITICALBLOCK | Critical threshold 'block\_time' in seconds                                                                                                      |                               |             |
| WARNINGCP     | Warning threshold 'cp\_time' in seconds                                                                                                          |                               |             |
| CRITICALCP    | Critical threshold 'cp\_time' in seconds                                                                                                         |                               |             |
| WARNINGCRIT   | Warning threshold 'crit\_time' in seconds                                                                                                        |                               |             |
| CRITICALCRIT  | Critical threshold 'crit\_time' in seconds                                                                                                       |                               |             |
| WARNINGFLUSH  | Warning threshold 'flush\_time' in seconds                                                                                                       |                               |             |
| CRITICALFLUSH | Critical threshold 'flush\_time' in seconds                                                                                                      |                               |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --filter-perfdata='^(?!(.*))' |             |

</TabItem>
<TabItem value="Chunk-Down-Global" label="Chunk-Down-Global">

| Macro        | Description                                                                                                                                      | Valeur par défaut  | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| STATE        | State to check (can be: is\_offline, is\_recovering, is\_blobchunk, is\_inconsistent)                                                            | is\_offline        |             |
| FILTER       | Define which dbspace to check (empty means 'check all dbspaces')                                                                                               | .*                 |             |
| GLOBALOKMSG  | Display global message when you have no errors                                                                                                   | All chunks are ok. |             |
| OKMSG        | Display message when chunk is ok                                                                                                                 | Chunk %s is ok     |             |
| ERRORMSG     | Display message when you have an error                                                                                                           | Chunk %s is down   |             |
| WARNING      | Warning threshold (can check 1 or 0)                                                                                                             | @1:1               |             |
| CRITICAL     | Critical threshold (can check 1 or 0)                                                                                                            |                    |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose          |             |

</TabItem>
<TabItem value="Connection" label="Connection">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in milliseconds                                                                                                                |                   |             |
| CRITICAL     | Critical threshold in milliseconds                                                                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Dbspace-Usage-Generic-Name" label="Dbspace-Usage-Generic-Name">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DBSPACENAME  | Define which dbspace to check (empty means 'check all dbspaces')                                                                                               |                   |             |
| WARNING      | Warning threshold in percent                                                                                                                     | 80                |             |
| CRITICAL     | Critical threshold in percent                                                                                                                    | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Dbspace-Usage-Global" label="Dbspace-Usage-Global">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER       | Define which dbspace to check (empty means 'check all dbspaces')                                                                                               | .*                |             |
| WARNING      | Warning threshold in percent                                                                                                                     | 80                |             |
| CRITICAL     | Critical threshold in percent                                                                                                                    | 90                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Global-Cache" label="Global-Cache">

| Macro         | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGREAD   | Threshold read cached warning in percent                                                                                                         |                   |             |
| CRITICALREAD  | Threshold read cached critical in percent                                                                                                        |                   |             |
| WARNINGWRITE  | Threshold write cached warning in percent                                                                                                        |                   |             |
| CRITICALWRITE | Threshold write cached critical in percent                                                                                                       |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Lockoverflow" label="Lockoverflow">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in absolute                                                                                                                    |                   |             |
| CRITICAL     | Critical threshold in absolute                                                                                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Logfiles-Usage" label="Logfiles-Usage">

| Macro        | Description                                                                                                                                      | Valeur par défaut                       | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------|:-----------:|
| CRITICAL     | Critical threshold in percent                                                                                                                    |                                         |             |
| WARNING      | Warning threshold in percent                                                                                                                     |                                         |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose --filter-perfdata='^(?!(.*))' |             |

</TabItem>
<TabItem value="Longtxs" label="Longtxs">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in absolute                                                                                                                    |                   |             |
| CRITICAL     | Critical threshold in absolute                                                                                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                                                                |                   |             |
| CRITICAL     | Critical threshold                                                                                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SQLSTATEMENT | SQL statement that returns a number                                                                                                              |                   |      X      |
| WARNING      | Warning threshold                                                                                                                                |                   |             |
| CRITICAL     | Critical threshold                                                                                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Table-Locks-Generic-Name" label="Table-Locks-Generic-Name">

| Macro            | Description                                                                                                                                      | Valeur par défaut          | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| DBNAME           | Define which database to check (empty means 'check all databases')                                                                                             |                            |             |
| WARNINGDEADLKS   | Warning threshold 'deadlks' in absolute                                                                                                          |                            |             |
| CRITICALDEADLKS  | Critical threshold 'deadlks' in absolute                                                                                                         |                            |             |
| WARNINGLKTOUTS   | Warning threshold 'lktouts' in absolute                                                                                                          |                            |             |
| CRITICALLKTOUTS  | Critical threshold 'lktouts' in absolute                                                                                                         |                            |             |
| WARNINGLOCKREQS  | Warning threshold 'lockreqs' in absolute                                                                                                         |                            |             |
| CRITICALLOCKREQS | Critical threshold 'lockreqs' in absolute                                                                                                        |                            |             |
| WARNINGLOCKWTS   | Warning threshold 'lockwts' in absolute                                                                                                          |                            |             |
| CRITICALLOCKWTS  | Critical threshold 'lockwts' in absolute                                                                                                         |                            |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --only-databases --verbose |             |

</TabItem>
<TabItem value="Table-Locks-Global" label="Table-Locks-Global">

| Macro            | Description                                                                                                                                      | Valeur par défaut          | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| DBFILTER         | Define which database to check (empty means 'check all databases')                                                                                            | .*                         |             |
| WARNINGDEADLKS   | Warning threshold 'deadlks' in absolute                                                                                                          |                            |             |
| CRITICALDEADLKS  | Critical threshold 'deadlks' in absolute                                                                                                         |                            |             |
| WARNINGLKTOUTS   | Warning threshold 'lktouts' in absolute                                                                                                          |                            |             |
| CRITICALLKTOUTS  | Critical threshold 'lktouts' in absolute                                                                                                         |                            |             |
| WARNINGLOCKREQS  | Warning threshold 'lockreqs' in absolute                                                                                                         |                            |             |
| CRITICALLOCKREQS | Critical threshold 'lockreqs' in absolute                                                                                                        |                            |             |
| WARNINGLOCKWTS   | Warning threshold 'lockwts' in absolute                                                                                                          |                            |             |
| CRITICALLOCKWTS  | Critical threshold 'lockwts' in absolute                                                                                                         |                            |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --only-databases --verbose |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_informix.pl \
	--plugin=database::informix::sql::plugin \
	--host=10.0.0.1 \
	--username='' \
	--password='' \
	--port='33333' \
	--mode='sql' \
	--sql-statement="" \
	--warning='' \
	--critical='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:  execution time: 67851 second(s) | 'value'=11007;;;; 'sqlrequest.execution.time.seconds'=67851s;;;0; 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_informix.pl \
	--plugin=database::informix::sql::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                         | Modèle de service associé                                                                          |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------|
| archivelevel0 [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/archivelevel0.pm)]            | App-DB-Informix-Archivelevel0-Generic-Name-custom<br />App-DB-Informix-Archivelevel0-Global-custom |
| checkpoints [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/checkpoints.pm)]                | App-DB-Informix-Checkpoints-custom                                                                 |
| chunkstates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/chunkstates.pm)]                | App-DB-Informix-Chunk-Down-Global-custom                                                           |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]          | Not used in this Monitoring Connector                                                              |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)] | App-DB-Informix-Connection-custom                                                                  |
| dbspace-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/dbspacesusage.pm)]            | App-DB-Informix-Dbspace-Usage-Generic-Name-custom<br />App-DB-Informix-Dbspace-Usage-Global-custom |
| global-cache [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/globalcache.pm)]               | App-DB-Informix-Global-Cache-custom                                                                |
| list-databases [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/listdatabases.pm)]           | Not used in this Monitoring Connector                                                              |
| list-dbspaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/listdbspaces.pm)]             | Not used in this Monitoring Connector                                                              |
| lockoverflow [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/lockoverflow.pm)]              | App-DB-Informix-Lockoverflow-custom                                                                |
| logfile-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/logfilesusage.pm)]            | App-DB-Informix-Logfiles-Usage-custom                                                              |
| longtxs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/longtxs.pm)]                        | App-DB-Informix-Longtxs-custom                                                                     |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/db_instance.pm)]                                                  | Not used in this Monitoring Connector                                                              |
| sessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/sessions.pm)]                      | App-DB-Informix-Sessions-custom                                                                    |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]                        | App-DB-Informix-Sql-Statement-custom                                                               |
| table-locks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/informix/sql/mode/tablelocks.pm)]                 | App-DB-Informix-Table-Locks-Generic-Name-custom<br />App-DB-Informix-Table-Locks-Global-custom     |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --sqlmode                                  |   This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-sqlmode                             |   List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --multiple                                 |   Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --host                                     |   Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --port                                     |   Database Server Port.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --instance                                 |   Database Instance Name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Archivelevel0-*" label="Archivelevel0-*">

| Option     | Description                                                        |
|:-----------|:-------------------------------------------------------------------|
| --warning  |   Warning threshold in seconds since last execution.               |
| --critical |   Critical threshold in seconds since last execution.              |
| --name     |   Set the dbspace (empty means 'check all dbspaces').              |
| --regexp   |   Allows to use regexp to filter dbspaces (with option --name).    |

</TabItem>
<TabItem value="Checkpoints" label="Checkpoints">

| Option           | Description                                                     |
|:-----------------|:----------------------------------------------------------------|
| --warning-cp     |   Warning threshold 'cp\_time' in seconds.                      |
| --critical-cp    |   Critical threshold 'cp\_time' in seconds.                     |
| --warning-flush  |   Warning threshold 'flush\_time' in seconds.                   |
| --critical-flush |   Critical threshold 'flush\_time' in seconds.                  |
| --warning-crit   |   Warning threshold 'crit\_time' in seconds.                    |
| --critical-crit  |   Critical threshold 'crit\_time' in seconds.                   |
| --warning-block  |   Warning threshold 'block\_time' in seconds.                   |
| --critical-block |   Critical threshold 'block\_time' in seconds.                  |
| --filter-trigger |   Filter events that can trigger a checkpoint with a regexp.    |

</TabItem>
<TabItem value="Chunk-Down-Global" label="Chunk-Down-Global">

| Option          | Description                                                                                |
|:----------------|:-------------------------------------------------------------------------------------------|
| --warning       |   Warning threshold (can check 1 or 0).                                                    |
| --critical      |   Critical threshold (can check 1 or 0).                                                   |
| --chunk-state   |   State to check (can be: is\_offline, is\_recovering, is\_blobchunk, is\_inconsistent).   |
| --error-msg     |   Display message when you have an error. (default: 'Chunk %s has a problem')              |
| --ok-msg        |   Display message when chunk is ok. (default: 'Chunk %s is ok')                            |
| --global-ok-msg |   Display global message when you have no errors. (default: 'All chunks are ok')           |
| --name          |   Set the dbspace (empty means 'check all dbspaces').                                      |
| --regexp        |   Allows to use regexp to filter dbspaces (with option --name).                            |

</TabItem>
<TabItem value="Connection" label="Connection">

| Option     | Description                              |
|:-----------|:-----------------------------------------|
| --warning  |   Warning threshold in milliseconds.     |
| --critical |   Critical threshold in milliseconds.    |

</TabItem>
<TabItem value="Dbspace-Usage-*" label="Dbspace-Usage-*">

| Option     | Description                                                        |
|:-----------|:-------------------------------------------------------------------|
| --warning  |   Warning threshold in percent.                                    |
| --critical |   Critical threshold in percent.                                   |
| --name     |   Set the dbspace (empty means 'check all dbspaces').              |
| --regexp   |   Allows to use regexp to filter dbspaces (with option --name).    |

</TabItem>
<TabItem value="Global-Cache" label="Global-Cache">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-read         |   Threshold read cached warning in percent.                                                                                                                                                                                                     |
| --critical-read        |   Threshold read cached critical in percent.                                                                                                                                                                                                    |
| --warning-write        |   Threshold write cached warning in percent.                                                                                                                                                                                                    |
| --critical-write       |   Threshold write cached critical in percent.                                                                                                                                                                                                   |
| --lookback             |   Threshold isn't on the percent calculated from the difference ('xxxcached\_now').                                                                                                                                                             |

</TabItem>
<TabItem value="Lockoverflow" label="Lockoverflow">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning              |   Warning threshold in absolute.                                                                                                                                                                                                                |
| --critical             |   Critical threshold in absolute.                                                                                                                                                                                                               |

</TabItem>
<TabItem value="Logfiles-Usage" label="Logfiles-Usage">

| Option     | Description                         |
|:-----------|:------------------------------------|
| --warning  |   Warning threshold in percent.     |
| --critical |   Critical threshold in percent.    |

</TabItem>
<TabItem value="Longtxs" label="Longtxs">

| Option     | Description                          |
|:-----------|:-------------------------------------|
| --warning  |   Warning threshold in absolute.     |
| --critical |   Critical threshold in absolute.    |

</TabItem>
<TabItem value="Sessions" label="Sessions">

| Option     | Description              |
|:-----------|:-------------------------|
| --warning  |   Warning threshold.     |
| --critical |   Critical threshold.    |

</TabItem>
<TabItem value="Sql-Statement" label="Sql-Statement">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --sql-statement          |   SQL statement that returns a number.                                                                                        |
| --format                 |   Output format (default: 'SQL statement result : %i.').                                                                      |
| --perfdata-unit          |   Perfdata unit in perfdata output (default: '')                                                                              |
| --perfdata-name          |   Perfdata name in perfdata output (default: 'value')                                                                         |
| --perfdata-min           |   Minimum value to add in perfdata output (default: '')                                                                       |
| --perfdata-max           |   Maximum value to add in perfdata output (default: '')                                                                       |
| --warning-* --critical-* |   Thresholds. Can be: 'value', 'execution-time'.                                                                              |

</TabItem>
<TabItem value="Table-Locks-*" label="Table-Locks-*">

| Option                 | Description                                                                                                                                                                                                                                     |
|:-----------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration        |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --warning-deadlks      |   Warning threshold 'deadlks' in absolute.                                                                                                                                                                                                      |
| --critical-deadlks     |   Critical threshold 'deadlks' in absolute.                                                                                                                                                                                                     |
| --warning-lockwts      |   Warning threshold 'lockwts' in absolute.                                                                                                                                                                                                      |
| --critical-lockwts     |   Critical threshold 'lockwts' in absolute.                                                                                                                                                                                                     |
| --warning-lockreqs     |   Warning threshold 'lockreqs' in absolute.                                                                                                                                                                                                     |
| --critical-lockreqs    |   Critical threshold 'lockreqs' in absolute.                                                                                                                                                                                                    |
| --warning-lktouts      |   Warning threshold 'lktouts' in absolute.                                                                                                                                                                                                      |
| --critical-lktouts     |   Critical threshold 'lktouts' in absolute.                                                                                                                                                                                                     |
| --name                 |   Set the database (empty means 'check all databases').                                                                                                                                                                                         |
| --regexp               |   Allows to use regexp to filter database (with option --name).                                                                                                                                                                                 |
| --filter-tables        |   Filter tables (format of a table name: 'sysmater.dual').                                                                                                                                                                                      |
| --only-databases       |   only check locks globally on database (no output for tables).                                                                                                                                                                                 |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_informix.pl \
	--plugin=database::informix::sql::plugin \
	--host=10.0.0.1 \
	--help
```
