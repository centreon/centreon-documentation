---
id: migrate
title: Migrate the extension
---

This chapter explains how to move your reporting server to another
one (e.g. if you want to switch to another supported OS).

The migration of the interface extension is done at the same time as the migration of the central server.

## Install the new reporting server

Install your new reporting server based on the Centreon Business
repository using the [standard documentation](installation.md).

## Synchronizing files & data

Stop mysqld on **both** Reporting servers

    service mysql stop

Copy data from the old reporting server to the new one:

    rsync -avz /var/lib/mysql/* root@IP_New_Reporting_Server:/var/lib/mysql/

Execute the following command to ensure compatibility of the database files:

    mysql_upgrade

-   If no error is visible, restart MariaDB and continue to the section
    "Move generated reports"
-   If you see errors, especially on the following tables mysql
    innodb_index_stats, innodb_table_stats, gtid_slave_pos, it
    might be caused by an incompatibility between MySQL/MariaDB 5.5 and
    MariaDB 10.5. In that case, follow the procedure below:

        service mysql stop
        cp -a /var/lib/mysql/ /var/lib/mysql.bak
        cd /var/lib/mysql/mysql/
        rm innodb_index_stats.frm innodb_index_stats.ibd innodb_table_stats.frm innodb_table_stats.ibd gtid_slave_pos.frm gtid_slave_pos.ibd
        service mysql start

    Then manually recreate the tables:

    mysql mysql < repair_mysql_upgrade.sql

    Download the following file: [repair_mysql_upgrade.sql](../assets/reporting/administrate/repair_mysql_upgrade.sql)


> Be sure to copy the the custom report & resources you designed to your
> new reporting server in the same folders.

## Move generated reports

In case you also move your Centreon central server, you need to
synchronize the folders containing generated reports on your new
Centreon server to be able to have them on the interface:

    rsync -avz /var/lib/centreon/centreon-bi-server/archives/ root@IP_New_Centreon_Server:/var/lib/centreon/centreon-bi-server/archives/
