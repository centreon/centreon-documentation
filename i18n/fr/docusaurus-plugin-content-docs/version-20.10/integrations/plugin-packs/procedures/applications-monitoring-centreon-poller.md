---
id: applications-monitoring-centreon-poller
title: Centreon Poller
---

## Vue d'ensemble

Le plugin pack Centreon Poller permet de faciliter la mise en place de la supervision pour les collecteurs. Pour être le plus pertinent possible, les collecteurs doivent être supervisés par le Central.

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon Centreon Poller apporte un modèle d'hôte :

* App-Monitoring-Centreon-Poller-custom

Il apporte les Modèles de Service suivants :

| Alias           | Modèle                                      | Description                                 | Défaut |
| :-------------- | :------------------------------------------ | :------------------------------------------ | :----- |
| Broker-Stats    | App-Monitoring-Centreon-Broker-Stats-Poller | Check Centreon Broker processes statistics. | X      |
| proc-centengine | App-Monitoring-Centreon-Process-centengine  | Check centengine process.                   | X      |
| proc-gorgoned   | App-Monitoring-Centreon-Process-gorgoned    | Check gorgoned process.                     | X      |
| proc-ntpd       | App-Monitoring-Centreon-Process-ntpd        | Check NTP process.                          | X      |
| proc-sshd       | App-Monitoring-Centreon-Process-sshd        | Check sshd process.                         | X      |

### Métriques & statuts collectés

<!--DOCUSAURUS_CODE_TABS-->

<!--proc-sshd-->

| Nom                   | Unité  |
| :-------------------- | :----- |
| queued-events         | string |
| speed-events          | string |
| status                | string |
| unacknowledged-events | string |

<!--proc-centegine-->

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

<!--proc-gorgoned-->

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

<!--proc-ntpd-->

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

<!--proc-sshd-->

| Metric Name | Unit   |
| :---------- | :----- |
| Status      | string |

<!--END_DOCUSAURUS_CODE_TABS-->

## Prérequis

### SNMP

SNMP doit être configuré sur chaque collecteur supervisé. Vous pouvez vous aider de cette [documentation](operatingsystems-linux-snmp#prerequisites) pour mettre en place rapidement une simple configuration SNMP. 

### Echange de clef SSH

Un des services accompagnant le pack dispose d'une vérification réalisée à l'aide de SSH. Le serveur Central doit pouvoir se connecter à tous les collecteurs supervisés. 

Le serveur Central réalise ses vérifications en tant qu'utilisateur système **centreon-engine**, et se connectera en SSH au collecteur avec l'utilisateur **centreon**.

Les étapes ci-dessous décrivent l'échange de clef SSH entre le Central et le collecteur : 

1. Depuis le collecteur supervisé par le Central, paramétrer un mot de passe pour l'utilisateur **centreon** :

```
passwd centreon
```

2. Depuis le Central, créer et copier la nouvelle clef SSH de l'utilisateur **centreon-engine** vers le collecteur : 

```
su - centreon-engine
ssh-keygen -t ed25519 -a 100
ssh-copy-id -i ~/.ssh/id_ed25519.pub centreon@<IP_POLLER>
```

## 

## Installation

<!--DOCUSAURUS_CODE_TABS-->

<!--Online License-->

1. Installer le Plugin Centreon sur le serveur Central :

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Poller centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Sur l'interface Web de Centreon, installer le Plugin Pack **Centreon Poller** depuis la page **Configuration > Packs de plugins**.

<!--Offline License-->

1. Installer le Plugin Centreon sur le serveur Central :

```bash
yum install centreon-plugin-Applications-Monitoring-Centreon-Poller centreon-plugin-Operatingsystems-Linux-Snmp
```

2. Sur le serveur Central, installer le RPM du Pack **Centreon Poller** :

 ```bash
yum install centreon-pack-applications-monitoring-centreon-poller
 ```

3. Sur l'interface Web de Centreon, installer le Plugin Pack **Centreon Poller** depuis la page **Configuration > Packs de plugins**.

<!--END_DOCUSAURUS_CODE_TABS-->

## Configuration

### Hôte

* Ajoutez un Hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur *Centreon Poller*.
* Appliquez le Modèle d'Hôte **App-Monitoring-Centreon-Poller-custom**.

* Une fois le modèle appliqué, les Macros ci-dessous indiquées comme requises (*Mandatory*) doivent être renseignées.

| Obligatoire | Nom             | Description                                                  |
| :---------- | :-------------- | :----------------------------------------------------------- |
|             | MODULESTATSFILE | (Default: '/var/lib/centreon-engine/*-module-stats.json')    |
|             | EXTRAOPTIONS    | Any extra option you may want to add to every command\_line (eg. a --verbose flag) |

## Comment puis-je tester le Plugin et que signifient les options des commandes ? 

Une fois le Plugin installé, vous pouvez tester celui-ci directement en ligne de commande depuis votre collecteur Centreon en vous connectant avec l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_centreon_central.pl \
    --plugin=apps::centreon::local::plugin \
    --hostname=10.0.0.1 \
    --mode=broker-stats \
    --broker-stats-file='/var/lib/centreon-engine/*-module-stats.json' \
    --filter-name='' \
    --warning-speed-events='' \
    --critical-speed-events='' \
    --warning-queued-events='' \
    --critical-queued-events='' \
    --warning-unacknowledged-events='' \
    --critical-unacknowledged-events='' \
    --warning-status='' \
    --critical-status='%{type} eq "output" and %{queue_file_enabled} =~ /true/i' \
    --verbose \
    --remote \
    --ssh-option='-l=centreon'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK:  Speed Events: %s/s Queued Events: %s Unacknowledged Events: %s | 
```

La liste de toutes les options complémentaires et leur signification peut être affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_centreon_central.pl \
    --plugin=apps::centreon::local::plugin \
    --hostname=10.0.0.1 \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre `--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_centreon_central.pl \
    --plugin=apps::centreon::local::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../tutorials/troubleshooting-plugins) pour le diagnostic des erreurs communes des Plugins Centreon.