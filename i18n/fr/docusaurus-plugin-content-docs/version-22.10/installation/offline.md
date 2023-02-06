---
id: offline
title: Installation offline
---

Pour pouvoir installer Centreon sur des serveurs sans accès internet, créez une copie locale du dépôt Centreon sur un serveur avec accès internet, puis faites pointer vos serveurs Centreon sans accès internet sur celui-ci.

## Créer une copie locale du dépôt Centreon

1. Installez **centreon-release** sur votre serveur miroir.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y https://yum.centreon.com/standard/22.10/el8/stable/noarch/RPMS/centreon-release-22.10-1.el8.noarch.rpm
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y https://yum.centreon.com/standard/22.10/el7/stable/noarch/RPMS/centreon-release-22.10-1.el7.centos.noarch.rpm
```

</TabItem>
</Tabs>

2. Récupérez la clé gpg pour les paquets :

   ```shell
   rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
   ```

3. Créez un répertoire pour le dépôt local :

   ```shell
   mkdir -p /var/www/html/repos/centreon
   ```

4. Installez les paquets nécessaires :

   ```shell
   yum install reposync createrepo httpd
   ```

5. Synchronisez les dépôts :

   ```shell
   reposync -p /var/www/html/repos/centreon/ -r centreon-stable-noarch
   reposync -p /var/www/html/repos/centreon/ -r centreon-stable
   ```

6. Créez le dépôt :

   ```shell
   createrepo /var/www/html/repos/centreon/
   ```

7. Démarrez le serveur web :

   ```shell
   service httpd start
   ```

8. Sur votre serveur Centreon, éditez le fichier suivant :

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

Les commandes suivantes programmeront une synchronisation tous les jours à 2h pour le dépôt **centreon-stable-noarch** et tous les jours à 3h pour le dépôt **centreon-stable**:

```shell
* 2 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable-noarch
* 3 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable
```
