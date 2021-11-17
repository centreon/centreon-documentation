---
id: backup-restore
title: Backup & restore
---

## Centreon MBI backup

### Backup: Configurationt data on the Centreon server

#### Items to back up:

-   Custom report designs and their settings
-   Generated reports.

#### How the backup script works

The backup script is executed on a daily basis using a cron job located
in **/etc/cron.d/centreon-bi-backup-web**:

    #
    # Cron to backup Centreon MBI Engine frontend module
    #
    PATH=/sbin:/bin:/usr/sbin:/usr/bin

    # rewrite file with new cron line
    CRONTAB_EXEC_USER=""

    0 12 * * * root bash /usr/share/centreon-bi-backup/centreon-bi-backup-web.sh >> /var/log/centreon-bi/centreon-bi-backup-web.log 2>&1

By default, backups are saved to **/var/backup**.

To modify this folder, update the **BACKUP_DIR** value in the backup
script (line **63**) located here:
**/usr/share/centreon-bi-backup/centreon-bi-backup-web.sh**

On a Centreon server, only generated reports and report designs need to
be backed up. The backup format is
centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz

#### Backup frequency

-   Daily
-   Rotation: 8 days.

To modify this value, update **RETENTION_AGE** in the backup script
(line **67**) located here:
**/usr/share/centreon-bi-backup/centreon-bi-backup-web.sh**


> We advise to export backups to another resource in order to secure them.

### Backing up the reporting server


> It is important to have at least 5 GB of free space on the **Volum Group**
> hosting the **data** storage MySQL/MariaDB DBMS. To check free
> space run the following command by entering the name of the **Volum Group**
>
>       vgdisplay vg_data | grep -i free

#### Items to back up:

-   Configuration files
-   Aggregated data
-   Reports & resources.

#### How the backup script works on the central server

The backup script is executed on a daily basis with a cron job located
in **/etc/cron.d/centreon-bi-backup-reporting-server**:

    #
    # Cron to backup Centreon MBI Engine server
    #
    PATH=/sbin:/bin:/usr/sbin:/usr/bin

    # rewrite file with new cron line
    CRONTAB_EXEC_USER=""

    30 12 * * 0 root bash /usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh --total >> /var/log/centreon-bi/centreon-bi-backup-reporting-server-db.log 2>&1
    30 12 * * 1-6 root bash /usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh --totalincr >> /var/log/centreon-bi/centreon-bi-backup-reporting-server-db.log 2>&1
    0 12 * * * root bash /usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh --centreonbifiles >> /var/log/centreon-bi/centreon-bi-backup-reporting-server-files.log 2>&1

By default, backups are saved to **/var/backup**.

To modify this folder, update the **BACKUP_DIR** value in the backup
script (line **83**) located here:
**/usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh**

Three types of backup are executed during the week:

-   Daily backup of configuration files for the report generation
    engine. Format: centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz
-   Every Sunday, full ETL backup. Format:
    mysql-centreon_storage-bi-aaaa-mm-jj.tar.gz
-   From Monday to Satursday an incremental ETL backup (all tables and
    only the last partition of partitioned tables). Format:
    mysql-centreon_storage-bi-aaaa-mm-jj.tar.gz

> **Warning**
> 
> During backup of the reporting server, ensure that no ETL scripts are
> running. No job reports should be running either

#### Backup frequency

-   Daily
-   Rotation: 8 days.

To modify this value, update **RETENTION_AGE** in the backup script
(line **88**) located here:
**/usr/share/centreon-bi-backup/centreon-bi-backup-reporting-server.sh**

> We advise exporting backups to another server for even better security.

## Restore Centreon MBI

The restore process is divided into several steps:

-   Reinstalling the centreon-bi-server module in the same version as
    the one saved
-   Integrating generated reports
-   Integrating custom reports settings
-   Integrating Centreon MBI configuration data
-   Integrating MariaDB data
-   Deleting data extracted from the backup
-   Reinstalling the backup.

### Restore configuration data

#### Re-install centreon-bi-server module in the same version as the one saved

On the main Centreon server run the following command:

    yum install centreon-bi-server-x.y.z

#### Integrate generated reports

Take the latest
**centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz** backup
and extract it to the **/tmp** directory:

    cd /tmp
    tar xzf centreon-bi-front-reports-and-custom-conf-YYYY-MM-DD.tar.gz

Then copy the backed up reports:

    /bin/cp -rf /tmp/var/lib/centreon/centreon-bi-server/archives/* /var/lib/centreon/centreon-bi-server/archives


> If the directory is different than expected, the user has changed the
> default settings. Just specify the right path.

Change the rights for the files:

    chown -R centreonBI:centreonBI /var/lib/centreon/centreon-bi-server/archives

#### Integrate custom report settings

Take the latest backup in the format
**centreon-bi-front-reports-and-custom-conf-aaaa-mm-jj.tar.gz** and
extract it to the **/tmp** directory:

    cd /tmp
    tar xzf centreon-bi-front-reports-and-custom-conf-YYYY-MM-DD.tar.gz

Then copy the saved settings:

    /bin/cp -rf /tmp/usr/share/centreon/www/modules/centreon-bi-server/configuration/generation/xsl/* /usr/share/centreon/www/modules/centreon-bi-server/configuration/generation/xsl

and 

    /bin/cp -rf /tmp/var/lib/centreon/centreon-bi-server/reports/infos/* /var/lib/centreon/centreon-bi-server/reports/infos

Change the rights for the files:

    chown -R apache:apache /usr/share/centreon/www/modules/centreon-bi-server/configuration/generation/xsl


#### Integrate Centreon MBI configuration data

Import the SQL backup using the command:

    mysql -u root -p centreon_storage < /tmp/var/backup/dump_centreon_storage.sql

#### Delete the data from the extracted backup

Delete the extracted data from the backup:

    cd /tmp
    rm -Rf /tmp/usr
    rm -Rf /tmp/var

### Resotre Centreon MBI Reporting Server settings

The restore process is divided into several steps:

-   Reinstalling centreon-bi-reporting-server module in the same version
    as the one saved
-   Integrating the CBIS configuration
-   Integrating the custom reports designs
-   Restarting the CBIS engine
-   Deleting the data from the extracted backup
-   Reinstalling the backup.

#### Reinstal the centreon-bi-reporting-server module in the same version as the one saved

On the main Centreon server run the following command:

     yum install centreon-bi-engine-x.y.z

#### Integrating the CBIS configuration

Take the latest **centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz**
backup and extract it to **/tmp** directory:

    cd /tmp
    tar xzf centreon-bin-reports-and-conf-YYYY-MM-DD.tar.gz

Then copy the settings:

    /bin/cp -rf /tmp/etc/centreon-bi/* /etc/centreon-bi

#### Integrating the custom reports settings

Take the latest **centreon-bin-reports-and-conf-aaaa-mm-jj.tar.gz**
backup and extract it to **/tmp** directory:

    cd /tmp
    tar xzf centreon-bin-reports-and-conf-YYYY-MM-DD.tar.gz

Then copy the report designs:

    /bin/cp -rf /tmp/usr/share/centreon-bi/reports/* /usr/share/centreon-bi/reports
    chown -R centreonBI:centreonBI /usr/share/centreon-bi/reports
    /bin/cp -rf /tmp/usr/share/centreon-bi/Resources/* /usr/share/centreon-bi/Resources
    chown -R centreonBI:centreonBI /usr/share/centreon-bi/Resources

### Integrating MariaDB data

Stop the MariaDB service:

     systemctl stop mysql

Remove the directory */var/lib/mysql* from the reporting server:

     rm -rf /var/lib/mysql

Extract the latest complete backup(created by default on Sunday):

    tar -xzf /var/backup/mysql-centreon_storage-bi-xxxx-xx-xx.tar.gz -C /

Extract all incremental backups created between the latest complete
backup and the current date **from the oldest to the most recent** via
the command:

    tar -xzf /var/backup/mysql-centreon_storage-bi-xxxx-xx-xx.tar.gz -C /

Change the rights on the directory */var/lib/mysql*:

    chown -R mysql:root /var/lib/mysql

Start MariaDB service:

    systemctl start mysql

#### Restarting the CBIS engine

Restart CBIS using the command:

    systemctl restart cbis
    Stopping Centreon MBI scheduler : cbis
    Waiting for cbis to exit .. done.
    Starting Centreon MBI scheduler : cbis
    Service started...

#### Delete the data from the extracted backup

Delete data extracted from the backup:

    cd /tmp
    rm -Rf /tmp/usr
    rm -Rf /tmp/var
