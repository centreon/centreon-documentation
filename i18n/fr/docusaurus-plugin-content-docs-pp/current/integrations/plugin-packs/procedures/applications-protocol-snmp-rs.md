---
id: applications-protocol-snmp-rs
title: Generic SNMP (Rust)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Generic SNMP (Rust)** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Generic SNMP (Rust)** apporte un modèle d'hôte :

* **App-Protocol-SNMP-Rs-custom**

Le connecteur apporte le modèle de service suivant
(classé selon le modèle d'hôte auquel il est rattaché) :

<Tabs groupId="sync">
<TabItem value="App-Protocol-SNMP-Rs-custom" label="App-Protocol-SNMP-Rs-custom">

| Alias  | Modèle de service                  | Description                                               |
|:-------|:-----------------------------------|:----------------------------------------------------------|
| Uptime | App-Protocol-SNMP-Uptime-Rs-custom | Durée depuis laquelle l'hôte fonctionne sans interruption |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **App-Protocol-SNMP-Rs-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Uptime" label="Uptime">

| Nom                   | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

L'agent SNMP doit être activé et configuré sur l'équipement. 
Veuillez vous référer à la documentation officielle du constructeur/éditeur. 
Il se peut que votre équipement nécessite qu'une liste d'adresses autorisées à l'interroger soit paramétrée. 
Veillez à ce que les adresses des collecteurs Centreon y figurent bien.

## Installer le connecteur de supervision

### Pack

La procédure d'installation des connecteurs de supervision diffère légèrement [suivant que votre licence est offline ou online](../getting-started/how-to-guides/connectors-licenses.md).

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-applications-protocol-snmp-rs
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-applications-protocol-snmp-rs
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-protocol-snmp-rs
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-applications-protocol-snmp-rs
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Generic SNMP (Rust)**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-applications-protocol-snmp-rs
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-applications-protocol-snmp-rs
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-protocol-snmp-rs
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **App-Protocol-SNMP-Rs-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro              | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMP\_EXTRA\_OPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Uptime" label="Uptime">

| Macro            | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING_SECONDS  | Warning threshold for the metric 'system.uptime.seconds'                                                                                         |                   |             |
| CRITICAL_SECONDS | Critical threshold for the metric 'system.uptime.seconds'                                                                                        |                   |             |
| EXTRA_OPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon-plugin-rust-snmp -H '10.0.0.1' -c 'my-snmp-community' -v '2c'  \
	--json '/usr/lib/centreon/plugins/rs-collections/applications-protocol-snmp/uptime.json' \
	--warning-seconds='' \
	--critical-seconds='' 
```

La commande devrait retourner un message de sortie similaire à :

```
OK: Uptime: 64750s | 'system.uptime.seconds'=64750s;;;0;
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon-plugin-rust-snmp -H '10.0.0.1' -c 'my-snmp-community' -v '2c'  \
	--json '/usr/lib/centreon/plugins/rs-collections/applications-protocol-snmp/uptime.json' \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                                                                     | Modèle de service associé                     |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/cpu.json.pm)]                   | Non utilisé dans ce connecteur de supervision |
| processcount [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/processcount.json.pm)] | Non utilisé dans ce connecteur de supervision |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/storage.json.pm)]           | Non utilisé dans ce connecteur de supervision |
| sysdesc [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/sysdesc.json.pm)]           | Non utilisé dans ce connecteur de supervision |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/uptime.json.pm)]             | App-Protocol-SNMP-Uptime-Rs-custom            |

### Options disponibles

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Uptime" label="Uptime">

| Option             | Description                                                                               |
|:-------------------|:------------------------------------------------------------------------------------------|
| --warning-seconds  | Warning threshold for the metric 'system.uptime.seconds'.                                 |
| --critical-seconds | Critical threshold for the metric 'system.uptime.seconds'.                                |
| --hostname         | Hostname or IP address (default: localhost)                                               |
| --port             | SNMP port (default: 161)                                                                  |
| --snmp-version     | SNMP version (default: 2c)                                                                |
| --json             | JSON command definition file                                                              |
| --filter-in        | Include filter (can be used multiple times)                                               |
| --filter-out       | Exclude filter (can be used multiple times)                                               |
| --no-data-status   | Status when the filters keep no data: OK, WARNING, CRITICAL or UNKNOWN (default: UNKNOWN) |
| --check-format     | Check JSON file validity and exit                                                         |
| --check-response   | Display raw SNMP response                                                                 |
| --list-counters    | List all available metrics                                                                |
| --help             | Print this help message                                                                   |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon-plugin-rust-snmp -H '10.0.0.1' -c 'my-snmp-community' -v '2c'  \
	--json '/usr/lib/centreon/plugins/rs-collections/applications-protocol-snmp/uptime.json' \
	--warning-seconds='' \
	--help
```
