---
id: operatingsystems-linux-nrpe3
title: Linux NRPE3
---

## Vue d'ensemble

NRPE (Nagios Remote Plugin Executor) est un protocole qui a été conçu pour lancer à distance des commandes de supervision locales sur les serveurs supervisés. 

Ce pack de plugin repose sur 3 composants, qui sont détaillés dans le tableau ci-dessous.

| Composant                 | Type               | Emplacement       | Rôle                                                                                                    |
| ------------------------- | ------------------ | ----------------- | ------------------------------------------------------------------------------------------------------- |
| `centreon_nrpe3_plugin`   | Binaire exécutable | Poller            | Transmet un nom de commande et des arguments associés à celle-ci                                        |
| `centreon_linux_local.pl` | Script Perl        | Serveur supervisé | S'exécute localement et retourne un statut, un message d'information et des métriques                   |
| `centreon-nrpe3`          | Service/daemon     | Serveur supervisé | Écoute sur le port 5666 et exécute les commandes demandées si elles sont définies dans sa configuration |

## Contenu du Plugin-Pack

### Objets supervisés

#### Types d'équipements

* Serveur Linux CentOS 7 / RHEL7 (documenté dans la présente procédure)
* Serveur Linux d'autres distributions, à condition d'y installer manuellement le plugin et le *daemon* NRPE3 (2e et 3e lignes du tableau ci-dessus).

### Métriques collectées

Seules les métriques sont détaillées dans cette section, mais sachez qu'un grand nombre de tests et de métriques peuvent être fournies par le Plugin `centreon_linux_local.pl`. En voici une liste non exhaustive :

* Cmd-Generic :  Vérifier le retour d'une commande
* Connections-Generic : Vérifier les connections TCP/UDP
* Cpu-Detailed : Vérifier l'utilisation moyenne des CPU (User, Nice, System,
Idle, Wait, Interrupt, SoftIRQ, Steal, Guest, GuestNice)
* Disk-Generic-Name : Vérifier l'utilisation des disques (une seule partition)
* Disk-Global : Vérifier l'utilisation des disques (toutes les partitions ou
filtrage par expression régulière)
* Disk-IO-Generic-Name : Vérifier les IO disques (une seule partition)
* Disk-IO-Global : Vérifier les IO disques (toutes les partitions ou filtrage
par expression régulière)
* File-Date-Generic : Vérifier la date (modification, création) d'un fichier ou
d'un répertoire
* File-Size-Generic : Vérifier la taille d'un fichier ou d'un répertoire
* Inodes-Generic-Name : Vérifier l'utilisation des inodes (une seule partition)
* Inodes-Global : Vérifier l'utilisation des inodes (toutes les partitions ou 
filtrage par expression régulière)
* Is-File-Generic : Vérifier la présence d'un fichier
* Is-Not-File-Generic : Vérifier l'absence d'un fichier
* Packet-Errors-Generic-Name : Vérifier le nomdre de paquets réseau en erreur
(une seule interface)
* Packet-Errors-Global : Vérifier le nomdre de paquets réseau en erreur (toutes
les partitions ou filtrage par expression régulière)
* Process-Generic : Vérifier qu'un processus est en cours d'exécution
* Traffic-Generic-Name : Vérifier la consommation de bande passante sur une interface
* Traffic-Global : Vérifier la consommation de bande passante (toutes les 
partitions ou filtrage par expression régulière)

Voici les métriques collectées pour les services liés au modèle dhôte par défaut :

<!--DOCUSAURUS_CODE_TABS-->
<!--Cpu-->

| Métrique                            | Description                   | Unité |
| :---------------------------------- | :---------------------------- | :---: |
| `0#core.cpu.utilization.percentage` | Utilisation moyenne du cœur 0 |   %   |
| `1#core.cpu.utilization.percentage` | Utilisation moyenne du cœur 1 |   %   |
| ...                                 | ...                           |   %   |
| `cpu.utilization.percentage`        | Utilisation moyenne globale   |   %   |

<!--Load-->

| Métrique | Description                           | Unité |
| :------- | :------------------------------------ | :---: |
| `load1`  | Charge système moyenne sur 1 minute   |       |
| `load5`  | Charge système moyenne sur 5 minutes  |       |
| `load15` | Charge système moyenne sur 15 minutes |       |

<!--Memory-->

| Métrique | Description                 | Unité |
| :------- | :-------------------------- | :---: |
| `buffer` | Mémoire allouée aux buffers |   B   |
| `cached` | Mémoire allouée en cache    |   B   |
| `slab`   | Allocation Slab             |   B   |
| `used`   | Mémoire consommée totale    |   B   |

<!--Swap-->

| Métrique                | Description                       | Unité |
| :---------------------- | :-------------------------------- | :---: |
| `swap.free.bytes`       | Espace d'échange non utilisé      |   B   |
| `swap.usage.bytes`      | Espace d'échange utilisé          |   B   |
| `swap.usage.percentage` | Utilisation de l'espace d'échange |   %   |

<!--Uptime-->

| Métrique | Description                                | Unité |
| :------- | :----------------------------------------- | :---: |
| `uptime` | Temps écoulé depuis le dernier redémarrage |   s   |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Les prérequis ci-dessous sont indispendables pour que le plugin pack puisse fonctionner correctement.

### Flux réseau

Le port TCP par défaut pour le protocole NRPE est le port 5666.

| Source | Destination    | Protocole | Port |
| ------ | -------------- | --------- | ---- |
| Poller | Hôte supervisé | TCP       | 5666 |

### Installation de l'agent NRPE packagé par Centreon et sonde Linux locale

Les hôtes supervisés ont besoin de deux composants pour que cela fonctionne :

* la sonde `centreon_linux_local.pl`
* L'agent (*daemon*) NRPE3

Installer les paquets suivants :

<!--DOCUSAURUS_CODE_TABS-->
<!--RHEL / CentOS / Oracle Linux 8-->
```shell
dnf install -y http://yum.centreon.com/standard/21.04/el8/stable/noarch/RPMS/centreon-release-21.04-1.el8.centos.noarch.rpm
dnf install centreon-nrpe3-daemon.x86_64 centreon-plugin-Operatingsystems-Linux-Local.noarch
```
<!--CentOS 7-->
```shell
yum install -y http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-release-21.04-4.el7.centos.noarch.rpm
yum install centreon-nrpe3-daemon.x86_64 centreon-plugin-Operatingsystems-Linux-Local.noarch
```
<!--END_DOCUSAURUS_CODE_TABS-->

> **NB :** Pour éviter l'ajout du dépôt Centreon sur tous vos serveurs, il est possible instller directement les paquets `http://yum.centreon.com/standard/21.04/el7/stable/noarch/RPMS/centreon-plugin-Operatingsystems-Linux-Local-20201006-142255.el7.centos.noarch.rpm` et `http://yum.centreon.com/standard/21.04/el7/stable/x86_64/RPMS/centreon-nrpe3-daemon-3.2.1-8.el7.centos.x86_64.rpm` (versions courantes au moment de la rédaction de cette documentation) **mais dans ce cas il ne sera pas possible de les mettre à jour par un `yum update`**.

### Configuration de NRPE

Pour que le(s) poller(s) puisse(nt) superviser les hôtes, il est nécessaire d'adapter le paramètre `allowed_hosts` dans le fichier `/etc/nrpe/centreon-nrpe3.cfg` 

```ini
[...]
# ALLOWED HOST ADDRESSES
# This is an optional comma-delimited list of IP address or hostnames
# that are allowed to talk to the NRPE daemon. Network addresses with a bit mask
# (i.e. 192.168.1.0/24) are also supported. Hostname wildcards are not currently
# supported.
allowed_hosts=127.0.0.1,::1
[...]
```

Et redémarrer le service :

```bash
systemctl restart centreon-nrpe3.service
```

## Installation

### Plugin-Pack

L'installation du Plugin-Pack en lui-même ne concerne que le serveur central et la procédure dépend du type de licence.

<!--DOCUSAURUS_CODE_TABS-->

<!--Licence IMP/EPP "Online" & IT-100 Editions-->

Installer le Plugin-Pack "Linux NRPE3" depuis la page "Configuration > Plugin Packs > Manager".

<!--Licence IMP/EPP "Offline"-->

1. Installer le RPM du Plugin-Pack contenant les modèles de supervision sur le serveur Centreon Central:

```bash
yum install centreon-pack-operatingsystems-linux-nrpe3
```

2. Installer le Plugin-Pack "Linux NRPE3" depuis la page "Configuration > Plugin Packs > Manager".

<!--END_DOCUSAURUS_CODE_TABS-->

### Centreon NRPE3 Plugin

Pour commencer, installer le plugin NRPE3, qui permettra au poller de communiquer avec les agents NRPE3 :

```bash
yum install centreon-nrpe3-plugin
```

### Validation de l'ensemble des prérequis

Si tout a été correctement installé et configuré, la commande :

```bash
/usr/lib64/nagios/plugins/check_centreon_nrpe3 -H monitored_host_ip -p 5666
```

devrait aboutir au résultat suivant :

```text
NRPE v3.2.1
```

Dans le cas contraire, se référer à la section [troubleshooting](#troubleshooting).

## Configuration de l'hôte dans Centreon

Créer un nouvel hôte dans Centreon et lui appliquer le modèle d'hôte "OS-Linux-NRPE3-custom". 

Une fois le modèle appliqué, il est possible de modifier les macros suivantes :

| Nom              | Description                                                                                                                        | Obligatoire |
| :--------------- | ---------------------------------------------------------------------------------------------------------------------------------- | :---------: |
| NRPECLIENT       | Nom de la sonde employée pour dialoguer avec l'agent NRPE3 (par défaut `check_centreon_nrpe3`)                                     |      X      |
| NRPEPORT         | Port sur lequel écoute l'agent NRPE3 (par défaut 5666)                                                                             |      X      |
| NRPETIMEOUT      | Temps maximum autorisé pour exécuter la commande (par défaut 5s)                                                                   |      X      |
| NRPEEXTRAOPTIONS | Options supplémentaires (par défaut `-u` pour que la sonde NRPE retourne un état `UNKNOWN` en cas d'erreur de connexion à l'agent) |             |

## FAQ

### Comment ça marche ?

Voici une commande qui permet de surveiller la consommation CPU d'un serveur Linux dont l'adresse IP est `x.x.x.x` :

```bash
/usr/lib64/nagios/plugins/check_centreon_nrpe3 \
    -H x.x.x.x \
    -p 5666 -t 5 -u \
    -c check_centreon_plugins \
    -a 'os::linux::local::plugin' 'cpu'  '  --statefile-dir=/var/log/nrpe/centplugins'
```

Cette commande devrait afficher un retour de la forme :

```text
OK: CPU(s) average usage is: 1.16% | 'cpu0'=1.64%;;;0;100 'cpu1'=0.98%;;;0;100 'cpu2'=1.09%;;;0;100 'cpu3'=0.94%;;;0;100 'total_cpu_avg'=1.16%;;;0;100
```

Que s'est-il passé ?

* Le Plugin `check_centreon_nrpe3` a demandé à l'agent NRPE d'exécuter sa commande "check_centreon_plugins" associée aux arguments "os::linux::local::plugin", "cpu"  et "  --statefile-dir=/var/log/nrpe/centplugins".
* L'agent NRPE met bout-à-bout la commande telle que définie dans ses fichiers de configuration et les arguments envoyés pour former la ligne de commande suivante :

```bash
/usr/lib/centreon/plugins/centreon_linux_local.pl --plugin=os::linux::local::plugin --mode=cpu --statefile-dir=/var/log/nrpe/centplugins
```

* Cette commande est alors exécutée par l'utilisateur `centreon-engine` puis l'agent renvoie les résultats (code retour et message affiché) au Plugin `check_centreon_nrpe3` qui attend ce retour.

### Troubleshooting

Les erreurs les plus courantes sont détaillées ci-dessous.

#### `connect to address x.x.x.x port 5666: Connection refused`

Si le message retourné est le suivant :

```text
connect to address x.x.x.x port 5666: Connection refused
```

C'est probablement que l'adresse IP x.x.x.x d'où est venue la requête (*ie.* le poller) n'est pas autorisée à interroger l'agent NRPE. 

Il faut alors vérifier le paramètre `allowed_hosts` dans le fichier `/etc/nrpe/centreon-nrpe3.cfg` ([*cf* plus haut](#configuration-de-nrpe).

Puis redémarrer le service.

```bash
systemctl restart centreon-nrpe3.service
```

#### `CHECK_NRPE STATE CRITICAL: Socket timeout after 10 seconds`

Si le message retourné est le suivant :

```text
CHECK_NRPE STATE CRITICAL: Socket timeout after 10 seconds.
```

Vérifier alors les points suivants :

* le service `centreon-nrpe3` est bien démarré

```bash
systemctl status centreon-nrpe3.service
```

* le port utilisé par la sonde (`-p 5666` par exemple) est conforme à la configuration de l'agent, si le port a été personnalisé
* aucun pare-feu local ne bloque le port NRPE (`iptables -L`)
* aucun équipement de type firewall ne filtre ce port sur le réseau

#### `NRPE: Command 'my_command' not defined`

Si le message retourné est le suivant :

```text
NRPE: Command 'my_command' not defined
```

Cela signifie que l'on demande à l'agent NRPE d'exécuter une commande qui lui est inconnue.

Pour qu'une commande soit reconnue, il faut qu'elle soit convenablement déclarée avec la syntaxe suivante :

```ini
[my_command]=/full/path/to/command --argument --other-argument
```

Et redémarrer le service :

```bash
systemctl restart centreon-nrpe3.service
```
