---
id: applications-oracle-goldengate-ssh
title: Oracle GoldenGate SSH
---

## Contenu du Plugin-Pack

### Objets supervisés

Le Plugin-Pack inclue la supervision Processes.

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Resources-->

| Metric name                                   | Description                     | Unit |
| :-------------------------------------------- | :------------------------------ | :--- |
| process status                                | Process status                  |      |
| *processname*#process.lag.seconds             | processus lag at checkpoint     |      |
| *processname*#process.time.checkpoint.seconds | processus time since checkpoint |      |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de fonctionner, le Plugin nécessite une connexion SSH entre le Poller et le serveur executant Oracle GoldenGate. L'utilisateur distant
doit avoir assez de privilèges pour executer la commande ```ggsci```. 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Oracle-Goldengate-Ssh
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Oracle GoldenGate SSH* depuis la page "Configuration > Plugin packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Applications-Oracle-Goldengate-Ssh
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-applications-oracle-goldengate-ssh
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Oracle GoldenGate SSH* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin-Pack est conçu de manière à avoir dans Centreon un hôte par application Oracle GoldenGate.
Lorsque vous ajoutez un hôte à Centreon, appliquez-lui le modèle *App-Oracle-Goldengate-SSH-custom-custom*. 
Une fois celui-ci configuré, certaines macros doivent être renseignées:

| Mandatory | Name               | Description                                                                |
| :-------- | :----------------- | :------------------------------------------------------------------------- |
|           | GGSHOME            | Directory of ```ggsci```                                                   |
|           | ORACLEHOME         | Oracle home directory                                                      |

<!--DOCUSAURUS_CODE_TABS-->

<!--sshcli backend-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- |
| X           | SSHBACKEND      | Nom du backend: ```sshcli```                                                                    |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |          
|             | SSHPASSWORD     | Ne peut pas être utilisé avec le backend. Seulement avec la clé d'authentication                |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

:warning: Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
et l'utilisateur applicatif créé sur le serveur distant. (Macro SSHUSERNAME).

<!--plink backend-->

| Mandatory   | Name            | Description                                                                                     |
| :---------- | :-------------- | :---------------------------------------------------------------------------------------------- | 
| X           | SSHBACKEND      | Nom du backend: ```plink```                                                                     |
| X           | SSHUSERNAME     | Par default, il utilise l'utilisateur en cours d'exécution ```centengine``` de votre Collecteur |
|             | SSHPASSWORD     | Peut être utilisé. Si aucune valeur n'est définie, l'authentification par clé ssh est utilisée  |
|             | SSHPORT         | Par default: 22                                                                                 |
|             | SSHEXTRAOPTIONS | Personnalisez-le avec le vôtre si nécessaire. E.g.: ```--ssh-priv-key=/user/.ssh/id_rsa```      |

:warning: Avec ce backend, il est nécessaire d'effectuer une connexion manuelle entre l'utilisateur centreon-engine du Collecteur
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

## FAQ

### Comment puis-je tester le Plugin et que signifient les options des commandes ?

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre Collecteur Centreon avec l'utilisateur *centreon-engine*

```bash
/usr/lib/centreon/plugins/centreon_oracle_gg_ssh.pl \
    --plugin=apps::oracle::gg::local::plugin \
    --mode=processes \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=libssh \
    --filter-type=REPLICAT \
    --verbose
```

Exemple de sortie:
```
CRITICAL: Process 'REPLICAT:RP_TS02' status: ABENDED | 'REPLICAT:RP_TSO1#process.lag.seconds'=0s;;;0; 'REPLICAT:RP_TSO1#process.time.checkpoint.seconds'=4s;;;0; 'REPLICAT:RP_TS02#process.lag.seconds'=172472s;;;0; 'REPLICAT:RP_TS02#process.time.checkpoint.seconds'=1462s;;;0; 'REPLICAT:RP_TS03#process.lag.seconds'=0s;;;0; 'REPLICAT:RP_TS03#process.time.checkpoint.seconds'=4s;;;0;
Process 'REPLICAT:RP_TSO1' status: RUNNING, lag: 0, time since checkpoint: 4s
Process 'REPLICAT:RP_TS02' status: ABENDED, lag: 1d 23h 54m 32s, time since checkpoint: 24m 22s
Process 'REPLICAT:RP_TS03' status: RUNNING, lag: 0, time since checkpoint: 4s
```

La commande ci-dessus contrôle les processus de l'application Oracle GoldenGate (```--mode=processes```).
Le Plugin utilise le Backend _libssh_ (```--ssh-backend='libssh'```) avec l'utisateur _centreon_ (```--ssh-username=centreon --api-password='centreon-password'```)
et il se connecte à l'hôte _10.30.2.81_ (```--hostname='10.30.2.81'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande :

```bash
/usr/lib/centreon/plugins/centreon_oracle_gg_ssh.pl \
    --plugin=apps::oracle::gg::local::plugin \
    --mode=processes \
    --help
```

### J'ai ce message d'erreur : ```UNKNOWN: Command error: Host key verification failed.```. Qu'est-ce que cela signifie ?

Cela signifie que vous n'avez pas validé manuellement la signature (fingerprint) du serveur cible avec ```ssh``` or ```plink``` sur le Poller Centreon.
