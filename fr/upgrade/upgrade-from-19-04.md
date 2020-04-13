---
id: upgrade-from-19-04
title: Montée de version depuis Centreon 19.04
---

Ce chapitre décrit la procédure de montée de version de votre plate-forme
Centreon depuis la version 19.04 vers la version 20.04.

## Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance
des sauvegardes de l’ensemble des serveurs centraux de votre plate-forme :

- Serveur Centreon Central,
- Serveur de gestion de base de données.

## Montée de version du serveur Centreon Central

### Mise à jour des dépôts

Il est nécessaire de mettre à jour le dépôt Centreon.

Exécutez la commande suivante :

```shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

### Montée de version de la solution Centreon

> Centreon 20.04 utilise **MariaDB 10.3**.
>
> Le processus suivant met seulement à jour les composants Centreon pour le
> moment.
>
> MariaDB sera mis à jour après.

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

Centreon 20.04 utilise un nouveau paquet PHP.

Le fuseau horaire par défaut de PHP 7 doit être configuré. Executez la commande
suivante :

```shell
echo "date.timezone = Europe/Paris" > /etc/opt/rh/rh-php72/php.d/php-timezone.ini
```

> Changez **Europe/Paris** par votre fuseau horaire.

> N'oubliez pas de reporter les configurations spécifiques qui peuvent être
> configurées dans /etc/opt/rh/rh-php71/php.ini et/ou
> /etc/opt/rh/rh-php71/php-fpm.d/centreon.conf

Réalisez les actions suivantes :

```shell
systemctl disable rh-php71-php-fpm
systemctl stop rh-php71-php-fpm
systemctl enable rh-php72-php-fpm
systemctl start rh-php72-php-fpm
systemctl restart httpd24-httpd
```

#### Configurer l'accès à l'API

Si vous aviez une configuration personnalisée, le processus de mise à jour RPM
n'y a pas touché.

> Si vous utilisez le https, vous pouvez suivre
> [cette procédure](../administration/accessing-to-centreon-ui.html)

Vous devez donc ajouter la section d'accès à l'API
dans votre fichier de configuration apache : **/opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf**

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

+    RewriteRule ^index\.html$ - [L]
+    RewriteCond %{REQUEST_FILENAME} !-f
+    RewriteCond %{REQUEST_FILENAME} !-d
+    RewriteRule . /index.html [L]
+    ErrorDocument 404 /centreon/index.html

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

Connectez-vous à l'interface web Centreon pour démarrer le processus de mise à
jour :

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
associée](../service-mapping/upgrade.html) pour le mettre à jour.

### Actions post montée de version

#### Démarrer le gestionnaire de tâches

Centreon 20.04 a changé son gestionnaire de tâches en passant de *Centcore* à
*Gorgone*.

Pour acter ce changement, réalisez les actions suivantes :

```shell
systemctl stop centcore
systemctl enable gorgoned
systemctl start gorgoned
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
[cette procedure](../monitoring/monitoring-servers/deploying-a-configuration.html),
2. Redémarrer Broker et Engine sur le serveur Central en exécutant la commande
suivante:

    ```shell
    systemctl restart cbd centengine
    ```

### Montée de version du serveur MariaDB

Les composants MariaDB peuvent maintenant être mis à jour.

Reférez vous à la documentation officiel de MariaDB pour réaliser cette
montée de version.

> Sachez que MariaDB recommande vivement de monter en version le serveur par
> chacune des versions majeures.
>
> Vous devez donc mettre à jour de la version 10.1 vers 10.2 puis 10.2 vers
> 10.3.
>
> Centreon ne met à disposition que MariaDB 10.3.
>
> Consultez :
>
> - https://mariadb.com/kb/en/upgrading-from-mariadb-101-to-mariadb-102/#how-to-upgrade
> - https://mariadb.com/kb/en/upgrading-from-mariadb-102-to-mariadb-103/#how-to-upgrade

## Montée de version des Remote Servers

Cette procédure est identique à la montée de version d'un serveur Centreon Central.

## Montée de version des Collecteurs

### Mise à jour des dépôts

Exécutez la commande suivante :

```shell
yum install -y http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
```

### Montée de version de la solution Centreon

Mettez à jour l'ensemble des composants :

```shell
yum update centreon\*
```

> Acceptez les nouvelles clés GPG des dépôts si nécessaire.

### Actions post montée de version

Du fait du nouveau format de configuration du module Broker de Engine, la
configuration doit être re-déployée.

Déployer la configuration du Poller depuis l'interface web en suivant
[cette procedure](../monitoring/monitoring-servers/deploying-a-configuration.html), et en choisissant la méthode
*Redémarrer* pour le processus Engine

## Communications

Par défaut, la communication entre le serveur Central et les Pollers ou les
Remote Servers utilisera toujours SSH.

Considérez changer le protocole de communication en suivant la procédure
[Changer la communication de SSH à ZMQ](../monitoring/monitoring-servers/communications.html#changer-la-communication-de-ssh-a-zmq).
