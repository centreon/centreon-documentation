---
id: operatingsystems-linux-nrpe3
title: Linux NRPE3
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

NRPE (Nagios Remote Plugin Executor) est un protocole qui a été conçu pour lancer à distance des commandes de supervision locales sur les serveurs supervisés.

Ce pack de plugin repose sur 3 composants, qui sont détaillés dans le tableau ci-dessous.

| Composant                 | Type               | Emplacement       | Rôle                                                                                                    |
| ------------------------- | ------------------ | ----------------- | ------------------------------------------------------------------------------------------------------- |
| `centreon_nrpe3_plugin`   | Binaire exécutable | Poller            | Transmet un nom de commande et des arguments associés à celle-ci                                        |
| `centreon_linux_local.pl` | Script Perl        | Serveur supervisé | S'exécute localement et retourne un statut, un message d'information et des métriques                   |
| `centreon-nrpe3`          | Service/daemon     | Serveur supervisé | Écoute sur le port 5666 et exécute les commandes demandées si elles sont définies dans sa configuration |

## Contenu du connecteur de supervision

### Objets supervisés

#### Types d'équipements

* Serveur Linux CentOS 7 / RHEL7 (documenté dans la présente procédure)
* Serveur Linux d'autres distributions, à condition d'y installer manuellement le plugin et le *daemon* NRPE3 (2e et 3e lignes du tableau ci-dessus).

### Métriques collectées

Seules les métriques sont détaillées dans cette section, mais sachez qu'un grand nombre de tests et de métriques peuvent être fournies par le Plugin `centreon_linux_local.pl`. En voici une liste non exhaustive :

<Tabs groupId="sync">
<TabItem value="OS-Linux-NRPE3-custom" label="OS-Linux-NRPE3-custom">

| Service Alias       | Service Template                          | Service Description                           |
|:--------------------|:------------------------------------------|:----------------------------------------------|
| Check-Plugin        | OS-Linux-Check-Plugin-NRPE3-custom        | SSH execution commands in a remote host       |
| Cmd-Generic         | OS-Linux-Cmd-Generic-NRPE3-custom         | Check command returns                         |
| Connections-Generic | OS-Linux-Connections-Generic-NRPE3-custom | Check tcp/udp connections                     |
| Cpu-Detailed        | OS-Linux-Cpu-Detailed-NRPE3-custom        | Check average usage for each CPUs             |
| Disk                | OS-Linux-Disks-NRPE3-custom               | Check storage usage                           |
| Disk-IO             | OS-Linux-Disk-IO-NRPE3-custom             | Check some disk io counters                   |
| File-Date-Generic   | OS-Linux-File-Date-Generic-NRPE3-custom   | Check time of files/directories               |
| File-Size-Generic   | OS-Linux-File-Size-Generic-NRPE3-custom   | Check size of files/directories               |
| Inodes              | OS-Linux-Inodes-NRPE3-custom              | Check Inodes space usage                      |
| Is-File-Generic     | OS-Linux-Is-File-Generic-NRPE3-custom     | Check the presence of a file                  |
| Is-Not-File-Generic | OS-Linux-Is-Not-File-Generic-NRPE3-custom | Check the absence of a file                   |
| Load                | OS-Linux-Load-NRPE3-custom                | Check system load-average                     |
| Ntp                 | OS-Linux-Ntp-NRPE3-custom                 | Check ntp daemons                             |
| OpenFile            | OS-Linux-OpenFile-NRPE3-custom            | Check open files                              |
| Packet-Errors       | OS-Linux-Packet-Errors-NRPE3-custom       | Check packet errors and discards on interfaces|
| Pending-Updates        | OS-Linux-Pending-Updates-NRPE3-custom     | Check pending updates                         |
| Process-Generic     | OS-Linux-Process-Generic-NRPE3-custom     | Check linux processes                         |
| Systemd-Journal   | OS-Linux-Systemd-Journal-NRPE3-custom     | Count journal entries                         |
| Systemd-Sc-Status   | OS-Linux-Systemd-Sc-Status-NRPE3-custom   | Check services managed by systemd             |
| Traffic             | OS-Linux-Traffic-NRPE3-custom             | Check Traffic                                 |

> Les services listés ci-dessus sont crées automatiquement lorsque le modèle d'hôte **OS-Linux-NRPE3-custom** est utilisé.

</TabItem>
</Tabs>

Voici les métriques collectées pour les services liés au modèle dhôte par défaut :

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                            | Description                   | Unité |
| :---------------------------------- | :---------------------------- | :---: |
| `0#core.cpu.utilization.percentage` | Utilisation moyenne du cœur 0 |   %   |
| `1#core.cpu.utilization.percentage` | Utilisation moyenne du cœur 1 |   %   |
| ...                                 | ...                           |   %   |
| `cpu.utilization.percentage`        | Utilisation moyenne globale   |   %   |

</TabItem>
<TabItem value="Load" label="Load">

| Métrique | Description                           | Unité |
| :------- | :------------------------------------ | :---: |
| `load1`  | Charge système moyenne sur 1 minute   |       |
| `load5`  | Charge système moyenne sur 5 minutes  |       |
| `load15` | Charge système moyenne sur 15 minutes |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique | Description                 | Unité |
| :------- | :-------------------------- | :---: |
| `buffer` | Mémoire allouée aux buffers |   B   |
| `cached` | Mémoire allouée en cache    |   B   |
| `slab`   | Allocation Slab             |   B   |
| `used`   | Mémoire consommée totale    |   B   |

</TabItem>
<TabItem value="Swap" label="Swap">

| Métrique                | Description                       | Unité |
| :---------------------- | :-------------------------------- | :---: |
| `swap.free.bytes`       | Espace d'échange non utilisé      |   B   |
| `swap.usage.bytes`      | Espace d'échange utilisé          |   B   |
| `swap.usage.percentage` | Utilisation de l'espace d'échange |   %   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique | Description                                | Unité |
| :------- | :----------------------------------------- | :---: |
| `uptime` | Temps écoulé depuis le dernier redémarrage |   s   |

</TabItem>
</Tabs>

## Prérequis

Les prérequis ci-dessous sont indispendables pour que le connecteur de supervision puisse fonctionner correctement.

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

<Tabs groupId="sync">
<TabItem value="RHEL / CentOS / Oracle Linux 8" label="RHEL / CentOS / Oracle Linux 8">

```shell
dnf install -y dnf-plugins-core
dnf config-manager --add-repo https://packages.centreon.com/rpm-standard/22.10/el8/centreon-22.10.repo
dnf install centreon-nrpe3-daemon.x86_64 centreon-plugin-Operatingsystems-Linux-Local.noarch
```

> **NB :** Pour éviter l'ajout du dépôt Centreon sur tous vos serveurs, il est possible d'installer directement les paquets `https://yum.centreon.com/standard/22.10/el8/stable/noarch/RPMS/centreon-plugin-Operatingsystems-Linux-Local-20230117-074217.el8.noarch.rpm` et `https://yum.centreon.com/standard/22.10/el8/stable/x86_64/RPMS/centreon-nrpe3-plugin-4.0.3-0.el8.x86_64.rpm` (versions courantes au moment de la rédaction de cette documentation) **mais dans ce cas il ne sera pas possible de les mettre à jour par un `yum update`**.

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```shell
yum install -y yum-utils
yum-config-manager --add-repo https://packages.centreon.com/rpm-standard/22.10/el7/centreon-22.10.repo
yum install centreon-nrpe3-daemon.x86_64 centreon-plugin-Operatingsystems-Linux-Local.noarch
```

> **NB :** Pour éviter l'ajout du dépôt Centreon sur tous vos serveurs, il est possible d'installer directement les paquets `https://yum.centreon.com/standard/22.10/el7/stable/noarch/RPMS/centreon-plugin-Operatingsystems-Linux-Local-20230117-074217.el7.centos.noarch.rpm` et `https://yum.centreon.com/standard/22.10/el7/stable/x86_64/RPMS/centreon-nrpe3-daemon-4.0.3-0.el7.centos.x86_64.rpm` (versions courantes au moment de la rédaction de cette documentation) **mais dans ce cas il ne sera pas possible de les mettre à jour par un `yum update`**.

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```shell
# Ajout de l'utilisateur centreon-engine user
useradd --create-home centreon-engine
# Installation de gpg
apt install gpg
# Ajout du dépôt Centreon
wget -qO- https://packages.centreon.com/api/security/keypair/Debian/public | gpg --dearmor > /etc/apt/trusted.gpg.d/centreon.gpg
echo "deb https://packages.centreon.com/artifactory/apt-plugins-stable/ $(lsb_release -sc) main" > /etc/apt/sources.list.d/centreon-plugins.list
apt update
# Installation de centreon-nrpe3-daemon
apt install centreon-nrpe3-daemon centreon-plugin-operatingsystems-linux-local
# Création du répertoire pour le cache du plugin
mkdir -p /var/lib/centreon/centplugins/
chown centreon-engine: /var/lib/centreon/centplugins/
```

> **NB :** Pour éviter l'ajout du dépôt Centreon sur tous vos serveurs, il est possible d'installer directement les paquets `https://packages.centreon.com/artifactory/apt-plugins-stable/pool/nrpe/centreon-nrpe3-plugin_4.1.0-150207_amd64.deb` et `https://packages.centreon.com/artifactory/apt-plugins-stable/pool/nrpe/centreon-nrpe3-daemon_4.1.0-150207_amd64.deb` (versions courantes au moment de la rédaction de cette documentation) **mais dans ce cas il ne sera pas possible de les mettre à jour par un `apt update`**.

</TabItem>
</Tabs>

### Configuration de NRPE

Pour que le(s) poller(s) puisse(nt) superviser les hôtes, il est nécessaire d'adapter le paramètre `allowed_hosts` dans le fichier `/etc/nrpe/centreon-nrpe3.cfg` :

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

### connecteur de supervision

L'installation du connecteur de supervision en lui-même ne concerne que le serveur central et la procédure dépend du type de licence.

<Tabs groupId="sync">
<TabItem value="Licence IMP/EPP Online & IT-100 Editions" label="Licence IMP/EPP Online & IT-100 Editions">

Installer le connecteur de supervision "Linux NRPE3" depuis la page **Configuration > Gestionnaire de connecteurs de supervision**.

</TabItem>
<TabItem value="Licence IMP/EPP Offline" label="Licence IMP/EPP Offline">

1. Installer le RPM du connecteur de supervision contenant les modèles de supervision sur le serveur Centreon Central:

```bash
yum install centreon-pack-operatingsystems-linux-nrpe3
```

2. Installer le connecteur de supervision "Linux NRPE3" depuis la page **Configuration > Gestionnaire de connecteurs de supervision**.

</TabItem>
</Tabs>

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
NRPE v4.0.3
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

C'est probablement que l'adresse IP x.x.x.x d'où est venue la requête (c'est-à-dire celle du poller) n'est pas autorisée à interroger l'agent NRPE.

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
