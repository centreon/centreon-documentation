---
id: map-web-backup-restore
title: Backing up and restoring your MAP server
description: "Back up and restore your Centreon MAP server configuration and database"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Backing up your MAP server

### Saved items

The saved items are:

- Saving configuration files (**/etc/centreon-map**)
- Saving database **centreon\_map**

### How it works?

The backup script is executed on a daily basis (2AM) with a cron job located in
**/etc/cron.d/centreon-map-engine-backup**:

```text
#
# Cron to backup Centreon MAP server
#
PATH=/sbin:/bin:/usr/sbin:/usr/bin

# rewrite file with new cron line
CRONTAB_EXEC_USER=""

0 2 * * * root bash /usr/share/centreon-map-engine/bin/centreon-map-engine-backup.sh >> /var/log/centreon-map/backup.log 2>&1
```

The backup **centreon-map-engine-yyyy-mm-dd.tar.gz** is stored in
**BACKUP\_DIR**, which is defined in configuration file.

### Backup parameters

Backup parameters are stored in **/etc/centreon-map/backup.conf**

- ENABLE: enable/disable backup mechanism (default value: 1)
- BACKUP\_DIR: where the backup is stored (default value: /var/cache/centreon-map/backup)
- RETENTION\_AGE: backup retention in days (default value: 8)

> **We advise to export backups to another resource in order to secure them.**

## Restoring data from Centreon MAP server

Restore process is divided in several steps:

- Extracting backup
- Restoring configuration files
- Restoring database

> **We assume that you have followed the Centreon MAP server installation
> procedure to get a fresh install.**

### Extract backup

Get the last **centreon-map-engine-yyyy-mm-dd.tar.gz** backup and extract it
into **/tmp** directory:

```shell
cd /tmp
tar -xf centreon-map-engine-yyyy-mm-dd.tar.gz
```
(where **yyyy-mm-dd** is the backup date) 

The output should look like this:

```shell
ls -lrt /tmp/
-rw-r--r--. 1 root             root                37353 Jul  8 13:44 centreon-map-engine.dump
```

### Restore configuration files

You extracted the **centreon-map-engine-yyyy-mm-dd.tar.gz** file at the previous step. Now you can check the presence of the **.dump** file and the **etc** directory:

```shell
ls -lrt /var/cache/centreon-map/backup
```

The output should look like this:

```shell
-rw-r--r--. 1 root root 18667 Jul  8 18:00 centreon-map-engine-2025-07-08.tar.gz
-rw-r--r--. 1 root root 18667 Jul  9 23:58 centreon-map-engine-2025-07-09.tar.gz
drwxr-xr-x. 4 root root  4096 Jul 10 12:42 etc
-rw-r--r--. 1 root root 39504 Jul 10 12:42 centreon-map-engine.dump
-rw-r--r--. 1 root root 18667 Jul 10 12:44 centreon-map-engine-2025-07-10.tar.gz
```

Enter the following command:

```shell
cp -R /var/cache/centreon-map/backup/etc/* /etc/centreon-map/
```
If the files already exist, the output should look like this:

```shell
cp: overwrite '/etc/centreon-map/backup.conf'? y
cp: overwrite '/etc/centreon-map/centreon-database.properties'? y
cp: overwrite '/etc/centreon-map/centreon-map.conf'? y
cp: overwrite '/etc/centreon-map/configure.sh'? y
cp: overwrite '/etc/centreon-map/diagnostic.sh'? y
cp: overwrite '/etc/centreon-map/extractor.php'? y
cp: overwrite '/etc/centreon-map/map-config.properties'? y
cp: overwrite '/etc/centreon-map/map-database.properties'? y
cp: overwrite '/etc/centreon-map/map-log.xml'? y
cp: overwrite '/etc/centreon-map/templates/centreon-database.properties'? y
cp: overwrite '/etc/centreon-map/templates/map-config.properties'? y
cp: overwrite '/etc/centreon-map/templates/map-database.properties'? y
cp: overwrite '/etc/centreon-map/templates/map-log.xml'? y
cp: overwrite '/etc/centreon-map/utils/findSpecialCharacters.sh'? y
cp: overwrite '/etc/centreon-map/vars.sh'? y
```

The backup of configuration files went well!

Now you can check the files with the date and copy time. Enter the following command:

```shell
ls -lrt /etc/centreon-map/
```
The output should look like this:

```shell
-rw-r--r--.  1 root         root            165 Jul 10 12:53 backup.conf
-rwxr-xr-x.  1 centreon-map centreon-map   1265 Jul 10 12:53 centreon-database.properties
-rw-r--r--.  1 centreon-map centreon-map    124 Jul 10 12:53 centreon-map.conf
-rwxr-xr-x.  1 centreon-map centreon-map  30382 Jul 10 12:53 configure.sh
-rwxr-xr-x.  1 centreon-map centreon-map   9470 Jul 10 12:53 diagnostic.sh
-rwxr-xr-x.  1 centreon-map centreon-map    473 Jul 10 12:53 extractor.php
-rwxr-xr-x.  1 centreon-map centreon-map   1979 Jul 10 12:53 map-config.properties
-rwxr-xr-x.  1 centreon-map centreon-map    645 Jul 10 12:53 map-database.properties
-rwxr-xr-x.  1 centreon-map centreon-map   1472 Jul 10 12:53 map-log.xml
-rwxr-xr-x.  1 centreon-map centreon-map   1062 Jul 10 12:53 vars.sh
```

### Restore database

To restore **centreon\_map** database, run the following command:

```shell
systemctl stop centreon-map-engine
mysql -h <db_host> -u <db_user> -p<db_password> <centreon_map> < centreon-map-engine.dump
systemctl start centreon-map-engine
```
