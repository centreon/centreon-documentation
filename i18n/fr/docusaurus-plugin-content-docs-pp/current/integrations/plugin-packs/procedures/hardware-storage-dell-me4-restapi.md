---
id: hardware-storage-dell-me4-restapi
title: Dell ME4 Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Dell Me4 Rest API** 
depuis la page **Configuration > Connecteurs > Connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Dell Me4 Rest API** apporte un modèle d'hôte :

* **HW-Storage-Dell-Me4-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-Dell-Me4-Restapi-custom" label="HW-Storage-Dell-Me4-Restapi-custom">

| Alias                 | Modèle de service                                        | Description              | Découverte |
|:----------------------|:---------------------------------------------------------|:-------------------------|:----------:|
| Controller-Statistics | HW-Storage-Dell-Me4-Controller-Statistics-Restapi-custom | Contrôle les contrôleurs | X          |
| Hardware              | HW-Storage-Dell-Me4-Hardware-Restapi-custom              | Contrôle le matériel     |            |
| Volume-Statistics     | HW-Storage-Dell-Me4-Volume-Statistics-Restapi-custom     | Contrôle les volumes     | X          |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-Dell-Me4-Restapi-custom** est utilisé.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias      | Modèle de service                             | Description             |
|:-----------|:----------------------------------------------|:------------------------|
| Interfaces | HW-Storage-Dell-Me4-Interfaces-Restapi-custom | Contrôle les interfaces |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                                        | Description                                                                         |
|:-------------------------------------------------------|:------------------------------------------------------------------------------------|
| HW-Storage-Dell-Me4-Restapi-Controller-Statistics-Name | Découvre les contrôleurs et les supervise |
| HW-Storage-Dell-Me4-Restapi-Volume-Statistics-Name     | Découvre les volumes et les supervise |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Controller-Statistics" label="Controller-Statistics">

| Nom                                                   | Unité |
|:------------------------------------------------------|:------|
| *controllers*#controller.data.read.bytespersecond     | B/s   |
| *controllers*#controller.data.written.bytespersecond  | B/s   |
| reads                                                 | N/A   |
| writes                                                | N/A   |
| *controllers*#controller.data.transfer.bytespersecond | B/s   |
| *controllers*#controller.iops.count                   | ops   |
| *controllers*#controller.commands.forwarded.count     | count |
| *controllers*#controller.cache.write.usage.percentage | %     |
| write-cache-hits                                      | N/A   |
| write-cache-misses                                    | N/A   |
| read-cache-hits                                       | N/A   |
| read-cache-misses                                     | N/A   |
| *controllers*#controller.cpu.utilization.percentage   | %     |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name       | Description                                | Unité |
|:------------------|:-------------------------------------------|:------|
| controller status | Status/health/redundancy of the controller |       |
| disk status       | Status/health/state of the disk            |       |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Nom                                                        | Unité |
|:-----------------------------------------------------------|:------|
| port-status                                                | N/A   |
| *ports*~port.io.read.usage.iops                            | iops  |
| *ports*~port.io.write.usage.iops                           | iops  |
| *ports*~port.traffic.read.usage.bitspersecond              | b/s   |
| *ports*~port.traffic.write.usage.bitspersecond             | b/s   |
| *ports*~*interfaces*#port.interface.disparity.errors.count | count |
| *ports*~*interfaces*#port.interface.lost.dwords.count      | count |
| *ports*~*interfaces*#port.interface.invalid.dwords.count   | count |

</TabItem>
<TabItem value="Volume-Statistics" label="Volume-Statistics">

| Nom                                           | Unité |
|:----------------------------------------------|:------|
| *volumes*#volume.data.read.bytespersecond     | B/s   |
| *volumes*#volume.data.written.bytespersecond  | B/s   |
| reads                                         | N/A   |
| writes                                        | N/A   |
| *volumes*#volume.data.transfer.bytespersecond | B/s   |
| *volumes*#volume.iops.ops                     | ops   |
| *volumes*#volume.cache.write.usage.percentage | %     |
| write-cache-hits                              | N/A   |
| write-cache-misses                            | N/A   |
| read-cache-hits                               | N/A   |
| read-cache-misses                             | N/A   |

</TabItem>
</Tabs>

## Prérequis

Afin de superviser votre équipement Dell ME4, l'API Rest doit être configurée (cf: https://www.dell.com/support/manuals/fr-fr/powervault-me4024/me4_series_cli_pub/using-a-script-to-access-the-cli?guid=guid-9ae5ccd6-a207-42df-b2f3-1e02a487a354&lang=en-us)

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
dnf install centreon-pack-hardware-storage-dell-me4-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-dell-me4-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-dell-me4-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-dell-me4-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Dell Me4 Rest API**
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
dnf install centreon-plugin-Hardware-Storage-Dell-Me4-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Dell-Me4-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-dell-me4-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Me4-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-Dell-Me4-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                          | Valeur par défaut | Obligatoire |
|:----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME     | API username                                                                                         |                   | X           |
| APIPASSWORD     | API password                                                                                         |                   | X           |
| APIPROTO        | Specify https if needed                                                          | https             |             |
| APIPORT         | Port used                                                                            | 443               |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Controller-Statistics" label="Controller-Statistics">

| Macro                    | Description                                                                                        | Valeur par défaut | Obligatoire |
|:-------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME               | Filter controller name (can be a regexp)                                                           |                   |             |
| WARNINGCPUUTILIZATION    | Threshold                                                                                          |                   |             |
| CRITICALCPUUTILIZATION   | Threshold                                                                                          |                   |             |
| WARNINGDATAREAD          | Threshold                                                                                          |                   |             |
| CRITICALDATAREAD         | Threshold                                                                                          |                   |             |
| WARNINGDATATRANSFER      | Threshold                                                                                          |                   |             |
| CRITICALDATATRANSFER     | Threshold                                                                                          |                   |             |
| WARNINGDATAWRITTEN       | Threshold                                                                                          |                   |             |
| CRITICALDATAWRITTEN      | Threshold                                                                                          |                   |             |
| WARNINGFORWARDEDCMDS     | Threshold                                                                                          |                   |             |
| CRITICALFORWARDEDCMDS    | Threshold                                                                                          |                   |             |
| WARNINGIOPS              | Threshold                                                                                          |                   |             |
| CRITICALIOPS             | Threshold                                                                                          |                   |             |
| WARNINGREADCACHEHITS     | Threshold                                                                                          |                   |             |
| CRITICALREADCACHEHITS    | Threshold                                                                                          |                   |             |
| WARNINGREADCACHEMISSES   | Threshold                                                                                          |                   |             |
| CRITICALREADCACHEMISSES  | Threshold                                                                                          |                   |             |
| WARNINGREADS             | Threshold                                                                                          |                   |             |
| CRITICALREADS            | Threshold                                                                                          |                   |             |
| WARNINGWRITECACHEHITS    | Threshold                                                                                          |                   |             |
| CRITICALWRITECACHEHITS   | Threshold                                                                                          |                   |             |
| WARNINGWRITECACHEMISSES  | Threshold                                                                                          |                   |             |
| CRITICALWRITECACHEMISSES | Threshold                                                                                          |                   |             |
| WARNINGWRITECACHEUSED    | Threshold                                                                                          |                   |             |
| CRITICALWRITECACHEUSED   | Threshold                                                                                          |                   |             |
| WARNINGWRITES            | Threshold                                                                                          |                   |             |
| CRITICALWRITES           | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                                     | Valeur par défaut | Obligatoire |
|:-------------|:----------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'controller', 'disk', 'fan', 'fru', 'psu', 'sensor', 'volume' |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).              | --verbose         |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro                            | Description                                                                                                                                                                      | Valeur par défaut          | Obligatoire |
|:---------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------|:-----------:|
| UNKNOWNPORTSTATUS                | Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{health\}, %\{display\}  | %\{health\} =~ /unknown/i  |             |
| FILTERPORTNAME                   | Filter port name (can be a regexp)                                                                                                                                               |                            |             |
| WARNINGINTERFACEDISPARITYERRORS  | Threshold                                                                                                                                                                        |                            |             |
| CRITICALINTERFACEDISPARITYERRORS | Threshold                                                                                                                                                                        |                            |             |
| WARNINGINTERFACEINVALIDDWORDS    | Threshold                                                                                                                                                                        |                            |             |
| CRITICALINTERFACEINVALIDDWORDS   | Threshold                                                                                                                                                                        |                            |             |
| WARNINGINTERFACELOSTDWORDS       | Threshold                                                                                                                                                                        |                            |             |
| CRITICALINTERFACELOSTDWORDS      | Threshold                                                                                                                                                                        |                            |             |
| WARNINGPORTSTATUS                | Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /degraded/i'). You can use the following variables: %\{status\}, %\{health\}, %\{display\} | %\{health\} =~ /degraded/i |             |
| CRITICALPORTSTATUS               | Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /fault/i'). You can use the following variables: %\{status\}, %\{health\}, %\{display\}   | %\{health\} =~ /fault/i    |             |
| WARNINGREADIOPS                  | Threshold                                                                                                                                                                        |                            |             |
| CRITICALREADIOPS                 | Threshold                                                                                                                                                                        |                            |             |
| WARNINGREADTRAFFIC               | Threshold                                                                                                                                                                        |                            |             |
| CRITICALREADTRAFFIC              | Threshold                                                                                                                                                                        |                            |             |
| WARNINGWRITEIOPS                 | Threshold                                                                                                                                                                        |                            |             |
| CRITICALWRITEIOPS                | Threshold                                                                                                                                                                        |                            |             |
| WARNINGWRITETRAFFIC              | Threshold                                                                                                                                                                        |                            |             |
| CRITICALWRITETRAFFIC             | Threshold                                                                                                                                                                        |                            |             |
| EXTRAOPTIONS                     | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                               | --verbose                  |             |

</TabItem>
<TabItem value="Volume-Statistics" label="Volume-Statistics">

| Macro                     | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERNAME                | Filter volume name (can be a regexp)                                                               |                   |             |
| WARNINGDATAREAD           | Threshold                                                                                          |                   |             |
| CRITICALDATAREAD          | Threshold                                                                                          |                   |             |
| WARNINGDATATRANSFER       | Threshold                                                                                          |                   |             |
| CRITICALDATATRANSFER      | Threshold                                                                                          |                   |             |
| WARNINGDATAWRITTEN        | Threshold                                                                                          |                   |             |
| CRITICALDATAWRITTEN       | Threshold                                                                                          |                   |             |
| WARNINGIOPS               | Threshold                                                                                          |                   |             |
| CRITICALIOPS              | Threshold                                                                                          |                   |             |
| WARNINGREADCACHEHITS      | Threshold                                                                                          |                   |             |
| CRITICALREADCACHEHITS     | Threshold                                                                                          |                   |             |
| WARNINGREADCACHEMISSES    | Threshold                                                                                          |                   |             |
| CRITICALREADCACHEMISSES   | Threshold                                                                                          |                   |             |
| WARNINGREADS              | Threshold                                                                                          |                   |             |
| CRITICALREADS             | Threshold                                                                                          |                   |             |
| WARNINGWRITECACHEHITS     | Threshold                                                                                          |                   |             |
| CRITICALWRITECACHEHITS    | Threshold                                                                                          |                   |             |
| WARNINGWRITECACHEMISSES   | Threshold                                                                                          |                   |             |
| CRITICALWRITECACHEMISSES  | Threshold                                                                                          |                   |             |
| WARNINGWRITECACHEPERCENT  | Threshold                                                                                          |                   |             |
| CRITICALWRITECACHEPERCENT | Threshold                                                                                          |                   |             |
| WARNINGWRITES             | Threshold                                                                                          |                   |             |
| CRITICALWRITES            | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_dell_me4_restapi.pl \
	--plugin=storage::dell::me4::restapi::plugin \
	--mode=interfaces \
	--hostname='10.0.0.1' \
	--api-username='XXXX' \
	--api-password='XXXX' \
	--port='443' \
	--proto='https'  \
	--filter-port-name='' \
	--unknown-port-status='%\{health\} =~ /unknown/i' \
	--warning-port-status='%\{health\} =~ /degraded/i' \
	--critical-port-status='%\{health\} =~ /fault/i' \
	--warning-read-iops='' \
	--critical-read-iops='' \
	--warning-write-iops='' \
	--critical-write-iops='' \
	--warning-read-traffic='' \
	--critical-read-traffic='' \
	--warning-write-traffic='' \
	--critical-write-traffic='' \
	--warning-interface-disparity-errors='' \
	--critical-interface-disparity-errors='' \
	--warning-interface-lost-dwords='' \
	--critical-interface-lost-dwords='' \
	--warning-interface-invalid-dwords='' \
	--critical-interface-invalid-dwords='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: port 'A0' status: up [health: ok], read iops: 94.52, write iops: 161.11, read traffic: 1.29 Mb/s - All interfaces are ok | 'A0#port.io.read.usage.iops'=94.52iops;;;0; 'A0#port.io.write.usage.iops'=161.11iops;;;0; 'A0#port.traffic.read.usage.bitspersecond'=1287234b/s;;;0; 'A0~0#port.interface.disparity.errors.count'=0;;;0; 'A0~0#port.interface.lost.dwords.count'=0;;;0; 'A0~0#port.interface.invalid.dwords.count'=0;;;0; 'A0~1#port.interface.disparity.errors.count'=0;;;0; 'A0~1#port.interface.lost.dwords.count'=0;;;0; 'A0~1#port.interface.invalid.dwords.count'=0;;;0; 'A0~2#port.interface.disparity.errors.count'=0;;;0; 'A0~2#port.interface.lost.dwords.count'=0;;;0; 'A0~2#port.interface.invalid.dwords.count'=0;;;0; 'A0~3#port.interface.disparity.errors.count'=0;;;0; 'A0~3#port.interface.lost.dwords.count'=0;;;0; 'A0~3#port.interface.invalid.dwords.count'=0;;;0;
checking port 'A0'
    status: up [health: ok], read iops: 94.52, write iops: 161.11, read traffic: 1.29 Mb/s
    interface '0' disparity errors: 0, lost dwords: 0, invalid dwords: 0
    interface '1' disparity errors: 0, lost dwords: 0, invalid dwords: 0
    interface '2' disparity errors: 0, lost dwords: 0, invalid dwords: 0
    interface '3' disparity errors: 0, lost dwords: 0, invalid dwords: 0

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
/usr/lib/centreon/plugins/centreon_dell_me4_restapi.pl \
	--plugin=storage::dell::me4::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                                | Modèle de service associé                                |
|:----------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------------|
| controller-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/me4/restapi/mode/controllerstatistics.pm)] | HW-Storage-Dell-Me4-Controller-Statistics-Restapi-custom |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/me4/restapi/mode/hardware.pm)]                          | HW-Storage-Dell-Me4-Hardware-Restapi-custom              |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/me4/restapi/mode/interfaces.pm)]                      | HW-Storage-Dell-Me4-Interfaces-Restapi-custom            |
| list-controllers [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/me4/restapi/mode/listcontrollers.pm)]           | Used for service discovery                               |
| list-volumes [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/me4/restapi/mode/listvolumes.pm)]                   | Used for service discovery                               |
| volume-statistics [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/me4/restapi/mode/volumestatistics.pm)]         | HW-Storage-Dell-Me4-Volume-Statistics-Restapi-custom     |

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
| --custommode                               |   When a plugin offers several ways (CLI, library, etc.) to get information the desired one must be defined with this option.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --list-custommode                          |   List all available custom modes.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --multiple                                 |   Multiple custom mode objects. This may be required by some specific modes (advanced).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --pass-manager                             |   Define the password manager you want to use. Supported managers are: environment, file, keepass, hashicorpvault and teampass.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --verbose                                  |   Display extended status information (long output).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --debug                                    |   Display debug messages.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata                          |   Filter perfdata that match the regexp. Example: adding --filter-perfdata='avg' will remove all metrics that do not contain 'avg' from performance data.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --filter-perfdata-adv                      |   Filter perfdata based on a "if" condition using the following variables: label, value, unit, warning, critical, min, max. Variables must be written either %\{variable\} or %(variable). Example: adding --filter-perfdata-adv='not (%(value) == 0 and %(max) eq "")' will remove all metrics whose value equals 0 and that don't have a maximum value.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --explode-perfdata-max                     |   Create a new metric for each metric that comes with a maximum limit. The new metric will be named identically with a '\_max' suffix). Example: it will split 'used\_prct'=26.93%;0:80;0:90;0;100 into 'used\_prct'=26.93%;0:80;0:90;0;100 'used\_prct\_max'=100%;;;;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --change-perfdata --extend-perfdata        |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --change-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata                          |   Change or extend perfdata. Syntax: --extend-perfdata=searchlabel,newlabel,target\[,\[newuom\],\[min\],\[max\]\]  Common examples:  =over 4  Convert storage free perfdata into used: --change-perfdata='free,used,invert()'  Convert storage free perfdata into used: --change-perfdata='used,free,invert()'  Scale traffic values automatically: --change-perfdata='traffic,,scale(auto)'  Scale traffic values in Mbps: --change-perfdata='traffic\_in,,scale(Mbps),mbps'  Change traffic values in percent: --change-perfdata='traffic\_in,,percent()'  =back                                                                                                                                                                                                                                                                                                                                                                           |
| --extend-perfdata-group                    |   Add new aggregated metrics (min, max, average or sum) for groups of metrics defined by a regex match on the metrics' names. Syntax: --extend-perfdata-group=regex,namesofnewmetrics,calculation\[,\[newuom\],\[min\],\[max\]\] regex: regular expression namesofnewmetrics: how the new metrics' names are composed (can use $1, $2... for groups defined by () in regex). calculation: how the values of the new metrics should be calculated newuom (optional): unit of measure for the new metrics min (optional): lowest value the metrics can reach max (optional): highest value the metrics can reach  Common examples:  =over 4  Sum wrong packets from all interfaces (with interface need  --units-errors=absolute): --extend-perfdata-group=',packets\_wrong,sum(packets\_(discard\|error)\_(in\|out))'  Sum traffic by interface: --extend-perfdata-group='traffic\_in\_(.*),traffic\_$1,sum(traffic\_(in\|out)\_$1)'  =back   |
| --change-short-output --change-long-output |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-short-output                      |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --change-long-output                       |   Modify the short/long output that is returned by the plugin. Syntax: --change-short-output=pattern~replacement~modifier Most commonly used modifiers are i (case insensitive) and g (replace all occurrences). Example: adding --change-short-output='OK\~Up\~gi' will replace all occurrences of 'OK', 'ok', 'Ok' or 'oK' with 'Up'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
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
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --memcached                                |   Memcached server to use (only one server).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --redis-server                             |   Redis server to use (only one server). Syntax: address\[:port\]                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --redis-attribute                          |   Set Redis Options (--redis-attribute="cnx\_timeout=5").                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --redis-db                                 |   Set Redis database index.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --failback-file                            |   Fall back on a local file if Redis connection fails.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| --memexpiration                            |   Time to keep data in seconds (default: 86400).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-dir                            |   Define the cache directory (default: '/var/lib/centreon/centplugins').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| --statefile-suffix                         |   Define a suffix to customize the statefile name (default: '').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --statefile-concat-cwd                     |   If used with the '--statefile-dir' option, the latter's value will be used as a sub-directory of the current working directory. Useful on Windows when the plugin is compiled, as the file system and permissions are different from Linux.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| --statefile-format                         |   Define the format used to store the cache. Available formats: 'dumper', 'storable', 'json' (default).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| --statefile-key                            |   Define the key to encrypt/decrypt the cache.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| --statefile-cipher                         |   Define the cipher algorithm to encrypt the cache (default: 'AES').                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --hostname                                 |   Dell ME4 hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| --port                                     |   Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-username                             |   API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --api-password                             |   API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --digest-sha256                            |   New digest to use since firmware GT280R010-01 (md5 deprecated).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| --timeout                                  |   Set timeout in seconds (default: 10).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Controller-Statistics" label="Controller-Statistics">

| Option                   | Description                                                                                                                                                                                                                                  |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                  |
| --filter-name            |   Filter controller name (can be a regexp).                                                                                                                                                                                                  |
| --warning-* --critical-* |   Thresholds. Can be: 'data-read', 'data-written', 'reads', 'writes', 'data-transfer', 'iops', 'forwarded-cmds', 'write-cache-used', 'write-cache-hits', 'write-cache-misses', 'read-cache-hits', 'read-cache-misses', 'cpu-utilization'.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                                                    |
|:---------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'controller', 'disk', 'fan', 'fru', 'psu', 'sensor', 'volume'.                                                                                                                             |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='sensor,Overall Sensor'                                                                                                               |
| --absent-problem     |   Return an error if a component is not 'present' (default is skipping).  It can be set globally or for a specific instance: --absent-problem='component\_name' or --absent-problem='component\_name,instance\_value'.                         |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                                   |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='controller,OK,Operational but not redundant'   |
| --warning            |   Set warning threshold for 'temperature' (syntax: type,regexp,threshold) Example: --warning='temperature,.*,40'                                                                                                                               |
| --critical           |   Set critical threshold for 'temperature' (syntax: type,regexp,threshold) Example: --critical='temperature,.*,50'                                                                                                                             |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                 |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                                |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                   | Description                                                                                                                                                                          |
|:-------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                          |
| --filter-port-name       |   Filter port name (can be a regexp).                                                                                                                                                |
| --unknown-port-status    |   Define the conditions to match for the status to be UNKNOWN (default: '%\{status\} =~ /unknown/i'). You can use the following variables: %\{status\}, %\{health\}, %\{display\}    |
| --warning-port-status    |   Define the conditions to match for the status to be WARNING (default: '%\{status\} =~ /degraded/i'). You can use the following variables: %\{status\}, %\{health\}, %\{display\}   |
| --critical-port-status   |   Define the conditions to match for the status to be CRITICAL (default: '%\{status\} =~ /fault/i'). You can use the following variables: %\{status\}, %\{health\}, %\{display\}     |
| --warning-* --critical-* |   Thresholds. Can be: 'read-iops', 'write-iops', 'read-traffic', 'write-traffic', 'interface-disparity-errors', 'interface-lost-dwords', 'interface-invalid-dwords'.                 |

</TabItem>
<TabItem value="Volume-Statistics" label="Volume-Statistics">

| Option                   | Description                                                                                                                                                                                                |
|:-------------------------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                |
| --filter-name            |   Filter volume name (can be a regexp).                                                                                                                                                                    |
| --warning-* --critical-* |   Thresholds. Can be: 'data-read', 'data-written', 'reads', 'writes', 'data-transfer', 'iops', 'write-cache-percent', 'write-cache-hits', 'write-cache-misses', 'read-cache-hits', 'read-cache-misses'.    |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_dell_me4_restapi.pl \
	--plugin=storage::dell::me4::restapi::plugin \
	--mode=interfaces \
	--help
```
