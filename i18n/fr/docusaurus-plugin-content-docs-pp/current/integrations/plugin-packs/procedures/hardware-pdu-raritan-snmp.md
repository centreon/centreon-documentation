---
id: hardware-pdu-raritan-snmp
title: Raritan PDU SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **Raritan PDU** apporte un modèle d'hôte :

* HW-Pdu-Raritan-SNMP-custom

Il apporte les modèles de service suivants :

| Alias            | Modèle de service                    | Description                    | Défaut |
|:-----------------|:-------------------------------------|:-------------------------------|:-------|
| External-Sensors | HW-Pdu-Raritan-External-Sensors-SNMP | Contrôle les sondes externes   | X      |
| Inlet-Sensors    | HW-Pdu-Raritan-InletSensors-SNMP     | Contrôle les sondes en entrées | X      |
| Ocprt-Sensors    | HW-Pdu-Raritan-Ocprt-Sensors-SNMP    | Contrôle les sondes OCPRT      | X      |
| Outlet-Sensors   | HW-Pdu-Raritan-OutletSensors-SNMP    | Contrôle les sorties           | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="External-Sensors" label="External-Sensors">

| Métrique                                                             | Unité |
|:---------------------------------------------------------------------|:------|
| *pdu_name~sensor_label*#hardware.sensor.external.humidity.percentage | %     |
| *pdu_name~sensor_label*#hardware.sensor.external.temperature.celsius | C     |

</TabItem>
<TabItem value="Inlet-Sensors" label="Inlet-Sensors">

| Metric Name                                                         | Unit  |
|:--------------------------------------------------------------------|:------|
| *pdu_name~sensor_label*#hardware.sensor.inlet.activeenergy.watthour |       |
| *pdu_name~sensor_label*#hardware.sensor.inlet.activepower.watt      | W     |
| *pdu_name~sensor_label*#hardware.sensor.inlet.apparentpower.voltamp | C     |
| *pdu_name~sensor_label*#hardware.sensor.inlet.frequency.hertz       | Hz    |
| *pdu_name~sensor_label*#hardware.sensor.inlet.powerfactor           |       |
| *pdu_name~sensor_label*#hardware.sensor.inlet.rmscurrent.ampere     | A     |
| *pdu_name~sensor_label*#hardware.sensor.inlet.rmsvoltage.volt       | V     |

</TabItem>
<TabItem value="Ocprt-Sensors" label="Ocprt-Sensors">

| Metric Name                                                          | Unit  |
|:---------------------------------------------------------------------|:------|
| *pdu_name~sensor_label*#hardware.sensor.ocprot.rmscurrent.ampere | A     |

</TabItem>
<TabItem value="Outlet-Sensors" label="Outlet-Sensors">

| Metric Name               | Unit  |
|:--------------------------|:------|
| outlet onOff sensor state |       |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Raritan PDU** en SNMP,  il est nécessaire de configurer l'agent sur l'équipement.

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
dnf install centreon-pack-hardware-pdu-raritan-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-pdu-raritan-snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-pack-hardware-pdu-raritan-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Raritan PDU**
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
dnf install centreon-plugin-Hardware-Pdu-Raritan-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Pdu-Raritan-Snmp
```

</TabItem>
<TabItem value="Debian 11" label="Debian 11">

```bash
apt install centreon-plugin-hardware-pdu-raritan-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Raritan PDU**.
* Appliquez le modèle d'hôte **HW-Pdu-Raritan-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_pdu_raritan_snmp.pl \
    --plugin=hardware::pdu::raritan::snmp::plugin \
    --mode=external-sensors \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --component='.*' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All 2 components are ok [1/1 humidity, 1/1 temperature]. | 'IRG1.PDU1.A1~Relative Humidity 1#hardware.sensor.external.humidity.percentage'=40%;15:85;10:90;; 'IRG1.PDU1.A1~Temperature 1#hardware.sensor.external.temperature.celsius'=21.4C;15:30;10:35;; 'hardware.humidity.count'=1;;;; 'hardware.temperature.count'=1;;;;
Checking humidity
'Relative Humidity 1' humidity state is 'normal' [instance: Relative Humidity 1, value: 40, unit: %, label: Relative Humidity 1, pdu: IRG1.PDU1.A1]
Checking temperature
'Temperature 1' temperature state is 'normal' [instance: Temperature 1, value: 21.4, unit: C, label: Temperature 1, pdu: IRG1.PDU1.A1]
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_pdu_raritan_snmp.pl \
    --plugin=hardware::pdu::raritan::snmp::plugin \
    --mode=external-sensors \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_pdu_raritan_snmp.pl \
    --plugin=hardware::pdu::raritan::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
