---
id: applications-protocol-ssh
title: Protocole SSH
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Vue d'ensemble

Le protocole Secure Shell (SSH) est un protocole de communication sécurisé
permettant d'effectuer des actions sur un serveur distant.

Le connecteur de supervision Centreon *Protocol SSH* permet de récupérer le status et le
temps de réponse d'une connexion à un serveur par l'intermédiaire du protocole
SSH.

## Contenu du Pack

### Objets supervisés

* Serveur SSH

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Ssh-Login" label="Ssh-Login">

| Metric name           | Description         | Unit       |
|:----------------------|:--------------------|:-----------|
| status                | Login status        |            |
| response.time.seconds | Login response time | seconds    |


</TabItem>
</Tabs>

## Prérequis

To use this pack, the SSH service must be properly configured on your server and
the mandatory Host Macros must be properly configured. More info in the 
"Configuration" section [here](#Hôte).

Afin de superviser le serveur SSH, le service doit être configuré et les Macro
d'hôtes doivent être renseignées. Plus d'information dans le chapite 
"Configuration" [ici](#Hôte).
## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des serveurs SSH:

```bash
yum install centreon-plugin-Applications-Protocol-Ssh
```

2. Sur l'interface Integration de Centreon, installer le connecteur de supervision *Protocol SSH* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur tous les collecteurs Centreon devant superviser des serveurs SSH:

```bash
yum install centreon-plugin-Applications-Protocol-Ssh
```

2. Sur le serveur Central Centreon, installer le RPM du Pack *Protocol SSH*:

```bash
yum install centreon-pack-applications-protocol-ssh
```

3. Sur l'interface Integration de Centreon, installer le connecteur de supervision *Protocol SSH* depuis la page **Configuration > Gestionnaire de connecteurs de supervision**

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page "Configuration > Hôtes".
* Complétez les champs "Nom","Alias" & "IP Address / DNS" correspondant à votre serveur SSH
* Appliquez le Modèle d'Hôte *Applications-Protocol-Ssh-custom* 
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises(*Mandatory*) doivent être renseignées 

| Mandatory | Name                | Description                                                                        |
|:----------|:--------------------|:-----------------------------------------------------------------------------------|
| X         | PROTOCOLSSHPASSWORD |                                                                                    |
| X         | PROTOCOLSSHUSERNAME |                                                                                    |
|           | EXTRAOPTIONS        | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
 l'utilisateur *centreon-engine*:

```bash
 /usr/lib/centreon/plugins//centreon_protocol_ssh.pl  \
    --plugin=apps::protocols::ssh::plugin  \
    --mode=login  \
    --hostname=10.0.0.1   \
    --ssh-username=''  \
    --ssh-password=''  \
    --warning-status=''  \
    --critical-status='%{message} !~ /authentification succeeded/i'  \
    --warning-time='2'  \
    --critical-time='3'  \
    --use-new-perfdata 
 ```

La commande devrait retourner un message de sortie similaire à :

 ```bash
OK : authentification succeeded | 'response.time.seconds'=1s;;;; 
 ```

Dans cet exemple, une alarme de type WARNING sera déclenchée si le temps de
réponse de l'identification est supérieure à 2 secondes 
(```--warning-time='2'```); l'alarme sera de type CRITICAL au-delà de 3 secondes
(```--warning-time='3'```) ou si le status de l'identification est différent 
de "authentification succeeded" 
(```--critical-status='%{message} !~ /authentification succeeded/i'```).

```bash
/usr/lib/centreon/plugins//centreon_protocol_ssh.pl  \
    --plugin=apps::protocols::ssh::plugin  \
    --mode=login  \
    --help
 ```

Tous les modes disponibles peuvent être affichés en ajoute le paramètre 
```--list-mode``` à la commande:

 ```bash
 /usr/lib/centreon/plugins//centreon_protocol_ssh.pl  \
    --plugin=apps::protocols::ssh::plugin  \
    --list-mode
 ```

### Diagnostic des erreurs communes

#### ```UNKNOWN: Command error: Host key verification failed.```

Cette erreur signifie que vous n'avez pas validé manuellement la signature (
fingerprint) du serveur cible avec ```ssh``` or ```plink``` sur le Poller 
Centreon.