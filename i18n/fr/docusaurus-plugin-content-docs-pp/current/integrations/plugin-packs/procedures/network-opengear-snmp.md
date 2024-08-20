---
id: network-opengear-snmp
title: Opengear SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Opengear SNMP** apporte un modèle d'hôte :

* Net-Opengear-SNMP-custom

Il apporte les modèles de service suivants :

| Alias        | Modèle de service              | Description                                               | Défaut | Découverte |
|:-------------|:-------------------------------|:----------------------------------------------------------|:-------|:-----------|
| Cpu-Detailed | Net-Opengear-Cpu-Detailed-SNMP | Contrôle du taux d'utilisation détaillé CPU de la machine | X      |            |
| Interfaces   | Net-Opengear-Interfaces-SNMP   | Contrôle les interfaces                                   |        | X          |
| Load         | Net-Opengear-Load-SNMP         | Contrôle de la charge serveur                             | X      |            |
| Memory       | Net-Opengear-Memory-SNMP       | Contrôle du taux d'utilisation de la mémoire vive         | X      |            |
| Serial-Ports | Net-Opengear-Serial-Ports-SNMP | Contrôle les ports série                                 |        | X          |
| Uptime       | Net-Opengear-Uptime-SNMP       | Durée depuis laquelle le serveur tourne sans interruption | X      |            |

### Règles de découverte

| Nom de la règle                    | Description                                                             |
|:-----------------------------------|:------------------------------------------------------------------------|
| Net-Opengear-SNMP-Interface-Name   | Découvre les interfaces réseau et supervise le statut et l'utilisation |
| Net-Opengear-SNMP-Serial-Port-Name | Découvre les ports SFP et en supervise l'utilisation                       |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu-Detailed" label="Cpu-Detailed">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| cpu.user.utilization.percentage       | %     |
| cpu.nice.utilization.percentage       | %     |
| cpu.system.utilization.percentage     | %     |
| cpu.idle.utilization.percentage       | %     |
| cpu.wait.utilization.percentage       | %     |
| cpu.kernel.utilization.percentage     | %     |
| cpu.interrupt.utilization.percentage  | %     |
| cpu.softirq.utilization.percentage    | %     |
| cpu.steal.utilization.percentage      | %     |
| cpu.guest.utilization.percentage      | %     |
| cpu.guestnice.utilization.percentage  | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Métrique                                                  | Unité |
|:----------------------------------------------------------|:------|
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s   |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s   |
| *interface_name*#interface.packets.in.error.percentage    | %     |
| *interface_name*#interface.packets.in.discard.percentage  | %     |
| *interface_name*#interface.packets.out.error.percentage   | %     |
| *interface_name*#interface.packets.out.discard.percentage | %     |

</TabItem>
<TabItem value="Load" label="Load">

| Métrique       | Unité |
|:---------------|:------|
| load.1m.count  |       |
| load.5m.count  |       |
| load.15m.count |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| memory.buffer.bytes     | B     |
| memory.cached.bytes     | B     |
| memory.shared.bytes     | B     |

</TabItem>
<TabItem value="Serial-Ports" label="Serial-Ports">

| Métrique                                           | Unité |
|:---------------------------------------------------|:------|
| *port_label*#serial_port.traffic.in.bitspersecond  | b/s   |
| *port_label*#serial_port.traffic.out.bitspersecond | b/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique              | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Opengear** en SNMP, il est nécessaire de configurer l'agent sur l'équipement.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Plugin Packs > Gestionnaire**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-opengear-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-opengear-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-opengear-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Opengear SNMP**
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
dnf install centreon-plugin-Network-Opengear-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Opengear-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-opengear-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Remplissez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Opengear**.
* Appliquez le modèle d'hôte **Net-Opengear-SNMP-custom**.

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
/usr/lib/centreon/plugins/centreon_opengear_snmp.pl \
    --plugin=network::opengear::snmp::plugin \
    --mode=memory \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community'
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Ram Total: 247.75 MB Used (-buffers/cache): 49.95 MB (20.16%) Free: 197.80 MB (79.84%), Buffer: 7.08 MB, Cached: 21.73 MB, Shared: 0.00 B | 'memory.usage.bytes'=52375552B;;;0;259784704 'memory.free.bytes'=207409152B;;;0;259784704 'memory.usage.percentage'=20.16%;;;0;100 'memory.buffer.bytes'=7421952B;;;0; 'memory.cached.bytes'=22781952B;;;0; 'memory.shared.bytes'=0B;;;0;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_opengear_snmp.pl \
    --plugin=network::opengear::snmp::plugin \
    --mode=memory \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_opengear_snmp.pl \
    --plugin=network::opengear::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
