---
id: hardware-storage-dell-powerstore-restapi
title: Dell PowerStore Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Dell PowerStore Rest API**
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Dell PowerStore Rest API** apporte un modèle d'hôte :

* **HW-Storage-Dell-Powerstore-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="HW-Storage-Dell-Powerstore-Restapi-custom" label="HW-Storage-Dell-Powerstore-Restapi-custom">

| Alias    | Modèle de service                                  | Description                            |
|:---------|:---------------------------------------------------|:---------------------------------------|
| Alerts   | HW-Storage-Dell-Powerstore-Alerts-Restapi-custom   | Contrôle les alertes                   |
| Clusters | HW-Storage-Dell-Powerstore-Clusters-Restapi-custom | Contrôle les performances des clusters |
| Hardware | HW-Storage-Dell-Powerstore-Hardware-Restapi-custom | Contrôle le matériel                   |
| Memory   | HW-Storage-Dell-Powerstore-Memory-Restapi-custom   | Contrôle la mémoire                    |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **HW-Storage-Dell-Powerstore-Restapi-custom** est utilisé.

</TabItem>
</Tabs>

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Nom                            | Unité |
|:-------------------------------|:------|
| alerts.severity.none.count     | count |
| alerts.severity.info.count     | count |
| alerts.severity.minor.count    | count |
| alerts.severity.major.count    | count |
| alerts.severity.critical.count | count |
| status                         | N/A   |

</TabItem>
<TabItem value="Clusters" label="Clusters">

| Nom                     | Unité |
|:------------------------|:------|
| clusters.detected.count | count |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Metric name         | Unité |
|:--------------------|:------|
| appliance status    |       |
| battery status      |       |
| dimm status         |       |
| disk status         |       |
| enclosure status    |       |
| fan status          |       |
| node status         |       |
| io module status    |       |
| power supply status |       |
| sfp status          |       |

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                               | Unité |
|:----------------------------------|:------|
| *memory1*#memory.usage.bytes      | B     |
| *memory2*#memory.usage.bytes      | B     |
| *memory1*#memory.free.bytes       | B     |
| *memory2*#memory.free.bytes       | B     |
| *memory1*#memory.usage.percentage | %     |
| *memory2*#memory.usage.percentage | %     |

</TabItem>
</Tabs>

## Prérequis

Afin de superviser votre équipement Dell PowerStore, l'API Rest doit être configurée (cf: https://downloads.dell.com/manuals/common/pwrstr-apig_en-us.pdf).

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
dnf install centreon-pack-hardware-storage-dell-powerstore-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-hardware-storage-dell-powerstore-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-hardware-storage-dell-powerstore-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-hardware-storage-dell-powerstore-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Dell PowerStore Rest API**
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
dnf install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-hardware-storage-dell-powerstore-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Hardware-Storage-Dell-Powerstore-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **HW-Storage-Dell-Powerstore-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                          | Valeur par défaut | Obligatoire |
|:----------------|:-----------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APIUSERNAME     | API username                                                                                         |                   | X           |
| APIPASSWORD     | API password                                                                                         |                   | X           |
| APIPROTO        | Specify https if needed (default: 'https')                                                           | https             |             |
| APIPORT         | Port used (default: 443)                                                                             | 443               |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

| Macro                    | Description                                                                                                                                                                                                                     | Valeur par défaut                   | Obligatoire |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------------------------|:-----------:|
| FILTERNAME               | Filter alerts by name (can be a regexp)                                                                                                                                                                                         |                                     |             |
| WARNINGSEVERITYCRITICAL  | Threshold                                                                                                                                                                                                                       |                                     |             |
| CRITICALSEVERITYCRITICAL | Threshold                                                                                                                                                                                                                       |                                     |             |
| WARNINGSEVERITYINFO      | Threshold                                                                                                                                                                                                                       |                                     |             |
| CRITICALSEVERITYINFO     | Threshold                                                                                                                                                                                                                       |                                     |             |
| WARNINGSEVERITYMAJOR     | Threshold                                                                                                                                                                                                                       |                                     |             |
| CRITICALSEVERITYMAJOR    | Threshold                                                                                                                                                                                                                       |                                     |             |
| WARNINGSEVERITYMINOR     | Threshold                                                                                                                                                                                                                       |                                     |             |
| CRITICALSEVERITYMINOR    | Threshold                                                                                                                                                                                                                       |                                     |             |
| WARNINGSEVERITYNONE      | Threshold                                                                                                                                                                                                                       |                                     |             |
| CRITICALSEVERITYNONE     | Threshold                                                                                                                                                                                                                       |                                     |             |
| WARNINGSTATUS            | Define the conditions to match for the status to be WARNING (default: '%\{severity\} =~ /minor/i') You can use the following variables: %\{severity\}, %\{resource\}, %\{name\}, %\{timeraised\}, %\{acknowledged\}             | %\{severity\} =~ /minor/i           |             |
| CRITICALSTATUS           | Define the conditions to match for the status to be CRITICAL (default: '%\{severity\} =~ /major\|critical/i'). You can use the following variables: %\{severity\}, %\{resource\}, %\{name\}, %\{timeraised\}, %\{acknowledged\} | %\{severity\} =~ /major\|critical/i |             |
| EXTRAOPTIONS             | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                                                                                                              | --verbose                           |             |

</TabItem>
<TabItem value="Clusters" label="Clusters">

| Macro                     | Description                                                                                        | Valeur par défaut | Obligatoire |
|:--------------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERID                  | Filter clusters by id                                                                              |                   |             |
| WARNINGCLUSTERSDETECTED   | Threshold                                                                                          |                   |             |
| CRITICALCLUSTERSDETECTED  | Threshold                                                                                          |                   |             |
| WARNINGREADBANDWIDTH1H    | Threshold                                                                                          |                   |             |
| CRITICALREADBANDWIDTH1H   | Threshold                                                                                          |                   |             |
| WARNINGREADBANDWIDTH24H   | Threshold                                                                                          |                   |             |
| CRITICALREADBANDWIDTH24H  | Threshold                                                                                          |                   |             |
| WARNINGREADBANDWIDTH30M   | Threshold                                                                                          |                   |             |
| CRITICALREADBANDWIDTH30M  | Threshold                                                                                          |                   |             |
| WARNINGREADBANDWIDTH5M    | Threshold                                                                                          |                   |             |
| CRITICALREADBANDWIDTH5M   | Threshold                                                                                          |                   |             |
| WARNINGREADIOPS1H         | Threshold                                                                                          |                   |             |
| CRITICALREADIOPS1H        | Threshold                                                                                          |                   |             |
| WARNINGREADIOPS24H        | Threshold                                                                                          |                   |             |
| CRITICALREADIOPS24H       | Threshold                                                                                          |                   |             |
| WARNINGREADIOPS30M        | Threshold                                                                                          |                   |             |
| CRITICALREADIOPS30M       | Threshold                                                                                          |                   |             |
| WARNINGREADIOPS5M         | Threshold                                                                                          |                   |             |
| CRITICALREADIOPS5M        | Threshold                                                                                          |                   |             |
| WARNINGREADLATENCY1H      | Threshold                                                                                          |                   |             |
| CRITICALREADLATENCY1H     | Threshold                                                                                          |                   |             |
| WARNINGREADLATENCY24H     | Threshold                                                                                          |                   |             |
| CRITICALREADLATENCY24H    | Threshold                                                                                          |                   |             |
| WARNINGREADLATENCY30M     | Threshold                                                                                          |                   |             |
| CRITICALREADLATENCY30M    | Threshold                                                                                          |                   |             |
| WARNINGREADLATENCY5M      | Threshold                                                                                          |                   |             |
| CRITICALREADLATENCY5M     | Threshold                                                                                          |                   |             |
| WARNINGWRITEBANDWIDTH1H   | Threshold                                                                                          |                   |             |
| CRITICALWRITEBANDWIDTH1H  | Threshold                                                                                          |                   |             |
| WARNINGWRITEBANDWIDTH24H  | Threshold                                                                                          |                   |             |
| CRITICALWRITEBANDWIDTH24H | Threshold                                                                                          |                   |             |
| WARNINGWRITEBANDWIDTH30M  | Threshold                                                                                          |                   |             |
| CRITICALWRITEBANDWIDTH30M | Threshold                                                                                          |                   |             |
| WARNINGWRITEBANDWIDTH5M   | Threshold                                                                                          |                   |             |
| CRITICALWRITEBANDWIDTH5M  | Threshold                                                                                          |                   |             |
| WARNINGWRITEIOPS1H        | Threshold                                                                                          |                   |             |
| CRITICALWRITEIOPS1H       | Threshold                                                                                          |                   |             |
| WARNINGWRITEIOPS24H       | Threshold                                                                                          |                   |             |
| CRITICALWRITEIOPS24H      | Threshold                                                                                          |                   |             |
| WARNINGWRITEIOPS30M       | Threshold                                                                                          |                   |             |
| CRITICALWRITEIOPS30M      | Threshold                                                                                          |                   |             |
| WARNINGWRITEIOPS5M        | Threshold                                                                                          |                   |             |
| CRITICALWRITEIOPS5M       | Threshold                                                                                          |                   |             |
| WARNINGWRITELATENCY1H     | Threshold                                                                                          |                   |             |
| CRITICALWRITELATENCY1H    | Threshold                                                                                          |                   |             |
| WARNINGWRITELATENCY24H    | Threshold                                                                                          |                   |             |
| CRITICALWRITELATENCY24H   | Threshold                                                                                          |                   |             |
| WARNINGWRITELATENCY30M    | Threshold                                                                                          |                   |             |
| CRITICALWRITELATENCY30M   | Threshold                                                                                          |                   |             |
| WARNINGWRITELATENCY5M     | Threshold                                                                                          |                   |             |
| CRITICALWRITELATENCY5M    | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS              | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Macro        | Description                                                                                                                                    | Valeur par défaut | Obligatoire |
|:-------------|:-----------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| COMPONENT    | Which component to check (default: '.*'). Can be: 'appliance', 'battery', 'dimm', 'disk', 'enclosure', 'fan', 'node', 'iomodule', 'psu', 'sfp' |                   |             |
| EXTRAOPTIONS | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                                             | --verbose         |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro             | Description                                                                                        | Valeur par défaut | Obligatoire |
|:------------------|:---------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| FILTERAPPLIANCEID | Filter appliance ID                                                                                |                   |             |
| WARNINGUSAGE      | Threshold                                                                                          |                   |             |
| CRITICALUSAGE     | Threshold                                                                                          |                   |             |
| WARNINGUSAGEFREE  | Threshold                                                                                          |                   |             |
| CRITICALUSAGEFREE | Threshold                                                                                          |                   |             |
| WARNINGUSAGEPRCT  | Threshold                                                                                          |                   |             |
| CRITICALUSAGEPRCT | Threshold                                                                                          |                   |             |
| EXTRAOPTIONS      | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose         |             |

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
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
	--plugin=storage::dell::powerstore::restapi::plugin \
	--mode=memory \
	--hostname='10.0.0.1' \
	--api-username='xxxxxx' \
	--api-password='xxxxxx' \
	--port='443' \
	--proto='https'  \
	--filter-appliance-id='' \
	--warning-usage='' \
	--critical-usage='' \
	--warning-usage-free='' \
	--critical-usage-free='' \
	--warning-usage-prct='' \
	--critical-usage-prct='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: All appliances memory usage are ok | 'memory1#memory.usage.bytes'=40486B;;;0;total 'memory2#memory.usage.bytes'=28727B;;;0;total 'memory1#memory.free.bytes'=35247B;;;0;total 'memory2#memory.free.bytes'=24088B;;;0;total 'memory1#memory.usage.percentage'=90297%;;;0;100 'memory2#memory.usage.percentage'=40201%;;;0;100
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
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
	--plugin=storage::dell::powerstore::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                              | Modèle de service associé                          |
|:----------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| alerts [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/powerstore/restapi/mode/alerts.pm)]     | HW-Storage-Dell-Powerstore-Alerts-Restapi-custom   |
| clusters [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/powerstore/restapi/mode/clusters.pm)] | HW-Storage-Dell-Powerstore-Clusters-Restapi-custom |
| hardware [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/powerstore/restapi/mode/hardware.pm)] | HW-Storage-Dell-Powerstore-Hardware-Restapi-custom |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/storage/dell/powerstore/restapi/mode/memory.pm)]     | HW-Storage-Dell-Powerstore-Memory-Restapi-custom   |

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
| --hostname                                 |   Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --port                                     |   Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --api-username                             |   API username.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --api-password                             |   API password.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --timeout                                  |   Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Alerts" label="Alerts">

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
| --filter-name            |   Filter alerts by name (can be a regexp).                                                                                                                                                                                                      |
| --warning-status         |   Define the conditions to match for the status to be WARNING (default: '%\{severity\} =~ /minor/i') You can use the following variables: %\{severity\}, %\{resource\}, %\{name\}, %\{timeraised\}, %\{acknowledged\}                           |
| --critical-status        |   Define the conditions to match for the status to be CRITICAL (default: '%\{severity\} =~ /major\|critical/i'). You can use the following variables: %\{severity\}, %\{resource\}, %\{name\}, %\{timeraised\}, %\{acknowledged\}               |
| --warning-* --critical-* |   Thresholds. Can be: 'severity-none', 'severity-info', 'severity-minor', 'severity-major', 'severity-critical'.                                                                                                                                |
| --memory                 |   Only check new alarms.                                                                                                                                                                                                                        |

</TabItem>
<TabItem value="Clusters" label="Clusters">

| Option                   | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                           |
| --filter-id              |   Filter clusters by id.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --warning-* --critical-* |   Thresholds. Can be: 'clusters-detected', 'read-iops-5m', 'read-iops-30m', 'read-iops-1h', 'read-iops-24h', 'write-iops-5m', 'write-iops-30m', 'write-iops-1h', 'write-iops-24h', 'read-latency-5m', 'read-latency-30m', 'read-latency-1h', 'read-latency-24h', 'write-latency-5m', 'write-latency-30m', 'write-latency-1h', 'write-latency-24h', 'read-bandwidth-5m', 'read-bandwidth-30m', 'read-bandwidth-1h', 'read-bandwidth-24h', 'write-bandwidth-5m', 'write-bandwidth-30m', 'write-bandwidth-1h', 'write-bandwidth-24h'.    |

</TabItem>
<TabItem value="Hardware" label="Hardware">

| Option               | Description                                                                                                                                                                                                                     |
|:---------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --component          |   Which component to check (default: '.*'). Can be: 'appliance', 'battery', 'dimm', 'disk', 'enclosure', 'fan', 'node', 'iomodule', 'psu', 'sfp'.                                                                               |
| --filter             |   Exclude some parts (comma separated list) You can also exclude items from specific instances: --filter='disk,26018c5b69264a868e49119eec95b0a9'                                                                                |
| --absent-problem     |   Return an error if an entity is 'Empty' (default is skipping) Can be specific or global: --absent-problem="fan,c41c5a99937e4953a180c65756f303f6"                                                                              |
| --no-component       |   Define the expected status if no components are found (default: critical).                                                                                                                                                    |
| --threshold-overload |   Use this option to override the status returned by the plugin when the status label matches a regular expression (syntax: section,\[instance,\]status,regexp). Example: --threshold-overload='disk,CRITICAL,Uninitialized'    |
| --warning            |   Define the warning threshold for temperatures (syntax: type,instance,threshold) Example: --warning='temperature,.*,30'                                                                                                        |
| --critical           |   Define the critical threshold for temperatures (syntax: type,instance,threshold) Example: --critical='temperature,.*,40'                                                                                                      |
| --warning-count-*    |   Define the warning threshold for the number of components of one type (replace '*' with the component type).                                                                                                                  |
| --critical-count-*   |   Define the critical threshold for the number of components of one type (replace '*' with the component type).                                                                                                                 |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                   |
|:-------------------------|:------------------------------------------------------------------------------------------------------------------------------|
| --filter-counters        |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'   |
| --filter-appliance-id    |   Filter appliance ID.                                                                                                        |
| --warning-* --critical-* |   Thresholds. Can be: 'usage' (B), 'usage-free' (B), 'usage-prct' (%).                                                        |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_dell_powerstore_restapi.pl \
	--plugin=storage::dell::powerstore::restapi::plugin \
	--mode=memory \
	--help
```
