---
id: offline
title: Installation offline
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Pour pouvoir installer Centreon sur des serveurs sans accès internet, créez une copie locale du dépôt Centreon sur un serveur avec accès internet, puis faites pointer vos serveurs Centreon sans accès internet sur celui-ci.

## Créer une copie locale du dépôt Centreon

1. Installez le dépôt Centreon sur votre serveur miroir.

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/22.04/el8/centreon-22.04.repo
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y yum-utils
yum-config-manager --add-repo https://packages.centreon.com/rpm-standard/22.04/el7/centreon-22.04.repo
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
echo "deb https://packages.centreon.com/apt-standard-22.04-stable $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon.list
echo "deb https://packages.centreon.com/apt-plugins-stable/ $(lsb_release -sc) main" | tee /etc/apt/sources.list.d/centreon-plugins.list
```

</TabItem>
</Tabs>

2. Récupérez la clé gpg pour les paquets :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
rpm --import https://yum-gpg.centreon.com/RPM-GPG-KEY-CES
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
wget -O- https://apt-key.centreon.com | gpg --dearmor | tee /etc/apt/trusted.gpg.d/centreon.gpg > /dev/null 2>&1
```

</TabItem>
</Tabs>

3. Créez un répertoire pour le dépôt local :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

   ```shell
   mkdir -p /var/www/html/repos/centreon
   ```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

   ```shell
   mkdir -p /var/www/html/repos/centreon
   ```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
mkdir /var/www/html/centreon
```

</TabItem>
</Tabs>

4. Installez les paquets nécessaires :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
yum install yum-utils createrepo httpd
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install yum-utils createrepo httpd
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
apt install apache2 debmirror
```

</TabItem>
</Tabs>

5. Synchronisez les dépôts :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
reposync -p /var/www/html/repos/centreon/ --repo centreon-stable-noarch
reposync -p /var/www/html/repos/centreon/ --repo centreon-stable
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
reposync -p /var/www/html/repos/centreon/ --repo centreon-stable-noarch
reposync -p /var/www/html/repos/centreon/ --repo centreon-stable
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
debmirror \
-a amd64 \
--no-source \
-s main \
-h apt.centreon.com \
-d bullseye \
-r /repository/22.04 \
--keyring=/etc/apt/trusted.gpg.d/centreon.gpg \
--method=https \
/var/centreon-mirror/22.04
```

</TabItem>
</Tabs>

6. Exécutez les commandes suivantes :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Créez le dépôt :
```shell
createrepo /var/www/html/repos/centreon/
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

Créez le dépôt :

```shell
createrepo /var/www/html/repos/centreon/
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

Rendez disponible via Apache le dépôt synchronisé localement :

```shell
ln -s /var/centreon-mirror/22.04 /var/www/html/centreon/22.04
```

</TabItem>
</Tabs>

7. Démarrez le serveur web :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8"> 

```shell
service httpd start
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
service httpd24-httpd start
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
systemctl start apache2
```

</TabItem>
</Tabs>

8. Sur votre serveur Centreon, éditez le fichier suivant :


<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8"> 

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

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

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

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```shell
vi /etc/apt/sources.list.d/centreon.list
```

Ajoutez l'adresse du dépôt miorir et, si besoin, commentez l'adresse du dépôt officiel Centreon :

```shell
deb http://`<mirror_ip_address>`/centreon/22.04 bullseye main
#deb https://apt.centreon.com/repository/22.04/ bullseye main
```

> Remplacez `<mirror_ip_address>` par la véritable adresse de votre dépôt local.

</TabItem>
</Tabs>

## Garder votre dépôt local à jour

1. Afin de synchroniser régulièrement votre miroir avec le dépôt Centreon, créez un fichier cron :

   ```shell
   cd  /var/spool/cron
   crontab -e
   ```

2. Programmer la synchronisation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

Les commandes suivantes programmeront une synchronisation chaque jour à 2h pour le dépôt **centreon-stable-noarch**, et chaque jour à 3h pour le dépôt **centreon-stable** :

```shell
* 2 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable-noarch
* 3 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

Les commandes suivantes programmeront une synchronisation chaque jour à 2h pour le dépôt **centreon-stable-noarch**, et chaque jour à 3h pour le dépôt **centreon-stable** :

```shell
* 2 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable-noarch
* 3 * * * reposync -p /var/www/html/repos/centreon/ -r centreon-stable
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

La commande suivante programmera une synchronisation chaque jour à 1h :

```shell
* 01 * * * debmirror -a amd64 --no-source -s main -h apt.centreon.com -d bullseye -r /repository/22.04 --keyring=/etc/apt/trusted.gpg.d/centreon.gpg --method=https /var/centreon-mirror/22.04 >> /var/log/debmirror.log
```

</TabItem>
</Tabs>
