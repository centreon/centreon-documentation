---
id: upgrade-double-run-from-21.04
title: Upgrade of Centreon 22.04 from Centreon 21.04 in double-run
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


This document describes all the steps to migrate an existing Centreon platform in 21.04 to a new platform (Server, OS, etc.) in 22.04 using the double-run method.

The architecture here migrated consists of a Central server with remote database and a Poller.
The operation is the same for the database on the Central. The operations of the databases will be between the Centrals

## Prerequisites

### OS version

All servers of the new platform must be freshly installed with the packages or with the help of the Centreon ISO.
An access to Centreon repos is necessary especially for the different modules.

### Accounts and rights

Root access on all machines is required as well as access to the old and new database.

### Disk space

Take into consideration the disk space needed for the temporary storage of dumps, as well as the increase in the size of the database linked to the eventual change of engine (MyIsam to InnoDB, about 1.5 times)

### Conventions

We will use the following naming rules:

- `@OLD-CENTRAL@` means that the command is executed on the old central server
- `@NEW-CENTRAL@` means that the command is executed on the new central server

- `@OLD-DB@` means that the command is executed on the old database server
- `@NEW-DB@` means that the command is executed on the new database server

- `@NEW-DB-MariaDB@` means that the command is executed on the database (once connected)
- `@OLD_DATABASE_IP@` means it is the IP address of the old database

- `@OLD-POLLER@` means that the command is executed on the old poller
- `@NEW-POLLER@` means that the command is executed on the new poller

## Installation of the new platform

Carry out the complete installation of the new Centreon platform (central + database in our case) on the new servers by following the [following procedure](../installation/introduction.md).

## Backup before migration

Backup the fresh databases.

- **@NEW-DB@** :

```bash
mysqldump -u root -p <rootPassword> centreon > db_centreon_fresh_install_`date +%Y%m%d-%H%M`.sql
mysqldump -u root -p <rootPassword> centreon_storage > db_centreon_storage_fresh_install_`date +%Y%m%d-%H%M`.sql
```

## Data recovery

Recover the data from the old platform to the new one, ignoring the large data_bin and logs tables that we will recover in another step to minimize the service interruption.

- **@NEW-DB@** :

```bash
ssh -C root@'@OLD_DATABASE_IP@' "mysqldump -u root -p <rootPassword> centreon" > old_db_centreon_`date +%Y%m%d%H%M`.sql
ssh -C root@'@OLD_DATABASE_IP@' "mysqldump -u root -p <rootPassword> centreon_storage --ignore-table=centreon_storage.data_bin --ignore-table=centreon_storage.logs" > old_db_centreon_storage_`date +%Y%m%d%H%M`.sql
```

## Import data

Stop all services on the new Central server.

- **@NEW-CENTRAL@** :

```bash
systemctl stop centengine cbd gorgoned crond
```

Connect to the new database @NEW-DB-MariaDB@, delete the existing databases and recreate them:

- **@NEW-DB-MariaDB@** :

```sql
DROP DATABASE centreon;
DROP DATABASE centreon_storage;
CREATE DATABASE centreon;
CREATE DATABASE centreon_storage
```

Inject the data from the previous dump:

- **@NEW-DB@** :

```sql
mysql -u root -p <rootPassword> centreon < old_db_centreon_<AAMMDDHHMM>.sql
mysql -u root -p <rootPassword> centreon_storage < old_db_centreon_storage_<AAMMDDHHMM>.sql
```

Copy the RRD files from the old central server to the new one. This action can be parallelized with the insertion of the previous dump. Depending on the number of metrics, count up to 1.5 hours of synchronization.

- **@OLD-CENTRAL@** :

```bash
rsync -av /var/lib/centreon/metrics/ root@'@NEW_CENTRAL_IP@':/var/lib/centreon/metrics/
rsync -av /var/lib/centreon/status/ root@'@NEW_CENTRAL_IP@':/var/lib/centreon/status/
```

Create the tables excluded from the **centreon_storage** database dump using the diagrams below:

- **@NEW-DB-MariaDB@** :

```sql
CREATE TABLE `data_bin` (
  `id_metric` int(11) DEFAULT NULL,
  `ctime` int(11) DEFAULT NULL,
  `value` float DEFAULT NULL,
  `status` enum('0','1','2','3','4') DEFAULT NULL,
  KEY `index_metric` (`id_metric`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 ;
```

Creation of the logs table:

- **@NEW-DB-MariaDB@** :

```sql
CREATE TABLE `logs` (
  `log_id` int(11) NOT NULL AUTO_INCREMENT,
  `ctime` int(11) DEFAULT NULL,
  `host_id` int(11) DEFAULT NULL,
  `host_name` varchar(255) DEFAULT NULL,
  `instance_name` varchar(255) NOT NULL,
  `issue_id` int(11) DEFAULT NULL,
  `msg_type` tinyint(4) DEFAULT NULL,
  `notification_cmd` varchar(255) DEFAULT NULL,
  `notification_contact` varchar(255) DEFAULT NULL,
  `output` text,
  `retry` int(11) DEFAULT NULL,
  `service_description` varchar(255) DEFAULT NULL,
  `service_id` int(11) DEFAULT NULL,
  `status` tinyint(4) DEFAULT NULL,
  `type` smallint(6) DEFAULT NULL,
  PRIMARY KEY (`log_id`),
  KEY `host_name` (`host_name`(64)),
  KEY `service_description` (`service_description`(64)),
  KEY `status` (`status`),
  KEY `instance_name` (`instance_name`),
  KEY `ctime` (`ctime`),
  KEY `rq1` (`host_id`,`service_id`,`msg_type`,`status`,`ctime`),
  KEY `rq2` (`host_id`,`msg_type`,`status`,`ctime`),
  KEY `host_id` (`host_id`,`service_id`,`msg_type`,`ctime`,`status`),
  KEY `host_id_2` (`host_id`,`msg_type`,`ctime`,`status`)
) ENGINE=InnoDB AUTO_INCREMENT=63993 DEFAULT CHARSET=utf8 ;
```

## Web update and partitioning

Update the web interface by moving the installation folder to the web directory:
> **INFO:** It is necessary to delete the temporary files of the previous installation not to create problem of the execution of the scripts of update.

- **@NEW-CENTRAL@** :

```bash
rm -f /var/lib/centreon/installs/install-22.04.*/tmp/Update-*
mv /var/lib/centreon/installs/install-22.04.* /usr/share/centreon/www/install/
```

Set up the partitioning of the data_bin and logs tables.
> **WARNING :** Be careful, check in the interface that the retention configured for the partitions (Administration > Parameters > Options) is appropriate:

- **@NEW-CENTRAL@** :

```bash
/opt/rh/rh-php72/root/usr/bin/php /usr/share/centreon/bin/centreon-partitioning.php -m data_bin
/opt/rh/rh-php72/root/usr/bin/php /usr/share/centreon/bin/centreon-partitioning.php -m logs
```

## Recovery of acknowledgments

We use the retention.dat file of the old platform to resume the acknowledgments:

- **@OLD-CENTRAL@** :

```bash
scp /var/log/centreon-engine/retention.dat root@'@NEW_CENTRAL_IP@':/var/log/centreon-engine/
```

- **@OLD-POLLER@** :

```bash
scp /var/log/centreon-engine/retention.dat root@'@NEW_POLLER_IP@':/var/log/centreon-engine/
```

## Launch the new infrastructure

Restart all central processes

- **@NEW-CENTRAL@** :

```bash
systemctl start crond cbd gorgoned centengine
```

From the web interface, generate and move the configuration files of the central server and Pollers then restart the engines (central + pollers).

## Recovery of historical data

Instead of using the traditional method by mysqldump (dump of the old table, integration in a temporary table on the new platform and then dumping the temporary table in the production table), we use here an export / import of the raw data via file. This method is much faster.

### Prerequisites

Set the `max_allowed_packet` to **128M** : `max_allowed_packet = 128M` in /etc/my.cnf.d/centreon.cnf + restart of MariaDB

Sufficient disk space to host the data files.

It is recommended to start with a small export (e.g. 7 days) to check the size of the file and thus calculate the disk space needed for the next exports. This also allows to check the impact on the production during the import (possible slowdown).

### First data retrieval

#### Extraction 1

Example : the new platform was put into production on 10/02/2019 at 15h10. The corresponding timestamp recorded previously is `1549811400`. We want to retrieve 7 days of data, that is to say a lower bound on 03/02/2019. We take this date at midnight, it simplifies the calculations for the continuation. The corresponding timestamp is therefore `1549152000`, which gives us the following request:

- **@OLD-DB-MariaDB@** :

```sql
SELECT * INTO OUTFILE '/var/lib/mysql/data_bin_1549152000-1549811400.txt'   FIELDS TERMINATED BY ';' OPTIONALLY ENCLOSED BY '"'   LINES TERMINATED BY '\n'   FROM centreon_storage.data_bin WHERE ctime BETWEEN '1549152000' AND '1549811400';
```

Transfer the file data_bin_1549152000-1549811400.txt to the new database server:

- **@OLD-CENTRAL@** :

```bash
scp /var/lib/mysql/data_bin_1549152000-1549811400.txt root@'@NEW_CENTRAL_IP@':/var/lib/mysql/
```

Then proceed with the import:

#### Insert 1

- **@NEW-DB-MariaDB@** :

```sql
LOAD DATA INFILE '/var/lib/mysql/data_bin_1549152000-1549811400.txt' INTO TABLE centreon_storage.data_bin  FIELDS TERMINATED BY ';' OPTIONALLY ENCLOSED BY '"'  LINES TERMINATED BY '\n';
```

If the export/import went well, proceed with the following data recovery.

> For example, we now want to recover a month. We use the previous lower bound (03/02/2019 midnight, i.e. 1549152000) as a pivot. Remove 1 second from this timestamp because the BETWEEN operator is inclusive.

Our bounds are thus :

`1549152000 - 1 = 1549151999` et `1549152000 - (86400*NBJOURAEXPORTER) = 1549152000 - (86400*30) = 1546560000` (i.e. 04/01/2019 at midnight).

This bound can be taken arbitrarily. We could have taken here the 01/01/2019 for more simplicity for the continuation (to recover then complete months)

#### Extraction 2

- **@OLD-DB-MariaDB@** :

```sql
SELECT * INTO OUTFILE '/var/lib/mysql/data_bin_1546560000-1549151999.txt'   FIELDS TERMINATED BY ';' OPTIONALLY ENCLOSED BY '"'   LINES TERMINATED BY '\n'   FROM centreon_storage.data_bin WHERE ctime BETWEEN '1546560000' AND '1549151999';
```

Transfer the file data_bin_1546560000-1549151999.txt to the new database server and proceed with the import:

#### Insert 2

- **@NEW-DB-MariaDB@** :

```sql
LOAD DATA INFILE '/var/lib/mysql/data_bin_1546560000-1549151999.txt' INTO TABLE centreon_storage.data_bin  FIELDS TERMINATED BY ';' OPTIONALLY ENCLOSED BY '"'  LINES TERMINATED BY '\n';
```

If all went well, continue the export/import of the remaining months and do the same for the logs table.
