---
id: map-web-update
title: Mettre à jour MAP
---

> Une réinitialisation de votre base de données MAP est nécessaire : les modifications que vous avez apportées à vos cartes à l'aide de l'éditeur web seront perdues. En revanche, notez que la base de données MAP Legacy (et donc les anciennes cartes) ne sera pas impactée.

Suivez cette procédure pour mettre à jour la version de MAP :

1. Arrêtez le service **centreon-map-engine** en exécutant la commande suivante sur la machine hébergeant le service Centre MAP :
 
  ```shell
  sudo systemctl stop centreon-map-engine
  ```

2. Mettez à jour les paquets en exécutant la commande suivante sur la ou les machines hébergeant le service du central et le service Centreon MAP :
 
  ```shell
  sudo yum update "centreon-map-engine" "centreon-map-web-client" --enablerepo="centreon-beta-stable\*"
  ```

3. Purgez la base de données MAP en vous y connectant et en exécutant les requêtes suivantes :
 
  ```shell
  drop database centreon_map; create database centreon_map; grant all privileges on centreon_map.* to 'centreon_map'@'%' identified by 'centreon_map';
  ```

4. Videz le cache de votre navigateur.
 

5. Redémarrez le service **centreon-map-engine** en exécutant la commande suivante :
 
  ```shell
  sudo systemctl start centreon-map-engine
  ```
