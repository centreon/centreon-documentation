---
id: hardware-storage-netapp-ontap-restapi
title: NetApp Ontap Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

ONTAP ou Data ONTAP ou Clustered Data ONTAP (cDOT) ou Data ONTAP 7-Mode est un système d'exploitation proriétaire NetApp utilisé sur le stockage de données.

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

#### Découverte de service

| Nom de la règle                             | Description                                               |
|:--------------------------------------------|:----------------------------------------------------------|
| HW-Storage-Netapp-Ontap-Restapi-Volume-Name | Discover the disk partitions and monitor space occupation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Métrique                                             | Unité |
|:-----------------------------------------------------|:------|
| *aggregates*#status                                  | N/A   |
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

| Métrique                                         | Unité |
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
| *clusters*~*nodes*#node-status                   | N/A   |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique     | Unité |
|:-------------|:------|
| bay status   |       |
| fru status   |       |
| shelf status |       |

</TabItem>
<TabItem value="Luns" label="Luns">

| Métrique      | Unité |
|:--------------|:------|
| *luns*#status | N/A   |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Métrique                              | Unité |
|:--------------------------------------|:------|
| *quotas*#quota.space.usage.bytes      | B     |
| *quotas*#quota.space.free.bytes       | B     |
| *quotas*#quota.space.usage.percentage | %     |

</TabItem>
<TabItem value="Snapmirrors" label="Snapmirrors">

| Métrique             | Unité |
|:---------------------|:------|
| *snapmirrors*#status | N/A   |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Métrique                                       | Unité |
|:-----------------------------------------------|:------|
| *volumes*#status                               | N/A   |
| *volumes*#volume.space.usage.bytes             | B     |
| *volumes*#volume.space.free.bytes              | B     |
| *volumes*#volume.space.usage.percentage        | %     |
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
<TabItem value="Debian 11" label="Debian 11">

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
<TabItem value="Debian 11" label="Debian 11">

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

| Macro           | Description                                                                                           | Valeur par défaut | Obligatoire |
|:----------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME     | Netapp API username                                                                                   |                   | X           |
| APIPASSWORD     | Netapp API password                                                                                   |                   | X           |
| APIPROTO        | Specify https if needed (Default: 'https')                                                            | https             |             |
| APIPORT         | Port used (Default: 443)                                                                              | 443               |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Macro                | Description                                                                                                                                                | Valeur par défaut     | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| FILTERNAME           | Filter aggregates by aggregate name (can be a regexp)                                                                                                      |                       |             |
| WARNINGOTHER         | Thresholds                                                                                                                                                 |                       |             |
| CRITICALOTHER        | Thresholds                                                                                                                                                 |                       |             |
| WARNINGOTHERIOPS     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALOTHERIOPS    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGOTHERLATENCY  | Thresholds                                                                                                                                                 |                       |             |
| CRITICALOTHERLATENCY | Thresholds                                                                                                                                                 |                       |             |
| WARNINGREAD          | Thresholds                                                                                                                                                 |                       |             |
| CRITICALREAD         | Thresholds                                                                                                                                                 |                       |             |
| WARNINGREADIOPS      | Thresholds                                                                                                                                                 |                       |             |
| CRITICALREADIOPS     | Thresholds                                                                                                                                                 |                       |             |
| WARNINGREADLATENCY   | Thresholds                                                                                                                                                 |                       |             |
| CRITICALREADLATENCY  | Thresholds                                                                                                                                                 |                       |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (Default: '%{state} !~ /online/i'). You can use the following variables: %{state}, %{display} | %{state} !~ /online/i |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{display}                                     |                       |             |
| WARNINGTOTAL         | Thresholds                                                                                                                                                 |                       |             |
| CRITICALTOTAL        | Thresholds                                                                                                                                                 |                       |             |
| WARNINGTOTALIOPS     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALTOTALIOPS    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGTOTALLATENCY  | Thresholds                                                                                                                                                 |                       |             |
| CRITICALTOTALLATENCY | Thresholds                                                                                                                                                 |                       |             |
| WARNINGUSAGE         | Thresholds                                                                                                                                                 |                       |             |
| CRITICALUSAGE        | Thresholds                                                                                                                                                 |                       |             |
| WARNINGUSAGEFREE     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALUSAGEFREE    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGUSAGEPRCT     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALUSAGEPRCT    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGWRITE         | Thresholds                                                                                                                                                 |                       |             |
| CRITICALWRITE        | Thresholds                                                                                                                                                 |                       |             |
| WARNINGWRITEIOPS     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALWRITEIOPS    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGWRITELATENCY  | Thresholds                                                                                                                                                 |                       |             |
| CRITICALWRITELATENCY | Thresholds                                                                                                                                                 |                       |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                        |                       |             |

</TabItem>
<TabItem value="Cluster" label="Cluster">

| Macro                | Description                                                                                                                                                                | Valeur par défaut    | Obligatoire |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| UNKNOWNNODESTATUS    | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{link\_status}, %{display}                                    |                      |             |
| CRITICALNODESTATUS   | Define the conditions to match for the status to be CRITICAL (Default: '%{state} ne "online"'). You can use the following variables: %{state}, %{link\_status}, %{display} | %{state} ne "online" |             |
| WARNINGNODESTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{link\_status}, %{display}                                    |                      |             |
| WARNINGREAD          | Thresholds                                                                                                                                                                 |                      |             |
| CRITICALREAD         | Thresholds                                                                                                                                                                 |                      |             |
| WARNINGREADIOPS      | Thresholds                                                                                                                                                                 |                      |             |
| CRITICALREADIOPS     | Thresholds                                                                                                                                                                 |                      |             |
| WARNINGREADLATENCY   | Thresholds                                                                                                                                                                 |                      |             |
| CRITICALREADLATENCY  | Thresholds                                                                                                                                                                 |                      |             |
| WARNINGWRITE         | Thresholds                                                                                                                                                                 |                      |             |
| CRITICALWRITE        | Thresholds                                                                                                                                                                 |                      |             |
| WARNINGWRITEIOPS     | Thresholds                                                                                                                                                                 |                      |             |
| CRITICALWRITEIOPS    | Thresholds                                                                                                                                                                 |                      |             |
| WARNINGWRITELATENCY  |                                                                                                                                                                            |                      |             |
| CRITICALWRITELATENCY |                                                                                                                                                                            |                      |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                        | --verbose            |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (Default: '.*'). Can be: 'shelf', 'bay', 'fru'                             | .*                |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Luns" label="Luns">

| Macro          | Description                                                                                                                                                                     | Valeur par défaut     | Obligatoire |
|:---------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| FILTERNAME     | Filter LUN name (can be a regexp)                                                                                                                                               |                       |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{container\_state}, %{display}                                     |                       |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{state} !~ /online/i'). You can use the following variables: %{state}, %{container\_state}, %{display} | %{state} !~ /online/i |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{container\_state}, %{display}                                     |                       |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                             | --verbose             |             |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Macro                  | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERINDEX            | Filter by index (identified entry in the /etc/quotas) (can be a regexp)                             |                   |             |
| FILTERVSERVER          | Filter by vserver name (can be a regexp)                                                            |                   |             |
| FILTERVOLUME           | Filter by volume name (can be a regexp)                                                             |                   |             |
| FILTERQTREE            | Filter by qtree name (can be a regexp)                                                              |                   |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Snapmirrors" label="Snapmirrors">

| Macro          | Description                                                                                                                                                                                                            | Valeur par défaut                                 | Obligatoire |
|:---------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|:-----------:|
| FILTERNAME     | Filter snapmirror name (can be a regexp)                                                                                                                                                                               |                                                   |             |
| UNKNOWNSTATUS  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{healthy}, %{state}, %{transfer\_state}, %{display}                                                                 |                                                   |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{healthy} ne "true" or %{state} eq "broken\_off"'). You can use the following variables: %{healthy}, %{state}, %{transfer\_state}, %{display} | %{healthy} ne "true" or %{state} eq "broken\_off" |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{healthy}, %{state}, %{transfer\_state}, %{display}                                                                 |                                                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                    | --verbose                                         |             |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Macro                | Description                                                                                                                                                | Valeur par défaut     | Obligatoire |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------|:-----------:|
| FILTERNAME           | Filter volumes by volume name (can be a regexp)                                                                                                            |                       |             |
| UNKNOWNSTATUS        | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{display}                                     |                       |             |
| WARNINGREAD          | Thresholds                                                                                                                                                 |                       |             |
| CRITICALREAD         | Thresholds                                                                                                                                                 |                       |             |
| WARNINGREADIOPS      | Thresholds                                                                                                                                                 |                       |             |
| CRITICALREADIOPS     | Thresholds                                                                                                                                                 |                       |             |
| WARNINGREADLATENCY   | Thresholds                                                                                                                                                 |                       |             |
| CRITICALREADLATENCY  | Thresholds                                                                                                                                                 |                       |             |
| CRITICALSTATUS       | Define the conditions to match for the status to be CRITICAL (Default: '%{state} !~ /online/i'). You can use the following variables: %{state}, %{display} | %{state} !~ /online/i |             |
| WARNINGSTATUS        | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{display}                                     |                       |             |
| WARNINGUSAGE         | Thresholds                                                                                                                                                 |                       |             |
| CRITICALUSAGE        | Thresholds                                                                                                                                                 |                       |             |
| WARNINGUSAGEFREE     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALUSAGEFREE    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGUSAGEPRCT     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALUSAGEPRCT    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGWRITE         | Thresholds                                                                                                                                                 |                       |             |
| CRITICALWRITE        | Thresholds                                                                                                                                                 |                       |             |
| WARNINGWRITEIOPS     | Thresholds                                                                                                                                                 |                       |             |
| CRITICALWRITEIOPS    | Thresholds                                                                                                                                                 |                       |             |
| WARNINGWRITELATENCY  | Thresholds                                                                                                                                                 |                       |             |
| CRITICALWRITELATENCY | Thresholds                                                                                                                                                 |                       |             |
| EXTRAOPTIONS         | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                        | --verbose             |             |

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
	--api-username='' \
	--api-password=''  \
	--filter-name='' \
	--unknown-status='' \
	--warning-status='' \
	--critical-status='%{state} !~ /online/i' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' \
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
OK: All volumes are ok | '*volumes*#volume.space.usage.bytes'=B;;;0;total_space'*volumes*#volume.space.free.bytes'=B;;;0;total_space'*volumes*#volume.space.usage.percentage'=%;;;0;100'*volumes*#volume.io.read.usage.bytespersecond'=B/s;;;;'*volumes*#volume.io.write.usage.bytespersecond'=B/s;;;0;'*volumes*#volume.io.other.usage.bytespersecond'=B/s;;;0;'*volumes*#volume.io.total.usage.bytespersecond'=B/s;;;0;'*volumes*#volume.io.read.usage.iops'=iops;;;0;'*volumes*#volume.io.write.usage.iops'=iops;;;0;'*volumes*#volume.io.other.usage.iops'=iops;;;0;'*volumes*#volume.io.total.usage.iops'=iops;;;0;'*volumes*#volume.io.read.latency.milliseconds'=ms;;;0;'*volumes*#volume.io.write.latency.milliseconds'=ms;;;0;'*volumes*#volume.io.other.latency.milliseconds'=ms;;;0;'*volumes*#volume.io.total.latency.milliseconds'=ms;;;0;
```

Cette commande vérifie le statut des volumes NetApp (```--mode=volumes```) du stockage *netapp.centreon.com* (```--hostname=netapp.centreon.com```).
L'authentification à l'API s'effectue avec un utilisateur *admin* (```--api-username=admin```) et un mot de passe *xxxx* associé (```--api-password='xxxx'```).

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

| Option                                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:-------------------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --mode                                     | Define the mode in which you want the plugin to be executed (see--list-mode).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --dyn-mode                                 | Specify a mode with the module's path (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --list-mode                                | List all available modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --mode-version                             | Check minimal version of mode. If not, unknown error.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --version                                  | Return the version of the plugin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --custommode                               | When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --list-custommode                          | List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --multiple                                 | Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --pass-manager                             | Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --verbose                                  | Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --debug                                    | Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --filter-perfdata                          | Filter perfdata that match the regexp. Eg: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-perfdata-adv                      | Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %{variable} or %(variable). Eg: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --explode-perfdata-max                     | Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Eg: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --change-perfdata --extend-perfdata        | Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[m ax\]\]  Common examples:      Convert storage free perfdata into used:     --change-perfdata=free,used,invert()      Convert storage free perfdata into used:     --change-perfdata=used,free,invert()      Scale traffic values automatically:     --change-perfdata=traffic,,scale(auto)      Scale traffic values in Mbps:     --change-perfdata=traffic\_in,,scale(Mbps),mbps      Change traffic values in percent:     --change-perfdata=traffic\_in,,percent()                                                                                                                                                                                                                                                                                                                                                                          |
| --extend-perfdata-group                    | Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[ne wuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:      Sum wrong packets from all interfaces (with interface need     --units-errors=absolute):     --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard     \|error)\_(in\|out))'      Sum traffic by interface:     --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traf     fic\_(in\|out)\_$1)'   |
| --change-short-output --change-long-output | Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Eg: adding --change-short-output='OK~Up~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --change-exit                              | Replace an exit code with one of your choice. Eg: adding --change-exit=unknown=critical will result in a CRITICAL state instead of an UNKNOWN state.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --range-perfdata                           | Rewrite the ranges displayed in the perfdata. Accepted values: 0: nothing is changed. 1: if the lower value of the range is equal to 0, it is removed. 2: remove the thresholds from the perfdata.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --filter-uom                               | Mask the units when they don't match the given regular expression.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --opt-exit                                 | Replace the exit code in case of an execution error (i.e. wrong option provided, SSH connection refused, timeout, etc). Default: unknown.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-ignore-perfdata                   | Remove all the metrics from the service. The service will still have a status and an output.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --output-ignore-label                      | Remove the status label ("OK:", "WARNING:", "UNKNOWN:", CRITICAL:") from the beginning of the output. Eg: 'OK: Ram Total:...' will become 'Ram Total:...'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-xml                               | Return the output in XML format (to send to an XML API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --output-json                              | Return the output in JSON format (to send to a JSON API).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --output-openmetrics                       | Return the output in OpenMetrics format (to send to a tool expecting this format).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --output-file                              | Write output in file (can be combined with json, xml and openmetrics options). E.g.: --output-file=/tmp/output.txt will write the output in /tmp/output.txt.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-format                             | Applies only to modes beginning with 'list-'. Returns the list of available macros to configure a service discovery rule (formatted in XML).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --disco-show                               | Applies only to modes beginning with 'list-'. Returns the list of discovered objects (formatted in XML) for service discovery.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --float-precision                          | Define the float precision for thresholds (default: 8).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Netapp ONTAP Rest API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --hostname                                 | Netapp hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --port                                     | Port used (Default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-username                             | Netapp API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --api-password                             | Netapp API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --timeout                                  | Set timeout in seconds (Default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Aggregates" label="Aggregates">

| Option                   | Description                                                                                                                                                                                                                                                                      |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                                                                                                                                                            |
| --filter-name            | Filter aggregates by aggregate name (can be a regexp).                                                                                                                                                                                                                           |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{display}                                                                                                                                                           |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{display}                                                                                                                                                           |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{state} !~ /online/i'). You can use the following variables: %{state}, %{display}                                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'read' (B/s), 'read-iops', 'write' (B/s), 'write-iops', 'read-latency' (ms), 'write-latency' (ms), 'total-latency' (ms), 'other-latency' (ms), 'other' (B/s), 'total' (B/s), 'other-iops', 'total-iops'.    |

</TabItem>
<TabItem value="Cluster" label="Cluster">

| Option                   | Description                                                                                                                                                                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --memcached              | Memcached server to use (only one server).                                                                                                                                                                                                              |
| --redis-server           | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                         |
| --redis-attribute        | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                 |
| --redis-db               | Set Redis database index.                                                                                                                                                                                                                               |
| --failback-file          | Failback on a local file if redis connection failed.                                                                                                                                                                                                    |
| --memexpiration          | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                          |
| --statefile-dir          | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                  |
| --statefile-suffix       | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                          |
| --statefile-concat-cwd   | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.             |
| --statefile-format       | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                   |
| --statefile-key          | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                            |
| --statefile-cipher       | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                      |
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='node-status'                                                                                                                                                               |
| --unknown-node-status    | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{link\_status}, %{display}                                                                                                                 |
| --warning-node-status    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{link\_status}, %{display}                                                                                                                 |
| --critical-node-status   | Define the conditions to match for the status to be CRITICAL (Default: '%{state} ne "online"'). You can use the following variables: %{state}, %{link\_status}, %{display}                                                                              |
| --warning-* --critical-* | Thresholds. Can be: 'cpu-utilization' (%), 'read' (B/s), 'write' (B/s), 'read-iops', 'write-iops', 'read-latency' (ms), 'write-lantency' (ms), 'other-latency' (ms), 'total-latency' (ms), 'other' (B/s), 'total' (B/s), 'other-iops', 'total-iops'.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                    |
|:---------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (Default: '.*'). Can be: 'shelf', 'bay', 'fru'.                                                                                                                                       |
| --filter             | Exclude some parts (comma seperated list) You can also exclude items from specific instances: --filter='fru,-'                                                                                                 |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                     |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='fru,OK,error'    |

</TabItem>
<TabItem value="Luns" label="Luns">

| Option            | Description                                                                                                                                                                        |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name     | Filter LUN name (can be a regexp).                                                                                                                                                 |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{container\_state}, %{display}                                        |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{container\_state}, %{display}                                        |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: '%{state} !~ /online/i'). You can use the following variables: %{state}, %{container\_state}, %{display}    |

</TabItem>
<TabItem value="Quotas" label="Quotas">

| Option                   | Description                                                                   |
|:-------------------------|:------------------------------------------------------------------------------|
| --filter-index           | Filter by index (identified entry in the /etc/quotas) (can be a regexp).      |
| --filter-vserver         | Filter by vserver name (can be a regexp).                                     |
| --filter-volume          | Filter by volume name (can be a regexp).                                      |
| --filter-qtree           | Filter by qtree name (can be a regexp).                                       |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage', 'space-usage-free', 'space-usage-prct'.    |

</TabItem>
<TabItem value="Snapmirrors" label="Snapmirrors">

| Option            | Description                                                                                                                                                                                                               |
|:------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-name     | Filter snapmirror name (can be a regexp).                                                                                                                                                                                 |
| --unknown-status  | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{healthy}, %{state}, %{transfer\_state}, %{display}                                                                    |
| --warning-status  | Define the conditions to match for the status to be WARNING. You can use the following variables: %{healthy}, %{state}, %{transfer\_state}, %{display}                                                                    |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: '%{healthy} ne "true" or %{state} eq "broken\_off"'). You can use the following variables: %{healthy}, %{state}, %{transfer\_state}, %{display}    |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Option                   | Description                                                                                                                                                                                                                                                                      |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='^usage$'                                                                                                                                                                                            |
| --filter-name            | Filter volumes by volume name (can be a regexp).                                                                                                                                                                                                                                 |
| --filter-vserver-name    | Filter volumes by vserver name (can be a regexp).                                                                                                                                                                                                                                |
| --unknown-status         | Define the conditions to match for the status to be UNKNOWN. You can use the following variables: %{state}, %{display}                                                                                                                                                           |
| --warning-status         | Define the conditions to match for the status to be WARNING. You can use the following variables: %{state}, %{display}                                                                                                                                                           |
| --critical-status        | Define the conditions to match for the status to be CRITICAL (Default: '%{state} !~ /online/i'). You can use the following variables: %{state}, %{display}                                                                                                                       |
| --warning-* --critical-* | Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%), 'read' (B/s), 'read-iops', 'write' (B/s), 'write-iops', 'read-latency' (ms), 'write-latency' (ms), 'total-latency' (ms), 'other-latency' (ms), 'other' (B/s), 'total' (B/s), 'other-iops', 'total-iops'.    |

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
