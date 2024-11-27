---
id: network-vectra-restapi
title: Vectra Rest API
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Dépendances du connecteur de supervision

Les connecteurs de supervision suivants sont automatiquement installés lors de l'installation du connecteur **Vectra Rest API** 
depuis la page **Configuration > Gestionnaire de connecteurs de supervision** :
* [Base Pack](./base-generic.md)

## Contenu du pack

### Modèles

Le connecteur de supervision **Vectra Rest API** apporte un modèle d'hôte :

* **Net-Vectra-Restapi-custom**

Le connecteur apporte les modèles de service suivants
(classés selon le modèle d'hôte auquel ils sont rattachés) :

<Tabs groupId="sync">
<TabItem value="Net-Vectra-Restapi-custom" label="Net-Vectra-Restapi-custom">

| Alias  | Modèle de service                | Description                                               |
|:-------|:---------------------------------|:----------------------------------------------------------|
| Cpu    | Net-Vectra-Cpu-Restapi-custom    | Contrôle du taux d'utilisation du CPU de la machine       |
| Disk   | Net-Vectra-Disk-Restapi-custom   | Contrôle l'utilisation disque                             |
| Memory | Net-Vectra-Memory-Restapi-custom | Contrôle du taux d'utilisation mémoire                    |
| Uptime | Net-Vectra-Uptime-Restapi-custom | Durée depuis laquelle le serveur tourne sans interruption |

> Les services listés ci-dessus sont créés automatiquement lorsque le modèle d'hôte **Net-Vectra-Restapi-custom** est utilisé.

</TabItem>
<TabItem value="Non rattachés à un modèle d'hôte" label="Non rattachés à un modèle d'hôte">

| Alias      | Modèle de service                    | Description             | Découverte |
|:-----------|:-------------------------------------|:------------------------|:----------:|
| Interfaces | Net-Vectra-Interfaces-Restapi-custom | Contrôle les interfaces | X          |
| Sensors    | Net-Vectra-Sensors-Restapi-custom    | Contrôle les sondes     | X          |

> Les services listés ci-dessus ne sont pas créés automatiquement lorsqu'un modèle d'hôte est appliqué. Pour les utiliser, [créez un service manuellement](/docs/monitoring/basic-objects/services) et appliquez le modèle de service souhaité.

> Si la case **Découverte** est cochée, cela signifie qu'une règle de découverte de service existe pour ce service.

</TabItem>
</Tabs>

### Règles de découverte

#### Découverte de services

| Nom de la règle                   | Description                                                                                       |
|:----------------------------------|:--------------------------------------------------------------------------------------------------|
| Net-Vectra-Restapi-Interface-Name | Découvre les interfaces réseau en utilisant leur nom et supervise leur statut et leur utilisation |
| Net-Vectra-Restapi-Sensor-Name    | Découvre les sondes réseau et supervise l'utilisation                                             |

Rendez-vous sur la [documentation dédiée](/docs/monitoring/discovery/services-discovery)
pour en savoir plus sur la découverte automatique de services et sa [planification](/docs/monitoring/discovery/services-discovery/#règles-de-découverte).

### Métriques & statuts collectés

Voici le tableau des services pour ce connecteur, détaillant les métriques et statuts rattachés à chaque service.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Nom                        | Unité |
|:---------------------------|:------|
| cpu.utilization.percentage | %     |

</TabItem>
<TabItem value="Disk" label="Disk">

| Nom                   | Unité |
|:----------------------|:------|
| disk.usage.bytes      | B     |
| disk.free.bytes       | B     |
| disk.usage.percentage | %     |
| raid-status           | N/A   |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Nom                                               | Unité |
|:--------------------------------------------------|:------|
| interface-status                                  | N/A   |
| *interfaces*#interface.traffic.peak.bitspersecond | b/s   |

</TabItem>
<TabItem value="Memory" label="Memory">

| Nom                     | Unité |
|:------------------------|:------|
| memory.usage.bytes      | B     |
| memory.free.bytes       | B     |
| memory.usage.percentage | %     |
| dimm-status             | N/A   |

</TabItem>
<TabItem value="Sensors" label="Sensors">

| Nom                                                          | Unité |
|:-------------------------------------------------------------|:------|
| sensor-status                                                | N/A   |
| trafficdrop-status                                           | N/A   |
| connectivity-status                                          | N/A   |
| interface-status                                             | N/A   |
| interface-status                                             | N/A   |
| *sensors*~*interfaces1*#interface.traffic.peak.bitspersecond | b/s   |
| *sensors*~*interfaces2*#interface.traffic.peak.bitspersecond | b/s   |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Nom                   | Unité |
|:----------------------|:------|
| system.uptime.seconds | s     |

</TabItem>
</Tabs>

## Prérequis

Le Pack utilise les endpoints d'API suivants qui doivent être requêtables par le collecteur Centreon :
* /health/connectivity
* /health/cpu
* /health/disk
* /health/memory
* /health/sensors
* /health/system
* /health/trafficdrop

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
dnf install centreon-pack-network-vectra-restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-pack-network-vectra-restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-pack-network-vectra-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-pack-network-vectra-restapi
```

</TabItem>
</Tabs>

2. Quel que soit le type de la licence (*online* ou *offline*), installez le connecteur **Vectra Rest API**
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
dnf install centreon-plugin-Network-Vectra-Restapi
```

</TabItem>
<TabItem value="Alma / RHEL / Oracle Linux 9" label="Alma / RHEL / Oracle Linux 9">

```bash
dnf install centreon-plugin-Network-Vectra-Restapi
```

</TabItem>
<TabItem value="Debian 11 & 12" label="Debian 11 & 12">

```bash
apt install centreon-plugin-network-vectra-restapi
```

</TabItem>
<TabItem value="CentOS 7" label="CentOS 7">

```bash
yum install centreon-plugin-Network-Vectra-Restapi
```

</TabItem>
</Tabs>

## Utiliser le connecteur de supervision

### Utiliser un modèle d'hôte issu du connecteur

1. Ajoutez un hôte à Centreon depuis la page **Configuration > Hôtes**.
2. Complétez les champs **Nom**, **Alias** & **IP Address/DNS** correspondant à votre ressource.
3. Appliquez le modèle d'hôte **Net-Vectra-Restapi-custom**. Une liste de macros apparaît. Les macros vous permettent de définir comment le connecteur se connectera à la ressource, ainsi que de personnaliser le comportement du connecteur.
4. Renseignez les macros désirées. Attention, certaines macros sont obligatoires.

| Macro           | Description                                                                                                                                        | Valeur par défaut | Obligatoire |
|:----------------|:---------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| APITOKEN        | API token                                                                                                                                          |                   | X           |
| APIPROTO        | Specify https if needed                                                                                                                            | https             |             |
| APIPORT         | Port used                                                                                                                                          | 443               |             |
| APIEXTRAOPTIONS | Any extra option you may want to add to every command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

5. [Déployez la configuration](/docs/monitoring/monitoring-servers/deploying-a-configuration). L'hôte apparaît dans la liste des hôtes supervisés, et dans la page **Statut des ressources**. La commande envoyée par le connecteur est indiquée dans le panneau de détails de l'hôte : celle-ci montre les valeurs des macros.

### Utiliser un modèle de service issu du connecteur

1. Si vous avez utilisé un modèle d'hôte et coché la case **Créer aussi les services liés aux modèles**, les services associés au modèle ont été créés automatiquement, avec les modèles de services correspondants. Sinon, [créez les services désirés manuellement](/docs/monitoring/basic-objects/services) et appliquez-leur un modèle de service.
2. Renseignez les macros désirées (par exemple, ajustez les seuils d'alerte). Les macros indiquées ci-dessous comme requises (**Obligatoire**) doivent être renseignées.

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Macro                  | Description                                                                                                                                      | Valeur par défaut | Obligatoire |
|:-----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| WARNINGCPUUTILIZATION  | Threshold                                                                                                                                        |                   |             |
| CRITICALCPUUTILIZATION | Threshold                                                                                                                                        |                   |             |
| EXTRAOPTIONS           | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). |                   |             |

</TabItem>
<TabItem value="Disk" label="Disk">

| Macro                 | Description                                                                                                                                      | Valeur par défaut  | Obligatoire |
|:----------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| WARNINGDISKUSAGE      | Threshold                                                                                                                                        |                    |             |
| CRITICALDISKUSAGE     | Threshold                                                                                                                                        |                    |             |
| WARNINGDISKUSAGEFREE  | Threshold                                                                                                                                        |                    |             |
| CRITICALDISKUSAGEFREE | Threshold                                                                                                                                        |                    |             |
| WARNINGDISKUSAGEPRCT  | Threshold                                                                                                                                        |                    |             |
| CRITICALDISKUSAGEPRCT | Threshold                                                                                                                                        |                    |             |
| CRITICALRAIDSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}                            | %{status} !~ /ok/i |             |
| WARNINGRAIDSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                             |                    |             |
| EXTRAOPTIONS          | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose          |             |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Macro                        | Description                                                                                                                                      | Valeur par défaut    | Obligatoire |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------|:-----------:|
| FILTERINTERFACENAME          | Filter interfaces by name (can be a regexp)                                                                                                      |                      |             |
| WARNINGINTERFACEPEAKTRAFFIC  | Threshold                                                                                                                                        |                      |             |
| CRITICALINTERFACEPEAKTRAFFIC | Threshold                                                                                                                                        |                      |             |
| CRITICALINTERFACESTATUS      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}                            | %{status} =~ /down/i |             |
| WARNINGINTERFACESTATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                             |                      |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose            |             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Macro                   | Description                                                                                                                                      | Valeur par défaut  | Obligatoire |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------|:-----------:|
| CRITICALDIMMSTATUS      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}                            | %{status} !~ /ok/i |             |
| WARNINGDIMMSTATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                             |                    |             |
| WARNINGMEMORYUSAGE      | Threshold                                                                                                                                        |                    |             |
| CRITICALMEMORYUSAGE     | Threshold                                                                                                                                        |                    |             |
| WARNINGMEMORYUSAGEFREE  | Threshold                                                                                                                                        |                    |             |
| CRITICALMEMORYUSAGEFREE | Threshold                                                                                                                                        |                    |             |
| WARNINGMEMORYUSAGEPRCT  | Threshold                                                                                                                                        |                    |             |
| CRITICALMEMORYUSAGEPRCT | Threshold                                                                                                                                        |                    |             |
| EXTRAOPTIONS            | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose          |             |

</TabItem>
<TabItem value="Sensors" label="Sensors">

| Macro                        | Description                                                                                                                                      | Valeur par défaut                                 | Obligatoire |
|:-----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------|:-----------:|
| UNKNOWNCONNECTIVITYSTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{connectivityStatus}, %{name}                 | %{connectivityStatus} =~ /unknown/i               |             |
| FILTERSENSORNAME             | Filter sensors by name (can be a regexp)                                                                                                         |                                                   |             |
| WARNINGCONNECTIVITYSTATUS    | Define the conditions to match for the status to be WARNING. You can use the following variables: %{connectivityStatus}, %{name}                 | %{connectivityStatus} =~ /warning/i               |             |
| CRITICALCONNECTIVITYSTATUS   | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{connectivityStatus}, %{name}                | %{connectivityStatus} =~ /critical/i              |             |
| WARNINGINTERFACEPEAKTRAFFIC  | Threshold                                                                                                                                        |                                                   |             |
| CRITICALINTERFACEPEAKTRAFFIC | Threshold                                                                                                                                        |                                                   |             |
| CRITICALINTERFACESTATUS      | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{interfaceName}, %{sensorName}    | %{connectivityStatus} =~ /critical/i              |             |
| WARNINGINTERFACESTATUS       | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{interfaceName}, %{sensorName}     |                                                   |             |
| CRITICALSENSORSTATUS         | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{status}, %{name}                            | %{status} !~ /^paired/i                           |             |
| WARNINGSENSORSTATUS          | Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                             |                                                   |             |
| WARNINGTRAFFICDROPSTATUS     | Define the conditions to match for the status to be WARNING. You can use the following variables: %{trafficDropStatus}, %{name}                  | %{trafficDropStatus} =~ /warning\|unknown\|skip/i |             |
| CRITICALTRAFFICDROPSTATUS    | Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{trafficDropStatus}, %{name}                 |                                                   |             |
| EXTRAOPTIONS                 | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles). | --verbose                                         |             |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Macro          | Description                                                                                                                                                           | Valeur par défaut | Obligatoire |
|:---------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|:-----------:|
| UNIT           | Select the time unit for the performance data and thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds |                   |             |
| WARNINGUPTIME  | Threshold                                                                                                                                                             |                   |             |
| CRITICALUPTIME | Threshold                                                                                                                                                             |                   |             |
| EXTRAOPTIONS   | Any extra option you may want to add to the command (a --verbose flag for example). Toutes les options sont listées [ici](#options-disponibles).                      |                   |             |

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
/usr/lib/centreon/plugins/centreon_vectra_restapi.pl \
	--plugin=network::vectra::restapi::plugin \
	--mode=memory \
	--hostname='10.0.0.1' \
	--port='443' \
	--proto='https' \
	--token='XXXX'  \
	--warning-dimm-status='%{status} !~ /ok/i' \
	--critical-dimm-status='' \
	--warning-memory-usage='' \
	--critical-memory-usage='' \
	--warning-memory-usage-free='' \
	--critical-memory-usage-free='' \
	--warning-memory-usage-prct='' \
	--critical-memory-usage-prct='' \
	--verbose
```

La commande devrait retourner un message de sortie similaire à :

```bash
OK: Ram total: 187.39 GB used (-buffers/cache): 85.47 GB (45.61%) free: 59.08 GB (31.53%) - All dimm are ok | 'memory.usage.bytes'=91772731392B;;;0;201210691584 'memory.free.bytes'=63436963840B;;;0;201210691584 'memory.usage.percentage'=45.61%;;;0;100
Dimm 'mc0' status: ok
Dimm 'mc1' status: ok
Dimm 'mc2' status: ok
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
/usr/lib/centreon/plugins/centreon_vectra_restapi.pl \
	--plugin=network::vectra::restapi::plugin \
	--list-mode
```

Le plugin apporte les modes suivants :

| Mode                                                                                                                                  | Modèle de service associé            |
|:--------------------------------------------------------------------------------------------------------------------------------------|:-------------------------------------|
| cpu [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/cpu.pm)]                        | Net-Vectra-Cpu-Restapi-custom        |
| disk [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/disk.pm)]                      | Net-Vectra-Disk-Restapi-custom       |
| interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/interfaces.pm)]          | Net-Vectra-Interfaces-Restapi-custom |
| list-interfaces [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/listinterfaces.pm)] | Used for service discovery           |
| list-sensors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/listsensors.pm)]       | Used for service discovery           |
| memory [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/memory.pm)]                  | Net-Vectra-Memory-Restapi-custom     |
| sensors [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/sensors.pm)]                | Net-Vectra-Sensors-Restapi-custom    |
| uptime [[code](https://github.com/centreon/centreon-plugins/blob/develop/src/network/vectra/restapi/mode/uptime.pm)]                  | Net-Vectra-Uptime-Restapi-custom     |

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
| --filter-counters                          |   Only display some counters (regexp can be used). Example to check SSL connections only : --filter-counters='^xxxx\|yyyy$'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| --http-peer-addr                           |   Set the address you want to connect to. Useful if hostname is only a vhost, to avoid IP resolution.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| --proxyurl                                 |   Proxy URL. Example: http://my.proxy:3128                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proxypac                                 |   Proxy pac file (can be a URL or a local file).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| --insecure                                 |   Accept insecure SSL connections.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| --http-backend                             |   Perl library to use for HTTP transactions. Possible values are: lwp (default) and curl.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| --hostname                                 |   Set hostname.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| --port                                     |   Port used (default: 443)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --proto                                    |   Specify https if needed (default: 'https')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --token                                    |   API token.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| --timeout                                  |   Set timeout in seconds (default: 50).                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |

#### Options des modes

Les options disponibles pour chaque modèle de services sont listées ci-dessous :

<Tabs groupId="sync">
<TabItem value="Cpu" label="Cpu">

| Option                   | Description                                     |
|:-------------------------|:------------------------------------------------|
| --warning-* --critical-* |   Thresholds. Can be: 'cpu-utilization' (%).    |

</TabItem>
<TabItem value="Disk" label="Disk">

| Option                   | Description                                                                                                                                               |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-raid-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                    |
| --warning-raid-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                    |
| --critical-raid-status   |   Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{name}   |
| --warning-* --critical-* |   Thresholds. Can be: 'disk-usage', 'disk-usage-free', 'disk-usage-prct'                                                                                  |

</TabItem>
<TabItem value="Interfaces" label="Interfaces">

| Option                      | Description                                                                                                                                                 |
|:----------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-interface-name     |   Filter interfaces by name (can be a regexp).                                                                                                              |
| --unknown-interface-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                      |
| --warning-interface-status  |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                      |
| --critical-interface-status |   Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /down/i'). You can use the following variables: %{status}, %{name}   |
| --warning-* --critical-*    |   Thresholds. Can be: 'interface-peak-traffic'.                                                                                                             |

</TabItem>
<TabItem value="Memory" label="Memory">

| Option                   | Description                                                                                                                                               |
|:-------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------|
| --unknown-dimm-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                    |
| --warning-dimm-status    |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                    |
| --critical-dimm-status   |   Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /ok/i'). You can use the following variables: %{status}, %{name}   |
| --warning-* --critical-* |   Thresholds. Can be: 'memory-usage', 'memory-usage-free', 'memory-usage-prct'                                                                            |

</TabItem>
<TabItem value="Sensors" label="Sensors">

| Option                         | Description                                                                                                                                                                                        |
|:-------------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --filter-sensor-name           |   Filter sensors by name (can be a regexp).                                                                                                                                                        |
| --unknown-sensor-status        |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                                                             |
| --warning-sensor-status        |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{name}                                                                             |
| --critical-sensor-status       |   Define the conditions to match for the status to be CRITICAL (default: '%{status} !~ /^paired/i'). You can use the following variables: %{status}, %{name}                                       |
| --unknown-trafficdrop-status   |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{trafficDropStatus}, %{name}                                                                  |
| --warning-trafficdrop-status   |   Define the conditions to match for the status to be WARNING (default: '%{trafficDropStatus} =~ /warning\|unknown\|skip/i'). You can use the following variables: %{trafficDropStatus}, %{name}   |
| --critical-trafficdrop-status  |   Define the conditions to match for the status to be CRITICAL. You can use the following variables: %{trafficDropStatus}, %{name}                                                                 |
| --unknown-connectivity-status  |   Define the conditions to match for the status to be WARNING (default: '%{connectivityStatus} =~ /unknown/i'). You can use the following variables: %{connectivityStatus}, %{name}                |
| --warning-connectivity-status  |   Define the conditions to match for the status to be WARNING (default: '%{connectivityStatus} =~ /warning/i'). You can use the following variables: %{connectivityStatus}, %{name}                |
| --critical-connectivity-status |   Define the conditions to match for the status to be CRITICAL (default: '%{connectivityStatus} =~ /critical/i'). You can use the following variables: %{connectivityStatus}, %{name}              |
| --unknown-interface-status     |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{interfaceName}, %{sensorName}                                                     |
| --warning-interface-status     |   Define the conditions to match for the status to be WARNING. You can use the following variables: %{status}, %{interfaceName}, %{sensorName}                                                     |
| --critical-interface-status    |   Define the conditions to match for the status to be CRITICAL (default: '%{status} =~ /down/i'). You can use the following variables: %{status}, %{interfaceName}, %{sensorName}                  |
| --warning-* --critical-*       |   Thresholds. Can be: 'interface-peak-traffic'.                                                                                                                                                    |

</TabItem>
<TabItem value="Uptime" label="Uptime">

| Option                   | Description                                                                                                                                                                |
|:-------------------------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| --add-system-info        |   Display model and firmware informations                                                                                                                                  |
| --unit                   |   Select the time unit for the performance data and thresholds. May be 's' for seconds, 'm' for minutes, 'h' for hours, 'd' for days, 'w' for weeks. Default is seconds.   |
| --warning-* --critical-* |   Thresholds. Can be: 'uptime'.                                                                                                                                            |

</TabItem>
</Tabs>

Pour un mode, la liste de toutes les options disponibles et leur signification peut être
affichée en ajoutant le paramètre `--help` à la commande :

```bash
/usr/lib/centreon/plugins/centreon_vectra_restapi.pl \
	--plugin=network::vectra::restapi::plugin \
	--mode=sensors \
	--help
```
