---
id: applications-databases-sap-hana
title: SAP HANA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **SAP HANA** apporte un modèle d'hôte :

* **App-DB-Sap-Hana-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-DB-Sap-Hana-custom" label="App-DB-Sap-Hana-custom">

| Alias                | Modèle de service                           | Description                                                         |
|:---------------------|:--------------------------------------------|:--------------------------------------------------------------------|
| Blocked-Transactions | App-DB-Sap-Hana-Blocked-Transactions-custom | Contrôle permettant de vérifier les transactions bloquées           |
| Connected-Users      | App-DB-Sap-Hana-Connected-Users-custom      | Contrôle permettant de vérifier le nombre d'utilisateurs connectés.                                                              |
| Connection-Time      | App-DB-Sap-Hana-Connection-Time-custom      | Contrôle permettant de vérifier la durée de connexion au serveur    |
| Disk-Usage           | App-DB-Sap-Hana-Disk-Usage-custom           | Contrôle permettant de vérifier l'utilisation des disques           |
| Host-Cpu             | App-DB-Sap-Hana-Host-Cpu-custom             | Contrôle permettant de vérifier l'utilisation processeur du système |
| Host-Memory          | App-DB-Sap-Hana-Host-Memory-custom          | Contrôle permettant de vérifier l'utilisation mémoires du système   |
| Volume-Usage         | App-DB-Sap-Hana-Volume-Usage-custom         | Contrôle permettant de verifier l'utilisation des volumes           |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-DB-Sap-Hana-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias       | Modèle de service                  | Description                                                  |
|:------------|:-----------------------------------|:-------------------------------------------------------------|
| Sql-Generic | App-DB-Sap-Hana-Sql-Generic-custom | Contrôle permettant d'utiliser une requete SQL personnalisée |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Blocked-Transactions" label="Blocked-Transactions">

| Métrique                   | Unité |
|:---------------------------|:------|
| transactions.blocked.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Connected-Users" label="Connected-Users">

| Métrique           | Unité |
|:-------------------|:------|
| *host*#users.count | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Métrique                     | Unité |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Métrique                     | Unité |
|:-----------------------------|:------|
| *disk_name*#disk.usage.bytes | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Host-Cpu" label="Host-Cpu">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| *cpu*#host.cpu.user.utilization.percentage   | %     |
| *cpu*#host.cpu.system.utilization.percentage | %     |
| *cpu*#host.cpu.wait.utilization.percentage   | %     |
| *cpu*#host.cpu.idle.utilization.percentage   | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Host-Memory" label="Host-Memory">

| Métrique                         | Unité |
|:---------------------------------|:------|
| *memory*#host.memory.usage.bytes | B     |
| *swap*#host.swap.usage.bytes     | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Sql-Generic" label="Sql-Generic">

| Métrique                          | Unité |
|:----------------------------------|:------|
| value                             | N/A   |
| sqlrequest.execution.time.seconds | s     |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Métrique                    | Unité |
|:----------------------------|:------|
| *volume*#volume.usage.bytes | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

Pour surveiller Sap Hana DB, vous devez installer SAP Hana Linux Client. Le client est
sur le site Web de support SAP (un compte est nécessaire).

Exécutez la commande suivante afin d'installer les outils nécessaires pour se connecter à la base de données SAP HANA via ODBC, ainsi que le module Perl pour permettre l'utilisation de scripts Perl avec cette connexion.

``` shell
yum install unixODBC perl-DBD-ODBC
```

### Configuration of freetds.conf file

Le fichier /etc/odbcinst.ini doit être modifié. Ajoutez les lignes suivantes :

    [HDBODBC]
    Description = "SmartCloudPT HANA"
    Driver=/usr/sap/hdbclient/libodbcHDB.so

### User account

Un utilisateur disposant de droits sur le schéma SYS est nécessaire.

### Test the connection

Un exemple de commande pour tester la connexion à la base de données :

```/usr/sap/hdbclient/hdbsql -n saphanadb\_servername:31041 -d databasename -u username -p password```

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
dnf install centreon-pack-applications-databases-sap-hana
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-sap-hana
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-sap-hana
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-sap-hana
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **SAP HANA**
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
dnf install centreon-plugin-Applications-Databases-Sap-Hana
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Sap-Hana
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-sap-hana
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Sap-Hana
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-DB-Sap-Hana-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro               | Description                                                                                          | Valeur par défaut | Obligatoire |
|:--------------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SAPHANAUSERNAME     | User name used to connect to the database                                                            |                   |             |
| SAPHANAPASSWORD     | Password for the defined user name                                                                   |                   |             |
| SAPHANAPORT         | Database Server Port (default: 30013)                                                                | 30013             |             |
| SAPHANAEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Blocked-Transactions" label="Blocked-Transactions">

| Macro                       | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBLOCKEDTRANSACTIONS  | Warning threshold                                                                                  |                   |             |
| CRITICALBLOCKEDTRANSACTIONS | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS                | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Connected-Users" label="Connected-Users">

| Macro          | Description                                                                                        | Valeur par défaut | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERUSERNAME | Filter connected username. (can be a regex)                                                        |                   |             |
| WARNINGUSERS   | Warning threshold                                                                                  |                   |             |
| CRITICALUSERS  | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in milliseconds                                                                  |                   |             |
| CRITICAL     | Critical threshold in milliseconds                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Macro         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME    | Filter disk name. (can be a regex)                                                                 |                   |             |
| WARNINGUSAGE  | Warning threshold                                                                                  |                   |             |
| CRITICALUSAGE | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Host-Cpu" label="Host-Cpu">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGIDLE  | Warning threshold                                                                                  |                   |             |
| CRITICALIDLE | Critical threshold                                                                                 |                   |             |
| WARNINGSYS   | Warning threshold                                                                                  |                   |             |
| CRITICALSYS  | Critical threshold                                                                                 |                   |             |
| WARNINGUSER  | Warning threshold                                                                                  |                   |             |
| CRITICALUSER | Critical threshold                                                                                 |                   |             |
| WARNINGWAIT  | Warning threshold                                                                                  |                   |             |
| CRITICALWAIT | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Host-Memory" label="Host-Memory">

| Macro                 | Description                                                                                        | Valeur par défaut | Obligatoire |
|:----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGPHYSICALUSAGE  | Warning threshold                                                                                  |                   |             |
| CRITICALPHYSICALUSAGE | Critical threshold                                                                                 |                   |             |
| WARNINGSWAPUSAGE      | Warning threshold                                                                                  |                   |             |
| CRITICALSWAPUSAGE     | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Sql-Generic" label="Sql-Generic">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FORMAT       | Output format (default: 'SQL statement result : %i.')                                              | value: %i         | X           |
| PERFDATANAME | Perfdata name in perfdata output (default: 'value')                                                | value             |             |
| SQLSTATEMENT | SQL statement that returns a number                                                                |                   | X           |
| WARNING      | Threshold                                                                                                   |                   |             |
| CRITICAL     | Threshold                                                                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Macro         | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME    | Filter volume name. (can be a regex)                                                               |                   |             |
| WARNINGUSAGE  | Warning threshold                                                                                  |                   |             |
| CRITICALUSAGE | Critical threshold                                                                                 |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_sap_hana.pl \
	--plugin=database::sap::hana::plugin \
	--servernode='10.0.0.1' \
	--port='30013' \
	--username='' \
	--password=''  \
	--mode=volume-usage \
	--warning-usage='' \
	--critical-usage='' \
	--filter-name='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All data volumes are ok | '*volume*#volume.usage.bytes'=12B;;;;
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
/usr/lib/centreon/plugins/centreon_sap_hana.pl \
	--plugin=database::sap::hana::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                         | Modèle de service associé                   |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------|
| blocked-transactions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/sap/hana/mode/blockedtransactions.pm)]   | App-DB-Sap-Hana-Blocked-Transactions-custom |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]          | Not used in this Monitoring Connector       |
| connected-users [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/sap/hana/mode/connectedusers.pm)]             | App-DB-Sap-Hana-Connected-Users-custom      |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)] | App-DB-Sap-Hana-Connection-Time-custom      |
| disk-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/sap/hana/mode/diskusage.pm)]                       | App-DB-Sap-Hana-Disk-Usage-custom           |
| host-cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/sap/hana/mode/hostcpu.pm)]                           | App-DB-Sap-Hana-Host-Cpu-custom             |
| host-memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/sap/hana/mode/hostmemory.pm)]                     | App-DB-Sap-Hana-Host-Memory-custom          |
| name [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database.pm)]                                                     | Not used in this Monitoring Connector       |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]                        | App-DB-Sap-Hana-Sql-Generic-custom          |
| volume-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/sap/hana/mode/volumeusage.pm)]                   | App-DB-Sap-Hana-Volume-Usage-custom         |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --servernode                               | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     | Database Server Port (default: 30013).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --database                                 | Database name to connect.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --sqlmode                                  | This plugin offers several ways to query the database (default: dbi). See --list-sqlmode.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-sqlmode                             | List all available sql modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --multiple                                 | Enable connecting to multiple databases (required by some specific modes such as replication).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata='free,used,invert()'      Convert storage free perfdata into used:     --change-perfdata='used,free,invert()'      Scale traffic values automatically:     --change-perfdata='traffic,,scale(auto)'      Scale traffic values in Mbps:     --change-perfdata='traffic\_in,,scale(Mbps),mbps'      Change traffic values in percent:     --change-perfdata='traffic\_in,,percent()'                                                                                                                                                                                                                                                                                                                                                                |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --datasource                               | Database server information, mandatory if the server's address and port are not defined in the corresponding options. The syntax depends on the database type.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --username                                 | User name used to connect to the database.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --password                                 | Password for the defined user name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --connect-options                          | Add connection options for the DBI connect method. Format: name=value,name2=value2,...                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --connect-query                            | Execute a query just after the connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --sql-errors-exit                          | Expected status in case of DB error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --timeout                                  | Timeout in seconds for connection.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --exec-timeout                             | Timeout in seconds for query execution                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Blocked-Transactions" label="Blocked-Transactions">

| Option       | Description                                            |
|:-------------|:-------------------------------------------------------|
| --warning-*  | Warning threshold. Can be: 'blocked-transactions'.     |
| --critical-* | Critical threshold. Can be: 'blocked-transactions'.    |

</TabItem>
<TabItem value="Connected-Users" label="Connected-Users">

| Option            | Description                                   |
|:------------------|:----------------------------------------------|
| --filter-username | Filter connected username. (can be a regex)   |
| --warning-*       | Warning threshold. Can be: 'users'.           |
| --critical-*      | Critical threshold. Can be: 'users'.          |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Option     | Description                            |
|:-----------|:---------------------------------------|
| --warning  | Warning threshold in milliseconds.     |
| --critical | Critical threshold in milliseconds.    |

</TabItem>
<TabItem value="Disk-Usage" label="Disk-Usage">

| Option           | Description                          |
|:-----------------|:-------------------------------------|
| --warning-usage  | Warning threshold.                   |
| --critical-usage | Critical threshold.                  |
| --filter-name    | Filter disk name. (can be a regex)   |
| --units          | Default is '%', can be 'B'           |
| --free           | Thresholds are on free space left.   |

</TabItem>
<TabItem value="Host-Cpu" label="Host-Cpu">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if Redis connection fails.                                                                                                                                                                                           |
| --memexpiration        | Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-counters      | Only display some counters (regexp can be used). Example : --filter-counters='^idle$'                                                                                                                                                         |
| --warning-*            | Warning threshold. Can be: 'user', 'sys', 'idle', 'wait'.                                                                                                                                                                                     |
| --critical-*           | Critical threshold. Can be: 'user', 'sys', 'idle', 'wait'.                                                                                                                                                                                    |

</TabItem>
<TabItem value="Host-Memory" label="Host-Memory">

| Option            | Description                                                                                       |
|:------------------|:--------------------------------------------------------------------------------------------------|
| --filter-counters | Only display some counters (regexp can be used). Example : --filter-counters='^physical-usage$'   |
| --warning-*       | Warning threshold. Can be: 'physical-usage' (%), 'swap-usage' (%).                                |
| --critical-*      | Critical threshold. Can be: 'physical-usage' (%), 'swap-usage' (%).                               |

</TabItem>
<TabItem value="Sql-Generic" label="Sql-Generic">

| Option                   | Description                                              |
|:-------------------------|:---------------------------------------------------------|
| --sql-statement          | SQL statement that returns a number.                     |
| --format                 | Output format (default: 'SQL statement result : %i.').   |
| --perfdata-unit          | Perfdata unit in perfdata output (default: '')           |
| --perfdata-name          | Perfdata name in perfdata output (default: 'value')      |
| --perfdata-min           | Minimum value to add in perfdata output (default: '')    |
| --perfdata-max           | Maximum value to add in perfdata output (default: '')    |
| --warning-* --critical-* | Thresholds. Can be: 'value', 'execution-time'.           |

</TabItem>
<TabItem value="Volume-Usage" label="Volume-Usage">

| Option           | Description                            |
|:-----------------|:---------------------------------------|
| --warning-usage  | Warning threshold.                     |
| --critical-usage | Critical threshold.                    |
| --filter-name    | Filter volume name. (can be a regex)   |
| --units          | Default is '%', can be 'B'             |
| --free           | Thresholds are on free space left.     |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_sap_hana.pl \
	--plugin=database::sap::hana::plugin \
	--servernode='10.0.0.1' \
	--help
```
