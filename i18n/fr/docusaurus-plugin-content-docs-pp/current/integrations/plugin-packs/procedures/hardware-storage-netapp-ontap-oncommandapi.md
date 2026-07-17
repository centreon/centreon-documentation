---
id: hardware-storage-netapp-ontap-oncommandapi
title: NetApp Ontap OnCommand API
description: "Supervisez le stockage NetApp ONTAP via l'API OnCommand : agrégats, clusters, disques, LUNs, nœuds, qtrees, snapmirror et volumes."
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **NetApp Ontap OnCommand API** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **NetApp Ontap OnCommand API** apporte un modèle d'hôte :

* **HW-Storage-NetApp-Ontap-Oncommandapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-NetApp-Ontap-Oncommandapi-custom" label="HW-Storage-NetApp-Ontap-Oncommandapi-custom">

| Alias                       | Modèle de service                                                       | Description                                             | Découverte |
|:----------------------------|:------------------------------------------------------------------------|:--------------------------------------------------------|:----------:|
| Aggregate-Usage-Global      | HW-Storage-NetApp-Ontap-Aggregate-Usage-Global-Oncommandapi-custom      | Contrôle l'utilisation d'un ou plusieurs agrégats      |            |
| Cluster-Io-Global           | HW-Storage-NetApp-Ontap-Cluster-Io-Global-Oncommandapi-custom           | Contrôle l'utilisation des IO d'un ou plusieurs clusters |            |
| Cluster-Status-Global       | HW-Storage-NetApp-Ontap-Cluster-Status-Global-Oncommandapi-custom       | Contrôle le statut d'un ou plusieurs clusters            |            |
| Disk-Failed                 | HW-Storage-NetApp-Ontap-Disk-Failed-Oncommandapi-custom                 | Contrôle le nombre de disques en échec et en pré-échec   |            |
| Lun-Online                  | HW-Storage-NetApp-Ontap-Lun-Online-Oncommandapi-custom                  | Contrôle l'état de connexion des LUNs                   |            |
| Node-Failover-Status-Global | HW-Storage-NetApp-Ontap-Node-Failover-Status-Global-Oncommandapi-custom | Contrôle l'état du failover d'un ou plusieurs noeuds    |            |
| Node-Hardware-Status-Global | HW-Storage-NetApp-Ontap-Node-Hardware-Status-Global-Oncommandapi-custom | Contrôle l'état matériel d'un ou plusieurs noeuds       |            |
| Qtree-Status-Global         | HW-Storage-NetApp-Ontap-Qtree-Status-Global-Oncommandapi-custom         | Contrôle l'état d'un ou plusieurs qtrees                |            |
| Snapmirror-Usage-Global     | HW-Storage-NetApp-Ontap-Snapmirror-Usage-Global-Oncommandapi-custom     | Contrôle les performances d'un ou plusieurs snapmirror  |            |
| Volumes                     | HW-Storage-NetApp-Ontap-Volumes-Oncommandapi-custom                     | Contrôle les volumes                                    |      X     |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-NetApp-Ontap-Oncommandapi-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias                        | Modèle de service                                                        | Description                                              |
|:-----------------------------|:-------------------------------------------------------------------------|:---------------------------------------------------------|
| Aggregate-Raid-Status-Global | HW-Storage-NetApp-Ontap-Aggregate-Raid-Status-Global-Oncommandapi-custom | Contrôle l'état du raid d'un ou plusieurs agrégats      |
| Aggregate-Status-Global      | HW-Storage-NetApp-Ontap-Aggregate-Status-Global-Oncommandapi-custom      | Contrôle l'état d'un ou plusieurs agrégats              |
| Cluster-Usage-Global         | HW-Storage-NetApp-Ontap-Cluster-Usage-Global-Oncommandapi-custom         | Contrôle l'utilisation d'un ou plusieurs clusters         |
| Disk-Spare                   | HW-Storage-NetApp-Ontap-Disk-Spare-Oncommandapi-custom                   | Contrôle le nombre de disque de rechange et leur état       |
| FC-Port-Status-Global        | HW-Storage-NetApp-Ontap-Fc-Port-Status-Global-Oncommandapi-custom        | Contrôle le statut d'une ou plusieurs port fibre channels |
| Lun-Alignment                | HW-Storage-NetApp-Ontap-Lun-Alignment-Oncommandapi-custom                | Contrôle les problèmes d'alignement des LUNs             |
| Lun-Usage-Global             | HW-Storage-NetApp-Ontap-Lun-Usage-Global-Oncommandapi-custom             | Contrôle l'utilisation des LUNs                          |
| Snapmirror-Status-Global     | HW-Storage-NetApp-Ontap-Snapmirror-Status-Global-Oncommandapi-custom     | Contrôle l'état d'un ou plusieurs snapmirror             |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                                       | Description                                                                         |
|:------------------------------------------------------|:------------------------------------------------------------------------------------|
| HW-Storage-NetApp-Ontap-Oncommandapi-Svm-Volumes-Name | Découvre les partitions du disque des machines virtuelles en utilisant son nom et supervise l'espace occupé |
| HW-Storage-NetApp-Ontap-Oncommandapi-Volumes-Name     | Découvre les partitions du disque en utilisant son nom et supervise l'espace occupé |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Aggregate-Raid-Status-Global" label="Aggregate-Raid-Status-Global">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Aggregate-Status-Global" label="Aggregate-Status-Global">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Aggregate-Usage-Global" label="Aggregate-Usage-Global">

| Nom                   | Unité |
|:----------------------|:------|
| *aggregates*#used     | B     |
| *aggregates*#snapshot | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cluster-Io-Global" label="Cluster-Io-Global">

| Nom                         | Unité |
|:----------------------------|:------|
| *clusters*#total-throughput | B/s   |
| *clusters*#total-ops        | ops/s |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cluster-Status-Global" label="Cluster-Status-Global">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Cluster-Usage-Global" label="Cluster-Usage-Global">

| Nom                                  | Unité |
|:-------------------------------------|:------|
| *clusters*#max-node-utilization      | %     |
| *clusters*#max-aggregate-utilization | %     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Disk-Failed" label="Disk-Failed">

| Nom        | Unité |
|:-----------|:------|
| failed     | N/A   |
| pre-failed | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Disk-Spare" label="Disk-Spare">

| Nom        | Unité |
|:-----------|:------|
| spare      | N/A   |
| zeroed     | N/A   |
| not-zeroed | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="FC-Port-Status-Global" label="FC-Port-Status-Global">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Lun-Alignment" label="Lun-Alignment">

| Nom                 | Unité |
|:--------------------|:------|
| aligned             | N/A   |
| misaligned          | N/A   |
| possibly-misaligned | N/A   |
| indeterminate       | N/A   |
| partial-writes      | N/A   |
| not-mapped          | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Lun-Online" label="Lun-Online">

| Nom        | Unité |
|:-----------|:------|
| online     | N/A   |
| not-online | N/A   |
| mapped     | N/A   |
| not-mapped | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Lun-Usage-Global" label="Lun-Usage-Global">

| Nom         | Unité |
|:------------|:------|
| *luns*#used | B     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Node-Failover-Status-Global" label="Node-Failover-Status-Global">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Node-Hardware-Status-Global" label="Node-Hardware-Status-Global">

| Nom         | Unité |
|:------------|:------|
| status      | N/A   |
| failed-fans | N/A   |
| failed-psu  | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Qtree-Status-Global" label="Qtree-Status-Global">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Snapmirror-Status-Global" label="Snapmirror-Status-Global">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Snapmirror-Usage-Global" label="Snapmirror-Usage-Global">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| *snapmirrors1*#last-transfer-duration | s     |
| *snapmirrors2*#last-transfer-duration | s     |
| *snapmirrors1*#last-transfer-size     | B     |
| *snapmirrors2*#last-transfer-size     | B     |
| *snapmirrors1*#lag-time               | s     |
| *snapmirrors2*#lag-time               | s     |

> Pour obtenir ce nouveau format de métrique, incluez la valeur **--use-new-perfdata** dans la macro de service **EXTRAOPTIONS**.

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Nom                                                   | Unité |
|:------------------------------------------------------|:------|
| status                                                | N/A   |
| *volumes*~volume.space.usage.bytes                    | B     |
| *volumes*~volume.space.free.bytes                     | B     |
| *volumes*~volume.space.usage.percentage               | %     |
| *volumes*~volume.inodes.usage.percentage              | %     |
| *volumes*~volume.space.compression.saved.percentage   | %     |
| *volumes*~volume.space.deduplication.saved.percentage | %     |
| *volumes*~volume.snapshots.reserve.usage.percentage   | %     |
| read-iops                                             | N/A   |
| write-iops                                            | N/A   |
| other-iops                                            | N/A   |
| *volumes*~volume.io.average.latency.milliseconds      | ms    |
| *volumes*~volume.io.read.latency.milliseconds         | ms    |
| *volumes*~volume.io.write.latency.milliseconds        | ms    |
| *volumes*~volume.io.other.latency.milliseconds        | ms    |

</TabItem>
</Tabs>

## Prérequis

### Réseau
- Connectivité réseau entre le collecteur et le système NetApp
- Port **443 (HTTPS)** ouvert entre le superviseur et le contrôleur ONTAP
- Résolution DNS fonctionnelle vers le système NetApp (ou IP fixe renseignée)

### NetApp / ONTAP
- Créer un compte **read-only** dédié à la supervision (bonne pratique sécurité)
- L'IP de management du **cluster** doit être accessible (cluster management LIF)
- Vérifier que l'accès **ontapi** et/ou **http** est activé sur le compte

voir [Documentation API REST ONTAP](https://docs.netapp.com/us-en/ontap-automation/)

### OnCommand
- **OnCommand API Services** installé et accessible (si couche intermédiaire utilisée)
- Version compatible avec la version ONTAP en production
- Certificat SSL valide ou acceptance du certificat auto-signé configurée côté collecteur



## Installer le connecteur de supervision

### Pack

1. Si la plateforme est configurée avec une licence *online*, l'installation d'un paquet
n'est pas requise pour voir apparaître le connecteur dans le menu **Configuration > Connecteurs > Connecteurs de supervision**.
Au contraire, si la plateforme utilise une licence *offline*, installez le paquet
sur le **serveur central** via la commande correspondant au gestionnaire de paquets
associé à sa distribution :

<Tabs groupId="sync">
<TabItem value="Alma / RHEL / Oracle Linux 8" label="Alma / RHEL / Oracle Linux 8">

```bash
dnf install centreon-pack-hardware-storage-netapp-ontap-oncommandapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-netapp-ontap-oncommandapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-netapp-ontap-oncommandapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-netapp-ontap-oncommandapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **NetApp Ontap OnCommand API**
depuis l'interface web et le menu **Configuration > Connecteurs > Connecteurs de supervision**.

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
dnf install centreon-plugin-Hardware-Storage-Netapp-Ontap-Oncommandapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Netapp-Ontap-Oncommandapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-netapp-ontap-oncommandapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Oncommandapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-NetApp-Ontap-Oncommandapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro                    | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| ONCOMMANDAPIUSERNAME     | OnCommand API username                                                                                                                             |                   |             |
| ONCOMMANDAPIPASSWORD     | OnCommand API password                                                                                                                             |                   |             |
| ONCOMMANDAPIPROTO        | Specify https if needed                                                                                                                            | https             |             |
| ONCOMMANDAPIPORT         | OnCommand API port                                                                                                                                 | 8443              |             |
| ONCOMMANDAPIURLPATH      | OnCommand API url path                                                                                                                             | /api/4.0/ontap    |             |
| ONCOMMANDAPIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Aggregate-Raid-Status-Global" label="Aggregate-Raid-Status-Global">

| Macro          | Description                                                                                                                                      | Valeur par défaut        | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:-----------:|
| FILTERNAME     | Threshold                                                                                                                                        |                          |             |
| FILTERNODE     | Threshold                                                                                                                                        |                          |             |
| FILTERCLUSTER  | Threshold                                                                                                                                        |                          |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{type\}, %\{size\}             | %\{status\} !~ /normal/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{type\}, %\{size\}              |                          |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                |             |

</TabItem>
<TabItem value="Aggregate-Status-Global" label="Aggregate-Status-Global">

| Macro          | Description                                                                                                                                      | Valeur par défaut       | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERNAME     | Threshold                                                                                                                                        |                         |             |
| FILTERNODE     | Threshold                                                                                                                                        |                         |             |
| FILTERCLUSTER  | Threshold                                                                                                                                        |                         |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{mirror\_status\}               | %\{state\} !~ /online/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{mirror\_status\}                |                         |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose               |             |

</TabItem>
<TabItem value="Aggregate-Usage-Global" label="Aggregate-Usage-Global">

| Macro            | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS            | Units of thresholds ('%', 'B')                                                                                                                   | %                 |             |
| FILTERNAME       | Threshold                                                                                                                                        |                   |             |
| FILTERNODE       | Threshold                                                                                                                                        |                   |             |
| FILTERCLUSTER    | Threshold                                                                                                                                        |                   |             |
| FILTERSTATE      | Threshold                                                                                                                                        |                   |             |
| FILTERTYPE       | Threshold                                                                                                                                        |                   |             |
| WARNINGSNAPSHOT  | Threshold                                                                                                                                        |                   |             |
| CRITICALSNAPSHOT | Threshold                                                                                                                                        |                   |             |
| WARNINGUSAGE     | Threshold                                                                                                                                        |                   |             |
| CRITICALUSAGE    | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Cluster-Io-Global" label="Cluster-Io-Global">

| Macro                   | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME              | Filter snapmirror name (can be a regexp)                                                                                                         |                   |             |
| WARNINGTOTALOPS         | Threshold                                                                                                                                        |                   |             |
| CRITICALTOTALOPS        | Threshold                                                                                                                                        |                   |             |
| WARNINGTOTALTHROUGHPUT  | Threshold                                                                                                                                        |                   |             |
| CRITICALTOTALTHROUGHPUT | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Cluster-Status-Global" label="Cluster-Status-Global">

| Macro          | Description                                                                                                                                                                          | Valeur par défaut    | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| FILTERNAME     | Filter snapmirror name (can be a regexp)                                                                                                                                             |                      |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{metro\_cluster\_mode\}, %\{metro\_cluster\_configuration\_state\} | %\{status\} !~ /ok/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{metro\_cluster\_mode\}, %\{metro\_cluster\_configuration\_state\}  |                      |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                     | --verbose            |             |

</TabItem>
<TabItem value="Cluster-Usage-Global" label="Cluster-Usage-Global">

| Macro                           | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                      | Filter snapmirror name (can be a regexp)                                                                                                         |                   |             |
| WARNINGMAXAGGREGATEUTILIZATION  | Threshold                                                                                                                                        |                   |             |
| CRITICALMAXAGGREGATEUTILIZATION | Threshold                                                                                                                                        |                   |             |
| WARNINGMAXNODEUTILIZATION       | Threshold                                                                                                                                        |                   |             |
| CRITICALMAXNODEUTILIZATION      | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS                    | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Disk-Failed" label="Disk-Failed">

| Macro             | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNODE        | Threshold                                                                                                                                        |                   |             |
| FILTERCLUSTER     | Threshold                                                                                                                                        |                   |             |
| WARNINGFAILED     | Threshold                                                                                                                                        |                   |             |
| CRITICALFAILED    | Threshold                                                                                                                                        |                   |             |
| WARNINGPREFAILED  | Threshold                                                                                                                                        |                   |             |
| CRITICALPREFAILED | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Disk-Spare" label="Disk-Spare">

| Macro             | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNODE        | Threshold                                                                                                                                        |                   |             |
| FILTERCLUSTER     | Threshold                                                                                                                                        |                   |             |
| WARNINGNOTZEROED  | Threshold                                                                                                                                        |                   |             |
| CRITICALNOTZEROED | Threshold                                                                                                                                        |                   |             |
| WARNINGSPARE      | Threshold                                                                                                                                        |                   |             |
| CRITICALSPARE     | Threshold                                                                                                                                        |                   |             |
| WARNINGZEROED     | Threshold                                                                                                                                        |                   |             |
| CRITICALZEROED    | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="FC-Port-Status-Global" label="FC-Port-Status-Global">

| Macro          | Description                                                                                                                                      | Valeur par défaut                                     | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| FILTERNAME     | Threshold                                                                                                                                        |                                                       |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}, %\{state\}                       | %\{status\} !~ /online/i \|\| %\{state\} !~ /online/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{state\}                         |                                                       |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                                             |             |

</TabItem>
<TabItem value="Lun-Alignment" label="Lun-Alignment">

| Macro                      | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERVOLUME               | Threshold                                                                                                                                        |                   |             |
| WARNINGALIGNED             | Threshold                                                                                                                                        |                   |             |
| CRITICALALIGNED            | Threshold                                                                                                                                        |                   |             |
| WARNINGINDETERMINATE       | Threshold                                                                                                                                        |                   |             |
| CRITICALINDETERMINATE      | Threshold                                                                                                                                        |                   |             |
| WARNINGMISALIGNED          | Threshold                                                                                                                                        |                   |             |
| CRITICALMISALIGNED         | Threshold                                                                                                                                        |                   |             |
| WARNINGNOTMAPPED           | Threshold                                                                                                                                        |                   |             |
| CRITICALNOTMAPPED          | Threshold                                                                                                                                        |                   |             |
| WARNINGPARTIALWRITES       | Threshold                                                                                                                                        |                   |             |
| CRITICALPARTIALWRITES      | Threshold                                                                                                                                        |                   |             |
| WARNINGPOSSIBLYMISALIGNED  | Threshold                                                                                                                                        |                   |             |
| CRITICALPOSSIBLYMISALIGNED | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS               | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Lun-Online" label="Lun-Online">

| Macro             | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERVOLUME      | Threshold                                                                                                                                        |                   |             |
| WARNINGMAPPED     | Threshold                                                                                                                                        |                   |             |
| CRITICALMAPPED    | Threshold                                                                                                                                        |                   |             |
| WARNINGNOTMAPPED  | Threshold                                                                                                                                        |                   |             |
| CRITICALNOTMAPPED | Threshold                                                                                                                                        |                   |             |
| WARNINGNOTONLINE  | Threshold                                                                                                                                        |                   |             |
| CRITICALNOTONLINE | Threshold                                                                                                                                        |                   |             |
| WARNINGONLINE     | Threshold                                                                                                                                        |                   |             |
| CRITICALONLINE    | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Lun-Usage-Global" label="Lun-Usage-Global">

| Macro         | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:--------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNITS         | Units of thresholds ('%', 'B')                                                                                                                   | %                 |             |
| FILTERNAME    | Filter lun name (can be a regexp)                                                                                                                |                   |             |
| WARNINGUSAGE  | Warning threshold                                                                                                                                |                   |             |
| CRITICALUSAGE | Critical threshold                                                                                                                               |                   |             |
| EXTRAOPTIONS  | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Node-Failover-Status-Global" label="Node-Failover-Status-Global">

| Macro          | Description                                                                                                                                                                     | Valeur par défaut                                          | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------|:-----------:|
| FILTERNAME     | Filter node (can be a regexp)                                                                                                                                                   |                                                            |             |
| FILTERCLUSTER  | Filter node (can be a regexp)                                                                                                                                                   |                                                            |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{interconnect\}, %\{current\_mode\}, %\{take\_over\_possible\} | %\{state\} !~ /connected/i \|\| %\{interconnect\} !~ /up/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{interconnect\}, %\{current\_mode\}, %\{take\_over\_possible\}  |                                                            |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                | --verbose                                                  |             |

</TabItem>
<TabItem value="Node-Hardware-Status-Global" label="Node-Hardware-Status-Global">

| Macro              | Description                                                                                                                                             | Valeur par défaut                                                                                                                                        | Obligatoire |
|:-------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------:|
| FILTERNAME         | Filter node (can be a regexp)                                                                                                                           |                                                                                                                                                          |             |
| FILTERCLUSTER      | Filter node (can be a regexp)                                                                                                                           |                                                                                                                                                          |             |
| WARNINGFAILEDFANS  | Threshold                                                                                                                                               |                                                                                                                                                          |             |
| CRITICALFAILEDFANS | Threshold                                                                                                                                               |                                                                                                                                                          |             |
| WARNINGFAILEDPSU   | Threshold                                                                                                                                               |                                                                                                                                                          |             |
| CRITICALFAILEDPSU  | Threshold                                                                                                                                               |                                                                                                                                                          |             |
| CRITICALSTATUS     | Define the conditions to match for the status to be CRITICAL . You can use the following variables: %\{status\}, %\{temperature\}, %\{battery\_status\} | %\{status\} =~ /not healthy/i \|\| %\{temperature\} !~ /ok/i \|\| %\{battery\_status\} !~ /battery\_ok\|battery\_fully\_charge\|battery\_over\_charged/i |             |
| WARNINGSTATUS      | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{status\}, %\{temperature\}, %\{battery\_status\}   |                                                                                                                                                          |             |
| EXTRAOPTIONS       | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).        | --verbose                                                                                                                                                |             |

</TabItem>
<TabItem value="Qtree-Status-Global" label="Qtree-Status-Global">

| Macro          | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:---------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME     | Threshold                                                                                                                                        |                   |             |
| FILTERVOLUME   | Threshold                                                                                                                                        |                   |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}                                     |                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{status\}                                   |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Snapmirror-Status-Global" label="Snapmirror-Status-Global">

| Macro          | Description                                                                                                                                                                                              | Valeur par défaut                                                | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------------------------------------------------|:-----------:|
| FILTERNAME     | Filter snapmirror name (can be a regexp)                                                                                                                                                                 |                                                                  |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /snapmirrored/i \|\| %\{update\} =~ /not healthy/i'). You can use the following variables: %\{state\}, %\{update\} | %\{state\} !~ /snapmirrored/i \|\| %\{update\} =~ /not healthy/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}, %\{update\}                                                                  |                                                                  |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                       | --verbose                                                        |             |

</TabItem>
<TabItem value="Snapmirror-Usage-Global" label="Snapmirror-Usage-Global">

| Macro                        | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                   | Filter snapmirror name (can be a regexp)                                                                                                         |                   |             |
| WARNINGLAGTIME               | Threshold                                                                                                                                        |                   |             |
| CRITICALLAGTIME              | Threshold                                                                                                                                        |                   |             |
| WARNINGLASTTRANSFERDURATION  | Threshold                                                                                                                                        |                   |             |
| CRITICALLASTTRANSFERDURATION | Threshold                                                                                                                                        |                   |             |
| WARNINGLASTTRANSFERSIZE      | Threshold                                                                                                                                        |                   |             |
| CRITICALLASTTRANSFERSIZE     | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Macro                             | Description                                                                                                                                      | Valeur par défaut       | Obligatoire |
|:----------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERVOLUMEKEY                   | Filter volumes by volume key                                                                                                                     |                         |             |
| FILTERVOLUMENAME                  | Filter volumes by volume name                                                                                                                    |                         |             |
| FILTERVOLUMESTATE                 | Filter volumes by volume state                                                                                                                   |                         |             |
| FILTERVOLUMESTYLE                 | Filter volumes by volume style                                                                                                                   |                         |             |
| FILTERVOLUMETYPE                  | Filter volumes by volume type                                                                                                                    |                         |             |
| FILTERSVMNAME                     | Filter volumes by storage virtual machine name                                                                                                   |                         |             |
| WARNINGAVERAGELATENCY             | Threshold                                                                                                                                        |                         |             |
| CRITICALAVERAGELATENCY            | Threshold                                                                                                                                        |                         |             |
| WARNINGCOMPRESSIONSAVEDPRCT       | Threshold                                                                                                                                        |                         |             |
| CRITICALCOMPRESSIONSAVEDPRCT      | Threshold                                                                                                                                        |                         |             |
| WARNINGDEDUPLICATIONSAVEDPRCT     | Threshold                                                                                                                                        |                         |             |
| CRITICALDEDUPLICATIONSAVEDPRCT    | Threshold                                                                                                                                        |                         |             |
| WARNINGINODESUSAGEPRCT            | Threshold                                                                                                                                        |                         |             |
| CRITICALINODESUSAGEPRCT           | Threshold                                                                                                                                        |                         |             |
| WARNINGOTHERIOPS                  | Threshold                                                                                                                                        |                         |             |
| CRITICALOTHERIOPS                 | Threshold                                                                                                                                        |                         |             |
| WARNINGOTHERLATENCY               | Threshold                                                                                                                                        |                         |             |
| CRITICALOTHERLATENCY              | Threshold                                                                                                                                        |                         |             |
| WARNINGREADIOPS                   | Threshold                                                                                                                                        |                         |             |
| CRITICALREADIOPS                  | Threshold                                                                                                                                        |                         |             |
| WARNINGREADLATENCY                | Threshold                                                                                                                                        |                         |             |
| CRITICALREADLATENCY               | Threshold                                                                                                                                        |                         |             |
| WARNINGSNAPSHOTSRESERVEUSAGEPRCT  | Threshold                                                                                                                                        |                         |             |
| CRITICALSNAPSHOTSRESERVEUSAGEPRCT | Threshold                                                                                                                                        |                         |             |
| WARNINGSPACEUSAGE                 | Threshold                                                                                                                                        |                         |             |
| CRITICALSPACEUSAGE                | Threshold                                                                                                                                        |                         |             |
| WARNINGSPACEUSAGEFREE             | Threshold                                                                                                                                        |                         |             |
| CRITICALSPACEUSAGEFREE            | Threshold                                                                                                                                        |                         |             |
| WARNINGSPACEUSAGEPRCT             | Threshold                                                                                                                                        |                         |             |
| CRITICALSPACEUSAGEPRCT            | Threshold                                                                                                                                        |                         |             |
| CRITICALSTATUS                    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %\{state\}, %\{volumeName\}, %\{svmName\}     | %\{state\} !~ /online/i |             |
| WARNINGSTATUS                     | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{volumeName\}, %\{svmName\}      |                         |             |
| WARNINGWRITEIOPS                  | Threshold                                                                                                                                        |                         |             |
| CRITICALWRITEIOPS                 | Threshold                                                                                                                                        |                         |             |
| WARNINGWRITELATENCY               | Threshold                                                                                                                                        |                         |             |
| CRITICALWRITELATENCY              | Threshold                                                                                                                                        |                         |             |
| EXTRAOPTIONS                      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose               |             |

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
/usr/lib/centreon/plugins/centreon_netapp_ontap_oncommandapi.pl \
	--plugin=storage::netapp::ontap::oncommandapi::plugin \
	--mode=snapmirror-usage \
	--hostname='10.0.0.1' \
	--url-path='/api/4.0/ontap' \
	--port='8443' \
	--proto='https' \
	--username='' \
	--password=''   \
	--filter-name='' \
	--warning-last-transfer-duration='' \
	--critical-last-transfer-duration='' \
	--warning-last-transfer-size='' \
	--critical-last-transfer-size='' \
	--warning-lag-time='' \
	--critical-lag-time='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All snap mirrors usage are ok | 'snapmirrors1#last-transfer-duration'=79100s;;;0; 'snapmirrors2#last-transfer-duration'=95553s;;;0; 'snapmirrors1#last-transfer-size'=56878B;;;0; 'snapmirrors2#last-transfer-size'=18816B;;;0; 'snapmirrors1#lag-time'=9826s;;;0; 'snapmirrors2#lag-time'=81822s;;;0; 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#contrôles-http-et-api)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_netapp_ontap_oncommandapi.pl \
	--plugin=storage::netapp::ontap::oncommandapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                        | Modèle de service associé                                                |
|:------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------------------|
| aggregate-raid-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/aggregateraidstatus.pm)] | HW-Storage-NetApp-Ontap-Aggregate-Raid-Status-Global-Oncommandapi-custom |
| aggregate-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/aggregatestatus.pm)]          | HW-Storage-NetApp-Ontap-Aggregate-Status-Global-Oncommandapi-custom      |
| aggregate-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/aggregateusage.pm)]            | HW-Storage-NetApp-Ontap-Aggregate-Usage-Global-Oncommandapi-custom       |
| cluster-io [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/clusterio.pm)]                      | HW-Storage-NetApp-Ontap-Cluster-Io-Global-Oncommandapi-custom            |
| cluster-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/clusterstatus.pm)]              | HW-Storage-NetApp-Ontap-Cluster-Status-Global-Oncommandapi-custom        |
| cluster-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/clusterusage.pm)]                | HW-Storage-NetApp-Ontap-Cluster-Usage-Global-Oncommandapi-custom         |
| disk-failed [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/diskfailed.pm)]                    | HW-Storage-NetApp-Ontap-Disk-Failed-Oncommandapi-custom                  |
| disk-spare [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/diskspare.pm)]                      | HW-Storage-NetApp-Ontap-Disk-Spare-Oncommandapi-custom                   |
| fc-port-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/fcportstatus.pm)]               | HW-Storage-NetApp-Ontap-Fc-Port-Status-Global-Oncommandapi-custom        |
| list-aggregates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/listaggregates.pm)]            | Not used in this Monitoring Connector                                    |
| list-clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/listclusters.pm)]                | Not used in this Monitoring Connector                                    |
| list-fc-ports [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/listfcports.pm)]                 | Not used in this Monitoring Connector                                    |
| list-luns [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/listluns.pm)]                        | Not used in this Monitoring Connector                                    |
| list-nodes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/listnodes.pm)]                      | Not used in this Monitoring Connector                                    |
| list-snapmirrors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/listsnapmirrors.pm)]          | Not used in this Monitoring Connector                                    |
| list-svm [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/listsvm.pm)]                          | Used for service discovery                                               |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/listvolumes.pm)]                  | Used for service discovery                                               |
| lun-alignment [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/lunalignment.pm)]                | HW-Storage-NetApp-Ontap-Lun-Alignment-Oncommandapi-custom                |
| lun-online [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/lunonline.pm)]                      | HW-Storage-NetApp-Ontap-Lun-Online-Oncommandapi-custom                   |
| lun-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/lunusage.pm)]                        | HW-Storage-NetApp-Ontap-Lun-Usage-Global-Oncommandapi-custom             |
| node-failover-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/nodefailoverstatus.pm)]   | HW-Storage-NetApp-Ontap-Node-Failover-Status-Global-Oncommandapi-custom  |
| node-hardware-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/nodehardwarestatus.pm)]   | HW-Storage-NetApp-Ontap-Node-Hardware-Status-Global-Oncommandapi-custom  |
| qtree-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/qtreestatus.pm)]                  | HW-Storage-NetApp-Ontap-Qtree-Status-Global-Oncommandapi-custom          |
| snapmirror-status [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/snapmirrorstatus.pm)]        | HW-Storage-NetApp-Ontap-Snapmirror-Status-Global-Oncommandapi-custom     |
| snapmirror-usage [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/snapmirrorusage.pm)]          | HW-Storage-NetApp-Ontap-Snapmirror-Usage-Global-Oncommandapi-custom      |
| volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/oncommandapi/mode/volumes.pm)]                           | HW-Storage-NetApp-Ontap-Volumes-Oncommandapi-custom                      |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|:-------------------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     |   Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --dyn-mode                                 |   Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                |   List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             |   Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  |   Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                         |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-exit                              |   Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --change-output-adv                        |   Replace short output and exit code based on a "if" condition using the following variables: short\_output, exit\_code. Variables must be written either %\{variable\} or %(variable). Example: adding --change-output-adv='%(short\_ouput) =~ /UNKNOWN: No daemon/,OK: No daemon,OK' will  change the following specific UNKNOWN result to an OK result.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --range-perfdata                           |   Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               |   Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 |   Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   |   Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      |   Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-xml                               |   Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              |   Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       |   Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              |   Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --disco-format                             |   Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               |   Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          |   Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          |   Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  =head1 DESCRIPTION  B\<output\>.  =cut                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --hostname                                 |   NetApp hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --url-path                                 |   OnCommand API url path (default: '/api/4.0/ontap')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --port                                     |   OnCommand API port (default: 8443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --username                                 |   OnCommand API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --password                                 |   OnCommand API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --timeout                                  |   Set HTTP timeout                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Aggregate-Raid-Status-Global" label="Aggregate-Raid-Status-Global">

| Option            | Description                                                                                                                                                                     |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-*        |   Filter volume. Can be: 'name', 'node', 'cluster' (can be a regexp).                                                                                                           |
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}, %\{type\}, %\{size\}                             |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /normal/i'). You can use the following variables: %\{status\}, %\{type\}, %\{size\}    |

</TabItem>
<TabItem value="Aggregate-Status-Global" label="Aggregate-Status-Global">

| Option            | Description                                                                                                                                                                  |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-*        |   Filter aggregate. Can be: 'name', 'node', 'cluster' (can be a regexp).                                                                                                     |
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}, %\{mirror\_status\}                            |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /online/i'). You can use the following variables: %\{state\}, %\{mirror\_status\}    |

</TabItem>
<TabItem value="Aggregate-Usage-Global" label="Aggregate-Usage-Global">

| Option       | Description                                                                              |
|:-------------|:-----------------------------------------------------------------------------------------|
| --filter-*   |   Filter volume. Can be: 'name', 'node', 'cluster', 'state', 'type' (can be a regexp).   |
| --warning-*  |   Warning threshold. Can be: 'usage', 'snapshot'.                                        |
| --critical-* |   Critical threshold. Can be: 'usage', 'snapshot'.                                       |
| --units      |   Units of thresholds (default: '%') ('%', 'B').                                         |
| --free       |   Thresholds are on free space left.                                                     |

</TabItem>
<TabItem value="Cluster-Io-Global" label="Cluster-Io-Global">

| Option        | Description                                                       |
|:--------------|:------------------------------------------------------------------|
| --filter-name |   Filter snapmirror name (can be a regexp).                       |
| --warning-*   |   Warning threshold. Can be: 'total-throughput', 'total-ops'.     |
| --critical-*  |   Critical threshold. Can be: 'total-throughput', 'total-ops'.    |

</TabItem>
<TabItem value="Cluster-Status-Global" label="Cluster-Status-Global">

| Option            | Description                                                                                                                                                                                                                 |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name     |   Filter snapmirror name (can be a regexp).                                                                                                                                                                                 |
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}, %\{metro\_cluster\_mode\}, %\{metro\_cluster\_configuration\_state\}                         |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /ok/i'). You can use the following variables: %\{status\}, %\{metro\_cluster\_mode\}, %\{metro\_cluster\_configuration\_state\}    |

</TabItem>
<TabItem value="Cluster-Usage-Global" label="Cluster-Usage-Global">

| Option        | Description                                                                           |
|:--------------|:--------------------------------------------------------------------------------------|
| --filter-name |   Filter snapmirror name (can be a regexp).                                           |
| --warning-*   |   Warning threshold. Can be: 'max-node-utilization', 'max-aggregate-utilization'.     |
| --critical-*  |   Critical threshold. Can be: 'max-node-utilization', 'max-aggregate-utilization'.    |

</TabItem>
<TabItem value="Disk-Failed" label="Disk-Failed">

| Option       | Description                                                   |
|:-------------|:--------------------------------------------------------------|
| --filter-*   |   Filter disk. Can be: 'node', 'cluster' (can be a regexp).   |
| --warning-*  |   Warning threshold. Can be: 'failed', 'pre-failed'.          |
| --critical-* |   Critical threshold. Can be: 'failed', 'pre-failed'.         |

</TabItem>
<TabItem value="Disk-Spare" label="Disk-Spare">

| Option       | Description                                                       |
|:-------------|:------------------------------------------------------------------|
| --filter-*   |   Filter disk. Can be: 'node', 'cluster' (can be a regexp).       |
| --warning-*  |   Warning threshold. Can be: 'spare', 'zeroed', 'not-zeroed'.     |
| --critical-* |   Critical threshold. Can be: 'spare', 'zeroed', 'not-zeroed'.    |

</TabItem>
<TabItem value="FC-Port-Status-Global" label="FC-Port-Status-Global">

| Option            | Description                                                                                                                                                                                        |
|:------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-*        |   Filter qtree. Can be: 'name', 'volume' (can be a regexp).                                                                                                                                        |
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}, %\{state\}                                                           |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} !~ /online/i \|\| %\{state\} !~ /online/i'). You can use the following variables: %\{status\}, %\{state\}    |

</TabItem>
<TabItem value="Lun-Alignment" label="Lun-Alignment">

| Option       | Description                                                                                                               |
|:-------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-*   |   Filter lun. Can be: 'volume' (can be a regexp).                                                                         |
| --warning-*  |   Warning threshold. 'aligned', 'misaligned', 'possibly-misaligned', 'indeterminate', 'partial-writes', 'not-mapped'.     |
| --critical-* |   Critical threshold. 'aligned', 'misaligned', 'possibly-misaligned', 'indeterminate', 'partial-writes', 'not-mapped'.    |

</TabItem>
<TabItem value="Lun-Online" label="Lun-Online">

| Option       | Description                                                                      |
|:-------------|:---------------------------------------------------------------------------------|
| --filter-*   |   Filter lun. Can be: 'volume' (can be a regexp).                                |
| --warning-*  |   Warning threshold. Can be: 'online', 'not-online', 'mapped', 'not-mapped'.     |
| --critical-* |   Critical threshold. Can be: 'online', 'not-online', 'mapped', 'not-mapped'.    |

</TabItem>
<TabItem value="Lun-Usage-Global" label="Lun-Usage-Global">

| Option           | Description                                        |
|:-----------------|:---------------------------------------------------|
| --filter-name    |   Filter lun name (can be a regexp).               |
| --warning-usage  |   Warning threshold.                               |
| --critical-usage |   Critical threshold.                              |
| --units          |   Units of thresholds (default: '%') ('%', 'B').   |
| --free           |   Thresholds are on free space left.               |

</TabItem>
<TabItem value="Node-Failover-Status-Global" label="Node-Failover-Status-Global">

| Option            | Description                                                                                                                                                                                                                                                  |
|:------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-*        |   Filter node. Can be: 'name', 'clusters' (can be a regexp).                                                                                                                                                                                                 |
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}, %\{interconnect\}, %\{current\_mode\}, %\{take\_over\_possible\}                                                               |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /connected/i \|\| %\{interconnect\} !~ /up/i'). You can use the following variables: %\{state\}, %\{interconnect\}, %\{current\_mode\}, %\{take\_over\_possible\}    |

</TabItem>
<TabItem value="Node-Hardware-Status-Global" label="Node-Hardware-Status-Global">

| Option            | Description                                                                                                                                                                                                                                                                                                                       |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-*        |   Filter node. Can be: 'name', 'clusters' (can be a regexp).                                                                                                                                                                                                                                                                      |
| --warning-*       |   Warning threshold. Can be: 'failed-fans', 'psu'.                                                                                                                                                                                                                                                                                |
| --critical-*      |   Critical threshold. Can be: 'failed-fans', 'psu'.                                                                                                                                                                                                                                                                               |
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{status\}, %\{temperature\}, %\{battery\_status\}                                                                                                                                                             |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /not healthy/i \|\| %\{temperature\} !~ /ok/i \|\| %\{battery\_status\} !~ /battery\_ok\|battery\_fully\_charge\|battery\_over\_charged/i'). You can use the following variables: %\{status\}, %\{temperature\}, %\{battery\_status\}    |

</TabItem>
<TabItem value="Qtree-Status-Global" label="Qtree-Status-Global">

| Option            | Description                                                                                                                       |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------|
| --filter-*        |   Filter qtree. Can be: 'name', 'volume' (can be a regexp).                                                                       |
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}      |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: ''). You can use the following variables: %\{status\}    |

</TabItem>
<TabItem value="Snapmirror-Status-Global" label="Snapmirror-Status-Global">

| Option            | Description                                                                                                                                                                                                   |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name     |   Filter snapmirror name (can be a regexp).                                                                                                                                                                   |
| --warning-status  |   Define the conditions to match for the status to be WARNING (default: ''). You can use the following variables: %\{state\}, %\{update\}                                                                     |
| --critical-status |   Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /snapmirrored/i \|\| %\{update\} =~ /not healthy/i'). You can use the following variables: %\{state\}, %\{update\}    |

</TabItem>
<TabItem value="Snapmirror-Usage-Global" label="Snapmirror-Usage-Global">

| Option        | Description                                                                                  |
|:--------------|:---------------------------------------------------------------------------------------------|
| --filter-name |   Filter snapmirror name (can be a regexp).                                                  |
| --warning-*   |   Warning threshold. Can be: 'last-transfer-duration', 'last-transfer-size', 'lag-time'.     |
| --critical-*  |   Critical threshold. Can be: 'last-transfer-duration', 'last-transfer-size', 'lag-time'.    |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Option                   | Description                                                                                                                                                                                                                                                                                              |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --add-metrics            |   Add IOPS and latency metrics.                                                                                                                                                                                                                                                                          |
| --filter-volume-key      |   Filter volumes by volume key.                                                                                                                                                                                                                                                                          |
| --filter-volume-name     |   Filter volumes by volume name.                                                                                                                                                                                                                                                                         |
| --filter-volume-state    |   Filter volumes by volume state.                                                                                                                                                                                                                                                                        |
| --filter-volume-style    |   Filter volumes by volume style.                                                                                                                                                                                                                                                                        |
| --filter-volume-type     |   Filter volumes by volume type.                                                                                                                                                                                                                                                                         |
| --filter-svm-name        |   Filter volumes by storage virtual machine name.                                                                                                                                                                                                                                                        |
| --unknown-status         |   Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{volumeName\}, %\{svmName\}                                                                                                                                                            |
| --warning-status         |   Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{volumeName\}, %\{svmName\}                                                                                                                                                            |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /online/i'). You can use the following variables: %\{state\}, %\{volumeName\}, %\{svmName\}                                                                                                                      |
| --warning-* --critical-* |   Thresholds. Can be: 'inodes-usage-prct', 'space-usage', 'space-usage-free', 'space-usage-prct', 'read-iops', 'write-iops', 'other-iops',  'average-latency', 'read-latency' 'write-latency,' 'other-latency', 'compression-saved-prct', 'deduplication-saved-prct', 'snapshots-reserve-usage-prct'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_netapp_ontap_oncommandapi.pl \
	--plugin=storage::netapp::ontap::oncommandapi::plugin \
	--mode=snapmirror-usage \
	--help
```
