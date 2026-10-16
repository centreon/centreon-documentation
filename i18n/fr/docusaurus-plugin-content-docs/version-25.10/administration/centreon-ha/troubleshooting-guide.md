---
id: troubleshooting-guide
title: Dépanner la HA
description: "Diagnostiquer et résoudre les problèmes courants du cluster Centreon HA"
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Une "Failed action" est affichée dans `crm_mon` mais la ressource semble fonctionner correctement

```bash
Cluster name: centreon_cluster

WARNINGS:
Following resources have been moved and their move constraints are still in place: 'centreon'
Run 'pcs constraint location' or 'pcs resource clear ' to view or remove the constraints, respectively

Cluster Summary:
* Stack: corosync (Pacemaker is running)
* Current DC: @CENTRAL_NODE2_NAME@ (version 2.1.6-9.1.el8_9-6fdc9deea29) - MIXED-VERSION partition with quorum
* Last updated: Tue Jun 4 05:41:08 2024 on @CENTRAL_NODE2_NAME@
* Last change: Tue Jun 4 05:36:52 2024 by root via crm_resource on @CENTRAL_NODE1_NAME@
* 4 nodes configured
* 21 resource instances configured

Node List:
* Online: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ @DATABASE_NODE1_NAME@ @DATABASE_NODE2_NAME@ ]

Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @DATABASE_NODE1_NAME@ ]
    * Slaves: [ @DATABASE_NODE2_NAME@ ]
    * Stopped: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
    * Stopped: [ @DATABASE_NODE1_NAME@ @DATABASE_NODE2_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
    * Stopped: [ @DATABASE_NODE1_NAME@ @DATABASE_NODE2_NAME@ ]
    * vip_mysql (ocf::heartbeat:IPaddr2): Started @DATABASE_NODE1_NAME@
  * Resource Group: centreon:
    * vip (ocf::heartbeat:IPaddr2): Started @CENTRAL_NODE2_NAME@
    * http (systemd:httpd): Started @CENTRAL_NODE2_NAME@
    * gorgone (systemd:gorgoned): Started @CENTRAL_NODE2_NAME@
    * centreon_central_sync (systemd:centreon-central-sync): Started @CENTRAL_NODE2_NAME@
    * cbd_central_broker (systemd:cbd-sql): Started @CENTRAL_NODE2_NAME@
    * centengine (systemd:centengine): Started @CENTRAL_NODE2_NAME@
    * centreontrapd (systemd:centreontrapd): Started @CENTRAL_NODE2_NAME@
    * snmptrapd (systemd:snmptrapd): Started @CENTRAL_NODE2_NAME@

Daemon Status:
corosync: active/enabled
pacemaker: active/enabled
pcsd: active/enabled

Failed Resource Actions:
* centreontrapd_start_0 on @CENTRAL_NODE1_NAME@ 'not running' (7): call=82, status=complete, exitreason='',
last-rc-change='Tue Jun 4 11:00:00 2024', queued=1ms, exec=2122ms
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
* Stack: corosync (Pacemaker is running)
  * Current DC: @CENTRAL_NODE1_NAME@ (version 2.1.8-3.el9-3980678f0) - partition with quorum
  * Last updated: Fri Mar 21 16:36:16 2025 on @CENTRAL_NODE1_NAME@
  * Last change:  Thu Mar 13 11:30:16 2025 by hacluster via hacluster on @CENTRAL_NODE1_NAME@
  * 4 nodes configured
  * 21 resource instances configured

Node List:
  * Online: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ @DATABASE_NODE1_NAME@ @DATABASE_NODE2_NAME@ ]

Active Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Promoted: [ @DATABASE_NODE1_NAME@ ]
    * Unpromoted: [ @DATABASE_NODE2_NAME@ ]
  * vip_mysql   (ocf:heartbeat:IPaddr2):         Started @DATABASE_NODE1_NAME@
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]    
```

Aucune erreur n'est affichée, mais le groupe de ressources **centreon** n'apparaît plus dans la sortie et aucune de ses ressources n'est démarrée. Cela se produit surtout lorsqu'il y a eu plusieurs basculements (`pcs resource move ....`) sans supprimer la contrainte.

### Solution

Pour vérifier si certaines contraintes sont actives, exécutez la commande suivante :

```bash
pcs constraint
```

Le résultat sera le suivant :

```bash
Location Constraints:
Resource: cbd_rrd-clone
Disabled on:
Node: @DATABASE_NODE1_NAME@ (score:-INFINITY)
Node: @DATABASE_NODE2_NAME@ (score:-INFINITY)
Resource: centreon
Disabled on:
Node: @CENTRAL_NODE1_NAME@ (score:-INFINITY)
Node: @CENTRAL_NODE2_NAME@ (score:-INFINITY)
Node: @DATABASE_NODE1_NAME@ (score:-INFINITY)
Node: @DATABASE_NODE2_NAME@ (score:-INFINITY)
Resource: ms_mysql-clone
Disabled on:
Node: @CENTRAL_NODE1_NAME@ (score:-INFINITY)
Node: @CENTRAL_NODE2_NAME@ (score:-INFINITY)
Resource: php-clone
Disabled on:
Node: @DATABASE_NODE1_NAME@ (score:-INFINITY)
Node: @DATABASE_NODE2_NAME@ (score:-INFINITY)
Ordering Constraints:
Colocation Constraints:
vip_mysql with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
ms_mysql-clone with vip_mysql (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
```

Nous remarquons que le groupe de ressources **centreon** n'est autorisé à démarrer sur aucun nœud.

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
