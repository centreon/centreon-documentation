---
id: recette-guide
title: Faire la recette du cluster
---

> Sauf mention contraire, toutes les commandes présentées dans ce document sont à lancer en tant que `root`.

> Dans ce document, nous ferons référence à des paramètres variant d'une installation à une autre (noms et adresses IP des nœuds par exemple) par l'intermédiaire des [macros définies ici](../../installation/installation-of-centreon-ha/installation-2-nodes.html#définition-des-noms-et-adresses-ip-des-serveurs)

## Condition des test

Afin d'effectuer la recette du fonctionnement de votre cluster, nous allons effectuer un test de bascule et également simuler un coupure réseau sur le cluster.

Concernant la coupure réseau, cela se fait normalement à un niveau physique en retirant le câble réseau ou un commutateur pour simuler le scénario du monde réel où le système d'exploitation n'a aucun contrôle ou indication d'un problème à part le fait que le cluster ne peut plus communiquer.
Cependant, dans notre cas, nous allons utiliser iptables et laisser tomber les paquets sur l'adresse IP qui est configurée pour la communication.

Commençons par les vérification afin d'étre en condition pour la effectuer les tests de recette.

### Vérifier l'état du cluster

Pour Vérifier l'état général du cluster exécuter la commande :

```bash
crm_mon -f
```

Votre écran affichera les informations suivantes :

```bash
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
 Clone Set: php7-clone [php7]
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

> Vérifier les erreurs de type `Failed` présentes sur les ressources et corriger ces dernières en vous aidant du [guide de troubleshooting](troubleshooting-guide.html).

### Vérifier les contraintes 

Pour vérifier qu'il n'y ait pas de contraintes, exécuter la commande: 

```bash
pcs constraint
```

La commande doit vous retourner ceci :

```bash
Location Constraints:
Ordering Constraints:
Colocation Constraints:
  centreon with ms_mysql-master (score:INFINITY) (rsc-role:Started) (with-rsc-role:Master)
  ms_mysql-master with centreon (score:INFINITY) (rsc-role:Master) (with-rsc-role:Started)
Ticket Constraints:
```

### Vérifier le status de la synchronisation des bases

Pour vérifier que la synchronisation des bases fonctionne, exécuter la commande :

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Le résultat attendu est  :

```bash
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> Si la synchronisation présente des `KO` vous devez corriger ces dernières en vous aidant du [guide d'opération](operating-guide.html).

## Comment tester

Une fois que toutes les vérifications ont été faite vous pouvez commencer à faire les tests.

### Bascule des resource Centreon
#### Pré-requis
Avant la bascule, vous devez avoir cette sortie avec la commande `crm_mon -f` :

```bash
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
 Clone Set: php7-clone [php7]
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
#### Bascule
Pour basculer/déplacer une ressource exécuter la commande :

```bash
pcs resource move centreon
```

> Attention : La commande `pcs resource move centreon` positionne une contrainte `-INFINITY` sur le nœud hébergeant la ressource qui n'est plus autorisée à être en fonctionnement sur ce nœud. De ce fait, la ressource bascule sur un autre nœud. Suite à cette manipulation, il est donc nécessaire d'exécuter la commande `pcs resource clear centreon` pour permettre à cette ressource de basculer à nouveau sur ce nœud à l'avenir.

Vérifier les étapes de bascules avec la commande `crm_mon -f` et que les resources soient présentent sur le second noeud :

```bash
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
 Clone Set: php7-clone [php7]
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

Une fois que la bascule est terminé, exécuter la commande :

```bash
pcs resource clear centreon
```

> Ceci permettra de retirer les contraintes établie lors de la bascule.

#### Vérification de la synchronisation des bases

Par la suite, il faut vérfier que la synchronisation des bases de données est fonctionnelle avec la commande de la première partie. 

```bash
/usr/share/centreon-ha/bin/mysql-check-status.sh
```

Le résultat attendu est  :

```bash
Connection Status '@CENTRAL_MASTER_NAME@' [OK]
Connection Status '@CENTRAL_SLAVE_NAME@' [OK]
Slave Thread Status [OK]
Position Status [OK]
```

> Si la synchronisation présente des `KO` vous devez corriger ces dernières en vous aidant du [guide d'opération](operating-guide.html).

#### Retour en situation nominal

Afin de revenir en situation nominal, vous devez lancer la bascule pour que les resources.
Exécuter la commande `crm_mon -f` afin de vérifier s'il n'y a pas d'erreur

```bash
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
 Clone Set: php7-clone [php7]
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

Ensuite, lancer la commande de nettoyage des contraintes au cas où vous avez :

```bash
pcs resource clear centreon
```

Puis, lancer la commande de bascule

```bash
pcs resource move centreon
```

Comme tout à l'heure, attendait que la bascule soit termniner avec le `crm_mon -f`

Enfin, nettoyer les contraintes avec la commande :

```bash
pcs resource clear centreon
```

### Simuler la perte du noeud secondaire
#### Contexte

Nous allons ici simuler la coupure réseau du point de vue que le serveur primaire ne voit plus le secondaire.
Le noeud secondaire sera complètement exclut du cluster. Le noeud principal garde la majorité avec le QDevice.

#### Exécution 

Afin de réaliser ce test, lancer les commandes sur le serveur principal :

```bash
iptables -A INPUT -s @IP_SECONDARY_NODE@ -j DROP ; iptables -A OUTPUT -d @IP_SECONDARY_NODE@ -j DROP
```
L'exécution de la commande à pour effet de ne voir aucune resource active sur le second noeud et de voir le noeud primaire comme `offline`:

```bash
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

En exécutant un `crm_mon` sur le premier noeud, les resources et le cluster fonctionne toujours.
Le noeud secondaire est vue `offline` sur le primaire.

```bash
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
 Clone Set: php7-clone [php7]
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

#### Retour en situation nominal

Vérifier les différentes règles que vous avez lancé :

```bash
iptables -L
```

Elles se présenteront comme ceci

```bash
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

Une fois les règles vérifier, et afin de revenir en status nominal exécuter cette commande :

```bash
iptables -F
```
Le noeud secondaire est de nouveau vu `online` par le cluster :

```bash
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
 Clone Set: php7-clone [php7]
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

### Simuler la perte du noeud primaire

#### Contexte

Nous allons ici simuler la coupure réseau en isolant le second noeud du premier ainsi que du QDevice
Le noeud primaire sera complètement seul et il sera le seul votant. Ceci à pour effet que le noeud secondaire garde la majorité avec le QDevice.

#### Réalisation
Afin de réaliser ce test, lancer les commandes sur le serveur principal :

```bash
iptables -A INPUT -s @CENTRAL_SLAVE_IP@ -j DROP ; iptables -A OUTPUT -d @CENTRAL_SLAVE_IP@ -j DROP; iptables -A INPUT -s @QDEVICE_IP@ -j DROP ; iptables -A OUTPUT -d @QDEVICE_IP@  -j DROP
```

Le résultat attendu est la coupure du primaire noeuds sur le cluster comme ci-dessous avec la commande `crm_mon` sur le noeud secondaire.

```bash
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
 Clone Set: php7-clone [php7]
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

Le noeud primaire n'apparait plus dans le cluster et il reste tout à fait disponible.
Les resources ont basculés sur le noeud secondaire.

Sur le nom principale, il voit que le noeud secondaire est `offline` et aucune resource est démarré dessus.

```bash
Stack: corosync
Current DC: @CENTRAL_MASTER_NAME@ (version 1.1.23-1.el7_9.1-9acf116022) - partition WITHOUT quorum
Last updated: Fri Jul  9 15:40:14 2021
Last change: Fri Jul  9 15:12:43 2021 by root via crm_resource on @CENTRAL_MASTER_NAME@

2 nodes configured
14 resource instances configured

Online: [ @CENTRAL_MASTER_NAME@ ]
OFFLINE: [ @CENTRAL_SLAVE_NAME@ ]

No active resources
```

Ce test permet de vérifier et affirmer qu'en cas d'insdisponibilité du noeud principale, les resources basculeront sur le noeud secondaires 
et permet une continuité de service.

#### Retour en situation nominal

Vérifier les différentes règles que vous avez lancé :

```bash
iptables -L
```

Elles se présenteront comme ceci

```bash
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

Une fois les règles vérifier, et afin de revenir en status nominal exécuter cette commande :

```bash
iptables -F
```

En lancant la commande `crm_mon` sur le second noeud, vous verrez le noeud principal remonter dans le cluster.
Si vous souhaitez basculer sur le noeud primaire, exécuter les [commandes de bascule](recette-guide.html#retour-en-situation-nominal).
