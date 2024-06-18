---
id: hardware-servers-lenovo-xcc-snmp
title: Lenovo XCC SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Vue d'ensemble

Lenovo développe, fabrique et vend du matériel et des logiciels informatiques.

## Contenu du Pack

### Modèles

Le connecteur de supervision Centreon **Lenovo XCC SNMP** apporte un modèle d'hôte :

* HW-Server-Lenovo-Xcc-SNMP-custom

Il apporte le modèle de service suivant :

| Alias           | Modèle de service                  | Description                    | Défaut |
|:----------------|:-----------------------------------|:-------------------------------|:-------|
| Hardware        | HW-Lenovo-Xcc-Hardware-Global-SNMP | Contrôle l'ensemble des sondes | X      |

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Hardware" label="Hardware">

| Metric name                   | Description                          | Unit |
|:------------------------------|:-------------------------------------|:-----|
| temperature.status            | Status of temperature                |      |
| voltage.status                | Status of voltage                    |      |
| fan.status                    | Status of fan                        |      |
| psu.status                    | Status of psu                        |      |
| disk.status                   | Status of disk                       |      |
| raidvolume.status             | Status of raidvolume                 |      |
| hardware.temperature.celsius  | Temperature of the different sensors | C    |
| hardware.voltage.volt         | Voltage of the different sensors     |      |
| hardware.fan.speed.percentage | Speed of fan                         | %    |


</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **Lenovo XCC SNMP** en SNMP,  il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* [Lenovo XCC SNMP](https://sysmgt.lenovofiles.com/help/index.jsp?topic=%2Fcom.lenovo.systems.management.xcc.doc%2FNN1ia_c_configuringSNMP.html)

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installation

### Pack de supervision

Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le pack dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.

Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-servers-lenovo-xcc-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-servers-lenovo-xcc-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-servers-lenovo-xcc-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **Lenovo XCC SNMP**
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
dnf install centreon-plugin-Hardware-Servers-Lenovo-Xcc-Snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Servers-Lenovo-Xcc-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-servers-lenovo-xcc-snmp
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **Lenovo XCC SNMP**.
* Appliquez le modèle d'hôte **HW-Server-Lenovo-Xcc-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_lenovo_xcc_snmp.pl \
    --plugin=hardware::server::lenovo::xcc::snmp::plugin \
    --mode=hardware \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --component='.*' \
    --verbose \
    --use-new-perfdata
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All 34 components are ok [2/2 disk, 14/14 fans, 2/2 psu, 1/1 raidvolume, 11/11 temperatures, 4/4 voltages]. | 'temp_CPU1 Temp'=30C;;;; 'temp_CPU1 DTS'=-51.0C;;0:-0.2;; 'temp_CPU2 Temp'=31C;;;; 'temp_CPU2 DTS'=-51.0C;;0:-0.2;; 'temp_DIMM 5 Temp'=27C;;;; 'temp_DIMM 8 Temp'=27C;;;; 'temp_DIMM 17 Temp'=27C;;;; 'temp_DIMM 20 Temp'=27C;;;; 'temp_PCH Temp'=43C;;;; 'temp_Ambient Temp'=27C;0:43;0:47;; 'temp_Exhaust Temp'=27C;;;; 'volt_CMOS Battery'=3.1850;2.3920:;2.2490:;; 'volt_SysBrd 3.3V'=3.3015;;2.9760:3.6270;; 'volt_SysBrd 5V'=5.0310;;4.4928:5.4990;; 'volt_SysBrd 12V'=12.096;;10.808:13.216;; 'fan_Fan 1A Tach'=41%;;;0;100 'fan_Fan 1B Tach'=33%;;;0;100 'fan_Fan 2A Tach'=33%;;;0;100 'fan_Fan 2B Tach'=33%;;;0;100 'fan_Fan 3A Tach'=33%;;;0;100 'fan_Fan 3B Tach'=33%;;;0;100 'fan_Fan 4A Tach'=33%;;;0;100 'fan_Fan 4B Tach'=33%;;;0;100 'fan_Fan 5A Tach'=33%;;;0;100 'fan_Fan 5B Tach'=33%;;;0;100 'fan_Fan 6A Tach'=33%;;;0;100 'fan_Fan 6B Tach'=33%;;;0;100 'fan_Fan 7A Tach'=33%;;;0;100 'fan_Fan 7B Tach'=33%;;;0;100 'count_disk'=2;;;; 'count_fan'=14;;;; 'count_psu'=2;;;; 'count_raidvolume'=1;;;; 'count_temperature'=11;;;; 'count_voltage'=4;;;;
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_lenovo_xcc_snmp.pl \
    --plugin=hardware::server::lenovo::xcc::snmp::plugin \
    --mode=hardware \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_lenovo_xcc_snmp.pl \
    --plugin=hardware::server::lenovo::xcc::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.