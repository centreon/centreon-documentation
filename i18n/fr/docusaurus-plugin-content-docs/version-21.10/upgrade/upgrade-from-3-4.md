---
id: upgrade-from-3-4
title: Montée de version depuis Centreon 3.4
---

Ce chapitre décrit la procédure de montée de version de votre plate-forme
Centreon depuis la version 3.4 (Centreon Web 2.8) vers la version 21.10.

> Cette procédure ne s'applique que pour une plate-forme Centreon installée à
> partir des dépôts Centreon 3.4 sur des distributions **Red Hat / CentOS en
> version 7**.
>
> Si cela n'est pas le cas, se référer à la
> [procédure de migration](../migrate/migrate-from-3-4.md).

## Prérequis

### Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance
des sauvegardes de l’ensemble des serveurs centraux de votre plate-forme :

- Serveur Centreon Central,
- Serveur de gestion de base de données.

### Mettre à jour la clé de signature RPM

> Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon à jour depuis une version plus ancienne, vous devez suivre la [procédure de changement de clé](../security/key-rotation.md#installation-existante), afin de supprimer l'ancienne clé et d'installer la nouvelle.

## Montée de version du serveur Centreon central

> Depuis la version 21.04, Centreon utilise **MariaDB 10.5**.
>
> Le processus suivant met seulement à jour les composants Centreon pour le
> moment.
>
> MariaDB sera mis à jour après.

### Installation des dépôts

#### Dépôt *Software collections* de Red Hat

Il est nécessaire de mettre à jour le dépôt Centreon.

Exécutez la commande suivante :

```shell
yum install -y yum-utils
yum-config-manager --add-repo https://packages.centreon.com/rpm-standard/21.10/el7/centreon-21.10.repo
```

> Si vous êtes dans un environnement CentOS, il faut installer les dépôts de
> *Software Collections* avec la commande suivante :
>
> ```shell
> yum install -y centos-release-scl-rh
> ```

> Si vous avez une licence offline, installez le dépôt des plugin packs correspondant à la version.
> Si vous avez une édition Business, installez également le dépôt Business.
> Vous pouvez en trouver l'adresse sur le [portail support Centreon](https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts).

### Montée de version de PHP

Centreon 21.10 utilise PHP en version 8.0.

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

Si vous avez des extensions Business installées, mettez à jour le dépôt business en 21.10.
Rendez-vous sur le [portail du support](https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts) pour en récupérer l'adresse.

Arrêtez le processus Centreon Broker :
```shell
systemctl stop cbd
```

Supprimez les fichiers de rétention présents :
```shell
rm /var/lib/centreon-broker/* -f
```

Mettez à jour le cache de yum :

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
systemctl enable php-fpm
systemctl start php-fpm
```

Exécutez la commande suivante :
```shell
systemctl status php-fpm
```
Il est possible que vous rencontriez l'erreur suivante:
```shell
Failed loading /usr/lib64/php/modules/ZendGuardLoader.so: /usr/lib64/php/modules/ZendGuardLoader.so: undefined symbol: _zval_ptr_dtor
```
Si c'est le cas, exécutez cette commande :
```shell
yum remove php-zend-guard-loader
```

### Mettre à jour une configuration Apache personnalisée

Cette section s'applique uniquement si vous avez personnalisé votre configuration Apache. Lors de la montée de version, le fichier de configuration Apache n'est pas mis à jour automatiquement : le nouveau fichier de configuration amené par le rpm ne remplace pas l'ancien. Vous devez reporter les changements manuellement dans votre fichier de configuration personnalisée.

Faites un diff entre l'ancien et le nouveau fichier de configuration Apache :

```
diff -u /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf.rpmnew
```

* **10-centreon.conf** (post montée de version) : ce fichier contient la configuration personnalisée. Il ne contient pas les nouveautés apportées par la version 21.10, par exemple la chaîne **authentication** dans la directive **LocationMatch**
* **10-centreon.conf.rpmnew** (post montée de version) : ce fichier est fourni par le rpm; il contient la chaîne **authentication**, mais ne contient pas la configuration personnalisée.

Pour chaque différence entre les fichiers, évaluez si celle-ci doit être reportée du fichier **10-centreon.conf.rpmnew** au fichier **10-centreon.conf**.

Notamment, assurez-vous que votre configuration Apache personnalisée contient la directive suivante (incluant **authentication**).

```
<LocationMatch ^/centreon/(authentication|api/(latest|beta|v[0-9]+|v[0-9]+\.[0-9]+))/.*$>
    ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/api/index.php/$1
</LocationMatch>
```


### Actions complémentaires

#### Mise à jour du serveur Web Apache

Depuis la version 20.04, Centreon utilise un nouveau paquet pour le serveur Web Apache.

> Si vous avez modifié la configuration, reportez celle-ci dans le répertoire
> **/opt/rh/httpd24/root/etc/httpd/conf.d/**.

Si SSL était activé, installer le paquet suivant :

```shell
yum install httpd24-mod_ssl
```

Puis réalisez les actions suivantes :

```shell
systemctl disable httpd
systemctl stop httpd
systemctl enable httpd24-httpd
systemctl start httpd24-httpd
```

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

### Synchronisation des plugins

> La macro de ressource $USER1$ de Centreon 21.10 pointe à présent sur
> /usr/lib64/nagios/plugins.

Afin de résoudre cette situation, lancez les commandes suivantes:

```shell
mv /usr/lib64/nagios/plugins/* /usr/lib/nagios/plugins/
rmdir /usr/lib64/nagios/plugins/
ln -s -t /usr/lib64/nagios/ /usr/lib/nagios/plugins/
```

De cette façon un lien symbolique est créé :

```shell
$ ls -alt /usr/lib64/nagios/
lrwxrwxrwx   1 root root      24  1 nov.  17:59 plugins -> /usr/lib/nagios/plugins/
-rwxr-xr-x   1 root root 1711288  6 avril  2018 cbmod.so
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

#### Suppression du "Nom du processus de bascule" dans la configuration des outputs broker

> Dans les anciennes versions de Centreon, le mécanisme de rétention qui stockait les données issues de la supervision dans des fichiers temporaires en cas de coupure réseau nécessitait d'être configuré manuellement.
> Depuis Centreon 3.4, cela n'est plus nécessaire, et dans les versions plus récentes, **cela peut même bloquer le fonctionnement de Broker**.


Depuis le menu **Configuration > Collecteurs > Configuration de Centreon Broker**, supprimez la valeur du paramètre **Nom du processus de bascule (failover)** pour chacun des outputs de chacune des entrées de configuration de Centreon Broker.

#### Redémarrage des processus de supervision

Le composant Centreon Broker a changé le format de son fichier de configuration.

Il utilise maintenant JSON à la place de XML.

Pour être sur que Broker et que le module Broker de Engine utilisent les nouveaux
fichiers de configuration, suivez ces étapes :

1. Déployer la configuration du Central depuis l'interface web en suivant
[cette procedure](../monitoring/monitoring-servers/deploying-a-configuration.md),
2. Redémarrer Broker et Engine sur le serveur Central en exécutant la commande
suivante:

  ```shell
  systemctl restart cbd centengine
  ```

### Montée de version du serveur MariaDB

Les composants MariaDB peuvent maintenant être mis à jour.

> Référez-vous à la documentation officielle de MariaDB pour en savoir
> d'avantage sur ce processus :
>
> https://mariadb.com/kb/en/upgrading-between-major-mariadb-versions/

> Si vous utilisez une version plus ancienne que MariaDB 10.1, veuillez d'abord
> mettre à jour vers la version 10.1

#### Mettre à jour le dépôt Centreon

> Cette étape est nécessaire seulement si votre environnement comprend une base de données déportée.
> Si le serveur central Centreon et
> MariaDB sont hébergés sur le même serveur, sautez cette étape.

Exécutez la commande suivante sur le serveur de base de données dédié :

```shell
yum install -y yum-utils
yum-config-manager --add-repo https://packages.centreon.com/rpm-standard/21.10/el7/centreon-21.10.repo
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

## Montée de version des Pollers

### Mise à jour des dépôts

Exécutez la commande suivante :

```shell
yum install -y yum-utils
yum-config-manager --add-repo https://packages.centreon.com/rpm-standard/21.10/el7/centreon-21.10.repo
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

Redémarrez **centengine**:

```shell
systemctl restart centengine
```

### Actions post montée de version

Du fait du nouveau format de configuration du module Broker de Engine, la
configuration doit être re-déployée.

Déployer la configuration du Poller depuis l'interface web en suivant
[cette procedure](../monitoring/monitoring-servers/deploying-a-configuration.md),
et en choisissant la méthode *Redémarrer* pour le processus Engine

## Migrer Centreon Poller Display vers Remote Server

Si la plateforme a des Collecteurs avec le module Poller Display, reférez vous à
la procédure [Migration d'une plate-forme avec Poller
Display](../migrate/poller-display-to-remote-server.md).

## Communications

Par défaut, la communication entre le serveur Central et les Pollers ou les
Remote Servers utilisera toujours SSH.

Considérez changer le protocole de communication en suivant la procédure
[Changer la communication de SSH à ZMQ](../monitoring/monitoring-servers/communications.md#changer-la-communication-de-ssh-a-zmq).

## Sécurisez votre plateforme

N'oubliez pas de sécuriser votre plateforme Centreon en suivant nos
[recommandations](../administration/secure-platform.md)
