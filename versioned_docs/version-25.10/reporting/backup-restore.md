---
id: backup-restore
title: Creating a backup and restoring MBI
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Centreon MBI backup 

Centreon MBI backup triggers crons to backup all your files:

- on your Central to backup MBI module, all your reports and database containing ETL configuration.
- on your MBI server to backup MBI datawarehouse, yours databases, cbis configuration files and birt files.

> Each backup script uses purge mechanism to delete old data

### Backing up your Central server

#### Items to back up

- Generated reports (pdf, docx, xlsx or other formats file).
- SQL dumps (dump_centreon.sql, dump_centreon_storage.sql) represents all your MBI module configuration on your Central.

#### Backup frequency

- Daily
- Purge Rotation: 8 days.

#### How the backup script works

The backup script is executed on a daily basis using a cron job located
in ```/etc/cron.d/centreon-bi-interface-crons``:

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

The backup format is
```centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz```

By default, backups are saved to ```/var/backup```. To modify this folder, update the ```BACKUP_DIR``` value in the backup
script (line **63**) located here:
```/usr/share/centreon-bi-backup/centreon-bi-backup-web.sh```

By default, retention is set to 8 days, to modify this value, update ```RETENTION_AGE``` in the backup script
(line **67**) located here:
```/usr/share/centreon-bi-backup/centreon-bi-backup-web.sh```

> **Notes**
> 
> - We advise you to export backups to another resource in order to secure them.
>
> - The script "/usr/share/centreon/www/modules/centreon-bi-server/tools/purgeArchivesFiles.php" verify retention configuration and delete old reports (36 months by default)


### Backing up your MBI server

> It is important to have at least 5 GB of free space on the **Volume Group**
> hosting the data storage MariaDB/MySQL DBMS. To check your free
> space, run the following command by entering the name of the **Volume Group**
>
>       ```vgdisplay vg_data | grep -i free```


#### Items to back up

- Configuration files (mariadb configuration).
- Aggregated data (all your datadir folder, ex: /var/lib/mysql).
- Reports & resources rptidesign/rptlibrary and XML parameters.

#### Backup frequency

-   Daily
-   Rotation: 8 days.

#### How the backup script works on the central server

The backup script is executed on a daily basis with a cron job located
in ```/etc/cron.d/centreon-bi-backup-reporting-server```:

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

-   Daily backup of configuration files for the report generation engine. Format: ```centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz```
-   Every Sunday, full ETL backup. Format: ```mysql-centreon_storage-bi-aaaa-mm-jj.tar.gz```
-   From Monday to Saturday an incremental ETL backup (all tables and only the last partition of partitioned tables). Format: ```mysql-centreon_storage-bi-aaaa-mm-jj.tar.gz```

By default, backups are saved to ```/var/backup```. To modify this folder, update the ```BACKUP_DIR``` value in the backup script (line **83**) located here:
```/usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh```



> **Warning**
> 
> During backup of the reporting server, ensure that no ETL scripts are
> running. No job reports should be running either



To modify this value, update **RETENTION_AGE** in the backup script
(line **88**) located here:
```/usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh```

> We advise exporting backups to another server for even better security.

## Restore Centreon MBI

The restore process is divided into several steps:

- Reinstalling the centreon-bi-server module in the same version as the one saved
- Integrating generated reports
- Integrating custom report settings
- Integrating Centreon MBI configuration data
- Integrating MariaDB/MySQL data
- Deleting data extracted from the backup
- Reinstalling the backup.

### Restore Centreon MBI module 

#### Re-install centreon-bi-server module in the same version as the one saved

On the main Centreon server, run the following commands:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install centreon-bi-server-x.y.z
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install centreon-bi-server-x.y.z
```

</TabItem>
<TabItem value="Debian 12" label="Debian 12">

Install **gpg**:

```shell
apt install gpg
```

Import the repository key:

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
```

Then install Centreon MBI:

```shell
apt update && apt install centreon-bi-server-x.y.z
```

</TabItem>
</Tabs>

#### Integrate generated reports

Take the latest
```centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz``` backup
and extract it to the ```/tmp``` directory:

> **Notes**: By default, the backup folder used is /var/backup, change the folder in the command below if needed

```
tar xzf /var/backup/centreon-bi-front-reports-and-custom-conf-YYYY-MM-DD.tar.gz -C /tmp
```

Then copy the backed up reports:

```
cp -rf /tmp/var/lib/centreon/centreon-bi-server/archives/* /var/lib/centreon/centreon-bi-server/archives
```

> If the directory is different than expected, you have to changed the
> default settings. Just specify the right path.

Change the rights for the files:

```
chown -R centreonBI:centreonBI /var/lib/centreon/centreon-bi-server/archives
```

#### Integrate custom report settings

Copy the saved settings:

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

#### Integrate Centreon MBI configuration data

Import the SQL backup using the command:

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

### Restore Centreon MBI Reporting Server 

The restore process is divided into several steps:

- Reinstalling centreon-bi-reporting-server module in the same version
    as the one saved
- Integrating the CBIS configuration
- Integrating the custom report designs
- Restarting the CBIS engine
- Deleting the data from the extracted backup
- Reinstalling the backup.

> If you provision new server, follow the server configuration prerequisites and install Centreon Business repository

#### Reinstall the centreon-bi-reporting-server module in the same version as the one saved

On the MBI server run the following command:

```
yum install centreon-bi-server-x.y.z
```

#### Integrating the CBIS configuration

Take the latest **centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz**
backup and extract it to **/tmp** directory:

> **Notes**: By default, the backup folder used is /var/backup, change the folder in the command below if needed

```
tar xzf /var/backup/centreon-bin-reports-and-conf-YYYY-MM-DD.tar.gz -C /tmp
```

Then copy the cbis settings:

```
cp -rf /tmp/etc/centreon-bi/* /etc/centreon-bi
```

#### Integrating the custom reports settings

Then copy the report designs:

```
cp -rf /tmp/usr/share/centreon-bi/reports/* /usr/share/centreon-bi/reports
chown -R centreonBI:centreonBI /usr/share/centreon-bi/reports
cp -rf /tmp/usr/share/centreon-bi/Resources/* /usr/share/centreon-bi/Resources
chown -R centreonBI:centreonBI /usr/share/centreon-bi/Resources
```

### Integrating MariaDB/MySQL data

Stop the MariaDB/MySQL service:

```
systemctl stop mysql
```

Remove the directory */var/lib/mysql* from the reporting server:

```
rm -rf /var/lib/mysql
```

> **Note**: If you receive the error message : "rm: impossible de supprimer '/var/lib/mysql': Périphérique ou ressource occupé", you have to umount/mount the datadir partition.
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
backup and the current date **from the oldest to the most recent** via
the command:

```
tar -xzf /var/backup/mysql-centreon_storage-bi-xxxx-xx-xx.tar.gz -C /var/lib/mysql
```

Change the rights on the directory */var/lib/mysql*:

```
chown -R mysql:root /var/lib/mysql
```

Start the MariaDB/MySQL service:

```
systemctl start mysql
```

#### Restarting the CBIS engine

Restart CBIS using the command:

```
systemctl restart cbis
Stopping Centreon MBI scheduler : cbis
Waiting for cbis to exit .. done.
Starting Centreon MBI scheduler : cbis
Service started...
```

#### Delete the data from the extracted backup

Delete data extracted from the backup:

```
cd /tmp
rm -Rf /tmp/usr
rm -Rf /tmp/var
```
