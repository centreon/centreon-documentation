---
id: operatingsystems-linux-nrpe.
title: Linux NRPE
---


## Vue d'ensemble

Linux est, au sens restreint, le noyau de système d'exploitation du même nom. Au sens large, il fait référence à tout système d'exploitation s'appuyant sur le noyau Linux.

## Contenu du pack de supervision

### Objets supervisés

Vous pouvez superviser les vos serveurs Centos et Redhat en utilisant l'agent Centreon NRPE. 

    * Centos 
    * Redhat                    

## Métriques collectées

En plus des modes et des métriques détaillés ci-après, il est également possible de superviser les éléments suivants:

* Cmd-Generic: Test d'une commande en shell
* Connections-Generic: Vérification des connexions UPD et TCP
* Cpu-Detailed: Répartition détaillée de l'utilisation de la puissance de calcul (User, Nice, Idle etc...)
* Disk IO (by Name of disk or Global) : Vérification des I/O des disques
* File (by Date or Size): Vérification de la date et de la taille d'un fichier ou d'un dossier
* Inodes (by Name or Global): Vérification des inodes des partitions 
* Test is File or not: Vérification de l'existance d'un fichier
* Packet Error (by interface Name or Global): Vérification des erreurs des interfaces
* Process Generic: Liste les processus du serveur 
* Uptime: Vérification du nombre de jour depuis le dernier rédémarrage

<!--DOCUSAURUS_CODE_TABS-->

<!--Cpu-->

| Metric name                        | Description                       |
| :--------------------------------- | :-------------------------------- |
| cpu.utilization.percentage         | CPU utilization. Unit: %          |
| core.cpu.utilization.percentage    | CPU Core utilization. Units: %    |

<!--Memory-->

| Metric name             | Description                                           |
| :---------------------  | :---------------------------------------------------- |
| used                    | Memory used on the device. Unit: %                    |
| buffer_used             | Buffered Memory allocation. Unit: Bytes               |
| cached_used             | Cached Memory allocation. Unit : Bytes                |
| slab_used               | Slab Memory allocation Unit: Megabyte                 |


<!--Traffic-->

| Metric name                         | Description                                                   |
| :---------------------------------- | :------------------------------------------------------------ |
| status                              | Interface status                                              |
| traffic_in                          | Incoming traffic going through the interface. Units: B/s & %  |
| traffic_out                         | Outgoing traffic going through the interface. Units: B/s & %  |                              

Il est possible de filtrer sur le nom d'une interface en utilisant une REGEXP de la forme [--interface='^ens160$' --name]

<!--Swap-->

| Metric name                   | Description                        |
| :---------------------------- | :--------------------------------- |
| swap.usage.bytes              | Swap usage Unit: Bytes             |
| swap.free.bytes               | Swap free Unit: Bytes              |
| swap.usage.percentage         | Swap usage Unit: %                 |

<!--Load-->

| Metric name                   | Description                                                    |
| :---------------------------- | :------------------------------------------------------------- |
| load1                         | System load 1 minute sample                                    |
| load5                         | System load 5 minutes sample                                   |
| load15                        | System load 15 minutes sample                                  |

<!--Disk-IO-->

| Metric name                            | Description                                                    |
| :------------------------------------- | :------------------------------------------------------------- |
| device.io.read.usage.bytespersecond    | I/O READ volume on all devices. Unit: B/s                      |
| device.io.write.usage.bytespersecond   | I/O WRITE volume on all devices. Unit: B/s                     |
| device.io.read.time.milliseconds       | I/O READ volume on a specific device. Unit: B/s                |
| device.io.write.time.milliseconds      | I/O WRITE volume on a specific device. Unit: B/s               |
| device.io.utils.percentage             | I/O utilization on a specific device. Units: %                 |

<!--Storage-->

| Metric name                   | Description                                                    |
| :---------------------------- | :------------------------------------------------------------- |
| partition#used                | Used space on a disk partition. Unit: Bytes                    |


<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Voici la liste des prérequis afin de superviser vos serveurs Linux : 

* Avoir les dépôts officiels de Centreon
* Installer le daemon Centreon NRPE
* Installer le plugin centreon-pack-operatingsystems-linux-nrpe
* Faire un gitclone du github centreon-plugin dans le dossier /usr/lib64/nagios/plugins/centreon_plugins.pl

## Configuration de l'agent Centreon NRPE

:note: Les commandes ci-après peuvent changer en fonction de la distribution ou de la version. Des documentations sont le cas échéant disponibles sur les sites officiels des éditeurs.

Ci-dessous, un exemple de fichier centreon-nrpe.cfg (remplacer l'IP dans allowed_hosts de votre collecteur).

```
# Note: The daemon only does rudimentary checking of the client's IP
# address.  I would highly recommend adding entries in your /etc/hosts.allow
# file to allow only the specified host to connect to the port
# you are running this daemon on.
#
# NOTE: This option is ignored if NRPE is running under either inetd or xinetd

allowed_hosts=127.0.0.1
```

Il est nécessaire de redémarrer le processus Centreon NRPE après avoir modifié le fichier de configuration. 

Assurez vous que le processus Centreon NRPE est configuré pour démarrer automatiquement lors du redémarrage du serveur.

## Flux réseau

La communication doit être possible sur le port 5666 depuis le collecteur de supervision vers le serveur Linux.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le pack depuis la page "Configuration > Plugin packs > Manager":

<insert-screen> @TODO@

<!--END_DOCUSAURUS_CODE_TABS-->

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur l'ensemble des collecteurs Centreon supervisant des serveurs Linux:

```bash
yum install centreon-nrpe-plugin
```

2. Installer le Plugin-Pack 'Linux NRPE' depuis la page "Configuration > Plugin packs > Manager" sur l'interface Web de Centreon.

<!--Offline IMP License-->

1. Installer les Plugins sur l'ensemble des collecteurs Centreon supervisant des serveurs Linux:

```bash
yum install centreon-nrpe-plugin
```

2. Installer le RPM du Plugin-Pack contenant les modèles de supervision:

```bash
yum install centreon-pack-operatingsystems-linux-nrpe
```

3. Installer le Plugin-Pack 'Linux NRPE' depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS--> 

## FAQ

### Comment tester un contrôle en ligne de commande et que signifient les options principales ?

A partir du moment ou le Plugin est installé, vous pouvez tester directement celui-ci en ligne de commande depuis votre collecteur Centreon avec l'utilisateur centreon-engine:

```bash
/usr/lib64/nagios/plugins/check_centreon_nrpe
	-H 127.0.0.1
	-p 5666
	-t 30
	-u
	-m 8192
	-c check_centreon_plugins
	-a 'os::linux::local::plugin' 'process'  "
	--warning=
	--critical=
	--warning-time=
	--critical-time=
	--filter-command='centreon-nrpe'
	--filter-arg=''
	--filter-state='' 
	--verbose"
    
OK: Number of current processes: 3 | 'nbproc'=3;;;0;
Process: [command => centreon-nrpe] [arg => /usr/sbin/centreon-nrpe -c /etc/nrpe/centreon-nrpe.cfg -d -m 8192] [state => InterruptibleSleep]
Process: [command => centreon-nrpe] [arg => /usr/sbin/centreon-nrpe -c /etc/nrpe/centreon-nrpe.cfg -d -m 8192] [state => InterruptibleSleep]
Process: [command => centreon-nrpe] [arg => /usr/sbin/centreon-nrpe -c /etc/nrpe/centreon-nrpe.cfg -d -m 8192] [state => InterruptibleSleep]```

Cette commande contrôle le nombre et le status d'un processus (```--mode=process```) d'un serveur ayant pour adresse 10.30.2.114 (```--hostname=10.30.2.114```) avec un filtre avec le nom du processus centreon-nrpe (```--filter-command='centreon-nrpe'```)

Tous les modes disponibles pour le Plugin peuvent être listés via la commande suivante:

```
/usr/lib/centreon/plugins/centreon_linux_local.pl 
	--plugin=os::linux::local::plugin 
	--list-mode
```

Les options des différents modes sont consultables via le paramètre ```--help``` du mode: 

```
/usr/lib/centreon/plugins/centreon_linux_local.pl 
	--plugin=os::linux::local::plugin 
	--mode=process 
	--help
```

### UNKNOWN: CHECK_NRPE: Socket timeout after 10 seconds

Si vous obtenez ce message, cela signifie que vous ne parvenez pas à contacter le serveur Linux sur le port 5666, ou alors que l'adresse IP du collecteur configurée sur l'agent Centreon NRPE n'est pas correcte. Il est également possible qu'un firewall bloque le flux.
