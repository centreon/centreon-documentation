---
id: hardware-servers-ibm-hmc-ssh
title: IBM HMC SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack IBM HMC SSH collecte les données pour:
* Hardware errors
* Led status

### Métriques collectées

<Tabs groupId="operating-systems">
<TabItem value="Hardwareerrors" label="Hardwareerrors">

No metrics.

</TabItem>
<TabItem value="Ledstatus" label="Ledstatus">

| Metric name        | Description                                   | Unit |
| :----------------- | :-------------------------------------------- | :--- |
| physical status    | Physical system attention led status          |      |
| virtuallpar status | Logical partition system attention led status |      |

</TabItem>
</Tabs>

## Prérequis

Afin de fonctionner, le Plugin nécessite une connexion SSH entre le Poller et le serveur HMC. L'utilisateur distant
doit avoir assez de privilèges pour executer les commandes ``lssvcevents``` et ```lsled```.

## Installation

<Tabs groupId="operating-systems">
<TabItem value="Online IMP Licence & IT100 Editions" label="Online IMP Licence & IT100 Editions">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Servers-Ibm-Hmc-Ssh
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *IBM HMC SSH* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
<TabItem value="Offline IMP License" label="Offline IMP License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Hardware-Servers-Ibm-Hmc-Ssh
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-hardware-servers-ibm-hmc-ssh
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *IBM HMC SSH* depuis la page "Configuration > Plugin packs > Manager"

</TabItem>
</Tabs>

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par IBM HMC.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *HW-Server-IBM-Hmc-SSH-custom*.

<Tabs groupId="operating-systems">
<TabItem value="sshcli backend" label="sshcli backend">

| Mandatory | Name            | Description                                                                                     |
| :-------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X         | SSHBACKEND      | Nom du backend: ```sshcli```                                                                    |
| X         | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |
|           | SSHPASSWORD     | Ne peut pas être utilisé avec le backend. Seulement avec la clé d'authentication                |
|           | SSHPORT         | Par default: 22                                                                                 |
|           | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

> Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur distant. (Macro SSHUSERNAME).

</TabItem>
<TabItem value="plink backend" label="plink backend">

| Mandatory | Name            | Description                                                                                     |
| :-------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X         | SSHBACKEND      | Nom du backend: ```plink```                                                                     |
| X         | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |
|           | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|           | SSHPORT         | Par default: 22                                                                                 |
|           | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

> Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur distant. (Macro SSHUSERNAME).

</TabItem>
<TabItem value="libssh backend (par défaut)" label="libssh backend (par défaut)">

| Mandatory | Name            | Description                                                                                     |
| :-------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X         | SSHBACKEND      | Nom du backend: ```libssh```                                                                    |
|           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |
|           | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|           | SSHPORT         | Par default: 22                                                                                 |
|           | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

Avec ce backend, vous n'avez pas à valider manuellement le fingerprint du serveur cible.

</TabItem>
</Tabs>

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande
depuis un collecteur Centreon en vous connectant avec l'utilisateur *centreon-engine*:

```bash
/usr/lib/centreon/plugins/centreon_ibm_hmc_ssh.pl \
--plugin=hardware::server::ibm::hmc::ssh::plugin \
--mode=led-status \
--hostname=10.30.2.114 \
--ssh-username=centreon \
--ssh-password='centreon-password' \
--ssh-backend=libssh \
--verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: System 'Server-8203-E4Z-SNE6DFXA5' physical led state : off - All virtual partition status are ok |
System 'Server-8203-E4Z-SNE6DFXA5' physical led state : off
Virtual partition 'Server-8203-E4Z-SNE6DFXA5:LPAR1' led state : off
Virtual partition 'Server-8203-E4Z-SNE6DFXA5:LPAR2' led state : off
```

La commande ci-dessus contrôle le statut des LEDs du IBM HMC (```--mode=led-status```).
Le Plugin utilise le Backend _libssh_ (```--ssh-backend='libssh'```) avec l'utisateur _centreon_ (```--ssh-username=centreon --api-password='centreon-password'```)
et il se connecte à l'hôte _10.30.2.114_ (```--hostname='10.30.2.114'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peut être affichée
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ibm_hmc_ssh.pl \
--plugin=hardware::server::ibm::hmc::ssh::plugin \
--mode=led-status \
--help
```

## J'obtiens le message d'erreur suivant:

### J'ai ce message d'erreur : ```UNKNOWN: Command error: Host key verification failed.```. Qu'est-ce que cela signifie ?

Cela signifie que vous n'avez pas validé manuellement la signature (fingerprint) du serveur cible avec ```ssh``` or ```plink``` sur le Poller Centreon.
