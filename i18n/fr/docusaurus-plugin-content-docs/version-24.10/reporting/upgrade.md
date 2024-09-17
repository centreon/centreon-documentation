---
id: upgrade
title: Monter de version l'extension
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Lors d'une montée de version < 18.10.x vers une version >= 18.10.x, vous devez:
>
> - Récupérer une nouvelle licence via le support Centreon
> - Vous assurer que votre serveur de reporting est basé sur CentOS 7. Si ce n'est
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

### Mettre à jour la clé de signature RPM

Sous EL8, pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon à jour depuis une version plus ancienne, vous devez suivre la [procédure de changement de clé](../security/key-rotation.md#installation-existante), afin de supprimer l'ancienne clé et d'installer la nouvelle.

## Étape 1 : Montée de version du paquet

Lors d'une montée de version majeure (ex: 20.10.x à 24.04.x) il faut en premier lieu mettre à jour
 le dépôt contenant les paquets. 

Vous trouverez ce dépôt depuis votre compte sur notre [platefome de support, à la page **Dépôts**](https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts).

## Étape 2 : Mettre à jour l'interface

1. Mettre à jour le paquet: se connecter sur le serveur Centreon et exécuter la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf clean all
dnf update centreon-bi-server
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf clean all
dnf update centreon-bi-server
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
apt clean
apt install --only-upgrade centreon-bi-server
```

</TabItem>
</Tabs>

2. Mettre à jour l'interface: se connecter à l'interface web de Centreon et se rendre dans le menu
 **Administration > Extension > Manager** puis cliquer sur le bouton de mise à jour de l'extension et des widgets.

## Étape 3 : Mettre à jour le serveur de reporting

### Prérequis de la version Java
  
  > Assurez-vous qu'une version de Java 17 (ou 18) est installée avant de commencer la procédure.
  
  - Pour vérifier quelle version de Java est installée, entrez la commande suivante :
  
  ```shell
  java -version
  ```
  
  - Pour une mise à jour de Java en version 17 (ou 18), allez sur la [page officielle de téléchargement d'Oracle](https://www.oracle.com/java/technologies/downloads/#java17).

  - Si plusieurs versions de Java sont installées, vous devez activer la bonne version. Affichez les versions installées avec la commande suivante puis sélectionnez la version 17 (ou 18) :
  
  ```shell
  sudo update-alternatives --config java
  ```
  
  Puis redémarrez le service :

  ```shell
  systemctl restart cbis
  ```

### Procédure de montée de version

Vous pouvez maintenant procéder à la montée de version :

1. Premièrement, arrêtez le service d'ordonnancement (CBIS) :

    ```shell
    systemctl stop cbis
    ```

2. Puis mettez à jour les paquets, en exécutant la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```shell
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-8.noarch.rpm
dnf clean all
dnf update centreon-bi\*
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```shell
dnf install -y https://dl.fedoraproject.org/pub/epel/epel-release-latest-9.noarch.rpm
dnf clean all
dnf update centreon-bi\*
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
apt clean
apt install --only-upgrade centreon-bi-reporting-server
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

## Étape 4 : mise à jour de MariaDB

1. Arrêtez le service **cbis** :

    ```shell
    systemctl stop cbis
    ```

2. Voir [Mettre à jour MariaDB](../upgrade/upgrade-mariadb.md).

3. Démarrez le service **cbis** :

    ```shell
    systemctl start cbis
    ```
