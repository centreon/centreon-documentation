---
id: hardware-storage-purestorage-flasharray-v2-restapi
title: Pure Storage FlashArray Rest API v2
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Contenu du pack

### Modèles

Le connecteur de supervision **Pure Storage FlashArray Rest API v2** apporte un modèle d'hôte :

* **HW-Storage-Purestorage-Flasharray-V2-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-Purestorage-Flasharray-V2-Restapi-custom" label="HW-Storage-Purestorage-Flasharray-V2-Restapi-custom">

| Alias    | Modèle de service                                            | Description              |
|:---------|:-------------------------------------------------------------|:-------------------------|
| Alerts   | HW-Storage-Purestorage-Flasharray-V2-Alerts-Restapi-custom   | Contrôle les alertes     |
| Hardware | HW-Storage-Purestorage-Flasharray-V2-Hardware-Restapi-custom | Contrôle l'état matériel |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-Purestorage-Flasharray-V2-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias   | Modèle de service                                           | Description                      | Découverte |
|:--------|:------------------------------------------------------------|:---------------------------------|:----------:|
| Arrays  | HW-Storage-Purestorage-Flasharray-V2-Arrays-Restapi-custom  | Contrôle les grappes de stockage | X          |
| Volumes | HW-Storage-Purestorage-Flasharray-V2-Volumes-Restapi-custom | Contrôle les volumes             | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de service

| Nom de la règle                                          | Description                                               |
|:---------------------------------------------------------|:----------------------------------------------------------|
| HW-Storage-Purestorage-Flasharray-V2-Restapi-Array-Name  | Discover the disk partitions and monitor space occupation |
| HW-Storage-Purestorage-Flasharray-V2-Restapi-Volume-Name | Discover the disk partitions and monitor space occupation |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques rattachées à chaque service.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Métrique              | Unité |
|:----------------------|:------|
| alerts.detected.count |       |
| alert status          | N/A   |

</TabItem>
<TabItem value="Arrays" label="Arrays">

| Métrique                                   | Unité |
|:-------------------------------------------|:------|
| arrays~array.space.usage.bytes             | B     |
| arrays~array.space.free.bytes              | B     |
| arrays~array.space.usage.percentage        | %     |
| arrays~array.data.reduction.count          | count |
| arrays~array.io.read.usage.bytespersecond  | B/s   |
| arrays~array.io.write.usage.bytespersecond | B/s   |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Métrique                                          | Unité |
|:--------------------------------------------------|:------|
| chassis status                                    |       |
| controller status                                 |       |
| drive bay status                                  |       |
| eth port status                                   |       |
| fc port status                                    |       |
| nvram bay status                                  |       |
| power supply status                               |       |
| sas port status                                   |       |
| temperature status                                |       |
| *sensor_name*#hardware.sensor.temperature.celsius | C     |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Métrique                                     | Unité |
|:---------------------------------------------|:------|
| volumes~volume.space.usage.bytes             | B     |
| volumes~volume.space.free.bytes              | B     |
| volumes~volume.space.usage.percentage        | %     |
| volumes~volume.data.reduction.count          | count |
| volumes~volume.io.read.usage.bytespersecond  | B/s   |
| volumes~volume.io.write.usage.bytespersecond | B/s   |

</TabItem>
</Tabs>

## Prérequis

Vous devez configurer un utilisateur pouvant se connecter à la baie de stockage. Cet utilisateur doit avoir au moins un accès "en lecture seule" à la baie de stockage.

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
dnf install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Pure Storage FlashArray Rest API v2**
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
dnf install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-V2-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-V2-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-purestorage-flasharray-v2-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Purestorage-Flasharray-V2-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-Purestorage-Flasharray-V2-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                           | Valeur par défaut | Obligatoire |
|:----------------|:------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APITOKEN        | API token                                                                                             |                   | X           |
| APIPROTO        | Specify https if needed (Default: 'https')                                                            |                   |             |
| APIPORT         | Port used (Default: 443)                                                                              |                   |             |
| APIVERSION      | API version (Default: 2.4)                                                                            | 2.4               | X           |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Macro          | Description                                                                                                                                                                                                                                              | Valeur par défaut                                   | Obligatoire |
|:---------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------|:-----------:|
| FILTERCATEGORY | Filter by category name (can be a regexp)                                                                                                                                                                                                                |                                                     |             |
| WARNINGSTATUS  | Define the conditions to match for the status to be WARNING (Default: '%{state} ne "closed" and %{severity} =~ /warning/i') You can use the following variables: %{category}, %{code}, %{severity}, %{opened}, %{state}, %{issue}, %{component\_name}    | %{state} ne "closed" and %{severity} =~ /warning/i  |             |
| CRITICALSTATUS | Define the conditions to match for the status to be CRITICAL (Default: '%{state} ne "closed" and %{severity} =~ /critical/i'). You can use the following variables: %{category}, %{code}, %{severity}, %{opened}, %{state}, %{issue}, %{component\_name} | %{state} ne "closed" and %{severity} =~ /critical/i |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                                                                                                                      | --verbose                                           |             |

</TabItem>
<TabItem value="Arrays" label="Arrays">

| Macro                  | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PERFRESOLUTION         |                                                                                                     | 5m                |             |
| FILTERID               | Filter arrays by id (can be a regexp)                                                               |                   |             |
| FILTERNAME             | Filter arrays by name (can be a regexp)                                                             |                   |             |
| WARNINGDATAREDUCTION   | Thresholds                                                                                          |                   |             |
| CRITICALDATAREDUCTION  | Thresholds                                                                                          |                   |             |
| WARNINGREAD            | Thresholds                                                                                          |                   |             |
| CRITICALREAD           | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                          |                   |             |
| WARNINGWRITE           | Thresholds                                                                                          |                   |             |
| CRITICALWRITE          | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                                                                                  | Valeur par défaut | Obligatoire |
|:-------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (Default: '.*'). Can be: 'chassis', 'controller', 'cooling', 'drive', 'ethport', 'fcport', 'nvram', 'psu', 'sasport', 'temperature' |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles)                                                          | --verbose         |             |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Macro                  | Description                                                                                         | Valeur par défaut | Obligatoire |
|:-----------------------|:----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| PERFRESOLUTION         |                                                                                                     | 5m                |             |
| FILTERID               | Filter volumes by id (can be a regexp)                                                              |                   |             |
| FILTERNAME             | Filter volumes by name (can be a regexp)                                                            |                   |             |
| WARNINGDATAREDUCTION   | Thresholds                                                                                          |                   |             |
| CRITICALDATAREDUCTION  | Thresholds                                                                                          |                   |             |
| WARNINGREAD            | Thresholds                                                                                          |                   |             |
| CRITICALREAD           | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGE      | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGE     | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEFREE  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEFREE | Thresholds                                                                                          |                   |             |
| WARNINGSPACEUSAGEPRCT  | Thresholds                                                                                          |                   |             |
| CRITICALSPACEUSAGEPRCT | Thresholds                                                                                          |                   |             |
| WARNINGWRITE           | Thresholds                                                                                          |                   |             |
| CRITICALWRITE          | Thresholds                                                                                          |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (E.g. a --verbose flag). Toutes les options sont listées [ici](#options-disponibles) | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_purestorage_flasharray_v2_restapi.pl \
    --plugin=storage::purestorage::flasharray::v2::restapi::plugin \
    --mode=arrays \
    --hostname='10.0.0.1' \
    --api-version='2.4' \
    --api-token='mytoken' \
    --insecure \
    --verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Array 'filer06-c' space usage total: 26.52 TB used: 16.15 TB (60.91%) free: 10.37 TB (39.09%) - data reduction: 3.808 - read: 732.13 MB/s, write: 0.00 B/s | 'filer06-c#array.space.usage.bytes'=17760870565810B;;;0;29159353378407 'filer06-c#array.space.free.bytes'=11398482812597B;;;0;29159353378407 'filer06-c#array.space.usage.percentage'=60.91%;;;0;100 'filer06-c#array.data.reduction.count'=3.808;;;0; 'filer06-c~5m#array.io.read.usage.bytespersecond'=767691223B/s;;;0; 'filer06-c~5m#array.io.write.usage.bytespersecond'=0B/s;;;0;
checking array 'filer06-c'
    space usage total: 26.52 TB used: 16.15 TB (60.91%) free: 10.37 TB (39.09%)
    data reduction: 3.808
    read: 732.13 MB/s, write: 0.00 B/s
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
/usr/lib/centreon/plugins//centreon_purestorage_flasharray_v2_restapi.pl \
	--plugin=storage::purestorage::flasharray::v2::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                               | Modèle de service associé                                    |
|:---------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------------------------------|
| alerts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/purestorage/flasharray/v2/restapi/mode/alerts.pm)]            | HW-Storage-Purestorage-Flasharray-V2-Alerts-Restapi-custom   |
| arrays [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/purestorage/flasharray/v2/restapi/mode/arrays.pm)]            | HW-Storage-Purestorage-Flasharray-V2-Arrays-Restapi-custom   |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/purestorage/flasharray/v2/restapi/mode/hardware.pm)]        | HW-Storage-Purestorage-Flasharray-V2-Hardware-Restapi-custom |
| list-arrays [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/purestorage/flasharray/v2/restapi/mode/listarrays.pm)]   | Used for service discovery                                   |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/purestorage/flasharray/v2/restapi/mode/listvolumes.pm)] | Used for service discovery                                   |
| volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/purestorage/flasharray/v2/restapi/mode/volumes.pm)]          | HW-Storage-Purestorage-Flasharray-V2-Volumes-Restapi-custom  |

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
| --source-encoding                          | Define the character encoding of the response sent by the monitored resource Default: 'UTF-8'.      Pure Storage API                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --hostname                                 | Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --port                                     | Port used (Default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --proto                                    | Specify https if needed (Default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-token                                | API token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --api-version                              | API version (Default: 2.4).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --timeout                                  | Set timeout in seconds (Default: 30).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --http-peer-addr                           | Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxyurl                                 | Proxy URL. Eg: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --proxypac                                 | Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --insecure                                 | Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --http-backend                             | Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --ssl-opt                                  | Set SSL Options (--ssl-opt="SSL\_version =\> TLSv1" --ssl-opt="SSL\_verify\_mode =\> SSL\_VERIFY\_NONE").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --curl-opt                                 | Set CURL Options (--curl-opt="CURLOPT\_SSL\_VERIFYPEER =\> 0" --curl-opt="CURLOPT\_SSLVERSION =\> CURL\_SSLVERSION\_TLSv1\_1" ).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --memcached                                | Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --redis-server                             | Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| --redis-attribute                          | Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --redis-db                                 | Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --failback-file                            | Failback on a local file if redis connection failed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --memexpiration                            | Time to keep data in seconds (Default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-dir                            | Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --statefile-suffix                         | Define a suffix to customize the statefile name (Default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --statefile-concat-cwd                     | If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --statefile-format                         | Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --statefile-key                            | Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-cipher                         | Define the cipher algorithm to encrypt the cache (Default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Option            | Description                                                                                                                                                                                                                                                |
|:------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-category | Filter by category name (can be a regexp).                                                                                                                                                                                                                 |
| --warning-status  | Define the conditions to match for the status to be WARNING (Default: '%{state} ne "closed" and %{severity} =~ /warning/i') You can use the following variables: %{category}, %{code}, %{severity}, %{opened}, %{state}, %{issue}, %{component\_name}      |
| --critical-status | Define the conditions to match for the status to be CRITICAL (Default: '%{state} ne "closed" and %{severity} =~ /critical/i'). You can use the following variables: %{category}, %{code}, %{severity}, %{opened}, %{state}, %{issue}, %{component\_name}   |
| --memory          | Only check new alarms.                                                                                                                                                                                                                                     |

</TabItem>
<TabItem value="Arrays" label="Arrays">

| Option                   | Description                                                                                                                  |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='data-reduction'                                 |
| --filter-id              | Filter arrays by id (can be a regexp).                                                                                       |
| --filter-name            | Filter arrays by name (can be a regexp).                                                                                     |
| --filter-resolution      | Time resolution for array performance. Can be: 1s, 30s, 5m, 30m, 2h, 8h, 24h (default: 5m).                                  |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B), 'space-usage-free' (B), 'space-usage-prct' (%), 'data-reduction', 'read', 'write'.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                                 |
|:---------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          | Which component to check (Default: '.*'). Can be: 'chassis', 'controller', 'cooling', 'drive', 'ethport', 'fcport', 'nvram', 'psu', 'sasport', 'temperature'.                                                               |
| --filter             | Exclude the items given as a comma-separated list (example: --filter=controller). You can also exclude items from specific instances: --filter=drive,1                                                                      |
| --no-component       | Define the expected status if no components are found (default: critical).                                                                                                                                                  |
| --threshold-overload | Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='temperature,OK,identifying'   |
| --warning            | Set warning threshold (syntax: type,regexp,threshold) Example: --warning='temperature,.*,30'                                                                                                                                |
| --critical           | Set critical threshold (syntax: type,regexp,threshold) Example: --critical='temperature,.*,40'                                                                                                                              |

</TabItem>
<TabItem value="Volumes" label="Volumes">

| Option                   | Description                                                                                                                  |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        | Only display some counters (regexp can be used). Example: --filter-counters='data-reduction'                                 |
| --filter-id              | Filter volumes by id (can be a regexp).                                                                                      |
| --filter-name            | Filter volumes by name (can be a regexp).                                                                                    |
| --filter-resolution      | Time resolution for array performance. Can be: 1s, 30s, 5m, 30m, 2h, 8h, 24h (default: 5m).                                  |
| --warning-* --critical-* | Thresholds. Can be: 'space-usage' (B), 'space-usage-free' (B), 'space-usage-prct' (%), 'data-reduction', 'read', 'write'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins//centreon_purestorage_flasharray_v2_restapi.pl \
	--plugin=storage::purestorage::flasharray::v2::restapi::plugin \
	--mode=volumes \
	--help
```
