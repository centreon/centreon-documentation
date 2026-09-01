---
id: operatingsystems-windows-snmp-rs
title: Windows SNMP (Rust)
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Windows SNMP (Rust)** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Generic SNMP (Rust)](./applications-protocol-snmp-rs.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Windows SNMP (Rust)** apporte un modèle d'hôte :

* **OS-Windows-SNMP-Rs-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="OS-Windows-SNMP-Rs-custom" label="OS-Windows-SNMP-Rs-custom">

| Alias       | Modèle de service                     | Description                                               |
|:------------|:--------------------------------------|:----------------------------------------------------------|
| Cpu         | OS-Windows-Cpu-SNMP-Rs-custom         | Contrôle du taux d'utilisation du CPU de la machine       |
| Disk-Global | OS-Windows-Disk-Global-SNMP-Rs-custom | Contrôle du taux d'espace libre disponible des disques    |
| Memory      | OS-Windows-Memory-SNMP-Rs-custom      | Contrôle l'utilisation de la mémoire vive (RAM)           |
| Swap        | OS-Windows-Swap-SNMP-Rs-custom        | Contrôle du taux d'utilisation de la mémoire virtuelle    |
| Uptime      | OS-Windows-Uptime-SNMP-Rs-custom      | Durée depuis laquelle l'hôte fonctionne sans interruption |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **OS-Windows-SNMP-Rs-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias           | Modèle de service                         | Description                                                                                                                            |
|:----------------|:------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------|
| Process-Generic | OS-Windows-Process-Generic-SNMP-Rs-custom | Contrôle permettant de vérifier que les processus Windows sont démarrés et de surveiller leur utilisation de la mémoire vive et du CPU |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Nom                          | Unité |
|:-----------------------------|:------|
| avg.cpu.usage.percent        | %     |
| *cpu*#core.cpu.usage.percent | %     |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Nom                                         | Unité |
|:--------------------------------------------|:------|
| *storage.description*#storage.usage.bytes   | B     |
| *storage.description*#storage.usage.percent | %     |

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                                        | Unité |
|:-------------------------------------------|:------|
| *storage.description*#memory.usage.percent | %     |
| *storage.description*#memory.usage.bytes   | B     |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| *processes.name*#process.memory.bytes | B     |
| *processes.name*#process.cpu.percent  | %     |

</TabItem>
<TabItem value="Swap" label="Swap">

| Nom                                        | Unité |
|:-------------------------------------------|:------|
| *storage.description*#memory.usage.percent | %     |
| *storage.description*#memory.usage.bytes   | B     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Nom                   | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

Configurez le service SNMP en V2 pour superviser le système Windows.

> Les instructions ci-après peuvent changer en fonction de votre version de
> Windows. Référez-vous à la documentation officielle de Microsoft le cas
> échéant.

  - Installez la fonctionnalité SNMP dans le gestionnaire de serveur de Windows : **Gestionnaire de serveur > Ajouter des rôles et des fonctionnalités > Installation basée sur un rôle ou une fonctionnalité > Service SNMP**.

  - Paramétrez le service **SNMP agent** avec votre communauté et les IP des collecteurs qui feront les requêtes.

  - Redémarrez le service SNMP après avoir configuré celui-ci.

## Flux réseaux

La communication doit être possible sur le port UDP 161 depuis le collecteur Centreon vers le serveur Windows supervisé.

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
dnf install centreon-pack-operatingsystems-windows-snmp-rs
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-operatingsystems-windows-snmp-rs
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-windows-snmp-rs
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Windows SNMP (Rust)**
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
dnf install centreon-plugin-operatingsystems-windows-snmp-rs
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-operatingsystems-windows-snmp-rs
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-windows-snmp-rs
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **OS-Windows-SNMP-Rs-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMP\_EXTRA\_OPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro            | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING_AVERAGE  | Warning threshold for the overall average                                                                                                        |                   |             |
| CRITICAL_AVERAGE | Critical threshold for the overall average                                                                                                       |                   |             |
| WARNING_CORE     | Warning threshold for each CPU core                                                                                                              |                   |             |
| CRITICAL_CORE    | Critical threshold for each CPU core                                                                                                             |                   |             |
| EXTRA_OPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Macro            | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INCLUDE_NAME     | Include filter (can be used multiple times)                                                                                                      | .*                |             |
| WARNING_BYTES    | Warning threshold for the metric 'storage.usage.bytes'                                                                                           |                   |             |
| CRITICAL_BYTES   | Critical threshold for the metric 'storage.usage.bytes'                                                                                          |                   |             |
| WARNING_PERCENT  | Warning threshold for the metric 'storage.usage.percent'                                                                                         |                   |             |
| CRITICAL_PERCENT | Critical threshold for the metric 'storage.usage.percent'                                                                                        |                   |             |
| EXTRA_OPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro            | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING_BYTES    | Warning threshold for the metric 'memory.usage.bytes'                                                                                            |                   |             |
| CRITICAL_BYTES   | Critical threshold for the metric 'memory.usage.bytes'                                                                                           |                   |             |
| WARNING_PERCENT  | Warning threshold for the metric 'memory.usage.percent'                                                                                          |                   |             |
| CRITICAL_PERCENT | Critical threshold for the metric 'memory.usage.percent'                                                                                         |                   |             |
| EXTRA_OPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Macro           | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| INCLUDE_NAME    | Include filter (can be used multiple times)                                                                                                      | .*                |             |
| EXCLUDE_NAME    | Exclude filter (can be used multiple times)                                                                                                      | ^$                |             |
| NO_DATA_STATUS  | Status when the filters keep no data: OK, WARNING, CRITICAL or UNKNOWN                                                                           | CRITICAL          |             |
| WARNING_CPU     | Warning threshold for the metric 'process.cpu.percent'                                                                                           |                   |             |
| CRITICAL_CPU    | Critical threshold for the metric 'process.cpu.percent'                                                                                          |                   |             |
| WARNING_MEMORY  | Warning threshold for the metric 'process.memory.bytes'                                                                                          |                   |             |
| CRITICAL_MEMORY | Critical threshold for the metric 'process.memory.bytes'                                                                                         |                   |             |
| EXTRA_OPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Swap" label="Swap">

| Macro            | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING_BYTES    | Warning threshold for the metric 'memory.usage.bytes'                                                                                            |                   |             |
| CRITICAL_BYTES   | Critical threshold for the metric 'memory.usage.bytes'                                                                                           |                   |             |
| WARNING_PERCENT  | Warning threshold for the metric 'memory.usage.percent'                                                                                          |                   |             |
| CRITICAL_PERCENT | Critical threshold for the metric 'memory.usage.percent'                                                                                         |                   |             |
| EXTRA_OPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
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
	--json '/usr/lib/centreon/plugins/rs-collections/operatingsystems-windows-snmp/uptime.json' \
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
	--json '/usr/lib/centreon/plugins/rs-collections/operatingsystems-windows-snmp/uptime.json' \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                                                                     | Modèle de service associé                                            |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/cpu.json.pm)]                   | OS-Windows-Cpu-SNMP-Rs-custom                                        |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/operatingsystems-windows-snmp/memory.json.pm)]          | OS-Windows-Memory-SNMP-Rs-custom<br />OS-Windows-Swap-SNMP-Rs-custom |
| processcount [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/processcount.json.pm)] | OS-Windows-Process-Generic-SNMP-Rs-custom                            |
| storage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/storage.json.pm)]           | OS-Windows-Disk-Global-SNMP-Rs-custom                                |
| sysdesc [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/sysdesc.json.pm)]           | Non utilisé dans ce connecteur de supervision                        |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src//home/omercier/projets/centreon-plugins/rust-plugins/rs-collections/applications-protocol-snmp/uptime.json.pm)]             | OS-Windows-Uptime-SNMP-Rs-custom                                     |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option           | Description                                                                               |
|:-----------------|:------------------------------------------------------------------------------------------|
| --hostname       | Hostname or IP address (default: localhost)                                               |
| --port           | SNMP port (default: 161)                                                                  |
| --snmp-version   | SNMP version (default: 2c)                                                                |
| --json           | JSON command definition file                                                              |
| --filter-in      | Include filter (can be used multiple times)                                               |
| --filter-out     | Exclude filter (can be used multiple times)                                               |
| --no-data-status | Status when the filters keep no data: OK, WARNING, CRITICAL or UNKNOWN (default: UNKNOWN) |
| --check-format   | Check JSON file validity and exit                                                         |
| --check-response | Display raw SNMP response                                                                 |
| --list-counters  | List all available metrics                                                                |
| --help           | Print this help message                                                                   |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option          | Description                                                 |
|:----------------|:------------------------------------------------------------|
| --warning-core  | Warning threshold for the metric 'core.cpu.usage.percent'.  |
| --critical-core | Critical threshold for the metric 'core.cpu.usage.percent'. |
| --warning-avg   | Warning threshold for the metric 'avg.cpu.usage.percent'.   |
| --critical-avg  | Critical threshold for the metric 'avg.cpu.usage.percent'.  |

</TabItem>
<TabItem value="Disk-Global" label="Disk-Global">

| Option           | Description                                                |
|:-----------------|:-----------------------------------------------------------|
| --warning-bytes  | Warning threshold for the metric 'storage.usage.bytes'.    |
| --critical-bytes | Critical threshold for the metric 'storage.usage.bytes'.   |
| --warning-prct   | Warning threshold for the metric 'storage.usage.percent'.  |
| --critical-prct  | Critical threshold for the metric 'storage.usage.percent'. |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option           | Description                                               |
|:-----------------|:----------------------------------------------------------|
| --warning-prct   | Warning threshold for the metric 'memory.usage.percent'.  |
| --critical-prct  | Critical threshold for the metric 'memory.usage.percent'. |
| --warning-bytes  | Warning threshold for the metric 'memory.usage.bytes'.    |
| --critical-bytes | Critical threshold for the metric 'memory.usage.bytes'.   |

</TabItem>
<TabItem value="Process-Generic" label="Process-Generic">

| Option                    | Description                                               |
|:--------------------------|:----------------------------------------------------------|
| --warning-process-memory  | Warning threshold for the metric 'process.memory.bytes'.  |
| --critical-process-memory | Critical threshold for the metric 'process.memory.bytes'. |
| --warning-process-cpu     | Warning threshold for the metric 'process.cpu.percent'.   |
| --critical-process-cpu    | Critical threshold for the metric 'process.cpu.percent'.  |

</TabItem>
<TabItem value="Swap" label="Swap">

| Option           | Description                                               |
|:-----------------|:----------------------------------------------------------|
| --warning-prct   | Warning threshold for the metric 'memory.usage.percent'.  |
| --critical-prct  | Critical threshold for the metric 'memory.usage.percent'. |
| --warning-bytes  | Warning threshold for the metric 'memory.usage.bytes'.    |
| --critical-bytes | Critical threshold for the metric 'memory.usage.bytes'.   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option             | Description                                                |
|:-------------------|:-----------------------------------------------------------|
| --warning-seconds  | Warning threshold for the metric 'system.uptime.seconds'.  |
| --critical-seconds | Critical threshold for the metric 'system.uptime.seconds'. |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon-plugin-rust-snmp -H '10.0.0.1' -c 'my-snmp-community' -v '2c'  \
	--json '/usr/lib/centreon/plugins/rs-collections/operatingsystems-windows-snmp/uptime.json' \
	--warning-seconds='' \
	--help
```
