---
id: operatingsystems-picos-snmp
title: PICOS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';


## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **PICOS SNMP** apporte un modèle d'hôte :

* OS-PICOS-SNMP-custom

Il apporte les modèles de service suivants :

| Alias       | Modèle de service         | Description                                                                      | Défaut | Découverte |
|:------------|:--------------------------|:---------------------------------------------------------------------------------|:-------|:-----------|
| Cpu         | OS-PICOS-Cpu-SNMP         | Contrôle du taux d'utilisation du CPU du l'équipement                            | X      |            |
| Hardware    | OS-PICOS-Hardware-SNMP    | Contrôle les composants hardware de l'équipement                                 | X      |            |
| Interfaces  | OS-PICOS-Interfaces-SNMP  | Contrôle le trafic réseau et l'état des interfaces réseau                        |        | X          |
| Memory      | OS-PICOS-Memory-SNMP      | Contrôle du taux d'utilisation mémoire                                           | X      |            |
| Temperature | OS-PICOS-Temperature-SNMP | Contrôle la température du switch, du microcontrôleur du switch ainsi que du CPU | X      |            |

### Règles de découverte

| Nom de la règle              | Description                                                   |
|:-----------------------------|:--------------------------------------------------------------|
| OS-PICOS-SNMP-Interface-Name | Discover network interfaces and monitor bandwidth utilization |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/onprem/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Métrique                   | Unité |
|:---------------------------|:------|
| cpu.utilization.percentage | %     |
| cpu.temperature.celsius    | C     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name                                    | Unit  |
| :--------------------------------------------- | :---- |
| *psu_instance*#hardware.powersupply.temperature.celsius         | C   |
| *psu_instance*#hardware.powersupply.fan.speed.rpm         | rpm   |
| power supply status                            |       |
| *fan_instance*#hardware.fan.speed.rpm | C     |

</TabItem>
<TabItem value="Interface" label="Interface">

| Metric name                                               | Unit  |
| :-------------------------------------------------------- | :---- |
| status                                                    |       |
| *interface_name*#interface.traffic.in.bitspersecond       |  b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      |  b/s  |
| *interface_name*#interface.packets.in.error.percentage    |  %    |
| *interface_name*#interface.packets.in.discard.percentage  |  %    |
| *interface_name*#interface.packets.out.error.percentage   |  %    |
| *interface_name*#interface.packets.out.discard.percentage |  %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Métrique                | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Temperature" label="Temperature">

| Métrique                   | Unité |
|:---------------------------|:------|
| chip.temperature.celsius   | C     |
| cpu.temperature.celsius    | C     |
| switch.temperature.celsius | C     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre équipement **PICOS** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
https://docs.pica8.com/display/picos2102cg/Configuring+snmp

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
dnf install centreon-pack-operatingsystems-picos-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-operatingsystems-picos-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-operatingsystems-picos-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **PICOS SNMP**
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
dnf install centreon-plugin-Operatingsystems-Picos-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Operatingsystems-Picos-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-operatingsystems-picos-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **PICOS**.
* Appliquez le modèle d'hôte **OS-PICOS-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_picos_snmp.pl \
    --plugin=os::picos::snmp::plugin \
    --mode=memory \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-usage='' \
    --critical-usage='' \
    --warning-usage-free='' \
    --critical-usage-free='' \
    --warning-usage-prct='' \
    --critical-usage-prct='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Memory total: 1011.41 MB used: 444.87 MB (43.98%) free: 566.54 MB (56.02%) | 'memory.usage.bytes'=466477056B;;;0;1060540416 'memory.free.bytes'=594063360B;;;0;1060540416 'memory.usage.percentage'=43.98%;;;0;100 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_picos_snmp.pl \
    --plugin=os::picos::snmp::plugin \
    --mode=memory \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_picos_snmp.pl \
    --plugin=os::picos::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.