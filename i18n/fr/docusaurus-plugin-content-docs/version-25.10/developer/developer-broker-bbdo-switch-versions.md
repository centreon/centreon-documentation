---
id: developer-broker-bbdo-switch-versions
title: Changer de version de BBDO
---

BBDO v2 est déprécié à partir de Centreon 25.10. Lorsque vous montez de version votre Centreon, le central passe automatiquement en BBDO V3 (les serveurs distants et les collecteurs passeront en BBDO v3 après déploiement de la configuration). Cependant, voici une procédure pour changer de version manuellement si besoin.

La version de BBDO doit être la même pour tous les serveurs de votre architecture (serveur central, serveurs distants, collecteurs). Vous devez également [utiliser BBDO v3 avec vos stream connectors](./developer-broker-stream-connector-migration.md).

## Procédure

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
  grep "using version" /var/log/centreon-engine/config0/centengine.log
  ```

La ligne suivante indique quelle version est utilisée pour chaque serveur :

```shell
[2025-10-17T14:53:44.828+00:00] [bbdo] [info] BBDO: peer is using protocol version 3.0.0, we're using version 3.0.0
```
