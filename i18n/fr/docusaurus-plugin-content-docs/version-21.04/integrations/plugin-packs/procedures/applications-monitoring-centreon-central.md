---
id: applications-monitoring-centreon-central
title: Centreon Central
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Vue d'ensemble

Le plugin pack Centreon Central permet de faciliter la mise en place de la supervision pour le serveur central. Pour être le plus pertinent possible, le serveur central doit être supervisé par un collecteur si votre architecture en dispose d'un.

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon Centreon Central apporte un modèle d'hôte :
* App-Monitoring-Centreon-Central-custom

Il apporte les Modèles de Service suivants :

| Alias              | Modèle de service                             | Description                                                                    | Défaut |
|:-------------------|:----------------------------------------------|:-------------------------------------------------------------------------------|:-------|
| Broker-Stats       | App-Monitoring-Centreon-Broker-Stats-Central  | Contrôle les statistiques des processus Centreon Broker                        | X      |
| proc-broker-rrd    | App-Monitoring-Centreon-Process-broker-rrd    | Contrôle permettant de vérifier le fonctionnement du processus Broker RRD      | X      |
| proc-broker-sql    | App-Monitoring-Centreon-Process-broker-sql    | Contrôle permettant de vérifier le fonctionnement du processus Broker SQL      | X      |
| proc-centcore      | App-Monitoring-Centreon-Process-centcore      | Contrôle permettant de vérifier le fonctionnement du processus centcore        |        |
| proc-centengine    | App-Monitoring-Centreon-Process-centengine    | Contrôle permettant de vérifier le fonctionnement du processus centreon-engine | X      |
| proc-centreontrapd | App-Monitoring-Centreon-Process-centreontrapd | Contrôle permettant de vérifier le fonctionnement du processus centreontrapd   |        |
| proc-crond         | App-Monitoring-Centreon-Process-crond         | Contrôle permettant de vérifier le fonctionnement du processus crond           | X      |
| proc-gorgoned      | App-Monitoring-Centreon-Process-gorgoned      | Contrôle permettant de vérifier le fonctionnement du processus gorgoned        | X      |
| proc-httpd         | App-Monitoring-Centreon-Process-httpd         | Contrôle permettant de vérifier le fonctionnement du processus Apache          | X      |
| proc-ntpd          | App-Monitoring-Centreon-Process-ntpd          | Contrôle permettant de vérifier le fonctionnement du processus NTP             | X      |
| proc-snmptrapd     | App-Monitoring-Centreon-Process-snmptrapd     | Contrôle permettant de vérifier le fonctionnement du processus snmptrapd       |        |
| proc-sshd          | App-Monitoring-Centreon-Process-sshd          | Contrôle permettant de vérifier le fonctionnement du processus sshd            | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Broker-Stats" label="Broker-Stats">

| Metric Name                      | Unit     |
|:---------------------------------|:---------|
| *endpoint*#queued_events         | events   |
| *endpoint*#speed_events          | events/s |
| status                           | string   |
| *endpoint*#unacknowledged_events | events   |

</TabItem>

<TabItem value="proc-broker-rrd" label="proc-broker-rrd">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-broker-sql" label="proc-broker-sql">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-centcore" label="proc-centcore">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-centengine" label="proc-centengine">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-centreontrapd" label="proc-centreontrapd">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-crond" label="proc-crond">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-gorgoned" label="proc-gorgoned">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-httpd" label="proc-httpd">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-ntpd" label="proc-ntpd">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-snmptrapd" label="proc-snmptrapd">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

<TabItem value="proc-sshd" label="proc-sshd">

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

</TabItem>

</Tabs>

## Prérequis

### SNMP

SNMP doit être configuré sur le serveur central. Vous pouvez vous aider de cette [documentation](../operatingsystems-linux-snmp.html#prerequisites) pour mettre en place rapidement une simple configuration SNMP. 

### SSH key exchange

Les vérifications liées au service **Broker-Stats** devraient être effectuées depuis un collecteur et sont réalisées par SSH. Si vous ne disposez que d'un central, les vérifications seront faites depuis et sur le central lui-même. Vous pouvez ignorer les étapes ci-dessous si vous êtes dans ce cas-là.

Le collecteur réalise les vérifications en tant qu'utilisateur système **centreon-engine** et se connectera au serveur central en tant qu'utilisateur **centreon**.

Les étapes ci-dessous décrivent l'échange de clef SSH entre le collecteur et le central : 

1. Depuis le central, paramétrer un mot de passe pour l'utilisateur **centreon** :

```
passwd centreon
```

2. Depuis le collecteur, créer et copier la nouvelle clef SSH de l'utilisateur **centreon-engine** vers le central : 

```
su - centreon-engine
ssh-keygen -t ed25519 -a 100
ssh-copy-id -i ~/.ssh/id_ed25519.pub centreon@<IP_CENTRAL>
```

Il faudra ensuite spécifier dans la configuration du service **Broker-Stats** que la vérification se fera à distance. Pour ce faire, après avoir appliqué le modèle d'hôte, vous devrez paramétrer la macro EXTRAOPTIONS sur le service **Broker-Stats** : 

| Macro                  | Valeur     |
|:---------------------------------|:---------|
| EXTRAOPTIONS        | --verbose --remote --ssh-option='-l=centreon'   |

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installer le Plugin Centreon sur le collecteur ou directement sur le central si vous ne disposez pas de collecteur :

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Central centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack **Centreon Central** depuis la page **Configuration > Packs de plugins**.

</TabItem>

<TabItem value="Offline License" label="Offline License">

1. Installer le Plugin Centreon sur le collecteur ou directement sur le central si vous ne disposez pas de collecteur :

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Central centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Sur le serveur Central Centreon, installer le RPM du Pack **Centreon Central** :

```bash
yum install centreon-pack-applications-monitoring-centreon-central
```

3. Sur l'interface Web de Centreon, installer le Plugin Pack **Centreon Central** depuis la page **Configuration > Packs de plugins**.

</TabItem>

</Tabs>

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur *Centreon Central*.
* Appliquez le Modèle d'Hôte **App-Monitoring-Centreon-Central-custom**.
* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Obligatoire*) doivent être renseignées.

| Obligatoire | Macro            | Description                                                                           |
|:------------|:-----------------|:--------------------------------------------------------------------------------------|
|             | MODULESTATSFILE  | /var/lib/centreon-engine/central-module-master-stats.json                             |
|             | RRDSTATSFILE     | /var/lib/centreon-broker/central-rrd-master-stats.json                                |
|             | SNMPEXTRAOPTIONS | Options supplémentaire à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|             | SQLSTATSFILE     | /var/lib/centreon-broker/central-broker-master-stats.json                             |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne 
de commande depuis votre collecteur Centreon en vous connectant avec 
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --mode=processcount \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --process-name='sshd' \
    --process-path='' \
    --process-args='' \
    --regexp-name \
    --regexp-path \
    --regexp-args \
    --warning='' \
    --critical='' \
    --use-new-perfdata 
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Number of current processes running: 1 | 'nbproc'=1;;;0; 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --mode=processcount \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre 
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_linux_snmp.pl \
    --plugin=os::linux::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des Plugins Centreon.