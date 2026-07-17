---
id: applications-databases-db2
title: DB2 Database
description: Supervisez vos bases de données IBM DB2 avec ce connecteur : utilisateurs connectés, temps de connexion, utilisation des logs et de l'espace, et statut des tablespaces.
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **DB2 Database**
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **DB2 Database** apporte un modèle d'hôte :

* **App-DB-Db2-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-DB-Db2-custom" label="App-DB-Db2-custom">

| Alias           | Modèle de service                 | Description                                                             | Découverte |
|:----------------|:----------------------------------|:------------------------------------------------------------------------|:----------:|
| Connected-Users | App-DB-Db2-Connected-Users-custom | Contrôle permettant de vérifier les utilisateurs connectés              |            |
| Connection-Time | App-DB-Db2-Connection-Time-custom | Contrôle permettant de vérifier la durée de connexion au serveur        |            |
| Database-Logs   | App-DB-Db2-Database-Logs-custom   | Contrôle permettant de vérifier l'utilisation des logs                  |            |
| Database-Usage  | App-DB-Db2-Database-Usage-custom  | Contrôle permettant de vérifier l'espace utilisé par la base de données |            |
| Tablespaces     | App-DB-Db2-Tablespaces-custom     | Contrôle permettant de vérifier les tablespaces                         | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-DB-Db2-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle            | Description |
|:---------------------------|:------------|
| App-DB-Db2-Tablespace-Name | Découvre les tablespaces et supervise l'utilisation            |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Connected-Users" label="Connected-Users">

| Nom                   | Unité |
|:----------------------|:------|
| users.connected.count | count |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Nom                          | Unité |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Database-Logs" label="Database-Logs">

| Nom                                  | Unité |
|:-------------------------------------|:------|
| *logs*#database.log.usage.bytes      | B     |
| *logs*#database.log.free.bytes       | B     |
| *logs*#database.log.usage.percentage | %     |

</TabItem>
<TabItem value="Database-Usage" label="Database-Usage">

| Nom                             | Unité |
|:--------------------------------|:------|
| database.space.usage.bytes      | B     |
| database.space.free.bytes       | B     |
| database.space.usage.percentage | %     |

</TabItem>
<TabItem value="Tablespaces" label="Tablespaces">

| Nom                                      | Unité |
|:-----------------------------------------|:------|
| status                                   | N/A   |
| status                                   | N/A   |
| *tbs1*#tablespace.space.usage.bytes      | B     |
| *tbs2*#tablespace.space.usage.bytes      | B     |
| *tbs1*#tablespace.space.free.bytes       | B     |
| *tbs2*#tablespace.space.free.bytes       | B     |
| *tbs1*#tablespace.space.usage.percentage | %     |
| *tbs2*#tablespace.space.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

### Installation des dépendances du plugin

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

## Installer le connecteur de supervision

### Pack

La procédure d'installation des connecteurs de supervision diffère légèrement [suivant que votre licence est offline ou online](../getting-started/how-to-guides/connectors-licenses.md).

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-databases-db2
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-db2
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-db2
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-db2
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **DB2 Database**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

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
dnf install centreon-plugin-Applications-Databases-Db2
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Db2
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-db2
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Db2
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-DB-Db2-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                            | Valeur par défaut | Obligatoire |
|:----------------|:-------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| DB2USERNAME     | DB2 username                                                                                                       |                   |             |
| DB2PASSWORD     | DB2 password                                                                                                       |                   |             |
| DB2PORT         | TCP/IP server port number that is assigned to the Db2 database system                                  | 50000             |             |
| DB2DATABASE     | Name for the Db2 database system. If --server is not set, it's a cataloged connection (database alias) |                   |             |
| DB2EXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).   |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Connected-Users" label="Connected-Users">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERAPPLNAME    | Filter users by application name (can be a regex)                                                  |                   |             |
| WARNINGCONNECTED  | Threshold                                                                                          |                   |             |
| CRITICALCONNECTED | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Macro        | Description                                                                                        | Valeur par défaut  | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| WARNINGTIME  | Warning threshold in milliseconds                                                                  |                    |             |
| CRITICALTIME | Critical threshold in milliseconds                                                                 |                    |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --use-new-perfdata |             |

</TabItem>
<TabItem value="Database-Logs" label="Database-Logs">

| Macro                | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGLOGUSAGE      | Threshold                                                                                                   |                   |             |
| CRITICALLOGUSAGE     | Threshold                                                                                                   |                   |             |
| WARNINGLOGUSAGEFREE  | Threshold                                                                                                   |                   |             |
| CRITICALLOGUSAGEFREE | Threshold                                                                                                   |                   |             |
| WARNINGLOGUSAGEPRCT  | Threshold                                                                                                   |                   |             |
| CRITICALLOGUSAGEPRCT | Threshold                                                                                                   |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Database-Usage" label="Database-Usage">

| Macro                  | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSPACEUSAGE      | Threshold                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Threshold                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Threshold                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Threshold                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Threshold                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Tablespaces" label="Tablespaces">

| Macro                  | Description                                                                                                                                                                 | Valeur par défaut       | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERNAME             | Filter tablespaces by name (can be a regexp)                                                                                                                                |                         |             |
| FILTERTYPE             | Filter tablespaces by type (can be a regexp)                                                                                                                                |                         |             |
| WARNINGSPACEUSAGE      | Threshold                                                                                                                                                                   |                         |             |
| CRITICALSPACEUSAGE     | Threshold                                                                                                                                                                   |                         |             |
| WARNINGSPACEUSAGEFREE  | Threshold                                                                                                                                                                   |                         |             |
| CRITICALSPACEUSAGEFREE | Threshold                                                                                                                                                                   |                         |             |
| WARNINGSPACEUSAGEPRCT  | Threshold                                                                                                                                                                   |                         |             |
| CRITICALSPACEUSAGEPRCT | Threshold                                                                                                                                                                   |                         |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /normal/i'). You can use the following variables: %\{tbsname\}, %\{type\}, %\{state\} | %\{state\} !~ /normal/i |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{tbsname\}, %\{type\}, %\{state\}                                       |                         |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                          | --verbose               |             |

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
/usr/lib/centreon/plugins/centreon_database_db2.pl \
	--plugin=database::db2::plugin \
	--server='10.0.0.1' \
	--port='50000' \
	--database='xxxxxx' \
	--username='' \
	--password=''   \
	--mode='tablespaces' \
	--filter-name='' \
	--filter-type='' \
	--warning-status='' \
	--critical-status='%\{state\} !~ /normal/i' \
	--warning-space-usage='' \
	--critical-space-usage='' \
	--warning-space-usage-free='' \
	--critical-space-usage-free='' \
	--warning-space-usage-prct='' \
	--critical-space-usage-prct='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All tablespaces are ok | 'tbs1#tablespace.space.usage.bytes'=11813B;;;; 'tbs2#tablespace.space.usage.bytes'=27293B;;;; 'tbs1#tablespace.space.free.bytes'=4886B;;;; 'tbs2#tablespace.space.free.bytes'=24B;;;; 'tbs1#tablespace.space.usage.percentage'=64%;;;;100 'tbs2#tablespace.space.usage.percentage'=44%;;;;100
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
/usr/lib/centreon/plugins/centreon_database_db2.pl \
	--plugin=database::db2::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                         | Modèle de service associé             |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------|
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]          | Not used in this Monitoring Connector |
| connected-users [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/db2/mode/connectedusers.pm)]                  | App-DB-Db2-Connected-Users-custom     |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)] | App-DB-Db2-Connection-Time-custom     |
| database-logs [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/db2/mode/databaselogs.pm)]                      | App-DB-Db2-Database-Logs-custom       |
| database-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/db2/mode/databaseusage.pm)]                    | App-DB-Db2-Database-Usage-custom      |
| hadr [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/db2/mode/hadr.pm)]                                       | Not used in this Monitoring Connector |
| list-tablespaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/db2/mode/listtablespaces.pm)]                | Used for service discovery            |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database.pm)]                                                     | Not used in this Monitoring Connector |
| tablespaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/db2/mode/tablespaces.pm)]                         | App-DB-Db2-Tablespaces-custom         |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sqlmode                                  |   This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-sqlmode                             |   List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --multiple                                 |   Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --server                                   |   Domain name or IP address of the Db2 database system (Uncataloged database connections)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --port                                     |   TCP/IP server port number that is assigned to the Db2 database system                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --database                                 |   Name for the Db2 database system. If --server is not set, it's a cataloged connection (database alias).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Connected-Users" label="Connected-Users">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --filter-appl-name       |   Filter users by application name (can be a regex).                                                                          |
| --exclude-appl-name      |   Exclude users by application name (can be a regex).                                                                         |
| --warning-* --critical-* |   Thresholds. Can be: 'connected'.                                                                                            |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Option     | Description                              |
|:-----------|:-----------------------------------------|
| --warning  |   Warning threshold in milliseconds.     |
| --critical |   Critical threshold in milliseconds.    |

</TabItem>
<TabItem value="Database-Logs" label="Database-Logs">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-* --critical-* |   Thresholds. Can be: 'usage', 'usage-free', 'usage-prct'.                                                                    |

</TabItem>
<TabItem value="Database-Usage" label="Database-Usage">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-* --critical-* |   Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.                                                  |

</TabItem>
<TabItem value="Tablespaces" label="Tablespaces">

| Option                   | Description                                                                                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example: --filter-counters='status'                                                                                          |
| --filter-type            |   Filter tablespaces by type (can be a regexp).                                                                                                                                 |
| --filter-name            |   Filter tablespaces by name (can be a regexp).                                                                                                                                 |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{tbsname\}, %\{type\}, %\{state\}                                         |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{tbsname\}, %\{type\}, %\{state\}                                         |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /normal/i'). You can use the following variables: %\{tbsname\}, %\{type\}, %\{state\}   |
| --warning-* --critical-* |   Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.                                                                                                    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_database_db2.pl \
	--plugin=database::db2::plugin \
	--server='10.0.0.1' \
	--help
```
