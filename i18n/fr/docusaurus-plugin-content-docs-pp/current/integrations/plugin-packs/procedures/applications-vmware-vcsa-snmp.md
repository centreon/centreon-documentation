---
id: applications-vmware-vcsa-snmp
title: VMware VCSA SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du Pack

### Modèles

Le Pack Centreon **VMware VCSA SNMP** apporte un modèle d'hôte :

* App-Vmware-Vcsa-SNMP-custom

Il apporte les modèles de service suivants :

| Alias      | Modèle de service               | Description                                       | Défaut | Découverte |
|:-----------|:--------------------------------|:--------------------------------------------------|:-------|:-----------|
| Cpu        | App-Vmware-Vcsa-Cpu-SNMP        | Contrôle du taux d'utilisation CPU                | X      |            |
| Interfaces | App-Vmware-Vcsa-Interfaces-SNMP | Contrôle les interfaces                           |        | X          |
| Memory     | App-Vmware-Vcsa-Memory-SNMP     | Contrôle du taux d'utilisation de la mémoire vive | X      |            |
| Storage    | App-Vmware-Vcsa-Storage-SNMP    | Contrôle l'utilisation des disques                |        | X          |
| Uptime     | App-Vmware-Vcsa-Uptime-SNMP     | Contrôle l'uptime                                 | X      |            |

### Règles de découverte

<Tabs groupId="sync">
<TabItem value="Service" label="Service">

| Nom de la règle                     | Description                                                             |
|:------------------------------------|:------------------------------------------------------------------------|
| App-Vmware-Vcsa-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |
| App-Vmware-Vcsa-SNMP-Storage-Name   | Découvre les disques et supervise l'utilisation                         |

Rendez-vous sur la [documentation dédiée](/onprem/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/onprem/monitoring/discovery/services-discovery#règles-de-découverte).

</TabItem>
</Tabs>

### Métriques & statuts collectés

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Metric Name                               | Unit  |
|:------------------------------------------|:------|
| cpu.utilization.percentage                | %     |
| *cpu_num*#core.cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Metric name                                               | Unit |
|:--------------------------------------------------------- |:---- |
| status                                                    |      |
| *interface_name*#interface.traffic.in.bitspersecond       | b/s  |
| *interface_name*#interface.traffic.out.bitspersecond      | b/s  |
| *interface_name*#interface.packets.in.error.percentage    | %    |
| *interface_name*#interface.packets.in.discard.percentage  | %    |
| *interface_name*#interface.packets.out.error.percentage   | %    |
| *interface_name*#interface.packets.out.discard.percentage | %    |

</TabItem>
<TabItem value="Memory" label="Memory">

| Metric Name             | Unit  |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |

</TabItem>
<TabItem value="Storage" label="Storage">

| Metric name                                | Unit  |
| :----------------------------------------- |:----- |
| storage.partitions.count                   |       |
| *partition_name*#storage.space.usage.bytes | B     |
| *partition_name*#storage.access.count      |       |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Metric Name           | Unit  |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre **VMware VCSA** en SNMP, il est nécessaire de configurer l'agent sur le serveur comme indiqué sur la documentation officielle :
* https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vcsa.doc/GUID-3695CE84-C6DF-497E-BA4E-2B341CC366C5.html

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
<TabItem value="RHEL, Oracle Linux, Alma Linux 8" label="RHEL, Oracle Linux, Alma Linux 8">

```bash
dnf install centreon-pack-applications-vmware-vcsa-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-applications-vmware-vcsa-snmp
```

</TabItem>
<TabItem value="RHEL/CentOS 7" label="RHEL/CentOS 7">

```bash
yum install centreon-pack-applications-vmware-vcsa-snmp
```

</TabItem>
</Tabs>

Quel que soit le type de la licence (*online* ou *offline*), installez le Pack **VMware VCSA SNMP**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un pack. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/onprem/monitoring/pluginpacks#installer-le-plugin)

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="RHEL, Oracle Linux, Alma Linux 8" label="RHEL, Oracle Linux, Alma Linux 8">

```bash
dnf install centreon-plugin-Applications-Vmware-Vcsa-SNMP
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-applications-vmware-vcsa-snmp
```

</TabItem>
<TabItem value="RHEL/CentOS 7" label="RHEL/CentOS 7">

```bash
yum install centreon-plugin-Applications-Vmware-Vcsa-SNMP
```

</TabItem>
</Tabs>

## Configuration

### Hôte

* Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
* Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre serveur **VMware VCSA**.
* Appliquez le modèle d'hôte **App-Vmware-Vcsa-SNMP-custom**.

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
/usr/lib/centreon/plugins//centreon_vmware_vcsa_snmp.pl \
    --plugin=apps::vmware::vcsa::snmp::plugin \
    --mode=cpu \
    --hostname='10.0.0.1' \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: 4 CPU(s) average usage is 11.75 % | 'cpu.utilization.percentage'=11.75%;;;0;100 '0#core.cpu.utilization.percentage'=10.00%;;;0;100 '1#core.cpu.utilization.percentage'=11.00%;;;0;100 '2#core.cpu.utilization.percentage'=10.00%;;;0;100 '3#core.cpu.utilization.percentage'=16.00%;;;0;100
CPU '0' usage : 10.00 %
CPU '1' usage : 11.00 %
CPU '2' usage : 10.00 %
CPU '3' usage : 16.00 %
```

La liste de toutes les options complémentaires et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_vmware_vcsa_snmp.pl \
    --plugin=apps::vmware::vcsa::snmp::plugin \
    --mode=cpu \
    --help
```

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_vmware_vcsa_snmp.pl \
    --plugin=apps::vmware::vcsa::snmp::plugin \
    --list-mode
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.
