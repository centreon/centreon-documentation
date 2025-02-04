---
id: map-web-update
title: Mettre à jour MAP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Suivez cette procédure pour mettre à jour la version de MAP :

1. Arrêtez le service **centreon-map-engine** en exécutant la commande suivante sur la machine hébergeant le service Centreon MAP :
 
  ```shell
  sudo systemctl stop centreon-map-engine
  ```

2. Mettez à jour les paquets en exécutant la commande suivante sur la ou les machines hébergeant le service du central et le service Centreon MAP :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

 - Sur le serveur central :
 
 ``` shell
 sudo dnf update centreon-map-web-client
 ```
 
 - Sur le serveur MAP :
 
 ``` shell
 sudo dnf update centreon-map-engine
 ```

</TabItem>
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
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

 - Si MAP seul est installé :
 
 Sur le serveur central :

 ``` shell
 sudo apt install centreon-map-web-client
 ```

 Sur le serveur MAP :

 ``` shell
 sudo apt install centreon-map-engine
 ```
  
 - Si MAP et MAP Legacy sont installés sur le même serveur :
   
   - Faites une sauvegarde du fichier **map.cnf** :
    
    ```shell
    cp /etc/my.cnf.d/map.cnf /etc/my.cnf.d/map.cnf.bk
    ```

   - Mettez les paquets de **centreon-map-engine** à jour :

   Sur le serveur central :
   
   ``` shell
   sudo apt install -o Dpkg::Options::="--force-overwrite" centreon-map-web-client
   ```
   
   Sur le serveur MAP :
   
   ``` shell
   sudo apt install -o Dpkg::Options::="--force-overwrite" centreon-map-engine
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

3. Videz le cache de votre navigateur.

4. Finalisez la mise à jour du module et du widget dans l'interface Centreon **Administration > Extensions > Gestionnaire**.

5. Redémarrez le service **centreon-map-engine** en exécutant la commande suivante :
 
  ```shell
  sudo systemctl start centreon-map-engine
  ```
