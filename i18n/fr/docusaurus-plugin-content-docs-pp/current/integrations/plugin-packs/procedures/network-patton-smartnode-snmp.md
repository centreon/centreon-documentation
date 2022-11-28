---
id: network-patton-smartnode-snmp
title: Patton SmartNode SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le Plugin Pack Centreon **Patton SmartNode SNMP** apporte un modèle d'hôte :

* Net-Patton-Smartnode-SNMP-custom

Il apporte les modèles de service suivants :

| Alias  | Modèle de service                | Description                | Défaut |
|:-------|:---------------------------------|:---------------------------|:-------|
| Call   | Net-Patton-Smartnode-Call-SNMP   | Contrôle les appels        | X      |
| System | Net-Patton-Smartnode-System-SNMP | Contrôle l'état du système | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Call" label="Call">

| Métrique                                  | Unité |
|:------------------------------------------|:------|
| *gateway*#gateway.calls.accumulated.count |       |
| *gateway*#gateway.calls.connected.count   |       |
| *gateway*#gateway.calls.ongoing.count     |       |
| *isdn*#isdn.calls.accumulated.count       |       |
| *isdn*#isdn.calls.connected.count         |       |
| *isdn*#isdn.calls.ongoing.count           |       |

</TabItem>
<TabItem value="System" label="System">

| Métrique                                 | Unité |
|:-----------------------------------------|:------|
| cpu.utilization.percentage               | %     |
| *cpu*#core.cpu.utilization.percentage    | %     |
| *cpu*#core.cpu.utilization.1m.percentage | %     |
| *cpu*#core.cpu.utilization.5m.percentage | %     |
| *memory*#memory.usage.bytes              | B     |
| *memory*#memory.free.bytes               | B     |
| *memory*#memory.usage.percentage         | %     |
| *temperature*#probe.temperature.celsius  | C     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Patton SmartNode SNMP** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* LINK

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Plugin Packs > Gestionnaire**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-patton-smartnode-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-patton-smartnode-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-network-patton-smartnode-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Patton SmartNode SNMP**
depuis l'interface web et le menu **Configuration > Plugin Packs > Gestionnaire**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Network-Patton-SmartNode-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Patton-SmartNode-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-network-patton-smartnode-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Patton SmartNode SNMP**.
* Appliquez le modèle d'hôte **Net-Patton-Smartnode-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Obligatoire | Macro            | Description                                  |
|:------------|:-----------------|:---------------------------------------------|
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_patton_smartnode.pl \
    --plugin=network::patton::smartnode::snmp::plugin \
    --mode=system \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-memory-usage='' \
    --critical-memory-usage='' \
    --warning-memory-usage-free='' \
    --critical-memory-usage-free='' \
    --warning-memory-usage-prct='' \
    --critical-memory-usage-prct='' \
    --warning-cpu-average='' \
    --critical-cpu-average='' \
    --warning-core-cpu-utilization='' \
    --critical-core-cpu-utilization='' \
    --warning-core-cpu-utilization-1m='' \
    --critical-core-cpu-utilization-1m='' \
    --warning-core-cpu-utilization-5m='' \
    --critical-core-cpu-utilization-5m='' \
    --warning-probe-temperature='' \
    --critical-probe-temperature='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: 1 CPU(s) average usage is 25.00 % - All CPU usages are ok - All memory usages are ok - All temperatures are ok | 'cpu.utilization.percentage'=25.00%;;;0;100 '1#core.cpu.utilization.percentage'=10.00%;;;0;100 '1#core.cpu.utilization.1m.percentage'=4.00%;;;0;100 '1#core.cpu.utilization.5m.percentage'=3.00%;;;0;100 '2#core.cpu.utilization.percentage'=15.00%;;;0;100 '2#core.cpu.utilization.1m.percentage'=5.00%;;;0;100 '2#core.cpu.utilization.5m.percentage'=2.00%;;;0;100 '1#memory.usage.bytes'=10997440B;;;0;400000000 '1#memory.free.bytes'=233509184B;;;0;400000000 '1#memory.usage.percentage'=2.75%;;;0;100 '2#memory.usage.bytes'=200000000B;;;0;300000000 '2#memory.free.bytes'=100000000B;;;0;300000000 '2#memory.usage.percentage'=66.67%;;;0;100 '1#probe.temperature.celsius'=47.00C;;;0;100 '2#probe.temperature.celsius'=43.00C;;;0;100
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_patton_smartnode.pl \
    --plugin=network::patton::smartnode::snmp::plugin \
    --mode=system \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_patton_smartnode.pl \
    --plugin=network::patton::smartnode::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.