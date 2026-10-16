---
id: upgrade-mysql
title: Upgrading MySQL
description: "Upgrade MySQL to a version supported by Centreon 24.10"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

If you were using Centreon 24.04 or 24.10 with MySQL, be aware that support for MySQL 8.0 ends at the end of April 2026. Make sure your Centreon always uses [a supported version of MySQL](#versions-of-mysql-compatible-with-centreon-2410.

You may have several MySQL databases in your architecture. The central server has a database, each remote server has a database,
and the MBI and MAP modules each have a dedicated database. Within your architecture, all databases must have the same version of MySQL.

## Upgrading process

Do not upgrade your version of Centreon and your version of MySQL at the same time. You can perform both upgrades one after the other in the order you want, however, make sure the first upgrade procedure is fully complete before you perform the second one.

## Versions of MySQL compatible with Centreon 24.10

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

   2. If you are using MBI:

      <Tabs groupId="sync">
      <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

      In the **/etc/my.cnf.d/mysql-server.cnf** file, add `log_bin_trust_function_creators=1`.

      </TabItem>
      <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

      In the **/etc/my.cnf.d/mysql-server.cnf** file, add `log_bin_trust_function_creators=1`.

      </TabItem>
      <TabItem value="Debian 12" label="Debian 12">

      In the `/etc/mysql/mysql.cnf` file, add:

      ```shell
      [mysqld]
      log_bin_trust_function_creators=1
      ```

      </TabItem>
      </Tabs>

      Then restart MySQL.

   2. Connect to your MySQL server as **root** and get a list of all Centreon users that are using **mysql_native_password** as authentication plugin:

      ```shell
      SELECT user, host, plugin from mysql.user WHERE plugin='mysql_native_password';
      ```

      For each of these users, run the following query. **You MUST enter the user's password, otherwise their account will no longer be password-protected.**

      ```shell
      ALTER USER '<USERNAME>'@'<HOST>' IDENTIFIED WITH caching_sha2_password BY '<PASSWORD>';
      ```

    3. Execute the following queries:

       ```shell
       ALTER TABLE `centreon`.`traps` ADD UNIQUE (`traps_id`);
       ALTER TABLE `centreon`.`topology` ADD UNIQUE (`topology_page`);
       ALTER TABLE `centreon`.`cb_list_values` DROP CONSTRAINT IF EXISTS `fk_cb_list_values_1`;
       ```

    4. If you are using [MBI](../reporting/introduction.md), in the central database:

       * Grant trigger rights to the **centreon** user:

         ```shell
         GRANT TRIGGER ON centreon.* TO `centreon`@'%';
         GRANT TRIGGER ON centreon_storage.* TO `centreon`@'%';
         ```

       * Execute the following queries:

         ```shell
         ALTER TABLE `mod_bi_generation` DROP CONSTRAINT IF EXISTS `mod_bi_generation_ibfk_1`;
         ALTER TABLE `mod_bi_archives` DROP CONSTRAINT IF EXISTS `mod_bi_archives_ibfk1`;
         ALTER TABLE `mod_bi_generation_cg_relation` DROP CONSTRAINT IF EXISTS `mod_bi_generation_cg_relation_ibfk_2`;
         ALTER TABLE `mod_bi_generation_output_relations` DROP CONSTRAINT IF EXISTS `mob_bi_generation_output_relations_ibfk_1`;
         ALTER TABLE `mod_bi_logo_relations` DROP CONSTRAINT IF EXISTS `mob_bi_logo_relations_ibfk_1`;
         ALTER TABLE `mod_bi_publication_options` DROP CONSTRAINT IF EXISTS `mob_bi_publication_options_ibfk_1`;
         ALTER TABLE `mod_bi_publication_relations` DROP CONSTRAINT IF EXISTS `mob_bi_publication_relations_ibfk_1`;
         ALTER TABLE `mod_bi_publication_relations` DROP CONSTRAINT IF EXISTS `mob_bi_publication_relations_ibfk_2`;
         ALTER TABLE `mod_bi_report_acl_rules_relations` DROP CONSTRAINT IF EXISTS `fk_mod_bi_report_has_mod_bi_access_rule_mod_bi_report1`;
         ALTER TABLE `mod_bi_generation_jobs_groups_relations` DROP CONSTRAINT IF EXISTS `fk_mod_bi_jobs_groups_has_mod_bi_generation_mod_bi_generation1`;

         DELIMITER $$

         CREATE TRIGGER IF NOT EXISTS `generation_cascade_delete`
         AFTER DELETE ON `mod_bi_generation`
         FOR EACH ROW
         BEGIN
         	DECLARE result INT default 0;
           SET result = (SELECT count(`mod_bi_generation`.`id`) FROM `mod_bi_generation` WHERE `mod_bi_generation`.`id` = OLD.`id`);
         	IF (result < 1)
           THEN
             DELETE FROM `mod_bi_archives` WHERE `generation_id` = OLD.id;
             DELETE FROM `mod_bi_generation_acl_rules_relations` WHERE `generation_id` = OLD.id;
             DELETE FROM `mod_bi_generation_cg_relation` WHERE `generation_id` = OLD.id;
             DELETE FROM `mod_bi_generation_jobs_groups_relations` WHERE `generation_id` = OLD.id;
             DELETE FROM `mod_bi_generation_output_relations` WHERE `generation_id` = OLD.id;
             DELETE FROM `mod_bi_logo_relations` WHERE `generation_id` = OLD.id;
             DELETE FROM `mod_bi_publication_relations` WHERE `generation_id` = OLD.id;
           END IF;
         END$$

         CREATE TRIGGER IF NOT EXISTS `report_cascade_delete`
         AFTER DELETE ON `mod_bi_report`
         FOR EACH ROW
         BEGIN
         	DECLARE result INT default 0;
           SET result = (SELECT count(`mod_bi_report`.`id`) FROM `mod_bi_report` WHERE `mod_bi_report`.`id` = OLD.`id`);
         	IF (result < 1)
           THEN
             DELETE FROM `mod_bi_report_acl_rules_relations` WHERE `report_id` = OLD.id;
             DELETE FROM `mod_bi_generation` WHERE `id_report` = OLD.id;
           END IF;
         END$$

         CREATE TRIGGER IF NOT EXISTS `publication_cascade_delete`
         AFTER DELETE ON `mod_bi_publication`
         FOR EACH ROW
         BEGIN
         	DECLARE result INT default 0;
           SET result = (SELECT count(`mod_bi_publication`.`id`) FROM `mod_bi_publication` WHERE `mod_bi_publication`.`id` = OLD.`id`);
         	IF (result < 1)
           THEN
             DELETE FROM `mod_bi_publication_options` WHERE `publication_id` = OLD.id;
             DELETE FROM `mod_bi_publication_relations` WHERE `publication_id` = OLD.id;
           END IF;
         END$$

         DELIMITER ;
         ```

3. Once all the above operations have been completed, [follow the official MySQL documentation to upgrade MySQL](http://dev.mysql.com/doc/refman/8.4/en/upgrade-binary-package.html).

4. To enable MySQL on startup, execute the following command:

    ```shell
    systemctl enable mysql
    ```
