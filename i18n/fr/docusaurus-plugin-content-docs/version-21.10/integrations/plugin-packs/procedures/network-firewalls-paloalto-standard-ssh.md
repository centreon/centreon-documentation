---
id: network-firewalls-paloalto-standard-ssh
title: Palo Alto firewall SSH
---

## Contenu du Plugin Pack

### Objets supervisés

Le Plugin Pack inclue la supervision du système, des interfaces, des licences, des ipsec, de la haute disponibilité entre les nœuds et des composants matériels en 
utilisant des commandes systèmes.

### Règles de découvertes 

<!--DOCUSAURUS_CODE_TABS-->

<!--Services-->

| Rule name                                     | Description                                                                  |
| :-------------------------------------------- | :--------------------------------------------------------------------------- |
| Net-PaloAlto-Standard-SNMP-Packet-Errors-Name | Découverte des interfaces et contrôle des paquets en erreurs                 |
| Net-PaloAlto-Standard-SNMP-Traffic-Name       | Découverte des interfaces et contrôle de leur statut et de la bande-passante |

<!--END_DOCUSAURUS_CODE_TABS-->

### Métriques collectées

<!--DOCUSAURUS_CODE_TABS-->

<!--Environnement-->

| Metric name                               | Description                            | Unit |
| :---------------------------------------- | :------------------------------------- | :--- |
| hardware.temperature.celsius              | Temperature of the different sensors   | C    |
| hardware.voltage.volt                     | Voltage of the different sensors       | V    |

<!--HA-->

| Metric name                               | Description         | Unit |
| :---------------------------------------- | :------------------ | :--- |
| sync status                               | HA Sync status      |      |
| member status                             | HA member status    |      |
| link status                               | HA Link status      |      |

<!--Interfaces-->

| Metric name                               | Description                                                       | Unit  |
| :---------------------------------------- | :---------------------------------------------------------------- | :---- |
| interfaces.total.count                    | Total number of interfaces	                                    | count |
| interfaces status                         | Status of the interface operationnal and high availability state	|       |

<!--IPSec-->

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| tunnels.ipsec.total.count                 | Total number of ipsec tunnels          | count |

<!--Licenses-->

| Metric name                               | Description                                             | Unit |
| :---------------------------------------- | :------------------------------------------------------ | :--- |
| status                                    | Licence validity check of enabled features Sync status  |      |

<!--System-->

| Metric name                               | Description                            | Unit  |
| :---------------------------------------- | :------------------------------------- | :---- |
| system.antivirus.lastupdate.time.seconds  | Last antivirus update                  | s     |
| system.threat.lastupdate.time.seconds     | Last threat update                     | s     |
| system.sessions.traffic.count             | Number of traffic sessions             | count |
| system.sessions.total.active.count        | Total number of active sessions        | count |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

Afin de fonctionner, le Plugin nécessite une connexion SSH entre le Collecteur et le pare-feu Palo Alto. L'utilisateur distant
doit avoir assez de privilèges pour exécuter des commandes systèmes.

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online IMP Licence & IT-100 Editions-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh
```

2. Sur l'interface Web de Centreon, installer le Plugin-Pack *Palo Alto firewall SSH* depuis la page "Configuration > Plugin Packs > Manager"

<!--Offline IMP License-->

1. Installer le Plugin sur tous les Collecteurs Centreon :

```bash
yum install centreon-plugin-Network-Firewalls-Paloalto-Standard-Ssh
```

2. Sur le serveur Central Centreon, installer le Plugin-Pack via le RPM:

```bash
yum install centreon-pack-network-firewalls-paloalto-standard-ssh
```

3. Sur l'interface Web de Centreon, installer le Plugin-Pack *Palo Alto firewall SSH* depuis la page "Configuration > Plugin packs > Manager"

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

Ce Plugin Pack est conçu de manière à avoir dans Centreon un hôte par pare-feu Palo Alto.
Lorsque vous ajoutez un Hôte à Centreon, appliquez-lui le modèle *Net-PaloAlto-Standard-SSH-custom*. 
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
/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \
    --plugin=network::paloalto::ssh::plugin \
    --mode=environment \
    --hostname=10.30.2.81 \
    --ssh-username=centreon \
    --ssh-password='centreon-password' \
    --ssh-backend=sshcli \
    --component='.*' \
    --verbose
```

Exemple de sortie:

```bash
OK: All 12 components are ok [4/4 psus, 4/4 temperatures, 4/4 voltages].
Checking power supplies
Power supply 'Power Supply A1' status is normal [instance: 1].
Power supply 'Power Supply B1' status is normal [instance: 2].
Power supply 'Power Supply A2' status is normal [instance: 1].
Power supply 'Power Supply B2' status is normal [instance: 2].
Checking temperatures
Temperature sensor on slot 1' temperature is 69C [instance: 18.1].
Temperature sensor on slot 2' temperature is 59C [instance: 40.1].
Temperature sensor on slot 3' temperature is 57C [instance: 89.1].
Temperature sensor on slot 4' temperature is 67C [instance: 89.2].
Checking voltages
1,500V voltage sensor, slot 1' voltage is 1,732 V [instance: 18.1].
1,800V voltage sensor, slot 1' voltage is 1,072 V [instance: 18.2].
1,500V voltage sensor, slot 2' voltage is 1,732 V [instance: 89.1].
1,800V voltage sensor, slot 2' voltage is 1,072 V [instance: 89.2].
```

La commande ci-dessus contrôle les composants matériels du pare-feu Palo Alto (```--mode=environment```).
Le Plugin utilise le Backend _sshcli_ (```--ssh-backend='sshcli'```) avec l'utisateur _centreon_ (```--ssh-username=centreon```), 
son mot de passe (```--ssh-password='centreon-password'```) et il se connecte à l'hôte _10.30.2.81_ (```--hostname='10.30.2.81'```).

Toutes les options et leur utilisation peuvent être consultées avec le paramètre ```--help``` ajouté à la commande :

```bash
/usr/lib/centreon/plugins/centreon_paloalto_ssh.pl \
    --plugin=network::paloalto::ssh::plugin \
    --mode=environment \
    --help
```

## Troubleshooting

### J'ai ce message d'erreur : ```UNKNOWN: Command error: Host key verification failed.```. Qu'est-ce que cela signifie ?

Cela signifie que vous n'avez pas validé manuellement la signature (fingerprint) du serveur cible avec ```libssh``` ou ```plink``` sur le Collecteur Centreon.
