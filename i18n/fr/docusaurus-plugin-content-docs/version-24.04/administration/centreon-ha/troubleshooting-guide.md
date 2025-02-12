---
id: troubleshooting-guide
title: Dépanner la HA
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Une "Failed action" est affichée dans `crm_mon` mais la ressource semble fonctionner correctement

```bash
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_MASTER_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_MASTER_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_MASTER_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_MASTER_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_MASTER_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_MASTER_NAME@
    * centreontrapd     (systemd:centreontrapd):         Stopped
    * snmptrapd (systemd:snmptrapd):     Stopped
Failed Resource Actions:
* centreontrapd_start_0 on @CENTRAL_MASTER_NAME@ 'not running' (7): call=82, status=complete, exitreason='',
    last-rc-change='Wed Sep 15 13:42:19 2021', queued=1ms, exec=2122ms
```

### Solution

Les erreurs ne disparaissent pas automatiquement, même si le problème est résolu. Pour supprimer l'erreur, exécutez la commande suivante :

```shell
pcs resource cleanup <resource_name>
```

Dans l'exemple ci-dessus, la commande serait la suivante :

```shell
pcs resource cleanup centreontrapd
```

## Une ressource ne s'exécute pas

Dans le cas où une ressource Centreon (par exemple `centreontrapd`) ne s'exécute pas, **Failed actions** apparaîtra en bas de l'output' de la commande `crm_mon`.

### Solution

Pour obtenir plus d'informations sur cette "Failed action", vous devez d'abord vérifier l'état du service en exécutant cette commande sur le nœud **où le service devrait être en cours d'exécution** :

```bash
systemctl status centreontrapd -l
```

Si cela ne fournit pas suffisamment d'informations, vous pouvez essayer de forcer le démarrage du service et vérifier s'il y a des messages d'erreur :

```bash
pcs resource debug-start centreontrapd
```

Une fois la cause première identifiée, exécutez la commande suivante pour que le cluster oublie ces erreurs et pour redémarrer le service :

```bash
pcs resource cleanup centreontrapd
```

## Une ressource ou un groupe de ressources ne démarre sur aucun nœud

Si la situation suivante se produit après un basculement, qu'il s'agisse d'un basculement manuel ou d'un arrêt du serveur :

```bash
Stack: corosync
Current DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el8_7.2-3c4c782f70) - partition with quorum
Last updated: Thu Feb 20 14:48:12 2020
Last change: Thu Feb 20 14:47:47 2020 by root via crm_resource on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resources configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Slaves: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
```

Aucune erreur n'est affichée, mais le groupe **centreon** n'apparaît plus dans la sortie et aucune de ses ressources n'est démarrée. Cela se produit surtout lorsqu'il y a eu plusieurs basculements (`pcs resource move ....`) sans supprimer la contrainte.

### Solution

Pour vérifier si certaines contraintes sont actives, exécutez la commande suivante :

```bash
pcs constraint config
```

Le résultat sera le suivant :

```bash
Location Constraints:
    Disabled on: @CENTRAL_SLAVE_NAME@ (score:-INFINITY) (role: Started)
    Disabled on: @CENTRAL_MASTER_NAME@ (score:-INFINITY) (role: Started)
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

Nous remarquons que le groupe **centreon** n'est autorisé à démarrer sur aucun nœud.

Pour libérer le groupe de ressources de ses contraintes, exécutez la commande suivante (EL8 et Debian) :

```bash
pcs resource clear centreon
```

Les ressources devraient démarrer maintenant.

## Aucune ressource ne démarre

Si aucune ressource ne démarre, l'une des causes possibles est que le quorum device n'est pas démarré.

### Solution

Pour vérifier l'état du quorum device, exécutez la commande suivante sur les nœuds centraux ou les nœuds de base de données :

```shell
pcs quorum status
```

Si tout va bien, le résultat ressemble à ceci :

```text
Membership information
----------------------
    Nodeid      Votes    Qdevice Name
         1          1    A,V,NMW node1 (local)
         2          1    A,V,NMW node2
         3          1    A,V,NMW node3
         4          1    A,V,NMW node4
         0          1            Qdevice
```

Si vous obtenez autre chose, il y a un problème.

- Vérifiez que le service **corosync-qnetd** fonctionne sur votre nœud central et vos nœuds de base de données.

```shell
systemctl status corosync-qnetd
```

- Essayez d'exécuter cette commande pour savoir si le quorum device est démarré ou non :

```shell
pcs qdevice status net --full
```

- Si le quorum device est en cours d'exécution, il peut y avoir un problème avec les flux entre les nœuds et le quorum device.
- Si le quorum device n'est pas en cours d'exécution, connectez-vous à votre celui-ci et démarrez-le à l'aide de la commande suivante :

```shell
pcs qdevice start net
```
