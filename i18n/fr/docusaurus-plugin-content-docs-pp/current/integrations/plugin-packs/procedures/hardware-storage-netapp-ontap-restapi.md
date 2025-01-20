---
id: hardware-storage-netapp-ontap-restapi
title: NetApp Ontap Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **NetApp Ontap Rest API** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **NetApp Ontap Rest API** apporte un modèle d'hôte :

* **HW-Storage-NetApp-Ontap-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-NetApp-Ontap-Restapi-custom" label="HW-Storage-NetApp-Ontap-Restapi-custom">

| Alias      | Modèle de service                                 | Description                             |
|:-----------|:--------------------------------------------------|:----------------------------------------|
| Aggregates | HW-Storage-NetApp-Ontap-Aggregates-Restapi-custom | Contrôle l'état des agrégats de disques |
| Cluster    | HW-Storage-NetApp-Ontap-Cluster-Restapi-custom    | Contrôle l'état du cluster              |
| Hardware   | HW-Storage-NetApp-Ontap-Hardware-Restapi-custom   | Contrôle le matériel                    |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-NetApp-Ontap-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias       | Modèle de service                                  | Description              | Découverte |
|:------------|:---------------------------------------------------|:-------------------------|:----------:|
| Luns        | HW-Storage-NetApp-Ontap-Luns-Restapi-custom        | Contrôle les LUNs        |            |
| Quotas      | HW-Storage-NetApp-Ontap-Quotas-Restapi-custom      | Contrôle les quotas      |            |
| Snapmirrors | HW-Storage-NetApp-Ontap-Snapmirrors-Restapi-custom | Contrôle les snapmirrors |            |
| Volumes     | HW-Storage-NetApp-Ontap-Volumes-Restapi-custom     | Contrôle les volumes     | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                             | Description                                                                         |
|:--------------------------------------------|:------------------------------------------------------------------------------------|
| HW-Storage-Netapp-Ontap-Restapi-Volume-Name | Découvre les partitions du disque en utilisant son nom et supervise l'espace occupé |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Nom                                                  | Unité |
|:-----------------------------------------------------|:------|
| status                                               | N/A   |
| *aggregates*#aggregate.space.usage.bytes             | B     |
| *aggregates*#aggregate.space.free.bytes              | B     |
| *aggregates*#aggregate.space.usage.percentage        | %     |
| *aggregates*#aggregate.io.read.usage.bytespersecond  | B/s   |
| *aggregates*#aggregate.io.write.usage.bytespersecond | B/s   |
| *aggregates*#aggregate.io.other.usage.bytespersecond | B/s   |
| *aggregates*#aggregate.io.total.usage.bytespersecond | B/s   |
| *aggregates*#aggregate.io.read.usage.iops            | iops  |
| *aggregates*#aggregate.io.write.usage.iops           | iops  |
| *aggregates*#aggregate.io.other.usage.iops           | iops  |
| *aggregates*#aggregate.io.total.usage.iops           | iops  |
| *aggregates*#aggregate.io.read.latency.microseconds  | µs    |
| *aggregates*#aggregate.io.write.latency.microseconds | µs    |
| *aggregates*#aggregate.io.other.latency.microseconds | µs    |
| *aggregates*#aggregate.io.total.latency.microseconds | µs    |

</TabItem>
<TabItem value="Cluster" label="Cluster">

| Nom                                              | Unité |
|:-------------------------------------------------|:------|
| *clusters*~cluster.io.read.usage.bytespersecond  | B/s   |
| *clusters*~cluster.io.write.usage.bytespersecond | B/s   |
| *clusters*~cluster.io.other.usage.bytespersecond | B/s   |
| *clusters*~cluster.io.total.usage.bytespersecond | B/s   |
| *clusters*~cluster.io.read.usage.iops            | iops  |
| *clusters*~cluster.io.write.usage.iops           | iops  |
| *clusters*~cluster.io.other.usage.iops           | iops  |
| *clusters*~cluster.io.total.usage.iops           | iops  |
| *clusters*~cluster.io.read.latency.milliseconds  | ms    |
| *clusters*~cluster.io.write.latency.milliseconds | ms    |
| *clusters*~cluster.io.other.latency.milliseconds | ms    |
| *clusters*~cluster.io.total.latency.milliseconds | ms    |
| node-status                                      | N/A   |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Nom                  | Unité |
|:---------------------|:------|
| hardware.bay.count   | count |
| bay status           | N/A   |
| hardware.disk.count  | count |
| disk status          | N/A   |
| hardware.fru.count   | count |
| fru status           | N/A   |
| hardware.shelf.count | count |
| shelf status         | N/A   |

</TabItem>
<TabItem value="Luns" label="Luns">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Nom                                   | Unité |
|:--------------------------------------|:------|
| *quotas*#quota.space.usage.bytes      | B     |
| *quotas*#quota.space.free.bytes       | B     |
| *quotas*#quota.space.usage.percentage | %     |

</TabItem>
<TabItem value="Snapmirrors" label="Snapmirrors">

| Nom    | Unité |
|:-------|:------|
| status | N/A   |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Nom                                            | Unité |
|:-----------------------------------------------|:------|
| status                                         | N/A   |
| *volumes*#volume.space.usage.bytes             | B     |
| *volumes*#volume.space.free.bytes              | B     |
| *volumes*#volume.space.usage.percentage        | %     |
| *volumes*#volume.logicalspace.usage.bytes      | B     |
| *volumes*#volume.logicalspace.free.bytes       | B     |
| *volumes*#volume.logicalspace.usage.percentage | %     |
| *volumes*#volume.io.read.usage.bytespersecond  | B/s   |
| *volumes*#volume.io.write.usage.bytespersecond | B/s   |
| *volumes*#volume.io.other.usage.bytespersecond | B/s   |
| *volumes*#volume.io.total.usage.bytespersecond | B/s   |
| *volumes*#volume.io.read.usage.iops            | iops  |
| *volumes*#volume.io.write.usage.iops           | iops  |
| *volumes*#volume.io.other.usage.iops           | iops  |
| *volumes*#volume.io.total.usage.iops           | iops  |
| *volumes*#volume.io.read.latency.milliseconds  | ms    |
| *volumes*#volume.io.write.latency.milliseconds | ms    |
| *volumes*#volume.io.other.latency.milliseconds | ms    |
| *volumes*#volume.io.total.latency.milliseconds | ms    |

</TabItem>
</Tabs>

## Prérequis

### Configuration

Un compte en lecture est requis (user/password).

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
dnf install centreon-pack-hardware-storage-netapp-ontap-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-netapp-ontap-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-netapp-ontap-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-netapp-ontap-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **NetApp Ontap Rest API**
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
dnf install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-netapp-ontap-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Netapp-Ontap-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-NetApp-Ontap-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                          | Valeur par défaut | Obligatoire |
|:----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME     | Netapp API username                                                                                  |                   | X           |
| APIPASSWORD     | Netapp API password                                                                                  |                   | X           |
| APIPROTO        | Specify https if needed (default: 'https')                                                           | https             |             |
| APIPORT         | Port used (default: 443)                                                                             | 443               |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Macro                | Description                                                                                                                                                      | Valeur par défaut       | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERNAME           | Filter aggregates by aggregate name (can be a regexp)                                                                                                            |                         |             |
| WARNINGOTHER         | Threshold                                                                                                                                                        |                         |             |
| CRITICALOTHER        | Threshold                                                                                                                                                        |                         |             |
| WARNINGOTHERIOPS     | Threshold                                                                                                                                                        |                         |             |
| CRITICALOTHERIOPS    | Threshold                                                                                                                                                        |                         |             |
| WARNINGOTHERLATENCY  | Threshold                                                                                                                                                        |                         |             |
| CRITICALOTHERLATENCY | Threshold                                                                                                                                                        |                         |             |
| WARNINGREAD          | Threshold                                                                                                                                                        |                         |             |
| CRITICALREAD         | Threshold                                                                                                                                                        |                         |             |
| WARNINGREADIOPS      | Threshold                                                                                                                                                        |                         |             |
| CRITICALREADIOPS     | Threshold                                                                                                                                                        |                         |             |
| WARNINGREADLATENCY   | Threshold                                                                                                                                                        |                         |             |
| CRITICALREADLATENCY  | Threshold                                                                                                                                                        |                         |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /online/i'). You can use the following variables: %\{state\}, %\{display\} | %\{state\} !~ /online/i |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{display\}                                       |                         |             |
| WARNINGTOTAL         | Threshold                                                                                                                                                        |                         |             |
| CRITICALTOTAL        | Threshold                                                                                                                                                        |                         |             |
| WARNINGTOTALIOPS     | Threshold                                                                                                                                                        |                         |             |
| CRITICALTOTALIOPS    | Threshold                                                                                                                                                        |                         |             |
| WARNINGTOTALLATENCY  | Threshold                                                                                                                                                        |                         |             |
| CRITICALTOTALLATENCY | Threshold                                                                                                                                                        |                         |             |
| WARNINGUSAGE         | Threshold                                                                                                                                                        |                         |             |
| CRITICALUSAGE        | Threshold                                                                                                                                                        |                         |             |
| WARNINGUSAGEFREE     | Threshold                                                                                                                                                        |                         |             |
| CRITICALUSAGEFREE    | Threshold                                                                                                                                                        |                         |             |
| WARNINGUSAGEPRCT     | Threshold                                                                                                                                                        | 80                      |             |
| CRITICALUSAGEPRCT    | Threshold                                                                                                                                                        | 90                      |             |
| WARNINGWRITE         | Threshold                                                                                                                                                        |                         |             |
| CRITICALWRITE        | Threshold                                                                                                                                                        |                         |             |
| WARNINGWRITEIOPS     | Threshold                                                                                                                                                        |                         |             |
| CRITICALWRITEIOPS    | Threshold                                                                                                                                                        |                         |             |
| WARNINGWRITELATENCY  | Threshold                                                                                                                                                        |                         |             |
| CRITICALWRITELATENCY | Threshold                                                                                                                                                        |                         |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                               |                         |             |

</TabItem>
<TabItem value="Cluster" label="Cluster">

| Macro                | Description                                                                                                                                                                        | Valeur par défaut      | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-----------------------|:-----------:|
| UNKNOWNNODESTATUS    | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{link\_status\}, %\{display\}                                      |                        |             |
| CRITICALNODESTATUS   | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} ne "online"'). You can use the following variables: %\{state\}, %\{link\_status\}, %\{display\} | %\{state\} ne "online" |             |
| WARNINGNODESTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{link\_status\}, %\{display\}                                      |                        |             |
| WARNINGREAD          | Threshold                                                                                                                                                                          |                        |             |
| CRITICALREAD         | Threshold                                                                                                                                                                          |                        |             |
| WARNINGREADIOPS      | Threshold                                                                                                                                                                          |                        |             |
| CRITICALREADIOPS     | Threshold                                                                                                                                                                          |                        |             |
| WARNINGREADLATENCY   | Threshold                                                                                                                                                                          |                        |             |
| CRITICALREADLATENCY  | Threshold                                                                                                                                                                          |                        |             |
| WARNINGWRITE         | Threshold                                                                                                                                                                          |                        |             |
| CRITICALWRITE        | Threshold                                                                                                                                                                          |                        |             |
| WARNINGWRITEIOPS     | Threshold                                                                                                                                                                          |                        |             |
| CRITICALWRITEIOPS    | Threshold                                                                                                                                                                          |                        |             |
| WARNINGWRITELATENCY  | Threshold                                                                                                                                                                          |                        |             |
| CRITICALWRITELATENCY | Threshold                                                                                                                                                                          |                        |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                 | --verbose              |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: `bay`, `disk`, `fru`, `shelf`                    | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Luns" label="Luns">

| Macro          | Description                                                                                                                                                                             | Valeur par défaut       | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERNAME     | Filter LUN name (can be a regexp)                                                                                                                                                       |                         |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{container\_state\}, %\{display\}                                       |                         |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /online/i'). You can use the following variables: %\{state\}, %\{container\_state\}, %\{display\} | %\{state\} !~ /online/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{container\_state\}, %\{display\}                                       |                         |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                      | --verbose               |             |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Macro                  | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-----------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERINDEX            | Filter by index (identified entry in the /etc/quotas) (can be a regexp)                            |                   |             |
| FILTERVSERVER          | Filter by Vserver name (can be a regexp)                                                           |                   |             |
| FILTERVOLUME           | Filter by volume name (can be a regexp)                                                            |                   |             |
| FILTERQTREE            | Filter by Qtree name (can be a regexp)                                                             |                   |             |
| WARNINGSPACEUSAGE      | Threshold                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Threshold                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Threshold                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Threshold                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Threshold                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Snapmirrors" label="Snapmirrors">

| Macro          | Description                                                                                                                                                                                                                        | Valeur par défaut                                     | Obligatoire |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------------------------|:-----------:|
| FILTERNAME     | Filter SnapMirror name (can be a regexp)                                                                                                                                                                                           |                                                       |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{healthy\}, %\{state\}, %\{transfer\_state\}, %\{display\}                                                                     |                                                       |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (default: '%\{healthy\} ne "true" or %\{state\} eq "broken\_off"'). You can use the following variables: %\{healthy\}, %\{state\}, %\{transfer\_state\}, %\{display\} | %\{healthy\} ne "true" or %\{state\} eq "broken\_off" |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{healthy\}, %\{state\}, %\{transfer\_state\}, %\{display\}                                                                     |                                                       |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                                 | --verbose                                             |             |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Macro                | Description                                                                                                                                                      | Valeur par défaut       | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------|:-----------:|
| FILTERNAME           | Filter the API request result by volume name (can be a regexp)                                                                                                   |                         |             |
| UNKNOWNSTATUS        | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{display\}                                       |                         |             |
| WARNINGREAD          | Threshold                                                                                                                                                        |                         |             |
| CRITICALREAD         | Threshold                                                                                                                                                        |                         |             |
| WARNINGREADIOPS      | Threshold                                                                                                                                                        |                         |             |
| CRITICALREADIOPS     | Threshold                                                                                                                                                        |                         |             |
| WARNINGREADLATENCY   | Threshold                                                                                                                                                        |                         |             |
| CRITICALREADLATENCY  | Threshold                                                                                                                                                        |                         |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /online/i'). You can use the following variables: %\{state\}, %\{display\} | %\{state\} !~ /online/i |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{display\}                                       |                         |             |
| WARNINGUSAGE         | Threshold                                                                                                                                                        |                         |             |
| CRITICALUSAGE        | Threshold                                                                                                                                                        |                         |             |
| WARNINGUSAGEFREE     | Threshold                                                                                                                                                        |                         |             |
| CRITICALUSAGEFREE    | Threshold                                                                                                                                                        |                         |             |
| WARNINGUSAGEPRCT     | Threshold                                                                                                                                                        | 80                      |             |
| CRITICALUSAGEPRCT    | Threshold                                                                                                                                                        | 90                      |             |
| WARNINGWRITE         | Threshold                                                                                                                                                        |                         |             |
| CRITICALWRITE        | Threshold                                                                                                                                                        |                         |             |
| WARNINGWRITEIOPS     | Threshold                                                                                                                                                        |                         |             |
| CRITICALWRITEIOPS    | Threshold                                                                                                                                                        |                         |             |
| WARNINGWRITELATENCY  | Threshold                                                                                                                                                        |                         |             |
| CRITICALWRITELATENCY | Threshold                                                                                                                                                        |                         |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                               | --verbose               |             |

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
/usr/lib/centreon/plugins/centreon_netapp_ontap_restapi.pl \
	--plugin=storage::netapp::ontap::restapi::plugin \
	--mode=volumes \
	--hostname='10.0.0.1' \
	--port='443' \
	--proto='https' \
	--api-username='username' \
	--api-password='password'  \
	--filter-name='' \
	--unknown-status='' \
	--warning-status='' \
	--critical-status='%\{state\} !~ /online/i' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='80' \
	--critical-usage-prct='90' \
	--warning-read='' \
	--critical-read='' \
	--warning-write='' \
	--critical-write='' \
	--warning-read-iops='' \
	--critical-read-iops='' \
	--warning-write-iops='' \
	--critical-write-iops='' \
	--warning-read-latency='' \
	--critical-read-latency='' \
	--warning-write-latency='' \
	--critical-write-latency='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All volumes are ok | 'volumes1#volume.space.usage.bytes'=66159B;;;0;total_space 'volumes2#volume.space.usage.bytes'=95915B;;;0;total_space 'volumes1#volume.space.free.bytes'=12281B;;;0;total_space 'volumes2#volume.space.free.bytes'=67019B;;;0;total_space 'volumes1#volume.space.usage.percentage'=66404%;0:80;0:90;0;100 'volumes2#volume.space.usage.percentage'=87107%;0:80;0:90;0;100 'volumes1#volume.logicalspace.usage.bytes'=71683B;;;0;total_logical_space 'volumes2#volume.logicalspace.usage.bytes'=2590B;;;0;total_logical_space 'volumes1#volume.logicalspace.free.bytes'=68726B;;;0;total_logical_space 'volumes2#volume.logicalspace.free.bytes'=97233B;;;0;total_logical_space 'volumes1#volume.logicalspace.usage.percentage'=39983%;;;0;100 'volumes2#volume.logicalspace.usage.percentage'=41105%;;;0;100 'volumes1#volume.io.read.usage.bytespersecond'=7133B/s;;;; 'volumes2#volume.io.read.usage.bytespersecond'=90416B/s;;;; 'volumes1#volume.io.write.usage.bytespersecond'=93609B/s;;;0; 'volumes2#volume.io.write.usage.bytespersecond'=92864B/s;;;0; 'volumes1#volume.io.other.usage.bytespersecond'=86691B/s;;;0; 'volumes2#volume.io.other.usage.bytespersecond'=13270B/s;;;0; 'volumes1#volume.io.total.usage.bytespersecond'=58513B/s;;;0; 'volumes2#volume.io.total.usage.bytespersecond'=27731B/s;;;0; 'volumes1#volume.io.read.usage.iops'=73888iops;;;0; 'volumes2#volume.io.read.usage.iops'=32587iops;;;0; 'volumes1#volume.io.write.usage.iops'=79865iops;;;0; 'volumes2#volume.io.write.usage.iops'=47151iops;;;0; 'volumes1#volume.io.other.usage.iops'=30520iops;;;0; 'volumes2#volume.io.other.usage.iops'=88490iops;;;0; 'volumes1#volume.io.total.usage.iops'=12956iops;;;0; 'volumes2#volume.io.total.usage.iops'=97483iops;;;0; 'volumes1#volume.io.read.latency.milliseconds'=84217ms;;;0; 'volumes2#volume.io.read.latency.milliseconds'=6221ms;;;0; 'volumes1#volume.io.write.latency.milliseconds'=12290ms;;;0; 'volumes2#volume.io.write.latency.milliseconds'=88721ms;;;0; 'volumes1#volume.io.other.latency.milliseconds'=11545ms;;;0; 'volumes2#volume.io.other.latency.milliseconds'=63868ms;;;0; 'volumes1#volume.io.total.latency.milliseconds'=23807ms;;;0; 'volumes2#volume.io.total.latency.milliseconds'=49953ms;;;0; 
```

### Diagnostic des erreurs communes

Rendez-vous sur la [documentation dédiée](../getting-started/how-to-guides/troubleshooting-plugins.md#http-and-api-checks)
des plugins basés sur HTTP/API.

### Modes disponibles

Dans la plupart des cas, un mode correspond à un modèle de service. Le mode est renseigné dans la commande d'exécution 
du connecteur. Dans l'interface de Centreon, il n'est pas nécessaire de les spécifier explicitement, leur utilisation est
implicite dès lors que vous utilisez un modèle de service. En revanche, vous devrez spécifier le mode correspondant à ce
modèle si vous voulez tester la commande d'exécution du connecteur dans votre terminal.

Tous les modes disponibles peuvent être affichés en ajoutant le paramètre
`--list-mode` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_netapp_ontap_restapi.pl \
	--plugin=storage::netapp::ontap::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                  | Modèle de service associé                          |
|:--------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| aggregates [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/aggregates.pm)]    | HW-Storage-NetApp-Ontap-Aggregates-Restapi-custom  |
| cluster [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/cluster.pm)]          | HW-Storage-NetApp-Ontap-Cluster-Restapi-custom     |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/hardware.pm)]        | HW-Storage-NetApp-Ontap-Hardware-Restapi-custom    |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/listvolumes.pm)] | Used for service discovery                         |
| luns [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/luns.pm)]                | HW-Storage-NetApp-Ontap-Luns-Restapi-custom        |
| quotas [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/quotas.pm)]            | HW-Storage-NetApp-Ontap-Quotas-Restapi-custom      |
| snapmirrors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/snapmirrors.pm)]  | HW-Storage-NetApp-Ontap-Snapmirrors-Restapi-custom |
| volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/netapp/ontap/restapi/mode/volumes.pm)]          | HW-Storage-NetApp-Ontap-Volumes-Restapi-custom     |

### Options disponibles

#### Options génériques

Les options génériques sont listées ci-dessous :

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|:-------------------------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see --list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata                          | Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix. Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata                          | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\]  Common examples:  onvert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                                                       |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,\<names-of-new-metrics\>,calculation\[,\[\<new-unit-of-mesure\>\],\[min\],\[max\]\] regex: regular expression \<names-of-new-metrics\>: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated \<new-unit-of-mesure\> (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  um wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-short-output                      | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-long-output                       | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --change-exit                              | Replace an exit code with one of your choice. Example: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Example: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --output-file                              | Write output in file (can be combined with JSON, XML and OpenMetrics options). Example: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.  \<output\>.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --proxyurl                                 | Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --hostname                                 | Netapp hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --port                                     | Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --proto                                    | Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --api-username                             | Netapp API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --api-password                             | Netapp API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --timeout                                  | Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">

<TabItem value="Aggregates" label="Aggregates">

| Option                   | Description                                                                                                                                                                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                                                                                                                                                         |
| --filter-name            | Filter aggregates by aggregate name (can be a regexp).                                                                                                                                                                                                                        |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{display\}                                                                                                                                                    |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{display\}                                                                                                                                                    |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /online/i'). You can use the following variables: %\{state\}, %\{display\}                                                                                                              |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'read' (B/s), 'read-iops', 'write' (B/s), 'write-iops', 'read-latency' (ms), 'write-latency' (ms), 'total-latency' (ms), 'other-latency' (ms), 'other' (B/s), 'total' (B/s), 'other-iops', 'total-iops'. |

</TabItem>
<TabItem value="Cluster" label="Cluster">

| Option                   | Description                                                                                                                                                                                                                                         |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: `--filter-counters='node-status'`                                                                                                                                                         |
| --unknown-node-status    | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{link\_status\}, %\{display\}                                                                                                       |
| --warning-node-status    | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{link\_status\}, %\{display\}                                                                                                       |
| --critical-node-status   | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} ne "online"'). You can use the following variables: %\{state\}, %\{link\_status\}, %\{display\}                                                                  |
| --warning-* --critical-* | Thresholds. Can be: `cpu-utilization` (%), `read` (B/s), `write` (B/s), `read-iops`, `write-iops`, `read-latency` (ms), `write-latency` (ms), `other-latency` (ms), `total-latency` (ms), `other` (B/s), `total` (B/s), `other-iops`, `total-iops`. |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                          |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (default: '.*'). Can be: `bay`, `disk`, `fru`, `shelf`.                                                                                                                                     |
| --filter             | Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='fru,-'                                                                                                       |
| --absent-problem     | Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'. |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                           |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: C\<--threshold-overload='fru,OK,error'\>     |
| --warning            | Define the warning threshold for temperatures (syntax: type,instance,threshold) Example: --warning='temperature,.*,30'                                                                                               |
| --critical           | Define the critical threshold for temperatures (syntax: type,instance,threshold) Example: --critical='temperature,.*,40'                                                                                             |
| --warning-count-*    | Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                         |
| --critical-count-*   | Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                        |

</TabItem>
<TabItem value="Luns" label="Luns">

| Option            | Description                                                                                                                                                                             |
|:------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                               |
| --filter-name     | Filter LUN name (can be a regexp).                                                                                                                                                      |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{container\_state\}, %\{display\}                                       |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{container\_state\}, %\{display\}                                       |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /online/i'). You can use the following variables: %\{state\}, %\{container\_state\}, %\{display\} |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Option                   | Description                                                                                                               |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$' |
| --filter-index           | Filter by index (identified entry in the /etc/quotas) (can be a regexp).                                                  |
| --filter-vserver         | Filter by Vserver name (can be a regexp).                                                                                 |
| --filter-volume          | Filter by volume name (can be a regexp).                                                                                  |
| --filter-qtree           | Filter by Qtree name (can be a regexp).                                                                                   |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.                                                |

</TabItem>
<TabItem value="Snapmirrors" label="Snapmirrors">

| Option            | Description                                                                                                                                                                                                                        |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters | Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                          |
| --filter-name     | Filter SnapMirror name (can be a regexp).                                                                                                                                                                                          |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{healthy\}, %\{state\}, %\{transfer\_state\}, %\{display\}                                                                     |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{healthy\}, %\{state\}, %\{transfer\_state\}, %\{display\}                                                                     |
| --critical-status | Define the conditions to match for the status to be CRITICAL (default: '%\{healthy\} ne "true" or %\{state\} eq "broken\_off"'). You can use the following variables: %\{healthy\}, %\{state\}, %\{transfer\_state\}, %\{display\} |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Option                   | Description                                                                                                                                                                                                                                                                                                         |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: C\<--filter-counters='^usage$'\>.                                                                                                                                                                                                                         |
| --filter-volume-name     | Filter the API request by volumes name (* can be used, volumes name are separated by \|). Required if you wan to retrieve  logical space metrics.                                                                                                                                                                   |
| --filter-name            | Filter the API request result by volume name (can be a regexp).                                                                                                                                                                                                                                                     |
| --filter-vserver-name    | Filter volumes by Vserver name (can be a regexp).                                                                                                                                                                                                                                                                   |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %\{state\}, %\{display\}                                                                                                                                                                                          |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %\{state\}, %\{display\}.                                                                                                                                                                                         |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (default: '%\{state\} !~ /online/i'). You can use the following variables: %\{state\}, %\{display\}.                                                                                                                                                   |
| --warning-* --critical-* | Thresholds. Can be: usage' (B), usage-free (B), usage-prct (%), logical-usage (B), logical-usage-free (B), logical-usage-prct (%), read (B/s), read-iops, write (B/s), write-iops, read-latency (ms), write-latency (ms), total-latency (ms), other-latency (ms), other (B/s), total (B/s), other-iops, total-iops. |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_netapp_ontap_restapi.pl \
	--plugin=storage::netapp::ontap::restapi::plugin \
	--mode=volumes \
	--help
```
