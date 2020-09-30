---
id: applications-drbd-ssh
title: DRBD
---

## Vue d'ensemble

DRBD (Distributed Replicated Block Device en anglais, ou périphérique en mode bloc répliqué et distribué en français) est une architecture de stockage distribuée pour GNU/Linux, 
permettant la réplication de périphériques de bloc (disques, partitions, volumes logiques etc.) entre des serveurs. DRBD est un logiciel libre, mais un support existe. DRBD est composé d'un module noyau, 
d'outils d'administration en espace utilisateur ainsi que de scripts shell.

## Contenu du Plugin-Pack

### Objets supervisés

* Resources

### Métriques collectées

Vous pouvez vous renseigner en détails sur les métriques présentées ci-après sur la documentation officielle 
de DRDB : https://www.linbit.com/drbd-user-guide/drbd-guide-9_0-en/

<!--DOCUSAURUS_CODE_TABS-->

<!--Resources-->

| Metric name                         | Description                         | Unit  |
| :-----------------------------------| :-----------------------------------| :---- |
| disk-status                         | Disk status                         |       |
| peer-connection-status              | Peer connection status              |       |
| peer-device-replication-status      | Peer device replication status      |       |
| peer-device-disk-status             | Peer device disk status             |       |
| resources.total.count               | Total number of resources           | count |
| disk.data.read.bytespersecond       | Disk data read                      |  B/s  |
| disk.data.written.bytespersecond    | Disk data written                   |  B/s  |
| peer.traffic.in.bitspersecond       | Peer traffic in                     |  b/s  |
| peer.traffic.out.bitspersecond      | Peer traffic out                    |  b/s  |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Un certain nombre de distributions fournissent DRBD, y compris des paquets binaires pré-construits. 
Le support de ces compilations, s'il y en a, est fourni par le fournisseur de la distribution associée. 
Leur cycle de publication peut être en retard par rapport aux versions sources de DRBD.

Plus d'informations sont disponible sur la documentation officielle de DRBD : https://www.linbit.com/drbd-user-guide/drbd-guide-9_0-en/#ch-install-packages

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources DRDB :

```bash
yum install centreon-plugin-Applications-Drbd-Ssh.noarch
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *DRBD* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les collecteurs Centreon supervisant des ressources DRBD :

```bash
yum install centreon-plugin-Applications-Drbd-Ssh.noarch
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install ccentreon-pack-applications-drbd-ssh.noarch
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *DRBD* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par environnement DRBD
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Drbd-SSH-custom*.
Une fois celui-ci configuré, certaines macros doivent être renseignées:

<!--DOCUSAURUS_CODE_TABS-->

<!--sshcli backend-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```sshcli```                                                                    |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre collecteur |          
|             | SSHPASSWORD     | Ne peut pas être utilisé avec le backend. Seulement avec la clé d'authentication                |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

:warning: Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur Linux. (Macro SSHUSERNAME).

<!--plink backend-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- | 
| X           | SSHBACKEND      | Nom du backend: ```plink```                                                                     |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre collecteur |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

:warning: Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur Linux. (Macro SSHUSERNAME).

<!--libssh backend (par défaut)-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```libssh```                                                                    |          
|             | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre collecteur |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

Avec ce backend, vous n'avez pas à valider manuellement le fingerprint du serveur cible. 

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon avec l'utilisateur *centreon-engine*

```bash
/usr/lib/centreon/plugins/centreon_drbd_ssh.pl \
    --plugin=apps::drbd::local::plugin.pm \
    --mode=resources \
    --hostname=10.30.2.81 \
	--ssh-username=centreon \
	--ssh-password=centreon-password \
	--ssh-backend=libssh \
	--legacy-proc \
	--verbose
	
OK: total resources: 9 - All drbd resources are ok 
| 'resources.total.count'=9;;;0; '0#disk.data.read.bytespersecond'=0B/s;;;0; '0#disk.data.written.bytespersecond'=0B/s;;;0; '0~0#peer.traffic.in.bitspersecond'=0b/s;;;0; 
'0~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '1#disk.data.read.bytespersecond'=0B/s;;;0; '1#disk.data.written.bytespersecond'=0B/s;;;0; '1~0#peer.traffic.in.bitspersecond'=0b/s;;;0; 
'1~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '2#disk.data.read.bytespersecond'=0B/s;;;0; '2#disk.data.written.bytespersecond'=0B/s;;;0; '2~0#peer.traffic.in.bitspersecond'=0b/s;;;0; 
'2~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '3#disk.data.read.bytespersecond'=0B/s;;;0; '3#disk.data.written.bytespersecond'=0B/s;;;0; '3~0#peer.traffic.in.bitspersecond'=0b/s;;;0; 
'3~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '4#disk.data.read.bytespersecond'=0B/s;;;0; '4#disk.data.written.bytespersecond'=0B/s;;;0; '4~0#peer.traffic.in.bitspersecond'=0b/s;;;0; 
'4~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '5#disk.data.read.bytespersecond'=0B/s;;;0; '5#disk.data.written.bytespersecond'=0B/s;;;0; '5~0#peer.traffic.in.bitspersecond'=0b/s;;;0; 
'5~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '6#disk.data.read.bytespersecond'=0B/s;;;0; '6#disk.data.written.bytespersecond'=0B/s;;;0; '6~0#peer.traffic.in.bitspersecond'=0b/s;;;0; 
'6~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '7#disk.data.read.bytespersecond'=0B/s;;;0; '7#disk.data.written.bytespersecond'=0B/s;;;0; '7~0#peer.traffic.in.bitspersecond'=0b/s;;;0; 
'7~0#peer.traffic.out.bitspersecond'=0b/s;;;0; '8#disk.data.read.bytespersecond'=0B/s;;;0; '8#disk.data.written.bytespersecond'=0B/s;;;0; '8~0#peer.traffic.in.bitspersecond'=0b/s;;;0; 
'8~0#peer.traffic.out.bitspersecond'=0b/s;;;0;	
```

La commande ci-dessus contrôle les resources l'application DRBD (```--mode=resources```). 
Il y a pour adresse 10.30.2.81 (```--hostname=10.30.2.81```) comme Backend SSH  (```--ssh-backend='libssh'```) 
avec les centreon comme username _centreon_ (```--ssh-username=centreon```) et comme mot de passe _centreon-password_ (```--ssh-password='centreon-password'```). 

L'option _legacy-proc_ (```--legacy-proc```) permet de pouvoir utiliser l'ancien fichier proc (```/proc/drbd```). Ce qui permet d'utiliser une version les versions antérieurs à la version 9.

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_drbd_ssh.pl --plugin=apps::drbd::local::plugin.pm \
--mode=resources --help
```

### J'ai ce message d'erreur : ```UNKNOWN: Command error: Host key verification failed.```. Qu'est-ce que cela signifie ?

Cela signifie que vous n'avez pas validé manuellement la signature (fingerprint) du serveur cible avec ```ssh``` or ```plink``` sur le Poller Centreon.
