---
id: hardware-sensors-apc-snmp
title: APC Sensor SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **APC Sensor SNMP** apporte un modèle d'hôte :

* HW-Sensor-Apc-SNMP-custom

Il apporte le modèle de service suivant :

| Alias   | Modèle de service           | Description                                    | Défaut |
|:--------|:----------------------------|:-----------------------------------------------|:-------|
| Sensors | HW-Sensors-Apc-Sensors-SNMP | Contrôle l'ensemble des sondes de l'équipement | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Sensors" label="Sensors">

| Métrique                                                     | Unité |
|:-------------------------------------------------------------|:------|
| module sensor fluid status                                   |       |
| module sensor humidity status                                |       |
| *module_name~sensor_num*#hardware.sensor.humidity.percentage | %     |
| wireless sensor humidity status                              |       |
| *sensor_num*#hardware.sensor.humidity.percentage             | %     |
| module sensor temperature status                             |       |
| *module_name~sensor_num*#hardware.sensor.temperature.celsius | %     |
| wireless sensor temperature status                           |       |
| *sensor_num*#hardware.sensor.temperature.celsius             | %     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **APC Sensor** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle.

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
dnf install centreon-pack-hardware-sensors-apc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-sensors-apc-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-sensors-apc-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **APC Sensor SNMP**
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
dnf install centreon-plugin-Hardware-Sensors-Apc-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Sensors-Apc-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-sensors-apc-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **APC Sensor**.
* Appliquez le modèle d'hôte **HW-Sensor-Apc-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_sensors_apc_snmp.pl \
    --plugin=hardware::sensors::apc::snmp::plugin \
    --mode=sensors \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All 6 components are ok [2/2 humidity, 4/4 temperatures]. | 'Baguley_Netbotz:Sensor NB:1#hardware.sensor.temperature.celsius'=19C;;;; 'BG_RH_SIDE#hardware.sensor.temperature.celsius'=20C;18:28;16:28;; 'BG_LH_Side#hardware.sensor.temperature.celsius'=19.6C;18:28;16:28;; 'Baguley_Netbotz:Sensor NB:1#hardware.sensor.humidity.percentage'=48%;;;0;100 'hardware.humidity.count'=2;;;; 'hardware.temperature.count'=4;;;;
Checking temperatures
temperature 'Baguley_Netbotz:Sensor NB:1' alarm status is normal [instance: module.0.1] [value: 19] [comm: ok]
temperature 'BG_RH_SIDE' is 20 C [instance: wireless.1] [comm: active]
temperature 'BG_LH_Side' is 19.6 C [instance: wireless.2] [comm: active]
Checking humidities
humidity 'Baguley_Netbotz:Sensor NB:1' alarm status is normal [instance: module.0.1] [value: 48] [comm: ok]
humidity 'BG_RH_SIDE' is -1 % [instance: wireless.1] [comm: active]
humidity 'BG_LH_Side' is -1 % [instance: wireless.2] [comm: active]
Checking fluids
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_sensors_apc_snmp.pl \
    --plugin=hardware::sensors::apc::snmp::plugin \
    --mode=sensors \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_sensors_apc_snmp.pl \
    --plugin=hardware::sensors::apc::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
