---
id: map-web-update
title: Mettre à jour MAP
description: "Mettre à jour votre installation Centreon MAP vers une nouvelle version"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Suivez cette procédure pour mettre à jour la version de MAP :

1. Arrêtez le service **centreon-map-engine** en exécutant la commande suivante sur la machine hébergeant le service Centreon MAP :
 
  ```shell
  sudo systemctl stop centreon-map-engine
  ```

2. Mettez à jour les paquets en exécutant les commandes suivantes sur les machines hébergeant le service du central et le service Centreon MAP :

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
