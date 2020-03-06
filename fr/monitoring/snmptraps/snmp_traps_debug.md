---
id: debug-snmp-traps
title: Déboguer la gestion des traps SNMP
---

## Déboguer les interruptions SNMP

Plusieurs éléments sont impliqués dans la gestion des traps SNMP. En cas de problème, il faut vérifier le bon
fonctionnement de son architecture, il y a plusieurs choses à vérifier.

### Configuration de l’émetteur

e premier point à contrôler est la configuration de l’équipement ou application qui a émis l’interruption que vous
auriez dû recevoir. Vérifiez l’adresse IP ou nom DNS de destination, la communauté SNMP ainsi que la version du
protocole.

### Pare-feux réseau et logiciels, routage

Le second point à contrôler sont les autorisations des pare-feux réseau et logiciels ou la mise en place d’un routage
spécifique. Si un ou plusieurs pare-feux réseau sont présent ou si une translation de port et/ou d’adresse IP est en
place, vérifiez que le flux est possible entre l’émetteur et le collecteur. L’utilisation de sondes réseau, de
débogage des équipements réseau (pare-feux et routeurs) ou des logiciels tcpdump/wireshark sur le collecteur peut vous
permettre de valider la réception du flux de données sur le port UDP 162.

### Snmptrapd

Une fois la réception du flux validé, vérifiez l’état de fonctionnement du processus snmptrapd, qui doit être en cours
d’exécution, ainsi que ses options de configuration. Il est possible d’activer la journalisation du processus. Pour
cela modifiez le fichier **/etc/sysconfig/snmptrapd.option** et remplacez la ligne "OPTIONS" pour avoir :
```Bash
# snmptrapd command line options
# OPTIONS="-On -d -t -n -p /var/run/snmptrapd.pid"
OPTIONS="-On -Lf /var/log/snmptrapd.log -p /var/run/snmptrapd.pid"
```

Redémarrez le processus pour prendre en compte les modifications. Ainsi, pour toute réception de traps SNMP, ces
évènements seront inscrit dans le journal **/var/log/snmptrapd.log**. Si les évènements sont inscrit dans le journal,
supprimez la journalisation et passez à l’étape suivante.

Dans le cas où vous filtrez par communauté SNMP, vérifiez les communautés autorisées dans le fichier de configuration
**/etc/snmp/snmptrapd.conf**. Si après toutes ces vérifications les traps SNMP ne sont pas inscrites dans le journal,
vérifiez que le processus écoute sur le port UDP 162 pour les équipements distants en utilisant la commande :
```Bash
netstat -ano | grep 162
```

Vous devez avoir un résultat comme :
```Bash
udp        0      0 0.0.0.0:162             0.0.0.0:*                           off (0.00/0/0)
```

Si tel n’est pas le cas, modifiez le port d’écoute du processus.

> On ne le répète jamais assez mais désactivez le débogage du processus après validation du fonctionnement. Dans le cas
> contraire, la volumétrie des journaux peut être très importante.

### Centreontrapdforward

Une fois la validation du processus snmptrapd réalisée, contrôlez le processus centreontrapdforward. La première étape
consiste à vérifier l’appel de ce processus par snmptrapd dans le fichier **/etc/snmp/snmptrapd.conf** :

Vérifier que le service snmptrapd appelle bien centreontrapdforward. Pour cela, éditez le fichier **/etc/snmp/snmptrapd.conf**
et vérifiez que le fichier contient :
```Bash
traphandle default su -l centreon -c "/usr/share/centreon/bin/centreontrapdforward"
```

Si l’accès au fichier est incorrect, modifiez le et redémarrez le processus snmptrapd. Vous pouvez contrôler le bon
fonctionnement du binaire centreontrapdforward en vous rendant au chapitre de configuration de
[centreontrapdforward](#centreontrapdforward).

### Centreontrapd

Le prochain binaire est celui de Centreon qui permet de sélectionner l’hôte possédant l’adresse IP ou le nom DNS de
l’émetteur ainsi que le service lié à cet hôte et auquel est reliée la définition de l’interruption SNMP. Pour vérifier
son fonctionnement, il convient de vérifier les paramètres de configuration de centreontrapd.

Vous pouvez vérifier la bonne configuration de centreontrapd au sein du chapitre de configuration de
[centreontrapd](#centreontrapd).

### CentCore

Dans le cas d’un serveur central, le processus Centcore doit être démarré pour transférer la commande externe à
l’ordonnanceur supervisant l’émetteur, vérifiez son état de fonctionnement. Activez le débogage du processus via le
menu **Administration \> Options \> Debug** et redémarrez le processus.

> Vous pouvez modifier le niveau de débogage du processus via le fichier **/etc/sysconfig/centcore** en modifiant la
> sévérité.

En cas de non réception de la commande externe, vérifiez le chemin d’accès au fichier de commande du processus défini
dans la variable "$cmdFile" du fichier de configuration **/etc/centreon/conf.pm**. Le chemin doit être 
**/var/lib/centreon/centcore.cmd** dans le cas d’un serveur central ou le chemin vers le fichier de commande de
l’ordonnanceur.

### Ordonnanceur

Que vous ayez configuré un serveur central ou un collecteur distant pour la réception de trap SNMP, l’ordonnanceur
doit recevoir la commande externe de changement de statut et/ou de message de sortie ("output"). Vérifiez le journal
de l’ordonnanceur. Dans le cas de Centreon Engine le fichier est **/var/log/centreon-engine/centengine.log**.

Les lignes suivantes doivent apparaître :
```Bash
[1352838428] EXTERNAL COMMAND: PROCESS_SERVICE_CHECK_RESULT;Centreon-Server;Traps-SNMP;2;Critical problem
[1352838433] PASSIVE SERVICE CHECK: Centreon-Server;Traps-SNMP;2;Critical problem
```

Si seule la commande externe apparaît mais pas la prise en compte de celle-ci par l’ordonnanceur ("PASSIVE SERVICE CHECK""),
il se peut qu’un problème de synchronisation de l’horloge système soit en cause. Le serveur est soit en retard et la
commande sera traitée ultérieurement, soit en avance et la commande ne sera pas prise en compte.

### InterfaceCentreon

Afin d’être visible dans Centreon, l’ordonnanceur doit transmettre les informations, via son module NEB, à la partie
serveur du broker pour que ce dernier l’insère en base de données. Centreon affichera ensuite le résultat à partir de
la base de données « centreon_storage ». S’il vous est possible de visualiser les informations des derniers contrôles
de votre collecteur dans l’interface web, alors vous devriez voir le statut et le message de sortie ("output") de
modifiés. Si tel n’est pas le cas, alors votre ordonnanceur n’est pas connecté à la partie serveur de votre broker. Les
problèmes peuvent être les suivants :

* L’ordonnanceur n’a pas chargé le module NEB à son démarrage car celui-ci est introuvable ou non défini dans les
  options de l’ordonnanceur
* Le module NEB n’a pu se connecter à la partie serveur à cause d’un problème de paramétrage.
* Un pare-feu bloque la connexion entre le collecteur et le serveur Centreon qui héberge la base de données. La partie
  serveur du broker n’est pas fonctionnelle ou n’est pas en cours d’exécution

### Schéma détaillé

Vous trouverez ci-dessous un schéma détaillé de tous les processus utilisés et/ou présents lors de la réception d’une
interruption SNMP :

![image](assets/configuration/kcentreontrapd_schema.png)
