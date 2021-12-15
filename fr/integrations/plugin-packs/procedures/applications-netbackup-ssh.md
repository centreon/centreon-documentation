---
id: applications-netbackup-ssh
title: Symantec Netbackup SSH
---

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon Netbackup SSH apporte 1 modèle d'hôte :
* App-Netbackup-SSH

Il apporte les Modèles de Services suivants :

| Service Alias  | Service Template                 | Default | Discovery |
|:---------------|:---------------------------------|:--------|:----------|
| Dedup-Status   | App-Netbackup-SSH-Dedup-Status   | X       |           |
| Drive-Cleaning | App-Netbackup-SSH-Drive-Cleaning | X       |           |
| Drive-Status   | App-Netbackup-SSH-Drive-Status   | X       |           |
| Job-Status     | App-Netbackup-SSH-Job-Status     | X       | X         |
| Tape-Usage     | App-Netbackup-SSH-Tape-Usage     | X       |           |

### Règles de découverte


| Rule name                    | Description                    |
|:-----------------------------|:-------------------------------|
| App-Netbackup-Job-Per-Policy | Découverte des Jobs            |


### Collected metrics & status

<!--DOCUSAURUS_CODE_TABS-->

<!--Dedup-Status-->

| Metric name                                   | Unit |
|:----------------------------------------------|:-----|
| status                                        |      |
| disk_pool.deduplication.usage.percentage      | %    |

<!--Drive-Cleaning-->

| Metric name          | Description                        | Unit  |
|:---------------------|:-----------------------------------|:------|
| drives.unclean.count | %d drives needs a reset mount time | count |

<!--Drive-Status-->

| Metric name | Description |
|:------------|:------------|
| status      |             |

<!--Job-Status-->

* Global

| Metric name         | Description     |
|:--------------------|:----------------|
| jobs.total.count    | total jobs : %s |

* Per *job*

| Metric name | Description |
|:------------|:------------|
| status      |             |

<!--Tape-Usage-->

| Metric name            | Description |
|:-----------------------|:------------|
| tape.usage.bytes       |             |
| tape.usage.percentage  |             |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

*Specify prerequisites that are relevant. You may want to just provide a link to
the manufacturer official documentation BUT you should try to be as complete as
possible here as it will save time to everybody*

### Configuration SSH

L'utilisation de ce Plugin Pack requiert la création d'un utilisateur sur le
serveur supervisé, lequel sera utilisé par le collecteur Centreon pour
s'authentifier et exécuter les requêtes SSH.

Deux méthodes de connexion SSH sont possibles:
* soit en échangeant la clé SSH publique de l'utilisateur `centreon-engine` du collecteur Centreon
* soit en définissant votre utilisateur et votre mot de passe directement dans les Macros d'Hôtes.## Installation

L'utilisateur distant doit pouvoir executer des commandes sytèmes. 

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *Netbackup*:

```bash
yum install centreon-plugin-Applications-Netbackup-Ssh
```

2. Sur l'interface Integration de Centreon, installer le Plugin Pack *Netbackup SSH* depuis la page **Configuration > Packs de plugins**

<!--Offline IMP License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des resources *Netbackup*:

```bash
yum install centreon-plugin-Applications-Netbackup-Ssh
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Netbackup SSH*:

 ```bash
yum install centreon-pack-applications-netbackup-ssh
```

3. Sur l'interface Integration de Centreon, installer le Plugin Pack *Netbackup SSH* depuis la page **Configuration > Packs de plugins**

<!--END_DOCUSAURUS_CODE_TABS-->


## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur *Netbackup*
* Appliquez le Modèle d'Hôte *applications-netbackup-ssh-custom* 
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises(*Mandatory*) doivent être renseignées 

> Il y a trois backends SSH disponibles pour établir la connexion au serveur distant, *sshcli*, *plink*, *libssh* (le plus performant).

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

Une alerte sera remontée si un job donné n'est pas dans un statut 'up'. 

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande :

```bash
/usr/lib/centreon/plugins/centreon_netbackup_ssh.pl \
    --plugin=apps::backup::netbackup::local::plugin \
    --mode=job-status \
    --help
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.md#ssh-and-cli-checks)
pour le diagnostique des erreurs commununes des Plugins Centreon.