---
id: applications-drbd-ssh
title: DRBD SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

DRBD est une architecture de stockage distribuée pour GNU/Linux, permettant la réplication de périphériques de bloc
(disques, partitions, volumes logiques etc.) entre des serveurs.
DRBD est un logiciel libre, mais un support existe. DRBD est composé d'un module noyau et d'outils d'administration. 

## Contenu du Pack

### Objets supervisés

* Disques utilisant DRBD, incluant les *roles, devices et peers.

### Métriques collectées

Vous pouvez vous renseigner en détails sur les métriques présentées ci-après sur la documentation officielle 
de DRDB : https://www.linbit.com/drbd-user-guide/drbd-guide-9_0-en/

<Tabs groupId="sync">
<TabItem value="Resources" label="Resources">

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

</TabItem>
</Tabs>

## Prérequis

Un certain nombre de distributions fournissent DRBD via le gestionnaire de paquets des différentes distributions. 

Plus d'informations pour son déploiement sont disponible sur la documentation officielle de DRBD:
https://www.linbit.com/drbd-user-guide/drbd-guide-9_0-en/#ch-install-packages

Afin de fonctionner, le Plugin nécessite une connexion SSH entre le Poller et le serveur executant DRBD. L'utilisateur distant
doit avoir assez de privilèges pour executer la commande `/usr/sbin/drbdsetup`. 

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet 
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Plugin Packs > Gestionnaire**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet 
sur le **serveur central** via la commande correspondant au gestionnaire de paquet 
associé à sa distribution: 

<Tabs groupId="sync">
<TabItem value="RHEL, Oracle Linux, Alma Linux 8" label="RHEL, Oracle Linux, Alma Linux 8">

```bash title='RHEL, Oracle Linux, Alma Linux version >= 8'
dnf install centreon-pack-applications-drbd-ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt-get centreon-pack-applications-drbd-ssh
```

</TabItem>
<TabItem value="RHEL/CentOS 7" label="RHEL/CentOS 7">

```bash
yum install centreon-pack-applications-drbd-ssh
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **DRBD SSH** 
depuis l'interface web et le menu **Configuration > Plugin Packs > Gestionnaire**. 

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique 
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et 
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette 
étape n'est pas requise. 

<Tabs groupId="sync">
<TabItem value="RHEL, Oracle Linux, Alma Linux 8" label="RHEL, Oracle Linux, Alma Linux 8">

```bash
dnf install centreon-plugin-Applications-Drbd-Ssh
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt-get install centreon-plugin-applications-drbd-ssh
```

</TabItem>
<TabItem value="RHEL/CentOS 7" label="RHEL/CentOS 7">

```bash
yum install centreon-plugin-Applications-Drbd-Ssh
```

</TabItem>
</Tabs>

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un Hôte par environnement DRBD
Lorsque vous ajoutez un Hôte à Centreon, appliquez-lui le modèle *App-Drbd-SSH-custom*.
Une fois celui-ci configuré, certaines Macros doivent être renseignées:

<Tabs groupId="sync">
<TabItem value="sshcli backend" label="sshcli backend">

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```sshcli```                                                                    |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |          
|             | SSHPASSWORD     | Ne peut pas être utilisé avec le backend. Seulement avec la clé d'authentication                |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

> Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur distant. (Macro SSHUSERNAME).

</TabItem>
<TabItem value="plink backend" label="plink backend">

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- | 
| X           | SSHBACKEND      | Nom du backend: ```plink```                                                                     |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

> Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur distant. (Macro SSHUSERNAME).

</TabItem>
<TabItem value="libssh backend (par défaut)" label="libssh backend (par défaut)">

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```libssh```                                                                    |          
|             | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

Avec ce backend, vous n'avez pas à valider manuellement le fingerprint du serveur cible. 

</TabItem>
</Tabs>

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur *centreon-engine*

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

L'option _legacy-proc_ (```--legacy-proc```) permet de pouvoir utiliser l'ancien fichier proc (```/proc/drbd```). Ce qui permet d'utiliser une version les versions antérieures à la version 9 de DRBD.

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande:

```bash
/usr/lib/centreon/plugins/centreon_drbd_ssh.pl \
--plugin=apps::drbd::local::plugin.pm \
--mode=resources --help
```

### J'ai ce message d'erreur : ```UNKNOWN: Command error: Host key verification failed.```. Qu'est-ce que cela signifie ?

Cela signifie que vous n'avez pas validé manuellement la signature (fingerprint) du serveur cible avec ```ssh``` or ```plink``` sur le Poller Centreon.
