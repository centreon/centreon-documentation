---
id: upgrade-mariadb
title: Mettre à jour MariaDB
---

Vous pouvez potentiellement avoir plusieurs bases MariaDB dans votre architecture. Le serveur central a une base, chaque serveur distant a une base, et les modules MBI et MAP ont chacun une base dédiée. Dans une architecture, toutes les bases doivent avoir la même version de MariaDB.

## Processus de mise à jour

Lorsque vous passez d'une version majeure de Centreon à une autre, vous devez :
1. Upgrader Centreon (paquets, installation web, déploiement de la configuration).
2. Upgrader MariaDB.

Attention, MariaDB recommande vivement de monter en version le serveur en
passant par chacune des versions majeures. Vous devez mettre à jour MariaDB à partir de votre version de départ
jusqu'à la version 10.5. La mise à jour de la version doit
être effectuée de 1 à 1, par exemple 10.1 vers 10.2, 10.2 vers 10.3, etc.

C'est pourquoi Centreon fournit plusieurs versions de MariaDB sur
ses dépôts stables.

> Référez vous à la documentation officielle de MariaDB pour en savoir d'avantage sur ce processus :
> - https://mariadb.com/kb/en/upgrading-from-mariadb-101-to-mariadb-102/#how-to-upgrade
> - https://mariadb.com/kb/en/upgrading-from-mariadb-102-to-mariadb-103/#how-to-upgrade
> - https://mariadb.com/kb/en/upgrading-from-mariadb-103-to-mariadb-104/#how-to-upgrade
> - https://mariadb.com/kb/en/upgrading-from-mariadb-104-to-mariadb-105/#how-to-upgrade

## Version de Maria DB par version de Centreon

| Centreon | MariaDB |
|----------|---------|
| 21.04    | 10.5    |
| 20.10    | 10.3.x  |
| 20.04    | 10.3.x  |
| 19.10    | 10.1.x  |

## Connaître la version de MariaDB

Pour connaître la version de MariaDB installée sur une machine, tapez la commande suivante :

```
rpm -qa |grep MariaDB
```

Le résultat doit ressembler à ça :

```shell
MariaDB-client-10.5.8-1.el7.centos.x86_64
MariaDB-server-10.5.8-1.el7.centos.x86_64
MariaDB-common-10.5.8-1.el7.centos.x86_64
MariaDB-shared-10.5.8-1.el7.centos.x86_64
MariaDB-compat-10.5.8-1.el7.centos.x86_64
```

## Montée de version de 10.1 à 10.2

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

Suivez ces étapes résumées pour réaliser la montée de version comme MariaDB le
recommande :

1. Arrêtez le service mariadb :

    ```shell
    systemctl stop mariadb
    ```

2. Désinstallez la version actuelle 10.1 :

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Installez la version 10.2 :

    ```shell
    yum install MariaDB-server-10.2\* MariaDB-client-10.2\* MariaDB-shared-10.2\* MariaDB-compat-10.2\* MariaDB-common-10.2\*
    ```

4. Démarrer le service mariadb :

    ```shell
    systemctl start mariadb
    ```

5. Lancez le processus de mise à jour MariaDB :

    ```shell
    mysql_upgrade
    ```

    > Référez vous à la [documentation officielle](https://mariadb.com/kb/en/mysql_upgrade/)
    > si des erreurs apparaissent pendant cette étape.

6. Pour activer MariaDB, exécutez la commande suivante :

    ```shell
    systemctl enable mariadb
    ```

## Montée de version de 10.2 à 10.3

Suivez ces étapes résumées pour réaliser la montée de version comme MariaDB le
recommande :

1. Arrêtez le service mariadb :

    ```shell
    systemctl stop mariadb
    ```

2. Désinstallez la version actuelle 10.2 :

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Installez la version 10.3 :

    ```shell
    yum install MariaDB-server-10.3\* MariaDB-client-10.3\* MariaDB-shared-10.3\* MariaDB-compat-10.3\* MariaDB-common-10.3\*
    ```

4. Démarrer le service mariadb :

    ```shell
    systemctl start mariadb
    ```

5. Lancez le processus de mise à jour MariaDB :

    ```shell
    mysql_upgrade
    ```

    > Référez vous à la [documentation officielle](https://mariadb.com/kb/en/mysql_upgrade/)
    > si des erreurs apparaissent pendant cette étape.

6. Pour activer MariaDB, exécutez la commande suivante :

    ```shell
    systemctl enable mariadb
    ```

## Montée de version de 10.3 à 10.4

Suivez ces étapes résumées pour réaliser la montée de version comme MariaDB le
recommande :

1. Arrêtez le service mariadb :

    ```shell
    systemctl stop mariadb
    ```

2. Désinstallez la version actuelle 10.3 :

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Installez la version 10.4 :

    ```shell
    yum install MariaDB-server-10.4\* MariaDB-client-10.4\* MariaDB-shared-10.4\* MariaDB-compat-10.4\* MariaDB-common-10.4\*
    ```

4. Démarrer le service mariadb :

    ```shell
    systemctl start mariadb
    ```

5. Lancez le processus de mise à jour MariaDB :

    ```shell
    mysql_upgrade
    ```

    > Référez vous à la [documentation officielle](https://mariadb.com/kb/en/mysql_upgrade/)
    > si des erreurs apparaissent pendant cette étape.

6. Pour activer MariaDB, exécutez la commande suivante :

    ```shell
    systemctl enable mariadb
    ```

## Montée de version de 10.4 à 10.5

Suivez ces étapes résumées pour réaliser la montée de version comme MariaDB le
recommande :

1. Arrêtez le service mariadb :

    ```shell
    systemctl stop mariadb
    ```

2. Désinstallez la version actuelle 10.4 :

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Installez la version 10.5 :

    ```shell
    yum install MariaDB-server-10.5\* MariaDB-client-10.5\* MariaDB-shared-10.5\* MariaDB-compat-10.5\* MariaDB-common-10.5\*
    ```

4. Démarrer le service mariadb :

    ```shell
    systemctl start mariadb
    ```

5. Lancez le processus de mise à jour MariaDB :

    ```shell
    mysql_upgrade
    ```

    > Référez vous à la [documentation officielle](https://mariadb.com/kb/en/mysql_upgrade/)
    > si des erreurs apparaissent pendant cette étape.

6. Pour activer MariaDB, exécutez la commande suivante :

    ```shell
    systemctl enable mariadb
    ```




