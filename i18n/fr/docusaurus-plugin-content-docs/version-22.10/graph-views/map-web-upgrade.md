---
id: map-web-upgrade
title: Monter de version MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Lorsque vous mettez à jour une nouvelle version majeure (c'est à dire version A.B.x avec A ou B qui évolue), vous devez installer le nouveau dépôt Business. Vous pouvez trouver l'adresse du dépôt sur le [portail support Centreon](https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts).

## Prérequis

### Mettre à jour la clé de signature RPM

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Le dernier changement a eu lieu le 14 octobre 2021. Lorsque vous mettez Centreon à jour depuis une version plus ancienne, vous devez suivre la [procédure de changement de clé](../security/key-rotation.md#installation-existante), afin de supprimer l'ancienne clé et d'installer la nouvelle.

## Mise à jour du paquet

1. Pour mettre à jour le module Centreon MAP à l'aide des paquets RPM, exécutez la commande suivante :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

``` shell
sudo dnf update centreon-map-engine centreon-map-web-client
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

``` shell
sudo yum update centreon-map-engine centreon-map-web-client
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

 - Si MAP seul est installé :
 
 ``` shell
 sudo apt upgrade centreon-map-engine centreon-map-web-client
 ```
  
 - Si MAP et MAP Legacy sont installés sur le même serveur :
   
   - Faites une sauvegarde du fichier **map.cnf** :
    
    ```shell
    cp /etc/my.cnf.d/map.cnf /etc/my.cnf.d/map.cnf.bk
    ```

   - Mettez les paquets de **centreon-map-engine** à jour :
   
    ``` shell
    sudo apt upgrade -o Dpkg::Options::="--force-overwrite" centreon-map-engine centreon-map-web-client
    ```

   - Récupérez la sauvegarde du fichier de configuration :
   
    ```shell
    cp /etc/my.cnf.d/map.cnf.bk /etc/my.cnf.d/map.cnf
    ```

   - Répondez **Y**. Ensuite redémarrez MySQL :
   
    ```shell
    systemctl restart mariadb
    ```

</TabItem>
</Tabs>

2. Voir [Mettre à jour MariaDB](../upgrade/upgrade-mariadb.md).

## Mise à jour de l'interface

Se connecter à l'interface web de Centreon et se rendre dans le menu
`Administration > Extensions > Gestionnaire`.

Un bouton orange de mise à jour est visible et signale qu'une mise à
jour est disponible, cliquez dessus pour mettre à jour le module, faire
de même pour le widget.
