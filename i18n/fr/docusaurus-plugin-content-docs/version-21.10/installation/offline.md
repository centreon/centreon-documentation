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
dnf install -y dnf-plugins-core
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
</Tabs>
