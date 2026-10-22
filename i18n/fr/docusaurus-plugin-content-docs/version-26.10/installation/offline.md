---
id: offline
title: Installation offline
description: "Installer Centreon sur des serveurs sans accès internet via un miroir local"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Cette procédure est actuellement indisponible pour les plateformes utilisant Debian.

Pour pouvoir installer Centreon sur des serveurs sans accès internet, créez une copie locale du dépôt Centreon sur un serveur avec accès internet, puis faites pointer vos serveurs Centreon sans accès internet sur celui-ci.

## Créer une copie locale du dépôt Centreon

1. Installez le dépôt sur votre serveur miroir.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/26.10/el9/centreon-26.10.repo
dnf clean all --enablerepo=*
dnf update
```

Puis récupérez la clé gpg pour les paquets :

```shell
rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/26.10/el10/centreon-26.10.repo
dnf clean all --enablerepo=*
dnf update
```

Puis récupérez la clé gpg pour les paquets :

```shell
rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
```

</TabItem>
</Tabs>

2. Créez un répertoire pour le dépôt local :

   ```shell
   mkdir -p /var/www/html/repos/centreon
   ```

3. Installez les paquets nécessaires :

   ```shell
   yum install yum-utils createrepo httpd
   ```

4. Synchronisez les dépôts :

   ```shell
   reposync -p /var/www/html/repos/centreon/ -r centreon-26.10-stable-noarch
   reposync -p /var/www/html/repos/centreon/ -r centreon-26.10-stable
   reposync -p /var/www/html/repos/centreon/ -r centreon-plugins-26.10-stable-noarch
   reposync -p /var/www/html/repos/centreon/ -r centreon-plugins-26.10-stable
   ```

5. Créez le dépôt :

   ```shell
   createrepo /var/www/html/repos/centreon/
   ```

6. Démarrez le serveur web :

   ```shell
   service httpd start
   ```

7. Sur votre serveur Centreon, éditez le fichier suivant :

   ```shell
   vi /etc/yum.repos.d/centreon.repo
   ```

   Ajoutez les lignes suivantes :

   ```shell
   [centreon]
   name=centreon
   baseurl=http://<mirror_ip_address>/repos/centreon
   gpgcheck=1
   enabled=1
   ```

   > Remplacez `<mirror_ip_address>` par la véritable adresse de votre dépôt local.

## Garder votre dépôt local à jour

Afin de synchroniser régulièrement votre miroir avec le dépôt Centreon, créez un fichier cron :

```shell
cd  /var/spool/cron
crontab -e
```

Les commandes suivantes programmeront une synchronisation tous les jours à 2h pour les dépôts **centreon-stable-noarch** et **centreon-plugins-26.10-stable-noarch** ainsi que tous les jours à 3h pour les dépôts **centreon-26.10-stable** et **centreon-plugins-26.10-stable**. Elle reconstruira également les metadonnées du dépôt tous les jours à 4h:

```shell
0 2 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-26.10-stable-noarch
0 3 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-26.10-stable
0 2 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-plugins-26.10-stable-noarch
0 3 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-plugins-26.10-stable
0 4 * * * createrepo --update /var/www/html/repos/centreon/
```
