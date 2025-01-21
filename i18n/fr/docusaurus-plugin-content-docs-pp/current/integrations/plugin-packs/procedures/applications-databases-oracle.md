---
id: applications-databases-oracle
title: Oracle Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Oracle Database** apporte un modèle d'hôte :

* **App-DB-Oracle-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="App-DB-Oracle-custom" label="App-DB-Oracle-custom">

| Alias                   | Modèle de service                            | Description                                                                                             | Découverte |
|:------------------------|:---------------------------------------------|:--------------------------------------------------------------------------------------------------------|:----------:|
| Connection-Number       | App-DB-Oracle-Connection-Number-custom       | Contrôle permettant de vérifier le nombre de connexions au serveur Oracle                               |            |
| Connection-Time         | App-DB-Oracle-Connection-Time-custom         | Contrôle permettant de vérifier la durée de connexion au serveur. Ce temps est donné en secondes        |            |
| Corrupted-Blocks        | App-DB-Oracle-Corrupted-Blocks-custom        | Contrôle permettant de vérifier le nombre de blocks corrompus du serveur.                               |            |
| Datacache-Hitratio      | App-DB-Oracle-Datacache-Hitratio-custom      | Contrôle permettant de vérifier le 'Data Buffer Cache Hit Ratio' du serveur. Aucunes alertes par défaut |            |
| Process-Usage           | App-DB-Oracle-Process-Usage-custom           | Contrôle permettant de vérifier l'utilisation des 'process' Oracle                                      |            |
| Rman-Backup-Problems    | App-DB-Oracle-Rman-Backup-Problems-custom    | Contrôle permettant de vérifier les erreurs de sauvegarde 'RMAN' du serveur durant les 3 derniers jours |            |
| Session-Usage           | App-DB-Oracle-Session-Usage-custom           | Contrôle permettant de vérifier l'utilisation des sessions                                              |            |
| Tablespace-Usage-Global | App-DB-Oracle-Tablespace-Usage-Global-custom | Contrôle permettant de vérifier l'utilisation des 'tablespaces' du serveur                              | X          |
| Tnsping                 | App-DB-Oracle-Tnsping-custom                 | Contrôle permettant de vérifier la connexion à un 'listener' distant                                    |            |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-DB-Oracle-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                            | Modèle de service                                     | Description                                                                                                 | Découverte |
|:---------------------------------|:------------------------------------------------------|:------------------------------------------------------------------------------------------------------------|:----------:|
| ASM-Diskgroup-Usage-Generic-Name | App-DB-Oracle-ASM-Diskgroup-Usage-Generic-Name-custom | Contrôle permettant de vérifier l'utilisation et le statut des groupes de disques ASM sur un serveur Oracle |            |
| ASM-Diskgroup-Usage-Global       | App-DB-Oracle-ASM-Diskgroup-Usage-Global-custom       | Contrôle permettant de vérifier l'utilisation et le statut des groupes de disques ASM sur un serveur Oracle | X          |
| Data-Files-Status                | App-DB-Oracle-Data-Files-Status-custom                | Contrôle permettant de vérifier le statut des fichiers de données Oracle                                    |            |
| Dictionary-Cache-Usage           | App-DB-Oracle-Dictionary-Cache-Usage-custom           | Contrôle permettant de vérifier le 'dictionary cache'                                                       |            |
| Event-Waits-Usage                | App-DB-Oracle-Event-Waits-Usage-custom                | Contrôle permettant de vérifier l'utilisation des 'event waits'.                                            |            |
| Fra-Usage                        | App-DB-Oracle-Fra-Usage-custom                        | Contrôle permettant de vérifier le 'fast recovery area space'                                               |            |
| Invalid-Object                   | App-DB-Oracle-Invalid-Object-custom                   | Contrôle permettant de vérifier l'utilisation des objets invalides.                                         |            |
| Library-Cache-Usage              | App-DB-Oracle-Library-Cache-Usage-custom              | Contrôle permettant de vérifier le 'library cache'                                                          |            |
| Long-Queries                     | App-DB-Oracle-Long-Queries-custom                     | Contrôle permettant de vérifier les longues requêtes.                                                       |            |
| Redolog-Usage                    | App-DB-Oracle-Redolog-Usage-custom                    | Contrôle permettant de vérifier le 'redo log'                                                               |            |
| Rman-Backup-Age                  | App-DB-Oracle-Rman-Backup-Age-custom                  | Contrôle permettant de vérifier l'ancienneté des sauvegardes 'RMAN'                                         |            |
| Rman-Backup-Online-Age           | App-DB-Oracle-Rman-Backup-Online-Age-custom           | Contrôle permettant de vérifier l'ancienneté des sauvegardes 'RMAN' en mode online                          |            |
| Rollback-Segment-Usage           | App-DB-Oracle-Rollback-Segment-Usage-custom           | Contrôle permettant de vérifier l'utilisation des 'rollback segment'.                                       |            |
| Sql                              | App-DB-Oracle-Sql-Statement-Generic-custom            | Contrôle permettant d'exécuter une requête SQL personnalisée renvoyant une donnée numérique                 |            |
| Sql-String                       | App-DB-Oracle-Sql-Statement-String-Generic-custom     | Contrôle permettant d'exécuter une requête SQL personnalisée renvoyant une chaine de caractères             |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                        | Description                                               |
|:---------------------------------------|:----------------------------------------------------------|
| App-DB-Oracle-ASM-Diskgroup-Usage-Name | Discover the disk partitions and monitor space occupation |
| App-DB-Oracle-Tablespaces-Usage-Name   |                                                           |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="ASM-Diskgroup-Usage-*" label="ASM-Diskgroup-Usage-*">

| Métrique           | Unité |
|:-------------------|:------|
| *dg*#status        | N/A   |
| *dg*#offline-disks | N/A   |
| *dg*#usage         | N/A   |
| *dg*#usage-failure | N/A   |

> Concerne les modèles de service suivants : ASM-Diskgroup-Usage-Generic-Name, ASM-Diskgroup-Usage-Global

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Métrique        | Unité |
|:----------------|:------|
| connected_users | N/A   |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Métrique                     | Unité |
|:-----------------------------|:------|
| connection.time.milliseconds | ms    |

</TabItem>
<TabItem value="Corrupted-Blocks" label="Corrupted-Blocks">

| Métrique         | Unité |
|:-----------------|:------|
| corrupted_blocks | N/A   |

</TabItem>
<TabItem value="Data-Files-Status" label="Data-Files-Status">

| Métrique                        | Unité |
|:--------------------------------|:------|
| datafiles.traffic.io.usage.iops | iops  |
| *df*#status                     | N/A   |
| *df*#online-status              | N/A   |

</TabItem>
<TabItem value="Datacache-Hitratio" label="Datacache-Hitratio">

| Métrique    | Unité |
|:------------|:------|
| usage       | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Dictionary-Cache-Usage" label="Dictionary-Cache-Usage">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| dictionary.cache.get.hitratio.percentage | %     |

</TabItem>
<TabItem value="Event-Waits-Usage" label="Event-Waits-Usage">

| Métrique                 | Unité |
|:-------------------------|:------|
| event-count              | N/A   |
| *event*#total-waits-sec  | /s    |
| *event*#total-waits-time | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Fra-Usage" label="Fra-Usage">

| Métrique                                         | Unité |
|:-------------------------------------------------|:------|
| recoveryarea.space.usage.percentage              | %     |
| recoveryarea.space.reclaimable.percentage        | %     |
| *file*#recoveryarea.space.usage.percentage       | %     |
| *file*#recoveryarea.space.reclaimable.percentage | %     |

</TabItem>
<TabItem value="Invalid-Object" label="Invalid-Object">

| Métrique            | Unité |
|:--------------------|:------|
| objects             | N/A   |
| indexes             | N/A   |
| ind-partitions      | N/A   |
| ind-subpartitions   | N/A   |
| registry-components | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Library-Cache-Usage" label="Library-Cache-Usage">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| library.cache.get.hitratio.percentage | %     |
| library.cache.pin.hitratio.percentage | %     |
| library.cache.reloads.persecond       | /s    |
| library.cache.invalids.persecond      | /s    |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Métrique    | Unité |
|:------------|:------|
| status      | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Process-Usage" label="Process-Usage">

| Métrique     | Unité |
|:-------------|:------|
| process_used | %     |

</TabItem>
<TabItem value="Redolog-Usage" label="Redolog-Usage">

| Métrique                          | Unité |
|:----------------------------------|:------|
| redolog.retry.ratio.percentage    | %     |
| redolog.traffic.io.bytespersecond | B/s   |

</TabItem>
<TabItem value="Rman-Backup-Age" label="Rman-Backup-Age">

Coming soon

</TabItem>
<TabItem value="Rman-Backup-Online-Age" label="Rman-Backup-Online-Age">

Coming soon

</TabItem>
<TabItem value="Rman-Backup-Problems" label="Rman-Backup-Problems">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| rman.backups.completed.count               | count |
| rman.backups.failed.count                  | count |
| rman.backups.completed_with_warnings.count | count |
| rman.backups.completed_with_errors.count   | count |

</TabItem>
<TabItem value="Rollback-Segment-Usage" label="Rollback-Segment-Usage">

| Métrique          | Unité |
|:------------------|:------|
| extends           | /s    |
| wraps             | /s    |
| header-contention | %     |
| block-contention  | %     |
| hit-ratio         | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Session-Usage" label="Session-Usage">

| Métrique     | Unité |
|:-------------|:------|
| session_used | %     |

</TabItem>
<TabItem value="Sql" label="Sql">

| Métrique                          | Unité |
|:----------------------------------|:------|
| value                             | N/A   |
| sqlrequest.execution.time.seconds | s     |

</TabItem>
<TabItem value="Sql-String" label="Sql-String">

| Métrique      | Unité |
|:--------------|:------|
| *rows*#string | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Tablespace-Usage-Global" label="Tablespace-Usage-Global">

| Métrique                | Unité |
|:------------------------|:------|
| *tablespace*#tbs__usage | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Tnsping" label="Tnsping">

| Métrique    | Description                  | Unité |
|:------------|:-----------------------------|:------|
| status      | Check Oracle listener status |       |

</TabItem>
</Tabs>

## Prérequis

### Dépendances

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install gcc wget
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install gcc wget
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install wget gcc make unzip libaio1 libdbi-perl
```

</TabItem>
</Tabs>

###  Oracle instant client

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 / CentOS 7">

Se connecter sur [Instant Client Downloads](https://www.oracle.com/database/technologies/instant-client/downloads.html).
Choisir le groupe de paquets correspondant au système d'exploitation du collecteur et télécharger les paquets (RPM) suivants :

  - oracle-instantclient-basic
  - oracle-instantclient-sqlplus
  - oracle-instantclientdevel

Installer les paquets avec la commande suivante :

```bash
rpm -ivh oracle-*.rpm
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

Se connecter sur [Instant Client Downloads](https://www.oracle.com/database/technologies/instant-client/downloads.html).
Choisir le groupe de paquets correspondant au système d'exploitation du collecteur et télécharger les paquets (ZIP) suivants :

  - oracle-instantclient-basic
  - oracle-instantclient-sqlplus
  - oracle-instantclientdevel

Installer les paquets avec les commandes suivantes :

```bash
mkdir /opt/oracle
cd /opt/oracle
unzip 'instantclient-*.zip'
```

</TabItem>
</Tabs>

### Bibliothèque Perl pour Oracle

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 / CentOS 7">

En tant que **root**, exécuter :

```bash
cd /usr/local/src 
wget https://www.cpan.org/modules/by-module/DBD/DBD-Oracle-1.83.tar.gz 
tar xzf DBD-Oracle-1.83.tar.gz 
cd DBD-Oracle-1.83 
export ORACLE_HOME=/usr/lib/oracle/21/client64
export LD_LIBRARY_PATH=/usr/lib/oracle/21/client64/lib 
export PATH=$ORACLE_HOME:$PATH
export TNS_ADMIN=$ORACLE_HOME/network/admin
perl Makefile.PL -m /usr/share/oracle/21/client64/demo/demo.mk
```

Le message suivant devrait apparaître :

```text
LD_RUN_PATH=/usr/lib/oracle/21/client64/lib
Using DBD::Oracle 1.83.
Using DBD::Oracle 1.83.
Using DBI 1.641 (for perl 5.026003 on x86_64-linux-thread-multi) installed in /usr/lib64/perl5/vendor_perl/auto/DBI/
Generating a Unix-style Makefile
Writing Makefile for DBD::Oracle
```

Si vous rencontrez une erreur durant l'étape du **Makefile.PL**, essayez de spécifier explicitement une version d'Oracle 
fonctionnelle pour la compilation (cela n'aura pas d'impact sur le fonctionnement): `perl Makefile.PL -V 12.1.0 -m /usr/share/oracle/21/client64/demo/demo.mk`

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

En tant que **root**, exécuter :

```bash
cd /usr/local/src
wget https://www.cpan.org/modules/by-module/DBD/DBD-Oracle-1.83.tar.gz
tar xzf DBD-Oracle-1.83.tar.gz
cd DBD-Oracle-1.83
export ORACLE_HOME=/opt/oracle/instantclient_21_8/
export LD_LIBRARY_PATH=/opt/oracle/instantclient_21_8/
export PATH=$ORACLE_HOME:$PATH
perl Makefile.PL -m /opt/oracle/instantclient_21_8/sdk/demo/demo.mk
```

Le message suivant devrait apparaître :

```text
LD_RUN_PATH=/opt/oracle/instantclient_21_8
Using DBD::Oracle 1.83.
Using DBD::Oracle 1.83.
Using DBI 1.643 (for perl 5.032001 on x86_64-linux-gnu-thread-multi) installed in /usr/lib/x86_64-linux-gnu/perl5/5.32/auto/DBI/
Generating a Unix-style Makefile
Writing Makefile for DBD::Oracle
```

Si vous rencontrez une erreur durant l'étape du **Makefile.PL**, essayez de spécifier explicitement une version d'Oracle 
fonctionnelle pour la compilation (cela n'aura pas d'impact sur le fonctionnement): `perl Makefile.PL -V 12.1.0 -m /opt/oracle/instantclient_21_8/sdk/demo/demo.mk`

</TabItem>
</Tabs>

Compiler la bibliothèque :

```bash
make
```

Puis l'installer :

```bash
make install
```

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8 / CentOS 7" label="Alma / RHEL / Oracle Linux 8 / CentOS 7">

Puis créer le fichier : **/etc/ld.so.conf.d/oracle.conf**. Éditer et ajouter un lien vers la bibliothèque Perl d’Oracle :

```bash
cat > /etc/ld.so.conf.d/oracle.conf <<EOF
/usr/lib/oracle/21/client64/lib/
EOF
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

Puis créer le fichier : **/etc/ld.so.conf.d/oracle-instantclient.conf**. Éditer et ajouter un lien vers la bibliothèque Perl d’Oracle :

```bash
cat > /etc/ld.so.conf.d/oracle-instantclient.conf <<EOF
/opt/oracle/instantclient_21_8/
EOF
```
</TabItem>
</Tabs>

Mettez à jour le cache avec la commande suivante :

```bash
/sbin/ldconfig
```

### Compte d'utilisateur

La façon la plus sûre de récupérer des informations du serveur Oracle est de créer un utilisateur dédié à Centreon.

Ce compte utilisateur doit avoir la permission de lecture/READ (Oracle 12+) ou de sélection/SELECT (Oracle < 12) sur les tables suivantes :

  - dba\_free\_space
  - dba\_data\_files
  - dba\_temp\_files
  - dba\_segments
  - dba\_jobs
  - dba\_objects
  - DBA\_MVIEW\_refresh\_times
  - dba\_indexes
  - dba\_ind\_partitions
  - dba\_ind\_subpartitions
  - dba\_registry
  - dba\_tablespaces
  - DBA\_MVIEW\_refresh\_times
  - DBA\_TABLESPACE\_USAGE\_METRICS
  - v_$sysstat
  - v_$sgastat
  - v_$parameter
  - v_$process
  - v_$session
  - v_$filestat
  - v_$log
  - v_$instance
  - V_$ASM\_DISKGROUP
  - v_$database\_block\_corruption
  - v_$tempstat
  - v_$rowcache
  - v_$system\_event
  - v_$recovery\_area\_usage
  - v_$librarycache
  - v_$sql\_monitor
  - v_$resource\_limit
  - v_$rman\_status
  - v_$backup
  - v_$rman\_status
  - v_$rollstat
  - v_$resource\_limit
  - v_$tablespace
  - v_$tempfile
  - v_$event\_name
  - v_$waitstat
  

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
dnf install centreon-pack-applications-databases-oracle
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-databases-oracle
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-databases-oracle
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-oracle
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Oracle Database**
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
dnf install centreon-plugin-Applications-Databases-Oracle
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Applications-Databases-Oracle
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-databases-oracle
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Oracle
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-DB-Oracle-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro             | Description                               | Valeur par défaut | Obligatoire |
|:------------------|:------------------------------------------|:------------------|:-----------:|
| ORACLEUSERNAME    | User name used to connect to the database | USERNAME          |             |
| ORACLEPASSWORD    | Password for the defined user name        | PASSWORD          |             |
| ORACLEPORT        | Database Server Port                      | 1521              |             |
| ORACLESERVICENAME | Database Service Name                     |                   |             |
| ORACLESID         | Database SID                              | SID               |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="ASM-Diskgroup-Usage-Generic-Name" label="ASM-Diskgroup-Usage-Generic-Name">

| Macro                | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTER               | Filter by name (regexp can be used)                                                                 |                   |             |
| WARNING              | Warning threshold                                                                                   | 80                |             |
| CRITICAL             | Critical threshold                                                                                  | 90                |             |
| WARNINGUSAGEFAILURE  | Warning threshold                                                                                   |                   |             |
| CRITICALUSAGEFAILURE | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="ASM-Diskgroup-Usage-Global" label="ASM-Diskgroup-Usage-Global">

| Macro                | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME           | Filter by name (regexp can be used)                                                                 |                   |             |
| WARNING              | Warning threshold                                                                                   | 80                |             |
| CRITICAL             | Critical threshold                                                                                  | 90                |             |
| WARNINGUSAGEFAILURE  | Warning threshold                                                                                   |                   |             |
| CRITICALUSAGEFAILURE | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MODE         |                                                                                                     | connected-users   |             |
| WARNING      | Warning threshold                                                                                   | 50                |             |
| CRITICAL     | Critical threshold                                                                                  | 100               |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MODE         |                                                                                                     | connection-time   |             |
| WARNING      | Warning threshold in milliseconds                                                                   | 1000              |             |
| CRITICAL     | Critical threshold in milliseconds                                                                  | 5000              |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Corrupted-Blocks" label="Corrupted-Blocks">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| MODE         |                                                                                                     | corrupted-blocks  |             |
| WARNING      | Warning threshold                                                                                   | 1                 |             |
| CRITICAL     | Critical threshold                                                                                  | 10                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Data-Files-Status" label="Data-Files-Status">

| Macro                | Description                                                                                                                                                            | Valeur par défaut                        | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------|:-----------:|
| WARNINGONLINESTATUS  | Set warning threshold for online status (Default: '%\{online_status\} =~ /sysoff/i'). You can use the following variables: %\{display\}, %\{online_status\}                | %\{online_status\} =~ /sysoff/i           |             |
| CRITICALONLINESTATUS | Set critical threshold for online status (Default: '%\{online_status\} =~ /offline\|recover/i'). You can use the following variables: %\{display\}, %\{online_status\}     | %\{online_status\} =~ /offline\|recover/i |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING (Default: none). You can use the following variables: %\{display\}, %\{status\}                                |                                          |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (Default: '%\{status\} =~ /offline\|invalid/i'). You can use the following variables: %\{display\}, %\{status\} |                                          |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                    | --verbose                                |             |

</TabItem>
<TabItem value="Datacache-Hitratio" label="Datacache-Hitratio">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                   |                   |             |
| CRITICAL     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Dictionary-Cache-Usage" label="Dictionary-Cache-Usage">

| Macro           | Description                                                                                         | Valeur par défaut | Obligatoire |
|:----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGGETHITS  | Thresholds                                                                                          |                   |             |
| CRITICALGETHITS | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Event-Waits-Usage" label="Event-Waits-Usage">

| Macro                  | Description                                                                                         | Valeur par défaut                      | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:---------------------------------------|:-----------:|
| FILTERNAME             | Filter by event name. Can be a regex                                                                |                                        |             |
| WARNINGEVENTCOUNT      | Warning threshold                                                                                   |                                        |             |
| CRITICALEVENTCOUNT     | Critical threshold                                                                                  |                                        |             |
| WARNINGTOTALWAITSSEC   | Warning threshold                                                                                   |                                        |             |
| CRITICALTOTALWAITSSEC  | Critical threshold                                                                                  |                                        |             |
| WARNINGTOTALWAITSTIME  | Warning threshold                                                                                   |                                        |             |
| CRITICALTOTALWAITSTIME | Critical threshold                                                                                  |                                        |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose --filter-perfdata=noperfdata |             |

</TabItem>
<TabItem value="Fra-Usage" label="Fra-Usage">

| Macro                        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERTYPE                   | Filter file type (can be a regexp)                                                                  |                   |             |
| WARNINGFILESPACERECLAIMABLE  | Thresholds                                                                                          |                   |             |
| CRITICALFILESPACERECLAIMABLE | Thresholds                                                                                          |                   |             |
| WARNINGFILESPACEUSAGE        | Thresholds                                                                                          |                   |             |
| CRITICALFILESPACEUSAGE       | Thresholds                                                                                          |                   |             |
| WARNINGSPACERECLAIMABLE      | Thresholds                                                                                          |                   |             |
| CRITICALSPACERECLAIMABLE     | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGE            | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGE           | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Invalid-Object" label="Invalid-Object">

| Macro                      | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| RETENTIONOBJECTS           | Retention in days for invalid objects (default : 3)                                                 | 3                 |             |
| FILTERMESSAGE              | Filter by message (can be a regexp)                                                                 |                   |             |
| WARNINGINDEXES             | Warning threshold                                                                                   |                   |             |
| CRITICALINDEXES            | Critical threshold                                                                                  |                   |             |
| WARNINGINDPARTITIONS       | Warning threshold                                                                                   |                   |             |
| CRITICALINDPARTITIONS      | Critical threshold                                                                                  |                   |             |
| WARNINGINDSUBPARTITIONS    | Warning threshold                                                                                   |                   |             |
| CRITICALINDSUBPARTITIONS   | Critical threshold                                                                                  |                   |             |
| WARNINGOBJECTS             | Warning threshold                                                                                   |                   |             |
| CRITICALOBJECTS            | Critical threshold                                                                                  |                   |             |
| WARNINGREGISTRYCOMPONENTS  | Warning threshold                                                                                   |                   |             |
| CRITICALREGISTRYCOMPONENTS | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Library-Cache-Usage" label="Library-Cache-Usage">

| Macro            | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGGETHITS   | Thresholds                                                                                          |                   |             |
| CRITICALGETHITS  | Thresholds                                                                                          |                   |             |
| WARNINGINVALIDS  |                                                                                                     |                   |             |
| CRITICALINVALIDS |                                                                                                     |                   |             |
| WARNINGPINHITS   | Thresholds                                                                                          |                   |             |
| CRITICALPINHITS  | Thresholds                                                                                          |                   |             |
| WARNINGRELOADS   | Thresholds                                                                                          |                   |             |
| CRITICALRELOADS  | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Macro          | Description                                                                                                                                                     | Valeur par défaut | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: '') You can use the following variables: %\{username\}, %\{sql_text\}, %\{since\}, %\{status\}   |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %\{username\}, %\{sql_text\}, %\{since\}, %\{status\} |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                             |                   |             |

</TabItem>
<TabItem value="Process-Usage" label="Process-Usage">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                   |                   |             |
| CRITICAL     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Redolog-Usage" label="Redolog-Usage">

| Macro              | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGRETRYRATIO  | Thresholds                                                                                          |                   |             |
| CRITICALRETRYRATIO | Thresholds                                                                                          |                   |             |
| WARNINGTRAFFICIO   | Thresholds                                                                                          |                   |             |
| CRITICALTRAFFICIO  | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Rman-Backup-Age" label="Rman-Backup-Age">

| Macro               | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGARCHIVELOG   | Warning threshold in seconds                                                                        |                   |             |
| CRITICALARCHIVELOG  | Critical threshold in seconds. * Skip error if never executed                                       |                   |             |
| WARNINGCONTROLFILE  | Warning threshold in seconds                                                                        |                   |             |
| CRITICALCONTROLFILE | Critical threshold in seconds. * Skip error if never executed                                       |                   |             |
| WARNINGDBFULL       | Warning threshold in seconds                                                                        |                   |             |
| CRITICALDBFULL      | Critical threshold in seconds. * Skip error if never executed                                       |                   |             |
| WARNINGDBINCR       | Warning threshold in seconds                                                                        |                   |             |
| CRITICALDBINCR      | Critical threshold in seconds. * Skip error if never executed                                       |                   |             |
| EXTRAOPTIONS        | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Rman-Backup-Online-Age" label="Rman-Backup-Online-Age">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in seconds                                                                        |                   |             |
| CRITICAL     | Critical threshold in seconds                                                                       |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Rman-Backup-Problems" label="Rman-Backup-Problems">

| Macro                     | Description                                                                                         | Valeur par défaut | Obligatoire |
|:--------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| RETENTION                 | Retention in days (default: 3)                                                                      | 3                 |             |
| WARNINGCOMPLETED          | Thresholds                                                                                          |                   |             |
| CRITICALCOMPLETED         | Thresholds                                                                                          |                   |             |
| WARNINGCOMPLETEDERRORS    | Thresholds                                                                                          |                   |             |
| CRITICALCOMPLETEDERRORS   | Thresholds                                                                                          |                   |             |
| WARNINGCOMPLETEDWARNINGS  | Thresholds                                                                                          |                   |             |
| CRITICALCOMPLETEDWARNINGS | Thresholds                                                                                          |                   |             |
| WARNINGFAILED             | Thresholds                                                                                          |                   |             |
| CRITICALFAILED            | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Rollback-Segment-Usage" label="Rollback-Segment-Usage">

| Macro                    | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGBLOCKCONTENTION   | Warning threshold                                                                                   |                   |             |
| CRITICALBLOCKCONTENTION  | Critical threshold                                                                                  |                   |             |
| WARNINGEXTENDS           | Warning threshold                                                                                   |                   |             |
| CRITICALEXTENDS          | Critical threshold                                                                                  |                   |             |
| WARNINGHEADERCONTENTION  | Warning threshold                                                                                   |                   |             |
| CRITICALHEADERCONTENTION | Critical threshold                                                                                  |                   |             |
| WARNINGHITRATIO          | Warning threshold                                                                                   |                   |             |
| CRITICALHITRATIO         | Critical threshold                                                                                  |                   |             |
| WARNINGWRAPS             | Warning threshold                                                                                   |                   |             |
| CRITICALWRAPS            | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Session-Usage" label="Session-Usage">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                   |                   |             |
| CRITICAL     | Critical threshold                                                                                  |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Sql" label="Sql">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SQLCOMMAND   | SQL statement that returns a number                                                                 |                   | X           |
| WARNING      |                                                                                                     |                   |             |
| CRITICAL     |                                                                                                     |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

</TabItem>
<TabItem value="Sql-String" label="Sql-String">

| Macro        | Description                                                                                                                                                                               | Valeur par défaut | Obligatoire |
|:-------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SQLSTATEMENT | SQL statement that returns a string                                                                                                                                                       |                   | X           |
| VALUE        | Value column (must be one of the selected field). MANDATORY                                                                                                                               |                   |             |
| WARNING      | Define the conditions to match for the status to be WARNING. (Can be: %\{key_field\}, %\{value_field\}) e.g --warning-string '%\{key_field\} eq 'Central' && %\{value_field\} =~ /127.0.0.1/' |                   |             |
| CRITICAL     | Define the conditions to match for the status to be CRITICAL (Can be: %\{key_field\} or %\{value_field\})                                                                                   |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                       |                   |             |

</TabItem>
<TabItem value="Tablespace-Usage-Global" label="Tablespace-Usage-Global">

| Macro         | Description                                                                                         | Valeur par défaut     | Obligatoire |
|:--------------|:----------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| EXCLUDEREGEXP | Filter tablespace by name. Can be a regex                                                           | ^(?!(SYSTEM\|SYSAUX)) |             |
| WARNING       | Warning threshold                                                                                   | 90                    |             |
| CRITICAL      | Critical threshold                                                                                  | 98                    |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose --notemp    |             |

</TabItem>
<TabItem value="Tnsping" label="Tnsping">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

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
/usr/lib/centreon/plugins/centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--hostname='10.0.0.1' \
	--port='1521' \
	--sid='SID' \
	--servicename='' \
	--username='USERNAME' \
	--password='PASSWORD' \
	--mode=rollback-segment-usage \
	--warning-extends='' \
	--critical-extends='' \
	--warning-wraps='' \
	--critical-wraps='' \
	--warning-hit-ratio='' \
	--critical-hit-ratio='' \
	--warning-block-contention='' \
	--critical-block-contention=''  \
	--warning-header-contention='' \
	--critical-header-contention='' 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Extends : 7/s Wraps : 21/s Header Contention :  88 % Block Contention :  27 % gets/waits Ratio :  85 % | 'extends'=7/s;;;0;'wraps'=21/s;;;0;'header-contention'=88%;;;0;100'block-contention'=27%;;;0;100'hit-ratio'=85%;;;0;100
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
/usr/lib/centreon/plugins/centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                         | Modèle de service associé                                                                                  |
|:---------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------------------------------------------------|
| asm-diskgroup-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/asmdiskgroupusage.pm)]        | App-DB-Oracle-ASM-Diskgroup-Usage-Generic-Name-custom<br />App-DB-Oracle-ASM-Diskgroup-Usage-Global-custom |
| collection [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/collection.pm)]          | Not used in this Monitoring Connector                                                                      |
| connected-users [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/connectedusers.pm)]               | App-DB-Oracle-Connection-Number-custom                                                                     |
| connection-time [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/connectiontime.pm)] | App-DB-Oracle-Connection-Time-custom                                                                       |
| corrupted-blocks [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/corruptedblocks.pm)]             | App-DB-Oracle-Corrupted-Blocks-custom                                                                      |
| data-files-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/datafilesstatus.pm)]            | App-DB-Oracle-Data-Files-Status-custom                                                                     |
| datacache-hitratio [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/datacachehitratio.pm)]         | App-DB-Oracle-Datacache-Hitratio-custom                                                                    |
| dataguard [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/dataguard.pm)]                          | Not used in this Monitoring Connector                                                                      |
| dictionary-cache-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/dictionarycacheusage.pm)]  | App-DB-Oracle-Dictionary-Cache-Usage-custom                                                                |
| event-waits-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/eventwaitsusage.pm)]            | App-DB-Oracle-Event-Waits-Usage-custom                                                                     |
| fra-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/frausage.pm)]                           | App-DB-Oracle-Fra-Usage-custom                                                                             |
| invalid-object [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/invalidobject.pm)]                 | App-DB-Oracle-Invalid-Object-custom                                                                        |
| library-cache-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/librarycacheusage.pm)]        | App-DB-Oracle-Library-Cache-Usage-custom                                                                   |
| list-asm-diskgroups [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/listasmdiskgroups.pm)]        | Used for service discovery                                                                                 |
| list-tablespaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/listtablespaces.pm)]             | Used for service discovery                                                                                 |
| long-queries [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/longqueries.pm)]                     | App-DB-Oracle-Long-Queries-custom                                                                          |
| password-expiration [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/passwordexpiration.pm)]       | Not used in this Monitoring Connector                                                                      |
| process-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/processusage.pm)]                   | App-DB-Oracle-Process-Usage-custom                                                                         |
| redolog-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/redologusage.pm)]                   | App-DB-Oracle-Redolog-Usage-custom                                                                         |
| rman-backup-age [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/rmanbackupage.pm)]                | App-DB-Oracle-Rman-Backup-Age-custom                                                                       |
| rman-backup-problems [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/rmanbackupproblems.pm)]      | App-DB-Oracle-Rman-Backup-Problems-custom                                                                  |
| rman-online-backup-age [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/rmanonlinebackupage.pm)]   | App-DB-Oracle-Rman-Backup-Online-Age-custom                                                                |
| rollback-segment-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/rollbacksegmentusage.pm)]  | App-DB-Oracle-Rollback-Segment-Usage-custom                                                                |
| session-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/sessionusage.pm)]                   | App-DB-Oracle-Session-Usage-custom                                                                         |
| sql [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sql.pm)]                        | App-DB-Oracle-Sql-Statement-Generic-custom                                                                 |
| sql-string [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/centreon/common/protocols/sql/mode/sqlstring.pm)]           | App-DB-Oracle-Sql-Statement-String-Generic-custom                                                          |
| tablespace-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/tablespaceusage.pm)]             | App-DB-Oracle-Tablespace-Usage-Global-custom                                                               |
| tnsping [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/database/oracle/mode/tnsping.pm)]                              | App-DB-Oracle-Tnsping-custom                                                                               |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --hostname                                 | Hostname to query.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     | Database Server Port.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --sid                                      | Database SID.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --servicename                              | Database Service Name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --container                                | Change container (does an alter session set container command).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
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
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
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
<TabItem value="ASM-Diskgroup-Usage-*" label="ASM-Diskgroup-Usage-*">

| Option                   | Description                                                                                                                                                                                                                            |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-usage          | Warning threshold.                                                                                                                                                                                                                     |
| --critical-usage         | Critical threshold.                                                                                                                                                                                                                    |
| --warning-usage-failure  | Warning threshold.                                                                                                                                                                                                                     |
| --critical-usage-failure | Critical threshold.                                                                                                                                                                                                                    |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{status\}, %\{display\}                                                                                                                |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{display\}                                                                                                                |
| --critical-status        | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{display\}                                                                                                               |
| --warning-offline-disks  | Set warning threshold for offline disks (Default: '(%\{offline_disks\} \> 0 && %\{type\} eq "extern") \|\| (%\{offline_disks\} \> 1 && %\{type\} eq "high")'). You can use the following variables: %\{offline_disks\}, %\{type\}, %\{display\}   |
| --critical-offline-disks | Set critical threshold for offline disks (Default: '%\{offline_disks\} \> 0 && %\{type\} =~ /^normal\|high$/'). You can use the following variables: %\{offline_disks\}, %\{type\}, %\{display\}                                               |
| --units                  | Units of thresholds (Default: '%') ('%', 'B').                                                                                                                                                                                         |
| --free                   | Thresholds are on free space left.                                                                                                                                                                                                     |
| --filter-name            | Filter by name (regexp can be used).                                                                                                                                                                                                   |

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Option     | Description            |
|:-----------|:-----------------------|
| --warning  | Warning threshold.     |
| --critical | Critical threshold.    |

</TabItem>
<TabItem value="Connection-Time" label="Connection-Time">

| Option     | Description                            |
|:-----------|:---------------------------------------|
| --warning  | Warning threshold in milliseconds.     |
| --critical | Critical threshold in milliseconds.    |

</TabItem>
<TabItem value="Corrupted-Blocks" label="Corrupted-Blocks">

| Option     | Description            |
|:-----------|:-----------------------|
| --warning  | Warning threshold.     |
| --critical | Critical threshold.    |

</TabItem>
<TabItem value="Data-Files-Status" label="Data-Files-Status">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --filter-counters        | Only display some counters (regexp can be used).                                                                                                                                                                                              |
| --filter-tablespace      | Filter tablespace name (can be a regexp).                                                                                                                                                                                                     |
| --filter-data-file       | Filter data file name (can be a regexp).                                                                                                                                                                                                      |
| --warning-status         | Define the conditions to match for the status to be WARNING (Default: none). You can use the following variables: %\{display\}, %\{status\}                                                                                                       |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%\{status\} =~ /offline\|invalid/i'). You can use the following variables: %\{display\}, %\{status\}                                                                        |
| --warning-online-status  | Set warning threshold for online status (Default: '%\{online_status\} =~ /sysoff/i'). You can use the following variables: %\{display\}, %\{online_status\}                                                                                       |
| --critical-online-status | Set critical threshold for online status (Default: '%\{online_status\} =~ /offline\|recover/i'). You can use the following variables: %\{display\}, %\{online_status\}                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'total-traffic'.                                                                                                                                                                                                          |

</TabItem>
<TabItem value="Datacache-Hitratio" label="Datacache-Hitratio">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-usage        | Warning threshold.                                                                                                                                                                                                                            |
| --critical-usage       | Critical threshold.                                                                                                                                                                                                                           |

</TabItem>
<TabItem value="Dictionary-Cache-Usage" label="Dictionary-Cache-Usage">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'get-hits'.                                                                                                                                                                                                               |

</TabItem>
<TabItem value="Event-Waits-Usage" label="Event-Waits-Usage">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold. Can be: 'total-waits-sec', 'total-waits-time', 'event-count'.                                                                                                                                                              |
| --critical-*           | Critical threshold. Can be: 'total-waits-sec', 'total-waits-time', 'event-count'.                                                                                                                                                             |
| --filter-name          | Filter by event name. Can be a regex.                                                                                                                                                                                                         |
| --wait-time-min        | Time in ms above which we count an event as waiting                                                                                                                                                                                           |
| --show-details         | Print details of waiting events (user, query, ...) in long output                                                                                                                                                                             |

</TabItem>
<TabItem value="Fra-Usage" label="Fra-Usage">

| Option                   | Description                                                                                              |
|:-------------------------|:---------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used).                                                         |
| --filter-type            | Filter file type (can be a regexp).                                                                      |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-reclaimable', 'file-space-usage', 'file-space-reclaimable'.    |

</TabItem>
<TabItem value="Invalid-Object" label="Invalid-Object">

| Option              | Description                                                                                                        |
|:--------------------|:-------------------------------------------------------------------------------------------------------------------|
| --filter-counters   | Only display some counters (regexp can be used). Example: --filter-counters='^indexes$'                            |
| --retention-objects | Retention in days for invalid objects (default : 3).                                                               |
| --filter-message    | Filter by message (can be a regexp).                                                                               |
| --warning-*         | Warning threshold. Can be: 'objects', 'indexes', 'ind-partitions', 'ind-subpartitions', 'registry-components'.     |
| --critical-*        | Critical threshold. Can be: 'objects', 'indexes', 'ind-partitions', 'ind-subpartitions', 'registry-components'.    |

</TabItem>
<TabItem value="Library-Cache-Usage" label="Library-Cache-Usage">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'get-hits', 'pin-hits', 'reloads', 'invalid'.                                                                                                                                                                             |

</TabItem>
<TabItem value="Long-Queries" label="Long-Queries">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-status       | Define the conditions to match for the status to be WARNING (Default: '') You can use the following variables: %\{username\}, %\{sql_text\}, %\{since\}, %\{status\}                                                                                 |
| --critical-status      | Define the conditions to match for the status to be CRITICAL (Default: ''). You can use the following variables: %\{username\}, %\{sql_text\}, %\{since\}, %\{status\}                                                                               |
| --timezone             | Timezone of oracle server (If not set, we use current server execution timezone).                                                                                                                                                             |
| --memory               | Only check new queries.                                                                                                                                                                                                                       |

</TabItem>
<TabItem value="Process-Usage" label="Process-Usage">

| Option     | Description            |
|:-----------|:-----------------------|
| --warning  | Warning threshold.     |
| --critical | Critical threshold.    |

</TabItem>
<TabItem value="Redolog-Usage" label="Redolog-Usage">

| Option                   | Description                                                                                                                                                                                                                                   |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-* --critical-* | Thresholds. Can be: 'retry-ratio', 'traffic-io'.                                                                                                                                                                                              |

</TabItem>
<TabItem value="Rman-Backup-Age" label="Rman-Backup-Age">

| Option              | Description                                                                                                                                                                                       |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --warning-*         | Warning threshold in seconds. Can be: 'db-incr', 'db-full', 'archivelog', 'controlfile'.                                                                                                          |
| --critical-*        | Critical threshold in seconds. Can be: 'db-incr', 'db-full', 'archivelog', 'controlfile'.       --no-* Skip error if never executed. Can be: 'db-incr', 'db-full', 'archivelog', 'controlfile'.   |
| --filter-type       | Filter backup type. (type can be : 'DB INCR', 'DB FULL', 'ARCHIVELOG')                                                                                                                            |
| --skip-no-backup    | Return ok if no backup found.                                                                                                                                                                     |
| --timezone          | Timezone of oracle server (If not set, we use current server execution timezone).                                                                                                                 |
| --incremental-level | Please use the following option if your using incremental level 0 for full backup.                                                                                                                |

</TabItem>
<TabItem value="Rman-Backup-Online-Age" label="Rman-Backup-Online-Age">

| Option     | Description                                                                         |
|:-----------|:------------------------------------------------------------------------------------|
| --warning  | Warning threshold in seconds.                                                       |
| --critical | Critical threshold in seconds.                                                      |
| --timezone | Timezone of oracle server (If not set, we use current server execution timezone)    |

</TabItem>
<TabItem value="Rman-Backup-Problems" label="Rman-Backup-Problems">

| Option                   | Description                                                                             |
|:-------------------------|:----------------------------------------------------------------------------------------|
| --retention              | Retention in days (default: 3).                                                         |
| --warning-* --critical-* | Thresholds. Can be: 'completed', 'failed', 'completed-warnings', 'completed-errors'.    |

</TabItem>
<TabItem value="Rollback-Segment-Usage" label="Rollback-Segment-Usage">

| Option                 | Description                                                                                                                                                                                                                                   |
|:-----------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached            | Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server         | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute      | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db             | Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file        | Failback on a local file if redis connection failed.                                                                                                                                                                                          |
| --memexpiration        | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                |
| --statefile-dir        | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix     | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                |
| --statefile-concat-cwd | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format     | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key        | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher     | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                            |
| --warning-*            | Warning threshold. Can be: 'header-contention', 'block-contention', 'hit-ratio', 'extends', 'wraps'.                                                                                                                                          |
| --critical-*           | Critical threshold. Can be: 'header-contention', 'block-contention', 'hit-ratio', 'extends', 'wraps'.                                                                                                                                         |

</TabItem>
<TabItem value="Session-Usage" label="Session-Usage">

| Option     | Description            |
|:-----------|:-----------------------|
| --warning  | Warning threshold.     |
| --critical | Critical threshold.    |

</TabItem>
<TabItem value="Sql" label="Sql">

| Option                   | Description                                              |
|:-------------------------|:---------------------------------------------------------|
| --sql-statement          | SQL statement that returns a number.                     |
| --format                 | Output format (Default: 'SQL statement result : %i.').   |
| --perfdata-unit          | Perfdata unit in perfdata output (Default: '')           |
| --perfdata-name          | Perfdata name in perfdata output (Default: 'value')      |
| --perfdata-min           | Minimum value to add in perfdata output (Default: '')    |
| --perfdata-max           | Maximum value to add in perfdata output (Default: '')    |
| --warning-* --critical-* | Thresholds. Can be: 'value', 'execution-time'.           |

</TabItem>
<TabItem value="Sql-String" label="Sql-String">

| Option             | Description                                                                                                                                                                                 |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --sql-statement    | SQL statement that returns a string.                                                                                                                                                        |
| --key-column       | Key column (must be one of the selected field). NOT mandatory if you select only one field                                                                                                  |
| --value-column     | Value column (must be one of the selected field). MANDATORY                                                                                                                                 |
| --printf-format    | Specify a custom output message relying on printf formatting. If this option is set --printf-value is mandatory.                                                                            |
| --printf-value     | Specify scalar used to replace in printf. If this option is set --printf-format is mandatory. (Can be: %\{key_field\}, %\{value_field\})                                                      |
| --warning-string   | Define the conditions to match for the status to be WARNING. (Can be: %\{key_field\}, %\{value_field\}) e.g --warning-string '%\{key_field\} eq 'Central' && %\{value_field\} =~ /127.0.0.1/'   |
| --critical-string  | Define the conditions to match for the status to be CRITICAL (Can be: %\{key_field\} or %\{value_field\})                                                                                     |
| --dual-table       | Set this option to ensure compatibility with dual table and Oracle.                                                                                                                         |
| --empty-sql-string | Set this option to change the output message when the sql statement result is empty. (Default: 'No row returned or --key-column/--value-column do not correctly match selected field')      |

</TabItem>
<TabItem value="Tablespace-Usage-Global" label="Tablespace-Usage-Global">

| Option                | Description                                 |
|:----------------------|:--------------------------------------------|
| --warning-tablespace  | Warning threshold.                          |
| --critical-tablespace | Critical threshold.                         |
| --filter-tablespace   | Filter tablespace by name. Can be a regex   |
| --units               | Default is '%', can be 'B'                  |
| --free                | Perfdata show free space                    |
| --notemp              | skip temporary or undo tablespaces.         |
| --add-container       | Add tablespaces of container databases.     |
| --skip                | Skip offline tablespaces.                   |

</TabItem>
<TabItem value="Tnsping" label="Tnsping">

| Option | Description |
|:-------|:------------|

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--hostname='10.0.0.1' \
	--help
```
