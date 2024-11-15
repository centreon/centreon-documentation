---
id: upgrade-mariadb
title: Mettre à jour MariaDB
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

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
| 23.04    | 10.5    |
| 22.10    | 10.5    |
| 22.04    | 10.5    |
| 21.10    | 10.5    |
| 21.04    | 10.5    |
| 20.10    | 10.3.x  |
| 20.04    | 10.3.x  |
| 19.10    | 10.1.x  |

## Connaître la version de MariaDB

Pour connaître la version de MariaDB installée sur une machine, tapez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
rpm -qa |grep MariaDB
```

Le résultat doit ressembler à ça :

```shell
MariaDB-client-10.5.8-1.el8.centos.x86_64
MariaDB-server-10.5.8-1.el8.centos.x86_64
MariaDB-common-10.5.8-1.el8.centos.x86_64
MariaDB-shared-10.5.8-1.el8.centos.x86_64
MariaDB-compat-10.5.8-1.el8.centos.x86_64
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
rpm -qa |grep MariaDB
```

Le résultat doit ressembler à ça :

```shell
MariaDB-client-10.5.8-1.el9.centos.x86_64
MariaDB-server-10.5.8-1.el9.centos.x86_64
MariaDB-common-10.5.8-1.el9.centos.x86_64
MariaDB-shared-10.5.8-1.el9.centos.x86_64
MariaDB-compat-10.5.8-1.el9.centos.x86_64
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
dpkg -l |grep MariaDB
```

Le résultat doit ressembler à ça :

```shell
ii  libdbd-mysql-perl:amd64                4.050-3+b1                                                                 amd64        Perl5 database interface to the MariaDB/MySQL database
ii  libmariadb3:amd64                      1:10.5.17+maria~deb11      amd64        MariaDB database client library
ii  mariadb-client-10.5                    1:10.5.17+maria~deb11      amd64        MariaDB database client binaries
ii  mariadb-client-core-10.5               1:10.5.17+maria~deb11      amd64        MariaDB database core client binaries
ii  mariadb-common                         1:10.5.17+maria~deb11      all          MariaDB common configuration files
ii  mariadb-server                         1:10.5.17+maria~deb11      all          MariaDB database server (metapackage depending on the latest version)
ii  mariadb-server-10.5                    1:10.5.17+maria~deb11      amd64        MariaDB database server binaries
ii  mariadb-server-core-10.5               1:10.5.17+maria~deb11      amd64        MariaDB database core server files
ii  mysql-common                           1:10.5.17+maria~deb11      all          MariaDB database common files (e.g. /etc/mysql/my.cnf)
```

</TabItem>
</Tabs>

## Changer de version majeure de MariaDB

Il est nécessaire de désinstaller puis réinstaller MariaDB pour changer de version majeure (par exemple pour passer d'une version 10.4 à une version 10.5).

1. Arrêtez le service mariadb :

    ```shell
    systemctl stop mariadb
    ```

2. Désinstallez la version actuelle :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-compat MariaDB-common
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Lors de l'étape **[Connaître la version de MariaDB](#connaître-la-version-de-mariadb)**, la commande **grep** vous a renvoyé la version précise de votre MariaDB.

* Si votre résultat incluait l'indication de version “10.3”, votre commande de désinstallation doit inclure celle-ci, comme dans l’exemple ci-dessous :

```shell
dpkg -r --ignore-depends=mariadb-server,mariadb-client,mariadb-shared,mariadb-compat,mariadb-common mariadb-server mariadb-server-10.3 mariadb-client mariadb-client-10.3 mariadb-client-core-10.3 mariadb-common mariadb-server-core-10.3 mysql-common
```

* Si votre résultat n’incluait pas l'indication de version “10.3”, utilisez la commande suivante :

```shell
dpkg -r --ignore-depends=mariadb-server,mariadb-client,mariadb-shared,mariadb-compat,mariadb-common mariadb-server mariadb-server mariadb-client mariadb-client mariadb-client-core mariadb-common mariadb-server-core mysql-common
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

> Assurez-vous d'avoir [installé le dépôt officiel de MariaDB](./upgrade-from-22-04.md#installer-le-dépôt-mariadb) avant de poursuivre la procédure.

3. Installez la version 10.5 :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install MariaDB-server-10.5\* MariaDB-client-10.5\* MariaDB-shared-10.5\* MariaDB-compat-10.5\* MariaDB-common-10.5\*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install MariaDB-server-10.5\* MariaDB-client-10.5\* MariaDB-shared-10.5\* MariaDB-compat-10.5\* MariaDB-common-10.5\*
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
curl -LsS https://r.mariadb.com/downloads/mariadb_repo_setup | sudo bash -s -- --os-type=debian --os-version=11 --mariadb-server-version="mariadb-10.5"
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

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf update MariaDB-*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf update MariaDB-*
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt update MariaDB-*
```

</TabItem>
</Tabs>

2. Redémarrez MariaDB :

    ```
    systemctl restart mariadb
    ```
