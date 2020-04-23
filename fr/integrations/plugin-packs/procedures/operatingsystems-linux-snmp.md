---
id: operatingsystems-linux-snmp
title: Linux SNMP
---

## Vue d'ensemble

Linux est, au sens restreint, le noyau de système d'exploitation du même nom. Au sens large, il fait référence à tout système d'exploitation s'appuyant sur le noyau Linux.

## Contenu du Plugin-Pack

### Objets supervisés

Tous les systèmes d'exploitation s'appuyant sur le noyau Linux sont supportés: 

  * Centos 
  * Redhat
  * Debian
  * Ubuntu
  * ...

### Règles de découvertes

<!--DOCUSAURUS_CODE_TABS-->

<!--Host-->

| Nom de la règle                            | Description                                                                 |
| :----------------------------------------- | :-------------------------------------------------------------------------- |
| App-Protocol-SNMP-HostDiscovery            |  Découvrez vos serveurs Linux en scannant les agents SNMP sur un sous-réseau donné            |

<!--Services-->

| Nom de la règle                            | Description                                                                                  |
| :----------------------------------------- | :------------------------------------------------------------------------------------------- |
| OS-Linux-SNMP-Disk-Name                    | Découvre les disques/partitions et leur taux d'occupation                                   |
| OS-Linux-SNMP-Inodes-Name                  | Découvre les disques et supervise les Inodes                                                 |
| OS-Linux-SNMP-Packet-Errors-Name           | Découvre les interfaces réseaux et supervise les paquets en erreurs                          |
| OS-Linux-SNMP-Traffic-Name                 | Découvre les interfaces réseaux et supervise le statut et l'utilisation de la bande passante |

<!--END_DOCUSAURUS_CODE_TABS-->

## Métriques collectées

En plus des modes et des métriques détaillés ci-après, il est également possible de superviser les éléments suivants: 
  *  CPU detailed: Répartition détaillée de l'utilisation de la puissance de calcul (User, Nice, Idle etc...)
  *  Process state: Etat d'un ou plusieurs processus. Il est également possible de superviser la consommation de CPU et de mémoire RAM par processus
  *  TCP connection: Contrôle des connexions TCP en cours ainsi que leur statut (ESTABLISHED, ...)
  *  Uptime: Temps écoulé depuis le dernier redémarrage de l'équipement


<!--DOCUSAURUS_CODE_TABS-->

<!--cpu-->

| Metric name                        | Description                                   |
| :--------------------------------- | :-------------------------------------------- |
| cpu.utilization.percentage         | CPU utilization. Unit: %                      |
| core.cpu.utilization.percentage    | CPU Core utilization. Units: %                |

<!--Memory-->

| Metric name             | Description                                             |
| :---------------------  | :------------------------------------------------------ |
| memory.usage.bytes      | Memory usage on the device. Unit: Bytes                 |
| memory.free.bytes       | Free memory on the device. Unit: Bytes                  |
| memory.usage.percentage | Percentage of memory usage on the device. Unit: %       |
| memory.buffer.bytes     | Buffered Memory allocation. Unit: Bytes                 |
| memory.cached.bytes     | Cached Memory allocation. Unit : Bytes                  |
| memory.shared.bytes     | Shared Memory allocation. Unit : Bytes                  |

<!--Traffic-->

| Metric name                         | Description                                                      |
| :---------------------------------- | :--------------------------------------------------------------- |
| status                              | Status of the interface                                          |
| interface.traffic.in.bitspersecond  | Incoming traffic going through the interface. Units: B/s & %     |
| interface.traffic.out.bitspersecond | Outgoing traffic going through the interface. Units: B/s & %     |

Il est possible de filtrer sur le nom d'une interface en utilisant une REGEXP de la forme [```--interface='^ens160$' --name```]

<!--Swap-->

| Metric name                 | Description                                      |
| :-------------------------- | :----------------------------------------------- |
| swap.usage.bytes            | Swap usage Unit: Bytes                           |
| swap.free.bytes             | Swap free Unit: Bytes                            |
| swap.usage.percentage       | Swap usage Unit: %                               |

<!--Load-->

| Metric name                 | Description                                        |
| :-------------------------- | :------------------------------------------------- |
| load1                       | System load 1 minute sample                        |
| load5                       | System load 5 minutes sample                       |
| load15                      | System load 15 minutes sample                      |

<!--Disk-IO-->

| Metric name                 | Description                                          |
| :-------------------------- | :--------------------------------------------------- |
| disk\#sum_read_write         | I/O READ volume on all devices. Unit: B/s           |
| disk\#sum_read_write_iops    | I/O WRITE volume on all devices. Unit: B/s          |
| disk\#read                   | I/O READ volume on a specific device. Unit: B/s     |
| disk\#write                  | I/O WRITE volume on a specific device. Unit: B/s    |
| disk\#read_iops              | Number or read operation on a device. Unit: iops    | 
| disk\#write_iops             | Number or read operation on a device. Unit: iops    | 

<!--Storage-->

| Metric name                            | Description                                   |
| :------------------------------------- | :-------------------------------------------- |
| parition\#storage.space.usage.bytes    | Used space on a disk partition. Unit: Bytes  |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de superviser vos équipements Linux, le serveur SNMP doit être configuré sur ceux-ci. Les versions 2 et 3 sont recommandées. 

## Configuration du serveur SNMP 

:note: Les commandes ci-après peuvent changer en fonction de la distribution. Des documentations sont le cas échéant disponibles sur les sites officiels des éditeurs. 

Ci-dessous, un exemple de fichier snmpd.conf (remplacer **my-snmp-community** par la communauté que vous souhaitez utiliser).

```
com2sec notConfigUser  default       my-snmp-community
group   notConfigGroup v1           notConfigUser
group   notConfigGroup v2c           notConfigUser
view centreon included .1.3.6.1
view    systemview    included   .1.3.6.1.2.1.1
view    systemview    included   .1.3.6.1.2.1.25.1.1
access notConfigGroup "" any noauth exact centreon none none
access  notConfigGroup ""      any       noauth    exact  systemview none none
includeAllDisks 10%
```

Il est nécessaire de redémarrer le processus SNMP après avoir modifié le fichier de configuration. 

Assurez vous que le processus SNMP est configuré pour démarrer automatiquement lors du redémarrage du serveur.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur Centreon vers le serveur Linux supervisé. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des serveurs Linux:

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Installer le Plugin-Pack 'Linux SNMP' depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

<!--Offline IMP License-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des ressources Linux:

```bash
yum install centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Installer le RPM du Plugin-Pack contenant les modèles de supervision:

```bash
yum install centreon-pack-operatingsystems-linux-snmp
```

3. Installer le Plugin-Pack 'Linux SNMP' depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Dans le formulaire de création de l'hôte sur l'interface Web de Centreon, il est nécessaire de renseigner les valeurs pour les champs "Snmp Community" et "Snmp Version". 

  :warning: Si vous utilisez SNMP en version 3, selectionnez la version SNMP idoine et configurez les paramètres SNMP v3 via la macro SNMPEXTRAOPTIONS 

| Obligatoire | Nom              | Description                                    |
| :---------- | :--------------- | :--------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configure your own SNMPv3 credentials combo    |

## FAQ

### Comment tester un contrôle en ligne de commande et que signifient les options principales ?

A partir du moment ou le Plugin est installé, vous pouvez tester directement celui-ci en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl
    --plugin=os::linux::snmp::plugin
    --mode=cpu
    --hostname=10.30.2.114
    --snmp-version='2c'
    --snmp-community='linux_ro'
    --verbose
```

Cette commande contrôle l'utilisation CPU (```--mode=cpu```). d'un équipement ayant pour adresse 10.30.2.114 (```--hostname=10.30.2.114```) en version 2 du protocol SNMP et avec la communauté *linux_ro* (```--snmp-community='linux_ro'```) 

Tous les modes disponibles pour le Plugin peuvent être listés via la commande suivante:

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --list-mode
```

Les options des différents modes sont consultables via le paramètre ```--help``` du mode: 

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --mode=cpu \
    --help
```

### UNKNOWN: SNMP GET Request : Timeout

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter le serveur Linux sur le port 161, ou alors que la communauté SNMP configurée n'est pas correcte. Il est également possible qu'un firewall bloque le flux.

### UNKNOWN: SNMP GET Request : Cant get a single value.

Si vous rencontrez cette erreur, il est probable que les autorisations données à l'agent SNMP soient trop restreintes. 

Si cela se produit sur le mode Inodes, il est probable que le service SNMP du serveur Linux ne soit pas correctement configuré, il vous faut ajouter la directive ci-dessous dans le fichier de configuration SNMP puis redémarrer le service: 

```includeAllDisks 10%```
