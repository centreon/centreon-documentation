---
id: operatingsystems-aix-ssh
title: AIX SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du connecteur de supervision

### Objets supervisés

Le connecteur de supervision inclut la supervision le système AIX en utilisant les commandes SSH, tel que :
* Retour de commande
* Messages errpt
* Inodes
* Volumes Groupes
* Processus
* Stockage 

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Cmdreturn" label="Cmdreturn">

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| command.exit.code.count                   | Number of exit code return             | count |

</TabItem>
<TabItem value="Inodes" label="Inodes">

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| storage.inodes.usage.percentage           | Inodes usage in percenta               | %     |

</TabItem>
<TabItem value="Process" label="Process">

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| processes.alerts.count                    | Number of alerts processes             | count |
| processes.total.count                     | Total number of alerts processes       | count |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| storage.space.usage.bytes                 | Storage space usage                    | B     |
| storage.space.free.bytes                  | Storage free space usage               | B     |
| storageresource.space.usage.percentage    | Storage percentage space usage         | %     |

</TabItem>
</Tabs>

## Prérequis

Un simple utilisateur est nécessaire pour interroger le système d'exploitation AIX par SSH. Il n'est pas nécessaire d'avoir des privilèges root ou sudo.
Il y a deux façons possibles d'effectuer la vérification SSH, soit en échangeant la clé SSH de centreon-engine au serveur cible, 
ou en définissant votre utilisateur et votre mot de passe directement dans les macros hôtes.

<Tabs groupId="sync">
<TabItem value="Exchange des Clés SSH" label="Exchange des Clés SSH">

Ajouter et générer un mot de passe pour votre utilisateur sur le **Serveur Cible** :

```bash
adduser ro_ssh_centreon
passwd ro_ssh_centreon
```

Basculer vers l'environnement bash de `centreon-engine` sur votre serveur Central et sur Poller :

```bash
su - centreon-engine
```

Ensuite, copier cette clé sur le **Serveur cible** avec les commandes suivantes :

```bash
ssh-keygen -t ed25519 -a 100
ssh-copy-id -i .ssh/id_ed25519.pub ro_ssh_centreon@<IP_TARGET_SERVER>
```

</TabItem>
<TabItem value="Autentification Utilisateur/Mot de passe" label="Autentification Utilisateur/Mot de passe">

Après avoir défini les paramètres du nom, de l'alias, de l'IP et du modèle d'hôte, vous devez remplir les macros décritent dans la partie **Configuration** ci-dessous.

</TabItem>
</Tabs>

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Operatingsystems-Aix-Local
```

2. Sur l'interface Web de Centreon, installer le connecteur de supervision *AIX SSH* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Operatingsystems-Aix-Local
```

2. Sur le serveur Central Centreon, installer le connecteur de supervision via le RPM:

```bash
yum install centreon-pack-operatingsystems-aix-ssh
```

3. Sur l'interface Web de Centreon, installer le connecteur de supervision *AIX SSH* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
</Tabs>

## Configuration

Ce connecteur de supervision est conçu de manière à avoir dans Centreon un hôte par serveur AIX.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *OS-AIX-SSH-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

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

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur *centreon-engine*

```bash
/usr/lib/centreon/plugins/centreon_aix_local.pl \
    --plugin=os::aix::local::plugin \
    --mode=lvsync \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=sshcli \
    --filter-type='SVG' \
	--critical-status='%{state} =~ /stale/i'\
    --verbose
```

La commande ci-dessus contrôle le mirroring des volumes groupes (```--mode=lvsync```).
Le Plugin utilise le Backend _sshcli_ (```--ssh-backend='sshcli'```) avec l'utisateur _centreon_ (```--ssh-username=centreon --api-password='centreon-password'```)
et il se connecte à l'hôte _10.30.2.81_ (```--hostname='10.30.2.81'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande :

```bash
/usr/lib/centreon/plugins/centreon_aix_local.pl \
    --plugin=os::aix::local::plugin \
    --mode=lvsync \
    --help
```
## Troubleshooting

### J'ai ce message d'erreur : ```UNKNOWN: Command error: Host key verification failed.```. Qu'est-ce que cela signifie ?

Cela signifie que vous n'avez pas validé manuellement la signature (fingerprint) du serveur cible avec ```libssh``` ou ```plink``` sur le Poller Centreon.
