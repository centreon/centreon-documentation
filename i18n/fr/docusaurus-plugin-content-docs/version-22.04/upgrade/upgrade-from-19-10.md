---
id: upgrade-from-19-10
title: Montée de version depuis Centreon 19.10
---

Ce chapitre décrit la procédure de montée de version de votre plate-forme
Centreon depuis la version 19.10 vers la version 22.04.

> Si vous souhaitez migrer votre serveur Centreon vers Oracle Linux
> / RHEL 8, vous devez suivre la [procédure de migration](../migrate/migrate-from-20-x.md)

## Prérequis

### Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance
des sauvegardes de l’ensemble des serveurs centraux de votre plate-forme :

- Serveur Centreon Central,
- Serveur de gestion de base de données.

### Mettre à jour la clé de signature RPM

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon à jour depuis une version plus ancienne, vous devez suivre la [procédure de changement de clé](../security/key-rotation.md#installation-existante), afin de supprimer l'ancienne clé et d'installer la nouvelle.

### Mise à jour vers la dernière version mineure

Mettez votre plateforme à jour vers la dernière version mineure disponible de Centreon 19.10.

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
yum install -y https://yum.centreon.com/standard/22.04/el7/stable/noarch/RPMS/centreon-release-22.04-3.el7.centos.noarch.rpm
```

> Si vous êtes dans un environnement CentOS, il faut installer les dépôts de
> *Software Collections* avec la commande suivante :
>
> ```shell
> yum install -y centos-release-scl-rh
> ```

### Montée de version de PHP

Centreon 22.04 utilise PHP en version 8.0.

Vous devez tout d'abord installer les dépôts **remi** :
```shell
yum install -y yum-utils
yum install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
yum install -y https://rpms.remirepo.net/enterprise/remi-release-7.rpm
```
Ensuite, vous devez activer le dépôt php 8.0
```shell
yum-config-manager --enable remi-php80
```

### Montée de version de la solution Centreon

> Assurez-vous que tous les utilisateurs sont déconnectés avant de commencer
> la procédure de mise à jour.

Si vous avez des extensions Business installées, mettez à jour le dépôt business en 22.04.
Rendez-vous sur le [portail du support](https://support.centreon.com/s/repositories) pour en récupérer l'adresse.

Arrêter le processus Centreon Broker :
```shell
systemctl stop cbd
```

Supprimez les fichiers de rétention présents :
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

Activez et démarrez le service **gorgoned** :
```shell
systemctl enable gorgoned
systemctl start gorgoned
```

Le fuseau horaire par défaut de PHP 8 doit être configuré. Exécutez la commande suivante :
```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

> Remplacez **Europe/Paris** par votre fuseau horaire. La liste des fuseaux
> horaires est disponible [ici](http://php.net/manual/en/timezones.php).
Exécutez les commandes suivantes :
```shell
systemctl stop rh-php72-php-fpm
systemctl disable rh-php72-php-fpm
systemctl enable php-fpm
systemctl start php-fpm
```

### Mettre à jour une configuration Apache personnalisée

Cette section s'applique uniquement si vous avez personnalisé votre configuration Apache. Lors de la montée de version, le fichier de configuration Apache n'est pas mis à jour automatiquement : le nouveau fichier de configuration amené par le rpm ne remplace pas l'ancien. Vous devez reporter les changements manuellement dans votre fichier de configuration personnalisée.

Faites un diff entre l'ancien et le nouveau fichier de configuration Apache :

```
diff -u /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf.rpmnew
```

* **10-centreon.conf** (post montée de version) : ce fichier contient la configuration personnalisée. Il ne contient pas les nouveautés apportées par la montée de version, par exemple la chaîne **authentication** dans la directive **LocationMatch**
* **10-centreon.conf.rpmnew** (post montée de version) : ce fichier est fourni par le rpm; il contient la chaîne **authentication**, mais ne contient pas la configuration personnalisée.

Pour chaque différence entre les fichiers, évaluez si celle-ci doit être reportée du fichier **10-centreon.conf.rpmnew** au fichier **10-centreon.conf**.

Notamment, assurez-vous que votre configuration Apache personnalisée contient la directive suivante (incluant **authentication**).

```
<LocationMatch ^/centreon/(authentication|api/(latest|beta|v[0-9]+|v[0-9]+\.[0-9]+))/.*$>
    ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/api/index.php/$1
</LocationMatch>
```

### Actions complémentaires

#### Configurer l'accès à l'API

Si vous aviez une configuration personnalisée, le processus de mise à jour RPM
n'y a pas touché.

> Si vous utilisez le https, vous pouvez suivre
> [cette procédure](../administration/secure-platform.md#passer-le-serveur-web-en-https)

Vous devez donc ajouter la section d'accès à l'API dans votre fichier de
configuration apache : **/opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf**

Seules les lignes avec le symbole "+" doivent être prises en compte.

```diff
+Alias /centreon/api /usr/share/centreon
Alias /centreon /usr/share/centreon/www/

+<LocationMatch ^/centreon/(?!api/latest/|api/beta/|api/v[0-9]+/|api/v[0-9]+\.[0-9]+/)(.*\.php(/.*)?)$>
+  ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/www/$1
+</LocationMatch>

+<LocationMatch ^/centreon/(authentication|api/(latest|beta|v[0-9]+|v[0-9]+\.[0-9]+))/.*$>
+  ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/api/index.php/$1
+</LocationMatch>

ProxyTimeout 300

<IfModule mod_security2.c>
    # https://github.com/SpiderLabs/ModSecurity/issues/652
    SecRuleRemoveById 200003
</IfModule>

<Directory "/usr/share/centreon/www">
    ErrorDocument 404 ${base_uri}/index.html
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
associée](../service-mapping/upgrade.md) pour le mettre à jour.

### Actions post montée de version

#### Montée de version des extensions

Depuis le menu `Administration > Extensions > Gestionnaire`, mettez à jour
toutes les extensions, en commençant par les suivantes :

- License Manager,
- Plugin Packs Manager,
- Auto Discovery.

Vous pouvez alors mettre à jour toutes les autres extensions commerciales.

#### Démarrer le gestionnaire de tâches

Depuis la version 20.04, Centreon a changé son gestionnaire de tâches en
passant de *Centcore* à *Gorgone*.

Pour acter ce changement, réalisez les actions suivantes :

```shell
systemctl stop centcore
systemctl enable gorgoned
systemctl start gorgoned
systemctl disable centcore
```

Les statistiques Engine qui étaient collectées par *Centcore* le seront
maintenant par *Gorgone*

Il faut alors changer les droits sur les fichiers RRD de statistiques en
exécutant la commande suivante:

```shell
chown -R centreon-gorgone /var/lib/centreon/nagios-perf/*
```

#### Redémarrage des processus de supervision

Le composant Centreon Broker a changé le format de son fichier de configuration.

Il utilise maintenant JSON à la place de XML.

Pour être sur que Broker et que le module Broker de Engine utilisent les
nouveaux fichiers de configuration, suivez ces étapes :

1. Déployez la configuration du Central depuis l'interface web en suivant
[cette procédure](../monitoring/monitoring-servers/deploying-a-configuration.md),
2. Redémarrez Broker et Engine sur le serveur Central en exécutant la commande
suivante:

  ```shell
  systemctl restart cbd centengine
  ```

### Montée de version du serveur MariaDB

Les composants MariaDB peuvent maintenant être mis à jour.

> Référez vous à la documentation officielle de MariaDB pour en savoir
> d'avantage sur ce processus :
>
> https://mariadb.com/kb/en/upgrading-between-major-mariadb-versions/

#### Mettre à jour le dépôt Centreon

> Cette étape est nécessaire seulement si votre environnement comprend une base de données déportée.
> Si le serveur central Centreon et
> MariaDB sont hébergés sur le même serveur, sautez cette étape.

Exécutez la commande suivante sur le serveur de base de données dédié :

```shell
yum install -y https://yum.centreon.com/standard/22.04/el7/stable/noarch/RPMS/centreon-release-22.04-3.el7.centos.noarch.rpm
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
    rpm --erase --nodeps --verbose MariaDB-server MariaDB-client MariaDB-shared MariaDB-common
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

    ```shell
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

> En fin de mise à jour, la configuration doit être déployée depuis le serveur Central.

## Montée de version des collecteurs

Cette procédure concerne les collecteurs rattachés à un seveur central.

### Mise à jour des dépôts

Exécutez la commande suivante :

```shell
yum install -y https://yum.centreon.com/standard/22.04/el7/stable/noarch/RPMS/centreon-release-22.04-3.el7.centos.noarch.rpm
```

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

Déployez la configuration du Poller depuis l'interface web en suivant
[cette procédure](../monitoring/monitoring-servers/deploying-a-configuration.md),
et en choisissant la méthode *Redémarrer* pour le processus Engine

## Communications

Par défaut, la communication entre le serveur Central et les Pollers ou les
Remote Servers utilisera toujours SSH.

Considérez changer le protocole de communication en suivant la procédure
[Changer la communication de SSH à ZMQ](../monitoring/monitoring-servers/communications.md#changer-la-communication-de-ssh-a-zmq).

## Sécurisez votre plateforme

N'oubliez pas de sécuriser votre plateforme Centreon en suivant nos
[recommandations](../administration/secure-platform.md)
