---
id: applications-databases-oracle
title: Oracle Database
---
##  Vue d'ensemble

Oracle est un système de gestion de base de données fourni par Oracle Corporation.

Le Plugin Centreon associé *Oracle Database* permet d'interroger l'API Rest afin de récupérer le status de diverses métrique sur le serveur Oracle.

## Contenu du Plugin-Pack

###  Objets supervisés

* Serveur Oracle

### Métriques Collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Connection-Time-->

| Metric name         | Description                            | Unit   |
| :------------------ | :------------------------------------- | :----- |
| connection_time     | Connection time to the database        | ms     |

<!--Tnsping-->

| Metric name | Description                                | Unit |
| :---------- | :----------------------------------------- | :--- |
| status      | Check Oracle listener status               |      |

<!--Tablespace-Usage-->

| Metric name           | Description                                     | Unit |
| :-------------------- | :-----------------------------------------------| :--- |
|  tbs_#instance_usage  | Tablespace usage per Instance                   |   B  |
|  tbs_#instance_free   | Tablespace free space left per instance         |   B  |

<!--Session-Usage-->

| Metric name      | Description                                                       | Unit |
| :--------------- | :---------------------------------------------------------------- | :--- |
| session_used     | The percentage of Oracle session used                             |   %  |

<!--Rman-Backup-Problems-->

| Metric name			   | Description                                                         | Unit   |
| :----------------------- | :------------------------------------------------------------------ | :----  |
|  #backup_backup_problems | Number of problems per backup (last 3 days by default)              | Count  |

<!--Process-Usage-->

| Metric name      | Description                                                       | Unit |
| :--------------- | :---------------------------------------------------------------- | :--- |
| process_used     | The percentage of Oracle process used                             |   %  |

<!--Datacache-Hitratio-->

| Metric name               | Description                                          | Unit |
| :------------------------ | :--------------------------------------------------- | :--- |
| sga_data_buffer_hit_ratio | Check the 'Data Buffer Cache Hit Ratio' of the server|  %    |

<!--Corrupted-Blocks-->

| Metric name         | Description                                          | Unit   |
| :------------------ | :----------------------------------------------------| :----- |
| corrupted_blocks    | The number of corrupted blocks in the database       | Count  |

<!--Connection-Number-->

| Metric name       | Description                                     | Unit   |
| :---------------- | :-----------------------------------------------| :----- |
| connected_users   | The number of connection to the Oracle server   | Count  |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### RPM

Pour utiliser le Plugin-Pack Oracle, il est nécessaire d'installer l'outil de ligne de commande `wget` et la collection de compilateurs GNU (`gcc`).

```bash
yum install -y gcc wget
```

###  Oracle instant client

Se connecter sur [Instant Client
Downloads](http://www.oracle.com/technetwork/database/features/instant-client/index-097480.html),
Choisir le groupe de paquets correspondant au système d'exploitation du Collecteur, et télécharger les paquets suivants :

  - oracle-instantclient-basic
  - oracle-instantclient-sqlplus
  - oracle-instantclientdevel

Installer les paquets avec la commande suivante :

```bash
rpm -ivh oracle-*.rpm
```

### Bibliothèque Perl pour Oracle

> Remplacer 21.1 par la version d'instantclient installée

En tant que root, exécuter:

```bash
cd /usr/local/src 
wget http://www.cpan.org/modules/by-module/DBD/DBD-Oracle-1.80.tar.gz 
tar xzf DBD-Oracle-1.80.tar.gz 
cd DBD-Oracle-1.80 
export ORACLE_HOME=/usr/lib/oracle/21.1/client64
export LD_LIBRARY_PATH=/usr/lib/oracle/21.1/client64/lib 
export PATH=$ORACLE_HOME:$PATH
perl Makefile.PL -m /usr/share/oracle/21.1/client64/demo/demo.mk
```

Le message suivant devrait apparaître:

```text
LD_RUN_PATH=/usr/lib/oracle/21.1/client64/lib*
Using DBD::Oracle 1.80. 
Using DBD::Oracle 1.80. 
Using DBI 1.52 (for perl 5.008008 on x86_64-linux-thread-multi) installed in /usr/lib64/perl5/vendor_perl/5.8.8/x86\_64-linux-thread-multi/auto/DBI/
Writing Makefile for DBD::Oracle
```

Compiler la bibliothèque:

```bash
make
```

Puis l'installer:

```bash
make install
```

Puis créer le fichier: /etc/ld.so.conf.d/oracle.conf. Éditer et ajouter un lien vers la bibliothèque Perl d’Oracle :

```bash
cat > /etc/ld.so.conf.d/oracle.conf <<EOF
/usr/lib/oracle/21.1/client64/lib/
EOF
```

Parcourir le fichier et exécuter la commande défini ci-dessous:

```bash
cd /usr/lib/oracle/21.1/client64/lib/
/sbin/ldconfig
```

### Compte d'utilisateur

La façon la plus sûre de récupérer des informations du serveur Oracle est de créer un utilisateur dédié à Centreon.

Ce compte utilisateur doit avoir la permission de lecture sur les tables suivants :

  - dba\_free\_space
  - dba\_data\_files
  - dba\_temp\_files
  - dba\_segments
  - dba\_jobs
  - v$sysstat
  - v$sgastat
  - v$parameter
  - v$process
  - v$session
  - v$filestat
  - v$log
  - v$instance
  
## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant une base de données Oracle :

```bash
yum install centreon-plugin-Applications-Databases-Oracle
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Oracle Database* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

## Configuration

1. Installer le Plugin sur tous les collecteurs Centreon supervisant une base de données Oracle :

```bash
yum install centreon-plugin-Applications-Databases-Oracle
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-databases-oracle
```

3.  Sur l'interface Web de Centreon, installer le Plugin-Pack *Oracle Database* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Toujours dans l'interface Web Centreon, aller à la page  *Configuration \> Hôstes* et cliquer sur *Ajouter*. Remplir alors les champs du formulaires. 
Dans le champs *Modèles* cliquer sur *+ Ajouter une nouvelle entrée* puis sélectionner *App-DB-Oracle-custom*.

Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory   | Name                       | Description                                            |
| :---------- | :------------------------- | :----------------------------------------------------- |
| X           | ORACLEPASSWORD             | The oracle user's password 							|
| X           | ORACLEPORT                 | By default: 1521						                |
| X           | ORACLESID                  | The name of the oracle instance                        |
| X           | ORACLEUSERNAME             | The oracle user name                                   |
|             | ORACLESERVICENAME          | The oracle service name                                |

## FAQ
### Comment tester un contrôle en ligne de commandes et que signifient les options principales ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commandes depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:

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

Exemple de sortie:

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

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins//centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--mode='tablespace-usage' \
	--help
```

Tous les modes fournis avec le plugin peuvent être consultées avec le paramètre ```--list-mode```:

```bash
/usr/lib/centreon/plugins//centreon_oracle.pl \
	--plugin=database::oracle::plugin \
	--list-mode
```

### J'obtiens le message d'erreur suivant:   

#### ```UNKNOWN: Cannot connect: (no error string) |```

Ce message d'erreur signifie que le plugin Centreon n'a pas pu se connecter à la base de données Oracle.
Vérifier qu'une base de données Oracle est installée sur cet hôte. Vérifiez également qu'aucun pare-feu ne bloque la connexion.

#### ```DBD::Oracle is not root directory |````

Ce message d'erreur signifie que le module DBD::Oracle est installé sous le répertoire /root.
Supprimer la variable d'environnement shell avec PERL et compiler DBD::Oracle Perl Module.


