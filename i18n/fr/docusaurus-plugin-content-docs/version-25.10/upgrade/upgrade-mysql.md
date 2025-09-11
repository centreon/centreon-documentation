---
id: upgrade-mysql
title: Mettre à jour MySQL
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Si vous utilisiez Centreon 24.04 ou 24.10 avec MySQL, sachez que le support de MySQL 8.0 prendra fin en avril 2026. Assurez-vous que votre Centreon utilise toujours [une version supportée de MySQL](#versions-de-mysql-compatibles-avec-centreon-2510).

Vous pouvez potentiellement avoir plusieurs bases MySQL dans votre architecture. Le serveur central a une base, chaque serveur distant a une base, et les modules MBI et MAP ont chacun une base dédiée. Dans une architecture, toutes les bases doivent avoir la même version de MySQL.

## Processus de mise à jour

Ne mettez pas à jour votre version de Centreon et votre version de MySQL en même temps. Vous pouvez effectuer les deux mises à jour l'une après l'autre dans l'ordre que vous souhaitez, mais assurez-vous que la première procédure de mise à jour soit entièrement terminée avant d'effectuer la seconde.

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

## Versions de MySQL compatibles avec Centreon 25.10

* MySQL 8.4 est recommandé pour les nouvelles installations.
* MySQL 8.0 peut encore être utilisé jusqu'à la fin de son support (fin avril 2026), mais après cette date, vous devrez passer à MySQL 8.4.

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

2. AVant de mettre à jour MySQL, effectuez les opérations suivantes avec soin. **Si vous omettez ces étapes, votre base de données ne fonctionnera plus !**

   1. Supprimez la ligne suivante du fichier **/etc/my.cnf.d/mysql-server.cnf** :

      ```shell
      "default-authentication-plugin=mysql_native_password"
      ```

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
    
    4. Si vous utilisez [MBI](../reporting/introduction.md), ajoutez les clés uniques suivantes :

       ```shell
       ALTER TABLE `centreon`.`mod_bi_generation` ADD UNIQUE (`id`);
       ALTER TABLE `centreon`.`mod_bi_report` ADD UNIQUE (`id`);
       ALTER TABLE `centreon`.`mod_bi_publication` ADD UNIQUE (`id`);
       ```

3. Une fois toutes les opérations ci-dessus terminées, [suivez la documentation officielle MySQL pour mettre à niveau MySQL](http://dev.mysql.com/doc/refman/8.4/en/upgrade-binary-package.html).

4. Pour activer MySQL au démarrage, exécutez la commande suivante :

    ```shell
    systemctl enable mysql
    ```
