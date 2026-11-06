---
id: upgrade
title: Monter de version l'extension
description: "Montez de version Centreon MBI : mettez à jour le dépôt, l'interface de l'extension et le serveur de reporting, puis la base de données."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Si l'un de vos serveurs tourne sur un système d'exploitation qui n'est [plus supporté](../installation/compatibility.md#système-dexploitation), vous ne pouvez pas monter de version MBI directement.
> Vous devez d'abord migrer votre plateforme vers un système d'exploitation supporté :
>
> - Pour le serveur central, consultez notre [introduction à la migration](../migrate/introduction.md).
> - Pour le serveur MBI, consultez [migrer l'extension](./migrate.md)

> Lors d'une montée de version < 18.10.x vers une version >= 18.10.x, vous devez :
>
> - Récupérer une nouvelle licence via le support Centreon
> - Vous assurer que votre serveur de reporting est [basé sur un OS supporté](../installation/compatibility.md). Si ce n'est
>   pas le cas, utilisez la procédure de [migration de votre serveur de
>   reporting](migrate.md)

La montée de version de Centreon MBI se fait en 4 étapes :

- Montée de version du dépôt RPM
- Mise à jour de Centreon MBI server (interface)
- Mise à jour du serveur de reporting
- Mise à jour de la base MariaDB

## Prérequis

### Monter de version le serveur central

Voir [Introduction à la montée de version](../upgrade/introduction.md).

## Étape 1 : Montée de version du paquet

Lors d'une montée de version majeure (ex: 20.10.x à 26.10.x) il faut en premier lieu mettre à jour
 le dépôt contenant les paquets. 

Vous trouverez ce dépôt depuis votre compte sur notre [platefome de support, à la page **Dépôts**](https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts).

Sur le serveur de reporting, vous devez également installer le dépôt standard 26.10 :

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/26.10/el9/centreon-26.10.repo
dnf clean all --enablerepo=*
```

## Étape 2 : Mettre à jour l'interface

1. Mettre à jour le paquet: se connecter sur le serveur Centreon et exécuter la commande suivante :

```shell
dnf clean all
dnf update centreon-bi-server
```

2. Mettre à jour l'interface: se connecter à l'interface web de Centreon et se rendre dans le menu
 **Administration > Extension > Manager** puis cliquer sur le bouton de mise à jour de l'extension et des widgets.

## Étape 3 : Mettre à jour le serveur de reporting

### Prérequis de la version Java

La version 26.10 nécessite Java 25. Lors de la mise à jour des paquets MBI, java (OpenJDK 25) sera automatiquement installé en tant que dépendance, si nécessaire. Le service **cbis** utilise toujours **/usr/lib/jvm/java-25-openjdk** sur Alma / RHEL / Oracle Linux et **/usr/lib/jvm/java-25-openjdk-amd64** sur Debian 13. Une fois la mise à jour terminée, vous pouvez supprimer les paquets Java 17 hérités de la version 25.10, si aucune autre application du serveur ne les utilise.

### Procédure de montée de version

Vous pouvez maintenant procéder à la montée de version :

1. Premièrement, arrêtez le service d'ordonnancement (CBIS) :

    ```shell
    systemctl stop cbis
    ```

2. Puis mettez à jour les paquets, en exécutant la commande suivante :

<Tabs groupId="os">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
dnf clean all
dnf update -y centreon-bi\* centreon-perl-libs-common
```
</TabItem>
</Tabs>

3. Enfin, redémarrez le service d'ordonnancement :

    ```shell
    systemctl start cbis
    ```

4. Démarrez et activez **gorgoned**:

   ```shell
   systemctl start gorgoned && systemctl enable gorgoned
   ```

## Étape 4 : mise à jour de la base de données

1. Arrêtez le service **cbis** :

    ```shell
    systemctl stop cbis
    ```

2. Voir [Mettre à jour MariaDB](../upgrade/upgrade-mariadb.md) ou [Mettre à jour MySQL](../upgrade/upgrade-mysql.md).

<!-- Sur Debian 13, si le paquet demande s'il faut remplacer `/etc/mysql/mariadb.conf.d/50-server.cnf`, conservez la version actuellement installée (répondez **N**). La version du paquet définit `bind-address = 127.0.0.1`, et le serveur central ne pourrait alors plus accéder à la base de données de reporting. -->

3. Vérifiez que MariaDB fonctionne :

    ```shell
    systemctl is-active mariadb
    ```

La commande doit renvoyer `active`. 
<!-- Sur Debian 13, vérifiez également que MariaDB écoute toujours sur toutes les interfaces :

```shell
grep "^bind-address" /etc/mysql/mariadb.conf.d/50-server.cnf
```

La valeur doit être `0.0.0.0`. Si elle est à `127.0.0.1`, remettez-la à `0.0.0.0` et redémarrez MariaDB avec `systemctl restart mariadb`. -->

4. Démarrez le service **cbis** :

    ```shell
    systemctl start cbis
    ```
