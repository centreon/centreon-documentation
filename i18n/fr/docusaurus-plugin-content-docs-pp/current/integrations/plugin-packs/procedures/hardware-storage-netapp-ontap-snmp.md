---
id: hardware-storage-netapp-ontap-snmp
title: NetApp Ontap SNMP
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **NetApp Ontap SNMP** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **NetApp Ontap SNMP** apporte un modèle d'hôte :

* **HW-Storage-NetApp-Ontap-SNMP-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-NetApp-Ontap-SNMP-custom" label="HW-Storage-NetApp-Ontap-SNMP-custom">

| Alias         | Modèle de service                                 | Description                                                                |
|:--------------|:--------------------------------------------------|:---------------------------------------------------------------------------|
| Cache-Age     | HW-Storage-NetApp-Ontap-Cache-Age-SNMP-custom     | Contrôle en minutes le dernier bloc en lecture-seul dans le 'cache buffer' |
| Cp-Statistics | HW-Storage-NetApp-Ontap-Cp-Statistics-SNMP-custom | Contrôle les métriques des 'consistency point'                             |
| Cpu-Load      | HW-Storage-NetApp-Ontap-Cpu-Load-SNMP-custom      | Contrôle l'utilisation du CPU                                              |
| Disk-Failed   | HW-Storage-NetApp-Ontap-Disk-Failed-SNMP-custom   | Contrôle le nombre de disques avec un problème de fonctionnement           |
| Global-status | HW-Storage-NetApp-Ontap-Global-status-SNMP-custom | Contrôle le status global du NetApp                                        |
| Nvram         | HW-Storage-NetApp-Ontap-Nvram-SNMP-custom         | Contrôle le status de la NVRAM                                             |
| Shelf         | HW-Storage-NetApp-Ontap-Shelf-SNMP-custom         | Contrôle le matériel de l'armoire                                          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-NetApp-Ontap-SNMP-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                  | Modèle de service                                          | Description                                              | Découverte |
|:-----------------------|:-----------------------------------------------------------|:---------------------------------------------------------|:----------:|
| Aggregates             | HW-Storage-NetApp-Ontap-Aggregates-SNMP-custom             | Contrôle l'état d'un ou plusieurs aggrégats              |            |
| Cluster-Nodes          | HW-Storage-NetApp-Ontap-Cluster-Nodes-SNMP-custom          | Contrôle les noeuds du cluster                           |     X      |
| Fan                    | HW-Storage-NetApp-Ontap-Fan-SNMP-custom                    | Contrôle l'état des ventilateurs                         |            |
| File-System-Global     | HW-Storage-NetApp-Ontap-File-System-Global-SNMP-custom     | Contrôle l'utilisation des disques                       |     X      |
| Ndmpsessions           | HW-Storage-NetApp-Ontap-Ndmpsessions-SNMP-custom           | Contrôle le nombre de sessions ndmp                      |            |
| Partner-Status         | HW-Storage-NetApp-Ontap-Partner-Status-SNMP-custom         | Contrôle le status du failover                           |            |
| Plexes                 | HW-Storage-NetApp-Ontap-Plexes-SNMP-custom                 | Contrôle les plex                                        |     X      |
| Psu                    | HW-Storage-NetApp-Ontap-Psu-SNMP-custom                    | Contrôle le status de l'alimentation éléctrique          |            |
| Quotas                 | HW-Storage-NetApp-Ontap-Quotas-SNMP-custom                 | Contrôle les quotas                                      |            |
| Share-Calls            | HW-Storage-NetApp-Ontap-Share-Calls-SNMP-custom            | Contrôle le nombre d'appels 'CIFS' et 'NFS' par secondes |            |
| Snapshot-Age-Global    | HW-Storage-NetApp-Ontap-Snapshot-Age-Global-SNMP-custom    | Contrôle l'ancienneté des snapshots de volumes           |            |
| Snapshot-Age-Name      | HW-Storage-NetApp-Ontap-Snapshot-Age-Name-SNMP-custom      | Contrôle l'ancienneté des snapshots de volumes           |            |
| Temperature            | HW-Storage-NetApp-Ontap-Temperature-SNMP-custom            | Contrôle la temperature du materiel                      |            |
| Volume-Options-Generic | HW-Storage-NetApp-Ontap-Volume-Options-Generic-SNMP-custom | Contrôle des options des volumes                         |            |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte d'hôtes

| Nom de la règle | Description                                                                                                                                                                                                                                          |
|:----------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| SNMP Agents     | Découvre les ressources via un scan réseau SNMP. Installez le connecteur [Generic SNMP](./applications-protocol-snmp.md) pour obtenir la règle de découverte et créez un modificateur pour le modèle d'hôte **HW-Storage-NetApp-Ontap-SNMP-custom**. |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/hosts-discovery) pour en savoir plus sur la découverte automatique d'hôtes.

#### Découverte de services

| Nom de la règle                         | Description                                                              |
|:----------------------------------------|:-------------------------------------------------------------------------|
| Net-Netapp-Ontap-SNMP-Cluster-Node-Name | Découvre les noeuds du cluster et les supervise                          |
| Net-Netapp-Ontap-SNMP-Disk-Name         | Découvre les disques avec un problème de fonctionnement et les supervise |
| Net-Netapp-Ontap-SNMP-Plex-Name         | Découvre les plex et les supervise                                       |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Nom    | Unité |
|:-------|:------|
| state  | N/A   |
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cache-Age" label="Cache-Age">

| Nom       | Unité |
|:----------|:------|
| cache_age | m     |

</TabItem>
<TabItem value="Cluster-Nodes" label="Cluster-Nodes">

| Nom                                                 | Unité |
|:----------------------------------------------------|:------|
| node-status                                         | N/A   |
| bbu-status                                          | N/A   |
| *nodes*~node.cpu.utilization.percentage             | %     |
| *nodes*~node.hardware.fans.failed.count             | count |
| *nodes*~node.hardware.power_supplies.failed.count   | count |
| *nodes*~node.hardware.temperatures.over_range.count | count |
| port-link-status                                    | N/A   |
| port-health                                         | N/A   |

</TabItem>
<TabItem value="Cp-Statistics" label="Cp-Statistics">

| Nom                                           | Unité |
|:----------------------------------------------|:------|
| storage.cp.timer.operations.count             | count |
| storage.cp.snapshot.operations.count          | count |
| storage.cp.lowerwatermark.operations.count    | count |
| storage.cp.highwatermark.operations.count     | count |
| storage.cp.logfull.operations.count           | count |
| storage.cp.back2back.operations.count         | count |
| storage.cp.flushunlog.operations.count        | count |
| storage.cp.syncrequests.operations.count      | count |
| storage.cp.lowvirtualbuffers.operations.count | count |
| storage.cp.deferred.operations.count          | count |
| storage.cp.lowdatavecs.operations.count       | count |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Nom     | Unité |
|:--------|:------|
| cpuload | %     |

</TabItem>
<TabItem value="Disk-Failed" label="Disk-Failed">

| Nom    | Unité |
|:-------|:------|
| failed | N/A   |

</TabItem>
<TabItem value="Fan" label="Fan">

Pas de métrique pour ce service

</TabItem>
<TabItem value="File-System-Global" label="File-System-Global">

| Nom                | Unité |
|:-------------------|:------|
| usage              | N/A   |
| *fs*#inodes        | %     |
| *fs*#compresssaved | %     |
| *fs*#dedupsaved    | %     |
| vserver-status     | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Global-status" label="Global-status">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| storage.io.read.usage.bytespersecond  | B/s   |
| storage.io.write.usage.bytespersecond | B/s   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Ndmpsessions" label="Ndmpsessions">

| Nom      | Unité |
|:---------|:------|
| sessions | N/A   |

</TabItem>
<TabItem value="Nvram" label="Nvram">

Pas de métrique pour ce service

</TabItem>
<TabItem value="Partner-Status" label="Partner-Status">

Pas de métrique pour ce service

</TabItem>
<TabItem value="Plexes" label="Plexes">

| Nom                                             | Unité |
|:------------------------------------------------|:------|
| plexes.online.count                             | count |
| plexes.offline.count                            | count |
| plexes.resyncing.count                          | count |
| status                                          | N/A   |
| *plexes*~*aggregates*#plex.resyncing.percentage | %     |

</TabItem>
<TabItem value="Psu" label="Psu">

Pas de métrique pour ce service

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| *quotas*#quota.space.usage.bytes      | B     |
| *quotas*#quota.space.free.bytes       | B     |
| *quotas*#quota.space.usage.percentage | %     |

</TabItem>
<TabItem value="Share-Calls" label="Share-Calls">

| Nom  | Unité |
|:-----|:------|
| cifs | N/A   |
| nfs  | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Shelf" label="Shelf">

| Nom                           | Unité |
|:------------------------------|:------|
| count_communication           | count |
| count_electronics             | count |
| count_fan                     | count |
| count_psu                     | count |
| count_raid                    | count |
| count_temperature             | count |
| count_voltage                 | count |
| speed_*channel-shelf-address* | rpm   |
| temp_*channel-shelf-address*  | C     |
| volt_*channel-shelf-address*  | mV    |

</TabItem>
<TabItem value="Snapshot-Age-Global" label="Snapshot-Age-Global">

| Nom       | Unité |
|:----------|:------|
| snapshots | N/A   |

</TabItem>
<TabItem value="Snapshot-Age-Name" label="Snapshot-Age-Name">

| Nom       | Unité |
|:----------|:------|
| snapshots | N/A   |

</TabItem>
<TabItem value="Temperature" label="Temperature">

Pas de métrique pour ce service

</TabItem>
<TabItem value="Volume-Options-Generic" label="Volume-Options-Generic">

| Nom     | Unité |
|:--------|:------|
| status  | N/A   |
| status  | N/A   |
| options | N/A   |
| options | N/A   |
| failed  | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
</Tabs>

## Prérequis

### Spécificité de l'équipement

Si votre système de stockage Netapp est en 'c-mode', les services suivants ne fonctionneront pas :
- Global-Status
- Share-Calls
- Cache-Age
- Ndmpsessions

### Configuration SNMP

L'agent SNMP doit être activé et configuré sur l'équipement. Veuillez vous référer à la documentation officielle du constructeur/éditeur. 
Il se peut que votre équipement nécessite qu'une liste d'adresses autorisées à l'interroger soit paramétrée. 
Veillez à ce que les adresses des collecteurs Centreon y figurent bien.

### Flux réseau

La communication doit être possible sur le port UDP 161 depuis le collecteur
Centreon vers la ressource supervisée.

## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Gestionnaire de connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-netapp-ontap-snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-netapp-ontap-snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-netapp-ontap-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-netapp-ontap-snmp
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **NetApp Ontap SNMP**
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
dnf install centreon-plugin-Hardware-Storage-Netapp-Ontap-Snmp
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Netapp-Ontap-Snmp
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-netapp-ontap-snmp
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Snmp
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-NetApp-Ontap-SNMP-custom**.

> Si vous utilisez SNMP en version 3, vous devez configurer les paramètres spécifiques associés via la macro **SNMPEXTRAOPTIONS**.
> Plus d'informations dans la section [Troubleshooting SNMP](../getting-started/how-to-guides/troubleshooting-plugins.md#snmpv3-options-mapping).

| Macro            | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| SNMPEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

4. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Macro          | Description                                                                                                                                      | Valeur par défaut                | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------|:-----------:|
| FILTERNAME     | Filter aggregates by name                                                                                                                        |                                  |             |
| CRITICALSTATE  | Set critical threshold for state. You can use the following variables: %{state}, %{name}                                                         | %{state} =~ /offline/i           |             |
| WARNINGSTATE   | Set warning threshold for state. You can use the following variables: %{state}, %{name}                                                          |                                  |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}                            | %{status} !~ /normal\|mirrored/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                             |                                  |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                        |             |

</TabItem>
<TabItem value="Cache-Age" label="Cache-Age">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in minutes                                                                                                                     |                   |             |
| CRITICAL     | Critical threshold in minutes                                                                                                                    |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Cluster-Nodes" label="Cluster-Nodes">

| Macro                        | Description                                                                                                                                              | Valeur par défaut                            | Obligatoire |
|:-----------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------|:-----------:|
| FILTERNODENAME               | Filter nodes by name (can be a regexp)                                                                                                                   |                                              |             |
| FILTERPORDID                 | Filter ports by ID (can be a regexp)                                                                                                                     |                                              |             |
| FILTERPORTROLE               | Filter ports by role (can be a regexp)                                                                                                                   |                                              |             |
| CRITICALBBUSTATUS            | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{bbu\_status}, %{node\_name}                         | %{bbu\_status} !~ /fullyCharged\|ok/i        |             |
| WARNINGBBUSTATUS             | Define the conditions to match for the status to be WARNING. You can use the following variables: %{bbu\_status}, %{node\_name}                          |                                              |             |
| WARNINGCPUUTILIZATION        | Threshold                                                                                                                                                |                                              |             |
| CRITICALCPUUTILIZATION       | Threshold                                                                                                                                                |                                              |             |
| WARNINGFANFAILED             | Threshold                                                                                                                                                |                                              |             |
| CRITICALFANFAILED            | Threshold                                                                                                                                                |                                              |             |
| CRITICALNODESTATUS           | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{node\_status}, %{node\_name}                        | %{node\_status} eq "clusterComLost"          |             |
| WARNINGNODESTATUS            | Define the conditions to match for the status to be WARNING. You can use the following variables: %{node\_status}, %{node\_name}                         |                                              |             |
| CRITICALPORTHEALTH           | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{health}, %{port\_id}, %{node\_name}                 | %{health} eq "degraded"                      |             |
| WARNINGPORTHEALTH            | Define the conditions to match for the status to be WARNING. You can use the following variables: %{health}, %{port\_id}, %{node\_name}                  |                                              |             |
| CRITICALPORTLINKSTATUS       | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{admstatus}, %{opstatus}, %{port\_id}, %{node\_name} | %{admstatus} eq "up" and %{opstatus} ne "up" |             |
| WARNINGPORTLINKSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{port\_id}, %{node\_name}  |                                              |             |
| WARNINGPSUFAILED             | Threshold                                                                                                                                                |                                              |             |
| CRITICALPSUFAILED            | Threshold                                                                                                                                                |                                              |             |
| WARNINGTEMPERATUREOVERRANGE  | Threshold                                                                                                                                                |                                              |             |
| CRITICALTEMPERATUREOVERRANGE | Threshold                                                                                                                                                |                                              |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).         | --verbose                                    |             |

</TabItem>
<TabItem value="Cp-Statistics" label="Cp-Statistics">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold in percent                                                                                                                     |                   |             |
| CRITICAL     | Critical threshold in percent                                                                                                                    |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |


</TabItem>
<TabItem value="Fan" label="Fan">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="File-System-Global" label="File-System-Global">

| Macro          | Description                                                                                                                                      | Valeur par défaut                          | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------|:-----------:|
| FILTER         | Filter by filesystem name (can be a regexp)                                                                                                      | .*                                         |             |
| UNIT           | Units of thresholds ('%', 'B')                                                                                                                   | %                                          |             |
| WARNING        | Threshold                                                                                                                                        |                                            |             |
| CRITICAL       | Threshold                                                                                                                                        |                                            |             |
| WARNINGINODES  | Threshold                                                                                                                                        |                                            |             |
| CRITICALINODES | Threshold                                                                                                                                        |                                            |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose --filter-perfdata='used\|inodes' |             |

</TabItem>
<TabItem value="Global-status" label="Global-status">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Ndmpsessions" label="Ndmpsessions">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNING      | Warning threshold                                                                                                                                |                   |             |
| CRITICAL     | Critical threshold                                                                                                                               |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Nvram" label="Nvram">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Partner-Status" label="Partner-Status">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Plexes" label="Plexes">

| Macro                  | Description                                                                                                                                      | Valeur par défaut        | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| FILTERNAME             | Filter plexes by name                                                                                                                            |                          |             |
| WARNINGRESYNCING       | Threshold                                                                                                                                        |                          |             |
| CRITICALRESYNCING      | Threshold                                                                                                                                        |                          |             |
| WARNINGSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}, %{aggregate}               | %{status} eq "resyncing" |             |
| CRITICALSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}, %{aggregate}              | %{status} eq "offline"   |             |
| WARNINGTOTALOFFLINE    | Threshold                                                                                                                                        |                          |             |
| CRITICALTOTALOFFLINE   | Threshold                                                                                                                                        |                          |             |
| WARNINGTOTALONLINE     | Threshold                                                                                                                                        |                          |             |
| CRITICALTOTALONLINE    | Threshold                                                                                                                                        |                          |             |
| WARNINGTOTALRESYNCING  | Threshold                                                                                                                                        |                          |             |
| CRITICALTOTALRESYNCING | Threshold                                                                                                                                        |                          |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                |             |

</TabItem>
<TabItem value="Psu" label="Psu">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Macro                  | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERINDEX            | Filter by index (identified entry in the /etc/quotas) (can be a regexp)                                                                          |                   |             |
| FILTERQTREE            | Filter by qtree name (can be a regexp)                                                                                                           |                   |             |
| FILTERVOLUME           | Filter by volume name (can be a regexp)                                                                                                          |                   |             |
| FILTERVSERVER          | Filter by vserver name (can be a regexp)                                                                                                         |                   |             |
| WARNINGSPACEUSAGE      | Threshold                                                                                                                                        |                   |             |
| CRITICALSPACEUSAGE     | Threshold                                                                                                                                        |                   |             |
| WARNINGSPACEUSAGEFREE  | Threshold                                                                                                                                        |                   |             |
| CRITICALSPACEUSAGEFREE | Threshold                                                                                                                                        |                   |             |
| WARNINGSPACEUSAGEPRCT  | Threshold                                                                                                                                        |                   |             |
| CRITICALSPACEUSAGEPRCT | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Share-Calls" label="Share-Calls">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCIFS  | Threshold                                                                                                                                        |                   |             |
| CRITICALCIFS | Threshold                                                                                                                                        |                   |             |
| WARNINGNFS   | Threshold                                                                                                                                        |                   |             |
| CRITICALNFS  | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Shelf" label="Shelf">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'psu', 'fan', 'communication', 'voltage', 'temperature', 'electronics', 'raid'                 | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Snapshot-Age-Global" label="Snapshot-Age-Global">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VOLUMENAME   | Set the snapshot name                                                                                                                            |                   |             |
| WARNING      | Warning threshold in seconds                                                                                                                     |                   |             |
| CRITICAL     | Critical threshold in seconds                                                                                                                    |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Snapshot-Age-Name" label="Snapshot-Age-Name">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| VOLUMENAME   | Set the snapshot name                                                                                                                            |                   |             |
| WARNING      | Warning threshold in seconds                                                                                                                     |                   |             |
| CRITICAL     | Critical threshold in seconds                                                                                                                    |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Temperature" label="Temperature">

| Macro        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Volume-Options-Generic" label="Volume-Options-Generic">

| Macro           | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME      | Filter on volume name (can be a regexp)                                                                                                          |                   |             |
| UNKNOWNSTATUS   | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{display}                          |                   |             |
| UNKNOWNOPTIONS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{options}, %{display}                         |                   |             |
| WARNINGOPTIONS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{options}, %{display}                         |                   |             |
| CRITICALOPTIONS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{options}, %{display}                        |                   |             |
| WARNINGSTATUS   | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{display}                          |                   |             |
| CRITICALSTATUS  | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{display}                         |                   |             |
| EXTRAOPTIONS    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
</Tabs>

3. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). Le service apparaît dans la liste des services supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails du service : celle-ci montre les valeurs des macros.

## Comment puis-je tester le plugin et que signifient les options des commandes ?

Une fois le plugin installé, vous pouvez tester celui-ci directement en ligne
de commande depuis votre collecteur Centreon en vous connectant avec
l'utilisateur **centreon-engine** (`su - centreon-engine`). Vous pouvez tester
que le connecteur arrive bien à superviser une ressource en utilisant une commande
telle que celle-ci (remplacez les valeurs d'exemple par les vôtres) :

```bash
/usr/lib/centreon/plugins/centreon_netapp_ontap_snmp.pl \
	--plugin=storage::netapp::ontap::snmp::plugin \
	--mode=volumeoptions \
	--hostname='10.0.0.1' \
	--snmp-version='2c' \
	--snmp-community='my-snmp-community'  \
	--filter-name='' \
	--unknown-status='' \
	--warning-status='' \
	--critical-status='' \
	--unknown-options='' \
	--warning-options='' \
	--critical-options='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All volumes are ok | 'failed'=0;;;0;
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md)
pour le diagnostic des erreurs communes des plugins Centreon.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_netapp_ontap_snmp.pl \
	--plugin=storage::netapp::ontap::snmp::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                          | Modèle de service associé                                                                                          |
|:----------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------------------------------------------------|
| aggregates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/aggregates.pm)]               | HW-Storage-NetApp-Ontap-Aggregates-SNMP-custom                                                                     |
| cache-age [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/cacheage.pm)]                  | HW-Storage-NetApp-Ontap-Cache-Age-SNMP-custom                                                                      |
| cluster-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/clusternodes.pm)]          | HW-Storage-NetApp-Ontap-Cluster-Nodes-SNMP-custom                                                                  |
| cp-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/cpstatistics.pm)]          | HW-Storage-NetApp-Ontap-Cp-Statistics-SNMP-custom                                                                  |
| cpuload [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/cpuload.pm)]                     | HW-Storage-NetApp-Ontap-Cpu-Load-SNMP-custom                                                                       |
| diskfailed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/diskfailed.pm)]               | HW-Storage-NetApp-Ontap-Disk-Failed-SNMP-custom                                                                    |
| failover [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/failover.pm)]                   | Not used in this Monitoring Connector                                                                              |
| fan [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/fan.pm)]                             | HW-Storage-NetApp-Ontap-Fan-SNMP-custom                                                                            |
| filesys [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/filesys.pm)]                     | HW-Storage-NetApp-Ontap-File-System-Global-SNMP-custom                                                             |
| global-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/globalstatus.pm)]          | HW-Storage-NetApp-Ontap-Global-status-SNMP-custom                                                                  |
| list-cluster-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/listclusternodes.pm)] | Used for service discovery                                                                                         |
| list-filesys [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/listfilesys.pm)]            | Used for service discovery                                                                                         |
| list-plexes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/listplexes.pm)]              | Used for service discovery                                                                                         |
| list-snapvault [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/listsnapvault.pm)]        | Not used in this Monitoring Connector                                                                              |
| ndmpsessions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/ndmpsessions.pm)]           | HW-Storage-NetApp-Ontap-Ndmpsessions-SNMP-custom                                                                   |
| nvram [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/nvram.pm)]                         | HW-Storage-NetApp-Ontap-Nvram-SNMP-custom                                                                          |
| partnerstatus [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/partnerstatus.pm)]         | HW-Storage-NetApp-Ontap-Partner-Status-SNMP-custom                                                                 |
| plexes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/plexes.pm)]                       | HW-Storage-NetApp-Ontap-Plexes-SNMP-custom                                                                         |
| psu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/psu.pm)]                             | HW-Storage-NetApp-Ontap-Psu-SNMP-custom                                                                            |
| quotas [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/quotas.pm)]                       | HW-Storage-NetApp-Ontap-Quotas-SNMP-custom                                                                         |
| share-calls [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/sharecalls.pm)]              | HW-Storage-NetApp-Ontap-Share-Calls-SNMP-custom                                                                    |
| shelf [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/shelf.pm)]                         | HW-Storage-NetApp-Ontap-Shelf-SNMP-custom                                                                          |
| sis [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/sis.pm)]                             | Not used in this Monitoring Connector                                                                              |
| snapmirrorlag [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/snapmirrorlag.pm)]         | Not used in this Monitoring Connector                                                                              |
| snapshotage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/snapshotage.pm)]             | HW-Storage-NetApp-Ontap-Snapshot-Age-Global-SNMP-custom<br />HW-Storage-NetApp-Ontap-Snapshot-Age-Name-SNMP-custom |
| snapvault-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/snapvaultusage.pm)]      | Not used in this Monitoring Connector                                                                              |
| temperature [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/temperature.pm)]             | HW-Storage-NetApp-Ontap-Temperature-SNMP-custom                                                                    |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/snmp_standard/mode/uptime.pm)]                                   | Not used in this Monitoring Connector                                                                              |
| volumeoptions [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/snmp/mode/volumeoptions.pm)]         | HW-Storage-NetApp-Ontap-Volume-Options-Generic-SNMP-custom                                                         |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --hostname                                 |   Name or address of the host to monitor (mandatory).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --snmp-community                           |   SNMP community (default value: public). It is recommended to use a read-only community.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-version                             |   Version of the SNMP protocol. 1 for SNMP v1 (default), 2 for SNMP v2c, 3 for SNMP v3.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --snmp-port                                |   UDP port to send the SNMP request to (default: 161).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-timeout                             |   Time to wait before sending the request again if no reply has been received, in seconds (default: 1). See also --snmp-retries.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-retries                             |   Maximum number of retries (default: 5).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --maxrepetitions                           |   Max repetitions value (default: 50) (only for SNMP v2 and v3).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --subsetleef                               |   How many OID values per SNMP request (default: 50) (for get\_leef method. Be cautious when you set it. Prefer to let the default value).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-autoreduce                          |    Progressively reduce the number of requested OIDs in bulk mode. Use it in case of SNMP errors (by default, the number is divided by 2).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --snmp-force-getnext                       |   Use SNMP getnext function in SNMP v2c and v3. This will request one OID at a time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --snmp-cache-file                          |   Use SNMP cache file.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --snmp-username                            |   SNMP v3 only: User name (securityName).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --authpassphrase                           |   SNMP v3 only: Pass phrase hashed using the authentication protocol defined in the  --authprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --authprotocol                             |   SNMP v3 only: Authentication protocol: MD5\|SHA. Since net-snmp 5.9.1: SHA224\|SHA256\|SHA384\|SHA512.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --privpassphrase                           |   SNMP v3 only: Privacy pass phrase (privPassword) to encrypt messages using the protocol defined in the --privprotocol option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --privprotocol                             |   SNMP v3 only: Privacy protocol (privProtocol) used to encrypt messages. Supported protocols are: DES\|AES and since net-snmp 5.9.1: AES192\|AES192C\|AES256\|AES256C.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --contextname                              |   SNMP v3 only: Context name (contextName), if relevant for the monitored host.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --contextengineid                          |   SNMP v3 only: Context engine ID (contextEngineID), if relevant for the monitored host, given  as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --securityengineid                         |   SNMP v3 only: Security engine ID, given as a hexadecimal string.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --snmp-errors-exit                         |   Expected status in case of SNMP error or timeout. Possible values are warning, critical and unknown (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --snmp-tls-transport                       |   Transport protocol for TLS communication (can be: 'dtlsudp', 'tlstcp').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-our-identity                    |   X.509 certificate to identify ourselves. Can be the path to the certificate file or its contents.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --snmp-tls-their-identity                  |   X.509 certificate to identify the remote host. Can be the path to the  certificate file or its contents. This option is unnecessary if the certificate is already trusted by your system.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --snmp-tls-their-hostname                  |   Common Name (CN) expected in the certificate sent by the host if it differs from the value of the --hostname parameter.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --snmp-tls-trust-cert                      |   A trusted CA certificate used to verify a remote host's certificate.  If you use this option, you must also  define --snmp-tls-their-hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --output-file                              |   Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Option            | Description                                                                                                                                                             |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                             |
| --filter-name     |   Filter aggregates by name.                                                                                                                                            |
| --unknown-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}                                                  |
| --warning-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                                  |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /normal\|mirrored/i'). You can use the following variables: %{status}, %{name}   |
| --unknown-state   |   Set unknown threshold for state. You can use the following variables: %{state}, %{name}                                                                               |
| --warning-state   |   Set warning threshold for state. You can use the following variables: %{state}, %{name}                                                                               |
| --critical-state  |   Set critical threshold for state (default: '%{state} =~ /offline/i'). You can use the following variables: %{state}, %{name}                                          |

</TabItem>
<TabItem value="Cache-Age" label="Cache-Age">

| Option     | Description                        |
|:-----------|:-----------------------------------|
| --warning  |   Warning threshold in minutes     |
| --critical |   Critical threshold in minutes    |

</TabItem>
<TabItem value="Cluster-Nodes" label="Cluster-Nodes">

| Option                      | Description                                                                                                                                                                                                            |
|:----------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters           |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                            |
| --filter-node-name          |   Filter nodes by name (can be a regexp).                                                                                                                                                                              |
| --filter-port-id            |   Filter ports by ID (can be a regexp).                                                                                                                                                                                |
| --filter-port-role          |   Filter ports by role (can be a regexp).                                                                                                                                                                              |
| --unknown-node-status       |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{node\_status}, %{node\_name}                                                                                     |
| --warning-node-status       |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{node\_status}, %{node\_name}                                                                                     |
| --critical-node-status      |   Define the conditions to match for the status to be CRITICAL (default: '%{node\_status} eq "clusterComLost"'). You can use the following variables: %{node\_status}, %{node\_name}                                   |
| --unknown-bbu-status        |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{bbu\_status}, %{node\_name}                                                                                      |
| --warning-bbu-status        |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{bbu\_status}, %{node\_name}                                                                                      |
| --critical-bbu-status       |   Define the conditions to match for the status to be CRITICAL (default: '%{bbu\_status} !~ /fullyCharged\|ok/i'). You can use the following variables: %{bbu\_status}, %{node\_name}                                  |
| --unknown-port-link-status  |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{admstatus}, %{opstatus}, %{port\_id}, %{node\_name}                                                              |
| --warning-port-link-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{admstatus}, %{opstatus}, %{port\_id}, %{node\_name}                                                              |
| --critical-port-link-status |   Define the conditions to match for the status to be CRITICAL (default: '%{admstatus} eq "up" and %{opstatus} ne "up"'). You can use the following variables: %{admstatus}, %{opstatus}, %{port\_id}, %{node\_name}   |
| --unknown-port-health       |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{health}, %{port\_id}, %{node\_name}                                                                              |
| --warning-port-health       |   Define the conditions to match for the status to be WARNING (default: '%{health} eq "degraded"'). You can use the following variables: %{health}, %{port\_id}, %{node\_name}                                         |
| --critical-port-health      |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{health}, %{port\_id}, %{node\_name}                                                                             |
| --warning-* --critical-*    |   Thresholds. Can be: 'cpu-utilization', 'temperature-overrange', 'fan-failed', 'psu-failed'.                                                                                                                          |

</TabItem>
<TabItem value="Cp-Statistics" label="Cp-Statistics">

| Option            | Description                                                                                                                                                      |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                      |
| --warning-*       |   Warning threshold. Can be: 'timer', 'snapshot', 'lowerwater', 'highwater',  'logfull', 'back', 'flush', 'sync', 'lowvbuf', 'deferred', 'lowdatavecs'.          |
| --critical-*      |   Critical threshold. Can be: 'timer', 'snapshot', 'lowerwater', 'highwater',  'logfull', 'back', 'flush', 'sync', 'lowvbuf', 'deferred', 'lowdatavecs'.         |

</TabItem>
<TabItem value="Cpu-Load" label="Cpu-Load">

| Option     | Description                              |
|:-----------|:-----------------------------------------|
| --warning  |   Warning threshold in percent.          |
| --critical |   Critical threshold in percent.         |

</TabItem>
<TabItem value="File-System-Global" label="File-System-Global">

| Option                    | Description                                                                                                                                               |
|:--------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters         |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                               |
| --unknown-vserver-status  |   Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %{vserver\_status}, %{vserver\_name}    |
| --warning-vserver-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{vserver\_status}, %{vserver\_name}    |
| --critical-vserver-status |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{vserver\_status}, %{vserver\_name}   |
| --warning-*               |   Warning threshold. Can be: usage, inodes (%), compresssaved (%), dedupsaved (%).                                                                        |
| --critical-*              |   Critical threshold. Can be: usage, inodes (%), compresssaved (%), dedupsaved (%).                                                                       |
| --units                   |   Units of thresholds (default: '%') ('%', 'B').                                                                                                          |
| --free                    |   Thresholds are on free space left.                                                                                                                      |
| --filter-name             |   Filter by filesystem name (can be a regexp).                                                                                                            |
| --filter-vserver          |   Filter by vserver name (can be a regexp).                                                                                                               |
| --filter-vserver-state    |   Filter by vserver state (can be a regexp).                                                                                                              |
| --filter-type             |   Filter filesystem type (can be a regexp. Example: 'flexibleVolume\|aggregate').                                                                         |

</TabItem>
<TabItem value="Global-status" label="Global-status">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-* --critical-* |   Thresholds. Can be: 'read', 'write'.                                                                                        |

</TabItem>
<TabItem value="Ndmpsessions" label="Ndmpsessions">

| Option     | Description                   |
|:-----------|:------------------------------|
| --warning  |   Warning threshold.          |
| --critical |   Critical threshold.         |

</TabItem>
<TabItem value="Nvram" label="Nvram">

| Option               | Description                                                                                                                                                                                                           |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,status,regexp). Example: --threshold-overload='nvram,CRITICAL,^(?!(ok)$)'         |

</TabItem>
<TabItem value="Partner-Status" label="Partner-Status">

| Option               | Description                                                                                                                                                                                                             |
|:---------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,status,regexp). Example: --threshold-overload='partner,CRITICAL,^(?!(ok)$)'         |

</TabItem>
<TabItem value="Plexes" label="Plexes">

| Option                   | Description                                                                                                                                                                  |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                  |
| --filter-name            |   Filter plexes by name.                                                                                                                                                     |
| --filter-aggregate       |   Filter plexes by aggregate name.                                                                                                                                           |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{status}, %{name}, %{aggregate}                                         |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%{status} eq "resyncing"'). You can use the following variables: %{status}, %{name}, %{aggregate}   |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%{status}  eq "offline"'). You can use the following variables: %{status}, %{name}, %{aggregate}   |
| --warning-* --critical-* |   Thresholds. Can be: 'total-online', 'total-offline', 'total-resyncing', 'resyncing'.                                                                                       |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Option                   | Description                                                                                                                                                                                                                                     |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                     |
| --memcached              |   Memcached server to use (only one server).                                                                                                                                                                                                    |
| --redis-server           |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                               |
| --redis-attribute        |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                       |
| --redis-db               |   Set Redis database index.                                                                                                                                                                                                                     |
| --failback-file          |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                          |
| --memexpiration          |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                |
| --statefile-dir          |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                        |
| --statefile-suffix       |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                |
| --statefile-concat-cwd   |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.   |
| --statefile-format       |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                         |
| --statefile-key          |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                  |
| --statefile-cipher       |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                            |
| --filter-index           |   Filter by index (identified entry in the /etc/quotas) (can be a regexp).                                                                                                                                                                      |
| --filter-vserver         |   Filter by vserver name (can be a regexp).                                                                                                                                                                                                     |
| --filter-volume          |   Filter by volume name (can be a regexp).                                                                                                                                                                                                      |
| --filter-qtree           |   Filter by qtree name (can be a regexp).                                                                                                                                                                                                       |
| --cache                  |   Use cache file to store quota volume/vserver/qtree information.                                                                                                                                                                               |
| --cache-time             |   Time in minutes before reloading cache file (default: 180).                                                                                                                                                                                   |
| --warning-* --critical-* |   Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.                                                                                                                                                                    |
| --not-kbytes             |   If qrV264KBytesUsed and qrV264KBytesLimit OIDs are not really KBytes.                                                                                                                                                                         |

</TabItem>
<TabItem value="Share-Calls" label="Share-Calls">

| Option            | Description                                                                                                                   |
|:------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --warning-*       |   Warning threshold. Can be: 'cifs', 'nfs'.                                                                                   |
| --critical-*      |   Critical threshold. Can be: 'cifs', 'nfs'.                                                                                  |

</TabItem>
<TabItem value="Shelf" label="Shelf">

| Option               | Description                                                                                                                                                                                                                    |
|:---------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'psu', 'fan', 'communication', 'voltage', 'temperature', 'electronics', 'raid'.                                                                                            |
| --filter             |   Exclude the items given as a comma-separated list (example: --filter=fan --filter=psu). You can also exclude items from specific instances: --filter=psu,41239F00647-A                                                       |
| --absent-problem     |   Return an error if an entity is not 'present' (default is skipping) (comma separated list) Can be specific or global: --absent-problem=fan,41239F00647-fan02                                                                 |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                   |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='gfc,CRITICAL,^(?!(Online)$)'   |
| --warning            |   Set warning threshold for temperature, fan, voltage (syntax: type,regexp,threshold) Example: --warning='41239F00647-vimm46,20' --warning='41239F00647-vimm5.*,30'                                                            |
| --critical           |   Set critical threshold for temperature, fan, voltage (syntax: type,regexp,threshold) Example: --critical='temperature,.*,25' --warning='temperature,.*,35'                                                                   |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                 |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                |

</TabItem>
<TabItem value="Snapshot-Age-Global" label="Snapshot-Age-Global">

| Option     | Description                                                                  |
|:-----------|:-----------------------------------------------------------------------------|
| --warning  |   Warning threshold in seconds.                                              |
| --critical |   Critical threshold in seconds.                                             |
| --name     |   Set the snapshot name.                                                     |
| --regexp   |   Allows to use regexp to filter snapshot name (with option --name).         |

</TabItem>
<TabItem value="Snapshot-Age-Name" label="Snapshot-Age-Name">

| Option     | Description                                                                  |
|:-----------|:-----------------------------------------------------------------------------|
| --warning  |   Warning threshold in seconds.                                              |
| --critical |   Critical threshold in seconds.                                             |
| --name     |   Set the snapshot name.                                                     |
| --regexp   |   Allows to use regexp to filter snapshot name (with option --name).         |

</TabItem>
<TabItem value="Volume-Options-Generic" label="Volume-Options-Generic">

| Option             | Description                                                                                                                                       |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters  |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                       |
| --filter-vserver   |   Filter volumes by vserver name (can be a regexp).                                                                                               |
| --filter-name      |   Filter on volume name (can be a regexp).                                                                                                        |
| --filter-status    |   Filter on volume status (can be a regexp).                                                                                                      |
| --unknown-status   |   Define the conditions to match for the status to be UNKNOWN (default: ''). You can use the following variables: %{status}, %{display}           |
| --warning-status   |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{status}, %{display}           |
| --critical-status  |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{status}, %{display}          |
| --unknown-options  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{options}, %{display}          |
| --warning-options  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %{options}, %{display}          |
| --critical-options |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %{options}, %{display}         |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_netapp_ontap_snmp.pl \
	--plugin=storage::netapp::ontap::snmp::plugin \
	--mode=volumeoptions \
	--help
```
