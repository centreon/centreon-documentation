---
id: secure-platform
title: Sécurisez votre plateforme
description: "Sécuriser Centreon avec SELinux, pare-feu, HTTPS et autres mesures"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce chapitre vous propose de sécuriser votre plateforme Centreon.

## Renforcez la sécurité des comptes utilisateurs

Après l'installation de Centreon, il est nécessaire de changer les mots de passe par défaut des utilisateurs suivants:

- root
- centreon
- centreon-engine
- centreon-broker
- centreon-gorgone

Pour cela, utilisez la commande suivante avec un compte privilégié (par exemple sudo) ou avec root (non recommandé - vous devez
avoir un utilisateur dédié) :

```shell
passwd <account_name>
```

De plus, il est important de vérifier que le compte Apache ne dispose pas de droits de connexion au terminal. Exécutez
la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
cat /etc/passwd | grep apache
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
cat /etc/passwd | grep apache
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
cat /etc/passwd | grep www-data
```

</TabItem>
</Tabs>

Vous devez avoir **/sbin/nologin** tel que :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
apache:x:48:48:Apache:/usr/share/httpd:/sbin/nologin
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
www-data:x:33:33:www-data:/var/www:/usr/sbin/nologin
```

</TabItem>
</Tabs>

> Pour rappel, la [liste des utilisateurs et des groupes se trouve ici](../installation/technical.md#utilisateurs-et-groupes).

## Activer SELinux

Centreon a récemment développé des règles SELinux afin de renforcer le contrôle
des composants par le système d'exploitation.

> Pour activer ces règles, suivez cette procédure. En cas de
> problème, il est possible de désactiver SELinux globalement et de nous envoyer
> vos commentaires afin d'améliorer nos règles sur
> notre plateforme communautaire [The Watch](https://thewatch.centreon.com/).

### Présentation de SELinux

Security Enhanced Linux (SELinux) fournit une couche supplémentaire de sécurité du système pour les environnements EL. SELinux répond
fondamentalement à la question: `Le <suject> peut-il faire cette <action> sur <object> ?`, Par exemple: un serveur Web
peut-il accéder aux fichiers des répertoires personnels des utilisateurs ?

La stratégie d'accès standard basée sur l'utilisateur, le groupe et d'autres autorisations, connue sous le nom de
contrôle d'accès discrétionnaire (DAC), ne permet pas aux administrateurs système de créer des stratégies de sécurité
complètes et précises, telles que la restriction d'applications spécifiques à l'affichage uniquement des fichiers
journaux, tout en permettant à d'autres applications d'ajouter de nouvelles données aux fichiers journaux.

SELinux implémente le contrôle d'accès obligatoire (MAC). Chaque processus et ressource système possède une étiquette
de sécurité spéciale appelée contexte SELinux. Un contexte SELinux, parfois appelé étiquette SELinux, est un identifiant
qui fait abstraction des détails au niveau du système et se concentre sur les propriétés de sécurité de l'entité. Non
seulement cela fournit un moyen cohérent de référencer des objets dans la stratégie SELinux, mais cela supprime également
toute ambiguïté qui peut être trouvée dans d'autres méthodes d'identification. Par exemple, un fichier peut avoir plusieurs
noms de chemin valides sur un système qui utilise des montages de liaison.

La politique SELinux utilise ces contextes dans une série de règles qui définissent comment les processus peuvent
interagir entre eux et avec les différentes ressources système. Par défaut, la stratégie n'autorise aucune interaction
à moins qu'une règle n'accorde explicitement l'accès.

Pour plus d'informations à propos de SELinux, visitez la [documentation Red Hat](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/using_selinux/getting-started-with-selinux_using-selinux)

### Activer SELinux

Par défaut, SELinux est désactivé lors du processus d'installation de Centreon et doit être réactivé par la suite pour des raisons de sécurité.

Pour réactiver SELinux, éditez le fichier **/etc/selinux/config** et changez la valeur avec les options suivantes :
- ``SELINUX=enforcing`` pour que la politique de sécurité SELinux soit appliquée en mode strict.
- ``SELINUX=permissive`` pour que les erreurs d’accès soient enregistrées dans les logs, mais l’accès ne sera pas bloqué.

Puis redémarrez votre serveur :
```shell
shutdown -r now
```

### Installer les paquets Centreon SELinux

Suivant le type de serveur, installer les paquets avec la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

<Tabs groupId="sync">
<TabItem value="Central / Remote Server" label="Central / Remote Server">

   ```shell
   dnf install centreon-common-selinux \
   centreon-web-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Poller" label="Poller">

   ```shell
   dnf install centreon-common-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Map server" label="Map server">

   ```shell
   dnf install centreon-map-selinux
   ```

</TabItem>
<TabItem value="MBI server" label="MBI server">

   ```shell
   dnf install centreon-mbi-selinux \
   centreon-gorgoned-selinux
   ```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

<Tabs groupId="sync">
<TabItem value="Central / Remote Server" label="Central / Remote Server">

   ```shell
   dnf install centreon-common-selinux \
   centreon-web-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Poller" label="Poller">

   ```shell
   dnf install centreon-common-selinux \
   centreon-broker-selinux \
   centreon-engine-selinux \
   centreon-gorgoned-selinux \
   centreon-plugins-selinux
   ```

</TabItem>
<TabItem value="Map server" label="Map server">

   ```shell
   dnf install centreon-map-selinux
   ```

</TabItem>
<TabItem value="MBI server" label="MBI server">

   ```shell
   dnf install centreon-mbi-selinux \
   centreon-gorgoned-selinux
   ```

</TabItem>
</Tabs>

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

SELinux ne concerne que les environnements EL.

</TabItem>
</Tabs>

Pour vérifier l'installation, exécutez la commande suivante :

```shell
semodule -l | grep centreon
```

Suivant votre type de serveur, vous pouvez voir :
```shell
centreon-broker	0.0.5
centreon-common	0.0.10
centreon-engine	0.0.8
centreon-gorgoned	0.0.3
centreon-plugins	0.0.2
centreon-web	0.0.8
```

### Auditer les journaux et activer SELinux

Avant d'activer SELinux en **mode renforcé**, vous devez vous assurer qu'aucune erreur n'apparaît à l'aide de la
commande suivante :

```shell
ausearch --start week-ago --message AVC,USER_AVC
```

Si des erreurs apparaissent, vous devez les analyser et décider si ces erreurs sont régulières et doivent être ajoutées
en plus des règles SELinux par défaut de Centreon. Pour ce faire, utilisez la commande suivante pour transformer
l'erreur en règles SELinux :

Pour analyser les logs :

```shell
ausearch --start week-ago --message AVC,USER_AVC | audit2why
ausearch --start week-ago --message AVC,USER_AVC | audit2allow --module <modulename>
```

Pour créer et installer les règles proposées :

```shell
ausearch --start week-ago --message AVC,USER_AVC | audit2allow -M <modulename>
semodule -i <modulename>.pp
```

Si après un certain temps, aucune erreur n'est présente, vous pouvez activer SELinux en mode renforcé en suivant cette
[procédure](#activer-selinux) avec le mode **enforcing**.

> N'hésitez pas à nous faire part de vos retours sur [Github](https://github.com/centreon/centreon).

## Sécuriser les fichiers de configuration

Changez les permissions des fichiers de configuration suivants:

```shell
chown centreon:centreon /etc/centreon/conf.pm
chmod 660 /etc/centreon/conf.pm
```

et

```shell
chown apache:apache /etc/centreon/centreon.conf.php
chmod 660 /etc/centreon/centreon.conf.php
```

## Sécuriser l'accès root au SGBD

Si vous ne l'avez pas déjà fait, définissez un mot de passe **root** pour la base de données (obligatoire) :

<Tabs groupId="sync">
<TabItem value="MariaDB" label="MariaDB"> 

```shell
mariadb-secure-installation
```

Plus d'informations sur la [documentation officielle MariaDB](https://mariadb.com/kb/en/mysql_secure_installation/).

</TabItem>
<TabItem value="MySQL" label="MySQL"> 

```shell
mysql_secure_installation
```

</TabItem>
</Tabs>

## Activer firewalld

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Installez firewalld:

```shell
dnf install firewalld
```

</TabItem>

<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

Installez firewalld:

```shell
dnf install firewalld
```

</TabItem>

<TabItem value="Debian 13" label="Debian 13">

Installez firewalld:

```shell
apt install firewalld
```

</TabItem>
</Tabs>

Activez firewalld:
```shell
systemctl enable firewalld
systemctl start firewalld
```

Ajoutez des règles pour firewalld :

> La liste des flux réseau nécessaires pour chaque type de serveur est définie
> [ici](../installation/technical.md#tableaux-des-flux-réseau).

<Tabs groupId="sync">
<TabItem value="Central / Remote Server" label="Central / Remote Server">

Exécutez les commandes suivantes (changez les numéros de port si vous avez personnalisé ceux-ci) :

```shell
# For default protocols
firewall-cmd --zone=public --add-service=ssh --permanent
firewall-cmd --zone=public --add-service=http --permanent
firewall-cmd --zone=public --add-service=https --permanent
firewall-cmd --zone=public --add-service=snmp --permanent
firewall-cmd --zone=public --add-service=snmptrap --permanent
# Centreon Gorgone
firewall-cmd --zone=public --add-port=5556/tcp --permanent
# Centreon Broker
firewall-cmd --zone=public --add-port=5669/tcp --permanent
```

</TabItem>
<TabItem value="Poller" label="Poller">

Exécutez les commandes suivantes :

```shell
# For default protocols
firewall-cmd --zone=public --add-service=ssh --permanent
firewall-cmd --zone=public --add-service=snmp --permanent
firewall-cmd --zone=public --add-service=snmptrap --permanent
# Centreon Gorgone
firewall-cmd --zone=public --add-port=5556/tcp --permanent
```

</TabItem>
</Tabs>

Une fois les règles ajoutées, rechargez firewalld:

```shell
firewall-cmd --reload
```

Pour vérifier que la configuration a été correctement appliquée, utilisez la commande suivante afin de lister toutes les règles actives :

```shell
firewall-cmd --list-all
```

Par exemple :

```shell
public (active)
  target: default
  icmp-block-inversion: no
  interfaces: eth0
  sources:
  services: http snmp snmptrap ssh
  ports: 5556/tcp 5669/tcp
  protocols:
  forward: no
  masquerade: no
  forward-ports:
  source-ports:
  icmp-blocks:
  rich rules:
```

## Activer fail2ban

Fail2ban est un framework de prévention contre les intrusions, écrit en Python.

Installez le module inotify:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install python3-inotify
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
dnf install python3-inotify
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt install python3-inotify
```

</TabItem>
</Tabs>

Installez fail2ban :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install epel-release
dnf install fail2ban fail2ban-systemd
```

Si SELinux est installé, mettez à jour les politiques SELinux :

```shell
dnf update -y selinux-policy*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
dnf install epel-release
dnf install fail2ban fail2ban-systemd
```

Si SELinux est installé, mettez à jour les politiques SELinux :

```shell
dnf update -y selinux-policy*
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt install fail2ban
```

</TabItem>
</Tabs>

Activez fail2ban :
```shell
systemctl enable fail2ban
systemctl start fail2ban 
```

Copiez le fichier de règles par défaut :
```shell
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Éditez le fichier `/etc/fail2ban/jail.local` et recherchez le bloc **[centreon]**, puis modifiez tel que :
```shell
[centreon]
port    = http,https
logpath = /var/log/centreon/login.log
backend  = pyinotify
```

Pour activer la règle **centreon** fail2ban, créez le fichier `/etc/fail2ban/jail.d/custom.conf` et ajoutez les lignes
suivantes :
```shell
[centreon]
enabled = true
findtime = 10m
bantime = 10m
maxretry = 3
```

> **maxretry** est le nombre d'authentifications échouées avant bannissement de l'adresse IP.
>
> **bantime** est la durée du bannissement.
>
> **findtime** est la plage de temps pour trouver les authentifications en échecs.

Puis redémarrez fail2ban pour charger votre règle :

```shell
systemctl restart fail2ban
```

Pour vérifier l'état de la règle **centreon**, vous pouvez exécuter :

```shell
fail2ban-client status centreon
```

Voici un exemple de résultat :

```shell
Status for the jail: centreon
|- Filter
|  |- Currently failed:	1
|  |- Total failed:	17
|  `- File list:	/var/log/centreon/login.log
`- Actions
   |- Currently banned:	0
   |- Total banned:	2
   `- Banned IP list:
```

> Pour plus d'informations, visitez le [site officiel](http://www.fail2ban.org).

## Sécuriser le serveur web en HTTPS

La [procédure d'installation standard à partir des paquets](../installation/installation-of-a-central-server/using-packages.md) vous permet d'installer votre serveur central en mode HTTPS. Si, pour une raison quelconque, vous avez choisi de l'installer en mode HTTP, ou si vous avez mis à niveau un serveur central HTTP et souhaitez maintenant passer en HTTPS, suivez cette procédure.

Il est fortement recommandé de passer en mode HTTPS. Utilisez un certificat émis par une autorité de confiance. Les certificats auto-signés ne doivent pas être utilisés en production.

- Si vous disposez déjà d'un certificat validé par une autorité, vous pouvez [activer dès maintenant le mode HTTPS sur votre serveur Apache](#activer-le-mode-https-sur-le-serveur-web).

- Si vous ne disposez pas d'un certificat validé par une autorité, vous pouvez en générer un sur des plateformes telles que [Let's Encrypt](https://letsencrypt.org/).

- Si, à des fins de test, vous souhaitez utiliser un certificat auto-signé, [vous pouvez suivre cett procédure pour en créer un](./self-signed-certificate.md) avant d'activer le mode HTTPS sur votre serveur. Si vous utilisez un certificat qui n'est pas fourni par une autorité de confiance, vous devrez importer le certificat de l'autorité de certification (CA) dans votre navigateur.

### Activer le mode HTTPS sur le serveur web

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

1. Installez le module SSL pour Apache :

```shell
dnf install mod_ssl openssl
```

2. Installez les certificats :

Installez vos certificats (**server.pem** et **server-key.pem** dans l'exemple suivant, et le certificat CA) en les copiant dans la configuration Apache :

```shell
cp server-key.pem /etc/pki/tls/private/
cp server.pem /etc/pki/tls/certs/
cp rootCA.pem /etc/pki/tls/certs/
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

1. Installez le module SSL pour Apache :

```shell
dnf install mod_ssl openssl
```

2. Installez les certificats :

Installez vos certificats (**server.pem** et **server-key.pem** dans l'exemple suivant, et le certificat CA) en les copiant dans la configuration Apache :

```shell
cp server-key.pem /etc/pki/tls/private/
cp server.pem /etc/pki/tls/certs/
cp rootCA.pem /etc/pki/tls/certs/
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
a2enmod ssl
systemctl restart apache2
```

2. Installez les certificats :

Installez vos certificats (**server.pem** et **server-key.pem** dans l'exemple suivant, et le certificat CA) en les copiant dans la configuration Apache :

```shell
cp server-key.pem /etc/ssl/private/
cp server.pem /etc/ssl/certs/
cp rootCA.pem /etc/ssl/certs/
```

</TabItem>
</Tabs>

3. Sauvegardez la configuration actuelle du serveur Apache pour Centreon :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
cp /etc/httpd/conf.d/10-centreon.conf{,.origin}
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
cp /etc/httpd/conf.d/10-centreon.conf{,.origin}
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
cp /etc/apache2/sites-available/centreon.conf{,.origin}
```

</TabItem>
</Tabs>

4. Éditer la configuration Apache pour Centreon :

> Centreon propose un fichier de configuration d'exemple HTTPS disponible dans le répertoire :
> **/usr/share/centreon/examples/centreon.apache.https.conf**

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Éditez le fichier **/etc/httpd/conf.d/10-centreon.conf** en ajoutant la section **\<VirtualHost *:443\>**.

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

Éditez le fichier **/etc/httpd/conf.d/10-centreon.conf** en ajoutant la section **\<VirtualHost *:443\>**.

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

Éditez le fichier **/etc/apache2/sites-available/centreon.conf** en ajoutant la section **\<VirtualHost *:443\>**.

</TabItem>
</Tabs>

Voici un exemple de ce à quoi le fichier peut ressembler avant d'insérer le bloc :

```apacheconf
Define base_uri "/centreon"
Define install_dir "/usr/share/centreon"

ServerTokens Prod

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
</VirtualHost>
```

Voici un exemple de ce à quoi le fichier peut ressembler une fois le bloc inséré :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```apacheconf
Define base_uri "/centreon"
Define install_dir "/usr/share/centreon"

ServerTokens Prod

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
</VirtualHost>

<VirtualHost *:443>
    #####################
    # SSL configuration #
    #####################
    SSLEngine On
    SSLProtocol All -SSLv3 -SSLv2 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-DSS-AES256-GCM-SHA384:DHE-DSS-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-GCM-SHA256:!aNULL:!eNULL:!LOW:!3DES:!MD5:!EXP:!PSK:!DSS:!RC4:!SEED:!ADH:!IDEA
    SSLHonorCipherOrder On
    SSLCompression Off
    SSLCertificateFile /etc/pki/tls/certs/server.pem
    SSLCertificateKeyFile /etc/pki/tls/private/server-key.pem

    Header set X-Frame-Options: "sameorigin"
    Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;SameSite=Strict
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    ServerSignature Off
    TraceEnable Off

    Alias ${base_uri}/api ${install_dir}
    Alias ${base_uri} ${install_dir}/www/

    <IfModule mod_brotli.c>
        AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript application/json
    </IfModule>

    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json

    <LocationMatch ^\${base_uri}/?(?!api/latest/|api/beta/|api/v[0-9]+/|api/v[0-9]+\.[0-9]+/)(.*\.php(/.*)?)$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/www/$1"
    </LocationMatch>

    <LocationMatch ^\${base_uri}/?(authentication|api/(latest|beta|v[0-9]+|v[0-9]+\.[0-9]+))/.*$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/api/index.php/$1"
    </LocationMatch>

    ProxyTimeout 300
    ErrorDocument 404 ${base_uri}/index.html
    Options -Indexes +FollowSymLinks

    <IfModule mod_security2.c>
        # https://github.com/SpiderLabs/ModSecurity/issues/652
        SecRuleRemoveById 200003
    </IfModule>

    <Directory "${install_dir}/www">
        DirectoryIndex index.php
        AllowOverride none
        Require all granted
        FallbackResource ${base_uri}/index.html
    </Directory>

    <Directory "${install_dir}/api">
        AllowOverride none
        Require all granted
    </Directory>

    <If "'${base_uri}' != '/'">
        RedirectMatch ^/$ ${base_uri}
    </If>
</VirtualHost>
```

> N'oubliez pas de changer les directives **SSLCertificateFile** et **SSLCertificateKeyFile** avec les chemins d'accès vers votre propre clé et son certificat.

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```apacheconf
Define base_uri "/centreon"
Define install_dir "/usr/share/centreon"

ServerTokens Prod

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
</VirtualHost>

<VirtualHost *:443>
    #####################
    # SSL configuration #
    #####################
    SSLEngine On
    SSLProtocol All -SSLv3 -SSLv2 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-DSS-AES256-GCM-SHA384:DHE-DSS-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-GCM-SHA256:!aNULL:!eNULL:!LOW:!3DES:!MD5:!EXP:!PSK:!DSS:!RC4:!SEED:!ADH:!IDEA
    SSLHonorCipherOrder On
    SSLCompression Off
    SSLCertificateFile /etc/pki/tls/certs/server.pem
    SSLCertificateKeyFile /etc/pki/tls/private/server-key.pem

    Header set X-Frame-Options: "sameorigin"
    Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;SameSite=Strict
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    ServerSignature Off
    TraceEnable Off

    Alias ${base_uri}/api ${install_dir}
    Alias ${base_uri} ${install_dir}/www/

    <IfModule mod_brotli.c>
        AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript application/json
    </IfModule>

    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json

    <LocationMatch ^\${base_uri}/?(?!api/latest/|api/beta/|api/v[0-9]+/|api/v[0-9]+\.[0-9]+/)(.*\.php(/.*)?)$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/www/$1"
    </LocationMatch>

    <LocationMatch ^\${base_uri}/?(authentication|api/(latest|beta|v[0-9]+|v[0-9]+\.[0-9]+))/.*$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/api/index.php/$1"
    </LocationMatch>

    ProxyTimeout 300
    ErrorDocument 404 ${base_uri}/index.html
    Options -Indexes +FollowSymLinks

    <IfModule mod_security2.c>
        # https://github.com/SpiderLabs/ModSecurity/issues/652
        SecRuleRemoveById 200003
    </IfModule>

    <Directory "${install_dir}/www">
        DirectoryIndex index.php
        AllowOverride none
        Require all granted
        FallbackResource ${base_uri}/index.html
    </Directory>

    <Directory "${install_dir}/api">
        AllowOverride none
        Require all granted
    </Directory>

    <If "'${base_uri}' != '/'">
        RedirectMatch ^/$ ${base_uri}
    </If>
</VirtualHost>
```

> N'oubliez pas de changer les directives **SSLCertificateFile** et **SSLCertificateKeyFile** avec les chemins d'accès vers votre propre clé et son certificat.

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```apacheconf
Define base_uri "/centreon"
Define install_dir "/usr/share/centreon"

ServerTokens Prod

<VirtualHost *:80>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
</VirtualHost>

<VirtualHost *:443>
    #####################
    # SSL configuration #
    #####################
    SSLEngine On
    SSLProtocol All -SSLv3 -SSLv2 -TLSv1 -TLSv1.1
    SSLCipherSuite ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-DSS-AES256-GCM-SHA384:DHE-DSS-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-ECDSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-RSA-AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-GCM-SHA256:!aNULL:!eNULL:!LOW:!3DES:!MD5:!EXP:!PSK:!DSS:!RC4:!SEED:!ADH:!IDEA
    SSLHonorCipherOrder On
    SSLCompression Off
    SSLCertificateFile /etc/ssl/certs/server.pem
    SSLCertificateKeyFile /etc/ssl/private/server-key.pem

    Header set X-Frame-Options: "sameorigin"
    Header always edit Set-Cookie ^(.*)$ $1;HttpOnly;SameSite=Strict
    Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
    ServerSignature Off
    TraceEnable Off

    Alias ${base_uri}/api ${install_dir}
    Alias ${base_uri} ${install_dir}/www/

    <IfModule mod_brotli.c>
        AddOutputFilterByType BROTLI_COMPRESS text/html text/plain text/xml text/css text/javascript application/javascript application/json
    </IfModule>

    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json

    <LocationMatch ^\${base_uri}/?(?!api/latest/|api/beta/|api/v[0-9]+/|api/v[0-9]+\.[0-9]+/)(.*\.php(/.*)?)$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/www/$1"
    </LocationMatch>

    <LocationMatch ^\${base_uri}/?(authentication|api/(latest|beta|v[0-9]+|v[0-9]+\.[0-9]+))/.*$>
        ProxyPassMatch "fcgi://127.0.0.1:9042${install_dir}/api/index.php/$1"
    </LocationMatch>

    ProxyTimeout 300
    ErrorDocument 404 ${base_uri}/index.html
    Options -Indexes +FollowSymLinks

    <IfModule mod_security2.c>
        # https://github.com/SpiderLabs/ModSecurity/issues/652
        SecRuleRemoveById 200003
    </IfModule>

    <Directory "${install_dir}/www">
        DirectoryIndex index.php
        AllowOverride none
        Require all granted
        FallbackResource ${base_uri}/index.html
    </Directory>

    <Directory "${install_dir}/api">
        AllowOverride none
        Require all granted
    </Directory>

    <If "'${base_uri}' != '/'">
        RedirectMatch ^/$ ${base_uri}
    </If>
</VirtualHost>
```

> N'oubliez pas de changer les directives **SSLCertificateFile** et **SSLCertificateKeyFile** avec les chemins d'accès vers votre propre clé et son certificat.

</TabItem>
</Tabs>

5. Activez les flags HttpOnly / Secure et cacher la signature du serveur Apache :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Éditez le fichier **/etc/php.d/50-centreon.ini** :

* Assurez-vous que le paramètre `expose_php` est désactivé :

  ```phpconf
  expose_php = Off
  ```

* Ajoutez le chemin d'accès au certificat CA qui a été utilisé pour signer le certificat du serveur :
  
  ```text
  openssl.cafile=/etc/pki/tls/certs/rootCA.pem
  curl.cainfo=/etc/pki/tls/certs/rootCA.pem
  ```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

Éditez le fichier **/etc/php.d/50-centreon.ini** :

* Assurez-vous que le paramètre `expose_php` est désactivé :

  ```phpconf
  expose_php = Off
  ```

* Ajoutez le chemin d'accès au certificat CA qui a été utilisé pour signer le certificat du serveur :
  
  ```text
  openssl.cafile=/etc/pki/tls/certs/rootCA.pem
  curl.cainfo=/etc/pki/tls/certs/rootCA.pem
  ```
  
</TabItem>
<TabItem value="Debian 13" label="Debian 13">

Éditez le fichier **/etc/php/8.4/mods-available/centreon.ini** et ajoutez les lignes suivantes :

```text
openssl.cafile=/etc/ssl/certs/rootCA.pem
curl.cainfo=/etc/ssl/certs/rootCA.pem
```

</TabItem>
</Tabs>

6. Cachez le répertoire par défaut **/icons** :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Éditez le fichier **/etc/httpd/conf.d/autoindex.conf** en commentant la ligne suivante :

```apacheconf
#Alias /icons/ "/usr/share/httpd/icons/"
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

Éditez le fichier **/etc/httpd/conf.d/autoindex.conf** en commentant la ligne suivante :

```apacheconf
#Alias /icons/ "/usr/share/httpd/icons/"
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

> Le répertoire est caché par défaut.

</TabItem>
</Tabs>

7. Vous pouvez effectuer ce test vérifiant qu'Apache est bien configuré, en exécutant la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```apacheconf
apachectl configtest
```

Le résultat attendu est le suivant :

```apacheconf
Syntax OK
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```apacheconf
apachectl configtest
```

Le résultat attendu est le suivant :

```apacheconf
Syntax OK
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```apacheconf
apache2ctl configtest
```

Le résultat attendu est le suivant :

```apacheconf
Syntax OK
```

</TabItem>
</Tabs>

8. Redémarrez le serveur web Apache et PHP pour prendre la configuration en compte :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl restart php-fpm httpd
```

Puis vérifiez le statut :

```shell
systemctl status httpd
```

Si tout est correct, vous devriez avoir quelque chose comme :

```shell
● httpd.service - The Apache HTTP Server
   Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; vendor preset: disabled)
  Drop-In: /usr/lib/systemd/system/httpd.service.d
           └─php-fpm.conf
   Active: active (running) since Tue 2020-10-27 12:49:42 GMT; 2h 35min ago
     Docs: man:httpd.service(8)
 Main PID: 1483 (httpd)
   Status: "Total requests: 446; Idle/Busy workers 100/0;Requests/sec: 0.0479; Bytes served/sec: 443 B/sec"
    Tasks: 278 (limit: 5032)
   Memory: 39.6M
   CGroup: /system.slice/httpd.service
           ├─1483 /usr/sbin/httpd -DFOREGROUND
           ├─1484 /usr/sbin/httpd -DFOREGROUND
           ├─1485 /usr/sbin/httpd -DFOREGROUND
           ├─1486 /usr/sbin/httpd -DFOREGROUND
           ├─1487 /usr/sbin/httpd -DFOREGROUND
           └─1887 /usr/sbin/httpd -DFOREGROUND

```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
systemctl restart php-fpm httpd
```

Puis vérifiez le statut :

```shell
systemctl status httpd
```

Si tout est correct, vous devriez avoir quelque chose comme :

```shell
● httpd.service - The Apache HTTP Server
   Loaded: loaded (/usr/lib/systemd/system/httpd.service; enabled; vendor preset: disabled)
  Drop-In: /usr/lib/systemd/system/httpd.service.d
           └─php-fpm.conf
   Active: active (running) since Tue 2020-10-27 12:49:42 GMT; 2h 35min ago
     Docs: man:httpd.service(8)
 Main PID: 1483 (httpd)
   Status: "Total requests: 446; Idle/Busy workers 100/0;Requests/sec: 0.0479; Bytes served/sec: 443 B/sec"
    Tasks: 278 (limit: 5032)
   Memory: 39.6M
   CGroup: /system.slice/httpd.service
           ├─1483 /usr/sbin/httpd -DFOREGROUND
           ├─1484 /usr/sbin/httpd -DFOREGROUND
           ├─1485 /usr/sbin/httpd -DFOREGROUND
           ├─1486 /usr/sbin/httpd -DFOREGROUND
           ├─1487 /usr/sbin/httpd -DFOREGROUND
           └─1887 /usr/sbin/httpd -DFOREGROUND

```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
systemctl restart php8.4-fpm apache2
```

Puis vérifiez le statut :

```shell
systemctl status apache2
```

Si tout est correct, vous devriez avoir quelque chose comme :

```shell
● apache2.service - The Apache HTTP Server
    Loaded: loaded (/lib/systemd/system/apache2.service; enabled; vendor pres>
     Active: active (running) since Tue 2022-08-09 05:01:36 UTC; 3h 56min ago
       Docs: https://httpd.apache.org/docs/2.4/
   Main PID: 518 (apache2)
      Tasks: 11 (limit: 2356)
     Memory: 18.1M
        CPU: 1.491s
     CGroup: /system.slice/apache2.service
             ├─ 518 /usr/sbin/apache2 -k start
             ├─1252 /usr/sbin/apache2 -k start
             ├─1254 /usr/sbin/apache2 -k start
             ├─1472 /usr/sbin/apache2 -k start
             ├─3857 /usr/sbin/apache2 -k start
             ├─3858 /usr/sbin/apache2 -k start
             ├─3859 /usr/sbin/apache2 -k start
             ├─3860 /usr/sbin/apache2 -k start
             ├─3876 /usr/sbin/apache2 -k start
             ├─6261 /usr/sbin/apache2 -k start
             └─6509 /usr/sbin/apache2 -k start
```

</TabItem>
</Tabs>

Vous pouvez maintenant accéder à votre plateforme via votre navigateur en mode HTTPS.

> Une fois que votre serveur web est configuré en mode HTTPS et si vous avez un serveur MAP sur votre plateforme, vous devez définir l'adresse `centreon.url=https://<server-address>` dans le fichier **/etc/centreon-map/map-config.properties** pour utiliser HTTPS au lieu de HTTP. Sinon, les navigateurs web récents peuvent bloquer la communication entre les deux serveurs. Voir la procédure détaillée [ici](../graph-views/secure-your-map-platform.md#configurer-httpstls-sur-le-serveur-map).

9. Configuration API de Gorgone

Éditez le fichier **/etc/centreon-gorgone/config.d/31-centreon-api.yaml** en remplaçant **127.0.0.1** 
par le FQDN de votre serveur central :

```text
gorgone:
  tpapi:
    - name: centreonv2
      base_url: "https://centreon7.localdomain/centreon/api/latest/"
      username: "centreon-gorgone"
      password: "bpltc4aY"
    - name: clapi
      username: "centreon-gorgone"
      password: "bpltc4aY"
```

Redémarrez le daemon Gorgone :

```shell
systemctl restart gorgoned
```

Puis vérifiez le statut :

```shell
systemctl status gorgoned
```

Si tout est correct, vous devriez avoir quelque chose comme :

```shell
● gorgoned.service - Centreon Gorgone
   Loaded: loaded (/etc/systemd/system/gorgoned.service; enabled; vendor preset: disabled)
   Active: active (running) since Mon 2023-03-06 15:58:10 CET; 27min ago
 Main PID: 1791096 (perl)
    Tasks: 124 (limit: 23040)
   Memory: 595.3M
   CGroup: /system.slice/gorgoned.service
           ├─1791096 /usr/bin/perl /usr/bin/gorgoned --config=/etc/centreon-gorgone/config.yaml --logfile=/var/log/centreon-gorgone/gorgoned.log --severity=info
           ├─1791109 gorgone-statistics
           ├─1791112 gorgone-legacycmd
           ├─1791117 gorgone-engine
           ├─1791118 gorgone-audit
           ├─1791125 gorgone-nodes
           ├─1791138 gorgone-action
           ├─1791151 gorgone-cron
           ├─1791158 gorgone-dbcleaner
           ├─1791159 gorgone-autodiscovery
           ├─1791166 gorgone-httpserver
           ├─1791180 gorgone-proxy
           ├─1791181 gorgone-proxy
           ├─1791182 gorgone-proxy
           ├─1791189 gorgone-proxy
           └─1791190 gorgone-proxy

mars 06 15:58:10 ito-central systemd[1]: gorgoned.service: Succeeded.
mars 06 15:58:10 ito-central systemd[1]: Stopped Centreon Gorgone.
mars 06 15:58:10 ito-central systemd[1]: Started Centreon Gorgone.
```

Vous devriez voir la ligne suivante dans les logs de Gorgone **/var/log/centreon-gorgone/gorgoned.log** :

```text
2023-03-06 15:58:12 - INFO - [autodiscovery] -class- host discovery - sync started
```

## URI personnalisée

Il est possible de personnaliser l'URI de connexion à votre plateforme Centreon. Par exemple, **/centreon** peut être remplacé par **/monitoring**.

> Au moins un niveau de chemin est obligatoire.

Pour personnaliser l'URI de Centreon :

1. Éditez le fichier de configuration Apache pour Centreon :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
vi /etc/httpd/conf.d/10-centreon.conf
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
vi /etc/httpd/conf.d/10-centreon.conf
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
vi /etc/apache2/sites-available/centreon.conf
```

</TabItem>
</Tabs>

2. Remplacez le chemin **/centreon** par le chemin désiré :

```apache
Define base_uri "/centreon"
```

3. Redémarrez Apache :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
systemctl restart apache2
```

</TabItem>
</Tabs>

## Activation du http2

Il est possible d'activer le protocole http2 pour améliorer les performances réseaux de Centreon.

Pour utiliser http2, vous devez suivre les étapes suivantes:

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

1. [Configurer le https pour Centreon](#sécuriser-le-serveur-web-en-https).

2. Installez le module nghttp2:

```shell
dnf install nghttp2
```

3. Activez le protocole **http2** dans **/etc/httpd/conf.d/10-centreon.conf** :

```apacheconf
...
<VirtualHost *:443>
    Protocols h2 http/1.1
    ...
</VirtualHost>
...
```

4. Modifiez la méthode utilisée par apache pour le module multi-processus dans **/etc/httpd/conf.modules.d/00-mpm.conf** :

Identifiez la ligne suivante et commentez-la en ajoutant le caractère "#" comme ci-dessous :

```shell
#LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
```

Identifiez la ligne suivante et décommentez-la en supprimant le caractère "#" comme ci-dessous :

```shell
LoadModule mpm_event_module modules/mod_mpm_event.so
```

5. Redémarrez le processus Apache pour prendre en compte la nouvelle configuration :

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

1. [Configurer le https pour Centreon](#sécuriser-le-serveur-web-en-https).

2. Installez le module nghttp2:

```shell
dnf install nghttp2
```

3. Activez le protocole **http2** dans **/etc/httpd/conf.d/10-centreon.conf** :

```apacheconf
...
<VirtualHost *:443>
    Protocols h2 http/1.1
    ...
</VirtualHost>
...
```

4. Modifiez la méthode utilisée par apache pour le module multi-processus dans **/etc/httpd/conf.modules.d/00-mpm.conf** :

Identifiez la ligne suivante et commentez-la en ajoutant le caractère "#" comme ci-dessous :

```shell
#LoadModule mpm_prefork_module modules/mod_mpm_prefork.so
```

Identifiez la ligne suivante et décommentez-la en supprimant le caractère "#" comme ci-dessous :

```shell
LoadModule mpm_event_module modules/mod_mpm_event.so
```

5. Redémarrez le processus Apache pour prendre en compte la nouvelle configuration :

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

1. [Configurer le https pour Centreon](#sécuriser-le-serveur-web-en-https).

2. Installez le module nghttp2:

```shell
apt install nghttp2
```

3. Activez le protocole **http2** dans **/etc/apache2/sites-available/centreon.conf** :

```apacheconf
...
<VirtualHost *:443>
    Protocols h2 http/1.1
    ...
</VirtualHost>
...
```

4. Exécutez les commandes suivantes :

```shell
a2dismod php8.4
a2dismod mpm_prefork
a2enmod mpm_event
a2enmod http2
```

5. Redémarrez le processus Apache pour prendre en compte la nouvelle configuration :

```shell
systemctl restart apache2
```

</TabItem>
</Tabs>

## Activer mod_security

**mod_security** est un module de sécurité pour Apache qui agit comme un pare-feu d'applications web (WAF).

1. Installez **mod_security** :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install mod_security
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
dnf install mod_security
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt install libapache2-mod-security2
a2enmod security2
```

</TabItem>
</Tabs>

2. Éditez le fichier suivant et adaptez les paramètres selon votre choix :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
/etc/httpd/conf.d/mod_security.conf
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
/etc/httpd/conf.d/mod_security.conf
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
/etc/modsecurity/modsecurity.conf
```

</TabItem>
</Tabs>

Nous recommandons la configuration suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```text
    SecResponseBodyAccess Off
    SecDebugLog /var/log/httpd/modsec_debug.log
    SecDebugLogLevel 0
    SecAuditEngine RelevantOnly
    SecAuditLogRelevantStatus "^(?:5|4(?!01|4))"
    SecAuditLogParts ABJDEFHZ
    SecAuditLogType Serial
    SecAuditLog /var/log/httpd/modsec_audit.log
    SecArgumentSeparator &
    SecCookieFormat 0
    SecTmpDir /var/lib/mod_security
    SecDataDir /var/lib/mod_security
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```text
    SecResponseBodyAccess Off
    SecDebugLog /var/log/httpd/modsec_debug.log
    SecDebugLogLevel 0
    SecAuditEngine RelevantOnly
    SecAuditLogRelevantStatus "^(?:5|4(?!01|4))"
    SecAuditLogParts ABJDEFHZ
    SecAuditLogType Serial
    SecAuditLog /var/log/httpd/modsec_audit.log
    SecArgumentSeparator &
    SecCookieFormat 0
    SecTmpDir /var/lib/mod_security
    SecDataDir /var/lib/mod_security
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```text
    SecResponseBodyAccess Off
    SecDebugLog /var/log/apache2/modsec_debug.log
    SecDebugLogLevel 0
    SecAuditEngine RelevantOnly
    SecAuditLogRelevantStatus "^(?:5|4(?!01|4))"
    SecAuditLogParts ABJDEFHZ
    SecAuditLogType Serial
    SecAuditLog /var/log/apache2/modsec_audit.log
    SecArgumentSeparator &
    SecCookieFormat 0
    SecTmpDir /var/lib/mod_security
    SecDataDir /var/lib/mod_security
```

</TabItem>
</Tabs>

3. Redémarrez Apache :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
systemctl restart httpd
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
systemctl restart apache2
```

</TabItem>
</Tabs>

## Authentification des utilisateurs

Centreon propose plusieurs méthodes pour authentifier les utilisateurs :

- [localement](../connect/loginpwd.md) (MySQL)
- [LDAP](./parameters/ldap.md)
- [Generic SSO](../connect/sso.md) ou [OpenId Connect](../connect/openid.md)

## Créer des profils d'utilisateurs

Centreon propose de gérer les autorisations d'accès aux différents menus, ressources et actions possibles sur ces ressources
via la gestion de [liste de contrôle d'accès](./access-control-lists.md).

## Communications sécurisées entre les serveurs

Il est fortement recommandé de sécuriser les communications entre les différents serveurs de la plateforme Centreon si
certains serveurs ne sont pas dans un réseau sécurisé.

> Le tableau des flux réseau est disponible [ici](../installation/technical.md#tableaux-des-flux-réseau).

### Communication Centreon Broker

#### Centreon Broker et pare-feu

Parfois, il n'est pas possible d'initialiser le flux Centreon Broker depuis le collecteur (ou Remote Server)
vers le serveur Centreon Central ou le Remote Server.
[Voir la configuration suivante pour inverser le flux](../monitoring/monitoring-servers/advanced-configuration.md#centreon-broker-et-pare-feu).

#### Authentification des flux Centreon Broker

Si vous devez authentifier des collecteurs qui envoient des données, vous pouvez utiliser le mécanisme d'authentification
Centreon Broker, qui est basé sur des certificats X.509.
[Voir la configuration suivante pour authentifier les collecteurs](../monitoring/monitoring-servers/advanced-configuration.md#authentification-avec-centreon-broker).

#### Compressez et chiffrez la communication Centreon Broker

Il est également possible de compresser et de chiffrer la communication de Centreon Broker. Allez dans le menu
`Configuration > Pollers > Broker configuration`, modifiez votre configuration Centreon Broker et activez les entrées
et sorties **IPv4**:

- Enable TLS encryption: Auto
- Enable negotiation: Yes
- Compression (zlib): Auto

### Communication Centreon Gorgone

Par défaut, les communications ZMQ sont sécurisées, à la fois celles externes (avec le collecteur) et celles internes (entre processus gorgone).

Cependant, l'API gorgone HTTP n'est pas sécurisée par défaut. Seul localhost peut communiquer avec gorgone, mais il n'utilise pas SSL.

Vous pouvez [configurer SSL](https://github.com/centreon/centreon-collect/blob/develop/gorgone/docs/modules/core/httpserver.md) via le fichier **/etc/centreon-gorgone/config.d/40-gorgoned.yaml**.

Puis configurez gorgone à la page **Administration > Paramètres > Gorgone**.

Le fichier **/etc/centreon-gorgone/config.d/whitelist.conf.d/centreon.yaml** (sur votre serveur central, vos serveurs distants et vos collecteurs) contient les listes blanches pour Gorgone. Si vous souhaitez personnaliser les commandes autorisées, n'éditez pas ce fichier. Créez un nouveau fichier dans le même dossier, par exemple **/etc/centreon-gorgone/config.d/whitelist.conf.d/custom.yaml**.

## Gestion de l'information et des événements de sécurité (SIEM)

Les journaux des événements Centreon sont disponibles dans les répertoires suivants :

| Répertoires des journaux  | Central server | Remote Server | Poller | Centreon Map server | Centreon MBI Server |
|---------------------------|----------------|---------------|--------|---------------------|---------------------|
| /var/log/centreon         | X              | X             |        |                     |                     |
| /var/log/centreon-broker  | X              | X             | X      |                     |                     |
| /var/log/centreon-engine  | X              | X             | X      |                     |                     |
| /var/log/centreon-gorgone | X              | X             | X      |                     |                     |
| /var/log/centreon-bi      | X              | X             |        |                     |                     |
| /var/log/centreon-map     | X              | X             |        | X                   | X                   |

> De plus, toutes les actions de modification de la configuration de Centreon effectuées par les utilisateurs sont
> disponibles via le menu [**Administration > Logs**](./logging-configuration-changes.md).

## Sauvegardez votre plateforme

Centreon propose de sauvegarder la configuration de la plateforme. Pour ce faire, accédez au menu 
[**Administration > Parameters > Backup**](./backup.md).

## Utiliser un antivirus sur une plateforme Centreon

Cette section s'applique si vous utilisez un logiciel antivirus/EDR pour analyser une plateforme Centreon Infra Monitoring (serveur central, serveur distant, poller, serveur MAP ou MBI). Cela inclut les modules Business.

Voici une liste des services et répertoires qui doivent être exclus de l'analyse antivirus.

### Services à exclure

* centengine
* cbd
* centreontrapd
* gorgoned
* php-fpm (php8.4-fpm sous Debian)
* httpd (apache2 sous Debian)

Si vous utilisez l'un de ces connecteurs, excluez les services suivants :

* vmware: centreon_vmware
* as400: centreon-as400

### Répertoires à exclure

* /etc/centreon*
* /var/log/centreon*
* /var/lib/centreon*
* /var/cache/centreon*
* /usr/share/centreon*
* /var/spool/centreon*
* /var/lib/mysql
