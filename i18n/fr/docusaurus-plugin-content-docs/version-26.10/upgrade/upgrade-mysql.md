---
id: upgrade-mysql
title: Mettre à jour MySQL
description: "Mettre à jour MySQL vers une version compatible avec Centreon 25.10"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Si vous utilisiez Centreon 24.04 ou 24.10 avec MySQL, sachez que le support de MySQL 8.0 prendra fin en avril 2026. Assurez-vous que votre Centreon utilise toujours [une version supportée de MySQL](#versions-de-mysql-compatibles-avec-centreon-2610).

Vous pouvez potentiellement avoir plusieurs bases MySQL dans votre architecture. Le serveur central a une base, chaque serveur distant a une base, et les modules MBI et MAP ont chacun une base dédiée. Dans une architecture, toutes les bases doivent avoir la même version de MySQL.

## Processus de mise à jour

Ne mettez pas à jour votre version de Centreon et votre version de MySQL en même temps. Vous pouvez effectuer les deux mises à jour l'une après l'autre dans l'ordre que vous souhaitez, mais assurez-vous que la première procédure de mise à jour soit entièrement terminée avant d'effectuer la seconde.

## Versions de MySQL compatibles avec Centreon 26.10

* MySQL 8.4

## Connaître la version de MySQL

Pour connaître la version de MySQL installée sur une machine, tapez la commande suivante :

```shell
mysql --version
```

Le résultat doit ressembler à ça :

```shell
mysql Ver 8.0.x for Linux on x86_64
```

## Mettre à jour MySQL

1. [Effectuez une sauvegarde de vos bases de données](https://dev.mysql.com/doc/refman/8.0/en/backup-methods.html).

2. Avant de mettre à jour MySQL, effectuez les opérations suivantes avec soin. **Si vous omettez ces étapes, votre base de données ne fonctionnera plus !**

   1. Supprimez la ligne suivante du fichier **/etc/my.cnf.d/mysql-server.cnf** :

      ```shell
      "default-authentication-plugin=mysql_native_password"
      ```

   2. Si vous utilisez MBI:

      <Tabs groupId="sync">
      <TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

      Dans le fichier **/etc/my.cnf.d/mysql-server.cnf**, ajoutez `log_bin_trust_function_creators=1`.

      </TabItem>
      <TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

      Dans le fichier **/etc/my.cnf.d/mysql-server.cnf**, ajoutez `log_bin_trust_function_creators=1`.

      </TabItem>
      <TabItem value="Debian 12" label="Debian 12">

      Dans le fichier `/etc/mysql/mysql.cnf`, ajoutez:

      ```shell
      [mysqld]
      log_bin_trust_function_creators=1
      ```

      </TabItem>
      </Tabs>

      Puis redémarrez MySQL.

   2. Connectez-vous en **root** à votre serveur MySQL et obtenez la liste de tous les utilisateurs Centreon qui utilisent **mysql_native_password** comme plugin d'authentification :

      ```shell
      SELECT user, host, plugin from mysql.user WHERE plugin='mysql_native_password';
      ```

      Pour chacun de ces utilisateurs, exécutez la requête suivante. **Vous DEVEZ entrer le mot de passe de l'utilisateur. Sans cela, leur compte ne sera plus protégé par mot de passe.**

      ```shell
      ALTER USER '<USERNAME>'@'<HOST>' IDENTIFIED WITH caching_sha2_password BY '<PASSWORD>';
      ```

    3. Ajoutez les clés uniques suivantes :

       ```shell
       ALTER TABLE `centreon`.`traps` ADD UNIQUE (`traps_id`);
       ALTER TABLE `centreon`.`topology` ADD UNIQUE (`topology_page`);
       ```
    
    4. Si vous utilisez [MBI](../reporting/introduction.md), dans la base de données du central :
    
       * Donnez des droits trigger à l'utilisateur **centreon** :

         ```shell
         GRANT TRIGGER ON centreon.* TO `centreon`@'%';
         GRANT TRIGGER ON centreon_storage.* TO `centreon`@'%';
         ```
    
       * Exécutez les requêtes suivantes :

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

3. Une fois toutes les opérations ci-dessus terminées, [suivez la documentation officielle MySQL pour mettre à niveau MySQL](http://dev.mysql.com/doc/refman/8.4/en/upgrade-binary-package.html).

4. Pour activer MySQL au démarrage, exécutez la commande suivante :

    ```shell
    systemctl enable mysql
    ```
