---
id: applications-monitoring-node-exporter-windows
title: Node Exporter Windows Metrics
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Ce pack permet la supervision d'un hôte Windows basée sur les métriques remontées par l'exporteur Prometheus.

## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Node Exporter Windows Metrics** apporte un modèle d'hôte :

* App-Monitoring-Node-Exporter-Windows-custom

Il apporte les modèles de service suivants :

| Alias             | Modèle de service                                 | Description                                   | Défaut | Découverte |
|:------------------|:--------------------------------------------------|:----------------------------------------------|:-------|:-----------|
| Node-Cpu          | App-Monitoring-Node-Exporter-Windows-Cpu          | Contrôle l'utilisation CPU du noeud           | X      |            |
| Node-Memory       | App-Monitoring-Node-Exporter-Windows-Memory       | Contrôle la consommation mémoire du noeud     | X      |            |
| Node-Service-Name | App-Monitoring-Node-Exporter-Windows-Service-Name | Contrôle l'état des services                  | X      | X          |
| Node-Storage      | App-Monitoring-Node-Exporter-Windows-Storage      | Contrôle la consommation du stockage du noeud | X      | X          |
| Node-Traffic      | App-Monitoring-Node-Exporter-Windows-Traffic      | Contrôle le trafic réseau par interface       | X      | X          |

### Règles de découverte

| Nom de la règle                                     | Description                                      |
|:----------------------------------------------------|:-------------------------------------------------|
| App-Monitoring-Node-Exporter-Windows-Interface-Name | Découverte des interfaces réseau et supervision de leur utilisation. |
| App-Monitoring-Node-Exporter-Windows-Storage-Name   | Découverte des disques et supervision de leur utilisation. |
| App-Monitoring-Node-Exporter-Windows-Service-Name   | Découverte des services et supervision de leur état. |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Node-Cpu" label="Node-Cpu">

| Métrique                                              | Unité |
|:------------------------------------------------------|:------|
| cpu.utilization.percentage                            | %     |
| *node_cpu*#node.cpu.dpc.utilization.percentage        | %     |
| *node_cpu*#node.cpu.idle.utilization.percentage       | %     |
| *node_cpu*#node.cpu.interrupt.utilization.percentage  | %     |
| *node_cpu*#node.cpu.privileged.utilization.percentage | %     |
| *node_cpu*#node.cpu.user.utilization.percentage       | %     |

</TabItem>
<TabItem value="Node-Memory" label="Node-Memory">

| Métrique                | Unité |
|:------------------------|:------|
| node.memory.pages.bytes | bytes |
| usage                   |       |

</TabItem>
<TabItem value="Node-Service-Name" label="Node-Service-Name">

| Métrique         | Unité |
|:-----------------|:------|
| *service*#status |       |

</TabItem>
<TabItem value="Node-Storage" label="Node-Storage">

| Métrique             | Unité |
|:---------------------|:------|
| *node_storage*#usage |       |

</TabItem>
<TabItem value="Node-Traffic" label="Node-Traffic">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| node.bandwidth.usage                     | %     |
| *traffic*#node.packets.in.error.count    | count |
| *traffic*#node.packets.out.error.count   | count |
| *traffic*#node.packets.in.count          | count |
| *traffic*#node.packets.out.count         | count |
| *traffic*#node.traffic.in.bitspersecond  | b/s   |
| *traffic*#node.traffic.out.bitspersecond | b/s   |

</TabItem>
</Tabs>

## Prérequis

Ce pack est basé sur l'exporteur Prometheus community pour les machines Windows : https://github.com/prometheus-community/windows_exporter#installation.

## Installation

<Tabs groupId="sync">
<TabItem value="Online License" label="Online License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Windows** :

```bash
yum install centreon-plugin-Applications-Monitoring-Nodeexporter-Windows
```

2. Sur l'interface web de Centreon, installez le connecteur de supervision **Node Exporter Windows Metrics** depuis la page **Configuration > Packs de plugins**.

</TabItem>
<TabItem value="Offline License" label="Offline License">

1. Installez le plugin sur tous les collecteurs Centreon devant superviser des ressources **Windows** :

```bash
yum install centreon-plugin-Applications-Monitoring-Nodeexporter-Windows
```

2. Sur le serveur central Centreon, installez le RPM du connecteur de supervision **Node Exporter Windows Metrics** :

```bash
yum install centreon-pack-applications-monitoring-node-exporter-windows
```

3. Sur l'interface web de Centreon, installez le connecteur de supervision **Node Exporter Windows Metrics** depuis la page **Configuration > Packs de plugins**.

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Windows**.
* Appliquez le modèle d'hôte **App-Monitoring-Node-Exporter-Windows-custom**.
* Une fois le modèle appliqué, les macros ci-dessous indiquées comme requises (**Obligatoire**) doivent être renseignées.

| Obligatoire | Macro             | Description                                                                            |
|:------------|:------------------|:---------------------------------------------------------------------------------------|
|             | EXTRAOPTIONS      | Options supplémentaires à ajouter à l'ensemble des commandes de l'hôte (ex: --verbose) |
|             | NODEEXPORTERPORT  | (Défaut : '9182')                                                                      |
|             | NODEEXPORTERPROTO | (Défaut : 'http')                                                                      |
|             | NODEEXPORTERURL   | (Défaut : '/metrics')                                                                  |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_windows.pl \
    --plugin=apps::monitoring::nodeexporter::windows::plugin \
    --mode=services \
    --hostname=10.0.0.1 \
    --urlpath='/metrics' \
    --port='9182' \
    --proto='http' \
    --service='' \
    --warning-status='' \
    --critical-status='%{start_mode} =~ /auto/ && %{status} !~ /^running$/' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
CRITICAL: Service : 'winserv1' [state: 'stopped'] [start_mode: 'auto'] - Service : 'sysmonitor' [state: 'stopped'] [start_mode: 'auto']
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_windows.pl \
    --plugin=apps::monitoring::nodeexporter::windows::plugin \
    --mode=services \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_monitoring_nodeexporter_windows.pl \
    --plugin=apps::monitoring::nodeexporter::windows::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.