---
id: applications-netbackup-ssh
title: Netbackup SSH
---

## Contenu du Plugin Pack

### Objets supervisés

Le Plugin Pack inclue la supervision du statut tâches, l'utilisation des cassets, le nettoyage des devices, et le status des devices
utilisant des commandes systèmes.

### Règles de découvertes 

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                                     | Description                                               |
| :-------------------------------------------- | :-------------------------------------------------------- |
| App-Netbackup-Job-Per-Policy                  | Découverte des tâches par règles (policy)                 |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Dedupstatus -->

| Metric name                               | Description                            | Unit |
| :---------------------------------------- | :------------------------------------- | :--- |
| status                                    | Status of dedup                        |      |
| usage                                     | Dedup usage                            |  %   |

<!--Drivecleaning-->

| Metric name                               | Description                         | Unit  |
| :---------------------------------------- | :---------------------------------- | :---  |
| cleaning                                  | Total number of drive cleaning      | count |

<!--Drivestatus-->

| Metric name                               | Description                                                       | Unit  |
| :---------------------------------------- | :---------------------------------------------------------------- | :---- |
| status                                    | Status of drive            	                                    |       |

<!--Jobstatus-->

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| status                                    | Status of jobs                         |       |
| total                                     | Total of jobs                          | count |
| frozen                                    | Jobs in frozen state                   |       |

<!--Tapeusage-->

| Metric name                               | Description                                             | Unit  |
| :---------------------------------------- | :------------------------------------------------------ | :---  |
| used                                      | Usage tape on the deivce                                |   %   |
| free                                      | Free tape on the device                                 |   %   |
| usage                                     | Total of tape usage                                     | count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de fonctionner, le Plugin nécessite une connexion SSH entre le Collecteur et l'équipement Netbackup. L'utilisateur distant
doit avoir assez de privilèges pour exécuter des commandes systèmes.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Netbackup-Ssh
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Netbackup SSH* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Netbackup-Ssh
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-netbackup-ssh
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Netbackup SSH* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin Pack est conçu de manière à avoir dans Centreon un hôte par serveur NetBackup.
Lorsque vous ajoutez un Hôte à Centreon, appliquez-lui le modèle *App-Netbackup-SSH*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

<!--DOCUSAURUS_CODE_TABS-->

<!--sshcli backend-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```sshcli```                                                                    |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |
|             | SSHPASSWORD     | Ne peut pas être utilisé avec le backend. Seulement avec la clé d'authentication                |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

:warning: Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur _centreon-engine_ du Collecteur
et l'utilisateur applicatif créé sur le serveur distant. (Macro SSHUSERNAME).

<!--plink backend-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```plink```                                                                     |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

:warning: Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur _centreon-engine_ du Collecteur
et l'utilisateur applicatif créé sur le serveur distant. (Macro SSHUSERNAME).

<!--libssh backend (par défaut)-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```libssh```                                                                    |
|             | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

Avec ce backend, vous n'avez pas à valider manuellement le fingerprint du serveur cible. 

<!--END_DOCUSAURUS_CODE_TABS-->

## Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur *centreon-engine*

```bash
/usr/lib/centreon/plugins/centreon_netbackup_ssh.pl \
    --plugin=apps::backup::netbackup::local::plugin \
    --mode=job-status \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=sshcli \
    --critical-status='%{status} !~ /up/i' \ 
    --verbose
```

La commande ci-dessus contrôle le status des tâches Symantec Netbackup (```--mode=job-status```).
Le Plugin utilise le Backend _sshcli_ (```--ssh-backend='sshcli'```) avec l'utisateur _centreon_ (```--ssh-username=centreon```), 
son mot de passe (```--ssh-password='centreon-password'```) et il se connecte à l'hôte _10.30.2.81_ (```--hostname='10.30.2.81'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande :

```bash
/usr/lib/centreon/plugins/centreon_netbackup_ssh.pl \
    --plugin=apps::backup::netbackup::local::plugin \
    --mode=job-status \
    --help
```

## Troubleshooting

### J'ai ce message d'erreur : ```UNKNOWN: Command error: Host key verification failed.```. Qu'est-ce que cela signifie ?

Cela signifie que vous n'avez pas validé manuellement la signature (fingerprint) du serveur cible avec ```libssh``` ou ```plink``` sur le Collecteur Centreon.
