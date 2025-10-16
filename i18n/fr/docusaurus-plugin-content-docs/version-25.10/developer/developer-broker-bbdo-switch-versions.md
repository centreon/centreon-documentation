---
id: developer-broker-bbdo-switch-versions
title: Changer de version de BBDO
---

La version de BBDO doit être la même pour tous les serveurs de votre architecture (serveur central, serveurs distants, collecteurs).

> Si vous utilisez BBDO v2 avec cette version de Centreon, vous ne pourrez pas utiliser la page **Statut des ressources**.

Si vous voulez changer de version de BBDO (passer de la v3 à la v2 ou de la v2 à la v3), procédez comme suit :

1. Sur le serveur central, accédez à **Configuration > Collecteurs > Configuration de Centreon Broker**.

2. Sélectionnez le serveur souhaité, et dans l’onglet **Général**, dans la section **Paramètres avancés**, sélectionnez la version de BBDO souhaitée dans la liste **BBDO version**. Cliquez ensuite sur **Sauvegarder**.

3. Faites de même avec tous les éléments figurant sur la page **Configuration > Collecteurs > Configuration de Centreon Broker**.

4. Redémarrez **gorgoned** sur chaque serveur :
   
   ```shell
   systemctl restart gorgoned
   ```

5. [Déployez la configuration](../monitoring/monitoring-servers/deploying-a-configuration.md) pour tous les serveurs.

6. Arrêtez les services suivants :
   
   - Sur le serveur central et sur les serveurs distants :
     
     ```shell
     systemctl stop cbd centengine
     ```
   
   - Sur les collecteurs :
     
     ```shell
     systemctl stop centengine
     ```

7. Démarrez les services suivants :
   
   - Sur le serveur central et sur les serveurs distants :
     
     ```shell
     systemctl start cbd centengine
     ```
   
   - Sur les collecteurs :
     
     ```shell
     systemctl start centengine
     ```

Vous pouvez vérifier dans les journaux quelle version de BBDO est active pour un serveur :

- broker central :
  
  ```shell
  tail /var/log/centreon-broker/central-{broker,rrd,module}-master.log
  
  ```

- broker distant :
  
  ```shell
  tail /var/log/centreon-broker/<remote_name>-{broker,rrd,module}-master.log
  ```

- module collecteur :
  
  ```shell
  tail /var/log/centreon-broker/<poller_name>-module.log
  ```

La ligne suivante indique quelle version est utilisée pour chaque serveur :

```shell
[2022-05-17T14:53:44.828+00:00] [bbdo] [info] BBDO: peer is using protocol version 2.0.0, we're using version 2.0.0
```
