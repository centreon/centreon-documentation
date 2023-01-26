---
id: applications-databases-oracle
title: Oracle Database
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Oracle Database** apporte un modèle d'hôte :

* App-DB-Oracle-custom

Il apporte les modèles de service suivants :

| Alias                            | Modèle de service                              | Description                                                                                                 | Défaut | Découverte |
|:---------------------------------|:-----------------------------------------------|:------------------------------------------------------------------------------------------------------------|:-------|:-----------|
| ASM-Diskgroup-Usage-Generic-Name | App-DB-Oracle-ASM-Diskgroup-Usage-Generic-Name | Contrôle permettant de vérifier l'utilisation et le statut des groupes de disques ASM sur un serveur Oracle |        |            |
| ASM-Diskgroup-Usage-Global       | App-DB-Oracle-ASM-Diskgroup-Usage-Global       | Contrôle permettant de vérifier l'utilisation et le statut des groupes de disques ASM sur un serveur Oracle |        | X          |
| Connection-Number                | App-DB-Oracle-Connection-Number                | Contrôle permettant de vérifier le nombre de connexions au serveur Oracle                                   | X      |            |
| Connection-Time                  | App-DB-Oracle-Connection-Time                  | Contrôle permettant de vérifier la durée de connexion au serveur. Ce temps est donné en secondes            | X      |            |
| Corrupted-Blocks                 | App-DB-Oracle-Corrupted-Blocks                 | Contrôle permettant de vérifier le nombre de blocks corrompus du serveur.                                   | X      |            |
| Data-Files-Status                | App-DB-Oracle-Data-Files-Status                | Contrôle permettant de vérifier le statut des fichiers de données Oracle                                    |        |            |
| Datacache-Hitratio               | App-DB-Oracle-Datacache-Hitratio               | Contrôle permettant de vérifier le 'Data Buffer Cache Hit Ratio' du serveur. Aucunes alertes par défaut     | X      |            |
| Dictionary-Cache-Usage           | App-DB-Oracle-Dictionary-Cache-Usage           | Contrôle permettant de vérifier le 'dictionary cache'                                                       |        |            |
| Event-Waits-Usage                | App-DB-Oracle-Event-Waits-Usage                | Contrôle permettant de vérifier l'utilisation des 'event waits'.                                            |        |            |
| Fra-Usage                        | App-DB-Oracle-Fra-Usage                        | Contrôle permettant de vérifier le 'fast recovery area space'                                               |        |            |
| Invalid-Object                   | App-DB-Oracle-Invalid-Object                   | Contrôle permettant de vérifier l'utilisation des objets invalides.                                         |        |            |
| Library-Cache-Usage              | App-DB-Oracle-Library-Cache-Usage              | Contrôle permettant de vérifier le 'library cache'                                                          |        |            |
| Long-Queries                     | App-DB-Oracle-Long-Queries                     | Contrôle permettant de vérifier les longues requêtes.                                                       |        |            |
| Process-Usage                    | App-DB-Oracle-Process-Usage                    | Contrôle permettant de vérifier l'utilisation des 'process' Oracle                                          | X      |            |
| Redolog-Usage                    | App-DB-Oracle-Redolog-Usage                    | Contrôle permettant de vérifier le 'redo log'                                                               |        |            |
| Rman-Backup-Age                  | App-DB-Oracle-Rman-Backup-Age                  | Contrôle permettant de vérifier l'ancienneté des sauvegardes 'RMAN'                                         |        |            |
| Rman-Backup-Online-Age           | App-DB-Oracle-Rman-Backup-Online-Age           | Contrôle permettant de vérifier l'ancienneté des sauvegardes 'RMAN' en mode online                          |        |            |
| Rman-Backup-Problems             | App-DB-Oracle-Rman-Backup-Problems             | Contrôle permettant de vérifier les erreurs de sauvegarde 'RMAN' du serveur durant les 3 derniers jours     | X      |            |
| Rollback-Segment-Usage           | App-DB-Oracle-Rollback-Segment-Usage           | Contrôle permettant de vérifier l'utilisation des 'rollback segment'.                                       |        |            |
| Session-Usage                    | App-DB-Oracle-Session-Usage                    | Contrôle permettant de vérifier l'utilisation des sessions                                                  | X      |            |
| Sql                              | App-DB-Oracle-Sql-Statement-Generic            | Contrôle permettant d'exécuter une requête SQL personnalisée renvoyant une donnée numérique                 |        |            |
| Sql-String                       | App-DB-Oracle-Sql-Statement-String-Generic     | Contrôle permettant d'exécuter une requête SQL personnalisée renvoyant une chaine de caractères             |        |            |
| Tablespace-Usage-Global          | App-DB-Oracle-Tablespace-Usage-Global          | Contrôle permettant de vérifier l'utilisation des 'tablespaces' du serveur                                  | X      | X          |
| Tnsping                          | App-DB-Oracle-Tnsping                          | Contrôle permettant de vérifier la connexion à un 'listener' distant                                        | X      |            |

### Règles de découverte

| Nom de la règle                        | Description                                               |
|:---------------------------------------|:----------------------------------------------------------|
| App-DB-Oracle-ASM-Diskgroup-Usage-Name | Discover the disk partitions and monitor space occupation |
| App-DB-Oracle-Tablespaces-Usage-Name   |                                                           |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Connection-Time" label="Connection-Time">

| Metric name         | Description                            | Unit   |
| :------------------ | :------------------------------------- | :----- |
| connection_time     | Connection time to the database        | ms     |

</TabItem>
<TabItem value="Tnsping" label="Tnsping">

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--- |
| status      | Check Oracle listener status               |      |

</TabItem>
<TabItem value="Tablespace-Usage" label="Tablespace-Usage">

| Metric name           | Description                                     | Unit |
| :-------------------- | :-----------------------------------------------| :--- |
|  tbs_#instance_usage  | Tablespace usage per Instance                   |   B  |
|  tbs_#instance_free   | Tablespace free space left per instance         |   B  |

</TabItem>
<TabItem value="Session-Usage" label="Session-Usage">

| Metric name      | Description                                                       | Unit |
| :--------------- | :---------------------------------------------------------------- | :--- |
| session_used     | The percentage of Oracle session used                             |   %  |

</TabItem>
<TabItem value="Rman-Backup-Problems" label="Rman-Backup-Problems">

| Metric name		   | Description                                                         | Unit   |
| :----------------------- | :------------------------------------------------------------------ | :----  |
|  #backup_backup_problems | Number of problems per backup (last 3 days by default)              | Count  |

</TabItem>
<TabItem value="Process-Usage" label="Process-Usage">

| Metric name      | Description                                                       | Unit |
| :--------------- | :---------------------------------------------------------------- | :--- |
| process_used     | The percentage of Oracle process used                             |   %  |

</TabItem>
<TabItem value="Datacache-Hitratio" label="Datacache-Hitratio">

| Metric name               | Description                                          | Unit |
| :------------------------ | :--------------------------------------------------- | :--- |
| sga_data_buffer_hit_ratio | Check the 'Data Buffer Cache Hit Ratio' of the server|  %   |

</TabItem>
<TabItem value="Corrupted-Blocks" label="Corrupted-Blocks">

| Metric name         | Description                                          | Unit   |
| :------------------ | :----------------------------------------------------| :----- |
| corrupted_blocks    | The number of corrupted blocks in the database       | Count  |

</TabItem>
<TabItem value="Connection-Number" label="Connection-Number">

| Metric name       | Description                                     | Unit   |
| :---------------- | :-----------------------------------------------| :----- |
| connected_users   | The number of connection to the Oracle server   | Count  |


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
<TabItem value="Debian 11" label="Debian 11">

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
<TabItem value="Debian 11" label="Debian 11">

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
<TabItem value="Debian 11" label="Debian 11">

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
<TabItem value="Debian 11" label="Debian 11">

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
  - v_$event\_name
  - v_$waitstat
  
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
dnf install centreon-pack-applications-databases-oracle
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-databases-oracle
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-applications-databases-oracle
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Oracle Database**
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
dnf install centreon-plugin-Applications-Databases-Oracle
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Applications-Databases-Oracle
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-applications-databases-oracle
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre base de données **Oracle**.
* Appliquez le modèle d'hôte **App-DB-Oracle-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire   | Name                       | Description                                   |
| :------------ | :------------------------- | :-------------------------------------------- |
| X             | ORACLEPASSWORD             | Mot de passe de l'utilisateur Oracle          |
| X             | ORACLEPORT                 | Port de l'instance Oracle (par défaut: 1521)  |
| X             | ORACLESID                  | Nom de l'instance Oracle                      |
| X             | ORACLEUSERNAME             | Nom de l'utilsateur Oracle                    |
|               | ORACLESERVICENAME          | Nom du service Oracle                         |

## FAQ
### Comment tester un contrôle en ligne de commandes et que signifient les options principales ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--hostname='10.30.2.38' \
	--port='1521' \
	--sid='XE' \
	--username='SYSTEM' \
	--password='Centreon75' \
	--mode='tablespace-usage' \
	--warning-tablespace='90' \
	--critical-tablespace='98' \
	--verbose 
```

Exemple de sortie :

```bash
OK: All tablespaces are OK | 'tbs_sysaux_usage_sysaux'=552075272B;0:27596154624;0:29069940992;0;30595726360 'tbs_system_usage_system'=945684080B;0:27636154624;0:29065940982;0;30595527360 'tbs_temp_usage_temp'=0B;0:27536080897;0:29065863169;0;30595645450 'tbs_users_usage_users'=2818049B;0:27536154625;0:29065940993;0;30595727460
Tablespace 'sysaux' Total: 29.48 GB Used: 527.60 MB (1.90%) Free: 27.88 GB (98.20%)
Tablespace 'system' Total: 29.48 GB Used: 902.76 MB (3.09%) Free: 27.71 GB (96.91%)
Tablespace 'temp' Total: 29.48 GB Used: 0.00 B (0.00%) Free: 28.59 GB (100.00%)
Tablespace 'users' Total: 29.48 GB Used: 2.78 MB (0.01%) Free: 28.48 GB (99.99%)
```

La commande ci-dessus contrôle l'espace utilisé dans les tablespaces (``` --mode='tablespace-usage' ```)
d'une base de données oracle installée sur l'hôte 10.30.2.38 (``` --hostname='10.30.2.38' ```).
Il utilise les informations d'Oracle pour se connecter à la base de données (``` --username='SYSTEM' --password='Centreon75' --port='1521' --sid='XE' ```).

Le seuil d'alerte est dépassé si le pourcentage d'espace utilisé dans une tablespace dépasse 90% (``` --warning-tablespace='90' ```). Le seuil critique est dépassé si ce pourcentage dépasse 98% (``` --critical-tablespace='98' ```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande :

```bash
/usr/lib/centreon/plugins//centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--mode='tablespace-usage' \
	--help
```

Tous les modes fournis avec le plugin peuvent être consultés avec le paramètre ```--list-mode``` :

```bash
/usr/lib/centreon/plugins//centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon. 

#### ```UNKNOWN: Cannot connect: (no error string) |```

Ce message d'erreur signifie que le plugin Centreon n'a pas pu se connecter à la base de données Oracle.
Vérifier qu'une base de données Oracle est installée sur cet hôte. Vérifier également qu'aucun pare-feu ne bloque la connexion.

#### ```DBD::Oracle is not root directory |```

Ce message d'erreur signifie que le module **DBD::Oracle** est installé sous le répertoire **/root**.
Supprimer la variable d'environnement shell avec PERL et compiler **DBD::Oracle Perl Module**.
