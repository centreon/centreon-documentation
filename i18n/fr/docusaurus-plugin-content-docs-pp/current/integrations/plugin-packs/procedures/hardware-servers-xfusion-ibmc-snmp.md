---
id: hardware-servers-xfusion-ibmc-snmp
title: xFusion iBMC SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **xFusion iBMC SNMP** apporte un modèle d'hôte :

* HW-Server-Xfusion-Ibmc-SNMP-custom

Il apporte le modèle de service suivant :

| Alias    | Modèle de service                    | Description                    | Défaut |
|:---------|:-------------------------------------|:-------------------------------|:-------|
| Hardware | HW-Server-Xfusion-Ibmc-Hardware-SNMP | Contrôle l'état des composants | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Métrique                                              | Unité |
|:------------------------------------------------------|:------|
| component status                                      |       |
| cpu status                                            |       |
| fan status                                            |       |
| *fan_name*#hardware.fan.speed.rpm                     | rpm   |
| hard disk status                                      |       |
| *harddisk_name*#hardware.harddisk.temperature.celsius | C     |
| logical drive status                                  |       |
| memory status                                         |       |
| pcie status                                           |       |
| power supply status                                   |       |
| *powersupply_name*#hardware.powersupply.power.watt    | W     |
| raid controller status                                |       |
| temperature status                                    |       |
| *temperature_object*#hardware.temperature.celsius     | C     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **xFusion iBMC** en SNMP,  il est nécessaire de configurer l'agent sur le serveur.

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
dnf install centreon-pack-hardware-servers-xfusion-ibmc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-servers-xfusion-ibmc-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-servers-xfusion-ibmc-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **xFusion iBMC SNMP**
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
dnf install centreon-plugin-Hardware-Servers-Xfusion-Ibmc-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Servers-Xfusion-Ibmc-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-servers-xfusion-ibmc-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **xFusion iBMC**.
* Appliquez le modèle d'hôte **HW-Server-Xfusion-Ibmc-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_xfusion_ibmc_snmp.pl \
    --plugin=hardware::server::xfusion::ibmc::snmp::plugin \
    --mode=hardware \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --component='' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All 44 components are ok [9/9 components, 2/2 cpu, 14/14 fans, 2/2 hard disks, 1/1 logical drives, 8/8 memorys, 2/2 pcie, 2/2 power supplies, 1/1 raidcontrollers, 3/3 temperatures]. | 'Disk0#hardware.harddisk.temperature.celsius'=34C;;;0; 'Disk1#hardware.harddisk.temperature.celsius'=34C;;;0; 'Fan1 Front#hardware.fan.speed.rpm'=9060rpm;;;0; 'Fan1 Rear#hardware.fan.speed.rpm'=8520rpm;;;0; 'Fan2 Front#hardware.fan.speed.rpm'=9180rpm;;;0; 'Fan2 Rear#hardware.fan.speed.rpm'=8400rpm;;;0; 'Fan3 Front#hardware.fan.speed.rpm'=9240rpm;;;0; 'Fan3 Rear#hardware.fan.speed.rpm'=8460rpm;;;0; 'Fan4 Front#hardware.fan.speed.rpm'=9120rpm;;;0; 'Fan4 Rear#hardware.fan.speed.rpm'=8340rpm;;;0; 'Fan5 Front#hardware.fan.speed.rpm'=9120rpm;;;0; 'Fan5 Rear#hardware.fan.speed.rpm'=8460rpm;;;0; 'Fan6 Front#hardware.fan.speed.rpm'=9120rpm;;;0; 'Fan6 Rear#hardware.fan.speed.rpm'=8520rpm;;;0; 'Fan7 Front#hardware.fan.speed.rpm'=9240rpm;;;0; 'Fan7 Rear#hardware.fan.speed.rpm'=8460rpm;;;0; 'PSU1#hardware.powersupply.power.watt'=128W;;;0;900 'PSU2#hardware.powersupply.power.watt'=112W;;;0;900 'Inlet#hardware.temperature.celsius'=25C;;;; 'CPU1#hardware.temperature.celsius'=37C;;;; 'CPU2#hardware.temperature.celsius'=41C;;;; 'hardware.component.count'=9;;;; 'hardware.cpu.count'=2;;;; 'hardware.fan.count'=14;;;; 'hardware.harddisk.count'=2;;;; 'hardware.logicaldrive.count'=1;;;; 'hardware.memory.count'=8;;;; 'hardware.pcie.count'=2;;;; 'hardware.psu.count'=2;;;; 'hardware.raidcontroller.count'=1;;;; 'hardware.temperature.count'=3;;;;
Checking component
component 'SC332' of type 'unknown' status is 'ok' [instance: 5.83.67.51.51.50]
component 'SC382' of type 'unknown' status is 'ok' [instance: 5.83.67.51.56.50]
component 'SP331' of type 'unknown' status is 'ok' [instance: 5.83.80.51.51.49]
component 'SP382' of type 'unknown' status is 'ok' [instance: 5.83.80.51.56.50]
component 'BC11HBBD' of type 'hddBackPlane' status is 'ok' [instance: 8.66.67.49.49.72.66.66.68]
component 'BC82PRUU' of type 'unknown' status is 'ok' [instance: 8.66.67.56.50.80.82.85.85]
component 'BC82PRUV' of type 'unknown' status is 'ok' [instance: 8.66.67.56.50.80.82.85.86]
component 'Mainboard' of type 'baseBoard' status is 'ok' [instance: 9.77.97.105.110.98.111.97.114.100]
component 'Public Module' of type 'raidCard' status is 'ok' [instance: 13.80.117.98.108.105.99.32.77.111.100.117.108.101]
Checking CPU
cpu 'CPU1' status is 'ok' [instance: 1]
cpu 'CPU2' status is 'ok' [instance: 2]
Checking hard disks
hard disk 'Disk0' status is 'ok' [instance: 1]
hard disk 'Disk1' status is 'ok' [instance: 2]
Checking fans
fan 'Fan1 Front' status is 'ok' [instance: 1]
fan 'Fan1 Rear' status is 'ok' [instance: 2]
fan 'Fan2 Front' status is 'ok' [instance: 3]
fan 'Fan2 Rear' status is 'ok' [instance: 4]
fan 'Fan3 Front' status is 'ok' [instance: 5]
fan 'Fan3 Rear' status is 'ok' [instance: 6]
fan 'Fan4 Front' status is 'ok' [instance: 7]
fan 'Fan4 Rear' status is 'ok' [instance: 8]
fan 'Fan5 Front' status is 'ok' [instance: 9]
fan 'Fan5 Rear' status is 'ok' [instance: 10]
fan 'Fan6 Front' status is 'ok' [instance: 11]
fan 'Fan6 Rear' status is 'ok' [instance: 12]
fan 'Fan7 Front' status is 'ok' [instance: 13]
fan 'Fan7 Rear' status is 'ok' [instance: 14]
Checking logical drives
logical drive '1.1' status is 'optimal' [instance: 1.1]
Checking memory
memory 'DIMM000' status is 'ok' [instance: 1]
memory 'DIMM020' status is 'ok' [instance: 5]
memory 'DIMM040' status is 'ok' [instance: 9]
memory 'DIMM060' status is 'ok' [instance: 13]
memory 'DIMM100' status is 'ok' [instance: 17]
memory 'DIMM120' status is 'ok' [instance: 21]
memory 'DIMM140' status is 'ok' [instance: 25]
memory 'DIMM160' status is 'ok' [instance: 29]
Checking PCIe
PCIe 'PCIe Card 1 (SP331)' status is 'ok' [instance: 1]
PCIe 'PCIe Card 2 (SP382)' status is 'ok' [instance: 2]
Checking power supplies
power supply 'PSU1' status is 'ok' [instance: 1]
power supply 'PSU2' status is 'ok' [instance: 2]
Checking raid controllers
raid controller 'RAID Card1' status is 'ok' [instance: 1]
Checking temperatures
temperature of 'Inlet' is '25' celsius degrees [instance: 1]
temperature of 'CPU1' is '37' celsius degrees [instance: 2]
temperature of 'CPU2' is '41' celsius degrees [instance: 3]
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_xfusion_ibmc_snmp.pl \
    --plugin=hardware::server::xfusion::ibmc::snmp::plugin \
    --mode=hardware \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_xfusion_ibmc_snmp.pl \
    --plugin=hardware::server::xfusion::ibmc::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
