---
id: map-web-upgrade
title: Monter de version MAP
description: "Monter de version Centreon MAP vers une nouvelle version majeure"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Lorsque vous montez vers une nouvelle version majeure (c'est-à-dire version A.B.x avec A ou B qui évolue), vous devez installer le nouveau dépôt Business. Vous pouvez trouver l'adresse du dépôt sur le [portail support Centreon](https://support.centreon.com/hc/fr/categories/10341239833105-D%C3%A9p%C3%B4ts).

> **À partir de Centreon 24.10, MAP Legacy n'est plus disponible.** Suivez ce [lien](https://archives-docs.centreon.com/24.04/fr/docs/graph-views/introduction/) pour consulter la dernière version disponible de la documentation pour MAP Legacy (version archivée).

## Prérequis

### Vérifier votre système d'exploitation

Assurez-vous que le serveur central et le serveur MAP fonctionnent sous un [système d'exploitation pris en charge par cette version](../installation/compatibility.md#système-dexploitation).

Si l'un de vos serveurs fonctionne sous un système d'exploitation qui n'est plus pris en charge, vous ne pouvez pas le monter de version directement. Migrez d'abord votre plateforme vers un système d'exploitation pris en charge :

- Pour le serveur central, voir [Migrer une plateforme](../migrate/introduction.md).
- Pour le serveur MAP, voir [Migrer l'extension](map-web-migrate.md).

### Vérifier la version de votre base de données

Assurez-vous que votre base de données utilise une [version de SGBD prise en charge par cette version](../installation/compatibility.md#sgbd). Si ce n'est pas le cas, mettez-la à jour avant de monter de version MAP. Voir [Mettre à jour MariaDB](../upgrade/upgrade-mariadb.md) ou [Mettre à jour MySQL](../upgrade/upgrade-mysql.md).

### Mettre à jour la clé de signature RPM

Pour des raisons de sécurité, les clés utilisées pour signer les RPMs Centreon sont changées régulièrement. Si votre plateforme utilise encore une ancienne clé, suivez la [procédure de changement de clé](../security/key-rotation.md#installation-existante) afin de supprimer l'ancienne clé et d'installer la nouvelle.

## Mise à jour du paquet

1. Arrêtez le service **centreon-map-engine** en exécutant cette commande sur la machine hébergeant le service Centreon MAP :

  ```shell
  sudo systemctl stop centreon-map-engine
  ```
  
2. Pour mettre à jour le module Centreon MAP, exécutez les commandes suivantes :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

 - Sur le serveur central :
 
 ``` shell
 sudo dnf update centreon-map-web-client
 ```

 - Sur le serveur MAP :
 
 ``` shell
 sudo dnf update centreon-map-engine
 ```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 10" label="Alma / RHEL / Oracle Linux 10">

 - Sur le serveur central :
 
 ``` shell
 sudo dnf update centreon-map-web-client
 ```

 - Sur le serveur MAP :
 
 ``` shell
 sudo dnf update centreon-map-engine
 ```

</TabItem>
<TabItem value="Debian 13" label="Debian 13">

 - Sur le serveur central :
 
 ``` shell
 sudo apt install --only-upgrade centreon-map-web-client
 ```
 
 - Sur le serveur MAP :
 
 ``` shell
 sudo apt install --only-upgrade centreon-map-engine
 ```

</TabItem>
</Tabs>

3. Videz le cache de votre navigateur.

4. Finalisez la mise à jour du module et du widget dans l'interface Centreon **Administration > Extensions > Gestionnaire**.

 > Un bouton de mise à jour s'affiche lorsqu'une mise à jour est disponible. Cliquez dessus pour mettre à jour le module, puis faites de même pour le widget.

5. Redémarrez le service **centreon-map-engine** en exécutant la commande suivante :
 
  ```shell
  sudo systemctl start centreon-map-engine
  ```
