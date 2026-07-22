---
id: backup-restore
title: Backing up and restoring MBI
description: Back up and restore your Centreon MBI central and reporting servers
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When you install Centreon MBI, crons are automatically installed to backup all your files, one on the central and one on the MBI server.
Each cron backs up the data that is stored on each server. According to the problem you encounter, you will be able to restore the impacted component (MBI module on the central server, or MBI server or ETL data...).

Each backup script uses a purge mechanism to delete old backup data.

## Backing up your central server

### Backed up items

- Generated reports (pdf, docx, xlsx or other formats).
- The complete configuration of your MBI module that is stored on your central server (MBI tables in 2 SQL dumps: **dump_centreon.sql**, **dump_centreon_storage.sql**).

### Backup frequency

- Daily
- Old backups are deleted after 8 days.

### How the backup script works on the central server

The backup script is executed on a daily basis using a cron job located on your central server, in **/etc/cron.d/centreon-bi-interface-crons**:

```
#
# Cron to backup Centreon BI Engine frontend module
#
PATH=/sbin:/bin:/usr/sbin:/usr/bin

# rewrite file with new cron line
CRONTAB_EXEC_USER=""

0 12 * * * root bash /usr/share/centreon-bi-backup/centreon-bi-backup-web.sh >> /var/log/centreon/centreon-bi-backup-web.log 2>&1

0 3 * * * root /usr/bin/php -q /usr/share/centreon/www/modules/centreon-bi-server/tools/purgeArchivesFiles.php >> /var/log/centreon/centreon-bi-archive-retention.log 2>&1
```

The generated files follow this naming format: **centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz**.

The backup script itself is stored here: **/usr/share/centreon-bi-backup/centreon-bi-backup-web.sh**. You can change some parameters if you like:

| Parameter| Default value | What to change in the script |
|---|---|---|
| Backup location | **/var/backup** | **BACKUP_DIR**, line 63 |
| Retention duration | 8 days | **RETENTION_AGE**, line 67 |

> We recommend exporting backups to another server to keep them secure.

Every day, the **/usr/share/centreon/www/modules/centreon-bi-server/tools/purgeArchivesFiles.php** script checks the retention parameters and deletes the reports that are older than that (36 months by default).

## Backing up your MBI server

> For the backup to run smoothly, it is important to have at least 5 GB of free space on the **Volume Group** hosting the MBI database. To check your free
> space, run the following command (enter the name of the **Volume Group**):
>
> ```vgdisplay vg_data | grep -i free```

### Backed up items

<!--- Database configuration file (**/etc/my.cnf/centreon.cnf**).-->
- All data aggregated by the ETL (the contents of your datadir folder, by default: **/var/lib/mysql**).
- Reports designs and report library, and the corresponding XML parameters.

### Backup frequency

-   Daily
-   Rotation: 8 days.

### How the backup script works on the MBI server

The backup script is executed on a daily basis using a cron job located on the MBI server, in **/etc/cron.d/centreon-bi-backup-reporting-server**:

```
#
# Cron to backup Centreon MBI Engine server
#
PATH=/sbin:/bin:/usr/sbin:/usr/bin

# rewrite file with new cron line
CRONTAB_EXEC_USER=""

30 12 * * 0 root bash /usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh --total >> /var/log/centreon-bi/centreon-bi-backup-reporting-server-db.log 2>&1
30 12 * * 1-6 root bash /usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh --totalincr >> /var/log/centreon-bi/centreon-bi-backup-reporting-server-db.log 2>&1
0 12 * * * root bash /usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh --centreonbifiles >> /var/log/centreon-bi/centreon-bi-backup-reporting-server-files.log 2>&1
```

Three types of backup are executed during the week:

- A daily backup of report designs and report library, as well as the configuration files for the report generation engine (cbis). The generated files follow this naming format: ```centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz```
- Every Sunday, a full backup of all data aggregated by the ETL. The generated files follow this naming format: ```mysql-centreon_storage-bi-aaaa-mm-jj.tar.gz```
- From Monday to Saturday, an incremental backup of the data aggregated by the ETL for the previous day (only the last partition of each partitioned table, plus all non-partitioned tables). The generated files follow this naming format: ```mysql-centreon_storage-bi-aaaa-mm-jj.tar.gz```

The backup script itself is stored here: **/usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh**. You can change some parameters if you like:

| Parameter| Default value | What to change in the script |
|---|---|---|
| Backup location | **/var/backup** | **BACKUP_DIR**, line 83 |
| Retention duration | 8 days | **RETENTION_AGE**, line 88 |

> During the MBI server backup, make sure that no ETL scripts or report jobs are running.
> We recommend exporting backups to another server to keep them secure.

## Restoring Centreon MBI

If you need to reinstall your MBI from scratch from a backup, follow these steps. If you only need to restore part of your MBI, just perform the corresponding step.

### Restore the Centreon MBI module on the central server

#### Reinstall the centreon-bi-server module in the same version as the one you used before

See [the corresponding installation procedure](installation.md#step-2-install-the-extension-on-centreon).

#### Extract your backup to your /tmp folder

Take the latest **centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz** backup and extract it to the **/tmp** directory (by default, the backup folder used is **/var/backup**, change this in the command below if needed):

```shell
tar xzf /var/backup/centreon-bi-front-reports-and-custom-conf-YYYY-MM-DD.tar.gz -C /tmp
```

#### Restore the generated reports

Then copy the backed up reports:

```
cp -rf /tmp/var/lib/centreon/centreon-bi-server/archives/* /var/lib/centreon/centreon-bi-server/archives
```

> If the directory is different than expected, you have to change the
> default settings. Just specify the right path.

Change the rights for the files:

```
chown -R centreonBI:centreonBI /var/lib/centreon/centreon-bi-server/archives
```

#### Restore custom report designs and libraries (optional)

This step applies only if you were using custom report designs. Copy the saved settings from your **/tmp** folder:

```
cp -rf /tmp/usr/share/centreon/www/modules/centreon-bi-server/configuration/generation/xsl/* /usr/share/centreon/www/modules/centreon-bi-server/configuration/generation/xsl
```

and 

```
cp -rf /tmp/var/lib/centreon/centreon-bi-server/reports/infos/* /var/lib/centreon/centreon-bi-server/reports/infos
```

Change the rights for the files:

```
chown -R apache:apache /usr/share/centreon/www/modules/centreon-bi-server/configuration/generation/xsl
```

#### Restore Centreon MBI module data

Import the SQL backup using the following command:

```
mysql -u root -p centreon_storage < /tmp/var/backup/dump_centreon_storage.sql
```

#### Delete the data from the extracted backup

Delete the extracted data from the backup:

```
cd /tmp
rm -Rf /tmp/usr
rm -Rf /tmp/var
```

### Restore the Centreon MBI server

The full restoration process is divided into several steps (you can skip the ones that don't apply to your case).

#### Reinstall the centreon-bi-reporting-server module in the same version as the one saved

If you are provisioning a new server, follow [the corresponding installation procedure](installation.md#step-3-install-the-reporting-server).

### Extract your backup to your /tmp folder

Take the latest **centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz** backup and extract it to **/tmp** directory (by default, the backup folder used is /var/backup, change this in the command below if needed):

```
tar xzf /var/backup/centreon-bin-reports-and-conf-YYYY-MM-DD.tar.gz -C /tmp
```

#### Restore the CBIS configuration

Then copy the **cbis** settings:

```
cp -rf /tmp/etc/centreon-bi/* /etc/centreon-bi
```

#### Restore the report settings

Then copy the report designs:

```
cp -rf /tmp/usr/share/centreon-bi/reports/* /usr/share/centreon-bi/reports
chown -R centreonBI:centreonBI /usr/share/centreon-bi/reports
cp -rf /tmp/usr/share/centreon-bi/Resources/* /usr/share/centreon-bi/Resources
chown -R centreonBI:centreonBI /usr/share/centreon-bi/Resources
```

### Restore database data

Stop the MariaDB/MySQL service:

```
systemctl stop mysql
```

Remove the **/var/lib/mysql** directory from the reporting server:

```
rm -rf /var/lib/mysql
```

> If you receive the error message : "rm: cannot delete ‘/var/lib/mysql’: Device or resource busy", you have to umount/mount the datadir partition.
```
umount /var/lib/mysql 
rm -rf /var/lib/mysql/*
mount /var/lib/mysql
```

Extract the latest complete backup (created by default on Sunday):

```
tar -xzf /var/backup/mysql-centreon_storage-bi-xxxx-xx-xx.tar.gz -C /var/lib/mysql
```

Extract all incremental backups created between the latest complete
backup and the current date **from the oldest to the most recent** using this command:

```
tar -xzf /var/backup/mysql-centreon_storage-bi-xxxx-xx-xx.tar.gz -C /var/lib/mysql
```

Change the rights on the **/var/lib/mysql** directory:

```
chown -R mysql:root /var/lib/mysql
```

Start the MariaDB/MySQL service:

```
systemctl start mysql
```

#### Restart the CBIS engine

Restart CBIS using the following command:

```
systemctl restart cbis
```
```
Stopping Centreon MBI scheduler : cbis
Waiting for cbis to exit .. done.
Starting Centreon MBI scheduler : cbis
Service started...
```

#### Delete the data from the extracted backup

Delete the data extracted from the backup:

```
cd /tmp
rm -Rf /tmp/usr
rm -Rf /tmp/var
```
