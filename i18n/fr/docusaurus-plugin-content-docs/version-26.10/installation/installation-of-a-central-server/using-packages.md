---
id: using-packages
title: À partir des paquets (serveur central)
description: "Installer un serveur central Centreon à partir des paquets RPM ou DEB"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DatabaseRepository from '../_database-repository.mdx';
import DatabaseLocalInstall from '../_database-local-install.mdx';
import DatabaseRemoteInstall from '../_database-remote-install.mdx';
import DatabaseEnableRestart from '../_database-enable-restart.mdx';
import DatabaseTlsConf from '../_database-tls-conf.mdx';
import InstallCommon from '../_install-common.mdx';
import TlsCertificates from '../_tls-certificates.mdx';
import InterfaceTlsConf from '../_interface-tls-conf.mdx';
import CentreonRepository from '../_centreon-repository.mdx';
import DependenciesRepository from '../_dependencies-repository.mdx';

Vous devez exécuter la procédure d'installation en tant qu'utilisateur privilégié.

> Lorsque vous exécutez une commande, vérifiez les messages obtenus. En cas de message d'erreur, arrêtez la procédure et corrigez le problème.

Nous vous recommandons de chiffrer les communications du serveur web comme celles de la base de données, même si ces étapes ne sont pas nécessaires au fonctionnement de Centreon. La procédure ci-dessous met en place ce chiffrement. Dans certains cas (par exemple pour réaliser des tests rapides), vous pouvez préférer une installation non sécurisée : il vous suffit alors d'ignorer l'[étape 3 : Mettre en place la configuration TLS](#étape-3--mettre-en-place-la-configuration-tls).

<InstallCommon />

### Installer les dépôts

#### Dépendances

<DependenciesRepository />

#### Dépôt de base de données

<DatabaseRepository />

#### Dépôt Centreon

<CentreonRepository />

## Étape 2 : Installer le serveur central et la base de données

Vous pouvez installer le serveur central avec une base de données locale au serveur, ou
avec une base de données distante sur un serveur dédié.

<Tabs groupId="sync">
  <TabItem value="Avec une base de données locale" label="Avec une base de données locale">
    <DatabaseLocalInstall />
  </TabItem>
  <TabItem value="Avec une base de données distante" label="Avec une base de données distante">
    <DatabaseRemoteInstall />
  </TabItem>
</Tabs>

## Étape 3 : Mettre en place la configuration TLS

### Préparer les certificats

<TlsCertificates />

### Pour la base de données

<DatabaseTlsConf />

### Pour l'interface web

Cette section décrit comment mettre en place une connexion TLS entre le serveur central et son interface web.

<InterfaceTlsConf />

## Étape 4 : Configuration

### Modifier le nom du serveur (facultatif)

Si vous souhaitez changer le nom d'hôte du serveur, utilisez la commande suivante, en remplaçant **new-server-name** par le nom de votre choix :

```shell
hostnamectl set-hostname new-server-name
```

Exemple :

```shell
hostnamectl set-hostname central
```

### Définir le fuseau horaire de PHP

Vous devez définir le fuseau horaire de PHP.

> Remplacez **Europe/Paris** par votre fuseau horaire. Vous pouvez trouver la liste des
> fuseaux horaires pris en charge [ici](http://php.net/manual/en/timezones.php).

<Tabs groupId="os">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

Exécutez la commande suivante en tant que `root` :

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

Après avoir enregistré le fichier, redémarrez le service PHP-FPM :

```shell
systemctl restart php-fpm
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

Exécutez la commande suivante en tant que `root` :

```shell
echo "date.timezone = Europe/Paris" >> /etc/php.d/50-centreon.ini
```

Après avoir enregistré le fichier, redémarrez le service PHP-FPM :

```shell
systemctl restart php-fpm
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
echo "date.timezone = Europe/Paris" >> /etc/php/8.4/mods-available/centreon.ini
```

> Le fuseau horaire de PHP a été défini pendant l'installation à partir du fuseau horaire configuré sur le système d'exploitation.

Après avoir enregistré le fichier, redémarrez le service PHP8.4-FPM :

```shell
systemctl restart php8.4-fpm
```

</TabItem>
</Tabs>

### Démarrage des services au démarrage du système

Pour que les services démarrent automatiquement au démarrage du système, exécutez les commandes suivantes
sur le serveur central :

<Tabs groupId="os">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
systemctl enable crond
systemctl start crond
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
systemctl enable php-fpm httpd centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
systemctl enable --now crond
systemctl start crond
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
systemctl enable apache2 php8.4-fpm centreon cbd centengine gorgoned snmptrapd centreontrapd snmpd
systemctl enable --now cron
```

</TabItem>
</Tabs>

Exécutez ensuite la commande suivante (sur le serveur central si vous utilisez une base de données locale, ou sur votre serveur de base de données distant) :

<DatabaseEnableRestart />

## Étape 5 : Installation web

1. Démarrez le serveur Apache avec la
commande suivante :

<Tabs groupId="os">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
systemctl start httpd
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
systemctl start httpd
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
systemctl start apache2
```

</TabItem>
</Tabs>

2. Pour terminer l'installation, suivez la procédure
d'[installation web](../web-and-post-installation.md#installation-web).
