---
id: upgrade-mariadb
title: Mettre à jour MariaDB
description: "Mettre à jour MariaDB vers la version requise par votre Centreon"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Vous pouvez potentiellement avoir plusieurs bases MariaDB dans votre architecture. Le serveur central a une base, chaque serveur distant a une base, et les modules MBI et MAP ont chacun une base dédiée. Dans une architecture, toutes les bases doivent avoir la même version de MariaDB.

## Processus de mise à jour

Lorsque vous passez d'une version majeure de Centreon à une autre, vous devez :

1. Upgrader Centreon (paquets, installation web, déploiement de la configuration). NOtez que vous ne pouvez upgrader Centreon [qu'à partir d'un OS encore supporté](upgrade-matrix.mdx).
2. Upgrader MariaDB.

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
rpm -qa |grep MariaDB
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

Il est nécessaire de désinstaller puis réinstaller MariaDB pour changer de version majeure (par exemple pour passer d'une version 10.5 à une version 10.11).

1. Arrêtez le service mariadb :

    ```shell
    systemctl stop mariadb
    ```

2. Désinstallez la version actuelle :

<Tabs groupId="sync">
<TabItem value="Alma / Oracle Linux 9" label="Alma / Oracle Linux 9">

```shell
rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

```shell
rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-common
```

</TabItem>
</Tabs>

> Pendant cette étape de désinstallation, vous pouvez rencontrer une erreur parce qu'un ou plusieurs paquets MariaDB sont manquants. Dans ce cas, vous devez exécuter la commande de désinstallation sans inclure le paquet manquant.
>
>Par exemple, vous obtenez le message d'erreur suivant :
>
>   `package MariaDB-compat is not installed`
>
>   Comme le paquet **MariaDB-compat** est manquant, vous devez exécuter la même commande sans citer **MariaDB-compat** :
>
>   `rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-common`

> Assurez-vous d'avoir [installé le dépôt officiel de MariaDB](https://mariadb.com/kb/en/mariadb-package-repository-setup-and-usage/) avant de poursuivre la procédure.

3. Installez la version 10.11 :

<Tabs groupId="sync">
<TabItem value="Alma / Oracle Linux 9" label="Alma / Oracle Linux 9">

```shell
dnf install mariadb-server-10.11\* mariadb-10.11\*
```

</TabItem>
<TabItem value="RHEL 9" label="RHEL 9">

```shell
dnf install mariadb-server-10.11\* mariadb-10.11\*
```

</TabItem>
</Tabs>

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
dnf update MariaDB-*
```

</TabItem>
</Tabs>

2. Redémarrez MariaDB :

    ```shell
    systemctl restart mariadb
    ```
