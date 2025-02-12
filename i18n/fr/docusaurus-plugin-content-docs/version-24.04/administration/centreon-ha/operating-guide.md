---
id: operating-guide
title: Guide d'utilisation
---

> Sauf indication contraire, toutes les commandes de cette page doivent être exécutées en tant que « root ».

## Se connecter à Centreon sur le nœud actif

L'accès à l'interface du nœud actif se fait via l'adresse IP de la VIP centrale. Cela signifie que vous utilisez toujours la même URL pour accéder à l'interface, que l'interface soit celle du nœud central 1 ou celle du nœud central 2.

## Comment connaître l'état du cluster ?

### Utiliser crm_mon et pcs status

Vous pouvez connaître l'état du cluster à tout moment en utilisant la commande `crm_mon`, ou la commande `pcs status`, sur n'importe quel membre du cluster (nœuds centraux, quorum device, nœuds de base de données).

* `pcs status` a une sortie statique : cela affiche l'état du cluster tel qu'il est au moment où vous exécutez la commande.

* `crm_mon` a une sortie dynamique : l'état du cluster est affiché en temps réel. Vous pouvez observer l'arrêt des ressources et leur transfert vers l'autre nœud. Utilisez `crm_mon -fr` pour continuer à afficher les ressources arrêtées.

Exemple de sortie lorsque le cluster fonctionne correctement :

```text
Cluster Summary:
  * Stack: corosync (Pacemaker is running)
  * Current DC: central2 (version 2.1.6-9.1.el8_9-6fdc9deea29) - MIXED-VERSION partition with quorum
  * Last updated: Tue Jun  4 07:49:50 2024 on central1
  * Last change:  Tue Jun  4 05:44:11 2024 by root via crm_resource on central2
  * 4 nodes configured
  * 21 resource instances configured

Node List:
  * Online: [ central1 central2 db1 db2 ]

Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ db1 ]
    * Slaves: [ db2 ]
    * Stopped: [ central1 central2 ]
  * Clone Set: php-clone [php]:
    * Started: [ central1 central2 ]
    * Stopped: [ db1 db2 ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ central1 central2 ]
    * Stopped: [ db1 db2 ]
  * vip_mysql   (ocf::heartbeat:IPaddr2):        Started db1
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started central1
    * http      (systemd:httpd):         Started central1
    * gorgone   (systemd:gorgoned):      Started central1
    * centreon_central_sync     (systemd:centreon-central-sync):         Started central1
    * cbd_central_broker        (systemd:cbd-sql):       Started central1
    * centengine        (systemd:centengine):    Started central1
    * centreontrapd     (systemd:centreontrapd):         Started central1
    * snmptrapd (systemd:snmptrapd):     Started central1

Migration Summary:
```

> Ces commandes ne devraient pas renvoyer d'erreurs. S'il y a des **Failed actions** sur une ressource, dépannez-les en utilisant le [guide de dépannage](troubleshooting-guide.md).

### Utilisation de l'interface Centreon

Le processus d'installation comprend la [supervision des membres du cluster par un poller](monitoring-guide.md). De cette façon, vous pouvez être notifié si un membre du cluster tombe en panne.

La page **Statut des ressources** vous donne les informations suivantes :

* Sur les deux nœuds centraux, le service **PCS-Status** vous donne l'état détaillé du cluster. L'output du service dans le panneau de détails est la sortie de la commande `pcs status`.
* Vous pouvez savoir quel nœud central est le nœud actif en regardant quel nœud porte les ressources du cluster dans l'output du service **PCS-Status** sur chaque nœud central.

## Supprimer une erreur affichée dans l'état du cluster

Une fois la cause de l'erreur identifiée et corrigée (voir le [guide de dépannage](troubleshooting-guide.md)), vous devez supprimer le message d'erreur manuellement :

```bash
pcs resource cleanup
```

Ou si vous souhaitez supprimer uniquement les erreurs liées à une ressource :

```bash
pcs resource cleanup <resource_name>
```

## Vérifier les contraintes

Si un basculement s'est produit à un moment donné, il se peut qu'il reste des contraintes d'emplacement. Exécutez la commande suivante pour afficher les contraintes actuelles :

```bash
pcs constraint
```

La commande doit renvoyer le résultat suivant :

```text
Location Constraints:
  Resource: cbd_rrd-clone
    Disabled on:
      Node: @DATABASE_NODE1_NAME@ (score:-INFINITY)
      Node: @DATABASE_NODE2_NAME@ (score:-INFINITY)
  Resource: centreon
    Disabled on:
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
Ticket Constraints:

```

L'output montre les contraintes que vous avez définies pendant la procédure d'installation : la ressource **ms_mysql-clone** ne s'exécute que sur les nœuds de base de données, les ressources **cbd_rrd-clone**, **centreon** et **php-clone** ne s'exécutent que sur les nœuds centraux.

Pour supprimer les contraintes obsolètes, exécutez la commande suivante :

```bash
pcs resource clear centreon
```

## Vérifier l'état de la synchronisation de la base de données

Pour vérifier que la synchronisation de la base de données fonctionne, exécutez la commande suivante :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

La commande doit renvoyer le résultat suivant :

```text
Connection MASTER Status '@DATABASE_NODE1_NAME@' [OK]
Connection SLAVE Status '@DATABASE_NODE2_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

Si la synchronisation indique `KO`, vous devez y remédier. La procédure ci-dessous explique comment réactiver manuellement la réplication de la base de données.

### Restaurer la réplication actif-passif de la base de données

> Cette procédure doit être appliquée en cas de panne du thread de réplication des bases de données ou d'un crash du serveur s'il ne peut pas être récupéré en exécutant `pcs resource cleanup ms_mysql` ou `pcs resource restart ms_mysql`.

Empêchez le cluster de gérer la ressource **ms_mysql** pendant l'opération (à exécuter depuis n'importe quel nœud) :

```bash
pcs resource unmanage ms_mysql
```

Connectez-vous au nœud de base de données passif at arrêter le service de base de données :

```bash
mysqladmin -p shutdown
```

Connectez-vous au nœud de base de données actif et exécutez la commande suivante pour écraser les données du nœud passif par celles du nœud actif :

```bash
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

Réactivez le cluster pour gérer la ressource **ms_mysql** :

```bash
pcs resource manage ms_mysql
```

Exécutez la commande suivante sur l'un des serveurs de base de données pour vous assurer que la réplication a été restaurée avec succès :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

```text
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

## Afficher la configuration du cluster

Pour afficher une description très détaillée de la configuration du cluster (par exemple, pour vérifier que le nom des ressources ne contient pas de fautes de frappe, ou pour vérifier les informations relatives au réseau), exécutez la commande suivante :

```bash
pcs config show
```

## Tester le cluster

Cette section vous fournit des exemples de tests pour valider le bon fonctionnement de votre cluster : effectuez un basculement, simulez une panne de réseau et vérifiez que le cluster se comporte comme prévu.

### Comment effectuer un basculement manuel

Nous supposons que le nœud central 1 est le nœud central actif et que le nœud central 2 est le nœud central passif ([vérifiez l'état du cluster](#comment-connaître-létat-du-cluster-) si besoin).

Lorsque vous déplacez le groupe de ressources **centreon** du nœud central 1 vers le nœud central 2, le nœud central 2 devient le nœud actif et le nœud central 1 devient le nœud passif.

1. Exécutez la commande suivante pour effectuer le basculement :

```bash
pcs resource move centreon
```

Dans un autre terminal, vous pouvez également utiliser la commande `crm_mon -fr` pour observer le basculement au fur et à mesure qu'il se produit. Il sera nécessaire d'utiliser **Ctrl+c** pour quitter la commande.

> Avertissement : La commande `pcs resource move centreon` définit une contrainte `-INFINITY` sur le nœud 1. Cela signifie que la ressource n'est plus autorisée à fonctionner sur ce nœud. (Vous effacerez cette contrainte à l'étape 3.)

2. Les ressources se déplacent vers le nœud 2. Pour vérifier que les ressources ont bien été déplacées, exécutez la commande suivante :

```bash
pcs status
```

Le résultat attendu est le suivant :

```text
Cluster name: centreon_cluster

WARNINGS:
Following resources have been moved and their move constraints are still in place: 'centreon'
Run 'pcs constraint location' or 'pcs resource clear <resource id>' to view or remove the constraints, respectively

Cluster Summary:
  * Stack: corosync (Pacemaker is running)
  * Current DC: central2 (version 2.1.6-9.1.el8_9-6fdc9deea29) - MIXED-VERSION partition with quorum
  * Last updated: Tue Jun  4 05:41:08 2024 on central2
  * Last change:  Tue Jun  4 05:36:52 2024 by root via crm_resource on central1
  * 4 nodes configured
  * 21 resource instances configured

Node List:
  * Online: [ central1 central2 db1 db2 ]

Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ db1 ]
    * Slaves: [ db2 ]
    * Stopped: [ central1 central2 ]
  * Clone Set: php-clone [php]:
    * Started: [ central1 central2 ]
    * Stopped: [ db1 db2 ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ central1 central2 ]
    * Stopped: [ db1 db2 ]
  * vip_mysql   (ocf::heartbeat:IPaddr2):        Started db1
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started central2
    * http      (systemd:httpd):         Started central2
    * gorgone   (systemd:gorgoned):      Started central2
    * centreon_central_sync     (systemd:centreon-central-sync):         Started                                                                              central2
    * cbd_central_broker        (systemd:cbd-sql):       Started central2
    * centengine        (systemd:centengine):    Started central2
    * centreontrapd     (systemd:centreontrapd):         Started central2
    * snmptrapd (systemd:snmptrapd):     Started central2

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

3. Une fois le basculement terminé, exécutez la commande suivante pour vous assurer que les ressources pourront être déplacées vers leur nœud d'origine à l'avenir (EL8 ou Debian).

```bash
pcs resource clear centreon
```

Cela supprimera les contraintes établies pendant le basculement.

> Si vous déplacez une seule ressource du groupe de ressources centreon d'un nœud à l'autre, toutes les autres ressources du groupe basculeront également.

Si vous souhaitez revenir à la situation nominale (c'est-à-dire que le nœud central 1 est le nœud central actif et le nœud central 2 est le nœud central passif), vous devez effectuer un second basculement de ressources (et effacer les contraintes par la suite).

### Comment simuler la perte du nœud central passif ?

Si le nœud central passif tombe en panne, le cluster devrait continuer à fonctionner comme avant, car les ressources sont gérées par le nœud central actif. Vous verrez que votre nœud central passif est hors service à la page **Statut des ressources**.

Pour simuler une panne de réseau qui isolerait le noeud central passif, vous pouvez utiliser `iptables` pour supprimer le trafic depuis et vers le noeud central passif. Le nœud central passif sera complètement exclu du cluster. Le nœud central actif conserve la majorité avec le quorum device.

#### Effectuer le test

Nous supposons que le nœud 1 est le nœud actif et le nœud 2 le nœud passif ([vérifiez l'état du cluster](#comment-connaître-létat-du-cluster-) si besoin).

Pour effectuer ce test, lancez les commandes `iptables` sur le **nœud central passif**. Grâce à ces règles, tout le trafic provenant du nœud central actif, des bases de données et du quorum device sera ignoré par le nœud central passif :

```bash
iptables -A INPUT -s @CENTRAL_NODE1_IPADDR@ -j DROP
iptables -A OUTPUT -d @CENTRAL_NODE1_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_NODE1_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_NODE1_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_NODE2_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_NODE2_IPADDR@ -j DROP
iptables -A INPUT -s @QDEVICE_IPADDR@ -j DROP
iptables -A OUTPUT -d @QDEVICE_IPADDR@ -j DROP
```

Le nœud central passif est maintenant exclu du cluster.

Si vous exécutez `pcs status` sur le nœud central actif :

* Les ressources et le cluster fonctionnent toujours (l'output montre que le nœud voit toujours le quorum device).
* Le nœud central passif est vu `offline` par le nœud actif :

```text
Cluster name: centreon_cluster
Stack: corosync
Current DC: @CENTRAL_NODE1_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Thu May  5 10:34:05 2022
Last change: Thu May  5 09:09:50 2022 by root via crm_resource on @CENTRAL_NODE1_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_NODE1_NAME@ @CENTRAL_NODE1_NAME@ @DATABASE_NODE2_NAME@ ]
OFFLINE: [ @CENTRAL_NODE2_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_NODE1_NAME@ ]
     Slaves: [ @DATABASE_NODE2_NAME@ ]
     Stopped: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
 vip_mysql      (ocf::heartbeat:IPaddr2):       Started @DATABASE_NODE1_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_NODE1_NAME@ ]
     Stopped: [ @DATABASE_NODE1_NAME@ @DATABASE_NODE2_NAME@ @CENTRAL_NODE2_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_NODE1_NAME@ ]
     Stopped: [ @DATABASE_NODE1_NAME@ @DATABASE_NODE2_NAME@ @CENTRAL_NODE2_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_NODE1_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_NODE1_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_NODE1_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_NODE1_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_NODE1_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_NODE1_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_NODE1_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_NODE1_NAME@

Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

Si vous exécutez `pcs status` sur le nœud passif :

* Toutes les ressources sont vues comme arrêtées par le nœud passif (car le nœud passif ne voit plus le quorum device, comme l'indique  le message ci-dessous **partition WITHOUT quorum**. Les ressources sont arrêtées).
* Le nœud actif est vu comme `offline` (car le nœud passif est coupé du reste du cluster) :

```text
Cluster name: centreon_cluster
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_NODE2_NAME@ (version 2.1.2-4.el8_6.3-ada5c3b36e2) - partition WITHOUT quorum
  * Last updated: Tue Nov  8 14:33:00 2022
  * Last change:  Tue Nov  8 14:25:58 2022 by root via crm_resource on @CENTRAL_NODE1_NAME@
  * 2 nodes configured
  * 12 resource instances configured
Node List:
  * Online: [ @CENTRAL_NODE2_NAME@ ]
  * OFFLINE: [ @CENTRAL_NODE1_NAME@ ]
Full List of Resources:
  * Clone Set: php-clone [php]:
    * Stopped: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Stopped: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Stopped
    * http      (systemd:httpd):         Stopped
    * gorgone   (systemd:gorgoned):      Stopped
    * centreon_central_sync     (systemd:centreon-central-sync):         Stopped
    * cbd_central_broker        (systemd:cbd-sql):       Stopped
    * centengine        (systemd:centengine):    Stopped
    * centreontrapd     (systemd:centreontrapd):         Stopped
    * snmptrapd (systemd:snmptrapd):     Stopped
Daemon Status:
  corosync: active/enabled
  pacemaker: active/enabled
  pcsd: active/enabled
```

#### Revenir à la situation nominale

Si vous souhaitez revenir à la situation nominale, supprimez les règles iptables.

Pour visualiser les différentes règles iptables configurées sur le nœud actif, exécutez la commande suivante :

```bash
iptables -L
```

La commande doit renvoyer les informations suivantes :

```text
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  @CENTRAL_NODE2_NAME@                 anywhere

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  anywhere             @CENTRAL_NODE2_NAME@
```

Si vous n'avez pas d'autres règles iptables configurées, vous pouvez exécuter la commande suivante pour supprimer les règles liées au test :

```bash
iptables -F
```

Dans le cas contraire, vous devrez lister les numéros de règles à l'aide de la commande suivante :

```bash
iptables -L --line-numbers
```

Et les supprimer avec la commande suivante :

```bash
iptables -D INPUT @RULE_NUMBER@
iptables -D OUTPUT @RULE_NUMBER@
```

Si vous exécutez `pcs status` sur le nœud actif, le nœud passif est à nouveau considéré comme `online` :

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_NODE1_NAME@ (version 2.0.5-9.0.1.el8_4.1-ba59be7122) - partition with quorum
  * Last updated: Wed Sep 15 16:35:47 2021
  * Last change:  Wed Sep 15 10:41:50 2021 by root via crm_attribute on @CENTRAL_NODE1_NAME@
  * 2 nodes configured
  * 12 resource instances configured
Node List:
  * Online: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
Full List of Resources:
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_NODE1_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_NODE1_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_NODE1_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_NODE1_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_NODE1_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_NODE1_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_NODE1_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_NODE1_NAME@
```

Vérifiez également que la réplication de la base de données est toujours opérationnelle à l'aide de la commande suivante :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Le résultat attendu est le suivant :

```text
Connection MASTER Status '@DATABASE_NODE1_NAME@' [OK]
Connection SLAVE Status '@DATABASE_NODE2_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

### Comment simuler la perte du nœud central actif ?

Ce test permet de vérifier que les ressources sont basculées vers le nœud passif en cas d'indisponibilité du nœud actif, ce qui permet d'assurer la continuité du service.

#### Effectuer le test

Nous supposons que le nœud central 1 est le nœud central actif et que le nœud central 2 est le nœud central passif ([vérifiez l'état du cluster](#comment-connaître-létat-du-cluster-) si besoin).

Pour effectuer ce test, exécutez les commandes suivantes sur le **nœud central actif**. Grâce à ces règles, tout le trafic provenant du nœud central passif, des bases de données et du dispositif quorum sera ignoré par le nœud central actif :

```bash
iptables -A INPUT -s @CENTRAL_NODE2_IPADDR@ -j DROP
iptables -A OUTPUT -d @CENTRAL_NODE2_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_NODE1_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_NODE1_IPADDR@ -j DROP
iptables -A INPUT -s @DATABASE_NODE2_IPADDR@ -j DROP
iptables -A OUTPUT -d @DATABASE_NODE2_IPADDR@ -j DROP
iptables -A INPUT -s @QDEVICE_IPADDR@ -j DROP
iptables -A OUTPUT -d @QDEVICE_IPADDR@ -j DROP
```

Les ressources du nœud central actif (nœud central 1) doivent s'arrêter. Le noeud central 2 devient le noeud actif et toutes les ressources basculent vers lui. Vous pouvez utiliser la commande `crm_mon -fr` sur le noeud central 2 pour observer le démarrage des ressources :

```text
Stack: corosync
Current DC: @CENTRAL_NODE1_NAME@ (version 1.1.23-1.el8_9.1-9acf116022) - partition with quorum
Last updated: Thu May 5 11:06:38 2022
Last change: Thu May  5 09:09:50 2022 by root via crm_resource on @CENTRAL_NODE1_NAME@

4 nodes configured
21 resource instances configured

Online: [ @DATABASE_NODE1_NAME@ @DATABASE_NODE2_NAME@ @CENTRAL_NODE2_NAME@ ]
OFFLINE: [ @CENTRAL_NODE1_NAME@ ]

Full list of resources:

 Master/Slave Set: ms_mysql-clone [ms_mysql]
     Masters: [ @DATABASE_NODE1_NAME@ ]
     Slaves: [ @DATABASE_NODE2_NAME@ ]
     Stopped: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
vip_mysql       (ocf::heartbeat:IPaddr2):       Started @DATABASE_NODE1_NAME@
 Clone Set: php-clone [php]
     Started: [ @CENTRAL_NODE2_NAME@ ]
     Stopped: [ @DATABASE_NODE1_NAME@ @CENTRAL_NODE1_NAME@ @DATABASE_NODE2_NAME@ ]
 Clone Set: cbd_rrd-clone [cbd_rrd]
     Started: [ @CENTRAL_NODE2_NAME@ ]
     Stopped: [ @DATABASE_NODE1_NAME@ @CENTRAL_NODE1_NAME@ @DATABASE_NODE2_NAME@ ]
 Resource Group: centreon
     vip        (ocf::heartbeat:IPaddr2):       Started @CENTRAL_NODE2_NAME@
     http       (systemd:httpd24-httpd):        Started @CENTRAL_NODE2_NAME@
     gorgone    (systemd:gorgoned):     Started @CENTRAL_NODE2_NAME@
     centreon_central_sync      (systemd:centreon-central-sync):        Started @CENTRAL_NODE2_NAME@
     cbd_central_broker (systemd:cbd-sql):      Started @CENTRAL_NODE2_NAME@
     centengine (systemd:centengine):   Started @CENTRAL_NODE2_NAME@
     centreontrapd      (systemd:centreontrapd):        Started @CENTRAL_NODE2_NAME@
     snmptrapd  (systemd:snmptrapd):    Started @CENTRAL_NODE2_NAME@

Migration Summary:
* Node @DATABASE_NODE1_NAME@:
* Node @CENTRAL_NODE2_NAME@:
* Node @DATABASE_NODE2_NAME@:
```

#### Retour à la situation nominale

Pour vérifier les différentes règles iptables configurées sur le nœud central 1, exécutez la commande suivante :

```bash
iptables -L
```

La commande doit renvoyer les informations suivantes :

```text
Chain INPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  @CENTRAL_NODE2_NAME@  anywhere
DROP       all  --  @DATABASE_NODE1_NAME@  anywhere
DROP       all  --  @DATABASE_NODE2_NAME@  anywhere
DROP       all  --  @QDEVICE_NAME@  anywhere

Chain FORWARD (policy ACCEPT)
target     prot opt source               destination

Chain OUTPUT (policy ACCEPT)
target     prot opt source               destination
DROP       all  --  anywhere             @CENTRAL_NODE2_NAME@
DROP       all  --  anywhere             @DATABASE_NODE1_NAME@
DROP       all  --  anywhere             @DATABASE_NODE2_NAME@
DROP       all  --  anywhere             @QDEVICE_NAME@
```

Si vous n'avez pas d'autres règles iptables configurées, vous pouvez exécuter la commande suivante pour supprimer les règles liées au test :

```bash
iptables -F
```

Dans le cas contraire, il sera nécessaire de lister les numéros des règles à l'aide de la commande suivante :

```bash
iptables -L --line-numbers
```

Et de les supprimer avec la commande suivante :

```bash
iptables -D INPUT @RULE_NUMBER@;
iptables -D OUTPUT @RULE_NUMBER@
```

Si vous exécutez la commande `crm_mon` sur le noeud central 2, vous pouvez voir que le noeud central 1 est toujours le noeud passif :

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_NODE1_NAME@ (version 2.1.2-4.el8_6.3-ada5c3b36e2) - partition with quorum
  * Last updated: Tue Nov 8 17:27:28 2022
  * Last change:  Tue Nov  8 17:23:19 2022 by root via crm_attribute on @CENTRAL_NODE2_NAME@
  * 4 nodes configured
  * 21 resource instances configured
Node List:
  * Online: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * ms_mysql  (ocf::heartbeat:mariadb-centreon):       Stopped @CENTRAL_NODE1_NAME@ (Monitoring)
    * Masters: [ @CENTRAL_NODE2_NAME@ ]
    * Stopped: [ @CENTRAL_NODE1_NAME@ ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_NODE1_NAME@ @CENTRAL_NODE2_NAME@ ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_NODE2_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_NODE2_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_NODE2_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_NODE2_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_NODE2_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_NODE2_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_NODE2_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_NODE2_NAME@
Migration Summary:
  * Node: @CENTRAL_NODE1_NAME@:
    * ms_mysql: migration-threshold=1000000 fail-count=1000000 last-failure='Tue Nov  8 17:27:25 2
022'
Failed Resource Actions:
  * ms_mysql_start_0 on @CENTRAL_NODE1_NAME@ 'error' (1): call=440, status='complete', exitreason='M
ariaDB slave io has failed (1236): Got fatal error 1236 from master when reading data from binary
log: 'Error: connecting slave', last-rc-change='Tue Nov  8 17:27:21 2022', queued=0ms, exec=4060ms
```

Si vous souhaitez que le nœud central 1 redevienne le nœud actif, vous devez procéder à un basculement.
**Avant cela, vous devez vérifier l'état du cluster et de la réplication de la base de données**.

Commencez par vérifier les contraintes :

```shell
pcs constraint
```

La commande doit renvoyer le résultat suivant :

```text
Location Constraints:
  Resource: cbd_rrd-clone
    Disabled on:
      Node: db1 (score:-INFINITY)
      Node: db2 (score:-INFINITY)
  Resource: centreon
    Disabled on:
      Node: db1 (score:-INFINITY)
      Node: db2 (score:-INFINITY)
      Node: central2 (score:-INFINITY) (role:Started)
  Resource: ms_mysql-clone
    Disabled on:
      Node: central1 (score:-INFINITY)
      Node: central2 (score:-INFINITY)
  Resource: php-clone
    Disabled on:
      Node: db1 (score:-INFINITY)
      Node: db2 (score:-INFINITY)
Ordering Constraints:
Colocation Constraints:
  vip_mysql with ms_mysql-clone (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-clone with vip_mysql (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:

```

Puis vérifiez la réplication de la base de données :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

À ce moment, le cluster est en mode dégradé avec deux nœuds passifs.
Dans ce cas particulier, il renvoie les informations suivantes car la ressource **ms_mysql** est arrêtée sur le nœud 1 :

```text
Connection SLAVE Status '@CENTRAL_NODE1_NAME@' [KO]
Error reports:
    ERROR 2002 (HY000): Can't connect to MySQL server on '@CENTRAL_NODE1_NAME@' (115)
Impossible de se connecter au serveur '@CENTRAL_NODE1_NAME@'.
Connection SLAVE Status '@CENTRAL_NODE2_NAME@' [OK]
Slave Thread Status [KO]
Error reports:
    Skip check on '@CENTRAL_NODE1_NAME@'.
    No slave (maybe because we cannot check a server).
Position Status [SKIP]
Error reports:
    Skip because we can't identify a unique slave.
```

Vous devez synchroniser la base de données de @CENTRAL_NODE2_NAME@ vers @CENTRAL_NODE1_NAME@ en exécutant le script « sync-bigdb » sur le **nœud passif**.

```shell
/usr/share/centreon-ha/bin/mysql-sync-bigdb.sh
```

Comme pour l'exécution précédente de ce script, vérifiez que le snapshot LVM est correctement supprimé et que la base passive est redémarrée :

```text
Umount and Delete LVM snapshot
  Logical volume "dbbackupdatadir" successfully removed.
Start MySQL Slave
OK
Start Replication
Id      User    Host    db      Command Time    State   Info    Progress
5       centreon-repl   @CENTRAL_NODE2_NAME@:51850        NULL    Query   0       starting        show processlist  0.000
6       centreon        localhost       centreon_storage        Sleep   0               NULL    0.000
7       system user             NULL    Connect 0       Connecting to master    NULL    0.000
8       system user             NULL    Slave_SQL       0       Slave has read all relay log; waiting for more updates    NULL    0.000
```

La réplication de la base de données devrait maintenant être correcte. Vérifiez ceci.

```shell
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Le résultat devrait être le suivant :

```text
Connection MASTER Status '@CENTRAL_NODE2_NAME@' [OK]
Connection SLAVE Status '@CENTRAL_NODE1_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

Vous pouvez maintenant effectuer un basculement pour revenir à la situation initiale.

```shell
pcs resource clear centreon
```

Effectuez un nettoyage pour éliminer les erreurs et redémarrez la ressource **ms_mysql** sur @CENTRAL_NODE1_NAME@.

```shell
pcs resource cleanup
```

La situation s'est stabilisée et vous pouvez effectuer un basculement en déplaçant la ressource **centreon**.

```shell
pcs resource move centreon
```

La ressource **centreon** est maintenant relocalisée et le cluster est OK. Vérifiez ceci avec `crm_mon -fr` sur n'importe quel noeud.

```text
Cluster Summary:
  * Stack: corosync
  * Current DC: @CENTRAL_NODE1_NAME@ (version 2.1.2-4.el8_6.3-ada5c3b36e2) - partition with quorum
  * Last updated: Wed Nov  9 10:23:54 2022
  * Last change:  Wed Nov  9 10:23:26 2022 by root via crm_attribute on @CENTRAL_NODE1_NAME@
  * 2 nodes configured
  * 12 resource instances configured
Node List:
  * Online: [ @CENTRAL_NODE1_NAME@ centreon-rhel8-sec ]
Full List of Resources:
  * Clone Set: ms_mysql-clone [ms_mysql] (promotable):
    * Masters: [ @CENTRAL_NODE1_NAME@ ]
    * Slaves: [ centreon-rhel8-sec ]
  * Clone Set: php-clone [php]:
    * Started: [ @CENTRAL_NODE1_NAME@ centreon-rhel8-sec ]
  * Clone Set: cbd_rrd-clone [cbd_rrd]:
    * Started: [ @CENTRAL_NODE1_NAME@ centreon-rhel8-sec ]
  * Resource Group: centreon:
    * vip       (ocf::heartbeat:IPaddr2):        Started @CENTRAL_NODE1_NAME@
    * http      (systemd:httpd):         Started @CENTRAL_NODE1_NAME@
    * gorgone   (systemd:gorgoned):      Started @CENTRAL_NODE1_NAME@
    * centreon_central_sync     (systemd:centreon-central-sync):         Started @CENTRAL_NODE1_NAME@
    * cbd_central_broker        (systemd:cbd-sql):       Started @CENTRAL_NODE1_NAME@
    * centengine        (systemd:centengine):    Started @CENTRAL_NODE1_NAME@
    * centreontrapd     (systemd:centreontrapd):         Started @CENTRAL_NODE1_NAME@
    * snmptrapd (systemd:snmptrapd):     Started @CENTRAL_NODE1_NAME@
Migration Summary:
```

## Voir les logs du cluster

Les journaux du cluster sont situés dans `/var/log/cluster/corosync.log`. Pour les afficher, utilisez la commande suivante :

```bash
tail -f /var/log/cluster/corosync.log
```

Des journaux utiles se trouvent également dans `/var/log/pacemaker/pacemaker.log`.

### Modifier le niveau de verbosité des journaux du cluster

Pour modifier le niveau de verbosité des journaux du cluster, modifiez les fichiers suivants :

* `/etc/sysconfig/pacemaker`
* `/etc/rsyslog.d/centreon-cluster.conf`

## Commandes avancées

### Supprimer un groupe de ressources Pacemaker

**Avertissement:** Ces commandes détruiront votre cluster Centreon. Ne le faites que si vous savez ce que vous faites.

Connectez-vous à un nœud du cluster et exécutez les commandes suivantes :

```bash
pcs resource delete centreon             \
                cbd_central_broker       \
                gorgone                  \
                snmptrapd                \
                centreontrapd            \
                http                     \
                centreon_central_sync    \
                vip
```

Si cela ne fonctionne pas, c'est probablement parce qu'une ressource se trouve dans un état **failed****. Exécutez les commandes suivantes pour supprimer la ressource :

```bash
crm_resource --resource [resource] -D -t primitive -C
pcs resource cleanup centreon
```
