---
id: network-enterasys-snmp
title: Enterasys SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Enterasys SNMP** apporte un modèle d'hôte :

* Net-Enterasys-SNMP-custom

Il apporte les modèles de service suivants :

| Alias      | Modèle de service             | Description                                               | Défaut | Découverte |
|:-----------|:------------------------------|:----------------------------------------------------------|:-------|:-----------|
| Cpu        | Net-Enterasys-Cpu-SNMP        | Contrôle du taux d'utilisation du CPU de la machine       | X      |            |
| Interfaces | Net-Enterasys-Interfaces-SNMP | Contrôle les interfaces                                   |        | X          |
| Memory     | Net-Enterasys-Memory-SNMP     | Contrôle du taux d'utilisation mémoire                    | X      |            |
| Storage    | Net-Enterasys-Storage-SNMP    | Contrôle l'utilisation du stockage                        | X      |            |
| Uptime     | Net-Enterasys-Uptime-SNMP     | Durée depuis laquelle le serveur tourne sans interruption | X      |            |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Services" label="Services">

| Nom de la règle                   | Description                                                   |
|:----------------------------------|:--------------------------------------------------------------|
| Net-Enterasys-SNMP-Interface-Name | Discover network interfaces and monitor bandwidth utilization |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/onprem/monitoring/discovery/services-discovery/#règles-de-découverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                                                  | Unité |
|:----------------------------------------------------------|:------|
| cpu.utilization.1m.percentage                             | %     |
| cpu.utilization.5m.percentage                             | %     |
| cpu.utilization.5s.percentage                             | %     |
| *entity_name~cpu_core*#core.cpu.utilization.1m.percentage | %     |
| *entity_name~cpu_core*#core.cpu.utilization.5m.percentage | %     |
| *entity_name~cpu_core*#core.cpu.utilization.5s.percentage | %     |

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
<TabItem value="Memory" label="Memory">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| *entity_name~memory_name*#memory.usage.bytes      | B     |
| *entity_name~memory_name*#memory.free.bytes       | B     |
| *entity_name~memory_name*#memory.usage.percentage | %     |

</TabItem>
<TabItem value="Storage" label="Storage">

| Métrique                                            | Unité |
|:----------------------------------------------------|:------|
| *entity_name~storage_name*#storage.usage.bytes      | B     |
| *entity_name~storage_name*#storage.free.bytes       | B     |
| *entity_name~storage_name*#storage.usage.percentage | %     |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Métrique              | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Enterasys** en SNMP,  il est nécessaire de configurer l'agent sur le serveur.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquet
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-network-enterasys-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-enterasys-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-enterasys-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Enterasys SNMP**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/onprem/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Network-Enterasys-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Enterasys-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-enterasys-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Enterasys**.
* Appliquez le modèle d'hôte **Net-Enterasys-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_enterasys_snmp.pl \
    --plugin=network::enterasys::snmp::plugin \
    --mode=memory \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Memory 'RAM device' [unit-2] total: 256.00 MB used: 232.65 MB (90.88%) free: 23.35 MB (9.12%) | 'unit-2~RAM device#memory.usage.bytes'=243950592B;;;0;268431360 'unit-2~RAM device#memory.free.bytes'=24480768B;;;0;268431360 'unit-2~RAM device#memory.usage.percentage'=90.88%;;;0;100
Memory 'RAM device' [unit-2] total: 256.00 MB used: 232.65 MB (90.88%) free: 23.35 MB (9.12%)
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_enterasys_snmp.pl \
    --plugin=network::enterasys::snmp::plugin \
    --mode=memory \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_enterasys_snmp.pl \
    --plugin=network::enterasys::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
