---
id: upgrade-mysql
title: Upgrading MySQL
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you were using Centreon 24.04 or 24.10 with MySQL, be aware that support for MySQL 8.0 ends at the end of April 2026. Make sure your Centreon always uses [a supported version of MySQL](#versions-of-mysql-compatible-with-centreon-2510).

You may have several MySQL databases in your architecture. The central server has a database, each remote server has a database,
and the MBI and MAP modules each have a dedicated database. Within your architecture, all databases must have the same version of MySQL.

## Upgrading process

Do not upgrade your version of Centreon and your version of MySQL at the same time. You can perform both upgrades one after the other in the order you want, however, make sure the first upgrade procedure is fully complete before you perform the second one.

<!--If you are upgrading from one major version of Centreon to another at the same time as upgrading MySQL (e.g. upgrading from Centreon 24.04 to Centreon 25.10), you must:

1. Upgrade Centreon (packages, web installation, deploying the configuration).
2. Upgrade MySQL.

> Refer to the official MySQL documentation for more information about this process:
> http://dev.mysql.com/doc/refman/8.4/en/upgrade-binary-package.html-->

<!--## Version of MySQL for each version of Centreon-->

<!--| Centreon | MySQL   |
|----------|---------|
| 25.10    | <ul><li>8.4</li><li>8.0, mainly for upgrades from earlier versions, until the end of support for MySQL 8.0 (end of April 2026)</li></ul>    |
| 24.10    | <ul><li>8.0 until the end of April 2026</li><li>8.4 from November 2025 to the version's end of life (end of October 2026)</li></ul>     |
| 24.04    | 8.0     |-->

## Versions of MySQL compatible with Centreon 25.10

* MySQL 8.4 is recommended for new installations.
* MySQL 8.0 can still be used until its end of support (end of April 2026), but after this date you will have to upgrade to MySQL 8.4.

## Knowing your version of MySQL

To find out which version of MariaDB is installed on your machine, enter the following command:

```shell
mysql --version
```

The results should look like this:

```shell
mysql Ver 8.0.x for Linux on x86_64
```

## Upgrading MySQL

1. [Perform a backup of your databases](https://dev.mysql.com/doc/refman/8.0/en/backup-methods.html).

2. Before you upgrade MySQL, perform the following operations carefully. **If you omit these steps, your database will no longer work!**

   1. Remove the following line from the **/etc/my.cnf.d/mysql-server.cnf** file:

      ```shell
      "default-authentication-plugin=mysql_native_password"
      ```

   2. Connect to your MySQL server as **root** and get a list of all Centreon users that are using **mysql_native_password** as authentication plugin:

      ```shell
      SELECT user, host, plugin from mysql.user WHERE plugin='mysql_native_password';
      ```

      For each of these users, run the folllowing query. **You MUST enter the user's password, otherwise their account will no longer be password-protected.**

      ```shell
      ALTER USER '<USERNAME>'@'<HOST>' IDENTIFIED WITH caching_sha2_password BY '<PASSWORD>';
      ```

    3. Add the following unique keys:

       ```shell
       ALTER TABLE `centreon`.`traps` ADD UNIQUE (`traps_id`);
       ALTER TABLE `centreon`.`topology` ADD UNIQUE (`topology_page`);
       ```
    
    4. If you are using [MBI](../reporting/introduction.md), add the following unique keys:

       ```shell
       ALTER TABLE `centreon`.`mod_bi_generation` ADD UNIQUE (`id`);
       ALTER TABLE `centreon`.`mod_bi_report` ADD UNIQUE (`id`);
       ALTER TABLE `centreon`.`mod_bi_publication` ADD UNIQUE (`id`);
       ```

3. Once all the above operations have been completed, [follow the official MySQL documentation to upgrade MySQL](http://dev.mysql.com/doc/refman/8.4/en/upgrade-binary-package.html).

4. To enable MySQL on startup, execute the following command:

    ```shell
    systemctl enable mysql
    ```
