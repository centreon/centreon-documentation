---
id: offline
title: Installation offline
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Pour pouvoir installer Centreon sur des serveurs sans accès internet, créez une copie locale du dépôt Centreon sur un serveur avec accès internet, puis faites pointer vos serveurs Centreon sans accès internet sur celui-ci.

## Créer une copie locale du dépôt Centreon

1. Installez le dépôt sur votre serveur miroir.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/24.04/el8/centreon-24.04.repo
dnf clean all --enablerepo=*
dnf update
```

Puis récupérez la clé gpg pour les paquets :

```shell
rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/24.04/el9/centreon-24.04.repo
dnf clean all --enablerepo=*
dnf update
```

Puis récupérez la clé gpg pour les paquets :

```shell
rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

Pour installer le dépôt Centreon, exécutez la commande suivante :

```shell
echo "deb https://packages.centreon.com/apt-standard-24.04-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```

Puis importez la clé du dépôt :

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
apt update
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
   reposync -p /var/www/html/repos/centreon/ -r centreon-stable-noarch
   reposync -p /var/www/html/repos/centreon/ -r centreon-stable
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

Les commandes suivantes programmeront une synchronisation tous les jours à 2h pour le dépôt **centreon-stable-noarch** et tous les jours à 3h pour le dépôt **centreon-stable**:

```shell
* 2 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable-noarch
* 3 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable
```
