---
id: upgrade-mariadb
title: Mettre à jour MariaDB
---

Vous pouvez potentiellement avoir plusieurs bases MariaDB dans votre architecture. Le serveur central a une base, chaque serveur distant a une base, et les modules MBI et MAP ont chacun une base dédiée. Dans une architecture, toutes les bases doivent avoir la même version de MariaDB.

## Processus de mise à jour

Lorsque vous passez d'une version majeure de Centreon à une autre, vous devez :
1. Upgrader Centreon (paquets, installation web, déploiement de la configuration).
2. Upgrader MariaDB.

> Référez vous à la documentation officielle de MariaDB pour en savoir davantage sur le processus de mise à jour :
> - https://mariadb.com/kb/en/upgrading-between-major-mariadb-versions/

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

## Changer de version majeure de MariaDB

Il est nécessaire de désinstaller puis réinstaller MariaDB pour changer de version majeure (par exemple pour passer d'une version 10.4 à une version 10.5).

1. Arrêtez le service mariadb :

    ```shell
    systemctl stop mariadb
    ```

2. Désinstallez la version actuelle :

    ```shell
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
    ```

3. Installez la version désirée :

    ```shell
    yum install MariaDB-server-<version>\* MariaDB-client-<version>\* MariaDB-shared-<version>\* MariaDB-compat-<version>\* MariaDB-common-<version>\*
    ```

    Exemple :

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

    Si votre base de données est protégée par mot de passe, entrez :

   ```shell
    mysql_upgrade -u <utilisateur_admin_bdd> -p
    ```

    Exemple : si votre utilisateur_admin_bdd est `root`, entrez:

    ```
    mysql_upgrade -u root -p
    ```

    > Référez vous à la [documentation officielle](https://mariadb.com/kb/en/mysql_upgrade/)
    > pour plus d'informations ou si des erreurs apparaissent pendant cette étape.

6. Pour activer MariaDB, exécutez la commande suivante :

    ```shell
    systemctl enable mariadb
    ```

### Montée de version de 10.1 à 10.5

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

    ```
    yum update mariadb-*
    ```

2. Redémarrez MariaDB :

    ```
    restart mariadb
    ```
