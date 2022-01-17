---
id: applications-voip-asterisk-ami
title: Asterisk VoIP Server
---

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon Asterisk VoIP Server apporte 1 modèle d'hôte :
* App-VoIP-Asterisk-AMI-custom

Il apporte les Modèles de Service suivants :

| Alias           | Modèle de service                     | Description                                    | Défaut |
|:----------------|:--------------------------------------|:-----------------------------------------------|:-------|
| Channel-Usage   | App-Voip-Asterisk-AMI-Channel-Usage   | Contrôle le nombre d'appels et canaux en cours | X      |
| Dahdi-Status    | App-Voip-Asterisk-AMI-Dahdi-Status    | Contrôle le statut des lignes 'dahdi'          |        |
| Sip-Peers-Usage | App-Voip-Asterisk-AMI-Sip-Peers-Usage | Contrôle le statut des lien SIPs               | X      |

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--Channel-Usage-->

| Métrique              | Unité |
|:----------------------|:------|
| calls.active.count    | count |
| calls.processed.count | count |
| channels.active.count | count |
| extcalls.active.count | count |

<!--Dahdi-Status-->

| Métrique    | Unité  |
|:------------|:-------|
| status      | string |

<!--Sip-Peers-Usage-->

| Métrique                          | Unité  |
|:----------------------------------|:-------|
| sip.peers.monitor.offline.count   | count  |
| sip.peers.monitor.online.count    | count  |
| sip.peers.total.count             | count  |
| sip.peers.unmonitor.offline.count | count  |
| sip.peers.unmonitor.online.count  | count  |
| status                            | string |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### Asterisk Manager Interface (AMI)

Pour récuper les métriques et statuts du serveur Asterisk, un utilisateur avec 
les droits de lecture doit être configurer dans le fichier 
**/etc/asterisk/manager.conf file**. Plus d'informations dans la
[documentation officielle](https://wiki.asterisk.org/wiki/pages/viewpage.action?pageId=4817239).

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Asterisk** :

```bash
yum install centreon-plugin-Applications-Voip-Asterisk-Ami
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack **Asterisk VoIP Server** depuis la page **Configuration > Packs de plugins**.

<!--Offline License-->

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des ressources **Asterisk** :

```bash
yum install centreon-plugin-Applications-Voip-Asterisk-Ami
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Asterisk VoIP Server** :

 ```bash
yum install centreon-pack-applications-voip-asterisk-ami
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack **Asterisk VoIP Server** depuis la page **Configuration > Packs de plugins**.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Asterisk**.
* Appliquez le Modèle d'Hôte **App-VoIP-Asterisk-AMI-custom**.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Obligatoire*) doivent être renseignées.

| Obligatoire | Macro                   | Description                                                                                                         |
|:------------|:------------------------|:--------------------------------------------------------------------------------------------------------------------|
|             | ASTERISKAMIEXTRAOPTIONS | Toute option supplémentaire que vous souhaitez ajouter à chaque ligne de commande (par exemple, l'option --verbose) |
| X           | ASTERISKAMIPASSWORD     | Mot de passe de l'utilisateur de l'AMI                                                                              |
|             | ASTERISKAMIPORT         | Port de l'AMI                                                                                                       |
| X           | ASTERISKAMIUSERNAME     | Utilisateur de l'AMI                                                                                                |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_asterisk_ami.pl \
    --plugin=apps::voip::asterisk::ami::plugin \
    --mode=channel-usage \
    --ami-hostname='10.0.0.1' \
    --ami-port='' \
    --ami-username='' \
    --ami-password='' \
    --warning-channels-active='' \
    --critical-channels-active='' \
    --warning-calls-active='100' \
    --critical-calls-active='200' \
    --warning-calls-count='' \
    --critical-calls-count='' \
    --warning-extcalls-active='' \
    --critical-extcalls-active='' \
    --verbose \
    --use-new-perfdata 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: channels active: 54 calls active: 73 external calls active: 5 calls count: 746 | 'channels.active.count'=54;;;0; 'calls.active.count'=73;0:100;0:200;0; 'extcalls.active.count'=5;;;0; 'calls.processed.count'=746;;;0;
```

Dans cet exemple, une alarme de type WARNING sera déclenchée si le nombre
d'appels en cours est supérieur à 100 (`--warning-calls-active='100'`); l'alarme 
sera de type CRITICAL au-delà de 200 (`--critical-calls-active='200'`).

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_asterisk_ami.pl \
    --plugin=apps::voip::asterisk::ami::plugin \
    --mode=channel-usage \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_asterisk_ami.pl \
    --plugin=apps::voip::asterisk::ami::plugin \
    --list-mode
 ```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins)
pour le diagnostic des erreurs communes des Plugins Centreon.