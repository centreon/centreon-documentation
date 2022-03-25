---
id: applications-ibm-tsamp-ssh
title: IBM TSAMP SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Objets supervisés

Le Pack IBM Tivoli System Automation for Multiplatforms collecte les données pour:
* Resource-groups

### Règles de découvertes

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Nom de la règle                       | Description                                                 |
| :------------------------------------ | :---------------------------------------------------------- |
| App-Ibm-Tsamp-SSH-Resource-Group-Name | Découvre les groupes de ressources et supervise leur statut |

</TabItem>
</Tabs>

### Métriques collectées

<Tabs groupId="sync">
<TabItem value="Resource-groups" label="Resource-groups">

| Metric name                           | Description                               | Unit  |
| :------------------------------------ | :---------------------------------------- | :---- |
| resource_groups.unknown.count         | Number of unknown resource groups         |       |
| resource_groups.offline.count         | Number of offline resource groups         |       |
| resource_groups.online.count          | Number of online resource groups          |       |
| resource_groups.failed_offline.count  | Number of failed offline resource groups  |       |
| resource_groups.stuck_online.count    | Number of stuck online resource groups    |       |
| resource_groups.pending_online.count  | Number of pending online resource groups  |       |
| resource_groups.pending_offline.count | Number of pending offline resource groups |       |
| resource_groups.ineligible.count      | Number of ineligible resource groups      |       |
| status resource group                 | Current state of the resource group       |       |

</TabItem>
</Tabs>

## Prérequis

Afin de fonctionner, le Plugin nécessite une connexion SSH entre le Poller et le serveur. L'utilisateur distant
doit avoir assez de privilèges pour executer la commande ```lssam```. 

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Ibm-Tsamp-Ssh
```

2. Sur l'interface Web de Centreon, installer le Pack *IBM TSAMP SSH* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Ibm-Tsamp-Ssh
```

2. Sur le serveur Central Centreon, installer le Pack via le RPM:

```bash
yum install centreon-pack-applications-ibm-tsamp-ssh
```

3. Sur l'interface Web de Centreon, installer le Pack *IBM TSAMP SSH* depuis la page **Configuration > Plugin Packs > Gestionnaire**

</TabItem>
</Tabs>

## Configuration

Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Ibm-Tsamp-SSH-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées.

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
> et l'utilisateur applicatif créé sur le serveur distant (Macro SSHUSERNAME).

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
> et l'utilisateur applicatif créé sur le serveur distant (Macro SSHUSERNAME).

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
/usr/lib/centreon/plugins/centreon_ibm_tsamp_ssh.pl \
    --plugin=apps::ibm::tsamp::local::plugin \
    --mode=resource-groups \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=libssh \
    --verbose
```

La commande devrait retourner un message de sortie de la forme ci-dessous:

```bash
OK: All resource groups are ok | 'resource_groups.unknown.count'=0;;;0; 'resource_groups.offline.count'=0;;;0; 'resource_groups.online.count'=5;;;0; 'resource_groups.failed_offline.count'=0;;;0; 'resource_groups.stuck_online.count'=0;;;0; 'resource_groups.pending_online.count'=0;;;0; 'resource_groups.pending_offline.count'=0;;;0; 'resource_groups.ineligible.count'=0;;;0;
Resource group 'db2_db2inst1_db2inst1_AUDIT-rg' operational state: online [nominal: online]
Resource group 'db2_db2inst1_db2inst1_AUDIT2-rg' operational state: online [nominal: online]
Resource group 'db2_db2inst1_db2inst1_TCDB-rg' operational state: online [nominal: online]
Resource group 'db2_db2inst1_netdb101-v_0-rg' operational state: online [nominal: online]
Resource group 'db2_db2inst1_netdb102-v_0-rg' operational state: online [nominal: online]
```

La commande ci-dessus contrôle le statut des groupes de ressources (```--mode=resource-groups```).
Le Plugin utilise le Backend _libssh_ (```--ssh-backend='libssh'```) avec l'utisateur _centreon_ (```--ssh-username=centreon --ssh-password='centreon-password'```)
et il se connecte à l'hôte _10.30.2.81_ (```--hostname='10.30.2.81'```).

Pour chaque mode, la liste de toutes les métriques, seuils associés et options complémentaires peuvent être affichés
en ajoutant le paramètre ```--help``` à la commande:

```bash
/usr/lib/centreon/plugins/centreon_ibm_tsamp_ssh.pl \
    --plugin=apps::ibm::tsamp::local::plugin \
    --mode=resource-groups \
    --help
```

## Diagnostique

[Diagnostique des plugins](../tutorials/troubleshooting-plugins.md#ssh-and-cli-checks)
