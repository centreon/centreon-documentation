---
id: upgrade-from-19-04
title: Montée de version depuis Centreon 19.04
---

Ce chapitre décrit la procédure de montée de version de votre plate-forme
Centreon depuis la version 19.04 vers la version 21.04.

> Si vous souhaitez migrer votre serveur Centreon vers CentOS / Oracle Linux
> / RHEL 8, vous devez suivre la [procédure de migration](../migrate/migrate-from-20-x)

## Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance
des sauvegardes de l’ensemble des serveurs centraux de votre plate-forme :

- Serveur Centreon Central,
- Serveur de gestion de base de données.

## Mettre à jour la clé de signature RPM

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon à jour depuis une version plus ancienne, vous devez suivre la [procédure de changement de clé](../security/key-rotation#installation-existante), afin de supprimer l'ancienne clé et d'installer la nouvelle.

## Montée de version du serveur Centreon Central

> Depuis la version 21.04, Centreon utilise **MariaDB 10.5**.
>
> Le processus suivant met seulement à jour les composants Centreon pour le
> moment.
>
> MariaDB sera mis à jour après.

### Mise à jour des dépôts

Il est nécessaire de mettre à jour le dépôt Centreon.

Exécutez la commande suivante :

```shell
yum install -y https://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-5.el7.centos.noarch.rpm
```

> Si vous êtes dans un environnement CentOS, il faut installer les dépôts de
> *Software Collections* avec la commande suivante :
>
> ```shell
> yum install -y centos-release-scl-rh
> ```

### Montée de version de la solution Centreon

Arrêter le processus Centreon Broker :
```shell
systemctl stop cbd
```

Supprimer les fichiers de rétention présent :
```shell
rm /var/lib/centreon-broker/* -f
```

Videz le cache de yum :

```shell
yum clean all --enablerepo=*
```

Mettez à jour l'ensemble des composants :

```shell
yum update centreon\*
```

> Acceptez les nouvelles clés GPG des dépôts si nécessaire.

### Actions complémentaires

#### Mise à jour de la version de PHP

Depuis la version 20.04, Centreon utilise un nouveau paquet PHP.

Le fuseau horaire par défaut de PHP 7 doit être configuré. Executez la commande
suivante :

```shell
echo "date.timezone = Europe/Paris" >> /etc/opt/rh/rh-php73/php.d/50-centreon.ini
```

> Remplacez **Europe/Paris** par votre fuseau horaire. La liste des fuseaux
> horaires est disponible [ici](http://php.net/manual/en/timezones.php).

> N'oubliez pas de reporter les configurations spécifiques qui peuvent être
> configurées dans /etc/opt/rh/rh-php71/php.ini et/ou
> /etc/opt/rh/rh-php71/php-fpm.d/centreon.conf

Réalisez les actions suivantes :

```shell
systemctl disable rh-php71-php-fpm
systemctl stop rh-php71-php-fpm
systemctl enable rh-php73-php-fpm
systemctl start rh-php73-php-fpm
systemctl restart httpd24-httpd
```

#### Configurer l'accès à l'API

Si vous aviez une configuration personnalisée, le processus de mise à jour RPM
n'y a pas touché.

> Si vous utilisez le https, vous pouvez suivre
> [cette procédure](../administration/secure-platform#passer-le-serveur-web-en-https)

Vous devez donc ajouter la section d'accès à l'API dans votre fichier de
configuration apache : **/opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf**

Seules les lignes avec le symbole "+" doivent être prises en compte.

```diff
+Alias /centreon/api /usr/share/centreon
Alias /centreon /usr/share/centreon/www/

+<LocationMatch ^/centreon/(?!api/latest/|api/beta/|api/v[0-9]+/|api/v[0-9]+\.[0-9]+/)(.*\.php(/.*)?)$>
+  ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/www/$1
+</LocationMatch>

+<LocationMatch ^/centreon/api/(latest/|beta/|v[0-9]+/|v[0-9]+\.[0-9]+/)(.*)$>
+  ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/api/index.php/$1
+</LocationMatch>

ProxyTimeout 300

<Directory "/usr/share/centreon/www">
    DirectoryIndex index.php
    Options Indexes
    AllowOverride all
    Order allow,deny
    Allow from all
    Require all granted
    <IfModule mod_php5.c>
        php_admin_value engine Off
    </IfModule>

+    FallbackResource /centreon/index

    AddType text/plain hbs
</Directory>

+<Directory "/usr/share/centreon/api">
+    Options Indexes
+    AllowOverride all
+    Order allow,deny
+    Allow from all
+    Require all granted
+    <IfModule mod_php5.c>
+        php_admin_value engine Off
+    </IfModule>
+
+    AddType text/plain hbs
+</Directory>

RedirectMatch ^/$ /centreon
```

Redémarrez ensuite le service Apache :

```shell
systemctl restart httpd24-httpd
```

### Finalisation de la mise à jour

Avant de démarrer la montée de version via l'interface web, rechargez le
serveur Apache avec la commande suivante :

```shell
systemctl reload httpd24-httpd
```

Connectez-vous ensuite à l'interface web Centreon pour démarrer le processus de
mise à jour :

Cliquez sur **Next** :

![image](../assets/upgrade/web_update_1.png)

Cliquez sur **Next** :

![image](../assets/upgrade/web_update_2.png)

La note de version présente les principaux changements, cliquez sur **Next** :

![image](../assets/upgrade/web_update_3.png)

Le processus réalise les différentes mises à jour, cliquez sur **Next** :

![image](../assets/upgrade/web_update_4.png)

Votre serveur Centreon est maintenant à jour, cliquez sur **Finish** pour
accéder à la page de connexion :

![image](../assets/upgrade/web_update_5.png)

Si le module Centreon BAM est installé, référez-vous à la [documentation
associée](../service-mapping/upgrade) pour le mettre à jour.

### Actions post montée de version

#### Déployer la configuration

Voir [Déployer la configuration](../monitoring/monitoring-servers/deploying-a-configuration).

#### Redémarrez les processus Centreon

Redamarrez le processus cbd:
```
systemctl start cbd
```

#### Montée de version des extensions

Depuis le menu `Administration > Extensions > Gestionnaire`, mettez à jour
toutes les extensions, en commençant par les suivantes :

  - License Manager,
  - Plugin Packs Manager,
  - Auto Discovery.

Vous pouvez alors mettre à jour toutes les autres extensions commerciales.

#### Démarrer le gestionnaire de tâches

Depuis la version 20.04, Centreon a changé son gestionnaire de tâches en passant de
*Centcore* à *Gorgone*.

Pour acter ce changement, réalisez les actions suivantes :

```shell
systemctl stop centcore
systemctl enable gorgoned
systemctl start gorgoned
systemctl disable centcore
```

Les statistiques Engine qui étaient collectées par *Centcore* le seront
maintenant par *Gorgone*

Il faut alors changer les droits sur les fichiers RRD de statistique en
exécutant la commande suivante:

```shell
chown -R centreon-gorgone /var/lib/centreon/nagios-perf/*
```

#### Redémarrage des processus de supervision

Le composant Centreon Broker a changé le format de son fichier de configuration.

Il utilise maintenant JSON à la place de XML.

Pour être sur que Broker et que le module Broker de Engine utilisent les nouveaux
fichiers de configuration, suivez ces étapes :

1. Déployer la configuration du Central depuis l'interface web en suivant
[cette procedure](../monitoring/monitoring-servers/deploying-a-configuration),
2. Redémarrer Broker et Engine sur le serveur Central en exécutant la commande
suivante:

  ```shell
  systemctl restart cbd centengine
  ```

### Montée de version du serveur MariaDB

Les composants MariaDB peuvent maintenant être mis à jour.

> Référez vous à la documentation officielle de MariaDB pour en savoir
> davantage sur ce processus :
>
> https://mariadb.com/kb/en/upgrading-between-major-mariadb-versions/

#### Mettre à jour le dépôt Centreon

> Cette étape est nécessaire seulement si votre environnement comprend une base de données déportée.
> Si le serveur central Centreon et
> MariaDB sont hébergés sur le même serveur, sautez cette étape.

Exécutez la commande suivante sur le serveur de base de données dédié :

```shell
yum install -y https://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-5.el7.centos.noarch.rpm
```

#### Configuration

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

#### Montée de version

Il est nécessaire de désinstaller puis réinstaller MariaDB pour changer de version majeure (c'est-à-dire pour passer d'une version 10.1 à une version 10.5).

1. Arrêtez le service mariadb :

    ```shell
    systemctl stop mariadb
    ```

2. Désinstallez la version actuelle :

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

    Si votre base de données est protégée par mot de passe, entrez :

   ```shell
    mysql_upgrade -u <utilisateur_admin_bdd> -p
    ```

    Exemple : si votre utilisateur_admin_bdd est `root`, entrez:

    ```
    mysql_upgrade -u root -p
    ```

    > Référez vous à la [documentation officielle](https://mariadb.com/kb/en/mysql_upgrade/)
    > pour plus d'informations ou si des erreurs apparaissent pendant cette dernière étape.

#### Activer MariaDB au démarrage automatique

Exécutez la commande suivante :

```shell
systemctl enable mariadb
```

## Montée de version des Remote Servers

Cette procédure est identique à la montée de version d'un serveur Centreon Central.

## Montée de version des Pollers

### Mise à jour des dépôts

Exécutez la commande suivante :

```shell
yum install -y https://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-5.el7.centos.noarch.rpm
```

> Si vous êtes dans un environnement CentOS, il faut installer les dépôts de
> *Software Collections* avec la commande suivante :
>
> ```shell
> yum install -y centos-release-scl-rh
> ```

### Montée de version de la solution Centreon

Videz le cache de yum :

```shell
yum clean all --enablerepo=*
```

Mettez à jour l'ensemble des composants :

```shell
yum update centreon\*
```

> Acceptez les nouvelles clés GPG des dépôts si nécessaire.

Démarrez et activez **gorgoned**:

```shell
systemctl start gorgoned
systemctl enable gorgoned
```

### Actions post montée de version

Du fait du nouveau format de configuration du module Broker de Engine, la
configuration doit être re-déployée.

Déployer la configuration du Poller depuis l'interface web en suivant
[cette procedure](../monitoring/monitoring-servers/deploying-a-configuration),
et en choisissant la méthode *Redémarrer* pour le processus Engine

## Communications

Par défaut, la communication entre le serveur Central et les Pollers ou les
Remote Servers utilisera toujours SSH.

Considérez changer le protocole de communication en suivant la procédure
[Changer la communication de SSH à ZMQ](../monitoring/monitoring-servers/communications#changer-la-communication-de-ssh-a-zmq).

## Sécurisez votre plateforme

N'oubliez pas de sécuriser votre plateforme Centreon en suivant nos
[recommandations](../administration/secure-platform)
