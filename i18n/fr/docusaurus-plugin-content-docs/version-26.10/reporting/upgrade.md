---
id: upgrade
title: Monter de version l'extension
description: "Monter de version Centreon MBI vers une nouvelle version majeure"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Lors d'une montée de version < 18.10.x vers une version >= 18.10.x, vous devez:
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

<Tabs groupId="os" queryString>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/26.10/el9/centreon-26.10.repo
dnf clean all --enablerepo=*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/26.10/el10/centreon-26.10.repo
dnf clean all --enablerepo=*
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

> Si votre serveur de reporting est encore sous Debian 12, n'utilisez pas cette procédure. Suivez plutôt [Mettre à jour Centreon et Debian (12 vers 13) sur le même serveur](../migrate/upgrade-debian-in-place.md#step-11-upgrade-your-mbi-server-if-applicable) : cette procédure met à jour Debian et Centreon MBI en même temps et bascule les dépôts standard, business et plugins vers **trixie**.

Sur Debian 13, les dépôts doivent pointer vers **trixie**. La ligne du dépôt standard est :

```text
deb [signed-by=/etc/apt/keyrings/centreon.asc] https://packages.centreon.com/apt-standard/ trixie-26.10-stable main
```

La ligne du dépôt Business fournie sur le portail du support doit également utiliser **trixie**. Exécutez les commandes suivantes pour ajouter le dépôt standard :

```shell
install -d /etc/apt/keyrings
wget -O /etc/apt/keyrings/centreon.asc https://apt-key.centreon.com
echo "deb [signed-by=/etc/apt/keyrings/centreon.asc] https://packages.centreon.com/apt-standard/ $(lsb_release -sc)-26.10-stable main" | tee /etc/apt/sources.list.d/centreon-26.10-stable.list
apt update
```

Vérifiez que toutes les lignes des dépôts Centreon utilisent **trixie** :

```shell
grep -h "packages.centreon.com" /etc/apt/sources.list.d/*.list
```

</TabItem>
</Tabs>

## Étape 2 : Mettre à jour l'interface

1. Mettre à jour le paquet: se connecter sur le serveur Centreon et exécuter la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf clean all
dnf update centreon-bi-server
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt clean
apt update
apt install --only-upgrade centreon-bi-server
```

</TabItem>
</Tabs>

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

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
dnf clean all
dnf update -y centreon-bi\* centreon-perl-libs-common
```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

```shell
apt clean
apt update
apt install -y --only-upgrade centreon-bi-reporting-server centreon-perl-libs-common
```

Assurez-vous que le service **cron** est installé, activé et actif (il peut être absent sur les serveurs installés à l'origine sous Debian 12) :

```shell
apt install -y cron
systemctl enable --now cron
systemctl is-active cron
```

La dernière commande doit renvoyer `active`.

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

## Étape 4 : mise à jour de MariaDB

1. Arrêtez le service **cbis** :

    ```shell
    systemctl stop cbis
    ```

2. Voir [Mettre à jour MariaDB](../upgrade/upgrade-mariadb.md).

    Sur Debian 13, si le paquet demande s'il faut remplacer `/etc/mysql/mariadb.conf.d/50-server.cnf`, conservez la version actuellement installée (répondez **N**). La version du paquet définit `bind-address = 127.0.0.1`, et le serveur central ne pourrait alors plus accéder à la base de données de reporting.

3. Vérifiez que MariaDB fonctionne :

    ```shell
    systemctl is-active mariadb
    ```

    La commande doit renvoyer `active`. Sur Debian 13, vérifiez également que MariaDB écoute toujours sur toutes les interfaces :

    ```shell
    grep "^bind-address" /etc/mysql/mariadb.conf.d/50-server.cnf
    ```

    La valeur doit être `0.0.0.0`. Si elle est à `127.0.0.1`, remettez-la à `0.0.0.0` et redémarrez MariaDB avec `systemctl restart mariadb`.

4. Démarrez le service **cbis** :

    ```shell
    systemctl start cbis
    ```
