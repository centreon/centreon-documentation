---
id: hardware-storage-hitachi-hnas-snmp
title: Hitachi NAS SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Hitachi NAS** apporte un modèle d'hôte :

* **HW-Storage-Hitachi-Hnas-SNMP**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-Hitachi-Hnas-SNMP" label="HW-Storage-Hitachi-Hnas-SNMP">

| Alias               | Modèle de service                                | Description                       |
|:--------------------|:-------------------------------------------------|:----------------------------------|
| Hardware-Global     | HW-Storage-Hitachi-Hnas-Hardware-Global-SNMP     | Contrôle l'ensemble du matériel   |
| Volume-Usage-Global | HW-Storage-Hitachi-Hnas-Volume-Usage-Global-SNMP | Contrôle l'utilisation des volume |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-Hitachi-Hnas-SNMP** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                  | Modèle de service                                   | Description                                              | Découverte |
|:-----------------------|:----------------------------------------------------|:---------------------------------------------------------|:-----------|
| Cluster-Status         | HW-Storage-Hitachi-Hnas-Cluster-Status-SNMP         | Contrôle l'état des noeuds du cluster                    |            |
| Interfaces             | HW-Storage-Hitachi-Hnas-Interfaces-SNMP             | Contrôle les interfaces                                  | X          |
| Virtual-Volumes-Quotas | HW-Storage-Hitachi-Hnas-Virtual-Volumes-Quotas-SNMP | Contrôle l'utilisation des quotas des volumes virtuelles |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                             | Description                                                             |
|:--------------------------------------------|:------------------------------------------------------------------------|
| HW-Storage-Hitachi-Hnas-SNMP-Interface-Name | Découvre les interfaces réseaux et supervise le statut et l'utilisation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Métrique    | Unité |
|:------------|:------|
| node#status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| battery status                                    |       |
| fan status                                        |       |
| *node_name~fan_id*#hardware.fan.speed.rpm         | rpm   |
| power supply status                               |       |
| system drive status                               |       |
| temperature status                                |       |
| *node_name~probe_id*#hardware.temperature.celsius | C     |

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
<TabItem value="Virtual-Volumes-Quotas" label="Virtual-Volumes-Quotas">

| Métrique                                                                    | Unité |
|:----------------------------------------------------------------------------|:------|
| virtual_volumes.quotas.detected.count                                       |       |
| *volume_name~filesystem_label~target*#virtual_volume.quota.usage.bytes      | B     |
| *volume_name~filesystem_label~target*#virtual_volume.quota.free.bytes       | B     |
| *volume_name~filesystem_label~target*#virtual_volume.quota.usage.percentage | %     |
| *volume_name~filesystem_label~target*#virtual_volume.quota.files.count      |       |
| *volume_name~filesystem_label~target*#virtual_volume.quota.files.free.count |       |
| *volume_name~filesystem_label~target*#virtual_volume.quota.files.percentage | %     |

</TabItem>
<TabItem value="Volume-Usage-Global" label="Volume-Usage-Global">

| Métrique                               | Unité |
|:---------------------------------------|:------|
| volume status                          |       |
| *volume_name*#volume.space.usage.bytes | B     |

</TabItem>
</Tabs>

## Prérequis

### Configuration SNMP

Afin de superviser votre ressource en SNMP,  il est nécessaire de configurer l'agent 
sur le serveur comme indiqué sur la documentation officielle de Hitachi.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers le serveur supervisé.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquets
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-hitachi-hnas-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-hitachi-hnas-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-hitachi-hnas-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-hitachi-hnas-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Hitachi NAS**
depuis l'interface web et le menu **Configuration > Gestionnaire de connecteurs de supervision**.

### Plugin

À partir de Centreon 22.04, il est possible de demander le déploiement automatique
du plugin lors de l'utilisation d'un connecteur. Si cette fonctionnalité est activée, et
que vous ne souhaitez pas découvrir des éléments pour la première fois, alors cette
étape n'est pas requise.

> Plus d'informations dans la section [Installer le plugin](/docs/monitoring/pluginpacks/#installer-le-plugin).

Utilisez les commandes ci-dessous en fonction du gestionnaire de paquets de votre système d'exploitation :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-plugin-Hardware-Storage-Hitachi-Hnas-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Hitachi-Hnas-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-hitachi-hnas-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Hitachi-Hnas-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-Hitachi-Hnas-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                               | Valeur par défaut | Obligatoire |
|:-----------------|:----------------------------------------------------------|:------------------|:------------|
| SNMPEXTRAOPTIONS | Tous les options sont listées [ici](#options-disponibles) |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparait dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Macro          | Description                                                                                                                      | Valeur par défaut      | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:------------|
| UNKNOWNSTATUS  | Set unknown threshold for status (Default: '%{state} =~ /unknown/'). You can use the following variables: %\{state\}, %\{display\}   | %\{state\} =~ /unknown/  |             |
| FILTERNAME     | Filter node name (can be a regexp)                                                                                               |                        |             |
| CRITICALSTATUS | Set critical threshold for status (Default: '%{state} =~ /offline/i'). You can use the following variables: %\{state\}, %\{display\} | %\{state\} =~ /offline/i |             |
| WARNINGSTATUS  | Set warning threshold for status (Default: -). You can use the following variables: %\{state\}, %\{display\}                         |                        |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                              | --verbose              |             |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Macro        | Description                                                                                          | Valeur par défaut | Obligatoire |
|:-------------|:-----------------------------------------------------------------------------------------------------|:------------------|:------------|
| COMPONENT    | Which component to check (Default: '.*'). Can be: 'temperature', 'fan', 'psu', 'sysdrive', 'battery' |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)  | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro              | Description                                                                                                                                                                              | Valeur par défaut                                    | Obligatoire |
|:-------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------|:------------|
| OIDFILTER          | Choose OID used to filter interface (default: ifDesc) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                          | ifdesc                                               |             |
| OIDDISPLAY         | Choose OID used to display interface (default: ifDesc) (values: ifDesc, ifAlias, ifName, IpAddr)                                                                                         | ifdesc                                               |             |
| INTERFACENAME      | Set the interface (number expected) ex: 1,2,... (empty means 'check all interfaces')                                                                                                      |                                                      |             |
| WARNINGINDISCARD   | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALINDISCARD  | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGINERROR     | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALINERROR    | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGINTRAFFIC   | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALINTRAFFIC  | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGOUTDISCARD  | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALOUTDISCARD | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGOUTERROR    | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALOUTERROR   | Thresholds                                                                                                                                                                               |                                                      |             |
| WARNINGOUTTRAFFIC  | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALOUTTRAFFIC | Thresholds                                                                                                                                                                               |                                                      |             |
| CRITICALSTATUS     | Set critical threshold for status (Default: '%{admstatus} eq "up" and %\{opstatus\} ne "up"'). You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\} | %\{admstatus\} eq "up" and %\{opstatus\} !~ /up|dormant/ |             |
| WARNINGSTATUS      | Set warning threshold for status. You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\}                                                            |                                                      |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                                                                      | --verbose                                            |             |

</TabItem>
<TabItem value="Virtual-Volumes-Quotas" label="Virtual-Volumes-Quotas">

| Macro                | Description                                                                                         | Valeur par défaut | Obligatoire |
|:---------------------|:----------------------------------------------------------------------------------------------------|:------------------|:------------|
| FILTERVOLUMENAME     | Filter virtual volumes quota by volume name                                                         |                   |             |
| FILTERTARGET         | Filter virtual volumes quota by target                                                              |                   |             |
| FILTERFILESYSTEMNAME | Filter virtual volume quota by filesystem label                                                     |                   |             |
| WARNINGVVQDETECTED   | Thresholds                                                                                          |                   |             |
| CRITICALVVQDETECTED  | Thresholds                                                                                          |                   |             |
| WARNINGVVQFILES      | Thresholds                                                                                          |                   |             |
| CRITICALVVQFILES     | Thresholds                                                                                          |                   |             |
| WARNINGVVQFILESFREE  | Thresholds                                                                                          |                   |             |
| CRITICALVVQFILESFREE | Thresholds                                                                                          |                   |             |
| WARNINGVVQFILESPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALVVQFILESPRCT | Thresholds                                                                                          |                   |             |
| WARNINGVVQUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALVVQUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGVVQUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALVVQUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGVVQUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALVVQUSAGEPRCT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Volume-Usage-Global" label="Volume-Usage-Global">

| Macro          | Description                                                                                                                             | Valeur par défaut             | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------|:------------------------------|:------------|
| FILTERNAME     | Filter volume name (can be a regexp)                                                                                                    |                               |             |
| CRITICALSTATUS | Set critical threshold for status (Default: -). You can use the following variables: %\{status\}, %\{display\}                              | %\{status\} =~ /needsChecking/i |             |
| WARNINGSTATUS  | Set warning threshold for status (Default: '%{status} =~ /needsChecking/i'). You can use the following variables: %\{status\}, %\{display\} |                               |             |
| WARNINGUSAGE   | Thresholds                                                                                                                              |                               |             |
| CRITICALUSAGE  | Thresholds                                                                                                                              |                               |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Tous les options sont listées [ici](#options-disponibles)                                     | --verbose                     |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparait dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser un serveur en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins//centreon_hitachi_hnas_snmp.pl \
    --plugin=storage::hitachi::hnas::snmp::plugin \
    --mode=hardware \
    --hostname=10.0.0.1 \
    --snmp-version='2c' \
    --snmp-community='my-snmp-community' \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All 118 components are ok [2/2 battery, 8/8 fans, 4/4 psus, 82/82 sysdrives, 22/22 temperatures]. | 'hnas-cluster-1.0#hardware.temperature.celsius'=28C;;;; 'hnas-cluster-1.1#hardware.temperature.celsius'=28C;;;; 'hnas-cluster-1.2#hardware.temperature.celsius'=31C;;;; 'hnas-cluster-1.3#hardware.temperature.celsius'=26C;;;; 'hnas-cluster-1.4#hardware.temperature.celsius'=23C;;;; 'hnas-cluster-1.5#hardware.temperature.celsius'=27C;;;; 'hnas-cluster-1.6#hardware.temperature.celsius'=27C;;;; 'hnas-cluster-1.7#hardware.temperature.celsius'=45C;;;; 'hnas-cluster-1.8#hardware.temperature.celsius'=67C;;;; 'hnas-cluster-1.9#hardware.temperature.celsius'=38C;;;; 'hnas-cluster-1.10#hardware.temperature.celsius'=38C;;;; 'hnas-cluster-2.0#hardware.temperature.celsius'=29C;;;; 'hnas-cluster-2.1#hardware.temperature.celsius'=25C;;;; 'hnas-cluster-2.2#hardware.temperature.celsius'=26C;;;; 'hnas-cluster-2.3#hardware.temperature.celsius'=28C;;;; 'hnas-cluster-2.4#hardware.temperature.celsius'=21C;;;; 'hnas-cluster-2.5#hardware.temperature.celsius'=25C;;;; 'hnas-cluster-2.6#hardware.temperature.celsius'=25C;;;; 'hnas-cluster-2.7#hardware.temperature.celsius'=43C;;;; 'hnas-cluster-2.8#hardware.temperature.celsius'=65C;;;; 'hnas-cluster-2.9#hardware.temperature.celsius'=37C;;;; 'hnas-cluster-2.10#hardware.temperature.celsius'=35C;;;; 'hardware.battery.count'=2;;;; 'hardware.fan.count'=8;;;; 'hardware.psu.count'=4;;;; 'hardware.sysdrive.count'=82;;;; 'hardware.temperature.count'=22;;;;
Checking temperatures
temperature 'hnas-cluster-1.0' status is 'ok' [instance: 1.0] [value: 28]
temperature 'hnas-cluster-1.1' status is 'ok' [instance: 1.1] [value: 28]
temperature 'hnas-cluster-1.2' status is 'ok' [instance: 1.2] [value: 31]
temperature 'hnas-cluster-1.3' status is 'ok' [instance: 1.3] [value: 26]
temperature 'hnas-cluster-1.4' status is 'ok' [instance: 1.4] [value: 23]
temperature 'hnas-cluster-1.5' status is 'ok' [instance: 1.5] [value: 27]
temperature 'hnas-cluster-1.6' status is 'ok' [instance: 1.6] [value: 27]
temperature 'hnas-cluster-1.7' status is 'ok' [instance: 1.7] [value: 45]
temperature 'hnas-cluster-1.8' status is 'ok' [instance: 1.8] [value: 67]
temperature 'hnas-cluster-1.9' status is 'ok' [instance: 1.9] [value: 38]
temperature 'hnas-cluster-1.10' status is 'ok' [instance: 1.10] [value: 38]
temperature 'hnas-cluster-2.0' status is 'ok' [instance: 2.0] [value: 29]
temperature 'hnas-cluster-2.1' status is 'ok' [instance: 2.1] [value: 25]
temperature 'hnas-cluster-2.2' status is 'ok' [instance: 2.2] [value: 26]
temperature 'hnas-cluster-2.3' status is 'ok' [instance: 2.3] [value: 28]
temperature 'hnas-cluster-2.4' status is 'ok' [instance: 2.4] [value: 21]
temperature 'hnas-cluster-2.5' status is 'ok' [instance: 2.5] [value: 25]
temperature 'hnas-cluster-2.6' status is 'ok' [instance: 2.6] [value: 25]
temperature 'hnas-cluster-2.7' status is 'ok' [instance: 2.7] [value: 43]
temperature 'hnas-cluster-2.8' status is 'ok' [instance: 2.8] [value: 65]
temperature 'hnas-cluster-2.9' status is 'ok' [instance: 2.9] [value: 37]
temperature 'hnas-cluster-2.10' status is 'ok' [instance: 2.10] [value: 35]
Checking fans
fan 'hnas-cluster-1.0' status is 'ok' [instance: 1.0] [value: ok]
fan 'hnas-cluster-1.1' status is 'ok' [instance: 1.1] [value: ok]
fan 'hnas-cluster-1.2' status is 'ok' [instance: 1.2] [value: ok]
fan 'hnas-cluster-1.3' status is 'ok' [instance: 1.3] [value: ok]
fan 'hnas-cluster-2.0' status is 'ok' [instance: 2.0] [value: ok]
fan 'hnas-cluster-2.1' status is 'ok' [instance: 2.1] [value: ok]
fan 'hnas-cluster-2.2' status is 'ok' [instance: 2.2] [value: ok]
fan 'hnas-cluster-2.3' status is 'ok' [instance: 2.3] [value: ok]
Checking power supplies
power supply 'hnas-cluster-1.0' status is 'ok' [instance: 1.0].
power supply 'hnas-cluster-1.1' status is 'ok' [instance: 1.1].
power supply 'hnas-cluster-2.0' status is 'ok' [instance: 2.0].
power supply 'hnas-cluster-2.1' status is 'ok' [instance: 2.1].
Checking system drives
system drive '8000000000000000' status is 'online' [instance: 8000000000000000].
system drive '8000000000000001' status is 'online' [instance: 8000000000000001].
system drive '8000000000000002' status is 'online' [instance: 8000000000000002].
system drive '8000000000000003' status is 'online' [instance: 8000000000000003].
system drive '8000000000000004' status is 'online' [instance: 8000000000000004].
system drive '8000000000000005' status is 'online' [instance: 8000000000000005].
system drive '8000000000000006' status is 'online' [instance: 8000000000000006].
system drive '8000000000000007' status is 'online' [instance: 8000000000000007].
system drive '8000000000000008' status is 'online' [instance: 8000000000000008].
system drive '8000000000000009' status is 'online' [instance: 8000000000000009].
system drive '800000000000000A' status is 'online' [instance: 800000000000000A].
system drive '800000000000000B' status is 'online' [instance: 800000000000000B].
system drive '800000000000000C' status is 'online' [instance: 800000000000000C].
system drive '800000000000000D' status is 'online' [instance: 800000000000000D].
system drive '800000000000000E' status is 'online' [instance: 800000000000000E].
system drive '800000000000000F' status is 'online' [instance: 800000000000000F].
system drive '8000000000000010' status is 'online' [instance: 8000000000000010].
system drive '8000000000000011' status is 'online' [instance: 8000000000000011].
system drive '8000000000000012' status is 'online' [instance: 8000000000000012].
system drive '8000000000000013' status is 'online' [instance: 8000000000000013].
system drive '8000000000000014' status is 'online' [instance: 8000000000000014].
system drive '8000000000000015' status is 'online' [instance: 8000000000000015].
system drive '8000000000000016' status is 'online' [instance: 8000000000000016].
system drive '8000000000000017' status is 'online' [instance: 8000000000000017].
system drive '8000000000000018' status is 'online' [instance: 8000000000000018].
system drive '8000000000000019' status is 'online' [instance: 8000000000000019].
system drive '800000000000001A' status is 'online' [instance: 800000000000001A].
system drive '800000000000001B' status is 'online' [instance: 800000000000001B].
system drive '800000000000001C' status is 'online' [instance: 800000000000001C].
system drive '800000000000001D' status is 'online' [instance: 800000000000001D].
system drive '800000000000001E' status is 'online' [instance: 800000000000001E].
system drive '800000000000001F' status is 'online' [instance: 800000000000001F].
system drive '8000000000000020' status is 'online' [instance: 8000000000000020].
system drive '8000000000000021' status is 'online' [instance: 8000000000000021].
system drive '8000000000000022' status is 'online' [instance: 8000000000000022].
system drive '8000000000000023' status is 'online' [instance: 8000000000000023].
system drive '8000000000000024' status is 'online' [instance: 8000000000000024].
system drive '8000000000000025' status is 'online' [instance: 8000000000000025].
system drive '8000000000000026' status is 'online' [instance: 8000000000000026].
system drive '8000000000000027' status is 'online' [instance: 8000000000000027].
system drive '8000000000000028' status is 'online' [instance: 8000000000000028].
system drive '8000000000000029' status is 'online' [instance: 8000000000000029].
system drive '800000000000002A' status is 'online' [instance: 800000000000002A].
system drive '800000000000002B' status is 'online' [instance: 800000000000002B].
system drive '800000000000002C' status is 'online' [instance: 800000000000002C].
system drive '800000000000002D' status is 'online' [instance: 800000000000002D].
system drive '800000000000002E' status is 'online' [instance: 800000000000002E].
system drive '800000000000002F' status is 'online' [instance: 800000000000002F].
system drive '8000000000000030' status is 'online' [instance: 8000000000000030].
system drive '8000000000000031' status is 'online' [instance: 8000000000000031].
system drive '8000000000000032' status is 'online' [instance: 8000000000000032].
system drive '8000000000000033' status is 'online' [instance: 8000000000000033].
system drive '8000000000000034' status is 'online' [instance: 8000000000000034].
system drive '8000000000000035' status is 'online' [instance: 8000000000000035].
system drive '8000000000000036' status is 'online' [instance: 8000000000000036].
system drive '8000000000000037' status is 'online' [instance: 8000000000000037].
system drive '8000000000000038' status is 'online' [instance: 8000000000000038].
system drive '8000000000000039' status is 'online' [instance: 8000000000000039].
system drive '800000000000003A' status is 'online' [instance: 800000000000003A].
system drive '800000000000003B' status is 'online' [instance: 800000000000003B].
system drive '800000000000003C' status is 'online' [instance: 800000000000003C].
system drive '800000000000003D' status is 'online' [instance: 800000000000003D].
system drive '800000000000003E' status is 'online' [instance: 800000000000003E].
system drive '800000000000003F' status is 'online' [instance: 800000000000003F].
system drive '8000000000000040' status is 'online' [instance: 8000000000000040].
system drive '8000000000000041' status is 'online' [instance: 8000000000000041].
system drive '8000000000000042' status is 'online' [instance: 8000000000000042].
system drive '8000000000000043' status is 'online' [instance: 8000000000000043].
system drive '8000000000000044' status is 'online' [instance: 8000000000000044].
system drive '8000000000000045' status is 'online' [instance: 8000000000000045].
system drive '8000000000000046' status is 'online' [instance: 8000000000000046].
system drive '8000000000000047' status is 'online' [instance: 8000000000000047].
system drive '8000000000000048' status is 'online' [instance: 8000000000000048].
system drive '8000000000000049' status is 'online' [instance: 8000000000000049].
system drive '800000000000004A' status is 'online' [instance: 800000000000004A].
system drive '800000000000004B' status is 'online' [instance: 800000000000004B].
system drive '800000000000004C' status is 'online' [instance: 800000000000004C].
system drive '800000000000004D' status is 'online' [instance: 800000000000004D].
system drive '800000000000004E' status is 'online' [instance: 800000000000004E].
system drive '800000000000004F' status is 'online' [instance: 800000000000004F].
system drive '8000000000000050' status is 'online' [instance: 8000000000000050].
system drive '8000000000000051' status is 'online' [instance: 8000000000000051].
Checking batteries
battery 'hnas-cluster-1.0' status is 'ok' [instance: 1.0].
battery 'hnas-cluster-2.0' status is 'ok' [instance: 2.0].
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_hitachi_hnas_snmp.pl \
	--plugin=storage::hitachi::hnas::snmp::plugin \
    --list-mode
```

Le plugin apporte les modes suivants :

| Mode                   | Modèle de service associé                           |
|:-----------------------|:----------------------------------------------------|
| cluster-status         | HW-Storage-Hitachi-Hnas-Cluster-Status-SNMP         |
| hardware               | HW-Storage-Hitachi-Hnas-Hardware-Global-SNMP        |
| interfaces             | HW-Storage-Hitachi-Hnas-Interfaces-SNMP             |
| list-interfaces        | Used for service discovery                          |
| list-volumes           | Not used in this Monitoring Connector               |
| virtual-volumes-quotas | HW-Storage-Hitachi-Hnas-Virtual-Volumes-Quotas-SNMP |
| volume-usage           | HW-Storage-Hitachi-Hnas-Volume-Usage-Global-SNMP    |

### Options disponibles

#### Options génériques

Les options génériques aux modes sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Type   |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Global |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Global |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Global |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Global |
| --version                                  | Display the plugin's version.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Global |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                              | Global |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                           | Output |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                            | Output |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Change storage free perfdata in used:     --change-perfdata=free,used,invert()      Change storage free perfdata in used:     --change-perfdata=used,free,invert()      Scale traffic values automaticaly:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()   | Output |
| --extend-perfdata-group                    | Extend perfdata from multiple perfdatas (methods in target are: min, max, average, sum) Syntax: --extend-perfdata-group=searchlabel,newlabel,target\[,\[newuom\],\[m in\],\[max\]\]  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'                                               | Output |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                              | Output |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --range-perfdata                           | Change perfdata range thresholds display: 1 = start value equals to '0' is removed, 2 = threshold range is not display.                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Output |
| --filter-uom                               | Masks the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Output |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                  | Output |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --output-ignore-label                      | Remove the status label from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output |
| --output-xml                               | Display output in XML format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Output |
| --output-json                              | Display output in JSON format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | Output |
| --output-openmetrics                       | Display metrics in OpenMetrics format.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Output |
| --output-file                              | Write output in file (can be used with json and xml options)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Output |
| --disco-format                             | Display discovery arguments (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --disco-show                               | Display discovery values (if the mode manages it).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Output |
| --float-precision                          | Set the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Output |
| --source-encoding                          | Set encoding of monitoring sources (in some cases. Default: 'UTF-8').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Output |
| --hostname                                 | Hostname to query (required).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | SNMP   |
| --snmp-community                           | Read community (defaults to public).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-version                             | Version: 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-port                                | Port (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-timeout                             | Timeout in secondes (default: 1) before retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | SNMP   |
| --snmp-retries                             | Set the number of retries (default: 5) before failure.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | SNMP   |
| --maxrepetitions                           | Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | SNMP   |
| --subsetleef                               | How many oid values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP   |
| --snmp-autoreduce                          | Auto reduce SNMP request size in case of SNMP errors (By default, the divisor is 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-force-getnext                       | Use snmp getnext function (even in snmp v2c and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-cache-file                          | Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --snmp-username                            | Security name (only for SNMP v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | SNMP   |
| --authpassphrase                           | Authentication protocol pass phrase.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | SNMP   |
| --authprotocol                             | Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | SNMP   |
| --privpassphrase                           | Privacy protocol pass phrase                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP   |
| --privprotocol                             | Privacy protocol: DES\|AES. Since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | SNMP   |
| --contextname                              | Context name                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP   |
| --contextengineid                          | Context engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | SNMP   |
| --securityengineid                         | Security engine ID                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | SNMP   |
| --snmp-errors-exit                         | Exit code for SNMP Errors (default: unknown)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SNMP   |
| --snmp-tls-transport                       | TLS Transport communication used (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | SNMP   |
| --snmp-tls-our-identity                    | Our X.509 identity to use, which should either be a fingerprint or the filename that holds the certificate.                                                                                                                                                                                                                                                                                                                                                                                                                                                                | SNMP   |
| --snmp-tls-their-identity                  | The remote server's identity to connect to, specified as either a fingerprint or a file name. Either this must be specified, or the hostname below along with a trust anchor.                                                                                                                                                                                                                                                                                                                                                                                              | SNMP   |
| --snmp-tls-their-hostname                  | The remote server's hostname that is expected. If their certificate was signed by a CA then their hostname presented in the certificate must match this value or the connection fails to be established (to avoid man-in-the-middle attacks).                                                                                                                                                                                                                                                                                                                              | SNMP   |
| --snmp-tls-trust-cert                      | A trusted certificate to use as trust anchor (like a CA certificate) for verifying a remote server's certificate. If a CA certificate is used to validate a certificate then the TheirHostname parameter must also be specified to ensure their presented hostname in the certificate matches.                                                                                                                                                                                                                                                                             | SNMP   |

#### Options des modes

Les options spécifiques aux modes sont listées ci-dessus :

<Tabs groupId="sync">
<TabItem value="Cluster-Status" label="Cluster-Status">

| Option            | Description                                                                                                                         | Type |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-name     | Filter node name (can be a regexp).                                                                                                 | Mode |
| --unknown-status  | Set unknown threshold for status (Default: '%{state} =~ /unknown/'). You can use the following variables: %\{state\}, %\{display\}      | Mode |
| --warning-status  | Set warning threshold for status (Default: -). You can use the following variables: %\{state\}, %\{display\}                            | Mode |
| --critical-status | Set critical threshold for status (Default: '%{state} =~ /offline/i'). You can use the following variables: %\{state\}, %\{display\}    | Mode |

</TabItem>
<TabItem value="Hardware-Global" label="Hardware-Global">

| Option               | Description                                                                                                                                                                                     | Type |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --component          | Which component to check (Default: '.*'). Can be: 'temperature', 'fan', 'psu', 'sysdrive', 'battery'.                                                                                           | Mode |
| --filter             | Exclude some parts (comma seperated list) (Example: --filter=sysdrive) Can also exclude specific instance: --filter=sysdrive,1                                                                  | Mode |
| --no-component       | Return an error if no compenents are checked. If total (with skipped) is 0. (Default: 'critical' returns).                                                                                      | Mode |
| --threshold-overload | Set to overload default threshold values (syntax: section,\[instance,\]status,regexp) It used before default thresholds (order stays). Example: --threshold-overload='sysdrive,OK,formatting'   | Mode |
| --warning            | Set warning threshold (syntax: type,regexp,threshold) Example: --warning='temperature,.*,30'                                                                                                    | Mode |
| --critical           | Set critical threshold (syntax: type,regexp,threshold) Example: --critical='temperature,.*,40'                                                                                                  | Mode |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                   | Description                                                                                                                                                                                                                                                                                | Type      |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                                                                 | Retention |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                            | Retention |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                    | Retention |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                                                                  | Retention |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                       | Retention |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                             | Retention |
| --statefile-dir          | Directory for statefile (Default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                        | Retention |
| --statefile-suffix       | Add a suffix for the statefile name (Default: '').                                                                                                                                                                                                                                         | Retention |
| --statefile-concat-cwd   | Concat current working directory with option '--statefile-dir'. Useful on Windows when plugin is compiled.                                                                                                                                                                                 | Retention |
| --statefile-format       | Format used to store cache (can be: 'dumper', 'storable', 'json').                                                                                                                                                                                                                         | Retention |
| --statefile-key          | Key to encrypt/decrypt cache.                                                                                                                                                                                                                                                              | Retention |
| --statefile-cipher       | Cipher to encrypt cache (Default: 'AES').                                                                                                                                                                                                                                                  | Retention |
| --add-global             | Check global port statistics (By default if no --add-* option is set).                                                                                                                                                                                                                     | Mode      |
| --add-status             | Check interface status.                                                                                                                                                                                                                                                                    | Mode      |
| --add-duplex-status      | Check duplex status (with --warning-status and --critical-status).                                                                                                                                                                                                                         | Mode      |
| --add-traffic            | Check interface traffic.                                                                                                                                                                                                                                                                   | Mode      |
| --add-errors             | Check interface errors.                                                                                                                                                                                                                                                                    | Mode      |
| --add-cast               | Check interface cast.                                                                                                                                                                                                                                                                      | Mode      |
| --add-speed              | Check interface speed.                                                                                                                                                                                                                                                                     | Mode      |
| --add-volume             | Check interface data volume between two checks (not supposed to be graphed, useful for BI reporting).                                                                                                                                                                                      | Mode      |
| --check-metrics          | If the expression is true, metrics are checked (Default: '%{opstatus} eq "up"').                                                                                                                                                                                                           | Mode      |
| --warning-status         | Set warning threshold for status. You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\}                                                                                                                                                              | Mode      |
| --critical-status        | Set critical threshold for status (Default: '%{admstatus} eq "up" and %\{opstatus\} ne "up"'). You can use the following variables: %\{admstatus\}, %\{opstatus\}, %\{duplexstatus\}, %\{display\}                                                                                                   | Mode      |
| --warning-* --critical-* | Thresholds. Can be: 'total-port', 'total-admin-up', 'total-admin-down', 'total-oper-up', 'total-oper-down', 'in-traffic', 'out-traffic', 'in-error', 'in-discard', 'out-error', 'out-discard', 'in-ucast', 'in-bcast', 'in-mcast', 'out-ucast', 'out-bcast', 'out-mcast', 'speed' (b/s).   | Mode      |
| --units-traffic          | Units of thresholds for the traffic (Default: 'percent\_delta') ('percent\_delta', 'bps', 'counter').                                                                                                                                                                                      | Mode      |
| --units-errors           | Units of thresholds for errors/discards (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                     | Mode      |
| --units-cast             | Units of thresholds for communication types (Default: 'percent\_delta') ('percent\_delta', 'percent', 'delta', 'counter').                                                                                                                                                                 | Mode      |
| --nagvis-perfdata        | Display traffic perfdata to be compatible with nagvis widget.                                                                                                                                                                                                                              | Mode      |
| --interface              | Set the interface (number expected) ex: 1,2,... (empty means 'check all interface').                                                                                                                                                                                                       | Mode      |
| --name                   | Allows to use interface name with option --interface instead ofinterface oid index (Can be a regexp)                                                                                                                                                                                       | Mode      |
| --speed                  | Set interface speed for incoming/outgoing traffic (in Mb).                                                                                                                                                                                                                                 | Mode      |
| --speed-in               | Set interface speed for incoming traffic (in Mb).                                                                                                                                                                                                                                          | Mode      |
| --speed-out              | Set interface speed for outgoing traffic (in Mb).                                                                                                                                                                                                                                          | Mode      |
| --map-speed-dsl          | Get interface speed configuration for interface type 'adsl' and 'vdsl2'.  Syntax: --map-speed-dsl=interface-src-name,interface-dsl-name  E.g: --map-speed-dsl=Et0.835,Et0-vdsl2                                                                                                            | Mode      |
| --force-counters64       | Force to use 64 bits counters only. Can be used to improve performance.                                                                                                                                                                                                                    | Mode      |
| --force-counters32       | Force to use 32 bits counters (even in snmp v2c and v3). Should be used when 64 bits counters are buggy.                                                                                                                                                                                   | Mode      |
| --reload-cache-time      | Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                                                                | Mode      |
| --oid-filter             | Choose OID used to filter interface (default: ifDesc) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                           | Mode      |
| --oid-display            | Choose OID used to display interface (default: ifDesc) (values: ifDesc, ifAlias, ifName, IpAddr).                                                                                                                                                                                          | Mode      |
| --oid-extra-display      | Add an OID to display.                                                                                                                                                                                                                                                                     | Mode      |
| --display-transform-src  | Regexp src to transform display value.                                                                                                                                                                                                                                                     | Mode      |
| --display-transform-dst  | Regexp dst to transform display value.                                                                                                                                                                                                                                                     | Mode      |
| --show-cache             | Display cache interface datas.                                                                                                                                                                                                                                                             | Mode      |

</TabItem>
<TabItem value="Virtual-Volumes-Quotas" label="Virtual-Volumes-Quotas">

| Option                    | Description                                                                                                                              | Type |
|:--------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-filesystem-label | Filter virtual volume quota by filesystem label.                                                                                         | Mode |
| --filter-volume-name      | Filter virtual volumes quota by volume name.                                                                                             | Mode |
| --filter-target           | Filter virtual volumes quota by target.                                                                                                  | Mode |
| --warning-* --critical-*  | Thresholds. Can be: 'vvq-detected', 'vvq-usage', 'vvq-usage-free', 'vvq-usage-prct', 'vvq-files', 'vvq-files-free', 'vvq-files-prct'.    | Mode |

</TabItem>
<TabItem value="Volume-Usage-Global" label="Volume-Usage-Global">

| Option                   | Description                                                                                                                               | Type |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------|:-----|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^status$'                                                    | Mode |
| --filter-name            | Filter volume name (can be a regexp).                                                                                                     | Mode |
| --warning-status         | Set warning threshold for status (Default: '%{status} =~ /needsChecking/i'). You can use the following variables: %\{status\}, %\{display\}   | Mode |
| --critical-status        | Set critical threshold for status (Default: -). You can use the following variables: %\{status\}, %\{display\}                                | Mode |
| --warning-* --critical-* | Thresholds. Can be: 'usage'.                                                                                                              | Mode |
| --units                  | Units of thresholds (Default: '%') ('%', 'B').                                                                                            | Mode |
| --free                   | Thresholds are on free space left.                                                                                                        | Mode |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_hitachi_hnas_snmp.pl \
	--plugin=storage::hitachi::hnas::snmp::plugin \
	--mode=interfaces \
    --help
```
