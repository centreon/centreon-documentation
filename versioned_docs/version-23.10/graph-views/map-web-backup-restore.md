---
id: map-web-backup-restore
title: Backing up and restoring your MAP server
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
**/etc/cron.d/centreon-map-server-backup**:

```text
#
# Cron to backup Centreon MAP server
#
PATH=/sbin:/bin:/usr/sbin:/usr/bin

# rewrite file with new cron line
CRONTAB_EXEC_USER=""

0 2 * * * root bash /usr/share/centreon-map-server/bin/centreon-map-server-backup.sh >> /var/log/centreon-studio/backup.log 2>&1
```

The backup **centreon-map-server-yyyy-mm-dd.tar.gz** is stored in
**BACKUP\_DIR**, which is defined in configuration file.

### Backup parameters

Backup parameters are stored in **/etc/centreon-map/backup.conf**

- ENABLE: enable/disable backup mechanism (default value: 0)
- BACKUP\_DIR: where the backup is stored (default value: /var/backup)
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

Get the last **centreon-map-server-yyyy-mm-dd.tar.gz** backup and extract it
into **/tmp** directory:

```shell
cd /tmp
tar xzf centreon-map-server-yyyy-mm-dd.tar.gz
```

### Restore configuration files

To restore configuration files, run the following command:

```shell
cp -R etc/centreon-map/* /etc/centreon-map/
```

### Restore database

To restore **centreon\_map** database, run the following command:

```shell
systemctl stop centreon-map-engine
mysql -h <db_host> -u <db_user> -p<db_password> <centreon_map> < centreon-map-server.dump
systemctl start centreon-map-engine
```
