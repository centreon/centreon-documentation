---
id: operatingsystems-linux-nrpe3
title: Linux NRPE3
---

| Version actuelle | Statut | Date |
| :-: | :-: | :-: |
| 3.1.6 | `STABLE` | 6 juin 2020 |

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

#### Services supervisés

Voici la liste complète des alias de modèles de services fournies par ce plugin pack. La colonne "Lié par défaut" indique si le modèle de service est lié au modèle d'hôte, et donc si les services correspondants seront créés d'office lors de l'application du modèle d'hôte.

| Alias                      | Lié par défaut |
| :------------------------- | :------------: |
| Cmd-Generic                |                |
| Connections-Generic        |                |
| Cpu-Detailed               |                |
| Cpu                        |       X        |
| Disk-Generic-Name          |                |
| Disk-Global                |                |
| Disk-IO-Generic-Name       |                |
| Disk-IO-Global             |                |
| File-Date-Generic          |                |
| File-Size-Generic          |                |
| Inodes-Generic-Name        |                |
| Inodes-Global              |                |
| Is-File-Generic            |                |
| Is-Not-File-Generic        |                |
| Load                       |       X        |
| Memory                     |       X        |
| Packet-Errors-Generic-Name |                |
| Packet-Errors-Global       |                |
| Process-Generic            |                |
| Swap                       |       X        |
| Traffic-Generic-Name       |                |
| Traffic-Global             |                |
| Uptime                     |       X        |

### Métriques collectées

Voici les métriques collectées pour les services liés au modèle dhôte par défaut :

<!--DOCUSAURUS_CODE_TABS-->
<!--Cpu-->

| Métrique        | Unité | Description                 |
| :-------------- | :---: | :-------------------------- |
| `cpu0`          |   %   | Utilisation moyen du cœur 0 |
| `cpu1`          |   %   | Utilisation moyen du cœur 1 |
| ...             |   %   | ...                         |
| `total_cpu_avg` |   %   | Utilisation moyen global    |

<!--Load-->

| Métrique | Unité | Description                           |
| :------- | :---: | :------------------------------------ |
| `load1`  |       | Charge système moyenne sur 1 minute   |
| `load5`  |       | Charge système moyenne sur 5 minutes  |
| `load15` |       | Charge système moyenne sur 15 minutes |

<!--Memory-->

| Métrique | Unité | Description                 |
| :------- | :---: | :-------------------------- |
| `buffer` |   B   | Mémoire allouée aux buffers |
| `cached` |   B   | Mémoire allouée en cache    |
| `slab`   |   B   | Allocation Slab             |
| `used`   |   B   | Mémoire consommée totale    |

<!--Swap-->

| Métrique    | Unité | Description                       |
| :---------- | :---: | :-------------------------------- |
| `free`      |   B   | Espace d'échange non utilisé      |
| `used`      |   B   | Espace d'échange utilisé          |
| `used_prct` |   %   | Utilisation de l'espace d'échange |

<!--Uptime-->

| Métrique | Unité | Description                                |
| :------- | :---: | :----------------------------------------- |
| `uptime` |   s   | Temps écoulé depuis le dernier redémarrage |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Les prérequis ci-dessous sont indispendables pour que le plugin pack puisse fonctionner correctement.

### Aspects réseau

Le port TCP par défaut pour le protocole NRPE est le port 5666.

| Source | Destination    | Protocole | Port |
| ------ | -------------- | --------- | ---- |
| Poller | Hôte supervisé | TCP       | 5666 |

### Plugin pack

L'installation du plugin pack en lui-même ne concerne que le serveur central et la procédure dépend du type de licence.

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

### Agent NRPE3 packagé par Centreon et sonde Linux locale

Les hôtes supervisés ont besoin de deux composants pour que cela fonctionne :

* la sonde `centreon_linux_local.pl`
* L'agent (*daemon*) NRPE3

#### Installation

Procéder aux installations suivantes :

```bash
yum install http://yum.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-release-20.04-1.el7.centos.noarch.rpm
yum install centreon-nrpe3-daemon.x86_64 centreon-plugin-Operatingsystems-Linux-Local.noarch
```

> **NB :** Pour éviter l'ajout du dépôt Centreon sur tous vos serveurs, il est possible instller directement les paquets `http://yum-1.centreon.com/standard/20.04/el7/stable/noarch/RPMS/centreon-plugin-Operatingsystems-Linux-Local-20200602-094050.el7.centos.noarch.rpm` et `http://yum-1.centreon.com/standard/20.04/el7/stable/x86_64/RPMS/centreon-nrpe3-daemon-3.2.1-8.el7.centos.x86_64.rpm` (versions courantes au moment de la rédaction de cette documentation) **mais dans ce cas il ne sera pas possible de les mettre à jour par un `yum update`**.

#### Configuration de NRPE

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

## Configuration de l'hôte dans Centreon

Créez un nouvel hôte dans Centreon et appliquez-lui le modèle d'hôte "OS-Linux-NRPE3-custom". 

Une fois le modèle appliqué, il est possible de modifier les macros suivantes :

| Nom              | Obligatoire | Description                                                                                                                        |
| :--------------- | :---------: | ---------------------------------------------------------------------------------------------------------------------------------- |
| NRPECLIENT       |      X      | Nom de la sonde employée pour dialoguer avec l'agent NRPE3 (par défaut `check_centreon_nrpe3`)                                     |
| NRPEPORT         |      X      | Port sur lequel écoute l'agent NRPE3 (par défaut 5666)                                                                             |
| NRPETIMEOUT      |      X      | Temps maximum autorisé pour exécuter la commande (par défaut 5s)                                                                   |
| NRPEEXTRAOPTIONS |             | Options supplémentaires (par défaut `-u` pour que la sonde NRPE retourne un état `UNKNOWN` en cas d'erreur de connexion à l'agent) |

## FAQ - troubleshooting

Si tout se passe bien, en lançant la commande suivante :
```bash
/usr/lib64/nagios/plugins/check_centreon_nrpe3 -H monitored_host_ip -p 5666
```

On obtient cette réponse :

```text
NRPE v3.2.1
```

Mais il est possible que cela ne fonctionne pas. Voici les cas d'erreurs les plus fréquents, en fonction du message.

### "Connection refused"

Si le message retourné est le suivant :

```text
connect to address monitored_host_ip port 5666: Connection refused
```

C'est probablement que l'adresse IP d'où est venue la requête (*ie.* le poller) n'est pas autorisée. 

Il faut alors vérifier le paramètre `allowed_hosts` dans le fichier `/etc/nrpe/centreon-nrpe3.cfg` ([*cf* plus haut](#configuration-de-nrpe).

Puis redémarrer le service.

```bash
systemctl restart centreon-nrpe3.service
```

### "Socket timeout"

Si le message retourné est le suivant :

```text
CHECK_NRPE STATE CRITICAL: Socket timeout after 10 seconds.
```

Alors vérifiez les points suivants :

* le service `centreon-nrpe3` est bien démarré

```bash
systemctl status centreon-nrpe3.service
```

* le port utilisé par la sonde (`-p 5666` par exemple) est conforme à la configuration de l'agent, si le port a été personnalisé
* aucun pare-feu local ne bloque le port NRPE (`iptables -L`)
* aucun équipement de type firewall ne filtre ce port sur le réseau

### "Command not defined"

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

