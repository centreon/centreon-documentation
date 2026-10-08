---
id: upgrade-mariadb
title: Mettre à jour MariaDB
description: "Mettre à jour MariaDB vers la version requise par votre Centreon"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Vous pouvez potentiellement avoir plusieurs bases MariaDB dans votre architecture. Le serveur central a une base, chaque serveur distant a une base, et les modules MBI et MAP ont chacun une base dédiée. Dans une architecture, toutes les bases doivent avoir la même version de MariaDB.

## Processus de mise à jour

Passer d'une version majeure de Centreon à une autre implique une série d'étapes que vous devez effectuer dans le bon ordre. Ces étapes comprennent notamment la mise à jour de MariaDB et celle de Centreon (paquets, installation web, déploiement de la configuration), mais leur ordre exact dépend de votre version actuelle et de la version cible. Suivez toujours la procédure de mise à jour correspondant à votre version.

Vous ne pouvez mettre à jour Centreon que [depuis un OS supporté](upgrade-matrix.mdx).

> Référez vous à la documentation officielle de MariaDB pour en savoir davantage sur le processus de mise à jour :
> - https://mariadb.com/kb/en/upgrading-between-major-mariadb-versions/

## Version de Maria DB par version de Centreon

| Centreon | MariaDB |
|----------|---------|
| 26.10    | 11.8    |
| 25.10    | 10.11   |
| 24.10    | 10.11   |
| 24.04    | 10.11   |
| 23.10    | 10.5    |
| 23.04    | 10.5    |

## Connaître la version de MariaDB

Pour connaître la version de MariaDB installée sur une machine, tapez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
rpm -qa |grep -i mariadb
```

Le résultat pourra ressembler à cet exemple :

```shell
MariaDB-client-10.5.8-1.el9.centos.x86_64
MariaDB-server-10.5.8-1.el9.centos.x86_64
MariaDB-common-10.5.8-1.el9.centos.x86_64
MariaDB-shared-10.5.8-1.el9.centos.x86_64
MariaDB-compat-10.5.8-1.el9.centos.x86_64
```

</TabItem>
</Tabs>

## Changer de version majeure de MariaDB

Dans cet exemple, nous passons de la version 10.11 à la version 11.8. Adaptez la procédure si vous effectuez la mise à jour depuis une autre version.

1. Arrêtez le service mariadb :

    ```shell
    systemctl stop mariadb
    ```

2. Exécutez la commande suivante :

```shell
dnf module reset mariadb -y
```

3. Installez la version 10.11 :

```shell
dnf module enable -y mariadb:11.8
dnf install -y mariadb-server-11.8\* mariadb-11.8\*
```

4. Démarrer le service mariadb :

    ```shell
    systemctl start mariadb
    ```

5. Lancez le processus de mise à jour MariaDB :

    ```shell
    mariadb-upgrade
    ```

    Si votre base de données est protégée par mot de passe, entrez :

   ```shell
    mariadb-upgrade -u <utilisateur_admin_bdd> -p
    ```

    Exemple : si votre utilisateur_admin_bdd est `root`, entrez:

    ```
    mariadb-upgrade -u root -p
    ```

    > Référez vous à la [documentation officielle](https://mariadb.com/kb/en/mysql_upgrade/)
    > pour plus d'informations ou si des erreurs apparaissent pendant cette étape.

6. Pour activer MariaDB, exécutez la commande suivante :

    ```shell
    systemctl enable mariadb
    ```

7. Avant de finir la montée de version de votre plateforme Centreon, exécutez la commande suivante sur le serveur central :

    ```shell
    systemctl restart php-fpm httpd
    ```

8. Vérifiez que MariaDB tourne à l'aide de la commande `systemctl status mariadb`. Si ce n'est pas le cas, démarrez le service :

    ```shell
    systemctl start mariadb
    ```

### Montée de version de 10.1 à une version plus récente

Le paramètre `innodb_additional_mem_pool_size` a été supprimé depuis MariaDB
10.2, vous devez donc le supprimer du fichier **/etc/my.cnf.d/centreon.cnf**

```diff
#
# Custom MySQL/MariaDB server configuration for Centreon
#
[server]
innodb_file_per_table=1

open_files_limit = 32000

key_buffer_size = 256M
sort_buffer_size = 32M
join_buffer_size = 4M
thread_cache_size = 64
read_buffer_size = 512K
read_rnd_buffer_size = 256K
max_allowed_packet = 8M

# For 4 Go Ram
-#innodb_additional_mem_pool_size=512M
#innodb_buffer_pool_size=512M

# For 8 Go Ram
-#innodb_additional_mem_pool_size=1G
#innodb_buffer_pool_size=1G
```

## Changer de version mineure de MariaDB

Suivez ces étapes pour changer de version mineure de MariaDB (par exemple, pour passer d'une 10.3.2 à une 10.3.5) : 

1. Mettez à jour MariaDB :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update mariadb-*
```

</TabItem>
</Tabs>

2. Redémarrez MariaDB :

    ```shell
    systemctl restart mariadb
    ```
