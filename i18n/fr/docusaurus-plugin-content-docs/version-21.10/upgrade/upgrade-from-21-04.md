---
id: upgrade-from-21-04
title: Montée de version depuis Centreon 21.04
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


Ce chapitre décrit la procédure de montée de version de votre plate-forme
Centreon depuis la version 21.04 vers la version 21.10.

> Si vous souhaitez migrer votre serveur Centreon vers CentOS / Oracle Linux
> / RHEL 8, vous devez suivre la [procédure de migration](../migrate/migrate-from-20-x.md)

## Prérequis

### Sauvegarde

Avant toute chose, il est préférable de s’assurer de l’état et de la consistance
des sauvegardes de l’ensemble des serveurs centraux de votre plate-forme :

- Serveur Centreon Central,
- Serveur de gestion de base de données.

### Mettre à jour la clé de signature RPM

> Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon à jour depuis une version plus ancienne, vous devez suivre la [procédure de changement de clé](../security/key-rotation.md#installation-existante), afin de supprimer l'ancienne clé et d'installer la nouvelle.

## Montée de version du serveur Centreon Central

### Mise à jour des dépôts

Il est nécessaire de mettre à jour le dépôt Centreon.

Exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/21.10/el8/centreon-21.10.repo
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y yum-utils
yum-config-manager --add-repo https://packages.centreon.com/rpm-standard/21.10/el7/centreon-21.10.repo
```

</TabItem>
</Tabs>

> Si vous avez une licence offline, installez le dépôt des plugin packs correspondant à la version.
> Si vous avez une édition Business, installez également le dépôt Business.
> Vous pouvez en trouver l'adresse sur le [portail support Centreon](https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts).


### Installer le dépôt MariaDB

```shell
cd /tmp
curl -JO https://downloads.mariadb.com/MariaDB/mariadb_repo_setup
bash ./mariadb_repo_setup
sed -ri 's/1[0-1]\.[0-9]+/10.5/' /etc/yum.repos.d/mariadb.repo
rm -f ./mariadb_repo_setup
```

### Upgrade PHP

Centreon 21.10 utilise PHP en version 8.0.

<Tabs groupId="sync">
<TabItem value="RHEL 8" label="RHEL 8">

Vous devez tout d'abord installer les dépôts **remi** :
```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm
sudo subscription-manager repos --enable codeready-builder-for-rhel-8-x86_64-rpms

```
Ensuite, vous devez changer le flux PHP de la version 7.3 à 8.0 en exécutant les commandes suivantes et en répondant **y**
pour confirmer :
```shell
dnf module reset php
dnf module install php:remi-8.0
```

</TabItem>
<TabItem value="Oracle Linux 8" label="Oracle Linux 8">

Vous devez tout d'abord installer les dépôts **remi** :
```shell
dnf install -y dnf-plugins-core
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf install -y https://rpms.remirepo.net/enterprise/remi-release-8.rpm

```
Ensuite, vous devez changer le flux PHP de la version 7.3 à 8.0 en exécutant les commandes suivantes et en répondant **y**
pour confirmer :
```shell
dnf module reset php
dnf module install php:remi-8.0
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

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

</TabItem>
</Tabs>

### Montée de version de la solution Centreon

> Assurez-vous que tous les utilisateurs sont déconnectés avant de commencer
> la procédure de mise à jour.

Si vous avez des extensions Business installées, mettez à jour le dépôt business en 21.10.
Rendez-vous sur le [portail du support](https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts) pour en récupérer l'adresse.

Arrêter le processus Centreon Broker :
```shell
systemctl stop cbd
```

Supprimer les fichiers de rétention présents :
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

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

Exécutez les commandes suivantes :
```shell
systemctl enable php-fpm
systemctl restart php-fpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

Le fuseau horaire par défaut de PHP 8 doit être configuré. Exécutez la commande suivante :
```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

> Remplacez **Europe/Paris** par votre fuseau horaire. La liste des fuseaux
> horaires est disponible [ici](http://php.net/manual/en/timezones.php).

Exécutez les commandes suivantes :
```shell
systemctl stop rh-php73-php-fpm
systemctl disable rh-php73-php-fpm
systemctl enable php-fpm
systemctl start php-fpm
```

Ou, si votre version de PHP est la 7.4 :

```shell
systemctl stop rh-php74-php-fpm
systemctl disable rh-php74-php-fpm
systemctl enable php-fpm
systemctl start php-fpm
```

</TabItem>
</Tabs>

### Mettre à jour une configuration Apache personnalisée

Cette section s'applique uniquement si vous avez personnalisé votre configuration Apache.

<Tabs groupId="sync">
<TabItem value="RHEL / Oracle Linux 8" label="RHEL / Oracle Linux 8">

Lors de la montée de version, le fichier de configuration Apache n'est pas mis à jour automatiquement : le nouveau fichier de configuration amené par le rpm ne remplace pas l'ancien. Vous devez reporter les changements manuellement dans votre fichier de configuration personnalisée.

Faites un diff entre l'ancien et le nouveau fichier de configuration Apache :

```
diff -u /etc/httpd/conf.d/10-centreon.conf /etc/httpd/conf.d/10-centreon.conf.rpmnew
```

* **10-centreon.conf** (post montée de version) : ce fichier contient la configuration personnalisée. Il ne contient pas les nouveautés apportées par la montée de version.
* **10-centreon.conf.rpmnew** (post montée de version) : ce fichier est fourni par le rpm; il ne contient pas la configuration personnalisée.

Pour chaque différence entre les fichiers, évaluez si celle-ci doit être reportée du fichier **10-centreon.conf.rpmnew** au fichier **10-centreon.conf**.

Notamment, assurez-vous que votre configuration Apache personnalisée contient la directive suivante (incluant **authentication**).

```
<LocationMatch ^/centreon/(authentication|api/(latest|beta|v[0-9]+|v[0-9]+\.[0-9]+))/.*$>
    ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/api/index.php/$1
</LocationMatch>
```

Vérifiez qu'Apache est bien configuré, en exécutant la commande suivante :

```shell
apachectl configtest
```

Le résultat attendu est le suivant :

```shell
Syntax OK
```

Redémarrez Apache pour appliquer les modifications :

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
<TabItem value="CentOS 7" label="CentOS 7">

Lors de la montée de version, le fichier de configuration Apache n'est pas mis à jour automatiquement : le nouveau fichier de configuration amené par le rpm ne remplace pas l'ancien. Vous devez reporter les changements manuellement dans votre fichier de configuration personnalisée.

Faites un diff entre l'ancien et le nouveau fichier de configuration Apache :

```
diff -u /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf /opt/rh/httpd24/root/etc/httpd/conf.d/10-centreon.conf.rpmnew
```

* **10-centreon.conf** (post montée de version) : ce fichier contient la configuration personnalisée. Il ne contient pas les nouveautés apportées par la montée de version.
* **10-centreon.conf.rpmnew** (post montée de version) : ce fichier est fourni par le rpm; il ne contient pas la configuration personnalisée.

Pour chaque différence entre les fichiers, évaluez si celle-ci doit être reportée du fichier **10-centreon.conf.rpmnew** au fichier **10-centreon.conf**.

Notamment, assurez-vous que votre configuration Apache personnalisée contient la directive suivante (incluant **authentication**) :

```shell
<LocationMatch ^/centreon/(authentication|api/(latest|beta|v[0-9]+|v[0-9]+\.[0-9]+))/.*$>
    ProxyPassMatch fcgi://127.0.0.1:9042/usr/share/centreon/api/index.php/$1
</LocationMatch>
```

Vérifiez qu'Apache est bien configuré, en exécutant la commande suivante :
```shell
/opt/rh/httpd24/root/usr/sbin/apachectl configtest
```

Le résultat attendu est le suivant :

```shell
Syntax OK
```

Redémarrez Apache pour appliquer les modifications :

```shell
systemctl restart php-fpm httpd24-httpd
```

Puis vérifiez le statut :

```shell
systemctl status httpd24-httpd
```

Si tout est correct, vous devriez avoir quelque chose comme :

```shell
● httpd24-httpd.service - The Apache HTTP Server
   Loaded: loaded (/usr/lib/systemd/system/httpd24-httpd.service; enabled; vendor preset: disabled)
   Active: active (running) since mar. 2020-05-12 15:39:58 CEST; 25min ago
  Process: 31762 ExecStop=/opt/rh/httpd24/root/usr/sbin/httpd-scl-wrapper $OPTIONS -k graceful-stop (code=exited, status=0/SUCCESS)
 Main PID: 31786 (httpd)
   Status: "Total requests: 850; Idle/Busy workers 50/50;Requests/sec: 0.547; Bytes served/sec: 5.1KB/sec"
   CGroup: /system.slice/httpd24-httpd.service
           ├─ 1219 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31786 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31788 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31789 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31790 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31802 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31865 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31866 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31882 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           ├─31903 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
           └─32050 /opt/rh/httpd24/root/usr/sbin/httpd -DFOREGROUND
```

</TabItem>
</Tabs>

### Finalisation de la mise à jour

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

Avant de démarrer la montée de version via l'interface web, rechargez le serveur Apache avec la commande suivante :
```shell
systemctl reload httpd
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

Avant de démarrer la montée de version via l'interface web, rechargez le serveur Apache avec la commande suivante :
```shell
systemctl reload httpd24-httpd
```

</TabItem>
</Tabs>

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

1. Montée de version des extensions :

    Depuis le menu `Administration > Extensions > Gestionnaire`, mettez à jour
    toutes les extensions, en commençant par les suivantes :

    - License Manager,
    - Plugin Packs Manager,
    - Auto Discovery.

    Vous pouvez alors mettre à jour toutes les autres extensions commerciales.

2. [Déployer la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md).

3. Redémarrez les processus Centreon :

    ```
    systemctl restart cbd centengine centreontrapd gorgoned
    ```

## Montée de version des Remote Servers

Cette procédure est identique à la montée de version d'un serveur Centreon
Central.

> En fin de mise à jour, la configuration doit être déployée depuis le serveur Central.

## Montée de version des Pollers

### Mise à jour des dépôts

Exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/21.10/el8/centreon-21.10.repo
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y yum-utils
yum-config-manager --add-repo https://packages.centreon.com/rpm-standard/21.10/el7/centreon-21.10.repo
```

</TabItem>
</Tabs>

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
