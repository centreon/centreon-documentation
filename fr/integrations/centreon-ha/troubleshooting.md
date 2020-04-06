---
id: centreon-ha-troubleshooting
title: Troubleshooting
---

## Une ressource ne démarre pas 

Si une ressource (par exemple une ressource du groupe centreon) ne démarre pas correctement, des *failed actions* apparaîtront dans `crm_mon`. Par exemple ci-dessous, `centreontrapd` a rencontré une erreur :

```text
Stack: corosync
Current DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el7_7.2-3c4c782f70) - partition with quorum
Last updated: Thu Feb 20 13:14:17 2020
Last change: Thu Feb 20 09:25:54 2020 by root via crm_attribute	on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resources configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_MASTER_NAME@ ]
     Slaves: [ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php7-clone [php7]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):	Started @CENTRAL_MASTER_NAME@
     http	(systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync	(systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     centreontrapd	(systemd:centreontrapd):        Stopped
     snmptrapd  (systemd:snmptrapd):    Stopped
     cbd_central_broker (systemd:cbd-sql):	Stopped
     centengine (systemd:centengine):   Stopped

Failed Resource Actions:
* centreontrapd_start_0 on @CENTRAL_MASTER_NAME@ 'not running' (7): call=82, status=complete, exitreason='',
    last-rc-change='Thu Feb 20 13:42:19 2020', queued=1ms, exec=2122ms

```

Afin d'avoir plus d'informations sur la cause de cette panne, se connecter via SSH au nœud maître (celui où la ressource devrait tourner) et lancer la commande suivante :

```bash
systemctl status centreontrapd -l
```

Si jamais la sortie de cette commande ne suffit pas, il est possible d'en savoir plus via la commande 

```bash
pcs resource debug-start centreontrapd
```

Une fois la cause identifiée et corrigée, la commande à lancer pour que le cluster "oublie" ces erreurs et relance le service est :

```bash
pcs resource cleanup centreontrapd
```

## Une ressource ou un groupe de ressources ne démarre sur aucun des nœuds

Si suite à une bascule, qu'elle soit manuelle ou à cause d'une panne ou de l'arrêt d'un serveur, la situation suivante se produit :

```text
Stack: corosync
Current DC: @CENTRAL_SLAVE_NAME@ (version 1.1.20-5.el7_7.2-3c4c782f70) - partition with quorum
Last updated: Thu Feb 20 14:48:12 2020
Last change: Thu Feb 20 14:47:47 2020 by root via crm_resource on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resources configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Slaves: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php7-clone [php7]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
```

Aucune erreur n'est remontée, mais le groupe centreon n'apparaît plus, et aucune de ses ressources n'est donc démarrée. Ce cas de figure est généralement dû à un enchainement de deux bascules (`pcs resource move ...`) sans avoir supprimé la contrainte par la suite. Pour le vérifier :

```text
Location Constraints:
  Resource: centreon
    Disabled on: @CENTRAL_SLAVE_NAME@ (score:-INFINITY) (role: Started)
    Disabled on: @CENTRAL_MASTER_NAME@ (score:-INFINITY) (role: Started)
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-master (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-master with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

On constate que le groupe centreon n'est plus "autorisé" à démarrer sur aucun des nœuds.

Pour libérer le groupe de ressources de ces contraintes, il faut lancer la commande :

```bash
pcs resource clear centreon
```

Les ressources devraient alors immédiatement se lancer.



