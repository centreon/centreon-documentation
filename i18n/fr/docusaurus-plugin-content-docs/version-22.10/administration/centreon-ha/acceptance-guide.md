---
id: acceptance-guide
title: Guide de recette du cluster
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> Veuillez noter que toutes les commandes présentées dans ce document doivent être exécutées respectivement en tant que `root`, sauf indication contraire.

<Tabs groupId="sync">
<TabItem value="HA 2 Nodes" label="HA 2 Nodes">

> Ce document fera référence aux paramètres qui varient d'une installation à l'autre (par exemple, les noms et adresses IP des nœuds) via . [les macros définies ici](../../installation/installation-of-centreon-ha/installation-2-nodes.md#Définition-des-noms-et-adresses-IP-des-serveurs)

### Conditions requises pour les tests

Pour vérifier le bon fonctionnement de votre cluster, vous obtiendrez toutes les commandes pour effectuer un test de basculement et simuler des pannes de réseau.

Il est nécessaire de vérifier l'état du cluster avant d'effectuer les tests d'acceptation. 

### Vérifier l'état du cluster

Pour vérifier l'état général du cluster, exécutez la commande :

```bash
pcs status
```

La commande devrait retourner les informations suivantes :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8/ Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
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
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 11:09:30 2021
Last change: Fri Jul  9 11:08:57 2021 by root via crm_resource on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_MASTER_NAME@ ]
     Slaves: [ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
```

</TabItem>
</Tabs>

> Vérifiez les erreurs `Failed` dans les ressources et corrigez-les à l'aide du [guide de dépannage](troubleshooting-guide.md).

### Vérifier les contraintes

Pour vérifier qu'il n'y a pas de `Contraintes de localisation`, exécutez la commande :

```bash
pcs constraint
```

La commande devrait renvoyer ceci :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-master (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-master with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
</Tabs>

### Vérifier l'état de la synchronisation de la base de données

Pour vérifier que la synchronisation de la base de données fonctionne, exécutez la commande :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

La commande devrait retourner les informations suivantes :

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> Si la synchronisation indique `KO`, vous devez la corriger à l'aide du [operating-guide](operating-guide.md).

## Basculement des ressources du Centreon

### Etat du cluster avant le failover

Avant d'exécuter un test de basculement, vérifiez l'état du cluster avec la commande suivante :

```bash
pcs status
```

Le résultat attendu est :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
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
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 11:24:27 2021
Last change: Fri Jul  9 11:08:57 2021 by root via crm_resource on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_MASTER_NAME@ ]
     Slaves: [ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
```

</TabItem>
</Tabs>

### Effectuer un basculement

Pour déplacer les ressources, exécutez la commande :

```bash
pcs resource move centreon
```

Vous pouvez également utiliser la commande `crm_mon -fr` pour observer le basculement pendant qu'il se produit. Il sera nécessaire d'utiliser Ctrl+c pour quitter la commande.

> Avertissement : La commande `pcs resource move centreon` définit une contrainte `-INFINITY` sur le noeud hébergeant la ressource, qui n'est plus autorisée à être exécutée sur ce noeud.

En conséquence, les ressources se déplacent vers un autre noeud. Suite à cette manipulation, il est donc nécessaire d'exécuter la commande `pcs resource clear centreon` pour s'assurer que les ressources pourront être déplacées à nouveau vers ce noeud dans le futur.

Pour vérifier que les ressources ont été déplacées vers le second nœud, exécutez la commande : 

```bash
pcs status
```

Le résultat attendu est :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
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
    * vip       (ocf::heartbeat:IPaddr2):        Started Started @CENTRAL_SLAVE_NAME@
    * http      (systemd:httpd):         Started Started @CENTRAL_SLAVE_NAME@
    * gorgone   (systemd:gorgoned):      Started Started @CENTRAL_SLAVE_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_SLAVE_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_SLAVE_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_SLAVE_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_SLAVE_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_SLAVE_NAME@
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 11:38:32 2021
Last change: Fri Jul  9 11:37:55 2021 by root via crm_attribute on @CENTRAL_SLAVE_NAME@
    
2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_SLAVE_NAME@ ]
     Slaves: [ @CENTRAL_MASTER_NAME@ ]
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@
```

</TabItem>
</Tabs>

Vous pouvez remarquer que comme pour les ressources `centreon`, le noeud secondaire a également été promu en `master` pour la ressource `ms_mysql`. Ce comportement est voulu et dû aux `Colocation Constraints` entre les ressources `centreon` et `msq_mysql`.

> Les `Colocation Constraints` sont introuvables sur un cluster à 4 nœuds !

Une fois le basculement terminé, exécutez la commande :

```bash
pcs resource clear centreon
```

> Cela permettra de supprimer les contraintes établies lors du basculement.

Vérifiez également que la réplication MySQL est toujours opérationnelle en utilisant la commande :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

La commande doit retourner les informations suivantes :

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> Si la synchronisation a `KO`, vous devez la corriger à l'aide du [operating-guide](operating-guide.md).

### Retour à la situation nominale

Pour revenir à la situation nominale, vous devez lancer le basculement des ressources.

Exécutez la commande :

```bash
pcs status
```

La sortie devrait être :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
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
    * vip       (ocf::heartbeat:IPaddr2):         Started @CENTRAL_SLAVE_NAME@
    * http      (systemd:httpd):          Started @CENTRAL_SLAVE_NAME@
    * gorgone   (systemd:gorgoned):       Started @CENTRAL_SLAVE_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):          Started @CENTRAL_SLAVE_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_SLAVE_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_SLAVE_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_SLAVE_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_SLAVE_NAME@
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 11:38:32 2021
Last change: Fri Jul  9 11:37:55 2021 by root via crm_attribute on @CENTRAL_SLAVE_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_SLAVE_NAME@ ]
     Slaves: [ @CENTRAL_MASTER_NAME@ ]
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@
```

</TabItem>
</Tabs>

Ensuite, exécutez la commande de nettoyage des contraintes si vous avez des `Contraintes de localisation` :

```bash
pcs resource clear centreon
```

Ensuite, exécutez la commande de basculement : 

```bash
pcs resource move centreon
```

Comme précédemment, vous pouvez suivre le basculement avec la commande `crm_mon -fr`.

Enfin, supprimez les contraintes avec la commande :

```bash
pcs resource clear centreon
```

## Simuler la perte du noeud secondaire

Pour simuler une panne de réseau qui isolerait le noeud secondaire, vous pouvez utiliser `iptables` pour supprimer le trafic depuis et vers le noeud secondaire.
Le noeud secondaire sera complètement exclu du cluster. Le noeud primaire garde la majorité avec le QDevice.

### Traitement 

Pour effectuer ce test, lancez les commandes `iptables` sur le noeud primaire :

```bash
iptables -A INPUT -s @IP_SECONDARY_NODE@ -j DROP
iptables -A OUTPUT -d @IP_SECONDARY_NODE@ -j DROP
```

L'exécution de la commande a pour résultat qu'aucune ressource active n'est visible sur le nœud secondaire et que le nœud primaire est considéré comme "hors ligne" :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_SLAVE_NAME@ ]
  * OFFLINE: [ @CENTRAL_MASTER_NAME@ ]
No active resources
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Stack: corosync
Current DC: @CENTRAL_SLAVE_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition WITHOUT quorum
Last updated: Fri Jul  9 16:11:53 2021
Last change: Fri Jul  9 16:06:34 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_SLAVE_NAME@ ]
OFFLINE: [ @CENTRAL_MASTER_NAME@ ]

No active resources
```

</TabItem>
</Tabs>

Les ressources et le cluster fonctionnent toujours en effectuant un `pcs status` sur le noeud primaire.
Le noeud secondaire est vu `offline` sur le primaire.

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_MASTER_NAME@ ]
  * OFFLINE: [ @CENTRAL_SLAVE_NAME@ ]
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
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 16:19:03 2021
Last change: Fri Jul  9 16:05:26 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ ]
OFFLINE: [ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_MASTER_NAME@ ]
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
```

</TabItem>
</Tabs>

### Retour à la situation nominale

Pour vérifier les différentes règles iptables configurées sur le nœud primaire, exécutez la commande suivante :

```bash
iptables -L
```

La commande doit retourner les informations suivantes :

```text
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  @CENTRAL_SLAVE_NAME@                 anywhere

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  anywhere             @CENTRAL_SLAVE_NAME@
```

Si vous n'avez pas d'autres règles iptables configurées, vous pouvez exécuter la commande suivante pour supprimer les règles liées au test :

```bash
iptables -F
```

Sinon, il sera nécessaire de lister les numéros de règles avec la commande spécifique :

```bash
iptables -L --line-numbers
```

Et le supprimer avec la commande :

```bash
iptables -D INPUT @RULE_NUMBER@
iptables -D OUTPUT @RULE_NUMBER@
```

Le noeud secondaire est à nouveau vu `en ligne` par le cluster :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
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
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_MASTER_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_MASTER_NAME@
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 17:12:39 2021
Last change: Fri Jul  9 16:06:34 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_MASTER_NAME@ ]
     Slaves: [ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@
```

</TabItem>
</Tabs>

Vérifiez également que la réplication MySQL est toujours opérationnelle en utilisant la commande :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

La commande doit retourner les informations suivantes :

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

### Simuler la perte du noeud primaire

### Traitement

Pour effectuer ce test, exécutez les commandes sur le serveur primaire :

```bash
iptables -A INPUT -s @IP_SECONDARY_NODE@ -j DROP 
iptables -A OUTPUT -d @IP_SECONDARY_NODE@ -j DROP 
iptables -A INPUT -s @QDEVICE_IP@ -j DROP 
iptables -A OUTPUT -d @QDEVICE_IP@  -j DROP
```

Les ressources sur le noeud primaire doivent s'arrêter et doivent démarrer sur le noeud secondaire. Vous pouvez utiliser la commande `crm_mon -fr` sur le noeud secondaire pour surveiller le démarrage des ressources :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_MASTER_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_MASTER_NAME@
  * 2 nodes configured
  * 14 resource instances configured
Node List:
  * Online: [ @CENTRAL_SLAVE_NAME@ ]
  * OFFLINE [ @CENTRAL_MASTER_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_MASTER_NAME@ ]
    * Slaves: [ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_SLAVE_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_SLAVE_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_SLAVE_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_SLAVE_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_SLAVE_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_SLAVE_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_SLAVE_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_SLAVE_NAME@
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Fri Jul  9 15:14:00 2021
Last change: Fri Jul  9 15:11:35 2021 by root via crm_resource on @CENTRAL_SLAVE_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_SLAVE_NAME@ ]
OFFLINE: [ @CENTRAL_MASTER_NAME@ ]

Active resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@
```

</TabItem>
</Tabs>

Ce test vérifie que les ressources seront basculées sur le nœud secondaire si le nœud primaire est indisponible et permet la continuité du service.

### Retour à la situation nominale

Pour vérifier les différentes règles iptables configurées sur le nœud primaire, exécutez la commande suivante :

```bash
iptables -L
```

La commande doit retourner les informations suivantes :

```text
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  @CENTRAL_SLAVE_NAME@                 anywhere
DROP       all  --  @QDEVICE_NAME@      anywhere

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  anywhere             @CENTRAL_SLAVE_NAME@
DROP       all  --  anywhere             @QDEVICE_NAME@
```

Si vous n'avez pas d'autres règles iptables configurées, vous pouvez exécuter la commande suivante pour supprimer les règles liées au test :

```bash
iptables -F
```

Sinon, il sera nécessaire de lister les numéros de règles avec la commande spécifique :

```bash
iptables -L --line-numbers
```

Et le supprimer avec la commande :

```bash
iptables -D INPUT @RULE_NUMBER@;
iptables -D OUTPUT @RULE_NUMBER@
```

En exécutant la commande `crm_mon` sur le second noeud, vous verrez le noeud primaire monter dans le cluster.
Si vous souhaitez passer au noeud primaire, exécutez les [commandes de basculement] (acceptance-guide.md#Retour-à-la-situation-nominale).

</TabItem>
<TabItem value="HA 4 Nodes" label="HA 4 Nodes">

> Ce document fera référence aux paramètres qui varient d'une installation à l'autre (par exemple, les noms et adresses IP des nœuds) via . [macros définies ici](../../installation/installation-of-centreon-ha/installation-4-nodes.md#Définition-des-noms-et-adresses-IP-des-serveurs)

### Conditions requises pour les tests

Pour vérifier le bon fonctionnement de votre cluster, vous obtiendrez toutes les commandes pour effectuer un test de basculement et simuler des pannes de réseau.

Il est nécessaire de vérifier l'état du cluster avant d'effectuer les tests d'acceptation. 

### Vérifier l'état du cluster

Pour vérifier l'état général du cluster, exécutez la commande :

```bash
pcs status
```

La commande devrait retourner les informations suivantes :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8/ Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

> Vérifiez les erreurs `Failed` dans les ressources et corrigez-les à l'aide du [guide de dépannage](troubleshooting-guide.md).

### Vérifier les contraintes

Pour vérifier qu'il n'y a pas de `Contraintes de localisation`, exécutez la commande :

```bash
pcs constraint
```

La commande devrait renvoyer ceci :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
Location Constraints:
  Resource: cbd_rrd-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: centreon
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: ms_mysql-clone
    Disabled on: @CENTRAL_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: php-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
Ordering Constraints:
  stop centreon then demote ms_mysql-clone (kind:Mandatory)
Colocation Constraints:
  ms_mysql-clone with vip_mysql (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Location Constraints:
  Resource: cbd_rrd-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: centreon
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: ms_mysql-master
    Disabled on: @CENTRAL_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
  Resource: php-clone
    Disabled on: @DATABASE_MASTER_NAME@ (score:-INFINITY)
    Disabled on: @DATABASE_SLAVE_NAME@ (score:-INFINITY)
Ordering Constraints:
  stop centreon then demote ms_mysql-master (kind:Mandatory)
Colocation Constraints:
  ms_mysql-master with vip_mysql (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

</TabItem>
</Tabs>

### Vérifier l'état de la synchronisation de la base de données

Pour vérifier que la synchronisation de la base de données fonctionne, exécutez la commande :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

La commande devrait retourner les informations suivantes :

```bash
Connection Status '@DATABASE_MASTER_NAME@' [OK]
Connection Status '@DATABASE_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> Si la synchronisation indique `KO`, vous devez la corriger à l'aide du [operating-guide](operating-guide.md).

## Basculement des ressources du Centreon

### Etat du cluster avant le failover

Avant d'exécuter un test de basculement, vérifiez l'état du cluster avec la commande suivante :

```bash
pcs status
```

Le résultat attendu est :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

### Effectuer un basculement

Pour déplacer les ressources, exécutez la commande :

```bash
pcs resource move centreon
```

Vous pouvez également utiliser la commande `crm_mon -fr` pour observer le basculement pendant qu'il se produit. Il sera nécessaire d'utiliser Ctrl+c pour quitter la commande.

> Avertissement : La commande `pcs resource move centreon` définit une contrainte `-INFINITY` sur le noeud hébergeant la ressource, qui n'est plus autorisée à être exécutée sur ce noeud.

En conséquence, les ressources se déplacent vers un autre noeud. Suite à cette manipulation, il est donc nécessaire d'exécuter la commande `pcs resource clear centreon` pour s'assurer que les ressources pourront être déplacées à nouveau vers ce noeud dans le futur.

Pour vérifier que les ressources ont été déplacées vers le second nœud, exécutez la commande : 

```bash
pcs status
```

Le résultat attendu est :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

Une fois le basculement terminé, exécutez la commande :

```bash
pcs resource clear centreon
```

> Cela permettra de supprimer les contraintes établies lors du basculement.

Vérifiez également que la réplication MySQL est toujours opérationnelle en utilisant la commande :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

La commande doit retourner les informations suivantes :

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> Si la synchronisation a `KO`, vous devez la corriger à l'aide du [operating-guide](operating-guide.md).

### Retour à la situation nominale

Pour revenir à la situation nominale, vous devez lancer le basculement des ressources.

Exécutez la commande :

```bash
pcs status
```

La sortie devrait être :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

Ensuite, exécutez la commande de nettoyage des contraintes si vous avez des `Contraintes de localisation` :

```bash
pcs resource clear centreon
```

Ensuite, exécutez la commande de basculement : 

```bash
pcs resource move centreon
```

Comme précédemment, vous pouvez suivre le basculement avec la commande `crm_mon -fr`.

Enfin, supprimez les contraintes avec la commande :

```bash
pcs resource clear centreon
```

## Simuler la perte du noeud secondaire

Pour simuler une panne de réseau qui isolerait le @CENTRAL_SLAVE_NAME@, vous pouvez utiliser `iptables` pour supprimer le trafic depuis et vers le @CENTRAL_SLAVE_NAME@.
Le @CENTRAL_SLAVE_NAME@ sera complètement exclu du cluster. Le @CENTRAL_MASTER_NAME@ garde la majorité avec le QDevice.

### Traitement 

Pour effectuer ce test, lancez les commandes `iptables` sur le @CENTRAL_SLAVE_NAME@. Faites attention à ne pas utiliser @CENTRAL_SLAVE_IPADDR@ sinon vous perdrez la connexion SSH sur ce noeud.

```bash
iptables -A INPUT -s @CENTRAL_MASTER_IPADDR@ -j DROP
iptables -A OUTPUT -d @CENTRAL_MASTER_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_MASTER_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_MASTER_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_SLAVE_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_SLAVE_IPADDR@ -j DROP
iptables -A INPUT -s @QDEVICE_IPADDR@ -j DROP
iptables -A OUTPUT -d @QDEVICE_IPADDR@ -j DROP
```

L'exécution de la commande fait qu'aucune ressource active n'est visible sur le nœud secondaire et que le nœud primaire est vu comme `offline`.
Les ressources et le cluster fonctionnent toujours en exécutant un `pcs status` sur le noeud primaire.

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Thu May  5 10:34:05 2022
Last change: Thu May  5 09:09:50 2022 by root via crm_resource on @CENTRAL_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
OFFLINE: [ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Thu May  5 10:34:05 2022
Last change: Thu May  5 09:09:50 2022 by root via crm_resource on @CENTRAL_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
OFFLINE: [ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

### Retour à la situation nominale

Pour vérifier les différentes règles iptables configurées sur le nœud primaire, exécutez la commande suivante :

```bash
iptables -L
```

La commande doit retourner les informations suivantes :

```text
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  @CENTRAL_SLAVE_NAME@                 anywhere

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  anywhere             @CENTRAL_SLAVE_NAME@
```

Si vous n'avez pas d'autres règles iptables configurées, vous pouvez exécuter la commande suivante pour supprimer les règles liées au test :

```bash
iptables -F
```

Sinon, il sera nécessaire de lister les numéros de règles avec la commande spécifique :

```bash
iptables -L --line-numbers
```

Et le supprimer avec la commande :

```bash
iptables -D INPUT @RULE_NUMBER@
iptables -D OUTPUT @RULE_NUMBER@
```

Le noeud secondaire est à nouveau vu `en ligne` par le cluster :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Wed May  4 15:36:20 2022
Last change: Mon May  2 18:20:27 2022 by root via crm_attribute on @DATABASE_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_MASTER_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_MASTER_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_MASTER_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_MASTER_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_MASTER_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_MASTER_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_MASTER_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_MASTER_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

</TabItem>
</Tabs>

Vérifiez également que la réplication MySQL est toujours opérationnelle en utilisant la commande :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

La commande doit comporter les informations suivantes :

```text
Connection Status '@DATABASE_MASTER_NAME@' [OK]
Connection Status '@DATABASE_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

### Simuler la perte du noeud primaire

### Traitement

Pour effectuer ce test, exécutez les commandes sur le @CENTRAL_MASTER_NAME@ :

```bash
iptables -A INPUT -s @CENTRAL_SLAVE_IPADDR@ -j DROP
iptables -A OUTPUT -d @CENTRAL_SLAVE_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_MASTER_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_MASTER_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_SLAVE_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_SLAVE_IPADDR@ -j DROP
iptables -A INPUT -s @QDEVICE_IPADDR@ -j DROP
iptables -A OUTPUT -d @QDEVICE_IPADDR@ -j DROP
```

Les ressources sur le @CENTRAL_MASTER_NAME@ doivent s'arrêter et démarrer sur le @CENTRAL_SLAVE_NAME@. Vous pouvez utiliser la commande `crm_mon -fr` sur le @CENTRAL_SLAVE_NAME@ pour surveiller le démarrage des ressources :

<Tabs groupId="sync">
<TabItem value="RHEL 8 / Oracle Linux 8 / Alma Linux 8" label="RHEL 8 / Oracle Linux 8 / Alma Linux 8">

```text
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Thu May  5 11:06:38 2022
Last change: Thu May  5 09:09:50 2022 by root via crm_resource on @CENTRAL_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]
OFFLINE: [ @CENTRAL_MASTER_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
vip_mysql       (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@

Migration Summary:
* Node @DATABASE_MASTER_NAME@:
* Node @CENTRAL_SLAVE_NAME@:
* Node @DATABASE_SLAVE_NAME@:
```

</TabItem>
<TabItem value="RHEL 7 / CentOS 7" label="RHEL 7 / CentOS 7">

```text
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition with quorum
Last updated: Thu May  5 11:06:38 2022
Last change: Thu May  5 09:09:50 2022 by root via crm_resource on @CENTRAL_MASTER_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_MASTER_NAME@ @DATABASE_SLAVE_NAME@ @CENTRAL_SLAVE_NAME@ ]
OFFLINE: [ @CENTRAL_MASTER_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-master [ms_mysql]
     Masters: [ @DATABASE_MASTER_NAME@ ]
     Slaves: [ @DATABASE_SLAVE_NAME@ ]
     Stopped: [ @CENTRAL_MASTER_NAME@ @CENTRAL_SLAVE_NAME@ ]
vip_mysql       (ocf::heartbeat:IPaddr2):       Started @DATABASE_MASTER_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_SLAVE_NAME@ ]
     Stopped: [ @DATABASE_MASTER_NAME@ @CENTRAL_MASTER_NAME@ @DATABASE_SLAVE_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_SLAVE_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_SLAVE_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_SLAVE_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_SLAVE_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_SLAVE_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_SLAVE_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_SLAVE_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_SLAVE_NAME@

Migration Summary:
* Node @DATABASE_MASTER_NAME@:
* Node @CENTRAL_SLAVE_NAME@:
* Node @DATABASE_SLAVE_NAME@:
```

</TabItem>
</Tabs>

Ce test vérifie que les ressources seront basculées sur le nœud secondaire si le nœud primaire est indisponible et permet la continuité du service.

### Retour à la situation nominale

Pour vérifier les différentes règles iptables configurées sur le nœud primaire, exécutez la commande suivante :

```bash
iptables -L
```

La commande devrait retourner les informations suivantes :

```text
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  @CENTRAL_SLAVE_NAME@  anywhere
DROP       all  --  @DATABASE_MASTER_NAME@  anywhere
DROP       all  --  @DATABASE_SLAVE_NAME@  anywhere
DROP       all  --  @QDEVICE_NAME@  anywhere

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  anywhere             @CENTRAL_SLAVE_NAME@
DROP       all  --  anywhere             @DATABASE_MASTER_NAME@
DROP       all  --  anywhere             @DATABASE_SLAVE_NAME@
DROP       all  --  anywhere             @QDEVICE_NAME@
```

Si vous n'avez pas d'autres règles iptables configurées, vous pouvez exécuter la commande suivante pour supprimer les règles liées au test :

```bash
iptables -F
```

Sinon, il sera nécessaire de lister les numéros de règles avec la commande spécifique :

```bash
iptables -L --line-numbers
```

Et le supprimer avec la commande :

```bash
iptables -D INPUT @RULE_NUMBER@;
iptables -D OUTPUT @RULE_NUMBER@
```

En exécutant la commande `crm_mon` sur le second noeud, vous verrez le noeud primaire monter dans le cluster.
Si vous souhaitez passer au noeud primaire, exécutez les [commandes de basculement] (acceptance-guide.md#return-to-nominal-situation).

</TabItem>
</Tabs>