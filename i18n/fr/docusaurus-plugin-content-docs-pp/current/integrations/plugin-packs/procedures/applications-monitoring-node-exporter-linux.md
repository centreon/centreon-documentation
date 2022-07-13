---
id: applications-monitoring-node-exporter-linux
title: Node Exporter Linux Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce pack permet la supervision d'un hôte Linux basée sur les métriques remontées par Node exporter.

## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Node Exporter Linux Metrics** apporte un modèle d'hôte :

* App-Monitoring-Node-Exporter-Linux-custom

Il apporte les modèles de service suivants :

| Alias        | Modèle de service                          | Description                                   | Défaut | Découverte |
|:-------------|:-------------------------------------------|:----------------------------------------------|:-------|:-----------|
| Node-Cpu     | App-Monitoring-Node-Exporter-Linux-Cpu     | Contrôle l'utilisation CPU du noeud           | X      |            |
| Node-Load    | App-Monitoring-Node-Exporter-Linux-Load    | Contrôle la charge du noeud                   | X      |            |
| Node-Memory  | App-Monitoring-Node-Exporter-Linux-Memory  | Contrôle la consommation mémoire du noeud     | X      |            |
| Node-Storage | App-Monitoring-Node-Exporter-Linux-Storage | Contrôle la consommation du stockage du noeud | X      | X          |
| Node-Traffic | App-Monitoring-Node-Exporter-Linux-Traffic | Contrôle l'utilisation CPU du noeud           | X      | X          |

### Règles de découverte

| Nom de la règle                                   | Description                                                                                        |
|:--------------------------------------------------|:---------------------------------------------------------------------------------------------------|
| App-Monitoring-Node-Exporter-Linux-Interface-Name | Permet la découverte et la mise en supervision automatique des interfaces réseau du serveur Linux. |
| App-Monitoring-Node-Exporter-Linux-Storage-Name   | Permet la découverte et la mise en supervision automatique des partitions du serveur Linux.        |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Node-Cpu" label="Node-Cpu">

| Métrique                                           | Unité |
|:---------------------------------------------------|:------|
| cpu.utilization.percentage                         | %     |
| *node_cpu*#node.cpu.idle.utilization.percentage    | %     |
| *node_cpu*#node.cpu.iowait.utilization.percentage  | %     |
| *node_cpu*#node.cpu.irq.utilization.percentage     | %     |
| *node_cpu*#node.cpu.nice.utilization.percentage    | %     |
| *node_cpu*#node.cpu.softirq.utilization.percentage | %     |
| *node_cpu*#node.cpu.steal.utilization.percentage   | %     |
| *node_cpu*#node.cpu.system.utilization.percentage  | %     |
| *node_cpu*#node.cpu.user.utilization.percentage    | %     |

</TabItem>
<TabItem value="Node-Load" label="Node-Load">

| Métrique             | Unité |
|:---------------------|:------|
| load.1minute.count   | count |
| load.15minutes.count | count |
| load.5minutes.count  | count |

</TabItem>
<TabItem value="Node-Memory" label="Node-Memory">

| Métrique                 | Unité |
|:-------------------------|:------|
| node.memory.buffer.bytes | B     |
| node.memory.cached.bytes | B     |
| usage                    | %     |

</TabItem>
<TabItem value="Node-Storage" label="Node-Storage">

| Métrique             | Unité |
|:---------------------|:------|
| *node_storage*#usage | %     |

</TabItem>
<TabItem value="Node-Traffic" label="Node-Traffic">

| Métrique                       | Unité |
|:-------------------------------|:------|
| status                         |       |
| node.packets.in.count          | count |
| node.packets.out.count         | count |
| node.traffic.in.bitspersecond  | b/s   |
| node.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prérequis

Pour installer l'exporteur de métriques Node exporter, vous pouvez suivre cette documentation : https://prometheus.io/docs/guides/node-exporter/#installing-and-running-the-node-exporter.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Node Exporter Linux Metrics** :

```bash
yum install centreon-plugin-Applications-Monitoring-Nodeexporter-Linux
```

2. Sur l'interface web de Centreon, installez le Plugin Pack **Node Exporter Linux Metrics** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Node Exporter Linux Metrics** :

```bash
yum install centreon-plugin-Applications-Monitoring-Nodeexporter-Linux
```

2. Sur le serveur central Centreon, installez le RPM du Plugin Pack **Node Exporter Linux Metrics** :

```bash
yum install centreon-pack-applications-monitoring-node-exporter-linux
```

3. Sur l'interface web de Centreon, installez le Plugin Pack **Node Exporter Linux Metrics** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Node Exporter Linux Metrics**.
* Appliquez le modèle d'hôte **App-Monitoring-Node-Exporter-Linux-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro             | Description                                                                            |
|:------------|:------------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS      | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|             | NODEEXPORTERPORT  | (Défaut : '9100')                                                                      |
|             | NODEEXPORTERPROTO | (Défaut : 'http')                                                                      |
|             | NODEEXPORTERURL   | (Défaut : '/metrics')                                                                  |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_linux.pl \
    --plugin=apps::monitoring::nodeexporter::linux::plugin \
    --mode=load \
    --hostname=10.0.0.1 \
    --urlpath='/metrics' \
    --port='9100' \
    --proto='http' \
    --warning-load1='' \
    --critical-load1='' \
    --warning-load5='' \
    --critical-load5='' \
    --warning-load15='' \
    --critical-load15='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Load 1 minute: 0.49, Load 5 minutes: 0.71, Load 15 minutes: 0.66 | 'load.1minute.count'=0.49;;;0; 'load.5minutes.count'=0.71;;;0; 'load.15minutes.count'=0.66;;;0;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_linux.pl \
    --plugin=apps::monitoring::nodeexporter::linux::plugin \
    --mode=load \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_linux.pl \
    --plugin=apps::monitoring::nodeexporter::linux::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.