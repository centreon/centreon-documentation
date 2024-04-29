---
id: hardware-ups-himoinsa-snmp
title: Himoinsa SNMP
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Himoinsa UPS** apporte un modèle d'hôte :

* HW-UPS-Himoinsa-SNMP-custom

Il apporte les modèles de service suivants :

| Alias      | Modèle de service               | Description                                 | Défaut |
| :--------- | :------------------------------ | :------------------------------------------ | :----- |
| Frequency  | HW-UPS-Himoinsa-Frequency-SNMP  | Contrôle la fréquence                       | X      |
| Fuel-Level | HW-UPS-Himoinsa-Fuel-Level-SNMP | Contrôle le niveau de fuel                  | X      |
| Phase      | HW-UPS-Himoinsa-Phase-SNMP      | Contrôle phase 1, phase 2 et phase 3        | X      |
| Status     | HW-UPS-Himoinsa-Status-SNMP     | Contrôle le statut de l'équipement Himoinsa | X      |
| Voltage    | HW-UPS-Himoinsa-Voltage-SNMP    | Contrôle le voltage                         | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Frequency" label="Frequency">

| Métrique                       | Unité |
| :----------------------------- | :---- |
| *index*#genset.frequency.hertz | Hz    |
| *index*#mains.frequency.hertz  | Hz    |

</TabItem>
<TabItem value="Fuel-Level" label="Fuel-Level">

| Métrique              | Unité |
| :-------------------- | :---- |
| fuel.level.percentage | %     |

</TabItem>
<TabItem value="Phase" label="Phase">

| Métrique                      | Unité |
| :---------------------------- | :---- |
| *index*#phase1.current.ampere | A     |
| *index*#phase2.current.ampere | A     |
| *index*#phase3.current.ampere | A     |

</TabItem>
<TabItem value="Status" label="Status">

| Métrique              | Unité |
| :-------------------- | :---- |
| alarm                 |       |
| closed-commutator     |       |
| motor                 |       |
| mode                  |       |
| transfer-pump         |       |

</TabItem>
<TabItem value="Voltage" label="Voltage">

| Métrique                        | Unité |
| :------------------------------ | :---- |
| *index*#gen.vl12.voltage.volt   | V     |
| *index*#gen.vl13.voltage.volt   | V     |
| *index*#gen.vl1n.voltage.volt   | V     |
| *index*#gen.vl23.voltage.volt   | V     |
| *index*#gen.vl2n.voltage.volt   | V     |
| *index*#gen.vl3n.voltage.volt   | V     |
| *index*#mains.vl12.voltage.volt | V     |
| *index*#mains.vl13.voltage.volt | V     |
| *index*#mains.vl1n.voltage.volt | V     |
| *index*#mains.vl23.voltage.volt | V     |
| *index*#mains.vl2n.voltage.volt | V     |
| *index*#mains.vl3n.voltage.volt | V     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Himoinsa** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle.

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
dnf install centreon-pack-hardware-ups-himoinsa-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-ups-himoinsa-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-ups-himoinsa-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Himoinsa UPS**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

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
dnf install centreon-plugin-Hardware-Ups-Himoinsa-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Ups-Himoinsa-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-ups-himoinsa-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre équipement **Himoinsa**.
* Appliquez le modèle d'hôte **HW-UPS-Himoinsa-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro SNMPEXTRAOPTIONS.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Obligatoire | Macro            | Description                                  |
| :---------- | :--------------- | :------------------------------------------- |
|             | SNMPEXTRAOPTIONS | Configurer vos paramètres de sécurité SNMPv3 |

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`) :

```bash
/usr/lib/centreon/plugins//centreon_ups_himoinsa_snmp.pl \
    --plugin=hardware::ups::himoinsa::snmp::plugin \
    --mode=fuel-level \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --warning-fuel-level='' \
    --critical-fuel-level='' \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Fuel level: 9% | 'fuel.level.percentage'=9%;;;0;100 
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ups_himoinsa_snmp.pl \
    --plugin=hardware::ups::himoinsa::snmp::plugin \
    --mode=fuel-level \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_ups_himoinsa_snmp.pl \
    --plugin=hardware::ups::himoinsa::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
